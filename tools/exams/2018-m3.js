// 2018 · 数学三 · 线性代数（题面取自《2018年考研数学三真题》，答案与解析取自《2018数学三真题答案解析》）
EXAMS.push({
  year: 2018, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ['eig-similar-crit', 'eig-similar-prop'],
  question: String.raw`下列矩阵中，与矩阵 $\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$ 相似的为（　）

（A）$\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}$.　（B）$\begin{pmatrix}1&0&-1\\0&1&1\\0&0&1\end{pmatrix}$.　（C）$\begin{pmatrix}1&1&-1\\0&1&0\\0&0&1\end{pmatrix}$.　（D）$\begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix}$.`,
  answer: '（A）',
  analysis: String.raw`易知题中矩阵的特征值均为 3 重特征值 1，若矩阵相似，则特征值对应的 $\lambda E-A$，即 $E-A$ 秩必然相等，显然
$$
E-\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}
$$
的秩为 2. 故应选 A.`,
  source: '《2018 数学三真题答案解析》第 1 页',
});

EXAMS.push({
  year: 2018, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ['mat-rank-ineq', 'mat-block'],
  question: String.raw`设 $A,B$ 为 $n$ 阶矩阵，记 $r(X)$ 为矩阵 $X$ 的秩，$(X,Y)$ 表示分块矩阵，则（　）

（A）$r(A,AB)=r(A)$.　（B）$r(A,BA)=r(A)$.　（C）$r(A,B)=\max\{r(A),r(B)\}$.　（D）$r(A,B)=r(A^{\mathrm{T}},B^{\mathrm{T}})$.`,
  answer: '（A）',
  analysis: String.raw`对于 B 选项，若 $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，$B=\begin{pmatrix}1&0\\1&1\end{pmatrix}$，则 $r(A\ BA)=2\ne r(A)$，排除 B.
对于 C 选项，若 $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，$B=\begin{pmatrix}0&0\\1&0\end{pmatrix}$，则 $r(A\ B)=2\ne\max\{r(A),r(B)\}$，排除 C.
对于 D 选项，若 $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，$B=\begin{pmatrix}0&0\\1&0\end{pmatrix}$，则 $r(A\ B)=2\ne r(A^{\mathrm{T}}\ B^{\mathrm{T}})$，排除 D.
故应选 A.`,
  source: '《2018 数学三真题答案解析》第 1–2 页',
});

EXAMS.push({
  year: 2018, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ['det-product', 'eig-trace-det-app'],
  question: String.raw`设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2,\alpha_3$ 是线性无关的向量组. 若 $A\alpha_1=\alpha_1+\alpha_2$，$A\alpha_2=\alpha_2+\alpha_3$，$A\alpha_3=\alpha_1+\alpha_3$，则 $|A|=$ $\underline{\qquad}$.`,
  answer: '2',
  analysis: String.raw`由题意得
$$
A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},
$$
而 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $|(\alpha_1,\alpha_2,\alpha_3)|\ne0$. 则
$$
|A|=\begin{vmatrix}1&0&1\\1&1&0\\0&1&1\end{vmatrix}=2.
$$
故应填 2.`,
  source: '《2018 数学三真题答案解析》第 3 页',
});

EXAMS.push({
  year: 2018, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ['qf-canonical', 'qf-positive-def'],
  question: String.raw`（本题满分 11 分）设实二次型 $f(x_1,x_2,x_3)=(x_1-x_2+x_3)^2+(x_2+x_3)^2+(x_1+ax_3)^2$，其中 $a$ 是参数.

（Ⅰ）求 $f(x_1,x_2,x_3)=0$ 的解；

（Ⅱ）求 $f(x_1,x_2,x_3)$ 的规范形.`,
  answer: String.raw`当 $a\ne2$ 时，$f=0$ 只有零解 $x=0$，规范形为 $y_1^2+y_2^2+y_3^2$；当 $a=2$ 时，$f=0$ 的解为 $x=k\begin{pmatrix}-2\\-1\\1\end{pmatrix}$（$k$ 为任意常数），规范形为 $y_1^2+y_2^2$`,
  analysis: String.raw`（Ⅰ）$f(x_1,x_2,x_3)=0$ 当且仅当
$$
\begin{cases}
x_1-x_2+x_3=0,\\
x_2+x_3=0,\\
x_1+ax_3=0,
\end{cases}
$$
对方程组的系数矩阵施以初等变换得
$$
\begin{pmatrix}1&-1&1\\0&1&1\\1&0&a\end{pmatrix}\to\begin{pmatrix}1&0&2\\0&1&1\\0&0&a-2\end{pmatrix}.
$$
当 $a\ne2$ 时，方程组只有零解，故 $f(x_1,x_2,x_3)=0$ 的解为 $x=0$；

当 $a=2$ 时，方程组有无穷多解，通解为 $x=k\begin{pmatrix}-2\\-1\\1\end{pmatrix}$，$k$ 为任意常数；

故 $f(x_1,x_2,x_3)=0$ 的解是 $x=k\begin{pmatrix}-2\\-1\\1\end{pmatrix}$，$k$ 为任意常数.

（Ⅱ）由（Ⅰ）知，当 $a\ne2$ 时，$f(x_1,x_2,x_3)$ 正定，$f(x_1,x_2,x_3)$ 的规范形为 $y_1^2+y_2^2+y_3^2$.

当 $a=2$ 时，
$$
f(x_1,x_2,x_3)=2x_1^2+2x_2^2+6x_3^2-2x_1x_2+6x_1x_3=2\left(x_1-\frac12x_2+\frac32x_3\right)^2+\frac32(x_2+x_3)^2,
$$
所以 $f(x_1,x_2,x_3)$ 的规范形为 $y_1^2+y_2^2$.`,
  source: '《2018 数学三真题答案解析》第 5–6 页',
});

EXAMS.push({
  year: 2018, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ['mat-eq-solve', 'eq-nonhomo-general'],
  question: String.raw`（本题满分 11 分）已知 $a$ 是常数，且矩阵 $A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}$ 可经初等列变换化为矩阵 $B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}$.

（Ⅰ）求 $a$；

（Ⅱ）求满足 $AP=B$ 的可逆矩阵 $P$.`,
  answer: String.raw`$a=2$；$P=\begin{pmatrix}3-6k_1&4-6k_2&4-6k_3\\-1+2k_1&-1+2k_2&-1+2k_3\\k_1&k_2&k_3\end{pmatrix}$（其中 $k_2\ne k_3$）`,
  analysis: String.raw`（Ⅰ）对矩阵 $A,B$ 分别施以初等行变换得
$$
A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}\to\begin{pmatrix}1&0&3a\\0&1&-a\\0&0&0\end{pmatrix},
$$
$$
B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&1\\0&0&2-a\end{pmatrix}.
$$
由题设知 $a=2$.

（Ⅱ）由（Ⅰ）知 $a=2$，对矩阵 $(A\mid B)$ 施以初等行变换得
$$
(A\mid B)=\left(\begin{array}{ccc|ccc}1&2&2&1&2&2\\1&3&0&0&1&1\\2&7&-2&-1&1&1\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&0&6&3&4&4\\0&1&-2&-1&-1&-1\\0&0&0&0&0&0\end{array}\right).
$$
记 $B=(\beta_1,\beta_2,\beta_3)$，由于
$$
A\begin{pmatrix}-6\\2\\1\end{pmatrix}=0,\quad A\begin{pmatrix}3\\-1\\0\end{pmatrix}=\beta_1,\quad A\begin{pmatrix}4\\-1\\0\end{pmatrix}=\beta_2,\quad A\begin{pmatrix}4\\-1\\0\end{pmatrix}=\beta_3,
$$
故 $AX=B$ 的解为
$$
X=\begin{pmatrix}3-6k_1&4-6k_2&4-6k_3\\-1+2k_1&-1+2k_2&-1+2k_3\\k_1&k_2&k_3\end{pmatrix},
$$
其中 $k_1,k_2,k_3$ 为任意常数.

由于 $|X|=k_3-k_2$，所以满足 $AP=B$ 的可逆矩阵为
$$
P=\begin{pmatrix}3-6k_1&4-6k_2&4-6k_3\\-1+2k_1&-1+2k_2&-1+2k_3\\k_1&k_2&k_3\end{pmatrix},
$$
其中 $k_2\ne k_3$.`,
  source: '《2018 数学三真题答案解析》第 6 页',
});
