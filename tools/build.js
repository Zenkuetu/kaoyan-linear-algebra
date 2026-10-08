// 构建器：由知识图谱数据生成 Obsidian 库（笔记 + Canvas 关系网 + Mermaid 图）
const fs = require('fs');
const path = require('path');

// ===== 载入数据 =====
const examDir = path.join(__dirname, 'exams');
const examFiles = fs.existsSync(examDir) ? fs.readdirSync(examDir).filter(f => f.endsWith('.js')).sort().map(f => path.join(examDir, f)) : [];
const files = ['dc.js', 'matrices.js', 'vectors.js', 'equations.js', 'eigen.js', 'quadratic.js', 'edges.js', 'exams.js'].map(f => path.join(__dirname, f)).concat(examFiles);
const src = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
const loader = new Function('__bootstrap',
  src + '\nreturn __bootstrap({MODULES: [].concat(DC, MX, VC, EQ, EG, QF), EDGES: EDGE_LIST, EXAMS: EXAMS});');
const { MODULES, EDGES, EXAMS } = loader(x => x);


// ===== 表格对齐（输出前统一跑一遍）=====
// 关键点：切分单元格时必须跳过 [[目标|显示名]] 内部的那个 |，
// 否则补白会落进 wikilink 里（目标名后面多出空格），Obsidian 就解析不到这个文件了。
// 这一坑在真实使用中踩到过：外部表格对齐工具把空格塞进链接，导致三篇带别名的笔记"失去链接"。
const __wide = c => /[\u1100-\u115F\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE6F\uFF00-\uFF60\uFFE0-\uFFE6]/.test(c) ? 2 : 1;
const __visWidth = s => [...s].reduce((n, c) => n + __wide(c), 0);
function __visible(cell) {
  let s = String(cell).trim();
  s = s.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, a, b) => b);
  s = s.replace(/\[\[([^\]]+)\]\]/g, (_, a) => a);
  s = s.replace(/`([^`]*)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1');
  return s;
}
function __splitRow(line) {
  const s = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  const cells = []; let cur = ''; let link = 0;
  for (let i = 0; i < s.length; i++) {
    const two = s.slice(i, i + 2);
    if (two === '[[') { link++; cur += two; i++; continue; }
    if (two === ']]') { link = Math.max(0, link - 1); cur += two; i++; continue; }
    if (s[i] === '|' && link === 0) { cells.push(cur); cur = ''; continue; }
    cur += s[i];
  }
  cells.push(cur);
  return cells.map(c => c.trim());
}
function alignTables(text) {
  const lines = String(text).split('\n');
  let i = 0;
  while (i < lines.length) {
    if (lines[i].trim().startsWith('|')) {
      let j = i;
      while (j + 1 < lines.length && lines[j + 1].trim().startsWith('|')) j++;
      if (j > i) {
        const rows = lines.slice(i, j + 1).map(__splitRow);
        const isSep = r => r.every(c => /^:?-{2,}:?$/.test(c.replace(/\s/g, '')));
        if (rows.length >= 2 && isSep(rows[1])) {
          const nCol = Math.max(...rows.map(r => r.length));
          const w = new Array(nCol).fill(0);
          for (let k = 0; k < rows.length; k++) { if (k === 1) continue; for (let c = 0; c < nCol; c++) w[c] = Math.max(w[c], __visWidth(__visible(rows[k][c] || ''))); }
          for (let k = 0; k < rows.length; k++) {
            const out = [];
            for (let c = 0; c < nCol; c++) {
              const cell = rows[k][c] || '';
              out.push(k === 1 ? '-'.repeat(Math.max(3, w[c])) : cell + ' '.repeat(Math.max(0, w[c] - __visWidth(__visible(cell)))));
            }
            lines[i + k] = '| ' + out.join(' | ') + ' |';
          }
        }
      }
      i = j + 1;
    } else i++;
  }
  return lines.join('\n');
}

// ===== 校验 =====
const byId = new Map();
const dupes = [];
for (const m of MODULES) for (const p of m.points) {
  if (byId.has(p.id)) dupes.push(p.id);
  p.chapter = m.title; p.moduleTitle = m.title; p.moduleId = m.id;
  byId.set(p.id, p);
}
// 汇总页的 frontmatter：给它们一条"索引"类型的边，图谱里就不会出现飘在外面的孤立页。
// type 名 = 属性名（Extended Graph 按属性名给连线上色），`索引` 用不着上色，可在图例里关掉。
function indexFront(links) {
  const L = ['---', '索引:'];
  for (const l of links) L.push('  - "[[' + safeName(l) + '|' + l + ']]"');
  L.push('---', '');
  return L;
}
const CHAPTER_TITLES = MODULES.map(m => m.title);

// 数二要求与否由标签推导：带 基础 或 数二 ⟺ 数二要求（供总览与对照表共用，故放在顶层）
const num2Points = [...byId.values()].filter(p => needsNum2(p.tags));
const skipNum2 = [...byId.values()].filter(p => !needsNum2(p.tags));

const badEdges = EDGES.filter(e => !byId.has(e[0]) || !byId.has(e[1]));const selfEdges = EDGES.filter(e => e[0] === e[1]);
if (dupes.length) { console.error('重复 id:', dupes); process.exit(1); }
if (badEdges.length) { console.error('悬空边:', JSON.stringify(badEdges)); process.exit(1); }
if (selfEdges.length) { console.error('自环边:', JSON.stringify(selfEdges)); process.exit(1); }

const OUT = process.argv[2];
if (!OUT) { console.error('用法: node build.js <输出目录>'); process.exit(1); }
const NOTES = path.join(OUT, '知识点');
function mkdirp(d) { fs.mkdirSync(d, { recursive: true }); }
mkdirp(OUT); mkdirp(NOTES); mkdirp(path.join(OUT, '章节'));

// 文件名安全化：Obsidian/Windows 文件名不接受 * / \ : ? " < > |，统一换全角 ＿
// （只影响文件名；笔记正文与显示名保留数学记号 A*、按行/列展开）
// 文件名安全化：Obsidian / Windows 不接受 * / \ : ? " < > | # ^ [ ]，
// 做法不是一律换成 ＿（那样 "A*" 会变成 "A＿"，文件名没法读），而是各换成**合法的形近字符**，
// 这样文件名与标题长得一样，链接目标与显示名也一致。
//   * → ∗(U+2217)  / → ／  : → ：  ? → ？  " → ＂  < → ＜  > → ＞  | → ｜  \ → ＼  # → ＃  ^ → ＾  [ → ［  ] → ］
const CHAR_MAP = {
  '*': '∗', '/': '／', ':': '：', '?': '？', '"': '＂', '<': '＜', '>': '＞',
  '|': '｜', '\\': '＼', '#': '＃', '^': '＾', '[': '［', ']': '］',
};
function safeName(s) { return String(s).replace(/[\\/:*?"<>|#^[\]]/g, c => CHAR_MAP[c] || '＿'); }
// 标签只表示"谁要求"：基础（三卷共同）/ 数一（含数三）/ 数二（数二也要求）。
// 「数二不要求」不再用额外标签表示，而是**推导**出来的：没带 基础 也没带 数二 ⟺ 数二不要求。
// 这样标签列只回答一个问题，不会再出现"数一 非数二"这种同义重复。
function needsNum2(tags) { return tags.includes('基础') || tags.includes('数二'); }
function dispTags(tags) { return tags; }   // 兼容保留：现在没有需要隐藏的标签
function tagLabel(tags) { return dispTags(tags).map(t => '`' + t + '`').join(' '); }
function chapterLink(m) { return '[[' + safeName(m.title) + '|' + m.title + ']]'; }

const TYPE = {
  iff:  { label: '充要（⇔）',        short: '充要',   color: '1', emoji: '🟥' },
  suff: { label: '充分不必要（⇒）',  short: '充分',   color: '2', emoji: '🟧' },
  need: { label: '必要不充分（⇐）',  short: '必要',   color: '6', emoji: '🟪' },
  none: { label: '既不充分也不必要', short: '无关',   color: '5', emoji: '⬜' },
  rel:  { label: '概念关联（同源/构成）', short: '关联', color: '4', emoji: '🟩' },
};
// 属性名（= 图谱连线类型名）后面带的方向符号：让连线标签自己说明蕴含方向
const ARROW = { iff: '⇔', suff: '⇒', need: '⇐', none: '', rel: '' };
const TAGS = {
  '基础': { color: '5', summary: '数一、数二、数三共同要求的基础内容' },
  '数一': { color: '2', summary: '数一（含数三）要求' },
  '数二': { color: '4', summary: '数二同样要求' },
};
// 节点取色优先级：数二要求（绿）> 仅数一（橙）> 基础（青）
function nodeColor(p) {
  if (p.tags.includes('数二')) return TAGS['数二'].color;
  if (p.tags.includes('数一')) return TAGS['数一'].color;
  return TAGS['基础'].color;
}
const CANVAS_LIST = [
  ['01 关系网索引（章节结构）', '先看这张：每章一个方块，定位"知识点在哪一章的哪一层"（无连线）'],
  ['02 章内关系网', '同章知识点之间的充分必要关系'],
  ['03 跨章关系网', '判定枢纽如何把全书串成一体'],
  ['04 充要等价网络', EDGES.filter(e => e[2] === 'iff').length + ' 条 A⇔B，选择题里可互相替换'],
  ['05 判定枢纽', '11 个判定主线（可逆/满秩/有解/特征值…）'],
  ['06 数二专用关系网', '已剔除 ' + [...byId.values()].filter(x => !needsNum2(x.tags)).length + ' 个数二不要求的知识点'],
];
// 画布与笔记同在库根目录。注意：Obsidian 的 [[双链]] 默认只解析笔记（.md），
// 指向画布时必须写出 .canvas 扩展名，否则会显示成"未创建的链接"（点击即新建同名空笔记）。
const canvasWiki = n => '[[' + n + '.canvas]]';
const canvasLink = canvasWiki;
const CN_NUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
const num2cn = n => CN_NUM[n - 1] || String(n);
// 库里统一用 Obsidian 原生双链：显示原标题，指向安全文件名；两者不同时用 [[目标|显示]]。
// Obsidian 会把 [[A* 的秩与可逆性判定]] 里的 * 当作"新建文件的非法字符"，因此必须用清洗后的目标名。
function wikiLink(p) {
  const target = safeName(p.title);
  return target === p.title ? '[[' + target + ']]' : '[[' + target + '|' + p.title + ']]';
}
const BASE = m => 'https://github.com/obsidianmd/obsidian-releases/releases/latest';
const CITES = [
  '[中公考研·2025 数学二线性代数大纲原文](http://m.offcn.com/kaoyan/2024/0923/273455.html)',
  '[新东方在线·数二线代范围与重点](https://m.koolearn.com/kaoyan/20260923/1971564.html)',
  '[新东方网·2022 数二考情（线性代数含二次型）](https://mtoutiao.xdf.cn/kaoyan/202109/11220675.html)',
  '[海文考研·数二考查范围（含二次型）](https://www.scwanxue.com/beikao/shuxue/0358757.html)',
];
// 各章的数二覆盖情况（用于对照表）
const NUM2 = {
  'm-det': ['✅ 全部要求', '数二重点：n 阶行列式与化三角形计算'],
  'm-mat': ['✅ 全部要求（含矩阵方程）', '数二重点：运算、逆、秩、含参讨论'],
  'm-vec': ['✅ 要求（限具体坐标向量）', '不考抽象向量空间；施密特正交化在要求内（大纲要求 5）'],
  'm-eq': ['✅ 全部要求', '数二大题高频来源'],
  'm-eig': ['✅ 要求，且为数二绝对重点', '不考相似判定的一般性抽象讨论（只考具体矩阵的可对角化判断）'],
  'm-quad': ['✅ 全部要求', '含用正交变换法与配方法化标准形、正定性判定（与数一要求一致）'],
  'm-space': ['❌ 不要求', '线性空间、线性变换、过渡矩阵均不在数二范围'],
};

function noteName(p) { return safeName(p.title); }
function notePath(p) { return noteName(p) + '.md'; }

// ===== 0. 载入"通俗层"内容 =====
// 两代内容并存，后者优先：
//   deep/    第一代（oneline / example / intuition / exam / selfcheck）
//   deep-v2/ 第二代（oneline / pain / gap / intro / detail / usage / selfcheck）—— 痛点驱动的叙事结构 + LaTeX
const DEEP = new Map();
function loadDeep(sub, gen) {
  const dir = path.join(__dirname, sub);
  if (!fs.existsSync(dir)) return 0;
  let n = 0;
  for (const f of fs.readdirSync(dir).filter(x => /^m-.*\.json$/.test(x)).sort()) {
    let obj;
    try { obj = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); }
    catch (e) { console.error('deep 文件解析失败: ' + sub + '/' + f + ' —— ' + e.message); process.exit(1); }
    for (const [id, v] of Object.entries(obj)) {
      if (!byId.has(id)) { console.error(sub + '/' + f + ' 含未知知识点 id: ' + id); process.exit(1); }
      DEEP.set(id, { ...(DEEP.get(id) || {}), ...v, __gen: gen });
      n++;
    }
  }
  return n;
}
const deepGen1 = loadDeep('deep', 1);
const deepGen2 = loadDeep('deep-v2', 2);   // 第二代覆盖第一代
// 防止矩阵记号 [[1,1],[0,1]] 被 Obsidian 当成双链：在两个方括号之间插入零宽空格
const ZWSP = '\u200B';
const noLink = s => String(s).replace(/\[\[/g, '[' + ZWSP + '[');

// 小节标题的语义标记：彩色圆点（emoji）。选它是因为它在阅读视图和实时预览里
// 都能显示，而且不会污染大纲面板（大纲读的是标题原始文本，塞 HTML 会显示成乱码）。
// CSS 片段再按这个 span 的 class 给整条标题铺底色（用 :has()）。
const HX_EMOJI = {
  pain: '🟠',    // 一、先看要解决什么（痛点）
  gap: '🔴',     // 二、直接办法为什么不够（三个坑）
  intro: '🟢',   // 三、于是引入（逐条补上）
  detail: '🔵',  // 四、细节
  usage: '🟣',   // 五、怎么用
  err: '⚠️',     // 六、易错点
  check: '🎯',   // 七、30 秒自测
  rel: '🕸️',     // 八、关系网
  nav: '🧭',     // 十、导航
  exam: '📝',    // 九、真题
};

// ===== 语义着色（只为可读性，不改一个字）=====
// 规则：行首（或列表项/引用里）的 **加粗** 若后面紧跟"："，视为"标签"，染蓝；
//       含"坑/劣势"的条目染红，含"补上"的染绿，含"结论/关键"的染黄。
// 只包一层 <span class="…">：CSS 片段没启用时退化成普通加粗文字，不影响阅读。
// 标签里含 $ 公式的一律不包（避免把行内公式塞进标签里）。
const LABEL_RE = /^(\s*(?:[-*]\s+|>\s+)?)\*\*([^*]+)\*\*：(.*)$/;
// 形如 **算例三**（秩亏）：…… —— 短括号属于标签本身，要一起加粗才会一起上色；
// 长括号（说明性文字）不并进来，保持正常颜色。
const LABEL_PAREN_RE = /^(\s*(?:[-*]\s+|>\s+)?)\*\*([^*]+)\*\*（([^）]{1,10})）：(.*)$/;
const ITEM_RE = /^(\s*[-*]\s+)\*\*((?:坑|劣势|第)[^*]{0,24}?)\*\*(.*)$/;
function decorate(text) {
  return String(text).split('\n').map(line => {
    // span 里只放一个零宽字符当"标记"：Obsidian 不解析 HTML 标签内部的行内 Markdown 与公式，
    // 所以 **加粗** 与 $公式$ 必须留在 span 外面；颜色由 CSS 的 `span.X + strong` 命中的那个加粗块承担。
    const MARK = '<span class="%C">\u200b</span>';
    const labelClass = t => /结论|关键|要记/.test(t) ? 'key'
      : (/补上|解决了/.test(t) ? 'fix'
        : (/坑|劣势|缺点|误区|反例|陷阱|易错/.test(t) ? 'pit' : 'lab'));
    let m = LABEL_PAREN_RE.exec(line);
    if (m && !/一句话/.test(m[2]) && m[2].indexOf('$') < 0) {
      const cls = labelClass(m[2]);
      return m[1] + MARK.replace('%C', cls) + '**' + m[2] + '（' + m[3] + '）**：' + m[4];
    }
    m = ITEM_RE.exec(line);
    if (m && /坑|劣势/.test(m[2])) {
      const cls = /补上/.test(m[2]) ? 'fix' : 'pit';
      return m[1] + MARK.replace('%C', cls) + '**' + m[2] + '**' + m[3];
    }
    m = LABEL_RE.exec(line);
    if (m && !/一句话/.test(m[2]) && m[2].indexOf('$') < 0) {
      return m[1] + MARK.replace('%C', labelClass(m[2])) + '**' + m[2] + '**：' + m[3];
    }
    return line;
  }).join('\n');
}

// ===== 1. 生成知识点笔记 =====
let noteCount = 0;
let deepUsed = 0;
const deepMissing = [];
const notesByModule = new Map(MODULES.map(m => [m.id, []]));
for (const m of MODULES) {
  const dir = path.join(NOTES, safeName(m.title));
  mkdirp(dir);
  for (const p of m.points) {
    notesByModule.get(m.id).push(p);
    const outs = EDGES.filter(e => e[0] === p.id).map(e => ({ other: byId.get(e[1]), t: e[2], why: e[3], dir: 'out' }));
    const ins = EDGES.filter(e => e[1] === p.id).map(e => ({ other: byId.get(e[0]), t: e[2], why: e[3], dir: 'in' }));
    const allTags = [...p.tags, '线代', '考研数学'];
    let sectionNo = 0;
    const L = [];
    L.push('---');
    L.push('tags:');
    for (const t of allTags) L.push('  - ' + t);
    // 章节写成 wikilink（而不是纯文本）：每篇笔记因此都有一条"章节"类型的边连到章节页，
    // 图谱里再也不会出现"知识点孤岛"，章节页也重新成为连接枢纽。
    // 嫌它占地方的话，可以在图谱图例面板里把 `章节` 这个类型关掉。
    L.push('章节: "[[' + safeName(m.title) + '|' + m.title + ']]"');
    L.push('层次: ' + dispTags(p.tags).join('+'));
    L.push('知识点ID: ' + p.id);
    // 出边写成"按类型分组的属性"：Obsidian 的 frontmatter 里属性名即"连线类型"，
    // 配合 Extended Graph 插件（按属性名给连线上色）就能实现"连线颜色 = 充要/充分/必要"。
    // 只写出边：一条 A ⇒ B 的关系存在 A 这篇笔记里，方向才不会被表达成双向。
    // 属性名后面带上方向符号，是为了让**连线上的标签自身**就把蕴含方向说清楚：
    //   充要⇔ 两端可互换 ｜ 充分⇒ 顺箭头蕴含（本点 ⇒ 对方）｜ 必要⇐ 逆箭头蕴含（对方 ⇒ 本点）
    // 因为"本点是对方的必要条件"等价于"对方是本点的充分条件"，光看箭头容易读反，标在字面上最省事。
    for (const t of ['iff', 'suff', 'need', 'none', 'rel']) {
      const group = outs.filter(o => o.t === t);
      if (!group.length) continue;
      L.push(TYPE[t].short + ARROW[t] + ':');
      for (const o of group) L.push('  - "[[' + safeName(o.other.title) + '|' + o.other.title + ']]"');
    }
    L.push('---');
    L.push('');
    L.push('# ' + p.title);
    L.push('');
    const d = DEEP.get(p.id);
    if (d) deepUsed++; else deepMissing.push(p.id);
    const push = (s) => { for (const line of decorate(String(s)).split(/\r?\n/)) L.push(noLink(line)); L.push(''); };
    const head = (t, role) => {
      const num = num2cn(++sectionNo) + '、' + t;
      const mark = role ? '<span class="hx hx-' + role + '">' + HX_EMOJI[role] + '</span> ' : '';
      L.push('## ' + mark + num);
      L.push('');
    };
    // 0. 一句话 + 元信息（先给结论）
    L.push('> <span class="oneline">\u200b</span>**一句话**：' + noLink(d && d.oneline ? d.oneline : p.summary));
    L.push('');
    L.push('**考试层次**：' + tagLabel(p.tags) + ' ｜ **章节**：' + chapterLink(m));
    L.push('');
    // 新叙事结构：痛点 → 旧办法的不足 → 引入 → 细节 → 用法 → 易错 → 自测 → 关系网
    // 没有新内容的点退回旧骨架（核心表述 + 结论），保证 103 篇都能渲染
    if (d && (d.pain || d.gap || d.intro)) {
      if (d.pain) { head('先看要解决什么', 'pain'); push(d.pain); }
      if (d.gap) { head('直接办法为什么不够', 'gap'); push(d.gap); }
      if (d.intro) { head('于是引入：' + (d.introTitle || p.title.replace(/（.*?）/g, '')), 'intro'); push(d.intro); }
      head('细节', 'detail');
      if (d.detail) push(d.detail);
      else {
        push(p.summary + '\n\n' + p.note);
        if (p.prop && p.prop.length) { for (const x of p.prop) L.push('- ' + noLink(x)); L.push(''); }
      }
    } else {
      if (d && d.example) { head('先看个例子'); push(d.example); }
      if (d && d.intuition) { head('直观理解'); push(d.intuition); }
      head('定义与关键结论', 'detail');
      push(p.summary + '\n\n' + p.note);
      if (p.prop && p.prop.length) { for (const x of p.prop) L.push('- ' + noLink(x)); L.push(''); }
    }
    // 怎么用 / 考试怎么考
    if (d && Array.isArray(d.usage) && d.usage.length) {
      head('怎么用', 'usage');
      d.usage.forEach((x, i) => L.push((i + 1) + '. ' + noLink(x)));
      L.push('');
    } else if (d && Array.isArray(d.exam) && d.exam.length) {
      head('考试怎么考', 'usage');
      d.exam.forEach((x, i) => L.push((i + 1) + '. ' + noLink(x)));
      L.push('');
    }
    // 易错点
    if (p.pitfalls && p.pitfalls.length) {
      head('易错点', 'err');
      for (const x of p.pitfalls) L.push('- ⚠️ ' + noLink(x));
      L.push('');
    }
    // 6. 自测
    if (d && Array.isArray(d.selfcheck) && d.selfcheck.length) {
      head('30 秒自测', 'check');
      for (const x of d.selfcheck) L.push('- [ ] ' + noLink(x));
      L.push('');
    }
    // 7. 关系网（折叠，避免占满正文）
    // 用 Obsidian 原生"可折叠 callout"（> [!quote]- ），**不要用 <details>**：
    // <details> 是 HTML 块，按 Markdown 规则遇到空行就结束 —— 里面的表格/图例会跑到块外，
    // 结果是"折叠框是空的、内容永远展开、点箭头毫无反应"（用户实际反馈过）。
    // callout 由 Obsidian 自己渲染，阅读视图与实时预览都能折。
    const nRel = outs.length + ins.length;
    if (nRel) {
      const cIff = [...outs, ...ins].filter(o => o.t === 'iff').length;
      L.push('> [!quote]- ' + HX_EMOJI.rel + ' ' + num2cn(++sectionNo) + '、关系网（点开查看 ' + nRel + ' 条关系：' + cIff + ' 条充要）');
      L.push('>');
      L.push('> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |');
      L.push('> | --- | --- | --- | --- |');
      for (const o of outs) L.push('> | 本点 ⇒ 对方 | ' + TYPE[o.t].emoji + ' ' + TYPE[o.t].label + ' | ' + wikiLink(o.other) + ' | ' + o.why + ' |');
      for (const o of ins) L.push('> | 对方 ⇒ 本点 | ' + TYPE[o.t].emoji + ' ' + TYPE[o.t].label + ' | ' + wikiLink(o.other) + ' | ' + o.why + ' |');
      L.push('>');
      L.push('> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。');
      L.push('>');
      L.push('> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）');
      L.push('>');
      for (const o of outs) L.push('> - 本点 ⇒ ' + TYPE[o.t].emoji + ' ' + TYPE[o.t].short + ' ⇒ ' + wikiLink(o.other) + '——' + o.why);
      for (const o of ins) L.push('> - ' + wikiLink(o.other) + ' ⇒ ' + TYPE[o.t].emoji + ' ' + TYPE[o.t].short + ' ⇒ 本点——' + o.why);
      L.push('');
    } else {
      head('关系网', 'rel');
      L.push('> 该知识点独立性强，暂未与其他知识点连线。');
      L.push('');
    }
    // 8.5 真题（线性代数部分）：题面直接展示，答案与解析默认折叠
    const myExams = EXAMS.filter(e => (e.ids || []).includes(p.id))
      .sort((a, b) => (b.year - a.year) || (a.number - b.number));
    if (myExams.length) {
      const years = [...new Set(myExams.map(e => e.year))].sort((a, b) => b - a);
      head('真题' + (years.length ? '（' + years[years.length - 1] + (years.length > 1 ? '–' + years[0] : '') + '）' : ''), 'exam');
      for (const e of myExams) {
        L.push('### ' + e.year + ' 年 · 数学' + ({ '数一': '一', '数二': '二', '数三': '三' }[e.subject] || e.subject) + ' · ' + (e.label || ('第 ' + e.number + ' 题')) + '（' + e.kind + (e.score ? '，' + e.score + ' 分' : '') + '）');
        L.push('');
        push(e.question);
        L.push('> [!success]- 答案与解析');
        L.push('> **答案**：' + e.answer);
        L.push('>');
        for (const line of String(e.analysis).split('\n')) L.push(line.trim() === '' ? '>' : '> ' + line);
        if (e.source) L.push('>');
        if (e.source) L.push('> <small>解析出处：' + e.source + '</small>');
        L.push('');
      }
    }
    head('导航', 'nav');
    L.push('');
    L.push('- 本章：' + chapterLink(m) + ' ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)');
    L.push('- 关系图：' + canvasLink('01 关系网索引（章节结构）') + ' ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)');
    L.push('- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)');
    L.push('');
    fs.writeFileSync(path.join(dir, notePath(p)), alignTables(L.join('\n')), 'utf8');
    noteCount++;
  }
}

// ===== 2. Canvas 关系网由 canvas-v2.js 生成（本脚本只写 Markdown）=====
// 视图清单：01 关系网索引（章节结构）/ 02 章内关系网 / 03 跨章关系网 /
//          04 充要等价网络 / 05 判定枢纽 / 06 数二专用关系网


// ===== 3. 生成 Mermaid 图 =====
const MMAID = { iff: '==>', suff: '-->', need: '-->', none: '-.->', rel: '---' };
let midSeq = 0;
function mermaidFor(edgeList, dir) {
  const used = [];
  for (const e of edgeList) for (const id of [e[0], e[1]]) if (!used.includes(id)) used.push(id);
  const mid = {};
  used.forEach((id, i) => { mid[id] = 'K' + (++midSeq); });
  const esc = s => s.replace(/["()（）\[\]{}⇔⇒*|]/g, ' ').replace(/\s+/g, ' ').trim();
  const L = ['```mermaid', dir, '  %% 线型：==>充要  -->充分/必要(箭头方向即条件强弱)  -.->无关  ---概念关联'];
  for (const id of used) {
    const p = byId.get(id);
    L.push('  ' + mid[id] + '["' + esc(p.title) + '<br/>' + dispTags(p.tags).join('/') + '"]');
  }
  for (const e of edgeList) {
    const arrow = e[2] === 'iff' ? '==>' : (e[2] === 'none' ? '-.->' : (e[2] === 'rel' ? '---' : '-->'));
    const label = TYPE[e[2]].short + '：' + esc(e[3]).slice(0, 18);
    L.push('  ' + mid[e[0]] + ' ' + arrow + '|' + label + '| ' + mid[e[1]]);
  }
  L.push('```');
  return L.join('\n');
}
function short2(id) { return id.replace(/[^a-zA-Z0-9]/g, ''); }

// ===== 4. 生成 MOC / 索引页 =====
const tagStats = { '基础': [], '数一': [], '数二': [] };
for (const p of byId.values()) for (const t of p.tags) if (tagStats[t]) tagStats[t].push(p);
const cnt = {};
for (const e of EDGES) cnt[e[2]] = (cnt[e[2]] || 0) + 1;

function moduleBlock(m) {
  const L = [];
  L.push('### ' + m.title);
  L.push('');
  L.push('> ' + m.summary);
  L.push('');
  L.push('| 知识点 | 层次 | 一句话要点 |');
  L.push('| --- | --- | --- |');
  for (const p of m.points) L.push('| ' + wikiLink(p) + ' | ' + tagLabel(p.tags) + ' | ' + p.summary.replace(/\|/g, '｜') + ' |');
  L.push('');
  return L.join('\n');
}

// 00 总览
{
  const L = [];
  for (const l of indexFront(CHAPTER_TITLES)) L.push(l);
  L.push('# 00 线性代数知识网总览（MOC）');
  L.push('');
  L.push('考研数学线性代数全部知识点清单 + 充分必要关系网。共 **' + byId.size + '** 个知识点、**' + EDGES.length + '** 条关系边。');
  L.push('');
  L.push('## 一、怎么用这个库');
  L.push('');
  L.push('**关系网已按用途拆成 6 张 Canvas，请按下面的顺序看：**');
  L.push('');
  L.push('| 顺序 | 画布 | 用途 | 规模 |');
  L.push('| --- | --- | --- | --- |');
  // 画布说明里的条数按数据实时算，避免写了死数字以后过期
const sameModCount = EDGES.filter(e => byId.get(e[0]) && byId.get(e[1]) && byId.get(e[0]).moduleId === byId.get(e[1]).moduleId).length;
const crossCount = EDGES.length - sameModCount;
const CANVAS_META = {
    '01 关系网索引（章节结构）': '每章一个方块，定位"知识点在哪一章的哪一层"（无连线）',
    '02 章内关系网': '同章知识点之间的充分必要关系（' + sameModCount + ' 条）',
    '03 跨章关系网': '判定枢纽如何把全书串成一体（' + crossCount + ' 条跨章边）',
    '04 充要等价网络': EDGES.filter(e => e[2] === 'iff').length + ' 条 A⇔B 及两端知识点，最该背的一张',
    '05 判定枢纽': '11 个判定主线：可逆/满秩/有解/特征值/惯性指数',
    '06 数二专用关系网': '剔除 ' + [...byId.values()].filter(x => !needsNum2(x.tags)).length + ' 个数二不要求的知识点后的数二版',
  };
  for (const [n, desc] of CANVAS_LIST) L.push('| ' + n.slice(0, 2) + ' | ' + canvasLink(n) + ' | ' + CANVAS_META[n] + ' | — |');
  L.push('');
  L.push('- **想查文字与公式**：' + '[' + '03 基础数一数二对照表](03%20基础数一数二对照表.md)' + ' ｜ ' + '[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)' + ' ｜ ' + '[02 充分必要条件链](02%20充分必要条件链.md)' + '（Mermaid 版，每章一张）');
  L.push('- **节点颜色**：🟦 基础（三卷共同要求）｜🟩 **数二也要求** ｜ 🟧 仅数一（= 数二不要求）；连结颜色：🟥 充要 ⇔ ｜🟧 充分 ⇒ ｜🟪 必要 ⇐ ｜⬜ 无关 ｜🟩 关联。');
  L.push('- **复习顺序建议**：行列式 → 矩阵 → 线性方程组 → 向量 → 特征值 → 二次型。');
  L.push('');
  L.push('**每篇笔记的颜色约定**（标题前那个圆点就是色标；需要 CSS 片段 `linalg-reading` 才会显示成色条）：');
  L.push('');
  L.push('| 标记 | 小节 | 这一段是干什么的 |');
  L.push('| --- | --- | --- |');
  L.push('| 🟠 | 一、先看要解决什么 | 今天这道题卡在哪（痛点） |');
  L.push('| 🔴 | 二、直接办法为什么不够 | 三条走不通的土办法，"红字条目"就是那三条坑 |');
  L.push('| 🟢 | 三、于是引入 | 新概念逐条把上面的坑补上，"绿字条目"= 补法 |');
  L.push('| 🔵 | 四、细节 | 定义、算例、规则（蓝字 = 标签） |');
  L.push('| 🟣 | 五、怎么用 | 选择题／填空题／解答题分别怎么考 |');
  L.push('| ⚠️ | 六、易错点 | 最容易踩的地方 |');
  L.push('| 🎯 | 七、30 秒自测 | 三个自查问题 |');
  L.push('| 🕸️ | 八、关系网 | 与其他知识点的充分必要关系（默认折叠） |');
  L.push('| 📝 | 九、真题 | 该知识点的历年真题（题面直接看，答案与解析默认折叠） |');
  L.push('| 🧭 | 十、导航 | 跳去画布、速查表、易错清单 |');
  L.push('');
  L.push('## 二、范围对照（重要，已按现行大纲核对）');
  L.push('');
  L.push('| 标签 | 含义 | 知识点数 |');
  L.push('| --- | --- | --- |');
  L.push('| `基础` | 数一、数二、数三共同要求 | ' + tagStats['基础'].length + ' |');
  L.push('| `数一` | 数一（含数三）要求 | ' + tagStats['数一'].length + ' |');
  L.push('| `数二` | 数二同样要求（数二重点） | ' + tagStats['数二'].length + ' |');
  L.push('| （无标签） | 只标 `数一` = **数二不要求**（仅数一/数三要求）—— "数二不要求"不用额外标签，直接从标签推导：没带 `基础` 也没带 `数二` 就是它 | ' + skipNum2.length + ' |');
  L.push('');
  L.push('> 因此：本库 ' + byId.size + ' 个知识点中，**数二需掌握 ' + num2Points.length + ' 个**，不要求 ' + skipNum2.length + ' 个（带 `基础` 或 `数二` 即数二要求；只带 `数一` 的即数二不要求）。');
  L.push('');
  L.push('### 数二究竟考到哪？（常被误传，这里按大纲写清）');
  L.push('');
  L.push('| 章节 | 数二 | 说明 |');
  L.push('| --- | --- | --- |');
  for (const m of MODULES) {
    const n2 = NUM2[m.id] || ['—', '—'];
    L.push('| ' + m.title + ' | ' + n2[0] + ' | ' + n2[1] + ' |');
  }
  L.push('');
  L.push('要点提醒：');
  L.push('');
  L.push('- **数二考向量组**（线性相关/无关、极大无关组、向量组的秩、内积与正交规范化），但只考具体坐标向量，不考"向量空间、基、维数、坐标变换"这类抽象理论。');
  L.push('- **数二考特征值，而且是重点**（求特征值特征向量、相似对角化、实对称矩阵的性质、用特征值求行列式与高次幂）。');
  L.push('- **数二考整章二次型**：矩阵表示、秩、合同与惯性定理，**以及**用正交变换法/配方法化标准形、正定性判定 —— 大纲二次型章的要求 2、3 明确写「掌握」。');
  L.push('- **数二不考线性空间与线性变换**（附录整章）。');
  L.push('');
  L.push('> 依据（外部资料，仅供参考，请以当年官方大纲为准）：' + CITES.join('；') + '。');
  L.push('');
  L.push('> 标注为 `数一` 的点，**数三同样要求**（数三另有级数、差分方程等，与本库无关）。是否数二要求看标签列有没有 `数二`（或 `基础`）：**只写 `数一` 的就是数二不要求**。');
  L.push('');
  L.push('## 三、关系类型统计');
  L.push('');
  L.push('| 关系类型 | 含义 | 条数 |');
  L.push('| --- | --- | --- |');
  for (const k of ['iff', 'suff', 'need', 'none', 'rel']) L.push('| ' + TYPE[k].emoji + ' ' + TYPE[k].label + ' | ' + (k === 'iff' ? 'A⇔B，可互相替换使用' : k === 'suff' ? 'A⇒B（B⇒A 不成立）' : k === 'need' ? 'B⇒A（A⇒B 不成立）' : k === 'none' ? '不能互相推出' : '同源/构成/特例') + ' | ' + (cnt[k] || 0) + ' |');
  L.push('');
  L.push('合计：' + EDGES.length + ' 条。');
  L.push('');
  L.push('## 四、章节知识点清单');
  L.push('');
  for (const m of MODULES) L.push(moduleBlock(m));
  L.push('## 五、关系图');
  L.push('');
  L.push('**6 张 Canvas 各管一件事**（先看索引，再按需打开）：');
  L.push('');
  for (const [n, desc] of CANVAS_LIST) L.push('- ' + canvasLink(n) + '——' + desc);
  L.push('');
  L.push('- [02 充分必要条件链](02%20充分必要条件链.md)（Mermaid 版，按章节分块，可在 Obsidian 里直接编辑）');
  L.push('');
  L.push('');
  fs.writeFileSync(path.join(OUT, '00 线性代数知识网总览.md'), alignTables(L.join('\n')), 'utf8');
}

// 00b 章节笔记
for (const m of MODULES) {
  const L = [];
  L.push('# ' + m.title);
  L.push('');
  L.push('> ' + m.summary);
  L.push('');
  L.push('## 知识点清单');
  L.push('');
  L.push('| 知识点 | 层次 | 一句话要点 |');
  L.push('| --- | --- | --- |');
  for (const p of m.points) L.push('| ' + wikiLink(p) + ' | ' + tagLabel(p.tags) + ' | ' + p.summary.replace(/\|/g, '｜') + ' |');
  L.push('');
  L.push('## 本章关系图（Mermaid）');
  L.push('');
  const ids = new Set(m.points.map(p => p.id));
  const sub = EDGES.filter(e => ids.has(e[0]) && ids.has(e[1]));
  L.push(mermaidFor(sub, 'graph LR'));
  L.push('');
  L.push('## 跨章连接（本章与外部的充分必要关系）');
  L.push('');
  const cross = EDGES.filter(e => (ids.has(e[0]) && !ids.has(e[1])) || (!ids.has(e[0]) && ids.has(e[1])));
  L.push('| 起点 | 关系 | 终点 | 含义 |');
  L.push('| --- | --- | --- | --- |');
  for (const e of cross) L.push('| ' + wikiLink(byId.get(e[0])) + ' | ' + TYPE[e[2]].emoji + ' ' + TYPE[e[2]].short + ' | ' + wikiLink(byId.get(e[1])) + ' | ' + e[3] + ' |');
  L.push('');
  L.push('## Obsidian 双链版关系（供图谱 view 使用）');
  L.push('');
  for (const e of cross) L.push('- ' + wikiLink(byId.get(e[0])) + ' ⇒ ' + TYPE[e[2]].emoji + ' ' + TYPE[e[2]].short + ' ⇒ ' + wikiLink(byId.get(e[1])) + '——' + e[3]);
  if (!cross.length) L.push('- （本章暂无跨章关系边）');
  L.push('');
  L.push('---');
  L.push('');
  L.push('返回：[[00 线性代数知识网总览]]');
  L.push('');
  fs.writeFileSync(path.join(OUT, '章节/' + safeName(m.title) + '.md'), alignTables(L.join('\n')), 'utf8');
}

// 02 充分必要条件链
{
  const L = [];
  for (const l of indexFront(['00 线性代数知识网总览'])) L.push(l);
  L.push('# 02 充分必要条件链（Mermaid）');
  L.push('');
  L.push('> 箭头方向统一为「条件 ⇒ 结论」，箭头标签为该关系的类型。');
  L.push('');
  L.push('## 读图规则');
  L.push('');
  L.push('| 连线 | 含义 | 记忆要点 |');
  L.push('| --- | --- | --- |');
  L.push('| `A ==>|充要| B` | A ⇔ B | 选择题中可**互相替换** |');
  L.push('| `A -->|充分| B` | A ⇒ B 但 B ⇏ A | A 的条件**更强** |');
  L.push('| `A -->|必要| B` | B ⇒ A 但 A ⇏ B | A 是 B 的**必要条件**（A 更弱） |');
  L.push('| `A -.->|无关| B` | A、B 不能互推 | 常用来考**反例** |');
  L.push('| `A --- B` | 概念关联 | 同源、构成、特例 |');
  L.push('');
  L.push('## 一、全局枢纽：可逆 ⇔ 满秩 ⇔ 无关 ⇔ 唯一解');
  L.push('');
  const hubIds = ['mat-invertible-crit', 'det-rowsum-zero', 'mat-rank', 'vec-indep-def', 'eq-homo-sol', 'eq-nonhomo-crit', 'eig-def', 'det-product', 'mat-equiv'];
  L.push(mermaidFor(EDGES.filter(e => hubIds.includes(e[0]) || hubIds.includes(e[1])), 'graph LR'));
  L.push('');
  L.push('## 二、行列式与矩阵');
  L.push('');
  const ids1 = new Set(MODULES.filter(m => ['m-det', 'm-mat'].includes(m.id)).flatMap(m => m.points.map(p => p.id)));
  L.push(mermaidFor(EDGES.filter(e => ids1.has(e[0]) && ids1.has(e[1])), 'graph LR'));
  L.push('');
  L.push('## 三、向量与线性方程组');
  L.push('');
  L.push(mermaidFor(EDGES.filter(e => ['m-vec', 'm-eq'].includes(byId.get(e[0]).moduleId) && ['m-vec', 'm-eq'].includes(byId.get(e[1]).moduleId)), 'graph LR'));
  L.push('');
  L.push('## 四、特征值与二次型');
  L.push('');
  L.push(mermaidFor(EDGES.filter(e => ['m-eig', 'm-quad'].includes(byId.get(e[0]).moduleId) && ['m-eig', 'm-quad'].includes(byId.get(e[1]).moduleId)), 'graph LR'));
  L.push('');
  L.push('## 五、线性空间与线性变换');
  L.push('');
  L.push(mermaidFor(EDGES.filter(e => ['m-space'].includes(byId.get(e[0]).moduleId) || ['m-space'].includes(byId.get(e[1]).moduleId)), 'graph LR'));
  L.push('');
  L.push('返回：[[00 线性代数知识网总览]]');
  fs.writeFileSync(path.join(OUT, '02 充分必要条件链.md'), alignTables(L.join('\n')), 'utf8');
}

// 03 对照表
{
  const L = [];
  for (const l of indexFront(['00 线性代数知识网总览'])) L.push(l);
  L.push('# 03 基础 / 数一 / 数二 对照表');
  L.push('');
  L.push('## 一、总体范围（按现行大纲核对）');
  L.push('');
  L.push('| 章节 | 数二 | 数一 / 数三 | 说明 |');
  L.push('| --- | --- | --- | --- |');
  for (const m of MODULES) {
    const n2 = NUM2[m.id] || ['—', '—'];
    L.push('| ' + m.title + ' | ' + n2[0] + ' | ✅ 要求 | ' + n2[1] + ' |');
  }
  L.push('');
  L.push('**三个高频误区**');
  L.push('');
  L.push('1. ❌"数二不考向量" → ✅ 数二考向量组（线性相关性、极大无关组、秩、内积与正交规范化），只不考抽象的"向量空间、基、维数、坐标变换"。');
  L.push('2. ❌"数二不考特征值" → ✅ 特征值是数二的绝对重点（含相似对角化、实对称矩阵、用特征值求行列式与高次幂）。');
  L.push('3. ❌「数二不考二次型化标准形」 → ✅ 数二**要求**用正交变换法与配方法化标准形，也要求正定性判定（大纲二次型章要求 2、3）。');
  L.push('');
  L.push('> 依据（外部资料）：' + CITES.join('；') + '。请以当年官方大纲为准。');
  L.push('');
  L.push('## 二、逐条对照（共 ' + byId.size + ' 条）');
  L.push('');
  L.push('| # | 知识点 | 章节 | 标签 | 数二是否要求 |');
  L.push('| --- | --- | --- | --- | --- |');
  let i = 0;
  for (const m of MODULES) for (const p of m.points) {
    i++;
    L.push('| ' + i + ' | ' + wikiLink(p) + ' | ' + m.title + ' | ' + tagLabel(p.tags) + ' | ' + (!needsNum2(p.tags) ? '❌ **不要求**' : '✅ 要求') + ' |');
  }
  L.push('');
  L.push('## 三、数二可直接跳过的知识点（共 ' + skipNum2.length + ' 条）');
  L.push('');
  for (const p of skipNum2) L.push('- ' + wikiLink(p) + '（' + p.chapter + '）');
  L.push('');
  L.push('## 四、数二重点标记的知识点（共 ' + tagStats['数二'].length + ' 条中的代表）');
  L.push('');
  for (const p of tagStats['数二']) if (p.tags.includes('基础')) L.push('- ' + wikiLink(p) + '（' + p.chapter + '）');
  L.push('');
  L.push('返回：[[00 线性代数知识网总览]]');
  fs.writeFileSync(path.join(OUT, '03 基础数一数二对照表.md'), alignTables(L.join('\n')), 'utf8');
}

// 04 易错点
{
  const L = [];
  for (const l of indexFront(['00 线性代数知识网总览'])) L.push(l);
  L.push('# 04 易错点与陷阱清单');
  L.push('');
  L.push('按章节汇总所有知识点的易错点，考前逐条自查。');
  L.push('');
  for (const m of MODULES) {
    const withPit = m.points.filter(p => p.pitfalls && p.pitfalls.length);
    if (!withPit.length) continue;
    L.push('## ' + m.title);
    L.push('');
    for (const p of withPit) {
      L.push('### ' + wikiLink(p));
      L.push('');
      for (const x of p.pitfalls) L.push('- ⚠️ ' + x);
      L.push('');
    }
  }
  L.push('返回：[[00 线性代数知识网总览]]');
  fs.writeFileSync(path.join(OUT, '04 易错点与陷阱清单.md'), alignTables(L.join('\n')), 'utf8');
}

console.log('OK 知识点=' + byId.size + ' 关系边=' + EDGES.length + ' 笔记=' + noteCount + '（Canvas 由 canvas-v2.js 生成）');
console.log('通俗层(deep)：已覆盖 ' + deepUsed + '/' + byId.size + ' 个知识点' + (deepMissing.length ? '｜待补写 ' + deepMissing.length + ' 个' : '｜全部完成 ✅'));
console.log('基础=' + tagStats['基础'].length + ' 数一=' + tagStats['数一'].length + ' 数二=' + tagStats['数二'].length + ' 数二不要求=' + skipNum2.length);
console.log('各章点数: ' + MODULES.map(m => m.title + ':' + m.points.length).join(' | '));
