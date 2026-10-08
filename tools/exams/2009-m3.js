// 2009 · 数学三 · 线性代数（题面取自《2、1997-2009考研数学三真题》第 38–40 页的 2009 年部分；答案与解析取自《2009年数学三真题答案解析》）
EXAMS.push({
  year: 2009, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ["mat-adj-identity", "mat-block", "mat-adjoint"],
  question: String.raw`设 $A,B$ 均为 2 阶方阵，$A^*,B^*$ 分别为 $A,B$ 的伴随矩阵。若 $|A|=2$，$|B|=3$，则分块矩阵
$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}
$$
的伴随矩阵为（　　）

（A）$\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$　　（B）$\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$

（C）$\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$　　（D）$\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$`,
  answer: String.raw`（B）`,
  analysis: String.raw`根据 $CC^*=|C|E$，若 $C^*=|C|C^{-1}$，$C^{-1}=\frac{1}{|C|}C^*$。

分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的行列式
$$
\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{2\times2}|A||B|=2\times3=6,
$$
即分块矩阵可逆，故
$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}^*=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=6\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=6\begin{pmatrix}O&\frac{1}{|B|}B^*\\\frac{1}{|A|}A^*&O\end{pmatrix}=6\begin{pmatrix}O&\frac13B^*\\\frac12A^*&O\end{pmatrix}=\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}.
$$
故答案为（B）。`,
  source: '《2009 年数学三真题答案解析》第 3–4 页',
});

EXAMS.push({
  year: 2009, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ["mat-elem-relation", "mat-elem-mat"],
  question: String.raw`设 $A,P$ 均为 3 阶矩阵，$P^{\mathrm{T}}$ 为 $P$ 的转置矩阵，且
$$
P^{\mathrm{T}}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}.
$$
若 $P=(\alpha_1,\alpha_2,\alpha_3)$，$Q=(\alpha_1+\alpha_2,\alpha_2,\alpha_3)$，则 $Q^{\mathrm{T}}AQ$ 为（　　）

（A）$\begin{pmatrix}2&1&0\\1&1&0\\0&0&2\end{pmatrix}$　　（B）$\begin{pmatrix}1&1&0\\1&2&0\\0&0&2\end{pmatrix}$

（C）$\begin{pmatrix}2&0&0\\0&1&0\\0&0&2\end{pmatrix}$　　（D）$\begin{pmatrix}1&0&0\\0&2&0\\0&0&2\end{pmatrix}$`,
  answer: String.raw`（A）`,
  analysis: String.raw`$$
Q=(\alpha_1+\alpha_2,\alpha_2,\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{bmatrix}1&0&0\\1&1&0\\0&0&1\end{bmatrix}=(\alpha_1,\alpha_2,\alpha_3)E_{12}(1),
$$
即
$$
Q=PE_{12}(1),
$$
$$
Q^{\mathrm{T}}AQ=[PE_{12}(1)]^{\mathrm{T}}A[PE_{12}(1)]=E_{12}^{\mathrm{T}}(1)[P^{\mathrm{T}}AP]E_{12}(1)
$$
$$
=E_{21}(1)\begin{bmatrix}1&0&0\\0&1&0\\0&0&2\end{bmatrix}E_{12}(1)=\begin{bmatrix}1&1&0\\0&1&0\\0&0&1\end{bmatrix}\begin{bmatrix}1&0&0\\0&1&0\\0&0&2\end{bmatrix}\begin{bmatrix}1&0&0\\1&1&0\\0&0&1\end{bmatrix}=\begin{bmatrix}2&1&0\\1&1&0\\0&0&2\end{bmatrix}.
$$`,
  source: '《2009 年数学三真题答案解析》第 4 页',
});

EXAMS.push({
  year: 2009, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ["mat-trace", "eig-similar-prop", "eig-trace-det-app"],
  question: String.raw`设 $\alpha=(1,1,1)^{\mathrm{T}}$，$\beta=(1,0,k)^{\mathrm{T}}$，若矩阵 $\alpha\beta^{\mathrm{T}}$ 相似于 $\begin{pmatrix}3&0&0\\0&0&0\\0&0&0\end{pmatrix}$，则 $k=\underline{\qquad}$。`,
  answer: String.raw`$2$`,
  analysis: String.raw`$\alpha\beta^{\mathrm{T}}$ 相似于 $\begin{bmatrix}3&0&0\\0&0&0\\0&0&0\end{bmatrix}$，根据相似矩阵有相同的特征值，得到 $\alpha\beta^{\mathrm{T}}$ 的特征值为 3，0，0。而 $\alpha^{\mathrm{T}}\beta$ 为矩阵 $\alpha\beta^{\mathrm{T}}$ 的对角元素之和，所以 $1+k=3+0+0$，故 $k=2$。`,
  source: '《2009 年数学三真题答案解析》第 7 页',
});

EXAMS.push({
  year: 2009, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ["eq-nonhomo-general", "vec-indep-def", "eq-homo-structure"],
  question: String.raw`（本题满分 11 分）设
$$
A=\begin{pmatrix}1&-1&-1\\-1&1&1\\0&-4&-2\end{pmatrix},\quad \xi_1=\begin{pmatrix}-1\\1\\-2\end{pmatrix}.
$$
（Ⅰ）求满足 $A\xi_2=\xi_1$，$A^2\xi_3=\xi_1$ 的所有向量 $\xi_2$，$\xi_3$；

（Ⅱ）对（Ⅰ）中的任意向量 $\xi_2,\xi_3$，证明 $\xi_1,\xi_2,\xi_3$ 线性无关。`,
  answer: String.raw`（Ⅰ）$\xi_2=k_1\begin{pmatrix}1\\-1\\2\end{pmatrix}+\begin{pmatrix}0\\0\\1\end{pmatrix}$，$\xi_3=k_2\begin{pmatrix}1\\-1\\0\end{pmatrix}+k_3\begin{pmatrix}0\\0\\-1\end{pmatrix}+\begin{pmatrix}-\frac12\\0\\0\end{pmatrix}$（$k_1,k_2,k_3$ 为任意常数）；

（Ⅱ）证明见解析。`,
  analysis: String.raw`（Ⅰ）解方程 $A\xi_2=\xi_1$
$$
(A,\xi_1)=\begin{pmatrix}1&-1&-1&-1\\-1&1&1&1\\0&-4&-2&-2\end{pmatrix}\to\begin{pmatrix}1&-1&-1&-1\\0&0&0&0\\0&2&1&1\end{pmatrix}\to\begin{pmatrix}1&-1&-1&-1\\0&2&1&1\\0&0&0&0\end{pmatrix}.
$$
$r(A)=2$，故有一个自由变量，令 $x_3=2$，由 $Ax=0$ 解得，$x_2=-1$，$x_1=1$；求特解，令 $x_1=x_2=0$，得 $x_3=1$。故
$$
\xi_2=k_1\begin{pmatrix}1\\-1\\2\end{pmatrix}+\begin{pmatrix}0\\0\\1\end{pmatrix},
$$
其中 $k_1$ 为任意常数。

解方程 $A^2\xi_3=\xi_1$
$$
A^2=\begin{pmatrix}2&2&0\\-2&-2&0\\4&4&0\end{pmatrix},
$$
$$
(A^2,\xi_1)=\begin{pmatrix}2&2&0&-1\\-2&-2&0&1\\4&4&0&-2\end{pmatrix}\to\begin{pmatrix}1&1&0&-\frac12\\0&0&0&0\\0&0&0&0\end{pmatrix}.
$$
故有两个自由变量，令 $x_2=-1$，$x_3=0$，由 $A^2x=0$ 得 $x_1=1$；令 $x_2=0$，$x_3=-1$，由 $A^2x=0$ 得 $x_1=0$。求得特解
$$
\eta_2=\begin{pmatrix}-\frac12\\0\\0\end{pmatrix}.
$$
故
$$
\xi_3=k_2\begin{pmatrix}1\\-1\\0\end{pmatrix}+k_3\begin{pmatrix}0\\0\\-1\end{pmatrix}+\begin{pmatrix}-\frac12\\0\\0\end{pmatrix},
$$
其中 $k_2,k_3$ 为任意常数。

（Ⅱ）证明：由于
$$
\begin{vmatrix}-1&k_1&k_2+\frac12\\1&-k_1&-k_2\\-2&2k_1+1&0\end{vmatrix}=2k_1k_2+(2k_1+1)\left(k_2+\frac12\right)-2k_1\left(k_2+\frac12\right)-k_2(2k_1+1)=\frac12\ne0,
$$
故 $\xi_1,\xi_2,\xi_3$ 线性无关。`,
  source: '《2009 年数学三真题答案解析》第 10–12 页',
});

EXAMS.push({
  year: 2009, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ["qf-canonical", "qf-inertia-law", "eig-poly"],
  question: String.raw`（本题满分 11 分）设二次型
$$
f(x_1,x_2,x_3)=ax_1^2+ax_2^2+(a-1)x_3^2+2x_1x_3-2x_2x_3.
$$
（Ⅰ）求二次型 $f$ 的矩阵的所有特征值；

（Ⅱ）若二次型 $f$ 的规范形为 $y_1^2+y_2^2$，求 $a$ 的值。`,
  answer: String.raw`（Ⅰ）$\lambda_1=a$，$\lambda_2=a-2$，$\lambda_3=a+1$；

（Ⅱ）$a=2$。`,
  analysis: String.raw`（Ⅰ）二次型 $f$ 的矩阵
$$
A=\begin{pmatrix}a&0&1\\0&a&-1\\1&-1&a-1\end{pmatrix}.
$$
$$
|\lambda E-A|=\begin{vmatrix}\lambda-a&0&-1\\0&\lambda-a&1\\-1&1&\lambda-a+1\end{vmatrix}=(\lambda-a)\begin{vmatrix}\lambda-a&1\\1&\lambda-a+1\end{vmatrix}-\begin{vmatrix}0&\lambda-a\\-1&1\end{vmatrix}
$$
$$
=(\lambda-a)[(\lambda-a)(\lambda-a+1)-1]-[0+(\lambda-a)]
$$
$$
=(\lambda-a)[(\lambda-a)(\lambda-a+1)-2]
$$
$$
=(\lambda-a)[\lambda^2-2a\lambda+\lambda+a^2-a-2]
$$
$$
=(\lambda-a)\left\{\left[a\lambda+\frac12(1-2a)\right]^2-\frac94\right\}
$$
$$
=(\lambda-a)(\lambda-a+2)(\lambda-a-1).
$$
所以 $\lambda_1=a$，$\lambda_2=a-2$，$\lambda_3=a+1$。

（Ⅱ）若规范形为 $y_1^2+y_2^2$，说明有两个特征值为正，一个为 0。则

1）若 $\lambda_1=a=0$，则 $\lambda_2=-2<0$，$\lambda_3=1$，不符题意；

2）若 $\lambda_2=0$，即 $a=2$，则 $\lambda_1=2>0$，$\lambda_3=3>0$，符合；

3）若 $\lambda_3=0$，即 $a=-1$，则 $\lambda_1=-1<0$，$\lambda_2=-3<0$，不符题意。

综上所述，故 $a=2$。

> 注：上式中原书排印为 $(\lambda-a)\left\{\left[a\lambda+\frac12(1-2a)\right]^2-\frac94\right\}$，按前一步 $(\lambda-a)[\lambda^2-2a\lambda+\lambda+a^2-a-2]$ 与本步结果 $(\lambda-a)(\lambda-a+2)(\lambda-a-1)$ 核对，正确写法应为 $(\lambda-a)\left\{\left(\lambda-a+\frac12\right)^2-\frac94\right\}$，原书当系笔误，此处按原文转写。`,
  source: '《2009 年数学三真题答案解析》第 12 页',
});
