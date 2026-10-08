// 2009 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》，答案与解析取自《2005—2013考研数二真题答案解析》）
EXAMS.push({
  year: 2009, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ['mat-adj-identity', 'mat-adj-rank'],
  question: String.raw`设 $A,B$ 均为 2 阶方阵，$A^*,B^*$ 分别为 $A,B$ 的伴随矩阵. 若 $|A|=2$，$|B|=3$，则分块矩阵
$$
\begin{pmatrix}
O&A\\
B&O
\end{pmatrix}
$$
的伴随矩阵为（　）

（A）$\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$　（B）$\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$　（C）$\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$　（D）$\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$`,
  answer: '（B）',
  analysis: String.raw`根据 $CC^*=|C|E$ 若 $C^*=|C|C^{-1},C^{-1}=\frac{1}{|C|}C^*$

分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的行列式 $\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{2\times2}|A||B|=2\times3=6$ 即分块矩阵可逆
$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}^*=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=6\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=6\begin{pmatrix}O&\frac{1}{|B|}B^*\\\frac{1}{|A|}A^*&O\end{pmatrix}
$$
$$
=6\begin{pmatrix}O&\frac{1}{3}B^*\\\frac{1}{2}A^*&O\end{pmatrix}=\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}
$$`,
  source: '《2005—2013 考研数二真题答案解析》第 63 页',
});

EXAMS.push({
  year: 2009, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ['mat-elem-mat', 'mat-elem-relation'],
  question: String.raw`设 $A,P$ 均为 3 阶矩阵，$P^{\mathrm{T}}$ 为 $P$ 的转置矩阵，且 $P^{\mathrm{T}}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}$. 若 $P=(\alpha_1,\alpha_2,\alpha_3)$，$Q=(\alpha_1+\alpha_2,\alpha_2,\alpha_3)$，则 $Q^{\mathrm{T}}AQ$ 为（　）

（A）$\begin{pmatrix}2&1&0\\1&1&0\\0&0&2\end{pmatrix}$　（B）$\begin{pmatrix}1&1&0\\1&2&0\\0&0&2\end{pmatrix}$　（C）$\begin{pmatrix}2&0&0\\0&1&0\\0&0&2\end{pmatrix}$　（D）$\begin{pmatrix}1&0&0\\0&2&0\\0&0&2\end{pmatrix}$`,
  answer: '（A）',
  analysis: String.raw`$$
Q=(\alpha_1+\alpha_2,\alpha_2,\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{bmatrix}1&0&0\\1&1&0\\0&0&1\end{bmatrix}=(\alpha_1,\alpha_2,\alpha_3)E_{12}(1),
$$
即：
$$
Q=PE_{12}(1)
$$
$$
Q^{\mathrm{T}}AQ=[PE_{12}(1)]^{\mathrm{T}}A[PE_{12}(1)]=E_{12}^{\mathrm{T}}(1)[P^{\mathrm{T}}AP]E_{12}(1)
$$
$$
=E_{12}^{\mathrm{T}}(1)\begin{bmatrix}1&0&0\\0&1&0\\0&0&2\end{bmatrix}E_{12}(1)
$$
$$
=\begin{bmatrix}1&1&0\\0&1&0\\0&0&1\end{bmatrix}\begin{bmatrix}1&0&0\\0&1&0\\0&0&2\end{bmatrix}\begin{bmatrix}1&0&0\\1&1&0\\0&0&1\end{bmatrix}=\begin{bmatrix}2&1&0\\1&1&0\\0&0&2\end{bmatrix}
$$`,
  source: '《2005—2013 考研数二真题答案解析》第 63–64 页',
});

EXAMS.push({
  year: 2009, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ['eig-similar-prop', 'mat-trace'],
  question: String.raw`设 $\alpha,\beta$ 为 3 维列向量，$\beta^{\mathrm{T}}$ 为 $\beta$ 的转置. 若矩阵 $\alpha\beta^{\mathrm{T}}$ 相似于 $\begin{pmatrix}2&0&0\\0&0&0\\0&0&0\end{pmatrix}$，则 $\beta^{\mathrm{T}}\alpha=$ ________.`,
  answer: '2',
  analysis: String.raw`因为 $\alpha\beta^{\mathrm{T}}$ 相似于 $\begin{pmatrix}2&0&0\\0&0&0\\0&0&0\end{pmatrix}$，根据相似矩阵有相同的特征值，得到 $\alpha\beta^{\mathrm{T}}$ 得特征值是 $2,0,0$ 而 $\beta^{\mathrm{T}}\alpha$ 是一个常数，是矩阵 $\alpha\beta^{\mathrm{T}}$ 的对角元素之和，则 $\beta^{\mathrm{T}}\alpha=2+0+0=2$`,
  source: '《2005—2013 考研数二真题答案解析》第 66 页',
});

EXAMS.push({
  year: 2009, subject: '数二', number: 22, kind: '解答', score: 11,
  ids: ['vec-indep-crit', 'vec-indep-def'],
  question: String.raw`设
$$
A=\begin{pmatrix}1&-1&-1\\-1&1&1\\0&-4&-2\end{pmatrix},\qquad \xi_1=\begin{pmatrix}-1\\1\\-2\end{pmatrix}.
$$
（Ⅰ）求满足 $A\xi_2=\xi_1,\ A^2\xi_3=\xi_1$ 的所有向量 $\xi_2,\xi_3$；

（Ⅱ）对（Ⅰ）中的任意向量 $\xi_2,\xi_3$，证明 $\xi_1,\xi_2,\xi_3$ 线性无关.`,
  answer: String.raw`$\xi_2=k_1\begin{pmatrix}1\\-1\\2\end{pmatrix}+\begin{pmatrix}0\\0\\1\end{pmatrix}$，$\xi_3=k_2\begin{pmatrix}1\\-1\\0\end{pmatrix}+\begin{pmatrix}\frac{1}{2}\\0\\0\end{pmatrix}$（$k_1,k_2$ 为任意常数）`,
  analysis: String.raw`（Ⅰ）解方程 $A\xi_2=\xi_1$
$$
(A,\xi_1)=\begin{pmatrix}1&-1&-1&-1\\-1&1&1&1\\0&-4&-2&-2\end{pmatrix}\to\begin{pmatrix}1&-1&-1&-1\\0&0&0&0\\0&2&1&1\end{pmatrix}\to\begin{pmatrix}1&-1&-1&-1\\0&2&1&1\\0&0&0&0\end{pmatrix}
$$
$r(A)=2$ 故有一个自由变量，令 $x_3=2$，由 $Ax=0$ 解得，$x_2=-1,x_1=1$

求特解，令 $x_1=x_2=0$，得 $x_3=1$

故 $\xi_2=k_1\begin{pmatrix}1\\-1\\2\end{pmatrix}+\begin{pmatrix}0\\0\\1\end{pmatrix}$，其中 $k_1$ 为任意常数

解方程 $A^2\xi_3=\xi_1$
$$
A^2=\begin{pmatrix}2&2&0\\-2&-2&0\\4&4&0\end{pmatrix}
$$
$$
(A^2,\xi_1)=\begin{pmatrix}2&2&0&-1\\-2&-2&0&1\\4&4&0&2\end{pmatrix}\to\begin{pmatrix}1&1&0&-\frac{1}{2}\\0&0&0&0\\0&0&0&0\end{pmatrix}
$$
故有两个自由变量，令 $x_2=-1$，由 $A^2x=0$ 得 $x_1=1,x_3=0$

求特解 $\eta_2=\begin{pmatrix}\frac{1}{2}\\0\\0\end{pmatrix}$ 故 $\xi_3=k_2\begin{pmatrix}1\\-1\\0\end{pmatrix}+\begin{pmatrix}\frac{1}{2}\\0\\0\end{pmatrix}$，其中 $k_2$ 为任意常数.

（Ⅱ）证明：

由于
$$
\begin{vmatrix}-1&k_1&k_2+\frac{1}{2}\\1&-k_1&-k_2\\-2&2k_1+1&0\end{vmatrix}=2k_1k_2+(2k_1+1)\left(k_2+\frac{1}{2}\right)-2k_1\left(k_2+\frac{1}{2}\right)-k_2(2k_1+1)
$$
$$
=\frac{1}{2}\ne 0
$$
故 $\xi_1,\xi_2,\xi_3$ 线性无关.`,
  source: '《2005—2013 考研数二真题答案解析》第 70–72 页',
});

EXAMS.push({
  year: 2009, subject: '数二', number: 23, kind: '解答', score: 11,
  ids: ['qf-inertia-index', 'qf-canonical'],
  question: String.raw`设二次型
$$
f(x_1,x_2,x_3)=ax_1^2+ax_2^2+(a-1)x_3^2+2x_1x_3-2x_2x_3.
$$
（Ⅰ）求二次型 $f$ 的矩阵的所有特征值；

（Ⅱ）若二次型 $f$ 的规范形为 $y_1^2+y_2^2$，求 $a$ 的值.`,
  answer: String.raw`（Ⅰ）$\lambda_1=a,\ \lambda_2=a-2,\ \lambda_3=a+1$；（Ⅱ）$a=2$`,
  analysis: String.raw`（Ⅰ）
$$
A=\begin{pmatrix}a&0&1\\0&a&-1\\1&-1&a-1\end{pmatrix}
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
=(\lambda-a)\left\{\left[\lambda+\frac{1}{2}(1-2a)\right]^2-\frac{9}{4}\right\}
$$
$$
=(\lambda-a)(\lambda-a+2)(\lambda-a-1)
$$
$\lambda_1=a,\lambda_2=a-2,\lambda_3=a+1$

（Ⅱ）若规范形为 $y_1^2+y_2^2$，说明有两个特征值为正，一个为 $0$. 则

1）若 $\lambda_1=a=0$，则 $\lambda_2=-2<0$，$\lambda_3=1$，不符题意

2）若 $\lambda_2=0$，即 $a=2$，则 $\lambda_1=2>0$，$\lambda_3=3>0$，符合

3）若 $\lambda_3=0$，即 $a=-1$，则 $\lambda_1=-1<0$，$\lambda_2=-3<0$，不符题意

综上所述，故 $a=2$.`,
  source: '《2005—2013 考研数二真题答案解析》第 72 页',
});
