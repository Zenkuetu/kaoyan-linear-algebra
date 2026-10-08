// 2014 · 数学一 · 线性代数（题面取自《2014年考研数学（一）真题》，答案与解析取自《2014数学一解析》）
EXAMS.push({
  year: 2014, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['det-block', 'det-def'],
  question: String.raw`行列式

$$
\begin{vmatrix}0&a&b&0\\a&0&0&b\\0&c&d&0\\c&0&0&d\end{vmatrix}=
$$

（　　）

（A）$(ad-bc)^2$．　　（B）$-(ad-bc)^2$．　　（C）$a^2d^2-b^2c^2$．　　（D）$b^2c^2-a^2d^2$．`,
  answer: '（B）',
  analysis: String.raw`

$$
\begin{vmatrix}0&a&b&0\\a&0&0&b\\0&c&d&0\\c&0&0&d\end{vmatrix}=-a\begin{vmatrix}a&0&b\\0&d&0\\c&0&d\end{vmatrix}+b\begin{vmatrix}a&0&b\\0&c&0\\c&0&d\end{vmatrix}
$$

$$
=-ad(ad-bc)+bc(ad-bc)=-a^2d^2+2abcd-b^2c^2=-(ad-bc)^2,
$$

应选（B）．`,
  source: '《2014 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2014, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['vec-indep-crit', 'vec-indep-concl'],
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3$ 均为 3 维向量，则对任意常数 $k,l$，向量组 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 线性无关是向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关的（　　）

（A）必要非充分条件．　　（B）充分非必要条件．

（C）充分必要条件．　　（D）既非充分也非必要条件．`,
  answer: '（A）',
  analysis: String.raw`若 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，由

$$
(\alpha_1+k\alpha_3,\alpha_2+l\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0\\0&1\\k&l\end{pmatrix}.
$$

因为 $(\alpha_1,\alpha_2,\alpha_3)$ 可逆，所以 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 的秩与矩阵 $\begin{pmatrix}1&0\\0&1\\k&l\end{pmatrix}$ 的秩相等，因为 $\begin{pmatrix}1&0\\0&1\\k&l\end{pmatrix}$ 两列不成比例，所以

$$
r\begin{pmatrix}1&0\\0&1\\k&l\end{pmatrix}=2,
$$

故 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 线性无关．

反之，若 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 线性无关，$\alpha_1,\alpha_2,\alpha_3$ 不一定线性无关，

如 $\alpha_1,\alpha_2$ 线性无关，$\alpha_3=0$，显然 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 线性无关，但 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，应选（A）．`,
  source: '《2014 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2014, subject: '数一', number: 13, kind: '填空', score: 5,
  ids: ['qf-inertia-index', 'qf-inertia-law'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=x_1^2-x_2^2+2ax_1x_3+4x_2x_3$ 的负惯性指数为 1，则 $a$ 的取值范围是 $\underline{\qquad}$．`,
  answer: String.raw`$[-2,2]$`,
  analysis: String.raw`

$$
A=\begin{pmatrix}1&0&a\\0&-1&2\\a&2&0\end{pmatrix},\quad |A|=a^2-4,
$$

因为 $A$ 的负惯性指数为 1，所以 $|A|\le 0$．

由 $|A|<0$ 得 $-2<a<2$．

若 $|A|=0$ 得 $a=-2$ 或 $a=2$，

当 $a=-2$ 时，由 $|\lambda E-A|=0$ 得 $\lambda_1=-3$，$\lambda_2=0$，$\lambda_3=3$，负惯性指数为 1；

当 $a=2$ 时，由 $|\lambda E-A|=0$ 得 $\lambda_1=-3$，$\lambda_2=0$，$\lambda_3=3$，负惯性指数为 1，故 $-2\le a\le 2$．`,
  source: '《2014 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2014, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['eq-homo-structure', 'mat-eq-solve'],
  question: String.raw`（本题满分 11 分）设

$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix},
$$

$E$ 为 3 阶单位矩阵．

（Ⅰ）求方程组 $Ax=0$ 的一个基础解系；

（Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$．`,
  answer: String.raw`（Ⅰ）基础解系为 $\xi=(-1,2,3,1)^{\mathrm{T}}$；（Ⅱ）$B=\begin{pmatrix}2-k_1&6-k_2&-k_3-1\\2k_1-1&2k_2-3&2k_3+1\\3k_1-1&3k_2-4&3k_3+1\\k_1&k_2&k_3\end{pmatrix}$（$k_1,k_2,k_3$ 为任意常数）．`,
  analysis: String.raw`（Ⅰ）

$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}\to\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&4&-3&1\end{pmatrix}\to\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&0&1&-3\end{pmatrix}
$$

$$
\to\begin{pmatrix}1&-2&0&5\\0&1&0&-2\\0&0&1&-3\end{pmatrix}\to\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix},
$$

则方程组 $AX=0$ 的一个基础解系为 $\xi=(-1,2,3,1)^{\mathrm{T}}$．

（Ⅱ）方法一 由

$$
(A\ \vdots\ E)=\left(\begin{array}{cccc|ccc}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\1&2&0&-3&0&0&1\end{array}\right)\to\left(\begin{array}{cccc|ccc}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&4&-3&1&-1&0&1\end{array}\right)
$$

$$
\to\left(\begin{array}{cccc|ccc}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&0&1&-3&-1&-4&1\end{array}\right)\to\left(\begin{array}{cccc|ccc}1&-2&0&5&4&12&-3\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{array}\right)
$$

$$
\to\left(\begin{array}{cccc|ccc}1&0&0&1&2&6&-1\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{array}\right),
$$

得

$$
B=\begin{pmatrix}2-k_1&6-k_2&-k_3-1\\2k_1-1&2k_2-3&2k_3+1\\3k_1-1&3k_2-4&3k_3+1\\k_1&k_2&k_3\end{pmatrix}\quad (k_1,k_2,k_3\ \text{为任意常数}).
$$

方法二 令 $B=(X_1,X_2,X_3)$，$E=(e_1,e_2,e_3)$，

则 $AB=E$ 等价于 $AX_1=e_1$，$AX_2=e_2$，$AX_3=e_3$，

方程组 $AX_1=e_1$ 的通解为

$$
X_1=k_1\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}2\\-1\\-1\\0\end{pmatrix}=\begin{pmatrix}-k_1+2\\2k_1-1\\3k_1-1\\k_1\end{pmatrix}\quad (k_1\ \text{为任意常数}),
$$

方程组 $AX_2=e_2$ 的通解为

$$
X_2=k_2\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}6\\-3\\-4\\0\end{pmatrix}=\begin{pmatrix}-k_2+6\\2k_2-3\\3k_2-4\\k_2\end{pmatrix}\quad (k_2\ \text{为任意常数}),
$$

方程组 $AX_3=e_3$ 的通解为

$$
X_3=k_3\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\1\\0\end{pmatrix}=\begin{pmatrix}-k_3-1\\2k_3+1\\3k_3+1\\k_3\end{pmatrix}\quad (k_3\ \text{为任意常数}),
$$

故

$$
B=\begin{pmatrix}-k_1+2&-k_2+6&-k_3-1\\2k_1-1&2k_2-3&2k_3+1\\3k_1-1&3k_2-4&3k_3+1\\k_1&k_2&k_3\end{pmatrix}\quad (k_1,k_2,k_3\ \text{为任意常数}).
$$`,
  source: '《2014 数学一解析》第 7–8 页',
});

EXAMS.push({
  year: 2014, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['eig-similar-crit', 'eig-diag-crit'],
  question: String.raw`（本题满分 11 分）证明 $n$ 阶矩阵

$$
\begin{pmatrix}1&1&\cdots&1\\1&1&\cdots&1\\\vdots&\vdots&&\vdots\\1&1&\cdots&1\end{pmatrix}\ \text{与}\ \begin{pmatrix}0&\cdots&0&1\\0&\cdots&0&2\\\vdots&&\vdots&\vdots\\0&\cdots&0&n\end{pmatrix}
$$

相似．`,
  answer: String.raw`证明见解析，两矩阵特征值相同且都可对角化．`,
  analysis: String.raw`令

$$
A=\begin{pmatrix}1&1&\cdots&1\\1&1&\cdots&1\\\vdots&\vdots&&\vdots\\1&1&\cdots&1\end{pmatrix},\quad B=\begin{pmatrix}0&\cdots&0&1\\0&\cdots&0&2\\\vdots&&\vdots&\vdots\\0&\cdots&0&n\end{pmatrix},
$$

由 $|\lambda E-A|=0$ 得 $A$ 的特征值为 $\lambda_1=\cdots=\lambda_{n-1}=0$，$\lambda_n=n$，

由 $|\lambda E-B|=0$ 得 $B$ 的特征值为 $\lambda_1=\cdots=\lambda_{n-1}=0$，$\lambda_n=n$．

因为 $A^{\mathrm{T}}=A$，所以 $A$ 可对角化；

因为 $r(0E-B)=r(B)=1$，所以 $B$ 可对角化，

因为 $A,B$ 特征值相同且都可对角化，所以 $A\sim B$．`,
  source: '《2014 数学一解析》第 9 页',
});
