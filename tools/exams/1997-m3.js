// 1997 · 数学三 · 线性代数（题面取自《2、1997-2009考研数学三真题》的 1997 年部分；答案与解析取自《1997年数学三真题答案解析》）
EXAMS.push({
  year: 1997, subject: '数三', number: 104, label: '填空题第 4 题', kind: '填空', score: 3,
  ids: ["qf-positive-crit","qf-def"],
  question: String.raw`若二次型 $f(x_1,x_2,x_3)=2x_1^2+2x_1x_2+x_2^2+tx_2x_3+x_3^2$ 正定，则 $t$ 的取值范围是 $\underline{\qquad}$。
`,
  answer: String.raw`$-\sqrt{2}<t<\sqrt{2}$`,
  analysis: String.raw`【解析】二次型 $f(x_1,x_2,x_3)$ 对应的矩阵为
$$
A=\begin{pmatrix}2&1&0\\1&1&\dfrac{t}{2}\\0&\dfrac{t}{2}&1\end{pmatrix}.
$$
因为 $f$ 正定 $\Leftrightarrow$ $A$ 的顺序主子式全大于零。又
$$
\Delta_1=2,\quad \Delta_2=\begin{vmatrix}2&1\\1&1\end{vmatrix}=1,\quad \Delta_3=|A|=1-\frac{1}{2}t^2,
$$
故 $f$ 正定 $\Leftrightarrow 1-\dfrac{1}{2}t^2>0$，即 $-\sqrt{2}<t<\sqrt{2}$。`,
  source: '《1997 年数学三试题解析》第 1–2 页',
});

EXAMS.push({
  year: 1997, subject: '数三', number: 309, label: '第九题', kind: '解答', score: 6,
  ids: ["mat-block","mat-adj-identity","det-block"],
  question: String.raw`（本题满分 6 分）设 $A$ 为 $n$ 阶非奇异矩阵，$\alpha$ 为 $n$ 维列向量，$b$ 为常数。记分块矩阵
$$
P=\begin{pmatrix}E&O\\-\alpha^{\mathrm{T}}A^{*}&|A|\end{pmatrix},\qquad Q=\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&b\end{pmatrix},
$$
其中 $A^{*}$ 是矩阵 $A$ 的伴随矩阵，$E$ 为 $n$ 阶单位矩阵。

（1）计算并化简 $PQ$；

（2）证明：矩阵 $Q$ 可逆的充分必要条件是 $\alpha^{\mathrm{T}}A^{-1}\alpha\ne b$。`,
  answer: String.raw`（1）$PQ=\begin{pmatrix}A&\alpha\\0&|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)\end{pmatrix}$；（2）证明见解析（$Q$ 可逆 $\Leftrightarrow \alpha^{\mathrm{T}}A^{-1}\alpha\ne b$）。`,
  analysis: String.raw`【解析】（1）由 $AA^{*}=A^{*}A=|A|E$ 及 $A^{*}=|A|A^{-1}$，有
$$
PQ=\begin{pmatrix}E&O\\-\alpha^{\mathrm{T}}A^{*}&|A|\end{pmatrix}\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&b\end{pmatrix}
=\begin{pmatrix}A&\alpha\\-\alpha^{\mathrm{T}}A^{*}A+|A|\alpha^{\mathrm{T}}&-\alpha^{\mathrm{T}}A^{*}\alpha+b|A|\end{pmatrix}
=\begin{pmatrix}A&\alpha\\0&|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)\end{pmatrix}.
$$

（2）用行列式拉普拉斯展开式及行列式乘法公式，有
$$
|P|=\begin{vmatrix}E&O\\-\alpha^{\mathrm{T}}A^{*}&|A|\end{vmatrix}=|A|,
$$
$$
|P||Q|=|PQ|=\begin{vmatrix}A&\alpha\\0&|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)\end{vmatrix}=|A|^2(b-\alpha^{\mathrm{T}}A^{-1}\alpha).
$$
又因 $A$ 是非奇异矩阵，所以 $|A|\ne 0$，故 $|Q|=|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)$。

由此可知 $Q$ 可逆的充要条件是 $|Q|\ne 0$，即 $b-\alpha^{\mathrm{T}}A^{-1}\alpha\ne 0$，亦即 $\alpha^{\mathrm{T}}A^{-1}\alpha\ne b$。

> 评注：本题考查分块矩阵的运算，要看清 $\alpha^{\mathrm{T}}A^{-1}\alpha$ 是 1 阶矩阵，是一个数。`,
  source: '《1997 年数学三试题解析》第 10–11 页',
});

EXAMS.push({
  year: 1997, subject: '数三', number: 310, label: '第十题', kind: '解答', score: 10,
  ids: ["eig-symmetric","eig-orth-diag","eig-diag-method"],
  question: String.raw`（本题满分 10 分）设 3 阶实对称矩阵 $A$ 的特征值是 $1,2,3$；矩阵 $A$ 的属于特征值 $1,2$ 的特征向量分别是 $\alpha_1=(-1,-1,1)^{\mathrm{T}},\alpha_2=(1,-2,-1)^{\mathrm{T}}$。

（1）求 $A$ 的属于特征值 $3$ 的特征向量；

（2）求矩阵 $A$。`,
  answer: String.raw`（1）$\alpha_3=k(1,0,1)^{\mathrm{T}}$（$k$ 为非零常数）；（2）$A=\dfrac{1}{6}\begin{pmatrix}13&-2&5\\-2&10&2\\5&2&13\end{pmatrix}$。`,
  analysis: String.raw`【解析】（1）设 $A$ 的属于 $\lambda=3$ 的特征向量为 $\alpha_3=[x_1,x_2,x_3]^{\mathrm{T}}$，因为实对称矩阵属于不同特征值的特征向量相互正交，故
$$
\begin{cases}\alpha_1^{\mathrm{T}}\alpha_3=-x_1-x_2+x_3=0,\\ \alpha_2^{\mathrm{T}}\alpha_3=x_1-2x_2-x_3=0.\end{cases}
$$
解上述方程组，设方程组的系数矩阵为 $B=\begin{pmatrix}-1&-1&1\\1&-2&-1\end{pmatrix}$，对 $B$ 进行初等行变换：
$$
B=\begin{pmatrix}-1&-1&1\\1&-2&-1\end{pmatrix}\to\begin{pmatrix}1&1&-1\\0&-3&0\end{pmatrix}\to\begin{pmatrix}1&0&-1\\0&1&0\end{pmatrix},
$$
系数矩阵的秩为 $2$，根据基础解系的个数与系数矩阵秩之间的关系，我们得到基础解系的个数为 $1$，解得 $[1,0,1]^{\mathrm{T}}$，即 $A$ 的对应于 $\lambda=3$ 的特征向量为 $\alpha_3=k[1,0,1]^{\mathrm{T}}$，其中 $k$ 为非零常数。

（2）**方法 1**：令 $P=[\alpha_1,\alpha_2,\alpha_3]=\begin{pmatrix}-1&1&1\\-1&-2&0\\1&-1&1\end{pmatrix}$，则有 $P^{-1}AP=\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}=\Lambda$，即 $A=P\Lambda P^{-1}$，其中 $P^{-1}$ 计算如下：
$$
[P\vdots E]=\begin{pmatrix}-1&1&1&1&0&0\\-1&-2&0&0&1&0\\1&-1&1&0&0&1\end{pmatrix}\to\begin{pmatrix}-1&1&1&1&0&0\\0&-3&-1&-1&1&0\\0&0&2&1&0&1\end{pmatrix}
$$
$$
\to\begin{pmatrix}-1&1&0&\dfrac{1}{2}&0&-\dfrac{1}{2}\\0&-3&0&-\dfrac{1}{2}&1&\dfrac{1}{2}\\0&0&1&\dfrac{1}{2}&0&\dfrac{1}{2}\end{pmatrix}\to\begin{pmatrix}1&0&0&-\dfrac{1}{3}&-\dfrac{1}{3}&\dfrac{1}{3}\\0&1&0&\dfrac{1}{6}&-\dfrac{1}{3}&-\dfrac{1}{6}\\0&0&1&\dfrac{1}{2}&0&\dfrac{1}{2}\end{pmatrix}
$$
得
$$
P^{-1}=\frac{1}{6}\begin{pmatrix}-2&-2&2\\1&-2&-1\\3&0&3\end{pmatrix},
$$
$$
A=P\Lambda P^{-1}=\frac{1}{6}\begin{pmatrix}-1&1&1\\-1&-2&0\\1&-1&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}\begin{pmatrix}-2&-2&2\\1&-2&-1\\3&0&3\end{pmatrix}=\frac{1}{6}\begin{pmatrix}13&-2&5\\-2&10&2\\5&2&13\end{pmatrix}.
$$

**方法 2**：因 $A$ 是对称矩阵，不同特征值对应的特征向量互相正交，故存在正交阵 $Q$（对 $P$ 单位化），使 $Q^{-1}AQ=Q^{\mathrm{T}}AQ=\Lambda$，$A=Q\Lambda Q^{\mathrm{T}}$，其中
$$
Q=\begin{pmatrix}-\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}\\[4pt]-\dfrac{1}{\sqrt{3}}&-\dfrac{2}{\sqrt{6}}&0\\[4pt]\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}\end{pmatrix}.
$$
$$
A=Q\Lambda Q^{\mathrm{T}}=\begin{pmatrix}-\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}\\[4pt]-\dfrac{1}{\sqrt{3}}&-\dfrac{2}{\sqrt{6}}&0\\[4pt]\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}\end{pmatrix}\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}\begin{pmatrix}-\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}\\[4pt]\dfrac{1}{\sqrt{6}}&-\dfrac{2}{\sqrt{6}}&-\dfrac{1}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{2}}&0&\dfrac{1}{\sqrt{2}}\end{pmatrix}=\frac{1}{6}\begin{pmatrix}13&-2&5\\-2&10&2\\5&2&13\end{pmatrix}.
$$

**方法 3**：由于矩阵 $A$ 的特征值是 $1,2,3$，特征向量依次为 $\alpha_1,\alpha_2,\alpha_3$，利用分块矩阵有
$$
A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1,2\alpha_2,3\alpha_3).
$$
因为 $\alpha_1,\alpha_2,\alpha_3$ 是不同特征值的特征向量，它们线性无关，于是矩阵 $(\alpha_1,\alpha_2,\alpha_3)$ 可逆。故
$$
A=(\alpha_1,2\alpha_2,3\alpha_3)(\alpha_1,\alpha_2,\alpha_3)^{-1}
=\begin{pmatrix}-1&2&3\\-1&-4&0\\1&-2&3\end{pmatrix}\begin{pmatrix}-1&1&1\\-1&-2&0\\1&-1&1\end{pmatrix}^{-1}
=\frac{1}{6}\begin{pmatrix}-1&2&3\\-1&-4&0\\1&-2&3\end{pmatrix}\begin{pmatrix}-2&-2&2\\1&-2&-1\\3&0&3\end{pmatrix}
=\frac{1}{6}\begin{pmatrix}13&-2&5\\-2&10&2\\5&2&13\end{pmatrix}.
$$

> 【评注】本题有两个难点，一是能否由"实对称矩阵"挖掘出隐含的信息，通过正交性求出 $\alpha_3$，另一个难点就是反求矩阵 $A$。`,
  source: '《1997 年数学三试题解析》第 11–13 页',
});
