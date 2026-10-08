// 1989 · 数学三 · 线性代数（题面取自《1、1987-1996考研数学三真题.pdf》1989 年 试卷Ⅳ；答案与解析取自《1989数学三真题答案解析（试卷四）.pdf》）
EXAMS.push({
  year: 1989, subject: '数三', number: 103, kind: '填空', score: 3, label: '填空题第 3 题',
  ids: ["eq-homo-sol","det-roots"],
  question: String.raw`若齐次线性方程组
$$
\begin{cases}\lambda x_1+x_2+x_3=0,\\ x_1+\lambda x_2+x_3=0,\\ x_1+x_2+x_3=0\end{cases}
$$
只有零解，则 $\lambda$ 应满足的条件是______.`,
  answer: String.raw`$\lambda\ne 1$.`,
  analysis: '',
  source: '《1989 数学三真题答案解析（试卷四）.pdf》第 1 页',
});

EXAMS.push({
  year: 1989, subject: '数三', number: 203, kind: '选择', score: 3, label: '选择题第 3 题',
  ids: ["det-rowsum-zero","vec-combo","vec-rank-def"],
  question: String.raw`设 $A$ 为 $n$ 阶方阵且 $|A|=0$，则（　　）

（A）$A$ 中必有两行（列）的元素对应成比例.

（B）$A$ 中任意一行（列）向量是其余各行（列）向量的线性组合.

（C）$A$ 中必有一行（列）向量是其余各行（列）向量的线性组合.

（D）$A$ 中至少有一行（列）的元素全为 $0$.`,
  answer: String.raw`（C）．`,
  analysis: '',
  source: '《1989 数学三真题答案解析（试卷四）.pdf》第 1 页',
});

EXAMS.push({
  year: 1989, subject: '数三', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ["det-product","mat-mult"],
  question: String.raw`设 $A$ 和 $B$ 都是 $n\times n$ 矩阵，则必有（　　）

（A）$|A+B|=|A|+|B|$.　（B）$AB=BA$.

（C）$|AB|=|BA|$.　（D）$(A+B)^{-1}=A^{-1}+B^{-1}$.`,
  answer: String.raw`（C）．`,
  analysis: '',
  source: '《1989 数学三真题答案解析（试卷四）.pdf》第 1 页',
});

EXAMS.push({
  year: 1989, subject: '数三', number: 307, kind: '解答', score: 5, label: '第七题',
  ids: ["mat-eq-solve","mat-inv-method"],
  question: String.raw`已知 $X=AX+B$，其中
$$
A=\begin{pmatrix}0&1&0\\-1&1&1\\-1&0&-1\end{pmatrix},\qquad B=\begin{pmatrix}1&-1\\2&0\\5&-3\end{pmatrix},
$$
求矩阵 $X$.`,
  answer: String.raw`$$
X=\begin{pmatrix}3&-1\\2&0\\1&-1\end{pmatrix}.
$$`,
  analysis: String.raw`解：以 $E$ 表示 3 阶单位矩阵，由 $X=AX+B$，有 $(E-A)X=B$.
其中
$$
E-A=\begin{pmatrix}1&-1&0\\1&0&-1\\1&0&2\end{pmatrix}.
$$
其逆矩阵为
$$
(E-A)^{-1}=\begin{pmatrix}0&\dfrac{2}{3}&\dfrac{1}{3}\\-1&\dfrac{2}{3}&\dfrac{1}{3}\\0&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix};
$$
于是
$$
X=(E-A)^{-1}B=\begin{pmatrix}0&\dfrac{2}{3}&\dfrac{1}{3}\\-1&\dfrac{2}{3}&\dfrac{1}{3}\\0&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix}\begin{pmatrix}1&-1\\2&0\\5&-3\end{pmatrix}=\begin{pmatrix}3&-1\\2&0\\1&-1\end{pmatrix}.
$$`,
  source: '《1989 数学三真题答案解析（试卷四）.pdf》第 4–5 页',
});

EXAMS.push({
  year: 1989, subject: '数三', number: 308, kind: '解答', score: 6, label: '第八题',
  ids: ["vec-indep-crit","vec-indep-def","vec-combo"],
  question: String.raw`设 $\alpha_1=(1,1,1)$，$\alpha_2=(1,2,3)$，$\alpha_3=(1,3,t)$，问：

（1）当 $t$ 为何值时，向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关？（3 分）

（2）当 $t$ 为何值时，向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性相关？（1 分）

（3）当向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性相关时，将 $\alpha_3$ 表示为 $\alpha_1$ 和 $\alpha_2$ 的线性组合.（2 分）`,
  answer: String.raw`（1）$t\ne 5$ 时，向量组线性无关；（2）$t=5$ 时，向量组线性相关；（3）$\alpha_3=-\alpha_1+2\alpha_2$.`,
  analysis: String.raw`解：设有实数 $k_1,k_2,k_3$，使 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=0$，则得方程组
$$
\begin{cases}k_1+k_2+k_3=0\\ k_1+2k_2+3k_3=0\\ k_1+3k_2+tk_3=0\end{cases}(*)
$$
其系数行列式为
$$
D=\begin{vmatrix}1&1&1\\1&2&3\\1&3&t\end{vmatrix}=t-5.
$$
（1）当 $t\ne 5$ 时，$D\ne 0$，方程组 $(*)$ 只有零解：$k_1=k_2=k_3=0$. 这时，向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关.

（2）当 $t=5$ 时，$D=0$，方程组 $(*)$ 有非零解，即存在不全为 $0$ 的常数 $k_1,k_2,k_3$，使 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=0$，这时，向量 $\alpha_1,\alpha_2,\alpha_3$ 线性相关.

（3）设 $t=5$. 由
$$
\begin{pmatrix}1&1&1\\1&2&3\\1&3&5\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&2\\0&0&0\end{pmatrix}
$$
知方程组 $(*)$ 可化为 $\begin{cases}k_1-k_3=0\\ k_2+2k_3=0\end{cases}$. 令 $k_3=1$，得 $k_1=1$，$k_2=-2$. 因此，有 $\alpha_1-2\alpha_2+\alpha_3=0$. 从而 $\alpha_3$ 可以通过 $\alpha_1$ 和 $\alpha_2$ 表示为 $\alpha_3=-\alpha_1+2\alpha_2$.`,
  source: '《1989 数学三真题答案解析（试卷四）.pdf》第 5 页',
});

EXAMS.push({
  year: 1989, subject: '数三', number: 309, kind: '解答', score: 5, label: '第九题',
  ids: ["eig-poly","eig-ops","eig-def"],
  question: String.raw`设
$$
A=\begin{pmatrix}-1&2&2\\2&-1&-2\\2&-2&-1\end{pmatrix}.
$$
（1）试求矩阵 $A$ 的特征值；（2 分）

（2）利用（1）的结果，求矩阵 $E+A^{-1}$ 的特征值，其中 $E$ 是 3 阶单位矩阵.（3 分）`,
  answer: String.raw`（1）矩阵 $A$ 的特征值为 $1,1,-5$；（2）矩阵 $E+A^{-1}$ 的特征值为 $2,2,\dfrac{4}{5}$.`,
  analysis: String.raw`解：（1）矩阵 $A$ 的特征方程为
$$
|\lambda E-A|=\begin{vmatrix}\lambda+1&-2&-2\\-2&\lambda+1&2\\-2&2&\lambda+1\end{vmatrix}=(\lambda-1)^2(\lambda+5)=0,
$$
由此得矩阵 $A$ 的特征值 $1,1,-5$.

（2）由于矩阵 $A$ 的特征值 $1,1,-5$，可知 $A^{-1}$ 的特征值为 $1,1,-\dfrac{1}{5}$.
因此，有 $|E-A^{-1}|=0$，$\left|(-\dfrac{1}{5})E-A^{-1}\right|=0$. 由此可见 $|(1+1)E-(E+A^{-1})|=0$，$\left|(-\dfrac{1}{5}+1)E-(E+A^{-1})\right|=0$，即 $|2E-(E+A^{-1})|=0$，$\left|\dfrac{4}{5}E-(E+A^{-1})\right|=0$.
于是，矩阵 $E+A^{-1}$ 的特征值 $2,2,\dfrac{4}{5}$.`,
  source: '《1989 数学三真题答案解析（试卷四）.pdf》第 6 页',
});
