// 通用同步器：把 _vault_test（构建产物）同步到已安装库。
// - 只覆盖/新增内容不同的文件，不删除库里的任何东西（保留 .obsidian 与用户自己的文件）
// - 用法: node sync-vault.mjs          仅报告差异（dry run）
//         node sync-vault.mjs --apply  执行同步
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'D:/Files/Deepseek workplace/_vault_test';
const DST = 'D:/Files/考研数学线性代数/线代知识网';
const apply = process.argv.includes('--apply');
const SKIP = new Set(['.obsidian', '.trash']);

function walk(root, sub = '') {
  const out = [];
  for (const e of fs.readdirSync(path.join(root, sub), { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const rel = sub ? `${sub}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walk(root, rel));
    else out.push(rel);
  }
  return out;
}
const hash = p => { try { return fs.statSync(p).size + ':' + require_hash(p); } catch { return null; } };
import crypto from 'node:crypto';
function require_hash(p) { return crypto.createHash('sha1').update(fs.readFileSync(p)).digest('hex'); }

// 画布按"内容"比较：Obsidian 打开画布后会用自己的格式重写文件（压缩 + Tab 缩进），
// 字节不同但内容一样，不该算变更（否则每次同步都会假报差异、还会覆盖 Obsidian 的格式）。
function canon(v) {
  if (Array.isArray(v)) return '[' + v.map(canon).join(',') + ']';
  if (v && typeof v === 'object') return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + canon(v[k])).join(',') + '}';
  return JSON.stringify(v);
}
function sameContent(a, b) {
  if (a.endsWith('.canvas')) {
    try { return canon(JSON.parse(fs.readFileSync(a, 'utf8'))) === canon(JSON.parse(fs.readFileSync(b, 'utf8'))); }
    catch { return false; }
  }
  return fs.readFileSync(a).equals(fs.readFileSync(b));
}

const srcFiles = walk(SRC).filter(f => f.endsWith('.md') || f.endsWith('.canvas'));
const changed = [], added = [], onlyInVault = [];
const srcSet = new Set(srcFiles);

for (const rel of srcFiles) {
  const a = path.join(SRC, rel), b = path.join(DST, rel);
  if (!fs.existsSync(b)) added.push(rel);
  else if (!sameContent(a, b)) changed.push(rel);
}
const vaultFiles = walk(DST);
for (const rel of vaultFiles) if (!srcSet.has(rel)) onlyInVault.push(rel);

console.log('构建产物: ' + srcFiles.length + ' 个文件（md/canvas）');
console.log('新增: ' + added.length + ' ｜ 内容变更: ' + changed.length + ' ｜ 库中独有(不动): ' + onlyInVault.length);
for (const f of added) console.log('  + ' + f);
for (const f of changed) console.log('  ~ ' + f);
for (const f of onlyInVault.slice(0, 20)) console.log('  = 保留 ' + f);

if (!apply) { console.log('\n(dry run，未写入。加 --apply 执行)'); process.exit(0); }

// ===== 本地改动保护（名单制）=====
// 规则：
//   ① 「受保护名单」里的文件：你人工改过（改写正文、勾选自测）→ 永不覆盖，只把勾选状态带过去
//   ② 其余文件：以构建产物为准（生成器改了排版/文案就该落地）
//   名单文件：tools/protected-files.json（相对库的路径数组）
function mergeCheckStates(srcText, vaultText) {
  const vLines = vaultText.split('\n');
  const state = new Map();   // 勾选行文本 → 是否勾选
  for (const l of vLines) {
    const m = /^(\s*-\s*\[)([ xX])(\]\s*)(.*)$/.exec(l);
    if (m) state.set(m[4], m[2].toLowerCase() === 'x');
  }
  let carried = 0;
  const out = srcText.split('\n').map(l => {
    const m = /^(\s*-\s*\[)([ xX])(\]\s*)(.*)$/.exec(l);
    if (!m) return l;
    const checked = state.get(m[4]);
    if (checked === true && m[2] !== 'x') { carried++; return m[1] + 'x' + m[3] + m[4]; }
    return l;
  });
  return { text: out.join('\n'), carried };
}
let PROTECTED = [];
const protectedFile = path.join(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), 'protected-files.json');
try { PROTECTED = JSON.parse(fs.readFileSync(protectedFile, 'utf8')); } catch { PROTECTED = []; }
const isProtected = rel => PROTECTED.includes(rel);

let carriedTotal = 0, n = 0;
const kept = [];
for (const rel of [...added, ...changed]) {
  const a = path.join(SRC, rel), b = path.join(DST, rel);
  fs.mkdirSync(path.dirname(b), { recursive: true });
  const exists = fs.existsSync(b);
  // 受保护文件：正文以库里那份为准（你人工改过），只补勾选
  if (rel.endsWith('.md') && isProtected(rel) && exists) {
    const { text, carried } = mergeCheckStates(fs.readFileSync(a, 'utf8'), fs.readFileSync(b, 'utf8'));
    carriedTotal += carried; kept.push(rel);
    if (carried) fs.writeFileSync(b, text, 'utf8');
    continue;
  }
  // 其余笔记：以构建产物为准，但**勾选状态一律保留**（那是学习进度，不是内容）
  if (rel.endsWith('.md') && exists) {
    const src = fs.readFileSync(a, 'utf8');
    const { text, carried } = mergeCheckStates(src, fs.readFileSync(b, 'utf8'));
    carriedTotal += carried;
    fs.writeFileSync(b, text, 'utf8');
    n++;
    continue;
  }
  fs.copyFileSync(a, b);
  n++;
}
console.log('\n已同步 ' + n + ' 个文件到 ' + DST + (carriedTotal ? '（保留了 ' + carriedTotal + ' 处自测勾选）' : ''));
if (kept.length) {
  console.log('🛡 受保护、未覆盖的文件 ' + kept.length + ' 个（名单见 tools/protected-files.json）：');
  for (const f of kept) console.log('    ' + f);
  console.log('   这些是你人工改过的：正文以库里那份为准。想让构建产物生效，先把你的改动回填到 tools/deep-v2/_draft/ 对应草稿再重建。');
}

// 同步后再校验一次：受保护文件按"勾选被保留"看待，其余按内容严格比对
let bad = 0;
for (const rel of srcFiles) {
  const a = path.join(SRC, rel), b = path.join(DST, rel);
  if (!fs.existsSync(b)) { console.log('  ❌ 缺失: ' + rel); bad++; continue; }
  if (isProtected(rel)) continue;                      // 人工改动，故意与产物不同
  if (rel.endsWith('.md')) {
    const norm = t => t.replace(/^(\s*-\s*\[)[ xX](\])/gm, '$1 $2');   // 勾选差异不算不一致
    if (norm(fs.readFileSync(a, 'utf8')) !== norm(fs.readFileSync(b, 'utf8'))) { console.log('  ❌ 仍不一致: ' + rel); bad++; }
  } else if (!sameContent(a, b)) { console.log('  ❌ 仍不一致: ' + rel); bad++; }
}
console.log(bad ? ('❌ 仍有 ' + bad + ' 个文件不一致') : '✅ 库与构建产物一致（受保护的人工改动文件除外）');
process.exit(bad ? 1 : 0);
