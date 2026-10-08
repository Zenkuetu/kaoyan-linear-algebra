// 2012 · 数学一 · 线性代数（题面取自《2012年考研数学（一）真题》，答案与解析取自《2012数学一解析》）
EXAMS.push({
  year: 2012, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['vec-indep-crit', 'vec-indep-concl'],
  question: String.raw`设

$$
\alpha_1=\begin{pmatrix}0\\0\\c_1\end{pmatrix},\quad \alpha_2=\begin{pmatrix}0\\1\\c_2\end{pmatrix},\quad \alpha_3=\begin{pmatrix}1\\-1\\c_3\end{pmatrix},\quad \alpha_4=\begin{pmatrix}-1\\1\\c_4\end{pmatrix},
$$

其中 $c_1,c_2,c_3,c_4$ 为任意常数，则下列向量组线性相关的为（　　）

（A）$\alpha_1,\alpha_2,\alpha_3$．　　（B）$\alpha_1,\alpha_2,\alpha_4$．　　（C）$\alpha_1,\alpha_3,\alpha_4$．　　（D）$\alpha_2,\alpha_3,\alpha_4$．`,
  answer: '（C）',
  analysis: String.raw`方法一

$$
\alpha_3+\alpha_4=\begin{pmatrix}0\\0\\c_3+c_4\end{pmatrix},
$$

因为 $\alpha_3+\alpha_4$ 与 $\alpha_1$ 成比例，所以 $\alpha_1,\alpha_3+\alpha_4$ 线性相关，故 $\alpha_1,\alpha_3,\alpha_4$ 线性相关，应选（C）．

方法二 因为

$$
|\alpha_1,\alpha_3,\alpha_4|=\begin{vmatrix}0&1&-1\\0&-1&1\\c_1&c_3&c_4\end{vmatrix}=0,
$$

所以 $\alpha_1,\alpha_3,\alpha_4$ 线性相关，应选（C）．`,
  source: '《2012 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2012, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['eig-similar-prop', 'eig-similar'],
  question: String.raw`设 $A$ 为 3 阶矩阵，$P$ 为 3 阶可逆矩阵，且 $P^{-1}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}$．若 $P=(\alpha_1,\alpha_2,\alpha_3)$，$Q=(\alpha_1+\alpha_2,\alpha_2,\alpha_3)$，则 $Q^{-1}AQ=$（　　）

（A）$\begin{pmatrix}1&0&0\\0&2&0\\0&0&1\end{pmatrix}$．　　（B）$\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}$．

（C）$\begin{pmatrix}2&0&0\\0&1&0\\0&0&2\end{pmatrix}$．　　（D）$\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}$．`,
  answer: '（B）',
  analysis: String.raw`由

$$
Q=(\alpha_1+\alpha_2,\alpha_2,\alpha_3)=P\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix},
$$

得

$$
Q^{-1}AQ=\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}^{-1}P^{-1}AP\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}
$$

$$
=\begin{pmatrix}1&0&0\\-1&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix},
$$

应选（B）．`,
  source: '《2012 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2012, subject: '数一', number: 13, kind: '填空', score: 5,
  ids: ['mat-rank', 'mat-rank-ineq'],
  question: String.raw`设 $\alpha$ 为 3 维单位列向量，$E$ 为 3 阶单位矩阵，则矩阵 $E-\alpha\alpha^{\mathrm{T}}$ 的秩为 $\underline{\qquad}$．`,
  answer: String.raw`$2$`,
  analysis: String.raw`方法一 取

$$
\alpha=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad \alpha\alpha^{\mathrm{T}}=\begin{pmatrix}1&0&0\\0&0&0\\0&0&0\end{pmatrix},
$$

由

$$
E-\alpha\alpha^{\mathrm{T}}=\begin{pmatrix}0&0&0\\0&1&0\\0&0&1\end{pmatrix},
$$

得 $E-\alpha\alpha^{\mathrm{T}}$ 的秩为 2．

方法二 令 $A=E-\alpha\alpha^{\mathrm{T}}$，则

$$
A^2=(E-\alpha\alpha^{\mathrm{T}})(E-\alpha\alpha^{\mathrm{T}})=E-\alpha\alpha^{\mathrm{T}}=A.
$$

由 $A(E-A)=O$，得 $r(A)+r(E-A)\le 3$．

又由 $r(A)+r(E-A)\ge r(E)=3$，得 $r(A)+r(E-A)=3$．

而 $r(E-A)=r(\alpha\alpha^{\mathrm{T}})=r(\alpha)=1$，所以 $r(A)=r(E-\alpha\alpha^{\mathrm{T}})=2$．`,
  source: '《2012 数学一解析》第 5 页',
});

EXAMS.push({
  year: 2012, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['det-expansion', 'eq-nonhomo-general'],
  question: String.raw`（本题满分 11 分）设

$$
A=\begin{pmatrix}1&a&0&0\\0&1&a&0\\0&0&1&a\\a&0&0&1\end{pmatrix},\quad \beta=\begin{pmatrix}1\\-1\\0\\0\end{pmatrix}.
$$

（Ⅰ）计算行列式 $|A|$；

（Ⅱ）当实数 $a$ 为何值时，方程组 $Ax=\beta$ 有无穷多解，并求其通解．`,
  answer: String.raw`（Ⅰ）$|A|=1-a^4$；（Ⅱ）$a=-1$ 时方程组有无穷多解，通解为 $x=C\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}$（$C$ 为任意常数）．`,
  analysis: String.raw`（Ⅰ）由行列式按行或列展开的性质得

$$
|A|=1\times A_{11}+a\cdot A_{41}=M_{11}-aM_{41}=1-a^4.
$$

（Ⅱ）若 $AX=\beta$ 有无数个解，则 $|A|=0$，即 $a=-1$ 或 $a=1$．

当 $a=-1$ 时，

$$
(A\ \vdots\ \beta)=\begin{pmatrix}1&-1&0&0&\mid&1\\0&1&-1&0&\mid&-1\\0&0&1&-1&\mid&0\\-1&0&0&1&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&0&-1&\mid&0\\0&1&0&-1&\mid&-1\\0&0&1&-1&\mid&0\\0&0&0&0&\mid&0\end{pmatrix},
$$

因为 $r(A)=r(\overline{A})=3<4$，所以方程组 $AX=\beta$ 有无数个解，通解为

$$
X=C\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}\quad (C\ \text{为任意常数});
$$

当 $a=1$ 时，

$$
(A\ \vdots\ \beta)=\begin{pmatrix}1&1&0&0&\mid&1\\0&1&1&0&\mid&-1\\0&0&1&1&\mid&0\\1&0&0&1&\mid&0\end{pmatrix}\to\begin{pmatrix}1&1&0&0&\mid&1\\0&1&1&0&\mid&-1\\0&0&1&1&\mid&0\\0&0&0&0&\mid&-2\end{pmatrix},
$$

因为 $r(A)\ne r(\overline{A})$，所以方程组 $AX=\beta$ 无解．`,
  source: '《2012 数学一解析》第 7 页',
});

EXAMS.push({
  year: 2012, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['qf-orthogonal', 'qf-def'],
  question: String.raw`（本题满分 11 分）已知

$$
A=\begin{pmatrix}1&0&1\\0&1&1\\-1&0&a\\0&a&-1\end{pmatrix},
$$

二次型 $f(x_1,x_2,x_3)=x^{\mathrm{T}}(A^{\mathrm{T}}A)x$ 的秩为 2．

（Ⅰ）求实数 $a$ 的值；

（Ⅱ）求正交变换 $x=Qy$ 将二次型 $f$ 化为标准形．`,
  answer: String.raw`（Ⅰ）$a=-1$；（Ⅱ）$f=2y_2^2+6y_3^2$．`,
  analysis: String.raw`（Ⅰ）

$$
A=\begin{pmatrix}1&0&1\\0&1&1\\-1&0&a\\0&a&-1\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&a+1\\0&0&-1-a\end{pmatrix},
$$

由 $r(A^{\mathrm{T}}A)=2$ 及 $r(A^{\mathrm{T}}A)=r(A)$ 得 $a=-1$．

（Ⅱ）当 $a=-1$ 时，

$$
A^{\mathrm{T}}A=\begin{pmatrix}2&0&2\\0&2&2\\2&2&4\end{pmatrix},
$$

由

$$
|\lambda E-A^{\mathrm{T}}A|=\begin{vmatrix}\lambda-2&0&-2\\0&\lambda-2&-2\\-2&-2&\lambda-4\end{vmatrix}=\lambda(\lambda-2)(\lambda-6)=0,
$$

得 $A^{\mathrm{T}}A$ 的特征值为 $\lambda_1=0$，$\lambda_2=2$，$\lambda_3=6$．

当 $\lambda_1=0$ 时，由 $(0E-A^{\mathrm{T}}A)X=0$ 即 $A^{\mathrm{T}}AX=0$ 得 $\lambda_1=0$ 对应的特征向量为 $\xi_1=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$；

当 $\lambda_2=2$ 时，由 $(2E-A^{\mathrm{T}}A)X=0$ 得 $\lambda_2=2$ 对应的特征向量为 $\xi_2=\begin{pmatrix}1\\-1\\0\end{pmatrix}$；

当 $\lambda_3=6$ 时，由 $(6E-A^{\mathrm{T}}A)X=0$ 得 $\lambda_3=6$ 对应的特征向量为 $\xi_3=\begin{pmatrix}1\\1\\2\end{pmatrix}$，

单位化得

$$
\gamma_1=\frac{1}{\sqrt{3}}\begin{pmatrix}-1\\-1\\1\end{pmatrix},\quad \gamma_2=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\\0\end{pmatrix},\quad \gamma_3=\frac{1}{\sqrt{6}}\begin{pmatrix}1\\1\\2\end{pmatrix},
$$

令

$$
Q=\begin{pmatrix}-\frac{1}{\sqrt{3}}&\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\\-\frac{1}{\sqrt{3}}&-\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\\\frac{1}{\sqrt{3}}&0&\frac{2}{\sqrt{6}}\end{pmatrix},
$$

在正交变换 $X=QY$ 下，二次型 $f$ 的标准形为

$$
f=2y_2^2+6y_3^2.
$$`,
  source: '《2012 数学一解析》第 8 页',
});
