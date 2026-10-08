// 2018 · 数学二 · 线性代数（题面取自《2010-2019 考研数学二真题》，答案与解析取自《2018 数学二解析》）
EXAMS.push({
  year: 2018, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ['eig-similar', 'eig-similar-prop'],
  question: String.raw`下列矩阵中，与矩阵
$$
\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}
$$
相似的为（　）

（A）$\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}$　（B）$\begin{pmatrix}1&0&-1\\0&1&1\\0&0&1\end{pmatrix}$

（C）$\begin{pmatrix}1&1&-1\\0&1&0\\0&0&1\end{pmatrix}$　（D）$\begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix}$`,
  answer: '（A）',
  analysis: String.raw`令 $P=\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}$，则 $P^{-1}=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}$，

故
$$
P^{-1}AP=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix},
$$
答案为 A。`,
  source: '《2018 数学二解析》第 3 页',
});

EXAMS.push({
  year: 2018, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ['mat-rank', 'mat-rank-ineq'],
  question: String.raw`设 $A,B$ 为 $n$ 阶矩阵，记 $r(X)$ 为矩阵 $X$ 的秩，$(X,Y)$ 表示分块矩阵，则（　）

（A）$r(A,AB)=r(A)$　（B）$r(A,BA)=r(A)$　（C）$r(A,B)=\max\{r(A),r(B)\}$　（D）$r(A,B)=r(A^{\mathrm{T}},B^{\mathrm{T}})$`,
  answer: '（A）',
  analysis: String.raw`选项 C 明显错误；对于选项 B 举反例：$A=\begin{pmatrix}1&1\\1&1\end{pmatrix},B=\begin{pmatrix}0&0\\1&2\end{pmatrix}$，则 $BA=\begin{pmatrix}0&0\\3&3\end{pmatrix}$，而 $(A,BA)=\begin{pmatrix}1&1&0&0\\1&1&1&2\end{pmatrix}$，此时有 $r(A,BA)=2,r(A)=1$；

对于选项 D：举反例，$A=\begin{pmatrix}1&0\\0&0\end{pmatrix},B=\begin{pmatrix}0&0\\1&0\end{pmatrix}$，则 $(A,B)=\begin{pmatrix}1&0&0&0\\0&0&1&0\end{pmatrix},(A^{\mathrm{T}},B^{\mathrm{T}})=\begin{pmatrix}1&0&0&1\\0&0&0&0\end{pmatrix}$，故 $r(A,B)=2,r(A^{\mathrm{T}},B^{\mathrm{T}})=1$。

对于选项 A：$(A,AB)=A(E,B)$，因为 $r(E,B)=n$，故 $r(A)=r[A(E,B)]$，所以 $r(A,AB)=r(A)$。`,
  source: '《2018 数学二解析》第 3–4 页',
});

EXAMS.push({
  year: 2018, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ['eig-def', 'eig-similar-prop'],
  question: String.raw`设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2,\alpha_3$ 为线性无关的向量组。若 $A\alpha_1=2\alpha_1+\alpha_2+\alpha_3$，$A\alpha_2=\alpha_2+2\alpha_3$，$A\alpha_3=-\alpha_2+\alpha_3$，则 $A$ 的实特征值为 $\underline{\qquad}$。`,
  answer: String.raw`$2$`,
  analysis: String.raw`$$
A(\alpha_1,\alpha_2,\alpha_3)=(A\alpha_1,A\alpha_2,A\alpha_3)=(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_1+\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}
$$
因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，故令 $(\alpha_1,\alpha_2,\alpha_3)=P$，可得
$$
P^{-1}AP=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},
$$
所以 $|A|=\begin{vmatrix}1&0&1\\1&1&0\\0&1&1\end{vmatrix}=2$。`,
  source: '《2018 数学二解析》第 5–6 页',
});

EXAMS.push({
  year: 2018, subject: '数二', number: 22, kind: '解答', score: 11,
  ids: ['qf-def', 'qf-canonical'],
  question: String.raw`（本题满分 11 分）设实二次型 $f(x_1,x_2,x_3)=(x_1-x_2+x_3)^2+(x_2+x_3)^2+(x_1+ax_3)^2$，其中 $a$ 是参数。

（Ⅰ）求 $f(x_1,x_2,x_3)=0$ 的解；

（Ⅱ）求 $f(x_1,x_2,x_3)$ 的规范形。`,
  answer: String.raw`（Ⅰ）当 $a=2$ 时，$x=k(2,1,-1)^{\mathrm{T}},k\in R$；当 $a\ne2$ 时，$x_1=x_2=x_3=0$。

（Ⅱ）当 $a=2$ 时，规范形为 $y_1^2+y_2^2$；当 $a\ne2$ 时，规范形为 $y_1^2+y_2^2+y_3^2$。`,
  analysis: String.raw`（Ⅰ）由 $f(x_1,x_2,x_3)=0$ 可得
$$
\begin{cases}x_1-x_2+x_3=0\\x_2+x_3=0\\x_1+ax_3=0\end{cases},
$$
则系数矩阵
$$
A=\begin{pmatrix}1&-1&1\\0&1&1\\1&0&a\end{pmatrix}\to\begin{pmatrix}1&0&2\\0&1&1\\0&0&a-2\end{pmatrix}
$$
得：

当 $a\ne2$ 时，$r(A)=3$，此时只有零解即 $x_1=x_2=x_3=0$。

当 $a=2$ 时，$r(A)=2$，此时方程有无穷多解，且通解为 $x=k(2,1,-1)^{\mathrm{T}},k\in R$。

（Ⅱ）由（Ⅰ）知，当 $a\ne2$ 时，$A$ 可逆，

令
$$
\begin{cases}y_1=x_1-x_2+x_3\\y_2=x_2+x_3\\y_3=x_1+ax_3\end{cases},
$$
即 $Y=AX$，则规范形为 $f=y_1^2+y_2^2+y_3^2$。

当 $a=2$ 时，$r(A)=2$，
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&1&-1\\0&\lambda-1&-1\\-1&0&\lambda-2\end{vmatrix}=0
$$
得特征值为 $\lambda_1=\lambda_2=2,\lambda_3=0$，

所以正惯性指数为 $2$，负惯性指数为 $0$，此时规范形为 $y_1^2+y_2^2$。`,
  source: '《2018 数学二解析》第 9–10 页',
});

EXAMS.push({
  year: 2018, subject: '数二', number: 23, kind: '解答', score: 11,
  ids: ['mat-elem-op', 'mat-eq-solve'],
  question: String.raw`（本题满分 11 分）已知 $a$ 是常数，且矩阵
$$
A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}
$$
可经初等列变换化为矩阵
$$
B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}.
$$
（Ⅰ）求 $a$；（Ⅱ）求满足 $AP=B$ 的可逆矩阵 $P$。`,
  answer: String.raw`（Ⅰ）$a=2$；（Ⅱ）
$$
P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix},
$$
其中 $k_1,k_2,k_3$ 为任意常数，且 $k_2\ne k_3$。`,
  analysis: String.raw`（Ⅰ）由已知有 $r(A)=r(B)$，
$$
A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}\to\begin{pmatrix}1&2&a\\0&1&-a\\0&3&-3a\end{pmatrix}\to\begin{pmatrix}1&2&a\\0&1&-a\\0&0&0\end{pmatrix},
$$
$$
B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&1+a&3\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&0&2-a\end{pmatrix},
$$
所以 $2-a=0$，即 $a=2$；

（Ⅱ）
$$
(A,B)=\begin{pmatrix}1&2&2&1&2&2\\1&3&0&0&1&1\\2&7&-2&-1&1&1\end{pmatrix}\to\begin{pmatrix}1&0&6&3&4&4\\0&1&-2&-1&-1&-1\\0&0&0&0&0&0\end{pmatrix},
$$
所以方程 $AX=B$ 的解
$$
X=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix},
$$
且当 $|X|\ne0$ 即 $k_2\ne k_3$ 时，$X$ 可逆，

则取
$$
P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix},
$$
其中 $k_1,k_2,k_3$ 为任意常数，且 $k_2\ne k_3$，即为所求。`,
  source: '《2018 数学二解析》第 10–11 页',
});
