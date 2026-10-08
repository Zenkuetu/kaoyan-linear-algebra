// 2019 · 数学三 · 线性代数（题面取自《2019年考研数学三真题》，答案与解析取自《2019数学三真题答案解析》）
EXAMS.push({
  year: 2019, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ['mat-adj-rank', 'mat-rank-crit'],
  question: String.raw`设 $A$ 是 4 阶矩阵，$A^*$ 是 $A$ 的伴随矩阵，若线性方程组 $Ax=0$ 的基础解系中只有 2 个向量，则 $r(A^*)=$（　）

（A）0.　（B）1.　（C）2.　（D）3.`,
  answer: '（A）',
  analysis: String.raw`由线性方程组 $Ax=0$ 的基础解系中只有 2 个向量，则 $2=4-r(A)$，故 $r(A)=2$.
由于当 $r(A)<n-1$ 时（$n$ 为 $A$ 的阶数），$r(A^*)=0$. 故应选 A.`,
  source: '《2019 数学三真题答案解析》第 1 页',
});

EXAMS.push({
  year: 2019, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ['qf-canonical', 'eig-symmetric'],
  question: String.raw`设 $A$ 是 3 阶实对称矩阵，$E$ 是 3 阶单位矩阵. 若 $A^2+A=2E$，且 $|A|=4$，则二次型 $x^{\mathrm{T}}Ax$ 的规范形为（　）

（A）$y_1^2+y_2^2+y_3^2$.　（B）$y_1^2+y_2^2-y_3^2$.　（C）$y_1^2-y_2^2-y_3^2$.　（D）$-y_1^2-y_2^2-y_3^2$.`,
  answer: '（C）',
  analysis: String.raw`设 $\lambda$ 是 $A$ 的特征值，根据 $A^2+A=2E$ 得：$\lambda^2+\lambda=2$，解得 $\lambda=1$ 或 $-2$.
由于 $A$ 是 3 阶实对称矩阵，则 $A$ 有 3 个特征值且 $A$ 的 3 个特征值的积为 $|A|$ 的值，故 $A$ 的三个特征值的积为 $1,-2,-2$，正惯性指数为 1，负惯性指数为 2，故二次型 $x^{\mathrm{T}}Ax$ 的规范形为 $y_1^2-y_2^2-y_3^2$. 故应选 C.`,
  source: '《2019 数学三真题答案解析》第 1–2 页',
});

EXAMS.push({
  year: 2019, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ['eq-nonhomo-crit', 'eq-rank-relation'],
  question: String.raw`已知矩阵 $A=\begin{pmatrix}1&0&-1\\1&1&-1\\0&1&a^2-1\end{pmatrix}$，$b=\begin{pmatrix}0\\1\\a\end{pmatrix}$，若线性方程组 $Ax=b$ 有无穷多解，则 $a=$ $\underline{\qquad}$.`,
  answer: '1',
  analysis: String.raw`由题意得
$$
\overline{A}=\left(\begin{array}{ccc|c}1&0&-1&0\\1&1&-1&1\\0&1&a^2-1&a\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&-1&0\\0&1&0&1\\0&1&a^2-1&a\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&-1&0\\0&1&0&1\\0&0&a^2-1&a-1\end{array}\right).
$$
要使 $Ax=b$ 有无穷多解，则应使 $r(A)=r(\overline{A})<3$，
当 $a^2-1=a-1=0$，即 $a=1$ 时，$r(A)=r(\overline{A})=2<3$.
故应填 1.`,
  source: '《2019 数学三真题答案解析》第 3 页',
});

EXAMS.push({
  year: 2019, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ['vec-equivalent', 'vec-express-crit'],
  question: String.raw`（本题满分 11 分）已知向量组 Ⅰ：$\alpha_1=\begin{pmatrix}1\\1\\4\end{pmatrix}$，$\alpha_2=\begin{pmatrix}1\\0\\4\end{pmatrix}$，$\alpha_3=\begin{pmatrix}1\\2\\a^2+3\end{pmatrix}$ 与 Ⅱ：$\beta_1=\begin{pmatrix}1\\1\\a+3\end{pmatrix}$，$\beta_2=\begin{pmatrix}0\\2\\1-a\end{pmatrix}$，$\beta_3=\begin{pmatrix}1\\3\\a^2+3\end{pmatrix}$. 若向量组 Ⅰ 与 Ⅱ 等价，求 $a$ 的取值，并将 $\beta_3$ 用 $\alpha_1,\alpha_2,\alpha_3$ 线性表示.`,
  answer: String.raw`$a\ne-1$；当 $a\ne1$ 时 $\beta_3=\alpha_1-\alpha_2+\alpha_3$；当 $a=1$ 时 $\beta_3=(3-2k)\alpha_1+(k-2)\alpha_2+k\alpha_3$（$k\in\mathbf{R}$）`,
  analysis: String.raw`由等价的定义可知：
$\beta_1,\beta_2,\beta_3$ 都能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，则有 $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)$，
对 $(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)$ 作初等行变换可得：
$$
\left(\begin{array}{ccc|ccc}1&1&1&1&0&1\\1&0&2&1&2&3\\4&4&a^2+3&a+3&1-a&a^2+3\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&1&1&1&0&1\\0&-1&1&0&2&2\\0&0&a^2-1&a-1&1-a&a^2-1\end{array}\right)
$$
当 $a=-1$ 时，有 $r(\alpha_1,\alpha_2,\alpha_3)<r(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)$；

当 $a=1$ 时，有 $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=2$；

可知 $a\ne1$ 且 $a\ne-1$ 时，此时 $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=3$，
则有 $a=1$ 或者 $a\ne1$ 且 $a\ne-1$ 时，$\beta_1,\beta_2,\beta_3$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，
此时，要保证 $\alpha_1,\alpha_2,\alpha_3$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表示.

对 $(\beta_1,\beta_2,\beta_3,\alpha_1,\alpha_2,\alpha_3)$ 作初等行变换可得：
$$
\left(\begin{array}{ccc|ccc}1&0&1&1&1&1\\1&2&3&1&0&2\\a+3&1-a&a^2+3&4&4&a^2+3\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&0&1&1&1&1\\0&2&2&0&-1&1\\0&0&a^2-1&1-a&\frac32(1-a)&\frac{2a^2-a-1}{2}\end{array}\right)
$$
当 $a=1$ 时，有 $r(\beta_1,\beta_2,\beta_3)=r(\beta_1,\beta_2,\beta_3,\alpha_1,\alpha_2,\alpha_3)=2$，

可知当 $a\ne1$ 且 $a\ne-1$ 时，此时 $r(\beta_1,\beta_2,\beta_3)=r(\beta_1,\beta_2,\beta_3,\alpha_1,\alpha_2,\alpha_3)=3$，
此时，$\alpha_1,\alpha_2,\alpha_3$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表示.

综上所述：当 $a\ne-1$ 时，向量组 $\alpha_1,\alpha_2,\alpha_3$ 与向量组 $\beta_1,\beta_2,\beta_3$ 可相互线性表示.

当 $a\ne1$ 时，
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_3)\to\left(\begin{array}{ccc|c}1&1&1&1\\0&-1&1&2\\0&0&a^2-1&a^2-1\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&0&1\\0&1&0&-1\\0&0&1&1\end{array}\right)
$$
则 $\beta_3=\alpha_1-\alpha_2+\alpha_3$.

当 $a=1$ 时，
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_3)\to\left(\begin{array}{ccc|c}1&1&1&1\\0&-1&1&2\\0&0&0&0\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&2&3\\0&1&-1&-2\\0&0&0&0\end{array}\right)
$$
基础解系为 $k\begin{pmatrix}-2\\1\\1\end{pmatrix}+\begin{pmatrix}3\\-2\\0\end{pmatrix}$（$k\in\mathbf{R}$），则 $\beta_3=(3-2k)\alpha_1+(k-2)\alpha_2+k\alpha_3$.`,
  source: '《2019 数学三真题答案解析》第 5–6 页',
});

EXAMS.push({
  year: 2019, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ['eig-similar-prop', 'eig-diag-method'],
  question: String.raw`（本题满分 11 分）已知矩阵 $A=\begin{pmatrix}-2&-2&1\\2&x&-2\\0&0&-2\end{pmatrix}$ 与 $B=\begin{pmatrix}2&1&0\\0&-1&0\\0&0&y\end{pmatrix}$ 相似.

（Ⅰ）求 $x,y$；

（Ⅱ）求可逆矩阵 $P$，使得 $P^{-1}AP=B$.`,
  answer: String.raw`$x=3,\ y=-2$；$P=\begin{pmatrix}1&1&1\\-2&-1&-2\\0&0&-4\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）因为矩阵 $A$ 与 $B$ 相似，所以 $\mathrm{tr}(A)=\mathrm{tr}(B)$，$|A|=|B|$，
即
$$
\begin{cases}
x-4=y+1,\\
4x-8=-2y,
\end{cases}
$$
解得 $x=3,y=-2$.

（Ⅱ）矩阵 $B$ 的特征多项式为 $|\lambda E-B|=(\lambda-2)(\lambda+1)(\lambda+2)$，
所以 $B$ 的特征值为 $2,-1,-2$.
由于 $A$ 与 $B$ 相似，所以 $A$ 的特征值也为 $2,-1,-2$.

$A$ 的属于特征值 2 的特征向量为 $\xi_1=(1,-2,0)^{\mathrm{T}}$；

$A$ 的属于特征值 $-1$ 的特征向量为 $\xi_2=(-2,1,0)^{\mathrm{T}}$；

$A$ 的属于特征值 $-2$ 的特征向量为 $\xi_3=(1,-2,-4)^{\mathrm{T}}$.

记 $P_1=(\xi_1,\xi_2,\xi_3)$，于是
$$
P_1^{-1}AP_1=\begin{pmatrix}2&0&0\\0&-1&0\\0&0&-2\end{pmatrix}.
$$

$B$ 的属于特征值 2 的特征向量为 $\eta_1=(1,0,0)^{\mathrm{T}}$；

$B$ 的属于特征值 $-1$ 的特征向量为 $\eta_2=(1,-3,0)^{\mathrm{T}}$；

$B$ 的属于特征值 $-2$ 的特征向量为 $\eta_3=(0,0,1)^{\mathrm{T}}$.

记 $P_2=(\eta_1,\eta_2,\eta_3)$，于是
$$
P_2^{-1}BP_2=\begin{pmatrix}2&0&0\\0&-1&0\\0&0&-2\end{pmatrix}.
$$
由 $P_1^{-1}AP_1=P_2^{-1}BP_2$，得
$$
(P_1P_2^{-1})^{-1}A(P_1P_2^{-1})=B.
$$
令
$$
P=P_1P_2^{-1}=\begin{pmatrix}1&-2&1\\-2&1&-2\\0&0&-4\end{pmatrix}\begin{pmatrix}1&\frac13&0\\0&-\frac13&0\\0&0&1\end{pmatrix}=\begin{pmatrix}1&1&1\\-2&-1&-2\\0&0&-4\end{pmatrix},
$$
则 $P^{-1}AP=B$.`,
  source: '《2019 数学三真题答案解析》第 6 页',
});
