// 2013 · 数学一 · 线性代数（题面取自《2013年考研数学（一）真题》，答案与解析取自《2013数学一解析》）
EXAMS.push({
  year: 2013, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['vec-equivalent', 'vec-rank-table'],
  question: String.raw`设 $A,B,C$ 均为 $n$ 阶矩阵，若 $AB=C$，且 $B$ 可逆，则（　　）

（A）矩阵 $C$ 的行向量组与矩阵 $A$ 的行向量组等价．

（B）矩阵 $C$ 的列向量组与矩阵 $A$ 的列向量组等价．

（C）矩阵 $C$ 的行向量组与矩阵 $B$ 的行向量组等价．

（D）矩阵 $C$ 的列向量组与矩阵 $B$ 的列向量组等价．`,
  answer: '（B）',
  analysis: String.raw`令 $B=(\beta_1,\beta_2,\cdots,\beta_n)$，$C=(\gamma_1,\gamma_2,\cdots,\gamma_n)$．

由 $AB=C$，即 $A(\beta_1,\beta_2,\cdots,\beta_n)=(\gamma_1,\gamma_2,\cdots,\gamma_n)$，得 $A\beta_i=\gamma_i\ (i=1,2,\cdots,n)$，即矩阵 $C$ 的列向量组可由矩阵 $A$ 的列向量组线性表示．

因为 $B$ 可逆，所以 $A=CB^{-1}$，即 $A$ 的列向量组可由 $C$ 的列向量组线性表示．

故 $C$ 的列向量组与 $A$ 的列向量组等价，应选（B）．`,
  source: '《2013 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2013, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['eig-similar-crit', 'eig-similar-prop'],
  question: String.raw`矩阵 $\begin{pmatrix}1&a&1\\a&b&a\\1&a&1\end{pmatrix}$ 与 $\begin{pmatrix}2&0&0\\0&b&0\\0&0&0\end{pmatrix}$ 相似的充分必要条件为（　　）

（A）$a=0$，$b=2$．　　（B）$a=0$，$b$ 为任意常数．

（C）$a=2$，$b=0$．　　（D）$a=2$，$b$ 为任意常数．`,
  answer: '（B）',
  analysis: String.raw`令

$$
A=\begin{pmatrix}1&a&1\\a&b&a\\1&a&1\end{pmatrix},\quad B=\begin{pmatrix}2&0&0\\0&b&0\\0&0&0\end{pmatrix}.
$$

因为 $A,B$ 都是实对称矩阵，所以 $A\sim B$ 的充分必要条件是 $A,B$ 特征值相同．

$B$ 的特征值为 $\lambda_1=2$，$\lambda_2=b$，$\lambda_3=0$．

而

$$
|2E-A|=\begin{vmatrix}1&-a&-1\\-a&2-b&-a\\-1&-a&1\end{vmatrix}=\begin{vmatrix}1&-a&-1\\-a&2-b&-a\\0&-2a&0\end{vmatrix}=2a\begin{vmatrix}1&-1\\-a&-a\end{vmatrix}=-4a^2,
$$

所以 $a=0$，即 $A=\begin{pmatrix}1&0&1\\0&b&0\\1&0&1\end{pmatrix}$，且 $A$ 的特征值也为 $\lambda_1=2$，$\lambda_2=b$，$\lambda_3=0$．

故当 $a=0$，$b$ 为任意常数时，$A\sim B$，应选（B）．`,
  source: '《2013 数学一解析》第 2–3 页',
});

EXAMS.push({
  year: 2013, subject: '数一', number: 13, kind: '填空', score: 5,
  ids: ['det-cofactor', 'mat-adjoint'],
  question: String.raw`设 $A=(a_{ij})$ 是 3 阶非零矩阵，$|A|$ 为 $A$ 的行列式，$A_{ij}$ 为 $a_{ij}$ 的代数余子式．若 $a_{ij}+A_{ij}=0\ (i,j=1,2,3)$，则 $|A|=\underline{\qquad}$．`,
  answer: String.raw`$-1$`,
  analysis: String.raw`由 $A_{ij}=-a_{ij}$，得 $A^{\mathrm{T}}=-A^*$，两边取行列式，得 $|A|=(-1)^3|A^*|=-|A|^2$，于是 $|A|=0$ 或 $|A|=-1$．

因为 $A$ 为非零矩阵，所以 $a_{ij}\ (i,j=1,2,3)$ 不全为零，不妨设 $a_{11}\ne 0$，

由

$$
|A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=-(a_{11}^2+a_{12}^2+a_{13}^2)<0,
$$

得 $|A|=-1$．`,
  source: '《2013 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2013, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['mat-eq-solve', 'eq-nonhomo-general'],
  question: String.raw`（本题满分 11 分）设 $A=\begin{pmatrix}1&a\\1&0\end{pmatrix}$，$B=\begin{pmatrix}0&1\\1&b\end{pmatrix}$．当 $a,b$ 为何值时，存在矩阵 $C$ 使得 $AC-CA=B$，并求所有矩阵 $C$．`,
  answer: String.raw`$a=-1$，$b=0$；$C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}$（$k_1,k_2$ 为任意常数）．`,
  analysis: String.raw`设 $C=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$，则

$$
AC-CA=\begin{pmatrix}-x_2+ax_3&-ax_1+x_2+ax_4\\x_1-x_3-x_4&x_2-ax_3\end{pmatrix},
$$

由 $AC-CA=B$，得

$$
\begin{cases}-x_2+ax_3=0,\\-ax_1+x_2+ax_4=1,\\x_1-x_3-x_4=1,\\x_2-ax_3=b.\end{cases}
$$

设以上方程组对应的系数矩阵为 $D$，则

$$
\overline{D}=\begin{pmatrix}0&-1&a&0&\mid&0\\-a&1&0&a&\mid&1\\1&0&-1&-1&\mid&1\\0&1&-a&0&\mid&b\end{pmatrix}\to\begin{pmatrix}0&-1&a&0&\mid&0\\0&1&-a&0&\mid&1+a\\1&0&-1&-1&\mid&1\\0&1&-a&0&\mid&b\end{pmatrix}
$$

$$
\to\begin{pmatrix}1&0&-1&-1&\mid&1\\0&1&-a&0&\mid&1+a\\0&0&0&0&\mid&1+a\\0&0&0&0&\mid&b\end{pmatrix}.
$$

当 $a=-1$，$b=0$ 时，线性方程组 $AC-CA=B$ 有解，

由

$$
\overline{D}\to\begin{pmatrix}1&0&-1&-1&\mid&1\\0&1&1&0&\mid&0\\0&0&0&0&\mid&0\\0&0&0&0&\mid&0\end{pmatrix},
$$

得 $AC-CA=B$ 的通解为

$$
X=k_1\begin{pmatrix}1\\-1\\1\\0\end{pmatrix}+k_2\begin{pmatrix}1\\0\\0\\1\end{pmatrix}+\begin{pmatrix}1\\0\\0\\0\end{pmatrix}=\begin{pmatrix}k_1+k_2+1\\-k_1\\k_1\\k_2\end{pmatrix},
$$

故

$$
C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}\quad (k_1,k_2\ \text{为任意常数}).
$$`,
  source: '《2013 数学一解析》第 7 页',
});

EXAMS.push({
  year: 2013, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['qf-def', 'qf-orthogonal'],
  question: String.raw`（本题满分 11 分）设二次型 $f(x_1,x_2,x_3)=2(a_1x_1+a_2x_2+a_3x_3)^2+(b_1x_1+b_2x_2+b_3x_3)^2$，记

$$
\alpha=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix},\quad \beta=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}.
$$

（Ⅰ）证明二次型 $f$ 对应的矩阵为 $2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}}$；

（Ⅱ）若 $\alpha,\beta$ 正交且均为单位向量，证明 $f$ 在正交变换下的标准形为 $2y_1^2+y_2^2$．`,
  answer: String.raw`证明见解析．`,
  analysis: String.raw`（Ⅰ）令 $X=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$，则

$$
f=2X^{\mathrm{T}}\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}(a_1,a_2,a_3)X+X^{\mathrm{T}}\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}(b_1,b_2,b_3)X
$$

$$
=X^{\mathrm{T}}(2\alpha\alpha^{\mathrm{T}})X+X^{\mathrm{T}}(\beta\beta^{\mathrm{T}})X=X^{\mathrm{T}}(2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}})X,
$$

则二次型 $f$ 的矩阵为 $2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}}$．

（Ⅱ）由 $A\alpha=(2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}})\alpha=2\alpha$，得 $\alpha$ 为 $A$ 的属于特征值 $\lambda_1=2$ 的特征向量；

由 $A\beta=(2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}})\beta=\beta$，得 $\beta$ 为 $A$ 的属于特征值 $\lambda_2=1$ 的特征向量；

因为 $r(A)=r(2\alpha\alpha^{\mathrm{T}}+\beta\beta^{\mathrm{T}})\le r(2\alpha\alpha^{\mathrm{T}})+r(\beta\beta^{\mathrm{T}})=r(\alpha)+r(\beta)=2<3$，

所以 $\lambda_3=0$ 为 $A$ 的特征值，故二次型 $f$ 在正交变换下的标准形为 $2y_1^2+y_2^2$．`,
  source: '《2013 数学一解析》第 7 页',
});
