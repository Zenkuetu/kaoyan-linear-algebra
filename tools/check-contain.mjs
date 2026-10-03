import fs from 'node:fs';
const dir = process.argv[2];
for (const f of fs.readdirSync(dir).filter(n => n.endsWith('.canvas'))) {
  const j = JSON.parse(fs.readFileSync(dir + '/' + f, 'utf8'));
  const gs = j.nodes.filter(n => n.type === 'group');
  const ts = j.nodes.filter(n => n.type === 'text' && n.id !== 'legend');
  let bad = [];
  for (const t of ts) {
    const g = gs.find(g => t.x >= g.x - 2 && t.x + t.width <= g.x + g.width + 2 && t.y >= g.y - 2 && t.y + t.height <= g.y + g.height + 2);
    if (!g) bad.push(t.id);
  }
  console.log(`${f}: 越界节点 ${bad.length} ${bad.slice(0, 5).join(', ')}`);
}
