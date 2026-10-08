// 2002 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2002 年卷；答案与解析取自《2002 年数学三真题答案解析》）
EXAMS.push({
  year: 2002, subject: '数三', number: 103, kind: '填空', score: 3,
  ids: ['eig-def', 'vec-indep-crit'],
  label: '填空题第 3 题',
  question: String.raw`设 $3$ 阶矩阵 $A=\begin{pmatrix}1&2&-2\\2&1&2\\3&0&4\end{pmatrix}$，$3$ 维列向量 $\alpha=(a,1,1)^{\mathrm{T}}$。已知 $A\alpha$ 与 $\alpha$ 线性相关，则 $a=$ $\underline{\qquad}$。`,
  answer: String.raw`$-1$。`,
  analysis: String.raw`【详解】
$$
A\alpha=\begin{pmatrix}1&2&-2\\2&1&2\\3&0&4\end{pmatrix}\begin{pmatrix}a\\1\\1\end{pmatrix}=\begin{pmatrix}a\\2a+3\\3a+4\end{pmatrix}.
$$
由于 $A\alpha$ 与 $\alpha$ 线性相关（两个非零向量线性相关，则对应分量成比例），所以有
$$
\frac{a}{a}=\frac{2a+3}{1}=\frac{3a+4}{1},
$$
得 $2a+3=3a+4$，$a=-1$。

或设 $A\alpha=k\alpha\ (k\ne 0)$（两个非零向量线性相关，则其中一个可以由另一个线性表出），即
$$
\begin{pmatrix}a\\2a+3\\3a+4\end{pmatrix}=k\begin{pmatrix}a\\1\\1\end{pmatrix},
$$
得
$$
\begin{cases}a=ka,\\2a+3=k,\\3a+4=k,\end{cases}
$$
得 $a=-1$（$k=1$）。`,
  source: '《2002 年数学三试题解析》第 1–2 页',
});

EXAMS.push({
  year: 2002, subject: '数三', number: 203, kind: '选择', score: 3,
  ids: ['eq-homo-sol', 'mat-rank-ineq', 'mat-rank'],
  label: '选择题第 3 题',
  question: String.raw`设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times m$ 矩阵，则线性方程组 $(AB)x=0$（　　）
（A）当 $n>m$ 时仅有零解　　（B）当 $n>m$ 时必有非零解
（C）当 $m>n$ 时仅有零解　　（D）当 $m>n$ 时必有非零解`,
  answer: String.raw`（D）`,
  analysis: String.raw`【详解】方法 1：$A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times m$ 矩阵，则 $AB$ 是 $m$ 阶方阵，因
$$
r(AB)\le\min(r(A),r(B)).
$$
当 $m>n$ 时，有 $r(AB)\le\min(r(A),r(B))\le n<m$（系数矩阵的秩小于未知数的个数），方程组 $(AB)x=0$ 必有非零解，故应选（D）。

方法 2：$B$ 是 $n\times m$ 矩阵，当 $m>n$ 时，则 $r(B)\le n<m$（系数矩阵的秩小于未知数的个数），方程组 $Bx=0$ 必有非零解，即存在 $x_0\ne 0$，使得 $Bx_0=0$，两边左乘 $A$，得 $ABx_0=0$，即 $ABx=0$ 有非零解，故选（D）。`,
  source: '《2002 年数学三试题解析》第 4 页',
});

EXAMS.push({
  year: 2002, subject: '数三', number: 204, kind: '选择', score: 3,
  ids: ['eig-def', 'eig-similar-prop', 'mat-transpose'],
  label: '选择题第 4 题',
  question: String.raw`设 $A$ 是 $n$ 阶实对称矩阵，$P$ 是 $n$ 阶可逆矩阵。已知 $n$ 维列向量 $\alpha$ 是 $A$ 的属于特征值 $\lambda$ 的特征向量，则矩阵 $(P^{-1}AP)^{\mathrm{T}}$ 属于特征值 $\lambda$ 的特征向量是（　　）
（A）$P^{-1}\alpha$　　（B）$P^{\mathrm{T}}\alpha$　　（C）$P\alpha$　　（D）$(P^{-1})^{\mathrm{T}}\alpha$`,
  answer: String.raw`（B）`,
  analysis: String.raw`【详解】方法 1：由题设根据特征值和特征向量的定义，$A\alpha=\lambda\alpha$，$A$ 是 $n$ 阶实对称矩阵，故 $A^{\mathrm{T}}=A$。设 $P^{-1}AP=B$，则
$$
B=(P^{-1}AP)^{\mathrm{T}}=P^{\mathrm{T}}A^{\mathrm{T}}(P^{-1})^{\mathrm{T}}=P^{\mathrm{T}}A(P^{\mathrm{T}})^{-1}.
$$
上式左乘 $(P^{\mathrm{T}})^{-1}$，右乘 $P^{\mathrm{T}}$，得
$$
(P^{\mathrm{T}})^{-1}B P^{\mathrm{T}}=(P^{\mathrm{T}})^{-1}P^{\mathrm{T}}A(P^{\mathrm{T}})^{-1}P^{\mathrm{T}}=A,\quad\text{即 }A=(P^{\mathrm{T}})^{-1}BP^{\mathrm{T}}.
$$
所以
$$
A\alpha=(P^{\mathrm{T}})^{-1}BP^{\mathrm{T}}\alpha=\lambda\alpha.
$$
两边左乘 $P^{\mathrm{T}}$，得 $B(P^{\mathrm{T}}\alpha)=\lambda(P^{\mathrm{T}}\alpha)$。根据特征值和特征向量的定义，知 $B=(P^{-1}AP)^{\mathrm{T}}$ 的对应于特征值 $\lambda$ 的特征向量为 $P^{\mathrm{T}}\alpha$，即应选（B）。

方法 2：逐个验算（A），（B），（C），（D）中哪个选项满足。由题设 $A\alpha=\lambda\alpha$，$A$ 是 $n$ 阶实对称矩阵，故 $A^{\mathrm{T}}=A$。设 $(P^{-1}AP)^{\mathrm{T}}$ 属于特征值 $\lambda$ 的特征向量为 $x$，即
$$
(P^{-1}AP)^{\mathrm{T}}x=\lambda x,\quad\text{其中 }(P^{-1}AP)^{\mathrm{T}}=P^{\mathrm{T}}A^{\mathrm{T}}(P^{-1})^{\mathrm{T}}=P^{\mathrm{T}}A(P^{\mathrm{T}})^{-1}.
$$
对（A），即令 $x=P^{-1}\alpha$，代入 $P^{\mathrm{T}}A(P^{\mathrm{T}})^{-1}(P^{-1}\alpha)$ 不等于 $\lambda P^{-1}\alpha$；对（B），
$$
P^{\mathrm{T}}A(P^{\mathrm{T}})^{-1}(P^{\mathrm{T}}\alpha)=P^{\mathrm{T}}A[(P^{\mathrm{T}})^{-1}P^{\mathrm{T}}]\alpha=P^{\mathrm{T}}A\alpha=\lambda(P^{\mathrm{T}}\alpha)
$$
成立。故应选（B）。`,
  source: '《2002 年数学三试题解析》第 4–5 页',
});

EXAMS.push({
  year: 2002, subject: '数三', number: 309, kind: '解答', score: 8,
  ids: ['eq-homo-general', 'eq-homo-structure', 'eq-homo-sol'],
  label: '第九题',
  question: String.raw`（本题满分 8 分）设齐次线性方程组
$$
\begin{cases}ax_1+bx_2+bx_3+\cdots+bx_n=0,\\bx_1+ax_2+bx_3+\cdots+bx_n=0,\\\cdots\cdots\cdots\\bx_1+bx_2+bx_3+\cdots+ax_n=0,\end{cases}
$$
其中 $a\ne 0,b\ne 0,n\ge 2$。试讨论 $a,b$ 为何值时，方程组仅有零解、有无穷多组解？在有无穷多组解时，求出全部解，并用基础解系表示全部解。`,
  answer: String.raw`（1）当 $a\ne b$ 且 $a\ne -(n-1)b$ 时，方程组仅有零解；（2）当 $a=b(\ne 0)$ 时，方程组有无穷多组解，全部解为 $X=k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $\xi_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\xi_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\cdots,\xi_{n-1}=(-1,0,\cdots,0,1)^{\mathrm{T}}$，$k_1,k_2,\cdots,k_{n-1}$ 为任意常数；（3）当 $a=-(n-1)b\ (b\ne 0)$ 时，方程组有无穷多组解，全部解为 $X=k(1,1,\cdots,1)^{\mathrm{T}}$，$k$ 为任意常数。`,
  analysis: String.raw`【详解】方法 1：对系数矩阵记为 $A$ 作初等行变换
$$
A=\begin{pmatrix}a&b&b&\cdots&b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{pmatrix}\xrightarrow[3\text{ 行}-1\text{ 行}]{\cdots\cdots\cdots}\begin{pmatrix}a&b&b&\cdots&b\\b-a&a-b&0&\cdots&0\\b-a&0&a-b&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\b-a&0&0&\cdots&a-b\end{pmatrix}.
$$
当 $a=b(\ne 0)$ 时，$r(A)=1$，$AX=0$ 的同解方程组为 $x_1+x_2+\cdots+x_n=0$，基础解系中含有 $n-1$ 个（未知数的个数 $-$ 系数矩阵的秩）线性无关的解向量。取 $x_2,x_3,\cdots,x_n$ 为自由未知量，分别取 $x_2=1,x_3=0,\cdots,x_n=0$；$x_2=0,x_3=1,\cdots,x_n=0$；$\cdots$；$x_2=0,x_3=0,\cdots,x_n=1$，得方程组 $n-1$ 个线性无关的解
$$
\xi_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \xi_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\ \cdots,\ \xi_{n-1}=(-1,0,\cdots,0,1)^{\mathrm{T}},
$$
为基础解系，方程组 $AX=0$ 的全部解为 $X=k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $k_i\ (i=1,2,\cdots,n-1)$ 是任意常数。

当 $a\ne b$ 时，
$$
A\xrightarrow[\cdots\cdots\cdots]{\text{各行除以 }(a-b)}\begin{pmatrix}a&b&b&\cdots&b\\-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\end{pmatrix}\xrightarrow[1\text{ 行减 }2\text{ 行}\times b,\ 1\text{ 行减 }3\text{ 行}\times b,\ \cdots,\ 1\text{ 行减 }n\text{ 行}\times b]{}\begin{pmatrix}a+(n-1)b&0&0&\cdots&0\\-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\end{pmatrix}.
$$
当 $a\ne b$ 且 $a\ne -(n-1)b$ 时，$|A|=a+(n-1)b\ne 0$，$r(A)=n$，$AX=0$ 仅有零解。

当 $a=-(n-1)b$ 时，$r(A)=n-1$，$AX=0$ 的同解方程组是
$$
\begin{cases}-x_1+x_2=0,\\-x_1+x_3=0,\\\cdots\cdots\cdots\\-x_1+x_n=0.\end{cases}
$$
基础解系中含有 $1$ 个线性无关的解向量，取 $x_1$ 为自由未知量，取 $x_1=1$，得方程组 $1$ 个非零解
$$
\xi=(1,1,\cdots,1)^{\mathrm{T}},
$$
即其基础解系，故方程组的全部解为 $X=k\xi$，其中 $k$ 是任意常数。

方法 2：方程组的系数行列式
$$
|A|=\begin{vmatrix}a&b&b&\cdots&b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{vmatrix}\xrightarrow[\text{把第 }2,\cdots,n\text{ 列加到第 }1\text{ 列}]{}\begin{vmatrix}a+(n-1)b&b&b&\cdots&b\\a+(n-1)b&a&b&\cdots&b\\a+(n-1)b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\a+(n-1)b&b&b&\cdots&a\end{vmatrix}
$$
$$
\xrightarrow[\text{提取第 }1\text{ 列的公因子}]{}\,[a+(n-1)b]\begin{vmatrix}1&b&b&\cdots&b\\1&a&b&\cdots&b\\1&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\1&b&b&\cdots&a\end{vmatrix}\xrightarrow[\text{第 }2,3,\cdots,n\text{ 行}-\text{第 }1\text{ 行}]{}\,[a+(n-1)b]\begin{vmatrix}1&b&b&\cdots&b\\0&a-b&0&\cdots&0\\0&0&a-b&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&a-b\end{vmatrix}
$$
$$
=[a+(n-1)b](a-b)^{n-1}.
$$
（1）当 $a\ne b$ 且 $a\ne -(n-1)b$ 时，$|A|\ne 0$，$r(A)=n$，方程组只有零解。

（2）当 $a=b(\ne 0)$ 时，
$$
A=\begin{pmatrix}a&a&a&\cdots&a\\a&a&a&\cdots&a\\a&a&a&\cdots&a\\\vdots&\vdots&\vdots&&\vdots\\a&a&a&\cdots&a\end{pmatrix}\xrightarrow[\text{第 }2,3,\cdots,n\text{ 行}-\text{第 }1\text{ 行}]{}\begin{pmatrix}a&a&a&\cdots&a\\0&0&0&\cdots&0\\0&0&0&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&0\end{pmatrix}\xrightarrow[1\text{ 行}\times\dfrac{1}{a}]{}\begin{pmatrix}1&1&1&\cdots&1\\0&0&0&\cdots&0\\0&0&0&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&0\end{pmatrix}.
$$
方程组的同解方程组为
$$
x_1+x_2+\cdots+x_n=0.
$$
基础解系中含有 $n-1$ 个线性无关的解向量，取 $x_2,x_3,\cdots,x_n$ 为自由未知量，分别取 $x_2=1,x_3=0,\cdots,x_n=0$；$x_2=0,x_3=1,\cdots,x_n=0$；$\cdots$；$x_2=0,x_3=0,\cdots,x_n=1$，得方程组 $n-1$ 个线性无关的解
$$
\xi_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \xi_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\ \cdots,\ \xi_{n-1}=(-1,0,\cdots,0,1)^{\mathrm{T}},
$$
为基础解系，方程组 $AX=0$ 的全部解为 $X=k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $k_i\ (i=1,2,\cdots,n-1)$ 是任意常数。

（3）当 $a=-(n-1)b\ (b\ne 0)$ 时，
$$
A=\begin{pmatrix}(1-n)b&b&b&\cdots&b\\b&(1-n)b&b&\cdots&b\\b&b&(1-n)b&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&(1-n)b\end{pmatrix}\xrightarrow[1,2,\cdots,n\text{ 行分别乘以 }\dfrac{1}{b}]{}\begin{pmatrix}1-n&1&1&\cdots&1\\1&1-n&1&\cdots&1\\1&1&1-n&\cdots&1\\\vdots&\vdots&\vdots&&\vdots\\1&1&1&\cdots&1-n\end{pmatrix}
$$
$$
\xrightarrow[2,3,\cdots,n\text{ 行}-\text{第 }1\text{ 行}]{}\begin{pmatrix}1-n&1&1&\cdots&1\\n&-n&0&\cdots&0\\n&0&-n&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\n&0&0&\cdots&-n\end{pmatrix}\xrightarrow[\text{把第 }2,\cdots,n\text{ 行都分别乘以}\dfrac{1}{n}\text{ 依次加到第 }1\text{ 行}]{}\begin{pmatrix}0&0&0&\cdots&0\\1&-1&0&\cdots&0\\1&0&-1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\1&0&0&\cdots&-1\end{pmatrix},
$$
$r(A)=n-1$，其同解方程组是
$$
\begin{cases}x_1-x_2=0,\\x_1-x_3=0,\\\cdots\cdots\cdots\\x_1-x_n=0.\end{cases}
$$
基础解系中含有 $1$ 个线性无关的解向量，取 $x_1$ 为自由未知量，取 $x_1=1$，得方程组 $1$ 个非零解
$$
\xi=(1,1,\cdots,1)^{\mathrm{T}},
$$
即其基础解系，故方程组的全部解为 $X=k\xi$，其中 $k$ 是任意常数。`,
  source: '《2002 年数学三试题解析》第 10–13 页',
});

EXAMS.push({
  year: 2002, subject: '数三', number: 310, kind: '解答', score: 8,
  ids: ['eig-def', 'qf-positive-crit', 'eig-ops'],
  label: '第十题',
  question: String.raw`（本题满分 8 分）设 $A$ 为 $3$ 阶实对称矩阵，且满足条件 $A^2+2A=O$，已知 $A$ 的秩 $r(A)=2$。

（1）求 $A$ 的全部特征值；

（2）当 $k$ 为何值时，矩阵 $A+kE$ 为正定矩阵，其中 $E$ 为 $3$ 阶单位矩阵。`,
  answer: String.raw`（1）$A$ 的特征值 $\lambda_1=\lambda_2=-2,\lambda_3=0$；（2）$k>2$。`,
  analysis: String.raw`【详解】（1）设 $\lambda$ 是 $A$ 的任意特征值，$\alpha$ 是 $A$ 的属于 $\lambda$ 的特征向量，根据特征值、特征向量的定义，有
$$
A\alpha=\lambda\alpha,\quad\alpha\ne 0.\tag{①}
$$
两边左乘 $A$，得
$$
A^2\alpha=\lambda A\alpha=\lambda(\lambda\alpha)=\lambda^2\alpha.\tag{②}
$$
$②+2\times①$ 得
$$
(A^2+2A)\alpha=(\lambda^2+2\lambda)\alpha.
$$
因 $A^2+2A=O$，$\alpha\ne 0$，从而上式
$$
(A^2+2A)\alpha=(\lambda^2+2\lambda)\alpha=0,
$$
所以有 $\lambda^2+2\lambda=0$，故 $A$ 的特征值 $\lambda$ 的取值范围为 $0,-2$。

因为 $A$ 是实对称矩阵，所以必相似于对角阵 $\Lambda$，且 $\Lambda$ 的主对角线上元素由 $A$ 的特征值组成，且 $r(A)=r(\Lambda)=2$，故 $A$ 的特征值中有且只有一个 $0$。
（若没有 $0$，则 $\Lambda=\begin{pmatrix}-2&&\\&-2&\\&&-2\end{pmatrix}$，$r(A)=r(\Lambda)=3$，与已知矛盾；若有两个 $0$，则 $\Lambda=\begin{pmatrix}-2&&\\&0&\\&&0\end{pmatrix}$，$r(A)=r(\Lambda)=1$，与已知矛盾；若三个全为 $0$，则 $\Lambda=\begin{pmatrix}0&&\\&0&\\&&0\end{pmatrix}$，$r(A)=r(\Lambda)=0$，与已知矛盾）。故
$$
A\sim\Lambda=\begin{pmatrix}-2&&\\&-2&\\&&0\end{pmatrix},
$$
即 $A$ 有特征值 $\lambda_1=\lambda_2=-2,\lambda_3=0$。

（2）$A+kE$ 是实对称矩阵，$A$ 有特征值 $\lambda_1=\lambda_2=-2,\lambda_3=0$，知 $A+kE$ 的特征值为 $k-2,k-2,k$。因为矩阵正定的充要条件是它的所有的特征值均大于零，故
$$
A+kE\text{ 正定}\Leftrightarrow\begin{cases}k-2>0,\\k>0\end{cases}\Leftrightarrow\begin{cases}k>2,\\k>0\end{cases}\Leftrightarrow k>2,
$$
故 $k>2$ 时 $A+kE$ 是正定矩阵。`,
  source: '《2002 年数学三试题解析》第 13 页',
});
