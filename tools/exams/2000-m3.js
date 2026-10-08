// 2000 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2000 年卷；答案与解析取自《2000 年数学三真题答案解析》）
EXAMS.push({
  year: 2000, subject: '数三', number: 103, kind: '填空', score: 3,
  ids: ['eig-ops', 'eig-trace-det-app'],
  label: '填空题第 3 题',
  question: String.raw`若 $4$ 阶矩阵 $A$ 与 $B$ 相似，矩阵 $A$ 的特征值为 $\dfrac{1}{2},\dfrac{1}{3},\dfrac{1}{4},\dfrac{1}{5}$，则行列式 $|B^{-1}-E|=$ $\underline{\qquad}$。`,
  answer: String.raw`$24$。`,
  analysis: String.raw`【详解】方法 1：$A\sim B\Rightarrow A,B$ 有相同的特征值：$\dfrac{1}{2},\dfrac{1}{3},\dfrac{1}{4},\dfrac{1}{5}$。由矩阵 $B$ 与 $B^{-1}$ 的特征值具有倒数的关系，得 $B^{-1}$ 有特征值 $2,3,4,5$。由 $B$ 的特征矩阵为 $\lambda E-B$，$B^{-1}-E$ 的特征矩阵为 $\lambda E-(B^{-1}-E)=(\lambda+1)E-B^{-1}$，可以看出 $B^{-1}$ 与 $B^{-1}-E$ 的特征值相差 $1$，所以 $B^{-1}-E$ 有特征值 $1,2,3,4$。由矩阵的行列式等于其特征值的乘积（所有特征值的和等于矩阵主对角元素之和），知
$$
|B^{-1}-E|=\prod_{i=1}^4\lambda_i=1\times 2\times 3\times 4=24.
$$

方法 2：$A\sim B$ 即存在可逆阵 $P$，使得 $P^{-1}AP=B$。两边求逆得 $B^{-1}=P^{-1}A^{-1}P$。又 $A$ 有四个不同的特征值，存在可逆矩阵 $Q$，使
$$
Q^{-1}AQ=\Lambda=\begin{pmatrix}\dfrac{1}{2}&&&\\&\dfrac{1}{3}&&\\&&\dfrac{1}{4}&\\&&&\dfrac{1}{5}\end{pmatrix},
$$
上式两边求逆得 $Q^{-1}A^{-1}Q=\Lambda^{-1}=\begin{pmatrix}2&&&\\&3&&\\&&4&\\&&&5\end{pmatrix}$，即 $A^{-1}=Q\Lambda^{-1}Q^{-1}$。从而
$$
B^{-1}-E=P^{-1}A^{-1}P-E=P^{-1}(A^{-1}-E)P=Q\Lambda^{-1}Q^{-1}-E=Q(\Lambda^{-1}-E)Q^{-1},
$$
$$
|B^{-1}-E|=|\Lambda^{-1}-E|=\begin{vmatrix}2-1&&&\\&3-1&&\\&&4-1&\\&&&5-1\end{vmatrix}=1\times 2\times 3\times 4=24.
$$`,
  source: '《2000 年数学三试题解析》第 1–2 页',
});

EXAMS.push({
  year: 2000, subject: '数三', number: 203, kind: '选择', score: 3,
  ids: ['eq-nonhomo-general', 'eq-homo-structure', 'eq-nonhomo-crit'],
  label: '选择题第 3 题',
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3$ 是四元非齐次线性方程组 $AX=b$ 的三个解向量，且 $r(A)=3$，$\alpha_1=(1,2,3,4)^{\mathrm{T}}$，$\alpha_2+\alpha_3=(0,1,2,3)^{\mathrm{T}}$，$C$ 表示任意常数，则线性方程组 $AX=b$ 的通解为（　　）

（A）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$　　（B）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}0\\1\\2\\3\end{pmatrix}$

（C）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}2\\3\\4\\5\end{pmatrix}$　　（D）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}3\\4\\5\\6\end{pmatrix}$`,
  answer: String.raw`（C）`,
  analysis: String.raw`【详解】因为 $\alpha_1=(1,2,3,4)^{\mathrm{T}}$ 是非齐次方程组的解向量，所以有 $A\alpha_1=b$，故 $\alpha_1$ 是 $AX=b$ 的一个特解。

又 $r(A)=3$，$n=4$（未知量的个数），故 $AX=b$ 导出组 $AX=0$ 的基础解系由一个非零解组成，即基础解系的个数为 $1$。

因为
$$
A\bigl(2\alpha_1-(\alpha_2+\alpha_3)\bigr)=2b-b-b=0,
$$
故
$$
2\alpha_1-(\alpha_2+\alpha_3)=2\begin{pmatrix}1\\2\\3\\4\end{pmatrix}-\begin{pmatrix}0\\1\\2\\3\end{pmatrix}=\begin{pmatrix}2\\3\\4\\5\end{pmatrix}
$$
是 $AX=0$ 的基础解系，故 $AX=b$ 的通解为
$$
C\bigl(2\alpha_1-(\alpha_2+\alpha_3)\bigr)+\alpha_1=C\begin{pmatrix}2\\3\\4\\5\end{pmatrix}+\begin{pmatrix}1\\2\\3\\4\end{pmatrix}.
$$`,
  source: '《2000 年数学三试题解析》第 4 页',
});

EXAMS.push({
  year: 2000, subject: '数三', number: 204, kind: '选择', score: 3,
  ids: ['eq-samesol', 'eq-homo-sol', 'eq-homo-nonhomo'],
  label: '选择题第 4 题',
  question: String.raw`设 $A$ 为 $n$ 阶实矩阵，$A^{\mathrm{T}}$ 为 $A$ 的转置矩阵，则对于线性方程组（Ⅰ）：$AX=0$ 和（Ⅱ）$A^{\mathrm{T}}AX=0$，必有（　　）
（A）（Ⅱ）的解是（Ⅰ）的解，（Ⅰ）的解也是（Ⅱ）的解
（B）（Ⅱ）的解是（Ⅰ）的解，但（Ⅰ）的解不是（Ⅱ）的解
（C）（Ⅰ）的解不是（Ⅱ）的解，（Ⅱ）的解也不是（Ⅰ）的解
（D）（Ⅰ）的解是（Ⅱ）的解，但（Ⅱ）的解不是（Ⅰ）的解`,
  answer: String.raw`（A）`,
  analysis: String.raw`【详解】若 $\alpha$ 是方程组（Ⅰ）：$AX=0$ 的解，即 $A\alpha=0$，两边左乘 $A^{\mathrm{T}}$，得 $A^{\mathrm{T}}A\alpha=0$，即 $\alpha$ 也是方程组（Ⅱ）：$A^{\mathrm{T}}AX=0$ 的解，即（Ⅰ）的解也是（Ⅱ）的解。

若 $b$ 是方程组（Ⅱ）：$A^{\mathrm{T}}AX=0$ 的解，即 $A^{\mathrm{T}}Ab=0$，两边左乘 $b^{\mathrm{T}}$ 得
$$
b^{\mathrm{T}}A^{\mathrm{T}}Ab=(Ab)^{\mathrm{T}}Ab=0.
$$
$Ab$ 是一个向量，设 $Ab=[b_1,b_2,\cdots,b_n]^{\mathrm{T}}$，则
$$
(Ab)^{\mathrm{T}}Ab=\sum_{i=1}^n b_i^2=0.
$$
故有 $b_i=0,\ i=1,2,\cdots,n$，从而有 $Ab=0$，即 $b$ 也是方程组（Ⅰ）：$AX=0$ 的解。

所以（Ⅰ）与（Ⅱ）同解，应选（A）。`,
  source: '《2000 年数学三试题解析》第 4–5 页',
});

EXAMS.push({
  year: 2000, subject: '数三', number: 309, kind: '解答', score: 8,
  ids: ['vec-express-crit', 'vec-combo', 'eq-nonhomo-crit'],
  label: '第九题',
  question: String.raw`（本题满分 8 分）设向量组
$$
\alpha_1=(a,2,10)^{\mathrm{T}},\quad \alpha_2=(-2,1,5)^{\mathrm{T}},\quad \alpha_3=(-1,1,4)^{\mathrm{T}},\quad \beta=(1,b,c)^{\mathrm{T}}.
$$
试问：当 $a,b,c$ 满足什么条件时，

（1）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，且表示唯一？

（2）$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？

（3）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表示不唯一？并求出一般表达式。`,
  answer: String.raw`（1）$a\ne -4$ 时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示且表示唯一；（2）$a=-4$ 且 $c-3b+1\ne 0$ 时，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；（3）$a=-4$ 且 $c-3b+1=0$ 时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示但表示不唯一，一般表达式为 $k(1,-2,0)^{\mathrm{T}}+(0,-(b+1),2b+1)^{\mathrm{T}}$（$k$ 为任意常数）。`,
  analysis: String.raw`【详解】方法 1：设方程组
$$
\alpha_1x_1+\alpha_2x_2+\alpha_3x_3=\beta.\tag{①}
$$
对方程组的增广矩阵作初等行变换，化成阶梯形矩阵，有
$$
[\alpha_1,\alpha_2,\alpha_3\ \vdots\ \beta]=\begin{pmatrix}a&-2&-1&\mid&1\\2&1&1&\mid&b\\10&5&4&\mid&c\end{pmatrix}\to\begin{pmatrix}a&-2&-1&\mid&1\\2&1&1&\mid&b\\10+4a&-3&0&\mid&c+4\end{pmatrix}\to\begin{pmatrix}a&-2&-1&\mid&1\\2&1&1&\mid&b\\4+a&0&0&\mid&c-3b+1\end{pmatrix}.
$$
（1）当 $a\ne -4$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=r[\alpha_1,\alpha_2,\alpha_3,\beta]=3$，方程组①有唯一解，即 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，且表出唯一。

（2）当 $a=-4$，但 $c-3b+1\ne 0$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=2\ne r[\alpha_1,\alpha_2,\alpha_3,\beta]=3$，方程组①无解，$\beta$ 不可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出。

（3）当 $a=-4$，且 $c-3b+1=0$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=r[\alpha_1,\alpha_2,\alpha_3,\beta]=2$，方程组①有无穷多解，此时有
$$
[\alpha_1,\alpha_2,\alpha_3\ \vdots\ \beta]\to\begin{pmatrix}-4&-2&-1&\mid&1\\2&1&1&\mid&b\\0&0&0&\mid&0\end{pmatrix}.
$$
得对应齐次方程组的基础解系为：$\xi=(1,-2,0)^{\mathrm{T}}$（取自由未知量 $x_2=1$，回代得 $x_2=-2$，$x_3=0$）；非齐次方程组的一个特解是 $\eta=(0,-(b+1),2b+1)^{\mathrm{T}}$，故通解为
$$
k\begin{pmatrix}1\\-2\\0\end{pmatrix}+\begin{pmatrix}0\\-(b+1)\\2b+1\end{pmatrix},\quad k\ \text{为任意常数}.
$$

方法 2：设方程组 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3=\beta$\quad①

因为①是三个方程三个未知量的线性非齐次方程组，故也可由系数行列式讨论，
$$
|A|=|\alpha_1,\alpha_2,\alpha_3|=\begin{vmatrix}a&-2&-1\\2&1&1\\10&5&4\end{vmatrix}=-\,(a+4).
$$
因此知道：

（1）当 $a\ne -4$ 时，$|A|\ne 0$，方程组有唯一解，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，且表出唯一。

（2）当 $a=-4$ 时（有可能无解或有无穷多解），对增广矩阵作初等行变换，得
$$
[\alpha_1,\alpha_2,\alpha_3\ \vdots\ \beta]=\begin{pmatrix}-4&-2&-1&\mid&1\\2&1&1&\mid&b\\10&5&4&\mid&c\end{pmatrix}\to\begin{pmatrix}2&1&1&\mid&b\\0&0&1&\mid&2b+1\\0&0&-1&\mid&c-5b\end{pmatrix}\to\begin{pmatrix}2&1&1&\mid&b\\0&0&1&\mid&2b+1\\0&0&0&\mid&c-3b+1\end{pmatrix}.
$$
（i）当 $a=-4$，且 $c-3b+1\ne 0$ 时，有 $r[\alpha_1,\alpha_2,\alpha_3]=2\ne r[\alpha_1,\alpha_2,\alpha_3,\beta]=3$，方程组①无解。

（ii）当 $a=-4$，且 $c-3b+1=0$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=r[\alpha_1,\alpha_2,\alpha_3,\beta]=2$，方程组①有无穷多解，其通解为
$$
k\begin{pmatrix}1\\-2\\0\end{pmatrix}+\begin{pmatrix}0\\-(b+1)\\2b+1\end{pmatrix},\quad k\ \text{为任意常数}.
$$`,
  source: '《2000 年数学三试题解析》第 11–13 页',
});

EXAMS.push({
  year: 2000, subject: '数三', number: 310, kind: '解答', score: 9,
  ids: ['qf-positive-crit', 'qf-positive-def', 'qf-def'],
  label: '第十题',
  question: String.raw`（本题满分 9 分）设有 $n$ 元实二次型
$$
f(x_1,x_2,\cdots,x_n)=(x_1+a_1x_2)^2+(x_2+a_2x_3)^2+\cdots+(x_{n-1}+a_{n-1}x_n)^2+(x_n+a_nx_1)^2,
$$
其中 $a_i\ (i=1,2,\cdots,n)$ 为实数。试问：当 $a_1,a_2,\cdots,a_n$ 满足何种条件时，二次型 $f(x_1,x_2,\cdots,x_n)$ 为正定二次型。`,
  answer: String.raw`当 $a_1a_2\cdots a_n\ne (-1)^n$ 时，$f$ 为正定二次型。`,
  analysis: String.raw`【详解】方法 1：用正定性的定义判别。

已知对任意的 $x_1,x_2,\cdots,x_n$ 均有 $f(x_1,x_2,\cdots,x_n)\ge 0$，其中等号成立当且仅当
$$
\begin{cases}x_1+a_1x_2=0,\\x_2+a_2x_3=0,\\\cdots\cdots\cdots\\x_{n-1}+a_{n-1}x_n=0,\\x_n+a_nx_1=0.\end{cases}\tag{①}
$$
方程组①仅有零解的充分必要条件是其系数行列式
$$
|B|=\begin{vmatrix}1&a_1&0&\cdots&0&0\\0&1&a_2&\cdots&0&0\\0&0&1&\cdots&0&0\\\vdots&\vdots&\vdots&\ddots&\vdots&\vdots\\0&0&0&\cdots&1&a_{n-1}\\a_n&0&0&\cdots&0&1\end{vmatrix}=1+(-1)^{n+1}a_1a_2\cdots a_n\ne 0,
$$
即当 $a_1a_2\cdots a_n\ne (-1)^n$ 时，方程组①只有零解，此时 $f(x_1,x_2,\cdots,x_n)=0$ 当且仅当对任意的非零向量 $X=(x_1,x_2,\cdots,x_n)\ne 0$，①中总有一个方程不为零，则有
$$
f(x_1,x_2,\cdots,x_n)=(x_1+a_1x_2)^2+(x_2+a_2x_3)^2+\cdots+(x_{n-1}+a_{n-1}x_n)^2+(x_n+a_nx_1)^2>0.
$$
所以，根据正定二次型的定义，对任意的向量 $(x_1,x_2,\cdots,x_n)$，如果 $f(x_1,x_2,\cdots,x_n)\ge 0$，则二次型正定。由以上证明题中 $f(x_1,x_2,\cdots,x_n)$ 是正定二次型。

方法 2：将二次型表示成矩阵形式，有
$$
f(x_1,x_2,\cdots,x_n)=(x_1+a_1x_2)^2+(x_2+a_2x_3)^2+\cdots+(x_{n-1}+a_{n-1}x_n)^2+(x_n+a_nx_1)^2
$$
$$
=[x_1+a_1x_2,x_2+a_2x_3,\cdots,x_{n-1}+a_{n-1}x_n,x_n+a_nx_1]\begin{pmatrix}x_1+a_1x_2\\x_2+a_2x_3\\\vdots\\x_{n-1}+a_{n-1}x_n\\x_n+a_nx_1\end{pmatrix}
$$
$$
=(x_1,x_2,\cdots,x_n)\begin{pmatrix}1&0&0&\cdots&0&a_n\\a_1&1&0&\cdots&0&0\\0&a_2&1&\cdots&0&0\\\vdots&\vdots&\vdots&\ddots&\vdots&\vdots\\0&0&0&\cdots&1&0\\0&0&0&\cdots&a_{n-1}&1\end{pmatrix}\begin{pmatrix}1&a_1&0&\cdots&0&0\\0&1&a_2&\cdots&0&0\\0&0&1&\cdots&0&0\\\vdots&\vdots&\vdots&\ddots&\vdots&\vdots\\0&0&0&\cdots&1&a_{n-1}\\a_n&0&0&\cdots&0&1\end{pmatrix}\begin{pmatrix}x_1\\x_2\\\vdots\\x_{n-1}\\x_n\end{pmatrix}.
$$
记
$$
B=\begin{pmatrix}1&a_1&0&\cdots&0&0\\0&1&a_2&\cdots&0&0\\0&0&1&\cdots&0&0\\\vdots&\vdots&\vdots&\ddots&\vdots&\vdots\\0&0&0&\cdots&1&a_{n-1}\\a_n&0&0&\cdots&0&1\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix},
$$
则 $f(x_1,x_2,\cdots,x_n)=X^{\mathrm{T}}B^{\mathrm{T}}BX=(BX)^{\mathrm{T}}BX\ge 0$。

当
$$
|B|=\begin{vmatrix}1&a_1&0&\cdots&0&0\\0&1&a_2&\cdots&0&0\\0&0&1&\cdots&0&0\\\vdots&\vdots&\vdots&\ddots&\vdots&\vdots\\0&0&0&\cdots&1&a_{n-1}\\a_n&0&0&\cdots&0&1\end{vmatrix}=1+(-1)^{n+1}a_1a_2\cdots a_n\ne 0,
$$
即当 $a_1a_2\cdots a_n\ne (-1)^n$ 时，$BX=0$ 只有零解，故当任意的 $X\ne 0$ 时，均有
$$
f(x_1,x_2,\cdots,x_n)=(BX)^{\mathrm{T}}BX>0,
$$
从而由正定二次型的定义知，$f(x_1,x_2,\cdots,x_n)$ 是正定二次型。`,
  source: '《2000 年数学三试题解析》第 13–14 页',
});
