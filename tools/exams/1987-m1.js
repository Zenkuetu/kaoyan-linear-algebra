// 1987 · 数学一 · 线性代数（题面取自《1987年考研数学（一）真题.pdf》；答案与解析取自《1987数学一解析.pdf》）
EXAMS.push({
  year: 1987, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["sp-dim-basis"],
  question: String.raw`已知 3 维线性空间的一组基为 $\alpha_1=(1,1,0)$，$\alpha_2=(1,0,1)$，$\alpha_3=(0,1,1)$，则向量 $\alpha=(2,0,0)$ 在上述基底下的坐标为______.`,
  answer: String.raw`$(1,1,-1)$.`,
  analysis: String.raw`令 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\alpha$，
$$
\begin{pmatrix}1&1&0&2\\1&0&1&0\\0&1&1&0\end{pmatrix}\to\begin{pmatrix}1&1&0&2\\0&1&-1&2\\0&0&1&-1\end{pmatrix}\to\begin{pmatrix}1&0&0&1\\0&1&0&1\\0&0&1&-1\end{pmatrix},
$$
向量 $\alpha$ 在基底 $\alpha_1,\alpha_2,\alpha_3$ 下的坐标为 $(1,1,-1)$.`,
  source: '《1987 数学一解析.pdf》PDF 第 1–2 页',
});

EXAMS.push({
  year: 1987, subject: '数一', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ["mat-adj-identity","mat-adjoint"],
  question: String.raw`设 $A$ 为 $n$ 阶矩阵，且 $|A|=a\ne 0$，$A^*$ 是 $A$ 的伴随矩阵，则 $|A^*|=$（　　）

（A）$a$　（B）$\dfrac{1}{a}$　（C）$a^{n-1}$　（D）$a^n$`,
  answer: String.raw`（C）.`,
  analysis: String.raw`由 $AA^*=|A|E$ 得出 $|A|\cdot|A^*|=||A|E|=|A|^n$，由 $|A|=a\ne 0$ 得 $|A^*|=a^{n-1}$，应选（C）.`,
  source: '《1987 数学一解析.pdf》PDF 第 3 页',
});

EXAMS.push({
  year: 1987, subject: '数一', number: 301, kind: '解答', score: 4, label: '第三大题第（2）小题',
  ids: ["mat-eq-solve","mat-inv-method"],
  question: String.raw`设矩阵 $A$ 与 $B$ 满足 $AB=A+2B$，其中
$$
A=\begin{pmatrix}3&0&1\\1&1&0\\0&1&4\end{pmatrix},
$$
求矩阵 $B$.`,
  answer: String.raw`$B=\begin{pmatrix}5&-2&-2\\4&-3&-2\\-2&2&3\end{pmatrix}$`,
  analysis: String.raw`由 $AB=A+2B$ 得 $(A-2E)B=A$，解得 $B=(A-2E)^{-1}A$，而
$$
A-2E=\begin{pmatrix}1&0&1\\1&-1&0\\0&1&2\end{pmatrix},
$$
由
$$
\begin{pmatrix}1&0&1&1&0&0\\1&-1&0&0&1&0\\0&1&2&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&1&1&0&0\\0&-1&-1&-1&1&0\\0&0&1&-1&1&1\end{pmatrix}\to\begin{pmatrix}1&0&0&2&-1&-1\\0&1&0&2&-2&-1\\0&0&1&-1&1&1\end{pmatrix},
$$
得
$$
(A-2E)^{-1}=\begin{pmatrix}2&-1&-1\\2&-2&-1\\-1&1&1\end{pmatrix},
$$
于是
$$
B=\begin{pmatrix}2&-1&-1\\2&-2&-1\\-1&1&1\end{pmatrix}\begin{pmatrix}3&0&1\\1&1&0\\0&1&4\end{pmatrix}=\begin{pmatrix}5&-2&-2\\4&-3&-2\\-2&2&3\end{pmatrix}.
$$`,
  source: '《1987 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1987, subject: '数一', number: 302, kind: '解答', score: 8, label: '第九大题',
  ids: ["eq-nonhomo-crit","eq-nonhomo-general"],
  question: String.raw`问 $a,b$ 为何值时，线性方程组
$$
\begin{cases}x_1+x_2+x_3+x_4=0,\\x_2+2x_3+2x_4=1,\\-x_2+(a-3)x_3-2x_4=b,\\3x_1+2x_2+x_3+ax_4=-1\end{cases}
$$
有唯一解？无解？有无穷多个解？并求出有无穷多个解时的通解.`,
  answer: String.raw`当 $a\ne 1$，$b$ 为任意常数时，方程组有唯一解；当 $a=1,b\ne -1$ 时，方程组无解；当 $a=1,b=-1$ 时，方程组有无穷多个解，通解为
$$
X=k_1\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}+k_2\begin{pmatrix}1\\-2\\0\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\0\\0\end{pmatrix}\quad(k_1,k_2\text{ 为任意常数}).
$$`,
  analysis: String.raw`$$
\overline{A}=\begin{pmatrix}1&1&1&1&0\\0&1&2&2&1\\0&-1&a-3&-2&b\\3&2&1&a&-1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&0\\0&1&2&2&1\\0&-1&a-3&-2&b\\0&-1&-2&a-3&-1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&1&1&1&0\\0&1&2&2&1\\0&0&a-1&0&b+1\\0&0&0&a-1&0\end{pmatrix},
$$
当 $a\ne 1$，$b$ 为任意常数时，方程组有唯一解；当 $a=1,b\ne -1$ 时，方程组无解；当 $a=1,b=-1$ 时，方程组有无数个解，将 $a,b$ 代入后得出
$$
\overline{A}\to\begin{pmatrix}1&0&-1&-1&-1\\0&1&2&2&1\\0&0&0&0&0\\0&0&0&0&0\end{pmatrix},
$$
得方程组的通解为
$$
X=k_1\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}+k_2\begin{pmatrix}1\\-2\\0\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\0\\0\end{pmatrix}\quad(k_1,k_2\text{ 为任意常数}).
$$`,
  source: '《1987 数学一解析.pdf》PDF 第 4 页',
});
