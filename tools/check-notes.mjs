// 笔记质量校验：
//  A. 结构（新旧两代骨架分别要求哪些小节）
//  B. LaTeX（$ 配对、括号平衡、环境配对、命令白名单、公式内中文/[[）
//  C. 双链与画布链接形态
import fs from 'node:fs';
import path from 'node:path';
import { extractMath, checkTex } from './latexcheck.mjs';

const vault = process.argv[2];

// 取某个二级小节的正文（从 '## X、标记' 到下一个 '## '），用于跨节引用检查
function bodyOf(t, marker) {
  const lines = t.split('\n');
  const i = lines.findIndex(l => l.startsWith('## ') && l.includes(marker));
  if (i < 0) return '';
  const out = [];
  for (let k = i + 1; k < lines.length; k++) { if (lines[k].startsWith('## ')) break; out.push(lines[k]); }
  return out.join('\n');
}
const CN = ['一', '二', '三', '四', '五', '六'];

const notesDir = path.join(vault, '知识点');
const notes = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = path.join(d, e.name); if (e.isDirectory()) walk(f); else if (e.name.endsWith('.md')) notes.push(f); } })(notesDir);

const structProblems = [], latexProblems = [];
const idSeen = new Map();
let gen2 = 0, gen1 = 0, plainN = 0;
for (const f of notes) {
  const rel = path.relative(vault, f).replace(/\\/g, '/');
  const t = fs.readFileSync(f, 'utf8');
  const has = s => t.includes(s);
  const isGen2 = has('、先看要解决什么') && has('、直接办法为什么不够');
  if (isGen2) {
    gen2++;
    for (const sec of ['、于是引入', '、细节', '、怎么用', '、30 秒自测', '、关系网']) {
      if (!has(sec)) structProblems.push(rel + '：新骨架缺少「' + sec + '」');
    }
    // 跨节引用一致性：引入段的"对应第N个坑/劣势"/"坑N"必须能在上一节找到编号清单，
    // 否则读者数不出"第N条"指的是谁（悬空引用）。
    const introB = bodyOf(t, '、于是引入');
    const gapB = bodyOf(t, '、直接办法为什么不够');
    if (introB && gapB) {
      const ord = [...introB.matchAll(/对应第([一二三四五六])个(坑|劣势|条)/g)].map(m => ({ i: CN.indexOf(m[1]), w: m[2] }));
      const ord2 = [...introB.matchAll(/第([一二三四五六])个(坑|劣势|条)补上/g)].map(m => ({ i: CN.indexOf(m[1]), w: m[2] }));
      const lab = [...introB.matchAll(/(坑|劣势|条)([一二三四五六])补上/g)].map(m => ({ i: CN.indexOf(m[2]), w: m[1] }));
      const refs = ord.length ? ord : (ord2.length ? ord2 : lab);
      if (refs.length) {
        const words = [...new Set(refs.map(r => r.w))];
        if (words.length > 1) structProblems.push(rel + '：引入段引用词不统一（' + words.join('/') + '）');
        const w = refs[0].w, need = Math.max(...refs.map(r => r.i)) + 1;
        let defined = 0;
        for (let i = 0; i < CN.length; i++) {
          if (new RegExp('第' + CN[i] + '[，,、]|第' + CN[i] + '个' + w + '|' + w + CN[i] + '|' + w + '第' + CN[i]).test(gapB)) defined = i + 1; else break;
        }
        if (defined < need) {
          structProblems.push(rel + '：引入段引用了「' + w + CN[need - 1] + '」，但上一节只有 ' + defined + ' 条带编号的' + w + '（悬空引用）');
        }
      }
    }
  } else if (has('、先看个例子')) gen1++;
  else plainN++;
  if (!has('**一句话**：')) structProblems.push(rel + '：缺少"一句话"');
  if (!has('、导航')) structProblems.push(rel + '：缺少导航');
  // 关系网的折叠必须用 Obsidian 原生 callout；禁止 <details>（HTML 块遇空行即结束，
  // 里面的表格会跑到块外 —— 症状是"折叠框空的、内容永远展开、点箭头没反应"）。
  if (has('<details>')) structProblems.push(rel + '：仍在使用 <details> 折叠关系网（应改成 > [!quote]- callout）');
  if (/本点 ⇒ 对方|对方 ⇒ 本点/.test(t) && !/^>\s*\[![a-z]+\]-\s.*关系网/m.test(t)) {
    structProblems.push(rel + '：有关系网但没有可折叠的 callout（检查是否漏了折叠）');
  }
  // 知识点ID 不得重复 —— 改名（如 I→E 统一引起的标题重命名）会在库里留下旧文件，
  // 症状就是同一 ID 出现两篇，页面看着"没更新"。这条护栏专治这种残留。
  {
    const id = (/知识点ID: (\S+)/.exec(t) || [])[1];
    if (id) {
      if (idSeen.has(id)) structProblems.push(rel + '：知识点ID「' + id + '」重复（另一篇在 ' + idSeen.get(id) + '，多半是改名后的旧文件残留，应删除）');
      else idSeen.set(id, rel);
    }
  }
  for (const it of extractMath(t)) {
    if (it.kind === 'same-line-display') latexProblems.push(rel + ':' + it.line + ' 同一行 $$（会破坏双链）');
    if (it.kind === 'UNCLOSED') { latexProblems.push(rel + ':' + it.line + ' $$ 未闭合'); continue; }
    const errs = checkTex(it.tex);
    if (errs.length) latexProblems.push(rel + ':' + it.line + ' [' + it.tex.replace(/\n/g, ' ').slice(0, 50) + '] ' + errs.join('；'));
  }
}

console.log('笔记 ' + notes.length + ' 篇：新叙事骨架 ' + gen2 + ' 篇 ｜ 旧通俗层 ' + gen1 + ' 篇 ｜ 仅基础骨架 ' + plainN + ' 篇');
console.log(structProblems.length ? '❌ 结构问题 ' + structProblems.length + ' 处' : '✅ 结构完整');
for (const p of structProblems.slice(0, 15)) console.log('  · ' + p);
console.log(latexProblems.length ? '❌ LaTeX 问题 ' + latexProblems.length + ' 处' : '✅ LaTeX 全部通过（配对/括号/环境/命令/中文/<nowiki>[[]]</nowiki>）');
for (const p of latexProblems.slice(0, 15)) console.log('  · ' + p);
process.exit(structProblems.length || latexProblems.length ? 1 : 0);
