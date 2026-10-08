// 2016 · 数学二 · 线性代数（题面取自《2010-2019 考研数学二真题》，答案与解析取自《2016 数学二解析》）
EXAMS.push({
  year: 2016, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ['eig-similar-prop', 'mat-transpose'],
  question: String.raw`设 $A,B$ 是可逆矩阵，且 $A$ 与 $B$ 相似，则下列结论错误的是（　）

（A）$A^{\mathrm{T}}$ 与 $B^{\mathrm{T}}$ 相似　（B）$A^{-1}$ 与 $B^{-1}$ 相似

（C）$A+A^{\mathrm{T}}$ 与 $B+B^{\mathrm{T}}$ 相似　（D）$A+A^{-1}$ 与 $B+B^{-1}$ 相似`,
  answer: '（C）',
  analysis: String.raw`本题综合考查了矩阵的逆、矩阵的转置以及矩阵相似等概念。从选项 A 和选项 C 中辨别错误选项是本题的难点。这里要用到一个结论：

若 $P$ 为可逆方阵，则 $(P^{\mathrm{T}})^{-1}=(P^{-1})^{\mathrm{T}}$。

此外，请注意矩阵乘积的转置和逆的计算。

若 $P_1,P_2,P_3$ 为同阶矩阵，则 $(P_1P_2P_3)^{\mathrm{T}}=P_3^{\mathrm{T}}P_2^{\mathrm{T}}P_1^{\mathrm{T}}$。

若 $P_1,P_2,P_3$ 为同阶可逆矩阵，则 $(P_1P_2P_3)^{-1}=P_3^{-1}P_2^{-1}P_1^{-1}$。

解 由于 $A$ 与 $B$ 相似，故存在可逆矩阵 $P$，使得 $B=P^{-1}AP$。

· $B^{\mathrm{T}}=P^{\mathrm{T}}A^{\mathrm{T}}(P^{-1})^{\mathrm{T}}=P^{\mathrm{T}}A^{\mathrm{T}}(P^{\mathrm{T}})^{-1}$，选项 A 中的结论正确。

· $B^{-1}=P^{-1}A^{-1}(P^{-1})^{-1}=P^{-1}A^{-1}P$，选项 B 中的结论正确。

· 由 $B=P^{-1}AP$ 和 $B^{-1}=P^{-1}A^{-1}P$ 可知，$B+B^{-1}=P^{-1}(A+A^{-1})P$，选项 D 中的结论正确。

由排除法可知，应选 C。

下面我们举例说明选项 C 不正确。

设 $A=\begin{pmatrix}1&0\\0&-1\end{pmatrix},P=\begin{pmatrix}1&1\\2&1\end{pmatrix}$，则 $P^{-1}=\begin{pmatrix}-1&1\\2&-1\end{pmatrix}$，令
$$
B=P^{-1}AP=\begin{pmatrix}-1&1\\2&-1\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&1\\2&1\end{pmatrix}=\begin{pmatrix}-3&-2\\4&3\end{pmatrix},
$$
则
$$
A+A^{\mathrm{T}}=\begin{pmatrix}2&0\\0&-2\end{pmatrix},\quad B+B^{\mathrm{T}}=\begin{pmatrix}-6&2\\2&6\end{pmatrix}.
$$
计算 $A+A^{\mathrm{T}}$ 的特征多项式得 $\lambda^2-4$，计算 $B+B^{\mathrm{T}}$ 的特征多项式得 $\lambda^2-40$。因此 $A+A^{\mathrm{T}}$ 和 $B+B^{\mathrm{T}}$ 不相似。

注 若 $A,B$ 均为可逆实对称矩阵，且 $A$ 与 $B$ 相似，则 $A+A^{\mathrm{T}}$ 和 $B+B^{\mathrm{T}}$ 相似。`,
  source: '《2016 数学二解析》第 10–11 页',
});

EXAMS.push({
  year: 2016, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ['qf-inertia-index', 'qf-positive-def'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+2x_1x_2+2x_2x_3+2x_1x_3$ 的正、负惯性指数分别为 $1,2$，则（　）

（A）$a>1$　（B）$a<-2$　（C）$-2<a<1$　（D）$a=1$ 或 $a=-2$`,
  answer: '（C）',
  analysis: String.raw`本题主要考查二次型的正、负惯性指数。此类题可以通过求二次型对应的对称矩阵的特征值来判断。

实对称矩阵 $A$ 为正定的充分必要条件为下列任一条件：

①$A$ 的特征值全为正；

②$A$ 的各阶顺序主子式都为正，即
$$
a_{11}>0,\quad\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}>0,\cdots,\begin{vmatrix}a_{11}&\cdots&a_{1n}\\\vdots&&\vdots\\a_{n1}&\cdots&a_{nn}\end{vmatrix}>0.
$$
解（法一）$f$ 对应的对称矩阵为
$$
A=\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}.
$$
$A$ 正交相似于一个对角矩阵，该矩阵的主对角元为 $A$ 的特征值。

计算 $A$ 的特征多项式，得
$$
|\lambda E-A|=\begin{vmatrix}\lambda-a&-1&-1\\-1&\lambda-a&-1\\-1&-1&\lambda-a\end{vmatrix}\xrightarrow{c_2-c_3}\begin{vmatrix}\lambda-a&0&-1\\-1&\lambda-a+1&-1\\-1&-(\lambda-a+1)&\lambda-a\end{vmatrix}
$$
$$
\xrightarrow{\text{按第一行展开}}(\lambda-a)(\lambda-a+1)(\lambda-a-1)-2(\lambda-a+1)
$$
$$
=(\lambda-a+1)^2(\lambda-a-2).
$$
因此，$A$ 的特征值为 $a-1,a-1,a+2$。

由于 $a+2>a-1$，故若 $f$ 的正、负惯性指数分别为 $1,2$，则 $\begin{cases}a-1<0,\\a+2>0.\end{cases}$ 解得 $-2<a<1$。应选 C。

（法二）如法一，写出 $A$。

由于二次型 $f$ 的正、负惯性指数分别为 $1,2$，故 $A$ 的特征值有一个为正值，两个为负值，从而 $|A|>0$。

计算 $A$ 的行列式。
$$
|A|=\begin{vmatrix}a&1&1\\1&a&1\\1&1&a\end{vmatrix}=(a-1)^2(a+2).
$$
由于 $|A|>0$，故 $a+2>0$，即 $a>-2$。由此可以排除选项 B 和选项 D。

另一方面，若 $a>1$，则 $a>0,a^2-1>0,|A|>0$，$A$ 的各阶顺序主子式皆为正。由正定矩阵的判别法可知，$A$ 为正定矩阵，从而 $f$ 的正惯性指数为 $3$。与 $f$ 的正、负惯性指数分别为 $1,2$ 矛盾，故可排除选项 A。

因此，应选 C。`,
  source: '《2016 数学二解析》第 11–12 页',
});

EXAMS.push({
  year: 2016, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ['mat-equiv', 'mat-rank'],
  question: String.raw`设矩阵
$$
\begin{pmatrix}a&-1&-1\\-1&a&-1\\-1&-1&a\end{pmatrix}
$$
与矩阵
$$
\begin{pmatrix}1&1&0\\0&-1&1\\1&0&1\end{pmatrix}
$$
等价，则 $a=\underline{\qquad}$。`,
  answer: String.raw`$2$`,
  analysis: String.raw`本题主要考查矩阵等价的概念。

矩阵等价：若矩阵 $A$ 经过有限次初等变换能变成矩阵 $B$，则矩阵 $A$ 与矩阵 $B$ 等价，记作 $A\sim B$。

设 $A,B$ 均为 $m\times n$ 矩阵，则 $A\sim B$ 的充分必要条件是存在 $m$ 阶可逆矩阵 $P$ 以及 $n$ 阶可逆矩阵 $Q$，使得 $PAQ=B$。

解本题可以从求已知矩阵的秩入手。

解（法一）记 $A=\begin{pmatrix}a&-1&-1\\-1&a&-1\\-1&-1&a\end{pmatrix},B=\begin{pmatrix}1&1&0\\0&-1&1\\1&0&1\end{pmatrix}$。
$$
B=\begin{pmatrix}1&1&0\\0&-1&1\\1&0&1\end{pmatrix}\xrightarrow{r_1+r_2}\begin{pmatrix}1&0&1\\0&-1&1\\1&0&1\end{pmatrix}\xrightarrow{r_3-r_1^*}\begin{pmatrix}1&0&1\\0&-1&1\\0&0&0\end{pmatrix}.
$$
（$r_i^*$ 表示对第 $i$ 行作初等行变换后所得新的第 $i$ 行，每做一次初等行变换，加一个 $*$。）

于是 $r(B)=2$。

由于 $A,B$ 等价，故 $r(A)=r(B)=2$，从而 $|A|=0$。

另一方面，计算 $|A|$ 得，
$$
|A|=\begin{vmatrix}a&-1&-1\\-1&a&-1\\-1&-1&a\end{vmatrix}=(a+1)^2(a-2).
$$
$|A|=0$ 当且仅当 $a=-1$ 或 $a=2$。当 $a=-1$ 时，$r(A)=1$，不符合题意。因此，$a=2$。

（法二）由法一知，$r(B)=2$。

对 $A$ 作初等行变换，
$$
A=\begin{pmatrix}a&-1&-1\\-1&a&-1\\-1&-1&a\end{pmatrix}\xrightarrow[r_1\leftrightarrow r_3]{r_3\times(-1)}\begin{pmatrix}1&1&-a\\-1&a&-1\\a&-1&-1\end{pmatrix}\xrightarrow[r_3^{**}-ar_1^*]{r_2+r_1^*}\begin{pmatrix}1&1&-a\\0&a+1&-a-1\\0&-a-1&a^2-1\end{pmatrix}
$$
$$
\xrightarrow{r_3^{***}+r_2^*}\begin{pmatrix}1&1&-a\\0&a+1&-a-1\\0&0&a^2-a-2\end{pmatrix}.
$$
当 $a^2-a-2=0$ 时，即 $a=-1$ 或 $a=2$ 时，$r(A)<3$。又由于当 $a=-1$ 时，$r(A)=1\ne r(B)$，故舍去。

因此，$a=2$。

注 两个同阶矩阵等价，当且仅当它们的秩相等，而两个同阶矩阵的秩相等仅仅是它们合同或者相似的必要条件。对于一般矩阵来说，合同不能推出相似，而相似也不能推出合同。`,
  source: '《2016 数学二解析》第 15–16 页',
});

EXAMS.push({
  year: 2016, subject: '数二', number: 22, kind: '解答', score: 11,
  ids: ['eq-nonhomo-crit', 'eq-nonhomo-general', 'mat-rank'],
  question: String.raw`（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}1&1&1-a\\1&0&a\\a+1&1&a+1\end{pmatrix},\quad\beta=\begin{pmatrix}0\\1\\2a-2\end{pmatrix},
$$
且方程组 $Ax=\beta$ 无解。

（Ⅰ）求 $a$ 的值；

（Ⅱ）求方程组 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解。`,
  answer: String.raw`（Ⅰ）$a=0$；（Ⅱ）通解为
$$
x=(1,-2,0)^{\mathrm{T}}+k(0,-1,1)^{\mathrm{T}}\quad(k\ \text{为任意常数})
$$`,
  analysis: String.raw`本题主要考查非齐次线性方程组有解的条件以及求线性方程组的通解。

已知 $Ax=\beta$ 无解，我们可以利用 $r(A,\beta)\ne r(A)$ 来讨论参数 $a$ 的值。

解（Ⅰ）由于 $Ax=\beta$ 无解，故由非齐次线性方程组有解的充分必要条件可知，$r(A,\beta)\ne r(A)$。
$$
(A,\beta)=\begin{pmatrix}1&1&1-a&0\\1&0&a&1\\a+1&1&a+1&2a-2\end{pmatrix}\xrightarrow[r_3-(a+1)r_1]{r_2-r_1}\begin{pmatrix}1&1&1-a&0\\0&-1&2a-1&1\\0&-a&a^2+a&2a-2\end{pmatrix}
$$
$$
\xrightarrow[r_3^*+ar_2^{**}]{r_2\times(-1)}\begin{pmatrix}1&1&1-a&0\\0&1&1-2a&-1\\0&0&-a^2+2a&a-2\end{pmatrix}.
$$
（$r_i^*$ 表示对第 $i$ 行作初等行变换后所得新的第 $i$ 行，每做一次初等行变换，加一个 $*$。）

由上面的式子可知，$r(A)\ge2$。从而，$Ax=\beta$ 无解当且仅当 $r(A)=2$ 且 $r(A,\beta)=3$。此时，$-a^2+2a=0$，且 $a-2\ne0$，解得 $a=0$。

（Ⅱ）当 $a=0$ 时，$A^{\mathrm{T}}=\begin{pmatrix}1&1&1\\1&0&1\\1&0&1\end{pmatrix},A^{\mathrm{T}}A=\begin{pmatrix}3&2&2\\2&2&2\\2&2&2\end{pmatrix},A^{\mathrm{T}}\beta=\begin{pmatrix}-1\\-2\\-2\end{pmatrix}$。
$$
(A^{\mathrm{T}}A,A^{\mathrm{T}}\beta)=\begin{pmatrix}3&2&2&-1\\2&2&2&-2\\2&2&2&-2\end{pmatrix}\xrightarrow[r_2\times\frac12]{r_3-r_2}\begin{pmatrix}3&2&2&-1\\1&1&1&-1\\0&0&0&0\end{pmatrix}\xrightarrow[r_2-r_1^*]{r_1-2r_2^*}\begin{pmatrix}1&0&0&1\\1&1&1&-1\\0&0&0&0\end{pmatrix}
$$
$$
\xrightarrow{r_2^*-r_1^*}\begin{pmatrix}1&0&0&1\\0&1&1&-2\\0&0&0&0\end{pmatrix}.
$$
$A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 对应的齐次线性方程组等价于 $\begin{cases}x_1=0,\\x_2+x_3=0,\end{cases}$ 即 $(0,-1,1)^{\mathrm{T}}$ 为该方程组的一个基础解系。又因为 $(1,-2,0)^{\mathrm{T}}$ 是 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的一个特解，所以 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解为 $k(0,-1,1)^{\mathrm{T}}+(1,-2,0)^{\mathrm{T}}$，其中 $k$ 为任意常数。

注 在第（Ⅰ）问中，还可以利用 $|A|=0$ 求得 $a=0$ 或 $a=2$。讨论 $a=0$ 与 $a=2$ 的情况可知，当 $a=2$ 时，方程组有无穷多解，不符合题意。`,
  source: '《2016 数学二解析》第 27–28 页',
});

EXAMS.push({
  year: 2016, subject: '数二', number: 23, kind: '解答', score: 11,
  ids: ['eig-diag-method', 'eig-power-app'],
  question: String.raw`（本题满分 11 分）已知矩阵
$$
A=\begin{pmatrix}0&-1&1\\2&-3&0\\0&0&0\end{pmatrix}.
$$
（Ⅰ）求 $A^{99}$；

（Ⅱ）设 3 阶矩阵 $B=(\alpha_1,\alpha_2,\alpha_3)$ 满足 $B^2=BA$。记 $B^{100}=(\beta_1,\beta_2,\beta_3)$，将 $\beta_1,\beta_2,\beta_3$ 分别表示为 $\alpha_1,\alpha_2,\alpha_3$ 的线性组合。`,
  answer: String.raw`（Ⅰ）
$$
A^{99}=\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}
$$
（Ⅱ）$\beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2$，$\beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2$，$\beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2$。`,
  analysis: String.raw`本题中的矩阵是一个一般矩阵，要求它的 99 次幂，若直接计算，则计算量会比较大，而对角矩阵的高次幂较容易计算。因此我们可以考虑证明 $A$ 相似于一个对角矩阵，并利用以下结论：

若 $A$ 相似于对角矩阵 $\Lambda$，即存在可逆矩阵 $P$，使得 $P^{-1}AP=\Lambda$，则 $A=P\Lambda P^{-1},A^{99}=P\Lambda^{99}P^{-1}$。

解（Ⅰ）计算 $A$ 的特征多项式 $|\lambda E-A|$。
$$
|\lambda E-A|=\begin{vmatrix}\lambda&1&-1\\-2&\lambda+3&0\\0&0&\lambda\end{vmatrix}\xrightarrow{\text{按第三行展开}}\lambda(\lambda^2+3\lambda+2)=\lambda(\lambda+1)(\lambda+2).
$$
因此，$A$ 有 3 个不同的特征值，$-2,-1,0$。

由于属于不同特征值的特征向量线性无关，故 $A$ 有 3 个线性无关的特征向量，$A$ 相似于对角矩阵
$$
\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&0\end{pmatrix}.
$$
分别计算 $A$ 的属于特征值 $-2,-1,0$ 的特征向量。

当 $\lambda=-2$ 时，解 $(-2E-A)x=0$。由于
$$
-2E-A=\begin{pmatrix}-2&1&-1\\-2&1&0\\0&0&-2\end{pmatrix}\to\begin{pmatrix}-2&1&0\\0&0&1\\0&0&0\end{pmatrix},
$$
故 $(1,2,0)^{\mathrm{T}}$ 为 $A$ 的属于特征值 $-2$ 的特征向量。

当 $\lambda=-1$ 时，解 $(-E-A)x=0$。由于
$$
-E-A=\begin{pmatrix}-1&1&-1\\-2&2&0\\0&0&-1\end{pmatrix}\to\begin{pmatrix}-1&1&0\\0&0&1\\0&0&0\end{pmatrix},
$$
故 $(1,1,0)^{\mathrm{T}}$ 为 $A$ 的属于特征值 $-1$ 的特征向量。

当 $\lambda=0$ 时，解 $(0E-A)x=0$。由于
$$
0E-A=\begin{pmatrix}0&1&-1\\-2&3&0\\0&0&0\end{pmatrix},
$$
故 $(3,2,2)^{\mathrm{T}}$ 为 $A$ 的属于特征值 $0$ 的特征向量。

令 $P=\begin{pmatrix}1&1&3\\2&1&2\\0&0&2\end{pmatrix}$，则 $P^{-1}AP=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&0\end{pmatrix}$。

计算 $P^{-1}$ 得，$P^{-1}=\begin{pmatrix}-1&1&\frac12\\2&-1&-2\\0&0&\frac12\end{pmatrix}$。
$$
A^{99}=P\begin{pmatrix}(-2)^{99}&0&0\\0&(-1)^{99}&0\\0&0&0\end{pmatrix}P^{-1}=\begin{pmatrix}1&1&3\\2&1&2\\0&0&2\end{pmatrix}\begin{pmatrix}-2^{99}&0&0\\0&-1&0\\0&0&0\end{pmatrix}\begin{pmatrix}-1&1&\frac12\\2&-1&-2\\0&0&\frac12\end{pmatrix}
$$
$$
=\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}.
$$
（Ⅱ）先求 $B^{100}$。

由于 $B^2=BA$，故
$$
B^3=B(B^2)=B(BA)=B^2A=(BA)A=BA^2.
$$
下面我们用数学归纳法证明 $B^n=BA^{n-1},n=2,3,\cdots$。

当 $n=2$ 时，$B^2=BA$。

假设该命题对 $n=k$ 成立，下面证明该命题对 $n=k+1$ 也成立。
$$
B^n=B^{k+1}=BB^k\xrightarrow{\text{归纳假设}}B(BA^{k-1})=B^2A^{k-1}=(BA)A^{k-1}=BA^k=BA^{n-1}.
$$
于是，该命题对 $n=k+1$ 也成立，从而由数学归纳法可知，该命题对所有 $\ge2$ 的正整数均成立。

因此，
$$
(\beta_1,\beta_2,\beta_3)=B^{100}=BA^{99}=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}.
$$
综上所述，
$$
\beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2,
$$
$$
\beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2,
$$
$$
\beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2.
$$`,
  source: '《2016 数学二解析》第 28–30 页',
});
