// 2009 · 数学一 · 线性代数（题面取自《2009年考研数学（一）真题》，答案与解析取自《2009数学一解析》）
EXAMS.push({
  year: 2009, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['sp-transition', 'sp-dim-basis'],
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3$ 是 3 维向量空间 $\mathbf{R}^3$ 的一组基，则由基 $\alpha_1,\frac{1}{2}\alpha_2,\frac{1}{3}\alpha_3$ 到基 $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1$ 的过渡矩阵为（　　）

（A）$\begin{pmatrix}1&0&1\\2&2&0\\0&3&3\end{pmatrix}$．　　（B）$\begin{pmatrix}1&2&0\\0&2&3\\1&0&3\end{pmatrix}$．

（C）$\begin{pmatrix}\frac{1}{2}&\frac{1}{4}&-\frac{1}{6}\\-\frac{1}{2}&\frac{1}{4}&\frac{1}{6}\\\frac{1}{2}&-\frac{1}{4}&\frac{1}{6}\end{pmatrix}$．　　（D）$\begin{pmatrix}\frac{1}{2}&-\frac{1}{2}&\frac{1}{2}\\\frac{1}{4}&\frac{1}{4}&-\frac{1}{4}\\-\frac{1}{6}&\frac{1}{6}&\frac{1}{6}\end{pmatrix}$．`,
  answer: '（A）',
  analysis: String.raw`令 $A=(\alpha_1,\alpha_2,\alpha_3)$，

由 $(\alpha_1,\frac{1}{2}\alpha_2,\frac{1}{3}\alpha_3)=A\begin{pmatrix}1&0&0\\0&\frac{1}{2}&0\\0&0&\frac{1}{3}\end{pmatrix}$，得 $A=(\alpha_1,\frac{1}{2}\alpha_2,\frac{1}{3}\alpha_3)\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}$，

又由 $(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)=A\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}$，得

$$
(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)=(\alpha_1,\frac{1}{2}\alpha_2,\frac{1}{3}\alpha_3)\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}
$$

$$
=(\alpha_1,\frac{1}{2}\alpha_2,\frac{1}{3}\alpha_3)\begin{pmatrix}1&0&1\\2&2&0\\0&3&3\end{pmatrix}
$$

即从 $\alpha_1,\frac{1}{2}\alpha_2,\frac{1}{3}\alpha_3$ 到 $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1$ 的过渡矩阵为 $\begin{pmatrix}1&0&1\\2&2&0\\0&3&3\end{pmatrix}$，应选（A）．`,
  source: '《2009 数学一解析》第 2–3 页',
});

EXAMS.push({
  year: 2009, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['mat-adjoint', 'mat-block', 'mat-adj-identity'],
  question: String.raw`设 $A,B$ 均为 2 阶矩阵，$A^*,B^*$ 分别为 $A,B$ 的伴随矩阵，若 $|A|=2$，$|B|=3$，则分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的伴随矩阵为（　　）

（A）$\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$．　　（B）$\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$．

（C）$\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$．　　（D）$\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$．`,
  answer: '（B）',
  analysis: String.raw`$\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{2\times 2}|A|\cdot|B|=6$，则

$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}^*=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=6\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=\begin{pmatrix}O&6B^{-1}\\6A^{-1}&O\end{pmatrix}=\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix},
$$

应选（B）．`,
  source: '《2009 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2009, subject: '数一', number: 13, kind: '填空', score: 5,
  ids: ['eig-def', 'vec-inner'],
  question: String.raw`若 3 维列向量 $\alpha,\beta$ 满足 $\alpha^{\mathrm{T}}\beta=2$，其中 $\alpha^{\mathrm{T}}$ 为 $\alpha$ 的转置，则矩阵 $\beta\alpha^{\mathrm{T}}$ 的非零特征值为 $\underline{\qquad}$．`,
  answer: String.raw`$2$`,
  analysis: String.raw`令 $A=\beta\alpha^{\mathrm{T}}$，则 $A^2=\beta\alpha^{\mathrm{T}}\cdot\beta\alpha^{\mathrm{T}}=2\beta\alpha^{\mathrm{T}}=2A$．

令 $AX=\lambda X\ (X\ne 0)$，由 $A^2=2A$，得 $\lambda^2X=2\lambda X$ 或 $(\lambda^2-2\lambda)X=0$．

因为 $X\ne 0$，所以 $\lambda^2-2\lambda=0$，故 $\beta\alpha^{\mathrm{T}}$ 的非零特征值为 $2$．`,
  source: '《2009 数学一解析》第 5 页',
});

EXAMS.push({
  year: 2009, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['eq-nonhomo-general', 'vec-indep-crit'],
  question: String.raw`（本题满分 11 分）设

$$
A=\begin{pmatrix}1&-1&-1\\-1&1&1\\0&-4&-2\end{pmatrix},\quad \xi_1=\begin{pmatrix}-1\\1\\-2\end{pmatrix}.
$$

（Ⅰ）求满足 $A\xi_2=\xi_1$，$A^2\xi_3=\xi_1$ 的所有向量 $\xi_2,\xi_3$；

（Ⅱ）对（Ⅰ）中的任意向量 $\xi_2,\xi_3$，证明 $\xi_1,\xi_2,\xi_3$ 线性无关．`,
  answer: String.raw`（Ⅰ）$\xi_2=k_1\begin{pmatrix}\frac{1}{2}\\-\frac{1}{2}\\1\end{pmatrix}+\begin{pmatrix}-\frac{1}{2}\\\frac{1}{2}\\0\end{pmatrix}=\begin{pmatrix}\frac{1}{2}k_1-\frac{1}{2}\\-\frac{1}{2}k_1+\frac{1}{2}\\k_1\end{pmatrix}$（$k_1$ 为任意常数）；$\xi_3=k_2\begin{pmatrix}-1\\1\\0\end{pmatrix}+k_3\begin{pmatrix}0\\0\\1\end{pmatrix}+\begin{pmatrix}-\frac{1}{2}\\0\\0\end{pmatrix}=\begin{pmatrix}-k_2-\frac{1}{2}\\k_2\\k_3\end{pmatrix}$（$k_2,k_3$ 为任意常数）；（Ⅱ）证明见解析，$\xi_1,\xi_2,\xi_3$ 线性无关．`,
  analysis: String.raw`（Ⅰ）由

$$
(A\ \vdots\ \xi_1)=\begin{pmatrix}1&-1&-1&\mid&-1\\-1&1&1&\mid&1\\0&-4&-2&\mid&-2\end{pmatrix}\to\begin{pmatrix}1&-1&-1&\mid&-1\\0&1&\frac{1}{2}&\mid&\frac{1}{2}\\0&0&0&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&-\frac{1}{2}&\mid&-\frac{1}{2}\\0&1&\frac{1}{2}&\mid&\frac{1}{2}\\0&0&0&\mid&0\end{pmatrix}
$$

得 $\xi_2=k_1\begin{pmatrix}\frac{1}{2}\\-\frac{1}{2}\\1\end{pmatrix}+\begin{pmatrix}-\frac{1}{2}\\\frac{1}{2}\\0\end{pmatrix}=\begin{pmatrix}\frac{1}{2}k_1-\frac{1}{2}\\-\frac{1}{2}k_1+\frac{1}{2}\\k_1\end{pmatrix}$（$k_1$ 为任意常数）．

$$
A^2=\begin{pmatrix}1&-1&-1\\-1&1&1\\0&-4&-2\end{pmatrix}\begin{pmatrix}1&-1&-1\\-1&1&1\\0&-4&-2\end{pmatrix}=\begin{pmatrix}2&2&0\\-2&-2&0\\4&4&0\end{pmatrix},
$$

由

$$
(A^2\ \vdots\ \xi_1)=\begin{pmatrix}2&2&0&\mid&-1\\-2&-2&0&\mid&1\\4&4&0&\mid&-2\end{pmatrix}\to\begin{pmatrix}1&1&0&\mid&-\frac{1}{2}\\0&0&0&\mid&0\\0&0&0&\mid&0\end{pmatrix}
$$

得 $\xi_3=k_2\begin{pmatrix}-1\\1\\0\end{pmatrix}+k_3\begin{pmatrix}0\\0\\1\end{pmatrix}+\begin{pmatrix}-\frac{1}{2}\\0\\0\end{pmatrix}=\begin{pmatrix}-k_2-\frac{1}{2}\\k_2\\k_3\end{pmatrix}$（$k_2,k_3$ 为任意常数）．

（Ⅱ）方法一 由

$$
|\xi_1,\xi_2,\xi_3|=\begin{vmatrix}-1&\frac{1}{2}k_1-\frac{1}{2}&-k_2-\frac{1}{2}\\1&-\frac{1}{2}k_1+\frac{1}{2}&k_2\\-2&k_1&k_3\end{vmatrix}=\begin{vmatrix}0&0&-\frac{1}{2}\\1&-\frac{1}{2}k_1+\frac{1}{2}&k_2\\-2&k_1&k_3\end{vmatrix}=-\frac{1}{2}\ne 0,
$$

得 $\xi_1,\xi_2,\xi_3$ 线性无关．

方法二 设

$$
k_1\xi_1+k_2\xi_2+k_3\xi_3=0\tag{①}
$$

①两边左乘 $A$ 得 $k_1A\xi_1+k_2A\xi_2+k_3A\xi_3=0$，由 $A\xi_1=0$ 得

$$
k_2\xi_1+k_3A\xi_3=0\tag{②}
$$

②两边左乘 $A$ 得 $k_3A^2\xi_3=0$，即 $k_3\xi_1=0$．

由 $\xi_1\ne 0$ 得 $k_3=0$，代入②得 $k_2=0$，再代入①得 $k_1=0$，故 $\xi_1,\xi_2,\xi_3$ 线性无关．`,
  source: '《2009 数学一解析》第 9–10 页',
});

EXAMS.push({
  year: 2009, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['qf-canonical', 'eig-poly'],
  question: String.raw`（本题满分 11 分）设二次型

$$
f(x_1,x_2,x_3)=ax_1^2+ax_2^2+(a-1)x_3^2+2x_1x_3-2x_2x_3.
$$

（Ⅰ）求二次型 $f$ 的矩阵的所有特征值；

（Ⅱ）若二次型 $f$ 的规范形为 $y_1^2+y_2^2$，求 $a$ 的值．`,
  answer: String.raw`（Ⅰ）$\lambda_1=a$，$\lambda_2=a+1$，$\lambda_3=a-2$；（Ⅱ）$a=2$．`,
  analysis: String.raw`（Ⅰ）二次型的矩阵 $A=\begin{pmatrix}a&0&1\\0&a&-1\\1&-1&a-1\end{pmatrix}$，

由

$$
|\lambda E-A|=\begin{vmatrix}\lambda-a&0&-1\\0&\lambda-a&1\\-1&1&\lambda-a+1\end{vmatrix}=(\lambda-a)[\lambda-(a+1)][\lambda-(a-2)]=0,
$$

得 $A$ 的特征值为 $\lambda_1=a$，$\lambda_2=a+1$，$\lambda_3=a-2$．

（Ⅱ）方法一 由于 $f$ 的规范形为 $y_1^2+y_2^2$，所以 $A$ 合同于 $\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}$，其秩为 2，于是

$|A|=\lambda_1\lambda_2\lambda_3=0$，故 $a=0$ 或 $a=-1$ 或 $a=2$．

当 $a=0$ 时，$\lambda_1=0$，$\lambda_2=1$，$\lambda_3=-2$，此时 $f$ 的规范形为 $y_1^2-y_2^2$，不合题意；

当 $a=-1$ 时，$\lambda_1=-1$，$\lambda_2=0$，$\lambda_3=-3$，此时 $f$ 的规范形为 $-y_1^2-y_2^2$，不合题意；

当 $a=2$ 时，$\lambda_1=2$，$\lambda_2=3$，$\lambda_3=0$，此时 $f$ 的规范形为 $y_1^2+y_2^2$．

综上可知，$a=2$．

方法二 由于 $f$ 的规范形为 $y_1^2+y_2^2$，所以 $A$ 的特征值有 2 个为正数，1 个为零，

因为 $a-2<a<a+1$，所以 $a=2$．`,
  source: '《2009 数学一解析》第 10 页',
});
