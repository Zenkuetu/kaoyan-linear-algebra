// 1992 · 数学一 · 线性代数（题面取自《1992年考研数学（一）真题.pdf》；答案与解析取自《1992数学一解析.pdf》）
EXAMS.push({
  year: 1992, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["mat-rank","vec-rank-vs-mat"],
  question: String.raw`设
$$
A=\begin{pmatrix}a_1b_1&a_1b_2&\cdots&a_1b_n\\a_2b_1&a_2b_2&\cdots&a_2b_n\\\vdots&\vdots&&\vdots\\a_nb_1&a_nb_2&\cdots&a_nb_n\end{pmatrix},
$$
其中 $a_i\ne 0,b_j\ne 0,i,j=1,2,\cdots,n$，则矩阵 $A$ 的秩 $r(A)=$______.`,
  answer: String.raw`$1$.`,
  analysis: String.raw`**方法一** 因为 $A$ 的任意两行都成比例，所以 $r(A)\le 1$，又因为 $A\ne O$，所以 $r(A)\ge 1$，故 $r(A)=1$.

**方法二**
$$
A=\begin{pmatrix}a_1\\a_2\\\vdots\\a_n\end{pmatrix}(b_1,b_2,\cdots,b_n)=\alpha\beta^{\mathrm{T}},
$$
其中 $\alpha=\begin{pmatrix}a_1\\a_2\\\vdots\\a_n\end{pmatrix},\beta=\begin{pmatrix}b_1\\b_2\\\vdots\\b_n\end{pmatrix}$，$r(A)=r(\alpha\beta^{\mathrm{T}})\le r(\alpha)=1$，再由 $a_i\ne 0,b_j\ne 0,i=1,2,\cdots,n$ 得 $A\ne O$，于是 $r(A)\ge 1$，故 $r(A)=1$.`,
  source: '《1992 数学一解析.pdf》PDF 第 1 页',
});

EXAMS.push({
  year: 1992, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["eq-homo-structure","eq-homo-sol"],
  question: String.raw`要使 $\xi_1=\begin{pmatrix}1\\0\\2\end{pmatrix},\xi_2=\begin{pmatrix}0\\1\\-1\end{pmatrix}$ 都是线性方程组 $AX=0$ 的解，只要系数矩阵 $A$ 为（　　）.

（A）$(-2\ 1\ 1)$
（B）$\begin{pmatrix}2&0&-1\\0&1&1\end{pmatrix}$
（C）$\begin{pmatrix}-1&0&2\\0&1&-1\end{pmatrix}$
（D）$\begin{pmatrix}0&1&-1\\4&-2&-2\\0&1&1\end{pmatrix}$`,
  answer: String.raw`（A）.`,
  analysis: String.raw`因为 $\xi_1$ 与 $\xi_2$ 线性无关，所以三元齐次线性方程组 $AX=0$ 的基础解系中至少含 2 个解向量，即 $3-r(A)\ge 2$，得 $r(A)\le 1$，而选项（B）（C）（D）中矩阵的秩都大于 1，所以均不对，只有选项（A）正确.`,
  source: '《1992 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1992, subject: '数一', number: 301, kind: '解答', score: 7, label: '第九大题',
  ids: ["eig-power-app","vec-express-crit"],
  question: String.raw`设 3 阶矩阵 $A$ 的特征值为 $\lambda_1=1,\lambda_2=2,\lambda_3=3$，对应的特征向量依次为
$$
\xi_1=\begin{pmatrix}1\\1\\1\end{pmatrix},\quad\xi_2=\begin{pmatrix}1\\2\\4\end{pmatrix},\quad\xi_3=\begin{pmatrix}1\\3\\9\end{pmatrix},
$$
又向量 $\beta=\begin{pmatrix}1\\1\\3\end{pmatrix}$.

（1）将 $\beta$ 用 $\xi_1,\xi_2,\xi_3$ 线性表示；
（2）求 $A^n\beta$（$n$ 为自然数）.`,
  answer: String.raw`（1）$\beta=2\xi_1-2\xi_2+\xi_3$.
（2）
$$
A^n\beta=\begin{pmatrix}2-2^{n+1}+3^n\\2-2^{n+2}+3^{n+1}\\2-2^{n+3}+3^{n+2}\end{pmatrix}.
$$`,
  analysis: String.raw`（1）设
$$
\beta=x_1\xi_1+x_2\xi_2+x_3\xi_3=(\xi_1,\xi_2,\xi_3)\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$
对此方程组的增广矩阵作初等行变换
$$
(\xi_1,\xi_2,\xi_3\vdots\beta)=\begin{pmatrix}1&1&1&1\\1&2&3&1\\1&4&9&3\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&2&0\\0&3&8&2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&2&0\\0&0&1&1\end{pmatrix},
$$
得唯一解 $(2,-2,1)^{\mathrm{T}}$，故有 $\beta=2\xi_1-2\xi_2+\xi_3$.

（2）由于 $A\xi_i=\lambda_i\xi_i$，故 $A^n\xi_i=\lambda_i^n\xi_i,i=1,2,3$，因此
$$
A^n\beta=A^n(2\xi_1-2\xi_2+\xi_3)=2A^n\xi_1-2A^n\xi_2+A^n\xi_3
$$
$$
=2\begin{pmatrix}1\\1\\1\end{pmatrix}-2^{n+1}\begin{pmatrix}1\\2\\4\end{pmatrix}+3^n\begin{pmatrix}1\\3\\9\end{pmatrix}=\begin{pmatrix}2-2^{n+1}+3^n\\2-2^{n+2}+3^{n+1}\\2-2^{n+3}+3^{n+2}\end{pmatrix}.
$$`,
  source: '《1992 数学一解析.pdf》PDF 第 4 页',
});

EXAMS.push({
  year: 1992, subject: '数一', number: 401, kind: '解答', score: 7, label: '第八大题（证明题）',
  ids: ["vec-indep-concl","vec-express-crit"],
  question: String.raw`设向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，向量组 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，问：

（1）$\alpha_1$ 能否由 $\alpha_2,\alpha_3$ 线性表示？证明你的结论；
（2）$\alpha_4$ 能否由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？证明你的结论.`,
  answer: String.raw`（1）$\alpha_1$ 能由 $\alpha_2,\alpha_3$ 线性表示.
（2）$\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示.`,
  analysis: String.raw`（1）因为 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，所以 $\alpha_2,\alpha_3$ 线性无关，又因为 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，所以 $\alpha_1$ 可由 $\alpha_2,\alpha_3$ 线性表示.

（2）$\alpha_4$ 不可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示. 若 $\alpha_4$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，因为 $\alpha_1$ 可由 $\alpha_2,\alpha_3$ 线性表示，所以 $\alpha_4$ 可由 $\alpha_2,\alpha_3$ 线性表示，从而 $\alpha_2,\alpha_3,\alpha_4$ 线性相关，矛盾，所以 $\alpha_4$ 不可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示.`,
  source: '《1992 数学一解析.pdf》PDF 第 3–4 页',
});
