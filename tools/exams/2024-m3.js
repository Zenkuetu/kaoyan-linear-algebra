// 2024 · 数学三 · 线性代数（题面取自《2024年考研数学三真题》，答案与解析取自《2024年数学三真题答案解析》）
EXAMS.push({
  year: 2024, subject: '数三', number: 5, kind: '选择', score: 5,
  ids: ['qf-orthogonal', 'eig-trace-det-app'],
  question: String.raw`已知 $f(x_1,x_2,x_3)=x^{\mathrm{T}}Ax$ 经正交变换化为 $y_1^2-2y_2^2+3y_3^2$，则二次型对应的矩阵 $A$ 的行列式和迹分别为（ ）

（A）$-6,-2$　（B）$6,-2$　（C）$-6,2$　（D）$6,2$`,
  answer: '（C）',
  analysis: String.raw`因为 $f(x_1,x_2,x_3)=x^{\mathrm{T}}Ax$ 在正交变换下可化为 $y_1^2-2y_2^2+3y_3^2$，所以 $A$ 的特征值为 $1,-2,3$，得
$$
|A|=1\times(-2)\times 3=-6,\quad \mathrm{tr}(A)=1+(-2)+3=2.
$$
故选 C。`,
  source: '《2024 数学三解析》第 9 页',
});

EXAMS.push({
  year: 2024, subject: '数三', number: 6, kind: '选择', score: 5,
  ids: ['mat-elem-mat', 'mat-elem-relation'],
  question: String.raw`设 $A$ 为三阶矩阵，$P=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix}$，若 $P^{\mathrm{T}}AP^{2}=\begin{pmatrix}a+2c&0&c\\0&b&0\\2c&0&c\end{pmatrix}$，则 $A=$（ ）

（A）$\begin{pmatrix}c&0&0\\0&a&0\\0&0&b\end{pmatrix}$　（B）$\begin{pmatrix}b&0&0\\0&c&0\\0&0&a\end{pmatrix}$

（C）$\begin{pmatrix}a&0&0\\0&b&0\\0&0&c\end{pmatrix}$　（D）$\begin{pmatrix}c&0&0\\0&b&0\\0&0&a\end{pmatrix}$`,
  answer: '（C）',
  analysis: String.raw`记 $P^{\mathrm{T}}AP^{2}=B$，且 $P=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix}=E_{31}(1)$，故
$$
A=(P^{\mathrm{T}})^{-1}B(P^{2})^{-1}=[E_{31}^{-1}(1)]^{\mathrm{T}}B[E_{31}^{2}(1)]^{-1}
$$
$$
=[E_{31}^{-1}(1)]^{\mathrm{T}}BE_{31}^{-1}(1)E_{31}^{-1}(1)=E_{31}^{\mathrm{T}}(-1)BE_{31}(-1)E_{31}(-1)
$$
$$
=\begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}a+2c&0&c\\0&b&0\\2c&0&c\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\-1&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\-1&0&1\end{pmatrix}
$$
$$
=\begin{pmatrix}a&0&0\\0&b&0\\2c&0&c\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\-1&0&1\end{pmatrix}=\begin{pmatrix}a&0&0\\0&b&0\\0&0&c\end{pmatrix}.
$$
故选 C。`,
  source: '《2024 数学三解析》第 9–10 页',
});

EXAMS.push({
  year: 2024, subject: '数三', number: 7, kind: '选择', score: 5,
  ids: ['det-cofactor', 'det-expansion'],
  question: String.raw`设 $A=\begin{pmatrix}a+1&b&3\\a&\frac{b}{2}&1\\1&1&2\end{pmatrix}$，$M_{ij}$ 为 $a_{ij}$ 的余子式，若 $|A|=-\frac{1}{2}$ 且 $-M_{21}+M_{22}-M_{23}=0$，则（ ）

（A）$a=1$ 或 $a=-\frac{3}{2}$　（B）$a=0$ 或 $a=\frac{3}{2}$

（C）$b=1$ 或 $b=-\frac{1}{2}$　（D）$b=-1$ 或 $a=\frac{1}{2}$`,
  answer: '（B）',
  analysis: String.raw`由题意知，
$$
|A|=\begin{vmatrix}a+1&b&3\\a&\frac{b}{2}&1\\1&1&2\end{vmatrix}=\begin{vmatrix}1&\frac{b}{2}&2\\a&\frac{b}{2}&1\\1&1&2\end{vmatrix}=\begin{vmatrix}0&\frac{b}{2}-1&0\\a&\frac{b}{2}&1\\1&1&2\end{vmatrix}=-\frac{1}{2},
$$
则
$$
\left(\frac{b}{2}-1\right)(2a-1)=\frac{1}{2}.
$$
整理得
$$
ab-2a-\frac{b}{2}+1=\frac{1}{2}.\qquad(*)
$$
又
$$
-M_{21}+M_{22}-M_{23}=A_{21}+A_{22}+A_{23}=\begin{vmatrix}a+1&b&3\\1&1&1\\1&1&2\end{vmatrix}=\begin{vmatrix}a+1&b&3\\1&1&1\\0&0&1\end{vmatrix}=a+1-b=0,
$$
则有 $b=a+1$，代入 $(*)$ 式中，得 $a(a+1)-2a-\frac{a+1}{2}+\frac{1}{2}=0$，解得 $a=0$ 或 $a=\frac{3}{2}$，从而 $b=1$ 或 $\frac{5}{2}$。

故选 B。`,
  source: '《2024 数学三解析》第 10 页',
});

EXAMS.push({
  year: 2024, subject: '数三', number: 15, kind: '填空', score: 5,
  ids: ['eig-mult', 'eig-trace-det-app'],
  question: String.raw`$A$ 为 3 阶矩阵，$A^{*}$ 为其伴随矩阵，$E$ 为单位矩阵，且 $r(2E-A)=1$，$r(E+A)=2$，则 $|A^{*}|=\underline{\qquad}$。`,
  answer: String.raw`$16$`,
  analysis: String.raw`$r(2E-A)=1$，则 $(2E-A)x=0$ 有两个线性无关解，于是 $\lambda=2$ 有 2 个线性无关的特征向量，即 $\lambda=2$ 至少为二重特征值。

$r(E+A)=r(-E-A)=2$，则 $(-E-A)x=0$ 有一个线性无关解，于是 $\lambda=-1$ 有 1 个线性无关特征向量，即 $\lambda=-1$ 至少为一重特征值。

又 $A$ 为 3 阶矩阵，所以 $A$ 的特征值为 $2,2,-1$。故
$$
|A|=2\times 2\times(-1)=-4,\quad |A^{*}|=|A|^{n-1}=|A|^{2}=16.
$$`,
  source: '《2024 数学三解析》第 11 页',
});

EXAMS.push({
  year: 2024, subject: '数三', number: 21, kind: '解答', score: 12,
  ids: ['eq-nonhomo-general', 'eq-rank-relation'],
  question: String.raw`（本题满分 12 分）已知矩阵 $A=\begin{pmatrix}1&-1&0&-1\\1&1&0&3\\2&1&2&6\end{pmatrix}$，$B=\begin{pmatrix}1&0&1&2\\1&-1&a&a-1\\2&-3&2&-2\end{pmatrix}$，向量 $\alpha=\begin{pmatrix}0\\2\\3\end{pmatrix}$，$\beta=\begin{pmatrix}1\\0\\-1\end{pmatrix}$。

（1）证明方程组 $Ax=\alpha$ 的解是 $Bx=\beta$ 的解。

（2）若方程组 $Ax=\alpha$ 与 $Bx=\beta$ 有不同的解，求 $a$。`,
  answer: String.raw`$a=1$`,
  analysis: String.raw`（1）证 对 $Ax=\alpha$ 的增广矩阵施以初等行变换，有
$$
(A\vdots\alpha)=\begin{pmatrix}1&-1&0&-1&0\\1&1&0&3&2\\2&1&2&6&3\end{pmatrix}\to\begin{pmatrix}1&0&0&1&1\\0&1&0&2&1\\0&0&1&1&0\end{pmatrix},
$$
得 $Ax=\alpha$ 的通解为
$$
x=\begin{pmatrix}1\\1\\0\\0\end{pmatrix}+k\begin{pmatrix}-1\\-2\\-1\\1\end{pmatrix}=\begin{pmatrix}1-k\\1-2k\\-k\\k\end{pmatrix},
$$
其中 $k$ 为任意常数。

将 $Ax=\alpha$ 的通解代入 $Bx$ 得
$$
Bx=\begin{pmatrix}1&0&1&2\\1&-1&a&a-1\\2&-3&2&-2\end{pmatrix}\begin{pmatrix}1-k\\1-2k\\-k\\k\end{pmatrix}=\begin{pmatrix}1\\0\\-1\end{pmatrix}=\beta,
$$
所以方程组 $Ax=\alpha$ 的解均为方程组 $Bx=\beta$ 的解。

（2）解 对 $Bx=\beta$ 的增广矩阵施以初等行变换，有
$$
(B\vdots\beta)=\begin{pmatrix}1&0&1&2&1\\1&-1&a&a-1&0\\2&-3&2&-2&-1\end{pmatrix}\to\begin{pmatrix}1&0&1&2&1\\0&1&1-a&3-a&1\\0&0&a-1&a-1&0\end{pmatrix}.
$$
当 $a\ne 1$ 时，再经初等行变换，有
$$
(B\vdots\beta)\to\begin{pmatrix}1&0&1&2&1\\0&1&1-a&3-a&1\\0&0&a-1&a-1&0\end{pmatrix}\to\begin{pmatrix}1&0&0&1&1\\0&1&0&2&1\\0&0&1&1&0\end{pmatrix},
$$
得方程组 $Bx=\beta$ 的通解为
$$
x=\begin{pmatrix}1\\1\\0\\0\end{pmatrix}+k\begin{pmatrix}-1\\-2\\-1\\1\end{pmatrix},
$$
其中 $k$ 为任意常数，所以方程组 $Ax=\alpha$ 与方程组 $Bx=\beta$ 同解。

当 $a=1$ 时，经初等行变换，有
$$
(B\vdots\beta)\to\begin{pmatrix}1&0&1&2&1\\0&1&0&2&1\\0&0&0&0&0\end{pmatrix},
$$
知 $r(A\vdots\alpha)\ne r(B\vdots\beta)$，所以方程组 $Ax=\alpha$ 与方程组 $Bx=\beta$ 不同解。

综上可知，$a=1$。`,
  source: '《2024 数学三解析》第 13–14 页',
});
