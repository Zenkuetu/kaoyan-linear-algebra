// 1993 · 数学三 · 线性代数（题面取自《1、1987-1996 考研数学三真题》1993 年试卷（四）；答案与解析取自《1993 年数学三真题答案解析》）
EXAMS.push({
  year: 1993, subject: '数三', number: 104, kind: '填空', score: 3, label: '试卷四·填空题第 4 题',
  ids: ['mat-adj-rank', 'mat-rank', 'mat-adjoint'],
  question: String.raw`设 4 阶方阵 $A$ 的秩为 2，则其伴随矩阵 $A^*$ 的秩为______.`,
  answer: String.raw`$0$.`,
  analysis: String.raw`【解析】本题考查伴随矩阵的定义及矩阵的秩的定义.
由于 $r(A)=2$，说明 $A$ 中 3 阶子式全为 0，于是 $|A|$ 的代数余子式 $A_{ij}\equiv 0$，故 $A^*=O$.
所以秩 $r(A^*)=0$.
若熟悉伴随矩阵 $A^*$ 秩的关系式
$$
r(A^*)=\begin{cases}n,&r(A)=n,\\1,&r(A)=n-1,\\0,&r(A)<n-1,\end{cases}
$$
易知 $r(A^*)=0$.
按定义
$$
A^*=\begin{pmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{pmatrix},
$$
伴随矩阵是 $n$ 阶矩阵，它的元素是行列式 $|A|$ 的代数余子式，是 $n-1$ 阶子式.`,
  source: '《1993 年数学三真题答案解析》PDF 第 1–2 页',
});

EXAMS.push({
  year: 1993, subject: '数三', number: 203, kind: '选择', score: 3, label: '试卷四·选择题第 3 题',
  ids: ['eig-diag-crit', 'eig-mult', 'eig-similar'],
  question: String.raw`$n$ 阶方阵 $A$ 具有 $n$ 个不同的特征值是 $A$ 与对角阵相似的（　　）
（A）充分必要条件
（B）充分而非必要条件
（C）必要而非充分条件
（D）既非充分也非必要条件`,
  answer: String.raw`（B）.`,
  analysis: String.raw`【解析】$A\sim\Lambda\Leftrightarrow A$ 有 $n$ 个线性无关的特征向量.
由于当特征值 $\lambda_1\ne\lambda_2$ 时，特征向量 $\alpha_1,\alpha_2$ 线性无关. 从而知，当 $A$ 有 $n$ 个不同特征值时，矩阵 $A$ 有 $n$ 个线性无关的特征向量，那么矩阵 $A$ 可以相似对角化.
因为当 $A$ 的特征值有重根时，矩阵 $A$ 仍有可能相似对角化（当特征根的代数重数等于其几何重数的时候），所以特征值不同仅是能相似对角化的充分条件，故应选（B）.`,
  source: '《1993 年数学三真题答案解析》PDF 第 3 页',
});

EXAMS.push({
  year: 1993, subject: '数三', number: 308, kind: '解答', score: 10, label: '试卷四·第八题',
  ids: ['eq-nonhomo-crit', 'eq-nonhomo-general', 'eq-gauss'],
  question: String.raw`$k$ 为何值时，线性方程组
$$
\begin{cases}x_1+x_2+kx_3=4,\\-x_1+kx_2+x_3=k^2,\\x_1-x_2+2x_3=-4\end{cases}
$$
有唯一解、无解、有无穷多解？在有解情况下，求出其全部解.`,
  answer: String.raw`当 $k\ne -1$ 且 $k\ne 4$ 时，方程组有唯一解
$$
x_1=\frac{k^2+2k}{k+1},\quad x_2=\frac{k^2+2k+4}{k+1},\quad x_3=\frac{-2k}{k+1};
$$
当 $k=-1$ 时，方程组无解；当 $k=4$ 时，方程组有无穷多解，通解为
$$
\alpha+k\eta=(0,4,0)^{\mathrm{T}}+k(-3,-1,1)^{\mathrm{T}}\quad(k\text{ 为任意常数}).
$$`,
  analysis: String.raw`【解析】对方程组的增广矩阵作初等行变换，
第一行和第三行互换，再第一行分别乘以 $(1)$、$(-1)$ 加到第二行和第三行上，再第二行和第三行互换，再第二行乘以 $\left(\dfrac{1-k}{2}\right)$ 加到第三行上，有
$$
\overline{A}=\begin{pmatrix}1&1&k&\vdots&4\\-1&k&1&\vdots&k^2\\1&-1&2&\vdots&-4\end{pmatrix}\to\begin{pmatrix}1&-1&2&\vdots&-4\\-1&k&1&\vdots&k^2\\1&1&k&\vdots&4\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&-1&2&\vdots&-4\\0&k-1&3&\vdots&k^2-4\\0&2&k-2&\vdots&8\end{pmatrix}\to\begin{pmatrix}1&-1&2&\vdots&-4\\0&2&k-2&\vdots&8\\0&k-1&3&\vdots&k^2-4\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&-1&2&\vdots&-4\\0&2&k-2&\vdots&8\\0&0&\dfrac{(1+k)(4-k)}{2}&\vdots&k(k-4)\end{pmatrix}.
$$
（1）当 $k\ne -1$ 且 $k\ne 4$ 时，$r(\overline{A})=r(A)=3$，方程组有唯一解，即
$$
x_1=\frac{k^2+2k}{k+1},\quad x_2=\frac{k^2+2k+4}{k+1},\quad x_3=\frac{-2k}{k+1}.
$$
（2）当 $k=-1$ 时，$r(\overline{A})=3,r(A)=2$，方程组无解.
（3）当 $k=4$ 时，有
$$
\overline{A}=\begin{pmatrix}1&-1&2&\vdots&-4\\0&2&2&\vdots&8\\0&0&0&\vdots&0\end{pmatrix}\to\begin{pmatrix}1&0&3&\vdots&0\\0&1&1&\vdots&4\\0&0&0&\vdots&0\end{pmatrix}.
$$
因为 $r(\overline{A})=r(A)=2<3$，方程组有无穷多解.
取 $x_3$ 为自由变量，得方程组的特解为 $\alpha=(0,4,0)^{\mathrm{T}}$.
又导出组的基础解系为 $\eta=(-3,-1,1)^{\mathrm{T}}$，所以方程组的通解为 $\alpha+k\eta$，其中 $k$ 为任意常数.
【相关知识点】非齐次线性方程组有解的判定定理：
设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$ 有解的充分必要条件是系数矩阵的秩等于增广矩阵 $\overline{A}=(A\vdots b)$ 的秩，即 $r(A)=r(\overline{A})$.（或者说，$b$ 可由 $A$ 的列向量 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线表出，亦等同于 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 与 $\alpha_1,\alpha_2,\cdots,\alpha_n,b$ 是等价向量组）
设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$，则
（1）有唯一解 $\Leftrightarrow r(A)=r(\overline{A})=n$.
（2）有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$.
（3）无解 $\Leftrightarrow r(A)+1=r(\overline{A})\Leftrightarrow b$ 不能由 $A$ 的列向量 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线表出.`,
  source: '《1993 年数学三真题答案解析》PDF 第 6–7 页',
});

EXAMS.push({
  year: 1993, subject: '数三', number: 309, kind: '解答', score: 9, label: '试卷四·第九题',
  ids: ['qf-orthogonal', 'eig-similar-prop', 'qf-def'],
  question: String.raw`设二次型
$$
f=x_1^2+x_2^2+x_3^2+2\alpha x_1x_2+2\beta x_2x_3+2x_1x_3
$$
经正交变换 $x=Py$ 化成 $f=y_2^2+2y_3^2$，其中 $x=(x_1,x_2,x_3)^{\mathrm{T}}$ 和 $y=(y_1,y_2,y_3)^{\mathrm{T}}$ 是 3 维列向量，$P$ 是 3 阶正交矩阵. 试求常数 $\alpha,\beta$.`,
  answer: String.raw`$\alpha=\beta=0$.`,
  analysis: String.raw`【解析】经正交变换二次型 $f$ 的矩阵分别为
$$
A=\begin{pmatrix}1&\alpha&1\\\alpha&1&\beta\\1&\beta&1\end{pmatrix},\quad B=\begin{pmatrix}0&&\\&1&\\&&2\end{pmatrix}.
$$
由于 $P$ 是正交矩阵，有 $P^{-1}AP=B$，即知矩阵 $A$ 的特征值是 $0,1,2$. 那么有
$$
\begin{cases}|A|=2\alpha\beta-\alpha^2-\beta^2=0,\\|E-A|=-2\alpha\beta=0,\end{cases}\Rightarrow \alpha=\beta=0.
$$
【相关知识点】二次型的定义：含有 $n$ 个变量 $x_1,x_2,\cdots,x_n$ 的二次齐次多项式（即每项都是二次的多项式）
$$
f(x_1,x_2,\cdots,x_n)=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j,\quad\text{其中}\ a_{ij}=a_{ji},
$$
称为 $n$ 元二次型，令 $x=(x_1,x_2,\cdots,x_n)^{\mathrm{T}}$，$A=(a_{ij})$，则二次型可用矩阵乘法表示为
$$
f(x_1,x_2,\cdots,x_n)=x^{\mathrm{T}}Ax,
$$
其中 $A$ 是对称矩阵 $(A^{\mathrm{T}}=A)$，称 $A$ 为二次型 $f(x_1,x_2,\cdots,x_n)$ 的矩阵.`,
  source: '《1993 年数学三真题答案解析》PDF 第 7 页',
});
