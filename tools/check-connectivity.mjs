// 体检：把 152 条关系边当成无向图，算出所有连通块，找出"孤岛"
import fs from 'node:fs';
import { CODEGEN as ROOT } from './paths.mjs';   // 路径统一由 paths.mjs 解析（默认相对仓库根推导）
const files = ['dc.js', 'matrices.js', 'vectors.js', 'equations.js', 'eigen.js', 'quadratic.js', 'edges.js'];
const src = files.map(f => fs.readFileSync(ROOT + '/' + f, 'utf8')).join('\n');
const { MODULES, EDGES } = new Function('__bootstrap',
  src + '\nreturn __bootstrap({MODULES: [].concat(DC, MX, VC, EQ, EG, QF), EDGES: EDGE_LIST});')(x => x);

const byId = new Map();
for (const m of MODULES) for (const p of m.points) { p.chapter = m.title; byId.set(p.id, p); }

// 无向邻接
const adj = new Map([...byId.keys()].map(k => [k, new Set()]));
const degree = new Map([...byId.keys()].map(k => [k, 0]));
for (const [a, b] of EDGES) { adj.get(a).add(b); adj.get(b).add(a); degree.set(a, degree.get(a) + 1); degree.set(b, degree.get(b) + 1); }

// 连通块
const seen = new Set(), comps = [];
for (const k of byId.keys()) {
  if (seen.has(k)) continue;
  const stack = [k], comp = [];
  seen.add(k);
  while (stack.length) {
    const cur = stack.pop();
    comp.push(cur);
    for (const nb of adj.get(cur)) if (!seen.has(nb)) { seen.add(nb); stack.push(nb); }
  }
  comps.push(comp);
}
comps.sort((a, b) => b.length - a.length);

console.log('知识点总数 ' + byId.size + ' ｜ 关系边 ' + EDGES.length + ' ｜ 连通块 ' + comps.length + ' 个');
console.log('\n=== 各连通块 ===');
for (const [i, c] of comps.entries()) {
  console.log('\n【块 ' + (i + 1) + '】' + c.length + ' 个知识点');
  for (const id of c) console.log('   ' + id + '  (' + byId.get(id).chapter + ')  ' + byId.get(id).title + '   ｜ 度数 ' + degree.get(id));
}
console.log('\n=== 度数为 0 或 1 的点（最容易被孤立）===');
for (const [k, d] of [...degree.entries()].sort((a, b) => a[1] - b[1])) {
  if (d <= 1) console.log('   度 ' + d + ' → ' + k + '  ' + byId.get(k).title);
}
