// Canvas 检查：① 文字节点是否都在所属分组框内 ② 文字节点之间是否互相重叠
import fs from 'node:fs';
const dir = process.argv[2];
if (!dir) { console.error('用法: node check-contain.mjs <库目录>'); process.exit(2); }
let problems = 0;
for (const f of fs.readdirSync(dir).filter(n => n.endsWith('.canvas'))) {
  const j = JSON.parse(fs.readFileSync(dir + '/' + f, 'utf8'));
  const gs = j.nodes.filter(n => n.type === 'group');
  const ts = j.nodes.filter(n => n.type === 'text' && n.id !== 'legend');
  const outOf = [];
  for (const t of ts) {
    const g = gs.find(g => t.x >= g.x - 2 && t.x + t.width <= g.x + g.width + 2 && t.y >= g.y - 2 && t.y + t.height <= g.y + g.height + 2);
    if (!g) outOf.push(t.id);
  }
  const overlaps = [];
  for (let i = 0; i < ts.length; i++) for (let k = i + 1; k < ts.length; k++) {
    const a = ts[i], b = ts[k];
    const ox = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
    const oy = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
    if (ox > 1 && oy > 1) overlaps.push(a.id + '×' + b.id);
  }
  problems += outOf.length + overlaps.length;
  console.log(`${f}: 越界节点 ${outOf.length} ${outOf.slice(0, 5).join(', ')} ｜ 互相重叠 ${overlaps.length} ${overlaps.slice(0, 3).join(', ')}`);
}
if (problems) { console.log('❌ 共 ' + problems + ' 处问题'); process.exit(1); }
console.log('✅ Canvas 节点全部在分组框内，且互不重叠');
