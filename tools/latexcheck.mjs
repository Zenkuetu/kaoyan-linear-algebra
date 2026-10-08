// LaTeX 与结构校验的共享实现（check-notes.mjs 与 draft2json.mjs 都用它，避免两套标准）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const wl = JSON.parse(fs.readFileSync(path.join(HERE, 'latex-whitelist.json'), 'utf8'));
export const CMD = new Set(wl.commands);
export const ENV = new Set(wl.environments);
const EXTRA_CMDS = ('alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota kappa lambda mu nu xi omicron pi varpi rho varrho sigma varsigma tau upsilon phi varphi chi psi omega '
+ 'Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega le leq ge geq ne neq iff Leftrightarrow leftrightarrow Rightarrow rightarrow Leftarrow leftarrow mapsto to implies impliedby '
+ 'xrightarrow cdot cdots ldots dots vdots ddots longrightarrow longleftarrow Longrightarrow Longleftarrow to times div pm mp ast star circ bullet sum prod int iint iiint oint lim infty partial nabla forall exists nexists in notin ni subset supset subseteq supseteq cup cap setminus emptyset varnothing '
+ 'sin cos tan cot sec csc arcsin arccos arctan sinh cosh tanh log ln lg exp det dim ker deg gcd lcm max min sup inf arg '
+ 'frac dfrac tfrac cfrac binom dbinom tbinom sqrt overset underset stackrel overbrace underbrace overline underline widehat widetilde vec dot ddot mathbf mathrm mathit mathsf mathtt mathcal mathfrak mathbb boldsymbol bmod pmod mod '
+ 'left right middle lvert rvert lVert rVert vert Vert mid langle rangle lceil rceil lfloor rfloor backslash quad qquad hspace vspace hline hdashline cline '
+ 'text textbf textit textrm textsf texttt mbox operatorname begin end tag notag nonumber label ref eqref '
+ 'nequiv approx sim simeq cong equiv propto parallel perp angle triangle square aligned align alignat gathered split cases dcases rcases array matrix pmatrix bmatrix Bmatrix vmatrix Vmatrix smallmatrix subarray textcolor colorbox boxed fcolorbox color oplus ominus otimes oslash odot bigoplus bigotimes coprod').split(/\s+/);
for (const c of EXTRA_CMDS) CMD.add(c);
// TeX/MathJax 的「尺寸与样式」原语：Obsidian 的 MathJax 支持，但不在符号表里，单独放行
for (const c of ('displaystyle textstyle scriptstyle scriptscriptstyle big Big bigg Bigg bigl bigr Bigl Bigr biggl biggr Biggl Biggr limits nolimits allowbreak overrightarrow overleftarrow overleftrightarrow underrightarrow underleftarrow').split(' ')) CMD.add(c);
for (const e of ['aligned','align','align*','alignat','alignat*','gathered','gather','gather*','split','cases','dcases','rcases','array','matrix','pmatrix','bmatrix','Bmatrix','vmatrix','Vmatrix','smallmatrix','subarray','equation','equation*','CD']) ENV.add(e);

// 从一段 Markdown 里抽出所有数学片段
export function extractMath(text) {
  const items = [];
  const lines = String(text).split('\n');
  let inDisplay = false, buf = [], start = 0;
  lines.forEach((line, i) => {
    if (line.trim() === '$$') {
      if (inDisplay) { items.push({ tex: buf.join('\n'), line: start, kind: 'display' }); buf = []; inDisplay = false; }
      else { inDisplay = true; start = i + 1; }
      return;
    }
    if (inDisplay) { buf.push(line); return; }
    for (const m of line.matchAll(/\$\$([^$\n]+)\$\$/g)) items.push({ tex: m[1], line: i + 1, kind: 'same-line-display' });
    const stripped = line.replace(/\$\$[^$]*\$/g, '');
    for (const m of stripped.matchAll(/\$([^$\n]+)\$/g)) items.push({ tex: m[1], line: i + 1, kind: 'inline' });
  });
  if (inDisplay) items.push({ tex: buf.join('\n'), line: start, kind: 'UNCLOSED' });
  return items;
}

// 单个数学片段的检查
export function checkTex(tex) {
  const errs = [];
  let depth = 0;
  for (let i = 0; i < tex.length; i++) {
    const c = tex[i];
    if (c === '\\') { i++; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth < 0) { errs.push('多余 }'); break; } }
  }
  if (depth > 0) errs.push('缺少 ' + depth + ' 个 }');
  const stack = [];
  for (const m of tex.matchAll(/\\(begin|end)\s*\{([^}]*)\}/g)) {
    const [, kind, name] = m;
    if (!ENV.has(name)) errs.push('未知环境 ' + name);
    if (kind === 'begin') stack.push(name);
    else { const top = stack.pop(); if (top !== name) errs.push('环境不匹配：\\begin{' + (top || '空') + '} vs \\end{' + name + '}'); }
  }
  if (stack.length) errs.push('未闭合环境 ' + stack.join(','));
  // 逐字符扫描命令名：矩阵换行符 \\ 后面若紧跟字母（如 a\\b），不能把第二个反斜杠当成命令开头
  for (let i = 0; i < tex.length; i++) {
    if (tex[i] !== '\\') continue;
    if (tex[i + 1] === '\\') { i++; continue; }   // 行分隔符 \\：整体跳过，不当作命令
    const m = /^[A-Za-z]+/.exec(tex.slice(i + 1));
    if (!m) continue;                              // \, \; \{ 这类符号命令不检查
    if (!CMD.has(m[0])) errs.push('未知命令 \\' + m[0]);
    i += m[0].length;
  }
  if (tex.includes('[[')) errs.push('公式内含 [[（会被当双链）');
  if (/[\u4e00-\u9fa5]/.test(tex) && !/\\text\{[^}]*[\u4e00-\u9fa5]/.test(tex)) errs.push('公式内含中文');
  return errs;
}

// 一段文本的完整检查（返回问题数组）
export function checkText(text, where = '') {
  const errs = [];
  for (const it of extractMath(text)) {
    if (it.kind === 'same-line-display') errs.push(where + ' 第' + it.line + '行：同一行 $$（会破坏双链）');
    if (it.kind === 'UNCLOSED') { errs.push(where + ' 第' + it.line + '行：$$ 未闭合'); continue; }
    const e = checkTex(it.tex);
    if (e.length) errs.push(where + ' 第' + it.line + '行 [' + it.tex.replace(/\n/g, ' ').slice(0, 50) + '] ' + e.join('；'));
  }
  // $ 配对（排除 $$）
  const single = String(text).replace(/\$\$/g, '');
  const n = (single.match(/\$/g) || []).length;
  if (n % 2) errs.push(where + '：$ 数量为奇数（' + n + ' 个），配对不上');
  return errs;
}

// oneline 的"渲染后视觉宽度"：先剥掉 LaTeX 标记，中文/全角按 2、其余按 1。
// 与 check-oneline.mjs 完全同一套算法（唯一实现在这里，避免两处标准不一致）。
const TEX_CMD_MAP = { '\\mathrm': '', '\\operatorname': '', '\\lvert': '|', '\\rvert': '|', '\\mid': '|', '\\cdot': '·', '\\times': '×', '\\ne': '≠', '\\le': '≤', '\\ge': '≥', '\\iff': '⇔', '\\Rightarrow': '⇒', '\\quad': ' ', '\\qquad': '  ', '\\begin': '', '\\end': '' };
export function stripTex(s) {
  return String(s)
    .replace(/\$([^$]*)\$/g, (m, g) => g.replace(/\\[A-Za-z]+/g, m2 => (TEX_CMD_MAP[m2] !== undefined ? TEX_CMD_MAP[m2] : '')).replace(/[{}]/g, ''))
    .replace(/[*_`]/g, '');
}
export function visualWidth(s) {
  return [...stripTex(s)].reduce((n, ch) => n + (/[\u2E80-\uA4CF\uAC00-\uD7FF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/.test(ch) ? 2 : 1), 0);
}
