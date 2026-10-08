// 真题数据校验：字段完整性 / 知识点 ID 是否存在 / LaTeX 是否合规 / 是否有重复题
// 用法: node tools/check-exams.mjs [库目录，默认 线代知识网]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractMath, checkTex } from './latexcheck.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VAULT = process.argv[2] || path.join(HERE, '..', '线代知识网');

// 1) 已知知识点 ID（从库里的笔记 frontmatter 收集）
const known = new Map();
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const fp = path.join(d, e.name);
    if (e.isDirectory()) { walk(fp); continue; }
    if (!e.name.endsWith('.md')) continue;
    const m = /知识点ID:\s*(\S+)/.exec(fs.readFileSync(fp, 'utf8'));
    if (m) known.set(m[1], e.name.replace(/\.md$/, ''));
  }
})(path.join(VAULT, '知识点'));

// 2) 加载真题数据层（与 build.js 同样的拼装方式）
const examDir = path.join(HERE, 'exams');
const files = [path.join(HERE, 'exams.js')].concat(
  fs.readdirSync(examDir).filter(f => f.endsWith('.js')).sort().map(f => path.join(examDir, f)));
const srcText = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
let EXAMS;
try { EXAMS = new Function(srcText + '\nreturn EXAMS;')(); }
catch (e) { console.error('❌ 真题数据无法加载（语法错误）：' + e.message); process.exit(1); }

// 3) 逐题检查
const errs = [];
const seen = new Map();
const SUBJECTS = new Set(['数一', '数二', '数三']);
const KINDS = new Set(['选择', '填空', '解答']);
EXAMS.forEach((e, i) => {
  const tag = (e && e.year) + '-' + (e && e.subject) + '#' + (e && e.number);
  const at = '[' + i + '] ' + tag;
  if (!Number.isInteger(e.year) || e.year < 1987 || e.year > 2030) errs.push(at + '：year 不合法');
  if (!SUBJECTS.has(e.subject)) errs.push(at + '：subject 必须是 数一/数二/数三');
  if (!Number.isInteger(e.number) || e.number <= 0) errs.push(at + '：number 不合法');
  if (!KINDS.has(e.kind)) errs.push(at + '：kind 必须是 选择/填空/解答');
  if (typeof e.score !== 'number' || e.score <= 0) errs.push(at + '：score 不合法');
  if (!Array.isArray(e.ids) || !e.ids.length) errs.push(at + '：ids 不能为空');
  else for (const id of e.ids) if (!known.has(id)) errs.push(at + '：知识点 ID 不存在 —— ' + id);
  for (const k of ['question', 'answer']) {
    if (typeof e[k] !== 'string' || !e[k].trim()) errs.push(at + '：' + k + ' 为空');
  }
  // analysis 允许为空：个别年份的解析资料本身没有印出解答过程，此时只给答案
  if (typeof e.analysis !== 'string') errs.push(at + '：analysis 字段缺失（可为空字符串）');
  if (typeof e.source !== 'string' || !e.source.trim()) errs.push(at + '：缺少 source（解析出处）');
  if (e.label !== undefined && (typeof e.label !== 'string' || !e.label.trim())) errs.push(at + '：label 给了但为空');
  const key = e.year + '|' + e.subject + '|' + e.number;
  if (seen.has(key)) errs.push(at + '：与 ' + seen.get(key) + ' 重复');
  else seen.set(key, at);
  // LaTeX
  for (const k of ['question', 'answer', 'analysis']) {
    for (const item of extractMath(e[k] || '')) {
      if (item.kind === 'same-line-display') errs.push(at + ' ' + k + ':' + item.line + '：同一行 $$');
      else if (item.kind === 'UNCLOSED') errs.push(at + ' ' + k + '：$$ 未闭合');
      else for (const x of checkTex(item.tex)) errs.push(at + ' ' + k + ':' + item.line + '：' + x);
    }
  }
});

const bySubject = {};
for (const e of EXAMS) bySubject[e.subject] = (bySubject[e.subject] || 0) + 1;
console.log('真题条数 ' + EXAMS.length + ' ｜ ' + Object.entries(bySubject).map(([k, v]) => k + ' ' + v).join(' ｜ '));
console.log('覆盖年份 ' + [...new Set(EXAMS.map(e => e.year))].sort().join(', '));
console.log('知识点 ID 表 ' + known.size + ' 个');
if (errs.length) {
  console.log('❌ 问题 ' + errs.length + ' 处：');
  for (const e of errs.slice(0, 60)) console.log('  · ' + e);
  if (errs.length > 60) console.log('  …还有 ' + (errs.length - 60) + ' 处');
  process.exit(1);
}
console.log('✅ 全部 ' + EXAMS.length + ' 条真题字段完整、知识点 ID 有效、LaTeX 合规、无重复题');
