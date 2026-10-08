// 2021 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》，答案与解析取自《2021年数学三真题答案解析》）
EXAMS.push({
  year: 2021, subject: '数三', number: 5, kind: '选择', score: 5,
  ids: ['qf-inertia-index', 'qf-def'],
  question: String.raw`二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2+x_3)^2-(x_3-x_1)^2$ 的正惯性指数与负惯性指数依次为（ ）

（A）$2,0$　（B）$1,1$　（C）$2,1$　（D）$1,2$`,
  answer: '（B）',
  analysis: String.raw`$$
f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2+x_3)^2-(x_3-x_1)^2=2x_2^2+2x_1x_2+2x_2x_3+2x_1x_3
$$
所以
$$
A=\begin{pmatrix}0&1&1\\1&2&1\\1&1&0\end{pmatrix},
$$
故特征多项式为
$$
|\lambda E-A|=\begin{vmatrix}\lambda&-1&-1\\-1&\lambda-2&-1\\-1&-1&\lambda\end{vmatrix}=(\lambda+1)(\lambda-3)\lambda
$$
令上式等于零，故特征值为 $-1$，$3$，$0$，故该二次型的正惯性指数为 $1$，负惯性指数为 $1$。故应选 B。`,
  source: '《2021 数学三解析》第 2 页',
});

EXAMS.push({
  year: 2021, subject: '数三', number: 6, kind: '选择', score: 5,
  ids: ['eq-nonhomo-general', 'eq-homo-general'],
  question: String.raw`设 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ 为 4 阶正交矩阵，若矩阵
$$
B=\begin{pmatrix}\alpha_1^{\mathrm{T}}\\\alpha_2^{\mathrm{T}}\\\alpha_3^{\mathrm{T}}\end{pmatrix},\quad \beta=\begin{pmatrix}1\\1\\1\end{pmatrix},
$$
$k$ 表示任意常数，则线性方程组 $Bx=\beta$ 的通解 $x=$

（A）$\alpha_2+\alpha_3+\alpha_4+k\alpha_1$　（B）$\alpha_1+\alpha_3+\alpha_4+k\alpha_2$

（C）$\alpha_1+\alpha_2+\alpha_4+k\alpha_3$　（D）$\alpha_1+\alpha_2+\alpha_3+k\alpha_4$`,
  answer: '（D）',
  analysis: String.raw`因为 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ 为 4 阶正交矩阵，所以向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是一组标准正交向量组，则 $r(B)=3$，又
$$
B\alpha_4=\begin{pmatrix}\alpha_1^{\mathrm{T}}\\\alpha_2^{\mathrm{T}}\\\alpha_3^{\mathrm{T}}\end{pmatrix}\alpha_4=0,
$$
所以齐次线性方程组 $Bx=0$ 的通解为 $k\alpha_4$。而
$$
B(\alpha_1+\alpha_2+\alpha_3)=\begin{pmatrix}\alpha_1^{\mathrm{T}}\\\alpha_2^{\mathrm{T}}\\\alpha_3^{\mathrm{T}}\end{pmatrix}(\alpha_1+\alpha_2+\alpha_3)=\begin{pmatrix}1\\1\\1\end{pmatrix}=\beta,
$$
故线性方程组 $Bx=\beta$ 的通解 $x=\alpha_1+\alpha_2+\alpha_3+k\alpha_4$，其中 $k$ 为任意常数。故应选 D。`,
  source: '《2021 数学三解析》第 2 页',
});

EXAMS.push({
  year: 2021, subject: '数三', number: 7, kind: '选择', score: 5,
  ids: ['mat-elem-relation', 'mat-elem-op'],
  question: String.raw`已知矩阵
$$
A=\begin{pmatrix}1&0&-1\\2&-1&1\\-1&2&-5\end{pmatrix},
$$
若存在下三角可逆矩阵 $P$ 和上三角可逆矩阵 $Q$，使 $PAQ$ 为对角矩阵，则 $P$，$Q$ 可以分别取

（A）$\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$，$\begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}$

（B）$\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix}$，$\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$

（C）$\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix}$，$\begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}$

（D）$\begin{pmatrix}1&0&0\\0&1&0\\1&3&1\end{pmatrix}$，$\begin{pmatrix}1&2&-3\\0&-1&2\\0&0&1\end{pmatrix}$`,
  answer: '（C）',
  analysis: String.raw`$$
(A,E)=\begin{pmatrix}1&0&-1&1&0&0\\2&-1&1&0&1&0\\-1&2&-5&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1&0&0\\0&-1&3&-2&1&0\\0&2&-6&1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1&0&0\\0&1&-3&2&-1&0\\0&0&0&-3&2&1\end{pmatrix}
$$
$$
=(F,P),\ \text{则}\ P=\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix};
$$
$$
\begin{pmatrix}F\\E\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\\1&0&1\\0&1&3\\0&0&1\end{pmatrix}=\begin{pmatrix}\Lambda\\Q\end{pmatrix},\ \text{则}\ Q=\begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}.
$$
故应选 C。`,
  source: '《2021 数学三解析》第 2–3 页',
});

EXAMS.push({
  year: 2021, subject: '数三', number: 15, kind: '填空', score: 5,
  ids: ['det-expansion', 'det-def'],
  question: String.raw`多项式
$$
f(x)=\begin{vmatrix}x&x&1&2x\\1&x&2&-1\\2&1&x&1\\2&-1&1&x\end{vmatrix}
$$
中 $x^3$ 项的系数为 $\underline{\qquad}$。`,
  answer: String.raw`$-5$`,
  analysis: String.raw`$$
f(x)=\begin{vmatrix}x&x&1&2x\\1&x&2&-1\\2&1&x&1\\2&-1&1&x\end{vmatrix}=x\begin{vmatrix}x&2&-1\\1&x&1\\-1&1&x\end{vmatrix}-x\begin{vmatrix}1&2&-1\\2&x&1\\2&1&x\end{vmatrix}-\begin{vmatrix}1&x&-1\\2&1&1\\2&-1&x\end{vmatrix}-2x\begin{vmatrix}1&x&2\\2&1&x\\2&-1&1\end{vmatrix}
$$
所以展开式中含 $x^3$ 项的有 $-x^3,-4x^3$，即 $x^3$ 项的系数为 $-5$。`,
  source: '《2021 数学三解析》第 5 页',
});

EXAMS.push({
  year: 2021, subject: '数三', number: 21, kind: '解答', score: 12,
  ids: ['eig-diag-method', 'eig-diag-crit'],
  question: String.raw`（本题满分 12 分）设矩阵
$$
A=\begin{pmatrix}2&1&0\\1&2&0\\1&a&b\end{pmatrix}
$$
仅有两个不同的特征值。若 $A$ 相似于对角矩阵，求 $a,b$ 的值，并求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵。`,
  answer: String.raw`当 $b=3$ 时 $a=-1$，$P=\begin{pmatrix}1&0&-1\\1&0&1\\0&1&1\end{pmatrix}$，$P^{-1}AP=\begin{pmatrix}3&&\\&3&\\&&1\end{pmatrix}$；当 $b=1$ 时 $a=1$，$P=\begin{pmatrix}-1&0&1\\1&0&1\\0&1&1\end{pmatrix}$，$P^{-1}AP=\begin{pmatrix}1&&\\&1&\\&&3\end{pmatrix}$`,
  analysis: String.raw`由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&0\\-1&\lambda-2&0\\-1&-a&\lambda-b\end{vmatrix}=(\lambda-b)(\lambda-3)(\lambda-1)=0
$$
当 $b=3$ 时，由 $A$ 相似对角化可知，二重根所对应特征值至少存在两个线性无关的特征向量，则
$$
(3E-A)=\begin{pmatrix}1&-1&0\\-1&1&0\\-1&-a&0\end{pmatrix}
$$
知，$a=-1$，

此时，$\lambda_1=\lambda_2=3$ 所对应特征向量为
$$
\alpha_1=\begin{pmatrix}1\\1\\0\end{pmatrix},\quad \alpha_2=\begin{pmatrix}0\\0\\1\end{pmatrix},
$$
$\lambda_3=1$ 所对应的特征向量为
$$
\alpha_3=\begin{pmatrix}-1\\1\\1\end{pmatrix},
$$
则
$$
P^{-1}AP=\begin{pmatrix}3&&\\&3&\\&&1\end{pmatrix}.
$$
当 $b=1$ 时，由 $A$ 相似对角化可知，二重根所对应特征值至少存在两个线性无关的特征向量，则
$$
(E-A)=\begin{pmatrix}-1&-1&0\\-1&-1&0\\-1&-a&0\end{pmatrix}
$$
知，$a=1$，

此时，$\lambda_1=\lambda_2=1$ 所对应特征向量为
$$
\beta_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\quad \beta_2=\begin{pmatrix}0\\0\\1\end{pmatrix},
$$
$\lambda_3=3$ 所对应的特征向量为
$$
\alpha_3=\begin{pmatrix}1\\1\\1\end{pmatrix},
$$
则
$$
P^{-1}AP=\begin{pmatrix}1&&\\&1&\\&&3\end{pmatrix}.
$$`,
  source: '《2021 数学三解析》第 7–8 页',
});
