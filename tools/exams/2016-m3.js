// 2016 · 数学三 · 线性代数（题面取自《2016年考研数学三真题》，答案与解析取自《2016数学三真题答案解析》）
EXAMS.push({
  year: 2016, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ['eig-similar-prop', 'eig-similar'],
  question: String.raw`设 $A,B$ 是可逆矩阵，且 $A$ 与 $B$ 相似，则下列结论错误的是（　）

（A）$A^{\mathrm{T}}$ 与 $B^{\mathrm{T}}$ 相似.　（B）$A^{-1}$ 与 $B^{-1}$ 相似.　（C）$A+A^{\mathrm{T}}$ 与 $B+B^{\mathrm{T}}$ 相似.　（D）$A+A^{-1}$ 与 $B+B^{-1}$ 相似.`,
  answer: '（C）',
  analysis: String.raw`设 $P^{-1}AP=B$，有 $(P^{-1}AP)^{\mathrm{T}}=B^{\mathrm{T}}$，即 $P^{\mathrm{T}}A^{\mathrm{T}}(P^{\mathrm{T}})^{-1}=B^{\mathrm{T}}$，即 A 正确；
$(P^{-1}AP)^{-1}=B^{-1}$，有 $P^{-1}A^{-1}P=B^{-1}$，即 B 正确，而 D 正确. 故应选 C.`,
  source: '《2016 数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2016, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ['qf-inertia-index', 'eig-poly'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+2x_1x_2+2x_2x_3+2x_1x_3$ 的正、负惯性指数分别为 $1,2$，则（　）

（A）$a>1$.　（B）$a<-2$.　（C）$-2<a<1$.　（D）$a=1$ 或 $a=-2$.`,
  answer: '（C）',
  analysis: String.raw`二次型的矩阵 $A=\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}$.
由
$$
|\lambda E-A|=(\lambda-a-2)(\lambda-a+1)^2=0,
$$
得特征值为 $a+2,a-1$（二重）.
由条件，$a+2>0,a-1<0$. 故应选 C.`,
  source: '《2016 数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2016, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ['det-expansion', 'det-def'],
  question: String.raw`行列式
$$
\begin{vmatrix}\lambda&-1&0&0\\0&\lambda&-1&0\\0&0&\lambda&-1\\4&3&2&\lambda+1\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$\lambda^4+\lambda^3+2\lambda^2+3\lambda+4$`,
  analysis: String.raw`按最后一行展开，得
$$
(-1)^{4+1}\times4\begin{vmatrix}-1&0&0\\\lambda&-1&0\\0&\lambda&-1\end{vmatrix}+(-1)^{4+2}\times3\begin{vmatrix}\lambda&0&0\\0&-1&0\\0&\lambda&-1\end{vmatrix}+(-1)^{4+3}\times2\begin{vmatrix}\lambda&-1&0\\0&\lambda&0\\0&0&-1\end{vmatrix}+(-1)^{4+4}(\lambda+1)\begin{vmatrix}\lambda&-1&0\\0&\lambda&-1\\0&0&\lambda\end{vmatrix}
$$
$$
=\lambda^4+\lambda^3+2\lambda^2+3\lambda+4.
$$`,
  source: '《2016 数学三真题答案解析》第 3 页',
});

EXAMS.push({
  year: 2016, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ['eq-nonhomo-crit', 'eq-nonhomo-general'],
  question: String.raw`（本题满分 11 分）设矩阵 $A=\begin{pmatrix}1&1&1-a\\1&0&a\\a+1&1&a+1\end{pmatrix}$，$\beta=\begin{pmatrix}0\\1\\2a-2\end{pmatrix}$，且方程组 $Ax=\beta$ 无解.

（Ⅰ）求 $a$ 的值；

（Ⅱ）求方程组 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解.`,
  answer: String.raw`$a=0$；$x=\begin{pmatrix}1\\-2\\0\end{pmatrix}+k\begin{pmatrix}0\\-1\\1\end{pmatrix}$（$k$ 为任意常数）`,
  analysis: String.raw`（Ⅰ）对矩阵 $(A\mid\beta)$ 施以初等行变换
$$
(A\mid\beta)=\left(\begin{array}{ccc|c}1&1&1-a&0\\1&0&a&1\\a+1&1&a+1&2a-2\end{array}\right)\to\left(\begin{array}{ccc|c}1&1&1-a&0\\0&-1&2a-1&1\\0&0&-a^2+2a&a-2\end{array}\right),
$$
由方程组无解知，秩 $(A\mid\beta)>$ 秩 $A$，即 $-a^2+2a=0$，且 $a-2\ne0$，解得 $a=0$.

（Ⅱ）对矩阵 $(A^{\mathrm{T}}A\mid A^{\mathrm{T}}\beta)$ 施以初等行变换
$$
(A^{\mathrm{T}}A\mid A^{\mathrm{T}}\beta)=\left(\begin{array}{ccc|c}3&2&2&-1\\2&2&2&-2\\2&2&2&-2\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&0&1\\0&1&1&-2\\0&0&0&0\end{array}\right),
$$
所以，方程组 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解
$$
x=\begin{pmatrix}1\\-2\\0\end{pmatrix}+k\begin{pmatrix}0\\-1\\1\end{pmatrix}\quad(k\ \text{为任意常数}).
$$`,
  source: '《2016 数学三真题答案解析》第 5 页',
});

EXAMS.push({
  year: 2016, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ['eig-diag-method', 'eig-power-app'],
  question: String.raw`（本题满分 11 分）已知矩阵 $A=\begin{pmatrix}0&-1&1\\2&-3&0\\0&0&0\end{pmatrix}$.

（Ⅰ）求 $A^{99}$；

（Ⅱ）设 3 阶矩阵 $B=(\alpha_1,\alpha_2,\alpha_3)$ 满足 $B^2=BA$，记 $B^{100}=(\beta_1,\beta_2,\beta_3)$，将 $\beta_1,\beta_2,\beta_3$ 分别表示为 $\alpha_1,\alpha_2,\alpha_3$ 的线性组合.`,
  answer: String.raw`$A^{99}=\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}$；$\beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2$，$\beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2$，$\beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2$`,
  analysis: String.raw`（Ⅰ）因为
$$
|\lambda E-A|=\begin{vmatrix}\lambda&1&-1\\-2&\lambda+3&0\\0&0&\lambda\end{vmatrix}=\lambda(\lambda+1)(\lambda+2),
$$
所以 $A$ 的特征值为 $\lambda_1=-1,\lambda_2=-2,\lambda_3=0$.

当 $\lambda_1=-1$ 时，解方程组 $(-E-A)x=0$，得特征向量 $\xi_1=(1,1,0)^{\mathrm{T}}$；

当 $\lambda_2=-2$ 时，解方程组 $(-2E-A)x=0$，得特征向量 $\xi_2=(1,2,0)^{\mathrm{T}}$；

当 $\lambda_3=0$ 时，解方程组 $Ax=0$，得特征向量 $\xi_3=(3,2,2)^{\mathrm{T}}$.

令 $P=(\xi_1,\xi_2,\xi_3)=\begin{pmatrix}1&1&3\\1&2&2\\0&0&2\end{pmatrix}$，则
$$
P^{-1}AP=\begin{pmatrix}-1&0&0\\0&-2&0\\0&0&0\end{pmatrix},
$$
所以
$$
A^{99}=P\begin{pmatrix}(-1)^{99}&0&0\\0&(-2)^{99}&0\\0&0&0\end{pmatrix}P^{-1}=\begin{pmatrix}1&1&3\\1&2&2\\0&0&2\end{pmatrix}\begin{pmatrix}(-1)^{99}&0&0\\0&(-2)^{99}&0\\0&0&0\end{pmatrix}\begin{pmatrix}2&-1&-2\\-1&1&\frac12\\0&0&\frac12\end{pmatrix}
$$
$$
=\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}.
$$

（Ⅱ）因为 $B^2=BA$，所以
$$
B^{100}=B^{98}B^2=B^{99}A=B^{97}B^2A=B^{98}A^2=\cdots=BA^{99},
$$
即
$$
(\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix},
$$
所以
$$
\begin{cases}
\beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2,\\
\beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2,\\
\beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2,
\end{cases}
$$`,
  source: '《2016 数学三真题答案解析》第 5–6 页',
});
