// 2006 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 47–48 页；答案与解析取自《2005—2013 考研数二真题答案解析》）
EXAMS.push({
  year: 2006, subject: '数二', number: 6, kind: '填空', score: 4,
  ids: ['mat-eq-solve', 'det-product'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}2&1\\-1&2\end{pmatrix}$，$E$ 为 2 阶单位矩阵，矩阵 $B$ 满足 $BA=B+2E$，则 $|B|=$ ________.`,
  answer: '2',
  analysis: String.raw`由已知条件 $BA=B+2E$ 变形得，$BA-B=2E\Rightarrow B(A-E)=2E$，两边取行列式，得
$$
|B(A-E)|=|2E|=2^2=4
$$
其中，
$$
A-E=\begin{pmatrix}2&1\\-1&2\end{pmatrix}-\begin{pmatrix}1&0\\0&1\end{pmatrix}=\begin{pmatrix}1&1\\-1&1\end{pmatrix},\qquad |A-E|=\begin{vmatrix}1&1\\-1&1\end{vmatrix}=2,
$$
因此，$|B|=\frac{|2E|}{|A-E|}=\frac{4}{2}=2$.`,
  source: '《2005—2013 考研数二真题答案解析》第 20 页',
});

EXAMS.push({
  year: 2006, subject: '数二', number: 13, kind: '选择', score: 4,
  ids: ['vec-indep-concl', 'mat-mult'],
  question: String.raw`设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 均为 $n$ 维列向量，$A$ 是 $m\times n$ 矩阵，下列选项正确的是（　）

（A）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关.
（B）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性无关.
（C）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关.
（D）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性无关.`,
  answer: '（A）',
  analysis: String.raw`方法1：若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则由线性相关定义存在不全为 $0$ 的数 $k_1,k_2,\cdots,k_s$ 使得
$$
k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0
$$
为了得到 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 的形式，用 $A$ 左乘等式两边，得
$$
k_1A\alpha_1+k_2A\alpha_2+\cdots+k_sA\alpha_s=0\tag{①}
$$
于是存在不全为 $0$ 的数 $k_1,k_2,\cdots,k_s$ 使得①成立，所以 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关.

方法2：如果用秩来解，则更加简单明了. 只要熟悉两个基本性质，它们是：

1. $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关 $\Leftrightarrow r(\alpha_1,\alpha_2,\cdots,\alpha_s)<s$；2. $r(AB)<r(B)$.

矩阵 $(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)=A(\alpha_1,\alpha_2,\cdots,\alpha_s)$，设 $B=(\alpha_1,\alpha_2,\cdots,\alpha_s)$，则由 $r(AB)<r(B)$ 得 $r(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)\le r(\alpha_1,\alpha_2,\cdots,\alpha_s)<s$. 所以答案应该为（A）.`,
  source: '《2005—2013 考研数二真题答案解析》第 23 页',
});

EXAMS.push({
  year: 2006, subject: '数二', number: 14, kind: '选择', score: 4,
  ids: ['mat-elem-mat', 'mat-elem-relation'],
  question: String.raw`设 $A$ 为 3 阶矩阵，将 $A$ 的第 2 行加到第 1 行得 $B$，再将 $B$ 的第 1 列的 $-1$ 倍加到第 2 列得 $C$，记 $P=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}$，则（　）

（A）$C=P^{-1}AP$.
（B）$C=PAP^{-1}$.
（C）$C=P^{\mathrm{T}}AP$.
（D）$C=PAP^{\mathrm{T}}$.`,
  answer: '（B）',
  analysis: String.raw`用初等矩阵在乘法中的作用（矩阵左乘或右乘初等矩阵相当于对矩阵进行初等行变换或列变换）得出

将 $A$ 的第 2 行加到第 1 行得 $B$，即 $B=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}A\overset{\text{记}}{=}PA$

将 $B$ 的第 1 列的 $-1$ 倍加到第 2 列得 $C$，即 $C=B\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}\overset{\text{记}}{=}BQ$

因为 $PQ=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}=E$，故 $Q=P^{-1}E=P^{-1}$.

从而 $C=BQ=BP^{-1}=PAP^{-1}$. 故选（B）.`,
  source: '《2005—2013 考研数二真题答案解析》第 24 页',
});

EXAMS.push({
  year: 2006, subject: '数二', number: 22, kind: '解答', score: 9,
  ids: ['eq-rank-relation', 'eq-nonhomo-general'],
  question: String.raw`已知非齐次线性方程组
$$
\begin{cases}
x_1+x_2+x_3+x_4=-1,\\
4x_1+3x_2+5x_3-x_4=-1,\\
ax_1+x_2+3x_3+bx_4=1
\end{cases}
$$
有三个线性无关的解.

（Ⅰ）证明方程组系数矩阵 $A$ 的秩 $r(A)=2$；

（Ⅱ）求 $a,b$ 的值及方程组的通解.`,
  answer: String.raw`（Ⅱ）$a=2$，$b=-3$，通解为
$$
(2,-3,0,0)^{\mathrm{T}}+c_1(-2,1,1,0)^{\mathrm{T}}+c_2(4,-5,0,1)^{\mathrm{T}},\qquad(c_1,c_2\ \text{为任意常数}).
$$`,
  analysis: String.raw`（Ⅰ）系数矩阵 $A=\begin{pmatrix}1&1&1&1\\4&3&5&-1\\a&1&3&b\end{pmatrix}$ 未知量的个数为 $n=4$，且又 $AX=b$ 有三个线性无关解，设 $\alpha_1,\alpha_2,\alpha_3$ 是方程组的 $3$ 个线性无关的解，则 $\alpha_2-\alpha_1,\alpha_3-\alpha_1$ 是 $AX=0$ 的两个线性无关的解. 因为 $\alpha_2-\alpha_1,\alpha_3-\alpha_1$ 线性无关又是齐次方程的解，于是 $AX=0$ 的基础解系中解的个数不少于 $2$，得 $4-r(A)\ge2$，从而 $r(A)\le2$.

又因为 $A$ 的行向量是两两线性无关的，所以 $r(A)\ge2$. 所以 $r(A)=2$.

（Ⅱ）对方程组的增广矩阵作初等行变换：
$$
[A|b]=\begin{pmatrix}1&1&1&1&|&-1\\4&3&5&-1&|&-1\\a&1&3&b&|&1\end{pmatrix}\xrightarrow[3\text{行}+1\text{行}\times(-a)]{2\text{行}+1\text{行}\times(-4)}\begin{pmatrix}1&1&1&1&|&-1\\0&-1&1&-5&|&3\\0&1-a&3-a&b-a&|&1+a\end{pmatrix}
$$
$$
\xrightarrow{3\text{行}+2\text{行}\times(1-a)}\begin{pmatrix}1&1&1&1&|&-1\\0&-1&1&-5&|&3\\0&0&4-2a&4a+b-5&|&4-2a\end{pmatrix},
$$
由 $r(A)=2$，得 $\begin{cases}4-2a=0\\4a+b-5=0\end{cases}$，即 $a=2$，$b=-3$.

所以 $[A|b]$ 作初等行变换后化为：$\begin{pmatrix}1&0&2&-4&|&2\\0&-1&-1&5&|&-3\\0&0&0&0&|&0\end{pmatrix}$，

它的同解方程组
$$
\begin{cases}
x_1=2-2x_3+4x_4\\
x_2=-3+x_3-5x_4
\end{cases}\tag{①}
$$
①中令 $x_3=0,x_4=0$ 求出 $AX=b$ 的一个特解 $(2,-3,0,0)^{\mathrm{T}}$；

$AX=0$ 的同解方程组是
$$
\begin{cases}
x_1=-2x_3+4x_4\\
x_2=x_3-5x_4
\end{cases}\tag{②}
$$
取 $x_3=1,x_4=0$，代入②得 $(-2,1,1,0)^{\mathrm{T}}$；取 $x_3=0,x_4=1$，代入②得 $(4,-5,0,1)^{\mathrm{T}}$. 所以 $AX=0$ 的基础解系为 $(-2,1,1,0)^{\mathrm{T}}$，$(4,-5,0,1)^{\mathrm{T}}$

所以方程组 $AX=b$ 的通解为：
$$
(2,-3,0,0)^{\mathrm{T}}+c_1(-2,1,1,0)^{\mathrm{T}}+c_2(4,-5,0,1)^{\mathrm{T}},\ c_1,c_2\text{为任意常数}.$$`,
  source: '《2005—2013 考研数二真题答案解析》第 28–29 页',
});

EXAMS.push({
  year: 2006, subject: '数二', number: 23, kind: '解答', score: 9,
  ids: ['eig-symmetric', 'eig-orth-diag'],
  question: String.raw`设 3 阶实对称矩阵 $A$ 的各行元素之和均为 3，向量 $\alpha_1=(-1,2,-1)^{\mathrm{T}}$，$\alpha_2=(0,-1,1)^{\mathrm{T}}$ 是线性方程组 $Ax=0$ 的两个解.

（Ⅰ）求 $A$ 的特征值与特征向量；

（Ⅱ）求正交矩阵 $Q$ 和对角矩阵 $\Lambda$，使得 $Q^{\mathrm{T}}AQ=\Lambda$.`,
  answer: String.raw`（Ⅰ）$A$ 的特征值为 $3,0,0$；属于 $3$ 的特征向量为 $k_3(1,1,1)^{\mathrm{T}}$（$k_3\ne0$），属于 $0$ 的特征向量为 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为 $0$）；（Ⅱ）
$$
Q=\begin{pmatrix}\frac{\sqrt{3}}{3}&0&-\frac{\sqrt{6}}{3}\\\frac{\sqrt{3}}{3}&-\frac{\sqrt{2}}{2}&\frac{\sqrt{6}}{6}\\\frac{\sqrt{3}}{3}&\frac{\sqrt{2}}{2}&\frac{\sqrt{6}}{6}\end{pmatrix},\qquad \Lambda=\begin{pmatrix}3&0&0\\0&0&0\\0&0&0\end{pmatrix}.
$$`,
  analysis: String.raw`（Ⅰ）由题设条件 $A\alpha_1=0\cdot\alpha_1$，$A\alpha_2=0\cdot\alpha_2$，故 $\alpha_1,\alpha_2$ 是 $A$ 的对应于 $\lambda=0$ 的特征向量，又因为 $\alpha_1,\alpha_2$ 线性无关，故 $\lambda=0$ 至少是 $A$ 的二重特征值. 又因为 $A$ 的每行元素之和为 3，所以有 $A(1,1,1)^{\mathrm{T}}=(3,3,3)^{\mathrm{T}}=3(1,1,1)^{\mathrm{T}}$，由特征值、特征向量的定义，

$\alpha_0=(1,1,1)^{\mathrm{T}}$ 是 $A$ 的特征向量，特征值为 $\lambda_3=3$，$\lambda_3$ 只能是单根，$k_3\alpha_0,k_3\ne0$ 是全体特征向量，从而知 $\lambda=0$ 是二重特征值.

于是 $A$ 的特征值为 $3,0,0$；属于 $3$ 的特征向量：$k_3\alpha_3,k_3\ne0$；属于 $0$ 的特征向量：$k_1\alpha_1+k_2\alpha_2$，$k_1,k_2$ 不都为 $0$.

（Ⅱ）为了求出可逆矩阵必须对特征向量进行单位正交化.

先将 $\alpha_0$ 单位化，得 $\eta_1=(\frac{\sqrt{3}}{3},\frac{\sqrt{3}}{3},\frac{\sqrt{3}}{3})^{\mathrm{T}}$.

对 $\alpha_1,\alpha_2$ 作施密特正交化，得 $\eta_2=(0,-\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2})^{\mathrm{T}}$，$\eta_3=(-\frac{\sqrt{6}}{3},\frac{\sqrt{6}}{6},\frac{\sqrt{6}}{6})^{\mathrm{T}}$.

作 $Q=(\eta_1,\eta_2,\eta_3)$，则 $Q$ 是正交矩阵，并且 $Q^{\mathrm{T}}AQ=Q^{-1}AQ=\begin{pmatrix}3&0&0\\0&0&0\\0&0&0\end{pmatrix}$.`,
  source: '《2005—2013 考研数二真题答案解析》第 29–30 页',
});
