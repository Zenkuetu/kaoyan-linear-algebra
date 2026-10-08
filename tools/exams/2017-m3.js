// 2017 · 数学三 · 线性代数（题面取自《2017年考研数学三真题》，答案与解析取自《2017数学三真题答案解析》）
EXAMS.push({
  year: 2017, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ['mat-invertible-crit', 'eig-ops'],
  question: String.raw`设 $\alpha$ 为 $n$ 维单位列向量，$E$ 为 $n$ 阶单位矩阵，则（　）

（A）$E-\alpha\alpha^{\mathrm{T}}$ 不可逆.　（B）$E+\alpha\alpha^{\mathrm{T}}$ 不可逆.　（C）$E+2\alpha\alpha^{\mathrm{T}}$ 不可逆.　（D）$E-2\alpha\alpha^{\mathrm{T}}$ 不可逆.`,
  answer: '（A）',
  analysis: String.raw`因为 $\alpha$ 为 3 维单位列向量，故 $\alpha^{\mathrm{T}}\alpha=1=\mathrm{tr}(\alpha\alpha^{\mathrm{T}})$.
所以，$A=\alpha\alpha^{\mathrm{T}}$ 的特征值为 $1,0,0$. 所以，$|E-\alpha\alpha^{\mathrm{T}}|=0$，即矩阵 $E-\alpha\alpha^{\mathrm{T}}$ 不可逆. 故应选 A.`,
  source: '《2017 数学三真题答案解析》第 1 页',
});

EXAMS.push({
  year: 2017, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ['eig-diag-crit', 'eig-mult'],
  question: String.raw`已知矩阵 $A=\begin{pmatrix}2&0&0\\0&2&1\\0&0&1\end{pmatrix}$，$B=\begin{pmatrix}2&1&0\\0&2&0\\0&0&1\end{pmatrix}$，$C=\begin{pmatrix}1&0&0\\0&2&0\\0&0&2\end{pmatrix}$，则（　）

（A）$A$ 与 $C$ 相似，$B$ 与 $C$ 相似.　（B）$A$ 与 $C$ 相似，$B$ 与 $C$ 不相似.
（C）$A$ 与 $C$ 不相似，$B$ 与 $C$ 相似.　（D）$A$ 与 $C$ 不相似，$B$ 与 $C$ 不相似.`,
  answer: '（B）',
  analysis: String.raw`因为 $A$ 和 $B$ 都是上三角矩阵，所以特征值都是 $1,2,2$.
所以，要判别 $A$ 和 $B$ 能否相似对角化，只需考察属于 $2$ 的线性无关的特征向量的个数即可.
对于 $A$，属于 $2$ 的线性无关的特征向量的个数 $3-r(2E-A)=3-1=2$.
对于 $B$，属于 $2$ 的线性无关的特征向量的个数 $3-r(2E-B)=3-2=1$.
所以，$A$ 可以和 $C$ 相似，但是 $B$ 不能. 故应选 B.`,
  source: '《2017 数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2017, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ['mat-rank-invariance', 'vec-rank-vs-mat'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&0&1\\1&1&2\\0&1&1\end{pmatrix}$，$\alpha_1,\alpha_2,\alpha_3$ 为线性无关的 3 维列向量组，则向量组 $A\alpha_1,A\alpha_2,A\alpha_3$ 的秩为 $\underline{\qquad}$.`,
  answer: '2',
  analysis: String.raw`$(A\alpha_1,A\alpha_2,A\alpha_3)=A(\alpha_1,\alpha_2,\alpha_3)$，因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，故矩阵 $(\alpha_1,\alpha_2,\alpha_3)$ 可逆，所以，$r(A\alpha_1,A\alpha_2,A\alpha_3)=r(A)$，易知，$r(A)=2$. 故应填 2.`,
  source: '《2017 数学三真题答案解析》第 3 页',
});

EXAMS.push({
  year: 2017, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ['eq-nonhomo-general', 'eq-homo-structure', 'eig-property'],
  question: String.raw`（本题满分 11 分）设 3 阶矩阵 $A=(\alpha_1,\alpha_2,\alpha_3)$ 有 3 个不同的特征值，且 $\alpha_3=\alpha_1+2\alpha_2$.

（Ⅰ）证明 $r(A)=2$；

（Ⅱ）若 $\beta=\alpha_1+\alpha_2+\alpha_3$，求方程组 $Ax=\beta$ 的通解.`,
  answer: String.raw`$x=\begin{pmatrix}1\\1\\1\end{pmatrix}+k\begin{pmatrix}1\\2\\-1\end{pmatrix}$（$k$ 为任意常数）`,
  analysis: String.raw`（Ⅰ）由 $\alpha_3=\alpha_1+2\alpha_2$，知 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，故 $r(A)\le2$.
又因为 $A$ 有 3 个不同的特征值，所以 $A$ 至少有 2 个不为零的特征值，从而 $r(A)\ge2$.
故 $r(A)=2$.

（Ⅱ）由 $\alpha_1+2\alpha_2-\alpha_3=0$，知
$$
A\begin{pmatrix}1\\2\\-1\end{pmatrix}=0,
$$
故 $\begin{pmatrix}1\\2\\-1\end{pmatrix}$ 为方程组 $Ax=0$ 的一个解.
又 $r(A)=2$，所以 $\begin{pmatrix}1\\2\\-1\end{pmatrix}$ 为 $Ax=0$ 的一个基础解系.
因为
$$
\beta=\alpha_1+\alpha_2+\alpha_3=A\begin{pmatrix}1\\1\\1\end{pmatrix},
$$
所以 $\begin{pmatrix}1\\1\\1\end{pmatrix}$ 为方程组 $Ax=\beta$ 的一个特解.
故 $Ax=\beta$ 的通解为
$$
x=\begin{pmatrix}1\\1\\1\end{pmatrix}+k\begin{pmatrix}1\\2\\-1\end{pmatrix},
$$
其中 $k$ 为任意常数.`,
  source: '《2017 数学三真题答案解析》第 5–6 页',
});

EXAMS.push({
  year: 2017, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ['qf-orthogonal', 'eig-orth-diag'],
  question: String.raw`（本题满分 11 分）设二次型 $f(x_1,x_2,x_3)=2x_1^2-x_2^2+ax_3^2+2x_1x_2-8x_1x_3+2x_2x_3$ 在正交变换 $x=Qy$ 下的标准形为 $\lambda_1y_1^2+\lambda_2y_2^2$，求 $a$ 的值及一个正交矩阵 $Q$.`,
  answer: String.raw`$a=2$；$Q=\begin{pmatrix}\frac{1}{\sqrt3}&-\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\-\frac{1}{\sqrt3}&0&\frac{2}{\sqrt6}\\\frac{1}{\sqrt3}&\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\end{pmatrix}$`,
  analysis: String.raw`二次型 $f$ 的矩阵为
$$
A=\begin{pmatrix}2&1&-4\\1&-1&1\\-4&1&a\end{pmatrix}.
$$
由题设知 $|A|=0$. 又 $|A|=6-3a$，于是 $a=2$.

矩阵 $A$ 的特征多项式为 $|\lambda E-A|=\lambda(\lambda+3)(\lambda-6)$，所以特征值为 $-3,6,0$.
不妨设 $\lambda_1=-3,\lambda_2=6,\lambda_3=0$.

矩阵 $A$ 属于特征值 $\lambda_1=-3$ 的单位特征向量为 $\beta_1=\frac{1}{\sqrt3}(1,-1,1)^{\mathrm{T}}$；

属于特征值 $\lambda_2=6$ 的单位特征向量为 $\beta_2=\frac{1}{\sqrt2}(-1,0,1)^{\mathrm{T}}$；

属于特征值 $\lambda_3=0$ 的单位特征向量为 $\beta_3=\frac{1}{\sqrt6}(1,2,1)^{\mathrm{T}}$.

故所求的一个正交矩阵为
$$
Q=(\beta_1,\beta_2,\beta_3)=\begin{pmatrix}\frac{1}{\sqrt3}&-\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\\-\frac{1}{\sqrt3}&0&\frac{2}{\sqrt6}\\\frac{1}{\sqrt3}&\frac{1}{\sqrt2}&\frac{1}{\sqrt6}\end{pmatrix}.
$$`,
  source: '《2017 数学三真题答案解析》第 6 页',
});
