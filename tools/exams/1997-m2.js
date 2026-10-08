// 1997 · 数学二 · 线性代数（题面取自《1、1987-2009考研数学二真题【共58页】》PDF 第 21–22 页；答案与解析取自《1989-2004考研数二答案解析》1997 年部分）
// 说明：数学二（1987–1996 年卷面标“试卷 Ⅲ”）不考线性代数，1997 年起数学二才加入线性代数，故本卷是 1987–1997 中唯一含线代题的年份（共 3 题）。
EXAMS.push({
  year: 1997, subject: '数二', number: 105, label: '填空题第 5 题', kind: '填空', score: 3,
  ids: ['vec-rank-def', 'vec-rank-vs-mat', 'mat-rank'],
  question: String.raw`已知向量组 $\alpha_1=(1,2,-1,1)$，$\alpha_2=(2,0,t,0)$，$\alpha_3=(0,-4,5,-2)$ 的秩为 $2$，则 $t=\underline{\qquad}$。`,
  answer: String.raw`$t=3$。`,
  analysis: String.raw`【答案】$3$

【解析】方法 1：利用初等变换。

以 $\alpha_1,\alpha_2,\alpha_3$ 为行构成 $3\times 4$ 矩阵，对其作初等变换：
$$
A=\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3\end{pmatrix}=\begin{pmatrix}1&2&-1&1\\2&0&t&0\\0&-4&5&-2\end{pmatrix}\xrightarrow{[2]+[1]\times(-2)}\begin{pmatrix}1&2&-1&1\\0&-4&t+2&-2\\0&-4&5&-2\end{pmatrix}\xrightarrow{[3]+[2]\times(-1)}\begin{pmatrix}1&2&-1&1\\0&-4&t+2&-2\\0&0&3-t&0\end{pmatrix},
$$
因为 $r(A)=r\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3\end{pmatrix}=2$，所以 $3-t=0$，$t=3$。

方法 2：利用秩的定义。

由于 $r\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3\end{pmatrix}=r(A)=2$，则矩阵 $A$ 中任一三阶子行列式应等于零。
$$
\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3\end{pmatrix}=\begin{pmatrix}1&2&-1&1\\2&0&t&0\\0&-4&5&-2\end{pmatrix},
$$
应有
$$
\begin{vmatrix}1&2&-1\\2&0&t\\0&-4&5\end{vmatrix}=\begin{vmatrix}1&2&-1\\0&-4&t+2\\0&-4&5\end{vmatrix}=\begin{vmatrix}1&2&-1\\0&-4&t+2\\0&0&3-t\end{vmatrix}=0,
$$
解得 $t=3$。

方法 3：利用线性相关性。

因为 $r(\alpha_1,\alpha_2,\alpha_3)=r(A)=2$，故 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，$\Leftrightarrow$ 以 $\alpha_1^{\mathrm{T}},\alpha_2^{\mathrm{T}},\alpha_3^{\mathrm{T}}$ 组成的线性齐次方程组 $\alpha_1^{\mathrm{T}}x_1+\alpha_2^{\mathrm{T}}x_2+\alpha_3^{\mathrm{T}}x_3=BX=0$ 有非零解，因
$$
B=[\alpha_1^{\mathrm{T}},\alpha_2^{\mathrm{T}},\alpha_3^{\mathrm{T}}]=\begin{pmatrix}1&2&0\\2&0&-4\\-1&t&5\\1&0&-2\end{pmatrix}\xrightarrow{[2]+[1]\times(-2),[3]+[1],[4]+[1]\times(-1)}\begin{pmatrix}1&2&0\\0&-4&-4\\0&t+2&5\\0&-2&-2\end{pmatrix}\xrightarrow{[2]\times\left(-\frac{1}{4}\right),[3]+[2]\times(-t-2),[4]+[2]\times(-2)}\begin{pmatrix}1&2&0\\0&1&1\\0&0&-t+3\\0&0&0\end{pmatrix},
$$
故 $BX=0$ 有非零解 $\Leftrightarrow t=3$。`,
  source: '《1989-2004 考研数二答案解析》1997 年部分 PDF 第 84–85 页',
});

EXAMS.push({
  year: 1997, subject: '数二', number: 306, label: '计算题第 6 题', kind: '解答', score: 5,
  ids: ['mat-eq-solve', 'mat-inv-method', 'mat-invertible-crit'],
  question: String.raw`已知矩阵
$$
A=\begin{pmatrix}1&1&-1\\0&1&1\\0&0&-1\end{pmatrix},
$$
且 $A^2-AB=E$，其中 $E$ 是 $3$ 阶单位矩阵，求矩阵 $B$。`,
  answer: String.raw`$$
B=\begin{pmatrix}0&2&1\\0&0&0\\0&0&0\end{pmatrix}.
$$`,
  analysis: String.raw`【答案】
$$
\begin{pmatrix}0&2&1\\0&0&0\\0&0&0\end{pmatrix}
$$

【解析】由题设条件 $A^2-AB=E$，把 $A$ 提出来得 $A(A-B)=E$，因为
$$
|A|=\begin{vmatrix}1&1&-1\\0&1&1\\0&0&-1\end{vmatrix}=-1\ne 0,
$$
由此知道 $A$ 是满秩的，所以 $A$ 可逆，两边左乘 $A^{-1}$，从而有 $A-B=A^{-1}$，$B=A-A^{-1}$。

（或 $A^2-AB=E$，$AB=A^2-E$，$A$ 可逆，两边左乘 $A^{-1}$，得 $B=A^{-1}(A^2-E)=A-A^{-1}$。）

用矩阵的初等变换求 $A^{-1}$。
$$
[A:E]=\begin{pmatrix}1&1&-1&:&1&0&0\\0&1&1&:&0&1&0\\0&0&-1&:&0&0&1\end{pmatrix}\xrightarrow{[1]+[3]\times(-1),[2]+[3]}\begin{pmatrix}1&1&0&:&1&0&-1\\0&1&0&:&0&1&1\\0&0&-1&:&0&0&1\end{pmatrix}\xrightarrow{[1]+[2]\times(-1),[3]\times(-1)}\begin{pmatrix}1&0&0&:&1&-1&-2\\0&1&0&:&0&1&1\\0&0&1&:&0&0&-1\end{pmatrix}=[E:A^{-1}],
$$
得
$$
A^{-1}=\begin{pmatrix}1&-1&-2\\0&1&1\\0&0&-1\end{pmatrix},
$$
从而得
$$
B=A-A^{-1}=\begin{pmatrix}1&1&-1\\0&1&1\\0&0&-1\end{pmatrix}-\begin{pmatrix}1&-1&-2\\0&1&1\\0&0&-1\end{pmatrix}=\begin{pmatrix}0&2&1\\0&0&0\\0&0&0\end{pmatrix}.
$$`,
  source: '《1989-2004 考研数二答案解析》1997 年部分 PDF 第 89–90 页',
});

EXAMS.push({
  year: 1997, subject: '数二', number: 307, label: '第四题', kind: '解答', score: 8,
  ids: ['eq-nonhomo-crit', 'eq-nonhomo-general', 'eq-rank-relation'],
  question: String.raw`$\lambda$ 取何值时，方程组
$$
\begin{cases}2x_1+\lambda x_2-x_3=1,\\ \lambda x_1-x_2+x_3=2,\\ 4x_1+5x_2-5x_3=-1\end{cases}
$$
无解，有唯一解或有无穷多解？并在有无穷多解时写出方程组的通解。`,
  answer: String.raw`当 $\lambda\ne-\dfrac{4}{5}$ 且 $\lambda\ne 1$ 时，方程组有唯一解；当 $\lambda=-\dfrac{4}{5}$ 时，方程组无解；当 $\lambda=1$ 时，方程组有无穷多解，通解为
$$
\begin{cases}x_1=1,\\ x_2=-1+k,\\ x_3=k,\end{cases}\quad(k\text{ 为任意常数}).
$$`,
  analysis: String.raw`【解析】方法 1：对原方程组的增广矩阵作初等行变换：
$$
[A:b]=\begin{pmatrix}2&\lambda&-1&:&1\\\lambda&-1&1&:&2\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[2]+[1],[3]+[1]\times(-5)}\begin{pmatrix}2&\lambda&-1&:&1\\\lambda+2&\lambda-1&0&:&3\\-6&-5\lambda+5&0&:&-6\end{pmatrix}\xrightarrow{[3]+[2]\times 5}\begin{pmatrix}2&\lambda&-1&:&1\\\lambda+2&\lambda-1&0&:&3\\5\lambda+4&0&0&:&9\end{pmatrix}
$$
当 $\lambda\ne-\dfrac{4}{5}$ 且 $\lambda\ne 1$ 时，$r(A)=r[A:b]=3$，即方程组的系数矩阵与增广矩阵的秩相等且等于未知量的个数，故原方程组有唯一解。

当 $\lambda=-\dfrac{4}{5}$ 时，$r(A)=2\ne r[A:b]=3$，即方程组的系数矩阵与增广矩阵的秩不相等，故原方程组无解。

当 $\lambda=1$ 时，原方程组的同解方程组为
$$
\begin{cases}2x_1+x_2-x_3=1,\\ x_1=1,\end{cases}
$$
原方程组有无穷多解，其通解为
$$
\begin{cases}x_1=1,\\ x_2=-1+k,\\ x_3=k,\end{cases}\quad(k\text{ 为任意常数}).
$$

（或 $[x_1,x_2,x_3]^{\mathrm{T}}=[1,-1,0]^{\mathrm{T}}+k[0,1,1]^{\mathrm{T}}$（$k$ 为任意常数））


方法 2：原方程组系数矩阵的行列式
$$
|A|=\begin{vmatrix}2&\lambda&-1\\\lambda&-1&1\\4&5&-5\end{vmatrix}=\begin{vmatrix}2&\lambda&\lambda-1\\\lambda&-1&0\\4&5&0\end{vmatrix}=(\lambda-1)(5\lambda+4),
$$
故知：当 $\lambda\ne-\dfrac{4}{5}$ 且 $\lambda\ne 1$ 时，$r(A)=r[A:b]=3$，即方程组的系数矩阵与增广矩阵的秩相等且等于未知量的个数，故原方程组有唯一解。

当 $\lambda=-\dfrac{4}{5}$ 时，对原方程组的增广矩阵作初等行变换，得
$$
[A:b]=\begin{pmatrix}2&-\dfrac{4}{5}&-1&:&1\\-\dfrac{4}{5}&-1&1&:&2\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[1]\times 5,[2]\times 5}\begin{pmatrix}10&-4&-5&:&5\\-4&-5&5&:&10\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[3]+[2]}\begin{pmatrix}10&-4&-5&:&5\\-4&-5&5&:&10\\0&0&0&:&9\end{pmatrix}
$$
$r(A)\ne r[A:b]$，即方程组的系数矩阵与增广矩阵的秩不相等，故原方程组无解。

当 $\lambda=1$ 时，对原方程组的增广矩阵作初等行变换，得
$$
[A:b]=\begin{pmatrix}2&1&-1&:&1\\1&-1&1&:&2\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[1]\leftrightarrow[2],[2]+[1]\times(-2),[3]+[1]\times(-4)}\begin{pmatrix}1&-1&1&:&2\\0&3&-3&:&-3\\0&9&-9&:&-9\end{pmatrix}\xrightarrow{[3]+[2]\times 3,[2]\times\dfrac{1}{3}}\begin{pmatrix}1&-1&1&:&2\\0&1&-1&:&-1\\0&0&0&:&0\end{pmatrix}
$$
$r(A)=r[A:b]=2<3$，即方程组的系数矩阵与增广矩阵的秩相等且小于未知量的个数，故原方程组有无穷多解，其通解为
$$
\begin{cases}x_1=1,\\ x_2=-1+k,\\ x_3=k,\end{cases}\quad(k\text{ 为任意常数}).
$$

（或 $[x_1,x_2,x_3]^{\mathrm{T}}=[1,-1,0]^{\mathrm{T}}+k[0,1,1]^{\mathrm{T}}$（$k$ 为任意常数））
`,
  source: '《1989-2004 考研数二答案解析》1997 年部分 PDF 第 90–91 页',
});
