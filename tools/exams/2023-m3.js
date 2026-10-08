// 2023 · 数学三 · 线性代数（题面取自《2023年考研数学三真题》，答案与解析取自《2023年数学三真题答案解析》）
EXAMS.push({
  year: 2023, subject: '数三', number: 5, kind: '选择', score: 5,
  ids: ['mat-adjoint', 'mat-adj-identity', 'mat-block'],
  question: String.raw`设 $A,B$ 为 $n$ 阶可逆矩阵，$E$ 为 $n$ 阶单位矩阵，$M^{*}$ 为矩阵 $M$ 的伴随矩阵，则
$$
\begin{bmatrix}A&E\\O&B\end{bmatrix}^{*}=
$$
（A）$\begin{bmatrix}|A|B^{*}&-B^{*}A^{*}\\O&|B|A^{*}\end{bmatrix}$　（B）$\begin{bmatrix}|B|A^{*}&-A^{*}B^{*}\\O&|A|B^{*}\end{bmatrix}$

（C）$\begin{bmatrix}|B|A^{*}&-B^{*}A^{*}\\O&|A|B^{*}\end{bmatrix}$　（D）$\begin{bmatrix}|A|B^{*}&-A^{*}B^{*}\\O&|B|A^{*}\end{bmatrix}$`,
  answer: '（B）',
  analysis: String.raw`（方法一）分别令（A）（B）（C）（D）选项中的矩阵为 $I_1,I_2,I_3,I_4$。
$$
\begin{bmatrix}A&E\\O&B\end{bmatrix}I_1=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}|A|B^{*}&-B^{*}A^{*}\\O&|B|A^{*}\end{bmatrix}=\begin{bmatrix}|A|AB^{*}&\cdots\\\cdots&\cdots\end{bmatrix},
$$
不能保证 $|A|AB^{*}=|A||B|E$，所以 $I_1$ 不是 $\begin{bmatrix}A&E\\O&B\end{bmatrix}^{*}$，选项（A）不正确。同理，选项（D）也不正确。
$$
\begin{bmatrix}A&E\\O&B\end{bmatrix}I_3=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}|B|A^{*}&-B^{*}A^{*}\\O&|A|B^{*}\end{bmatrix}=\begin{bmatrix}|A||B|E&-AB^{*}A^{*}+|A|B^{*}\\O&|A||B|E\end{bmatrix},
$$
（C）不正确。
$$
\begin{bmatrix}A&E\\O&B\end{bmatrix}I_4=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}|A|B^{*}&-A^{*}B^{*}\\O&|B|A^{*}\end{bmatrix}=\begin{bmatrix}|A||B|E&-|A|B^{*}+|A|B^{*}\\O&|A||B|E\end{bmatrix}=\begin{bmatrix}|A||B|E&O\\O&|A||B|E\end{bmatrix},
$$
选项（B）是正确的。

（方法二）
$$
\begin{bmatrix}A&E\\O&B\end{bmatrix}^{*}=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}A&E\\O&B\end{bmatrix}^{-1}=|A||B|\begin{bmatrix}A^{-1}&-A^{-1}B^{-1}\\O&B^{-1}\end{bmatrix}=\begin{bmatrix}|A||B|A^{-1}&-|A||B|A^{-1}B^{-1}\\O&|A||B|B^{-1}\end{bmatrix}=\begin{bmatrix}|B|A^{*}&-A^{*}B^{*}\\O&|A|B^{*}\end{bmatrix}.
$$`,
  source: '《2023 数学三解析》第 2 页',
});

EXAMS.push({
  year: 2023, subject: '数三', number: 6, kind: '选择', score: 5,
  ids: ['qf-complete-square', 'qf-inertia-index'],
  question: String.raw`二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_1+x_3)^2-4(x_2-x_3)^2$ 的规范形为（ ）

（A）$y_1^2+y_2^2$　（B）$y_1^2-y_2^2$　（C）$y_1^2+y_2^2-4y_3^2$　（D）$y_1^2+y_2^2-y_3^2$`,
  answer: '（B）',
  analysis: String.raw`（方法一）配方法
$$
\begin{aligned}
&(x_1+x_2)^2+(x_1+x_3)^2-4(x_2-x_3)^2\\
={}&x_1^2+2x_1x_2+x_2^2+x_1^2+2x_1x_3+x_3^2-4x_2^2+8x_2x_3-4x_3^2\\
={}&2x_1^2-3x_2^2-3x_3^2+2x_1x_2+2x_1x_3+8x_2x_3\\
={}&2\left[\left(x_1+\frac{1}{2}x_2+\frac{1}{2}x_3\right)^2-\frac{1}{4}x_2^2-\frac{1}{4}x_3^2-\frac{1}{2}x_2x_3\right]-3x_2^2-3x_3^2+8x_2x_3\\
={}&2\left(x_1+\frac{1}{2}x_2+\frac{1}{2}x_3\right)^2-\frac{7}{2}x_2^2-\frac{7}{2}x_3^2+7x_2x_3\\
={}&2\left(x_1+\frac{1}{2}x_2+\frac{1}{2}x_3\right)^2-\frac{7}{2}(x_2-x_3)^2.
\end{aligned}
$$
正确答案为（B）。

（方法三）特征值

二次型对应的对称矩阵 $A=\begin{pmatrix}2&1&1\\1&-3&4\\1&4&-3\end{pmatrix}$。
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&-1\\-1&\lambda+3&-4\\-1&-4&\lambda+3\end{vmatrix}=\lambda(\lambda+7)(\lambda-3)=0,
$$
得 $A$ 的特征值为 $3,-7,0$，故正惯性指数为 $1$，负惯性指数为 $1$，故选（B）。`,
  source: '《2023 数学三解析》第 3–4 页',
});

EXAMS.push({
  year: 2023, subject: '数三', number: 7, kind: '选择', score: 5,
  ids: ['vec-express-crit', 'vec-combo'],
  question: String.raw`已知向量 $\alpha_1=\begin{pmatrix}1\\2\\3\end{pmatrix},\alpha_2=\begin{pmatrix}2\\1\\1\end{pmatrix},\beta_1=\begin{pmatrix}2\\5\\9\end{pmatrix},\beta_2=\begin{pmatrix}1\\0\\1\end{pmatrix}$。若 $\gamma$ 既可由 $\alpha_1,\alpha_2$ 线性表示，也可由 $\beta_1,\beta_2$ 线性表示，则 $\gamma=$

（A）$k\begin{pmatrix}3\\3\\4\end{pmatrix},\ k\in\mathbf{R}$　（B）$k\begin{pmatrix}3\\5\\10\end{pmatrix},\ k\in\mathbf{R}$

（C）$k\begin{pmatrix}-1\\1\\2\end{pmatrix},\ k\in\mathbf{R}$　（D）$k\begin{pmatrix}1\\5\\8\end{pmatrix},\ k\in\mathbf{R}$`,
  answer: '（D）',
  analysis: String.raw`设 $\gamma=x_1\alpha_1+x_2\alpha_2=x_3\beta_1+x_4\beta_2$，即
$$
x_1\alpha_1+x_2\alpha_2-x_3\beta_1-x_4\beta_2=0.\qquad(*)
$$
下面求解该方程组：
$$
[\alpha_1,\alpha_2,-\beta_1,-\beta_2]=\begin{bmatrix}1&2&-2&-1\\2&1&-5&0\\3&1&-9&-1\end{bmatrix}\xrightarrow{\text{行初等变换}}\begin{bmatrix}1&0&0&3\\0&1&0&-1\\0&0&1&1\end{bmatrix}\quad(\text{行最简形}),
$$
方程组 $(*)$ 同解于
$$
\begin{cases}x_1=-3x_4,\\x_2=x_4,\\x_3=-x_4.\end{cases}
$$
通解为
$$
x=\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=x_4\begin{pmatrix}-3\\1\\-1\\1\end{pmatrix},\quad x_4\in\mathbf{R}.
$$
$$
\gamma=x_1\alpha_1+x_2\alpha_2=-3x_4\begin{pmatrix}1\\2\\3\end{pmatrix}+x_4\begin{pmatrix}2\\1\\1\end{pmatrix}=x_4\begin{pmatrix}-3\\-6\\-9\end{pmatrix}+x_4\begin{pmatrix}2\\1\\1\end{pmatrix}=k\begin{pmatrix}1\\5\\8\end{pmatrix},\quad k=-x_4\in\mathbf{R}.
$$
正确答案为（D）。`,
  source: '《2023 数学三解析》第 4 页',
});

EXAMS.push({
  year: 2023, subject: '数三', number: 15, kind: '填空', score: 5,
  ids: ['eq-nonhomo-crit', 'eq-cramer'],
  question: String.raw`已知线性方程组
$$
\begin{cases}
ax_1+x_3=1,\\
x_1+ax_2+x_3=0,\\
x_1+2x_2+ax_3=0,\\
ax_1+bx_2=2
\end{cases}
$$
有解，其中 $a,b$ 为常数。若
$$
\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=4,
$$
则
$$
\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$8$`,
  analysis: String.raw`已知题中方程组有解，所以 $r(A)=r(B)$，
$$
A=\begin{bmatrix}a&0&1\\1&a&1\\1&2&a\end{bmatrix},\quad B=\begin{bmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{bmatrix}.
$$
又因为
$$
\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=4\ne 0,
$$
所以 $r(A)=3$，从而 $r(B)=3$，$|B|=0$。
$$
|B|=\begin{vmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{vmatrix}\xrightarrow{\text{按 4 列展开}}-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}+2\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=8-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=0.
$$
所以
$$
\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=8.
$$`,
  source: '《2023 数学三解析》第 6–7 页',
});

EXAMS.push({
  year: 2023, subject: '数三', number: 21, kind: '解答', score: 12,
  ids: ['eig-diag-method', 'eig-diag-crit'],
  question: String.raw`（本题满分 12 分）设矩阵 $A$ 满足：对任意 $x_1,x_2,x_3$ 均有
$$
A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}x_1+x_2+x_3\\2x_1-x_2+x_3\\x_2-x_3\end{pmatrix}.
$$
（Ⅰ）求 $A$；

（Ⅱ）求可逆矩阵 $P$ 与对角矩阵 $\Lambda$，使得 $P^{-1}AP=\Lambda$。`,
  answer: String.raw`$A=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}$，$P=\begin{pmatrix}-1&0&4\\0&1&3\\2&-1&1\end{pmatrix}$，$\Lambda=\begin{pmatrix}-1&0&0\\0&-2&0\\0&0&2\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）$A=AE=A\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}$。

（Ⅱ）令
$$
|A-\lambda E|=\begin{vmatrix}1-\lambda&1&1\\2&-1-\lambda&1\\0&1&-1-\lambda\end{vmatrix}\xrightarrow{(1+\lambda)C_2+C_3}\begin{vmatrix}1-\lambda&1&2+\lambda\\2&-1-\lambda&1-(1+\lambda)^2\\0&1&0\end{vmatrix}=-(\lambda+2)(\lambda-2)(\lambda+1)=0.
$$
求得 $A$ 的特征值为 $\lambda_1=-1,\lambda_2=-2,\lambda_3=2$。

先求解方程组 $(A+E)x=0$
$$
A+E=\begin{bmatrix}2&1&1\\2&0&1\\0&1&0\end{bmatrix}\xrightarrow{\text{行变换}}\begin{bmatrix}1&0&\frac{1}{2}\\0&1&0\\0&0&0\end{bmatrix},
$$
$(A+E)x=0$ 的通解为 $x=k_1(-1,0,2)^{\mathrm{T}},k_1\in\mathbf{R}$。

取 $A$ 的属于 $\lambda_1=-1$ 的特征向量为 $\xi_1=(-1,0,2)^{\mathrm{T}}$。

再求解 $(A+2E)x=0$
$$
A+2E=\begin{bmatrix}3&1&1\\2&1&1\\0&1&1\end{bmatrix}\xrightarrow{\text{行变换}}\begin{bmatrix}1&0&0\\0&1&1\\0&0&0\end{bmatrix},
$$
$(A+2E)x=0$ 的通解为 $x=k_2(0,1,-1)^{\mathrm{T}},k_2\in\mathbf{R}$。

取 $A$ 的属于 $\lambda_2=-2$ 的特征向量为 $\xi_2=(0,1,-1)^{\mathrm{T}}$。

最后求解 $(A-2E)x=0$
$$
A-2E=\begin{bmatrix}-1&1&1\\2&-3&1\\0&1&-3\end{bmatrix}\xrightarrow{\text{行变换}}\begin{bmatrix}1&0&-4\\0&1&-3\\0&0&0\end{bmatrix},
$$
$(A-2E)x=0$ 的通解为 $x=k_3(4,3,1)^{\mathrm{T}},k_3\in\mathbf{R}$。

取 $A$ 的属于 $\lambda_3=2$ 的特征向量为 $\xi_3=(4,3,1)^{\mathrm{T}}$。

令 $P=[\xi_1,\xi_2,\xi_3]=\begin{bmatrix}-1&0&4\\0&1&3\\2&-1&1\end{bmatrix}$，则
$$
P^{-1}AP=\begin{bmatrix}-1&0&0\\0&-2&0\\0&0&2\end{bmatrix}.
$$`,
  source: '《2023 数学三解析》第 9–10 页',
});
