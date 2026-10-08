// 2015 · 数学二 · 线性代数（题面取自《2010-2019 考研数学二真题》，答案与解析取自《2015 数学二解析》）
EXAMS.push({
  year: 2015, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ['eq-nonhomo-crit', 'eq-rank-relation'],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix},\quad b=\begin{pmatrix}1\\d\\d^2\end{pmatrix}.
$$
若集合 $\Omega=\{1,2\}$，则线性方程组 $Ax=b$ 有无穷多解的充分必要条件为（　）

（A）$a\notin\Omega,\ d\notin\Omega$　（B）$a\notin\Omega,\ d\in\Omega$　（C）$a\in\Omega,\ d\notin\Omega$　（D）$a\in\Omega,\ d\in\Omega$`,
  answer: '（D）',
  analysis: String.raw`$$
(A,b)=\begin{pmatrix}1&1&1&1\\1&2&a&d\\1&4&a^2&d^2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&a-1&d-1\\0&0&(a-1)(a-2)&(d-1)(d-2)\end{pmatrix},
$$
由 $r(A)=r(A,b)<3$，故 $a=1$ 或 $a=2$，同时 $d=1$ 或 $d=2$。故选（D）。`,
  source: '《2015 数学二解析》第 4 页',
});

EXAMS.push({
  year: 2015, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ['qf-orthogonal', 'qf-canonical'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)$ 在正交变换 $x=Py$ 下的标准形为 $2y_1^2+y_2^2-y_3^2$，其中 $P=(e_1,e_2,e_3)$。若 $Q=(e_1,-e_3,e_2)$，则 $f(x_1,x_2,x_3)$ 在正交变换 $x=Qy$ 下的标准形为（　）

（A）$2y_1^2-y_2^2+y_3^2$　（B）$2y_1^2+y_2^2-y_3^2$　（C）$2y_1^2-y_2^2-y_3^2$　（D）$2y_1^2+y_2^2+y_3^2$`,
  answer: '（A）',
  analysis: String.raw`由 $x=Py$，故 $f=x^{\mathrm{T}}Ax=y^{\mathrm{T}}(P^{\mathrm{T}}AP)y=2y_1^2+y_2^2-y_3^2$。且
$$
P^{\mathrm{T}}AP=\begin{pmatrix}2&0&0\\0&1&0\\0&0&-1\end{pmatrix}.
$$
$$
Q=P\begin{pmatrix}1&0&0\\0&0&1\\0&-1&0\end{pmatrix}=PC
$$
$$
Q^{\mathrm{T}}AQ=C^{\mathrm{T}}(P^{\mathrm{T}}AP)C=\begin{pmatrix}2&0&0\\0&-1&0\\0&0&1\end{pmatrix}
$$
所以 $f=x^{\mathrm{T}}Ax=y^{\mathrm{T}}(Q^{\mathrm{T}}AQ)y=2y_1^2-y_2^2+y_3^2$。选（A）。`,
  source: '《2015 数学二解析》第 4–5 页',
});

EXAMS.push({
  year: 2015, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ['eig-trace-det-app', 'eig-ops'],
  question: String.raw`设 3 阶矩阵 $A$ 的特征值为 $2,-2,1$，$B=A^2-A+E$，其中 $E$ 为 3 阶单位矩阵，则行列式 $|B|=\underline{\qquad}$。`,
  answer: String.raw`$21$`,
  analysis: String.raw`$A$ 的所有特征值为 $2,-2,1$。$B$ 的所有特征值为 $3,7,1$。

所以 $|B|=3\times7\times1=21$。`,
  source: '《2015 数学二解析》第 7 页',
});

EXAMS.push({
  year: 2015, subject: '数二', number: 22, kind: '解答', score: 11,
  ids: ['mat-eq-solve', 'mat-power', 'mat-inv-method'],
  question: String.raw`（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}a&1&0\\1&a&-1\\0&1&a\end{pmatrix},
$$
且 $A^3=O$。

（Ⅰ）求 $a$ 的值；

（Ⅱ）若矩阵 $X$ 满足 $X-XA^2-AX+AXA^2=E$，其中 $E$ 为 3 阶单位矩阵，求 $X$。`,
  answer: String.raw`（Ⅰ）$a=0$；（Ⅱ）
$$
X=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}
$$`,
  analysis: String.raw`（Ⅰ）$A^3=O\Rightarrow|A|=0\Rightarrow$
$$
\begin{vmatrix}a&1&0\\1&a&-1\\0&1&a\end{vmatrix}=\begin{vmatrix}0&1&0\\1-a^2&a&-1\\-a&1&a\end{vmatrix}=a^3=0\Rightarrow a=0
$$
（Ⅱ）由题意知
$$
X-XA^2-AX+AXA^2=E\Rightarrow X(E-A^2)-AX(E-A^2)=E
$$
$$
\Rightarrow(E-A)X(E-A^2)=E\Rightarrow X=(E-A)^{-1}(E-A^2)^{-1}=\left[(E-A^2)(E-A)\right]^{-1}
$$
$$
\Rightarrow X=(E-A^2-A)^{-1}
$$
$$
E-A^2-A=\begin{pmatrix}0&-1&1\\-1&1&1\\-1&-1&2\end{pmatrix},
$$
$$
(E-A^2-A,E)=\begin{pmatrix}0&-1&1&1&0&0\\-1&1&1&0&1&0\\-1&-1&2&0&0&1\end{pmatrix}\to\begin{pmatrix}1&-1&-1&0&-1&0\\0&-1&1&1&0&0\\-1&-1&2&0&0&1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&-1&-1&0&-1&0\\0&1&-1&-1&0&0\\0&-2&1&0&-1&1\end{pmatrix}\to\begin{pmatrix}1&-1&0&2&0&-1\\0&1&0&1&1&-1\\0&0&1&2&1&-1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&0&3&1&-2\\0&1&0&1&1&-1\\0&0&1&2&1&-1\end{pmatrix}
$$
$$
\therefore X=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}
$$`,
  source: '《2015 数学二解析》第 13–14 页',
});

EXAMS.push({
  year: 2015, subject: '数二', number: 23, kind: '解答', score: 11,
  ids: ['eig-similar-prop', 'eig-diag-method'],
  question: String.raw`（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}0&2&-3\\-1&3&-3\\1&-2&a\end{pmatrix}
$$
相似于矩阵
$$
B=\begin{pmatrix}1&-2&0\\0&b&0\\0&3&1\end{pmatrix}.
$$
（Ⅰ）求 $a,b$ 的值；

（Ⅱ）求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵。`,
  answer: String.raw`（Ⅰ）$a=4,b=5$；（Ⅱ）
$$
P=\begin{pmatrix}2&-3&-1\\1&0&-1\\0&1&1\end{pmatrix}
$$`,
  analysis: String.raw`（Ⅰ）$A\sim B\Rightarrow\mathrm{tr}(A)=\mathrm{tr}(B)\Rightarrow3+a=1+b+1$
$$
|A|=|B|\Rightarrow\begin{vmatrix}0&2&-3\\-1&3&-3\\1&-2&a\end{vmatrix}=\begin{vmatrix}1&-2&0\\0&b&0\\0&3&1\end{vmatrix}
$$
$$
\therefore\begin{cases}a-b=-1\\2a-b=3\end{cases}\Rightarrow\begin{cases}a=4\\b=5\end{cases}
$$
（Ⅱ）
$$
A=\begin{pmatrix}0&2&-3\\-1&3&-3\\1&-2&3\end{pmatrix}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}+\begin{pmatrix}-1&2&-3\\-1&2&-3\\1&-2&3\end{pmatrix}=E+C
$$
$$
C=\begin{pmatrix}-1&2&-3\\-1&2&-3\\1&-2&3\end{pmatrix}=\begin{pmatrix}-1\\-1\\1\end{pmatrix}\begin{pmatrix}1&-2&3\end{pmatrix}
$$
$C$ 的特征值 $\lambda_1=\lambda_2=0,\lambda_3=4$。

$\lambda=0$ 时 $(0E-C)x=0$ 的基础解系为 $\xi_1=(2,1,0)^{\mathrm{T}},\xi_2=(-3,0,1)^{\mathrm{T}}$；

$\lambda=5$ 时 $(4E-C)x=0$ 的基础解系为 $\xi_3=(-1,-1,1)^{\mathrm{T}}$。

$A$ 的特征值 $\lambda_A=1+\lambda_C:1,1,5$

令 $P=(\xi_1,\xi_2,\xi_3)=\begin{pmatrix}2&-3&-1\\1&0&-1\\0&1&1\end{pmatrix}$，
$$
\therefore P^{-1}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&5\end{pmatrix}
$$`,
  source: '《2015 数学二解析》第 14–15 页',
});
