// 2014 · 数学二 · 线性代数（题面取自《2010-2019考研数学二真题》，答案与解析取自《2014考研数学二答案真题解析》）
EXAMS.push({
  year: 2014, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ['det-cofactor', 'det-expansion'],
  question: String.raw`行列式
$$
\begin{vmatrix}0&a&b&0\\a&0&0&b\\0&c&d&0\\c&0&0&d\end{vmatrix}=
$$
（　）

（A）$(ad-bc)^2$　（B）$-(ad-bc)^2$　（C）$a^2d^2-b^2c^2$　（D）$b^2c^2-a^2d^2$`,
  answer: '（B）',
  analysis: String.raw`$$
\begin{vmatrix}0&a&b&0\\a&0&0&b\\0&c&d&0\\c&0&0&d\end{vmatrix}
$$
$$
=a\times(-1)^{2+1}\begin{vmatrix}a&b&0\\c&d&0\\0&0&d\end{vmatrix}+c\times(-1)^{4+1}\begin{vmatrix}a&b&0\\0&0&b\\c&d&0\end{vmatrix}
$$
$$
=-a\times d\times(-1)^{3+3}\begin{vmatrix}a&b\\c&d\end{vmatrix}-c\times b\times(-1)^{2+3}\begin{vmatrix}a&b\\c&d\end{vmatrix}
$$
$$
=-ad\begin{vmatrix}a&b\\c&d\end{vmatrix}+bc\begin{vmatrix}a&b\\c&d\end{vmatrix}
$$
$$
=(bc-ad)\begin{vmatrix}a&b\\c&d\end{vmatrix}=-(ad-bc)^2
$$`,
  source: '《2014 考研数学二答案真题解析》第 3 页',
});

EXAMS.push({
  year: 2014, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ['vec-indep-crit', 'vec-indep-concl'],
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3$ 均为 3 维向量，则对任意常数 $k,l$，向量组 $\alpha_1+k\alpha_3,\ \alpha_2+l\alpha_3$ 线性无关是向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关的（　）

（A）必要非充分条件　（B）充分非必要条件　（C）充分必要条件　（D）既非充分也非必要条件`,
  answer: '（A）',
  analysis: String.raw`已知 $\alpha_1,\alpha_2,\alpha_3$ 无关

设
$$
\lambda_1(\alpha_1+k\alpha_3)+\lambda_2(\alpha_2+l\alpha_3)=0
$$
即 $\lambda_1\alpha_1+\lambda_2\alpha_2+(k\lambda_1+l\lambda_2)\alpha_3=0$
$$
\Rightarrow \lambda_1=\lambda_2=k\lambda_1+l\lambda_2=0
$$
从而 $\alpha_1+k\alpha_3,\ \alpha_2+l\alpha_3$ 无关

反之，若 $\alpha_1+k\alpha_3,\ \alpha_2+l\alpha_3$ 无关，不一定有 $\alpha_1,\alpha_2,\alpha_3$ 无关

例如，
$$
\alpha_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad \alpha_2=\begin{pmatrix}0\\1\\0\end{pmatrix},\quad \alpha_3=\begin{pmatrix}0\\0\\0\end{pmatrix}
$$`,
  source: '《2014 考研数学二答案真题解析》第 3 页',
});

EXAMS.push({
  year: 2014, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ['qf-inertia-index', 'qf-complete-square'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=x_1^2-x_2^2+2ax_1x_3+4x_2x_3$ 的负惯性指数为 1，则 $a$ 的取值范围是 ________.`,
  answer: String.raw`$[-2,2]$`,
  analysis: String.raw`$$
f(x_1,x_2,x_3)=x_1^2-x_2^2+2ax_1x_3+4x_2x_3
$$
$$
=(x_1+ax_3)^2-(x_2-2x_3)^2+4x_3^2-a^2x_3^2
$$
$\therefore f$ 的负惯性指数为 1

$\therefore 4-a^2\ge 0$

$\therefore -2\le a\le 2$`,
  source: '《2014 考研数学二答案真题解析》第 5 页',
});

EXAMS.push({
  year: 2014, subject: '数二', number: 22, kind: '解答', score: 11,
  ids: ['eq-homo-structure', 'mat-eq-solve'],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix},
$$
$E$ 为 3 阶单位矩阵.

（Ⅰ）求方程组 $Ax=0$ 的一个基础解系；

（Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$.`,
  answer: String.raw`（Ⅰ）$c\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}$（$c$ 为任意常数）；（Ⅱ）$B=\begin{pmatrix}-c_1+2&-c_2+6&-c_3-1\\2c_1-1&2c_2-3&2c_3+1\\3c_1-1&3c_2-4&3c_3+1\\c_1&c_2&c_3\end{pmatrix}$（$c_1,c_2,c_3$ 为任意常数）`,
  analysis: String.raw`（Ⅰ）
$$
(A)=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}\xrightarrow{r_1+r_3}\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&4&-3&1\end{pmatrix}\xrightarrow{-4r_2+r_3}\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&0&1&-3\end{pmatrix}
$$
$$
\xrightarrow{r_3+r_2,\ -3r_3+r_1}\begin{pmatrix}1&-2&0&5\\0&1&0&-2\\0&0&1&-3\end{pmatrix}\xrightarrow{2r_2+r_1}\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix}
$$
$$
x_1=-x_4,\quad x_2=2x_4,\quad x_3=3x_4,\quad x_4=x_4
$$
$$
\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=c\begin{pmatrix}-1\\2\\3\\1\end{pmatrix},\quad c\text{ 为任意常数}
$$
（Ⅱ）设 $B=\begin{pmatrix}x_1&y_1&z_1\\x_2&y_2&z_2\\x_3&y_3&z_3\end{pmatrix}$
$$
A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\0\\0\end{pmatrix}\Rightarrow\left(\begin{array}{cccc|c}1&-2&3&-4&1\\0&1&-1&1&0\\1&2&0&-3&0\end{array}\right)
$$
$$
A\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}=\begin{pmatrix}0\\1\\0\end{pmatrix}\Rightarrow\left(\begin{array}{cccc|c}1&-2&3&-4&0\\0&1&-1&1&1\\1&2&0&-3&0\end{array}\right)
$$
$$
A\begin{pmatrix}z_1\\z_2\\z_3\end{pmatrix}=\begin{pmatrix}0\\0\\1\end{pmatrix}\Rightarrow\left(\begin{array}{cccc|c}1&-2&3&-4&0\\0&1&-1&1&0\\1&2&0&-3&1\end{array}\right)
$$
即
$$
\begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\1&2&0&-3&0&0&1\end{pmatrix}\to\begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&4&-3&1&0&0&1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&0&1&-3&0&0&1\end{pmatrix}\to\begin{pmatrix}1&-2&0&5&4&12&-3\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&0&1&2&6&-1\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{pmatrix}
$$
$$
\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=c_1\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}2\\-1\\-1\\0\end{pmatrix},\quad \begin{pmatrix}y_1\\y_2\\y_3\\y_4\end{pmatrix}=c_2\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}6\\-3\\-4\\0\end{pmatrix},\quad \begin{pmatrix}z_1\\z_2\\z_3\\z_4\end{pmatrix}=c_3\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\1\\0\end{pmatrix}
$$
$$
\therefore B=\begin{pmatrix}-c_1+2&-c_2+6&-c_3-1\\2c_1-1&2c_2-3&2c_3+1\\3c_1-1&3c_2-4&3c_3+1\\c_1&c_2&c_3\end{pmatrix}
$$
$c_1,c_2,c_3$ 为任意常数`,
  source: '《2014 考研数学二答案真题解析》第 11–12 页',
});

EXAMS.push({
  year: 2014, subject: '数二', number: 23, kind: '解答', score: 11,
  ids: ['eig-diag-crit', 'eig-similar-prop'],
  question: String.raw`证明 $n$ 阶矩阵
$$
\begin{pmatrix}1&1&\cdots&1\\1&1&\cdots&1\\\vdots&\vdots&&\vdots\\1&1&\cdots&1\end{pmatrix}\text{ 与 }\begin{pmatrix}0&\cdots&0&1\\0&\cdots&0&2\\\vdots&&\vdots&\vdots\\0&\cdots&0&n\end{pmatrix}
$$
相似.`,
  answer: '见解析',
  analysis: String.raw`设
$$
A=\begin{pmatrix}1&1&\cdots&1\\1&1&\cdots&1\\\vdots&\vdots&&\vdots\\1&1&\cdots&1\end{pmatrix},\quad B=\begin{pmatrix}0&0&\cdots&0&1\\0&0&\cdots&0&2\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&0&n\end{pmatrix}
$$
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&\cdots&-1\\-1&\lambda-1&\cdots&-1\\\vdots&\vdots&&\vdots\\-1&-1&\cdots&\lambda-1\end{vmatrix}=(\lambda-n)\lambda^{n-1}
$$
所以 $A$ 的 $n$ 个特征值为 $\lambda_1=n,\ \lambda_2=\cdots=\lambda_n=0$

又因为 $A$ 是一个实对称矩阵，所以 $A$ 可以相似对角化，且
$$
A\sim\begin{pmatrix}n&&&\\&0&&\\&&\ddots&\\&&&0\end{pmatrix}
$$
$$
|\lambda E-B|=\begin{vmatrix}\lambda&0&\cdots&0&-1\\0&\lambda&\cdots&0&-2\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&0&\lambda-n\end{vmatrix}=(\lambda-n)\lambda^{n-1}
$$
所以 $B$ 的 $n$ 个特征值为 $\lambda_1=n,\ \lambda_2=\cdots=\lambda_n=0$

又
$$
|0E-B|=\begin{vmatrix}0&0&\cdots&0&-1\\0&0&\cdots&0&-2\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&0&-n\end{vmatrix}
$$
所以 $r(0E-B)=1$

故 $B$ 的 $n-1$ 重特征值 $0$ 有 $n-1$ 个线性无关的特征向量

所以 $B$ 也可以相似对角化，且
$$
B\sim\begin{pmatrix}n&&&\\&0&&\\&&\ddots&\\&&&0\end{pmatrix}
$$
所以 $A$ 与 $B$ 相似.`,
  source: '《2014 考研数学二答案真题解析》第 12–13 页',
});
