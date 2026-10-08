// 2021 · 数学二 · 线性代数（题面取自《2021年考研数学二真题》，答案与解析取自《2021 数学二解析》）
EXAMS.push({
  year: 2021, subject: '数二', number: 8, kind: '选择', score: 5,
  ids: ["qf-inertia-index","qf-inertia-law"],
  question: String.raw`二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2+x_3)^2-(x_3-x_1)^2$ 的正惯性指数与负惯性指数依次为

（A）$2,0$　　（B）$1,1$　　（C）$2,1$　　（D）$1,2$`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解析】$f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2+x_3)^2-(x_3-x_1)^2=2x_2^2+2x_1x_2+2x_2x_3+2x_1x_3$，所以
$$
A=\begin{pmatrix}0&1&1\\1&2&1\\1&1&0\end{pmatrix},
$$
故特征多项式为
$$
|\lambda E-A|=\begin{vmatrix}\lambda&-1&-1\\-1&\lambda-2&-1\\-1&-1&\lambda\end{vmatrix}=(\lambda+1)(\lambda-3)\lambda.
$$
令上式等于零，故特征值为 $-1,3,0$，故该二次型的正惯性指数为 1，负惯性指数为 1。故应选 B。`,
  source: "《2021 数学二解析》第 2–3 页",
});

EXAMS.push({
  year: 2021, subject: '数二', number: 9, kind: '选择', score: 5,
  ids: ["eq-homo-general","vec-express-crit"],
  question: String.raw`设 3 阶矩阵 $A=(\alpha_1,\alpha_2,\alpha_3)$，$B=(\beta_1,\beta_2,\beta_3)$，若向量组 $\alpha_1,\alpha_2,\alpha_3$ 可以由向量组 $\beta_1,\beta_2$ 线性表出，则

（A）$Ax=0$ 的解均为 $Bx=0$ 的解

（B）$A^{\mathrm T}x=0$ 的解均为 $B^{\mathrm T}x=0$ 的解

（C）$Bx=0$ 的解均为 $Ax=0$ 的解

（D）$B^{\mathrm T}x=0$ 的解均为 $A^{\mathrm T}x=0$ 的解`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解析】令 $A=(a_1,a_2,a_3)$，$B=(\beta_1,\beta_2,\beta_3)$，由题 $a_1,a_2,a_3$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表示，即存在矩阵 $P$，使得 $BP=A$，则当 $B^{\mathrm T}x_0=0$ 时，$A^{\mathrm T}x_0=(BP)^{\mathrm T}x_0=P^{\mathrm T}B^{\mathrm T}x_0=0$ 恒成立，即选 D。`,
  source: "《2021 数学二解析》第 3 页",
});

EXAMS.push({
  year: 2021, subject: '数二', number: 10, kind: '选择', score: 5,
  ids: ["mat-elem-op","mat-eq-solve","mat-equiv"],
  question: String.raw`已知矩阵
$$
A=\begin{pmatrix}1&0&-1\\2&-1&1\\-1&2&-5\end{pmatrix},
$$
若下三角可逆矩阵 $P$ 和上三角可逆矩阵 $Q$，使 $PAQ$ 为对角矩阵，则 $P$，$Q$ 可以分别取

（A）$\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},\ \begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}$

（B）$\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix},\ \begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$

（C）$\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix},\ \begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}$

（D）$\begin{pmatrix}1&0&0\\0&1&0\\1&3&1\end{pmatrix},\ \begin{pmatrix}1&2&-3\\0&-1&2\\0&0&1\end{pmatrix}$`,
  answer: String.raw`（C）`,
  analysis: String.raw`【解析】
$$
(A,E)=\begin{pmatrix}1&0&-1&1&0&0\\2&-1&1&0&1&0\\-1&2&-5&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1&0&0\\0&-1&3&-2&1&0\\0&2&-6&1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1&0&0\\0&1&-3&2&-1&0\\0&0&0&-3&2&1\end{pmatrix}
$$
$=(F,P)$，则
$$
P=\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix};
$$
$$
\begin{pmatrix}F\\E\end{pmatrix}=\begin{pmatrix}1&0&-1\\0&1&-3\\0&0&0\\1&0&0\\0&1&0\\0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\\1&0&1\\0&1&3\\0&0&1\end{pmatrix}=\begin{pmatrix}\Lambda\\Q\end{pmatrix},
$$
则
$$
Q=\begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}.
$$
故应选 C。`,
  source: "《2021 数学二解析》第 3–4 页",
});

EXAMS.push({
  year: 2021, subject: '数二', number: 16, kind: '填空', score: 5,
  ids: ["det-expansion","det-roots"],
  question: String.raw`多项式
$$
f(x)=\begin{vmatrix}x&x&1&2x\\1&x&2&-1\\2&1&x&1\\2&-1&1&x\end{vmatrix}
$$
中 $x^3$ 项的系数为 $\underline{\qquad}$。`,
  answer: String.raw`$-5$`,
  analysis: String.raw`【解析】
$$
f(x)=\begin{vmatrix}x&x&1&2x\\1&x&2&-1\\2&1&x&1\\2&-1&1&x\end{vmatrix}=x\begin{vmatrix}x&2&-1\\1&x&1\\-1&1&x\end{vmatrix}-x\begin{vmatrix}1&2&-1\\2&x&1\\2&1&x\end{vmatrix}-\begin{vmatrix}1&x&-1\\2&1&1\\2&-1&x\end{vmatrix}-2x\begin{vmatrix}1&x&2\\2&1&x\\2&-1&1\end{vmatrix}
$$
所以展开式中含 $x^3$ 项的有 $-x^3,-4x^3$，即 $x^3$ 项的系数为 $-5$。`,
  source: "《2021 数学二解析》第 5 页",
});

EXAMS.push({
  year: 2021, subject: '数二', number: 22, kind: '解答', score: 12,
  ids: ["eig-diag-crit","eig-diag-method","eig-mult"],
  question: String.raw`（本小题满分 12 分）设矩阵
$$
A=\begin{pmatrix}2&1&0\\1&2&0\\1&a&b\end{pmatrix}
$$
仅有两个不同的特征值。若 $A$ 相似于对角矩阵，求 $a$，$b$ 的值，并求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵。`,
  answer: String.raw`当 $b=3$ 时，$a=-1$，取 $P=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&0&-1\\1&0&1\\0&1&1\end{pmatrix}$，则 $P^{-1}AP=\mathrm{diag}(3,3,1)$；当 $b=1$ 时，$a=1$，取 $P=(\beta_1,\beta_2,\alpha_3)=\begin{pmatrix}-1&0&1\\1&0&1\\0&1&1\end{pmatrix}$，则 $P^{-1}AP=\mathrm{diag}(1,1,3)$。`,
  analysis: String.raw`【解析】由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&0\\-1&\lambda-2&0\\-1&-a&\lambda-b\end{vmatrix}=(\lambda-b)(\lambda-3)(\lambda-1)=0
$$
当 $b=3$ 时，由 $A$ 相似对角化可知，二重根所对应特征值至少存在两个线性无关的特征向量，则
$$
(3E-A)=\begin{pmatrix}1&-1&0\\-1&1&0\\-1&-a&0\end{pmatrix}
$$
知 $a=-1$，

此时，$\lambda_1=\lambda_2=3$ 所对应特征向量为 $\alpha_1=\begin{pmatrix}1\\1\\0\end{pmatrix},\alpha_2=\begin{pmatrix}0\\0\\1\end{pmatrix}$，

$\lambda_3=1$ 所对应的特征向量为 $\alpha_3=\begin{pmatrix}-1\\1\\1\end{pmatrix}$，则
$$
P^{-1}AP=\begin{pmatrix}3&&\\&3&\\&&1\end{pmatrix}.
$$
当 $b=1$ 时，由 $A$ 相似对角化可知，二重根所对应特征值至少存在两个线性无关的特征向量，则
$$
(E-A)=\begin{pmatrix}-1&-1&0\\-1&-1&0\\-1&-a&0\end{pmatrix}
$$
知 $a=1$，

此时，$\lambda_1=\lambda_2=1$ 所对应特征向量为 $\beta_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\beta_2=\begin{pmatrix}0\\0\\1\end{pmatrix}$，

$\lambda_3=3$ 所对应的特征向量为 $\alpha_3=\begin{pmatrix}1\\1\\1\end{pmatrix}$，则
$$
P^{-1}AP=\begin{pmatrix}1&&\\&1&\\&&3\end{pmatrix}.
$$`,
  source: "《2021 数学二解析》第 7–8 页",
});

