// 2000 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 29–31 页；答案与解析取自《1989—2004 考研数二真题答案解析》）
EXAMS.push({
  year: 2000, subject: '数二', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ['mat-inv-method', 'mat-invertible-crit'],
  question: String.raw`设 $A=\begin{pmatrix}1&0&0&0\\-2&3&0&0\\0&-4&5&0\\0&0&-6&7\end{pmatrix}$，$E$ 为 4 阶单位矩阵，且 $B=(E+A)^{-1}(E-A)$，则 $(E+B)^{-1}=$ ________.`,
  answer: String.raw`$$
(E+B)^{-1}=\begin{pmatrix}1&0&0&0\\-1&2&0&0\\0&-2&3&0\\0&0&-3&4\end{pmatrix}.
$$`,
  analysis: String.raw`先求出 $(E+B)^{-1}$ 然后带入数值，由于 $B=(E+A)^{-1}(E-A)$，所以
$$
(E+B)^{-1}=\left[E+(E+A)^{-1}(E-A)\right]^{-1}=\left[(E+A)^{-1}(E+A)+(E+A)^{-1}(E-A)\right]^{-1}
$$
$$
=\left[(E+A)^{-1}(E+A+E-A)\right]^{-1}=\left[(E+A)^{-1}\cdot2E\right]^{-1}=\frac{1}{2}(E+A)
$$
$$
=\frac{1}{2}\begin{pmatrix}2&0&0&0\\-2&4&0&0\\0&-4&6&0\\0&0&-6&8\end{pmatrix}=\begin{pmatrix}1&0&0&0\\-1&2&0&0\\0&-2&3&0\\0&0&-3&4\end{pmatrix}.
$$`,
  source: '《1989—2004 考研数二真题答案解析》第 126 页',
});

EXAMS.push({
  year: 2000, subject: '数二', number: 312, kind: '解答', score: 6, label: '第十二题',
  ids: ['mat-power', 'mat-mult', 'eq-nonhomo-general'],
  question: String.raw`设 $\alpha=\begin{pmatrix}1\\2\\1\end{pmatrix},\beta=\begin{pmatrix}1\\\frac{1}{2}\\0\end{pmatrix},\gamma=\begin{pmatrix}0\\0\\8\end{pmatrix},A=\alpha\beta^{\mathrm{T}},B=\beta^{\mathrm{T}}\alpha$，其中 $\beta^{\mathrm{T}}$ 是 $\beta$ 的转置，求解方程
$$
2B^2A^2x=A^4x+B^4x+\gamma.
$$`,
  answer: String.raw`$$
x=k\begin{pmatrix}1\\2\\1\end{pmatrix}+\begin{pmatrix}0\\0\\-\frac{1}{2}\end{pmatrix},\qquad(k\ \text{为任意常数}).
$$`,
  analysis: String.raw`由题设得
$$
A=\alpha\beta^{\mathrm{T}}=\begin{pmatrix}1\\2\\1\end{pmatrix}\begin{pmatrix}1&\frac{1}{2}&0\end{pmatrix}=\begin{pmatrix}1&\frac{1}{2}&0\\2&1&0\\1&\frac{1}{2}&0\end{pmatrix},\qquad B=\beta^{\mathrm{T}}\alpha=\begin{pmatrix}1&\frac{1}{2}&0\end{pmatrix}\begin{pmatrix}1\\2\\1\end{pmatrix}=2.
$$
所以 $A^2=\alpha\beta^{\mathrm{T}}\alpha\beta^{\mathrm{T}}=\alpha(\alpha\beta^{\mathrm{T}})\beta=2A$，$A^4=8A$；$B^2=4$，$B^4=16$.

代入原方程 $2B^2A^2x=A^4x+B^4x+\gamma$ 中，得
$$
16Ax=8Ax+16x+\gamma,\ \text{即}\ 8(A-2E)x=\gamma
$$
其中 $E$ 是三阶单位矩阵，令 $x=[x_1,x_2,x_3]^{\mathrm{T}}$，代入上式，得线性非齐次方程组
$$
\begin{cases}
-x_1+\frac{1}{2}x_2=0\\
2x_1-x_2=0\\
x_1+\frac{1}{2}x_2-2x_3=1
\end{cases}\tag{1}
$$
显然方程组的同解方程为
$$
\begin{cases}
2x_1-x_2=0\\
x_1+\frac{1}{2}x_2-2x_3=1
\end{cases}\tag{2}
$$
令自由未知量 $x_1=k$，解得 $x_2=2k,x_3=k-\frac{1}{2}$.

故方程组通解为
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}k\\2k\\k-\frac{1}{2}\end{pmatrix}=k\begin{pmatrix}1\\2\\1\end{pmatrix}+\begin{pmatrix}0\\0\\-\frac{1}{2}\end{pmatrix},\qquad(k\ \text{为任意常数}).
$$`,
  source: '《1989—2004 考研数二真题答案解析》第 137 页',
});

EXAMS.push({
  year: 2000, subject: '数二', number: 313, kind: '解答', score: 7, label: '第十三题',
  ids: ['vec-rank-def', 'vec-express-crit', 'vec-maximal'],
  question: String.raw`已知向量组 $\beta_1=\begin{pmatrix}0\\1\\-1\end{pmatrix},\beta_2=\begin{pmatrix}a\\2\\1\end{pmatrix},\beta_3=\begin{pmatrix}b\\1\\0\end{pmatrix}$ 与向量组 $\alpha_1=\begin{pmatrix}1\\2\\-3\end{pmatrix},\alpha_2=\begin{pmatrix}3\\0\\1\end{pmatrix},\alpha_3=\begin{pmatrix}9\\6\\-7\end{pmatrix}$ 具有相同的秩，且 $\beta_3$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，求 $a,b$ 的值.`,
  answer: String.raw`$b=5$，$a=15$.`,
  analysis: String.raw`方法1：先求 $r(\alpha_1,\alpha_2,\alpha_3)$，将矩阵作初等行变换，得
$$
(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&3&9\\2&0&6\\-3&1&-7\end{pmatrix}\to\begin{pmatrix}1&3&9\\0&-6&-12\\0&10&20\end{pmatrix}\to\begin{pmatrix}1&3&9\\0&1&2\\0&0&0\end{pmatrix}
$$
知 $r(\alpha_1,\alpha_2,\alpha_3)=2$. 故 $r(\beta_1,\beta_2,\beta_3)=r(\alpha_1,\alpha_2,\alpha_3)=2$，$[\beta_1,\beta_2,\beta_3]$ 作初等行变换
$$
[\beta_1,\beta_2,\beta_3]=\begin{pmatrix}0&a&b\\1&2&1\\-1&1&0\end{pmatrix}\to\begin{pmatrix}-1&1&0\\0&3&1\\0&a-3b&0\end{pmatrix}
$$
因为 $r(\beta_1,\beta_2,\beta_3)=2$，所以 $a=3b$.

又 $\beta_3$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，故 $r(\alpha_1,\alpha_2,\alpha_3,\beta_3)=r(\alpha_1,\alpha_2,\alpha_3)=2$.

将 $[\alpha_1,\alpha_2,\alpha_3,\beta_3]$ 作初等行变换
$$
[\alpha_1,\alpha_2,\alpha_3,\beta_3]=\left(\begin{array}{rrr:r}1&3&9&b\\2&0&6&1\\-3&1&-7&0\end{array}\right)\to\left(\begin{array}{rrr:r}1&3&9&b\\0&-6&-12&1-2b\\-1&10&20&3b\end{array}\right)
$$
$$
\to\left(\begin{array}{ccc:c}1&3&9&b\\0&1&2&\frac{1-2b}{-6}\\0&0&0&3b+\frac{5}{3}(1-2b)\end{array}\right)
$$
由 $r(\alpha_1,\alpha_2,\alpha_3,\beta_3)=2$，得 $3b+\frac{5}{3}(1-2b)=0$，解得 $b=5$，及 $a=3b=15$.

方法2：由方法1中的初等变换结果可以看出 $\alpha_1,\alpha_2$ 线性无关，且 $\alpha_3=3\alpha_1+2\alpha_2$，故 $r(\alpha_1,\alpha_2,\alpha_3)=2$，$\alpha_1,\alpha_2$ 是 $\alpha_1,\alpha_2,\alpha_3$ 的极大线性无关组. 又 $r(\beta_1,\beta_2,\beta_3)=r(\alpha_1,\alpha_2,\alpha_3)=2$，$\beta_1,\beta_2,\beta_3$ 线性相关. 从而得
$$
|\beta_1,\beta_2,\beta_3|=\begin{vmatrix}0&a&b\\1&2&1\\-1&1&0\end{vmatrix}=\begin{vmatrix}0&a&b\\1&3&1\\-1&0&0\end{vmatrix}=0,
$$
计算三阶行列式得 $-a+3b=0$，得 $a=3b$.

又 $\beta_3$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，即可由 $\alpha_1,\alpha_2$ 线性表出，$\alpha_1,\alpha_2,\beta_3$ 线性相关，有
$$
|\alpha_1,\alpha_2,\beta_3|=\begin{vmatrix}1&3&b\\2&0&1\\-3&1&0\end{vmatrix}=\begin{vmatrix}1&3&b\\0&-6&1-2b\\0&10&3b\end{vmatrix}=\begin{vmatrix}1&3&b\\0&-6&1-2b\\0&0&3b+\frac{10}{6}(1-2b)\end{vmatrix}=0
$$
行列式展开得 $-6\left(3b+\frac{10}{6}(1-2b)\right)=0$，所以 $3b+\frac{5}{3}(1-2b)=0$，得 $b=5$ 及 $a=3b=15$.

方法3：先利用 $\beta_3$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，故方程组 $(\alpha_1,\alpha_2,\alpha_3)X=\beta$ 有解，即
$$
\begin{pmatrix}1&3&9\\2&0&6\\-3&1&-7\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}b\\1\\0\end{pmatrix}
$$
有解. 对其增广矩阵施行初等行变化
$$
\left(\begin{array}{ccc:c}1&3&9&b\\2&0&6&1\\-3&1&-7&0\end{array}\right)\to\left(\begin{array}{ccc:c}1&3&9&b\\0&-6&-12&1-2b\\-1&10&20&3b\end{array}\right)
$$
$$
\to\left(\begin{array}{ccc:c}1&3&9&b\\0&1&2&\frac{2b-1}{-6}\\0&0&0&3b+\frac{5}{3}(1-2b)\end{array}\right)
$$
由非齐次线性方程组有解的条件（系数矩阵的秩等于增广矩阵的秩），知
$$
3b+\frac{5}{3}(1-2b)=\frac{5}{3}-\frac{1}{3}b=0
$$
解得 $b=5$.

又因为 $\alpha_1$ 和 $\alpha_2$ 线性无关，且 $\alpha_3=3\alpha_1+2\alpha_2$，所以向量组 $\alpha_1,\alpha_2,\alpha_3$ 的秩为 $2$，由题设条件知 $r(\beta_1,\beta_2,\beta_3)=2$，从而 $|\beta_1,\beta_2,\beta_3|=\begin{vmatrix}0&a&b\\1&2&1\\-1&1&0\end{vmatrix}=\begin{vmatrix}0&a&b\\1&3&1\\-1&0&0\end{vmatrix}=0$，解得 $a=15$.`,
  source: '《1989—2004 考研数二真题答案解析》第 138–139 页',
});
