// 链接解析校验：按 Obsidian 的规则解析全库所有链接，找出"尚未创建"的目标
import fs from 'node:fs';
import path from 'node:path';

const vault = process.argv[2];
if (!vault) { console.error('用法: node check-links.mjs <库目录>'); process.exit(2); }

// 收集所有文件（md + canvas），建立 Obsidian 的链接索引
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, e.name);
    if (e.isDirectory()) { if (!e.name.startsWith('.')) walk(full); }
    else if (e.name.endsWith('.md') || e.name.endsWith('.canvas')) files.push(full);
  }
})(vault);

const byPath = new Set(files.map(f => path.relative(vault, f).replace(/\\/g, '/')));
const byStem = new Map();
for (const f of files) {
  const rel = path.relative(vault, f).replace(/\\/g, '/');
  const stem = path.posix.basename(rel).replace(/\.(md|canvas)$/, '');
  if (!byStem.has(stem)) byStem.set(stem, []);
  byStem.get(stem).push(rel);
}

const mdFiles = files.filter(f => f.endsWith('.md'));
// 数学公式里的方括号/圆括号会伪装成 markdown 链接（例：[E-(E-A)^{-1}](E-A)，整段都在行内公式里），
// 所以先算出公式区间，落在这区间里的“链接”一律跳过 —— 真实链接不可能出现在公式内部。
const DL = String.fromCharCode(36);   // 美元符号用编码写，避免生成脚本转义麻烦
function mathRanges(text) {
  const ranges = [];
  let i = 0, start = -1;
  while (i < text.length) {
    if (text[i] === DL && text[i - 1] !== '\\') {
      const disp = text[i + 1] === DL;
      const len = disp ? 2 : 1;
      if (start < 0) start = i; else { ranges.push([start, i + len]); start = -1; }
      i += len;
    } else i++;
  }
  return ranges;
}
const inAny = (ranges, idx) => ranges.some(([a, b]) => idx >= a && idx < b);

let wikiTotal = 0, mdTotal = 0;
const broken = [];
const ambiguous = [];
const dirtyLinks = [];  // 链接内部混入空白（表格对齐工具常见坑）：如 [[目标   |显示名]]，Obsidian 解析不到
const bareNonMd = [];   // 裸双链只匹配到非 .md 文件（Obsidian 不会解析，是"未创建链接"的常见成因）

for (const f of mdFiles) {
  const rel = path.relative(vault, f).replace(/\\/g, '/');
  const text = fs.readFileSync(f, 'utf8');
  const lines = text.split(/\r?\n/);
  const math = mathRanges(text);

  // [[目标|显示]] 或 [[目标#标题|显示]]
  for (const m of text.matchAll(/\[\[([^\]\n]+?)\]\]/g)) {
    if (inAny(math, m.index)) continue;
    wikiTotal++;
    // ⚠️ 先查"链接内部有没有多余空白"——必须在 trim 之前查，
    //    否则 [[目标    |显示名]] 会被 trim 成合法目标，这类坏链接就漏过去了（踩过这个坑）。
    const rawInner = m[1];
    const [rawT, rawD] = rawInner.split('|');
    const tPart = (rawT || '').split('#')[0];
    if (tPart !== tPart.trim() || (rawD !== undefined && rawD !== rawD.trim())) {
      dirtyLinks.push({ file: rel, line: lines.findIndex(l => l.includes(m[0])) + 1, target: rawInner });
    }
    let target = m[1].split('|')[0].split('#')[0].trim();
    if (!target) continue;
    const norm = target.replace(/\.(md|canvas)$/i, '');
    if (byStem.has(norm) || byPath.has(norm + '.md') || byPath.has(norm + '.canvas')) continue;
    const line = lines.findIndex(l => l.includes(m[0])) + 1;
    broken.push({ file: rel, line, kind: 'wikilink', target: m[1], resolvedTo: norm });
  }
  // 反向检查：裸双链（不带扩展名）若只匹配到 .canvas / 非 md 文件，Obsidian 不会解析
  for (const m of text.matchAll(/\[\[([^\]\n|#]+)(\|[^\]\n]*)?\]\]/g)) {
    const raw = m[1].trim();
    if (/\.(md|canvas)$/i.test(raw)) continue;
    const hits = byStem.get(raw) || [];
    if (hits.length && !hits.some(h => h.endsWith('.md'))) {
      bareNonMd.push({ file: rel, target: raw, only: hits.join(', ') });
    }
  }

  // [显示](路径.md)
  for (const m of text.matchAll(/\[([^\]\n]*)\]\(([^)\s]+)\)/g)) {
    if (inAny(math, m.index)) continue;
    mdTotal++;
    let href = m[2];
    if (/^https?:/i.test(href) || href.startsWith('obsidian://')) continue;
    href = href.split('#')[0];
    let decoded;
    try { decoded = decodeURIComponent(href); } catch { decoded = href; }
    decoded = decoded.replace(/\\/g, '/').replace(/^\.\//, '');
    const candidates = [decoded, decoded.replace(/ /g, ' '), decoded.normalize('NFC'), decoded.normalize('NFD')];
    if (candidates.some(c => byPath.has(c))) continue;
    // 退一步：按文件名匹配
    const stem = path.posix.basename(decoded).replace(/\.(md|canvas)$/, '');
    const line = lines.findIndex(l => l.includes(m[0])) + 1;
    if (byStem.has(stem)) {
      ambiguous.push({ file: rel, line, href: decoded, stem, hint: '按文件名可解析，但路径不完全一致' });
      continue;
    }
    broken.push({ file: rel, line, kind: 'markdown', target: decoded, resolvedTo: stem });
  }
}

console.log('链接总数: wikilink ' + wikiTotal + ' ｜ markdown ' + mdTotal);
console.log('可疑（路径不一致但按文件名能找到）: ' + ambiguous.length);
for (const a of ambiguous.slice(0, 10)) console.log('  · ' + a.file + ':' + a.line + '  ' + a.href);
console.log(broken.length ? '❌ 无法解析的链接: ' + broken.length : '✅ 所有链接均可解析（不会出现"尚未创建"）');
for (const b of broken.slice(0, 30)) console.log('  · [' + b.kind + '] ' + b.file + ':' + b.line + ' 目标=' + b.target);
console.log(bareNonMd.length
  ? '❌ 裸双链指向非笔记文件（Obsidian 不解析，需写扩展名）: ' + bareNonMd.length
  : '✅ 没有"裸双链指向画布"的问题（画布链接均带 .canvas）');
for (const b of bareNonMd.slice(0, 10)) console.log('  · ' + b.file + '  [[' + b.target + ']]  实际文件: ' + b.only);
console.log(dirtyLinks.length
  ? '❌ 链接内部混入空白（多半是表格对齐工具把空格塞进了 [[目标|显示名]]）: ' + dirtyLinks.length
  : '✅ 没有链接内部含空白的坏链接');
for (const d of dirtyLinks.slice(0, 10)) console.log('  · ' + d.file + ':' + d.line + '  [[' + d.target + ']]');
if (dirtyLinks.length) console.log('  修法：node la-codegen/fix-table-links.mjs <库目录> --apply');

// 额外检查：文件名里是否含 Obsidian 不接受的字符
const badChars = files.map(f => path.relative(vault, f).replace(/\\/g, '/')).filter(p => /[*?"<>|]/.test(p));
console.log(badChars.length ? '❌ 文件名含非法字符: ' + badChars.join(', ') : '✅ 文件名不含 * ? " < > | 等非法字符');
process.exit(broken.length || badChars.length || bareNonMd.length || dirtyLinks.length ? 1 : 0);
