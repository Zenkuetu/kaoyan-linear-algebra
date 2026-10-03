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

let n = 0;
for (const rel of [...added, ...changed]) {
  const b = path.join(DST, rel);
  fs.mkdirSync(path.dirname(b), { recursive: true });
  fs.copyFileSync(path.join(SRC, rel), b);
  n++;
}
console.log('\n已同步 ' + n + ' 个文件到 ' + DST);

// 同步后再校验一次（按内容比较：画布用 JSON 内容，笔记用字节）
let bad = 0;
for (const rel of srcFiles) {
  const a = path.join(SRC, rel), b = path.join(DST, rel);
  if (!fs.existsSync(b) || !sameContent(a, b)) { console.log('  ❌ 仍不一致: ' + rel); bad++; }
}
console.log(bad ? ('❌ 仍有 ' + bad + ' 个文件不一致') : '✅ 库与构建产物内容一致（画布按 JSON 内容比较，不受 Obsidian 重排格式影响）');
process.exit(bad ? 1 : 0);
