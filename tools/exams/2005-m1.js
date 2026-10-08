// 2005 · 数学一 · 线性代数（题面取自《2005年考研数学（一）真题》，答案与解析取自《2005数学一解析》）
EXAMS.push({
  year: 2005, subject: '数一', number: 5, kind: '填空', score: 4,
  ids: ['det-product', 'det-vandermonde'],
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3$ 均为 3 维列向量，记矩阵
$$
A=(\alpha_1,\alpha_2,\alpha_3),\quad B=(\alpha_1+\alpha_2+\alpha_3,\alpha_1+2\alpha_2+4\alpha_3,\alpha_1+3\alpha_2+9\alpha_3).
$$
如果 $|A|=1$，那么 $|B|=\underline{\qquad}$．`,
  answer: String.raw`$2$`,
  analysis: String.raw`【解】 方法一 因为
$$
B=(\alpha_1+\alpha_2+\alpha_3,\alpha_1+2\alpha_2+4\alpha_3,\alpha_1+3\alpha_2+9\alpha_3)=A\begin{pmatrix}1&1&1\\1&2&3\\1&4&9\end{pmatrix}.
$$
所以 $|B|=|A|\cdot\begin{vmatrix}1&1&1\\1&2&3\\1&4&9\end{vmatrix}=(3-1)(3-2)(2-1)=2$．

方法二
$$
|B|=|\alpha_1+\alpha_2+\alpha_3,\alpha_1+2\alpha_2+4\alpha_3,\alpha_1+3\alpha_2+9\alpha_3|
$$
$$
=|\alpha_1+\alpha_2+\alpha_3,\alpha_2+3\alpha_3,\alpha_2+5\alpha_3|=|\alpha_1+\alpha_2+\alpha_3,\alpha_2+3\alpha_3,2\alpha_3|=2|\alpha_1+\alpha_2+\alpha_3,\alpha_2+3\alpha_3,\alpha_3|
$$
$$
=2|\alpha_1+\alpha_2,\alpha_2,\alpha_3|=2|\alpha_1,\alpha_2,\alpha_3|=2.
$$

> **方法点评**：本题注意范德蒙德行列式的使用．`,
  source: '《2005 年数学（一）真题解析》第 2 页',
});

EXAMS.push({
  year: 2005, subject: '数一', number: 11, kind: '选择', score: 4,
  ids: ['eig-property', 'vec-indep-crit'],
  question: String.raw`设 $\lambda_1,\lambda_2$ 是矩阵 $A$ 的两个不同的特征值，对应的特征向量分别为 $\alpha_1,\alpha_2$，则 $\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关的充分必要条件是（　　）

（A）$\lambda_1\ne 0$．
（B）$\lambda_2\ne 0$．
（C）$\lambda_1=0$．
（D）$\lambda_2=0$．`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解】 方法一 因为矩阵的不同特征值对应的特征向量线性无关，所以 $\alpha_1,\alpha_2$ 线性无关．

由 $A\alpha_1=\lambda_1\alpha_1,A\alpha_2=\lambda_2\alpha_2$，得 $A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2$．
$$
(\alpha_1,A(\alpha_1+\alpha_2))=(\alpha_1,\alpha_2)\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix},
$$
$\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关的充分必要条件是矩阵 $\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}$ 可逆，即 $\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}\ne 0$，故 $\lambda_2\ne 0$，应选（B）．

方法二 令 $k_1\alpha_1+k_2A(\alpha_1+\alpha_2)=0$，由 $A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2$，得 $k_1\alpha_1+k_2(\lambda_1\alpha_1+\lambda_2\alpha_2)=0$，整理得 $(k_1+\lambda_1k_2)\alpha_1+\lambda_2k_2\alpha_2=0$．

因为 $\alpha_1,\alpha_2$ 线性无关，所以 $\begin{cases}k_1+\lambda_1k_2=0,\\\lambda_2k_2=0,\end{cases}$ 于是 $\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关的充分必要条件是 $k_1\alpha_1+k_2A(\alpha_1+\alpha_2)=0$ 当且仅当 $k_1=k_2=0$，即方程组 $\begin{cases}k_1+\lambda_1k_2=0,\\\lambda_2k_2=0\end{cases}$ 只有零解，
$$
\text{于是 }\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}\ne 0,\text{故 }\lambda_2\ne 0,\text{应选（B）}.
$$`,
  source: '《2005 年数学（一）真题解析》第 4 页',
});

EXAMS.push({
  year: 2005, subject: '数一', number: 12, kind: '选择', score: 4,
  ids: ['mat-adjoint', 'mat-adj-identity', 'mat-elem-mat'],
  question: String.raw`设 $A$ 为 $n\ (n\ge 2)$ 阶可逆矩阵，交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，$A^{*},B^{*}$ 分别为 $A,B$ 的伴随矩阵，则（　　）

（A）交换 $A^{*}$ 的第 1 列与第 2 列得 $B^{*}$．
（B）交换 $A^{*}$ 的第 1 行与第 2 行得 $B^{*}$．
（C）交换 $A^{*}$ 的第 1 列与第 2 列得 $-B^{*}$．
（D）交换 $A^{*}$ 的第 1 行与第 2 行得 $-B^{*}$．`,
  answer: String.raw`（C）`,
  analysis: String.raw`【解】 令 $E_{12}=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$，由题意得 $B=E_{12}A$．

由 $|B|=|E_{12}|\cdot|A|=-|A|$，$B^{-1}=A^{-1}E_{12}^{-1}=A^{-1}E_{12}$，

得 $B^{*}=|B|B^{-1}=-|A|\cdot A^{-1}E_{12}=-A^{*}E_{12}$ 或 $-B^{*}=A^{*}E_{12}$，

即交换 $A^{*}$ 的第 1、2 两列得 $-B^{*}$，应选（C）．

> **方法点评**：本题考查初等变换与伴随矩阵．
> 设 $A$ 为可逆矩阵，当研究 $A^{*}$ 时，一般需要使用公式 $A^{*}=|A|A^{-1}$，即将伴随矩阵问题转化为逆矩阵问题，注意使用如下结论：
> （1）设 $A,B$ 为可逆的 $n$ 阶矩阵，则 $(AB)^{*}=B^{*}A^{*}$；
> （2）设 $A,B$ 分别为可逆的 $m$ 阶及 $n$ 阶矩阵，则
> $\begin{pmatrix}A&O\\O&B\end{pmatrix}^{*}=\begin{vmatrix}A&O\\O&B\end{vmatrix}\begin{pmatrix}A&O\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}|B|A^{*}&O\\O&|A|B^{*}\end{pmatrix}$；
> $\begin{pmatrix}O&A\\B&O\end{pmatrix}^{*}=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=(-1)^{mn}\begin{pmatrix}O&|A|B^{*}\\|B|A^{*}&O\end{pmatrix}$．`,
  source: '《2005 年数学（一）真题解析》第 4–5 页',
});

EXAMS.push({
  year: 2005, subject: '数一', number: 20, kind: '解答', score: 9,
  ids: ['qf-orthogonal', 'qf-canonical', 'eig-orth-diag'],
  question: String.raw`（本题满分 9 分）已知二次型 $f(x_1,x_2,x_3)=(1-a)x_1^2+(1-a)x_2^2+2x_3^2+2(1+a)x_1x_2$ 的秩为 2．

（Ⅰ）求 $a$ 的值；

（Ⅱ）求正交变换 $x=Qy$，把 $f(x_1,x_2,x_3)$ 化成标准形；

（Ⅲ）求方程 $f(x_1,x_2,x_3)=0$ 的解．`,
  answer: String.raw`（Ⅰ）$a=0$；（Ⅱ）$Q=\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{2}}&0\\\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{2}}&0\\0&0&1\end{pmatrix}$，$Q^{\mathrm{T}}AQ=\begin{pmatrix}0&0&0\\0&2&0\\0&0&2\end{pmatrix}$，标准形为 $2y_2^2+2y_3^2$；（Ⅲ）$x=C\begin{pmatrix}-1\\1\\0\end{pmatrix}$（$C$ 为任意常数）．`,
  analysis: String.raw`【解】 令 $A=\begin{pmatrix}1-a&1+a&0\\1+a&1-a&0\\0&0&2\end{pmatrix}$，$X=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$，则二次型可表示为 $f=X^{\mathrm{T}}AX$．

（Ⅰ）因为 $r(A)=2$，所以 $|A|=0$，于是 $a=0$．

（Ⅱ）$A=\begin{pmatrix}1&1&0\\1&1&0\\0&0&2\end{pmatrix}$，由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&0\\-1&\lambda-1&0\\0&0&\lambda-2\end{vmatrix}=\lambda(\lambda-2)^2=0,
$$
得 $A$ 的特征值为 $\lambda_1=0,\lambda_2=\lambda_3=2$．

当 $\lambda_1=0$ 时，由 $(0E-A)X=0$，即 $AX=0$，得 $\xi_1=(-1,1,0)^{\mathrm{T}}$；

当 $\lambda_2=\lambda_3=2$ 时，由 $(2E-A)X=0$，得 $\xi_2=(1,1,0)^{\mathrm{T}},\xi_3=(0,0,1)^{\mathrm{T}}$，

单位化得 $\gamma_1=\dfrac{1}{\sqrt{2}}\begin{pmatrix}-1\\1\\0\end{pmatrix}$，$\gamma_2=\dfrac{1}{\sqrt{2}}\begin{pmatrix}1\\1\\0\end{pmatrix}$，$\gamma_3=\begin{pmatrix}0\\0\\1\end{pmatrix}$，
$$
\text{令 }Q=\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{2}}&0\\\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{2}}&0\\0&0&1\end{pmatrix},\text{则 }Q^{\mathrm{T}}AQ=\begin{pmatrix}0&0&0\\0&2&0\\0&0&2\end{pmatrix},
$$
于是 $f(x_1,x_2,x_3)=X^{\mathrm{T}}AX\xlongequal{x=Qy}2y_2^2+2y_3^2$．

（Ⅲ）由 $f(x_1,x_2,x_3)=x_1^2+x_2^2+2x_3^2+2x_1x_2=(x_1+x_2)^2+2x_3^2=0$，得 $\begin{cases}x_1+x_2=0,\\x_3=0,\end{cases}$ 则 $f(x_1,x_2,x_3)=0$ 的解为 $C\begin{pmatrix}-1\\1\\0\end{pmatrix}$（$C$ 为任意常数）．`,
  source: '《2005 年数学（一）真题解析》第 8 页',
});

EXAMS.push({
  year: 2005, subject: '数一', number: 21, kind: '解答', score: 9,
  ids: ['eq-AX-O-AB-O', 'eq-homo-general', 'eq-homo-structure'],
  question: String.raw`（本题满分 9 分）已知 3 阶矩阵 $A$ 的第一行是 $(a,b,c)$，$a,b,c$ 不全为零，矩阵 $B=\begin{pmatrix}1&2&3\\2&4&6\\3&6&k\end{pmatrix}$（$k$ 为常数），且 $AB=O$，求线性方程组 $Ax=0$ 的通解．`,
  answer: String.raw`当 $k\ne 9$ 时，通解为 $X=C_1\begin{pmatrix}1\\2\\3\end{pmatrix}+C_2\begin{pmatrix}3\\6\\k\end{pmatrix}$（$C_1,C_2$ 为任意常数）；当 $k=9$ 时，若 $r(A)=2$，通解为 $X=C\begin{pmatrix}1\\2\\3\end{pmatrix}$（$C$ 为任意常数）；若 $r(A)=1$，通解为 $X=C_1\begin{pmatrix}-\dfrac{b}{a}\\1\\0\end{pmatrix}+C_2\begin{pmatrix}-\dfrac{c}{a}\\0\\1\end{pmatrix}$（$C_1,C_2$ 为任意常数）．`,
  analysis: String.raw`【解】 由 $AB=O$，得 $r(A)+r(B)\le 3$，

因为 $A$ 为非零矩阵，所以 $r(A)\ge 1$．

当 $k\ne 9$ 时，由 $r(B)=2$ 得 $r(A)=1$．

因为 $AB=O$，所以 $B$ 的列向量为方程组 $AX=0$ 的解，于是方程组 $AX=0$ 的通解为
$$
X=C_1\begin{pmatrix}1\\2\\3\end{pmatrix}+C_2\begin{pmatrix}3\\6\\k\end{pmatrix}\quad(C_1,C_2\text{ 为任意常数}).
$$
当 $k=9$ 时，$r(B)=1$，则 $1\le r(A)\le 2$．

当 $r(A)=2$ 时，因为 $AB=O$，所以 $B$ 的列向量为 $AX=0$ 的解，于是方程组 $AX=0$ 的通解为 $X=C\begin{pmatrix}1\\2\\3\end{pmatrix}$（$C$ 为任意常数）．
$$
\text{当 }r(A)=1\text{ 时，不妨设 }a\ne 0,\text{由 }A\to\begin{pmatrix}a&b&c\\0&0&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&\dfrac{b}{a}&\dfrac{c}{a}\\0&0&0\\0&0&0\end{pmatrix},\text{得方程组 }AX=0\text{ 的通解为}
$$
$$
X=C_1\begin{pmatrix}-\dfrac{b}{a}\\1\\0\end{pmatrix}+C_2\begin{pmatrix}-\dfrac{c}{a}\\0\\1\end{pmatrix}\quad(C_1,C_2\text{ 为任意常数}).
$$

> **方法点评**：设 $A,B$ 分别为 $m\times n$ 与 $n\times s$ 两个矩阵，对 $AB=O$ 有两种解读：
> （1）$r(A)+r(B)\le n$；
> （2）矩阵 $B$ 的列向量为齐次线性方程组 $AX=0$ 的一组解．`,
  source: '《2005 年数学（一）真题解析》第 8–9 页',
});

