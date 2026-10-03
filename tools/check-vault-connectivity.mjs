// 用"图谱的真实视角"（无向）检查整个库的连通性：frontmatter 里的链接（类型边）算边
import fs from 'node:fs';
import path from 'node:path';
const root = process.argv[2] || 'D:/Files/Deepseek workplace/_vault_test';

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name.endsWith('.md')) files.push(f);
  }
})(root);

const name2file = new Map();
for (const f of files) name2file.set(path.basename(f, '.md'), f);

const adj = new Map(files.map(f => [f, new Set()]));   // ← 无向：两端都加
let edgeCount = 0;
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const fm = t.startsWith('---') ? (t.split('---')[1] || '') : '';
  for (const m of fm.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const target = name2file.get(m[1].trim());
    if (target && target !== f) { adj.get(f).add(target); adj.get(target).add(f); edgeCount++; }
  }
}
// 连通块
const seen = new Set(), comps = [];
for (const f of files) {
  if (seen.has(f)) continue;
  const stack = [f], comp = []; seen.add(f);
  while (stack.length) { const cur = stack.pop(); comp.push(cur); for (const nb of adj.get(cur)) if (!seen.has(nb)) { seen.add(nb); stack.push(nb); } }
  comps.push(comp);
}
comps.sort((a, b) => b.length - a.length);
console.log('文件 ' + files.length + ' 个 ｜ frontmatter 类型边 ' + edgeCount + ' 条（无向计） ｜ 连通块 ' + comps.length + ' 个');
comps.forEach((c, i) => {
  const names = c.map(x => path.basename(x, '.md'));
  console.log('  块 ' + (i + 1) + '（' + c.length + '）：' + (c.length <= 8 ? names.join(' / ') : names.slice(0, 4).join(' / ') + ' …'));
});
