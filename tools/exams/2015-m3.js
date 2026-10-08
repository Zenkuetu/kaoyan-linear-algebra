// 2015 · 数学三 · 线性代数（题面取自《2015年考研数学三真题》，答案与解析取自《2015数学三真题答案解析》）
EXAMS.push({
  year: 2015, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ['eq-nonhomo-crit', 'eq-rank-relation'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}$，$b=\begin{pmatrix}1\\d\\d^2\end{pmatrix}$. 若集合 $\Omega=\{1,2\}$，则线性方程组 $Ax=b$ 有无穷多解的充分必要条件为（　）

（A）$a\notin \Omega,\ d\notin \Omega$.　（B）$a\notin \Omega,\ d\in \Omega$.　（C）$a\in \Omega,\ d\notin \Omega$.　（D）$a\in \Omega,\ d\in \Omega$.`,
  answer: '（D）',
  analysis: String.raw`$$
|A|=\begin{vmatrix}1&1&1\\1&2&a\\1&4&a^2\end{vmatrix}=(a-2)(a-1)(2-1)=(a-2)(a-1).
$$
由线性方程组有无穷多解，得 $|A|=0$，即 $a=1$ 或 $a=2$.

当 $a=1$ 时，
$$
(A,b)\to\begin{pmatrix}1&1&1&1\\0&1&0&d-1\\0&0&0&(d-1)(d-2)\end{pmatrix},
$$
由题意，知 $r(A)=r(A,b)<3$，即 $d=1$ 或 $d=2$.

同理，当 $a=2$ 时，
$$
(A,b)\to\begin{pmatrix}1&1&1&1\\0&1&1&d-1\\0&0&0&(d-1)(d-2)\end{pmatrix},
$$
由题意，知 $r(A)=r(A,b)<3$，即 $d=1$ 或 $d=2$.

故应选 D.`,
  source: '《2015 数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2015, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ['qf-canonical', 'qf-orthogonal'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)$ 在正交变换 $x=Py$ 下的标准形为 $2y_1^2+y_2^2-y_3^2$，其中 $P=(e_1,e_2,e_3)$. 若 $Q=(e_1,-e_3,e_2)$，则 $f(x_1,x_2,x_3)$ 在正交变换 $x=Qy$ 下的标准形为（　）

（A）$2y_1^2-y_2^2+y_3^2$.　（B）$2y_1^2+y_2^2-y_3^2$.　（C）$2y_1^2-y_2^2-y_3^2$.　（D）$2y_1^2+y_2^2+y_3^2$.`,
  answer: '（A）',
  analysis: String.raw`$$
Q=P\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}.
$$
又因为
$$
P^{\mathrm{T}}AP=\begin{pmatrix}2&&\\&1&\\&&-1\end{pmatrix},
$$
所以
$$
Q^{\mathrm{T}}AQ=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}^{\mathrm{T}}\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}^{\mathrm{T}}P^{\mathrm{T}}AP\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}=\begin{pmatrix}2&&\\&-1&\\&&1\end{pmatrix}.
$$
故应选 A.`,
  source: '《2015 数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2015, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ['eig-ops', 'eig-trace-det-app'],
  question: String.raw`设 3 阶矩阵 $A$ 的特征值为 $2,-2,1$，$B=A^2-A+E$，其中 $E$ 为 3 阶单位矩阵，则行列式 $|B|=$ $\underline{\qquad}$.`,
  answer: '21',
  analysis: String.raw`由 $A$ 的特征值为 $2,-2,1$ 及 $B=A^2-A+E$，则 $B$ 的特征值为 $3,7,1$，从而
$$
|B|=3\times7\times1=21.
$$`,
  source: '《2015 数学三真题答案解析》第 4 页',
});

EXAMS.push({
  year: 2015, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ['mat-power', 'mat-eq-solve'],
  question: String.raw`（本题满分 11 分）设矩阵 $A=\begin{pmatrix}a&1&0\\1&a&-1\\0&1&a\end{pmatrix}$，且 $A^3=O$.

（Ⅰ）求 $a$ 的值；

（Ⅱ）若矩阵 $X$ 满足 $X-XA^2-AX+AXA^2=E$，其中 $E$ 为 3 阶单位矩阵，求 $X$.`,
  answer: String.raw`$a=0$；$X=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）由于 $A^3=O$，所以
$$
|A|=\begin{vmatrix}a&1&0\\1&a&-1\\0&1&a\end{vmatrix}=a^3=0,
$$
于是 $a=0$.

（Ⅱ）由于
$$
X-XA^2-AX+AXA^2=E,
$$
所以
$$
(E-A)X(E-A^2)=E.
$$
由（Ⅰ）知
$$
E-A=\begin{pmatrix}1&-1&0\\-1&1&1\\0&-1&1\end{pmatrix},\quad E-A^2=\begin{pmatrix}0&0&1\\0&1&0\\-1&0&2\end{pmatrix},
$$
因为 $E-A,E-A^2$ 均可逆，所以
$$
X=(E-A)^{-1}(E-A^2)^{-1}=\begin{pmatrix}2&1&-1\\1&1&-1\\1&1&0\end{pmatrix}\begin{pmatrix}2&0&-1\\0&1&0\\1&0&0\end{pmatrix}=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}.
$$`,
  source: '《2015 数学三真题答案解析》第 6 页',
});

EXAMS.push({
  year: 2015, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ['eig-similar-prop', 'eig-diag-method'],
  question: String.raw`（本题满分 11 分）设矩阵 $A=\begin{pmatrix}0&2&-3\\-1&3&-3\\1&-2&a\end{pmatrix}$ 相似于矩阵 $B=\begin{pmatrix}1&-2&0\\0&b&0\\0&3&1\end{pmatrix}$.

（Ⅰ）求 $a,b$ 的值；

（Ⅱ）求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵.`,
  answer: String.raw`$a=4,\ b=5$；$P=\begin{pmatrix}2&-3&-1\\1&0&-1\\0&1&1\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）由于矩阵 $A$ 与矩阵 $B$ 相似，所以
$$
\mathrm{tr}(A)=\mathrm{tr}(B),\quad |A|=|B|,
$$
于是
$$
3+a=2+b,\quad 2a-3=b,
$$
解得 $a=4,\ b=5$.

（Ⅱ）由（Ⅰ）知 $A=\begin{pmatrix}0&2&-3\\-1&3&-3\\1&-2&4\end{pmatrix}$.

由于矩阵 $A$ 与矩阵 $B$ 相似，所以
$$
|\lambda E-A|=|\lambda E-B|=(\lambda-1)^2(\lambda-5),
$$
故 $A$ 的特征值为 $\lambda_1=\lambda_2=1,\ \lambda_3=5$.

当 $\lambda_1=\lambda_2=1$ 时，由方程组 $(E-A)x=0$，得线性无关的特征向量 $\xi_1=\begin{pmatrix}2\\1\\0\end{pmatrix},\ \xi_2=\begin{pmatrix}-3\\0\\1\end{pmatrix}$.

当 $\lambda_3=5$ 时，由方程组 $(5E-A)x=0$，得特征向量 $\xi_3=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$.

令 $P=(\xi_1,\xi_2,\xi_3)=\begin{pmatrix}2&-3&-1\\1&0&-1\\0&1&1\end{pmatrix}$，则
$$
P^{-1}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&5\end{pmatrix},
$$
故 $P$ 为所求可逆矩阵.`,
  source: '《2015 数学三真题答案解析》第 6–7 页',
});
