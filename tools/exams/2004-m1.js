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

EXAMS.push({
  year: 2004, subject: '数一', number: 20, kind: '解答', score: 9,
  ids: ['eq-homo-sol', 'eq-homo-general', 'det-elimination'],
  question: String.raw`（本题满分 9 分）设有齐次线性方程组
$$
\begin{cases}(1+a)x_1+x_2+\cdots+x_n=0,\\2x_1+(2+a)x_2+\cdots+2x_n=0,\\\cdots\cdots\\nx_1+nx_2+\cdots+(n+a)x_n=0,\end{cases}\quad(n\ge 2),
$$
试问 $a$ 取何值时，该方程组有非零解，并求出其通解．`,
  answer: String.raw`当 $a=0$ 或 $a=-\dfrac{n(n+1)}{2}$ 时方程组有非零解；$a=0$ 时通解为 $X=C_1\begin{pmatrix}-1\\1\\0\\\vdots\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\1\\\vdots\\0\end{pmatrix}+\cdots+C_{n-1}\begin{pmatrix}-1\\0\\0\\\vdots\\1\end{pmatrix}$（$C_1,C_2,\cdots,C_{n-1}$ 为任意常数）；$a=-\dfrac{n(n+1)}{2}$ 时通解为 $X=C\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}$（$C$ 为任意常数）．`,
  analysis: String.raw`【解】 方法一
$$
|A|=\begin{vmatrix}1+a&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{vmatrix}=\left[a+\frac{n(n+1)}{2}\right]\begin{vmatrix}1&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{vmatrix}
$$
$$
=\left[a+\frac{n(n+1)}{2}\right]a^{n-1}.
$$
当 $a=0$ 或 $a=-\dfrac{n(n+1)}{2}$ 时，方程组有非零解．

当 $a=0$ 时，由 $A\to\begin{pmatrix}1&1&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix}$ 得方程组的通解为
$$
X=C_1\begin{pmatrix}-1\\1\\0\\\vdots\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\1\\\vdots\\0\end{pmatrix}+\cdots+C_{n-1}\begin{pmatrix}-1\\0\\0\\\vdots\\1\end{pmatrix}\quad(C_1,C_2,\cdots,C_{n-1}\text{ 为任意常数});
$$
当 $a=-\dfrac{n(n+1)}{2}$ 时，
$$
\text{由 }A=\begin{pmatrix}1+a&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix}\to\begin{pmatrix}1+a&1&\cdots&1\\-2a&a&\cdots&0\\\vdots&\vdots&&\vdots\\-na&0&\cdots&a\end{pmatrix}
$$
$$
\to\begin{pmatrix}1+a&1&\cdots&1\\-2&1&\cdots&0\\\vdots&\vdots&&\vdots\\-n&0&\cdots&1\end{pmatrix}\to\begin{pmatrix}-2&1&0&\cdots&0\\-3&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-n&0&0&\cdots&1\\0&0&0&\cdots&0\end{pmatrix},
$$
原方程组的通解为 $X=C\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}$（$C$ 为任意常数）．

方法二
$$
A=\begin{pmatrix}1+a&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix}\to\begin{pmatrix}a+\dfrac{n(n+1)}{2}&a+\dfrac{n(n+1)}{2}&\cdots&a+\dfrac{n(n+1)}{2}\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix},
$$
当 $a+\dfrac{n(n+1)}{2}=0$，即 $a=-\dfrac{n(n+1)}{2}$，由 $r(A)=n-1<n$ 得原方程组有无数个解，
$$
\text{显然 }A\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}=0,\text{故方程组的通解为 }X=C\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}\text{（}C\text{ 为任意常数）};
$$
当 $a+\dfrac{n(n+1)}{2}\ne 0$ 时，$A\to\begin{pmatrix}1&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix}\to\begin{pmatrix}1&1&\cdots&1\\0&a&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&a\end{pmatrix}$，

当 $a=0$ 时，方程组有无数个解，由 $A\to\begin{pmatrix}1&1&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix}$ 得通解为
$$
X=C_1\begin{pmatrix}-1\\1\\0\\\vdots\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\1\\\vdots\\0\end{pmatrix}+\cdots+C_{n-1}\begin{pmatrix}-1\\0\\0\\\vdots\\1\end{pmatrix}\quad(C_1,C_2,\cdots,C_{n-1}\text{ 为任意常数}).
$$`,
  source: '《2004 年数学（一）真题解析》第 8–10 页',
});

EXAMS.push({
  year: 2004, subject: '数一', number: 21, kind: '解答', score: 9,
  ids: ['eig-poly', 'eig-diag-crit', 'eig-mult'],
  question: String.raw`（本题满分 9 分）设矩阵 $A=\begin{pmatrix}1&2&-3\\-1&4&-3\\1&a&5\end{pmatrix}$ 的特征方程有一个二重根，求 $a$ 的值，并讨论 $A$ 是否可相似对角化．`,
  answer: String.raw`$a=-2$ 时，$\lambda=2$ 为二重特征值，$A$ 可相似对角化；$a=-\dfrac{2}{3}$ 时，$\lambda=4$ 为二重特征值，$A$ 不可相似对角化．`,
  analysis: String.raw`【解】
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-2&3\\1&\lambda-4&3\\-1&-a&\lambda-5\end{vmatrix}=(\lambda-2)(\lambda^2-8\lambda+3a+18),
$$
情形一：$\lambda=2$ 为 $A$ 的二重特征值，则当 $\lambda=2$ 时，$\lambda^2-8\lambda+3a+18=0$，即 $4-16+3a+18=0$，解得 $a=-2$．
$$
2E-A=\begin{pmatrix}1&-2&3\\1&-2&3\\-1&2&-3\end{pmatrix},
$$
因为 $r(2E-A)=1$，所以方程组 $(2E-A)X=0$ 的基础解系只含两个线性无关的解向量，即 $\lambda=2$ 有两个线性无关的特征向量，故 $A$ 可相似对角化．

情形二：$\lambda=2$ 为一重特征值，则 $\lambda^2-8\lambda+3a+18=0$ 有二重根，即 $\Delta=64-4(3a+18)=0$，解得 $a=-\dfrac{2}{3}$，二重特征值为 $\lambda_2=\lambda_3=\dfrac{-8}{2}=4$．

因为 $r(4E-A)=2$，所以 $A$ 不可相似对角化．

> **方法点评**：本题考查矩阵对角化．
> 设 $A$ 是 $n$ 阶矩阵，若存在可逆矩阵 $P$，使得 $P^{-1}AP$ 为对角矩阵，称 $A$ 可对角化，判断矩阵可否对角化有如下常见思路：
> （1）若 $A$ 的特征值都是单值，则 $A$ 一定可以相似对角化；
> （2）若 $A$ 为实对称矩阵，则 $A$ 一定可以相似对角化；
> （3）若 $A$ 存在 $n$ 个线性无关的特征向量，则 $A$ 一定可以相似对角化；
> （4）若 $A$ 的每个特征值的重数与该特征值对应的线性无关的特征向量个数相等，即若 $\lambda_0$ 为 $r$ 重特征值，且 $n-r(\lambda_0E-A)=r$，则 $A$ 一定可相似对角化．`,
  source: '《2004 年数学（一）真题解析》第 10 页',
});

