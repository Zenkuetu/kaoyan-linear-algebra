// 2016 · 数学一 · 线性代数（题面取自《2016年考研数学（一）真题》，答案与解析取自《2016数学一解析》）
EXAMS.push({
  year: 2016, subject: '数一', number: 5, kind: '选择', score: 4,
  ids: ['eig-similar-prop'],
  question: String.raw`设 $A,B$ 是可逆矩阵，且 $A$ 与 $B$ 相似，则下列结论错误的是（　）

（A）$A^{\\mathrm{T}}$ 与 $B^{\\mathrm{T}}$ 相似　（B）$A^{-1}$ 与 $B^{-1}$ 相似　（C）$A+A^{\\mathrm{T}}$ 与 $B+B^{\\mathrm{T}}$ 相似　（D）$A+A^{-1}$ 与 $B+B^{-1}$ 相似`,
  answer: '（C）',
  analysis: String.raw`由 $A$ 与 $B$ 相似可知，存在可逆矩阵 $P$，使得 $P^{-1}AP=B$。

对 $P^{-1}AP=B$ 两边取转置得 $P^{\\mathrm{T}}A^{\\mathrm{T}}(P^{-1})^{\\mathrm{T}}=B^{\\mathrm{T}}$，或 $[(P^{\\mathrm{T}})^{-1}]^{\\mathrm{T}}A^{\\mathrm{T}}[(P^{\\mathrm{T}})^{-1}]=B^{\\mathrm{T}}$，即 $A^{\\mathrm{T}}$ 与 $B^{\\mathrm{T}}$ 相似，（A）正确；

由 $P^{-1}AP=B$ 得 $P^{-1}A^{-1}P=B^{-1}$，即 $A^{-1}$ 与 $B^{-1}$ 相似，（B）正确；

由 $P^{-1}AP=B$ 及 $P^{-1}A^{-1}P=B^{-1}$ 得 $P^{-1}(A+A^{-1})P=B+B^{-1}$，即 $A+A^{-1}$ 与 $B+B^{-1}$ 相似，（D）正确，应选（C）。`,
  source: '《2016 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2016, subject: '数一', number: 6, kind: '选择', score: 4,
  ids: ['qf-inertia-index', 'qf-canonical'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+4x_1x_2+4x_1x_3+4x_2x_3$，则 $f(x_1,x_2,x_3)=2$ 在空间直角坐标下表示的二次曲面为（　）

（A）单叶双曲面　（B）双叶双曲面　（C）椭球面　（D）柱面`,
  answer: '（B）',
  analysis: String.raw`二次型的矩阵为
$$
A=\\begin{pmatrix}1&2&2\\\\2&1&2\\\\2&2&1\\end{pmatrix},
$$
由
$$
|\\lambda E-A|=\\begin{vmatrix}\\lambda-1&-2&-2\\\\-2&\\lambda-1&-2\\\\-2&-2&\\lambda-1\\end{vmatrix}=(\\lambda+1)^2(\\lambda-5)=0
$$
得矩阵 $A$ 的特征值为 $\\lambda_1=5,\\ \\lambda_2=\\lambda_3=-1$，二次型的规范形为 $f(x_1,x_2,x_3)=5y_1^2-y_2^2-y_3^2$，从而 $f(x_1,x_2,x_3)=2$ 表示的曲面为 $5y_1^2-y_2^2-y_3^2=2$，该曲面表示双叶双曲面，应选（B）。`,
  source: '《2016 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2016, subject: '数一', number: 13, kind: '填空', score: 4,
  ids: ['det-expansion', 'det-cofactor'],
  question: String.raw`行列式
$$
\\begin{vmatrix}\\lambda&-1&0&0\\\\0&\\lambda&-1&0\\\\0&0&\\lambda&-1\\\\4&3&2&\\lambda+1\\end{vmatrix}=\\underline{\\qquad}.
$$`,
  answer: String.raw`$\\lambda^4+\\lambda^3+2\\lambda^2+3\\lambda+4$`,
  analysis: String.raw`$$
\\begin{vmatrix}\\lambda&-1&0&0\\\\0&\\lambda&-1&0\\\\0&0&\\lambda&-1\\\\4&3&2&\\lambda+1\\end{vmatrix}=\\lambda\\cdot\\begin{vmatrix}\\lambda&-1&0\\\\0&\\lambda&-1\\\\3&2&\\lambda+1\\end{vmatrix}+\\begin{vmatrix}0&-1&0\\\\0&\\lambda&-1\\\\4&2&\\lambda+1\\end{vmatrix}
$$
$$
=\\lambda\\left[\\lambda\\begin{vmatrix}\\lambda&-1\\\\2&\\lambda+1\\end{vmatrix}+\\begin{vmatrix}0&-1\\\\3&\\lambda+1\\end{vmatrix}\\right]+\\begin{vmatrix}0&-1\\\\4&\\lambda+1\\end{vmatrix}
$$
$$
=\\lambda[\\lambda(\\lambda^2+\\lambda+2)+3]+4
$$
$$
=\\lambda^4+\\lambda^3+2\\lambda^2+3\\lambda+4.
$$`,
  source: '《2016 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2016, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['mat-eq-solve', 'eq-nonhomo-crit'],
  question: String.raw`（本题满分 11 分）设矩阵
$$
A=\\begin{pmatrix}1&-1&-1\\\\2&a&1\\\\-1&1&a\\end{pmatrix},\\quad B=\\begin{pmatrix}2&2\\\\1&a\\\\-a-1&-2\\end{pmatrix}.
$$
当 $a$ 为何值时，方程 $AX=B$ 无解、有唯一解、有无穷多解？在有解时，求解此方程。`,
  answer: String.raw`当 $a\\ne -2$ 且 $a\\ne 1$ 时，有唯一解 $X=\\begin{pmatrix}1&\\frac{3a}{a+2}\\\\0&\\frac{a-4}{a+2}\\\\-1&0\\end{pmatrix}$；当 $a=1$ 时，有无穷多解 $X=\\begin{pmatrix}1&1\\\\-k_1-1&-k_2-1\\\\k_1&k_2\\end{pmatrix}$（$k_1,k_2$ 为任意常数）；当 $a=-2$ 时，无解`,
  analysis: String.raw`方法一
$$
(A\\ \\vdots\\ B)=\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\2&a&1&1&a\\\\-1&1&a&-a-1&-2\\end{array}\\right)\\to\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\0&a+2&3&-3&a-4\\\\0&0&a-1&1-a&0\\end{array}\\right)
$$
当 $a\\ne -2$ 且 $a\\ne 1$ 时，
$$
(A\\ \\vdots\\ B)\\to\\left(\\begin{array}{ccc|cc}1&0&0&1&\\frac{3a}{a+2}\\\\0&1&0&0&\\frac{a-4}{a+2}\\\\0&0&1&-1&0\\end{array}\\right),
$$
$AX=B$ 有唯一解，$X=A^{-1}B=\\begin{pmatrix}1&\\frac{3a}{a+2}\\\\0&\\frac{a-4}{a+2}\\\\-1&0\\end{pmatrix}$；

当 $a=1$ 时，
$$
(A\\ \\vdots\\ B)\\to\\left(\\begin{array}{ccc|cc}1&0&0&1&1\\\\0&1&1&-1&-1\\\\0&0&0&0&0\\end{array}\\right),
$$
由 $r(A)=r(A\\ \\vdots\\ B)=2<3$ 得 $AX=B$ 有无数个解。

令 $X=(X_1,X_2)$，由
$$
X_1=k_1\\begin{pmatrix}0\\\\-1\\\\1\\end{pmatrix}+\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}=\\begin{pmatrix}1\\\\-k_1-1\\\\k_1\\end{pmatrix},\\quad X_2=k_2\\begin{pmatrix}0\\\\-1\\\\1\\end{pmatrix}+\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}=\\begin{pmatrix}1\\\\-k_2-1\\\\k_2\\end{pmatrix}
$$
得
$$
X=\\begin{pmatrix}1&1\\\\-k_1-1&-k_2-1\\\\k_1&k_2\\end{pmatrix}\\ (k_1,k_2\\ \\text{为任意常数}).
$$

$a=-2$ 时，
$$
(A\\ \\vdots\\ B)\\to\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\0&0&3&-3&-6\\\\0&0&-3&3&0\\end{array}\\right)\\to\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\0&0&1&-1&0\\\\0&0&0&0&1\\end{array}\\right),
$$
因为 $r(A)\\ne r(A\\ \\vdots\\ B)$，所以 $AX=B$ 无解。

方法二
$$
|A|=\\begin{vmatrix}1&-1&-1\\\\2&a&1\\\\-1&1&a\\end{vmatrix}=\\begin{vmatrix}1&-1&-1\\\\0&a+2&3\\\\0&0&a-1\\end{vmatrix}=(a+2)(a-1).
$$
当 $a\\ne -2$ 且 $a\\ne 1$ 时，因为 $r(A)=r(A\\ \\vdots\\ B)=3$，所以 $AX=B$ 有唯一解，同方法一得 $X=A^{-1}B=\\begin{pmatrix}1&\\frac{3a}{a+2}\\\\0&\\frac{a-4}{a+2}\\\\-1&0\\end{pmatrix}$；

当 $a=1$ 时，由 $r(A)=r(A\\ \\vdots\\ B)=2<3$ 得 $AX=B$ 有无数个解，$X=\\begin{pmatrix}1&1\\\\-k_1-1&-k_2-1\\\\k_1&k_2\\end{pmatrix}$（$k_1,k_2$ 为任意常数）；

当 $a=-2$ 时，因为 $r(A)\\ne r(A\\ \\vdots\\ B)$，所以 $AX=B$ 无解。`,
  source: '《2016 数学一解析》第 6–8 页',
});

EXAMS.push({
  year: 2016, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['eig-diag-method', 'eig-power-app'],
  question: String.raw`（本题满分 11 分）已知矩阵
$$
A=\\begin{pmatrix}0&-1&1\\\\2&-3&0\\\\0&0&0\\end{pmatrix}.
$$
（Ⅰ）求 $A^{99}$；

（Ⅱ）设 3 阶矩阵 $B=(\\alpha_1,\\alpha_2,\\alpha_3)$ 满足 $B^2=BA$。记 $B^{100}=(\\beta_1,\\beta_2,\\beta_3)$，将 $\\beta_1,\\beta_2,\\beta_3$ 分别表示为 $\\alpha_1,\\alpha_2,\\alpha_3$ 的线性组合。`,
  answer: String.raw`（Ⅰ）$A^{99}=\\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\\\2^{100}-2&1-2^{100}&2-2^{99}\\\\0&0&0\\end{pmatrix}$；
（Ⅱ）$\\beta_1=(2^{99}-2)\\alpha_1+(2^{100}-2)\\alpha_2$，$\\beta_2=(1-2^{99})\\alpha_1+(1-2^{100})\\alpha_2$，$\\beta_3=(2-2^{98})\\alpha_1+(2-2^{99})\\alpha_2$`,
  analysis: String.raw`（Ⅰ）由
$$
|\\lambda E-A|=\\begin{vmatrix}\\lambda&1&-1\\\\-2&\\lambda+3&0\\\\0&0&\\lambda\\end{vmatrix}=\\lambda(\\lambda+1)(\\lambda+2)=0
$$
得矩阵 $A$ 的特征值为 $\\lambda_1=-1,\\lambda_2=-2,\\lambda_3=0$。

将 $\\lambda_1=-1$ 代入 $(\\lambda E-A)X=0$，由
$$
-E-A=\\begin{pmatrix}-1&1&-1\\\\-2&2&0\\\\0&0&-1\\end{pmatrix}\\to\\begin{pmatrix}1&-1&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}
$$
得 $\\lambda_1=-1$ 对应的特征向量为 $\\xi_1=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$；

将 $\\lambda_2=-2$ 代入 $(\\lambda E-A)X=0$，由
$$
-2E-A=\\begin{pmatrix}-2&1&-1\\\\-2&1&0\\\\0&0&-2\\end{pmatrix}\\to\\begin{pmatrix}1&-\\frac{1}{2}&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}
$$
得 $\\lambda_2=-2$ 对应的特征向量为 $\\xi_2=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}$；

将 $\\lambda_3=0$ 代入 $(\\lambda E-A)X=0$，由
$$
-A=\\begin{pmatrix}0&1&-1\\\\-2&3&0\\\\0&0&0\\end{pmatrix}\\to\\begin{pmatrix}1&0&-\\frac{3}{2}\\\\0&1&-1\\\\0&0&0\\end{pmatrix}
$$
得 $\\lambda_3=0$ 对应的特征向量为 $\\xi_3=\\begin{pmatrix}3\\\\2\\\\2\\end{pmatrix}$。

令 $P=\\begin{pmatrix}1&1&3\\\\1&2&2\\\\0&0&2\\end{pmatrix}$，由 $P^{-1}AP=\\begin{pmatrix}-1&0&0\\\\0&-2&0\\\\0&0&0\\end{pmatrix}$ 得
$$
A^{99}=P\\begin{pmatrix}(-1)^{99}&0&0\\\\0&(-2)^{99}&0\\\\0&0&0\\end{pmatrix}P^{-1}=\\begin{pmatrix}1&1&3\\\\1&2&2\\\\0&0&2\\end{pmatrix}\\begin{pmatrix}(-1)^{99}&0&0\\\\0&(-2)^{99}&0\\\\0&0&0\\end{pmatrix}\\begin{pmatrix}2&-1&-2\\\\-1&1&\\frac{1}{2}\\\\0&0&\\frac{1}{2}\\end{pmatrix}
$$
$$
=\\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\\\2^{100}-2&1-2^{100}&2-2^{99}\\\\0&0&0\\end{pmatrix}.
$$

（Ⅱ）由 $B^2=BA$ 得 $B^{100}=B^{98}B^2=B^{99}A=\\cdots=BA^{99}$，即
$$
(\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)\\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\\\2^{100}-2&1-2^{100}&2-2^{99}\\\\0&0&0\\end{pmatrix},
$$
故
$$
\\begin{cases}
\\beta_1=(2^{99}-2)\\alpha_1+(2^{100}-2)\\alpha_2+0\\alpha_3,\\\\
\\beta_2=(1-2^{99})\\alpha_1+(1-2^{100})\\alpha_2+0\\alpha_3,\\\\
\\beta_3=(2-2^{98})\\alpha_1+(2-2^{99})\\alpha_2+0\\alpha_3.
\\end{cases}
$$`,
  source: '《2016 数学一解析》第 8–9 页',
});
