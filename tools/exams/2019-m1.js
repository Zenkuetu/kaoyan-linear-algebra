// 2019 · 数学一 · 线性代数（题面取自《2019年考研数学（一）真题》，答案与解析取自《2019数学一解析》）
EXAMS.push({
  year: 2019, subject: '数一', number: 5, kind: '选择', score: 4,
  ids: ['qf-inertia-index', 'eig-ops'],
  question: String.raw`设 $A$ 是 3 阶实对称矩阵，$E$ 是 3 阶单位矩阵。若 $A^2+A=2E$，且 $|A|=4$，则二次型 $x^{\mathrm{T}}Ax$ 的规范形为（　）

（A）$y_1^2+y_2^2+y_3^2$　（B）$y_1^2+y_2^2-y_3^2$　（C）$y_1^2-y_2^2-y_3^2$　（D）$-y_1^2-y_2^2-y_3^2$`,
  answer: '（C）',
  analysis: String.raw`令 $AX=\lambda X\ (X\ne 0)$，

由 $A^2+A=2E$ 得 $(A^2+A-2E)X=(\lambda^2+\lambda-2)X=0$，

从而有 $\lambda^2+\lambda-2=0$，即 $\lambda=-2$ 或 $\lambda=1$，

因为 $|A|=4$，所以 $\lambda_1=1,\lambda_2=\lambda_3=-2$，

故二次型 $X^{\mathrm{T}}AX$ 的规范形为 $y_1^2-y_2^2-y_3^2$，应选（C）。`,
  source: '《2019 数学一解析》第 1 页',
});

EXAMS.push({
  year: 2019, subject: '数一', number: 6, kind: '选择', score: 4,
  ids: ['eq-rank-relation', 'eq-nonhomo-crit'],
  question: String.raw`有 3 张平面两两相交，交线相互平行，它们的方程
$$
a_{i1}x+a_{i2}y+a_{i3}z=d_i\quad (i=1,2,3)
$$
组成的线性方程组的系数矩阵和增广矩阵分别记为 $A,\overline{A}$，则（　）

（A）$r(A)=2,\ r(\overline{A})=3$　（B）$r(A)=2,\ r(\overline{A})=2$　（C）$r(A)=1,\ r(\overline{A})=2$　（D）$r(A)=1,\ r(\overline{A})=1$`,
  answer: '（A）',
  analysis: String.raw`$$
A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix},\quad \overline{A}=\begin{pmatrix}a_{11}&a_{12}&a_{13}&d_1\\a_{21}&a_{22}&a_{23}&d_2\\a_{31}&a_{32}&a_{33}&d_3\end{pmatrix},
$$
因为任两个平面不平行，所以 $r(A)\ge 2$。

又因为三个平面没有公共的交点，所以 $r(A)<r(\overline{A})$，

再由 $r(A)\le 3$ 得 $r(A)=2,\ r(\overline{A})=3$，应选（A）。`,
  source: '《2019 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2019, subject: '数一', number: 13, kind: '填空', score: 4,
  ids: ['eq-homo-general', 'eq-homo-structure'],
  question: String.raw`设 $A=(\alpha_1,\alpha_2,\alpha_3)$ 为 3 阶矩阵。若 $\alpha_1,\alpha_2$ 线性无关，且 $\alpha_3=-\alpha_1+2\alpha_2$，则线性方程组 $Ax=0$ 的通解为 $\underline{\qquad}$。`,
  answer: String.raw`$x=k\begin{pmatrix}1\\-2\\1\end{pmatrix}$（$k$ 为任意常数）`,
  analysis: String.raw`因为 $\alpha_1,\alpha_2$ 线性无关，且 $\alpha_3=-\alpha_1+2\alpha_2$，所以 $r(A)=2$，于是方程组 $AX=0$ 的基础解系含一个线性无关的解向量，由 $\alpha_3=-\alpha_1+2\alpha_2$ 得
$$
\alpha_1-2\alpha_2+\alpha_3=0,
$$
即 $\begin{pmatrix}1\\-2\\1\end{pmatrix}$ 为 $AX=0$ 的一个非零解，故 $AX=0$ 的通解为
$$
X=k\begin{pmatrix}1\\-2\\1\end{pmatrix}\ (k\ \text{为任意常数}).
$$`,
  source: '《2019 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2019, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['sp-transition', 'sp-dim-basis'],
  question: String.raw`（本题满分 11 分）设向量组 $\alpha_1=(1,2,1)^{\mathrm{T}},\alpha_2=(1,3,2)^{\mathrm{T}},\alpha_3=(1,a,3)^{\mathrm{T}}$ 为 $\mathbf{R}^3$ 的一个基，$\beta=(1,1,1)^{\mathrm{T}}$ 在这个基下的坐标为 $(b,c,1)^{\mathrm{T}}$。

（Ⅰ）求 $a,b,c$；

（Ⅱ）证明 $\alpha_2,\alpha_3,\beta$ 为 $\mathbf{R}^3$ 的一个基，并求 $\alpha_2,\alpha_3,\beta$ 到 $\alpha_1,\alpha_2,\alpha_3$ 的过渡矩阵。`,
  answer: String.raw`（Ⅰ）$a=3,\ b=2,\ c=-2$；
（Ⅱ）见证明，$Q=(\alpha_2,\alpha_3,\beta)^{-1}(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&1&0\\-\frac{1}{2}&0&1\\\frac{1}{2}&0&0\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）由题意得 $b\alpha_1+c\alpha_2+\alpha_3=\beta$，即
$$
\begin{cases}
b+c+1=1,\\
2b+3c+a=1,\\
b+2c+3=1,
\end{cases}
$$
解得 $a=3,b=2,c=-2$。

（Ⅱ）因为
$$
|\alpha_2,\alpha_3,\beta|=\begin{vmatrix}1&1&1\\3&3&1\\2&3&1\end{vmatrix}=\begin{vmatrix}1&1&1\\0&0&-2\\0&1&-1\end{vmatrix}=2\ne 0,
$$
所以 $\alpha_2,\alpha_3,\beta$ 线性无关，故 $\alpha_2,\alpha_3,\beta$ 为 $\mathbf{R}^3$ 的一个基。

设由 $\alpha_2,\alpha_3,\beta$ 到 $\alpha_1,\alpha_2,\alpha_3$ 的过渡矩阵为 $Q$，即 $(\alpha_1,\alpha_2,\alpha_3)=(\alpha_2,\alpha_3,\beta)Q$，于是
$$
Q=(\alpha_2,\alpha_3,\beta)^{-1}(\alpha_1,\alpha_2,\alpha_3),
$$
由
$$
\left(\begin{array}{ccc|ccc}1&1&1&1&0&0\\3&3&1&0&1&0\\2&3&1&0&0&1\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&1&1&1&0&0\\0&0&-2&-3&1&0\\0&1&-1&-2&0&1\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&1&1&1&0&0\\0&1&-1&-2&0&1\\0&0&1&\frac{3}{2}&-\frac{1}{2}&0\end{array}\right)
$$
$$
\to\left(\begin{array}{ccc|ccc}1&1&0&-\frac{1}{2}&\frac{1}{2}&0\\0&1&0&-\frac{1}{2}&-\frac{1}{2}&1\\0&0&1&\frac{3}{2}&-\frac{1}{2}&0\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&0&0&0&1&-1\\0&1&0&-\frac{1}{2}&-\frac{1}{2}&1\\0&0&1&\frac{3}{2}&-\frac{1}{2}&0\end{array}\right)
$$
得
$$
(\alpha_2,\alpha_3,\beta)^{-1}=\begin{pmatrix}0&1&-1\\-\frac{1}{2}&-\frac{1}{2}&1\\\frac{3}{2}&-\frac{1}{2}&0\end{pmatrix},
$$
则
$$
Q=(\alpha_2,\alpha_3,\beta)^{-1}(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}0&1&-1\\-\frac{1}{2}&-\frac{1}{2}&1\\\frac{3}{2}&-\frac{1}{2}&0\end{pmatrix}\begin{pmatrix}1&1&1\\2&3&3\\1&2&3\end{pmatrix}=\begin{pmatrix}1&1&0\\-\frac{1}{2}&0&1\\\frac{1}{2}&0&0\end{pmatrix}.
$$`,
  source: '《2019 数学一解析》第 5–6 页',
});

EXAMS.push({
  year: 2019, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['eig-similar-crit', 'eig-diag-method'],
  question: String.raw`（本题满分 11 分）已知矩阵
$$
A=\begin{pmatrix}-2&-2&1\\2&x&-2\\0&0&-2\end{pmatrix}
$$
与
$$
B=\begin{pmatrix}2&1&0\\0&-1&0\\0&0&y\end{pmatrix}
$$
相似。

（Ⅰ）求 $x,y$；

（Ⅱ）求可逆矩阵 $P$ 使得 $P^{-1}AP=B$。`,
  answer: String.raw`（Ⅰ）$x=3,\ y=-2$；（Ⅱ）$P=\begin{pmatrix}-1&-1&-1\\2&1&2\\0&0&4\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）因为 $A\sim B$，所以 $\mathrm{tr}\,A=\mathrm{tr}\,B$，即 $x-4=y+1$，或 $y=x-5$，

再由 $|A|=|B|$ 得 $-2(-2x+4)=-2y$，即 $y=-2x+4$，

解得 $x=3,y=-2$。

（Ⅱ）
$$
A=\begin{pmatrix}-2&-2&1\\2&3&-2\\0&0&-2\end{pmatrix},\quad B=\begin{pmatrix}2&1&0\\0&-1&0\\0&0&-2\end{pmatrix},
$$
显然矩阵 $A,B$ 的特征值为 $\lambda_1=-2,\lambda_2=-1,\lambda_3=2$，

由
$$
2E+A\to\begin{pmatrix}0&-2&1\\2&1&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&\frac{1}{4}\\0&1&-\frac{1}{2}\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda_1=-2$ 的特征向量为 $\alpha_1=\begin{pmatrix}-1\\2\\4\end{pmatrix}$；

由
$$
E+A\to\begin{pmatrix}1&2&-1\\0&0&1\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda_2=-1$ 的特征向量为 $\alpha_2=\begin{pmatrix}-2\\1\\0\end{pmatrix}$；

由
$$
2E-A\to\begin{pmatrix}2&1&-2\\0&0&1\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&\frac{1}{2}&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda_3=2$ 的特征向量为 $\alpha_3=\begin{pmatrix}-1\\2\\0\end{pmatrix}$，

令
$$
P_1=\begin{pmatrix}-1&-2&-1\\2&1&2\\4&0&0\end{pmatrix},
$$
则
$$
P_1^{-1}AP_1=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&2\end{pmatrix};
$$
由
$$
2E+B=\begin{pmatrix}4&1&0\\0&1&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}
$$
得 $B$ 的属于特征值 $\lambda_1=-2$ 的特征向量为 $\beta_1=\begin{pmatrix}0\\0\\1\end{pmatrix}$；

由
$$
E+B=\begin{pmatrix}3&1&0\\0&0&0\\0&0&-1\end{pmatrix}\to\begin{pmatrix}1&\frac{1}{3}&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $B$ 的属于特征值 $\lambda_2=-1$ 的特征向量为 $\beta_2=\begin{pmatrix}-1\\3\\0\end{pmatrix}$；

由
$$
2E-B=\begin{pmatrix}0&-1&0\\0&3&0\\0&0&4\end{pmatrix}\to\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $B$ 的属于特征值 $\lambda_3=2$ 的特征向量为 $\beta_3=\begin{pmatrix}1\\0\\0\end{pmatrix}$，

令
$$
P_2=\begin{pmatrix}0&-1&1\\0&3&0\\1&0&0\end{pmatrix},
$$
则
$$
P_2^{-1}BP_2=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&2\end{pmatrix},
$$
由 $P_1^{-1}AP_1=P_2^{-1}BP_2$ 得 $(P_1P_2^{-1})^{-1}A(P_1P_2^{-1})=B$，故
$$
P=P_1P_2^{-1}=\begin{pmatrix}-1&-1&-1\\2&1&2\\0&0&4\end{pmatrix}.
$$`,
  source: '《2019 数学一解析》第 6–7 页',
});
