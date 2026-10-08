// 1989 · 数学一 · 线性代数（题面取自《1989年考研数学（一）真题.pdf》；答案与解析取自《1989数学一解析.pdf》）
EXAMS.push({
  year: 1989, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["mat-inv-method","mat-block"],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}3&0&0\\1&4&0\\0&0&3\end{pmatrix},\quad E=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},
$$
则逆矩阵 $(A-2E)^{-1}=$______.`,
  answer: String.raw`$$
(A-2E)^{-1}=\begin{pmatrix}1&0&0\\-\dfrac{1}{2}&\dfrac{1}{2}&0\\0&0&1\end{pmatrix}.
$$`,
  analysis: String.raw`**方法一** $A-2E=\begin{pmatrix}1&0&0\\1&2&0\\0&0&1\end{pmatrix}$，由
$$
\begin{pmatrix}1&0&0&1&0&0\\1&2&0&0&1&0\\0&0&1&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&1&0&0\\0&2&0&-1&1&0\\0&0&1&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&1&0&0\\0&1&0&-\dfrac{1}{2}&\dfrac{1}{2}&0\\0&0&1&0&0&1\end{pmatrix},
$$
得
$$
(A-2E)^{-1}=\begin{pmatrix}1&0&0\\-\dfrac{1}{2}&\dfrac{1}{2}&0\\0&0&1\end{pmatrix}.
$$

**方法二** $A-2E=\begin{pmatrix}1&0&0\\1&2&0\\0&0&1\end{pmatrix}=\begin{pmatrix}B&O\\O&C\end{pmatrix}$，其中 $B=\begin{pmatrix}1&0\\1&2\end{pmatrix},C=(1)$，由
$$
(B\vdots E)=\begin{pmatrix}1&0&1&0\\1&2&0&1\end{pmatrix}\to\begin{pmatrix}1&0&1&0\\0&2&-1&1\end{pmatrix}\to\begin{pmatrix}1&0&1&0\\0&1&-\dfrac{1}{2}&\dfrac{1}{2}\end{pmatrix}
$$
得 $B^{-1}=\begin{pmatrix}1&0\\-\dfrac{1}{2}&\dfrac{1}{2}\end{pmatrix}$，故 $(A-2E)^{-1}=\begin{pmatrix}B^{-1}&O\\O&C^{-1}\end{pmatrix}=\begin{pmatrix}1&0&0\\-\dfrac{1}{2}&\dfrac{1}{2}&0\\0&0&1\end{pmatrix}$.`,
  source: '《1989 数学一解析.pdf》PDF 第 1–2 页',
});

EXAMS.push({
  year: 1989, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["det-rowsum-zero","vec-rank-def"],
  question: String.raw`设 $A$ 为 4 阶矩阵，且 $|A|=0$，则 $A$ 中（　　）.

（A）必有一列元素全为 $0$
（B）必有两列元素对应成比例
（C）必有一列向量是其余列向量的线性组合
（D）任一列向量是其余列向量的线性组合`,
  answer: String.raw`（C）.`,
  analysis: String.raw`**方法一** 因为 $|A|=0$，所以 $r(A)<4$，从而矩阵 $A$ 的列向量组线性相关，即必有一列可由其余列线性表示，应选（C）.

**方法二** 取 $A=\begin{pmatrix}1&0&1&0\\0&1&1&0\\0&0&0&0\\0&0&0&1\end{pmatrix}$，显然 $|A|=0$，矩阵 $A$ 任何一列元素都不全为零，任何两列都不成比例，第 4 列不是第 1，2，3 列的线性组合，即排除（A）（B）（D），应选（C）.`,
  source: '《1989 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1989, subject: '数一', number: 301, kind: '解答', score: 6, label: '第七大题',
  ids: ["eq-nonhomo-crit","eq-nonhomo-general"],
  question: String.raw`问 $\lambda$ 为何值时，线性方程组
$$
\begin{cases}x_1+x_3=\lambda,\\4x_1+x_2+2x_3=\lambda+2,\\6x_1+x_2+4x_3=2\lambda+3\end{cases}
$$
有解，并求出解的一般形式.`,
  answer: String.raw`当 $\lambda=1$ 时，方程组有解，通解为
$$
X=k\begin{pmatrix}-1\\2\\1\end{pmatrix}+\begin{pmatrix}1\\-1\\0\end{pmatrix}\quad(k\text{ 为任意常数}).
$$`,
  analysis: String.raw`$$
\overline{A}=\begin{pmatrix}1&0&1&\lambda\\4&1&2&\lambda+2\\6&1&4&2\lambda+3\end{pmatrix}\to\begin{pmatrix}1&0&1&\lambda\\0&1&-2&2-3\lambda\\0&1&-2&3-4\lambda\end{pmatrix}\to\begin{pmatrix}1&0&1&\lambda\\0&1&-2&2-3\lambda\\0&0&0&1-\lambda\end{pmatrix},
$$
当 $\lambda=1$ 时，方程组有解，再由 $\lambda=1$ 时
$$
\overline{A}\to\begin{pmatrix}1&0&1&1\\0&1&-2&-1\\0&0&0&0\end{pmatrix},
$$
得方程组的通解为
$$
X=k\begin{pmatrix}-1\\2\\1\end{pmatrix}+\begin{pmatrix}1\\-1\\0\end{pmatrix}\quad(k\text{ 为任意常数}).
$$`,
  source: '《1989 数学一解析.pdf》PDF 第 4 页',
});

EXAMS.push({
  year: 1989, subject: '数一', number: 401, kind: '解答', score: 8, label: '第八大题（证明题）',
  ids: ["eig-ops","mat-adjoint","mat-adj-identity"],
  question: String.raw`设 $\lambda$ 为 $n$ 阶可逆矩阵 $A$ 的一个特征值，证明：

（1）$\dfrac{1}{\lambda}$ 为 $A^{-1}$ 的特征值；
（2）$\dfrac{|A|}{\lambda}$ 为 $A$ 的伴随矩阵 $A^*$ 的特征值.`,
  answer: String.raw`证明见解析.`,
  analysis: String.raw`（1）因为 $A$ 可逆，所以 $\lambda\ne 0$，设 $A$ 的属于特征值 $\lambda$ 的特征向量为 $\alpha$，即 $A\alpha=\lambda\alpha$，将 $A\alpha=\lambda\alpha$ 两边左乘 $A^{-1}$，得 $A^{-1}A\alpha=\lambda A^{-1}\alpha$，于是 $A^{-1}\alpha=\dfrac{1}{\lambda}\alpha$，即 $\dfrac{1}{\lambda}$ 为 $A^{-1}$ 的特征值.

（2）因为 $A^*=|A|A^{-1}$，所以 $A^*\alpha=|A|A^{-1}\alpha=\dfrac{|A|}{\lambda}\alpha$，即 $\dfrac{|A|}{\lambda}$ 为 $A$ 的伴随矩阵 $A^*$ 的特征值.`,
  source: '《1989 数学一解析.pdf》PDF 第 4 页',
});
