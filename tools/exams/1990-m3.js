// 1990 · 数学三 · 线性代数（题面取自《1、1987-1996考研数学三真题.pdf》1990 年 试卷Ⅳ；答案与解析取自《1990年数学三真题答案解析.pdf》）
EXAMS.push({
  year: 1990, subject: '数三', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ["eq-nonhomo-crit","eq-rank-relation","eq-gauss"],
  question: String.raw`若线性方程组
$$
\begin{cases}x_1+x_2=-a_1,\\ x_2+x_3=a_2,\\ x_3+x_4=-a_3,\\ x_4+x_1=a_4\end{cases}
$$
有解，则常数 $a_1,a_2,a_3,a_4$ 应满足条件______.`,
  answer: String.raw`$a_1+a_2+a_3+a_4=0$.`,
  analysis: String.raw`【解析】由于方程组有解 $\Leftrightarrow r(A)=r(\overline{A})$，对 $\overline{A}$ 作初等行变换，
第一行乘以 $(-1)$ 加到第四行上，有
$$
\begin{pmatrix}1&1&0&0&-a_1\\0&1&1&0&a_2\\0&0&1&1&-a_3\\1&0&0&1&a_4\end{pmatrix}\to\begin{pmatrix}1&1&0&0&-a_1\\0&1&1&0&a_2\\0&0&1&1&-a_3\\0&-1&0&1&a_1+a_4\end{pmatrix},
$$
第二行加到第四行上，再第三行乘以 $(-1)$ 加到第四行上，有
$$
\to\begin{pmatrix}1&1&0&0&-a_1\\0&1&1&0&a_2\\0&0&1&1&-a_3\\0&0&1&1&a_1+a_2+a_4\end{pmatrix}\to\begin{pmatrix}1&1&0&0&-a_1\\&1&1&0&a_2\\&&1&1&-a_3\\&&&0&a_1+a_2+a_3+a_4\end{pmatrix}.
$$
为使 $r(A)=r(\overline{A})$，常数 $a_1,a_2,a_3,a_4$ 应满足条件：$a_1+a_2+a_3+a_4=0$.`,
  source: '《1990 年数学三真题答案解析.pdf》第 1–2 页',
});

EXAMS.push({
  year: 1990, subject: '数三', number: 203, kind: '选择', score: 3, label: '选择题第 3 题',
  ids: ["vec-indep-crit","vec-indep-def","vec-indep-concl"],
  question: String.raw`向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关的充分条件是（　　）

（A）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 均不为零向量.

（B）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 中任意两个向量的分量不成比例.

（C）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 中任意一个向量均不能由其余 $s-1$ 个向量线性表示.

（D）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 中有一部分向量线性无关.`,
  answer: String.raw`（C）．`,
  analysis: String.raw`【解析】本题考查线性无关的概念与理论，以及充分必要性条件的概念.

（A）（B）（D）均是必要条件，并非充分条件. 也就是说，向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，可以推导出（A）（B）（D）选项，但是不能由（A）（B）（D）选项中的任意一个推导出向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关.

例如：$(1,0),(0,1),(1,1)$ 显然有 $(1,0)+(0,1)-(1,1)=(0,0)$，该向量组线性相关. 但（A）（B）（D）均成立.

根据"$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关的充分必要条件是存在某 $\alpha_i(i=1,2,\cdots,s)$ 可以由 $\alpha_1,\cdots,\alpha_{i-1},\alpha_{i+1},\cdots,\alpha_s$ 线性表出."或由"$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关的充分必要条件是任意一个 $\alpha_i(i=1,2,\cdots,s)$ 均不能由 $\alpha_1,\cdots,\alpha_{i-1},\alpha_{i+1},\cdots,\alpha_s$ 线性表出."故选（C）．`,
  source: '《1990 年数学三真题答案解析.pdf》第 4 页',
});

EXAMS.push({
  year: 1990, subject: '数三', number: 306, kind: '解答', score: 8, label: '第六题',
  ids: ["eq-nonhomo-crit","eq-homo-general","eq-nonhomo-general"],
  question: String.raw`已知线性方程组
$$
\begin{cases}x_1+x_2+x_3+x_4+x_5=a,\\ 3x_1+2x_2+x_3+x_4-3x_5=0,\\ x_2+2x_3+2x_4+6x_5=b,\\ 5x_1+4x_2+3x_3+3x_4-x_5=2.\end{cases}
$$

（1）$a,b$ 为何值时，方程组有解？

（2）方程组有解时，求出方程组的导出组的一个基础解系；

（3）方程组有解时，求出方程组的全部解.`,
  answer: String.raw`当 $a=1$，$b=3$ 时方程组有解；此时导出组的一个基础解系为 $\eta_1=(1,-2,1,0,0)^{\mathrm{T}}$，$\eta_2=(1,-2,0,1,0)^{\mathrm{T}}$，$\eta_3=(5,-6,0,0,1)^{\mathrm{T}}$；方程组的全部解为 $\alpha+k_1\eta_1+k_2\eta_2+k_3\eta_3$，其中 $\alpha=(-2,3,0,0,0)^{\mathrm{T}}$，$k_1,k_2,k_3$ 为任意常数．`,
  analysis: String.raw`【解析】本题中，方程组有解 $\Leftrightarrow r(A)=r(\overline{A})$.（相关定理见第一题（4））

对增广矩阵作初等行变换，第一行乘以 $(-3)$、$(-5)$ 分别加到第二、四行上，有
$$
\begin{pmatrix}1&1&1&1&1&a\\3&2&1&1&-3&0\\0&1&2&2&6&b\\5&4&3&3&-1&2\end{pmatrix}\to\begin{pmatrix}1&1&1&1&1&a\\0&-1&-2&-2&-6&-3a\\0&1&2&2&6&b\\0&-1&-2&-2&-6&2-5a\end{pmatrix},
$$
第二行乘以 $1$、$(-1)$ 分别加到第三、四行上，第二行再自乘 $(-1)$，有
$$
\to\begin{pmatrix}1&1&1&1&1&a\\&1&2&2&6&3a\\&&&b-3a\\&&&2-2a\end{pmatrix},
$$
（1）当 $b-3a=0$ 且 $2-2a=0$，即 $a=1,b=3$ 时方程组有解.

（2）当 $a=1,b=3$ 时，方程组的同解方程组是
$$
\begin{cases}x_1+x_2+x_3+x_4+x_5=1,\\ x_2+2x_3+2x_4+6x_5=3.\end{cases}
$$
由 $n-r(A)=5-2=3$，即解空间的维数为 $3$. 取自变量为 $x_3,x_4,x_5$，则导出组的基础解系为
$$
\eta_1=(1,-2,1,0,0)^{\mathrm{T}},\quad\eta_2=(1,-2,0,1,0)^{\mathrm{T}},\quad\eta_3=(5,-6,0,0,1)^{\mathrm{T}}.
$$
（3）令 $x_3=x_4=x_5=0$，得方程组的特解为 $\alpha=(-2,3,0,0,0)^{\mathrm{T}}$. 因此，方程组的所有解是 $\alpha+k_1\eta_1+k_2\eta_2+k_3\eta_3$，其中 $k_1,k_2,k_3$ 为任意常数．`,
  source: '《1990 年数学三真题答案解析.pdf》第 9–10 页',
});

EXAMS.push({
  year: 1990, subject: '数三', number: 307, kind: '解答', score: 5, label: '第七题',
  ids: ["mat-invertible-crit","mat-inv-method","mat-power"],
  question: String.raw`已知对于 $n$ 阶方阵 $A$，存在自然数 $k$，使得 $A^k=O$. 试证明矩阵 $E-A$ 可逆，并写出其逆矩阵的表达式（$E$ 为 $n$ 阶单位阵）.`,
  answer: String.raw`$E-A$ 可逆，且 $(E-A)^{-1}=E+A+A^2+\cdots+A^{k-1}$.`,
  analysis: String.raw`【解析】若 $A$、$B$ 是 $n$ 阶矩阵，且 $AB=E$，则必有 $BA=E$. 于是按可逆的定义知 $A^{-1}=B$.

如果对特征值熟悉，由 $A^k=O$ 可知矩阵 $A$ 的特征值全是 $0$，从而 $E-A$ 的特征值全是 $1$，也就能证明 $E-A$ 可逆.

由于 $A^k=O$，故
$$
(E-A)(E+A+A^2+\cdots+A^{k-1})=E^k-A^k=E.
$$
所以 $E-A$ 可逆，且 $(E-A)^{-1}=E+A+A^2+\cdots+A^{k-1}$.`,
  source: '《1990 年数学三真题答案解析.pdf》第 10 页',
});

EXAMS.push({
  year: 1990, subject: '数三', number: 308, kind: '解答', score: 6, label: '第八题',
  ids: ["eig-def","eig-property","eig-vector-space"],
  question: String.raw`设 $A$ 为 $n$ 阶矩阵，$\lambda_1$ 和 $\lambda_2$ 是 $A$ 的两个不同的特征值，$x_1,x_2$ 是分别属于 $\lambda_1$ 和 $\lambda_2$ 的特征向量. 试证明 $x_1+x_2$ 不是 $A$ 的特征向量.`,
  answer: String.raw`证明见解析．`,
  analysis: String.raw`【解析】（反证法）若 $X_1+X_2$ 是 $A$ 的特征向量，它所对应的特征值为 $\lambda$，则由定义有：
$$
A(X_1+X_2)=\lambda(X_1+X_2).
$$
由已知又有 $A(X_1+X_2)=AX_1+AX_2=\lambda_1X_1+\lambda_2X_2$.
两式相减得 $(\lambda-\lambda_1)X_1+(\lambda-\lambda_2)X_2=0$.
由 $\lambda_1\ne\lambda_2$，知 $\lambda-\lambda_1,\lambda-\lambda_2$ 不全为 $0$，于是 $X_1,X_2$ 线性相关，这与不同特征值的特征向量线性无关相矛盾. 所以，$X_1+X_2$ 不是 $A$ 的特征向量．`,
  source: '《1990 年数学三真题答案解析.pdf》第 10 页',
});
