// 2006 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2006 年卷；答案与解析取自《2006 年数学三真题答案解析》）
EXAMS.push({
  year: 2006, subject: '数三', number: 4, kind: '填空', score: 4,
  ids: ['mat-eq-solve', 'mat-invertible-crit', 'det-product'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}2&1\\-1&2\end{pmatrix}$，$E$ 为 $2$ 阶单位矩阵，矩阵 $B$ 满足 $BA=B+2E$，则 $|B|=$ $\underline{\qquad}$。`,
  answer: String.raw`$2$。`,
  analysis: String.raw`【详解】由已知条件 $BA=B+2E$ 变形得，$BA-2E=B\Rightarrow B(A-E)=2E$，两边取行列式，得
$$
|B|\cdot|A-E|=|2E|=4|E|=4,
$$
其中
$$
A-E=\begin{pmatrix}2&1\\-1&2\end{pmatrix}-\begin{pmatrix}1&0\\0&1\end{pmatrix}=\begin{pmatrix}1&1\\-1&1\end{pmatrix},\quad |A-E|=\begin{vmatrix}1&1\\-1&1\end{vmatrix}=2,
$$
因此
$$
|B|=\frac{|2E|}{|A-E|}=\frac{4}{2}=2.
$$`,
  source: '《2006 年数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2006, subject: '数三', number: 12, kind: '选择', score: 4,
  ids: ['vec-indep-concl', 'mat-rank-ineq', 'vec-indep-def'],
  question: String.raw`设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 均为 $n$ 维列向量，$A$ 是 $m\times n$ 矩阵，下列选项正确的是（　　）
（A）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关
（B）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性无关
（C）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关
（D）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性无关`,
  answer: String.raw`（A）`,
  analysis: String.raw`【详解】方法 1：若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则由线性相关定义存在不全为 $0$ 的数 $k_1,k_2,\cdots,k_s$，使得
$$
k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0.
$$
为了得到 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 的形式，用 $A$ 左乘等式两边，得
$$
k_1A\alpha_1+k_2A\alpha_2+\cdots+k_sA\alpha_s=0.\tag{①}
$$
于是存在不全为 $0$ 的数 $k_1,k_2,\cdots,k_s$ 使得①成立，所以 $A\alpha_1,A\alpha_2,\cdots,A\alpha_s$ 线性相关。

方法 2：如果用秩来解，则更加简单明了。只要熟悉两个基本性质，它们是：

1. $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关 $\Leftrightarrow r(\alpha_1,\alpha_2,\cdots,\alpha_s)<s$；2. $r(AB)\le r(B)$。

矩阵 $(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)=A(\alpha_1,\alpha_2,\cdots,\alpha_s)$，设 $B=(\alpha_1,\alpha_2,\cdots,\alpha_s)$，则由 $r(AB)\le r(B)$ 得 $r(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)\le r(\alpha_1,\alpha_2,\cdots,\alpha_s)<s$。所以答案应该为（A）。`,
  source: '《2006 年数学三真题答案解析》第 5 页',
});

EXAMS.push({
  year: 2006, subject: '数三', number: 13, kind: '选择', score: 4,
  ids: ['mat-elem-mat', 'mat-elem-relation', 'mat-elem-op'],
  question: String.raw`设 $A$ 为 $3$ 阶矩阵，将 $A$ 的第 $2$ 行加到第 $1$ 行得 $B$，再将 $B$ 的第 $1$ 列的 $-1$ 倍加到第 $2$ 列得 $C$，记 $P=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}$，则（　　）
（A）$C=P^{-1}AP$　　（B）$C=PAP^{-1}$　　（C）$C=P^{\mathrm{T}}AP$　　（D）$C=PAP^{\mathrm{T}}$`,
  answer: String.raw`（B）`,
  analysis: String.raw`【详解】用初等矩阵在乘法中的作用（矩阵左乘或右乘初等矩阵相当于对矩阵进行初等行变换或列变换）得出。

将 $A$ 的第 $2$ 行加到第 $1$ 行得 $B$，即
$$
B=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}A\quad\text{记 }B=PA.
$$
将 $B$ 的第 $1$ 列的 $-1$ 倍加到第 $2$ 列得 $C$，即
$$
C=B\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}\quad\text{记 }C=BQ.
$$
而
$$
Q=\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}=P^{-1},
$$
故 $C=PAQ=PAP^{-1}$，应选（B）。`,
  source: '《2006 年数学三真题答案解析》第 5 页',
});

EXAMS.push({
  year: 2006, subject: '数三', number: 20, kind: '解答', score: 13,
  ids: ['vec-maximal', 'vec-indep-crit', 'vec-rank-def'],
  question: String.raw`（本题满分 13 分）设 $4$ 维向量组
$$
\alpha_1=(1+a,1,1,1)^{\mathrm{T}},\ \alpha_2=(2,2+a,2,2)^{\mathrm{T}},\ \alpha_3=(3,3,3+a,3)^{\mathrm{T}},\ \alpha_4=(4,4,4,4+a)^{\mathrm{T}},
$$
问 $a$ 为何值时，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关？当 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关时，求其一个极大线性无关组，并将其余向量用该极大线性无关组线性表示。`,
  answer: String.raw`当 $a=0$ 或 $a=-10$ 时，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关。当 $a=0$ 时，$\alpha_1$ 为一个极大线性无关组，且 $\alpha_2=2\alpha_1,\alpha_3=3\alpha_1,\alpha_4=4\alpha_1$；当 $a=-10$ 时，$\alpha_2,\alpha_3,\alpha_4$ 为一个极大线性无关组，且 $\alpha_1=-\alpha_2-\alpha_3-\alpha_4$。`,
  analysis: String.raw`【详解】方法 1：记 $A=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]$，则
$$
|A|=\begin{vmatrix}1+a&2&3&4\\1&2+a&3&4\\1&2&3+a&4\\1&2&3&4+a\end{vmatrix}\xrightarrow{\text{把所有列都加到第一列}}\begin{vmatrix}10+a&2&3&4\\10+a&2+a&3&4\\10+a&2&3+a&4\\10+a&2&3&4+a\end{vmatrix}
$$
$$
\xrightarrow{\text{把第一列公因式 }(10+a)\text{ 提到行列式前面}}(10+a)\begin{vmatrix}1&2&3&4\\1&2+a&3&4\\1&2&3+a&4\\1&2&3&4+a\end{vmatrix}=(10+a)\begin{vmatrix}1&2&3&4\\0&a&0&0\\0&0&a&0\\0&0&0&a\end{vmatrix}=(a+10)a^3.
$$
线性相关的定义：存在一组不等于零的数 $k_1,k_2,k_3,k_4$，使得 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3+k_4\alpha_4=0$ 成立，则 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关。

于是当 $|A|=0$ 时方程组 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3+k_4\alpha_4=0$ 有非零解，此时满足线性相关的定义。即 $(a+10)a^3=0$，解得当 $a=0$ 或 $a=-10$ 时，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关。

当 $a=0$ 时，$\alpha_1$ 为 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的一个极大线性无关组，且 $\alpha_2=2\alpha_1,\alpha_3=3\alpha_1,\alpha_4=4\alpha_1$。

当 $a=-10$ 时，对 $A$ 作初等行变换：
$$
A=\begin{pmatrix}-9&2&3&4\\1&-8&3&4\\1&2&-7&4\\1&2&3&-6\end{pmatrix}\xrightarrow[2]\text{（第 }2,3,4\text{ 行分别加第 }1\text{ 行的 }(-1)\text{ 倍）}\begin{pmatrix}-9&2&3&4\\10&-10&0&0\\10&0&-10&0\\10&0&0&-10\end{pmatrix}
$$
$$
\xrightarrow{\text{第 }2,3,4\text{ 行分别乘 }\frac{1}{10}}\begin{pmatrix}-9&2&3&4\\1&-1&0&0\\1&0&-1&0\\1&0&0&-1\end{pmatrix}\xrightarrow[\text{再将第 }1\text{ 行移到最后}]{}\begin{pmatrix}1&-1&0&0\\1&0&-1&0\\1&0&0&-1\\0&0&0&0\end{pmatrix}=[b_1,b_2,b_3,b_4].
$$
可以看出 $b_2,b_3,b_4$ 为 $b_1,b_2,b_3,b_4$ 的一个极大线性无关组，且 $b_1=-b_2-b_3-b_4$，故 $\alpha_2,\alpha_3,\alpha_4$ 为 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的一个极大线性无关组，且 $\alpha_1=-\alpha_2-\alpha_3-\alpha_4$。

方法 2：记 $A=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]$，对 $A$ 施以初等行变换，有
$$
A=\begin{pmatrix}1+a&2&3&4\\1&2+a&3&4\\1&2&3+a&4\\1&2&3&4+a\end{pmatrix}\xrightarrow[\text{第 }2,3,4\text{ 行分别加第 }1\text{ 行的 }(-1)\text{ 倍}]{}\begin{pmatrix}1+a&2&3&4\\-a&a&0&0\\-a&0&a&0\\-a&0&0&a\end{pmatrix}=B.
$$
当 $a=0$ 时，$B=\begin{pmatrix}1&2&3&4\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$，得 $r(A)=r(B)=1$，因而 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关，此时 $\alpha_1$ 为 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的一个极大线性无关组，且 $\alpha_2=2\alpha_1,\alpha_3=3\alpha_1,\alpha_4=4\alpha_1$。

当 $a\ne 0$ 时，再对 $B$ 施以初等行变换，有
$$
B\xrightarrow[\text{第 }2,3,4\text{ 行分别除以 }a]{}\begin{pmatrix}1+a&2&3&4\\-1&1&0&0\\-1&0&1&0\\-1&0&0&1\end{pmatrix}\xrightarrow[\text{第 }1\text{ 行加第 }4,3,2\text{ 行的若干倍}]{}\begin{pmatrix}a+10&0&0&0\\-1&1&0&0\\-1&0&1&0\\-1&0&0&1\end{pmatrix}=C.
$$
如果 $a\ne -10$，$C$ 的秩为 $4$，故 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关；如果 $a=-10$ 时，$C$ 的秩为 $3$，故 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关。由于 $C$ 的后三列是极大线性无关组，且第一列是后三列之和的相反数，于是 $\alpha_2,\alpha_3,\alpha_4$ 是 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的一个极大线性无关组，$\alpha_1=-\alpha_2-\alpha_3-\alpha_4$。`,
  source: '《2006 年数学三真题答案解析》第 9–10 页',
});

EXAMS.push({
  year: 2006, subject: '数三', number: 21, kind: '解答', score: 13,
  ids: ['eig-symmetric', 'eig-orth-diag', 'eig-power-app'],
  question: String.raw`（本题满分 13 分）设 $3$ 阶实对称矩阵 $A$ 的各行元素之和均为 $3$，向量 $\alpha_1=(-1,2,-1)^{\mathrm{T}}$，$\alpha_2=(0,-1,1)^{\mathrm{T}}$ 是线性方程组 $Ax=0$ 的两个解。

（Ⅰ）求 $A$ 的特征值与特征向量；

（Ⅱ）求正交矩阵 $Q$ 和对角矩阵 $\Lambda$，使得 $Q^{\mathrm{T}}AQ=\Lambda$；

（Ⅲ）求 $A$ 及 $\left(A-\dfrac{3}{2}E\right)^6$，其中 $E$ 为 $3$ 阶单位矩阵。`,
  answer: String.raw`（Ⅰ）$A$ 的特征值为 $3,0,0$；属于 $3$ 的特征向量为 $k_3\alpha_3$（$\alpha_3=(1,1,1)^{\mathrm{T}}$，$k_3\ne 0$），属于 $0$ 的特征向量为 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为零）；（Ⅱ）$Q=\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\[4pt]\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\[4pt]-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}$，$\Lambda=\begin{pmatrix}0&0&0\\0&0&0\\0&0&3\end{pmatrix}$；（Ⅲ）$A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$，$\left(A-\dfrac{3}{2}E\right)^6=\left(\dfrac{3}{2}\right)^6E=\dfrac{729}{64}E$。`,
  analysis: String.raw`【详解】（Ⅰ）由题设条件 $A\alpha_1=0=0\alpha_1$，$A\alpha_2=0=0\alpha_2$，故 $\alpha_1,\alpha_2$ 是 $A$ 的对应于 $\lambda=0$ 的特征向量，又因为 $\alpha_1,\alpha_2$ 线性无关，故 $\lambda=0$ 至少是 $A$ 的二重特征值。又因为 $A$ 的每行元素之和为 $3$，所以有 $A(1,1,1)^{\mathrm{T}}=(3,3,3)^{\mathrm{T}}=3(1,1,1)^{\mathrm{T}}$，由特征值、特征向量的定义，$\alpha_0=(1,1,1)^{\mathrm{T}}$ 是 $A$ 的特征向量，特征值为 $\lambda_3=3$，$\lambda_3$ 只能是单根，$k_3\alpha_0,k_3\ne 0$ 是全体特征向量，从而知 $\lambda=0$ 是二重特征值。

于是 $A$ 的特征值为 $3,0,0$；属于 $3$ 的特征向量：$k_3\alpha_3,k_3\ne 0$；属于 $0$ 的特征向量：$k_1\alpha_1+k_2\alpha_2$，$k_1,k_2$ 不都为 $0$。

（Ⅱ）为了求出可逆矩阵必须对特征向量进行单位正交化。

先将 $\alpha_0$ 单位化，得 $\eta_0=\left(\dfrac{\sqrt{3}}{3},\dfrac{\sqrt{3}}{3},\dfrac{\sqrt{3}}{3}\right)^{\mathrm{T}}$。

对 $\alpha_1,\alpha_2$ 作施密特正交化，得 $\eta_1=\left(0,-\dfrac{\sqrt{2}}{2},\dfrac{\sqrt{2}}{2}\right)^{\mathrm{T}}$，$\eta_2=\left(-\dfrac{\sqrt{6}}{3},\dfrac{\sqrt{6}}{6},\dfrac{\sqrt{6}}{6}\right)^{\mathrm{T}}$。

作 $Q=(\eta_1,\eta_2,\eta_0)$，则 $Q$ 是正交矩阵，并且
$$
Q^{\mathrm{T}}AQ=Q^{-1}AQ=\begin{pmatrix}0&0&0\\0&0&0\\0&0&3\end{pmatrix}.
$$
（Ⅲ）由 $Q^{\mathrm{T}}AQ=\Lambda$，其中 $Q^{\mathrm{T}}=Q^{-1}$，
$$
A=Q\Lambda Q^{\mathrm{T}}=\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\[4pt]\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\[4pt]-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}\begin{pmatrix}0&&\\&0&\\&&3\end{pmatrix}\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&\dfrac{2}{\sqrt{6}}&-\dfrac{1}{\sqrt{6}}\\[4pt]-\dfrac{1}{\sqrt{2}}&0&\dfrac{1}{\sqrt{2}}\\[4pt]\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}
$$
$$
=\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\[4pt]\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\[4pt]-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}\begin{pmatrix}0&0&0\\0&0&0\\\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.
$$
$$
\left(A-\frac{3}{2}E\right)^6=\left(Q\Lambda Q^{-1}-\frac{3}{2}E\right)^6=\left[Q\left(\Lambda-\frac{3}{2}E\right)Q^{-1}\right]^6=Q\left(\Lambda-\frac{3}{2}E\right)^6Q^{-1}
$$
$$
=Q\begin{pmatrix}-\dfrac{3}{2}&&\\&-\dfrac{3}{2}&\\&&\dfrac{3}{2}\end{pmatrix}^6Q^{-1}=Q\left(\frac{3}{2}\right)^6EQ^{-1}=\left(\frac{3}{2}\right)^6QQ^{-1}=\left(\frac{3}{2}\right)^6E.
$$`,
  source: '《2006 年数学三真题答案解析》第 11–12 页',
});
