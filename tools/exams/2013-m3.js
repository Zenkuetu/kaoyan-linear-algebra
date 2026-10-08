// 2013 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》第 37–40 页的 2013 年部分；答案与解析取自《2013年数学三真题答案解析》）
EXAMS.push({
  year: 2013, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ["vec-combo","vec-rank-vs-mat"],
  question: String.raw`设矩阵 $A,B,C$ 均为 $n$ 阶矩阵，若 $AB=C$，且 $B$ 可逆，则（　　）

（A）矩阵 $C$ 的行向量组与矩阵 $A$ 的行向量组等价
（B）矩阵 $C$ 的列向量组与矩阵 $A$ 的列向量组等价
（C）矩阵 $C$ 的行向量组与矩阵 $B$ 的行向量组等价
（D）矩阵 $C$ 的列向量组与矩阵 $B$ 的列向量组等价`,
  answer: String.raw`（B）`,
  analysis: String.raw`由 $C=AB$ 可知 $C$ 的列向量组可以由 $A$ 的列向量组线性表示；又 $B$ 可逆，故有 $A=CB^{-1}$，从而 $A$ 的列向量组也可以由 $C$ 的列向量组线性表示。根据向量组等价的定义可知正确选项为（B）。`,
  source: '《2013 年数学（三）试题答案》第 3 页',
});

EXAMS.push({
  year: 2013, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ["eig-similar-crit","eig-symmetric","eig-diag-crit"],
  question: String.raw`矩阵
$$
\begin{pmatrix}1&a&1\\a&b&a\\1&a&1\end{pmatrix}\ \text{与}\ \begin{pmatrix}2&0&0\\0&b&0\\0&0&0\end{pmatrix}
$$
相似的充分必要条件为（　　）

（A）$a=0,\ b=2$　（B）$a=0,\ b$ 为任意常数　（C）$a=2,\ b=0$　（D）$a=2,\ b$ 为任意常数`,
  answer: String.raw`（B）`,
  analysis: String.raw`由于 $\begin{pmatrix}1&a&1\\a&b&a\\1&a&1\end{pmatrix}$ 为**实对称矩阵**，故一定可以相似对角化，从而它与 $\mathrm{diag}(2,b,0)$ 相似的充分必要条件为它的特征值为 $2,b,0$。

又
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-a&-1\\-a&\lambda-b&-a\\-1&-a&\lambda-1\end{vmatrix}=\lambda\big[(\lambda-b)(\lambda-2)-2a^2\big],
$$
从而 $a=0$，$b$ 为任意常数。故应选（B）。`,
  source: '《2013 年数学（三）试题答案》第 3 页',
});

EXAMS.push({
  year: 2013, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ["mat-adjoint","det-cofactor","mat-adj-rank"],
  question: String.raw`设 $A=(a_{ij})$ 是三阶非零矩阵，$|A|$ 为 $A$ 的行列式，$A_{ij}$ 为 $a_{ij}$ 的代数余子式。若 $a_{ij}+A_{ij}=0\ (i,j=1,2,3)$，则 $|A|=\underline{\qquad}$。`,
  answer: String.raw`$-1$`,
  analysis: String.raw`由 $a_{ij}+A_{ij}=0$ 可知 $A^{\mathrm{T}}=-A^{*}$。
$$
|A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=a_{11}A_{11}+a_{21}A_{21}+a_{31}A_{31}
=-\sum_{j=1}^{3}a_{1j}^2=-\sum_{i=1}^{3}\sum_{j=1}^{3}a_{ij}^2<0,
$$
从而有 $|A|=|A^{\mathrm{T}}|=|-A^{*}|=-|A^{*}|=-|A|^2$，故 $|A|=-1$。`,
  source: '《2013 年数学（三）试题答案》第 5 页',
});

EXAMS.push({
  year: 2013, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ["mat-eq-solve","eq-nonhomo-crit"],
  question: String.raw`（本题满分 11 分）设
$$
A=\begin{pmatrix}1&a\\1&0\end{pmatrix},\quad B=\begin{pmatrix}0&1\\1&b\end{pmatrix}.
$$
当 $a,b$ 为何值时，存在矩阵 $C$ 使得 $AC-CA=B$，并求所有矩阵 $C$。`,
  answer: String.raw`$a=-1$，$b=0$；此时 $C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}$，$k_1,k_2$ 为任意常数。`,
  analysis: String.raw`由题意可知矩阵 $C$ 为 2 阶矩阵，故可设 $C=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$，则由 $AC-CA=B$ 可得线性方程组
$$
\begin{cases}
-x_2+ax_3=0,\\
-ax_1+x_2+ax_4=1,\\
x_1-x_3-x_4=1,\\
x_2-ax_3=b.
\end{cases}\tag{1}
$$
对增广矩阵作初等行变换：
$$
\begin{pmatrix}0&-1&a&0&0\\-a&1&0&a&1\\1&0&-1&-1&1\\0&1&-a&0&b\end{pmatrix}
\to\begin{pmatrix}1&0&-1&-1&1\\-a&1&0&a&1\\0&-1&a&0&0\\0&1&-a&0&b\end{pmatrix}
\to\begin{pmatrix}1&0&-1&-1&1\\0&1&-a&0&1+a\\0&-1&a&0&0\\0&1&-a&0&b\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&-1&-1&1\\0&1&-a&0&1+a\\0&0&0&0&1+a\\0&0&0&0&b-1-a\end{pmatrix}.
$$
由于方程组 (1) 有解，故 $1+a=0$，$b-1-a=0$，即 $a=-1,\ b=0$。从而有
$$
\begin{pmatrix}0&-1&a&0&0\\-a&1&0&a&1\\1&0&-1&-1&1\\0&1&-a&0&b\end{pmatrix}\to\begin{pmatrix}1&0&-1&-1&1\\0&1&1&0&0\\0&0&0&0&0\\0&0&0&0&0\end{pmatrix},
$$
故有
$$
\begin{cases}x_1=k_1+k_2+1,\\ x_2=-k_1,\\ x_3=k_1,\\ x_4=k_2,\end{cases}
$$
其中 $k_1,k_2$ 任意。从而有
$$
C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}.
$$`,
  source: '《2013 年数学（三）试题答案》第 8 页',
});

EXAMS.push({
  year: 2013, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ["qf-def","qf-orthogonal","qf-canonical"],
  question: String.raw`（本题满分 11 分）设二次型
$$
f(x_1,x_2,x_3)=2(a_1x_1+a_2x_2+a_3x_3)^2+(b_1x_1+b_2x_2+b_3x_3)^2,
$$
记 $\alpha=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$，$\beta=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$。

（Ⅰ）证明二次型 $f$ 对应的矩阵为 $2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}}$；

（Ⅱ）若 $\alpha,\beta$ 正交且均为单位向量，证明 $f$ 在正交变换下的标准形为 $2y_1^2+y_2^2$。`,
  answer: String.raw`证明见解析。`,
  analysis: String.raw`（Ⅰ）将 $f$ 展开：
$$
f=(2a_1^2+b_1^2)x_1^2+(2a_2^2+b_2^2)x_2^2+(2a_3^2+b_3^2)x_3^2+(4a_1a_2+2b_1b_2)x_1x_2+(4a_1a_3+2b_1b_3)x_1x_3+(4a_2a_3+2b_2b_3)x_2x_3,
$$
则 $f$ 的矩阵为
$$
\begin{pmatrix}2a_1^2+b_1^2&2a_1a_2+b_1b_2&2a_1a_3+b_1b_3\\2a_1a_2+b_1b_2&2a_2^2+b_2^2&2a_2a_3+b_2b_3\\2a_1a_3+b_1b_3&2a_2a_3+b_2b_3&2a_3^2+b_3^2\end{pmatrix}
=2\begin{pmatrix}a_1^2&a_1a_2&a_1a_3\\a_1a_2&a_2^2&a_2a_3\\a_1a_3&a_2a_3&a_3^2\end{pmatrix}+\begin{pmatrix}b_1^2&b_1b_2&b_1b_3\\b_1b_2&b_2^2&b_2b_3\\b_1b_3&b_2b_3&b_3^2\end{pmatrix}
=2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}}.
$$

（Ⅱ）令 $A=2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}}$，则
$$
A\alpha=2\alpha\alpha^{\mathrm{T}}\alpha+\beta\beta^{\mathrm{T}}\alpha=2\alpha,\qquad A\beta=2\alpha\alpha^{\mathrm{T}}\beta+\beta\beta^{\mathrm{T}}\beta=\beta,
$$
（这里用到 $\alpha^{\mathrm{T}}\alpha=\beta^{\mathrm{T}}\beta=1$，$\alpha^{\mathrm{T}}\beta=\beta^{\mathrm{T}}\alpha=0$），则 $2,1$ 均为 $A$ 的特征值；又由于
$$
r(A)=r(2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}})\le r(\alpha\alpha^{\mathrm{T}})+r(\beta\beta^{\mathrm{T}})=2,
$$
故 $0$ 为 $A$ 的特征值，则三阶矩阵 $A$ 的特征值为 $2,1,0$，故 $f$ 在正交变换下的标准形为 $2y_1^2+y_2^2$。`,
  source: '《2013 年数学（三）试题答案》第 8–9 页',
});
