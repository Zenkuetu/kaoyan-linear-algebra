// 2010 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》第 49–52 页的 2010 年部分；答案与解析取自《2010年数学三真题答案解析》）
EXAMS.push({
  year: 2010, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ["vec-rank-table", "vec-express-crit"],
  question: String.raw`设向量组 I：$\alpha_1,\alpha_2,\cdots,\alpha_r$ 可由向量组 II：$\beta_1,\beta_2,\cdots,\beta_s$ 线性表示。下列命题正确的是（　　）

（A）若向量组 I 线性无关，则 $r\le s$

（B）若向量组 I 线性相关，则 $r>s$

（C）若向量组 II 线性无关，则 $r\le s$

（D）若向量组 II 线性相关，则 $r>s$`,
  answer: String.raw`（A）`,
  analysis: String.raw`由于向量组 I 能由向量组 II 线性表示，所以 $r(\mathrm{I})\le r(\mathrm{II})$，即
$$
r(\alpha_1,\cdots,\alpha_r)\le r(\beta_1,\cdots,\beta_s)\le s.
$$
若向量组 I 线性无关，则 $r(\alpha_1,\cdots,\alpha_r)=r$，所以 $r=r(\alpha_1,\cdots,\alpha_r)\le r(\beta_1,\cdots,\beta_s)\le s$，即 $r\le s$，选（A）。`,
  source: '《2010 年数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2010, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ["eig-def", "eig-similar", "eig-diag-crit"],
  question: String.raw`设 $A$ 为 4 阶实对称矩阵，且 $A^2+A=O$。若 $A$ 的秩为 3，则 $A$ 相似于（　　）

（A）$\begin{pmatrix}1&&&\\&1&&\\&&1&\\&&&0\end{pmatrix}$　　（B）$\begin{pmatrix}1&&&\\&1&&\\&&-1&\\&&&0\end{pmatrix}$

（C）$\begin{pmatrix}1&&&\\&-1&&\\&&-1&\\&&&0\end{pmatrix}$　　（D）$\begin{pmatrix}-1&&&\\&-1&&\\&&-1&\\&&&0\end{pmatrix}$`,
  answer: String.raw`（D）`,
  analysis: String.raw`设 $\lambda$ 为 $A$ 的特征值，由于 $A^2+A=O$，所以 $\lambda^2+\lambda=0$，即 $(\lambda+1)\lambda=0$，这样 $A$ 的特征值只能为 $-1$ 或 $0$。由于 $A$ 为实对称矩阵，故 $A$ 可相似对角化，即
$$
A\sim\Lambda,\quad r(A)=r(\Lambda)=3,
$$
因此
$$
\Lambda=\begin{pmatrix}-1&&&\\&-1&&\\&&-1&\\&&&0\end{pmatrix},
$$
即
$$
A\sim\Lambda=\begin{pmatrix}-1&&&\\&-1&&\\&&-1&\\&&&0\end{pmatrix}.
$$`,
  source: '《2010 年数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2010, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ["det-product", "mat-inv-method"],
  question: String.raw`设 $A,B$ 为 3 阶矩阵，且 $|A|=3$，$|B|=2$，$|A^{-1}+B|=2$，则 $|A+B^{-1}|=\underline{\qquad}$。`,
  answer: String.raw`$3$`,
  analysis: String.raw`由于 $A(A^{-1}+B)B^{-1}=(E+AB)B^{-1}=B^{-1}+A$，所以
$$
|A+B^{-1}|=|A(A^{-1}+B)B^{-1}|=|A||A^{-1}+B||B^{-1}|.
$$
因为 $|B|=2$，所以 $|B^{-1}|=|B|^{-1}=\frac12$，因此
$$
|A+B^{-1}|=|A||A^{-1}+B||B^{-1}|=3\times2\times\frac12=3.
$$`,
  source: '《2010 年数学三真题答案解析》第 4 页',
});

EXAMS.push({
  year: 2010, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ["eq-nonhomo-crit", "eq-rank-relation", "eq-nonhomo-general"],
  question: String.raw`（本题满分 11 分）设
$$
A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix},\quad b=\begin{pmatrix}a\\1\\1\end{pmatrix}.
$$
已知线性方程组 $Ax=b$ 存在两个不同的解。

（Ⅰ）求 $\lambda$，$a$；

（Ⅱ）求方程组 $Ax=b$ 的通解。`,
  answer: String.raw`（Ⅰ）$\lambda=-1$，$a=-2$；

（Ⅱ）$x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac32\\-\frac12\\0\end{pmatrix}$（$k$ 为任意常数）。`,
  analysis: String.raw`因为方程组有两个不同的解，所以可以判断方程组增广矩阵的秩小于 3，进而可以通过秩的关系求解方程组中未知参数，有以下两种方法。

方法 1：（Ⅰ）已知 $Ax=b$ 有 2 个不同的解，故 $r(A)=r(\overline{A})<3$，对增广矩阵进行初等行变换，得
$$
\overline{A}=\begin{pmatrix}\lambda&1&1&a\\0&\lambda-1&0&1\\1&1&\lambda&1\end{pmatrix}\to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\\lambda&1&1&a\end{pmatrix}\to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\0&1-\lambda&1-\lambda^2&a-\lambda\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\0&0&1-\lambda^2&a-\lambda+1\end{pmatrix}.
$$
当 $\lambda=1$ 时，$\overline{A}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\0&0&0&a\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\0&0&0&0\end{pmatrix}$，此时，$r(A)\ne r(\overline{A})$，故 $Ax=b$ 无解（舍去）。

当 $\lambda=-1$ 时，$\overline{A}\to\begin{pmatrix}1&1&-1&1\\0&-2&0&1\\0&0&0&a+2\end{pmatrix}$，由于 $r(A)=r(\overline{A})<3$，所以 $a=-2$，故 $\lambda=-1$，$a=-2$。

方法 2：已知 $Ax=b$ 有 2 个不同的解，故 $r(A)=r(\overline{A})<3$，因此 $|A|=0$，即
$$
|A|=\begin{vmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{vmatrix}=(\lambda-1)^2(\lambda+1)=0,
$$
知 $\lambda=1$ 或 $-1$。

当 $\lambda=1$ 时，$r(A)=1\ne r(\overline{A})=2$，此时，$Ax=b$ 无解，因此 $\lambda=-1$。由 $r(A)=r(\overline{A})$，得 $a=-2$。

（Ⅱ）对增广矩阵做初等行变换
$$
\overline{A}=\begin{pmatrix}-1&1&1&-2\\0&-2&0&1\\1&1&-1&1\end{pmatrix}\to\begin{pmatrix}1&-1&-1&2\\0&2&0&-1\\0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&-1&\frac32\\0&1&0&-\frac12\\0&0&0&0\end{pmatrix}.
$$
可知原方程组等价为
$$
\begin{cases}x_1-x_3=\frac32,\\x_2=-\frac12,\end{cases}
$$
写成向量的形式，即
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=x_3\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac32\\-\frac12\\0\end{pmatrix}.
$$
因此 $Ax=b$ 的通解为
$$
x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac32\\-\frac12\\0\end{pmatrix},
$$
其中 $k$ 为任意常数。`,
  source: '《2010 年数学三真题答案解析》第 6–7 页',
});

EXAMS.push({
  year: 2010, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ["eig-orth-diag", "eig-vector-space", "eig-symmetric"],
  question: String.raw`（本题满分 11 分）设
$$
A=\begin{pmatrix}0&-1&4\\-1&3&a\\4&a&0\end{pmatrix},
$$
正交矩阵 $Q$ 使 $Q^{\mathrm{T}}AQ$ 为对角矩阵，若 $Q$ 的第 1 列为 $\frac{1}{\sqrt6}(1,2,1)^{\mathrm{T}}$，求 $a,Q$。`,
  answer: String.raw`$a=-1$，$Q=\begin{pmatrix}\frac{1}{\sqrt6}&-\frac{1}{\sqrt2}&\frac{1}{\sqrt3}\\\frac{2}{\sqrt6}&0&\frac{1}{\sqrt3}\\\frac{1}{\sqrt6}&\frac{1}{\sqrt2}&\frac{1}{\sqrt3}\end{pmatrix}$。`,
  analysis: String.raw`由于
$$
A=\begin{pmatrix}0&-1&4\\-1&3&a\\4&a&0\end{pmatrix},
$$
存在正交矩阵 $Q$，使得 $Q^{\mathrm{T}}AQ$ 为对角阵，且 $Q$ 的第一列为 $\frac{1}{\sqrt6}(1,2,1)^{\mathrm{T}}$，故 $A$ 对应于 $\lambda_1$ 的特征向量为 $\xi_1=\frac{1}{\sqrt6}(1,2,1)^{\mathrm{T}}$。

根据特征值和特征向量的定义，有
$$
A\begin{pmatrix}\frac{1}{\sqrt6}\\\frac{2}{\sqrt6}\\\frac{1}{\sqrt6}\end{pmatrix}=\lambda_1\begin{pmatrix}\frac{1}{\sqrt6}\\\frac{2}{\sqrt6}\\\frac{1}{\sqrt6}\end{pmatrix},
$$
即
$$
\begin{pmatrix}0&-1&4\\-1&3&a\\4&a&0\end{pmatrix}\begin{pmatrix}1\\2\\1\end{pmatrix}=\lambda_1\begin{pmatrix}1\\2\\1\end{pmatrix},
$$
由此可得 $a=-1$，$\lambda_1=2$。故
$$
A=\begin{pmatrix}0&-1&4\\-1&3&-1\\4&-1&0\end{pmatrix}.
$$
由
$$
|\lambda E-A|=\begin{vmatrix}\lambda&1&-4\\1&\lambda-3&1\\-4&1&\lambda\end{vmatrix}=(\lambda+4)(\lambda-2)(\lambda-5)=0,
$$
可得 $A$ 的特征值为 $\lambda_1=2$，$\lambda_2=-4$，$\lambda_3=5$。

由 $(\lambda_2E-A)x=0$，即
$$
\begin{pmatrix}-4&1&-4\\1&-7&1\\-4&1&-4\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=0,
$$
可解得对应于 $\lambda_2=-4$ 的线性无关的特征向量为 $\xi_2=(-1,0,1)^{\mathrm{T}}$。

由 $(\lambda_3E-A)x=0$，即
$$
\begin{pmatrix}5&1&-4\\1&2&1\\-4&1&5\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=0,
$$
可解得对应于 $\lambda_3=5$ 的特征向量为 $\xi_3=(1,-1,1)^{\mathrm{T}}$。

由于 $A$ 为实对称矩阵，$\xi_1,\xi_2,\xi_3$ 为对应于不同特征值的特征向量，所以 $\xi_1,\xi_2,\xi_3$ 相互正交，只需单位化：
$$
\eta_1=\frac{\xi_1}{\|\xi_1\|}=\frac{1}{\sqrt6}(1,2,1)^{\mathrm{T}},\quad \eta_2=\frac{\xi_2}{\|\xi_2\|}=\frac{1}{\sqrt2}(-1,0,1)^{\mathrm{T}},\quad \eta_3=\frac{\xi_3}{\|\xi_3\|}=\frac{1}{\sqrt3}(1,-1,1)^{\mathrm{T}},
$$
取
$$
Q=(\eta_1,\eta_2,\eta_3)=\begin{pmatrix}\frac{1}{\sqrt6}&-\frac{1}{\sqrt2}&\frac{1}{\sqrt3}\\\frac{2}{\sqrt6}&0&\frac{1}{\sqrt3}\\\frac{1}{\sqrt6}&\frac{1}{\sqrt2}&\frac{1}{\sqrt3}\end{pmatrix},
$$
则
$$
Q^{\mathrm{T}}AQ=\Lambda=\begin{pmatrix}2&&\\&-4&\\&&5\end{pmatrix}.
$$`,
  source: '《2010 年数学三真题答案解析》第 7–8 页',
});
