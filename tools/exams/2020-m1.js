// 2020 · 数学一 · 线性代数（题面取自《2020年考研数学（一）真题》，答案与解析取自《2020数学一解析》）
EXAMS.push({
  year: 2020, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['mat-elem-mat', 'mat-elem-op'],
  question: String.raw`若矩阵 $A$ 经过初等列变换化成 $B$，则（　）

（A）存在矩阵 $P$，使得 $PA=B$
（B）存在矩阵 $P$，使得 $BP=A$
（C）存在矩阵 $P$，使得 $PB=A$
（D）方程组 $AX=0$ 与 $BX=0$ 同解`,
  answer: '（B）',
  analysis: String.raw`矩阵 $A$ 经过初等列变换得到 $B$，故存在初等矩阵 $P_i\ (i=1,2,\cdots,t)$ 使
$$
AP_1P_2\cdots P_t=B,
$$
因 $P_i$ 均可逆，故有 $A=BP_t^{-1}\cdots P_2^{-1}P_1^{-1}$，记 $P=P_t^{-1}\cdots P_2^{-1}P_1^{-1}$，故应选（B）。

> 方法点评：矩阵进行一次初等行变换或一次初等列变换等价于矩阵的左边乘以一个初等矩阵或右边乘以一个初等矩阵；矩阵进行若干次初等行变换等价于矩阵左乘可逆矩阵，矩阵进行若干次初等列变换等价于矩阵右乘可逆矩阵，故有如下结论：
> （1）设 $A,B$ 为同型矩阵，则 $A$ 经过有限次初等行变换化为 $B$ 等价于存在可逆矩阵 $M$，使得 $B=MA$；
> （2）设 $A,B$ 为同型矩阵，则 $A$ 经过有限次初等列变换化为 $B$ 等价于存在可逆矩阵 $N$，使得 $B=AN$；
> （3）设 $A,B$ 为同型矩阵，则 $A$ 经过有限次初等变换化为 $B$ 等价于存在可逆矩阵 $P,Q$，使得 $B=PAQ$。`,
  source: '《2020 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2020, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['vec-express-crit', 'vec-combo'],
  question: String.raw`已知直线 $L_1:\dfrac{x-a_2}{a_1}=\dfrac{y-b_2}{b_1}=\dfrac{z-c_2}{c_1}$ 与直线 $L_2:\dfrac{x-a_3}{a_2}=\dfrac{y-b_3}{b_2}=\dfrac{z-c_3}{c_2}$ 相交于一点，记向量 $\alpha_i=\begin{pmatrix}a_i\\b_i\\c_i\end{pmatrix},i=1,2,3$，则（　）

（A）$\alpha_1$ 可由 $\alpha_2,\alpha_3$ 线性表示　（B）$\alpha_2$ 可由 $\alpha_1,\alpha_3$ 线性表示
（C）$\alpha_3$ 可由 $\alpha_1,\alpha_2$ 线性表示　（D）$\alpha_1,\alpha_2,\alpha_3$ 线性无关`,
  answer: '（C）',
  analysis: String.raw`令 $L_1:\dfrac{x-a_2}{a_1}=\dfrac{y-b_2}{b_1}=\dfrac{z-c_2}{c_1}=t$ 得
$$
L_1:\begin{cases}x=a_2+a_1t,\\y=b_2+b_1t,\\z=c_2+c_1t,\end{cases}\quad\text{即}\quad L_1:\begin{pmatrix}x\\y\\z\end{pmatrix}=\alpha_2+t\alpha_1,
$$
同理
$$
L_2:\begin{pmatrix}x\\y\\z\end{pmatrix}=\alpha_3+t\alpha_2,
$$
因为 $L_1$ 与 $L_2$ 相交，故存在 $t$，使得 $\alpha_2+t\alpha_1=\alpha_3+t\alpha_2$，即 $\alpha_3=t\alpha_1+(1-t)\alpha_2$，故 $\alpha_3$ 可由 $\alpha_1,\alpha_2$ 线性表示，应选（C）。`,
  source: '《2020 数学一解析》第 2–3 页',
});

EXAMS.push({
  year: 2020, subject: '数一', number: 13, kind: '填空', score: 5,
  ids: ['det-elimination', 'det-swap'],
  question: String.raw`行列式
$$
\begin{vmatrix}
a & 0 & -1 & 1\\
0 & a & 1 & -1\\
-1 & 1 & a & 0\\
1 & -1 & 0 & a
\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$a^4-4a^2$`,
  analysis: String.raw`$$
\begin{vmatrix}
a & 0 & -1 & 1\\
0 & a & 1 & -1\\
-1 & 1 & a & 0\\
1 & -1 & 0 & a
\end{vmatrix}
=-\begin{vmatrix}
1 & 0 & -1 & a\\
-1 & a & 1 & 0\\
0 & 1 & a & -1\\
a & -1 & 0 & 1
\end{vmatrix}
=-\begin{vmatrix}
1 & 0 & -1 & a\\
0 & a & 0 & a\\
0 & 1 & a & -1\\
0 & -1 & a & 1-a^2
\end{vmatrix}
$$
$$
=-\begin{vmatrix}
a & 0 & a\\
1 & a & -1\\
-1 & a & 1-a^2
\end{vmatrix}
=-a\begin{vmatrix}
1 & 0 & 1\\
1 & a & -1\\
-1 & a & 1-a^2
\end{vmatrix}
=-a\begin{vmatrix}
1 & 0 & 1\\
0 & a & -2\\
0 & a & 2-a^2
\end{vmatrix}
=-4a^2+a^4.
$$`,
  source: '《2020 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2020, subject: '数一', number: 20, kind: '解答', score: 11,
  ids: ['qf-orthogonal', 'qf-canonical'],
  question: String.raw`（本题满分 11 分）

设二次型 $f(x_1,x_2)=x_1^2-4x_1x_2+4x_2^2$ 经正交变换 $\begin{pmatrix}x_1\\x_2\end{pmatrix}=Q\begin{pmatrix}y_1\\y_2\end{pmatrix}$ 化为二次型 $g(y_1,y_2)=ay_1^2+4y_1y_2+by_2^2$，其中 $a\ge b$。

（Ⅰ）求 $a,b$ 的值；

（Ⅱ）求正交矩阵 $Q$。`,
  answer: String.raw`（Ⅰ）$a=4$，$b=1$；（Ⅱ）$Q=\dfrac{1}{5}\begin{pmatrix}-4&3\\3&4\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）令 $A=\begin{pmatrix}1&-2\\-2&4\end{pmatrix}$，$X=\begin{pmatrix}x_1\\x_2\end{pmatrix}$，则 $f(x_1,x_2)=X^{\mathrm{T}}AX$，
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&2\\2&\lambda-4\end{vmatrix}=\lambda(\lambda-5)=0,
$$
解得 $A$ 的特征值为 $\lambda_1=0,\lambda_2=5$；

令 $B=\begin{pmatrix}a&2\\2&b\end{pmatrix}$，$Y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，则 $g(y_1,y_2)=Y^{\mathrm{T}}BY$；

因为 $A\sim B$，所以 $\begin{cases}\mathrm{tr}\,A=\mathrm{tr}\,B,\\|A|=|B|,\end{cases}$ 即 $\begin{cases}a+b=5,\\ab=4,\end{cases}$ 解得 $a=4,b=1$。

（Ⅱ）由 $0E-A=\begin{pmatrix}-1&2\\2&-4\end{pmatrix}\to\begin{pmatrix}1&-2\\0&0\end{pmatrix}$ 得矩阵 $A$ 的属于 $\lambda_1=0$ 的特征向量 $\alpha_1=\begin{pmatrix}2\\1\end{pmatrix}$；

由 $5E-A=\begin{pmatrix}4&2\\2&1\end{pmatrix}\to\begin{pmatrix}1&\dfrac{1}{2}\\0&0\end{pmatrix}$ 得矩阵 $A$ 的属于 $\lambda_2=5$ 的特征向量 $\alpha_2=\begin{pmatrix}-1\\2\end{pmatrix}$，

令 $Q_1=\dfrac{1}{\sqrt{5}}\begin{pmatrix}2&-1\\1&2\end{pmatrix}$，则 $Q_1^{\mathrm{T}}AQ_1=\begin{pmatrix}0&0\\0&5\end{pmatrix}$；

由 $0E-B=\begin{pmatrix}-4&-2\\-2&-1\end{pmatrix}\to\begin{pmatrix}1&\dfrac{1}{2}\\0&0\end{pmatrix}$ 得矩阵 $B$ 的属于 $\lambda_1=0$ 的特征向量 $\beta_1=\begin{pmatrix}-1\\2\end{pmatrix}$；

由 $5E-B=\begin{pmatrix}1&-2\\-2&4\end{pmatrix}\to\begin{pmatrix}1&-2\\0&0\end{pmatrix}$ 得矩阵 $B$ 的属于 $\lambda_2=5$ 的特征向量 $\beta_2=\begin{pmatrix}2\\1\end{pmatrix}$，

令 $Q_2=\dfrac{1}{\sqrt{5}}\begin{pmatrix}-1&2\\2&1\end{pmatrix}$，则 $Q_2^{\mathrm{T}}BQ_2=\begin{pmatrix}0&0\\0&5\end{pmatrix}$。

由 $Q_1^{\mathrm{T}}AQ_1=Q_2^{\mathrm{T}}BQ_2$ 得 $B=Q_2Q_1^{\mathrm{T}}AQ_1Q_2^{\mathrm{T}}$，

所求的正交矩阵为
$$
Q=Q_1Q_2^{\mathrm{T}}=\dfrac{1}{\sqrt{5}}\begin{pmatrix}2&-1\\1&2\end{pmatrix}\cdot\dfrac{1}{\sqrt{5}}\begin{pmatrix}-1&2\\2&1\end{pmatrix}=\dfrac{1}{5}\begin{pmatrix}-4&3\\3&4\end{pmatrix}.
$$`,
  source: '《2020 数学一解析》第 7 页',
});

EXAMS.push({
  year: 2020, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['eig-similar', 'eig-diag-crit'],
  question: String.raw`（本题满分 11 分）

设 $A$ 为 2 阶矩阵，$P=(\alpha,A\alpha)$，其中 $\alpha$ 是非零向量且不是 $A$ 的特征向量。

（Ⅰ）证明 $P$ 为可逆矩阵；

（Ⅱ）若 $A^2\alpha+A\alpha-6\alpha=0$，求 $P^{-1}AP$，并判断 $A$ 是否相似于对角矩阵。`,
  answer: String.raw`（Ⅰ）$P$ 可逆；（Ⅱ）$P^{-1}AP=\begin{pmatrix}0&6\\1&-1\end{pmatrix}$，$A$ 可以相似对角化`,
  analysis: String.raw`（Ⅰ）方法一（反证法）

设 $P$ 不可逆，则 $\alpha,A\alpha$ 线性相关，即 $\alpha,A\alpha$ 成比例，于是 $\alpha=kA\alpha$ 或 $A\alpha=l\alpha$。

因为 $\alpha$ 不是 $A$ 的特征向量，所以 $A\alpha=l\alpha$ 不可能；若 $\alpha=kA\alpha$，因为 $\alpha$ 为非零向量，所以 $k\ne 0$，于是 $A\alpha=\dfrac{1}{k}\alpha$，矛盾，故 $\alpha,A\alpha$ 线性无关，即 $P$ 可逆。

方法二（反证法）

设 $P$ 不可逆，即 $\alpha,A\alpha$ 线性相关，则存在不全为零的常数 $k_1,k_2$，使得
$$
k_1\alpha+k_2A\alpha=0.
$$
显然 $k_2\ne 0$，因为若 $k_2=0$，则 $k_1\alpha=0$，由 $\alpha\ne 0$ 得 $k_1=0$，矛盾，故 $k_2\ne 0$。由 $k_1\alpha+k_2A\alpha=0$ 得 $A\alpha=-\dfrac{k_1}{k_2}\alpha$，矛盾，故 $P$ 可逆。

（Ⅱ）由 $AP=A(\alpha,A\alpha)=(A\alpha,A^2\alpha)=(A\alpha,6\alpha-A\alpha)=P\begin{pmatrix}0&6\\1&-1\end{pmatrix}$ 得
$$
P^{-1}AP=\begin{pmatrix}0&6\\1&-1\end{pmatrix}.
$$
设 $B=\begin{pmatrix}0&6\\1&-1\end{pmatrix}$，则 $A\sim B$。由
$$
|\lambda E-B|=\begin{vmatrix}\lambda&-6\\-1&\lambda+1\end{vmatrix}=(\lambda+3)(\lambda-2)=0,
$$
得 $\lambda_1=-3,\lambda_2=2$，因为 $\lambda_1\ne\lambda_2$，所以 $B$ 可以相似对角化，则 $A$ 也可以相似对角化。`,
  source: '《2020 数学一解析》第 8 页',
});
