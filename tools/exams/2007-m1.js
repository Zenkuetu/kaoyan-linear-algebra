// 2007 · 数学一 · 线性代数（题面取自《2007年考研数学（一）真题》，答案与解析取自《2007数学一解析》）
EXAMS.push({
  year: 2007, subject: '数一', number: 7, kind: '选择', score: 4,
  ids: ['vec-indep-crit', 'vec-indep-concl'],
  question: String.raw`设向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则下列向量组线性相关的是（　　）

（A）$\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_1$．
（B）$\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1$．
（C）$\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1$．
（D）$\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1$．`,
  answer: String.raw`（A）`,
  analysis: String.raw`【解】 方法一 由 $(\alpha_1-\alpha_2)+(\alpha_2-\alpha_3)+(\alpha_3-\alpha_1)=0$，得向量组 $\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_1$ 线性相关，应选（A）．

方法二
$$
(\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_1)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&-1\\-1&1&0\\0&-1&1\end{pmatrix},
$$
由
$$
\begin{vmatrix}1&0&-1\\-1&1&0\\0&-1&1\end{vmatrix}=\begin{vmatrix}1&0&-1\\0&1&-1\\0&-1&1\end{vmatrix}=0,
$$
得
$$
|\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_1|=|\alpha_1,\alpha_2,\alpha_3|\cdot 0=0,
$$
于是向量组 $\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_1$ 线性相关，应选（A）．

方法三 令 $A=(\alpha_1,\alpha_2,\alpha_3)$，因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，所以 $r(A)=3$．
$$
(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},
$$
因为 $\begin{vmatrix}1&0&1\\1&1&0\\0&1&1\end{vmatrix}=2\ne 0$，所以 $\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}$ 可逆，从而 $r(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)=r(\alpha_1,\alpha_2,\alpha_3)=3$，即 $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1$ 线性无关，（B）不对；
$$
(\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&-2\\-2&1&0\\0&-2&1\end{pmatrix},
$$
因为 $\begin{vmatrix}1&0&-2\\-2&1&0\\0&-2&1\end{vmatrix}=-7\ne 0$，所以 $\begin{pmatrix}1&0&-2\\-2&1&0\\0&-2&1\end{pmatrix}$ 可逆，从而 $r(\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1)=r(\alpha_1,\alpha_2,\alpha_3)=3$，即 $\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1$ 线性无关，（C）不对；
$$
(\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&2\\2&1&0\\0&2&1\end{pmatrix},
$$
因为 $\begin{vmatrix}1&0&2\\2&1&0\\0&2&1\end{vmatrix}=9\ne 0$，所以 $\begin{pmatrix}1&0&2\\2&1&0\\0&2&1\end{pmatrix}$ 可逆，从而 $r(\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1)=r(\alpha_1,\alpha_2,\alpha_3)=3$，即 $\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1$ 线性无关，（D）不对，应选（A）．`,
  source: '《2007 年数学（一）真题解析》第 3–4 页',
});

EXAMS.push({
  year: 2007, subject: '数一', number: 8, kind: '选择', score: 4,
  ids: ['qf-contract-vs-similar', 'qf-congruent', 'eig-similar-prop'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}$，$B=\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}$，则 $A$ 与 $B$（　　）

（A）合同，且相似．
（B）合同，但不相似．
（C）不合同，但相似．
（D）既不合同，也不相似．`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解】 由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&1&1\\1&\lambda-2&1\\1&1&\lambda-2\end{vmatrix}=\lambda(\lambda-3)^2=0,
$$
得 $A$ 的特征值为 $\lambda_1=0$，$\lambda_2=\lambda_3=3$；$B$ 的特征值为 $\lambda_1=\lambda_2=1$，$\lambda_3=0$．因为 $A,B$ 都是实对称矩阵，且正、负惯性指数相同，所以 $A$ 与 $B$ 合同，又因为 $A,B$ 特征值不同，所以 $A$ 与 $B$ 不相似，应选（B）．

> **方法点评**：本题考查矩阵的相似与合同关系．
> （1）设 $A,B$ 为 $n$ 阶实对称矩阵，则 $A\sim B$ 的充要条件是 $A,B$ 特征值相同；$A\cong B$ 的充要条件是 $A,B$ 特征值中正、负特征值个数相同，故若 $A,B$ 相似，则 $A,B$ 一定合同，反之不对．
> （2）设 $A,B$ 为 $n$ 阶不对称矩阵，$A\sim B$ 的必要条件是 $A,B$ 特征值相同，其中若 $A,B$ 都可对角化，则 $A\sim B$；若 $A,B$ 中一个可对角化，另一个不可对角化，则 $A,B$ 不相似．`,
  source: '《2007 年数学（一）真题解析》第 4 页',
});

EXAMS.push({
  year: 2007, subject: '数一', number: 15, kind: '填空', score: 4,
  ids: ['mat-rank', 'mat-power'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}$，则 $A^3$ 的秩为 $\underline{\qquad}$．`,
  answer: String.raw`$1$`,
  analysis: String.raw`【解】 由 $A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}$，得 $A^3=\begin{pmatrix}0&0&0&1\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$，于是 $r(A^3)=1$．`,
  source: '《2007 年数学（一）真题解析》第 6 页',
});

EXAMS.push({
  year: 2007, subject: '数一', number: 21, kind: '解答', score: 11,
  ids: ['eq-samesol', 'eq-nonhomo-crit'],
  question: String.raw`（本题满分 11 分）设线性方程组
$$
\begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0\end{cases}\tag{①}
$$
与方程
$$
x_1+2x_2+x_3=a-1\tag{②}
$$
有公共解，求 $a$ 的值及所有公共解．`,
  answer: String.raw`当 $a=1$ 时，公共解为 $X=C\begin{pmatrix}-1\\0\\1\end{pmatrix}$（$C$ 为任意常数）；当 $a=2$ 时，唯一公共解为 $X=\begin{pmatrix}0\\1\\-1\end{pmatrix}$；当 $a\ne 1$ 且 $a\ne 2$ 时，两方程组没有公共解．`,
  analysis: String.raw`【解】 令
$$
\begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0,\\x_1+2x_2+x_3=a-1.\end{cases}\tag{③}
$$
方程组①、②有公共解的充分必要条件是方程组③有解．
$$
\overline{C}=\begin{pmatrix}1&1&1&\mid&0\\1&2&a&\mid&0\\1&4&a^2&\mid&0\\1&2&1&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&3&a^2-1&\mid&0\\0&1&0&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&(a-1)(a-2)&\mid&0\\0&0&1-a&\mid&a-1\end{pmatrix},
$$
当 $a=1$ 时，方程组③为齐次线性方程组，两个方程组一定有公共解，

由 $C=\begin{pmatrix}1&1&1\\1&2&1\\1&4&1\\1&2&1\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&0\\0&3&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&0\\0&0&0\\0&0&0\end{pmatrix}$ 得

两方程组的公共解为 $X=C\begin{pmatrix}-1\\0\\1\end{pmatrix}$（$C$ 为任意常数）；

当 $a\ne 1$ 时，
$$
\overline{C}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&a-2&\mid&0\\0&0&1&\mid&-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&1&\mid&-1\\0&0&0&\mid&a-2\end{pmatrix},
$$
情形一：当 $a\ne 2$ 时，因为 $r(C)\ne r(\overline{C})$，所以两个方程组没有公共解；

情形二：当 $a=2$ 时，由 $r(C)=r(\overline{C})=3$ 得两个方程组有唯一的公共解，
$$
\overline{C}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&1&\mid&0\\0&0&1&\mid&-1\\0&0&0&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&0\\0&1&0&\mid&1\\0&0&1&\mid&-1\\0&0&0&\mid&0\end{pmatrix}
$$
得唯一公共解为 $X=\begin{pmatrix}0\\1\\-1\end{pmatrix}$．`,
  source: '《2007 年数学（一）真题解析》第 8–9 页',
});

EXAMS.push({
  year: 2007, subject: '数一', number: 22, kind: '解答', score: 11,
  ids: ['eig-ops', 'eig-symmetric', 'eig-diag-method'],
  question: String.raw`（本题满分 11 分）设 3 阶实对称矩阵 $A$ 的特征值 $\lambda_1=1$，$\lambda_2=2$，$\lambda_3=-2$，且 $\alpha_1=(1,-1,1)^{\mathrm{T}}$ 是 $A$ 的属于 $\lambda_1$ 的一个特征向量．记 $B=A^5-4A^3+E$，其中 $E$ 为 3 阶单位矩阵．

（Ⅰ）验证 $\alpha_1$ 是矩阵 $B$ 的特征向量，并求 $B$ 的全部特征值与特征向量；

（Ⅱ）求矩阵 $B$．`,
  answer: String.raw`（Ⅰ）$B\alpha_1=-2\alpha_1$，$B$ 的特征值为 $\mu_1=-2$，$\mu_2=\mu_3=1$；属于 $\mu_1=-2$ 的全部特征向量为 $k_1\alpha_1$（$k_1$ 为非零常数），属于 $\mu_2=\mu_3=1$ 的全部特征向量为 $k_2\alpha_2+k_3\alpha_3$（$k_2,k_3$ 为不全为零的常数），其中 $\alpha_2=\begin{pmatrix}1\\1\\0\end{pmatrix}$，$\alpha_3=\begin{pmatrix}-1\\0\\1\end{pmatrix}$；（Ⅱ）$B=\begin{pmatrix}0&1&-1\\1&0&1\\-1&1&0\end{pmatrix}$．`,
  analysis: String.raw`（Ⅰ）由 $A\alpha_1=\alpha_1$，得
$$
B\alpha_1=(A^5-4A^3+E)\alpha_1=A^5\alpha_1-4A^3\alpha_1+\alpha_1=(1-4+1)\alpha_1=-2\alpha_1,
$$
则 $\alpha_1$ 为矩阵 $B$ 的属于特征值 $\mu_1=-2$ 的特征向量．

$B$ 的其他两个特征值为 $\mu_2=\lambda_2^5-4\lambda_2^3+1=1$，$\mu_3=\lambda_3^5-4\lambda_3^3+1=1$，即 $\mu_2=\mu_3=1$．

因为 $A$ 为实对称矩阵，所以 $B$ 为实对称矩阵，不妨设 $B$ 的属于特征值 $\mu_2=\mu_3=1$ 的特征向量为 $\alpha=(x_1,x_2,x_3)^{\mathrm{T}}$．

因为实对称矩阵不同特征值对应的特征向量正交，所以 $\alpha_1^{\mathrm{T}}\alpha=0$，即 $x_1-x_2+x_3=0$，于是 $B$ 的属于特征值 $\mu_2=\mu_3=1$ 的线性无关的特征向量为 $\alpha_2=\begin{pmatrix}1\\1\\0\end{pmatrix}$，$\alpha_3=\begin{pmatrix}-1\\0\\1\end{pmatrix}$，

故 $B$ 的属于特征值 $\mu_1=-2$ 的全部特征向量为 $k_1\alpha_1$（$k_1$ 为任意的非零常数），$B$ 的属于特征值 $\mu_2=\mu_3=1$ 的全部特征向量为 $k_2\alpha_2+k_3\alpha_3$（$k_2,k_3$ 为任意的不全为零的常数）．

（Ⅱ）方法一 令 $\beta_1=\alpha_1=\begin{pmatrix}1\\-1\\1\end{pmatrix}$，$\beta_2=\begin{pmatrix}1\\1\\0\end{pmatrix}$，$\beta_3=\alpha_3-\dfrac{(\alpha_3,\beta_2)}{(\beta_2,\beta_2)}\beta_2=\dfrac{1}{2}\begin{pmatrix}-1\\1\\2\end{pmatrix}$，

单位化得 $\gamma_1=\dfrac{1}{\sqrt{3}}\begin{pmatrix}1\\-1\\1\end{pmatrix}$，$\gamma_2=\dfrac{1}{\sqrt{2}}\begin{pmatrix}1\\1\\0\end{pmatrix}$，$\gamma_3=\dfrac{1}{\sqrt{6}}\begin{pmatrix}-1\\1\\2\end{pmatrix}$，
$$
\text{令 }P=\begin{pmatrix}\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\\-\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{6}}\\\dfrac{1}{\sqrt{3}}&0&\dfrac{2}{\sqrt{6}}\end{pmatrix},\text{则 }P^{\mathrm{T}}BP=\begin{pmatrix}-2&0&0\\0&1&0\\0&0&1\end{pmatrix},
$$
于是 $B=P\begin{pmatrix}-2&0&0\\0&1&0\\0&0&1\end{pmatrix}P^{\mathrm{T}}=\begin{pmatrix}0&1&-1\\1&0&1\\-1&1&0\end{pmatrix}$．

方法二 令 $P=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&1&-1\\-1&1&0\\1&0&1\end{pmatrix}$，
$$
\text{由 }P^{-1}BP=\begin{pmatrix}-2&0&0\\0&1&0\\0&0&1\end{pmatrix},\text{得 }B=P\begin{pmatrix}-2&0&0\\0&1&0\\0&0&1\end{pmatrix}P^{-1}=\begin{pmatrix}0&1&-1\\1&0&1\\-1&1&0\end{pmatrix}.
$$`,
  source: '《2007 年数学（一）真题解析》第 9–10 页',
});

