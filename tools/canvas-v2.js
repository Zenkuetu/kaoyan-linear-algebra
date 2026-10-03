// 重排 Canvas 关系网 v2：竖向通道 + 依赖分层 + 紧凑过滤视图 + 多视图拆分
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = ['dc.js', 'matrices.js', 'vectors.js', 'equations.js', 'eigen.js', 'quadratic.js', 'edges.js'];
const src = files.map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
const { MODULES, EDGES } = new Function('__b', src + '\nreturn __b({MODULES: [].concat(DC, MX, VC, EQ, EG, QF), EDGES: EDGE_LIST});')(x => x);

const OUT = process.argv[2];
if (!OUT) { console.error('用法: node canvas-v2.js <输出目录>'); process.exit(1); }

const byId = new Map();
for (const m of MODULES) for (const p of m.points) { p.moduleId = m.id; p.moduleTitle = m.title; byId.set(p.id, p); }

const TYPE = {
  iff:  { short: '充要', color: '1', desc: 'A ⇔ B 互相推出' },
  suff: { short: '充分', color: '2', desc: 'A ⇒ B，A 更强' },
  need: { short: '必要', color: '6', desc: 'B ⇒ A，A 更弱' },
  none: { short: '无关', color: '5', desc: '互不可推' },
  rel:  { short: '关联', color: '4', desc: '同源/构成' },
};
const TAGS = { '基础': '5', '数一': '2', '数二': '4' };
const needsNum2 = tags => tags.includes('基础') || tags.includes('数二');
function nodeColor(p) {
  if (p.tags.includes('数二')) return TAGS['数二'];
  if (p.tags.includes('数一')) return TAGS['数一'];
  return TAGS['基础'];
}

// ---------- 依赖深度（章内）----------
function depthsFor(moduleId) {
  const pts = MODULES.find(m => m.id === moduleId).points;
  const ids = new Set(pts.map(p => p.id));
  const adj = new Map(pts.map(p => [p.id, []]));
  for (const [a, b] of EDGES) if (ids.has(a) && ids.has(b) && a !== b) adj.get(a).push(b);
  const depth = new Map(), state = new Map();
  const dfs = u => {
    if (depth.has(u)) return depth.get(u);
    if (state.get(u) === 1) return 0;
    state.set(u, 1);
    let d = 0;
    for (const v of adj.get(u)) d = Math.max(d, dfs(v) + 1);
    state.set(u, 2); depth.set(u, d);
    return d;
  };
  for (const p of pts) dfs(p.id);
  return depth;
}
const DEPTH = new Map(MODULES.map(m => [m.id, depthsFor(m.id)]));

// ---------- 布局引擎 ----------
const NODE_W = 300, NODE_H = 116, VGAP = 30, LANE = 322, PAD = 34, HEADER = 92, COL_GAP = 120;

/**
 * @param visibleIds 参与布局的节点集合
 * @param mode 'wide' 每章独立分列并按依赖深度分层；'compact' 按全库依赖深度顺序紧凑竖排
 */
function layout(visibleIds, mode) {
  const pos = new Map();
  const frames = [];
  let cursorX = 0;
  let maxY = 0;

  if (mode === 'grid') {
    // 每章一个等高方块（用于跨章视图，避免列高参差不齐）
    const GX = 4, FW = 1160, GAPX = 90, GAPY = 90, LANE_G = 276;
    const present = MODULES.filter(m => m.points.some(p => visibleIds.has(p.id)));
    // 行容量 → 统一方块高度，保证最后一行不被裁切
    const packs = present.map(m => {
      const vis = m.points.filter(p => visibleIds.has(p.id));
      const lanes = vis.length > 18 ? 4 : vis.length > 9 ? 3 : vis.length > 4 ? 2 : 1;
      return { m, vis, perLane: Math.ceil(vis.length / lanes) };
    });
    const FH = Math.max(...packs.map(p => HEADER + PAD * 2 + p.perLane * (NODE_H + VGAP)));
    packs.forEach(({ m, vis, perLane }, i) => {
      const gx = (i % GX) * (FW + GAPX), gy = Math.floor(i / GX) * (FH + GAPY);
      const depth = DEPTH.get(m.id);
      const ordered = [...vis].sort((a, b) => (depth.get(a.id) - depth.get(b.id)) || (m.points.indexOf(a) - m.points.indexOf(b)));
      ordered.forEach((p, k) => {
        const lane = Math.floor(k / perLane), row = k % perLane;
        pos.set(p.id, { x: gx + PAD + lane * LANE_G, y: gy + HEADER + row * (NODE_H + VGAP) });
      });
      frames.push({ moduleId: m.id, title: m.title, x: gx, y: gy, width: FW, height: FH, count: vis.length });
      maxY = Math.max(maxY, gy + FH);
      cursorX = Math.max(cursorX, gx + FW);
    });
    return { pos, frames, width: cursorX, height: maxY };
  }

  for (const m of MODULES) {
    const vis = m.points.filter(p => visibleIds.has(p.id));
    if (!vis.length) continue;
    const depth = DEPTH.get(m.id);
    // 章内排序：先按依赖深度，再按原始顺序，保证"被依赖的在上、派生的在下"
    const ordered = [...vis].sort((a, b) => (depth.get(a.id) - depth.get(b.id)) || (m.points.indexOf(a) - m.points.indexOf(b)));

    let lanes, width;
    if (mode === 'wide') {
      lanes = 2;                                        // 每章固定 2 列，列宽一致、跨章关系可水平追踪
      width = lanes * LANE + PAD * 2;
    } else {
      lanes = vis.length > 9 ? 2 : 1;                   // 过滤视图：内容少时只占 1 列
      width = lanes * LANE + PAD * 2;
    }
    const perLane = Math.ceil(ordered.length / lanes);
    ordered.forEach((p, i) => {
      const lane = Math.floor(i / perLane);
      const row = i % perLane;
      const x = cursorX + PAD + lane * LANE;
      const y = HEADER + PAD + row * (NODE_H + VGAP);
      pos.set(p.id, { x, y, lane, row });
    });
    const rows = perLane;
    const height = HEADER + PAD * 2 + rows * (NODE_H + VGAP);
    frames.push({ moduleId: m.id, title: m.title, x: cursorX, y: 0, width, height, count: vis.length });
    maxY = Math.max(maxY, height);
    cursorX += width + COL_GAP;
  }
  return { pos, frames, width: Math.max(0, cursorX - COL_GAP), height: maxY };
}

// ---------- 画布构造 ----------
const legend = (title, note, edgeCount, nodeCount) => [
  '# ' + title,
  '',
  '**节点颜色**：🟦 基础（三卷共同要求）｜🟩 **数二也要求** ｜ 🟧 仅数一（= 数二不要求）',
  '**连线**（起点=条件，终点=结论）：🟥 充要 A⇔B（可互换）｜🟧 充分 A⇒B ｜ 🟪 必要 B⇒A ｜ ⬜ 无关 ｜ 🟩 关联',
  note,
  '本图含 **' + nodeCount + '** 个知识点、**' + edgeCount + '** 条连线。',
].join('\n');

function build({ file, title, note, edgeFilter, visibleFilter, mode, edgeLabels }) {
  const visible = new Set([...byId.values()].filter(p => !visibleFilter || visibleFilter(p)).map(p => p.id));
  const L = layout(visible, mode);
  const nodes = [], edges = [];

  const legendW = Math.min(1900, Math.max(900, Math.round(L.frames[0] ? L.frames[0].width : 900)));
  nodes.push({ id: 'legend', type: 'text', x: 0, y: -300, width: legendW, height: 250, color: '5', text: legend(title, note, 0, visible.size) });

  for (const f of L.frames) {
    nodes.push({ id: 'g-' + f.moduleId, type: 'group', x: f.x, y: f.y, width: f.width, height: f.height, color: '6', label: f.title.replace(/^第(.)章 /, '$1. ').replace(/^附录 /, '附录·') + '（' + f.count + '）' });
    const pts = MODULES.find(m => m.id === f.moduleId).points.filter(p => visible.has(p.id));
    for (const p of pts) {
      const q = L.pos.get(p.id);
      // 画布文本节点同样支持 [[双链]]，所以矩阵记号 [[1,1],[0,1]] 里的零宽空格必须保留，
      // 否则 Obsidian 会把它渲染成指向"未创建笔记"的链接（点一下就会新建空文件）。
      nodes.push({
        id: 'p-' + p.id, type: 'text', x: q.x, y: q.y, width: NODE_W, height: NODE_H, color: nodeColor(p),
        text: '**' + p.title + '**\n' + (p.summary.length > 44 ? p.summary.slice(0, 44) + '…' : p.summary) + '\n`' + p.tags.filter(x => x !== '非数二').join('/') + '`',
      });
    }
  }

  for (const e of EDGES) {
    if (!visible.has(e[0]) || !visible.has(e[1])) continue;
    if (edgeFilter && !edgeFilter(e)) continue;
    const pa = L.pos.get(e[0]), pb = L.pos.get(e[1]);
    const sameCol = Math.abs(pa.x - pb.x) < 5;
    const downward = pb.y > pa.y;
    edges.push({
      id: 'e-' + e[0] + '__' + e[1],
      fromNode: 'p-' + e[0], toNode: 'p-' + e[1],
      fromSide: sameCol ? (downward ? 'bottom' : 'top') : 'right',
      toSide: sameCol ? (downward ? 'top' : 'bottom') : 'left',
      color: TYPE[e[2]].color, ...(edgeLabels ? { label: TYPE[e[2]].short } : {}),
    });
  }

  // 用真实连线数更新图例
  nodes[0].text = legend(title, note, edges.length, visible.size);
  fs.writeFileSync(path.join(OUT, file), JSON.stringify({ nodes, edges }, null, 1), 'utf8');
  return { file, nodes: nodes.length, edges: edges.length, w: L.width, h: L.height + 320 };
}

const sameMod = e => byId.get(e[0]).moduleId === byId.get(e[1]).moduleId;
const stats = [];
stats.push(build({
  file: '01 关系网索引（章节结构）.canvas', mode: 'grid',
  title: '01 关系网索引（先看这一张）',
  note: '> **本图不画连线**，只回答一个问题："某个知识点在哪一章？"每章一个方块，块内自上而下按依赖深度排列。\n> 接下来按需要打开：**02** 章内关系 ｜ **03** 跨章关系 ｜ **04** 充要等价 ｜ **05** 判定枢纽 ｜ **06** 数二专用。单章细节请看笔记里的 Mermaid 图（每章一张）。',
  edgeFilter: () => false,
}));
stats.push(build({
  file: '02 章内关系网.canvas', mode: 'wide',
  title: '02 章内关系网（同章知识点之间的充分必要关系）',
  note: '> 每条边都在同一章内：起点是条件、终点是结论。同列的边走"上→下"，并排两列之间走"右→左"。',
  edgeFilter: sameMod,
}));
stats.push(build({
  file: '03 跨章关系网.canvas', mode: 'grid',
  title: '03 跨章关系网（判定枢纽如何把全书串成一体）',
  note: '> 只画**跨章节**的连线：它们说明"行列式、秩、解、特征值、惯性指数"其实是同一件事的不同说法。\n> 典型链条：｜A｜=0 ⇔ 不可逆 ⇔ 降秩 ⇔ 列组线性相关 ⇔ 齐次有非零解 ⇔ 有零特征值。',
  edgeFilter: e => !sameMod(e),
}));
const IFFS = EDGES.filter(e => e[2] === 'iff');
const iffIds = new Set(IFFS.flatMap(e => [e[0], e[1]]));
stats.push(build({
  file: '04 充要等价网络.canvas', mode: 'compact',
  title: '04 充要等价网络（A ⇔ B，任一端成立另一端必成立）',
  note: '> 只保留 33 条**充要**边及其两端知识点——这是最该背下来的一张图：选择题里两端可以互相替换。',
  edgeLabels: true,
  visibleFilter: p => iffIds.has(p.id), edgeFilter: e => e[2] === 'iff',
}));
const HUB = ['mat-invertible-crit', 'det-rowsum-zero', 'mat-rank', 'vec-indep-def', 'eq-homo-sol', 'eq-nonhomo-crit', 'eig-def', 'det-product', 'mat-equiv', 'eig-diag-crit', 'qf-congruent'];
const hubSet = new Set(HUB);
stats.push(build({
  file: '05 判定枢纽.canvas', mode: 'compact',
  title: '05 判定枢纽（考试最常考的"判定"型主线）',
  note: '> 11 个枢纽点：可逆 / 满秩 / ｜A｜≠0 / 列组无关 / 齐次只有零解 / 有解判别 / 特征值 / 惯性指数……\n> 它们之间几乎全是充要关系，是证明题与选择题的公共骨架。',
  edgeLabels: true,
  visibleFilter: p => hubSet.has(p.id),
}));
stats.push(build({
  file: '06 数二专用关系网.canvas', mode: 'compact',
  title: '06 数二专用关系网（已剔除 ' + [...byId.values()].filter(x => !needsNum2(x.tags)).length + ' 个数二不要求的知识点）',
  note: '> 数二考生只看这一张：所有**只标 `数一`（数二不要求）**的知识点及其连线都已被剔除。\n> 注意数二**考**向量组与特征值（且特征值是重点），只不考向量空间与二次型的化标准形/正定性。',
  visibleFilter: p => needsNum2(p.tags), edgeFilter: sameMod,
}));

// 单章详图：一张一章，配合上面的索引（已并入笔记：每章一张 Mermaid 图）

console.log('生成完成（v2 布局）：\n');
for (const s of stats) console.log(`  ${s.file}\n     节点 ${s.nodes} ｜ 连线 ${s.edges} ｜ 尺度 ${s.w}×${s.h} px`);
const L = layout(new Set([...byId.keys()]), 'wide');
console.log('\n全量布局：' + L.width + '×' + L.height + ' px，列宽 ' + L.frames.map(f => f.width).join(' / '));
