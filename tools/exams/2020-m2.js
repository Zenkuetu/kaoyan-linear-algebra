// 2020 · 数学二 · 线性代数（题面取自《2020年考研数学二真题》，答案与解析取自《2020 数学二解析》）
EXAMS.push({
  year: 2020, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ["mat-adj-rank","eq-homo-general","eq-homo-structure"],
  question: String.raw`设 4 阶矩阵 $A=(a_{ij})$ 不可逆，$a_{12}$ 的代数余子式 $A_{12}\ne 0$，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 为矩阵 $A$ 的列向量组，$A^*$ 为 $A$ 的伴随矩阵，则方程组 $A^*x=0$ 的通解为

（A）$x=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3$，其中 $k_1,k_2,k_3$ 为任意常数

（B）$x=k_1\alpha_1+k_2\alpha_2+k_3\alpha_4$，其中 $k_1,k_2,k_3$ 为任意常数

（C）$x=k_1\alpha_1+k_2\alpha_3+k_3\alpha_4$，其中 $k_1,k_2,k_3$ 为任意常数

（D）$x=k_1\alpha_2+k_2\alpha_3+k_3\alpha_4$，其中 $k_1,k_2,k_3$ 为任意常数`,
  answer: String.raw`（C）`,
  analysis: String.raw`【解析】选择题的 4 个选项，已经告诉你 $A^*x=0$ 的基础解系由 $A$ 的 3 个列向量所构成。因此只要判断 $A$ 的哪 3 个列向量是线性无关的。而条件就是 $A_{12}\ne 0$。

因
$$
A_{12}=-\begin{vmatrix}a_{21}&a_{23}&a_{24}\\a_{31}&a_{33}&a_{34}\\a_{41}&a_{43}&a_{44}\end{vmatrix}\ne 0
$$
意味 $(a_{21},a_{31},a_{41})^{\mathrm T},(a_{23},a_{33},a_{43})^{\mathrm T},(a_{24},a_{34},a_{44})^{\mathrm T}$ 线性无关，那么必有 $\alpha_1,\alpha_3,\alpha_4$ 线性无关（低维向量无关增加坐标高维向量必无关）。

故应选（C）。`,
  source: "《2020 数学二解析》第 7 页",
});

EXAMS.push({
  year: 2020, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ["eig-def","eig-diag-method","eig-property"],
  question: String.raw`设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2$ 为 $A$ 的属于特征值 $1$ 的线性无关的特征向量，$\alpha_3$ 为 $A$ 的属于特征值 $-1$ 的特征向量，则满足
$$
P^{-1}AP=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}
$$
的可逆矩阵 $P$ 可为

（A）$(\alpha_1+\alpha_3,\ \alpha_2,\ -\alpha_3)$　　（B）$(\alpha_1+\alpha_2,\ \alpha_2,\ -\alpha_3)$

（C）$(\alpha_1+\alpha_3,\ -\alpha_3,\ \alpha_2)$　　（D）$(\alpha_1+\alpha_2,\ -\alpha_3,\ \alpha_2)$`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解析】本题考查 $P^{-1}AP=\Lambda$ 的基本知识。$P$ —— 特征向量，$\Lambda$ —— 特征值。且 $P$ 与 $\Lambda$ 的位置对应要正确。

因 $\alpha_1,\alpha_2$ 是 $\lambda=1$ 的线性无关的特征向量，$\alpha_3$ 是 $\lambda=-1$ 的特征向量。

于是 $\alpha_1+\alpha_3$ 不是 $A$ 特征向量，排除（A），（C），又对角矩阵
$$
\Lambda=\begin{pmatrix}1&&\\&-1&\\&&1\end{pmatrix},
$$
故 $P$ 中特征向量应当是 $\lambda=1,\lambda=-1,\lambda=1$ 的顺序，排除（B）。

（D）$(\alpha_1+\alpha_2,-\alpha_3,\alpha_2)$ 中 $\alpha_1+\alpha_2$ 与 $\alpha_2$ 是 $\lambda=1$ 的线性无关的特征向量，$-\alpha_3$ 是 $\lambda=-1$ 的特征向量，故应选（D）。`,
  source: "《2020 数学二解析》第 7 页",
});

EXAMS.push({
  year: 2020, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ["det-elimination","det-add-row","det-triangular"],
  question: String.raw`行列式
$$
\begin{vmatrix}a&0&-1&1\\0&a&1&-1\\-1&1&a&0\\1&-1&0&a\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$a^2(a^2-4)$`,
  analysis: String.raw`【解析】由行列式性质恒等变形，例如把 2 行加到 1 行，3 行加到 4 行，再 1 列的 $-1$ 倍加到 2 列，4 列的 $-1$ 倍加到 3 列
$$
\begin{vmatrix}a&0&-1&1\\0&a&1&-1\\-1&1&a&0\\1&-1&0&a\end{vmatrix}=\begin{vmatrix}a&a&0&0\\0&a&1&-1\\-1&1&a&0\\0&0&a&a\end{vmatrix}=\begin{vmatrix}a&0&0&0\\0&a&2&-1\\-1&2&a&0\\0&0&0&a\end{vmatrix}=a^2\begin{vmatrix}a&2\\2&a\end{vmatrix}=a^2(a^2-4).
$$`,
  source: "《2020 数学二解析》第 8–9 页",
});

EXAMS.push({
  year: 2020, subject: '数二', number: 22, kind: '解答', score: 11,
  ids: ["qf-complete-square","qf-inertia-index","qf-canonical"],
  question: String.raw`（本题满分 11 分）设二次型 $f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+2ax_1x_2+2ax_1x_3+2ax_2x_3$ 经过可逆线性变换
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=P\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}
$$
化为二次型 $g(y_1,y_2,y_3)=y_1^2+y_2^2+4y_3^2+2y_1y_2$。

（Ⅰ）求 $a$ 的值；

（Ⅱ）求可逆矩阵 $P$。`,
  answer: String.raw`（Ⅰ）$a=-\dfrac12$；（Ⅱ）$P=\begin{pmatrix}2&1&\dfrac{2}{\sqrt3}\\1&0&\dfrac{4}{\sqrt3}\\1&0&0\end{pmatrix}$`,
  analysis: String.raw`【解】（Ⅰ）二次型 $f$ 经坐标变换 $x=Py$ 成二次型 $g$，故 $f$ 和 $g$ 有相同的正、负惯性指数。因 $g=(y_1+y_2)^2+4y_3^2$ 知 $p=2,q=0$。于是二次型 $f$ 的正惯性指数 $p=2$，负惯性指数为 $0$。

因二次型 $f$ 的矩阵
$$
A=\begin{pmatrix}1&a&a\\a&1&a\\a&a&1\end{pmatrix},
$$
由 $|\lambda E-A|=(\lambda-1-2a)(\lambda-1+a)^2$，矩阵 $A$ 的特征值为 $1-a,1-a,1+2a$。从而
$$
\begin{cases}1-a>0,\\1+2a=0,\end{cases}
$$
故 $a=-\dfrac12$。

（Ⅱ）由配方法
$$
\begin{aligned}
f&=x_1^2+x_2^2+x_3^2-x_1x_2-x_1x_3-x_2x_3\\
&=\left[x_1^2-2x_1\left(\frac12x_2+\frac12x_3\right)+\frac14(x_2+x_3)^2\right]+x_2^2+x_3^2-x_2x_3-\frac14(x_2+x_3)^2\\
&=\left(x_1-\frac12x_2-\frac12x_3\right)^2+\frac34(x_2-x_3)^2.
\end{aligned}
$$
令 $z_1=x_1-\dfrac12x_2-\dfrac12x_3$，$z_2=\dfrac{\sqrt3}{2}x_2-\dfrac{\sqrt3}{2}x_3$，$z_3=x_3$，即
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1&\dfrac{1}{\sqrt3}&1\\0&\dfrac{2}{\sqrt3}&1\\0&0&1\end{pmatrix}\begin{pmatrix}z_1\\z_2\\z_3\end{pmatrix},\tag{1}
$$
有 $f=z_1^2+z_2^2$。

再令 $z_1=y_1+y_2$，$z_2=2y_3$，$z_3=y_1$，即
$$
\begin{pmatrix}z_1\\z_2\\z_3\end{pmatrix}=\begin{pmatrix}1&1&0\\0&0&2\\1&0&0\end{pmatrix}\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix},\tag{2}
$$
则有 $f$ 经坐标变换 $x=Py$，
$$
P=\begin{pmatrix}1&\dfrac{1}{\sqrt3}&1\\0&\dfrac{2}{\sqrt3}&1\\0&0&1\end{pmatrix}\begin{pmatrix}1&1&0\\0&0&2\\1&0&0\end{pmatrix}=\begin{pmatrix}2&1&\dfrac{2}{\sqrt3}\\1&0&\dfrac{4}{\sqrt3}\\1&0&0\end{pmatrix},
$$
得 $g=y_1^2+y_2^2+4y_3^2+2y_1y_2$。

【评注】坐标变换 $x=Py$ 是不唯一的。`,
  source: "《2020 数学二解析》第 11–12 页",
});

EXAMS.push({
  year: 2020, subject: '数二', number: 23, kind: '解答', score: 11,
  ids: ["eig-diag-crit","eig-diag-method","eig-similar-prop"],
  question: String.raw`（本题满分 11 分）设 $A$ 为 2 阶矩阵，$P=(\alpha,A\alpha)$，其中 $\alpha$ 是非零向量且不是 $A$ 的特征向量。

（Ⅰ）证明 $P$ 为可逆矩阵；

（Ⅱ）若 $A^2\alpha+A\alpha-6\alpha=0$，求 $P^{-1}AP$，并判断 $A$ 是否相似于对角矩阵。`,
  answer: String.raw`（Ⅰ）证明见解析；（Ⅱ）$P^{-1}AP=\begin{pmatrix}0&6\\1&-1\end{pmatrix}$，$A$ 相似于对角矩阵。`,
  analysis: String.raw`【解】（Ⅰ）因 $\alpha\ne 0$ 且 $\alpha$ 不是 $A$ 的特征向量。于是 $A\alpha\ne k\alpha$，从而 $\alpha$ 与 $A\alpha$ 不共线，即 $\alpha,A\alpha$ 线性无关，故 $P=(\alpha,A\alpha)$ 可逆。

或（反证法）若 $P$ 不可逆，有
$$
|P|=|\alpha,A\alpha|=0,
$$
$\alpha$ 与 $A\alpha$ 成比例，于是 $A\alpha=k\alpha$。又 $\alpha\ne 0$ 知 $\alpha$ 是 $A$ 的特征向量与已知条件矛盾。

（Ⅱ）（方法一）由 $A^2\alpha+A\alpha-6\alpha=0$ 有 $A^2\alpha=6\alpha-A\alpha$，
$$
AP=A(\alpha,A\alpha)=(A\alpha,A^2\alpha)=(A\alpha,6\alpha-A\alpha)=(\alpha,A\alpha)\begin{pmatrix}0&6\\1&-1\end{pmatrix}.
$$
因 $P$ 可逆，于是
$$
P^{-1}AP=\begin{pmatrix}0&6\\1&-1\end{pmatrix}.
$$
记 $B=\begin{pmatrix}0&6\\1&-1\end{pmatrix}$，而
$$
|\lambda E-B|=\begin{vmatrix}\lambda&-6\\-1&\lambda+1\end{vmatrix}=\lambda^2+\lambda-6
$$
特征值 $2,-3$。于是 $A$ 有 2 个不同特征值从而 $A$ 可相似对角化。

（方法二）因 $A^2+A-6E=(A-2E)(A+3E)=(A+3E)(A-2E)$，

由 $A^2\alpha+A\alpha-6\alpha=0$，即 $(A^2+A-6E)\alpha=0$，

于是 $(A-2E)(A+3E)\alpha=0$，即 $(A-2E)(A\alpha+3\alpha)=0$，即 $A(A\alpha+3\alpha)=2(A\alpha+3\alpha)$，

由 $\alpha$ 不是特征向量，有 $A\alpha+3\alpha\ne 0$，从而 $\lambda=2$ 是 $A$ 的特征值，类似有 $\lambda=-3$ 是特征值。下略。`,
  source: "《2020 数学二解析》第 12 页",
});

