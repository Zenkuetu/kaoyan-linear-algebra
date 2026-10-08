// 2020 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》，答案与解析取自《2020年数学三真题答案解析》）
EXAMS.push({
  year: 2020, subject: '数三', number: 5, kind: '选择', score: 5,
  ids: ['eq-homo-general', 'mat-adj-rank'],
  question: String.raw`设 4 阶矩阵 $A=(a_{ij})$ 不可逆，$a_{12}$ 的代数余子式 $A_{12}\ne 0$，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 为矩阵 $A$ 的列向量组，$A^{*}$ 为 $A$ 的伴随矩阵，则方程组 $A^{*}x=0$ 的通解为

（A）$x=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3$，其中 $k_1,k_2,k_3$ 为任意常数

（B）$x=k_1\alpha_1+k_2\alpha_2+k_3\alpha_4$，其中 $k_1,k_2,k_3$ 为任意常数

（C）$x=k_1\alpha_1+k_2\alpha_3+k_3\alpha_4$，其中 $k_1,k_2,k_3$ 为任意常数

（D）$x=k_1\alpha_2+k_2\alpha_3+k_3\alpha_4$，其中 $k_1,k_2,k_3$ 为任意常数`,
  answer: '（C）',
  analysis: String.raw`选择题的 4 个选项，已经告诉你 $A^{*}x=0$ 的基础解系由 $A$ 的 3 个列向量所构成。因此只要判断 $A$ 的哪 3 个列向量是线性无关的。而条件就是 $A_{12}\ne 0$。

因
$$
A_{12}=-\begin{vmatrix}a_{21}&a_{23}&a_{24}\\a_{31}&a_{33}&a_{34}\\a_{41}&a_{43}&a_{44}\end{vmatrix}\ne 0
$$
意味 $(a_{21},a_{31},a_{41})^{\mathrm{T}}$，$(a_{23},a_{33},a_{43})^{\mathrm{T}}$，$(a_{24},a_{34},a_{44})^{\mathrm{T}}$ 线性无关，那么必有 $\alpha_1,\alpha_3,\alpha_4$ 线性无关（低维线性无关向量增加坐标而得到的高维向量必线性无关）。故应选（C）。`,
  source: '《2020 数学三解析》第 5 页',
});

EXAMS.push({
  year: 2020, subject: '数三', number: 6, kind: '选择', score: 5,
  ids: ['eig-property', 'eig-diag-method'],
  question: String.raw`设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2$ 为 $A$ 的属于特征值 $1$ 的线性无关的特征向量，$\alpha_3$ 为 $A$ 的属于特征值 $-1$ 的特征向量，则满足
$$
P^{-1}AP=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}
$$
的可逆矩阵 $P$ 可为

（A）$(\alpha_1+\alpha_3,\alpha_2,-\alpha_3)$　（B）$(\alpha_1+\alpha_2,\alpha_2,-\alpha_3)$

（C）$(\alpha_1+\alpha_3,-\alpha_3,\alpha_2)$　（D）$(\alpha_1+\alpha_2,-\alpha_3,\alpha_2)$`,
  answer: '（D）',
  analysis: String.raw`本题考察 $P^{-1}AP=\Lambda$ 的基本知识。$P$ ——特征向量，$\Lambda$ ——特征值，且 $P$ 与 $\Lambda$ 的位置对应要正确。

因 $\alpha_1,\alpha_2$ 是 $\lambda=1$ 的线性无关的特征向量，$\alpha_3$ 是 $\lambda=-1$ 的特征向量。

于是 $\alpha_1+\alpha_3$ 不是 $A$ 的特征向量，排除（A），（C），又对角矩阵
$$
\Lambda=\begin{pmatrix}1&&\\&-1&\\&&1\end{pmatrix},
$$
故 $P$ 中特征向量应当是 $\lambda=1,\lambda=-1,\lambda=1$ 的顺序，排除（B）。

（D）$(\alpha_1+\alpha_2,-\alpha_3,\alpha_2)$ 中 $\alpha_1+\alpha_2$ 与 $\alpha_2$ 是 $\lambda=1$ 的线性无关的特征向量，$-\alpha_3$ 是 $\lambda=-1$ 的特征向量，故应选（D）。`,
  source: '《2020 数学三解析》第 6 页',
});

EXAMS.push({
  year: 2020, subject: '数三', number: 13, kind: '填空', score: 5,
  ids: ['det-elimination', 'det-expansion'],
  question: String.raw`行列式
$$
\begin{vmatrix}
a&0&-1&1\\
0&a&1&-1\\
-1&1&a&0\\
1&-1&0&a
\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$a^2(a^2-4)$`,
  analysis: String.raw`由行列式性质恒等变形，例如把 2 行加到 1 行，3 行加到 4 行，再把 1 列的 $-1$ 倍加到 2 列，4 列的 $-1$ 倍加到 3 列
$$
\begin{vmatrix}a&0&-1&1\\0&a&1&-1\\-1&1&a&0\\1&-1&0&a\end{vmatrix}=\begin{vmatrix}a&a&0&0\\0&a&1&-1\\-1&1&a&0\\0&0&a&a\end{vmatrix}=\begin{vmatrix}a&0&0&0\\0&a&2&-1\\-1&2&a&0\\0&0&0&a\end{vmatrix}
$$
$$
=a^2\begin{vmatrix}a&2\\2&a\end{vmatrix}=a^2(a^2-4).
$$`,
  source: '《2020 数学三解析》第 7 页',
});

EXAMS.push({
  year: 2020, subject: '数三', number: 20, kind: '解答', score: 12,
  ids: ['qf-orthogonal', 'qf-def'],
  question: String.raw`（本题满分 12 分）设二次型 $f(x_1,x_2)=x_1^2-4x_1x_2+4x_2^2$ 经过正交变换
$$
\begin{pmatrix}x_1\\x_2\end{pmatrix}=Q\begin{pmatrix}y_1\\y_2\end{pmatrix}
$$
化为二次型 $g(y_1,y_2)=ay_1^2+4y_1y_2+by_2^2$，其中 $a\ge b$。

（Ⅰ）求 $a,b$ 的值。

（Ⅱ）求正交矩阵 $Q$。`,
  answer: String.raw`$a=4,\ b=1$；$Q=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）二次型 $f$ 经正交变换 $x=Qy$ 化为二次型 $g$。记二次型 $f,g$ 的矩阵分别是 $A$ 和 $B$。即
$$
A=\begin{pmatrix}1&-2\\-2&4\end{pmatrix},\quad B=\begin{pmatrix}a&2\\2&b\end{pmatrix}.
$$
因 $A\sim B$，于是 $\sum a_{ii}=\sum b_{ii}$，$|A|=|B|$，即
$$
\begin{cases}a+b=5,\\ ab=4.\end{cases}
$$
又因 $a\ge b$，故 $a=4,b=1$。

（Ⅱ）对二次型 $f=x_1^2-4x_1x_2+4x_2^2$ 和 $g=4y_1^2+4y_1y_2+y_2^2$，只要令
$$
\begin{cases}x_1=y_2,\\ x_2=-y_1,\end{cases}
$$
即
$$
\begin{pmatrix}x_1\\x_2\end{pmatrix}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}y_1\\y_2\end{pmatrix}.
$$
$$
Q=\begin{pmatrix}0&1\\-1&0\end{pmatrix}
$$
是正交矩阵合于所求。`,
  source: '《2020 数学三解析》第 9 页',
});

EXAMS.push({
  year: 2020, subject: '数三', number: 21, kind: '解答', score: 12,
  ids: ['eig-diag-method', 'eig-similar-prop'],
  question: String.raw`（本题满分 12 分）设 $A$ 为 2 阶矩阵，$P=(\alpha,A\alpha)$，其中 $\alpha$ 是非零向量且不是 $A$ 的特征向量。

（Ⅰ）证明 $P$ 为可逆矩阵。

（Ⅱ）若 $A^2\alpha+A\alpha-6\alpha=0$，求 $P^{-1}AP$，并判断 $A$ 是否相似于对角矩阵。`,
  answer: String.raw`$P^{-1}AP=\begin{pmatrix}0&6\\1&-1\end{pmatrix}$，$A$ 相似于对角矩阵`,
  analysis: String.raw`（Ⅰ）因 $\alpha\ne 0$ 且 $\alpha$ 不是 $A$ 的特征向量。于是 $A\alpha\ne k\alpha$，从而 $\alpha$ 与 $A\alpha$ 不共线，即 $\alpha,A\alpha$ 线性无关，故 $P=(\alpha,A\alpha)$ 可逆。

或（反证法）若 $P$ 不可逆，有
$$
|P|=|\alpha,A\alpha|=0
$$
$\alpha$ 与 $A\alpha$ 成比例，于是 $A\alpha=k\alpha$。又 $\alpha\ne 0$ 知 $\alpha$ 是 $A$ 的特征向量与已知条件矛盾。

（Ⅱ）（方法一）由 $A^2\alpha+A\alpha-6\alpha=0$ 有 $A^2\alpha=6\alpha-A\alpha$
$$
AP=A(\alpha,A\alpha)=(A\alpha,A^2\alpha)=(A\alpha,6\alpha-A\alpha)=(\alpha,A\alpha)\begin{pmatrix}0&6\\1&-1\end{pmatrix}
$$
因 $P$ 可逆，于是
$$
P^{-1}AP=\begin{pmatrix}0&6\\1&-1\end{pmatrix}
$$
记 $B=\begin{pmatrix}0&6\\1&-1\end{pmatrix}$，而
$$
|\lambda E-B|=\begin{vmatrix}\lambda&-6\\-1&\lambda+1\end{vmatrix}=\lambda^2+\lambda-6
$$
特征值 $2,-3$。

于是 $A$ 有 2 个不同特征值从而 $A$ 可相似对角化。

（方法二）因 $A^2+A-6E=(A-2E)(A+3E)=(A+3E)(A-2E)$，由 $A^2\alpha+A\alpha-6\alpha=0$，即 $(A^2+A-6E)\alpha=0$，于是 $(A-2E)(A+3E)\alpha=0$，即 $(A-2E)(A\alpha+3\alpha)=0$，即 $A(A\alpha+3\alpha)=2(A\alpha+3\alpha)$，由 $\alpha$ 不是特征向量，有 $A\alpha+3\alpha\ne 0$，从而 $\lambda=2$ 是 $A$ 的特征值，类似有 $\lambda=-3$ 是特征值。下略。`,
  source: '《2020 数学三解析》第 10 页',
});
