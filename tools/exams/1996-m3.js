// 1996 · 数学三 · 线性代数（题面取自《1、1987-1996 考研数学三真题》1996 年试卷（四）；答案与解析取自《1996 年数学三真题答案解析》）
EXAMS.push({
  year: 1996, subject: '数三', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['det-vandermonde', 'eq-cramer', 'eq-nonhomo-general'],
  question: String.raw`设
$$
A=\begin{pmatrix}1&1&1&\cdots&1\\a_1&a_2&a_3&\cdots&a_n\\a_1^2&a_2^2&a_3^2&\cdots&a_n^2\\\vdots&\vdots&\vdots&&\vdots\\a_1^{n-1}&a_2^{n-1}&a_3^{n-1}&\cdots&a_n^{n-1}\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\x_3\\\vdots\\x_n\end{pmatrix},\quad B=\begin{pmatrix}1\\1\\1\\\vdots\\1\end{pmatrix},
$$
其中 $a_i\ne a_j(i\ne j;i,j=1,2,\cdots,n)$，则线性方程组 $A^{\mathrm{T}}X=B$ 的解是______.`,
  answer: String.raw`$(1,0,0,\cdots,0)^{\mathrm{T}}$.`,
  analysis: String.raw`【解析】因为 $|A|$ 是范德蒙行列式，由 $a_i\ne a_j$ 知 $|A|=\prod(a_i-a_j)\ne 0$. 根据解与系数矩阵秩的关系，所以方程组 $A^{\mathrm{T}}X=B$ 有唯一解.
根据克莱姆法则，对于
$$
\begin{pmatrix}1&a_1&a_1^2&\cdots&a_1^{n-1}\\1&a_2&a_2^2&\cdots&a_2^{n-1}\\1&a_3&a_3^2&\cdots&a_3^{n-1}\\\vdots&\vdots&\vdots&&\vdots\\1&a_n&a_n^2&\cdots&a_n^{n-1}\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\\\vdots\\x_n\end{pmatrix}=\begin{pmatrix}1\\1\\1\\\vdots\\1\end{pmatrix},
$$
易见 $D_1=|A|$，$D_2=D_3=\cdots=D_n=0$.
所以 $A^{\mathrm{T}}X=B$ 的解为 $x_1=1,x_2=x_3=\cdots=x_n=0$，即 $(1,0,0,\cdots,0)^{\mathrm{T}}$.
【相关知识点】克莱姆法则：若线性非齐次方程组
$$
\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1,\\a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2,\\\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\\a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n=b_n.\end{cases}
$$
或简记为
$$
\sum_{j=1}^{n}a_{ij}x_j=b_i,\quad i=1,2,\cdots,n
$$
其系数行列式
$$
D=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}\ne 0,
$$
则方程组有唯一解
$$
x_j=\frac{D_j}{D},\quad j=1,2,\cdots,n.
$$
其中 $D_j$ 是用常数项 $b_1,b_2,\cdots,b_n$ 替换 $D$ 中第 $j$ 列所成的行列式.`,
  source: '《1996 年数学三真题答案解析》PDF 第 2–3 页',
});

EXAMS.push({
  year: 1996, subject: '数三', number: 203, kind: '选择', score: 3, label: '选择题第 3 题',
  ids: ['mat-adj-identity', 'mat-adjoint', 'mat-inv-method'],
  question: String.raw`设 $n$ 阶矩阵 $A$ 非奇异（$n\ge 2$），$A^*$ 是矩阵 $A$ 的伴随矩阵，则（　　）
（A）$(A^*)^*=|A|^{n-1}A$
（B）$(A^*)^*=|A|^{n+1}A$
（C）$(A^*)^*=|A|^{n-2}A$
（D）$(A^*)^*=|A|^{n+2}A$`,
  answer: String.raw`（C）.`,
  analysis: String.raw`【解析】伴随矩阵的基本关系式为 $AA^*=A^*A=|A|E$，
现将 $A^*$ 视为关系式中的矩阵 $A$，则有 $A^*(A^*)^*=|A^*|E$.
方法一：由 $|A^*|=|A|^{n-1}$ 及 $(A^*)^{-1}=\dfrac{A}{|A|}$，可得
$$
(A^*)^*=|A^*|(A^*)^{-1}=|A|^{n-1}\frac{A}{|A|}=|A|^{n-2}A.
$$
故应选（C）.
方法二：由 $A^*(A^*)^*=|A^*|E$，左乘 $A$ 得
$$
(AA^*)(A^*)^*=|A|^{n-1}A,\ \text{即}\ (|A|E)(A^*)^*=|A|^{n-1}A.
$$
故应选（C）.`,
  source: '《1996 年数学三真题答案解析》PDF 第 5 页',
});

EXAMS.push({
  year: 1996, subject: '数三', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ['vec-indep-def', 'vec-indep-crit', 'vec-indep-concl'],
  question: String.raw`设有任意两个 $n$ 维向量组 $\alpha_1,\cdots,\alpha_m$ 和 $\beta_1,\cdots,\beta_m$，若存在两组不全为零的数 $\lambda_1,\cdots,\lambda_m$ 和 $k_1,\cdots,k_m$，使
$$
(\lambda_1+k_1)\alpha_1+\cdots+(\lambda_m+k_m)\alpha_m+(\lambda_1-k_1)\beta_1+\cdots+(\lambda_m-k_m)\beta_m=0,
$$
则（　　）
（A）$\alpha_1,\cdots,\alpha_m$ 和 $\beta_1,\cdots,\beta_m$ 都线性相关
（B）$\alpha_1,\cdots,\alpha_m$ 和 $\beta_1,\cdots,\beta_m$ 都线性无关
（C）$\alpha_1+\beta_1,\cdots,\alpha_m+\beta_m,\alpha_1-\beta_1,\cdots,\alpha_m-\beta_m$ 线性无关
（D）$\alpha_1+\beta_1,\cdots,\alpha_m+\beta_m,\alpha_1-\beta_1,\cdots,\alpha_m-\beta_m$ 线性相关`,
  answer: String.raw`（D）.`,
  analysis: String.raw`【解析】本题考查对向量组线性相关、线性无关概念的理解. 若向量组 $\gamma_1,\gamma_2,\cdots,\gamma_s$ 线性无关，即若 $x_1\gamma_1+x_2\gamma_2+\cdots+x_s\gamma_s=0$，必有 $x_1=0,x_2=0,\cdots,x_s=0$.
既然 $\lambda_1,\cdots,\lambda_m$ 与 $k_1,\cdots,k_m$ 不全为零，由此推不出某向量组线性无关，故应排除（B）、（C）.
一般情况下，对于
$$
k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s+l_1\beta_1+\cdots+l_s\beta_s=0,
$$
不能保证必有 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0$，及 $l_1\beta_1+\cdots+l_s\beta_s=0$，故（A）不正确. 由已知条件，有
$$
\lambda_1(\alpha_1+\beta_1)+\cdots+\lambda_m(\alpha_m+\beta_m)+k_1(\alpha_1-\beta_1)+\cdots+k_m(\alpha_m-\beta_m)=0,
$$
又 $\lambda_1,\cdots,\lambda_m$ 与 $k_1,\cdots,k_m$ 不全为零，故 $\alpha_1+\beta_1,\cdots,\alpha_m+\beta_m,\alpha_1-\beta_1,\cdots,\alpha_m-\beta_m$ 线性相关.
故选（D）.`,
  source: '《1996 年数学三真题答案解析》PDF 第 5–6 页',
});

EXAMS.push({
  year: 1996, subject: '数三', number: 309, kind: '解答', score: 8, label: '第九题',
  ids: ['eig-poly', 'qf-complete-square', 'qf-orthogonal'],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}0&1&0&0\\1&0&0&0\\0&0&y&1\\0&0&1&2\end{pmatrix}.
$$
（1）已知 $A$ 的一个特征值为 3，试求 $y$；
（2）求可逆矩阵 $P$，使 $(AP)^{\mathrm{T}}(AP)$ 为对角矩阵.`,
  answer: String.raw`（1）$y=2$；
（2）取
$$
P=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&1&-\dfrac{4}{5}\\0&0&0&1\end{pmatrix},
$$
则
$$
(AP)^{\mathrm{T}}(AP)=P^{\mathrm{T}}A^2P=\begin{pmatrix}1&&&\\&1&&\\&&5&\\&&&\dfrac{9}{5}\end{pmatrix}.
$$`,
  analysis: String.raw`【分析】本题的（1）是考查特征值的基本概念，而（2）是把实对称矩阵合同于对角矩阵的问题转化成二次型求标准形的问题，用二次型的理论与方法来处理矩阵中的问题.
【解析】（1）因为 $\lambda=3$ 是 $A$ 的特征值，故
$$
|3E-A|=\begin{vmatrix}3&-1&0&0\\-1&3&0&0\\0&0&3-y&-1\\0&0&-1&1\end{vmatrix}=\begin{vmatrix}3&-1\\-1&3\end{vmatrix}\cdot\begin{vmatrix}3-y&-1\\-1&1\end{vmatrix}=8(2-y)=0,
$$
所以 $y=2$.
（2）由于 $A^{\mathrm{T}}=A$，要 $(AP)^{\mathrm{T}}(AP)=P^{\mathrm{T}}A^2P=\Lambda$，而
$$
A^2=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&5&4\\0&0&4&5\end{pmatrix}
$$
是对称矩阵，故可构造二次型 $x^{\mathrm{T}}A^2x$，将其化为标准形 $y^{\mathrm{T}}\Lambda y$. 即有 $A^2$ 与 $\Lambda$ 合同. 亦即 $P^{\mathrm{T}}A^2P=\Lambda$.
方法一：配方法.
由于
$$
x^{\mathrm{T}}A^2x=x_1^2+x_2^2+5x_3^2+5x_4^2+8x_3x_4
$$
$$
=x_1^2+x_2^2+5\left(x_3^2+\frac{8}{5}x_3x_4+\frac{16}{25}x_4^2\right)+5x_4^2-\frac{16}{5}x_4^2
$$
$$
=x_1^2+x_2^2+5\left(x_3+\frac{4}{5}x_4\right)^2+\frac{9}{5}x_4^2,
$$
那么，令 $y_1=x_1,y_2=x_2,y_3=x_3+\dfrac{4}{5}x_4,y_4=x_4$，即经坐标变换
$$
\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&1&-\dfrac{4}{5}\\0&0&0&1\end{pmatrix}\begin{pmatrix}y_1\\y_2\\y_3\\y_4\end{pmatrix},
$$
有
$$
x^{\mathrm{T}}A^2x=y_1^2+y_2^2+5y_3^2+\frac{9}{5}y_4^2.
$$
所以，取
$$
P=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&1&-\dfrac{4}{5}\\0&0&0&1\end{pmatrix},
$$
有
$$
(AP)^{\mathrm{T}}(AP)=P^{\mathrm{T}}A^2P=\begin{pmatrix}1&&&\\&1&&\\&&5&\\&&&\dfrac{9}{5}\end{pmatrix}.
$$
方法二：正交变换法.
二次型 $x^{\mathrm{T}}A^2x=x_1^2+x_2^2+5x_3^2+5x_4^2+8x_3x_4$ 对应的矩阵为
$$
A^2=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&5&4\\0&0&4&5\end{pmatrix},
$$
其特征多项式
$$
|\lambda E-A^2|=\begin{vmatrix}\lambda-1&0&0&0\\0&\lambda-1&0&0\\0&0&\lambda-5&-4\\0&0&-4&\lambda-5\end{vmatrix}=(\lambda-1)^3(\lambda-9).
$$
$A^2$ 的特征值 $\lambda_1=1,\lambda_2=1,\lambda_3=1,\lambda_4=9$. 由 $(\lambda_1E-A^2)x=0$，即
$$
\begin{pmatrix}0&0&0&0\\0&0&0&0\\0&0&-4&-4\\0&0&-4&-4\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=\begin{pmatrix}0\\0\\0\\0\end{pmatrix},
$$
和 $(\lambda_4E-A^2)x=0$，即
$$
\begin{pmatrix}8&0&0&0\\0&8&0&0\\0&0&4&-4\\0&0&-4&4\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=\begin{pmatrix}0\\0\\0\\0\end{pmatrix},
$$
分别求得对应 $\lambda_{1,2,3}=1$ 的线性无关特征向量
$$
\alpha_1=(1,0,0,0)^{\mathrm{T}},\quad \alpha_2=(0,1,0,0)^{\mathrm{T}},\quad \alpha_3=(0,0,1,-1)^{\mathrm{T}},
$$
和 $\lambda_4=9$ 的特征向量 $\alpha_4=(0,0,1,1)^{\mathrm{T}}$.
对 $\alpha_1,\alpha_2,\alpha_3$ 用施密特正交化方法得 $\beta_1,\beta_2,\beta_3$，再将 $\alpha_4$ 单位化为 $\beta_4$，其中：
$$
\beta_1=(1,0,0,0)^{\mathrm{T}},\quad \beta_2=(0,1,0,0)^{\mathrm{T}},\quad \beta_3=\left(0,0,\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}\right)^{\mathrm{T}},\quad \beta_4=\left(0,0,\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right)^{\mathrm{T}}.
$$
取正交矩阵
$$
P=[\beta_1,\beta_2,\beta_3,\beta_4]=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{2}}\\0&0&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{2}}\end{pmatrix},
$$
则
$$
P^{-1}A^2P=P^{\mathrm{T}}A^2P=\begin{pmatrix}1&&&\\&1&&\\&&1&\\&&&9\end{pmatrix},
$$
即
$$
(AP)^{\mathrm{T}}(AP)=P^{\mathrm{T}}A^2P=\begin{pmatrix}1&&&\\&1&&\\&&1&\\&&&9\end{pmatrix}.
$$`,
  source: '《1996 年数学三真题答案解析》PDF 第 10–12 页',
});

EXAMS.push({
  year: 1996, subject: '数三', number: 310, kind: '解答', score: 8, label: '第十题',
  ids: ['eq-homo-structure', 'vec-indep-def', 'vec-rank-def'],
  question: String.raw`设向量组 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 是齐次线性方程组 $Ax=0$ 的一个基础解系，向量 $\beta$ 不是方程组 $Ax=0$ 的解，即 $A\beta\ne 0$. 试证明：向量组 $\beta,\beta+\alpha_1,\beta+\alpha_2,\cdots,\beta+\alpha_t$ 线性无关.`,
  answer: String.raw`证明见解析.`,
  analysis: String.raw`【解析】证法 1：（定义法）若有一组数 $k,k_1,k_2,\cdots,k_t$，使得
$$
k\beta+k_1(\beta+\alpha_1)+k_2(\beta+\alpha_2)+\cdots+k_t(\beta+\alpha_t)=0,\tag{1}
$$
则因 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 是 $Ax=0$ 的解，知 $A\alpha_i=0(i=1,2,\cdots,t)$，用 $A$ 左乘上式的两边，有
$$
(k+k_1+k_2+\cdots+k_t)A\beta=0.\tag{2}
$$
由于 $A\beta\ne 0$，故 $k+k_1+k_2+\cdots+k_t=0$.
对（1）重新分组为
$$
(k+k_1+k_2+\cdots+k_t)\beta+k_1\alpha_1+k_2\alpha_2+\cdots+k_t\alpha_t=0.\tag{3}
$$
把（2）代入（3）得 $k_1\alpha_1+k_2\alpha_2+\cdots+k_t\alpha_t=0$.
由于 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 是基础解系，它们线性无关，故必有 $k_1=0,k_2=0,\cdots,k_t=0$.
代入（2）式得 $k=0$.
因此向量组 $\beta,\beta+\alpha_1,\beta+\alpha_2,\cdots,\beta+\alpha_t$ 线性无关.
证法 2：（用秩）经初等变换向量组的秩不变. 把第一列的 $-1$ 倍分别加至其余各列，有
$$
(\beta,\beta+\alpha_1,\beta+\alpha_2,\cdots,\beta+\alpha_t)\to(\beta,\alpha_1,\alpha_2,\cdots,\alpha_t).
$$
因此
$$
r(\beta,\beta+\alpha_1,\beta+\alpha_2,\cdots,\beta+\alpha_t)=r(\beta,\alpha_1,\alpha_2,\cdots,\alpha_t).
$$
由于 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 是基础解系，它们是线性无关的，秩 $r(\alpha_1,\alpha_2,\cdots,\alpha_t)=t$，又 $\beta$ 必不能由 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 线性表出（否则 $A\beta=0$），故 $r(\alpha_1,\alpha_2,\cdots,\alpha_t,\beta)=t+1$.
所以
$$
r(\beta,\beta+\alpha_1,\beta+\alpha_2,\cdots,\beta+\alpha_t)=t+1.
$$
即向量组 $\beta,\beta+\alpha_1,\beta+\alpha_2,\cdots,\beta+\alpha_t$ 线性无关.`,
  source: '《1996 年数学三真题答案解析》PDF 第 12–13 页',
});
