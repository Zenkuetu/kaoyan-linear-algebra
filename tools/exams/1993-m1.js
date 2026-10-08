// 1993 · 数学一 · 线性代数（题面取自《1993年考研数学（一）真题.pdf》；答案与解析取自《1993数学一解析.pdf》）
EXAMS.push({
  year: 1993, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["eq-homo-structure","eq-rank-relation"],
  question: String.raw`设 $n$ 阶矩阵 $A$ 的各行元素之和均为零，且 $A$ 的秩为 $n-1$，则线性方程组 $AX=0$ 的通解为______.`,
  answer: String.raw`$X=k(1,1,\cdots,1)^{\mathrm{T}}$（$k$ 为任意常数）.`,
  analysis: String.raw`因为 $r(A)=n-1$，所以 $AX=0$ 的基础解系含一个线性无关的解向量，又因为
$$
A\begin{pmatrix}1\\1\\\vdots\\1\end{pmatrix}=0,
$$
所以 $AX=0$ 的通解为 $X=k(1,1,\cdots,1)^{\mathrm{T}}$（$k$ 为任意常数）.`,
  source: '《1993 数学一解析.pdf》PDF 第 1 页',
});

EXAMS.push({
  year: 1993, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["mat-rank-crit","eq-AX-O-AB-O"],
  question: String.raw`已知
$$
Q=\begin{pmatrix}1&2&3\\2&4&t\\3&6&9\end{pmatrix},
$$
$P$ 为 3 阶非零矩阵，且满足 $PQ=O$，则（　　）.

（A）$t=6$ 时，$P$ 的秩必为 1
（B）$t=6$ 时，$P$ 的秩必为 2
（C）$t\ne 6$ 时，$P$ 的秩必为 1
（D）$t\ne 6$ 时，$P$ 的秩必为 2`,
  answer: String.raw`（C）.`,
  analysis: String.raw`由 $PQ=O$ 得 $r(P)+r(Q)\le 3$，当 $t\ne 6$ 时 $r(Q)=2$，则 $r(P)\le 1$，再由 $P$ 为非零矩阵得 $r(P)\ge 1$，故 $r(P)=1$，应选（C）.`,
  source: '《1993 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1993, subject: '数一', number: 301, kind: '解答', score: 8, label: '第七大题',
  ids: ["qf-orthogonal","eig-orth-diag"],
  question: String.raw`已知二次型
$$
f(x_1,x_2,x_3)=2x_1^2+3x_2^2+3x_3^2+2ax_2x_3\ (a>0),
$$
通过正交变换化为标准形 $f=y_1^2+2y_2^2+5y_3^2$，求参数 $a$ 及所用的正交变换矩阵.`,
  answer: String.raw`$a=2$，正交矩阵
$$
Q=\begin{pmatrix}0&1&0\\-\dfrac{1}{\sqrt{2}}&0&\dfrac{1}{\sqrt{2}}\\\dfrac{1}{\sqrt{2}}&0&\dfrac{1}{\sqrt{2}}\end{pmatrix},
$$
即所用的正交变换为 $X=QY$.`,
  analysis: String.raw`令
$$
A=\begin{pmatrix}2&0&0\\0&3&a\\0&a&3\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$
$f=X^{\mathrm{T}}AX$，则显然矩阵 $A$ 的特征值为 $\lambda_1=1,\lambda_2=2,\lambda_3=5$，由 $|A|=10$ 得 $9-a^2=5$，解得 $a=2$，即
$$
A=\begin{pmatrix}2&0&0\\0&3&2\\0&2&3\end{pmatrix}.
$$
由
$$
E-A=\begin{pmatrix}-1&0&0\\0&-2&-2\\0&-2&-2\end{pmatrix}\sim\begin{pmatrix}1&0&0\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $\lambda_1=1$ 对应的特征向量为 $\alpha_1=\begin{pmatrix}0\\-1\\1\end{pmatrix}$；由
$$
2E-A=\begin{pmatrix}0&0&0\\0&-1&-2\\0&-2&-1\end{pmatrix}\sim\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $\lambda_2=2$ 对应的特征向量为 $\alpha_2=\begin{pmatrix}1\\0\\0\end{pmatrix}$；由
$$
5E-A=\begin{pmatrix}3&0&0\\0&2&-2\\0&-2&2\end{pmatrix}\sim\begin{pmatrix}1&0&0\\0&1&-1\\0&0&0\end{pmatrix}
$$
得 $\lambda_3=5$ 对应的特征向量为 $\alpha_3=\begin{pmatrix}0\\1\\1\end{pmatrix}$，规范化得
$$
\gamma_1=\dfrac{1}{\sqrt{2}}\begin{pmatrix}0\\-1\\1\end{pmatrix},\quad\gamma_2=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad\gamma_3=\dfrac{1}{\sqrt{2}}\begin{pmatrix}0\\1\\1\end{pmatrix},
$$
故正交矩阵为
$$
Q=\begin{pmatrix}0&1&0\\-\dfrac{1}{\sqrt{2}}&0&\dfrac{1}{\sqrt{2}}\\\dfrac{1}{\sqrt{2}}&0&\dfrac{1}{\sqrt{2}}\end{pmatrix}.
$$`,
  source: '《1993 数学一解析.pdf》PDF 第 3–4 页',
});

EXAMS.push({
  year: 1993, subject: '数一', number: 401, kind: '解答', score: 6, label: '第八大题（证明题）',
  ids: ["vec-indep-crit","mat-rank-ineq"],
  question: String.raw`设 $A$ 是 $n\times m$ 矩阵，$B$ 是 $m\times n$ 矩阵，其中 $n<m$，$E$ 是 $n$ 阶单位矩阵，若 $AB=E$，证明 $B$ 的列向量组线性无关.`,
  answer: String.raw`证明见解析.`,
  analysis: String.raw`显然 $r(AB)=n$，由 $r(AB)\le r(A),r(AB)\le r(B)$ 得 $r(A)\ge n,r(B)\ge n$. 因为矩阵的秩不超过其行数及列数，所以 $r(A)\le n,r(B)\le n$，于是 $r(B)=n$. 因为矩阵的秩与矩阵的行向量组的秩、列向量组的秩都相等，所以矩阵 $B$ 的列向量组的秩为 $n$，故矩阵 $B$ 的列向量组线性无关.`,
  source: '《1993 数学一解析.pdf》PDF 第 4 页',
});
