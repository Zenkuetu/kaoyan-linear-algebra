// 为每个待补写章节生成"写作简报"：把该章所有知识点的现有资料 + 关系边整理成一份 Markdown，
// 供写作子代理阅读（避免它们去解析 JS 数据文件而出错）。
// 用法: node dump-chapter.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'D:/Files/Deepseek workplace/la-codegen';
const OUTDIR = path.join(ROOT, 'deep-v2', '_input');

const files = ['dc.js', 'matrices.js', 'vectors.js', 'equations.js', 'eigen.js', 'quadratic.js', 'edges.js'];
const src = files.map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
const { MODULES, EDGES } = new Function('__bootstrap',
  src + '\nreturn __bootstrap({MODULES: [].concat(DC, MX, VC, EQ, EG, QF), EDGES: EDGE_LIST});')(x => x);

const byId = new Map();
for (const m of MODULES) for (const p of m.points) { p.moduleId = m.id; byId.set(p.id, p); }

// 每个模块对应的：输出 JSON 文件名、已学章节（写作时只能用这些概念）
const PLAN = {
  'm-det':  { short: 'det',  learned: '中学数学（没有前置章节）' },
  'm-vec':  { short: 'vec',  learned: '第一章 行列式、第二章 矩阵' },
  'm-eq':   { short: 'eq',   learned: '第一章 行列式、第二章 矩阵、第三章 向量组' },
  'm-eig':  { short: 'eig',  learned: '第一～四章（行列式、矩阵、向量组、线性方程组）' },
  'm-quad': { short: 'quad', learned: '第一～五章（含特征值）' },
  'm-space':{ short: 'sp',   learned: '第一～六章全部' },
  'm-mat':  { short: 'mat',  learned: '第一章 行列式', inPlace: true },   // 已写完，只做格式规范化
};
const TYPE_CN = { iff: '充要', suff: '充分', need: '必要', none: '无关', rel: '关联' };

// 已完成的第二章矩阵：草稿改完后就地写回原来的分片文件（不新建文件）
const inPlace = {};
for (const f of fs.readdirSync(path.join(ROOT, 'deep-v2')).filter(x => /^m-mat-[a-z]\.json$/.test(x))) {
  const j = JSON.parse(fs.readFileSync(path.join(ROOT, 'deep-v2', f), 'utf8'));
  for (const id of Object.keys(j)) inPlace[id] = f;
}
// m-mat 的知识点也要登记进 id → module 映射，这样 draft2json --key mat 能找到它们
fs.mkdirSync(OUTDIR, { recursive: true });
const manifest = {};
for (const id of Object.keys(inPlace)) manifest[id] = 'm-mat';
const summary = [];

for (const m of MODULES) {
  const plan = PLAN[m.id];
  if (!plan) continue;
  const L = [];
  L.push('# 待补写章节简报：' + m.title);
  L.push('');
  L.push('- moduleId：`' + m.id + '` ｜ 知识点：**' + m.points.length + '** 个 ｜ 输出文件：`deep-v2/m-' + plan.short + '-a.json`');
  if (plan.inPlace) L.push('- ⚠️ **本模块的通俗层已经写完**（就地更新 m-mat-*.json）：这份简报是给**审校/复核**用的，不是待写任务');
  if (plan.learned) L.push('- **概念依赖**：本章只允许用「' + plan.learned + '」引入；后面章节的术语不许用来引入，只能放在引入段末尾并标注"现在不懂不影响做题"');
  L.push('- **写作前必读**：`deep-v2/SPEC-写作规范.md`（7 条硬规则，每条都写了"为什么"）');
  L.push('- **范文**（已完成的第二章）：`D:\\Files\\考研数学线性代数\\线代知识网\\知识点\\第二章 矩阵\\矩阵乘法.md`');
  L.push('- **概念依赖**：本章只允许用「' + plan.learned + '」引入；后面章节的术语不许用来引入，只能放在引入段末尾并标注"现在不懂不影响做题"');
  L.push('- 草稿写到 `deep-v2/_draft/<知识点id>.md`，然后跑 `node draft2json.mjs --key ' + plan.short + '` 自检');
  L.push('');
  m.points.forEach((p, i) => {
    const outs = EDGES.filter(e => e[0] === p.id);
    const ins = EDGES.filter(e => e[1] === p.id);
    L.push('## ' + (i + 1) + '. `' + p.id + '` ｜ ' + p.title + ' ｜ 标签：' + p.tags.join('/'));
    L.push('');
    L.push('- **现有一句话要点**：' + p.summary);
    L.push('- **现有正文（要展开的核心）**：' + p.note);
    if (p.prop && p.prop.length) {
      L.push('- **现有性质/结论**：');
      for (const x of p.prop) L.push('    - ' + x);
    }
    if (p.pitfalls && p.pitfalls.length) {
      L.push('- **现有易错点**（放进"六、易错点"）：');
      for (const x of p.pitfalls) L.push('    - ' + x);
    }
    if (outs.length || ins.length) {
      L.push('- **关系边**（仅供理解本点地位，正文不必照抄）：');
      for (const e of outs) L.push('    - 本点 ⇒ ' + TYPE_CN[e[2]] + ' ⇒ ' + byId.get(e[1]).title + '：' + e[3]);
      for (const e of ins) L.push('    - ' + byId.get(e[0]).title + ' ⇒ ' + TYPE_CN[e[2]] + ' ⇒ 本点：' + e[3]);
    }
    L.push('');
    manifest[p.id] = m.id;
  });
  const file = path.join(OUTDIR, m.id + '.md');
  fs.writeFileSync(file, L.join('\n'), 'utf8');
  summary.push(m.title + ' → ' + path.basename(file) + '（' + m.points.length + ' 点）');
}

fs.writeFileSync(path.join(OUTDIR, '_manifest.json'), JSON.stringify({ plan: PLAN, idToModule: manifest, inPlace: inPlace }, null, 2) + '\n', 'utf8');console.log('已生成章节简报：');
for (const s of summary) console.log('  · ' + s);
console.log('MANIFEST: ' + path.join(OUTDIR, '_manifest.json'));
console.log('合计待写知识点：' + Object.keys(manifest).length + ' 个');
