// 2004 · 数学一 · 线性代数（题面取自《2004年考研数学（一）真题》，答案与解析取自《2004数学一解析》）
EXAMS.push({
  year: 2004, subject: '数一', number: 5, kind: '填空', score: 4,
  ids: ['mat-adj-identity', 'det-product', 'mat-eq-solve'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&1\end{pmatrix}$，矩阵 $B$ 满足 $ABA^{*}=2BA^{*}+E$，其中 $A^{*}$ 为 $A$ 的伴随矩阵，$E$ 是单位矩阵，则 $|B|=\underline{\qquad}$．`,
  answer: String.raw`$\dfrac{1}{9}$`,
  analysis: String.raw`【解】 $|A|=3$，在 $ABA^{*}=2BA^{*}+E$ 两边右乘 $A$，得 $3AB=6B+A$ 或 $3(A-2E)B=A$．于是 $3^3|A-2E|\cdot|B|=|A|$．
$$
\text{而 }A-2E=\begin{pmatrix}0&1&0\\1&0&0\\0&0&-1\end{pmatrix},\quad|A-2E|=1,\text{故 }|B|=\frac{1}{9}.
$$

> **方法点评**：本题考查由矩阵关系等式确定的矩阵的行列式．本题的关键是要应用公式 $AA^{*}=A^{*}A=|A|E$．`,
  source: '《2004 年数学（一）真题解析》第 2 页',
});

EXAMS.push({
  year: 2004, subject: '数一', number: 11, kind: '选择', score: 4,
  ids: ['mat-elem-mat', 'mat-elem-relation'],
  question: String.raw`设 $A$ 是 3 阶方阵，将 $A$ 的第 1 列与第 2 列交换得 $B$，再把 $B$ 的第 2 列加到第 3 列得 $C$，则满足 $AQ=C$ 的可逆矩阵 $Q$ 为（　　）

（A）$\begin{pmatrix}0&1&0\\1&0&0\\1&0&1\end{pmatrix}$．
（B）$\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}$．
（C）$\begin{pmatrix}0&1&0\\1&0&0\\0&1&1\end{pmatrix}$．
（D）$\begin{pmatrix}0&1&1\\1&0&0\\0&0&1\end{pmatrix}$．`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解】 由初等变换的定义，得
$$
B=A\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},\quad C=B\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix},
$$
于是
$$
C=A\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix},
$$
故 $Q=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}=\begin{pmatrix}0&1&1\\1&0&0\\0&0&1\end{pmatrix}$，应选（D）．`,
  source: '《2004 年数学（一）真题解析》第 4–5 页',
});

EXAMS.push({
  year: 2004, subject: '数一', number: 12, kind: '选择', score: 4,
  ids: ['mat-nocancel', 'mat-rank-ineq', 'vec-rank-vs-mat'],
  question: String.raw`设 $A,B$ 为满足 $AB=O$ 的任意两个非零矩阵，则必有（　　）

（A）$A$ 的列向量组线性相关，$B$ 的行向量组线性相关．
（B）$A$ 的列向量组线性相关，$B$ 的列向量组线性相关．
（C）$A$ 的行向量组线性相关，$B$ 的行向量组线性相关．
（D）$A$ 的行向量组线性相关，$B$ 的列向量组线性相关．`,
  answer: String.raw`（A）`,
  analysis: String.raw`【解】 方法一 设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times s$ 矩阵．

由 $AB=O$，得 $r(A)+r(B)\le n$．

因为 $A,B$ 为非零矩阵，所以 $r(A)\ge 1,r(B)\ge 1$，于是 $r(A)<n,r(B)<n$．

因为矩阵的秩、矩阵行向量组的秩、矩阵列向量组的秩都相等，于是 $A$ 的列向量组的秩小于列数，$B$ 的行向量组的秩小于行数，$A$ 的列向量组线性相关，$B$ 的行向量组线性相关，应选（A）．

方法二 设
$$
A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}=(\alpha_1,\alpha_2,\cdots,\alpha_n),\quad B=\begin{pmatrix}b_{11}&b_{12}&\cdots&b_{1s}\\b_{21}&b_{22}&\cdots&b_{2s}\\\vdots&\vdots&&\vdots\\b_{n1}&b_{n2}&\cdots&b_{ns}\end{pmatrix}=\begin{pmatrix}\beta_1\\\beta_2\\\vdots\\\beta_n\end{pmatrix},
$$
由 $AB=O$ 得
$$
\begin{cases}b_{11}\alpha_1+b_{21}\alpha_2+\cdots+b_{n1}\alpha_n=0,\\b_{12}\alpha_1+b_{22}\alpha_2+\cdots+b_{n2}\alpha_n=0,\\\vdots\\b_{1s}\alpha_1+b_{2s}\alpha_2+\cdots+b_{ns}\alpha_n=0,\end{cases}\text{及}\begin{cases}a_{11}\beta_1+a_{12}\beta_2+\cdots+a_{1n}\beta_n=0,\\a_{21}\beta_1+a_{22}\beta_2+\cdots+a_{2n}\beta_n=0,\\\vdots\\a_{m1}\beta_1+a_{m2}\beta_2+\cdots+a_{mn}\beta_n=0.\end{cases}
$$
因为 $A,B$ 为非零矩阵，所以存在不全为零的常数 $b_{1j},b_{2j},\cdots,b_{nj}$ 及 $a_{i1},a_{i2},\cdots,a_{in}$，使得 $b_{1j}\alpha_1+b_{2j}\alpha_2+\cdots+b_{nj}\alpha_n=0$ 及 $a_{i1}\beta_1+a_{i2}\beta_2+\cdots+a_{in}\beta_n=0$．

即 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 与 $\beta_1,\beta_2,\cdots,\beta_n$ 都线性相关，应选（A）．

> **方法点评**：当研究矩阵的秩与向量相关性时，一般使用矩阵的秩、矩阵行向量组的秩、矩阵列向量组的秩相等的性质．
> 向量组线性相关的充要条件是该向量组的秩小于向量组所含向量的个数；向量组线性无关的充要条件是向量组的秩与向量组所含向量个数相等．`,
  source: '《2004 年数学（一）真题解析》第 5 页',
});

