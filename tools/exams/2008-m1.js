// 2008 · 数学一 · 线性代数（题面取自《1987-2009年 考研数学（一）真题》里的 2008 年卷；答案与解析取自《2008 数学一解析》）
EXAMS.push({
  year: 2008, subject: '数一', number: 5, kind: '选择', score: 4,
  ids: ["mat-power","eig-ops"],
  question: String.raw`设 $A$ 为 $n$ 阶非零矩阵，$E$ 为 $n$ 阶单位矩阵，若 $A^3=O$，则（　　）

（A）$E-A$ 不可逆，$E+A$ 不可逆
（B）$E-A$ 不可逆，$E+A$ 可逆
（C）$E-A$ 可逆，$E+A$ 可逆
（D）$E-A$ 可逆，$E+A$ 不可逆`,
  answer: String.raw`（C）`,
  analysis: String.raw`**方法一（逆矩阵的定义）** 由 $A^3=O$，得
$$
E=E-A^3=(E-A)(E+A+A^2).
$$
由可逆矩阵的定义得 $E-A$ 可逆且 $(E-A)^{-1}=E+A+A^2$；再由
$$
E=E+A^3=(E+A)(E-A+A^2)
$$
得 $E+A$ 可逆且 $(E+A)^{-1}=E-A+A^2$，应选（C）。

**方法二（定义法求特征值）** 令 $AX=\lambda X\ (X\ne 0)$，则 $A^3X=\lambda^3X$，由 $A^3=O$ 得 $\lambda^3X=0$，从而 $A$ 的特征值为 $\lambda_1=\lambda_2=\lambda_3=0$，于是 $E-A$ 与 $E+A$ 的特征值为 $1,1,1$，由 $|E-A|=|E+A|=1\ne 0$ 得 $E-A$ 与 $E+A$ 都可逆，应选（C）。`,
  source: '《2008 年数学（一）真题解析》第 1–2 页',
});

EXAMS.push({
  year: 2008, subject: '数一', number: 6, kind: '选择', score: 4,
  ids: ["qf-inertia-index","eig-symmetric"],
  question: String.raw`设 $A$ 为 3 阶实对称矩阵，如果二次曲面方程
$$
(x,y,z)A\begin{pmatrix}x\\y\\z\end{pmatrix}=1
$$
在正交变换下的标准方程的图形如图所示（原题配图：曲面为**双叶双曲面**，两叶沿 $x'$ 轴分离），则 $A$ 的正特征值的个数为（　　）

（A）$0$　（B）$1$　（C）$2$　（D）$3$`,
  answer: String.raw`（B）`,
  analysis: String.raw`题目图中的曲面是由
$$
L:\begin{cases}\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1,\\ z=0\end{cases}
$$
绕 $x$ 轴旋转一周而成的曲面，曲面方程为
$$
\Sigma:\frac{x^2}{a^2}-\frac{y^2}{b^2}-\frac{z^2}{b^2}=1,
$$
则 $A$ 的正特征值个数为 $1$ 个，应选（B）。

> 二次型的标准形不唯一，但二次型的正、负惯性指数是唯一的，即二次型标准化后正、负惯性指数不变。`,
  source: '《2008 年数学（一）真题解析》第 2 页',
});

EXAMS.push({
  year: 2008, subject: '数一', number: 13, kind: '填空', score: 4,
  ids: ["eig-def","eig-ops"],
  question: String.raw`设 $A$ 为 2 阶矩阵，$\alpha_1,\alpha_2$ 为线性无关的 2 维列向量，$A\alpha_1=0$，$A\alpha_2=2\alpha_1+\alpha_2$，则 $A$ 的非零特征值为 $\underline{\qquad}$。`,
  answer: String.raw`$1$`,
  analysis: String.raw`**方法一** 令 $P=(\alpha_1,\alpha_2)$，因为 $\alpha_1,\alpha_2$ 线性无关，所以 $P$ 可逆。由
$$
AP=(A\alpha_1,A\alpha_2)=(0,2\alpha_1+\alpha_2)=P\begin{pmatrix}0&2\\0&1\end{pmatrix},
$$
得 $P^{-1}AP=\begin{pmatrix}0&2\\0&1\end{pmatrix}$，即 $A\sim\begin{pmatrix}0&2\\0&1\end{pmatrix}$，于是
$$
|\lambda E-A|=\begin{vmatrix}\lambda&-2\\0&\lambda-1\end{vmatrix}=\lambda(\lambda-1)=0,
$$
得 $A$ 的非零特征值为 $\lambda=1$。

**方法二** 由 $A\alpha_1=0=0\alpha_1$，得 $\lambda_1=0$ 为 $A$ 的一个特征值。又由 $A\alpha_1=0$，$A\alpha_2=2\alpha_1+\alpha_2$，得
$$
A(2\alpha_1+\alpha_2)=1\cdot(2\alpha_1+\alpha_2),
$$
注意到 $2\alpha_1+\alpha_2$ 为非零向量，从而 $\lambda_2=1$ 为 $A$ 的另一个特征值，故 $A$ 的非零特征值为 $1$。`,
  source: '《2008 年数学（一）真题解析》第 4 页',
});

EXAMS.push({
  year: 2008, subject: '数一', number: 20, kind: '解答', score: 10,
  ids: ["mat-rank-ineq","mat-rank"],
  question: String.raw`（本题满分 10 分）设 $\alpha,\beta$ 为 3 维列向量，矩阵 $A=\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}}$，其中 $\alpha^{\mathrm{T}},\beta^{\mathrm{T}}$ 分别是 $\alpha,\beta$ 的转置。证明：

（Ⅰ）秩 $r(A)\le 2$；

（Ⅱ）若 $\alpha,\beta$ 线性相关，则秩 $r(A)<2$。`,
  answer: String.raw`证明见解析。`,
  analysis: String.raw`【证明】（Ⅰ）
$$
r(A)=r(\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}})\le r(\alpha\alpha^{\mathrm{T}})+r(\beta\beta^{\mathrm{T}})=r(\alpha)+r(\beta)\le 1+1=2;
$$

（Ⅱ）若 $\alpha,\beta$ 线性相关，则 $\alpha,\beta$ 成比例，不妨设 $\beta=k\alpha$，则
$$
A=\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}}=(1+k^2)\alpha\alpha^{\mathrm{T}},
$$
于是 $r(A)=r\big[(1+k^2)\alpha\alpha^{\mathrm{T}}\big]=r(\alpha\alpha^{\mathrm{T}})=r(\alpha)\le 1<2$。`,
  source: '《2008 年数学（一）真题解析》第 7 页',
});

EXAMS.push({
  year: 2008, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ["det-tridiagonal","eq-nonhomo-crit","eq-nonhomo-general"],
  question: String.raw`（本题满分 12 分）设 $n$ 元线性方程组 $Ax=b$，其中
$$
A=\begin{pmatrix}2a&1&&&\\a^2&2a&1&&\\&\ddots&\ddots&\ddots&\\&&a^2&2a&1\\&&&a^2&2a\end{pmatrix},\quad
x=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix},\quad
b=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}.
$$
（Ⅰ）证明行列式 $|A|=(n+1)a^n$；

（Ⅱ）当 $a$ 为何值时，该方程组有唯一解，并求 $x_1$；

（Ⅲ）当 $a$ 为何值时，该方程组有无穷多解，并求通解。`,
  answer: String.raw`（Ⅰ）$|A|=(n+1)a^n$；（Ⅱ）$a\ne 0$ 时方程组有唯一解，$x_1=\dfrac{n}{(n+1)a}$；（Ⅲ）$a=0$ 时方程组有无穷多解，通解为 $X=C\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}+\begin{pmatrix}0\\1\\0\\\vdots\\0\end{pmatrix}$（$C$ 为任意常数）。`,
  analysis: String.raw`（Ⅰ）**方法一（数学归纳法）** 当 $n=1$ 时，$|A|=D_1=2a$，结论显然成立；

设当 $n=k$ 时，$|A|=D_k=(k+1)a^k$；当 $n=k+1$ 时，
$$
|A|=D_{k+1}=2aD_k-a^2D_{k-1}=2a(k+1)a^k-ka^{k+1}=2(k+1)a^{k+1}-ka^{k+1}=(k+2)a^{k+1},
$$
由数学归纳法，对一切的自然数 $n$，有 $|A|=(n+1)a^n$。

**方法二**
$$
|A|=\begin{vmatrix}2a&1&0&\cdots&0\\a^2&2a&1&\cdots&0\\0&a^2&2a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\0&0&0&\cdots&2a\end{vmatrix}
=\begin{vmatrix}2a&1&0&\cdots&0\\0&\dfrac{3a}{2}&1&\cdots&0\\0&a^2&2a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\0&0&0&\cdots&2a\end{vmatrix}
$$
$$
=\cdots=\begin{vmatrix}2a&1&0&\cdots&0\\0&\dfrac{3a}{2}&1&\cdots&0\\0&0&\dfrac{4a}{3}&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\0&0&0&\cdots&\dfrac{(n+1)a}{n}\end{vmatrix}=(n+1)a^n.
$$

**方法三** 令 $D_n=|A|$，将 $D_n$ 按第一列展开，得 $D_n=2aD_{n-1}-a^2D_{n-2}$，从而
$$
D_n-aD_{n-1}=a(D_{n-1}-aD_{n-2}),
$$
由递推关系得
$$
D_n-aD_{n-1}=a(D_{n-1}-aD_{n-2})=\cdots=a^{n-2}(D_2-aD_1)=a^n,
$$
于是
$$
D_n=aD_{n-1}+a^n=a(aD_{n-2}+a^{n-1})+a^n=a^2D_{n-2}+2a^n=\cdots=a^{n-1}D_1+(n-1)a^n=(n+1)a^n.
$$

（Ⅱ）当 $r(A)=n$ 或 $|A|\ne 0$，即 $a\ne 0$ 时，方程组有唯一解。由
$$
D_1=\begin{vmatrix}1&1&0&\cdots&0\\0&2a&1&\cdots&0\\0&a^2&2a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&2a\end{vmatrix}=na^{n-1},
$$
得
$$
x_1=\frac{D_1}{D}=\frac{n}{(n+1)a}.
$$

（Ⅲ）当 $r(A)<n$ 或 $|A|=0$，即 $a=0$ 时，方程组 $AX=b$ 有无数个解，由
$$
\overline{A}=\begin{pmatrix}0&1&0&\cdots&0&1\\0&0&1&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&1&0\\0&0&0&\cdots&0&0\end{pmatrix},
$$
得通解为
$$
X=C\begin{pmatrix}1\\0\\0\\\vdots\\0\end{pmatrix}+\begin{pmatrix}0\\1\\0\\\vdots\\0\end{pmatrix}
$$
（$C$ 为任意常数）。`,
  source: '《2008 年数学（一）真题解析》第 7–8 页',
});
