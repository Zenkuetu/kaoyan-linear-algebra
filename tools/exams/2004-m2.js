// 2004 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 41–43 页；答案与解析取自《1989—2004 考研数二真题答案解析》）
EXAMS.push({
  year: 2004, subject: '数二', number: 6, kind: '填空', score: 4,
  ids: ['mat-adj-identity', 'det-product'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&1\end{pmatrix}$，矩阵 $B$ 满足 $ABA^*=2BA^*+E$，其中 $A^*$ 为 $A$ 的伴随矩阵，$E$ 是单位矩阵，则 $|B|=$ ________.`,
  answer: '$\frac{1}{9}$',
  analysis: String.raw`方法1：已知等式两边同时右乘 $A$，得 $ABA^*A=2BA^*A+A$，

由伴随矩阵的运算规律：$A^*A=AA^*=|A|E$，有 $AB|A|=2B|A|+A$，而
$$
|A|=\begin{vmatrix}2&1&0\\1&2&0\\0&0&1\end{vmatrix}=(-1)^{3+3}\begin{vmatrix}2&1\\1&2\end{vmatrix}=2\times2-1\times1=3,
$$
于是有 $3AB=6B+A$，移项、合并有 $(3A-6E)B=A$，再两边取行列式，由方阵乘积的行列式的性质：矩阵乘积的行列式等于矩阵行列式的积，有
$$
|(3A-6E)B|=|3A-6E||B|=|A|=3,
$$
而
$$
|3A-6E|=\begin{vmatrix}6&3&0\\3&6&0\\0&0&3\end{vmatrix}-\begin{vmatrix}6&0&0\\0&6&0\\0&0&6\end{vmatrix}=\begin{vmatrix}0&3&0\\3&0&0\\0&0&-3\end{vmatrix}=(-1)^{3+3}(-3)\begin{vmatrix}0&3\\3&0\end{vmatrix}=(-3)\times3\times3=27,
$$
故所求行列式为 $|B|=\frac{|A|}{|3A-6E|}=\frac{3}{27}=\frac{1}{9}$.

方法2：由题设条件 $ABA^*=2BA^*+E$，得 $ABA^*-2BA^*=(A-2E)BA^*=E$.

由方阵乘积行列式的性质：矩阵乘积的行列式等于矩阵行列式的积，故两边取行列式，有 $|(A-2E)BA^*|=|A-2E||B||A^*|=|E|=1$.

其中 $|A|=\begin{vmatrix}2&1&0\\1&2&0\\0&0&1\end{vmatrix}=(-1)^{3+3}\begin{vmatrix}2&1\\1&2\end{vmatrix}=2\times2-1\times1=3$；

由伴随矩阵行列式的公式：若 $A$ 是 $n$ 阶矩阵，则 $|A^*|=|A|^{n-1}$.

所以，$|A^*|=|A|^{3-1}=|A|^2=9$；又 $|A-2E|=\begin{vmatrix}0&1&0\\1&0&0\\0&0&1\end{vmatrix}=(-1)^{1+2}\begin{vmatrix}1&0\\0&1\end{vmatrix}=1$.

故 $|B|=\frac{1}{|A-2E||A^*|}=\frac{1}{9}$.`,
  source: '《1989—2004 考研数二真题答案解析》第 188–189 页',
});

EXAMS.push({
  year: 2004, subject: '数二', number: 13, kind: '选择', score: 4,
  ids: ['mat-elem-mat', 'mat-elem-relation'],
  question: String.raw`设 $A$ 是 3 阶方阵，将 $A$ 的第 1 列与第 2 列交换得 $B$，再把 $B$ 的第 2 列加到第 3 列得 $C$，则满足 $AQ=C$ 的可逆矩阵 $Q$ 为（　）

（A）$\begin{pmatrix}0&1&0\\1&0&0\\1&0&1\end{pmatrix}$.
（B）$\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}$.
（C）$\begin{pmatrix}0&1&0\\1&0&0\\0&1&1\end{pmatrix}$.
（D）$\begin{pmatrix}0&1&1\\1&0&0\\0&0&1\end{pmatrix}$.`,
  answer: '（D）',
  analysis: String.raw`由题设，将 $A$ 的第 1 列与第 2 列交换，即
$$
AE_{12}=A\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}=B,
$$
将 $B$ 的第 2 列加到第 3 列，即
$$
B\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}=A\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}=A\begin{pmatrix}0&1&1\\1&0&0\\0&0&1\end{pmatrix}=AQ.
$$
故 $Q=\begin{pmatrix}0&1&1\\1&0&0\\0&0&1\end{pmatrix}$，应选（D）.`,
  source: '《1989—2004 考研数二真题答案解析》第 193 页',
});

EXAMS.push({
  year: 2004, subject: '数二', number: 14, kind: '选择', score: 4,
  ids: ['mat-rank-ineq', 'eq-AX-O-AB-O'],
  question: String.raw`设 $A,B$ 为满足 $AB=O$ 的任意两个非零矩阵，则必有（　）

（A）$A$ 的列向量组线性相关，$B$ 的行向量组线性相关.
（B）$A$ 的列向量组线性相关，$B$ 的列向量组线性相关.
（C）$A$ 的行向量组线性相关，$B$ 的行向量组线性相关.
（D）$A$ 的行向量组线性相关，$B$ 的列向量组线性相关.`,
  answer: '（A）',
  analysis: String.raw`方法1：由矩阵秩的重要公式：若 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times p$ 矩阵，如果 $AB=0$，则 $r(A)+r(B)\le n$

设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times s$ 矩阵，由 $AB=0$ 知，$r(A)+r(B)\le n$，其中 $n$ 是矩阵 $A$ 的列数，也是 $B$ 的行数

因 $A$ 为非零矩阵，故 $r(A)\ge1$，因 $r(A)+r(B)\le n$，从而 $r(B)\le n-1<n$，由向量组线性相关的充分必要条件向量组的秩小于向量的个数，知 $B$ 的行向量组线性相关.

因 $B$ 为非零矩阵，故 $r(B)\ge1$，因 $r(A)+r(B)\le n$，从而 $r(A)\le n-1<n$，由向量组线性相关的充分必要条件向量组的秩小于向量的个数，知 $A$ 的列向量组线性相关. 故应选（A）.

方法2：设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times s$ 矩阵，将 $B$ 按列分块，由 $AB=0$ 得，
$$
AB=A[\beta_1,\beta_2,\cdots,\beta_s]=0,\ A\beta_i=0,\ i=1,2,\cdots,s.
$$
因 $B$ 是非零矩阵，故存在 $\beta_i\ne0$，使得 $A\beta_i=0$. 即齐次线性方程组 $Ax=0$ 有非零解. 由齐次线性方程组 $Ax=0$ 有非零解的充要条件 $r(A)<n$，知 $r(A)<n$. 所以 $A$ 的列向量组线性相关.

又 $(AB)^{\mathrm{T}}=B^{\mathrm{T}}A^{\mathrm{T}}=0$，将 $A^{\mathrm{T}}$ 按列分块，得
$$
B^{\mathrm{T}}A^{\mathrm{T}}=B^{\mathrm{T}}[\alpha_1^{\mathrm{T}},\alpha_2^{\mathrm{T}},\cdots,\alpha_m^{\mathrm{T}}]=0,\ B^{\mathrm{T}}\alpha_i^{\mathrm{T}}=0,\ i=1,2,\cdots,m.
$$
因 $A$ 是非零矩阵，故存在 $\alpha_i^{\mathrm{T}}\ne0$，使得 $B^{\mathrm{T}}\alpha_i^{\mathrm{T}}=0$，即齐次线性方程组 $Bx=0$ 有非零解. 由齐次线性方程组 $Bx=0$ 有非零解的充要条件，知 $B^{\mathrm{T}}$ 的列向量组线性相关，由 $B^{\mathrm{T}}$ 是 $B$ 行列互换得到的，从而 $B$ 的行向量组线性相关，故应选（A）.

方法3：设 $A=(a_{ij})_{m\times n},B=(b_{ij})_{n\times s}$，将 $A$ 按列分块，记 $A=(A_1\ A_2\ \cdots\ A_n)$
$$
AB=0\Rightarrow(A_1\ A_2\ \cdots\ A_n)\begin{pmatrix}b_{11}&b_{12}&\cdots&b_{1s}\\b_{21}&b_{22}&\cdots&b_{2s}\\\cdot&\cdot&\cdots&\cdot\\b_{n1}&b_{n2}&\cdots&b_{ns}\end{pmatrix}=(b_{11}A_1+\cdots+b_{n1}A_n,\ \cdots,\ b_{1s}A_1+\cdots+b_{ns}A_n)=0\tag{1}
$$
由于 $B\ne0$，所以至少有一个 $b_{ij}\ne0$（$1\le i\le n,1\le j\le s$）. 又由(1)知，
$$
b_{1j}A_1+b_{2j}A_2+\cdots+b_{ij}A_i+\cdots+b_{nj}A_n=0,
$$
所以 $A_1,A_2,\cdots,A_n$ 线性相关. 即 $A$ 的列向量组线性相关.

（向量组线性相关的定义：如果对 $m$ 个向量 $\alpha_1,\alpha_2,\cdots,\alpha_m\in R^n$，有 $m$ 个不全为零的数 $k_1,k_2,\cdots,k_m\in R$，使 $k_1\alpha_1+k_2\alpha_2+\cdots+k_m\alpha_m=0$ 成立，则称 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 线性相关.）

又将 $B$ 按行分块，记 $B=\begin{pmatrix}B_1\\B_2\\\vdots\\B_n\end{pmatrix}$，同样，
$$
AB=0\Rightarrow\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\cdot&\cdot&\cdots&\cdot\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}\begin{pmatrix}B_1\\B_2\\\vdots\\B_n\end{pmatrix}=\begin{pmatrix}a_{11}B_1+a_{12}B_2+\cdots+a_{1n}B_n\\a_{21}B_1+a_{22}B_2+\cdots+a_{2n}B_n\\\cdots\\a_{m1}B_1+a_{m2}B_2+\cdots+a_{mn}B_n\end{pmatrix}=0
$$
由于 $A\ne0$，则至少存在一个 $a_{ij}\ne0$（$1\le i\le m,1\le j\le n$），使
$$
a_{i1}B_1+a_{i2}B_2+\cdots+a_{ij}B_j+\cdots+a_{in}B_n=0,
$$
由向量组线性相关的定义知，$B_1,B_2,\cdots,B_n$ 线性相关，即 $B$ 的行向量组线性相关，故应选（A）.

方法4：用排除法. 取满足题设条件的 $A,B$.

取 $A=\begin{pmatrix}1&0&0\\1&0&0\end{pmatrix}\ne0$，$B=\begin{pmatrix}0&0\\1&0\\0&1\end{pmatrix}\ne0$，有 $AB=\begin{pmatrix}1&0&0\\1&0&0\end{pmatrix}\begin{pmatrix}0&0\\1&0\\0&1\end{pmatrix}=0$，

$A$ 的行向量组，列向量组均线性相关，但 $B$ 的列向量组线性无关，故（B），（D）不成立.

又取 $A=\begin{pmatrix}0&1&0\\0&0&1\end{pmatrix}\ne0$，$B=\begin{pmatrix}1&1\\0&0\\0&0\end{pmatrix}\ne0$，有 $AB=\begin{pmatrix}0&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&1\\0&0\\0&0\end{pmatrix}=0$，

$A$ 的行向量组线性无关，$B$ 的列向量组线性相关，故（C）不成立. 由排除法知应选（A）.`,
  source: '《1989—2004 考研数二真题答案解析》第 193–195 页',
});

EXAMS.push({
  year: 2004, subject: '数二', number: 22, kind: '解答', score: 9,
  ids: ['eq-homo-structure', 'eq-homo-sol'],
  question: String.raw`设有齐次线性方程组
$$
\begin{cases}
(1+a)x_1+x_2+x_3+x_4=0,\\
2x_1+(2+a)x_2+2x_3+2x_4=0,\\
3x_1+3x_2+(3+a)x_3+3x_4=0,\\
4x_1+4x_2+4x_3+(4+a)x_4=0,
\end{cases}
$$
试问 $a$ 取何值时，该方程组有非零解，并求出其通解.`,
  answer: String.raw`$a=0$ 或 $a=-10$ 时方程组有非零解. 当 $a=0$ 时，通解为 $x=k_1(-1,1,0,0)^{\mathrm{T}}+k_2(-1,0,1,0)^{\mathrm{T}}+k_3(-1,0,0,1)^{\mathrm{T}}$（$k_1,k_2,k_3$ 为任意常数）；当 $a=-10$ 时，通解为 $x=k(1,2,3,4)^{\mathrm{T}}$（$k$ 为任意常数）.`,
  analysis: String.raw`方法1：对方程组的系数矩阵 $A$ 作初等行变换，有
$$
A=\begin{pmatrix}1+a&1&1&\cdots&1\\2&2+a&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n+a\end{pmatrix}\xrightarrow[i\times(-i)+i\text{行}]{i=2,\cdots,n}\begin{pmatrix}1+a&1&1&\cdots&1\\-2a&a&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\-na&0&0&\cdots&a\end{pmatrix}=B
$$
对 $|B|$ 是否为零进行讨论：

当 $a=0$ 时，$r(A)=1<n$，由齐次方程组有非零解的判别定理：设 $A$ 是 $m\times n$ 矩阵，齐次方程组 $Ax=0$ 有非零解的充要条件是 $r(A)<n$. 故此方程组有非零解，把 $a=0$ 代入原方程组，得其同解方程组为
$$
x_1+x_2+\cdots+x_n=0,\tag{*}
$$
此时，$r(A)=1$，故方程组有 $n-r=n-1$ 个自由未知量. 选 $x_2,x_3,\cdots,x_n$ 为自由未知量，将他们的 $n-1$ 组值 $(1,0,\cdots,0),(0,1,\cdots,0),\cdots,(0,0,\cdots,1)$ 分别代入 $(*)$ 式，得基础解系
$$
\eta_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \eta_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\cdots,\eta_{n-1}=(-1,0,0,\cdots,1)^{\mathrm{T}},
$$
于是方程组的通解为
$$
x=k_1\eta_1+\cdots+k_{n-1}\eta_{n-1},\ \text{其中}\ k_1,\cdots,k_{n-1}\ \text{为任意常数}.
$$
当 $a\ne0$ 时，对矩阵 $B$ 作初等行变换，有
$$
B\to\begin{pmatrix}a+\frac{n(n+1)}{2}&0&0&\cdots&0\\-2&1&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\-n&0&0&\cdots&1\end{pmatrix}\xrightarrow[i\times(-1)+1\text{行}]{i=2,3,\cdots,n},
$$
可知 $a=-\frac{n(n+1)}{2}$ 时，$r(A)=n-1<n$，由齐次方程组有非零解的判别定理，知方程组也有非零解，把 $a=-\frac{n(n+1)}{2}$ 代入原方程组，其同解方程组为
$$
\begin{cases}
-2x_1+x_2=0,\\
-3x_1+x_3=0,\\
\cdots\cdots\cdots\cdots\\
-nx_1+x_n=0,
\end{cases}
$$
此时，$r(A)=n-1$，故方程组有 $n-r=n-(n-1)=1$ 个自由未知量. 选 $x_2$ 为自由未知量，取 $x_2=1$，由此得基础解系为 $\eta=(1,2,\cdots,n)^{\mathrm{T}}$，于是方程组的通解为 $x=k\eta$，其中 $k$ 为任意常数.

方法2：计算方程组的系数行列式：
$$
A=\begin{pmatrix}1+a&1&1&\cdots&1\\2&2+a&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n+a\end{pmatrix}\xrightarrow{\text{矩阵加法}}\begin{pmatrix}a&0&0&\cdots&0\\0&a&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&a\end{pmatrix}+\begin{pmatrix}1&1&1&\cdots&1\\2&2&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n\end{pmatrix}
$$
$$
=aE+\begin{pmatrix}1&1&1&\cdots&1\\2&2&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n\end{pmatrix}\triangleq aE+Q,
$$
下面求矩阵 $Q$ 的特征值：
$$
|\lambda E-Q|=\begin{vmatrix}\lambda-1&-1&-1&\cdots&-1\\-2&\lambda-2&-2&\cdots&-2\\\cdots&\cdots&\cdots&\cdots&\cdots\\-n&-n&-n&\cdots&\lambda-n\end{vmatrix}\xrightarrow[i\times(-i)+i\text{行}]{i=2,3,\cdots,n}\begin{vmatrix}\lambda-1&-1&-1&\cdots&-1\\-2\lambda&\lambda&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\-n\lambda&0&0&\cdots&\lambda\end{vmatrix}
$$
$$
\xrightarrow[i\text{列}\times(i)+1\text{列}]{i=2,3,\cdots,n}\begin{vmatrix}\lambda-\frac{n(n+1)}{2}&-1&-1&\cdots&-1\\0&\lambda&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&\lambda\end{vmatrix}=\lambda^{n-1}\left(\lambda-\frac{n(n+1)}{2}\right)
$$
则 $Q$ 的特征值 $0,\cdots,0,\frac{n(n+1)}{2}$，由性质：若 $Ax=\lambda x$，则 $(kA)x=(k\lambda)x,A^mx=\lambda^mx$，因此对任意多项式 $f(x)$，$f(A)x=f(\lambda)x$，即 $f(\lambda)$ 是 $f(A)$ 的特征值.

故，$A$ 的特征值为 $a,a,\cdots,a+\frac{n(n+1)}{2}$，由特征值的乘积等于矩阵行列式的值，得 $A$ 行列式 $|A|=\left(a+\frac{n(n+1)}{2}\right)a^{n-1}$.

由齐次方程组有非零解的判别定理：设 $A$ 是 $n$ 阶矩阵，齐次方程组 $Ax=0$ 有非零解的充要条件是 $|A|=0$. 可知，当 $|A|=0$，即 $a=0$ 或 $a=-\frac{n(n+1)}{2}$ 时，方程组有非零解.

当 $a=0$ 时，对系数矩阵 $A$ 作初等行变换，有
$$
A=\begin{pmatrix}1&1&1&\cdots&1\\2&2&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n\end{pmatrix}\xrightarrow[i\times(-i)+i\text{行}]{i=2,\cdots,n}\begin{pmatrix}1&1&1&\cdots&1\\0&0&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&0\end{pmatrix},
$$
故方程组的同解方程组为
$$
x_1+x_2+\cdots+x_n=0,
$$
此时，$r(A)=1$，故方程组有 $n-r=n-1$ 个自由未知量. 选 $x_2,x_3,\cdots,x_n$ 为自由未知量，将他们的 $n-1$ 组值 $(1,0,\cdots,0),(0,1,\cdots,0),\cdots,(0,0,\cdots,1)$ 分别代入 $(*)$ 式，由此得基础解系为
$$
\eta_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \eta_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\cdots,\eta_{n-1}=(-1,0,0,\cdots,1)^{\mathrm{T}},
$$
于是方程组的通解为 $x=k_1\eta_1+\cdots+k_{n-1}\eta_{n-1}$，其中 $k_1,\cdots,k_{n-1}$ 为任意常数.`,
  source: '《1989—2004 考研数二真题答案解析》第 201–204 页',
});

EXAMS.push({
  year: 2004, subject: '数二', number: 23, kind: '解答', score: 9,
  ids: ['eig-diag-crit', 'eig-mult'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&2&-3\\-1&4&-3\\1&a&5\end{pmatrix}$ 的特征方程有一个二重根，求 $a$ 的值，并讨论 $A$ 是否可相似对角化.`,
  answer: String.raw`当 $a=-2$ 时，$A$ 的特征值为 $2,2,6$，可相似对角化；当 $a=-\frac{2}{3}$ 时，$A$ 的特征值为 $2,4,4$，不可相似对角化.`,
  analysis: String.raw`$A$ 的特征多项式为
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-2&3\\1&\lambda-4&3\\-1&-a&\lambda-5\end{vmatrix}\xrightarrow{2\text{行}\times(-1)+1\text{行}}\begin{vmatrix}\lambda-2&-(\lambda-2)&0\\1&\lambda-4&3\\-1&-a&\lambda-5\end{vmatrix}
$$
$$
\xrightarrow{\text{提出1行公因式}(\lambda-2)}\begin{vmatrix}1&-1&0\\1&\lambda-4&3\\-1&-a&\lambda-5\end{vmatrix}\xrightarrow{1\text{行}\times(-1)+2\text{行}(\lambda-2)}\begin{pmatrix}1&-1&0\\0&\lambda-3&3\\-1&-a&\lambda-5\end{pmatrix}
$$
$$
\xrightarrow{1\text{行}+2\text{行}(\lambda-2)}\begin{vmatrix}1&-1&0\\0&\lambda-3&3\\0&-a-1&\lambda-5\end{vmatrix}=(\lambda-2)\begin{vmatrix}\lambda-3&3\\-a-1&\lambda-5\end{vmatrix}
$$
$$
=(\lambda-2)[(\lambda-3)(\lambda-5)+3(a+1)]=(\lambda-2)(\lambda^2-8\lambda+18+3a).
$$
已知 $A$ 有一个二重特征值，有两种情况，(1) $\lambda=2$ 就是二重特征值，(2) 若 $\lambda=2$ 不是二重根，则 $\lambda^2-8\lambda+18+3a$ 是一个完全平方

（1）若 $\lambda=2$ 是特征方程的二重根，则有 $2^2-16+18+3a=0$，解得 $a=-2$. 由
$$
|\lambda E-A|=(\lambda-2)(\lambda^2-8\lambda+18+3\times(-2))=(\lambda-2)(\lambda^2-8\lambda+12)=(\lambda-2)^2(\lambda-6)=0
$$
求得 $A$ 的特征值为 $2,2,6$，由
$$
2E-A=\begin{pmatrix}1&-2&3\\1&-2&3\\-1&2&-3\end{pmatrix}\xrightarrow[1\text{行的1倍加到3行}]{1\text{行}(-1)\text{倍加到2行}}\begin{pmatrix}1&-2&3\\0&0&0\\0&0&0\end{pmatrix},
$$
知秩$(2E-A)=1$，故 $\lambda=2$ 对应的线性无关的特征向量的个数为 $n-r=3-1=2$，等于 $\lambda=2$ 的重数. 由矩阵与对角矩阵相似的充要条件：对矩阵的每个特征值，线性无关的特征向量的个数恰好等于该特征值的重根数，从而 $A$ 可相似对角化.

（2）若 $\lambda=2$ 不是特征方程的二重根，则 $\lambda^2-8\lambda+18+3a$ 为完全平方，从而 $18+3a=16$，解得 $a=-\frac{2}{3}$. 当 $a=-\frac{2}{3}$ 时，由
$$
|\lambda E-A|=(\lambda-2)(\lambda^2-8\lambda+18+3\times(-\frac{2}{3}))=(\lambda-2)(\lambda^2-8\lambda+16)=(\lambda-2)(\lambda-4)^2=0
$$
知 $A$ 的特征值为 $2,4,4$，由
$$
4E-A=\begin{pmatrix}3&-2&3\\1&0&3\\-1&\frac{2}{3}&-1\end{pmatrix}\xrightarrow{1\text{行}\times\frac{1}{3}+3\text{行}}\begin{pmatrix}3&-2&3\\1&0&3\\0&0&0\end{pmatrix}
$$
知秩$(4E-A)=2$，故 $\lambda=4$ 对应的线性无关的特征向量有 $n-r=3-2=1$，不等于 $\lambda=4$ 的重数，则由矩阵与对角矩阵相似的充要条件：对矩阵的每个特征值，线性无关的特征向量的个数恰好等于该特征值的重根数，知 $A$ 不可相似对角化.`,
  source: '《1989—2004 考研数二真题答案解析》第 204–205 页',
});
