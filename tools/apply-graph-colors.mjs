// 给 Obsidian 关系图谱配置颜色组：
//   规则与画布一致 —— 数二要求(绿) > 仅数一(橙) > 基础(青)
//   顺序很重要：Obsidian 取"第一个匹配的组"的颜色，所以把更具体的放前面
//   （一个点同时带 数一 和 数二 时显示绿色；只带 数一 时显示橙色 = 数二不要求）。
//   与知识点无关的文件（总览/章节页/对照表/画布…）不带这三个标签，因此不会被着色（保持默认）。
// 用法: node apply-graph-colors.mjs         # 只分析，不写
//       node apply-graph-colors.mjs --apply # 写入 .obsidian/graph.json（保留其他设置）
import fs from 'node:fs';
import path from 'node:path';

const VAULT = 'D:/Files/考研数学线性代数';
const NOTES = path.join(VAULT, '线代知识网');
const APPLY = process.argv.includes('--apply');
const TAGS = ['基础', '数一', '数二'];

// ---------- 1) 分析：哪些文件带这四个标签 ----------
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== '.obsidian') walk(f); }
    else if (e.name.endsWith('.md')) files.push(f);
  }
})(VAULT);

const withTag = { '基础': [], '数一': [], '数二': [] };
const noTag = [];
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const fm = t.startsWith('---') ? t.split('---')[1] || '' : '';
  const has = TAGS.filter(g => new RegExp('^\\s*-\\s*' + g + '\\s*$', 'm').test(fm));
  if (has.length) for (const g of has) withTag[g].push(path.relative(VAULT, f));
  else noTag.push(path.relative(VAULT, f));
}
console.log('=== 带标签的文件数 ===');
for (const g of TAGS) console.log('  ' + g.padEnd(5) + withTag[g].length + ' 篇');
console.log('\n=== 不带这四个标签的文件（图谱里将保持默认色）===');
console.log('  共 ' + noTag.length + ' 个：');
for (const f of noTag.slice(0, 20)) console.log('    ' + f);
if (noTag.length > 20) console.log('    …还有 ' + (noTag.length - 20) + ' 个');

// ---------- 2) 颜色组 ----------
const rgb = (hex) => parseInt(hex.slice(1), 16);          // #RRGGBB → 十进制整数
const GROUPS = [
  { query: 'tag:#数二', hex: '#3fb950', label: '数二也要求（含数二重点）' },
  { query: 'tag:#数一', hex: '#e8873a', label: '仅数一（含数三）= 数二不要求' },
  { query: 'tag:#基础', hex: '#53c8d8', label: '基础（三卷共同要求）' },
];
console.log('\n=== 将要写入的颜色组（顺序 = 匹配优先级）===');
for (const g of GROUPS) console.log('  ' + g.query.padEnd(14) + g.hex + '  ' + g.label);

const gp = path.join(VAULT, '.obsidian', 'graph.json');
let cfg = {};
if (fs.existsSync(gp)) { try { cfg = JSON.parse(fs.readFileSync(gp, 'utf8')); } catch (e) { console.error('graph.json 解析失败：' + e.message); process.exit(1); } }
cfg.colorGroups = GROUPS.map(g => ({ query: g.query, color: { a: 1, rgb: rgb(g.hex) } }));
cfg['collapse-color-groups'] = false;   // 顺手把颜色组面板展开，方便你看到规则

if (!APPLY) { console.log('\n（干跑，未写入。加 --apply 写入）'); process.exit(0); }
fs.mkdirSync(path.dirname(gp), { recursive: true });
fs.writeFileSync(gp, JSON.stringify(cfg, null, 2) + '\n', 'utf8');

// ---------- 3) 回读校验 ----------
const back = JSON.parse(fs.readFileSync(gp, 'utf8'));
const ok = Array.isArray(back.colorGroups) && back.colorGroups.length === GROUPS.length
  && back.colorGroups.every((g, i) => g.query === GROUPS[i].query && g.color.rgb === rgb(GROUPS[i].hex));
console.log('\n已写入 ' + gp);
console.log(ok ? '✅ 回读校验通过（' + GROUPS.length + ' 个颜色组、查询与色值一致）' : '❌ 回读校验失败');
console.log('   其余图谱设置保持原样：showTags=' + back.showTags + ' lineSizeMultiplier=' + back.lineSizeMultiplier);
process.exit(ok ? 0 : 1);
