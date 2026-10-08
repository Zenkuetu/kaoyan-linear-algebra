// 1996 · 数学一 · 线性代数（题面取自《1996年考研数学（一）真题.pdf》；答案与解析取自《1996数学一解析.pdf》）
EXAMS.push({
  year: 1996, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["mat-rank-ineq","mat-rank"],
  question: String.raw`设 $A$ 是 $4\times 3$ 矩阵，且 $A$ 的秩 $r(A)=2$，而
$$
B=\begin{pmatrix}1&0&2\\0&2&0\\-1&0&3\end{pmatrix},
$$
则 $r(AB)=$______.`,
  answer: String.raw`$2$.`,
  analysis: String.raw`因为
$$
|B|=\begin{vmatrix}1&0&2\\0&2&0\\-1&0&3\end{vmatrix}=10\ne 0,
$$
所以矩阵 $B$ 可逆，由矩阵秩的性质得 $r(AB)=r(A)=2$.`,
  source: '《1996 数学一解析.pdf》PDF 第 1 页',
});

EXAMS.push({
  year: 1996, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["det-block","det-expansion"],
  question: String.raw`4 阶行列式
$$
\begin{vmatrix}a_1&0&0&b_1\\0&a_2&b_2&0\\0&b_3&a_3&0\\b_4&0&0&a_4\end{vmatrix}
$$
的值等于（　　）.

（A）$a_1a_2a_3a_4-b_1b_2b_3b_4$
（B）$a_1a_2a_3a_4+b_1b_2b_3b_4$
（C）$(a_1a_2-b_1b_2)(a_3a_4-b_3b_4)$
（D）$(a_2a_3-b_2b_3)(a_1a_4-b_1b_4)$`,
  answer: String.raw`（D）.`,
  analysis: String.raw`将行列式按第一行展开，得
$$
\begin{vmatrix}a_1&0&0&b_1\\0&a_2&b_2&0\\0&b_3&a_3&0\\b_4&0&0&a_4\end{vmatrix}=a_1A_{11}+b_1A_{14}=a_1M_{11}-b_1M_{14}
$$
$$
=a_1\begin{vmatrix}a_2&b_2&0\\b_3&a_3&0\\0&0&a_4\end{vmatrix}-b_1\begin{vmatrix}0&a_2&b_2\\0&b_3&a_3\\b_4&0&0\end{vmatrix}
$$
$$
=a_1a_4(a_2a_3-b_2b_3)-b_1b_4(a_2a_3-b_2b_3)=(a_1a_4-b_1b_4)(a_2a_3-b_2b_3),
$$
应选（D）.`,
  source: '《1996 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1996, subject: '数一', number: 301, kind: '解答', score: 8, label: '第九大题',
  ids: ["qf-def","eig-poly","qf-canonical"],
  question: String.raw`已知二次型
$$
f(x_1,x_2,x_3)=5x_1^2+5x_2^2+cx_3^2-2x_1x_2+6x_1x_3-6x_2x_3
$$
的秩为 2.

（1）求参数 $c$ 的值及此二次型对应矩阵的特征值；
（2）指出方程 $f(x_1,x_2,x_3)=1$ 表示何种二次曲面.`,
  answer: String.raw`（1）$c=3$，特征值为 $\lambda_1=0,\lambda_2=4,\lambda_3=9$.
（2）方程 $f(x_1,x_2,x_3)=1$ 表示椭圆柱面.`,
  analysis: String.raw`（1）令
$$
A=\begin{pmatrix}5&-1&3\\-1&5&-3\\3&-3&c\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$
则 $f(x_1,x_2,x_3)=X^{\mathrm{T}}AX$. 因为二次型的秩为 2，所以 $|A|=0$，由
$$
|A|=\begin{vmatrix}5&-1&3\\-1&5&-3\\3&-3&c\end{vmatrix}=24c-72=0,
$$
得 $c=3$. 容易验证，此时 $A$ 的秩是 2. $A$ 的特征多项式为
$$
|\lambda E-A|=\begin{vmatrix}\lambda-5&1&-3\\1&\lambda-5&3\\-3&3&\lambda-3\end{vmatrix}=\lambda(\lambda-4)(\lambda-9),
$$
故所求特征值为 $\lambda_1=0,\lambda_2=4,\lambda_3=9$.

（2）二次型 $f$ 的标准形为
$$
f=4y_2^2+9y_3^2,
$$
由此可知 $f(x_1,x_2,x_3)=1$ 所表示的曲面是椭圆柱面.`,
  source: '《1996 数学一解析.pdf》PDF 第 4–5 页',
});

EXAMS.push({
  year: 1996, subject: '数一', number: 401, kind: '解答', score: 6, label: '第八大题（证明题）',
  ids: ["mat-mult","mat-invertible-crit"],
  question: String.raw`设 $A=E-\xi\xi^{\mathrm{T}}$，其中 $E$ 是 $n$ 阶单位矩阵，$\xi$ 是 $n$ 维非零列向量，$\xi^{\mathrm{T}}$ 是 $\xi$ 的转置，证明：

（1）$A^2=A$ 的充分必要条件是 $\xi^{\mathrm{T}}\xi=1$；
（2）当 $\xi^{\mathrm{T}}\xi=1$ 时，$A$ 是不可逆矩阵.`,
  answer: String.raw`证明见解析.`,
  analysis: String.raw`（1）令 $\xi^{\mathrm{T}}\xi=k$，
$$
A^2=(E-\xi\xi^{\mathrm{T}})(E-\xi\xi^{\mathrm{T}})=E+(k-2)\xi\xi^{\mathrm{T}},
$$
则 $A^2=A$ 的充分必要条件是 $k=1$，即 $\xi^{\mathrm{T}}\xi=1$.

（2）**方法一** 当 $\xi^{\mathrm{T}}\xi=1$ 时，由 $A^2=A$ 得 $A(E-A)=O$，从而 $r(A)+r(E-A)\le n$；再由 $r(A)+r(E-A)\ge r(E)=n$ 得 $r(A)+r(E-A)=n$，因为 $\xi$ 为非零向量，所以 $\xi\xi^{\mathrm{T}}\ne O$，从而 $E-A=\xi\xi^{\mathrm{T}}\ne O$，即 $r(E-A)\ge 1$，故 $r(A)<n$，即 $A$ 是不可逆矩阵.

**方法二** 令 $B=\xi\xi^{\mathrm{T}}$，矩阵 $B$ 的特征值为 $\lambda_1=\xi^{\mathrm{T}}\xi=1,\lambda_2=\cdots=\lambda_n=0$，矩阵 $A$ 的特征值为 $\lambda_1=0,\lambda_2=\cdots=\lambda_n=1$，则 $|A|=|E-B|=0$，故 $r(A)<n$，即 $A$ 不可逆.`,
  source: '《1996 数学一解析.pdf》PDF 第 4 页',
});
