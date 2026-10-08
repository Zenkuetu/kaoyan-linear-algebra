// 1999 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 26–28 页；答案与解析取自《1989—2004 考研数二真题答案解析》）
EXAMS.push({
  year: 1999, subject: '数二', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ['det-roots', 'det-elimination'],
  question: String.raw`记行列式
$$
f(x)=\begin{vmatrix}x-2&x-1&x-2&x-3\\2x-2&2x-1&2x-2&2x-3\\3x-3&3x-2&4x-5&3x-5\\4x&4x-3&5x-7&4x-3\end{vmatrix}
$$
为 $f(x)$，则方程 $f(x)=0$ 的根的个数为（　）

（A）$1$.
（B）$2$.
（C）$3$.
（D）$4$.`,
  answer: '（B）',
  analysis: String.raw`利用行列式性质，计算出行列式是几次多项式，即可作出判别.
$$
f(x)=\begin{vmatrix}x-2&x-1&x-2&x-3\\2x-2&2x-1&2x-2&2x-3\\3x-3&3x-2&4x-5&3x-5\\4x&4x-3&5x-7&4x-3\end{vmatrix}
$$
$$
\xrightarrow[4\text{列}-1\text{列}]{2\text{列}-1\text{列},\ 3\text{列}-1\text{列}}\begin{vmatrix}x-2&1&0&-1\\2x-2&1&0&-1\\3x-3&1&x-2&-2\\4x&-3&x-7&-3\end{vmatrix}\xrightarrow{4\text{列}+2\text{列}}\begin{vmatrix}x-2&1&0&0\\2x-2&1&0&0\\3x-3&1&x-2&-1\\4x&-3&x-7&-6\end{vmatrix}
$$
$$
=\begin{vmatrix}x-2&1\\2x-2&1\end{vmatrix}\cdot\begin{vmatrix}x-2&-1\\x-7&-6\end{vmatrix}\quad\left(\text{若}A,B,C\text{均为}n\text{阶方阵，则}\begin{vmatrix}A&B\\O&C\end{vmatrix}=|A|\cdot|C|\right)
$$
$$
=[(x-2)\cdot1-(2x-2)\cdot1]\times[-6(x-2)-(-1)(x-7)]
$$
$$
=(-x)\times(-5x+5)=5x(x-1)
$$
故 $f(x)=x(5x-5)=0$ 有两个根 $x_1=0,x_2=1$，故应选（B）.`,
  source: '《1989—2004 考研数二真题答案解析》第 115 页',
});

EXAMS.push({
  year: 1999, subject: '数二', number: 311, kind: '解答', score: 6, label: '第十一题',
  ids: ['mat-adj-identity', 'mat-eq-solve'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{pmatrix}$，矩阵 $X$ 满足 $A^*X=A^{-1}+2X$，其中 $A^*$ 是 $A$ 的伴随矩阵，求矩阵 $X$.`,
  answer: String.raw`$$
X=\frac{1}{4}\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}.
$$`,
  analysis: String.raw`题设条件 $A^*X=A^{-1}+2X$

上式两端左乘 $A$，得 $AA^*X=AA^{-1}+2AX$

因为 $AA^*=|A|E,AA^{-1}=E$，所以 $|A|X=E+2AX\Rightarrow(|A|E-2A)X=E$

根据可逆矩阵的定义：对于矩阵 $A_n$，如果存在矩阵 $B_n$，使得 $AB=BA=E$，则称 $A$ 为可逆矩阵，并称 $B$ 是 $A$ 的逆矩阵，故 $(|A|E-2A),X$ 均是可逆矩阵，且
$$
X=(|A|E-2A)^{-1}
$$
又
$$
|A|=\begin{vmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{vmatrix}\xrightarrow[3\text{行}+1\text{行}]{2\text{行}+1\text{行}}\begin{vmatrix}1&1&-1\\0&2&0\\2&0&0\end{vmatrix}\xrightarrow{1\text{行}-3\text{行}\times\frac{1}{2}}\begin{vmatrix}0&1&-1\\0&2&0\\2&0&0\end{vmatrix}\xrightarrow{1\text{行}-2\text{行}\times\frac{1}{2}}\begin{vmatrix}0&0&-1\\0&2&0\\2&0&0\end{vmatrix}=4
$$
因为常数 $k$ 与矩阵 $A$ 相乘，$A$ 的每个元素都要乘以 $k$，故
$$
|A|E=4E=\begin{pmatrix}4&0&0\\0&4&0\\0&0&4\end{pmatrix},\qquad 2A=\begin{pmatrix}2&2&-2\\-2&2&2\\2&-2&2\end{pmatrix}
$$
所以
$$
|A|E-2A=2(2E-A)=\begin{pmatrix}2&-2&2\\2&2&-2\\-2&2&2\end{pmatrix}=2\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}\quad(\text{对应元素相减})
$$
$$
X=(|A|E-2A)^{-1}=\left(2\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}\right)^{-1}=\frac{1}{2}\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}^{-1}\quad((kA)^{-1}=k^{-1}A^{-1})
$$
用初等行变换求逆，当用初等行变换将矩阵 $A$ 化为单位矩阵时，经过相同的初等行变换，单位矩阵 $E$ 化成了 $A^{-1}$，即 $(A\ E)\xrightarrow{\text{初等行变换}}(E\ A^{-1})$
$$
\left(\begin{array}{ccc|ccc}1&-1&1&1&0&0\\1&1&-1&0&1&0\\-1&1&1&0&0&1\end{array}\right)\to\cdots\to\left(\begin{array}{ccc|ccc}1&0&0&\frac{1}{2}&\frac{1}{2}&0\\0&1&0&0&\frac{1}{2}&\frac{1}{2}\\0&0&1&\frac{1}{2}&0&\frac{1}{2}\end{array}\right)
$$
故
$$
X=\frac{1}{2}\begin{pmatrix}\frac{1}{2}&\frac{1}{2}&0\\0&\frac{1}{2}&\frac{1}{2}\\\frac{1}{2}&0&\frac{1}{2}\end{pmatrix}=\frac{1}{4}\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}.
$$`,
  source: '《1989—2004 考研数二真题答案解析》第 121–122 页',
});

EXAMS.push({
  year: 1999, subject: '数二', number: 312, kind: '解答', score: 8, label: '第十二题',
  ids: ['vec-indep-crit', 'vec-maximal', 'vec-express-crit'],
  question: String.raw`设向量组 $\alpha_1=(1,1,1,3)^{\mathrm{T}},\alpha_2=(-1,-3,5,1)^{\mathrm{T}},\alpha_3=(3,2,-1,p+2)^{\mathrm{T}},\alpha_4=(-2,-6,10,p)^{\mathrm{T}}$.

（1）$p$ 为何值时，该向量组线性无关？并在此时将向量 $\alpha=(4,1,6,10)^{\mathrm{T}}$ 用 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示；

（2）$p$ 为何值时，该向量组线性相关？并在此时求出它的秩和一个极大线性无关组.`,
  answer: String.raw`（1）$p\ne2$ 时向量组线性无关，$\alpha=2\alpha_1+\frac{3p-4}{p-2}\alpha_2+\alpha_3+\frac{1-p}{p-2}\alpha_4$；（2）$p=2$ 时向量组线性相关，秩为 $3$，极大线性无关组为 $\alpha_1,\alpha_2,\alpha_3$（或 $\alpha_1,\alpha_3,\alpha_4$）.`,
  analysis: String.raw`【概念】向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关 $\Leftrightarrow$ 以 $\alpha_i,i=1,2,3,4$ 为列向量组成的线性齐次方程组 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]X=0$ 只有零解.

向量 $\alpha$ 能否由向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表出 $\Leftrightarrow$ 以 $\alpha_i,i=1,2,3,4$ 为列向量组成的线性非齐次方程组 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=\alpha$ 是否有解.

【详解】作方程组 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=\alpha$，并对增广矩阵作初等行变换，
$$
[\alpha_1,\alpha_2,\alpha_3,\alpha_4,\alpha]\to\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\1&-3&2&-6&1\\1&5&-1&10&6\\3&1&p+2&p&10\end{array}\right)
$$
$$
\xrightarrow[4\text{行}-1\text{行}\times3]{2\text{行}-1\text{行},\ 3\text{行}-1\text{行}}\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\0&-2&-1&-4&-3\\0&6&-4&12&2\\0&4&p-7&p+6&-2\end{array}\right)\xrightarrow[4\text{行}+2\text{行}\times2]{3\text{行}+2\text{行}\times3}\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\0&-2&-1&-4&-3\\0&0&-7&0&-7\\0&0&p-9&p-2&-8\end{array}\right)
$$
$$
\xrightarrow{3\text{行}\times(-\frac{1}{7})}\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\0&-2&-1&-4&-3\\0&0&1&0&1\\0&0&p-9&p-2&-8\end{array}\right)\xrightarrow{4\text{行}-3\text{行}\times(p-9)}\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\0&-2&-1&-4&-3\\0&0&1&0&1\\0&0&0&p-2&1-p\end{array}\right)
$$
（1）当 $p\ne2$ 时，$r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4,\alpha)=4$，方程组有唯一解的充要条件是系数矩阵的秩等于增广矩阵的秩，且等于未知量的个数，故 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关，且方程组 $(\alpha_1,\alpha_2,\alpha_3,\alpha_4)X=\alpha$ 有唯一解，其同解方程组为
$$
\begin{cases}
x_1-x_2+3x_3-2x_4=4\\
2x_2+x_3+4x_4=3\\
x_3=1\\
(p-2)x_4=1-p
\end{cases},\qquad \text{解得}\ x_1=2,x_2=\frac{3p-4}{p-2},x_3=1,x_4=\frac{1-p}{p-2}
$$
代入 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=\alpha$ 中，即 $\alpha$ 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表出，且表出式为
$$
\alpha=2\alpha_1+\frac{3p-4}{p-2}\alpha_2+\alpha_3+\frac{1-p}{p-2}\alpha_4
$$
（2）向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关 $\Leftrightarrow$ 以 $\alpha_i,i=1,2,3,4$ 为列向量组成的线性齐次方程组 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]X=0$ 有非零解.

当 $p=2$ 时，
$$
[\alpha_1,\alpha_2,\alpha_3,\alpha_4,\alpha]\to\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\1&-3&2&-6&1\\1&5&-1&10&6\\3&1&4&2&10\end{array}\right)\to\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\0&-2&-1&-4&-3\\0&0&1&0&1\\0&0&0&0&-1\end{array}\right)
$$
初等变换不改变向量组的秩，$r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=3$，系数矩阵的秩小于未知量的个数，
$$
\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]X=0
$$
有非零解，故向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关，列向量组经过初等行变换，其对应的部分列向量组具有相同的线性相关性. 在 $\left(\begin{array}{rrrr:r}1&-1&3&-2&4\\0&-2&-1&-4&-3\\0&0&1&0&1\\0&0&0&0&-1\end{array}\right)$ 中，由 $\begin{vmatrix}1&-1&3\\0&-2&-1\\0&0&1\end{vmatrix}=-2\ne0$ 或
$$
\begin{vmatrix}1&3&-2\\0&-1&-4\\0&1&0\end{vmatrix}=4\ne0
$$
知，$\alpha_1,\alpha_2,\alpha_3$（或 $\alpha_1,\alpha_3,\alpha_4$）线性无关，是其极大线性无关组.`,
  source: '《1989—2004 考研数二真题答案解析》第 122–124 页',
});
