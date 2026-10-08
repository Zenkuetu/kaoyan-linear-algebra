// 2024 · 数学二 · 线性代数（题面取自《2024年考研数学二真题》，答案与解析取自《2024 数学二解析》）
EXAMS.push({
  year: 2024, subject: '数二', number: 8, kind: '选择', score: 5,
  ids: ["mat-elem-op","mat-elem-mat","mat-inv-method"],
  question: String.raw`设 $A$ 为三阶矩阵，
$$
P=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix},
$$
若
$$
P^{\mathrm T}AP^2=\begin{pmatrix}a+2c&0&c\\0&b&0\\2c&0&c\end{pmatrix},
$$
则 $A=$

（A）$\begin{pmatrix}c&0&0\\0&a&0\\0&0&b\end{pmatrix}$　　（B）$\begin{pmatrix}b&0&0\\0&c&0\\0&0&a\end{pmatrix}$

（C）$\begin{pmatrix}a&0&0\\0&b&0\\0&0&c\end{pmatrix}$　　（D）$\begin{pmatrix}c&0&0\\0&b&0\\0&0&a\end{pmatrix}$`,
  answer: String.raw`（C）`,
  analysis: String.raw`【解】记
$$
P^{\mathrm T}AP^2=\begin{pmatrix}a+2c&0&c\\0&b&0\\2c&0&c\end{pmatrix}=B,
$$
且
$$
P=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix}=E_{31}(1),
$$
故
$$
A=(P^{\mathrm T})^{-1}B(P^2)^{-1}=[E_{31}^{\mathrm T}(1)]^{-1}B[E_{31}^2(1)]^{-1}
$$
$$
=[E_{31}^{-1}(1)]^{\mathrm T}BE_{31}^{-1}(1)E_{31}^{-1}(1)=E_{31}^{\mathrm T}(-1)BE_{31}(-1)E_{31}(-1)
$$
$$
=\begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}a+2c&0&c\\0&b&0\\2c&0&c\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\-1&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\-1&0&1\end{pmatrix}
$$
$$
=\begin{pmatrix}a&0&0\\0&b&0\\2c&0&c\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\-1&0&1\end{pmatrix}=\begin{pmatrix}a&0&0\\0&b&0\\0&0&c\end{pmatrix}.
$$`,
  source: "《2024 数学二解析》第 10 页",
});

EXAMS.push({
  year: 2024, subject: '数二', number: 9, kind: '选择', score: 5,
  ids: ["mat-adj-rank","mat-rank-crit","mat-rank-ineq"],
  question: String.raw`$A$ 为 4 阶矩阵，若 $A(A-A^*)=0$，且 $A\ne A^*$，则 $r(A)$ 可能为

（A）$0$ 或 $1$　　（B）$1$ 或 $3$　　（C）$2$ 或 $3$　　（D）$1$ 或 $2$`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解】由题意可知 $A(A-A^*)=O$，故 $r(A)+r(A-A^*)\le 4$.

又 $A\ne A^*$，故 $A-A^*\ne O$，即 $r(A-A^*)\ge 1$，因此 $r(A)\le 3$.

又 $A(A-A^*)=A^2-AA^*=A^2-|A|E=A^2=O$，则 $r(A)+r(A)\le 4$，于是 $r(A)\le 2$，此时 $r(A^*)=0\Rightarrow A^*=O$，又 $A\ne A^*\Rightarrow r(A)\ge 1$，故 $r(A)=1$ 或 $2$.`,
  source: "《2024 数学二解析》第 10 页",
});

EXAMS.push({
  year: 2024, subject: '数二', number: 10, kind: '选择', score: 5,
  ids: ["eig-diag-crit","eig-property","eig-similar-crit"],
  question: String.raw`设 $A$、$B$ 为 2 阶矩阵，且 $AB=BA$，则“$A$ 有两个不相等的特征值”是“$B$ 可对角化”的

（A）充分必要条件　　（B）充分不必要条件

（C）必要不充分条件　　（D）既不充分也不必要条件`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解】充分性. 2 阶矩阵 $A$ 有两个不相等的特征值，故 $A$ 必可相似对角化.

又 $AB=BA$，且 $A$ 有 2 个不同特征值，则 $A$ 的特征向量都是 $B$ 的特征向量.

又 $A$ 有 2 个线性无关特征向量，故 $B$ 有 2 个线性无关特征向量，于是 $B$ 可相似对角化.

必要性. $B$ 可相似对角化，不妨取 $B=E$，$A=E$，则满足 $AB=BA$，但 $A$ 的特征值都是 1.`,
  source: "《2024 数学二解析》第 10–11 页",
});

EXAMS.push({
  year: 2024, subject: '数二', number: 16, kind: '填空', score: 5,
  ids: ["vec-indep-def","vec-indep-crit"],
  question: String.raw`设
$$
\alpha_1=\begin{pmatrix}a\\1\\-1\\1\end{pmatrix},\quad\alpha_2=\begin{pmatrix}1\\1\\b\\a\end{pmatrix},\quad\alpha_3=\begin{pmatrix}1\\a\\-1\\1\end{pmatrix},
$$
若 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，且其中任意两个向量均线性无关，则 $ab=\underline{\qquad}$.`,
  answer: String.raw`$-4$`,
  analysis: String.raw`【解】
$$
(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}a&1&1\\1&1&a\\-1&b&-1\\1&a&1\end{pmatrix}\to\begin{pmatrix}1&1&a\\0&1-a&1-a^2\\0&b+1&a-1\\0&a-1&1-a\end{pmatrix}\to\begin{pmatrix}1&1&a\\0&1-a&1-a^2\\0&b+1&a-1\\0&0&2-a^2-a\end{pmatrix}.
$$
因为 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，且其中任意两个向量均线性无关，则 $r(\alpha_1,\alpha_2,\alpha_3)\le 2$，且 $r(\alpha_i,\alpha_j)=2\ (i\ne j)$，于是 $r(\alpha_1,\alpha_2,\alpha_3)=2$.

① 当 $a=1$ 时，$\alpha_1$ 与 $\alpha_3$ 线性相关，不满足题意.

② 当 $a\ne 1$ 时，
$$
(\alpha_1,\alpha_2,\alpha_3)\to\begin{pmatrix}1&1&a\\0&1&1+a\\0&b+1&a-1\\0&0&a+2\end{pmatrix}\to\begin{pmatrix}1&1&a\\0&1&1+a\\0&0&-b(a+1)-2\\0&0&a+2\end{pmatrix},
$$
要满足题意，则 $a+2=0$ 且 $-b(a+1)-2=0$，故
$$
\begin{cases}a=-2,\\b=2,\end{cases}
$$
则 $ab=-4$.`,
  source: "《2024 数学二解析》第 12 页",
});

EXAMS.push({
  year: 2024, subject: '数二', number: 22, kind: '解答', score: 12,
  ids: ["qf-orthogonal","qf-canonical","eq-samesol"],
  question: String.raw`（本题满分 12 分）已知
$$
A=\begin{pmatrix}0&a&0\\1&0&2\end{pmatrix},\quad B=\begin{pmatrix}1&1\\1&1\\2&b\end{pmatrix},
$$
$Ax=0$ 的解均为 $B^{\mathrm T}x=0$ 的解，但 $Ax=0$ 与 $B^{\mathrm T}x=0$ 不同解.

（1）求 $a,b$ 的值；

（2）求正交变换 $x=Qy$，使 $f(x_1,x_2,x_3)=x^{\mathrm T}BAx$ 为标准形.`,
  answer: String.raw`（1）$a=1,b=2$；（2）
$$
Q=(\gamma_1,\gamma_2,\gamma_3)=\begin{pmatrix}-\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt3}&\dfrac{1}{\sqrt6}\\\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt3}&\dfrac{1}{\sqrt6}\\0&\dfrac{1}{\sqrt3}&\dfrac{2}{\sqrt6}\end{pmatrix},
$$
则 $Q^{\mathrm T}CQ=\begin{pmatrix}0&0&0\\0&0&0\\0&0&6\end{pmatrix}$，即在正交变换 $x=Qy$ 下，$f(x_1,x_2,x_3)=6y_3^2$。`,
  analysis: String.raw`【解】（1）由已知可得 $r\begin{pmatrix}A\\B^{\mathrm T}\end{pmatrix}=r(A)=2$，$r(B)=1$，对 $\begin{pmatrix}A\\B^{\mathrm T}\end{pmatrix}$ 施以初等行变换可得
$$
\begin{pmatrix}1&0&1\\0&1&1\\0&0&a-1\\0&0&b-2\end{pmatrix},
$$
故 $a=1,b=2$.

（2）由（1）可得二次型 $f(x_1,x_2,x_3)$ 矩阵为
$$
C=\begin{pmatrix}1&1&2\\1&1&2\\2&2&4\end{pmatrix}.
$$
因为
$$
|\lambda E-C|=\begin{vmatrix}\lambda-1&-1&-2\\-1&\lambda-1&-2\\-2&-2&\lambda-4\end{vmatrix}=\lambda^2(\lambda-6),
$$
所以 $C$ 的特征值为 $\lambda_1=\lambda_2=0,\lambda_3=6$.

当 $\lambda_1=\lambda_2=0$ 时，解方程组 $(0E-C)x=0$，得两个线性无关特征向量
$$
\alpha_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\quad\alpha_2=\begin{pmatrix}-2\\0\\1\end{pmatrix};
$$
经施密特正交化得
$$
\beta_1=\alpha_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\quad\beta_2=\alpha_2-\frac{[\beta_1,\alpha_2]}{[\beta_1,\beta_1]}\beta_1=\begin{pmatrix}-1\\-1\\1\end{pmatrix}.
$$
单位化得
$$
\gamma_1=\frac{\beta_1}{\|\beta_1\|}=\begin{pmatrix}-\dfrac{1}{\sqrt2}\\\dfrac{1}{\sqrt2}\\0\end{pmatrix},\quad\gamma_2=\frac{\beta_2}{\|\beta_2\|}=\begin{pmatrix}-\dfrac{1}{\sqrt3}\\-\dfrac{1}{\sqrt3}\\\dfrac{1}{\sqrt3}\end{pmatrix}.
$$
当 $\lambda_3=6$ 时，解方程组 $(6E-C)x=0$，得一个线性无关特征向量
$$
\beta_3=\begin{pmatrix}1\\1\\2\end{pmatrix}.
$$
单位化得
$$
\gamma_3=\frac{\beta_3}{\|\beta_3\|}=\begin{pmatrix}\dfrac{1}{\sqrt6}\\\dfrac{1}{\sqrt6}\\\dfrac{2}{\sqrt6}\end{pmatrix}.
$$
令
$$
Q=(\gamma_1,\gamma_2,\gamma_3)=\begin{pmatrix}-\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt3}&\dfrac{1}{\sqrt6}\\\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt3}&\dfrac{1}{\sqrt6}\\0&\dfrac{1}{\sqrt3}&\dfrac{2}{\sqrt6}\end{pmatrix},
$$
则
$$
Q^{\mathrm T}CQ=\begin{pmatrix}0&0&0\\0&0&0\\0&0&6\end{pmatrix},
$$
即在正交变换 $x=Qy$ 下，$f(x_1,x_2,x_3)=6y_3^2$.`,
  source: "《2024 数学二解析》第 14–15 页",
});

