// 2017 · 数学一 · 线性代数（题面取自《2017年考研数学（一）真题》，答案与解析取自《2017数学一解析》）
EXAMS.push({
  year: 2017, subject: '数一', number: 5, kind: '选择', score: 4,
  ids: ['eig-ops', 'mat-invertible-crit'],
  question: String.raw`设 $\alpha$ 为 $n$ 维单位列向量，$E$ 为 $n$ 阶单位矩阵，则（　）

（A）$E-\alpha\alpha^{\mathrm{T}}$ 不可逆　（B）$E+\alpha\alpha^{\mathrm{T}}$ 不可逆　（C）$E+2\alpha\alpha^{\mathrm{T}}$ 不可逆　（D）$E-2\alpha\alpha^{\mathrm{T}}$ 不可逆`,
  answer: '（A）',
  analysis: String.raw`方法一 令 $A=\alpha\alpha^{\mathrm{T}}$，$A^2=A$，

令 $AX=\lambda X$，由 $(A^2-A)X=(\lambda^2-\lambda)X=0$ 得 $\lambda^2-\lambda=0$，$\lambda=0$ 或 $\lambda=1$，

因为 $\mathrm{tr}\,A=\alpha^{\mathrm{T}}\alpha=1=\lambda_1+\cdots+\lambda_n$ 得 $A$ 的特征值为 $\lambda_1=\cdots=\lambda_{n-1}=0,\ \lambda_n=1$，

$E-\alpha\alpha^{\mathrm{T}}$ 的特征值为 $\lambda_1=\cdots=\lambda_{n-1}=1,\ \lambda_n=0$，从而 $|E-\alpha\alpha^{\mathrm{T}}|=0$，即 $E-\alpha\alpha^{\mathrm{T}}$ 不可逆，应选（A）。

方法二 令 $A=E-\alpha\alpha^{\mathrm{T}}$，
$$
A^2=(E-\alpha\alpha^{\mathrm{T}})(E-\alpha\alpha^{\mathrm{T}})=E-2\alpha\alpha^{\mathrm{T}}+\alpha\alpha^{\mathrm{T}}=A,
$$
由 $A(E-A)=O$ 得 $r(A)+r(E-A)\le n$，
再由 $r(A)+r(E-A)\ge r[A+(E-A)]=r(E)=n$ 得
$$
r(A)+r(E-A)=n,
$$
而 $E-A=\alpha\alpha^{\mathrm{T}}$，$r(E-A)=r(\alpha\alpha^{\mathrm{T}})=r(\alpha)=1$，
于是 $r(A)=n-1<n$，即 $E-\alpha\alpha^{\mathrm{T}}$ 不可逆，应选（A）。`,
  source: '《2017 数学一解析》第 1–2 页',
});

EXAMS.push({
  year: 2017, subject: '数一', number: 6, kind: '选择', score: 4,
  ids: ['eig-similar-crit', 'eig-diag-crit'],
  question: String.raw`已知矩阵
$$
A=\begin{pmatrix}2&0&0\\0&2&1\\0&0&1\end{pmatrix},\quad B=\begin{pmatrix}2&1&0\\0&2&0\\0&0&1\end{pmatrix},\quad C=\begin{pmatrix}1&0&0\\0&2&0\\0&0&2\end{pmatrix},
$$
则（　）

（A）$A$ 与 $C$ 相似，$B$ 与 $C$ 相似　（B）$A$ 与 $C$ 相似，$B$ 与 $C$ 不相似　（C）$A$ 与 $C$ 不相似，$B$ 与 $C$ 相似　（D）$A$ 与 $C$ 不相似，$B$ 与 $C$ 不相似`,
  answer: '（B）',
  analysis: String.raw`显然矩阵 $A,B,C$ 的特征值都是 $\lambda_1=\lambda_2=2,\lambda_3=1$，

由
$$
2E-A=\begin{pmatrix}0&0&0\\0&0&-1\\0&0&1\end{pmatrix}
$$
得 $r(2E-A)=1$，则 $A$ 可相似对角化，从而 $A\sim C$；

由
$$
2E-B=\begin{pmatrix}0&-1&0\\0&0&0\\0&0&1\end{pmatrix}
$$
得 $r(2E-B)=2$，则 $B$ 不可相似对角化，从而 $B$ 与 $A,C$ 不相似，应选（B）。

> 方法点评：设 $A,B$ 为 $n$ 阶矩阵，且 $|\lambda E-A|=|\lambda E-B|$，即 $A,B$ 的特征值相同，则
>
> （1）若矩阵 $A,B$ 都可相似对角化，则 $A\sim B$；
>
> （2）若矩阵 $A,B$ 中一个可相似对角化，一个不可相似对角化，则 $A$ 与 $B$ 不相似。`,
  source: '《2017 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2017, subject: '数一', number: 13, kind: '填空', score: 4,
  ids: ['vec-rank-vs-mat', 'mat-rank'],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}1&0&1\\1&1&2\\0&1&1\end{pmatrix},
$$
$\alpha_1,\alpha_2,\alpha_3$ 为线性无关的 3 维列向量组，则向量组 $A\alpha_1,A\alpha_2,A\alpha_3$ 的秩为 $\underline{\qquad}$。`,
  answer: String.raw`$2$`,
  analysis: String.raw`$$
(A\alpha_1,A\alpha_2,A\alpha_3)=A(\alpha_1,\alpha_2,\alpha_3),
$$
因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，所以 $(\alpha_1,\alpha_2,\alpha_3)$ 可逆，从而 $r(A\alpha_1,A\alpha_2,A\alpha_3)=r(A)$，由
$$
A\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $r(A)=2$，故向量组 $A\alpha_1,A\alpha_2,A\alpha_3$ 的秩为 2。`,
  source: '《2017 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2017, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['eq-nonhomo-general', 'eig-def'],
  question: String.raw`（本题满分 11 分）设 3 阶矩阵 $A=(\alpha_1,\alpha_2,\alpha_3)$ 有 3 个不同的特征值，且 $\alpha_3=\alpha_1+2\alpha_2$。

（Ⅰ）证明 $r(A)=2$；

（Ⅱ）设 $\beta=\alpha_1+\alpha_2+\alpha_3$，求方程组 $Ax=\beta$ 的通解。`,
  answer: String.raw`（Ⅰ）见证明；（Ⅱ）$x=k\begin{pmatrix}1\\2\\-1\end{pmatrix}+\begin{pmatrix}1\\1\\1\end{pmatrix}$（$k$ 为任意常数）`,
  analysis: String.raw`（Ⅰ）设 $A$ 的特征值为 $\lambda_1,\lambda_2,\lambda_3$，

因为 $A$ 有三个不同的特征值，所以 $A$ 可以相似对角化，即存在可逆矩阵 $P$，使得
$$
P^{-1}AP=\begin{pmatrix}\lambda_1&0&0\\0&\lambda_2&0\\0&0&\lambda_3\end{pmatrix},
$$
因为 $\lambda_1,\lambda_2,\lambda_3$ 两两不同，所以 $r(A)\ge 2$。

又因为 $\alpha_3=\alpha_1+2\alpha_2$，所以 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，从而 $r(A)<3$，于是 $r(A)=2$。

（Ⅱ）因为 $r(A)=2$，所以 $AX=0$ 基础解系含一个线性无关的解向量，由
$$
\begin{cases}
\alpha_1+2\alpha_2-\alpha_3=0,\\
\alpha_1+\alpha_2+\alpha_3=\beta,
\end{cases}
$$
得 $AX=\beta$ 的通解为
$$
X=k\begin{pmatrix}1\\2\\-1\end{pmatrix}+\begin{pmatrix}1\\1\\1\end{pmatrix}\ (k\ \text{为任意常数}).
$$`,
  source: '《2017 数学一解析》第 5 页',
});

EXAMS.push({
  year: 2017, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['qf-orthogonal', 'eig-orth-diag'],
  question: String.raw`（本题满分 11 分）设二次型 $f(x_1,x_2,x_3)=2x_1^2-x_2^2+ax_3^2+2x_1x_2-8x_1x_3+2x_2x_3$ 在正交变换 $x=Qy$ 下的标准形为 $\lambda_1y_1^2+\lambda_2y_2^2$，求 $a$ 的值及一个正交矩阵 $Q$。`,
  answer: String.raw`$a=2$，$Q=\begin{pmatrix}\frac{1}{\sqrt{3}}&-\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\\-\frac{1}{\sqrt{3}}&0&\frac{2}{\sqrt{6}}\\\frac{1}{\sqrt{3}}&\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\end{pmatrix}$`,
  analysis: String.raw`$$
A=\begin{pmatrix}2&1&-4\\1&-1&1\\-4&1&a\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$
$f(x_1,x_2,x_3)=X^{\mathrm{T}}AX$，

因为 $\lambda_3=0$，所以 $|A|=0$。由
$$
|A|=\begin{vmatrix}2&1&-4\\1&-1&1\\-4&1&a\end{vmatrix}=-3(a-2)=0
$$
得 $a=2$。

由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&4\\-1&\lambda+1&-1\\4&-1&\lambda-2\end{vmatrix}=\lambda(\lambda+3)(\lambda-6)=0
$$
得 $\lambda_1=-3,\lambda_2=6,\lambda_3=0$。

由
$$
-3E-A\to\begin{pmatrix}5&1&-4\\1&2&1\\-4&1&5\end{pmatrix}\to\begin{pmatrix}1&0&-1\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $\lambda_1=-3$ 对应的线性无关的特征向量为 $\alpha_1=\begin{pmatrix}1\\-1\\1\end{pmatrix}$；

由
$$
6E-A=\begin{pmatrix}4&-1&4\\-1&7&-1\\4&-1&4\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&0\\0&0&0\end{pmatrix}
$$
得 $\lambda_2=6$ 对应的线性无关的特征向量为 $\alpha_2=\begin{pmatrix}-1\\0\\1\end{pmatrix}$；

由
$$
0E-A\to\begin{pmatrix}1&0&-1\\0&1&-2\\0&0&0\end{pmatrix}
$$
得 $\lambda_3=0$ 对应的线性无关的特征向量为 $\alpha_3=\begin{pmatrix}1\\2\\1\end{pmatrix}$。

规范化得
$$
\gamma_1=\frac{1}{\sqrt{3}}\begin{pmatrix}1\\-1\\1\end{pmatrix},\quad \gamma_2=\frac{1}{\sqrt{2}}\begin{pmatrix}-1\\0\\1\end{pmatrix},\quad \gamma_3=\frac{1}{\sqrt{6}}\begin{pmatrix}1\\2\\1\end{pmatrix},
$$
故正交矩阵为
$$
Q=\begin{pmatrix}\frac{1}{\sqrt{3}}&-\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\\-\frac{1}{\sqrt{3}}&0&\frac{2}{\sqrt{6}}\\\frac{1}{\sqrt{3}}&\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}\end{pmatrix},
$$
$$
f(x_1,x_2,x_3)=X^{\mathrm{T}}AX\overset{x=Qy}{=}-3y_1^2+6y_2^2.
$$`,
  source: '《2017 数学一解析》第 5–6 页',
});
