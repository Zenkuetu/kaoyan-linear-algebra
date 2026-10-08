// 2004 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2004 年卷；答案与解析取自《2004 年数学三真题答案解析》）
EXAMS.push({
  year: 2004, subject: '数三', number: 4, kind: '填空', score: 4,
  ids: ['qf-def', 'qf-inertia-index', 'mat-rank'],
  question: String.raw`二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2-x_3)^2+(x_3+x_1)^2$ 的秩为 $\underline{\qquad}$。`,
  answer: String.raw`$2$。`,
  analysis: String.raw`【分析】二次型的秩即对应的矩阵的秩，亦即标准型中平方项的项数，于是利用初等变换或配方法均可得到答案。

【详解一】因为
$$
f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2-x_3)^2+(x_3+x_1)^2=2x_1^2+2x_2^2+2x_3^2+2x_1x_2+2x_1x_3-2x_2x_3,
$$
于是二次型的矩阵为
$$
A=\begin{pmatrix}2&1&1\\1&2&-1\\1&-1&2\end{pmatrix},
$$
由初等变换得
$$
A\to\begin{pmatrix}1&-1&2\\0&3&-3\\0&3&-3\end{pmatrix}\to\begin{pmatrix}1&-1&2\\0&3&-3\\0&0&0\end{pmatrix},
$$
从而 $r(A)=2$，即二次型的秩为 $2$。

【详解二】因为
$$
f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2-x_3)^2+(x_3+x_1)^2=2x_1^2+2x_2^2+2x_3^2+2x_1x_2+2x_1x_3-2x_2x_3
$$
$$
=2\left(x_1+\frac{1}{2}x_2+\frac{1}{2}x_3\right)^2+\frac{3}{2}(x_2-x_3)^2=2y_1^2+\frac{3}{2}y_2^2,
$$
其中 $y_1=x_1+\dfrac{1}{2}x_2+\dfrac{1}{2}x_3$，$y_2=x_2-x_3$。所以二次型的秩为 $2$。`,
  source: '《2004 年数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2004, subject: '数三', number: 12, kind: '选择', score: 4,
  ids: ['mat-equiv', 'det-rank', 'mat-rank-crit'],
  question: String.raw`设 $n$ 阶矩阵 $A$ 与 $B$ 等价，则必有（　　）
（A）当 $|A|=a\ (a\ne 0)$ 时，$|B|=a$　　（B）当 $|A|=a\ (a\ne 0)$ 时，$|B|=-a$
（C）当 $|A|\ne 0$ 时，$|B|=0$　　（D）当 $|A|=0$ 时，$|B|=0$`,
  answer: String.raw`（D）`,
  analysis: String.raw`【分析】利用矩阵 $A$ 与 $B$ 等价的充要条件：$r(A)=r(B)$ 立即可得。

【详解】因为当 $|A|=0$ 时，$r(A)<n$，又 $A$ 与 $B$ 等价，故 $r(B)<n$，即 $|B|=0$，故选（D）。

【评注】本题是对矩阵等价、行列式的考查，属基本题型。`,
  source: '《2004 年数学三真题答案解析》第 5 页',
});

EXAMS.push({
  year: 2004, subject: '数三', number: 13, kind: '选择', score: 4,
  ids: ['eq-homo-structure', 'mat-adj-rank', 'eq-nonhomo-general'],
  question: String.raw`设 $n$ 阶矩阵 $A$ 的伴随矩阵 $A^*\ne O$，若 $\xi_1,\xi_2,\xi_3,\xi_4$ 是非齐次线性方程组 $Ax=b$ 的互不相等的解，则对应的齐次线性方程组 $Ax=0$ 的基础解系（　　）
（A）不存在　　（B）仅含一个非零解向量
（C）含有两个线性无关的解向量　　（D）含有三个线性无关的解向量`,
  answer: String.raw`（B）`,
  analysis: String.raw`【分析】要确定基础解系含向量的个数，实际上只要确定未知数的个数和系数矩阵的秩。

【详解】因为基础解系含向量的个数 $=n-r(A)$，而且
$$
r(A^*)=\begin{cases}n,&r(A)=n,\\1,&r(A)=n-1,\\0,&r(A)<n-1.\end{cases}
$$
根据已知条件 $A^*\ne O$，于是 $r(A)$ 等于 $n$ 或 $n-1$。又 $Ax=b$ 有互不相等的解，即解不惟一，故 $r(A)=n-1$。从而基础解系仅含一个解向量，即选（B）。

【评注】本题是对矩阵 $A$ 与其伴随矩阵 $A^*$ 的秩之间的关系、线性方程组解的结构等多个知识点的综合考查。`,
  source: '《2004 年数学三真题答案解析》第 6 页',
});

EXAMS.push({
  year: 2004, subject: '数三', number: 20, kind: '解答', score: 13,
  ids: ['vec-express-crit', 'vec-combo', 'eq-nonhomo-crit'],
  question: String.raw`（本题满分 13 分）设 $\alpha_1=(1,2,0)^{\mathrm{T}}$，$\alpha_2=(1,a+2,-3a)^{\mathrm{T}}$，$\alpha_3=(-1,-b-2,a+2b)^{\mathrm{T}}$，$\beta=(1,3,-3)^{\mathrm{T}}$，试讨论当 $a,b$ 为何值时，

（Ⅰ）$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；

（Ⅱ）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 唯一地线性表示，并求出表示式；

（Ⅲ）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表示式不唯一，并求出表示式。`,
  answer: String.raw`（Ⅰ）$a=0$ 时，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；（Ⅱ）$a\ne 0$ 且 $a\ne b$ 时，$\beta$ 唯一表示为 $\beta=\left(1-\dfrac{1}{a}\right)\alpha_1+\dfrac{1}{a}\alpha_2$；（Ⅲ）$a=b\ne 0$ 时，表示式不唯一，$\beta=\left(1-\dfrac{1}{a}\right)\alpha_1+\left(\dfrac{1}{a}+c\right)\alpha_2+c\alpha_3$（$c$ 为任意常数）。`,
  analysis: String.raw`【分析】将 $\beta$ 可否由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示的问题转化为线性方程组 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=\beta$ 是否有解的问题即易求解。

【详解】设有数 $k_1,k_2,k_3$，使得
$$
k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=\beta.\tag{*}
$$
记 $A=(\alpha_1,\alpha_2,\alpha_3)$。对矩阵 $(A,\beta)$ 施以初等行变换，有
$$
(A,\beta)=\begin{pmatrix}1&1&-1&\mid&1\\2&a+2&-b-2&\mid&3\\0&-3a&a+2b&\mid&-3\end{pmatrix}\to\begin{pmatrix}1&1&-1&\mid&1\\0&a&b&\mid&1\\0&0&a-b&\mid&0\end{pmatrix}.
$$
（Ⅰ）当 $a=0$ 时，有
$$
(A,\beta)\to\begin{pmatrix}1&1&-1&\mid&1\\0&0&b&\mid&1\\0&0&0&\mid&-1\end{pmatrix}.
$$
可知 $r(A)\ne r(A,\beta)$。故方程组 $(*)$ 无解，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示。

（Ⅱ）当 $a\ne 0$，且 $a\ne b$ 时，有
$$
(A,\beta)\to\begin{pmatrix}1&1&-1&\mid&1\\0&a&b&\mid&1\\0&0&a-b&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&1-\dfrac{1}{a}\\[4pt]0&1&0&\mid&\dfrac{1}{a}\\[4pt]0&0&1&\mid&0\end{pmatrix},
$$
$r(A)=r(A,\beta)=3$，方程组 $(*)$ 有唯一解：
$$
k_1=1-\frac{1}{a},\quad k_2=\frac{1}{a},\quad k_3=0.
$$
此时 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 唯一地线性表示，其表示式为
$$
\beta=\left(1-\frac{1}{a}\right)\alpha_1+\frac{1}{a}\alpha_2.
$$
（Ⅲ）当 $a=b\ne 0$ 时，对矩阵 $(A,\beta)$ 施以初等行变换，有
$$
(A,\beta)\to\begin{pmatrix}1&1&-1&\mid&1\\0&a&b&\mid&1\\0&0&a-b&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&1-\dfrac{1}{a}\\[4pt]0&1&-1&\mid&\dfrac{1}{a}\\[4pt]0&0&0&\mid&0\end{pmatrix},
$$
$r(A)=r(A,\beta)=2$，方程组 $(*)$ 有无穷多解，其全部解为
$$
k_1=1-\frac{1}{a},\quad k_2=\frac{1}{a}+c,\quad k_3=c,\quad\text{其中 }c\text{ 为任意常数}.
$$
$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表示式不唯一，其表示式为
$$
\beta=\left(1-\frac{1}{a}\right)\alpha_1+\left(\frac{1}{a}+c\right)\alpha_2+c\alpha_3.
$$

【评注】本题属于常规题型，曾考过两次（1991，2000）。`,
  source: '《2004 年数学三真题答案解析》第 10–11 页',
});

EXAMS.push({
  year: 2004, subject: '数三', number: 21, kind: '解答', score: 13,
  ids: ['eig-def', 'eig-diag-method', 'det-elimination'],
  question: String.raw`（本题满分 13 分）设 $n$ 阶矩阵
$$
A=\begin{pmatrix}1&b&\cdots&b\\b&1&\cdots&b\\\vdots&\vdots&&\vdots\\b&b&\cdots&1\end{pmatrix}.
$$
（Ⅰ）求 $A$ 的特征值和特征向量；

（Ⅱ）求可逆矩阵 $P$，使得 $P^{-1}AP$ 为对角矩阵。`,
  answer: String.raw`（Ⅰ）当 $b\ne 0$ 时，$\lambda_1=1+(n-1)b$，属于 $\lambda_1$ 的全部特征向量为 $k(1,1,\cdots,1)^{\mathrm{T}}\ (k\ne 0)$；$\lambda_2=\cdots=\lambda_n=1-b$，属于它们的全部特征向量为 $k_2\xi_2+k_3\xi_3+\cdots+k_n\xi_n\ (k_2,\cdots,k_n\ \text{不全为零})$，其中 $\xi_2=(1,-1,0,\cdots,0)^{\mathrm{T}},\xi_3=(1,0,-1,\cdots,0)^{\mathrm{T}},\cdots,\xi_n=(1,0,0,\cdots,-1)^{\mathrm{T}}$；当 $b=0$ 时，$\lambda_1=\cdots=\lambda_n=1$，任意非零列向量均为特征向量；（Ⅱ）当 $b\ne 0$ 时，取 $P=(\xi_1,\xi_2,\cdots,\xi_n)$，则 $P^{-1}AP=\operatorname{diag}(1+(n-1)b,1-b,\cdots,1-b)$；当 $b=0$ 时，$A=E$，对任意可逆矩阵 $P$ 均有 $P^{-1}AP=E$。`,
  analysis: String.raw`【分析】这是具体矩阵的特征值和特征向量的计算问题，通常可由求解特征方程 $|\lambda E-A|=0$ 和齐次线性方程组 $(\lambda E-A)x=0$ 来解决。

【详解】（Ⅰ）1° 当 $b\ne 0$ 时，
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-b&\cdots&-b\\-b&\lambda-1&\cdots&-b\\\vdots&\vdots&&\vdots\\-b&-b&\cdots&\lambda-1\end{vmatrix}=[\lambda-1-(n-1)b][\lambda-(1-b)]^{n-1},
$$
得 $A$ 的特征值为
$$
\lambda_1=1+(n-1)b,\quad \lambda_2=\cdots=\lambda_n=1-b.
$$
对 $\lambda_1=1+(n-1)b$，
$$
\lambda_1E-A=\begin{pmatrix}(n-1)b&-b&\cdots&-b\\-b&(n-1)b&\cdots&-b\\\vdots&\vdots&&\vdots\\-b&-b&\cdots&(n-1)b\end{pmatrix}\to\begin{pmatrix}n-1&-1&\cdots&-1\\-1&n-1&\cdots&-1\\\vdots&\vdots&&\vdots\\-1&-1&\cdots&n-1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&1&\cdots&1&1-n\\-1&n-1&\cdots&-1\\\vdots&\vdots&&\vdots\\-1&-1&\cdots&n-1\end{pmatrix}\to\begin{pmatrix}1&1&\cdots&1&1-n\\0&n&\cdots&0&-n\\\vdots&\vdots&&\vdots\\0&0&\cdots&n&-n\end{pmatrix}\to\begin{pmatrix}1&0&\cdots&0&-1\\0&1&\cdots&0&-1\\\vdots&\vdots&&\vdots\\0&0&\cdots&1&-1\end{pmatrix},
$$
解得 $\xi_1=(1,1,1,\cdots,1)^{\mathrm{T}}$，所以 $A$ 的属于 $\lambda_1$ 的全部特征向量为
$$
k\xi_1=k(1,1,1,\cdots,1)^{\mathrm{T}}\quad(k\text{ 为任意不为零的常数}).
$$
对 $\lambda_2=1-b$，
$$
\lambda_2E-A=\begin{pmatrix}-b&-b&\cdots&-b\\-b&-b&\cdots&-b\\\vdots&\vdots&&\vdots\\-b&-b&\cdots&-b\end{pmatrix}\to\begin{pmatrix}1&1&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix},
$$
得基础解系为
$$
\xi_2=(1,-1,0,\cdots,0)^{\mathrm{T}},\ \xi_3=(1,0,-1,\cdots,0)^{\mathrm{T}},\ \cdots,\ \xi_n=(1,0,0,\cdots,-1)^{\mathrm{T}}.
$$
故 $A$ 的属于 $\lambda_2$ 的全部特征向量为
$$
k_2\xi_2+k_3\xi_3+\cdots+k_n\xi_n\quad(k_2,k_3,\cdots,k_n\text{ 是不全为零的常数}).
$$
2° 当 $b=0$ 时，
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&0&\cdots&0\\0&\lambda-1&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda-1\end{vmatrix}=(\lambda-1)^n,
$$
特征值为 $\lambda_1=\cdots=\lambda_n=1$，任意非零列向量均为特征向量。

（Ⅱ）1° 当 $b\ne 0$ 时，$A$ 有 $n$ 个线性无关的特征向量，令 $P=(\xi_1,\xi_2,\cdots,\xi_n)$，则
$$
P^{-1}AP=\begin{pmatrix}1+(n-1)b&&&\\&1-b&&\\&&\ddots&\\&&&1-b\end{pmatrix}.
$$
2° 当 $b=0$ 时，$A=E$，对任意可逆矩阵 $P$，均有
$$
P^{-1}AP=E.
$$

【评注】本题通过考查矩阵的特征值和特征向量而间接考查了行列式的计算、齐次线性方程组的求解和矩阵的对角化等问题，属于有一点综合性的试题。`,
  source: '《2004 年数学三真题答案解析》第 11–13 页',
});
