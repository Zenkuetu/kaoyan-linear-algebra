// 2003 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 38–40 页；答案与解析取自《1989—2004 考研数二真题答案解析》）
EXAMS.push({
  year: 2003, subject: '数二', number: 105, kind: '填空', score: 4, label: '填空题第 5 题',
  ids: ['vec-inner', 'mat-trace'],
  question: String.raw`设 $\alpha$ 为 3 维列向量，$\alpha^{\mathrm{T}}$ 是 $\alpha$ 的转置，若 $\alpha\alpha^{\mathrm{T}}=\begin{pmatrix}1&-1&1\\-1&1&-1\\1&-1&1\end{pmatrix}$，则 $\alpha^{\mathrm{T}}\alpha=$ ________.`,
  answer: '3',
  analysis: String.raw`【分析】本题的可由矩阵 $\alpha\alpha^{\mathrm{T}}$ 的秩为 1，把其分解为一列乘一行的形式，而行向量一般可选第一行（或任一非零行），列向量的元素则为各行与选定行的倍数构成. 也可设 $A=\alpha\alpha^{\mathrm{T}}$ 求出 $\alpha$，或利用 $A^2$ 或设 $\alpha=[x_1,x_2,x_3]^{\mathrm{T}}$，定出 $\alpha$ 等.

【详解】方法1：观察得 $A$ 的三个行向量成比例，其比为 $1:1:1$，故
$$
A=\alpha\alpha^{\mathrm{T}}=\begin{pmatrix}1&-1&1\\-1&1&-1\\1&-1&1\end{pmatrix}=\begin{pmatrix}1\\-1\\1\end{pmatrix}\begin{pmatrix}1&-1&1\end{pmatrix},
$$
知 $\alpha=\begin{pmatrix}1\\-1\\1\end{pmatrix}$，于是 $\alpha^{\mathrm{T}}\alpha=\begin{pmatrix}1&-1&1\end{pmatrix}\begin{pmatrix}1\\-1\\1\end{pmatrix}=3$.

方法2：$A=\alpha\alpha^{\mathrm{T}}$，
$$
A^2=(\alpha\alpha^{\mathrm{T}})(\alpha\alpha^{\mathrm{T}})=\alpha(\alpha^{\mathrm{T}}\alpha)\alpha^{\mathrm{T}}=(\alpha^{\mathrm{T}}\alpha)A\tag{1}
$$
而
$$
A^2=\begin{pmatrix}1&-1&1\\-1&1&-1\\1&-1&1\end{pmatrix}\begin{pmatrix}1&-1&1\\-1&1&-1\\1&-1&1\end{pmatrix}=\begin{pmatrix}3&-3&3\\-3&3&-3\\3&-3&3\end{pmatrix}=3\begin{pmatrix}1&-1&1\\-1&1&-1\\1&-1&1\end{pmatrix}\tag{2}
$$
比较(1)，(2)式，得 $\alpha^{\mathrm{T}}\alpha=3$.

方法3：设 $\alpha=[x_1,x_2,x_3]^{\mathrm{T}}$，
$$
A=\alpha\alpha^{\mathrm{T}}=\begin{pmatrix}x_1^2&x_1x_2&x_1x_3\\x_2x_1&x_2^2&x_2x_3\\x_3x_1&x_3x_2&x_3^2\end{pmatrix}=\begin{pmatrix}1&-1&1\\-1&1&-1\\1&-1&1\end{pmatrix}
$$
故 $\alpha^{\mathrm{T}}\alpha=[x_1,x_2,x_3]\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=x_1^2+x_2^2+x_3^2$（$A$ 的主对角元之和）.`,
  source: '《1989—2004 考研数二真题答案解析》第 171–172 页',
});

EXAMS.push({
  year: 2003, subject: '数二', number: 106, kind: '填空', score: 4, label: '填空题第 6 题',
  ids: ['mat-invertible-crit', 'det-product'],
  question: String.raw`设 3 阶方阵 $A,B$ 满足 $A^2B-A-B=E$，其中 $E$ 是 3 阶单位矩阵，若 $A=\begin{pmatrix}1&0&1\\0&2&0\\-2&0&1\end{pmatrix}$，则 $|B|=$ ________.`,
  answer: '$\frac{1}{2}$',
  analysis: String.raw`【分析】先化简分解出矩阵 $B$，再计算行列式 $B$ 或者将已知等式变形成含有因子 $B$ 的矩阵乘积形式，而其余因子的行列式都可以求出即可.

【详解】方法1：由 $A^2B-A-B=E$，知 $(A^2-E)B=A+E$，即 $(A+E)(A-E)B=(A+E)$，

易知矩阵 $A+E$ 可逆，于是有 $(A-E)B=E$.

再两边取行列式，得 $|A-E||B|=1$，

因为 $A-E=\begin{pmatrix}0&0&1\\0&1&0\\-2&0&0\end{pmatrix}$，故 $|A-E|=\begin{vmatrix}0&0&1\\0&1&0\\-2&0&0\end{vmatrix}=2$，所以 $|B|=\frac{1}{2}$.

方法2：由 $A^2B-A-B=E$，得 $(A+E)(A-E)B=A+E$

等式两端取行列式且利用矩阵乘积的行列式=行列式的乘积，得
$$
|A+E||A-E||B|=|A+E|
$$
约去 $|A+E|\ne0$，得 $|B|=\frac{1}{|A-E|}=\frac{1}{2}$.`,
  source: '《1989—2004 考研数二真题答案解析》第 172 页',
});

EXAMS.push({
  year: 2003, subject: '数二', number: 206, kind: '选择', score: 4, label: '选择题第 6 题',
  ids: ['vec-rank-table', 'vec-express-crit'],
  question: String.raw`设向量组 I：$\alpha_1,\alpha_2,\cdots,\alpha_r$ 可由向量组 II：$\beta_1,\beta_2,\cdots,\beta_s$ 线性表示，则（　）

（A）当 $r<s$ 时，向量组 II 必线性相关.
（B）当 $r>s$ 时，向量组 II 必线性相关.
（C）当 $r<s$ 时，向量组 I 必线性相关.
（D）当 $r>s$ 时，向量组 I 必线性相关.`,
  answer: '（D）',
  analysis: String.raw`【分析】本题为一般教材上均有的比较两组向量个数的定理：若向量组 I：$\alpha_1,\alpha_2,\cdots,\alpha_r$ 可由向量组 II：$\beta_1,\beta_2,\cdots,\beta_s$ 线性表示，则当 $r>s$ 时，向量组 I 必线性相关. 或其逆否命题：若向量组 I：$\alpha_1,\alpha_2,\cdots,\alpha_r$ 可由向量组 II：$\beta_1,\beta_2,\cdots,\beta_s$ 线性表示，且向量组 I 线性无关，则必有 $r\le s$. 可见正确选项为（D）. 本题也可通过举反例用排除法找到答案.

【详解】用排除法：

$\alpha_1=\begin{pmatrix}0\\0\end{pmatrix},\beta_1=\begin{pmatrix}1\\0\end{pmatrix},\beta_2=\begin{pmatrix}0\\1\end{pmatrix}$，则 $\alpha_1=0\cdot\beta_1+0\cdot\beta_2$，但 $\beta_1,\beta_2$ 线性无关，排除（A）；

$\alpha_1=\begin{pmatrix}0\\0\end{pmatrix},\alpha_2=\begin{pmatrix}1\\0\end{pmatrix},\beta_1=\begin{pmatrix}1\\0\end{pmatrix}$，则 $\alpha_1,\alpha_2$ 可由 $\beta_1$ 线性表示，但 $\beta_1$ 线性无关，排除（B）；

$\alpha_1=\begin{pmatrix}1\\0\end{pmatrix},\beta_1=\begin{pmatrix}1\\0\end{pmatrix},\beta_2=\begin{pmatrix}0\\1\end{pmatrix}$，$\alpha_1$ 可由 $\beta_1,\beta_2$ 线性表示，但 $\alpha_1$ 线性无关，排除（C）.`,
  source: '《1989—2004 考研数二真题答案解析》第 174–175 页',
});

EXAMS.push({
  year: 2003, subject: '数二', number: 311, kind: '解答', score: 10, label: '第十一题',
  ids: ['eig-diag-crit', 'eig-diag-method'],
  question: String.raw`若矩阵 $A=\begin{pmatrix}2&2&0\\8&2&a\\0&0&6\end{pmatrix}$ 相似于对角矩阵 $\Lambda$，试确定常数 $a$ 的值，并求可逆矩阵 $P$ 使 $P^{-1}AP=\Lambda$.`,
  answer: String.raw`$a=0$，$P=\begin{pmatrix}0&1&1\\0&2&-2\\1&0&0\end{pmatrix}$（答案不唯一），$\Lambda=\begin{pmatrix}6&0&0\\0&6&0\\0&0&-2\end{pmatrix}$.`,
  analysis: String.raw`【分析】已知 $A$ 相似于对角矩阵，应先求出 $A$ 的特征值，再根据特征值的重数与线性无关特征向量的个数相同，转化为特征矩阵的秩，进而确定参数 $a$. 至于求 $P$，则是常识问题.

【详解】矩阵 $A$ 的特征多项式为
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&-2&0\\-8&\lambda-2&-a\\0&0&\lambda-6\end{vmatrix}=(\lambda-6)[(\lambda-2)^2-16]=(\lambda-6)^2(\lambda+2),
$$
故 $A$ 的特征值为 $\lambda_1=\lambda_2=6,\lambda_3=-2$.

由于 $A$ 相似于对角矩阵 $\Lambda$，故对应 $\lambda_1=\lambda_2=6$ 应有两个线性无关的特征向量，即
$$
3-r(6E-A)=2,\ \text{于是有}\ r(6E-A)=1.
$$
$$
6E-A=\begin{pmatrix}4&-2&0\\-8&4&-a\\0&0&0\end{pmatrix}\to\begin{pmatrix}2&-1&0\\0&0&-a\\0&0&0\end{pmatrix},
$$
所以 $a=0$. 于是对应于 $\lambda_1=\lambda_2=6$ 的两个线性无关的特征向量可取为
$$
\xi_1=\begin{pmatrix}0\\0\\1\end{pmatrix},\qquad \xi_2=\begin{pmatrix}1\\2\\0\end{pmatrix}.
$$
当 $\lambda_3=-2$ 时，
$$
-2E-A=\begin{pmatrix}-4&-2&0\\-8&-4&0\\0&0&-8\end{pmatrix}\to\begin{pmatrix}2&1&0\\0&0&1\\0&0&0\end{pmatrix},
$$
解方程组 $\begin{cases}2x_1+x_2=0,\\x_3=0,\end{cases}$ 得对应于 $\lambda_3=-2$ 的特征向量 $\xi_3=\begin{pmatrix}1\\-2\\0\end{pmatrix}$.

令 $P=\begin{pmatrix}0&1&1\\0&2&-2\\1&0&0\end{pmatrix}$，则 $P$ 可逆，并有 $P^{-1}AP=\Lambda$.`,
  source: '《1989—2004 考研数二真题答案解析》第 181–182 页',
});

EXAMS.push({
  year: 2003, subject: '数二', number: 412, kind: '解答', score: 8, label: '第十二题（证明题）',
  ids: ['eq-nonhomo-crit', 'eq-geometry'],
  question: String.raw`已知平面上三条不同直线的方程分别为
$$
l_1:ax+2by+3c=0,
$$
$$
l_2:bx+2cy+3a=0,
$$
$$
l_3:cx+2ay+3b=0.
$$
试证：这三条直线交于一点的充分必要条件为 $a+b+c=0$.`,
  answer: String.raw`见解析.`,
  analysis: String.raw`【分析】三条直线相交于一点，相当于对应线性方程组有唯一解，进而转化为系数矩阵与增广矩阵的秩均为 2.

【详解】方法1：“必要性”. 设三条直线 $l_1,l_2,l_3$ 交于一点，则线性方程组
$$
\begin{cases}
ax+2by=-3c,\\
bx+2cy=-3a,\\
cx+2ay=-3b,
\end{cases}\tag{*}
$$
有唯一解，故系数矩阵 $A=\begin{pmatrix}a&2b\\b&2c\\c&2a\end{pmatrix}$ 与增广矩阵 $\overline{A}=\begin{pmatrix}a&2b&-3c\\b&2c&-3a\\c&2a&-3b\end{pmatrix}$ 的秩均为 2，于是 $|\overline{A}|=0$.

$$
|\overline{A}|=\begin{vmatrix}a&2b&-3c\\b&2c&-3a\\c&2a&-3b\end{vmatrix}=\begin{vmatrix}a+b+c&2(b+c+a)&-3(c+a+b)\\b&2c&-3a\\c&2a&-3b\end{vmatrix}
$$
$$
=(a+b+c)\begin{vmatrix}1&2&-3\\b&2c&-3a\\c&2a&-3b\end{vmatrix}=-6(a+b+c)\begin{vmatrix}1&1&1\\b&c&a\\c&a&b\end{vmatrix}
$$
$$
=3(a+b+c)\left[(a-b)^2+(b-c)^2+(c-a)^2\right],
$$
由于三条直线互不相同，所以 $(a-b)^2+(b-c)^2+(c-a)^2\ne0$，故 $a+b+c=0$.

“充分性”. 由 $a+b+c=0$，则从必要性的证明可知，$|\overline{A}|=0$，故秩$(\overline{A})<3$.

由于 $\begin{vmatrix}a&2b\\b&2c\end{vmatrix}=2(ac-b^2)=-2\left[\left(a+\frac{1}{2}b\right)^2+\frac{3}{4}b^2\right]\ne0$，故秩$(\overline{A})=2$. 于是，秩$(A)=$秩$(\overline{A})=2$. 因此方程组(*)有唯一解，即三直线 $l_1,l_2,l_3$ 交于一点.

方法2：“必要性”. 设三直线交于一点 $(x_0,y_0)$，则 $\begin{pmatrix}x_0\\y_0\\1\end{pmatrix}$ 为 $BX=0$ 的非零解，其中 $B=\begin{pmatrix}2a&2b&3c\\2b&2c&3a\\2c&2a&3b\end{pmatrix}$.

所以 $|B|=0$. 而
$$
|B|=\begin{vmatrix}2a&2b&3c\\2b&2c&3a\\2c&2a&3b\end{vmatrix}=-6(a+b+c)\left[(a-b)^2+(b-c)^2+(c-a)^2\right],
$$
（解法同方法1）

但根据题设 $(a-b)^2+(b-c)^2+(c-a)^2\ne0$，故 $a+b+c=0$.

“充分性”：考虑线性方程组
$$
\begin{cases}
ax+2by=-3c,\\
bx+2cy=-3a,\\
cx+2ay=-3b,
\end{cases}\tag{*}
$$
将方程组(*)的三个方程相加，并由 $a+b+c=0$ 可知，方程组(*)等价于方程组
$$
\begin{cases}
ax+2by=-3c,\\
bx+2cy=-3a,
\end{cases}\tag{**}
$$
因为 $\begin{vmatrix}a&2b\\b&2c\end{vmatrix}=2(ac-b^2)=-2\left[\left(a+\frac{1}{2}b\right)^2+\frac{3}{4}b^2\right]\ne0$，

故方程组(**)有唯一解，所以方程组(*)有唯一解，即三直线 $l_1,l_2,l_3$ 交于一点.`,
  source: '《1989—2004 考研数二真题答案解析》第 182–184 页',
});
