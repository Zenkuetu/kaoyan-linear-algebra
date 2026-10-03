// 评估 oneline 的"渲染后视觉宽度"：
//   - 先剥掉 LaTeX 标记（$...$ 只保留里面的字母/符号，命令如 \mathrm 去掉）
//   - 中文/全角按 2 单位，其余按 1 单位
//   - 经验阈值：约 46 单位（≈23 个汉字 或 ≈10 汉字+10 个公式符号）
import fs from 'node:fs';
import { stripTex, visualWidth } from './latexcheck.mjs';
const d = process.argv[2];
const LIMIT = Number(process.argv[3] || 46);

const strip = stripTex;
const width = visualWidth;

let over = 0, total = 0;
for (const f of fs.readdirSync(d).filter(x => x.endsWith('.json')).sort()) {
  const o = JSON.parse(fs.readFileSync(d + '/' + f, 'utf8'));
  for (const [id, v] of Object.entries(o)) {
    total++;
    const w = width(v.oneline);
    const flag = w > LIMIT ? ' ❌ 超宽' : '';
    if (w > LIMIT) over++;
    console.log(String(w).padStart(3) + '  [' + id + '] ' + strip(v.oneline) + flag);
  }
}
console.log('\n共 ' + total + ' 条，超过 ' + LIMIT + ' 单位的 ' + over + ' 条' + (over ? '' : ' ✅'));
