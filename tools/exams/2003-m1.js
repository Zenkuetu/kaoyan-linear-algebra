// 2003 · 数学一 · 线性代数（题面取自《2003年考研数学（一）真题》，答案与解析取自《2003数学一解析》；本卷填空/选择各自编号，故 number 用大类号×100+小题号并加 label）
EXAMS.push({
  year: 2003, subject: '数一', number: 104, kind: '填空', score: 4, label: '填空题第 4 题',
  ids: ['sp-transition', 'sp-dim-basis'],
  question: String.raw`从 $\mathbf{R}^2$ 的基 $\alpha_1=\begin{pmatrix}1\\0\end{pmatrix}$，$\alpha_2=\begin{pmatrix}1\\-1\end{pmatrix}$ 到基 $\beta_1=\begin{pmatrix}1\\1\end{pmatrix}$，$\beta_2=\begin{pmatrix}1\\2\end{pmatrix}$ 的过渡矩阵为 $\underline{\qquad}$．`,
  answer: String.raw`$\begin{pmatrix}2&3\\-1&-2\end{pmatrix}$`,
  analysis: String.raw`【解】 令 $A=(\alpha_1,\alpha_2)$，$B=(\beta_1,\beta_2)$．

设从基 $\alpha_1,\alpha_2$ 到基 $\beta_1,\beta_2$ 的过渡矩阵为 $Q$，则 $B=AQ$，于是 $Q=A^{-1}B=\begin{pmatrix}2&3\\-1&-2\end{pmatrix}$．`,
  source: '《2003 年数学（一）真题解析》第 1 页',
});

EXAMS.push({
  year: 2003, subject: '数一', number: 204, kind: '选择', score: 4, label: '选择题第 4 题',
  ids: ['vec-express-crit', 'vec-rank-table', 'vec-indep-concl'],
  question: String.raw`设向量组 I：$\alpha_1,\alpha_2,\cdots,\alpha_r$ 可由向量组 II：$\beta_1,\beta_2,\cdots,\beta_s$ 线性表示，则（　　）

（A）当 $r<s$ 时，向量组 II 必线性相关．
（B）当 $r>s$ 时，向量组 II 必线性相关．
（C）当 $r<s$ 时，向量组 I 必线性相关．
（D）当 $r>s$ 时，向量组 I 必线性相关．`,
  answer: String.raw`（D）`,
  analysis: String.raw`（10）【答案】 （D）．

【解】 方法一 因为向量组 I 可由向量组 II 线性表示，所以 $r(\text{I})\le r(\text{II})$，

显然 $r(\text{II})\le s$，于是 $r(\text{I})\le s$．

当 $r>s$ 时，因为 $r(\text{I})\le s<r$，即向量组 I 的秩小于向量组 I 所含的向量个数，所以向量组 I 线性相关，应选（D）．

方法二 取 I：$\alpha_1=\begin{pmatrix}1\\2\end{pmatrix}$，II：$\beta_1=\begin{pmatrix}1\\0\end{pmatrix},\beta_2=\begin{pmatrix}0\\1\end{pmatrix}$，显然向量组 I 可由向量组 II 线性表示且 $r<s$，但向量组 II 线性无关，（A），（C）不对；
$$
\text{取 I：}\alpha_1=\begin{pmatrix}1\\1\end{pmatrix},\alpha_2=\begin{pmatrix}2\\2\end{pmatrix},\text{II：}\beta_1=\begin{pmatrix}1\\1\end{pmatrix},\text{显然向量组 I 可由向量组 II 线性表示且 }r>s,
$$
但向量组 II 线性无关，（B）不对，应选（D）．`,
  source: '《2003 年数学（一）真题解析》第 3 页',
});

EXAMS.push({
  year: 2003, subject: '数一', number: 205, kind: '选择', score: 4, label: '选择题第 5 题',
  ids: ['eq-samesol', 'eq-homo-sol', 'eq-rank-relation'],
  question: String.raw`设有齐次线性方程组 $Ax=0$ 和 $Bx=0$，其中 $A,B$ 均为 $m\times n$ 矩阵，现有 4 个命题：

①若 $Ax=0$ 的解均是 $Bx=0$ 的解，则秩$(A)\ge$秩$(B)$；

②若秩$(A)\ge$秩$(B)$，则 $Ax=0$ 的解均是 $Bx=0$ 的解；

③若 $Ax=0$ 与 $Bx=0$ 同解，则秩$(A)=$秩$(B)$；

④若秩$(A)=$秩$(B)$，则 $Ax=0$ 与 $Bx=0$ 同解．

以上命题中正确的是（　　）

（A）①②．
（B）①③．
（C）②④．
（D）③④．`,
  answer: String.raw`（B）`,
  analysis: String.raw`（11）【答案】 （B）．

【解】 方法一 若 $AX=0$ 的解为 $BX=0$ 的解，则 $AX=0$ 的基础解系所含的线性无关的解向量的个数不超过 $BX=0$ 的基础解系所含的线性无关的解向量个数，即 $n-r(A)\le n-r(B)$，从而 $r(A)\ge r(B)$；

若 $AX=0$ 与 $BX=0$ 同解，则 $r(A)=r(B)$，反之不对，故应选（B）．

方法二 取 $A=\begin{pmatrix}1&1&-2\\1&0&-1\end{pmatrix}$，$B=(1\ \ 1\ \ 1)$，$r(A)=2\ge r(B)=1$，
$$
\text{但 }X=\begin{pmatrix}1\\1\\1\end{pmatrix}\text{ 为 }AX=0\text{ 的解，不是 }BX=0\text{ 的解，第 2 个命题不对}；
$$
取 $A=(1\ \ 1\ \ -1)$，$B=(1\ \ -1\ \ -1)$，$r(A)=r(B)$，但 $AX=0$ 与 $BX=0$ 不同解，第 4 个命题不对，应选（B）．

> **方法点评**：本题考查两个齐次线性方程组的解与系数矩阵的秩的关系．
> 齐次线性方程组系数矩阵的秩即为方程组中约束条件的个数，系数矩阵的秩大则约束条件越多，解就越少；系数矩阵的秩小则约束条件越少，解就越多．设 $AX=0$ 与 $BX=0$ 为两个齐次线性方程组，则：
> （1）若 $AX=0$ 与 $BX=0$ 同解，则 $r(A)=r(B)$，反之不对；
> （2）若 $AX=0$ 的解为 $BX=0$ 的解，则 $r(A)\ge r(B)$；
> （3）若 $AX=0$ 的解为 $BX=0$ 的解，反之不对，则 $r(A)>r(B)$；
> （4）若 $AX=0$ 的解为 $BX=0$ 的解，且 $r(A)=r(B)$，则 $AX=0$ 与 $BX=0$ 同解．`,
  source: '《2003 年数学（一）真题解析》第 3 页',
});

EXAMS.push({
  year: 2003, subject: '数一', number: 309, kind: '解答', score: 10, label: '解答题第 9 题',
  ids: ['eig-ops', 'mat-adj-identity', 'eig-similar-prop'],
  question: String.raw`（本题满分 10 分）设矩阵 $A=\begin{pmatrix}3&2&2\\2&3&2\\2&2&3\end{pmatrix}$，$P=\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}$，$B=P^{-1}A^{*}P$，求 $B+2E$ 的特征值与特征向量，其中 $A^{*}$ 为 $A$ 的伴随矩阵，$E$ 为 3 阶单位矩阵．`,
  answer: String.raw`$B+2E$ 的特征值为 $\lambda_1=3$，$\lambda_2=\lambda_3=9$；属于 $\lambda_1=3$ 的全部特征向量为 $k_1\begin{pmatrix}0\\1\\1\end{pmatrix}$（$k_1$ 为非零常数）；属于 $\lambda_2=\lambda_3=9$ 的全部特征向量为 $k_2\begin{pmatrix}-1\\1\\0\end{pmatrix}+k_3\begin{pmatrix}-2\\0\\1\end{pmatrix}$（$k_2,k_3$ 为不全为零的常数）．`,
  analysis: String.raw`（19）【解】 方法一
$$
|A|=\begin{vmatrix}3&2&2\\2&3&2\\2&2&3\end{vmatrix}=7,
$$
$$
\text{由}\begin{pmatrix}3&2&2&\mid&1&0&0\\2&3&2&\mid&0&1&0\\2&2&3&\mid&0&0&1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&\dfrac{1}{7}&\dfrac{1}{7}&\dfrac{1}{7}\\0&1&0&\mid&-\dfrac{2}{7}&\dfrac{5}{7}&-\dfrac{2}{7}\\0&0&1&\mid&-\dfrac{2}{7}&-\dfrac{2}{7}&\dfrac{5}{7}\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&\dfrac{5}{7}&-\dfrac{2}{7}&-\dfrac{2}{7}\\0&1&0&\mid&-\dfrac{2}{7}&\dfrac{5}{7}&-\dfrac{2}{7}\\0&0&1&\mid&-\dfrac{2}{7}&-\dfrac{2}{7}&\dfrac{5}{7}\end{pmatrix}
$$
得 $A^{*}=|A|A^{-1}=\begin{pmatrix}5&-2&-2\\-2&5&-2\\-2&-2&5\end{pmatrix}$．
$$
\text{由}\begin{pmatrix}0&1&0&\mid&1&0&0\\1&0&1&\mid&0&1&0\\0&0&1&\mid&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&1&\mid&0&1&0\\0&1&0&\mid&1&0&0\\0&0&1&\mid&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&0&1&-1\\0&1&0&\mid&1&0&0\\0&0&1&\mid&0&0&1\end{pmatrix},
$$
得 $P^{-1}=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}$，
$$
\text{于是 }B=P^{-1}A^{*}P=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}5&-2&-2\\-2&5&-2\\-2&-2&5\end{pmatrix}\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}=\begin{pmatrix}7&0&0\\-2&5&-4\\-2&-2&3\end{pmatrix}.
$$
$$
B+2E=\begin{pmatrix}9&0&0\\-2&7&-4\\-2&-2&5\end{pmatrix}.
$$
$$
\text{由 }|\lambda E-(B+2E)|=\begin{vmatrix}\lambda-9&0&0\\2&\lambda-7&4\\2&2&\lambda-5\end{vmatrix}=(\lambda-3)(\lambda-9)^2=0,
$$
得 $B+2E$ 的特征值为 $\lambda_1=3,\lambda_2=\lambda_3=9$．

当 $\lambda_1=3$ 时，解方程组 $[3E-(B+2E)]X=0$，
$$
\text{由 }3E-(B+2E)=\begin{pmatrix}-6&0&0\\2&-4&4\\2&2&-2\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&-1\\0&0&0\end{pmatrix},\text{得 }B+2E\text{ 的属于特征值 }\lambda_1=3
$$
的特征向量为 $\xi_1=\begin{pmatrix}0\\1\\1\end{pmatrix}$；

当 $\lambda_2=\lambda_3=9$ 时，解方程组 $[9E-(B+2E)]X=0$，
$$
\text{由 }9E-(B+2E)=\begin{pmatrix}0&0&0\\2&2&4\\2&2&4\end{pmatrix}\to\begin{pmatrix}1&1&2\\0&0&0\\0&0&0\end{pmatrix},\text{得 }B+2E\text{ 的属于特征值 }\lambda_2=\lambda_3=9\text{ 的线}
$$
性无关的特征向量为 $\xi_2=\begin{pmatrix}-1\\1\\0\end{pmatrix},\xi_3=\begin{pmatrix}-2\\0\\1\end{pmatrix}$．

故 $B+2E$ 的特征值为 $\lambda_1=3,\lambda_2=\lambda_3=9$，属于 $\lambda_1=3$ 的全部特征向量为 $k_1\xi_1$（$k_1$ 为任意非零常数）；属于 $\lambda_2=\lambda_3=9$ 的全部特征向量为 $k_2\xi_2+k_3\xi_3$（$k_2,k_3$ 为不全为零的任意常数）．

方法二
$$
\text{由 }|\lambda E-A|=\begin{vmatrix}\lambda-3&-2&-2\\-2&\lambda-3&-2\\-2&-2&\lambda-3\end{vmatrix}=(\lambda-1)^2(\lambda-7)=0\text{ 得矩阵 }A\text{ 的特征值为 }\lambda_1=\lambda_2=1,\lambda_3=7,
$$
$\lambda_1=\lambda_2=1$ 代入 $(\lambda E-A)X=0$，
$$
\text{由 }E-A\to\begin{pmatrix}1&1&1\\0&0&0\\0&0&0\end{pmatrix}\text{得 }A\text{ 的属于 }\lambda_1=\lambda_2=1\text{ 的线性无关的特征向量为}
$$
$$
\alpha_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\alpha_2=\begin{pmatrix}-1\\0\\1\end{pmatrix};
$$
$\lambda_3=7$ 代入 $(\lambda E-A)X=0$，
$$
\text{由 }7E-A\to\begin{pmatrix}1&0&-1\\0&1&-1\\0&0&0\end{pmatrix}\text{得 }A\text{ 的属于 }\lambda_3=7\text{ 的特征向量为 }\alpha_3=\begin{pmatrix}1\\1\\1\end{pmatrix}.
$$
$$
|A|=7,A^{*}\text{ 的特征值为 }\frac{|A|}{\lambda_1}=7,\frac{|A|}{\lambda_2}=7,\frac{|A|}{\lambda_3}=1,
$$
因为 $B\sim A^{*}$，所以 $B$ 的特征值为 $\lambda_1=\lambda_2=7,\lambda_3=1$，从而 $B+2E$ 的特征值为 $9,9,3$．

$B+2E$ 的相应于特征值 $9,9,3$ 对应的线性无关的特征向量为
$$
\beta_1=P^{-1}\alpha_1=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}-1\\1\\0\end{pmatrix}=\begin{pmatrix}1\\-1\\0\end{pmatrix},
$$
$$
\beta_2=P^{-1}\alpha_2=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}-1\\0\\1\end{pmatrix}=\begin{pmatrix}-1\\-1\\1\end{pmatrix},
$$
$$
\beta_3=P^{-1}\alpha_3=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1\\1\\1\end{pmatrix}=\begin{pmatrix}0\\1\\1\end{pmatrix}.
$$

> **方法点评**：本题考查矩阵的特征值与特征向量．
> 矩阵与其关联的矩阵特征值与特征向量之间有一定的关系，主要有如下结论：
> （1）设 $A\alpha=\lambda_0\alpha$，则 $f(A)\alpha=f(\lambda_0)\alpha$，
> 特别地，若 $A$ 可逆，则 $\begin{cases}A^{-1}\alpha=\dfrac{1}{\lambda_0}\alpha,\\A^{*}\alpha=\dfrac{|A|}{\lambda_0}\alpha,\end{cases}$ 即 $A$ 与 $A^{-1},A^{*}$ 特征向量相同．
> （2）设 $A\alpha=\lambda_0\alpha$ 且 $P^{-1}AP=B$，则 $B\cdot P^{-1}\alpha=\lambda_0P^{-1}\alpha$，即 $A$ 与 $B$ 特征值相同，$B$ 的属于特征值 $\lambda_0$ 的特征向量为 $P^{-1}\alpha$．`,
  source: '《2003 年数学（一）真题解析》第 7–9 页',
});

EXAMS.push({
  year: 2003, subject: '数一', number: 410, kind: '解答', score: 8, label: '证明题第 10 题',
  ids: ['eq-cramer', 'det-roots', 'det-elimination'],
  question: String.raw`（本题满分 8 分）已知平面上三条不同直线的方程分别为
$$
l_1:ax+2by+3c=0;
$$
$$
l_2:bx+2cy+3a=0;
$$
$$
l_3:cx+2ay+3b=0.
$$
试证这三条直线交于一点的充分必要条件为 $a+b+c=0$．`,
  answer: String.raw`证明见解析，三条直线交于一点的充分必要条件为 $a+b+c=0$．`,
  analysis: String.raw`（20）【证明】 方法一

必要性：设三条直线交于一点 $(x_0,y_0)$，即方程组 $AX=0$ 有非零解 $(x_0,y_0,1)^{\mathrm{T}}$，其中
$$
A=\begin{pmatrix}a&2b&3c\\b&2c&3a\\c&2a&3b\end{pmatrix},\text{则 }|A|=0,
$$
而
$$
|A|=\begin{vmatrix}a&2b&3c\\b&2c&3a\\c&2a&3b\end{vmatrix}=(a+b+c)\begin{vmatrix}1&2&3\\b&2c&3a\\c&2a&3b\end{vmatrix}=(a+b+c)\begin{vmatrix}1&2&3\\0&2c-2b&3a-3b\\0&2a-2c&3b-3c\end{vmatrix}
$$
$$
=-6(a+b+c)(a^2+b^2+c^2-ab-ac-bc)=-3(a+b+c)[(a-b)^2+(b-c)^2+(c-a)^2]\text{ 且 }(a-b)^2+(b-c)^2+(c-a)^2\ne 0,
$$
故 $a+b+c=0$．

充分性：设 $a+b+c=0$，将方程组前两个方程相加得方程组的同解方程组为
$$
\begin{cases}ax+2by=-3c,\\bx+2cy=-3a.\end{cases}
$$
$$
\text{因为}\begin{vmatrix}a&2b\\b&2c\end{vmatrix}=2(ac-b^2)=-2[a(a+b)+b^2]=-[a^2+b^2+(a+b)^2]\ne 0,
$$
所以方程组有唯一解，即三条直线交于一点．

方法二

必要性：设三条直线交于一点，即方程组 $\begin{cases}ax+2by=-3c,\\bx+2cy=-3a,\\cx+2ay=-3b\end{cases}$ 有唯一解，
$$
\text{令 }\overline{A}=\begin{pmatrix}a&2b&-3c\\b&2c&-3a\\c&2a&-3b\end{pmatrix},\text{则 }r(A)=r(\overline{A})=2,
$$
$$
\text{从而 }|\overline{A}|=-3(a+b+c)[(a-b)^2+(b-c)^2+(c-a)^2]=0,
$$
而 $(a-b)^2+(b-c)^2+(c-a)^2\ne 0$，故 $a+b+c=0$．

充分性：设 $a+b+c=0$，则 $r(A)<3$，
$$
\text{又}\begin{vmatrix}a&2b\\b&2c\end{vmatrix}=2(ac-b^2)=-2[a(a+b)+b^2]=-[a^2+b^2+(a+b)^2]\ne 0,
$$
则 $r(A)=2$，从而 $r(A)=r(\overline{A})=2$，即方程组 $\begin{cases}ax+2by=-3c,\\bx+2cy=-3a,\\cx+2ay=-3b\end{cases}$ 有唯一解，

故三条直线交于一点．`,
  source: '《2003 年数学（一）真题解析》第 9–10 页',
});

