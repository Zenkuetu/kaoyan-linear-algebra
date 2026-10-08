// 2006 · 数学一 · 线性代数（题面取自《2006年考研数学（一）真题》，答案与解析取自《2006数学一解析》）
EXAMS.push({
  year: 2006, subject: '数一', number: 5, kind: '填空', score: 4,
  ids: ['mat-eq-solve', 'det-product', 'mat-inv-method'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}2&1\\-1&2\end{pmatrix}$，$E$ 为 2 阶单位矩阵，矩阵 $B$ 满足 $BA=B+2E$，则 $|B|=\underline{\qquad}$．`,
  answer: String.raw`$2$`,
  analysis: String.raw`【解】 由 $BA=B+2E$，得 $B(A-E)=2E$，两边取行列式，得 $|B|\cdot|A-E|=4$，

因为 $A-E=\begin{pmatrix}1&1\\-1&1\end{pmatrix}$，所以 $|A-E|=2$，于是 $|B|=2$．`,
  source: '《2006 年数学（一）真题解析》第 2 页',
});

EXAMS.push({
  year: 2006, subject: '数一', number: 11, kind: '选择', score: 4,
  ids: ['vec-indep-crit', 'vec-rank-vs-mat'],
  question: String.raw`设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 均为 $n$ 维列向量，$A$ 是 $m\times n$ 矩阵，下列选项正确的是（　　）

（A）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关．
（B）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性无关．
（C）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关．
（D）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性无关．`,
  answer: String.raw`（A）`,
  analysis: String.raw`【解】 方法一 令 $Q=(\alpha_1,\alpha_2,\cdots,\alpha_s)$，$(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)=AQ$，

则 $r(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)=r(AQ)\le r(Q)$．

若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则 $r(Q)<s$，于是 $r(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)\le r(Q)<s$．

即 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关，应选（A）．

方法二 若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则存在不全为零的常数 $k_1,k_2,\cdots,k_s$，使得
$$
k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0,
$$
等式两边左乘 $A$ 得
$$
k_1A\alpha_1+k_2A\alpha_2+\cdots+k_sA\alpha_s=0,
$$
由线性相关的定义得 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关，应选（A）．`,
  source: '《2006 年数学（一）真题解析》第 4 页',
});

EXAMS.push({
  year: 2006, subject: '数一', number: 12, kind: '选择', score: 4,
  ids: ['mat-elem-mat', 'mat-elem-relation'],
  question: String.raw`设 $A$ 为 3 阶矩阵，将 $A$ 的第 2 行加到第 1 行得 $B$，再将 $B$ 的第 1 列的 $-1$ 倍加到第 2 列得 $C$，记 $P=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}$，则（　　）

（A）$C=P^{-1}AP$．
（B）$C=PAP^{-1}$．
（C）$C=P^{\mathrm{T}}AP$．
（D）$C=PAP^{\mathrm{T}}$．`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解】 由矩阵的初等变换与初等矩阵的定义，得
$$
B=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}A=PA,\quad C=B\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}=BP^{-1},
$$
于是 $C=PAP^{-1}$，应选（B）．`,
  source: '《2006 年数学（一）真题解析》第 4 页',
});

EXAMS.push({
  year: 2006, subject: '数一', number: 20, kind: '解答', score: 9,
  ids: ['eq-nonhomo-general', 'eq-homo-nonhomo', 'eq-nonhomo-crit'],
  question: String.raw`（本题满分 9 分）已知非齐次线性方程组
$$
\begin{cases}x_1+x_2+x_3+x_4=-1,\\4x_1+3x_2+5x_3-x_4=-1,\\ax_1+x_2+3x_3+bx_4=1\end{cases}
$$
有 3 个线性无关的解．

（Ⅰ）证明方程组系数矩阵 $A$ 的秩 $r(A)=2$；

（Ⅱ）求 $a,b$ 的值及方程组的通解．`,
  answer: String.raw`（Ⅰ）$r(A)=2$；（Ⅱ）$a=2$，$b=-3$，通解为 $X=C_1\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+C_2\begin{pmatrix}4\\-5\\0\\1\end{pmatrix}+\begin{pmatrix}2\\-3\\0\\0\end{pmatrix}$（$C_1,C_2$ 为任意常数）．`,
  analysis: String.raw`（Ⅰ）令 $A=\begin{pmatrix}1&1&1&1\\4&3&5&-1\\a&1&3&b\end{pmatrix}$，$X=\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}$，$b=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$，原方程组可表示为 $AX=b$．

因为 $A$ 至少有两行不成比例，所以 $r(A)\ge 2$．

设 $\alpha_1,\alpha_2,\alpha_3$ 为 $AX=b$ 的三个线性无关解，则 $\alpha_1-\alpha_2,\alpha_1-\alpha_3$ 为 $AX=0$ 的两个解．

令 $k_1(\alpha_1-\alpha_2)+k_2(\alpha_1-\alpha_3)=0$，则 $(k_1+k_2)\alpha_1-k_1\alpha_2-k_2\alpha_3=0$，因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，所以 $k_1=k_2=0$，从而 $\alpha_1-\alpha_2,\alpha_1-\alpha_3$ 线性无关，即 $AX=0$ 至少有两个线性无关解，于是 $4-r(A)\ge 2$ 或 $r(A)\le 2$，故 $r(A)=2$．

（Ⅱ）方法一
$$
\overline{A}=\begin{pmatrix}1&1&1&1&\mid&-1\\4&3&5&-1&\mid&-1\\a&1&3&b&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&-1&1&-5&\mid&3\\0&1-a&3-a&b-a&\mid&1+a\end{pmatrix},
$$
因为 $r(A)=r(\overline{A})=2$，所以 $\dfrac{-1}{1-a}=\dfrac{1}{3-a}=\dfrac{-5}{b-a}=\dfrac{3}{1+a}$，解得 $a=2$，$b=-3$，
$$
\text{由 }\overline{A}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&-1&1&-5&\mid&3\\0&0&0&0&\mid&0\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&2&-4&\mid&2\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix},
$$
得原方程的通解为 $X=C_1\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+C_2\begin{pmatrix}4\\-5\\0\\1\end{pmatrix}+\begin{pmatrix}2\\-3\\0\\0\end{pmatrix}$（$C_1,C_2$ 为任意常数）．

方法二 因为 $r(A)=2$，所以 $A$ 的所有三阶子式都为零．
$$
\text{由 }\begin{vmatrix}1&1&1\\4&3&5\\a&1&3\end{vmatrix}=0,\quad\begin{vmatrix}1&1&1\\3&5&-1\\1&3&b\end{vmatrix}=0\text{ 得 }a=2,b=-3.
$$
$$
\text{由 }\overline{A}=\begin{pmatrix}1&1&1&1&\mid&-1\\4&3&5&-1&\mid&-1\\2&1&3&-3&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&-1&1&-5&\mid&3\\0&-1&1&-5&\mid&3\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&2&-4&\mid&2\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix},
$$
得原方程组的通解为 $X=k_1\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+k_2\begin{pmatrix}4\\-5\\0\\1\end{pmatrix}+\begin{pmatrix}2\\-3\\0\\0\end{pmatrix}$（$k_1,k_2$ 为任意常数）．

> **方法点评**：设 $A$ 为 $m\times n$ 矩阵，若 $r(A)=r(A\ \vdots\ b)$ 时，$AX=b$ 有解．
> 若 $r(A)=r$，则 $AX=0$ 的基础解系含 $n-r(A)$ 个解向量，但 $AX=b$ 线性无关的解向量组所含解向量的个数最多含 $n-r(A)+1$ 个．`,
  source: '《2006 年数学（一）真题解析》第 6–7 页',
});

EXAMS.push({
  year: 2006, subject: '数一', number: 21, kind: '解答', score: 9,
  ids: ['eig-orth-diag', 'eig-symmetric', 'eig-def'],
  question: String.raw`（本题满分 9 分）设 3 阶实对称矩阵 $A$ 的各行元素之和均为 3．向量 $\alpha_1=(-1,2,-1)^{\mathrm{T}}$，$\alpha_2=(0,-1,1)^{\mathrm{T}}$ 是线性方程组 $Ax=0$ 的两个解．

（Ⅰ）求 $A$ 的特征值与特征向量；

（Ⅱ）求正交矩阵 $Q$ 和对角矩阵 $\Lambda$，使得 $Q^{\mathrm{T}}AQ=\Lambda$．`,
  answer: String.raw`（Ⅰ）特征值为 $\lambda_1=\lambda_2=0$，$\lambda_3=3$；$\lambda=0$ 对应的全部特征向量为 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 为不全为零的任意常数），$\lambda=3$ 对应的全部特征向量为 $k\alpha_3$（$k$ 为非零常数），其中 $\alpha_3=(1,1,1)^{\mathrm{T}}$；（Ⅱ）$Q=\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}$，$\Lambda=\begin{pmatrix}0&0&0\\0&0&0\\0&0&3\end{pmatrix}$．`,
  analysis: String.raw`（Ⅰ）根据特征值与特征向量的定义，由 $A\begin{pmatrix}1\\1\\1\end{pmatrix}=3\begin{pmatrix}1\\1\\1\end{pmatrix}$ 得 $\lambda_3=3$ 为 $A$ 的特征值，$\alpha_3=\begin{pmatrix}1\\1\\1\end{pmatrix}$ 为其对应的特征向量．

因为 $AX=0$ 有非零解，所以 $\lambda=0$ 为 $A$ 的特征值，其对应的特征向量为 $\alpha_1=\begin{pmatrix}-1\\2\\-1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}0\\-1\\1\end{pmatrix}$，因为 $\alpha_1,\alpha_2$ 线性无关，所以 $\lambda=0$ 为 $A$ 的二重特征值，于是 $\lambda_1=\lambda_2=0$，其对应的线性无关的特征向量为 $\alpha_1,\alpha_2$．

故 $A$ 的特征值为 $\lambda_1=\lambda_2=0$，$\lambda_3=3$，其中 $\lambda_3=3$ 对应的所有特征向量为 $k\alpha_3$（$k$ 为任意的非零常数）；$\lambda_1=\lambda_2=0$ 对应的所有特征向量为 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 为不全为零的任意常数）．

（Ⅱ）令 $\beta_1=\alpha_1=\begin{pmatrix}-1\\2\\-1\end{pmatrix}$，$\beta_2=\alpha_2-\dfrac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)}\beta_1=\dfrac{1}{2}\begin{pmatrix}-1\\0\\1\end{pmatrix}$，$\beta_3=\alpha_3=\begin{pmatrix}1\\1\\1\end{pmatrix}$，

单位化得 $\gamma_1=\dfrac{1}{\sqrt{6}}\begin{pmatrix}-1\\2\\-1\end{pmatrix}$，$\gamma_2=\dfrac{1}{\sqrt{2}}\begin{pmatrix}-1\\0\\1\end{pmatrix}$，$\gamma_3=\dfrac{1}{\sqrt{3}}\begin{pmatrix}1\\1\\1\end{pmatrix}$，
$$
\text{令 }Q=\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix},\text{则 }Q^{\mathrm{T}}AQ=\begin{pmatrix}0&0&0\\0&0&0\\0&0&3\end{pmatrix}.
$$`,
  source: '《2006 年数学（一）真题解析》第 7–8 页',
});

