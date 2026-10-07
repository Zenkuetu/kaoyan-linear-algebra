// 术语越界检查（写作规范 R1 的可执行版本）：
//   某章笔记的"痛点第一句"和"引入段"里，不许出现比本章更晚才讲的概念 ——
//   除非该术语本来就是这个知识点自身要讲的东西（出现在它的 summary/note/prop 里）。
// 用法: node check-jargon.mjs deep-v2            # 只查 JSON 草稿层
//       node check-jargon.mjs <库目录> --vault   # 查渲染后的笔记
import fs from 'node:fs';
import path from 'node:path';

import { CODEGEN as ROOT } from './paths.mjs';   // 路径统一由 paths.mjs 解析（默认相对仓库根推导）
const target = process.argv[2];
const isVault = process.argv.includes('--vault');
if (!target) { console.error('用法: node check-jargon.mjs <deep-v2 目录 | 库目录> [--vault]'); process.exit(2); }

// 章序：术语第一次出现在第几章
const CH = { 'm-det': 1, 'm-mat': 2, 'm-vec': 3, 'm-eq': 4, 'm-eig': 5, 'm-quad': 6, 'm-space': 7 };
// 第三项 = "根词"：只要知识点自述里出现过根词，就认为这个概念本来就属于它（避免假阳性）
// 注意：「向量」不在表内 —— 矩阵章本来就要说"行向量/列向量"，不算越界。
const TERMS = [
  ['线性相关', 3], ['线性无关', 3], ['线性组合', 3], ['线性表出', 3], ['向量组', 3],
  ['极大线性无关组', 3], ['极大无关组', 3], ['施密特', 3], ['正交化', 3],
  ['基础解系', 4], ['通解', 4], ['自由未知量', 4], ['增广矩阵', 4], ['克拉默', 4], ['解空间', 4],
  ['特征值', 5, '特征'], ['特征向量', 5, '特征'], ['特征多项式', 5, '特征'], ['特征子空间', 5, '特征'],
  ['相似', 5, '相似'], ['对角化', 5, '对角'],
  ['二次型', 6, '二次'], ['正定', 6, '正定'], ['半正定', 6, '半正定'], ['惯性指数', 6, '惯性'],
  ['标准形', 6, '标准形'], ['规范形', 6, '规范形'], ['合同', 6, '合同'], ['配方法', 6, '配方'],
  ['线性空间', 7, '线性空间'], ['子空间', 7], ['线性变换', 7], ['过渡矩阵', 7], ['核空间', 7], ['像空间', 7], ['同构', 7],
];

// 取数据层信息：id → { moduleId, 自述文本 }
const files = ['dc.js', 'matrices.js', 'vectors.js', 'equations.js', 'eigen.js', 'quadratic.js', 'edges.js'];
const src = files.map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
const { MODULES } = new Function('__bootstrap',
  src + '\nreturn __bootstrap({MODULES: [].concat(DC, MX, VC, EQ, EG, QF), EDGES: EDGE_LIST});')(x => x);
const meta = new Map();
for (const m of MODULES) for (const p of m.points) {
  meta.set(p.id, { ch: CH[m.id] || 0, own: [p.title, p.summary, p.note, ...(p.prop || []), ...(p.pitfalls || [])].join(' ') });
}

// 收集待检文本
const items = [];   // { id, pain, intro, where }
if (isVault) {
  const notesDir = path.join(target, '知识点');
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const f = path.join(d, e.name);
      if (e.isDirectory()) walk(f);
      else if (e.name.endsWith('.md')) {
        const t = fs.readFileSync(f, 'utf8');
        const id = (/知识点ID: (\S+)/.exec(t) || [])[1];
        if (!id) continue;
        const sec = (mark) => {
          const lines = t.split('\n');
          const i = lines.findIndex(l => l.startsWith('## ') && l.includes(mark));
          if (i < 0) return '';
          const out = [];
          for (let k = i + 1; k < lines.length; k++) { if (lines[k].startsWith('## ')) break; out.push(lines[k]); }
          return out.join('\n');
        };
        items.push({ id, pain: sec('、先看要解决什么'), intro: sec('、于是引入'), where: path.relative(target, f) });
      }
    }
  })(notesDir);
} else {
  for (const f of fs.readdirSync(target).filter(x => /^m-.*\.json$/.test(x))) {
    const j = JSON.parse(fs.readFileSync(path.join(target, f), 'utf8'));
    for (const [id, v] of Object.entries(j)) items.push({ id, pain: v.pain || '', intro: v.intro || '', where: f });
  }
}

// 判断某段文字里是否"未标注地"用了该术语：
// 我们的正文是"一段一行"，所以只认**同一行内**的标注（第五章才讲 / 现在不懂 / 先记住名字…）。
// 不做跨行窗口查找 —— 否则相邻段落的标注会被"借"过来，检查就永远不会报错。
const MARK = /第[一二三四五六七]章|到时才讲|以后才讲|后面才讲|后面第|现在不懂|先记住名字|先记个印象|才细讲|才讲得清|等以后学|以后学|将来学/;
function unmarkedUse(text, term) {
  for (const line of String(text).split('\n')) {
    if (line.includes(term) && !MARK.test(line)) return true;
  }
  return false;
}

let errs = 0, warns = 0;
for (const it of items) {
  const m = meta.get(it.id);
  if (!m) continue;
  const firstLine = String(it.pain).split('\n').find(l => l.trim()) || '';
  for (const [term, introCh, root] of TERMS) {
    if (introCh <= m.ch) continue;                     // 本章或更早出现的术语，允许
    if (m.own.includes(term)) continue;                // 本知识点自身就要讲它，允许
    if (root && m.own.includes(root)) continue;        // 同一族概念（如 特征值/特征多项式），允许
    if (unmarkedUse(firstLine, term)) {
      console.log('❌ [' + it.id + '] 痛点第一句未加说明地出现第' + introCh + '章术语「' + term + '」 → ' + firstLine.slice(0, 60));
      errs++;
    } else if (unmarkedUse(it.intro, term)) {
      console.log('⚠️  [' + it.id + '] 引入段未加说明地出现第' + introCh + '章术语「' + term + '」 ← ' + it.where);
      warns++;
    }
  }
}
console.log('\n检查 ' + items.length + ' 篇 ｜ 痛点第一句越界 ' + errs + ' 处 ｜ 引入段越界 ' + warns + ' 处');
process.exit(errs ? 1 : 0);
