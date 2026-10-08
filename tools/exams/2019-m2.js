// 2019 · 数学二 · 线性代数（题面取自《2010-2019 考研数学二真题》，答案与解析取自《2019 数学二解析》）
EXAMS.push({
  year: 2019, subject: '数二', number: 7, kind: '选择', score: 4,
  ids: ['mat-adj-rank', 'eq-homo-structure'],
  question: String.raw`设 $A$ 是 4 阶矩阵，$A^*$ 是 $A$ 的伴随矩阵，若线性方程组 $Ax=0$ 的基础解系中只有 2 个向量，则 $r(A^*)=$（　）

（A）0　（B）1　（C）2　（D）3`,
  answer: '（A）',
  analysis: String.raw`因为 $Ax=0$ 的基础解系中含 2 个解向量，所以 $r(A)=2<4$，故 $r(A^*)=0$，应选（A）。`,
  source: '《2019 数学二解析》第 170 页',
});

EXAMS.push({
  year: 2019, subject: '数二', number: 8, kind: '选择', score: 4,
  ids: ['qf-canonical', 'eig-ops'],
  question: String.raw`设 $A$ 是 3 阶实对称矩阵，$E$ 是 3 阶单位矩阵。若 $A^2+A=2E$，且 $|A|=4$，则二次型 $x^{\mathrm{T}}Ax$ 的规范形为（　）

（A）$y_1^2+y_2^2+y_3^2$　（B）$y_1^2+y_2^2-y_3^2$　（C）$y_1^2-y_2^2-y_3^2$　（D）$-y_1^2-y_2^2-y_3^2$`,
  answer: '（C）',
  analysis: String.raw`令 $AX=\lambda X\ (X\ne0)$，

由 $A^2+A=2E$ 得 $(A^2+A-2E)X=(\lambda^2+\lambda-2)X=0$，

从而有 $\lambda^2+\lambda-2=0$，即 $\lambda=-2$ 或 $\lambda=1$，

因为 $|A|=4$，所以 $\lambda_1=1,\lambda_2=\lambda_3=-2$。

故二次型 $X^{\mathrm{T}}AX$ 的规范形为 $y_1^2-y_2^2-y_3^2$，应选（C）。`,
  source: '《2019 数学二解析》第 171 页',
});

EXAMS.push({
  year: 2019, subject: '数二', number: 14, kind: '填空', score: 4,
  ids: ['det-cofactor', 'det-expansion'],
  question: String.raw`已知矩阵
$$
A=\begin{pmatrix}1&-1&0&0\\-2&1&-1&1\\3&-2&2&-1\\0&0&3&4\end{pmatrix},
$$
$A_{ij}$ 表示 $|A|$ 中 $(i,j)$ 元的代数余子式，则 $A_{11}-A_{12}=\underline{\qquad}$。`,
  answer: String.raw`$-4$`,
  analysis: String.raw`$$
A_{11}-A_{12}=1\times A_{11}-1\times A_{12}+0A_{13}+0A_{14}=|A|=\begin{vmatrix}1&-1&0&0\\-2&1&-1&1\\3&-2&2&-1\\0&0&3&4\end{vmatrix}
$$
$$
=\begin{vmatrix}1&0&0&0\\-2&-1&-1&1\\3&1&2&-1\\0&0&3&4\end{vmatrix}=\begin{vmatrix}-1&-1&1\\1&2&-1\\0&3&4\end{vmatrix}=\begin{vmatrix}-1&-1&1\\0&1&0\\0&3&4\end{vmatrix}=-4.
$$`,
  source: '《2019 数学二解析》第 172 页',
});

EXAMS.push({
  year: 2019, subject: '数二', number: 22, kind: '解答', score: 11,
  ids: ['vec-equivalent', 'vec-express-crit'],
  question: String.raw`（本题满分 11 分）已知向量组 Ⅰ：
$$
\alpha_1=\begin{pmatrix}1\\1\\4\end{pmatrix},\quad\alpha_2=\begin{pmatrix}1\\0\\4\end{pmatrix},\quad\alpha_3=\begin{pmatrix}1\\2\\a^2+3\end{pmatrix}
$$
与 Ⅱ：
$$
\beta_1=\begin{pmatrix}1\\1\\a+3\end{pmatrix},\quad\beta_2=\begin{pmatrix}0\\2\\1-a\end{pmatrix},\quad\beta_3=\begin{pmatrix}1\\3\\a^2+3\end{pmatrix},
$$
若向量组 Ⅰ 与 Ⅱ 等价，求 $a$ 的取值，并将 $\beta_3$ 用 $\alpha_1,\alpha_2,\alpha_3$ 线性表示。`,
  answer: String.raw`$a\in R$ 且 $a\ne-1$。当 $a=1$ 时，$\beta_3=(-2k+3)\alpha_1+(k-2)\alpha_2+k\alpha_3$（$k$ 为任意常数）；当 $a\ne\pm1$ 时，$\beta_3=\alpha_1-\alpha_2+\alpha_3$。`,
  analysis: String.raw`$$
(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&1&1\\1&0&2\\4&4&a^2+3\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&-1&1\\0&0&a^2-1\end{pmatrix},
$$
当 $a=-1$ 时，向量组 $\alpha_1,\alpha_2,\alpha_3$ 的秩为 2，
$$
(\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&0&1\\1&2&3\\2&2&4\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $\beta_1,\beta_2,\beta_3$ 的秩为 2，
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&1&1&1&0&1\\1&0&2&1&2&3\\4&4&4&2&2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1&0&1\\0&-1&1&0&2&2\\0&0&0&-2&2&0\end{pmatrix},
$$
因为 $r(\alpha_1,\alpha_2,\alpha_3)\ne r(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)$，所以两个向量组不等价；

当 $a=1$ 时，
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&1&1&1&0&1\\1&0&2&1&2&3\\4&4&4&4&0&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1&0&1\\0&-1&1&0&2&2\\0&0&0&0&0&0\end{pmatrix},
$$
因为 $r(\alpha_1,\alpha_2,\alpha_3)=r(\beta_1,\beta_2,\beta_3)=r(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=2$，所以两个向量组等价。

令 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta_3$，

再由
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_3)=\begin{pmatrix}1&1&1&1\\1&0&2&3\\4&4&4&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&-1&1&2\\0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&2&3\\0&1&-1&-2\\0&0&0&0\end{pmatrix}
$$
得方程组 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta_3$ 的通解为
$$
X=k\begin{pmatrix}-2\\1\\1\end{pmatrix}+\begin{pmatrix}3\\-2\\0\end{pmatrix}=\begin{pmatrix}-2k+3\\k-2\\k\end{pmatrix}\quad(k\ \text{为任意常数}),
$$
故 $\beta_3=(-2k+3)\alpha_1+(k-2)\alpha_2+k\alpha_3$（$k$ 为任意常数）。

当 $a\ne\pm1$ 时，向量组 $\alpha_1,\alpha_2,\alpha_3$ 的秩为 3，
$$
(\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&0&1\\1&2&3\\a+3&1-a&a^2+3\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&1-a&a^2-a\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&a^2-1\end{pmatrix}
$$
得向量组 $\beta_1,\beta_2,\beta_3$ 的秩为 3，

再由
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&1&1&1&0&1\\1&0&2&1&2&3\\4&4&a^2+3&a+3&1-a&a^2+3\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&1&1&1&0&1\\0&-1&1&0&2&2\\0&0&a^2-1&a-1&1-a&a^2-1\end{pmatrix}
$$
得 $r(\alpha_1,\alpha_2,\alpha_3)=r(\beta_1,\beta_2,\beta_3)=r(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=3$，故两个向量组等价。

令 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta_3$，

由
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_3)=\begin{pmatrix}1&1&1&1\\1&0&2&3\\4&4&a^2+3&a^2+3\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&-1&1&2\\0&0&a^2-1&a^2-1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&1&1&1\\0&-1&1&2\\0&0&1&1\end{pmatrix}\to\begin{pmatrix}1&0&0&1\\0&1&0&-1\\0&0&1&1\end{pmatrix}
$$
得 $\beta_3=\alpha_1-\alpha_2+\alpha_3$。`,
  source: '《2019 数学二解析》第 175–176 页',
});

EXAMS.push({
  year: 2019, subject: '数二', number: 23, kind: '解答', score: 11,
  ids: ['eig-similar-prop', 'eig-diag-method'],
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

（Ⅱ）求可逆矩阵 $P$，使得 $P^{-1}AP=B$。`,
  answer: String.raw`（Ⅰ）$x=3,y=-2$；（Ⅱ）
$$
P=\begin{pmatrix}-1&-1&-1\\2&1&2\\0&0&4\end{pmatrix}
$$`,
  analysis: String.raw`（Ⅰ）因为 $A\sim B$，所以 $\mathrm{tr}(A)=\mathrm{tr}(B)$，即 $x-4=y+1$，或 $y=x-5$，

再由 $|A|=|B|$ 得 $-2(-2x+4)=-2y$，即 $y=-2x+4$，

解得 $x=3,y=-2$。

（Ⅱ）
$$
A=\begin{pmatrix}-2&-2&1\\2&3&-2\\0&0&-2\end{pmatrix},\quad B=\begin{pmatrix}2&1&0\\0&-1&0\\0&0&-2\end{pmatrix},
$$
显然矩阵 $A,B$ 的特征值为 $\lambda_1=-2,\lambda_2=-1,\lambda_3=2$，

由
$$
2E+A\to\begin{pmatrix}0&-2&1\\2&1&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&\frac14\\0&1&-\frac12\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda_1=-2$ 的线性无关的特征向量为
$$
\alpha_1=\begin{pmatrix}-1\\2\\4\end{pmatrix};
$$
由
$$
E+A\to\begin{pmatrix}-1&-2&1\\0&0&1\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda_2=-1$ 的线性无关的特征向量为
$$
\alpha_2=\begin{pmatrix}-2\\1\\0\end{pmatrix};
$$
由
$$
2E-A\to\begin{pmatrix}2&1&-2\\0&0&1\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&\frac12&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $A$ 的属于特征值 $\lambda_3=2$ 的线性无关的特征向量为
$$
\alpha_3=\begin{pmatrix}-1\\2\\0\end{pmatrix},
$$
令 $P_1=\begin{pmatrix}-1&-2&-1\\2&1&2\\4&0&0\end{pmatrix}$，则 $P_1^{-1}AP_1=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&2\end{pmatrix}$；

由
$$
2E+B=\begin{pmatrix}4&1&0\\0&1&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}
$$
得 $B$ 的属于特征值 $\lambda_1=-2$ 的线性无关的特征向量为 $\beta_1=\begin{pmatrix}0\\0\\1\end{pmatrix}$；

由
$$
E+B=\begin{pmatrix}3&1&0\\0&0&0\\0&0&-1\end{pmatrix}\to\begin{pmatrix}1&\frac13&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $B$ 的属于特征值 $\lambda_2=-1$ 的线性无关的特征向量为
$$
\beta_2=\begin{pmatrix}-1\\3\\0\end{pmatrix};
$$
由
$$
2E-B=\begin{pmatrix}0&-1&0\\0&3&0\\0&0&4\end{pmatrix}\to\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得 $B$ 的属于特征值 $\lambda_3=2$ 的线性无关的特征向量为
$$
\beta_3=\begin{pmatrix}1\\0\\0\end{pmatrix}.
$$
令 $P_2=\begin{pmatrix}0&-1&1\\0&3&0\\1&0&0\end{pmatrix}$，则 $P_2^{-1}BP_2=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&2\end{pmatrix}$，

由 $P_1^{-1}AP_1=P_2^{-1}BP_2$ 得 $(P_1P_2^{-1})^{-1}A(P_1P_2^{-1})=B$，

故
$$
P=P_1P_2^{-1}=\begin{pmatrix}-1&-1&-1\\2&1&2\\0&0&4\end{pmatrix}.
$$`,
  source: '《2019 数学二解析》第 176–177 页',
});
