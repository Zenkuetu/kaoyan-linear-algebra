// 2015 · 数学一 · 线性代数（题面取自《2015年考研数学（一）真题》，答案与解析取自《2015数学一解析》）
EXAMS.push({
  year: 2015, subject: '数一', number: 5, kind: '选择', score: 4,
  ids: ['eq-nonhomo-crit', 'eq-rank-relation'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}$，$b=\begin{pmatrix}1\\d\\d^2\end{pmatrix}$。若集合 $\Omega=\{1,2\}$，则线性方程组 $Ax=b$ 有无穷多解的充分必要条件为（　）

（A）$a\notin\Omega,\ d\notin\Omega$　（B）$a\notin\Omega,\ d\in\Omega$　（C）$a\in\Omega,\ d\notin\Omega$　（D）$a\in\Omega,\ d\in\Omega$`,
  answer: '（D）',
  analysis: String.raw`因为 $Ax=b$ 有无数个解，所以 $r(A)=r(\overline{A})<3$，由
$$
|A|=\begin{vmatrix}1&1&1\\1&2&a\\1&4&a^2\end{vmatrix}=(a-1)(a-2)=0
$$
得 $a=1,\ a=2$；

当 $a=1$ 时，
$$
\overline{A}=\begin{pmatrix}1&1&1&1\\1&2&1&d\\1&4&1&d^2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&0&d-1\\0&3&0&d^2-1\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&0&d-1\\0&0&0&d^2-3d+2\end{pmatrix},
$$
因为方程组有无数个解，所以 $d=1$ 或 $d=2$；

当 $a=2$ 时，
$$
\overline{A}=\begin{pmatrix}1&1&1&1\\1&2&2&d\\1&4&4&d^2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&1&d-1\\0&3&3&d^2-1\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&1&d-1\\0&0&0&d^2-3d+2\end{pmatrix},
$$
因为方程组有无数个解，所以 $d=1$ 或 $d=2$，应选（D）。

> 方法点评：本题考查非齐次线性方程组的基本理论。本题非齐次线性方程组有无数个解的两个关键点为：$r(A)<3$ 及 $r(A)=r(\overline{A})$。`,
  source: '《2015 数学一解析》第 1–2 页',
});

EXAMS.push({
  year: 2015, subject: '数一', number: 6, kind: '选择', score: 4,
  ids: ['qf-orthogonal', 'eig-orth-diag'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)$ 在正交变换 $x=Py$ 下的标准形为 $2y_1^2+y_2^2-y_3^2$，其中 $P=(e_1,e_2,e_3)$。若 $Q=(e_1,-e_3,e_2)$，则 $f(x_1,x_2,x_3)$ 在正交变换 $x=Qy$ 下的标准形为（　）

（A）$2y_1^2-y_2^2+y_3^2$　（B）$2y_1^2+y_2^2-y_3^2$　（C）$2y_1^2-y_2^2-y_3^2$　（D）$2y_1^2+y_2^2+y_3^2$`,
  answer: '（A）',
  analysis: String.raw`因为 $f(x_1,x_2,x_3)$ 经过正交变换 $X=PY$ 化为标准形 $2y_1^2+y_2^2-y_3^2$，所以 $A$ 的特征值为 $\lambda_1=2,\lambda_2=1,\lambda_3=-1$，其对应的特征向量为 $e_1,e_2,e_3$，因为 $e_1,-e_3,e_2$ 为特征值 $2,-1,1$ 对应的特征向量，所以 $X=QY$ 下二次型的标准形为 $2y_1^2-y_2^2+y_3^2$，应选（A）。

> 方法点评：本题考查实对称矩阵对角化及二次型理论。
>
> 二次型标准化有配方法和正交变换法，配方法化二次型为标准形时，其系数不一定为矩阵的特征值；正交变换法化二次型为标准形时，其系数一定为特征值，注意特征向量与特征值的次序要保持一致。`,
  source: '《2015 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2015, subject: '数一', number: 13, kind: '填空', score: 4,
  ids: ['det-tridiagonal', 'det-expansion'],
  question: String.raw`$n$ 阶行列式
$$
\begin{vmatrix}2&0&\cdots&0&2\\-1&2&\cdots&0&2\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&2&2\\0&0&\cdots&-1&2\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$2^{n+1}-2$`,
  analysis: String.raw`$$
D_n=\begin{vmatrix}2&0&\cdots&0&2\\-1&2&\cdots&0&2\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&2&2\\0&0&\cdots&-1&2\end{vmatrix}=2D_{n-1}+2\times A_{1n}
$$
$$
=2D_{n-1}+2\times(-1)^{n+1}\times(-1)^{n-1}=2D_{n-1}+2
$$
$$
=2(2D_{n-2}+2)+2=2^2D_{n-2}+2^2+2
$$
$$
=\cdots=2^n+\cdots+2^2+2=\frac{2(1-2^n)}{1-2}=2^{n+1}-2.
$$`,
  source: '《2015 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2015, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['sp-dim-basis', 'sp-transition'],
  question: String.raw`（本题满分 11 分）设向量组 $\alpha_1,\alpha_2,\alpha_3$ 为 $\mathbf{R}^3$ 的一个基，$\beta_1=2\alpha_1+2k\alpha_3$，$\beta_2=2\alpha_2$，$\beta_3=\alpha_1+(k+1)\alpha_3$。

（Ⅰ）证明向量组 $\beta_1,\beta_2,\beta_3$ 为 $\mathbf{R}^3$ 的一个基；

（Ⅱ）当 $k$ 为何值时，存在非零向量 $\xi$ 在基 $\alpha_1,\alpha_2,\alpha_3$ 与基 $\beta_1,\beta_2,\beta_3$ 下的坐标相同，并求所有的 $\xi$。`,
  answer: String.raw`（Ⅰ）见解析；（Ⅱ）$k=0$，$\xi=C(-\alpha_1+\alpha_3)$（$C$ 为任意非零常数）`,
  analysis: String.raw`（Ⅰ）
$$
(\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}2&0&1\\0&2&0\\2k&0&k+1\end{pmatrix},
$$
因为
$$
\begin{vmatrix}2&0&1\\0&2&0\\2k&0&k+1\end{vmatrix}=4\ne 0,
$$
所以 $r(\beta_1,\beta_2,\beta_3)=r(\alpha_1,\alpha_2,\alpha_3)=3$，即 $\beta_1,\beta_2,\beta_3$ 线性无关，所以 $\beta_1,\beta_2,\beta_3$ 为 $\mathbf{R}^3$ 的一组基。

（Ⅱ）令 $\xi$ 在两组基下的坐标都是 $(x_1,x_2,x_3)$，

由 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=x_1\beta_1+x_2\beta_2+x_3\beta_3$，或
$$
x_1(\beta_1-\alpha_1)+x_2(\beta_2-\alpha_2)+x_3(\beta_3-\alpha_3)=0,
$$
整理得
$$
x_1(\alpha_1+2k\alpha_3)+x_2\alpha_2+x_3(\alpha_1+k\alpha_3)=0,
$$
因为 $\xi$ 为非零向量，所以 $x_1(\alpha_1+2k\alpha_3)+x_2\alpha_2+x_3(\alpha_1+k\alpha_3)=0$ 有非零解，从而
$$
|\alpha_1+2k\alpha_3,\ \alpha_2,\ \alpha_1+k\alpha_3|=0.
$$
而
$$
|\alpha_1+2k\alpha_3,\ \alpha_2,\ \alpha_1+k\alpha_3|=|\alpha_1,\alpha_2,\alpha_3|\cdot\begin{vmatrix}1&0&1\\0&1&0\\2k&0&k\end{vmatrix}\ \text{且}\ |\alpha_1,\alpha_2,\alpha_3|\ne 0,
$$
则
$$
\begin{vmatrix}1&0&1\\0&1&0\\2k&0&k\end{vmatrix}=0,
$$
故 $k=0$。

当 $k=0$ 时，由 $x_1(\alpha_1+2k\alpha_3)+x_2\alpha_2+x_3(\alpha_1+k\alpha_3)=0$，即 $\alpha_1x_1+\alpha_2x_2+\alpha_1x_3=0$，或
$$
(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&1\\0&1&0\\0&0&0\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=0,
$$
因为 $\alpha_1,\alpha_2,\alpha_3$ 为一个基，所以 $(\alpha_1,\alpha_2,\alpha_3)$ 可逆，于是
$$
\begin{pmatrix}1&0&1\\0&1&0\\0&0&0\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=0,
$$
故 $\xi$ 在基 $\alpha_1,\alpha_2,\alpha_3$ 或 $\beta_1,\beta_2,\beta_3$ 下坐标为
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=C\begin{pmatrix}-1\\0\\1\end{pmatrix}\ (C\ \text{为任意常数}).
$$

> 方法点评：本题考查向量空间的理论。
>
> 向量空间理论是数学一的专门考查内容，包括：向量空间的概念、基、过渡矩阵、向量在基下的坐标。`,
  source: '《2015 数学一解析》第 6–7 页',
});

EXAMS.push({
  year: 2015, subject: '数一', number: 21, kind: '解答', score: 11,
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
  answer: String.raw`（Ⅰ）$a=4,\ b=5$；（Ⅱ）$P=\begin{pmatrix}2&-3&-1\\1&0&-1\\0&1&1\end{pmatrix}$，$P^{-1}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&5\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）因为 $A\sim B$，所以
$$
\begin{cases}
\mathrm{tr}\,A=\mathrm{tr}\,B,\\
|A|=|B|,
\end{cases}
$$
从而
$$
\begin{cases}
a+3=b+2,\\
2a-3=b,
\end{cases}
$$
解得 $a=4,\ b=5$。

（Ⅱ）因为 $A\sim B$，所以 $A,B$ 的特征值相同。

由
$$
|\lambda E-B|=\begin{vmatrix}\lambda-1&2&0\\0&\lambda-5&0\\0&-3&\lambda-1\end{vmatrix}=(\lambda-1)^2(\lambda-5)=0
$$
得 $A,B$ 的特征值为 $\lambda_1=\lambda_2=1,\ \lambda_3=5$。

将 $\lambda=1$ 代入 $(\lambda E-A)X=0$，即 $(E-A)X=0$，由
$$
E-A=\begin{pmatrix}1&-2&3\\1&-2&3\\-1&2&-3\end{pmatrix}\to\begin{pmatrix}1&-2&3\\0&0&0\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda=1$ 的线性无关的特征向量为
$$
\alpha_1=\begin{pmatrix}2\\1\\0\end{pmatrix},\quad \alpha_2=\begin{pmatrix}-3\\0\\1\end{pmatrix};
$$
将 $\lambda=5$ 代入 $(\lambda E-A)X=0$，即 $(5E-A)X=0$，由
$$
5E-A=\begin{pmatrix}5&-2&3\\1&2&3\\-1&2&1\end{pmatrix}\to\begin{pmatrix}1&-2&-1\\1&2&3\\5&-2&3\end{pmatrix}\to\begin{pmatrix}1&-2&-1\\0&4&4\\0&8&8\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda=5$ 的特征向量为
$$
\alpha_3=\begin{pmatrix}-1\\-1\\1\end{pmatrix},
$$
令
$$
P=\begin{pmatrix}2&-3&-1\\1&0&-1\\0&1&1\end{pmatrix},
$$
则
$$
P^{-1}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&5\end{pmatrix}.
$$`,
  source: '《2015 数学一解析》第 7 页',
});
