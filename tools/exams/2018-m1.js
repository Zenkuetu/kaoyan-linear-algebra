// 2018 · 数学一 · 线性代数（题面取自《2018年考研数学（一）真题》，答案与解析取自《2018数学一解析》）
EXAMS.push({
  year: 2018, subject: '数一', number: 5, kind: '选择', score: 4,
  ids: ['eig-similar-crit', 'eig-diag-crit'],
  question: String.raw`下列矩阵中，与矩阵 $\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$ 相似的为（　）

（A）$\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}$　（B）$\begin{pmatrix}1&0&-1\\0&1&1\\0&0&1\end{pmatrix}$　（C）$\begin{pmatrix}1&1&-1\\0&1&0\\0&0&1\end{pmatrix}$　（D）$\begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix}$`,
  answer: '（A）',
  analysis: String.raw`方法一 令
$$
M=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix},\quad A=\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix},\quad B=\begin{pmatrix}1&0&-1\\0&1&1\\0&0&1\end{pmatrix},
$$
$$
C=\begin{pmatrix}1&1&-1\\0&1&0\\0&0&1\end{pmatrix},\quad D=\begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix},
$$
显然矩阵 $A,B,C,D$ 的特征值都是 $\lambda_1=\lambda_2=\lambda_3=1$。
$$
E-M=\begin{pmatrix}0&-1&0\\0&0&-1\\0&0&0\end{pmatrix},\quad E-A=\begin{pmatrix}0&-1&1\\0&0&-1\\0&0&0\end{pmatrix},\quad E-B=\begin{pmatrix}0&0&1\\0&0&-1\\0&0&0\end{pmatrix},
$$
$$
E-C=\begin{pmatrix}0&-1&1\\0&0&0\\0&0&0\end{pmatrix},\quad E-D=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix},
$$
因为 $r(E-M)=r(E-A)=2$，所以应选（A）。

方法二 取
$$
P=\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix},
$$
则
$$
P^{-1}=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix},
$$
因为
$$
P^{-1}\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}P=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix},
$$
所以 $\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$ 与 $\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}$ 相似，应选（A）。`,
  source: '《2018 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2018, subject: '数一', number: 6, kind: '选择', score: 4,
  ids: ['mat-rank-ineq', 'mat-block'],
  question: String.raw`设 $A,B$ 为 $n$ 阶矩阵，记 $r(X)$ 为矩阵 $X$ 的秩，$(X,Y)$ 表示分块矩阵，则（　）

（A）$r(A,AB)=r(A)$　（B）$r(A,BA)=r(A)$　（C）$r(A,B)=\max\{r(A),r(B)\}$　（D）$r(A,B)=r(A^{\mathrm{T}},B^{\mathrm{T}})$`,
  answer: '（A）',
  analysis: String.raw`$(A,AB)=A(E,B)$，

显然 $r(A,AB)=r[A(E,B)]\le r(A)$，

又 $r(A,AB)\ge r(A)$，

于是 $r(A,AB)=r(A)$，应选（A）。`,
  source: '《2018 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2018, subject: '数一', number: 13, kind: '填空', score: 4,
  ids: ['eig-ops', 'eig-property'],
  question: String.raw`设 2 阶矩阵 $A$ 有两个不同特征值，$\alpha_1,\alpha_2$ 是 $A$ 的线性无关的特征向量，且满足 $A^2(\alpha_1+\alpha_2)=\alpha_1+\alpha_2$，则 $|A|=\underline{\qquad}$。`,
  answer: String.raw`$-1$`,
  analysis: String.raw`$\alpha_1,\alpha_2$ 是 $A$ 的线性无关的特征向量，则 $\alpha_1,\alpha_2$ 是 $A^2$ 的线性无关的特征向量。

由 $A^2(\alpha_1+\alpha_2)=\alpha_1+\alpha_2$，得 $\alpha_1+\alpha_2$ 也为 $A^2$ 的特征向量，因此 $A^2$ 有二重特征值 $\lambda=1$。

因为 $A$ 有两个不同的特征值，所以 $A$ 的特征值为 $\lambda_1=-1,\lambda_2=1$，于是 $|A|=-1$。`,
  source: '《2018 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2018, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['qf-canonical', 'qf-complete-square'],
  question: String.raw`（本题满分 11 分）设实二次型 $f(x_1,x_2,x_3)=(x_1-x_2+x_3)^2+(x_2+x_3)^2+(x_1+ax_3)^2$，其中 $a$ 是参数。

（Ⅰ）求 $f(x_1,x_2,x_3)=0$ 的解；

（Ⅱ）求 $f(x_1,x_2,x_3)$ 的规范形。`,
  answer: String.raw`（Ⅰ）当 $a\ne 2$ 时，$f=0$ 只有零解 $x=(0,0,0)^{\mathrm{T}}$；当 $a=2$ 时，$f=0$ 有非零解 $x=k(-2,-1,1)^{\mathrm{T}}$，其中 $k\ne 0$；
（Ⅱ）当 $a\ne 2$ 时，规范形为 $f(y_1,y_2,y_3)=y_1^2+y_2^2+y_3^2$；当 $a=2$ 时，规范形为 $f(y_1,y_2,y_3)=y_1^2+y_2^2$`,
  analysis: String.raw`（Ⅰ）$f(x_1,x_2,x_3)=(x_1-x_2+x_3)^2+(x_2+x_3)^2+(x_1+ax_3)^2=0$ 的充分必要条件是
$$
\begin{cases}
x_1-x_2+x_3=0,\\
x_2+x_3=0,\\
x_1+ax_3=0,
\end{cases}
$$
对齐次线性方程组的系数矩阵作初等行变换得
$$
A=\begin{pmatrix}1&-1&1\\0&1&1\\1&0&a\end{pmatrix}\to\begin{pmatrix}1&-1&1\\0&1&1\\0&1&a-1\end{pmatrix}\to\begin{pmatrix}1&-1&1\\0&1&1\\0&0&a-2\end{pmatrix},
$$
$a\ne 2$ 时，$f(x_1,x_2,x_3)=0$ 只有零解 $x=(x_1,x_2,x_3)^{\mathrm{T}}=(0,0,0)^{\mathrm{T}}$，

$a=2$ 时，
$$
A\to\begin{pmatrix}1&0&2\\0&1&1\\0&0&0\end{pmatrix},
$$
$f(x_1,x_2,x_3)=0$ 有非零解 $x=(x_1,x_2,x_3)^{\mathrm{T}}=k(-2,-1,1)^{\mathrm{T}}$，其中 $k\ne 0$。

（Ⅱ）$a\ne 2$ 时，令
$$
\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}=\begin{pmatrix}1&-1&1\\0&1&1\\1&0&a\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$
因
$$
\begin{vmatrix}1&-1&1\\0&1&1\\1&0&a\end{vmatrix}=\begin{vmatrix}1&-1&1\\0&1&1\\0&0&a-2\end{vmatrix}=a-2\ne 0,
$$
则矩阵 $\begin{pmatrix}1&-1&1\\0&1&1\\1&0&a\end{pmatrix}$ 可逆，所以 $f(x_1,x_2,x_3)$ 的规范形为 $f(y_1,y_2,y_3)=y_1^2+y_2^2+y_3^2$。

$a=2$ 时，
$$
f(x_1,x_2,x_3)=(x_1-x_2+x_3)^2+(x_2+x_3)^2+(x_1+ax_3)^2
$$
$$
=2x_1^2+2x_2^2+6x_3^2-2x_1x_2+6x_1x_3
$$
$$
=2(x_1-x_2+x_3)^2+\frac{3}{2}x_2^2+\frac{3}{2}x_3^2+3x_2x_3
$$
$$
=2(x_1-x_2+x_3)^2+\frac{3}{2}(x_2+x_3)^2
$$
所以 $f(x_1,x_2,x_3)$ 的规范形为 $f(y_1,y_2,y_3)=y_1^2+y_2^2$。`,
  source: '《2018 数学一解析》第 5–6 页',
});

EXAMS.push({
  year: 2018, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['mat-elem-relation', 'mat-eq-solve'],
  question: String.raw`（本题满分 11 分）已知 $a$ 是常数，且矩阵
$$
A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}
$$
可经初等列变换化为矩阵
$$
B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}.
$$
（Ⅰ）求 $a$；

（Ⅱ）求满足 $AP=B$ 的可逆矩阵 $P$。`,
  answer: String.raw`（Ⅰ）$a=2$；（Ⅱ）$P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix}$（$k_1,k_2,k_3$ 为任意常数且 $k_2\ne k_3$）`,
  analysis: String.raw`（Ⅰ）显然 $r(A)=2$，因为初等变换不改变矩阵的秩，所以 $r(B)=2$，而
$$
B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&a+1&3\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&0&2-a\end{pmatrix},
$$
故 $a=2$。

（Ⅱ）
$$
A=\begin{pmatrix}1&2&2\\1&3&0\\2&7&-2\end{pmatrix},\quad B=\begin{pmatrix}1&2&2\\0&1&1\\-1&1&1\end{pmatrix}.
$$
令 $P=(X_1,X_2,X_3)$，由
$$
(A\ \vdots\ B)=\left(\begin{array}{ccc|ccc}1&2&2&1&2&2\\1&3&0&0&1&1\\2&7&-2&-1&1&1\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&0&6&3&4&4\\0&1&-2&-1&-1&-1\\0&0&0&0&0&0\end{array}\right)
$$
得
$$
X_1=k_1\begin{pmatrix}-6\\2\\1\end{pmatrix}+\begin{pmatrix}3\\-1\\0\end{pmatrix}=\begin{pmatrix}-6k_1+3\\2k_1-1\\k_1\end{pmatrix},\quad X_2=k_2\begin{pmatrix}-6\\2\\1\end{pmatrix}+\begin{pmatrix}4\\-1\\0\end{pmatrix}=\begin{pmatrix}-6k_2+4\\2k_2-1\\k_2\end{pmatrix},
$$
$$
X_3=k_3\begin{pmatrix}-6\\2\\1\end{pmatrix}+\begin{pmatrix}4\\-1\\0\end{pmatrix}=\begin{pmatrix}-6k_3+4\\2k_3-1\\k_3\end{pmatrix},
$$
则所求的可逆矩阵为
$$
P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix}\ (k_1,k_2,k_3\ \text{为任意常数且}\ k_2\ne k_3).
$$`,
  source: '《2018 数学一解析》第 6 页',
});
