// 1991 · 数学三 · 线性代数（题面取自《1、1987-1996考研数学三真题.pdf》1991 年 试卷Ⅳ；答案与解析取自《1991年数学三真题答案解析.pdf》）
EXAMS.push({
  year: 1991, subject: '数三', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ["mat-block","mat-inv-method","mat-eq-solve"],
  question: String.raw`设 $A$ 和 $B$ 为可逆矩阵，$X=\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 为分块矩阵，则 $X^{-1}=$______.`,
  answer: String.raw`$$
\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}.
$$`,
  analysis: String.raw`【解析】利用分块矩阵，按可逆矩阵定义有
$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}\begin{pmatrix}X_1&X_2\\X_3&X_4\end{pmatrix}=\begin{pmatrix}E&O\\O&E\end{pmatrix},
$$
由对应元素或块相等，即
$$
\begin{cases}AX_3=E,\\ AX_4=0,\\ BX_1=0,\\ BX_2=E.\end{cases}
$$
从 $A$ 和 $B$ 均为可逆矩阵知 $X_3=A^{-1}$，$X_4=0$，$X_1=0$，$X_2=B^{-1}$. 故应填 $\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$.`,
  source: '《1991 年数学三真题答案解析.pdf》第 2 页',
});

EXAMS.push({
  year: 1991, subject: '数三', number: 203, kind: '选择', score: 3, label: '选择题第 3 题',
  ids: ["mat-adjoint","eig-ops","eig-def"],
  question: String.raw`设 $A$ 为 $n$ 阶可逆矩阵，$\lambda$ 是 $A$ 的一个特征值，则 $A$ 的伴随矩阵 $A^*$ 的特征值之一是（　　）

（A）$\lambda^{-1}|A|^n$.　（B）$\lambda^{-1}|A|$.　（C）$\lambda|A|$.　（D）$\lambda|A|^n$.`,
  answer: String.raw`（B）．`,
  analysis: String.raw`【解析】由 $\lambda$ 为 $A$ 的特征值可知，存在非零向量 $X$，使得 $AX=\lambda X$.
两端同时乘以 $A^*$，有 $A^*(\lambda X)=A^*AX$，由公式 $A^*A=|A|E$ 得到 $\lambda A^*X=|A|X$. 于是
$$
A^*X=\lambda^{-1}|A|X.
$$
按特征值定义知 $\lambda^{-1}|A|$ 是伴随矩阵 $A^*$ 的特征值. 故应选（B）．`,
  source: '《1991 年数学三真题答案解析.pdf》第 3 页',
});

EXAMS.push({
  year: 1991, subject: '数三', number: 309, kind: '解答', score: 7, label: '第九题',
  ids: ["vec-express-crit","eq-nonhomo-crit","vec-combo"],
  question: String.raw`设有 3 维列向量
$$
\alpha_1=\begin{pmatrix}1+\lambda\\1\\1\end{pmatrix},\quad\alpha_2=\begin{pmatrix}1\\1+\lambda\\1\end{pmatrix},\quad\alpha_3=\begin{pmatrix}1\\1\\1+\lambda\end{pmatrix},\quad\beta=\begin{pmatrix}0\\\lambda\\\lambda^2\end{pmatrix},
$$
问 $\lambda$ 取何值时，

（1）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，且表达式唯一？

（2）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表达式不唯一？

（3）$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？`,
  answer: String.raw`（1）$\lambda\ne 0$ 且 $\lambda\ne -3$；（2）$\lambda=0$；（3）$\lambda=-3$．`,
  analysis: String.raw`【解析】设 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta$，将分量代入得到方程组
$$
\begin{cases}(1+\lambda)x_1+x_2+x_3=0,\\ x_1+(1+\lambda)x_2+x_3=\lambda,\\ x_1+x_2+(1+\lambda)x_3=\lambda^2.\end{cases}
$$
对方程组的增广矩阵作初等行变换.

第一行分别乘以 $(-1)$、$-(1+\lambda)$ 加到第二行和第三行上，有
$$
\begin{pmatrix}1+\lambda&1&1&0\\1&1+\lambda&1&\lambda\\1&1&1+\lambda&\lambda^2\end{pmatrix}\to\begin{pmatrix}1+\lambda&1&1&0\\-\lambda&\lambda&0&\lambda\\-\lambda^2-2\lambda&-\lambda&0&\lambda^2\end{pmatrix},
$$
再第二行加到第三行上，所以有
$$
\to\begin{pmatrix}1+\lambda&1&1&0\\-\lambda&\lambda&0&\lambda\\-\lambda^2-3\lambda&0&0&\lambda^2+\lambda\end{pmatrix}.
$$
若 $\lambda\ne 0$ 且 $\lambda^2+3\lambda\ne 0$，即 $\lambda\ne 0$ 且 $\lambda\ne -3$，$r(A)=r(\overline{A})=3$，方程组有唯一解，即 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示且表达式唯一.

若 $\lambda=0$，则 $r(A)=r(\overline{A})=1<3$，方程组有无穷多解，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，且表达式不唯一.

若 $\lambda=-3$，则 $r(A)=2$，$r(\overline{A})=3$，方程组无解，从而 $\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示．`,
  source: '《1991 年数学三真题答案解析.pdf》第 9 页',
});

EXAMS.push({
  year: 1991, subject: '数三', number: 310, kind: '解答', score: 6, label: '第十题',
  ids: ["qf-positive-crit","qf-def"],
  question: String.raw`考虑二次型
$$
f=x_1^2+4x_2^2+4x_3^2+2\lambda x_1x_2-2x_1x_3+4x_2x_3,
$$
问 $\lambda$ 取何值时，$f$ 为正定二次型？`,
  answer: String.raw`$-2<\lambda<1$．`,
  analysis: String.raw`【解析】关于判定二次型正定这类题目时，用"顺序主子式全大于 $0$"的方法最为简捷.

二次型 $f$ 的矩阵为 $A=\begin{pmatrix}1&\lambda&-1\\\lambda&4&2\\-1&2&4\end{pmatrix}$，其顺序主子式为
$$
\Delta_1=1,\quad\Delta_2=\begin{vmatrix}1&\lambda\\\lambda&4\end{vmatrix}=4-\lambda^2,\quad\Delta_3=|A|=-4\lambda^2-4\lambda+8.
$$
正定的充分必要条件是各阶顺序主子式都大于 $0$，所以有
$$
\Delta_1>0,\quad\Delta_2=\begin{vmatrix}1&\lambda\\\lambda&4\end{vmatrix}=(2-\lambda)(2+\lambda)>0,\quad\Delta_3=|A|=-4(\lambda-1)(\lambda+2)>0.
$$
解出其交集为 $(-2,1)$，故 $\lambda\in(-2,1)$ 时，$f$ 为正定二次型．`,
  source: '《1991 年数学三真题答案解析.pdf》第 10 页',
});

EXAMS.push({
  year: 1991, subject: '数三', number: 311, kind: '解答', score: 6, label: '第十一题',
  ids: ["vec-indep-crit","det-product","mat-mult"],
  question: String.raw`试证明 $n$ 维列向量组 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线性无关的充分必要条件是
$$
D=\begin{vmatrix}\alpha_1^{\mathrm{T}}\alpha_1&\alpha_1^{\mathrm{T}}\alpha_2&\cdots&\alpha_1^{\mathrm{T}}\alpha_n\\\alpha_2^{\mathrm{T}}\alpha_1&\alpha_2^{\mathrm{T}}\alpha_2&\cdots&\alpha_2^{\mathrm{T}}\alpha_n\\\vdots&\vdots&&\vdots\\\alpha_n^{\mathrm{T}}\alpha_1&\alpha_n^{\mathrm{T}}\alpha_2&\cdots&\alpha_n^{\mathrm{T}}\alpha_n\end{vmatrix}\ne 0,
$$
其中 $\alpha_i^{\mathrm{T}}$ 表示列向量 $\alpha_i$ 的转置，$i=1,2,\cdots,n$.`,
  answer: String.raw`证明见解析．`,
  analysis: String.raw`【解析】记 $A=(\alpha_1,\alpha_2,\cdots,\alpha_n)$，则 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线性无关的充分必要条件是 $|A|\ne 0$.

由于
$$
A^{\mathrm{T}}A=\begin{pmatrix}\alpha_1^{\mathrm{T}}\\\alpha_2^{\mathrm{T}}\\\vdots\\\alpha_n^{\mathrm{T}}\end{pmatrix}\begin{pmatrix}\alpha_1,\alpha_2,\cdots,\alpha_n\end{pmatrix}=\begin{pmatrix}\alpha_1^{\mathrm{T}}\alpha_1&\alpha_1^{\mathrm{T}}\alpha_2&\cdots&\alpha_1^{\mathrm{T}}\alpha_n\\\alpha_2^{\mathrm{T}}\alpha_1&\alpha_2^{\mathrm{T}}\alpha_2&\cdots&\alpha_2^{\mathrm{T}}\alpha_n\\\vdots&\vdots&&\vdots\\\alpha_n^{\mathrm{T}}\alpha_1&\alpha_n^{\mathrm{T}}\alpha_2&\cdots&\alpha_n^{\mathrm{T}}\alpha_n\end{pmatrix},
$$
从而取行列式，有 $D=|A^{\mathrm{T}}A|=|A^{\mathrm{T}}||A|=|A|^2$.
由此可见 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线性无关的充分必要条件是 $D\ne 0$．`,
  source: '《1991 年数学三真题答案解析.pdf》第 10–11 页',
});
