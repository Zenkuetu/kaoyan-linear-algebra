// 2008 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 52–54 页；答案与解析取自《2005—2013 考研数二真题答案解析》）
EXAMS.push({
  year: 2008, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ['mat-power', 'mat-invertible-crit'],
  question: String.raw`设 $A$ 为 $n$ 阶非零矩阵，$E$ 为 $n$ 阶单位矩阵，若 $A^3=O$，则（　）

（A）$E-A$ 不可逆，$E+A$ 不可逆.
（B）$E-A$ 不可逆，$E+A$ 可逆.
（C）$E-A$ 可逆，$E+A$ 可逆.
（D）$E-A$ 可逆，$E+A$ 不可逆.`,
  answer: '（C）',
  analysis: String.raw`$(E-A)(E+A+A^2)=E-A^3=E$，$(E+A)(E-A+A^2)=E+A^3=E$

故 $E-A,E+A$ 均可逆.`,
  source: '《2005—2013 考研数二真题答案解析》第 50 页',
});

EXAMS.push({
  year: 2008, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ['qf-congruent', 'eig-similar-prop'],
  question: String.raw`设 $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$，则在实数域上与 $A$ 合同的矩阵为（　）

（A）$\begin{pmatrix}-2&1\\1&-2\end{pmatrix}$.
（B）$\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$.
（C）$\begin{pmatrix}2&1\\1&2\end{pmatrix}$.
（D）$\begin{pmatrix}1&-2\\-2&1\end{pmatrix}$.`,
  answer: '（D）',
  analysis: String.raw`记 $D=\begin{pmatrix}1&-2\\-2&1\end{pmatrix}$，

则 $|\lambda E-D|=\begin{vmatrix}\lambda-1&2\\2&\lambda-1\end{vmatrix}=(\lambda-1)^2-4$，又 $|\lambda E-A|=\begin{vmatrix}\lambda-1&-2\\-2&\lambda-1\end{vmatrix}=(\lambda-1)^2-4$

所以 $A$ 和 $D$ 有相同的特征多项式，所以 $A$ 和 $D$ 有相同的特征值.

又 $A$ 和 $D$ 为同阶实对称矩阵，所以 $A$ 和 $D$ 相似. 由于实对称矩阵相似必合同，故 $D$ 正确.`,
  source: '《2005—2013 考研数二真题答案解析》第 50 页',
});

EXAMS.push({
  year: 2008, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ['eig-trace-det-app', 'det-multilinearity'],
  question: String.raw`设 3 阶矩阵 $A$ 的特征值为 $2,3,\lambda$. 若行列式 $|2A|=-48$，则 $\lambda=$ ________.`,
  answer: '$-1$',
  analysis: String.raw`$\because |A|=2\times3\times\lambda=6\lambda$，$|2A|=2^3|A|$

$\therefore 2^3\times6\lambda=-48\ \Rightarrow\ \lambda=-1$`,
  source: '《2005—2013 考研数二真题答案解析》第 52 页',
});

EXAMS.push({
  year: 2008, subject: '数二', number: 22, kind: '解答', score: 12,
  ids: ['det-tridiagonal', 'eq-cramer', 'eq-nonhomo-crit'],
  question: String.raw`设 $n$ 元线性方程组 $Ax=b$，其中
$$
A=\begin{pmatrix}
2a&1&&&&\\
a^2&2a&1&&&\\
&a^2&2a&\ddots&&\\
&&\ddots&\ddots&1&\\
&&&a^2&2a
\end{pmatrix}_{n\times n},\qquad
x=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix},\qquad
b=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}.
$$
（Ⅰ）证明行列式 $|A|=(n+1)a^n$；

（Ⅱ）当 $a$ 为何值时，该方程组有唯一解，并求 $x_1$；

（Ⅲ）当 $a$ 为何值时，该方程组有无穷多解，并求通解.`,
  answer: String.raw`（Ⅰ）见解析；（Ⅱ）当 $a\ne0$ 时方程组有唯一解，$x_1=\frac{n}{(n+1)a}$；（Ⅲ）当 $a=0$ 时方程组有无穷多解，通解为 $k(1,0,0,\cdots,0)^{\mathrm{T}}+(0,1,0,\cdots,0)^{\mathrm{T}}$，$k$ 为任意常数.`,
  analysis: String.raw`（Ⅰ）证法一：
$$
|A|=\begin{vmatrix}2a&1&&&\\a^2&2a&1&&\\&a^2&2a&\ddots&\\&&\ddots&\ddots&1\\&&&a^2&2a\end{vmatrix}\xrightarrow{r_2-\frac{1}{2}ar_1}\begin{vmatrix}2a&1&&&\\0&\frac{3a}{2}&1&&\\a^2&2a&\ddots&\\&&\ddots&\ddots&1\\&&&a^2&2a\end{vmatrix}=\cdots
$$
$$
\xrightarrow{r_n-\frac{n-1}{n}ar_{n-1}}\begin{vmatrix}2a&1&&&\\0&\frac{3a}{2}&1&&\\&0&\frac{4a}{3}&\ddots&\\&&\ddots&\ddots&1\\&&&0&\frac{(n+1)a}{n}\end{vmatrix}=2a\cdot\frac{3a}{2}\cdot\frac{4a}{3}\cdot\cdots\cdot\frac{(n+1)a}{n}=(n+1)a^n
$$
证法二：记 $D_n=|A|$，下面用数学归纳法证明 $D_n=(n+1)a^n$.

当 $n=1$ 时，$D_1=2a$，结论成立.

当 $n=2$ 时，$D_2=\begin{vmatrix}2a&1\\a^2&2a\end{vmatrix}=3a^2$，结论成立.

假设结论对小于 $n$ 的情况成立. 将 $D_n$ 按第 $1$ 行展开得
$$
D_n=2aD_{n-1}-a^2D_{n-2}=2ana^{n-1}-a^2(n-1)a^{n-2}=(n+1)a^n
$$
故 $|A|=(n+1)a^n$.

证法三：记 $D_n=|A|$，将其按第一列展开得 $D_n=2aD_{n-1}-a^2D_{n-2}$，所以
$$
D_n-aD_{n-1}=aD_{n-1}-a^2D_{n-2}=a(D_{n-1}-aD_{n-2})
$$
$$
=a^2(D_{n-2}-aD_{n-3})=\cdots=a^{n-2}(D_2-aD_1)=a^n
$$
即 $D_n=a^n+aD_{n-1}=a^n+a(a^{n-1}+aD_{n-2})=2a^n+a^2D_{n-2}=\cdots=(n-1)a^n+a^{n-1}D_1=(n-1)a^n+a^{n-1}\cdot2a=(n+1)a^n$.

（Ⅱ）因为方程组有唯一解，所以由 $Ax=B$ 知 $|A|\ne0$，又 $|A|=(n+1)a^n$，故 $a\ne0$.

由克莱姆法则，将 $D_n$ 的第 $1$ 列换成 $b$，得行列式为
$$
\begin{vmatrix}1&1&&&\\0&2a&1&&\\a^2&2a&\ddots&\\&\ddots&\ddots&1\\&&a^2&2a\end{vmatrix}_{n\times n}=\begin{vmatrix}2a&1&&&\\a^2&2a&1&&\\&a^2&2a&\ddots&\\&&\ddots&\ddots&1\\&&&a^2&2a\end{vmatrix}_{(n-1)\times(n-1)}=D_{n-1}=na^{n-1}
$$
所以 $x_1=\frac{D_{n-1}}{D_n}=\frac{n}{(n+1)a}$.

（Ⅲ）方程组有无穷多解，由 $|A|=0$，有 $a=0$，则方程组为
$$
\begin{pmatrix}0&1&&&\\0&0&1&&\\&&\ddots&\ddots&\\&&&0&1\\&&&&0\end{pmatrix}\begin{pmatrix}x_1\\x_2\\\vdots\\x_{n-1}\\x_n\end{pmatrix}=\begin{pmatrix}1\\0\\\vdots\\0\\0\end{pmatrix}
$$
此时方程组系数矩阵的秩和增广矩阵的秩均为 $n-1$，所以方程组有无穷多解，其通解为 $k(1,0,0,\cdots,0)^{\mathrm{T}}+(0,1,0,\cdots,0)^{\mathrm{T}}$，$k$ 为任意常数.`,
  source: '《2005—2013 考研数二真题答案解析》第 55–57 页',
});

EXAMS.push({
  year: 2008, subject: '数二', number: 23, kind: '解答', score: 10,
  ids: ['vec-indep-crit', 'eig-similar-prop'],
  question: String.raw`设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2$ 为 $A$ 的分别属于特征值 $-1,1$ 的特征向量，向量 $\alpha_3$ 满足 $A\alpha_3=\alpha_2+\alpha_3$.

（Ⅰ）证明 $\alpha_1,\alpha_2,\alpha_3$ 线性无关；

（Ⅱ）令 $P=(\alpha_1,\alpha_2,\alpha_3)$，求 $P^{-1}AP$.`,
  answer: String.raw`（Ⅰ）见解析；（Ⅱ）
$$
P^{-1}AP=\begin{pmatrix}-1&0&0\\0&1&1\\0&0&1\end{pmatrix}.
$$`,
  analysis: String.raw`（Ⅰ）证法一：假设 $\alpha_1,\alpha_2,\alpha_3$ 线性相关. 因为 $\alpha_1,\alpha_2$ 分别属于不同特征值的特征向量，故 $\alpha_1,\alpha_2$ 线性无关，则 $\alpha_3$ 可由 $\alpha_1,\alpha_2$ 线性表出，不妨设 $\alpha_3=l_1\alpha_1+l_2\alpha_2$，其中 $l_1,l_2$ 不全为零（若 $l_1,l_2$ 同时为 $0$，则 $\alpha_3$ 为 $0$，由 $A\alpha_3=\alpha_2+\alpha_3$ 可知 $\alpha_2=0$，而特征向量都是非 $0$ 向量，矛盾）

$\because A\alpha_1=-\alpha_1,A\alpha_2=\alpha_2$

$\therefore A\alpha_3=\alpha_2+\alpha_3=\alpha_2+l_1\alpha_1+l_2\alpha_2$，又 $A\alpha_3=A(l_1\alpha_1+l_2\alpha_2)=-l_1\alpha_1+l_2\alpha_2$

$\therefore -l_1\alpha_1+l_2\alpha_2=\alpha_2+l_1\alpha_1+l_2\alpha_2$，整理得：$2l_1\alpha_1+\alpha_2=0$

则 $\alpha_1,\alpha_2$ 线性相关，矛盾. 所以，$\alpha_1,\alpha_2,\alpha_3$ 线性无关.

证法二：设存在数 $k_1,k_2,k_3$，使得 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=0\tag{1}$

用 $A$ 左乘(1)的两边并由 $A\alpha_1=-\alpha_1$，$A\alpha_2=\alpha_2$ 得
$$
-k_1\alpha_1+(k_2+k_3)\alpha_2+k_3\alpha_3=0\tag{2}
$$
$(1)-(2)$得 $2k_1\alpha_1-k_3\alpha_2=0\tag{3}$

因为 $\alpha_1,\alpha_2$ 是 $A$ 的属于不同特征值的特征向量，所以 $\alpha_1,\alpha_2$ 线性无关，从而 $k_1=k_3=0$，代入(1)得 $k_2\alpha_2=0$，又由于 $\alpha_2\ne0$，所以 $k_2=0$，故 $\alpha_1,\alpha_2,\alpha_3$ 线性无关.

（Ⅱ）记 $P=(\alpha_1,\alpha_2,\alpha_3)$，则 $P$ 可逆，
$$
AP=A(\alpha_1,\alpha_2,\alpha_3)=(A\alpha_1,A\alpha_2,A\alpha_3)=(-\alpha_1,\alpha_2,\alpha_2+\alpha_3)
$$
$$
=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}-1&0&0\\0&1&1\\0&0&1\end{pmatrix}=P\begin{pmatrix}-1&0&0\\0&1&1\\0&0&1\end{pmatrix}
$$
所以 $P^{-1}AP=\begin{pmatrix}-1&0&0\\0&1&1\\0&0&1\end{pmatrix}$.`,
  source: '《2005—2013 考研数二真题答案解析》第 57–58 页',
});
