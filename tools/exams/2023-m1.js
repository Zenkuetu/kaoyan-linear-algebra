// 2023 · 数学一 · 线性代数（题面取自《2023年考研数学（一）真题》，答案与解析取自《2023 数学一解析》）
EXAMS.push({
  year: 2023, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['mat-rank-ineq', 'mat-rank-invariance'],
  question: String.raw`已知 $n$ 阶矩阵 $A,B,C$ 满足 $ABC=O$，$E$ 为 $n$ 阶单位矩阵。记矩阵 $\begin{pmatrix}O&A\\BC&E\end{pmatrix}$，$\begin{pmatrix}AB&C\\O&E\end{pmatrix}$，$\begin{pmatrix}E&AB\\AB&O\end{pmatrix}$ 的秩分别为 $r_1,r_2,r_3$，则（　）

（A）$r_1\le r_2\le r_3$　（B）$r_1\le r_3\le r_2$
（C）$r_3\le r_1\le r_2$　（D）$r_2\le r_1\le r_3$`,
  answer: '（B）',
  analysis: String.raw`（方法二）广义初等变换：
$$
\begin{pmatrix}O&A\\BC&E\end{pmatrix}\to\begin{pmatrix}-ABC&O\\BC&E\end{pmatrix}\to\begin{pmatrix}O&O\\BC&E\end{pmatrix},\qquad r_1=n,
$$
$$
\begin{pmatrix}AB&C\\O&E\end{pmatrix}\to\begin{pmatrix}AB&O\\O&E\end{pmatrix},\qquad r_2=r(AB)+r(E)=n+r(AB),
$$
$$
\begin{pmatrix}E&AB\\AB&O\end{pmatrix}\to\begin{pmatrix}E&AB\\O&-(AB)^2\end{pmatrix}\to\begin{pmatrix}E&O\\O&-(AB)^2\end{pmatrix},\qquad r_3=r((AB)^2)+r(E)=n+r((AB)^2),
$$
又 $r((AB)^2)\le r(AB)$，
$$
r_3=n+r((AB)^2)\le n+r(AB)=r_2,
$$
故 $r_1\le r_3\le r_2$，正确答案为（B）。`,
  source: '《2023 数学一解析》第 3 页',
});

EXAMS.push({
  year: 2023, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['eig-diag-crit', 'eig-mult'],
  question: String.raw`下列矩阵中不能相似于对角矩阵的是（　）

（A）$\begin{pmatrix}1&1&a\\0&2&2\\0&0&3\end{pmatrix}$　（B）$\begin{pmatrix}1&1&a\\1&2&0\\a&0&3\end{pmatrix}$
（C）$\begin{pmatrix}1&1&a\\0&2&0\\0&0&2\end{pmatrix}$　（D）$\begin{pmatrix}1&1&a\\0&2&2\\0&0&2\end{pmatrix}$`,
  answer: '（D）',
  analysis: String.raw`选项 A 的矩阵有特征值 $1,2,3$，所以必相似于对角形。

选项 B 的矩阵是对称矩阵，必相似于对角形。

选项 C 的矩阵有二重特征值 $2$。
$$
\begin{pmatrix}1&1&a\\0&2&0\\0&0&2\end{pmatrix}-2E=\begin{pmatrix}-1&1&a\\0&0&0\\0&0&0\end{pmatrix},
$$
秩为 $1$，故可以相似于对角形。

选项 D 的矩阵有 2 重特征值 $2$。
$$
\begin{pmatrix}1&1&a\\0&2&2\\0&0&2\end{pmatrix}-2E=\begin{pmatrix}-1&1&a\\0&0&2\\0&0&0\end{pmatrix},
$$
秩为 $2$，不能相似于对角形。

正确答案为（D）。`,
  source: '《2023 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2023, subject: '数一', number: 7, kind: '选择', score: 5,
  ids: ['vec-express-crit', 'vec-combo'],
  question: String.raw`已知向量 $\alpha_1=\begin{pmatrix}1\\2\\3\end{pmatrix},\alpha_2=\begin{pmatrix}2\\1\\1\end{pmatrix},\beta_1=\begin{pmatrix}2\\5\\9\end{pmatrix},\beta_2=\begin{pmatrix}1\\0\\1\end{pmatrix}$。若 $\gamma$ 既可由 $\alpha_1,\alpha_2$ 线性表示，也可由 $\beta_1,\beta_2$ 线性表示，则 $\gamma=$（　）

（A）$k\begin{pmatrix}3\\3\\4\end{pmatrix},k\in\mathbf{R}$　（B）$k\begin{pmatrix}3\\5\\10\end{pmatrix},k\in\mathbf{R}$
（C）$k\begin{pmatrix}-1\\1\\2\end{pmatrix},k\in\mathbf{R}$　（D）$k\begin{pmatrix}1\\5\\8\end{pmatrix},k\in\mathbf{R}$`,
  answer: '（D）',
  analysis: String.raw`设 $\gamma=x_1\alpha_1+x_2\alpha_2=x_3\beta_1+x_4\beta_2$，即
$$
x_1\alpha_1+x_2\alpha_2-x_3\beta_1-x_4\beta_2=0.\qquad(*)
$$
下面求解该方程组：
$$
[\alpha_1,\alpha_2,-\beta_1,-\beta_2]=\begin{pmatrix}1&2&-2&-1\\2&1&-5&0\\3&1&-9&-1\end{pmatrix}\xrightarrow{\text{行初等变换}}\begin{pmatrix}1&0&0&3\\0&1&0&-1\\0&0&1&1\end{pmatrix}\text{（行最简形）},
$$
方程组 $(*)$ 同解于
$$
\begin{cases}x_1=-3x_4,\\x_2=x_4,\\x_3=-x_4.\end{cases}
$$
通解为 $x=\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=x_4\begin{pmatrix}-3\\1\\-1\\1\end{pmatrix},x_4\in\mathbf{R}$。
$$
\gamma=x_1\alpha_1+x_2\alpha_2=-3x_4\begin{pmatrix}1\\2\\3\end{pmatrix}+x_4\begin{pmatrix}2\\1\\1\end{pmatrix}=x_4\begin{pmatrix}-3\\-6\\-9\end{pmatrix}+x_4\begin{pmatrix}2\\1\\1\end{pmatrix}=k\begin{pmatrix}1\\5\\8\end{pmatrix},\quad k=-x_4\in\mathbf{R}.
$$
正确答案为（D）。`,
  source: '《2023 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2023, subject: '数一', number: 15, kind: '填空', score: 5,
  ids: ['vec-inner'],
  question: String.raw`已知向量 $\alpha_1=\begin{pmatrix}1\\0\\1\\1\end{pmatrix},\alpha_2=\begin{pmatrix}-1\\-1\\0\\1\end{pmatrix},\alpha_3=\begin{pmatrix}0\\1\\-1\\1\end{pmatrix},\beta=\begin{pmatrix}1\\1\\1\\-1\end{pmatrix}$，$\gamma=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3$。若 $\gamma^{\mathrm{T}}\alpha_i=\beta^{\mathrm{T}}\alpha_i\ (i=1,2,3)$，则 $k_1^2+k_2^2+k_3^2=\underline{\qquad}$。`,
  answer: String.raw`$\dfrac{11}{9}$`,
  analysis: String.raw`$\gamma=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3$，
$$
\gamma^{\mathrm{T}}\alpha_1=k_1(\alpha_1,\alpha_1)+k_2(\alpha_2,\alpha_1)+k_3(\alpha_3,\alpha_1)=3k_1=(\beta,\alpha_1)=1,\quad k_1=\dfrac{1}{3},
$$
$$
\gamma^{\mathrm{T}}\alpha_2=k_1(\alpha_1,\alpha_2)+k_2(\alpha_2,\alpha_2)+k_3(\alpha_3,\alpha_2)=3k_2=(\beta,\alpha_2)=-3,\quad k_2=-1,
$$
$$
\gamma^{\mathrm{T}}\alpha_3=k_1(\alpha_1,\alpha_3)+k_2(\alpha_2,\alpha_3)+k_3(\alpha_3,\alpha_3)=3k_3=(\beta,\alpha_3)=-1,\quad k_3=-\dfrac{1}{3},
$$
$$
k_1^2+k_2^2+k_3^2=\dfrac{1}{9}+1+\dfrac{1}{9}=\dfrac{11}{9}.
$$`,
  source: '《2023 数学一解析》第 6 页',
});

EXAMS.push({
  year: 2023, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['qf-congruent', 'qf-canonical', 'eig-similar-prop'],
  question: String.raw`（本题满分 12 分）

已知二次型 $f(x_1,x_2,x_3)=x_1^2+2x_2^2+2x_3^2+2x_1x_2-2x_1x_3$，$g(y_1,y_2,y_3)=y_1^2+y_2^2+y_3^2+2y_2y_3$。

（Ⅰ）求可逆变换 $x=Py$ 将 $f(x_1,x_2,x_3)$ 化为 $g(y_1,y_2,y_3)$；

（Ⅱ）是否存在正交变换 $x=Qy$ 将 $f(x_1,x_2,x_3)$ 化为 $g(y_1,y_2,y_3)$？`,
  answer: String.raw`（Ⅰ）$P=\begin{pmatrix}1&-1&1\\0&1&0\\0&0&1\end{pmatrix}$；（Ⅱ）不存在`,
  analysis: String.raw`记 $f=x^{\mathrm{T}}Ax,x=(x_1,x_2,x_3)^{\mathrm{T}},A=\begin{pmatrix}1&1&-1\\1&2&0\\-1&0&2\end{pmatrix}$，$g=y^{\mathrm{T}}By,y=(y_1,y_2,y_3)^{\mathrm{T}},B=\begin{pmatrix}1&0&0\\0&1&1\\0&1&1\end{pmatrix}$。

（Ⅰ）先用初等变换化二次型为规范形：
$$
f=x_1^2+2x_2^2+2x_3^2+2x_1x_2-2x_1x_3
$$
$$
=(x_1+x_2-x_3)^2+x_2^2+x_3^2+2x_2x_3
$$
$$
=(x_1+x_2-x_3)^2+(x_2+x_3)^2
$$
$$
=z_1^2+z_2^2,
$$
其中 $\begin{cases}z_1=x_1+x_2-x_3,\\z_2=x_2+x_3,\\z_3=x_3,\end{cases}$ 即 $\begin{cases}x_1=z_1-z_2+2z_3,\\x_2=z_2-x_3=z_2-z_3,\\x_3=z_3.\end{cases}$

$g=y_1^2+y_2^2+y_3^2+2y_2y_3=y_1^2+(y_2+y_3)^2=z_1^2+z_2^2$，

其中 $\begin{cases}z_1=y_1,\\z_2=y_2+y_3,\\z_3=y_3.\end{cases}$

总之：
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1&-1&2\\0&1&-1\\0&0&1\end{pmatrix}\begin{pmatrix}z_1\\z_2\\z_3\end{pmatrix}=\begin{pmatrix}1&-1&2\\0&1&-1\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}
$$
$$
=\begin{pmatrix}1&-1&1\\0&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix},
$$
令 $P=\begin{pmatrix}1&-1&1\\0&1&0\\0&0&1\end{pmatrix}$，在可逆变换 $x=Py$ 下，$f(x_1,x_2,x_3)$ 化为 $g(y_1,y_2,y_3)$。

（Ⅱ）不存在正交矩阵 $Q$，使得在正交变换 $x=Qy$ 下，$f(x_1,x_2,x_3)$ 化为 $g(y_1,y_2,y_3)$。

原因如下：若存在正交变换 $x=Qy$，使 $f=x^{\mathrm{T}}Ax=(Qy)^{\mathrm{T}}A(Qy)=y^{\mathrm{T}}Q^{\mathrm{T}}AQy=y^{\mathrm{T}}By$，则 $B=Q^{\mathrm{T}}AQ$ 与 $A$ 相似，从而特征值相同。令
$$
|B-\lambda E|=\begin{vmatrix}1-\lambda&0&0\\0&1-\lambda&1\\0&1&1-\lambda\end{vmatrix}=(1-\lambda)(2-\lambda)(-\lambda)=0,
$$
求得 $B$ 的 3 个特征值为 $\lambda_1=0,\lambda_2=1,\lambda_3=2$。而
$$
|A-E|=\begin{vmatrix}0&1&-1\\1&1&0\\-1&0&1\end{vmatrix}\ne 0,
$$
这说明 $\lambda_2=1$ 不是 $A$ 的特征值，所以 $A,B$ 不相似。`,
  source: '《2023 数学一解析》第 9–10 页',
});
