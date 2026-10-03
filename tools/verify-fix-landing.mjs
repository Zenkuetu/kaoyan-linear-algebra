// 高危修复落地核查：直接在**构建出来的笔记**里查每一条高危修复
//   expect: 必须出现的文字；absent: 必须消失的文字
// 用法: node verify-fix-landing.mjs [库目录]
import fs from 'node:fs';
import path from 'node:path';

const VAULT = process.argv[2] || 'D:/Files/Deepseek workplace/_vault_test';
const NOTES = path.join(VAULT, '知识点');

function findNote(fragment) {
  const hits = [];
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const f = path.join(d, e.name);
      if (e.isDirectory()) walk(f);
      else if (e.name.endsWith('.md') && e.name.includes(fragment)) hits.push(f);
    }
  })(NOTES);
  return hits[0] || null;
}

const CHECKS = [
  { name: '逆矩阵的定义 · 自测改用 diag(2,1) 且注明非通用', note: '逆矩阵的定义',
    expect: ['\\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}', '不是通用公式'], absent: [] },
  { name: 'A* 的秩 · 分档表 n=2 也成立', note: 'A∗ 的秩与可逆性判定',
    expect: ['这条分档表 $n = 2$ 时也成立'], absent: ['三档结论要求 $n \\ge 3$；$n = 2$ 时只有两档'] },
  { name: '特征值的范围与估计 · 根式 3±√3', note: '特征值的范围与估计',
    expect: ['3 \\pm \\sqrt{3}'], absent: ['\\frac{9 \\pm \\sqrt{33}}{2}'] },
  { name: '二次型及其矩阵表示 · 反例换成"两处都填"', note: '二次型及其矩阵表示',
    expect: ['21', 'A_{0}'], absent: ['A_{\\text{填}}'] },
  { name: '正交变换法 · Q 改成 (1 1; 1 -1)', note: '正交变换法化标准形',
    expect: ['1 & 1 \\\\ 1 & -1'], absent: ['1 & 1 \\\\ -1 & 1'] },
  { name: '合同 · C 换成 1/√6 版本', note: '矩阵合同',
    expect: ['\\frac{1}{\\sqrt{6}}'], absent: ['\\frac{1}{\\sqrt3}'] },
  { name: '惯性定理 · C^TAC 改成 (2 3; 3 6)', note: '惯性定理',
    expect: ['2 & 3 \\\\ 3 & 6'], absent: ['2 & 2 \\\\ 2 & 4'] },
  { name: '正定的充要条件 · 特征多项式 10λ', note: '正定的充要条件',
    expect: ['10\\lambda - 4'], absent: ['9\\lambda - 4'] },
  { name: '半正定与负定 · 半负定（不是负定）', note: '半正定与负定矩阵',
    expect: ['实际上是半负定'], absent: ['显然是负定'] },
  { name: '配方法 · 删掉"公式写错了"', note: '配方法化标准形',
    expect: ['两边相等，公式得到验证'], absent: ['说明公式写错了'] },
  { name: '三对角与递推 · 删掉"常是周期数列"', note: '三对角与递推型行列式',
    expect: ['**不会**循环'], absent: ['这类表算出来常是周期数列'] },
  { name: '矩阵乘法 · 开头用代入消元（不是"作用"）', note: '矩阵乘法',
    expect: ['能不能并成一次'], absent: ['合着作用一次'] },
  { name: '线性方程组·非齐次·一句话带"有解时"前提', note: '齐次与非齐次解的关系',
    expect: ['有解时：'], absent: [] },
];

let pass = 0, fail = 0;
for (const c of CHECKS) {
  const f = findNote(c.note);
  if (!f) { console.log('❓ ' + c.name + ' —— 找不到笔记：' + c.note); fail++; continue; }
  const t = fs.readFileSync(f, 'utf8');
  const missExp = c.expect.filter(s => !t.includes(s));
  const stillAbsent = (c.absent || []).filter(s => t.includes(s));
  if (!missExp.length && !stillAbsent.length) { console.log('✅ ' + c.name); pass++; }
  else {
    fail++;
    console.log('❌ ' + c.name + '  [' + path.basename(f) + ']');
    for (const s of missExp) console.log('     缺少应有文字：' + s.replace(/\\/g, '\\'));
    for (const s of stillAbsent) console.log('     仍存在错误文字：' + s.replace(/\\/g, '\\'));
  }
}
console.log('\n高危修复落地核查：通过 ' + pass + ' 项，未通过 ' + fail + ' 项');
process.exit(fail ? 1 : 0);
