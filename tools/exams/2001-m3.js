// 2001 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2001 年卷；答案与解析取自《2001 年数学三真题答案解析》）
EXAMS.push({
  year: 2001, subject: '数三', number: 103, kind: '填空', score: 3,
  ids: ['mat-rank', 'det-product', 'det-elimination'],
  label: '填空题第 3 题',
  question: String.raw`设矩阵 $A=\begin{pmatrix}k&1&1&1\\1&k&1&1\\1&1&k&1\\1&1&1&k\end{pmatrix}$，且 $r(A)=3$，则 $k=$ $\underline{\qquad}$。`,
  answer: String.raw`$-3$。`,
  analysis: String.raw`【详解】方法 1：由初等变换（既可作初等行变换，也可作初等列变换）不改变矩阵的秩，故对 $A$ 进行初等变换：
$$
A=\begin{pmatrix}k&1&1&1\\1&k&1&1\\1&1&k&1\\1&1&1&k\end{pmatrix}\xrightarrow{1\text{ 行}\times(-1)\text{ 分别加到 }2,3,4\text{ 行}}\begin{pmatrix}k&1&1&1\\1-k&k-1&0&0\\1-k&0&k-1&0\\1-k&0&0&k-1\end{pmatrix}
$$
$$
\xrightarrow{2,3,4\text{ 列分别加到 }1\text{ 列}}\begin{pmatrix}k+3&1&1&1\\0&k-1&0&0\\0&0&k-1&0\\0&0&0&k-1\end{pmatrix}.
$$
可见只有当 $k=-3$ 时，$r(A)=3$。故 $k=-3$。

方法 2：由题设 $r(A)=3$，故应有四阶矩阵行列式 $|A|=0$。由
$$
|A|=\begin{vmatrix}k&1&1&1\\1&k&1&1\\1&1&k&1\\1&1&1&k\end{vmatrix}\xrightarrow{1\text{ 行}\times(-1)\text{ 分别加到 }2,3,4\text{ 行}}\begin{vmatrix}k&1&1&1\\1-k&k-1&0&0\\1-k&0&k-1&0\\1-k&0&0&k-1\end{vmatrix}
$$
$$
\xrightarrow{2,3,4\text{ 列分别加到 }1\text{ 列}}\begin{vmatrix}k+3&1&1&1\\0&k-1&0&0\\0&0&k-1&0\\0&0&0&k-1\end{vmatrix}=(k+3)(k-1)^3=0,
$$
解得 $k=1$ 或 $k=-3$。当 $k=1$ 时，
$$
A=\begin{pmatrix}1&1&1&1\\1&1&1&1\\1&1&1&1\\1&1&1&1\end{pmatrix}\xrightarrow{1\text{ 行}\times(-1)\text{ 分别加到 }2,3,4\text{ 行}}\begin{pmatrix}1&1&1&1\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix},
$$
可知此时 $r(A)=1$，不符合题意，因此一定有 $k=-3$。`,
  source: '《2001 年数学三试题解析》第 1–2 页',
});

EXAMS.push({
  year: 2001, subject: '数三', number: 203, kind: '选择', score: 3,
  ids: ['mat-elem-mat', 'mat-elem-relation', 'mat-inv-method'],
  label: '选择题第 3 题',
  question: String.raw`设 $A=\begin{pmatrix}a_{11}&a_{12}&a_{13}&a_{14}\\a_{21}&a_{22}&a_{23}&a_{24}\\a_{31}&a_{32}&a_{33}&a_{34}\\a_{41}&a_{42}&a_{43}&a_{44}\end{pmatrix}$，$B=\begin{pmatrix}a_{14}&a_{13}&a_{12}&a_{11}\\a_{24}&a_{23}&a_{22}&a_{21}\\a_{34}&a_{33}&a_{32}&a_{31}\\a_{44}&a_{43}&a_{42}&a_{41}\end{pmatrix}$，$P_1=\begin{pmatrix}0&0&0&1\\0&1&0&0\\0&0&1&0\\1&0&0&0\end{pmatrix}$，$P_2=\begin{pmatrix}1&0&0&0\\0&0&1&0\\0&1&0&0\\0&0&0&1\end{pmatrix}$，其中 $A$ 可逆，则 $B^{-1}$ 等于（　　）

（A）$A^{-1}P_1P_2$　　（B）$P_1A^{-1}P_2$　　（C）$P_1P_2A^{-1}$　　（D）$P_2A^{-1}P_1$`,
  answer: String.raw`（C）`,
  analysis: String.raw`【详解】由所给矩阵 $A,B$ 观察，将 $A$ 的 $2,3$ 列互换，再将 $A$ 的 $1,4$ 列互换，可得 $B$。根据初等矩阵变换的性质，知将 $A$ 的 $2,3$ 列互换相当于在矩阵 $A$ 的右侧乘以 $E_{23}$，将 $A$ 的 $1,4$ 列互换相当于在矩阵 $A$ 的右侧乘以 $E_{14}$，即
$$
AE_{23}E_{14}=B,\quad\text{其中 }E_{23}=\begin{pmatrix}1&0&0&0\\0&0&1&0\\0&1&0&0\\0&0&0&1\end{pmatrix},\ E_{14}=\begin{pmatrix}0&0&0&1\\0&1&0&0\\0&0&1&0\\1&0&0&0\end{pmatrix}.
$$
由题设条件知 $P_1=E_{14},P_2=E_{23}$，因此 $B=AP_2P_1$。

由于对初等矩阵 $E_{ij}$ 有 $E_{ij}^{-1}=E_{ij}$，故 $P_1^{-1}=P_1,P_2^{-1}=P_2$。

因此，由 $B=AP_2P_1$ 及逆矩阵的运算规律，有
$$
B^{-1}=(AP_2P_1)^{-1}=P_1^{-1}P_2^{-1}A^{-1}=P_1P_2A^{-1}.
$$
应选（C）。`,
  source: '《2001 年数学三试题解析》第 5 页',
});

EXAMS.push({
  year: 2001, subject: '数三', number: 204, kind: '选择', score: 3,
  ids: ['eq-homo-sol', 'mat-rank', 'eq-rank-relation'],
  label: '选择题第 4 题',
  question: String.raw`设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维列向量。若 $r\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}=r(A)$，则线性方程组（　　）

（A）$AX=\alpha$ 必有无穷多解　　（B）$AX=\alpha$ 必有唯一解

（C）$\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}\begin{pmatrix}X\\y\end{pmatrix}=0$ 仅有零解　　（D）$\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}\begin{pmatrix}X\\y\end{pmatrix}=0$ 必有非零解`,
  answer: String.raw`（D）`,
  analysis: String.raw`【详解】由题设，$A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维列向量，即 $\alpha^{\mathrm{T}}$ 是一维行向量，可知 $\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}$ 是 $n+1$ 阶矩阵。显然有
$$
r\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}=r(A)\le n<n+1,
$$
即系数矩阵 $\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}$ 不是列满秩，由齐次线性方程组有非零解的充要条件：系数矩阵非列满秩，可知齐次线性方程组
$$
\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}\begin{pmatrix}X\\y\end{pmatrix}=0
$$
必有非零解，应选（D）。`,
  source: '《2001 年数学三试题解析》第 5–6 页',
});

EXAMS.push({
  year: 2001, subject: '数三', number: 309, kind: '解答', score: 9,
  ids: ['eig-orth-diag', 'eq-nonhomo-crit', 'eig-symmetric'],
  label: '第九题',
  question: String.raw`（本题满分 9 分）设矩阵 $A=\begin{pmatrix}1&1&a\\1&a&1\\a&1&1\end{pmatrix}$，$\beta=\begin{pmatrix}1\\1\\-2\end{pmatrix}$。已知线性方程组 $AX=\beta$ 有解但不唯一，试求

（1）$a$ 的值；

（2）正交矩阵 $Q$，使 $Q^{\mathrm{T}}AQ$ 为对角矩阵。`,
  answer: String.raw`（1）$a=-2$；（2）$Q=\begin{pmatrix}\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&0&\dfrac{2}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\end{pmatrix}$，$Q^{\mathrm{T}}AQ=\begin{pmatrix}0&0&0\\0&3&0\\0&0&-3\end{pmatrix}$。`,
  analysis: String.raw`【详解】（1）线性方程组 $AX=\beta$ 有解但不唯一，即有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n=3$，将增广矩阵作初等行变换，得
$$
\overline{A}=\begin{pmatrix}1&1&a&\mid&1\\1&a&1&\mid&1\\a&1&1&\mid&-2\end{pmatrix}\xrightarrow[3\text{ 行}-1\text{ 行}\times a]{2\text{ 行}-1\text{ 行}}\begin{pmatrix}1&1&a&\mid&1\\0&a-1&1-a&\mid&0\\0&1-a&1-a^2&\mid&-2-a\end{pmatrix}
$$
$$
\xrightarrow{2\text{ 行加到 }3\text{ 行}}\begin{pmatrix}1&1&a&\mid&1\\0&a-1&1-a&\mid&0\\0&0&-(a-1)(a+2)&\mid&-(a+2)\end{pmatrix}.
$$
因为方程组 $AX=\beta$ 有解但不唯一，所以 $r(A)=r(\overline{A})<3$，故 $a=-2$。

（2）由（1），有
$$
A=\begin{pmatrix}1&1&-2\\1&-2&1\\-2&1&1\end{pmatrix}.
$$
由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&2\\-1&\lambda+2&-1\\2&-1&\lambda-1\end{vmatrix}\xrightarrow{2,3\text{ 列加到 }1\text{ 列}}\begin{vmatrix}\lambda&-1&2\\\lambda&\lambda+2&-1\\\lambda&-1&\lambda-1\end{vmatrix}
$$
$$
\xrightarrow{1\text{ 列提出公因子 }\lambda}\lambda\begin{vmatrix}1&-1&2\\1&\lambda+2&-1\\1&-1&\lambda-1\end{vmatrix}\xrightarrow{1\text{ 行}\times(-1)\text{ 分别加到 }2,3\text{ 行}}\lambda\begin{vmatrix}1&-1&2\\0&\lambda+3&-3\\0&0&\lambda-3\end{vmatrix}
=\lambda(\lambda+3)(\lambda-3)=0,
$$
故 $A$ 的特征值为 $\lambda_1=0,\lambda_2=-3,\lambda_3=3$。

当 $\lambda_1=0$ 时，
$$
(0E-A)=\begin{pmatrix}-1&-1&2\\-1&2&-1\\2&-1&-1\end{pmatrix}\xrightarrow[1\text{ 行的 }(-1),2\text{ 倍分别加到 }2,3\text{ 行}]{}\begin{pmatrix}-1&-1&2\\0&3&-3\\0&-3&3\end{pmatrix}\xrightarrow[2\text{ 行加到 }3\text{ 行}]{}\begin{pmatrix}-1&-1&2\\0&3&-3\\0&0&0\end{pmatrix}.
$$
于是得方程组 $(0E-A)x=0$ 的同解方程组为
$$
\begin{cases}x_1+x_2-2x_3=0,\\3x_2-3x_3=0.\end{cases}
$$
可见 $r(0E-A)=2$，基础解系个数为 $n-r(0E-A)=3-2=1$，故有 $1$ 个自由未知量，选 $x_2$ 为自由未知量，取 $x_2=1$，解得对应的特征向量为 $x_1=(1,1,1)^{\mathrm{T}}$。

当 $\lambda=3$ 时，
$$
(3E-A)=\begin{pmatrix}2&-1&2\\-1&5&-1\\2&-1&2\end{pmatrix}\xrightarrow[2\text{ 行互换}]{1,2}\begin{pmatrix}-1&5&-1\\2&-1&2\\2&-1&2\end{pmatrix}\xrightarrow[3\text{ 行}-2\text{ 行}]{1\text{ 行}\times 2\text{ 加到 }2\text{ 行}}\begin{pmatrix}-1&5&-1\\0&9&0\\0&0&0\end{pmatrix}.
$$
于是得方程组 $(3E-A)x=0$ 的同解方程组为
$$
\begin{cases}-x_1+5x_2-x_3=0,\\9x_2=0.\end{cases}
$$
可见 $r(3E-A)=2$，基础解系个数为 $1$，选 $x_1$ 为自由未知量，取 $x_1=1$，解得对应的特征向量为 $x_2=(1,0,-1)^{\mathrm{T}}$。

当 $\lambda=-3$ 时，
$$
(-3E-A)=\begin{pmatrix}-4&-1&2\\-1&-1&-1\\2&-1&-4\end{pmatrix}\xrightarrow[1,2\text{ 行互换}]{}\begin{pmatrix}-1&-1&-1\\-4&-1&2\\2&-1&-4\end{pmatrix}\xrightarrow[1\text{ 行 }(-4)\text{ 倍、}2\text{ 倍分别加到 }2,3\text{ 行}]{}\begin{pmatrix}-1&-1&-1\\0&3&6\\0&-3&-6\end{pmatrix}\xrightarrow[2\text{ 行加到 }3\text{ 行}]{}\begin{pmatrix}-1&-1&-1\\0&3&6\\0&0&0\end{pmatrix}.
$$
于是得方程组 $(-3E-A)x=0$ 的同解方程组为
$$
\begin{cases}-x_1-x_2-x_3=0,\\3x_2+6x_3=0.\end{cases}
$$
可见 $r(-3E-A)=2$，基础解系个数为 $1$，选 $x_3$ 为自由未知量，取 $x_3=2$，解得对应的特征向量为 $x_3=(-1,2,-1)^{\mathrm{T}}$。

由于 $A$ 是实对称矩阵，其不同特征值的特征向量相互正交，故这三个不同特征值的特征向量相互正交，只需将 $x_1,x_2,x_3$ 单位化，
$$
\beta_1=\frac{x_1}{|x_1|}=\frac{1}{\sqrt{3}}\begin{pmatrix}1\\1\\1\end{pmatrix},\quad \beta_2=\frac{x_2}{|x_2|}=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\0\\-1\end{pmatrix},\quad \beta_3=\frac{x_3}{|x_3|}=\frac{1}{\sqrt{6}}\begin{pmatrix}-1\\2\\-1\end{pmatrix},
$$
其中 $|x_1|=\sqrt{1^2+1^2+1^2}=\sqrt{3}$，$|x_2|=\sqrt{1^2+(-1)^2}=\sqrt{2}$，$|x_3|=\sqrt{(-1)^2+2^2+(-1)^2}=\sqrt{6}$。

令
$$
Q=(\beta_1,\beta_2,\beta_3)=\begin{pmatrix}\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&0&\dfrac{2}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\end{pmatrix},
$$
则有
$$
Q^{\mathrm{T}}AQ=Q^{-1}AQ=\begin{pmatrix}0&0&0\\0&3&0\\0&0&-3\end{pmatrix}.
$$`,
  source: '《2001 年数学三试题解析》第 12–14 页',
});

EXAMS.push({
  year: 2001, subject: '数三', number: 310, kind: '解答', score: 8,
  ids: ['qf-canonical', 'qf-inertia-law', 'qf-congruent'],
  label: '第十题',
  question: String.raw`（本题满分 8 分）设 $A$ 为 $n$ 阶实对称矩阵，$r(A)=n$，$A_{ij}$ 是 $A=(a_{ij})_{n\times n}$ 中元素 $a_{ij}$ 的代数余子式 $(i,j=1,2,\cdots,n)$，二次型
$$
f(x_1,x_2,\cdots,x_n)=\sum_{i=1}^n\sum_{j=1}^n\frac{A_{ij}}{|A|}x_ix_j.
$$
（1）记 $X=(x_1,x_2,\cdots,x_n)^{\mathrm{T}}$，把 $f(x_1,x_2,\cdots,x_n)$ 写成矩阵形式，并证明二次型 $f(X)$ 的矩阵为 $A^{-1}$；

（2）二次型 $g(X)=X^{\mathrm{T}}AX$ 与 $f(X)$ 的规范形是否相同？说明理由。`,
  answer: String.raw`（1）$f(X)=X^{\mathrm{T}}A^{-1}X$，即 $f(X)$ 的矩阵为 $A^{-1}$；（2）相同，理由见解析。`,
  analysis: String.raw`【详解】（1）由题设条件，
$$
f(x_1,x_2,\cdots,x_n)=\sum_{i=1}^n\sum_{j=1}^n\frac{A_{ij}}{|A|}x_ix_j=\frac{1}{|A|}\sum_{i=1}^n\sum_{j=1}^n A_{ij}x_ix_j=\frac{1}{|A|}\sum_{i=1}^n x_i\sum_{j=1}^n A_{ij}x_j
$$
$$
=\frac{1}{|A|}\sum_{i=1}^n x_i(A_{i1}x_1+A_{i2}x_2+\cdots+A_{in}x_n)=\frac{1}{|A|}\sum_{i=1}^n x_i(A_{i1},A_{i2},\cdots,A_{in})\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}
$$
$$
=\frac{1}{|A|}(x_1,x_2,\cdots,x_n)\begin{pmatrix}A_{11}&A_{12}&\cdots&A_{1n}\\A_{21}&A_{22}&\cdots&A_{2n}\\\vdots&\vdots&&\vdots\\A_{n1}&A_{n2}&\cdots&A_{nn}\end{pmatrix}\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}
=\frac{1}{|A|}(x_1,x_2,\cdots,x_n)(A^*)^{\mathrm{T}}\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}
$$
$$
=\frac{1}{|A|}X^{\mathrm{T}}(A^*)^{\mathrm{T}}X=\frac{1}{|A|}X^{\mathrm{T}}A^*X=X^{\mathrm{T}}A^{-1}X,
$$
其中 $(*)$ 的理由：$A$ 是可逆的实对称矩阵，故 $(A^{-1})^{\mathrm{T}}=(A^{\mathrm{T}})^{-1}=A^{-1}$，因此由实对称的定义知 $A^{-1}$ 也是实对称矩阵，又由伴随矩阵的性质 $A^*A=|A|E$，知 $A^*=|A|A^{-1}$，因此 $A^*$ 也是实对称矩阵，$(A^*)^{\mathrm{T}}=A^*$，故 $(*)$ 成立。

（2）因为 $(A^{-1})^{\mathrm{T}}AA^{-1}=A^{-1}$，所以由合同的定义知 $A$ 与 $A^{-1}$ 合同。

由实对称矩阵 $A$ 与 $B$ 合同的充要条件：二次型 $X^{\mathrm{T}}AX$ 与 $X^{\mathrm{T}}BX$ 有相同的正、负惯性指数，可知 $g(X)=X^{\mathrm{T}}AX$ 与 $f(X)$ 有相同的正、负惯性指数，故它们有相同的规范形。`,
  source: '《2001 年数学三试题解析》第 14–15 页',
});
