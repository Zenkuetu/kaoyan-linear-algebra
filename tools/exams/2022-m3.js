// 2022 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》，答案与解析取自《2022年数学三真题答案解析》）
EXAMS.push({
  year: 2022, subject: '数三', number: 5, kind: '选择', score: 5,
  ids: ['eig-similar', 'eig-diag-crit'],
  question: String.raw`设 $A$ 为 3 阶矩阵，
$$
\Lambda=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&0\end{pmatrix},
$$
则 $A$ 的特征值为 $1,-1,0$ 的充分必要条件是（ ）

（A）存在可逆矩阵 $P,Q$，使得 $A=P\Lambda Q$

（B）存在可逆矩阵 $P$，使得 $A=P\Lambda P^{-1}$

（C）存在正交矩阵 $Q$，使得 $A=Q\Lambda Q^{-1}$

（D）存在可逆矩阵 $P$，使得 $A=P\Lambda P^{\mathrm{T}}$`,
  answer: '（B）',
  analysis: String.raw`本题主要考查矩阵相似的条件。

3 阶矩阵 $A$ 的特征值为 $1,-1,0$ 意味着 $A$ 有 3 个不同的特征值，从而相似于与它具有相同特征值的对角矩阵，即 $\Lambda$。

**矩阵相似的定义** 设 $A,B$ 都是 $n$ 阶矩阵，若有可逆矩阵 $P$，使 $P^{-1}AP=B$，则称 $B$ 是 $A$ 的相似矩阵，或者称矩阵 $A$ 与 $B$ 相似。

解 3 阶矩阵 $A$ 的特征值为 $1,-1,0$ 意味着 $A$ 有 3 个不同的特征值，从而 $A$ 相似于与它具有相同特征值的对角矩阵，即 $\Lambda$。于是，$A$ 的特征值为 $1,-1,0$ 的充分必要条件即 $A$ 与 $\Lambda$ 相似的充分必要条件。

选项 B 实际上为 $A$ 与 $\Lambda$ 相似的定义，即存在可逆矩阵 $P$，使得 $A=P^{-1}\Lambda P$，也即 $A=P\Lambda P^{-1}$。因此，应选 B。`,
  source: '《2022 数学三解析》第 9 页',
});

EXAMS.push({
  year: 2022, subject: '数三', number: 6, kind: '选择', score: 5,
  ids: ['eq-nonhomo-crit', 'eq-rank-relation'],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}1&1&1\\1&a&a^2\\1&b&b^2\end{pmatrix},\quad b=\begin{pmatrix}1\\2\\4\end{pmatrix},
$$
则线性方程组 $Ax=b$ 的解的情况为（ ）

（A）无解　（B）有解　（C）有无穷多解或无解　（D）有唯一解或无解`,
  answer: '（D）',
  analysis: String.raw`本题主要考查线性方程组的解的情况。

本题的方程组的系数矩阵带参数，故需要分情况讨论。但若注意到系数矩阵行列式与范德蒙德行列式有关，则有一种情况实际上是很好判断的。

**范德蒙德行列式** 形如 $V_n=\begin{vmatrix}1&1&\cdots&1\\x_1&x_2&\cdots&x_n\\x_1^2&x_2^2&\cdots&x_n^2\\\vdots&\vdots&&\vdots\\x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}\end{vmatrix}$ 的 $n$ 阶行列式被称为范德蒙德行列式，$V_n=\prod\limits_{n\ge i>j\ge 1}(x_i-x_j)$。不难发现，若存在 $x_i=x_j\ (i\ne j)$，则 $V_n=0$，否则 $V_n\ne 0$。

解 （法一）注意到
$$
|A|=\begin{vmatrix}1&1&1\\1&a&a^2\\1&b&b^2\end{vmatrix}=\begin{vmatrix}1&1&1\\1&a&b\\1&a^2&b^2\end{vmatrix}=(b-a)(b-1)(a-1).
$$
当 $a\ne 1,b\ne 1$，且 $a\ne b$ 时，$|A|\ne 0$。由克拉默法则可知，此时方程组 $Ax=b$ 有唯一解。

当 $a=1$ 时，
$$
(A,b)=\begin{pmatrix}1&1&1&1\\1&1&1&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\1&b&b^2&4\end{pmatrix}.
$$
$r(A,b)\ne r(A)$，方程组无解。同理可得，当 $b=1$ 时，$r(A,b)\ne r(A)$，方程组无解。

当 $a=b$ 时，
$$
(A,b)=\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\0&0&0&2\end{pmatrix}.
$$
$r(A,b)\ne r(A)$，方程组无解。

综上所述，方程组 $Ax=b$ 的解的情况只有两种可能，有唯一解或无解。应选 D。

（法二）直接对增广矩阵 $(A,b)$ 作初等行变换。
$$
(A,b)=\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&a-1&a^2-1&1\\0&b-1&b^2-1&3\end{pmatrix}.
$$
当 $a=b=1$ 时，$r(A)=1,r(A,b)=2$，方程组无解。

当 $a=1,b\ne 1$ 或 $a\ne 1,b=1$ 时，$r(A)=2,r(A,b)=3$，方程组无解。

当 $a=b$，但均不等于 1 时，$r(A)=2,r(A,b)=3$，方程组无解。

当 $a\ne 1,b\ne 1$，且 $a\ne b$ 时，$r(A)=r(A,b)=3$。方程组有唯一解。

综上所述，方程组 $Ax=b$ 的解的情况只有两种可能，有唯一解或无解。应选 D。`,
  source: '《2022 数学三解析》第 11–12 页',
});

EXAMS.push({
  year: 2022, subject: '数三', number: 7, kind: '选择', score: 5,
  ids: ['vec-equivalent', 'vec-rank-table'],
  question: String.raw`设 $\alpha_1=(\lambda,1,1)^{\mathrm{T}},\alpha_2=(1,\lambda,1)^{\mathrm{T}},\alpha_3=(1,1,\lambda)^{\mathrm{T}},\alpha_4=(1,\lambda,\lambda^2)^{\mathrm{T}}$，若 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 等价，则 $\lambda$ 的取值范围是（ ）

（A）$\{0,1\}$　（B）$\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne -2\}$

（C）$\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne -1,\lambda\ne -2\}$　（D）$\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne -1\}$`,
  answer: '（C）',
  analysis: String.raw`本题主要考查向量组等价。

向量组 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 等价的充分必要条件是 $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$。由这一条件出发，可以考虑对矩阵 $(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ 作初等行变换并讨论秩来得到 $\lambda$ 的取值。

另一方面，也可以通过计算 $|\alpha_1,\alpha_2,\alpha_3|$ 和 $|\alpha_1,\alpha_2,\alpha_4|$ 来讨论 $\alpha_1,\alpha_2,\alpha_3$ 和 $\alpha_1,\alpha_2,\alpha_4$ 的秩。当它们均不为 0 时，这两个向量组都是 3 维向量组的极大无关组，从而是等价的。此外，还需讨论行列式均为 0 时两个向量组是否等价。

解 （法一）当 $\lambda=1$ 时，$\alpha_1=\alpha_2=\alpha_3=\alpha_4=\begin{pmatrix}1\\1\\1\end{pmatrix}$。此时 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 显然等价。

当 $\lambda\ne 1$ 时，考虑矩阵 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$。
$$
A=\begin{pmatrix}\lambda&1&1&1\\1&\lambda&1&\lambda\\1&1&\lambda&\lambda^2\end{pmatrix}\to\begin{pmatrix}1&\lambda&1&\lambda\\1&1&\lambda&\lambda^2\\\lambda&1&1&1\end{pmatrix}\xrightarrow{r_2-r_1,\ r_3-\lambda r_1}\begin{pmatrix}1&\lambda&1&\lambda\\0&1-\lambda&\lambda-1&\lambda^2-\lambda\\0&1-\lambda^2&1-\lambda&1-\lambda^2\end{pmatrix}
$$
$$
\xrightarrow{r_2\times\frac{1}{1-\lambda},\ r_3\times\frac{1}{1-\lambda}}\begin{pmatrix}1&\lambda&1&\lambda\\0&1&-1&-\lambda\\0&1+\lambda&1&1+\lambda\end{pmatrix}\xrightarrow{r_3-(1+\lambda)r_2}\begin{pmatrix}1&\lambda&1&\lambda\\0&1&-1&-\lambda\\0&0&\lambda+2&(\lambda+1)^2\end{pmatrix}.
$$
（$r_i^*$ 表示对第 $i$ 行作初等行变换后所得新的第 $i$ 行，每作一次初等行变换，加一个 $*$。）

由于 $A$ 有 2 阶非零子式 $\begin{vmatrix}\lambda&1\\1&\lambda\end{vmatrix}$，故 $r(A)\ge 2$。另一方面，因为不存在 $\lambda$ 满足 $\lambda+2=(\lambda+1)^2=0$，所以 $r(A)=3$。

$r(\alpha_1,\alpha_2,\alpha_3)=3$ 当且仅当 $\lambda\ne -2$。$r(\alpha_1,\alpha_2,\alpha_4)=3$ 当且仅当 $\lambda\ne -1$。

因此，当 $\lambda\ne 1$ 时，$r(A)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2,\alpha_4)$ 当且仅当 $\lambda\ne -2$ 且 $\lambda\ne -1$。

注意到 $\lambda=1$ 也包含在条件 $\lambda\ne -2$ 且 $\lambda\ne -1$ 中，故 $r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2,\alpha_4)$ 当且仅当 $\lambda\ne -2$ 且 $\lambda\ne -1$。

综上所述，应选 C。

（法二）分别计算 $|\alpha_1,\alpha_2,\alpha_3|$，$|\alpha_1,\alpha_2,\alpha_4|$。
$$
|\alpha_1,\alpha_2,\alpha_3|=\begin{vmatrix}\lambda&1&1\\1&\lambda&1\\1&1&\lambda\end{vmatrix}=\begin{vmatrix}\lambda&1-\lambda&1-\lambda^2\\1&\lambda-1&1-\lambda\\1&0&0\end{vmatrix}=(1-\lambda)^2(\lambda+2).
$$
$$
|\alpha_1,\alpha_2,\alpha_4|=\begin{vmatrix}\lambda&1&1\\1&\lambda&\lambda\\1&1&\lambda^2\end{vmatrix}=\begin{vmatrix}\lambda&1-\lambda&1-\lambda^3\\1&\lambda-1&\lambda-\lambda^2\\1&0&0\end{vmatrix}=(1-\lambda)^2(1+\lambda)^2.
$$
当 $\lambda\ne 1,-2,-1$ 时，$|\alpha_1,\alpha_2,\alpha_3|$ 与 $|\alpha_1,\alpha_2,\alpha_4|$ 均不为 0。此时，$\alpha_1,\alpha_2,\alpha_3$ 和 $\alpha_1,\alpha_2,\alpha_4$ 均为 3 维列向量组的极大无关组，从而等价。

当 $\lambda=1$ 时，$\alpha_1=\alpha_2=\alpha_3=\alpha_4=\begin{pmatrix}1\\1\\1\end{pmatrix}$。此时 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 显然等价。

当 $\lambda=-2$ 或 $\lambda=-1$ 时，$|\alpha_1,\alpha_2,\alpha_3|\ne|\alpha_1,\alpha_2,\alpha_4|$，且其中一个为 0，另一个不为 0，说明两向量组的秩不相等，从而不等价。

综上所述，$\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 等价当且仅当 $\lambda\ne -2$ 且 $\lambda\ne -1$。应选 C。`,
  source: '《2022 数学三解析》第 13–14 页',
});

EXAMS.push({
  year: 2022, subject: '数三', number: 15, kind: '填空', score: 5,
  ids: ['mat-elem-mat', 'mat-elem-relation', 'mat-inv-method'],
  question: String.raw`设 $A$ 为 3 阶矩阵，交换 $A$ 的第 2 行和第 3 行，再将第 2 列的 $-1$ 倍加到第 1 列，得到矩阵
$$
\begin{pmatrix}-2&1&-1\\1&-1&0\\-1&0&0\end{pmatrix},
$$
则 $A^{-1}$ 的迹 $\mathrm{tr}(A^{-1})=\underline{\qquad}$。`,
  answer: String.raw`$-1$`,
  analysis: String.raw`本题主要考查矩阵运算，包括矩阵的初等变换与矩阵求逆等。

写出条件中所给初等变换对应的初等矩阵，结合已知矩阵可以得到 $A^{-1}$ 的表达式，从而得到 $A^{-1}$ 的迹。

解 交换第 2 行和第 3 行对应左乘初等矩阵 $P_1=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}$，将第 2 列的 $-1$ 倍加到第 1 列对应右乘初等矩阵 $P_2=\begin{pmatrix}1&0&0\\-1&1&0\\0&0&1\end{pmatrix}$。记 $B=\begin{pmatrix}-2&1&-1\\1&-1&0\\-1&0&0\end{pmatrix}$。于是，$P_1AP_2=B$，从而 $A=P_1^{-1}BP_2^{-1}$。由此可得，$A^{-1}=P_2B^{-1}P_1$。

下面利用初等行变换计算 $B^{-1}$。
$$
(B,E)=\begin{pmatrix}-2&1&-1&1&0&0\\1&-1&0&0&1&0\\-1&0&0&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&0&0&-1\\1&-1&0&0&1&0\\-2&1&-1&1&0&0\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&0&0&0&-1\\0&-1&0&0&1&1\\0&1&-1&1&0&-2\end{pmatrix}\to\begin{pmatrix}1&0&0&0&0&-1\\0&-1&0&0&1&1\\0&0&-1&1&1&-1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&0&0&0&-1\\0&1&0&0&-1&-1\\0&0&1&-1&-1&1\end{pmatrix}.
$$
于是，$B^{-1}=\begin{pmatrix}0&0&-1\\0&-1&-1\\-1&-1&1\end{pmatrix}$。

因此，
$$
A^{-1}=P_2B^{-1}P_1=\begin{pmatrix}1&0&0\\-1&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}0&0&-1\\0&-1&-1\\-1&-1&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}=\begin{pmatrix}0&-1&0\\0&0&-1\\-1&1&-1\end{pmatrix}.
$$
进一步可得 $\mathrm{tr}(A^{-1})=-1$。`,
  source: '《2022 数学三解析》第 21–22 页',
});

EXAMS.push({
  year: 2022, subject: '数三', number: 21, kind: '解答', score: 12,
  ids: ['qf-orthogonal', 'qf-canonical', 'qf-rayleigh'],
  question: String.raw`（本题满分 12 分）已知二次型 $f(x_1,x_2,x_3)=3x_1^2+4x_2^2+3x_3^2+2x_1x_3$。

（Ⅰ）求正交矩阵 $Q$，使正交变换 $x=Qy$ 将二次型 $f(x_1,x_2,x_3)$ 化为标准形；

（Ⅱ）证明 $\min\limits_{x\ne 0}\frac{f(x)}{x^{\mathrm{T}}x}=2$。`,
  answer: String.raw`$Q=\begin{pmatrix}0&\frac{1}{\sqrt2}&-\frac{1}{\sqrt2}\\1&0&0\\0&\frac{1}{\sqrt2}&\frac{1}{\sqrt2}\end{pmatrix}$，标准形为 $4y_1^2+4y_2^2+2y_3^2$，$\min\limits_{x\ne 0}\frac{f(x)}{x^{\mathrm{T}}x}=2$`,
  analysis: String.raw`本题主要考查二次型在正交变换下的标准形及其应用。

第（Ⅰ）问较常规，写出 $f$ 对应的对称矩阵 $A$，计算 $A$ 的一组线性无关的特征向量并单位正交化即可。

注意到
$$
x^{\mathrm{T}}x=(Qy)^{\mathrm{T}}Qy=y^{\mathrm{T}}Q^{\mathrm{T}}Qy=y^{\mathrm{T}}y,
$$
即正交变换并不改变向量的长度，故可以利用第（Ⅰ）问所得标准形讨论 $\frac{f(x)}{x^{\mathrm{T}}x}$ 的值。

解 （Ⅰ）由 $f$ 的表达式可得 $f$ 对应的矩阵 $A=\begin{pmatrix}3&0&1\\0&4&0\\1&0&3\end{pmatrix}$。

计算 $A$ 的特征多项式。
$$
|\lambda E-A|=\begin{vmatrix}\lambda-3&0&-1\\0&\lambda-4&0\\-1&0&\lambda-3\end{vmatrix}=(\lambda-4)[(\lambda-3)^2-1]=(\lambda-4)^2(\lambda-2).
$$
$A$ 的特征值为 $4,4,2$。

分别计算 $A$ 的属于特征值 $4$ 和 $2$ 的特征向量。

考虑 $(4E-A)x=0$。
$$
4E-A=\begin{pmatrix}1&0&-1\\0&0&0\\-1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1\\0&0&0\\0&0&0\end{pmatrix}.
$$
$\xi_1=\begin{pmatrix}1\\0\\1\end{pmatrix}$ 和 $\xi_2=\begin{pmatrix}0\\1\\0\end{pmatrix}$ 为 $A$ 的属于特征值 $4$ 的两个线性无关的特征向量。

考虑 $(2E-A)x=0$。
$$
2E-A=\begin{pmatrix}-1&0&-1\\0&-2&0\\-1&0&-1\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&0\\0&0&0\end{pmatrix}.
$$
$\xi_3=\begin{pmatrix}-1\\0\\1\end{pmatrix}$ 为 $A$ 的属于特征值 $2$ 的一个特征向量。

由于 $\xi_1,\xi_2,\xi_3$ 相互正交，故只需将它们各自单位化即可得一组相互正交的单位特征向量。
$$
\varepsilon_1=\frac{\xi_1}{\|\xi_1\|}=\frac{1}{\sqrt2}\begin{pmatrix}1\\0\\1\end{pmatrix},\quad \varepsilon_2=\frac{\xi_2}{\|\xi_2\|}=\begin{pmatrix}0\\1\\0\end{pmatrix},\quad \varepsilon_3=\frac{\xi_3}{\|\xi_3\|}=\frac{1}{\sqrt2}\begin{pmatrix}-1\\0\\1\end{pmatrix}.
$$
令 $Q=(\varepsilon_1,\varepsilon_2,\varepsilon_3)$，可得 $Q^{-1}AQ=Q^{\mathrm{T}}AQ=\begin{pmatrix}4&0&0\\0&4&0\\0&0&2\end{pmatrix}$，即正交变换 $x=Qy$ 将二次型 $f$ 化为标准形 $4y_1^2+4y_2^2+2y_3^2$。

（Ⅱ）由第（Ⅰ）问可知，在正交变换 $x=Qy$ 下，$f(x_1,x_2,x_3)$ 的标准形为 $4y_1^2+4y_2^2+2y_3^2$。又因为
$$
x^{\mathrm{T}}x=(Qy)^{\mathrm{T}}Qy=y^{\mathrm{T}}Q^{\mathrm{T}}Qy=y^{\mathrm{T}}y=y_1^2+y_2^2+y_3^2,
$$
所以对 $x\ne 0$，
$$
\frac{f(x)}{x^{\mathrm{T}}x}\overset{x=Qy}{=}\frac{4y_1^2+4y_2^2+2y_3^2}{y_1^2+y_2^2+y_3^2}\ge\frac{2y_1^2+2y_2^2+2y_3^2}{y_1^2+y_2^2+y_3^2}=2.
$$
因此，$\min\limits_{x\ne 0}\frac{f(x)}{x^{\mathrm{T}}x}=2$。`,
  source: '《2022 数学三解析》第 27–28 页',
});
