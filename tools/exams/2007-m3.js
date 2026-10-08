// 2007 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2007 年卷；答案与解析取自《2007 年数学三真题答案解析》）
EXAMS.push({
  year: 2007, subject: '数三', number: 7, kind: '选择', score: 4,
  ids: ['vec-indep-crit', 'vec-indep-concl', 'vec-rank-vs-mat'],
  question: String.raw`设向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则下列向量组线性相关的是（　　）
（A）$\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_1$
（B）$\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1$
（C）$\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1$
（D）$\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1$`,
  answer: String.raw`（A）`,
  analysis: String.raw`【详解】方法 1：根据线性相关的定义，若存在不全为零的数 $k_1,k_2,k_3$，使得 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=0$ 成立，则称 $\alpha_1,\alpha_2,\alpha_3$ 线性相关。

因 $(\alpha_1-\alpha_2)+(\alpha_2-\alpha_3)+(\alpha_3-\alpha_1)=0$，故 $\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_1$ 线性相关，所以选择（A）。

方法 2：排除法。

因为
$$
(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}=(\alpha_1,\alpha_2,\alpha_3)C_2,\quad\text{其中 }C_2=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},
$$
且
$$
|C_2|=\begin{vmatrix}1&0&1\\1&1&0\\0&1&1\end{vmatrix}\xrightarrow{1\text{ 行}\times(-1)+2\text{ 行}}\begin{vmatrix}1&0&1\\0&1&-1\\0&1&1\end{vmatrix}=1\times 1-1\times(-1)=2\ne 0.
$$
故 $C_2$ 是可逆矩阵，由可逆矩阵可以表示为若干个初等矩阵的乘积，$C_2$ 右乘 $(\alpha_1,\alpha_2,\alpha_3)$ 时等于作若干次初等变换，初等变换不改变矩阵的秩，故有
$$
r(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)=r(\alpha_1,\alpha_2,\alpha_3)=3,
$$
所以 $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1$ 线性无关，排除（B）。

因为
$$
(\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&-2\\-2&1&0\\0&-2&1\end{pmatrix}=(\alpha_1,\alpha_2,\alpha_3)C_3,
$$
且
$$
|C_3|=\begin{vmatrix}1&0&-2\\-2&1&0\\0&-2&1\end{vmatrix}\xrightarrow{1\text{ 行}\times 2+2\text{ 行}}\begin{vmatrix}1&0&-2\\0&1&-4\\0&-2&1\end{vmatrix}=1\times 1-(-2)\times(-4)=-7\ne 0,
$$
故 $C_3$ 可逆，$r(\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1)=r(\alpha_1,\alpha_2,\alpha_3)=3$，所以 $\alpha_1-2\alpha_2,\alpha_2-2\alpha_3,\alpha_3-2\alpha_1$ 线性无关，排除（C）。

因为
$$
(\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&2\\2&1&0\\0&2&1\end{pmatrix}=(\alpha_1,\alpha_2,\alpha_3)C_4,
$$
且
$$
|C_4|=\begin{vmatrix}1&0&2\\2&1&0\\0&2&1\end{vmatrix}\xrightarrow{1\text{ 行}\times(-2)+2\text{ 行}}\begin{vmatrix}1&0&2\\0&1&-4\\0&2&1\end{vmatrix}=1\times 1-2\times(-4)=9\ne 0,
$$
故 $C_4$ 可逆，$r(\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1)=r(\alpha_1,\alpha_2,\alpha_3)=3$，所以 $\alpha_1+2\alpha_2,\alpha_2+2\alpha_3,\alpha_3+2\alpha_1$ 线性无关，排除（D）。

综上知应选（A）。`,
  source: '《2007 年数学三真题答案解析》第 4–5 页',
});

EXAMS.push({
  year: 2007, subject: '数三', number: 8, kind: '选择', score: 4,
  ids: ['qf-contract-vs-similar', 'eig-similar-prop', 'eig-symmetric'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}$，$B=\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}$，则 $A$ 与 $B$（　　）
（A）合同且相似　　（B）合同，但不相似
（C）不合同，但相似　　（D）既不合同，也不相似`,
  answer: String.raw`（B）`,
  analysis: String.raw`【详解】方法 1：
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&1&1\\1&\lambda-2&1\\1&1&\lambda-2\end{vmatrix}\xrightarrow{2,3\text{ 列分别加到 }1\text{ 列}}\begin{vmatrix}\lambda&1&1\\\lambda&\lambda-2&1\\\lambda&1&\lambda-2\end{vmatrix}\xrightarrow{\text{提出 }\lambda}\lambda\begin{vmatrix}1&1&1\\1&\lambda-2&1\\1&1&\lambda-2\end{vmatrix}
$$
$$
\xrightarrow{1\text{ 行}\times(-1)+2\text{ 行},\ 1\text{ 行}\times(-1)+3\text{ 行}}\lambda\begin{vmatrix}1&1&1\\0&\lambda-3&0\\0&0&\lambda-3\end{vmatrix}=\lambda(\lambda-3)^2=0,
$$
则 $A$ 的特征值为 $3,3,0$；$B$ 是对角阵，对应元素即是 $B$ 的特征值，则 $B$ 的特征值为 $1,1,0$。$A,B$ 的特征值不相同，由相似矩阵的特征值相同知，$A$ 与 $B$ 不相似。

由 $A,B$ 的特征值可知，$A,B$ 的正惯性指数都是 $2$，又秩都等于 $2$ 可知负惯性指数也相同，则由实对称矩阵合同的充要条件是有相同的正惯性指数和相同的负惯性指数，知 $A$ 与 $B$ 合同，应选（B）。

方法 2：因为 $\operatorname{tr}(A)=2+2+2=6$，$\operatorname{tr}(B)=1+1=2\ne 6$，所以 $A$ 与 $B$ 不相似（不满足相似的必要条件）。又 $|\lambda E-A|=\lambda(\lambda-3)^2$，$|\lambda E-B|=\lambda(\lambda-1)^2$，$A$ 与 $B$ 是同阶实对称矩阵，其秩相等，且有相同的正惯性指数，故 $A$ 与 $B$ 合同。`,
  source: '《2007 年数学三真题答案解析》第 5–6 页',
});

EXAMS.push({
  year: 2007, subject: '数三', number: 15, kind: '填空', score: 4,
  ids: ['mat-power', 'mat-rank'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}$，则 $A^3$ 的秩为 $\underline{\qquad}$。`,
  answer: String.raw`$1$。`,
  analysis: String.raw`【详解】
$$
A^2=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}=\begin{pmatrix}0&0&1&0\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix},
$$
$$
A^3=A^2A=\begin{pmatrix}0&0&1&0\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix}\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}=\begin{pmatrix}0&0&0&1\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}.
$$
由阶梯矩阵的行秩等于列秩，其值等于阶梯形矩阵的非零行的行数，知 $r(A^3)=1$。`,
  source: '《2007 年数学三真题答案解析》第 8–9 页',
});

EXAMS.push({
  year: 2007, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ['eq-samesol', 'eq-nonhomo-crit', 'eq-homo-general'],
  question: String.raw`（本题满分 11 分）设线性方程组
$$
\begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0\end{cases}\tag{①}
$$
与方程组
$$
x_1+2x_2+x_3=a-1\tag{②}
$$
有公共解，求 $a$ 的值及所有公共解。`,
  answer: String.raw`当 $a=1$ 时，公共解为 $k(1,0,-1)^{\mathrm{T}}$（$k$ 为任意常数）；当 $a=2$ 时，公共解为 $(0,1,-1)^{\mathrm{T}}$。`,
  analysis: String.raw`【详解】方法 1：联立方程组
$$
\begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0,\\x_1+2x_2+x_3=a-1.\end{cases}\tag{③}
$$
对联立方程组的增广矩阵作初等行变换
$$
(\overline{A},b)=\begin{pmatrix}1&1&1&\mid&0\\1&2&a&\mid&0\\1&4&a^2&\mid&0\\1&2&1&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&3&a^2-1&\mid&0\\0&1&0&\mid&a-1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&a-1&\mid&1-a\\0&0&a^2-1&\mid&3-3a\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&a-1&\mid&1-a\\0&0&0&\mid&(a-1)(a-2)\end{pmatrix}.
$$
由此知，要使此线性方程组有解，$a$ 必须满足 $(a-1)(a-2)=0$，即 $a=1$ 或 $a=2$。

当 $a=1$ 时，$r(A)=2$，联立方程组③的同解方程组为
$$
\begin{cases}x_1+x_2+x_3=0,\\x_2=0,\end{cases}
$$
由 $r(A)=2$，方程组有 $n-r=3-2=1$ 个自由未知量。选 $x_1$ 为自由未知量，取 $x_1=1$，解得两方程组的公共解为 $k(1,0,-1)^{\mathrm{T}}$，其中 $k$ 是任意常数。

当 $a=2$ 时，联立方程组③的同解方程组为
$$
\begin{cases}x_1+x_2+x_3=0,\\x_2=0,\\x_3=-1,\end{cases}
$$
解得两方程的公共解为 $(0,1,-1)^{\mathrm{T}}$。

方法 2：将方程组①的系数矩阵 $A$ 作初等行变换
$$
A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&a-1\\0&3&a^2-1\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&a-1\\0&0&(a-1)(a-2)\end{pmatrix}.
$$
当 $a=1$ 时，$r(A)=2$，方程组①的同解方程组为
$$
\begin{cases}x_1+x_2+x_3=0,\\x_2=0,\end{cases}
$$
方程组有 $n-r=3-2=1$ 个自由未知量。选 $x_1$ 为自由未知量，取 $x_1=1$，解得①的通解为 $k(1,0,-1)^{\mathrm{T}}$，其中 $k$ 是任意常数。将通解 $k(1,0,-1)^{\mathrm{T}}$ 代入方程②得 $k+0+(-k)=0$，对任意的 $k$ 成立，故当 $a=1$ 时，$k(1,0,-1)^{\mathrm{T}}$ 是①、②的公共解。

当 $a=2$ 时，$r(A)=2$，方程组①的同解方程组为
$$
\begin{cases}x_1+x_2+x_3=0,\\x_2+x_3=0,\end{cases}
$$
方程组有 $n-r=3-2=1$ 个自由未知量。选 $x_2$ 为自由未知量，取 $x_2=1$，解得①的通解为 $\mu(0,1,-1)^{\mathrm{T}}$，其中 $\mu$ 是任意常数。将通解 $\mu(0,1,-1)^{\mathrm{T}}$ 代入方程②得 $2\mu-\mu=1$，即 $\mu=1$，故当 $a=2$ 时，①和②的公共解为 $(0,1,-1)^{\mathrm{T}}$。`,
  source: '《2007 年数学三真题答案解析》第 12–13 页',
});

EXAMS.push({
  year: 2007, subject: '数三', number: 22, kind: '解答', score: 11,
  ids: ['eig-ops', 'eig-symmetric', 'eig-orth-diag'],
  question: String.raw`（本题满分 11 分）设 $3$ 阶实对称矩阵 $A$ 的特征值 $\lambda_1=1,\lambda_2=2,\lambda_3=-2$，且 $\alpha_1=(1,-1,1)^{\mathrm{T}}$ 是 $A$ 的属于 $\lambda_1$ 的一个特征向量。记 $B=A^5-4A^3+E$，其中 $E$ 为 $3$ 阶单位矩阵。

（Ⅰ）验证 $\alpha_1$ 是矩阵 $B$ 的特征向量，并求 $B$ 的全部特征值与特征向量；

（Ⅱ）求矩阵 $B$。`,
  answer: String.raw`（Ⅰ）$B\alpha_1=-2\alpha_1$，$B$ 的特征值为 $-2,1,1$；属于 $-2$ 的全部特征向量为 $k_1\alpha_1$（$k_1$ 为非零常数），属于 $1$ 的全部特征向量为 $k_2\alpha_2+k_3\alpha_3$（$k_2,k_3$ 不同时为零），其中 $\alpha_2=(-1,0,1)^{\mathrm{T}},\alpha_3=(1,1,0)^{\mathrm{T}}$；（Ⅱ）$B=\begin{pmatrix}0&1&-1\\1&0&1\\-1&1&0\end{pmatrix}$。`,
  analysis: String.raw`【详解】（Ⅰ）由 $A\alpha_1=\alpha_1$，可得 $A^k\alpha_1=A^{k-1}(A\alpha_1)=A^{k-1}\alpha_1=\cdots=\alpha_1$，$k$ 是正整数，故
$$
B\alpha_1=(A^5-4A^3+E)\alpha_1=A^5\alpha_1-4A^3\alpha_1+E\alpha_1=\alpha_1-4\alpha_1+\alpha_1=-2\alpha_1,
$$
于是 $\alpha_1$ 是矩阵 $B$ 的特征向量（对应的特征值为 $\lambda_1'=-2$）。

若 $Ax=\lambda x$，则 $(kA)x=(k\lambda)x$，$A^mx=\lambda^mx$，因此对任意多项式 $f(x)$，$f(A)x=f(\lambda)x$，即 $f(\lambda)$ 是 $f(A)$ 的特征值。

故 $B$ 的特征值可以由 $A$ 的特征值以及 $B$ 与 $A$ 的关系得到，$A$ 的特征值 $\lambda_1=1,\lambda_2=2,\lambda_3=-2$，则 $B$ 有特征值 $\lambda_1'=f(\lambda_1)=-2$，$\lambda_2'=f(\lambda_2)=1$，$\lambda_3'=f(\lambda_3)=1$，所以 $B$ 的全部特征值为 $-2,1,1$。

由 $A$ 是实对称矩阵及 $B$ 与 $A$ 的关系可以知道，$B$ 也是实对称矩阵，属于不同的特征值的特征向量正交。由前面证明知 $\alpha_1$ 是矩阵 $B$ 的属于特征值 $\lambda_1'=-2$ 的特征向量，设 $B$ 的属于 $1$ 的特征向量为 $(x_1,x_2,x_3)^{\mathrm{T}}$，$\alpha_1$ 与 $(x_1,x_2,x_3)^{\mathrm{T}}$ 正交，所以有方程如下：
$$
x_1-x_2+x_3=0.
$$
选 $x_2,x_3$ 为自由未知量，取 $x_2=0,x_3=1$ 和 $x_2=1,x_3=0$，于是求得 $B$ 的属于 $1$ 的特征向量为
$$
\alpha_2=(-1,0,1)^{\mathrm{T}},\quad \alpha_3=(1,1,0)^{\mathrm{T}}.
$$
故 $B$ 的所有的特征向量为：对应于 $\lambda_1'=-2$ 的全体特征向量为 $k_1\alpha_1$，其中 $k_1$ 是非零任意常数；对应于 $\lambda_2'=\lambda_3'=1$ 的全体特征向量为 $k_2\alpha_2+k_3\alpha_3$，其中 $k_2,k_3$ 是不同时为零的任意常数。

（Ⅱ）方法 1：令矩阵 $P=[\alpha_1,\alpha_2,\alpha_3]=\begin{pmatrix}1&-1&1\\-1&0&1\\1&1&0\end{pmatrix}$，求逆矩阵 $P^{-1}$：
$$
[P\ \vdots\ E]=\begin{pmatrix}1&-1&1&1&0&0\\-1&0&1&0&1&0\\1&1&0&0&0&1\end{pmatrix}\xrightarrow{1\text{ 行}+2\text{ 行}}\begin{pmatrix}1&-1&1&1&0&0\\0&-1&2&1&1&0\\1&1&0&0&0&1\end{pmatrix}
$$
$$
\xrightarrow{1\text{ 行}+3\text{ 行}}\begin{pmatrix}1&-1&1&1&0&0\\0&-1&2&1&1&0\\0&2&-1&-1&0&1\end{pmatrix}\xrightarrow{3\text{ 行}\times 2+2\text{ 行}}\begin{pmatrix}1&-1&1&1&0&0\\0&-1&2&1&1&0\\0&0&3&1&2&1\end{pmatrix}
$$
$$
\xrightarrow{3\text{ 行}/3}\begin{pmatrix}1&-1&1&1&0&0\\0&-1&2&1&1&0\\0&0&1&\frac{1}{3}&\frac{2}{3}&\frac{1}{3}\end{pmatrix}\xrightarrow{3\text{ 行}\times(-2)+2\text{ 行}}\begin{pmatrix}1&-1&1&1&0&0\\0&-1&0&\frac{1}{3}&-\frac{1}{3}&-\frac{2}{3}\\0&0&1&\frac{1}{3}&\frac{2}{3}&\frac{1}{3}\end{pmatrix}
$$
$$
\xrightarrow{3\text{ 行}\times(-1)+1\text{ 行}}\begin{pmatrix}1&-1&0&\frac{2}{3}&-\frac{2}{3}&-\frac{1}{3}\\0&-1&0&\frac{1}{3}&-\frac{1}{3}&-\frac{2}{3}\\0&0&1&\frac{1}{3}&\frac{2}{3}&\frac{1}{3}\end{pmatrix}\xrightarrow{2\text{ 行}\times(-1)+1\text{ 行}}\begin{pmatrix}1&0&0&\frac{1}{3}&-\frac{1}{3}&\frac{1}{3}\\0&-1&0&\frac{1}{3}&-\frac{1}{3}&-\frac{2}{3}\\0&0&1&\frac{1}{3}&\frac{2}{3}&\frac{1}{3}\end{pmatrix}
$$
$$
\xrightarrow{2\text{ 行}\times(-1)}\begin{pmatrix}1&0&0&\frac{1}{3}&-\frac{1}{3}&\frac{1}{3}\\0&1&0&-\frac{1}{3}&\frac{1}{3}&\frac{2}{3}\\0&0&1&\frac{1}{3}&\frac{2}{3}&\frac{1}{3}\end{pmatrix},
$$
则
$$
P^{-1}=\frac{1}{3}\begin{pmatrix}1&-1&1\\-1&1&2\\1&2&1\end{pmatrix}.
$$
又 $P^{-1}BP=\operatorname{diag}(-2,1,1)$，所以
$$
B=P\begin{pmatrix}-2&&\\&1&\\&&1\end{pmatrix}P^{-1}=\frac{1}{3}\begin{pmatrix}1&-1&1\\-1&0&1\\1&1&0\end{pmatrix}\begin{pmatrix}-2&&\\&1&\\&&1\end{pmatrix}\begin{pmatrix}1&-1&1\\-1&1&2\\1&2&1\end{pmatrix}
$$
$$
=\frac{1}{3}\begin{pmatrix}1&-1&1\\-1&0&1\\1&1&0\end{pmatrix}\begin{pmatrix}-2&2&-2\\-1&1&2\\1&2&1\end{pmatrix}=\frac{1}{3}\begin{pmatrix}0&3&-3\\3&0&3\\-3&3&0\end{pmatrix}=\begin{pmatrix}0&1&-1\\1&0&1\\-1&1&0\end{pmatrix}.
$$

方法 2：由（Ⅰ）知 $\alpha_1$ 与 $\alpha_2,\alpha_3$ 分别属于不同特征值，$\alpha_2,\alpha_3$ 属于同一特征值，将 $\alpha_2,\alpha_3$ 正交化，取
$$
\beta_2=\alpha_2,\quad \beta_3=\alpha_3+k_{12}\beta_2=(1,1,0)+\left(-\frac{1}{2},0,\frac{1}{2}\right)=\left(\frac{1}{2},1,\frac{1}{2}\right),
$$
其中 $k_{12}=-\dfrac{(\alpha_3,\beta_2)}{(\beta_2,\beta_2)}=-\dfrac{1\times(-1)}{(-1)\times(-1)+1\times 1}\beta_2=\left(-\frac{1}{2},0,\frac{1}{2}\right)$。再将 $\alpha_1,\beta_2,\beta_3$ 单位化，得
$$
\xi_1=\frac{\alpha_1}{|\alpha_1|}=\frac{1}{\sqrt{3}}(1,-1,1)^{\mathrm{T}},\quad \xi_2=\frac{\beta_2}{|\beta_2|}=\frac{1}{\sqrt{2}}(-1,0,1)^{\mathrm{T}},\quad \xi_3=\frac{\beta_3}{|\beta_3|}=\frac{\sqrt{2}}{\sqrt{3}}\left(\frac{1}{2},1,\frac{1}{2}\right)^{\mathrm{T}},
$$
令正交矩阵 $Q=(\xi_1,\xi_2,\xi_3)$，则 $Q^{-1}BQ=\operatorname{diag}(-2,1,1)$，即 $B=Q\operatorname{diag}(-2,1,1)Q^{-1}$，由正交矩阵的性质 $Q^{-1}=Q^{\mathrm{T}}$，同样可算得 $B=\begin{pmatrix}0&1&-1\\1&0&1\\-1&1&0\end{pmatrix}$。`,
  source: '《2007 年数学三真题答案解析》第 13–15 页',
});
