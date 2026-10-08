// 2010 · 数学一 · 线性代数（题面取自《2010年考研数学（一）真题》，答案与解析取自《2010数学一解析》）
EXAMS.push({
  year: 2010, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['mat-rank-ineq', 'mat-rank-invariance'],
  question: String.raw`设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times m$ 矩阵，$E$ 为 $m$ 阶单位矩阵，若 $AB=E$，则（　　）

（A）秩 $r(A)=m$，秩 $r(B)=m$．　　（B）秩 $r(A)=m$，秩 $r(B)=n$．

（C）秩 $r(A)=n$，秩 $r(B)=m$．　　（D）秩 $r(A)=n$，秩 $r(B)=n$．`,
  answer: '（A）',
  analysis: String.raw`$r(AB)=r(E)=m$．

因为 $r(AB)\le r(A)$ 且 $r(AB)\le r(B)$，所以 $r(A)\ge m$，$r(B)\ge m$．

又显然 $r(A)\le m$，$r(B)\le m$，故 $r(A)=r(B)=m$，应选（A）．`,
  source: '《2010 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2010, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['eig-similar-crit', 'eig-diag-crit', 'eig-symmetric'],
  question: String.raw`设 $A$ 为 4 阶实对称矩阵，且 $A^2+A=O$．若 $A$ 的秩为 3，则 $A$ 相似于（　　）

（A）$\begin{pmatrix}1&&&\\&1&&\\&&1&\\&&&0\end{pmatrix}$．　　（B）$\begin{pmatrix}1&&&\\&1&&\\&&-1&\\&&&0\end{pmatrix}$．

（C）$\begin{pmatrix}1&&&\\&-1&&\\&&-1&\\&&&0\end{pmatrix}$．　　（D）$\begin{pmatrix}-1&&&\\&-1&&\\&&-1&\\&&&0\end{pmatrix}$．`,
  answer: '（D）',
  analysis: String.raw`令 $AX=\lambda X\ (X\ne 0)$，由 $(A^2+A)X=(\lambda^2+\lambda)X=0$ 且 $X\ne 0$ 得 $\lambda^2+\lambda=0$，于是 $\lambda=0$ 或 $\lambda=-1$．因为 $A$ 可对角化且 $r(A)=3$，所以 $\lambda=-1$ 为三重特征值，故

$$
A\sim\begin{pmatrix}-1&&&\\&-1&&\\&&-1&\\&&&0\end{pmatrix},
$$

应选（D）．`,
  source: '《2010 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2010, subject: '数一', number: 13, kind: '填空', score: 5,
  ids: ['sp-dim-basis', 'vec-rank-vs-mat'],
  question: String.raw`设 $\alpha_1=(1,2,-1,0)^{\mathrm{T}}$，$\alpha_2=(1,1,0,2)^{\mathrm{T}}$，$\alpha_3=(2,1,1,a)^{\mathrm{T}}$．若由 $\alpha_1,\alpha_2,\alpha_3$ 生成的向量空间的维数为 2，则 $a=\underline{\qquad}$．`,
  answer: String.raw`$6$`,
  analysis: String.raw`

$$
(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&1&2\\2&1&1\\-1&0&1\\0&2&a\end{pmatrix}\to\begin{pmatrix}1&1&2\\0&-1&-3\\0&1&3\\0&2&a\end{pmatrix}\to\begin{pmatrix}1&1&2\\0&1&3\\0&0&0\\0&0&a-6\end{pmatrix},
$$

因为由 $\alpha_1,\alpha_2,\alpha_3$ 组成的向量组的秩为 2，所以 $a=6$．`,
  source: '《2010 数学一解析》第 6 页',
});

EXAMS.push({
  year: 2010, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['eq-nonhomo-crit', 'eq-nonhomo-general'],
  question: String.raw`（本题满分 11 分）设

$$
A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix},\quad b=\begin{pmatrix}a\\1\\1\end{pmatrix}.
$$

已知线性方程组 $Ax=b$ 存在 2 个不同的解．

（Ⅰ）求 $\lambda,a$；

（Ⅱ）求方程组 $Ax=b$ 的通解．`,
  answer: String.raw`（Ⅰ）$\lambda=-1$，$a=-2$；（Ⅱ）$x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac{3}{2}\\-\frac{1}{2}\\0\end{pmatrix}$（$k$ 为任意常数）．`,
  analysis: String.raw`（Ⅰ）因为线性方程组 $AX=b$ 存在两个不同解，所以 $r(A)<3$，即 $|A|=0$，解得 $\lambda=-1$ 或 $\lambda=1$．

当 $\lambda=-1$ 时，

$$
\overline{A}=\begin{pmatrix}-1&1&1&\mid&a\\0&-2&0&\mid&1\\1&1&-1&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&-1&\mid&1\\0&2&0&\mid&-1\\0&2&0&\mid&a+1\end{pmatrix}\to\begin{pmatrix}1&1&-1&\mid&1\\0&2&0&\mid&-1\\0&0&0&\mid&a+2\end{pmatrix},
$$

因为 $r(A)=r(\overline{A})<3$，所以 $a=-2$；

当 $\lambda=1$ 时，

$$
\overline{A}=\begin{pmatrix}1&1&1&\mid&a\\0&0&0&\mid&1\\1&1&1&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&1\\0&0&0&\mid&1\\0&0&0&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&1\\0&0&0&\mid&1\\0&0&0&\mid&0\end{pmatrix},
$$

显然 $r(A)\ne r(\overline{A})$，所以 $\lambda\ne 1$，故 $\lambda=-1$，$a=-2$．

（Ⅱ）由

$$
\overline{A}\to\begin{pmatrix}1&0&-1&\mid&\frac{3}{2}\\0&1&0&\mid&-\frac{1}{2}\\0&0&0&\mid&0\end{pmatrix},
$$

得方程组 $AX=b$ 的通解为

$$
X=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac{3}{2}\\-\frac{1}{2}\\0\end{pmatrix}\quad (k\ \text{为任意常数}).
$$`,
  source: '《2010 数学一解析》第 9 页',
});

EXAMS.push({
  year: 2010, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['qf-orthogonal', 'eig-orth-diag', 'qf-positive-crit'],
  question: String.raw`（本题满分 11 分）已知二次型 $f(x_1,x_2,x_3)=x^{\mathrm{T}}Ax$ 在正交变换 $x=Qy$ 下的标准形为 $y_1^2+y_2^2$，且 $Q$ 的第三列为 $\left(\frac{\sqrt{2}}{2},0,\frac{\sqrt{2}}{2}\right)^{\mathrm{T}}$．

（Ⅰ）求矩阵 $A$；

（Ⅱ）证明 $A+E$ 为正定矩阵，其中 $E$ 为 3 阶单位矩阵．`,
  answer: String.raw`（Ⅰ）$A=\begin{pmatrix}\frac{1}{2}&0&-\frac{1}{2}\\0&1&0\\-\frac{1}{2}&0&\frac{1}{2}\end{pmatrix}$；（Ⅱ）证明见解析，$A+E$ 的特征值为 $2,2,1$，均大于零．`,
  analysis: String.raw`（Ⅰ）因为二次型 $f(x_1,x_2,x_3)=X^{\mathrm{T}}AX$ 在正交变换 $X=QY$ 下的标准形为 $y_1^2+y_2^2$，所以 $A$ 的特征值为 $\lambda_1=\lambda_2=1$，$\lambda_3=0$，$Q$ 的第 3 列为 $\left(\frac{\sqrt{2}}{2},0,\frac{\sqrt{2}}{2}\right)^{\mathrm{T}}$，所以 $\lambda_3=0$ 对应的特征向量为

$$
\xi_3=\begin{pmatrix}1\\0\\1\end{pmatrix}.
$$

因为 $A$ 为实对称矩阵，所以 $A$ 的不同特征值对应的特征向量正交，令 $\lambda_1=\lambda_2=1$ 对应的特征向量为

$$
\xi=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$

由 $x_1+x_3=0$ 得 $\lambda_1=\lambda_2=1$ 对应的线性无关的特征向量为

$$
\xi_1=\begin{pmatrix}0\\1\\0\end{pmatrix},\quad \xi_2=\begin{pmatrix}-1\\0\\1\end{pmatrix}.
$$

令 $\gamma_1=\begin{pmatrix}0\\1\\0\end{pmatrix}$，$\gamma_2=\frac{1}{\sqrt{2}}\begin{pmatrix}-1\\0\\1\end{pmatrix}$，$\gamma_3=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\0\\1\end{pmatrix}$，则 $Q=(\gamma_1,\gamma_2,\gamma_3)$，

由

$$
Q^{\mathrm{T}}AQ=\begin{pmatrix}1&&\\&1&\\&&0\end{pmatrix},
$$

得

$$
A=\begin{pmatrix}\frac{1}{2}&0&-\frac{1}{2}\\0&1&0\\-\frac{1}{2}&0&\frac{1}{2}\end{pmatrix}.
$$

（Ⅱ）因为

$$
A+E=\begin{pmatrix}\frac{3}{2}&0&-\frac{1}{2}\\0&2&0\\-\frac{1}{2}&0&\frac{3}{2}\end{pmatrix}
$$

是实对称矩阵，且 $A$ 的特征值为 $\lambda_1=\lambda_2=1$，$\lambda_3=0$，

所以 $A+E$ 的特征值为 $\lambda_1=\lambda_2=2$，$\lambda_3=1$，因为其特征值都大于零，所以 $A+E$ 为正定矩阵．`,
  source: '《2010 数学一解析》第 9–10 页',
});
