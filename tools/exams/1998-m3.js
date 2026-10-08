// 1998 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 1998 年卷；答案与解析取自《1998 年数学三真题答案解析》）
EXAMS.push({
  year: 1998, subject: '数三', number: 104, kind: '填空', score: 3,
  ids: ['mat-adj-identity', 'mat-eq-solve', 'mat-inv-method'],
  label: '填空题第 4 题',
  question: String.raw`设矩阵 $A,B$ 满足 $A^*BA=2BA-8E$，其中 $A=\begin{pmatrix}1&0&0\\0&-2&0\\0&0&1\end{pmatrix}$，$E$ 为单位矩阵，$A^*$ 为 $A$ 的伴随矩阵，则 $B=$ $\underline{\qquad}$。`,
  answer: String.raw`$B=\begin{pmatrix}2&0&0\\0&-4&0\\0&0&2\end{pmatrix}$。`,
  analysis: String.raw`【解析】由题设 $A^*BA=2BA-8E$，
$$
|A|=-2\ne 0,
$$
所以 $A$ 可逆。上式两边左乘 $A$，右乘 $A^{-1}$，得
$$
AA^*BAA^{-1}=2ABAA^{-1}-8AA^{-1},
$$
$$
|A|B=2AB-8E\quad(\text{利用公式：}AA^*=|A|E,\ AA^{-1}=E),
$$
$$
|A|B-2AB=-8E\quad(\text{移项}),
$$
$$
(|A|E-2A)B=-8E\quad(\text{矩阵乘法的运算法则}).
$$
将 $|A|=-2$ 代入上式，整理得
$$
\frac{1}{4}(E+A)B=E.
$$
由矩阵可逆的定义，知 $E+A,B$ 均可逆，且
$$
B=4(E+A)^{-1}=4\begin{pmatrix}\dfrac{1}{2}&0&0\\0&-1&0\\0&0&\dfrac{1}{2}\end{pmatrix}=\begin{pmatrix}2&0&0\\0&-4&0\\0&0&2\end{pmatrix}.
$$`,
  source: '《1998 年数学（三）真题解析》第 2 页',
});

EXAMS.push({
  year: 1998, subject: '数三', number: 203, kind: '选择', score: 3,
  ids: ['eq-AX-O-AB-O', 'eq-homo-sol', 'mat-rank-ineq'],
  label: '选择题第 3 题',
  question: String.raw`齐次线性方程组
$$
\begin{cases}\lambda x_1+x_2+\lambda^2x_3=0,\\x_1+\lambda x_2+x_3=0,\\x_1+x_2+\lambda x_3=0\end{cases}
$$
的系数矩阵记为 $A$。若存在 $3$ 阶矩阵 $B\ne O$，使得 $AB=O$，则（　　）
（A）$\lambda=-2$ 且 $|B|=0$　　（B）$\lambda=-2$ 且 $|B|\ne 0$
（C）$\lambda=1$ 且 $|B|=0$　　（D）$\lambda=1$ 且 $|B|\ne 0$`,
  answer: String.raw`（C）`,
  analysis: String.raw`【解析】方法 1：由 $AB=O$ 知 $r(A)+r(B)\le 3$，又 $A\ne O,B\ne O$，于是 $1\le r(A)<3$，$1\le r(B)<3$，故 $|A|=0,|B|=0$，即
$$
|A|=\begin{vmatrix}\lambda&1&\lambda^2\\1&\lambda&1\\1&1&\lambda\end{vmatrix}=\begin{vmatrix}0&1-\lambda&0\\0&\lambda-1&1-\lambda\\1&1&\lambda\end{vmatrix}=\begin{vmatrix}1-\lambda&0\\\lambda-1&1-\lambda\end{vmatrix}=(1-\lambda)^2=0,
$$
得 $\lambda=1$。应选（C）。

方法 2：由 $AB=O$ 知 $r(A)+r(B)\le 3$，又 $A\ne O,B\ne O$，于是 $1\le r(A)<3$，$1\le r(B)<3$，故 $|B|=0$。

显然，$\lambda=1$ 时 $A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$，有 $1\le r(A)<3$，故应选（C）。

作为选择题，只需在 $\lambda=-2$ 与 $\lambda=1$ 中选择一个，因而可以用特殊值代入法。

评注：对于条件 $AB=O$ 应当有两个思路：一是 $B$ 的列向量是齐次方程组 $Ax=0$ 的解；二是秩的信息，即 $r(A)+r(B)\le n$，要有这两种思考问题的意识。`,
  source: '《1998 年数学（三）真题解析》第 4–5 页',
});

EXAMS.push({
  year: 1998, subject: '数三', number: 204, kind: '选择', score: 3,
  ids: ['mat-rank', 'det-elimination', 'mat-rank-crit'],
  label: '选择题第 4 题',
  question: String.raw`设 $n(n\ge 3)$ 阶矩阵
$$
A=\begin{pmatrix}1&a&a&\cdots&a\\a&1&a&\cdots&a\\a&a&1&\cdots&a\\\vdots&\vdots&\vdots&&\vdots\\a&a&a&\cdots&1\end{pmatrix},
$$
若矩阵 $A$ 的秩为 $n-1$，则 $a$ 必为（　　）
（A）$1$　　（B）$\dfrac{1}{1-n}$　　（C）$-1$　　（D）$\dfrac{1}{n-1}$`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解析】
$$
A=\begin{pmatrix}1&a&a&\cdots&a\\a&1&a&\cdots&a\\a&a&1&\cdots&a\\\vdots&\vdots&\vdots&&\vdots\\a&a&a&\cdots&1\end{pmatrix}\xrightarrow{(1)}
\begin{pmatrix}1&a&a&\cdots&a\\a-1&1-a&0&\cdots&0\\a-1&0&1-a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\a-1&0&0&\cdots&1-a\end{pmatrix}
\xrightarrow{(2)}
\begin{pmatrix}1+(n-1)a&a&a&\cdots&a\\0&1-a&0&\cdots&0\\0&0&1-a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1-a\end{pmatrix}.
$$
其中 (1) 变换：将 1 行乘以 $(-1)$ 再分别加到其余各行；(2) 变换：将其余各列分别加到第 1 列。

由阶梯形矩阵知，当 $1+(n-1)a=0$，即 $a=\dfrac{1}{1-n}$ 时，有 $r(A)=n-1$，故应选（B）。`,
  source: '《1998 年数学（三）真题解析》第 5 页',
});

EXAMS.push({
  year: 1998, subject: '数三', number: 309, kind: '解答', score: 9,
  ids: ['mat-power', 'eig-vector-space', 'eig-def'],
  label: '计算题第 9 题',
  question: String.raw`（本题满分 9 分）设向量 $\alpha=(a_1,a_2,\cdots,a_n)^{\mathrm{T}}$，$\beta=(b_1,b_2,\cdots,b_n)^{\mathrm{T}}$ 都是非零向量，且满足条件 $\alpha^{\mathrm{T}}\beta=0$。记 $n$ 阶矩阵 $A=\alpha\beta^{\mathrm{T}}$。求：

（1）$A^2$；

（2）矩阵 $A$ 的特征值和特征向量。`,
  answer: String.raw`（1）$A^2=O$；（2）$A$ 的全部特征值为 $\lambda=0$（$n$ 重根）；属于 $\lambda=0$ 的全部特征向量为 $k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $\xi_1=(-b_2,b_1,0,\cdots,0)^{\mathrm{T}},\xi_2=(-b_3,0,b_1,\cdots,0)^{\mathrm{T}},\cdots,\xi_{n-1}=(-b_n,0,0,\cdots,b_1)^{\mathrm{T}}$，$k_1,k_2,\cdots,k_{n-1}$ 为不全为零的任意常数。`,
  analysis: String.raw`【解析】（1）对等式 $\alpha^{\mathrm{T}}\beta=0$ 两边取转置，有 $(\alpha^{\mathrm{T}}\beta)^{\mathrm{T}}=\beta^{\mathrm{T}}\alpha=0$，即 $\beta^{\mathrm{T}}\alpha=0$。

利用 $\beta^{\mathrm{T}}\alpha=0$ 及矩阵乘法的运算法则，有
$$
A^2=(\alpha\beta^{\mathrm{T}})^2=\alpha\beta^{\mathrm{T}}\alpha\beta^{\mathrm{T}}=\alpha(\beta^{\mathrm{T}}\alpha)\beta^{\mathrm{T}}=\alpha 0\beta^{\mathrm{T}}=O,
$$
即 $A^2$ 是 $n$ 阶零矩阵。

（2）设 $\lambda$ 是 $A$ 的任一特征值，$x(x\ne 0)$ 是 $A$ 属于特征值 $\lambda$ 的特征向量，即 $Ax=\lambda x$。

对上式两边左乘 $A$ 得 $A^2x=A\lambda x=\lambda(Ax)=\lambda(\lambda x)=\lambda^2x$，由（1）的结果 $A^2=O$，得 $\lambda^2x=A^2x=0$，因 $x\ne 0$，故 $\lambda=0$（$n$ 重根），即矩阵的全部特征值为零。

下面求 $A$ 的特征向量：先将 $A$ 写成矩阵形式
$$
A=\alpha\beta^{\mathrm{T}}=\begin{pmatrix}a_1\\a_2\\\vdots\\a_n\end{pmatrix}(b_1,b_2,\cdots,b_n)=\begin{pmatrix}a_1b_1&a_1b_2&\cdots&a_1b_n\\a_2b_1&a_2b_2&\cdots&a_2b_n\\\vdots&\vdots&&\vdots\\a_nb_1&a_nb_2&\cdots&a_nb_n\end{pmatrix}.
$$
不妨设 $a_1\ne 0,b_1\ne 0$，则有
$$
(0E-A)=\begin{pmatrix}-a_1b_1&-a_1b_2&\cdots&-a_1b_n\\-a_2b_1&-a_2b_2&\cdots&-a_2b_n\\\vdots&\vdots&&\vdots\\-a_nb_1&-a_nb_2&\cdots&-a_nb_n\end{pmatrix}\xrightarrow{1\text{ 行}/(-a_1)}\begin{pmatrix}b_1&b_2&\cdots&b_n\\-a_2b_1&-a_2b_2&\cdots&-a_2b_n\\\vdots&\vdots&&\vdots\\-a_nb_1&-a_nb_2&\cdots&-a_nb_n\end{pmatrix}
$$
$$
\xrightarrow{1\text{ 行}\times a_i\text{ 加到 }i\text{ 行}(i=2,\cdots,n)}\begin{pmatrix}b_1&b_2&\cdots&b_n\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix}.
$$
于是得方程组 $(0E-A)x=0$ 的同解方程组 $b_1x_1+b_2x_2+\cdots+b_nx_n=0$，这样基础解系所含向量个数为 $n-r(0E-A)=n-1$。

选 $x_2,\cdots,x_n$ 为自由未知量，将它们的组值 $(b_1,0,\cdots,0),(0,b_1,\cdots,0),\cdots,(0,0,\cdots,b_1)$ 代入，可解得基础解系为
$$
\xi_1=(-b_2,b_1,0,\cdots,0),\quad \xi_2=(-b_3,0,b_1,\cdots,0),\quad \cdots,\quad \xi_{n-1}=(-b_n,0,0,\cdots,b_1).
$$
则 $A$ 的属于 $\lambda=0$ 的全部特征向量为 $k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $k_1,k_2,\cdots,k_{n-1}$ 为不全为零的任意常数。`,
  source: '《1998 年数学（三）真题解析》第 10–11 页',
});

EXAMS.push({
  year: 1998, subject: '数三', number: 310, kind: '解答', score: 7,
  ids: ['eig-diag-method', 'qf-positive-crit', 'eig-ops'],
  label: '计算题第 10 题',
  question: String.raw`（本题满分 7 分）设矩阵 $A=\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}$，矩阵 $B=(kE+A)^2$，其中 $k$ 为实数，$E$ 为单位矩阵。求对角矩阵 $\Lambda$，使 $B$ 与 $\Lambda$ 相似，并求 $k$ 为何值时，$B$ 为正定矩阵。`,
  answer: String.raw`$\Lambda=\begin{pmatrix}(k+2)^2&0&0\\0&(k+2)^2&0\\0&0&k^2\end{pmatrix}$；当 $k\ne -2$ 且 $k\ne 0$ 时，$B$ 为正定矩阵。`,
  analysis: String.raw`【解析】方法 1：由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&0&-1\\0&\lambda-2&0\\-1&0&\lambda-1\end{vmatrix}=(\lambda-2)\begin{vmatrix}\lambda-1&-1\\-1&\lambda-1\end{vmatrix}=\lambda(\lambda-2)^2,
$$
可得 $A$ 的特征值是 $\lambda_1=\lambda_2=2,\lambda_3=0$。

那么 $kE+A$ 的特征值是 $k+2,k+2,k$，而 $B=(kE+A)^2$ 的特征值是 $(k+2)^2,(k+2)^2,k^2$。

又由题设知 $A$ 是实对称矩阵，则 $A^{\mathrm{T}}=A$，故
$$
B^{\mathrm{T}}=[(kE+A)^2]^{\mathrm{T}}=[(kE+A)^{\mathrm{T}}]^2=(kE+A)^2=B,
$$
即 $B$ 也是实对称矩阵，故 $B$ 必可相似对角化，且
$$
B\sim\Lambda=\begin{pmatrix}(k+2)^2&0&0\\0&(k+2)^2&0\\0&0&k^2\end{pmatrix}.
$$
当 $k\ne -2$ 且 $k\ne 0$ 时，$B$ 的全部特征值大于零，这时 $B$ 为正定矩阵。

方法 2：由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&0&-1\\0&\lambda-2&0\\-1&0&\lambda-1\end{vmatrix}=(\lambda-2)\begin{vmatrix}\lambda-1&-1\\-1&\lambda-1\end{vmatrix}=\lambda(\lambda-2)^2,
$$
可得 $A$ 的特征值是 $\lambda_1=\lambda_2=2,\lambda_3=0$。

因为 $A$ 是实对称矩阵，故存在可逆矩阵 $P$ 使
$$
P^{-1}AP=\Lambda=\begin{pmatrix}2&0&0\\0&2&0\\0&0&0\end{pmatrix},\quad\text{即 }A=P\Lambda P^{-1}.
$$
那么
$$
B=(kE+A)^2=(kPP^{-1}+P\Lambda P^{-1})^2=[P(kE+\Lambda)P^{-1}]^2=P(kE+\Lambda)P^{-1}P(kE+\Lambda)P^{-1}=P(kE+\Lambda)^2P^{-1}.
$$
即 $P^{-1}BP=(kE+\Lambda)^2$。故
$$
B\sim\Lambda=\begin{pmatrix}(k+2)^2&0&0\\0&(k+2)^2&0\\0&0&k^2\end{pmatrix}.
$$
当 $k\ne -2$ 且 $k\ne 0$ 时，$B$ 的全部特征值大于零，这时 $B$ 为正定矩阵。

【相关知识点】1. 特征值的性质：若 $A$ 有特征值 $\lambda$，则 $A$ 的特征多项式 $f(A)$ 有特征值 $f(\lambda)$。

2. 矩阵正定的充要条件是特征值全大于零。`,
  source: '《1998 年数学（三）真题解析》第 11–12 页',
});
