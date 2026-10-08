// 2014 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》第 33–36 页的 2014 年部分；答案与解析取自《2014年数学三真题答案解析》）
EXAMS.push({
  year: 2014, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ["det-def"],
  question: String.raw`行列式
$$
\begin{vmatrix}0&a&b&0\\a&0&0&b\\0&c&d&0\\c&0&0&d\end{vmatrix}=(\quad)
$$
（A）$(ad-bc)^2$　（B）$-(ad-bc)^2$　（C）$a^2d^2-b^2c^2$　（D）$b^2c^2-a^2d^2$`,
  answer: String.raw`（B）`,
  analysis: String.raw`由行列式展开定理按第一列展开：
$$
\begin{vmatrix}0&a&b&0\\a&0&0&b\\0&c&d&0\\c&0&0&d\end{vmatrix}
=-a\begin{vmatrix}a&b&0\\c&d&0\\0&0&d\end{vmatrix}-c\begin{vmatrix}a&b&0\\0&0&b\\c&d&0\end{vmatrix}
=-ad\begin{vmatrix}a&b\\c&d\end{vmatrix}+bc\begin{vmatrix}a&b\\c&d\end{vmatrix}
$$
$$
=-ad(ad-bc)+bc(ad-bc)=-(ad-bc)^2.
$$
故应选（B）。`,
  source: '《2014 年数学（三）参考答案》第 1 页',
});

EXAMS.push({
  year: 2014, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ["vec-indep-def","vec-indep-crit"],
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3$ 均为 3 维向量，则对任意常数 $k,l$，向量组 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 线性无关是向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关的（　　）

（A）必要非充分条件　　（B）充分非必要条件　　（C）充分必要条件　　（D）既非充分也非必要条件`,
  answer: String.raw`（A）`,
  analysis: String.raw`因为
$$
(\alpha_1+k\alpha_3,\ \alpha_2+l\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0\\0&1\\k&l\end{pmatrix}=(\alpha_1,\alpha_2,\alpha_3)A,
$$
对任意的常数 $k,l$，矩阵 $A$ 的秩都为 $2$，所以若向量 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 一定线性无关。

而当
$$
\alpha_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad \alpha_2=\begin{pmatrix}0\\1\\0\end{pmatrix},\quad \alpha_3=\begin{pmatrix}0\\0\\0\end{pmatrix}
$$
时，对任意的常数 $k,l$，向量 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 线性无关，但 $\alpha_1,\alpha_2,\alpha_3$ 线性相关。故应选（A）。`,
  source: '《2014 年数学（三）参考答案》第 2 页',
});

EXAMS.push({
  year: 2014, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ["qf-inertia-index","qf-complete-square"],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=x_1^2-x_2^2+2ax_1x_3+4x_2x_3$ 的负惯性指数为 $1$，则 $a$ 的取值范围是 $\underline{\qquad}$。`,
  answer: String.raw`$[-2,2]$`,
  analysis: String.raw`由配方法可知
$$
f(x_1,x_2,x_3)=x_1^2-x_2^2+2ax_1x_3+4x_2x_3=(x_1+ax_3)^2-(x_2-2x_3)^2+(4-a^2)x_3^2.
$$
由于负惯性指数为 $1$，则 $4-a^2\ge 0$，所以 $a$ 的取值范围是 $[-2,2]$。`,
  source: '《2014 年数学（三）参考答案》第 3 页',
});

EXAMS.push({
  year: 2014, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ["eq-homo-structure","mat-eq-solve"],
  question: String.raw`（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix},
$$
$E$ 为 3 阶单位矩阵。

（Ⅰ）求方程组 $Ax=0$ 的一个基础解系；

（Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$。`,
  answer: String.raw`（Ⅰ）基础解系 $\alpha=(-1,2,3,1)^{\mathrm{T}}$；

（Ⅱ）$B=\begin{pmatrix}2&6&-1\\-1&-3&1\\-1&-4&1\\0&0&0\end{pmatrix}+(k_1\alpha,\ k_2\alpha,\ k_3\alpha)$，$k_1,k_2,k_3$ 为任意常数。`,
  analysis: String.raw`（Ⅰ）对矩阵 $A$ 施以初等行变换
$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}\to\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix},
$$
则方程组 $Ax=0$ 的一个基础解系为
$$
\alpha=\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}.
$$

（Ⅱ）对矩阵 $(A\ \vdots\ E)$ 施以初等行变换
$$
(A\ \vdots\ E)=\begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\1&2&0&-3&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&1&2&6&-1\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{pmatrix}.
$$
记 $E=(e_1,e_2,e_3)$，则
$$
Ax=e_1\ \text{的通解}\ x=\begin{pmatrix}2\\-1\\-1\\0\end{pmatrix}+k_1\alpha,\quad
Ax=e_2\ \text{的通解}\ x=\begin{pmatrix}6\\-3\\-4\\0\end{pmatrix}+k_2\alpha,\quad
Ax=e_3\ \text{的通解}\ x=\begin{pmatrix}-1\\1\\1\\0\end{pmatrix}+k_3\alpha,
$$
$k_1,k_2,k_3$ 为任意常数。

于是，所求矩阵为
$$
B=\begin{pmatrix}2&6&-1\\-1&-3&1\\-1&-4&1\\0&0&0\end{pmatrix}+(k_1\alpha,\ k_2\alpha,\ k_3\alpha),
$$
$k_1,k_2,k_3$ 为任意常数。`,
  source: '《2014 年数学（三）参考答案》第 5 页',
});

EXAMS.push({
  year: 2014, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ["eig-similar-prop","eig-symmetric","eig-diag-crit"],
  question: String.raw`（本题满分 11 分）证明 $n$ 阶矩阵
$$
\begin{pmatrix}1&1&\cdots&1\\1&1&\cdots&1\\\vdots&\vdots&&\vdots\\1&1&\cdots&1\end{pmatrix}\ \text{与}\ \begin{pmatrix}0&\cdots&0&1\\0&\cdots&0&2\\\vdots&&\vdots&\vdots\\0&\cdots&0&n\end{pmatrix}
$$
相似。`,
  answer: String.raw`证明见解析。`,
  analysis: String.raw`设
$$
A=\begin{pmatrix}1&1&\cdots&1\\1&1&\cdots&1\\\vdots&\vdots&&\vdots\\1&1&\cdots&1\end{pmatrix},\qquad B=\begin{pmatrix}0&\cdots&0&1\\0&\cdots&0&2\\\vdots&&\vdots&\vdots\\0&\cdots&0&n\end{pmatrix}.
$$
因为
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&\cdots&-1\\-1&\lambda-1&\cdots&-1\\\vdots&\vdots&&\vdots\\-1&-1&\cdots&\lambda-1\end{vmatrix}=(\lambda-n)\lambda^{n-1},
$$
$$
|\lambda E-B|=\begin{vmatrix}\lambda&0&\cdots&-1\\0&\lambda&\cdots&-2\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda-n\end{vmatrix}=(\lambda-n)\lambda^{n-1},
$$
所以 $A$ 与 $B$ 有相同的特征值 $\lambda_1=n$，$\lambda_2=0$（$n-1$ 重）。

由于 $A$ 为实对称矩阵，所以 $A$ 相似于对角矩阵
$$
\Lambda=\begin{pmatrix}n&&&\\&0&&\\&&\ddots&\\&&&0\end{pmatrix}.
$$
因为 $r(\lambda_2E-B)=r(B)=1$，所以 $B$ 对应于特征值 $\lambda_2=0$ 有 $n-1$ 个线性无关的特征向量，于是 $B$ 也相似于 $\Lambda$。故 $A$ 与 $B$ 相似。`,
  source: '《2014 年数学（三）参考答案》第 6 页',
});
