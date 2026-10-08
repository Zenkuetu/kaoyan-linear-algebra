// 2011 · 数学一 · 线性代数（题面取自《2011年考研数学（一）真题》，答案与解析取自《2011数学一解析》）
EXAMS.push({
  year: 2011, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['mat-elem-relation', 'mat-elem-op'],
  question: String.raw`设 $A$ 为 3 阶矩阵，将 $A$ 的第 2 列加到第 1 列得矩阵 $B$，再交换 $B$ 的第 2 行与第 3 行得单位矩阵．记 $P_1=\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}$，$P_2=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}$，则 $A=$（　　）

（A）$P_1P_2$．　　（B）$P_1^{-1}P_2$．　　（C）$P_2P_1$．　　（D）$P_2P_1^{-1}$．`,
  answer: '（D）',
  analysis: String.raw`由题意得

$$
B=A\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix},\quad E=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}B,
$$

即 $E=P_2AP_1$，从而 $A=P_2^{-1}P_1^{-1}$，再由 $P_2^{-1}=P_2$ 得 $A=P_2P_1^{-1}$，应选（D）．`,
  source: '《2011 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2011, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['mat-adj-rank', 'eq-homo-structure'],
  question: String.raw`设 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ 是 4 阶矩阵，$A^*$ 为 $A$ 的伴随矩阵．若 $(1,0,1,0)^{\mathrm{T}}$ 是方程组 $Ax=0$ 的一个基础解系，则 $A^*x=0$ 的基础解系可为（　　）

（A）$\alpha_1,\alpha_3$．　　（B）$\alpha_1,\alpha_2$．　　（C）$\alpha_1,\alpha_2,\alpha_3$．　　（D）$\alpha_2,\alpha_3,\alpha_4$．`,
  answer: '（D）',
  analysis: String.raw`因为 $AX=0$ 的基础解系含一个线性无关的解向量，所以 $r(A)=3$，于是 $r(A^*)=1$，齐次线性方程组 $A^*X=0$ 的基础解系含 3 个线性无关的解向量，排除（A），（B）；

由 $A^*A=|A|E=O$，得 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 为 $A^*X=0$ 的一组解．

由 $(1,0,1,0)^{\mathrm{T}}$ 为方程组 $AX=0$ 的解，得

$$
A\begin{pmatrix}1\\0\\1\\0\end{pmatrix}=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)\begin{pmatrix}1\\0\\1\\0\end{pmatrix}=0,
$$

即 $\alpha_1+\alpha_3=0$．

或 $\alpha_1=-\alpha_3$，从而 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，于是 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，故 $\alpha_2,\alpha_3,\alpha_4$ 为方程组 $A^*X=0$ 的一个基础解系，应选（D）．`,
  source: '《2011 数学一解析》第 2–3 页',
});

EXAMS.push({
  year: 2011, subject: '数一', number: 13, kind: '填空', score: 5,
  ids: ['qf-orthogonal', 'eig-symmetric'],
  question: String.raw`若二次曲面的方程 $x^2+3y^2+z^2+2axy+2xz+2yz=4$ 经正交变换化为 $y_1^2+4z_1^2=4$，则 $a=\underline{\qquad}$．`,
  answer: String.raw`$1$`,
  analysis: String.raw`令 $A=\begin{pmatrix}1&a&1\\a&3&1\\1&1&1\end{pmatrix}$，$X=\begin{pmatrix}x\\y\\z\end{pmatrix}$，则二次曲面表示为 $X^{\mathrm{T}}AX=4$．

因为 $X^{\mathrm{T}}AX=4$ 经过正交变换化为 $y_1^2+4y_2^2=4$，所以 $A$ 的特征值为 $\lambda_1=0$，$\lambda_2=1$，$\lambda_3=4$，于是 $r(A)=2$．

而

$$
A=\begin{pmatrix}1&a&1\\a&3&1\\1&1&1\end{pmatrix}\to\begin{pmatrix}1&1&1\\1&a&1\\a&3&1\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&a-1&0\\0&3-a&1-a\end{pmatrix},
$$

故 $a=1$．`,
  source: '《2011 数学一解析》第 5 页',
});

EXAMS.push({
  year: 2011, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['vec-express-crit', 'vec-rank-table'],
  question: String.raw`（本题满分 11 分）设向量组 $\alpha_1=(1,0,1)^{\mathrm{T}}$，$\alpha_2=(0,1,1)^{\mathrm{T}}$，$\alpha_3=(1,3,5)^{\mathrm{T}}$ 不能由向量组 $\beta_1=(1,1,1)^{\mathrm{T}}$，$\beta_2=(1,2,3)^{\mathrm{T}}$，$\beta_3=(3,4,a)^{\mathrm{T}}$ 线性表示．

（Ⅰ）求 $a$ 的值；

（Ⅱ）将 $\beta_1,\beta_2,\beta_3$ 用 $\alpha_1,\alpha_2,\alpha_3$ 线性表示．`,
  answer: String.raw`（Ⅰ）$a=5$；（Ⅱ）$\beta_1=2\alpha_1+4\alpha_2-\alpha_3$，$\beta_2=\alpha_1+2\alpha_2$，$\beta_3=5\alpha_1+10\alpha_2-2\alpha_3$．`,
  analysis: String.raw`（Ⅰ）方法一 $\alpha_1,\alpha_2,\alpha_3$ 为 3 个 3 维向量，因为

$$
|\alpha_1,\alpha_2,\alpha_3|=\begin{vmatrix}1&0&1\\0&1&3\\1&1&5\end{vmatrix}=1\ne 0,
$$

所以 $\alpha_1,\alpha_2,\alpha_3$ 线性无关．因为 $\beta_1,\beta_2,\beta_3$ 一定可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，而 $\alpha_1,\alpha_2,\alpha_3$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表示，所以 $\beta_1,\beta_2,\beta_3$ 的秩小于 $\alpha_1,\alpha_2,\alpha_3$ 的秩，

从而

$$
|\beta_1,\beta_2,\beta_3|=\begin{vmatrix}1&1&3\\1&2&4\\1&3&a\end{vmatrix}=\begin{vmatrix}1&1&3\\0&1&1\\0&2&a-3\end{vmatrix}=a-5=0,
$$

故 $a=5$．

方法二 $\beta_1,\beta_2,\beta_3,\alpha_i\ (i=1,2,3)$ 为 4 个 3 维向量，则 $\beta_1,\beta_2,\beta_3,\alpha_i\ (i=1,2,3)$ 一定线性相关．

若 $\beta_1,\beta_2,\beta_3$ 线性无关，而 $\beta_1,\beta_2,\beta_3,\alpha_i\ (i=1,2,3)$ 线性相关，则 $\alpha_i\ (i=1,2,3)$ 可由向量组 $\beta_1,\beta_2,\beta_3$ 线性表示，矛盾，于是 $|\beta_1,\beta_2,\beta_3|=0$．

由

$$
|\beta_1,\beta_2,\beta_3|=\begin{vmatrix}1&1&3\\1&2&4\\1&3&a\end{vmatrix}=a-5=0,
$$

得 $a=5$．

（Ⅱ）将矩阵 $(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)$ 进行初等行变换得

$$
(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&0&1&\mid&1&1&3\\0&1&3&\mid&1&2&4\\1&1&5&\mid&1&3&5\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&2&1&5\\0&1&0&\mid&4&2&10\\0&0&1&\mid&-1&0&-2\end{pmatrix},
$$

于是

$$
\begin{cases}\beta_1=2\alpha_1+4\alpha_2-\alpha_3,\\\beta_2=\alpha_1+2\alpha_2+0\alpha_3,\\\beta_3=5\alpha_1+10\alpha_2-2\alpha_3.\end{cases}
$$`,
  source: '《2011 数学一解析》第 8–9 页',
});

EXAMS.push({
  year: 2011, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['eig-symmetric', 'eig-diag-method'],
  question: String.raw`（本题满分 11 分）设 $A$ 为 3 阶实对称矩阵，$A$ 的秩为 2，且

$$
A\begin{pmatrix}1&1\\0&0\\-1&1\end{pmatrix}=\begin{pmatrix}-1&1\\0&0\\1&1\end{pmatrix}.
$$

（Ⅰ）求 $A$ 的所有特征值与特征向量；

（Ⅱ）求矩阵 $A$．`,
  answer: String.raw`（Ⅰ）特征值为 $\lambda_1=0$，$\lambda_2=-1$，$\lambda_3=1$，对应的所有特征向量分别为 $C_1\xi_1$，$C_2\xi_2$，$C_3\xi_3$（$C_1,C_2,C_3$ 为不为零的任意常数），其中 $\xi_1=\begin{pmatrix}0\\1\\1\end{pmatrix}$，$\xi_2=\begin{pmatrix}1\\0\\-1\end{pmatrix}$，$\xi_3=\begin{pmatrix}1\\0\\1\end{pmatrix}$；（Ⅱ）$A=\begin{pmatrix}0&0&1\\0&0&0\\1&0&0\end{pmatrix}$．`,
  analysis: String.raw`（Ⅰ）由 $r(A)=2<3$，得 $|A|=0$，于是 $\lambda_1=0$ 为 $A$ 的一个特征值．

又由已知条件，得

$$
A\begin{pmatrix}1\\0\\-1\end{pmatrix}=-\begin{pmatrix}1\\0\\-1\end{pmatrix},\quad A\begin{pmatrix}1\\0\\1\end{pmatrix}=\begin{pmatrix}1\\0\\1\end{pmatrix},
$$

根据特征值与特征向量的定义得

$\lambda_2=-1$ 为 $A$ 的特征值，其对应的特征向量为 $\xi_2=\begin{pmatrix}1\\0\\-1\end{pmatrix}$；

$\lambda_3=1$ 为 $A$ 的特征值，其对应的特征向量为 $\xi_3=\begin{pmatrix}1\\0\\1\end{pmatrix}$．

令 $\xi_1=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$ 为 $\lambda_1=0$ 对应的一个特征向量，由实对称矩阵不同特征值对应的特征向量正交得

$$
\begin{cases}\xi_1^{\mathrm{T}}\xi_2=0,\\\xi_1^{\mathrm{T}}\xi_3=0,\end{cases}
$$

即

$$
\begin{cases}x_1-x_3=0,\\x_1+x_3=0,\end{cases}
$$

基础解系为 $\xi_1=\begin{pmatrix}0\\1\\1\end{pmatrix}$，即 $\xi_1=\begin{pmatrix}0\\1\\1\end{pmatrix}$ 为 $\lambda_1=0$ 对应的一个特征向量．故 $A$ 的特征值为 $\lambda_1=0$，$\lambda_2=-1$，$\lambda_3=1$，其对应的所有特征向量为 $C_1\xi_1$，$C_2\xi_2$，$C_3\xi_3$（$C_1,C_2,C_3$ 为不为零的任意常数）．

（Ⅱ）方法一 令

$$
P=(\xi_1,\xi_2,\xi_3)=\begin{pmatrix}0&1&1\\1&0&0\\0&-1&1\end{pmatrix},
$$

由

$$
P^{-1}AP=\begin{pmatrix}0&0&0\\0&-1&0\\0&0&1\end{pmatrix},
$$

得

$$
A=P\begin{pmatrix}0&0&0\\0&-1&0\\0&0&1\end{pmatrix}P^{-1}=\begin{pmatrix}0&0&1\\0&0&0\\1&0&0\end{pmatrix}.
$$

方法二 由 $A(\xi_1,\xi_2,\xi_3)=(A\xi_1,A\xi_2,A\xi_3)=(0,-\xi_2,\xi_3)$，得`,
  source: '《2011 数学一解析》第 9 页',
});
