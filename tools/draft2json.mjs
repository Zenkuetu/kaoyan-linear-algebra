// 草稿 → JSON：把 deep-v2/_draft/<id>.md（纯文本，零转义风险）转成 deep-v2/m-<章>-a.json，
// 并在写盘前做一遍结构与 LaTeX 校验（写手据此自查，不合格就不出 JSON）。
// 用法: node draft2json.mjs --key det        # 单章
//       node draft2json.mjs --all            # 全部章节
//       node draft2json.mjs --ids a,b,c --draftdir X --out Y   # 测试用
import fs from 'node:fs';
import path from 'node:path';
import { checkText, visualWidth } from './latexcheck.mjs';

import { CODEGEN as ROOT, DRAFT, MANIFEST as MAN } from './paths.mjs';   // 路径统一由 paths.mjs 解析（默认相对仓库根推导）

const args = process.argv.slice(2);
const getArg = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const key = getArg('--key');
const all = args.includes('--all');
const idsArg = getArg('--ids');
const draftDir = getArg('--draftdir') || DRAFT;
const outOverride = getArg('--out');
const STRICT = getArg('--checks') !== 'off';

const man = JSON.parse(fs.readFileSync(MAN, 'utf8'));
const PLAN = man.plan, ID2MOD = man.idToModule;
const SHORT2MOD = {};
for (const [mod, v] of Object.entries(PLAN)) SHORT2MOD[v.short] = mod;

const SECTIONS = ['ONELINE', 'PAIN', 'GAP', 'INTRO', 'DETAIL', 'USAGE', 'SELFCHECK'];
const CN = ['一', '二', '三', '四', '五', '六'];

function parseDraft(text, id) {
  const errs = [];
  const sec = {};
  let cur = null;
  for (const raw of String(text).replace(/\r\n/g, '\n').split('\n')) {
    const h = /^#{2,3}\s*([A-Z]+)\s*$/.exec(raw.trim());
    if (h) {
      const name = h[1];
      if (!SECTIONS.includes(name)) { errs.push(id + '：未知小节标记 ### ' + name + '（只允许 ' + SECTIONS.join('/') + '）'); cur = null; continue; }
      cur = name; sec[name] = []; continue;
    }
    if (cur) sec[cur].push(raw);
  }
  const out = {};
  for (const s of SECTIONS) {
    const body = (sec[s] || []).join('\n').trim();
    if (!body) errs.push(id + '：缺少或空的 ### ' + s + ' 小节');
    out[s] = body;
  }
  if (errs.length) return { errs, out: null };

  const list = (s) => out[s].split('\n').map(l => l.trim()).filter(Boolean)
    .map(l => l.replace(/^(\d+[.、)]|[-*])\s*/, '').trim()).filter(Boolean);

  const obj = {
    oneline: out.ONELINE.replace(/\s*\n\s*/g, ' ').trim(),
    pain: out.PAIN,
    gap: out.GAP,
    intro: out.INTRO,
    detail: out.DETAIL,
    usage: list('USAGE'),
    selfcheck: list('SELFCHECK'),
  };
  return { errs, out: obj };
}

function validate(id, o, strict = true) {
  const e = [];
  for (const f of ['oneline', 'pain', 'gap', 'intro', 'detail']) e.push(...checkText(o[f], id + '.' + f));
  for (const [i, x] of o.usage.entries()) e.push(...checkText(x, id + '.usage[' + (i + 1) + ']'));
  for (const [i, x] of o.selfcheck.entries()) e.push(...checkText(x, id + '.selfcheck[' + (i + 1) + ']'));

  if (!strict) return e;   // --checks off：只查 LaTeX 与语法，不查内容规范（用于往返测试）

  const w = visualWidth(o.oneline);
  if (w > 46) e.push(id + '：oneline 视觉宽度 ' + w + ' > 46（请缩短）');

  if (o.usage.length < 3) e.push(id + '：usage 只有 ' + o.usage.length + ' 条（要 3 条：选择/填空/解答）');
  if (o.selfcheck.length !== 3) e.push(id + '：selfcheck 应为 3 条，现在 ' + o.selfcheck.length + ' 条');

  // 坑必须显式编号，且引入段逐条"补上"
  const gapMarks = CN.filter(n => new RegExp('第' + n + '个坑|第' + n + '，|坑' + n + '|劣势' + n + '|第' + n + '个劣势').test(o.gap)).length;
  if (gapMarks < 3) e.push(id + '：gap 里带编号的"坑/劣势"只有 ' + gapMarks + ' 条（要 3 条，例如「坑一 / 坑二 / 坑三」或「第一个坑 / 第二个坑 / 第三个坑」）');
  const fixes = (o.intro.match(/补上/g) || []).length;
  if (fixes < 3) e.push(id + '：intro 里"补上"的回应只有 ' + fixes + ' 条（要有 3 条，编号与 gap 完全一致）');

  // 跨节引用必须解析得到（同 check-notes.mjs 的规则 C）
  const ord = [...o.intro.matchAll(/对应第([一二三四五六])个(坑|劣势|条)/g)].map(m => ({ i: CN.indexOf(m[1]), w: m[2] }));
  const ord2 = [...o.intro.matchAll(/第([一二三四五六])个(坑|劣势|条)补上/g)].map(m => ({ i: CN.indexOf(m[1]), w: m[2] }));
  const lab = [...o.intro.matchAll(/(坑|劣势|条)([一二三四五六])补上/g)].map(m => ({ i: CN.indexOf(m[2]), w: m[1] }));
  const refs = ord.length ? ord : (ord2.length ? ord2 : lab);
  if (refs.length) {
    const w = refs[0].w, need = Math.max(...refs.map(r => r.i)) + 1;
    let defined = 0;
    for (let i = 0; i < CN.length; i++) {
      if (new RegExp('第' + CN[i] + '[，,、]|第' + CN[i] + '个' + w + '|' + w + CN[i] + '|' + w + '第' + CN[i]).test(o.gap)) defined = i + 1; else break;
    }
    if (defined < need) e.push(id + '：intro 引用了"' + w + CN[need - 1] + '"，但 gap 里只有 ' + defined + ' 条带编号的' + w + '（悬空引用）');
  }
  return e;
}

// ---------- 决定要处理哪些 id ----------
let targets = [];
if (idsArg) targets = idsArg.split(',').map(s => s.trim()).filter(Boolean);
else if (all) targets = Object.keys(ID2MOD);
else if (key) {
  const mod = SHORT2MOD[key];
  if (!mod) { console.error('未知 --key：' + key + '（可用：' + Object.keys(SHORT2MOD).join(', ') + '）'); process.exit(2); }
  targets = Object.keys(ID2MOD).filter(id => ID2MOD[id] === mod);
} else { console.error('用法: node draft2json.mjs --key det | --all | --ids a,b --draftdir X --out Y'); process.exit(2); }

const built = {};       // moduleId -> { id: obj }
const allErrs = [];
const missing = [];
for (const id of targets) {
  const f = path.join(draftDir, id + '.md');
  if (!fs.existsSync(f)) { missing.push(id); continue; }
  const { errs, out } = parseDraft(fs.readFileSync(f, 'utf8'), id);
  if (errs.length) { allErrs.push(...errs); continue; }
  const v = validate(id, out, STRICT);
  if (v.length) { allErrs.push(...v); continue; }
  const mod = ID2MOD[id] || 'rt';   // 'rt' = 测试模式（用 --out 时才会出现）
  (built[mod] = built[mod] || {})[id] = out;
}

// ---------- 报告 ----------
console.log('目标知识点 ' + targets.length + ' 个 ｜ 合格 ' + Object.values(built).reduce((a, b) => a + Object.keys(b).length, 0) + ' 个 ｜ 缺草稿 ' + missing.length + ' 个 ｜ 问题 ' + allErrs.length + ' 处');
if (missing.length) console.log('缺草稿：' + missing.join(', '));
for (const e of allErrs.slice(0, 40)) console.log('  ✗ ' + e);
if (allErrs.length > 40) console.log('  …还有 ' + (allErrs.length - 40) + ' 处');

if (allErrs.length || missing.length) {
  console.log('\n未写盘（先把上面的问题改掉再跑一次）。');
  process.exit(1);
}

// ---------- 写盘 ----------
if (outOverride) {
  fs.writeFileSync(outOverride, JSON.stringify(Object.assign({}, ...Object.values(built)), null, 2) + '\n', 'utf8');
  console.log('已写出（测试模式）：' + outOverride);
} else {
  for (const [mod, obj] of Object.entries(built)) {
    if (PLAN[mod].inPlace) {
      // 就地更新既有笔记：只覆盖草稿给出的字段，其余字段保持原样
      const byFile = {};
      for (const [id, o] of Object.entries(obj)) {
        const f = man.inPlace[id];
        if (!f) { console.error('找不到 ' + id + ' 所属的 JSON 文件'); process.exit(1); }
        (byFile[f] = byFile[f] || {})[id] = o;
      }
      for (const [f, patch] of Object.entries(byFile)) {
        const full = path.join(ROOT, 'deep-v2', f);
        const j = JSON.parse(fs.readFileSync(full, 'utf8'));
        for (const [id, o] of Object.entries(patch)) {
          if (!j[id]) { console.error(f + ' 里没有 ' + id); process.exit(1); }
          j[id] = Object.assign({}, j[id], o);
        }
        fs.writeFileSync(full, JSON.stringify(j, null, 2) + '\n', 'utf8');
        console.log('已就地更新：' + f + '（' + Object.keys(patch).length + ' 个知识点）');
      }
      continue;
    }
    const f = path.join(ROOT, 'deep-v2', 'm-' + PLAN[mod].short + '-a.json');
    // 合并写回：用 --ids 只改一部分知识点时，不能把文件里其余知识点冲掉
    // （踩过的坑：向量章用 --ids 传 8 个 id，结果 13 个点的 JSON 被覆盖成 8 个）
    let prev = {};
    if (fs.existsSync(f)) {
      try { prev = JSON.parse(fs.readFileSync(f, 'utf8')); }
      catch (e) { console.error('已有 ' + path.basename(f) + ' 解析失败，将以草稿为准重建：' + e.message); prev = {}; }
    }
    const merged = Object.assign({}, prev, obj);
    fs.writeFileSync(f, JSON.stringify(merged, null, 2) + '\n', 'utf8');
    const kept = Object.keys(merged).length - Object.keys(obj).length;
    console.log('已写出：' + path.basename(f) + '（本次更新 ' + Object.keys(obj).length + ' 个知识点' + (kept > 0 ? '，保留原有 ' + kept + ' 个' : '') + '）');
  }
}
console.log('✅ 全部通过校验');
