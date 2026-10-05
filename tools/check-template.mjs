// 模板完整性检查：确认每篇知识点笔记都符合新骨架，且通俗层内容未丢失
import fs from 'node:fs';
import path from 'node:path';

const vault = process.argv[2];
const deepDir = process.argv[3];
if (!vault || !deepDir) { console.error('用法: node check-template.mjs <库目录> <deep目录>'); process.exit(2); }

// 读取通俗层覆盖情况
const deepIds = new Set();
for (const f of fs.readdirSync(deepDir).filter(x => x.endsWith('.json'))) {
  for (const id of Object.keys(JSON.parse(fs.readFileSync(path.join(deepDir, f), 'utf8')))) deepIds.add(id);
}

const notesDir = path.join(vault, '知识点');
const notes = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.md')) notes.push(full);
  }
})(notesDir);

const problems = [];
let withDeep = 0;
for (const f of notes) {
  const rel = path.relative(vault, f).replace(/\\/g, '/');
  const t = fs.readFileSync(f, 'utf8');
  const id = (/知识点ID: (\S+)/.exec(t) || [])[1] || '';
  const has = s => t.includes(s);

  // 必备结构
  if (!/^---\r?\n/.test(t)) problems.push(rel + '：缺少 frontmatter');
  if (!/^# /m.test(t)) problems.push(rel + '：缺少一级标题');
  if (!has('**一句话**：')) problems.push(rel + '：缺少"一句话"开头');
  // 「细节」是新叙事骨架的段落名，「定义与关键结论」是旧骨架名，二者其一即可
  if (!has('、细节') && !has('、定义与关键结论')) problems.push(rel + '：缺少"细节 / 定义与关键结论"段');
  if (!has('、导航')) problems.push(rel + '：缺少"导航"段');
  // 关系网必须是"可折叠"的（或明确说明无连线）
  // 注意：折叠用 Obsidian 原生 callout（> [!quote]- ），不能用 <details> ——
  // <details> 是 HTML 块，遇空行就结束，里面的表格会跑到块外，折叠框变成空的、点了没反应。
  const foldCallout = /^>\s*\[![a-z]+\]-\s.*关系网/m.test(t);
  if (has('<details>')) problems.push(rel + '：还在用 <details> 折叠（遇空行会失效，应改成 > [!quote]- callout）');
  if (!foldCallout && !has('该知识点独立性强')) problems.push(rel + '：关系网既未折叠也未说明无连线');
  // 目录式条款

  // 通俗层：有 deep 内容就必须渲染出对应段落
  if (deepIds.has(id)) {
    withDeep++;
    // 第二代（叙事骨架）与第一代（通俗层）要求的段落不同
    const isGen2 = has('、先看要解决什么') && has('、直接办法为什么不够');
    if (isGen2) {
      for (const sec of ['、于是引入', '、细节', '、怎么用', '、30 秒自测']) {
        if (!has(sec)) problems.push(rel + '（id=' + id + '）：叙事骨架缺「' + sec + '」');
      }
    } else {
      if (!has('、先看个例子')) problems.push(rel + '（id=' + id + '）：有通俗层但缺"先看个例子"');
      if (!has('、直观理解')) problems.push(rel + '（id=' + id + '）：有通俗层但缺"直观理解"');
      if (!has('、考试怎么考')) problems.push(rel + '（id=' + id + '）：有通俗层但缺"考试怎么考"');
    }
    if (!has('、30 秒自测')) problems.push(rel + '（id=' + id + '）：有通俗层但缺"30 秒自测"');
    // 自测项必须是复选框；已勾选（- [x]）同样合规 —— 那是读者的学习进度，同步时会刻意保留
    if (!/^- \[[ xX]\] /m.test(t)) problems.push(rel + '（id=' + id + '）：自测项未渲染成复选框');
  }
  // 正文首屏不得出现大段无引入的定义（启发式：**frontmatter 之后**的前 12 行内必须有一句话）
  // 注意：frontmatter 里现在有"按关系类型分组的属性"（充要/充分/必要…），长度随出边数变化，
  // 所以不能从文件第 1 行数 —— 必须跳过 frontmatter 再数，否则关系多的笔记会被误判。
  const lines = t.split(/\r?\n/);
  let body0 = 0;
  if (lines[0] && lines[0].trim() === '---') {
    const end = lines.findIndex((l, i) => i > 0 && l.trim() === '---');
    if (end > 0) body0 = end + 1;
  }
  const head = lines.slice(body0, body0 + 12).join('\n');
  if (!head.includes('一句话')) problems.push(rel + '：frontmatter 之后的前 12 行内没有"一句话"引导');
}

console.log('知识点笔记：' + notes.length + ' 篇｜其中含通俗层：' + withDeep + ' 篇｜deep 已覆盖 id：' + deepIds.size + ' 个');
console.log(problems.length ? '❌ 结构问题 ' + problems.length + ' 处：' : '✅ 全部笔记符合新骨架，通俗层无丢失');
for (const p of problems.slice(0, 25)) console.log('  · ' + p);
process.exit(problems.length ? 1 : 0);
