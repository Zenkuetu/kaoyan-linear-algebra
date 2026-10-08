// 2022 · 数学一 · 线性代数（题面取自《2022年考研数学（一）真题》，答案与解析取自《2022数学一解析》）
EXAMS.push({
  year: 2022, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['eig-diag-crit', 'eig-mult'],
  question: String.raw`下列 4 个条件中，3 阶矩阵 $A$ 可相似对角化的一个充分非必要条件是（　）

（A）$A$ 有 3 个不同的特征值
（B）$A$ 有 3 个线性无关的特征向量
（C）$A$ 有 3 个两两线性无关的特征向量
（D）$A$ 的属于不同特征值的特征向量相互正交`,
  answer: '（A）',
  analysis: String.raw`> 本题主要考查矩阵可相似对角化的条件。要找一个充分非必要条件应满足由该条件可推出 3 阶矩阵 $A$ 可相似对角化，但由 3 阶矩阵 $A$ 可相似对角化却推不出该条件。
> $n$ 阶矩阵 $A$ 与对角矩阵相似的判定条件：充分条件为“$A$ 有 $n$ 个不同的特征值”“$A$ 为实对称矩阵”；充分必要条件为“$A$ 有 $n$ 个线性无关的特征向量”“$A$ 的每个特征值对应的线性无关的特征向量的个数等于该特征值的重数”。

依次分析四个选项。

选项 A 是充分非必要条件。若矩阵 $A$ 具有 3 个不同的特征值，则该矩阵有 3 个线性无关的特征向量，从而能够相似对角化。但是矩阵 $A$ 能相似对角化并不意味着 $A$ 一定有 3 个不同的特征值。例如 3 阶单位矩阵 $E$，该矩阵自身即为对角矩阵，但仅有一个三重特征值 $1$，没有不同的特征值。应选 A。

选项 B 是充分必要条件。

选项 C 是必要非充分条件。若 $A$ 能相似对角化，则 $A$ 必然有 3 个线性无关的特征向量，从而有 3 个两两线性无关的特征向量。但反之并不成立，因为 3 个向量两两线性无关并不意味着 3 个向量线性无关。要举选项 C 不充分的例子，可以找到一个具有 3 重特征值，但却只有两个线性无关的特征向量的 3 阶矩阵：
$$
\text{取}\ A=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix},
$$
则 $0$ 是 $A$ 的 3 重特征值，$\xi_1=\begin{pmatrix}1\\0\\0\end{pmatrix}$ 和 $\xi_2=\begin{pmatrix}0\\1\\0\end{pmatrix}$ 是 $A$ 的属于特征值 $0$ 的两个线性无关的特征向量。取 $\xi_3=\begin{pmatrix}1\\1\\0\end{pmatrix}$，则 $\xi_3$ 也是 $A$ 的属于特征值 $0$ 的一个特征向量，$\xi_1,\xi_2,\xi_3$ 两两线性无关，但是 $\xi_1,\xi_2,\xi_3$ 线性相关，$A$ 也不能相似对角化。

选项 D 既不是充分条件，也不是必要条件。下面说明选项 D 的不必要性。取
$$
\xi_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad\xi_2=\begin{pmatrix}1\\1\\0\end{pmatrix},\quad\xi_3=\begin{pmatrix}0\\0\\1\end{pmatrix},
$$
则 $\xi_1,\xi_2,\xi_3$ 两两不正交。令 $P=(\xi_1,\xi_2,\xi_3)$，则 $A$ 与对角矩阵相似，但是 $A$ 的属于不同特征值的特征向量均不正交。`,
  source: '《2022 数学一解析》第 8–9 页',
});

EXAMS.push({
  year: 2022, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['eq-samesol', 'eq-AX-O-AB-O'],
  question: String.raw`设 $A,B$ 为 $n$ 阶矩阵，$E$ 为 $n$ 阶单位矩阵，若方程组 $Ax=0$ 与 $Bx=0$ 同解，则（　）

（A）$\begin{pmatrix}A&O\\E&B\end{pmatrix}y=0$ 只有零解
（B）$\begin{pmatrix}E&A\\O&AB\end{pmatrix}y=0$ 只有零解
（C）$\begin{pmatrix}A&B\\O&B\end{pmatrix}y=0$ 与 $\begin{pmatrix}B&A\\O&A\end{pmatrix}y=0$ 同解
（D）$\begin{pmatrix}AB&B\\O&A\end{pmatrix}y=0$ 与 $\begin{pmatrix}BA&A\\O&B\end{pmatrix}y=0$ 同解`,
  answer: '（C）',
  analysis: String.raw`> 本题主要考查方程组的同解问题。$Ax=0$ 与 $Bx=0$ 同解，说明 $Ax=0$ 的解都是 $Bx=0$ 的解，且 $Bx=0$ 的解也都是 $Ax=0$ 的解。

设 $y_1,y_2$ 均为 $n$ 维列向量，$y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$。对 $\begin{pmatrix}A&B\\O&B\end{pmatrix}$ 和 $\begin{pmatrix}B&A\\O&A\end{pmatrix}$ 分别作初等行变换：
$$
\begin{pmatrix}E&-E\\O&E\end{pmatrix}\begin{pmatrix}A&B\\O&B\end{pmatrix}=\begin{pmatrix}A&O\\O&B\end{pmatrix},\qquad \begin{pmatrix}E&-E\\O&E\end{pmatrix}\begin{pmatrix}B&A\\O&A\end{pmatrix}=\begin{pmatrix}B&O\\O&A\end{pmatrix}.
$$
于是，$\begin{pmatrix}A&B\\O&B\end{pmatrix}y=0$ 等价于 $\begin{pmatrix}A&O\\O&B\end{pmatrix}y=0$，即 $\begin{cases}Ay_1=0,\\By_2=0,\end{cases}$ 该方程组的解 $y$ 满足 $y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，其中 $y_1$ 为 $Ax=0$ 的解，$y_2$ 为 $Bx=0$ 的解。

同理，$\begin{pmatrix}B&A\\O&A\end{pmatrix}y=0$ 等价于 $\begin{pmatrix}B&O\\O&A\end{pmatrix}y=0$，即 $\begin{cases}By_1=0,\\Ay_2=0,\end{cases}$ 该方程组的解 $y$ 满足 $y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，其中 $y_1$ 为 $Bx=0$ 的解，$y_2$ 为 $Ax=0$ 的解。

由于 $Ax=0$ 与 $Bx=0$ 同解，故选项 C 中的两个方程组同解。应选 C。

同选项 C 的分析，选项 D 中的第一个方程组可化为
$$
\begin{pmatrix}AB&B\\O&A\end{pmatrix}\begin{pmatrix}y_1\\y_2\end{pmatrix}=\begin{pmatrix}ABy_1+By_2\\Ay_2\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix}.
$$
展开可得 $\begin{cases}ABy_1+By_2=0,\\Ay_2=0.\end{cases}$ 由于 $Ax=0$ 与 $Bx=0$ 同解，故该方程组等价于 $\begin{cases}ABy_1=0,\\Ay_2=0.\end{cases}$ 同理可得，$\begin{pmatrix}BA&A\\O&B\end{pmatrix}y=0$ 等价于 $\begin{cases}BAy_1=0,\\By_2=0.\end{cases}$ 但是 $ABx=0$ 与 $BAx=0$ 并不一定同解。取 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix},B=\begin{pmatrix}0&1\\0&1\end{pmatrix}$，则 $AB=\begin{pmatrix}0&1\\0&0\end{pmatrix},BA=\begin{pmatrix}0&0\\0&0\end{pmatrix}$，$ABx=0$ 与 $BAx=0$ 不同解。`,
  source: '《2022 数学一解析》第 10 页',
});

EXAMS.push({
  year: 2022, subject: '数一', number: 7, kind: '选择', score: 5,
  ids: ['vec-equivalent', 'vec-rank-table'],
  question: String.raw`设 $\alpha_1=(\lambda,1,1)^{\mathrm{T}},\alpha_2=(1,\lambda,1)^{\mathrm{T}},\alpha_3=(1,1,\lambda)^{\mathrm{T}},\alpha_4=(1,\lambda,\lambda^2)^{\mathrm{T}}$，若 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 等价，则 $\lambda$ 的取值范围是（　）

（A）$\{0,1\}$　（B）$\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne -2\}$
（C）$\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne -1,\lambda\ne -2\}$　（D）$\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne -1\}$`,
  answer: '（C）',
  analysis: String.raw`> 本题主要考查向量组等价。向量组 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 等价的充分必要条件是 $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$。

（法二）分别计算 $|\alpha_1,\alpha_2,\alpha_3|$，$|\alpha_1,\alpha_2,\alpha_4|$。
$$
|\alpha_1,\alpha_2,\alpha_3|=\begin{vmatrix}\lambda&1&1\\1&\lambda&1\\1&1&\lambda\end{vmatrix}=\begin{vmatrix}\lambda&1-\lambda&1-\lambda^2\\1&\lambda-1&1-\lambda\\1&0&0\end{vmatrix}=(1-\lambda)^2(\lambda+2).
$$
$$
|\alpha_1,\alpha_2,\alpha_4|=\begin{vmatrix}\lambda&1&1\\1&\lambda&\lambda\\1&1&\lambda^2\end{vmatrix}=\begin{vmatrix}\lambda&1-\lambda&1-\lambda^3\\1&\lambda-1&\lambda-\lambda^2\\1&0&0\end{vmatrix}=(1-\lambda)^2(1+\lambda)^2.
$$
当 $\lambda\ne 1,-2,-1$ 时，$|\alpha_1,\alpha_2,\alpha_3|$ 与 $|\alpha_1,\alpha_2,\alpha_4|$ 均不为 $0$。此时 $\alpha_1,\alpha_2,\alpha_3$ 和 $\alpha_1,\alpha_2,\alpha_4$ 均为 3 维列向量组的极大无关组，从而等价。

当 $\lambda=1$ 时，$\alpha_1=\alpha_2=\alpha_3=\alpha_4=\begin{pmatrix}1\\1\\1\end{pmatrix}$。此时 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 显然等价。

当 $\lambda=-2$ 或 $\lambda=-1$ 时，$|\alpha_1,\alpha_2,\alpha_3|\ne|\alpha_1,\alpha_2,\alpha_4|$，且其中一个为 $0$，另一个不为 $0$，说明两向量组的秩不相等，从而不等价。

综上所述，$\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 等价当且仅当 $\lambda\ne -2$ 且 $\lambda\ne -1$。应选 C。`,
  source: '《2022 数学一解析》第 11–12 页',
});

EXAMS.push({
  year: 2022, subject: '数一', number: 15, kind: '填空', score: 5,
  ids: ['mat-inv-method', 'mat-invertible-crit'],
  question: String.raw`已知矩阵 $A$ 和 $E-A$ 可逆，其中 $E$ 为单位矩阵，若矩阵 $B$ 满足 $[E-(E-A)^{-1}]B=A$，则 $B-A=\underline{\qquad}$。`,
  answer: String.raw`$-E$`,
  analysis: String.raw`> 本题主要考查矩阵运算。已知等式中，$E-(E-A)^{-1}$ 是比较复杂的因式，故可以考虑先对其进行转化。

（法一）在 $[E-(E-A)^{-1}]B=A$ 两端同时左乘 $E-A$，可得
$$
[E-A-(E-A)(E-A)^{-1}]B=(E-A)A.
$$
展开整理，可得 $-AB=A-A^2$。由于 $A$ 可逆，故上式两端同时左乘 $A^{-1}$ 可得 $-B=E-A$，即 $B-A=-E$。

（法二）注意到 $[E-(E-A)^{-1}](E-A)=E-A-E=-A$，故由 $A$ 可逆可得 $[E-(E-A)^{-1}](E-A)(-A^{-1})=E$，即 $[E-(E-A)^{-1}](E-A^{-1})=E$。于是，$E-(E-A)^{-1}$ 与 $E-A^{-1}$ 互为逆矩阵。在 $[E-(E-A)^{-1}]B=A$ 两端同时左乘 $E-A^{-1}$，可得 $B=(E-A^{-1})A=A-E$。因此，$B-A=-E$。`,
  source: '《2022 数学一解析》第 19–20 页',
});

EXAMS.push({
  year: 2022, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['qf-orthogonal', 'qf-canonical', 'eig-orth-diag'],
  question: String.raw`（本题满分 12 分）

设二次型 $f(x_1,x_2,x_3)=\displaystyle\sum_{i=1}^{3}\sum_{j=1}^{3}ijx_ix_j$。

（Ⅰ）写出 $f(x_1,x_2,x_3)$ 对应的矩阵；

（Ⅱ）求正交变换 $x=Qy$ 将 $f(x_1,x_2,x_3)$ 化为标准形；

（Ⅲ）求 $f(x_1,x_2,x_3)=0$ 的解。`,
  answer: String.raw`（Ⅰ）$A=\begin{pmatrix}1&2&3\\2&4&6\\3&6&9\end{pmatrix}$；（Ⅱ）$Q=\begin{pmatrix}\dfrac{1}{\sqrt{14}}&-\dfrac{2}{\sqrt{5}}&-\dfrac{3}{\sqrt{70}}\\[2mm]\dfrac{2}{\sqrt{14}}&\dfrac{1}{\sqrt{5}}&-\dfrac{6}{\sqrt{70}}\\[2mm]\dfrac{3}{\sqrt{14}}&0&\dfrac{5}{\sqrt{70}}\end{pmatrix}$，$x=Qy$ 将 $f$ 化为标准形 $14y_1^2$；（Ⅲ）$x=k_1\begin{pmatrix}-2\\1\\0\end{pmatrix}+k_2\begin{pmatrix}-3\\0\\1\end{pmatrix}$（$k_1,k_2$ 为任意常数）`,
  analysis: String.raw`（Ⅰ）根据二次型 $f$ 的表达式，其对应的对称矩阵 $A$ 的 $(i,j)$ 元 $a_{ij}=ij\ (i,j=1,2,3)$。因此，
$$
A=\begin{pmatrix}1&2&3\\2&4&6\\3&6&9\end{pmatrix}.
$$

（Ⅱ）由第（Ⅰ）问可知，$A$ 是一个秩为 $1$，且迹为 $14$ 的实对称矩阵。由于实对称矩阵必能相似对角化，且相似的矩阵具有相同的秩与迹，故 $A$ 相似于对角矩阵
$$
\begin{pmatrix}14&0&0\\0&0&0\\0&0&0\end{pmatrix}.
$$
$A$ 的特征值为 $14,0,0$。

下面分别计算 $A$ 的属于特征值 $0$ 和 $14$ 的特征向量。考虑 $(0E-A)x=0$。
$$
-A=\begin{pmatrix}-1&-2&-3\\-2&-4&-6\\-3&-6&-9\end{pmatrix}\to\begin{pmatrix}1&2&3\\0&0&0\\0&0&0\end{pmatrix}.
$$
于是，$-Ax=0$ 等价于方程组 $x_1+2x_2+3x_3=0$。分别令 $\begin{pmatrix}x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\0\end{pmatrix},\begin{pmatrix}0\\1\end{pmatrix}$，可得 $\xi_2=\begin{pmatrix}-2\\1\\0\end{pmatrix},\xi_3=\begin{pmatrix}-3\\0\\1\end{pmatrix}$。

由 $\xi_2,\xi_3$ 满足的方程也可知，$\xi_2,\xi_3$ 均与向量 $\begin{pmatrix}1\\2\\3\end{pmatrix}$ 正交。并且，在三维向量空间中，$k\begin{pmatrix}1\\2\\3\end{pmatrix}$（$k$ 为任意非零常数）代表与 $\xi_2,\xi_3$ 均正交的唯一方向。由于实对称矩阵属于不同特征值的特征向量相互正交，故向量 $\xi_1=\begin{pmatrix}1\\2\\3\end{pmatrix}$ 即矩阵 $A$ 的属于特征值 $14$ 的一个特征向量。

将 $\xi_1,\xi_2,\xi_3$ 单位正交化。实际上，由于 $\xi_1$ 与 $\xi_2,\xi_3$ 均正交，故正交化的过程只需将 $\xi_2,\xi_3$ 正交化：
$$
\beta_1=\xi_1,\qquad \beta_2=\xi_2,
$$
$$
\beta_3=\xi_3-\dfrac{(\beta_2,\xi_3)}{\|\beta_2\|^2}\beta_2=\begin{pmatrix}-3\\0\\1\end{pmatrix}-\dfrac{6}{5}\begin{pmatrix}-2\\1\\0\end{pmatrix}=\begin{pmatrix}-\dfrac{3}{5}\\-\dfrac{6}{5}\\1\end{pmatrix}.
$$
将 $\beta_1,\beta_2,\beta_3$ 单位化，可得
$$
\varepsilon_1=\dfrac{\beta_1}{\|\beta_1\|}=\dfrac{1}{\sqrt{14}}\begin{pmatrix}1\\2\\3\end{pmatrix},\quad
\varepsilon_2=\dfrac{\beta_2}{\|\beta_2\|}=\dfrac{1}{\sqrt{5}}\begin{pmatrix}-2\\1\\0\end{pmatrix},\quad
\varepsilon_3=\dfrac{\beta_3}{\|\beta_3\|}=\dfrac{1}{\sqrt{70}}\begin{pmatrix}-3\\-6\\5\end{pmatrix}.
$$
令 $Q=(\varepsilon_1,\varepsilon_2,\varepsilon_3)$，可得
$$
Q^{-1}AQ=Q^{\mathrm{T}}AQ=\begin{pmatrix}14&0&0\\0&0&0\\0&0&0\end{pmatrix},
$$
即正交变换 $x=Qy$ 将二次型 $f$ 化为标准形 $14y_1^2$。

（Ⅲ）（法一）由二次型 $f(x_1,x_2,x_3)$ 的表达式可知，
$$
f(x_1,x_2,x_3)=x_1^2+4x_2^2+9x_3^2+4x_1x_2+6x_1x_3+12x_2x_3=(x_1+2x_2+3x_3)^2.
$$
因此，$f(x_1,x_2,x_3)=0$ 当且仅当 $x_1+2x_2+3x_3=0$。由第（Ⅱ）问的结果可知，该方程组的通解可取为 $k_1\begin{pmatrix}-2\\1\\0\end{pmatrix}+k_2\begin{pmatrix}-3\\0\\1\end{pmatrix}$，其中 $k_1,k_2$ 为任意常数。

（法二）根据第（Ⅱ）问的结果，$f$ 在正交变换 $x=Qy$ 下的标准形为 $14y_1^2$，故当 $y_1=0$ 时，$14y_1^2=0$。从而，当 $\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=Q\begin{pmatrix}0\\y_2\\y_3\end{pmatrix}$ 时，$f(x_1,x_2,x_3)=0$。将
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}\dfrac{1}{\sqrt{14}}&-\dfrac{2}{\sqrt{5}}&-\dfrac{3}{\sqrt{70}}\\[2mm]\dfrac{2}{\sqrt{14}}&\dfrac{1}{\sqrt{5}}&-\dfrac{6}{\sqrt{70}}\\[2mm]\dfrac{3}{\sqrt{14}}&0&\dfrac{5}{\sqrt{70}}\end{pmatrix}\begin{pmatrix}0\\y_2\\y_3\end{pmatrix}
$$
展开可得
$$
\begin{cases}x_1=-\dfrac{2}{\sqrt{5}}y_2-\dfrac{3}{\sqrt{70}}y_3,\\[2mm]x_2=\dfrac{1}{\sqrt{5}}y_2-\dfrac{6}{\sqrt{70}}y_3,\\[2mm]x_3=\dfrac{5}{\sqrt{70}}y_3,\end{cases}
$$
$y_2,y_3$ 可取任意常数。不妨令 $h_1=\dfrac{y_2}{\sqrt{5}},k_2=\dfrac{y_3}{\sqrt{70}}$，则 $f(x_1,x_2,x_3)=0$ 的解可以取为
$$
\begin{cases}x_1=-2k_1-3k_2,\\x_2=k_1-6k_2,\\x_3=5k_2,\end{cases}
$$
其中 $k_1,k_2$ 为任意常数。`,
  source: '《2022 数学一解析》第 26–27 页',
});
