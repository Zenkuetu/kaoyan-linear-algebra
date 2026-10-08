// 1999 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 1999 年卷；答案与解析取自《1999 年数学三真题答案解析》）
EXAMS.push({
  year: 1999, subject: '数三', number: 103, kind: '填空', score: 3,
  ids: ['mat-power', 'mat-mult', 'mat-def'],
  label: '填空题第 3 题',
  question: String.raw`设 $A=\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}$，而 $n\ge 2$ 为正整数，则 $A^n-2A^{n-1}=$ $\underline{\qquad}$。`,
  answer: String.raw`$O$（$n$ 阶零矩阵）。`,
  analysis: String.raw`【解析】$A=\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}$，根据矩阵的乘法运算法则以及矩阵的运算，即对每一个元素都要计算，有
$$
A^2=\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}=\begin{pmatrix}2&0&2\\0&4&0\\2&0&2\end{pmatrix}=2\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}=2A,
$$
所以
$$
A^n-2A^{n-1}=A^{n-2}(A^2-2A)=O.
$$`,
  source: '《1999 年数学三试题解析》第 1 页',
});

EXAMS.push({
  year: 1999, subject: '数三', number: 203, kind: '选择', score: 3,
  ids: ['vec-combo', 'vec-express-crit', 'vec-rank-table'],
  label: '选择题第 3 题',
  question: String.raw`设向量 $\beta$ 可由向量组 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 线性表示，但不能由向量组（Ⅰ）：$\alpha_1,\alpha_2,\cdots,\alpha_{m-1}$ 线性表示，记向量组（Ⅱ）：$\alpha_1,\alpha_2,\cdots,\alpha_{m-1},\beta$，则（　　）
（A）$\alpha_m$ 不能由（Ⅰ）线性表示，也不能由（Ⅱ）线性表示
（B）$\alpha_m$ 不能由（Ⅰ）线性表示，但可由（Ⅱ）线性表示
（C）$\alpha_m$ 可由（Ⅰ）线性表示，也可由（Ⅱ）线性表示
（D）$\alpha_m$ 可由（Ⅰ）线性表示，但不可由（Ⅱ）线性表示`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解析】方法 1：$\beta$ 可由向量组 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 线性表示，则存在常数 $k_1,k_2,\cdots,k_m$ 使得
$$
\beta=k_1\alpha_1+k_2\alpha_2+\cdots+k_m\alpha_m.\tag{*}
$$
$\beta$ 不能由 $\alpha_1,\alpha_2,\cdots,\alpha_{m-1}$ 线性表示，从而知 $k_m\ne 0$（若 $k_m=0$，则 $\beta=k_1\alpha_1+k_2\alpha_2+\cdots+k_{m-1}\alpha_{m-1}$，即 $\beta$ 可由 $\alpha_1,\alpha_2,\cdots,\alpha_{m-1}$ 线性表示，矛盾）。

$(*)$ 可变为
$$
k_m\alpha_m=\beta-k_1\alpha_1-k_2\alpha_2-\cdots-k_{m-1}\alpha_{m-1},
$$
上式两边同除以 $k_m$ 得
$$
\alpha_m=\frac{1}{k_m}(\beta-k_1\alpha_1-k_2\alpha_2-\cdots-k_{m-1}\alpha_{m-1}),
$$
$\alpha_m$ 可由（Ⅱ）线性表示，排除（A）（D）。

$\alpha_m$ 不能由 $\alpha_1,\alpha_2,\cdots,\alpha_{m-1}$ 线性表示。若能，则存在常数 $l_1,l_2,\cdots,l_{m-1}$ 使得 $\alpha_m=l_1\alpha_1+l_2\alpha_2+\cdots+l_{m-1}\alpha_{m-1}$，代入 $(*)$ 得
$$
\beta=k_1\alpha_1+k_2\alpha_2+\cdots+k_m(l_1\alpha_1+l_2\alpha_2+\cdots+l_{m-1}\alpha_{m-1})
=(k_1+l_1k_m)\alpha_1+(k_2+l_2k_m)\alpha_2+\cdots+(k_{m-1}+l_{m-1}k_m)\alpha_{m-1},
$$
即 $\beta$ 可由 $\alpha_1,\alpha_2,\cdots,\alpha_{m-1}$ 线性表示，矛盾，排除（C）。应选（B）。

方法 2：特取
$$
\alpha_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\ \alpha_2=\begin{pmatrix}0\\1\\0\end{pmatrix},\ \alpha_3=\begin{pmatrix}0\\0\\1\end{pmatrix},\ b=\begin{pmatrix}1\\1\\1\end{pmatrix},
$$
则 $b=\alpha_1+\alpha_2+\alpha_3$，即 $b$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示。

若存在常数 $k_1,k_2$，使 $b=k_1\alpha_1+k_2\alpha_2$，因为 $r(\alpha_1,\alpha_2)=2\ne r(\alpha_1,\alpha_2,b)=3$，所以方程 $b=k_1\alpha_1+k_2\alpha_2$ 系数矩阵的秩不等于增广矩阵的秩，故方程组无解，即不存在常数 $k_1,k_2$ 使 $b=k_1\alpha_1+k_2\alpha_2$，$b$ 不能由 $\alpha_1,\alpha_2$ 线性表示（符合题目条件，实为满足条件的特例）。

此时，$\alpha_3$ 不能由（Ⅰ）$\alpha_1,\alpha_2$ 线性表示。若存在常数 $l_1,l_2$ 使 $\alpha_3=l_1\alpha_1+l_2\alpha_2$，因为 $r(\alpha_1,\alpha_2)=2\ne r(\alpha_1,\alpha_2,\alpha_3)=3$，所以方程 $\alpha_3=l_1\alpha_1+l_2\alpha_2$ 系数矩阵的秩不等于增广矩阵的秩，故方程组无解，即不存在常数 $l_1,l_2$ 使 $\alpha_3=l_1\alpha_1+l_2\alpha_2$，故 $\alpha_3$ 不能由（Ⅰ）$\alpha_1,\alpha_2$ 线性表示；

但 $\alpha_3=b-\alpha_1-\alpha_2$，即 $\alpha_3$ 可由（Ⅱ）$\alpha_1,\alpha_2,b$ 线性表示，故应选（B）。`,
  source: '《1999 年数学三试题解析》第 4–5 页',
});

EXAMS.push({
  year: 1999, subject: '数三', number: 204, kind: '选择', score: 3,
  ids: ['eig-similar', 'eig-similar-prop', 'eig-poly'],
  label: '选择题第 4 题',
  question: String.raw`设 $A,B$ 为 $n$ 阶矩阵，且 $A$ 与 $B$ 相似，$E$ 为 $n$ 阶单位矩阵，则（　　）
（A）$\lambda E-A=\lambda E-B$
（B）$A$ 与 $B$ 有相同的特征值和特征向量
（C）$A$ 与 $B$ 都相似于一个对角矩阵
（D）对任意常数 $t$，$tE-A$ 与 $tE-B$ 相似`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解析】方法 1：$A$ 相似于 $B$，由矩阵相似的定义，存在可逆矩阵 $P$ 使 $P^{-1}AP=B$，则
$$
P^{-1}(tE-A)P=P^{-1}tEP-P^{-1}AP=tE-B,
$$
由矩阵相似的定义，$tE-A$ 与 $tE-B$ 相似，应选（D）。

方法 2：排除法。

（A）未必成立。若 $\lambda E-A=\lambda E-B$，则 $A=B$，而已知只是相似。

（B）未必成立。$A$ 与 $B$ 相似，由矩阵相似的定义，存在可逆矩阵 $P$ 使 $P^{-1}AP=B$，从而
$$
\lambda E-B=\lambda E-P^{-1}AP=\lambda P^{-1}P-P^{-1}AP=P^{-1}(\lambda E-A)P,
$$
所以
$$
|\lambda E-B|=|P^{-1}(\lambda E-A)P|=|P^{-1}|\cdot|\lambda E-A|\cdot|P|=|\lambda E-A|,
$$
从而 $A,B$ 有相同的特征多项式，即有相同的特征值。

若 $Ax=\lambda x$，由 $P^{-1}AP=B$ 得 $PBP^{-1}=A$，即 $PBP^{-1}x=Ax=\lambda x$，两边用 $P^{-1}$ 左乘得
$$
B(P^{-1}x)=\lambda(P^{-1}x),
$$
由特征值与特征向量的定义，$B$ 有特征值 $\lambda$ 与特征向量 $P^{-1}x$，而 $A$ 的特征值 $\lambda$ 对应的特征向量是 $x$，不一定相同。

（C）未必成立。$A,B$ 相似时，也可能它们都不可相似对角化。例如
$$
A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad B=\begin{pmatrix}0&0\\1&0\end{pmatrix},
$$
存在可逆矩阵 $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$，使
$$
P^{-1}AP=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}=\begin{pmatrix}0&0\\1&0\end{pmatrix}=B,
$$
即由矩阵相似的定义知 $A\sim B$，且 $A,B$ 都不能相似于对角阵。

若 $B$ 能相似于对角阵，即 $B$ 可相似对角化。先求特征值，特征多项式为
$$
|\lambda E-B|=\begin{vmatrix}\lambda&0\\-1&\lambda\end{vmatrix}=\lambda^2,
$$
令 $|\lambda E-B|=0$ 得 $B$ 的两个特征值 $0$。若 $B$ 相似于对角阵，则存在可逆矩阵 $P$，使得
$$
P^{-1}BP=\begin{pmatrix}0&0\\0&0\end{pmatrix},
$$
上式两端同时左乘 $P$、右乘 $P^{-1}$，得
$$
PP^{-1}BPP^{-1}=B=P\begin{pmatrix}0&0\\0&0\end{pmatrix}P^{-1}=\begin{pmatrix}0&0\\0&0\end{pmatrix},
$$
与 $B=\begin{pmatrix}0&0\\1&0\end{pmatrix}$ 矛盾，故 $B$ 不可相似对角化。

同理 $A$ 也因特征值全为 $0$，若能相似对角化则必为零矩阵，与 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ 矛盾，故 $A$ 也不可相似对角化。`,
  source: '《1999 年数学三试题解析》第 5–7 页',
});

EXAMS.push({
  year: 1999, subject: '数三', number: 309, kind: '解答', score: 9,
  ids: ['mat-adj-identity', 'eig-def', 'eig-property'],
  label: '第九题',
  question: String.raw`（本题满分 9 分）设矩阵 $A=\begin{pmatrix}a&-1&c\\5&b&3\\1-c&0&-a\end{pmatrix}$，且 $|A|=-1$。又设 $A$ 的伴随矩阵 $A^*$ 有特征值 $\lambda_0$，属于 $\lambda_0$ 的特征向量为 $\alpha=(-1,-1,1)^{\mathrm{T}}$，求 $a,b,c$ 及 $\lambda_0$ 的值。`,
  answer: String.raw`$a=2,\ b=-3,\ c=2,\ \lambda_0=1$。`,
  analysis: String.raw`由 $AA^{*}=|A|E=-E$ 及 $A^{*}\alpha=\lambda_0\alpha$，两边左乘 $A$，得
$$
AA^{*}\alpha=\lambda_0A\alpha,\qquad\text{即}\qquad -E\alpha=\lambda_0A\alpha,
$$
因 $\alpha\ne 0$，故 $\lambda_0\ne 0$，于是
$$
A\alpha=-\frac{1}{\lambda_0}\alpha,
$$
即 $\alpha=(-1,-1,1)^{\mathrm{T}}$ 是 $A$ 的特征向量，对应的特征值为 $\mu=-\dfrac{1}{\lambda_0}$。

由
$$
A\alpha=\begin{pmatrix}a&-1&c\\5&b&3\\1-c&0&-a\end{pmatrix}\begin{pmatrix}-1\\-1\\1\end{pmatrix}
=\begin{pmatrix}-a+1+c\\-b-2\\-1+c-a\end{pmatrix}
=\mu\begin{pmatrix}-1\\-1\\1\end{pmatrix},
$$
得
$$
\begin{cases}
-a+1+c=-\mu,\\
-b-2=-\mu,\\
-1+c-a=\mu.
\end{cases}
$$
由第一、三两式得 $-a+1+c=-(-1+c-a)$，即 $2c=2a$，故 $a=c$；代回第一式得 $1=-\mu$，即 $\mu=-1$，从而 $\lambda_0=-\dfrac{1}{\mu}=1$；再由第二式得 $b=\mu-2=-3$。

最后由
$$
|A|=\begin{vmatrix}a&-1&a\\5&-3&3\\1-a&0&-a\end{vmatrix}=a-3=-1,
$$
得 $a=2$，从而 $c=2$。

所以 $a=2$，$b=-3$，$c=2$，$\lambda_0=1$。`,
  source: '《1999 年数学三真题答案解析》',
});

EXAMS.push({
  year: 1999, subject: '数三', number: 310, kind: '解答', score: 7,
  ids: ['qf-positive-def', 'qf-positive-crit', 'eig-symmetric'],
  label: '第十题',
  question: String.raw`（本题满分 7 分）设 $A$ 为 $m\times n$ 实矩阵，$E$ 为 $n$ 阶单位矩阵，已知矩阵 $B=\lambda E+A^{\mathrm{T}}A$，试证：当 $\lambda>0$ 时，矩阵 $B$ 为正定矩阵。`,
  answer: String.raw`证明见解析。`,
  analysis: String.raw`【解析】方法 1：$B^{\mathrm{T}}=(\lambda E+A^{\mathrm{T}}A)^{\mathrm{T}}=\lambda E^{\mathrm{T}}+(A^{\mathrm{T}}A)^{\mathrm{T}}=\lambda E+A^{\mathrm{T}}(A^{\mathrm{T}})^{\mathrm{T}}=\lambda E+A^{\mathrm{T}}A=B$，根据实对称矩阵的定义，故 $B$ 是实对称阵。

对任意的非零向量 $x$，$x^{\mathrm{T}}A^{\mathrm{T}}=(Ax)^{\mathrm{T}}$，有
$$
x^{\mathrm{T}}(\lambda E+A^{\mathrm{T}}A)x=x^{\mathrm{T}}(\lambda E)x+x^{\mathrm{T}}(A^{\mathrm{T}}A)x=\lambda x^{\mathrm{T}}x+x^{\mathrm{T}}A^{\mathrm{T}}Ax=\lambda x^{\mathrm{T}}x+(Ax)^{\mathrm{T}}Ax.
$$
因 $x\ne 0$，故有 $x^{\mathrm{T}}x>0$。（设 $x=[a_1,a_2,\cdots,a_n]^{\mathrm{T}}\ne 0$，则 $a_i\ (i=1,2,\cdots,n)$ 中至少一个不为零，故 $x^{\mathrm{T}}x=\sum\limits_{i=1}^n a_i^2>0$。）

$(Ax)^{\mathrm{T}}Ax\ge 0$。（设 $Ax=[b_1,b_2,\cdots,b_n]$，$(Ax)^{\mathrm{T}}Ax=\sum\limits_{i=1}^n b_i^2\ge 0$，因为 $Ax$ 有可能为零，即有可能 $b_i=0\ (i=1,2,\cdots,n)$，故这里可能取等号。）

故当 $\lambda>0$ 时，$\lambda x^{\mathrm{T}}x>0$。对任意的 $x\ne 0$，均有
$$
x^{\mathrm{T}}Bx=x^{\mathrm{T}}(\lambda E+A^{\mathrm{T}}A)x=\lambda x^{\mathrm{T}}x+(Ax)^{\mathrm{T}}Ax>0,
$$
由正定矩阵的定义，得证：$B$ 是正定矩阵。

方法 2：$B$ 正定 $\Leftrightarrow B$ 的全部特征值大于零。

设 $B$ 有特征值 $\mu$，对应的特征向量为 $x$，由特征值和特征向量的定义，$Bx=\mu x$，将 $B=\lambda E+A^{\mathrm{T}}A$ 代入，得
$$
(\lambda E+A^{\mathrm{T}}A)x=\mu x,\quad\text{其中 }x\ne 0.
$$
上式两边左乘 $x^{\mathrm{T}}$，得
$$
x^{\mathrm{T}}(\lambda E+A^{\mathrm{T}}A)x=\lambda x^{\mathrm{T}}x+x^{\mathrm{T}}A^{\mathrm{T}}Ax=\lambda x^{\mathrm{T}}x+(Ax)^{\mathrm{T}}(Ax)=\mu x^{\mathrm{T}}x,
$$
变形得
$$
(Ax)^{\mathrm{T}}(Ax)=(\mu-\lambda)x^{\mathrm{T}}x.
$$
因 $x\ne 0$，设 $x=[c_1,c_2,\cdots,c_n]^{\mathrm{T}}\ne 0$，则 $c_i\ (i=1,2,\cdots,n)$ 中至少一个不为零，故 $x^{\mathrm{T}}x=\sum\limits_{i=1}^n c_i^2>0$。

$(Ax)^{\mathrm{T}}(Ax)\ge 0$（设 $Ax=[d_1,d_2,\cdots,d_n]$，$(Ax)^{\mathrm{T}}Ax=\sum\limits_{i=1}^n d_i^2\ge 0$，因为 $Ax$ 有可能为零，即有可能 $d_i=0\ (i=1,2,\cdots,n)$，故这里可能取等号），则
$$
\mu-\lambda=\frac{(Ax)^{\mathrm{T}}(Ax)}{x^{\mathrm{T}}x}\ge 0.
$$
所以，当 $\lambda>0$ 时，有 $\mu\ge\lambda>0$，即知 $B$ 的特征值 $\mu$ 全大于零，$B$ 是正定矩阵。`,
  source: '《1999 年数学三试题解析》第 13–14 页',
});
