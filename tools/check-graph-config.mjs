// 图谱设置回归检查：发布库里的配色/箭头设置最容易在"Obsidian 开着的时候被内存状态覆盖"时悄悄丢掉，
// 所以每次发布前跑一遍。
// 检查对象：
//   1) vault/.obsidian/graph.json —— 三个节点配色组（基础/数一/数二）与 showArrow
//   2) vault/.obsidian/plugins/extended-graph/data.json —— 连线按关系类型上色所需的开关（插件本机装，仅本机检查）
//   3) 发布暂存区里的 graph.json 必须与 vault 一致
// 用法: node check-graph-config.mjs
import fs from 'node:fs';

const VAULT = 'D:/Files/考研数学线性代数';
const STAGE = 'D:/Files/Deepseek workplace/_gh_publish';
const problems = [];

function readJson(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }

// 1) graph.json
const gPath = VAULT + '/.obsidian/graph.json';
const g = readJson(gPath);
const queries = (g.colorGroups || []).map(c => c.query);
for (const tag of ['基础', '数一', '数二']) {
  if (!queries.some(q => q.replace(/\s/g, '') === 'tag:#' + tag)) problems.push('graph.json 缺少配色组 tag:#' + tag);
}
if (queries.length !== 3) problems.push('graph.json 配色组应为 3 个（基础/数一/数二），实际 ' + queries.length + ' 个：' + queries.join(' , '));
if (g.showArrow !== true) problems.push('graph.json showArrow 不是 true（箭头会被关掉）');
for (const c of g.colorGroups || []) {
  if (typeof c.color?.rgb !== 'number' || typeof c.color?.a !== 'number') problems.push('配色组 ' + c.query + ' 的颜色对象不完整');
}

// 2) Extended Graph 插件配置（本机）
const pPath = VAULT + '/.obsidian/plugins/extended-graph/data.json';
if (fs.existsSync(pPath)) {
  const p = readJson(pPath);
  const fg = p.enableFeatures?.graph || {};
  if (fg['auto-enabled'] !== true) problems.push('Extended Graph：enableFeatures.graph["auto-enabled"] 不是 true');
  if (fg.links !== true) problems.push('Extended Graph：graph.links 未开（连线不会按类型上色）');
  if (fg.arrows !== true) problems.push('Extended Graph：graph.arrows 未开（箭头不会按类型上色）');
  const link = p.interactiveSettings?.link || {};
  if (link.showOnGraph !== true) problems.push('Extended Graph：interactiveSettings.link.showOnGraph 不是 true');
  const types = (link.colors || []).map(c => c.type);
  for (const t of ['充要⇔', '充分⇒', '必要⇐', '无关', '关联']) {
    if (!types.includes(t)) problems.push('Extended Graph：缺少连线颜色类型 ' + t);
  }
} else {
  console.log('· 本机没装 Extended Graph，跳过插件配置检查（发布库不打包插件）');
}

// 3) 暂存区一致性
const sPath = STAGE + '/.obsidian/graph.json';
if (fs.existsSync(sPath)) {
  const a = fs.readFileSync(gPath), b = fs.readFileSync(sPath);
  if (Buffer.compare(a, b) !== 0) problems.push('发布暂存区的 .obsidian/graph.json 与 vault 不一致（需要重新 stage-gh.mjs）');
} else {
  problems.push('发布暂存区里没有 .obsidian/graph.json');
}

if (problems.length) {
  console.log('❌ 图谱设置有问题 ' + problems.length + ' 处：');
  for (const p of problems) console.log('   - ' + p);
  process.exit(1);
}
console.log('✅ 图谱设置：3 个节点配色组（基础/数一/数二）+ 箭头开启 + 连线类型着色齐全，且暂存区与 vault 一致');
