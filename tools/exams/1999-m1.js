// 1999 · 数学一 · 线性代数（题面取自《1999年考研数学（一）真题》，答案与解析取自《1999数学一解析》；本卷填空/选择各自编号，故 number 用大类号×100+小题号并加 label）
EXAMS.push({
  year: 1999, subject: '数一', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['eig-def', 'eig-trace-det-app', 'mat-trace'],
  question: String.raw`设 $n$ 阶矩阵 $A$ 的元素全为 1，则 $A$ 的 $n$ 个特征值是 $\underline{\qquad}$．`,
  answer: String.raw`$\lambda_1=\lambda_2=\cdots=\lambda_{n-1}=0,\lambda_n=n$`,
  analysis: String.raw`（4）【答案】 $\lambda_1=\lambda_2=\cdots=\lambda_{n-1}=0,\lambda_n=n$．

【解】 方法一 由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&\cdots&-1\\-1&\lambda-1&\cdots&-1\\\vdots&\vdots&&\vdots\\-1&-1&\cdots&\lambda-1\end{vmatrix}=\lambda^{n-1}(\lambda-n)=0
$$
得 $A$ 的特征值为 $\lambda_1=\lambda_2=\cdots=\lambda_{n-1}=0,\lambda_n=n$．

方法二 因为 $A^{\mathrm{T}}=A$，所以 $A$ 可对角化，从而 $A$ 的非零特征值的个数与 $r(A)$ 相同，

由 $r(A)=1$ 得 $A$ 只有一个非零特征值，

又因为 $\operatorname{tr}A=n=\lambda_1+\lambda_2+\cdots+\lambda_n$，所以 $A$ 的特征值为 $\lambda_1=\lambda_2=\cdots=\lambda_{n-1}=0,\lambda_n=n$．`,
  source: '《1999 年数学（一）真题解析》第 1 页',
});

EXAMS.push({
  year: 1999, subject: '数一', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ['det-rank', 'mat-rank-ineq', 'mat-rank'],
  question: String.raw`设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times m$ 矩阵，则（　　）

（A）当 $m>n$ 时，必有行列式 $|AB|\ne 0$．
（B）当 $m>n$ 时，必有行列式 $|AB|=0$．
（C）当 $n>m$ 时，必有行列式 $|AB|\ne 0$．
（D）当 $n>m$ 时，必有行列式 $|AB|=0$．`,
  answer: String.raw`（B）`,
  analysis: String.raw`（4）【答案】 （B）．

【解】 当 $m>n$ 时，$r(A)\le n,r(B)\le n$，

因为 $r(AB)\le\min\{r(A),r(B)\}$，所以 $r(AB)\le n$，

于是 $r(AB)<m$，即 $AB$ 为降秩矩阵，故 $|AB|=0$，应选（B）．`,
  source: '《1999 年数学（一）真题解析》第 2 页',
});

EXAMS.push({
  year: 1999, subject: '数一', number: 310, kind: '解答', score: 8, label: '解答题第 10 题',
  ids: ['mat-adj-identity', 'eig-def', 'det-product'],
  question: String.raw`（本题满分 8 分）设矩阵 $A=\begin{pmatrix}a&-1&c\\5&b&3\\1-c&0&-a\end{pmatrix}$，其行列式 $|A|=-1$，又 $A$ 的伴随矩阵 $A^{*}$ 有一个特征值 $\lambda_0$，属于 $\lambda_0$ 的一个特征向量为 $\alpha=(-1,-1,1)^{\mathrm{T}}$，求 $a,b,c$ 和 $\lambda_0$ 的值．`,
  answer: String.raw`$a=2,b=-3,c=2,\lambda_0=1$．`,
  analysis: String.raw`十、【解】 由
$$
\begin{pmatrix}a&-1&c\\5&b&3\\1-c&0&-a\end{pmatrix}\begin{pmatrix}-1\\-1\\1\end{pmatrix}=\mu\begin{pmatrix}-1\\-1\\1\end{pmatrix}\text{得}\begin{cases}-a+1+c=-\mu,\\-b-2=-\mu,\\c-1-a=\mu,\end{cases}
$$
解得 $a=c,\mu=-1,b=-3$；

再由
$$
|A|=\begin{vmatrix}a&-1&a\\5&-3&3\\1-a&0&-a\end{vmatrix}=-1\text{ 得 }a=2,c=2,
$$
$\lambda_0=\dfrac{|A|}{\mu}=1$，故 $a=2,b=-3,c=2,\lambda_0=1$．`,
  source: '《1999 年数学（一）真题解析》第 4 页',
});

EXAMS.push({
  year: 1999, subject: '数一', number: 411, kind: '解答', score: 6, label: '证明题第 11 题',
  ids: ['qf-positive-crit', 'qf-positive-def', 'mat-rank'],
  question: String.raw`（本题满分 6 分）设 $A$ 为 $m$ 阶实对称矩阵且正定，$B$ 为 $m\times n$ 实矩阵，$B^{\mathrm{T}}$ 为 $B$ 的转置矩阵，试证：$B^{\mathrm{T}}AB$ 为正定矩阵的充分必要条件是 $B$ 的秩 $r(B)=n$．`,
  answer: String.raw`证明见解析．`,
  analysis: String.raw`十一、【证明】 （必要性）设 $B^{\mathrm{T}}AB$ 为正定矩阵，由正定矩阵的定义，对任意的 $X\ne 0$，有
$$
X^{\mathrm{T}}B^{\mathrm{T}}ABX=(BX)^{\mathrm{T}}A(BX)>0,
$$
再由 $A$ 为正定矩阵得 $BX\ne 0$，即 $BX=0$ 只有零解，故 $r(B)=n$．

（充分性）设 $r(B)=n$，对任意的 $X\ne 0$，$X^{\mathrm{T}}B^{\mathrm{T}}ABX=(BX)^{\mathrm{T}}A(BX)$，

令 $BX=Y$，显然 $Y\ne 0$．

若 $Y=0$，即 $BX=0$，由 $r(B)=n$ 得 $X=0$，矛盾．

因为 $Y\ne 0$ 且 $A$ 为正定矩阵，所以 $X^{\mathrm{T}}B^{\mathrm{T}}ABX=Y^{\mathrm{T}}AY>0$，即 $B^{\mathrm{T}}AB$ 为正定矩阵．`,
  source: '《1999 年数学（一）真题解析》第 4–5 页',
});

