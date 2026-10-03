// 同步前强校验：逐文件比较 _vault_test（新构建）与已安装库，并检查"受控改动"范围。
//   - 第二章矩阵那 27 篇：本轮只允许「二、直接办法为什么不够」和「三、于是引入」两节发生变化
//     （其余小节逐字节必须一致，用来证明规范化没有误伤正文）
//   - 其余章节：整篇重写属预期，只报告变化范围
// 用法: node verify-sync.mjs            # 只报告
//       node verify-sync.mjs --strict   # 矩阵章超出二/三节即报错退出
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'D:/Files/Deepseek workplace/_vault_test';
const DST = 'D:/Files/考研数学线性代数/线代知识网';
const strict = process.argv.includes('--strict');

function walk(root, sub = '') {
  const out = [];
  for (const e of fs.readdirSync(path.join(root, sub), { withFileTypes: true })) {
    if (e.name === '.obsidian' || e.name === '.trash') continue;
    const rel = sub ? sub + '/' + e.name : e.name;
    if (e.isDirectory()) out.push(...walk(root, rel));
    else out.push(rel);
  }
  return out;
}
// 把笔记按二级小节切开：{'一、…': 正文, ...}
function sections(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const out = {};
  let cur = '__head__';
  for (const l of lines) {
    const m = /^##\s+(.*)$/.exec(l);
    if (m) { cur = m[1].trim(); out[cur] = []; continue; }
    (out[cur] = out[cur] || []).push(l);
  }
  for (const k of Object.keys(out)) out[k] = out[k].join('\n').trim();
  return out;
}

// 画布按内容比较（Obsidian 会用自己的格式重写画布文件，字节不同但内容一样）
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
let changed = 0, missing = [];
const matrixProblems = [];
const report = [];

for (const rel of srcFiles) {
  const a = path.join(SRC, rel), b = path.join(DST, rel);
  if (!fs.existsSync(b)) { missing.push(rel); continue; }
  if (sameContent(a, b)) continue;
  changed++;
  if (!rel.endsWith('.md')) { report.push(['画布', rel, '(整体重写)']); continue; }

  const sa = sections(fs.readFileSync(a, 'utf8'));
  const sb = sections(fs.readFileSync(b, 'utf8'));
  const keys = [...new Set([...Object.keys(sa), ...Object.keys(sb)])];
  const diffSecs = keys.filter(k => (sa[k] || '') !== (sb[k] || ''));
  const isMatrix = rel.includes('第二章 矩阵');
  report.push([isMatrix ? '矩阵章' : '其他章', rel, diffSecs.join(' / ') || '(仅空行/结尾差异)']);

  if (isMatrix) {
    // 小节标题现在带标记，如 <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够 —— 先剥掉再判断
    const bare = k => k.replace(/<span[^>]*>[^<]*<\/span>\s*/g, '').trim();
    const bad = diffSecs.filter(k => !(/^二、/.test(bare(k)) || /^三、/.test(bare(k)) || k === '__head__' || k === ''));
    if (bad.length) matrixProblems.push(rel + ' 超出预期的改动小节：' + bad.map(bare).join(' / '));
  }
}

console.log('构建产物 ' + srcFiles.length + ' 个文件 ｜ 内容有变化 ' + changed + ' 个 ｜ 库中缺失 ' + missing.length + ' 个');
if (missing.length) console.log('  缺失：' + missing.slice(0, 10).join(', '));

const matrixRows = report.filter(r => r[0] === '矩阵章');
const otherRows = report.filter(r => r[0] !== '矩阵章');
console.log('\n【矩阵章】共 ' + matrixRows.length + ' 篇有变化，改动小节：');
for (const r of matrixRows) console.log('  ' + r[1] + '  →  ' + r[2]);
console.log('\n【其他章 / 画布】共 ' + otherRows.length + ' 个有变化（整篇重写属预期），前 8 个：');
for (const r of otherRows.slice(0, 8)) console.log('  ' + r[1] + '  →  ' + r[2]);

if (matrixProblems.length) {
  console.log('\n❌ 矩阵章出现超范围改动 ' + matrixProblems.length + ' 处：');
  for (const p of matrixProblems) console.log('  · ' + p);
} else {
  console.log('\n✅ 矩阵章的改动全部落在「二、直接办法为什么不够」「三、于是引入」两节内（正文没被误伤）');
}
process.exit(strict && matrixProblems.length ? 1 : 0);
