// 2001 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 32–34 页；答案与解析取自《1989—2004 考研数二真题答案解析》）
EXAMS.push({
  year: 2001, subject: '数二', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ['eq-nonhomo-crit', 'eq-rank-relation'],
  question: String.raw`设方程组 $\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\1\\-2\end{pmatrix}$ 有无穷多解，则 $a=$ ________.`,
  answer: '$-2$',
  analysis: String.raw`方法1：利用初等行变换化增广矩阵为阶梯形，有
$$
\overline{A}=\begin{pmatrix}a&1&1&:&1\\1&a&1&:&1\\1&1&a&:&-2\end{pmatrix}\xrightarrow{1,3\text{行互换}}\begin{pmatrix}1&1&a&:&-2\\1&a&1&:&1\\a&1&1&:&1\end{pmatrix}
$$
$$
\xrightarrow[1\text{行的}(-1),(-a)\text{倍分别加到}2,3\text{行}]{}\begin{pmatrix}1&1&a&:&-2\\0&a-1&1-a&:&3\\0&1-a&1-a^2&:&1+2a\end{pmatrix}
$$
$$
\xrightarrow{2\text{行加到}3\text{行}}\begin{pmatrix}1&1&a&:&-2\\0&a-1&1-a&:&3\\0&0&(1-a)(a+2)&:&2(2+a)\end{pmatrix}
$$
由非齐次线性方程组有无穷多解的充要条件：设 $A$ 是 $m\times n$ 矩阵，方程组 $Ax=b$ 有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$. 可见，只有当 $a=-2$ 时才有秩 $r(\overline{A})=r(A)=2<3$，对应方程组有无穷多个解.

方法2：设 $A$ 是 $m\times n$ 矩阵，方程组 $Ax=b$ 有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$，则方程组
$$
\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\1\\-2\end{pmatrix}
$$
有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<3$. 从而有 $|A|=0$，即
$$
|A|=\begin{vmatrix}a&1&1\\1&a&1\\1&1&a\end{vmatrix}\xrightarrow{2,3\text{列分别加到}1\text{列}}\begin{vmatrix}a+2&a+2&a+2\\1&a&1\\1&1&a\end{vmatrix}\xrightarrow{1\text{行提出}(a+2)}(a+2)\begin{vmatrix}1&1&1\\1&a&1\\1&1&a\end{vmatrix}
$$
$$
\xrightarrow{1\text{行}\times(-1)\text{分别加到}2,3\text{行}}(a+2)\begin{vmatrix}1&1&1\\0&a-1&0\\0&0&a-1\end{vmatrix}=(-1)^{1+1}(a+2)\begin{vmatrix}a-1&0\\0&a-1\end{vmatrix}=(a+2)(a-1)^2=0,
$$
则，$a=1$ 或 $a=-2$.

当 $a=1$ 时，
$$
\overline{A}=\begin{pmatrix}1&1&1&:&1\\1&1&1&:&1\\1&1&1&:&-2\end{pmatrix}\xrightarrow{1\text{行}\times(-1)\text{分别加到}2,3\text{行}}\begin{pmatrix}1&1&1&:&1\\0&0&0&:&0\\0&0&0&:&-3\end{pmatrix}
$$
可见 $r(A)=1\ne r(\overline{A})=2$，原方程组无解.

当 $a=-2$ 时，有
$$
\overline{A}=\begin{pmatrix}-2&1&1&:&1\\1&-2&1&:&1\\1&1&-2&:&-2\end{pmatrix}\xrightarrow{1,3\text{行互换}}\begin{pmatrix}1&1&-2&:&-2\\1&-2&1&:&1\\-2&1&1&:&1\end{pmatrix}
$$
$$
\xrightarrow{2\text{行}-1\text{行}}\begin{pmatrix}1&1&-2&:&-2\\0&-3&3&:&3\\-2&1&1&:&1\end{pmatrix}\xrightarrow{1\text{行}\times2\text{加到}3\text{行}}\begin{pmatrix}1&1&-2&:&-2\\0&-3&3&:&3\\0&3&-3&:&-3\end{pmatrix}
$$
$$
\xrightarrow{3\text{行}+2\text{行}}\begin{pmatrix}1&1&-2&:&-2\\0&-3&3&:&3\\0&0&0&:&0\end{pmatrix}\xrightarrow{2\text{行}\div(-3)}\begin{pmatrix}1&1&-2&:&-2\\0&1&-1&:&-1\\0&0&0&:&0\end{pmatrix}
$$
可知，$r(\overline{A})=r(A)=2<3$，

故当 $a=-2$ 时，原方程组有无穷多解.`,
  source: '《1989—2004 考研数二真题答案解析》第 142–143 页',
});

EXAMS.push({
  year: 2001, subject: '数二', number: 311, kind: '解答', score: 6, label: '第十一题',
  ids: ['mat-mult', 'mat-eq-solve'],
  question: String.raw`已知矩阵 $A=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}$，$B=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}$，且矩阵 $X$ 满足 $AXA+BXB=AXB+BXA+E$，其中 $E$ 是 3 阶单位矩阵，求 $X$.`,
  answer: String.raw`$$
X=\begin{pmatrix}1&2&5\\0&1&2\\0&0&1\end{pmatrix}.
$$`,
  analysis: String.raw`由题设，原方程可化为
$$
AX(A-B)+BX(B-A)=E,\ \text{即}\ (A-B)X(A-B)=E.
$$
其中，
$$
A-B=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}-\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}=\begin{pmatrix}1&-1&-1\\0&1&-1\\0&0&1\end{pmatrix}
$$
因为 $|A-B|=\begin{vmatrix}1&-1&-1\\0&1&-1\\0&0&1\end{vmatrix}=(-1)^{1+1}\begin{vmatrix}1&-1\\0&1\end{vmatrix}=1\ne0$，

故由 $n$ 阶矩阵 $A$ 可逆的充要条件 $|A|\ne0$，知矩阵 $A-B$ 可逆，用初等行变换求 $(A-B)^{-1}$：
$$
(A-B,E)=\begin{pmatrix}1&-1&-1&:&1&0&0\\0&1&-1&:&0&1&0\\0&0&1&:&0&0&1\end{pmatrix}\xrightarrow{3\text{行分别加到}1,2\text{行}}\begin{pmatrix}1&-1&0&:&1&0&1\\0&1&0&:&0&1&1\\0&0&1&:&0&0&1\end{pmatrix}
$$
$$
\xrightarrow{2\text{行加到}1\text{行}}\begin{pmatrix}1&0&0&:&1&1&2\\0&1&0&:&0&1&1\\0&0&1&:&0&0&1\end{pmatrix}
$$
故而
$$
(A-B)^{-1}=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix},
$$
于是，等式 $(A-B)X(A-B)=E$ 两边左、右乘 $(A-B)^{-1}$ 可得
$$
X=\left[(A-B)^{-1}\right]^2=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}=\begin{pmatrix}1&2&5\\0&1&2\\0&0&1\end{pmatrix}.
$$`,
  source: '《1989—2004 考研数二真题答案解析》第 153–154 页',
});

EXAMS.push({
  year: 2001, subject: '数二', number: 312, kind: '解答', score: 6, label: '第十二题',
  ids: ['eq-homo-structure', 'vec-indep-crit'],
  question: String.raw`已知 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是线性方程组 $Ax=0$ 的一个基础解系，若 $\beta_1=\alpha_1+t\alpha_2$，$\beta_2=\alpha_2+t\alpha_3$，$\beta_3=\alpha_3+t\alpha_4$，$\beta_4=\alpha_4+t\alpha_1$，讨论实数 $t$ 满足什么关系时，$\beta_1,\beta_2,\beta_3,\beta_4$ 也是 $Ax=0$ 的一个基础解系.`,
  answer: String.raw`当 $t\ne\pm1$ 时，$\beta_1,\beta_2,\beta_3,\beta_4$ 也是方程组 $Ax=0$ 的一个基础解系.`,
  analysis: String.raw`由题设知，$\beta_1,\beta_2,\cdots,\beta_s$ 均为 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 的线性组合，齐次方程组当有非零解时，解向量的任意组合仍是该齐次方程组的解向量，所以 $\beta_1,\beta_2,\cdots,\beta_s$ 均为 $Ax=0$ 的解.

下面证明 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关. 设
$$
k_1\beta_1+k_2\beta_2+\cdots+k_s\beta_s=0\tag{*}
$$
把 $\beta_1=t_1\alpha_1+t_2\alpha_2,\beta_2=t_1\alpha_2+t_2\alpha_3,\cdots,\beta_s=t_1\alpha_s+t_2\alpha_1$ 代入整理得，
$$
(t_1k_1+t_2k_s)\alpha_1+(t_2k_1+t_1k_2)\alpha_2+\cdots+(t_2k_{s-1}+t_1k_s)\alpha_s=0
$$
由 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 为线性方程组 $Ax=0$ 的一个基础解系，知 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，由线性无关的定义，知 $(*)$ 中其系数全为零，即
$$
\begin{cases}
t_1k_1+t_2k_s=0\\
t_2k_1+t_1k_2=0\\
\vdots\\
t_2k_{s-1}+t_1k_s=0
\end{cases}
$$
其系数行列式
$$
\begin{vmatrix}t_1&0&0&0&t_2\\t_2&t_1&0&\cdots&0\\0&t_2&t_1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&t_2&t_1\end{vmatrix}\xrightarrow{(*)}\begin{vmatrix}t_1&0&0&0&t_2\\0&t_1&0&\cdots&-\frac{t_2^2}{t_1}\\0&0&t_1&\cdots&\frac{t_2^3}{t_1^2}\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&0&t_1+(-1)^{s+1}\frac{t_2^s}{t_1^{s-1}}\end{vmatrix}=t_1^{s-1}\left(t_1+(-1)^{s+1}\frac{t_2^s}{t_1^{s-1}}\right)=t_1^s+(-1)^{s+1}t_2^s
$$
（$(*)$ 变换：把原行列式第 $i$ 行乘以 $-\frac{t_2}{t_1}$ 加到第 $i+1$ 行，其中 $i=1,\cdots,s-1$.）

由齐次线性方程组只有零解的充要条件，可见，当 $t_1^s+(-1)^{s+1}t_2^s\ne0$，即 $t_1^s\ne(-t_2)^s$，即当 $s$ 为偶数，$t_1\ne\pm t_2$；当 $s$ 为奇数，$t_1\ne t_2$ 时，上述方程组只有零解 $k_1=k_2=\cdots=k_s=0$，因此向量组 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关，

故当 $\begin{cases}s=2n,&t_1\ne\pm t_2\\s=2n+1,&t_1\ne t_2\end{cases}$ 时，$\beta_1,\beta_2,\cdots,\beta_s$ 也是方程组 $Ax=0$ 的基础解系.`,
  source: '《1989—2004 考研数二真题答案解析》第 154–155 页',
});
