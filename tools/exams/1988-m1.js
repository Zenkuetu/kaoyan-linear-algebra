// 1988 · 数学一 · 线性代数（题面取自《1988年考研数学（一）真题.pdf》；答案与解析取自《1988数学一解析.pdf》）
EXAMS.push({
  year: 1988, subject: '数一', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ["det-multilinearity"],
  question: String.raw`设 4 阶矩阵 $A=(\alpha,\gamma_2,\gamma_3,\gamma_4)$，$B=(\beta,\gamma_2,\gamma_3,\gamma_4)$，其中 $\alpha,\beta,\gamma_2,\gamma_3,\gamma_4$ 都是 4 维列向量，且 $|A|=4$，$|B|=1$，则 $|A+B|=$______.`,
  answer: String.raw`$40$.`,
  analysis: String.raw`由 $A+B=(\alpha+\beta,2\gamma_2,2\gamma_3,2\gamma_4)$ 得
$$
|A+B|=|\alpha+\beta,2\gamma_2,2\gamma_3,2\gamma_4|=8|\alpha+\beta,\gamma_2,\gamma_3,\gamma_4|
$$
$$
=8\left(|\alpha,\gamma_2,\gamma_3,\gamma_4|+|\beta,\gamma_2,\gamma_3,\gamma_4|\right)=8\left(|A|+|B|\right)=40.
$$`,
  source: '《1988 数学一解析.pdf》PDF 第 1 页',
});

EXAMS.push({
  year: 1988, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["vec-indep-crit","vec-indep-concl"],
  question: String.raw`$n$ 维向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$（$3\le s\le n$）线性无关的充分必要条件是（　　）.

（A）有一组不全为零的数 $k_1,k_2,\cdots,k_s$，使得 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s\ne 0$
（B）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 中任意两个向量都线性无关
（C）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 中存在一个向量，它不可由其余向量线性表示
（D）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 中任意一个向量都不可由其余向量线性表示`,
  answer: String.raw`（D）.`,
  analysis: String.raw`**方法一** 若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则存在不全为零的数 $k_1,k_2,\cdots,k_s$，使得
$$
k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0,
$$
不妨设 $k_1\ne 0$，则 $\alpha_1=-\dfrac{k_2}{k_1}\alpha_2-\cdots-\dfrac{k_s}{k_1}\alpha_s$，即至少有一个向量可由其余向量线性表示，故 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关的充分必要条件是 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 中任意一个向量都不可由其余向量线性表示，应选（D）.

**方法二** $\alpha_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\alpha_2=\begin{pmatrix}0\\1\\0\end{pmatrix},\alpha_3=\begin{pmatrix}1\\1\\0\end{pmatrix}$，显然 $2\alpha_1+\alpha_2-\alpha_3\ne 0$ 且其中任两个向量线性无关，但向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，排除（A），（B）；
$$
\alpha_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\alpha_2=\begin{pmatrix}0\\1\\0\end{pmatrix},\alpha_3=\begin{pmatrix}0\\0\\0\end{pmatrix},
$$
显然 $\alpha_1$ 不可由 $\alpha_2,\alpha_3$ 线性表示，但 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，排除（C），应选（D）.`,
  source: '《1988 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1988, subject: '数一', number: 301, kind: '解答', score: 6, label: '第七大题',
  ids: ["eig-power-app","mat-inv-method"],
  question: String.raw`已知 $AP=PB$，其中
$$
B=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix},\quad P=\begin{pmatrix}1&0&0\\2&-1&0\\2&1&1\end{pmatrix},
$$
求 $A$ 及 $A^5$.`,
  answer: String.raw`$$
A=\begin{pmatrix}1&0&0\\2&0&0\\6&-1&-1\end{pmatrix},\quad A^5=A=\begin{pmatrix}1&0&0\\2&0&0\\6&-1&-1\end{pmatrix}.
$$`,
  analysis: String.raw`$$
P^{-1}=\begin{pmatrix}1&0&0\\2&-1&0\\-4&1&1\end{pmatrix},\quad A=PBP^{-1}=\begin{pmatrix}1&0&0\\2&0&0\\6&-1&-1\end{pmatrix};
$$
$$
A^5=PB^5P^{-1}=PBP^{-1}=A.
$$`,
  source: '《1988 数学一解析.pdf》PDF 第 3 页',
});

EXAMS.push({
  year: 1988, subject: '数一', number: 302, kind: '解答', score: 8, label: '第八大题',
  ids: ["eig-similar-prop","eig-diag-method","eig-similar"],
  question: String.raw`已知矩阵
$$
A=\begin{pmatrix}2&0&0\\0&0&1\\0&1&x\end{pmatrix}\quad\text{与}\quad B=\begin{pmatrix}2&0&0\\0&y&0\\0&0&-1\end{pmatrix}
$$
相似.

（1）求 $x,y$；
（2）求一个满足 $P^{-1}AP=B$ 的可逆矩阵 $P$.`,
  answer: String.raw`（1）$x=0,\ y=1$.
（2）
$$
P=\begin{pmatrix}1&0&0\\0&1&-1\\0&1&1\end{pmatrix}.
$$`,
  analysis: String.raw`（1）因为矩阵 $A$ 与 $B$ 相似，所以 $\operatorname{tr}A=\operatorname{tr}B$，即 $x+2=y+1$，或 $x=y-1$；再由矩阵 $A$ 与 $B$ 相似得 $|A|=|B|$，即 $-2=-2y$，解得 $y=1$，故 $x=0,y=1$.

（2）显然矩阵 $A$ 及 $B$ 的特征值为 $\lambda_1=2,\lambda_2=1,\lambda_3=-1$，由
$$
2E-A=\begin{pmatrix}0&0&0\\0&2&-1\\0&-1&2\end{pmatrix}\to\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}
$$
得矩阵 $A$ 的相应于 $\lambda_1=2$ 的特征向量为 $\alpha_1=(1,0,0)^{\mathrm{T}}$；由
$$
E-A=\begin{pmatrix}-1&0&0\\0&1&-1\\0&-1&1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&-1\\0&0&0\end{pmatrix}
$$
得矩阵 $A$ 的相应于 $\lambda_2=1$ 的特征向量为 $\alpha_2=(0,1,1)^{\mathrm{T}}$；由
$$
-E-A=\begin{pmatrix}-3&0&0\\0&-1&-1\\0&-1&-1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&1\\0&0&0\end{pmatrix}
$$
得矩阵 $A$ 的相应于 $\lambda_3=-1$ 的特征向量为 $\alpha_3=(0,-1,1)^{\mathrm{T}}$，令
$$
P=\begin{pmatrix}1&0&0\\0&1&-1\\0&1&1\end{pmatrix},
$$
则 $P^{-1}AP=B$.`,
  source: '《1988 数学一解析.pdf》PDF 第 3 页',
});
