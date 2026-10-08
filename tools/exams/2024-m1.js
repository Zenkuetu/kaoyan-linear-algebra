// 2024 · 数学一 · 线性代数（题面取自《2024年考研数学（一）真题》，答案与解析取自《2024数学一解析》）
EXAMS.push({
  year: 2024, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['eq-rank-relation', 'eq-geometry'],
  question: String.raw`设空间直角坐标系 $O\text{-}xyz$ 中，三张平面 $\pi_i:\ a_ix+b_iy+c_iz=d_i\ (i=1,2,3)$ 的位置关系如图所示（三张平面交于同一条直线）。记 $\alpha_i=(a_i,b_i,c_i)$，$\beta_i=(a_i,b_i,c_i,d_i)$。若 $r(\alpha_1,\alpha_2,\alpha_3)=m$，$r(\beta_1,\beta_2,\beta_3)=n$，则

（A）$m=1,n=2$　（B）$m=n=2$　（C）$m=2,n=3$　（D）$m=n=3$`,
  answer: '（B）',
  analysis: String.raw`由题意可知，$\pi_1,\pi_2,\pi_3$ 相交于一条直线，且不重合，于是方程组
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1,\\
a_2x+b_2y+c_2z=d_2,\\
a_3x+b_3y+c_3z=d_3
\end{cases}
$$
有无穷多解，且 $\alpha_1,\alpha_2,\alpha_3$ 两两不相关，故
$$
r\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3\end{pmatrix}=r\begin{pmatrix}\beta_1\\\beta_2\\\beta_3\end{pmatrix}<3,
$$
且 $r(\alpha_i,\alpha_j)=2\ (i\ne j)$，故 $m=n=2$。`,
  source: '《2024 数学一解析》第 9 页',
});

EXAMS.push({
  year: 2024, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['vec-indep-def', 'vec-indep-crit'],
  question: String.raw`设向量
$$
\alpha_1=\begin{pmatrix}a\\1\\-1\\1\end{pmatrix},\quad \alpha_2=\begin{pmatrix}1\\1\\b\\a\end{pmatrix},\quad \alpha_3=\begin{pmatrix}1\\a\\-1\\1\end{pmatrix},
$$
若 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，且其中任意两个向量均线性无关，则

（A）$a=1,\ b\ne -1$　（B）$a=1,\ b=-1$　（C）$a\ne -2,\ b=2$　（D）$a=-2,\ b=2$`,
  answer: '（D）',
  analysis: String.raw`$$
(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}a&1&1\\1&1&a\\-1&b&-1\\1&a&1\end{pmatrix}\to\begin{pmatrix}1&1&a\\0&1-a&1-a^2\\0&b+1&a-1\\0&a-1&1-a\end{pmatrix}\to\begin{pmatrix}1&1&a\\0&1-a&1-a^2\\0&b+1&a-1\\0&0&2-a^2-a\end{pmatrix}.
$$
因为 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，且其中任意两个向量均线性无关，则 $r(\alpha_1,\alpha_2,\alpha_3)\le 2$，且 $r(\alpha_i,\alpha_j)=2\ (i\ne j)$，于是 $r(\alpha_1,\alpha_2,\alpha_3)=2$。

① 当 $a=1$ 时，$\alpha_1$ 与 $\alpha_3$ 线性相关，不满足题意；

② 当 $a\ne 1$ 时，
$$
(\alpha_1,\alpha_2,\alpha_3)\to\begin{pmatrix}1&1&a\\0&1&1+a\\0&b+1&a-1\\0&0&a+2\end{pmatrix}\to\begin{pmatrix}1&1&a\\0&1&1+a\\0&0&-b(a+1)-2\\0&0&a+2\end{pmatrix},
$$
要满足题意，则 $a+2=0$ 且 $-b(a+1)-2=0$，得 $\begin{cases}a=-2,\\ b=2.\end{cases}$`,
  source: '《2024 数学一解析》第 10 页',
});

EXAMS.push({
  year: 2024, subject: '数一', number: 7, kind: '选择', score: 5,
  ids: ['eig-ops', 'eig-def'],
  question: String.raw`设 $A$ 是秩为 $2$ 的 3 阶矩阵，$\alpha$ 是满足 $A\alpha=0$ 的非零向量。若对满足 $\beta^{\mathrm{T}}\alpha=0$ 的任意向量 $\beta$，均有 $A\beta=\beta$，则

（A）$A^3$ 的迹为 $2$　（B）$A^3$ 的迹为 $5$　（C）$A^5$ 的迹为 $7$　（D）$A^5$ 的迹为 $9$`,
  answer: '（A）',
  analysis: String.raw`由 $r(A)=2$，则 $Ax=0$ 只有一个线性无关的解，故特征值 $0$ 只有一个线性无关特征向量。

由 $A\alpha=0=0\cdot\alpha$，$\alpha\ne 0$，知 $\alpha$ 为 $\lambda_1=0$ 的特征向量。

对 3 维非零列向量，且满足 $\beta^{\mathrm{T}}\alpha=0$（即 $\alpha$ 与 $\beta$ 正交）的线性无关向量 $\beta$ 应当有两个（比如 3 维坐标系的三个坐标轴），设为 $\beta_1,\beta_2$，由
$$
A\beta_i=\beta_i=1\cdot\beta_i,\qquad i=1,2,
$$
则 $\beta_1,\beta_2$ 为特征值 $\lambda_2=\lambda_3=1$ 的线性无关特征向量，进而 $A^n$ 的全部特征值也是 $0,1,1$。所以
$$
\mathrm{tr}(A^n)=0+1+1=2.
$$
`,
  source: '《2024 数学一解析》第 10 页',
});

EXAMS.push({
  year: 2024, subject: '数一', number: 15, kind: '填空', score: 5,
  ids: ['qf-semi-def', 'qf-positive-def'],
  question: String.raw`设实矩阵
$$
A=\begin{pmatrix}a+1&a\\a&a\end{pmatrix},
$$
若对任意实向量 $\alpha=\begin{pmatrix}x_1\\x_2\end{pmatrix}$，$\beta=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，都有
$$
(\alpha^{\mathrm{T}}A\beta)^2\le \alpha^{\mathrm{T}}A\alpha\cdot\beta^{\mathrm{T}}A\beta,
$$
则 $a$ 的取值范围是 $\underline{\qquad}$。`,
  answer: String.raw`$[0,+\infty)$`,
  analysis: String.raw`由题意，$A$ 是实对称矩阵，则存在正交矩阵 $Q$，使
$$
Q^{\mathrm{T}}AQ=\begin{pmatrix}\lambda_1&0\\0&\lambda_2\end{pmatrix}=\Lambda,
$$
故 $A=Q\Lambda Q^{\mathrm{T}}$。

对任意 $\alpha,\beta$，有 $(\alpha^{\mathrm{T}}A\beta)^2\le\alpha^{\mathrm{T}}A\alpha\cdot\beta^{\mathrm{T}}A\beta$，即
$$
(\alpha^{\mathrm{T}}Q\Lambda Q^{\mathrm{T}}\beta)^2\le\alpha^{\mathrm{T}}Q\Lambda Q^{\mathrm{T}}\alpha\cdot\beta^{\mathrm{T}}Q\Lambda Q^{\mathrm{T}}\beta
$$
成立。记 $Q^{\mathrm{T}}\alpha=\alpha_1=\begin{pmatrix}a_1\\a_2\end{pmatrix}$，$Q^{\mathrm{T}}\beta=\beta_1=\begin{pmatrix}b_1\\b_2\end{pmatrix}$，则 $(\alpha_1^{\mathrm{T}}\Lambda\beta_1)^2\le\alpha_1^{\mathrm{T}}\Lambda\alpha_1\cdot\beta_1^{\mathrm{T}}\Lambda\beta_1$，即
$$
(\lambda_1a_1b_1+\lambda_2a_2b_2)^2\le(\lambda_1a_1^2+\lambda_2a_2^2)(\lambda_1b_1^2+\lambda_2b_2^2),
$$
也即
$$
\lambda_1^2a_1^2b_1^2+\lambda_2^2a_2^2b_2^2+2\lambda_1\lambda_2a_1a_2b_1b_2\le\lambda_1^2a_1^2b_1^2+\lambda_1\lambda_2a_1^2b_2^2+\lambda_1\lambda_2a_2^2b_1^2+\lambda_2^2a_2^2b_2^2,
$$
于是 $2\lambda_1\lambda_2a_1a_2b_1b_2\le\lambda_1\lambda_2a_1^2b_2^2+\lambda_1\lambda_2a_2^2b_1^2$，即 $\lambda_1\lambda_2(a_1^2b_2^2+a_2^2b_1^2-2a_1a_2b_1b_2)\ge 0$，也即
$$
\lambda_1\lambda_2(a_1b_2-a_2b_1)^2\ge 0.
$$
由 $\alpha,\beta$ 的任意性，可知 $\lambda_1\lambda_2\ge 0$，于是
$$
|A|=\begin{vmatrix}a+1&a\\a&a\end{vmatrix}=a^2+a-a^2=a\ge 0.
$$`,
  source: '《2024 数学一解析》第 12 页',
});

EXAMS.push({
  year: 2024, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['eig-diag-method', 'eig-power-app'],
  question: String.raw`（本题满分 12 分）已知数列 $\{x_n\},\{y_n\},\{z_n\}$ 满足 $x_0=-1$，$y_0=0$，$z_0=2$，且
$$
\begin{cases}
x_n=-2x_{n-1}+2z_{n-1},\\
y_n=-2y_{n-1}-2z_{n-1},\\
z_n=-6x_{n-1}-3y_{n-1}+3z_{n-1},
\end{cases}
$$
记 $\alpha_n=\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$，写出满足 $\alpha_n=A\alpha_{n-1}$ 的矩阵 $A$，并求 $A^n$ 及 $x_n,y_n,z_n\ (n=1,2,\cdots)$。`,
  answer: String.raw`$x_n=8+(-2)^n$，$y_n=-8+(-2)^{n+1}$，$z_n=12\ (n=1,2,\cdots)$`,
  analysis: String.raw`由题设得
$$
\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}=\begin{pmatrix}-2&0&2\\0&-2&-2\\-6&-3&3\end{pmatrix}\begin{pmatrix}x_{n-1}\\y_{n-1}\\z_{n-1}\end{pmatrix},
$$
得矩阵 $A=\begin{pmatrix}-2&0&2\\0&-2&-2\\-6&-3&3\end{pmatrix}$ 满足 $\alpha_n=A\alpha_{n-1}$。

因为
$$
|\lambda E-A|=\begin{vmatrix}\lambda+2&0&-2\\0&\lambda+2&2\\6&3&\lambda-3\end{vmatrix}=\lambda(\lambda-1)(\lambda+2),
$$
所以矩阵 $A$ 的特征值为 $\lambda_1=0$，$\lambda_2=1$，$\lambda_3=-2$。

当 $\lambda_1=0$ 时，解方程组 $(0E-A)x=0$，得特征向量 $\xi_1=\begin{pmatrix}1\\-1\\1\end{pmatrix}$；

当 $\lambda_2=1$ 时，解方程组 $(E-A)x=0$，得特征向量 $\xi_2=\begin{pmatrix}2\\-2\\3\end{pmatrix}$；

当 $\lambda_3=-2$ 时，解方程组 $(-2E-A)x=0$，得特征向量 $\xi_3=\begin{pmatrix}-1\\2\\0\end{pmatrix}$。

令 $P=(\xi_1,\xi_2,\xi_3)=\begin{pmatrix}1&2&-1\\-1&-2&2\\1&3&0\end{pmatrix}$，则 $P^{-1}AP=\begin{pmatrix}0&0&0\\0&1&0\\0&0&-2\end{pmatrix}$，即
$$
A=P\begin{pmatrix}0&0&0\\0&1&0\\0&0&-2\end{pmatrix}P^{-1},
$$
从而得
$$
A^n=P\begin{pmatrix}0&0&0\\0&1&0\\0&0&-2\end{pmatrix}^nP^{-1}=\begin{pmatrix}1&2&-1\\-1&-2&2\\1&3&0\end{pmatrix}\begin{pmatrix}0&0&0\\0&1&0\\0&0&(-2)^n\end{pmatrix}\begin{pmatrix}6&3&-2\\-2&-1&1\\1&1&0\end{pmatrix}
$$
$$
=\begin{pmatrix}-4-(-2)^n&-2-(-2)^n&2\\4-(-2)^{n+1}&2-(-2)^{n+1}&-2\\-6&-3&3\end{pmatrix}.
$$
由递推式 $\alpha_n=A\alpha_{n-1}$ 知 $\alpha_n=A^n\alpha_0$，其中 $\alpha_0=\begin{pmatrix}-1\\0\\2\end{pmatrix}$，所以
$$
\alpha_n=A^n\alpha_0=\begin{pmatrix}-4-(-2)^n&-2-(-2)^n&2\\4-(-2)^{n+1}&2-(-2)^{n+1}&-2\\-6&-3&3\end{pmatrix}\begin{pmatrix}-1\\0\\2\end{pmatrix}=\begin{pmatrix}8+(-2)^n\\-8+(-2)^{n+1}\\12\end{pmatrix},
$$
故 $x_n=8+(-2)^n$，$y_n=-8+(-2)^{n+1}$，$z_n=12\ (n=1,2,\cdots)$。`,
  source: '《2024 数学一解析》第 14–15 页',
});
