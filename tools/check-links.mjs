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
let wikiTotal = 0, mdTotal = 0;
const broken = [];
const ambiguous = [];
const bareNonMd = [];   // 裸双链只匹配到非 .md 文件（Obsidian 不会解析，是"未创建链接"的常见成因）

for (const f of mdFiles) {
  const rel = path.relative(vault, f).replace(/\\/g, '/');
  const text = fs.readFileSync(f, 'utf8');
  const lines = text.split(/\r?\n/);

  // [[目标|显示]] 或 [[目标#标题|显示]]
  for (const m of text.matchAll(/\[\[([^\]\n]+?)\]\]/g)) {
    wikiTotal++;
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

// 额外检查：文件名里是否含 Obsidian 不接受的字符
const badChars = files.map(f => path.relative(vault, f).replace(/\\/g, '/')).filter(p => /[*?"<>|]/.test(p));
console.log(badChars.length ? '❌ 文件名含非法字符: ' + badChars.join(', ') : '✅ 文件名不含 * ? " < > | 等非法字符');
process.exit(broken.length || badChars.length || bareNonMd.length ? 1 : 0);
