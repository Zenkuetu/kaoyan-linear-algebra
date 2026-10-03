// 检查标签组合：确认"非数二"是否总能由"没有基础/数二"推出（即显示时可否安全省略）
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'D:/Files/Deepseek workplace/la-codegen';
const files = ['dc.js', 'matrices.js', 'vectors.js', 'equations.js', 'eigen.js', 'quadratic.js', 'edges.js'];
const src = files.map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
const { MODULES } = new Function('__bootstrap',
  src + '\nreturn __bootstrap({MODULES: [].concat(DC, MX, VC, EQ, EG, QF), EDGES: EDGE_LIST});')(x => x);

const combo = {};
const odd = [];
for (const m of MODULES) for (const p of m.points) {
  combo[p.tags.join(' + ')] = (combo[p.tags.join(' + ')] || 0) + 1;
  if (p.tags.includes('非数二') && !p.tags.includes('数一')) odd.push(p.id + ' [' + p.tags.join('/') + ']');
  if (p.tags.includes('非数二') && (p.tags.includes('基础') || p.tags.includes('数二'))) odd.push(p.id + ' [与非数二矛盾的组合: ' + p.tags.join('/') + ']');
}
console.log('=== 标签组合分布 ===');
for (const [k, v] of Object.entries(combo).sort((a, b) => b[1] - a[1])) console.log('  ' + k.padEnd(22) + v + ' 个');
console.log('\n含 非数二 但不同时含 数一（或个人组合自相矛盾）的点：');
console.log(odd.length ? odd.map(s => '  ✗ ' + s).join('\n') : '  ✅ 没有 —— 说明"非数二"总与"数一"同时出现，显示时可以安全省略');
