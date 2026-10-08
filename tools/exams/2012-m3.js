// 2012 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》第 41–44 页的 2012 年部分；答案与解析取自《2012年数学三真题答案解析》）
EXAMS.push({
  year: 2012, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ["vec-indep-def","vec-indep-crit"],
  question: String.raw`设
$$
\alpha_1=\begin{pmatrix}0\\0\\c_1\end{pmatrix},\quad \alpha_2=\begin{pmatrix}0\\1\\c_2\end{pmatrix},\quad \alpha_3=\begin{pmatrix}1\\-1\\c_3\end{pmatrix},\quad \alpha_4=\begin{pmatrix}-1\\1\\c_4\end{pmatrix},
$$
其中 $c_1,c_2,c_3,c_4$ 为任意常数，则下列向量组线性相关的是（　　）

（A）$\alpha_1,\alpha_2,\alpha_3$　（B）$\alpha_1,\alpha_2,\alpha_4$　（C）$\alpha_1,\alpha_3,\alpha_4$　（D）$\alpha_2,\alpha_3,\alpha_4$`,
  answer: String.raw`（C）`,
  analysis: String.raw`由于
$$
|(\alpha_1,\alpha_3,\alpha_4)|=\begin{vmatrix}0&1&-1\\0&-1&1\\c_1&c_3&c_4\end{vmatrix}=c_1\begin{vmatrix}1&-1\\-1&1\end{vmatrix}=0,
$$
可知 $\alpha_1,\alpha_3,\alpha_4$ 线性相关。故选（C）。`,
  source: '《2012 年数学（三）试题答案》第 2 页',
});

EXAMS.push({
  year: 2012, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ["eig-similar-prop","eig-similar"],
  question: String.raw`设 $A$ 为 3 阶矩阵，$P$ 为 3 阶可逆矩阵，且
$$
P^{-1}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}.
$$
若 $P=(\alpha_1,\alpha_2,\alpha_3)$，$Q=(\alpha_1+\alpha_2,\alpha_2,\alpha_3)$，则 $Q^{-1}AQ=$（　　）

（A）$\begin{pmatrix}1&0&0\\0&2&0\\0&0&1\end{pmatrix}$　（B）$\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}$　（C）$\begin{pmatrix}2&0&0\\0&1&0\\0&0&2\end{pmatrix}$　（D）$\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}$`,
  answer: String.raw`（B）`,
  analysis: String.raw`$$
Q=P\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix},
$$
则
$$
Q^{-1}=\begin{pmatrix}1&0&0\\-1&1&0\\0&0&1\end{pmatrix}P^{-1},
$$
故
$$
Q^{-1}AQ=\begin{pmatrix}1&0&0\\-1&1&0\\0&0&1\end{pmatrix}P^{-1}AP\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}
=\begin{pmatrix}1&0&0\\-1&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}
=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}.
$$
故选（B）。`,
  source: '《2012 年数学（三）试题答案》第 3 页',
});

EXAMS.push({
  year: 2012, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ["mat-elem-relation","mat-adj-identity"],
  question: String.raw`设 $A$ 为 3 阶矩阵，$|A|=3$，$A^{*}$ 为 $A$ 的伴随矩阵，若交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，则 $|BA^{*}|=\underline{\qquad}$。`,
  answer: String.raw`$-27$`,
  analysis: String.raw`由于 $B=E_{12}A$，故
$$
BA^{*}=E_{12}A\cdot A^{*}=|A|E_{12}=3E_{12},
$$
所以
$$
|BA^{*}|=|3E_{12}|=3^3|E_{12}|=27\times(-1)=-27.
$$`,
  source: '《2012 年数学（三）试题答案》第 5 页',
});

EXAMS.push({
  year: 2012, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ["eq-nonhomo-crit","eq-nonhomo-general"],
  question: String.raw`（本题满分 11 分）设
$$
A=\begin{pmatrix}1&a&0&0\\0&1&a&0\\0&0&1&a\\a&0&0&1\end{pmatrix},\qquad \beta=\begin{pmatrix}1\\-1\\0\\0\end{pmatrix}.
$$
（Ⅰ）计算行列式 $|A|$；

（Ⅱ）当实数 $a$ 为何值时，方程组 $Ax=\beta$ 有无穷多解，并求其通解。`,
  answer: String.raw`（Ⅰ）$|A|=1-a^4$；（Ⅱ）$a=-1$ 时方程组有无穷多解，通解为 $x=k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}$（$k$ 为任意常数）。`,
  analysis: String.raw`（Ⅰ）
$$
|A|=1\times\begin{vmatrix}1&a&0\\0&1&a\\0&0&1\end{vmatrix}+a\times(-1)^{4+1}\begin{vmatrix}a&0&0\\1&a&0\\0&1&a\end{vmatrix}=1-a^4.
$$

（Ⅱ）对方程组的增广矩阵作初等行变换：
$$
\begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\a&0&0&1&0\end{pmatrix}
\to\begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&-a^2&0&1&-a\end{pmatrix}
\to\begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&0&a^3&1&-a-a^2\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&0&0&1-a^4&-a-a^2\end{pmatrix}.
$$
要使得原线性方程组有无穷多解，则有 $1-a^4=0$ 及 $-a-a^2=0$，可知 $a=-1$。

此时原线性方程组增广矩阵为 $\begin{pmatrix}1&-1&0&0&1\\0&1&-1&0&-1\\0&0&1&-1&0\\0&0&0&0&0\end{pmatrix}$，进一步化为行最简形得 $\begin{pmatrix}1&0&0&-1&0\\0&1&0&-1&-1\\0&0&1&-1&0\\0&0&0&0&0\end{pmatrix}$，

可知导出组的基础解系为 $\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$，非齐次方程的特解为 $\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}$，故其通解为
$$
x=k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}.
$$`,
  source: '《2012 年数学（三）试题答案》第 9–10 页',
});

EXAMS.push({
  year: 2012, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ["qf-def","qf-orthogonal","eig-orth-diag"],
  question: String.raw`（本题满分 11 分）已知
$$
A=\begin{pmatrix}1&0&1\\0&1&1\\-1&0&a\\0&a&-1\end{pmatrix},
$$
二次型 $f(x_1,x_2,x_3)=x^{\mathrm{T}}(A^{\mathrm{T}}A)x$ 的秩为 2。

（Ⅰ）求实数 $a$ 的值；

（Ⅱ）求正交变换 $x=Qy$ 将 $f$ 化为标准形。`,
  answer: String.raw`$a=-1$；$f$ 的矩阵 $B=\begin{pmatrix}2&0&2\\0&2&2\\2&2&4\end{pmatrix}$，正交变换矩阵 $Q=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}\frac{1}{\sqrt3}&\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\[2pt]\frac{1}{\sqrt3}&-\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\[2pt]-\frac{1}{\sqrt3}&0&\frac{2}{\sqrt6}\end{pmatrix}$，标准形为 $2y_2^2+6y_3^2$。`,
  analysis: String.raw`（Ⅰ）由 $r(A^{\mathrm{T}}A)=r(A)=2$ 可得
$$
\begin{vmatrix}1&0&1\\0&1&1\\-1&0&a\end{vmatrix}=a+1=0\Rightarrow a=-1.
$$

（Ⅱ）
$$
f=x^{\mathrm{T}}A^{\mathrm{T}}Ax=(x_1,x_2,x_3)\begin{pmatrix}2&0&2\\0&2&2\\2&2&4\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=2x_1^2+2x_2^2+4x_3^2+4x_1x_2+4x_2x_3,
$$
则矩阵 $B=\begin{pmatrix}2&0&2\\0&2&2\\2&2&4\end{pmatrix}$。
$$
|\lambda E-B|=\begin{vmatrix}\lambda-2&0&-2\\0&\lambda-2&-2\\-2&-2&\lambda-4\end{vmatrix}=\lambda(\lambda-2)(\lambda-6)=0,
$$
解得 $B$ 矩阵的特征值为 $\lambda_1=0$，$\lambda_2=2$，$\lambda_3=6$。

对于 $\lambda_1=0$，解 $(\lambda_1E-B)X=0$ 得对应的特征向量为 $\eta_1=\begin{pmatrix}1\\1\\-1\end{pmatrix}$；

对于 $\lambda_2=2$，解 $(\lambda_2E-B)X=0$ 得对应的特征向量为 $\eta_2=\begin{pmatrix}1\\-1\\0\end{pmatrix}$；

对于 $\lambda_3=6$，解 $(\lambda_3E-B)X=0$ 得对应的特征向量为 $\eta_3=\begin{pmatrix}1\\1\\2\end{pmatrix}$。

将 $\eta_1,\eta_2,\eta_3$ 单位化可得：
$$
\alpha_1=\frac{1}{\sqrt3}\begin{pmatrix}1\\1\\-1\end{pmatrix},\quad
\alpha_2=\frac{1}{\sqrt2}\begin{pmatrix}1\\-1\\0\end{pmatrix},\quad
\alpha_3=\frac{1}{\sqrt6}\begin{pmatrix}1\\1\\2\end{pmatrix},
$$
取 $Q=(\alpha_1,\alpha_2,\alpha_3)$，则正交变换 $x=Qy$ 将 $f$ 化为标准形 $2y_2^2+6y_3^2$。
`,
  source: '《2012 年数学（三）试题答案》第 10–11 页',
});
