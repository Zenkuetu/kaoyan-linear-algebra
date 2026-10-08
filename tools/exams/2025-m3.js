// 2025 · 数学三 · 线性代数（题面取自《2025年考研数学三真题》，答案与解析取自《2025年数学三真题参考解析》）
EXAMS.push({
  year: 2025, subject: '数三', number: 5, kind: '选择', score: 5,
  ids: ['eq-nonhomo-crit', 'eq-rank-relation'],
  question: String.raw`已知 $A$ 是 $m\times n$ 的矩阵，$\beta$ 是 $m$ 维非零向量。若 $A$ 有 $k$ 阶非零子式，则（ ）

（A）当 $k=m$ 时 $Ax=\beta$ 有解　（B）当 $k=m$ 时 $Ax=\beta$ 无解

（C）当 $k<m$ 时 $Ax=\beta$ 有解　（D）当 $k<m$ 时 $Ax=\beta$ 无解`,
  answer: '（A）',
  analysis: String.raw`$k=m$ 时，$r(A)=r(\overline{A})=m$ 进而 $Ax=\beta$ 有解，A 正确。`,
  source: '《2025 数学三解析》第 3 页',
});

EXAMS.push({
  year: 2025, subject: '数三', number: 6, kind: '选择', score: 5,
  ids: ['eig-diag-crit', 'mat-power'],
  question: String.raw`设 $A$ 为 3 阶矩阵，则“$A^3-A^2$ 可对角化”是“$A$ 可对角化”的（ ）

（A）充分但不必要条件　（B）必要但不充分条件

（C）充分必要条件　（D）既不充分也不必要条件`,
  answer: '（B）',
  analysis: String.raw`若 $A$ 可对角化，则 $A^3-A^2$ 可对角化。`,
  source: '《2025 数学三解析》第 3 页',
});

EXAMS.push({
  year: 2025, subject: '数三', number: 7, kind: '选择', score: 5,
  ids: ['qf-positive-crit', 'qf-def'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&2\\-2&-a\end{pmatrix}$，$B=\begin{pmatrix}1&0\\1&a\end{pmatrix}$，若 $f(x,y)=|xA+yB|$ 是正定二次型，则 $a$ 的取值范围是（ ）

（A）$(0,2-\sqrt3)$　（B）$(2-\sqrt3,2+\sqrt3)$　（C）$(2+\sqrt3,4)$　（D）$(0,4)$`,
  answer: '（B）',
  analysis: String.raw`$$
|xA+yB|=\begin{vmatrix}x+y&2x\\-2x+y&-ax+ay\end{vmatrix}=(-ax+ay)(x+y)-2x(-2x+y)=(4-a)x^2-2xy+ay^2
$$
因为 $f(x,y)=|xA+yB|$ 是正定二次型，所以 $\begin{pmatrix}4-a&-1\\-1&a\end{pmatrix}$ 正定，即 $4-a>0$，$\begin{vmatrix}4-a&-1\\-1&a\end{vmatrix}>0$，解得 $2-\sqrt3<a<2+\sqrt3$。`,
  source: '《2025 数学三解析》第 4 页',
});

EXAMS.push({
  year: 2025, subject: '数三', number: 15, kind: '填空', score: 5,
  ids: ['det-expansion', 'det-def'],
  question: String.raw`已知
$$
f(x)=\begin{vmatrix}2x+1&3&2x+1&1\\2x&-3&4x&-2\\2x+1&2&2x+1&1\\2x&-4&4x&-2\end{vmatrix},\quad g(x)=\begin{vmatrix}2x+1&1&2x+1&3\\5x+1&-2&4x&-3\\0&1&2x+1&2\\2x&-2&4x&-4\end{vmatrix},
$$
则方程 $f(x)=g(x)$ 的不同的根的个数为 $\underline{\qquad}$。`,
  answer: String.raw`$2$`,
  analysis: String.raw`因为 $f(x)=g(x)$ 所以 $g(x)-f(x)=0$
$$
g(x)-f(x)=\begin{vmatrix}2x+1&1&2x+1&3\\5x+1&-2&4x&-3\\0&1&2x+1&2\\2x&-2&4x&-4\end{vmatrix}-\begin{vmatrix}2x+1&1&2x+1&3\\2x&-2&4x&-3\\2x+1&1&2x+1&2\\2x&-2&4x&-4\end{vmatrix}
$$
$$
=\begin{vmatrix}4x+2&1&2x+1&3\\7x+1&-2&4x&-3\\2x+1&1&2x+1&2\\4x&-2&4x&-4\end{vmatrix}=-2x(4x+1)=0
$$
所以有两个不同的实根。`,
  source: '《2025 数学三解析》第 7–8 页',
});

EXAMS.push({
  year: 2025, subject: '数三', number: 21, kind: '解答', score: 12,
  ids: ['vec-maximal', 'vec-rank-def'],
  question: String.raw`（本题满分 12 分）设矩阵 $A=\begin{pmatrix}1&-1&3&0&-1\\-1&0&-2&-a&-1\\1&1&a&2&3\end{pmatrix}$ 的秩为 2。

（1）求 $a$ 的值。

（2）求 $A$ 的列向量组的一个极大线性无关组 $\alpha$ 和 $\beta$，并求矩阵 $H$，使得 $A=GH$，其中 $G=(\alpha,\beta)$。`,
  answer: String.raw`（1）$a=1$；（2）$\alpha=\begin{pmatrix}1\\-1\\1\end{pmatrix}$，$\beta=\begin{pmatrix}-1\\0\\1\end{pmatrix}$，$H=\begin{pmatrix}1&0&2&1&1\\0&1&-1&1&2\end{pmatrix}$`,
  analysis: String.raw`（1）由 $r(A)=2$ 则
$$
\begin{vmatrix}1&-1&0\\-1&0&-a\\1&1&2\end{vmatrix}=-2+2a=0\Rightarrow a=1.
$$
（2）
$$
A=\begin{pmatrix}1&-1&3&0&-1\\-1&0&-2&-1&-1\\1&1&1&2&3\end{pmatrix}\to\begin{pmatrix}1&-1&3&0&-1\\0&-1&1&-1&-2\\0&2&-2&2&4\end{pmatrix}\to\begin{pmatrix}1&-1&3&0&-1\\0&-1&1&-1&-2\\0&0&0&0&0\end{pmatrix}
$$
则 $A$ 的列向量组的一个极大线性无关组为 $\alpha=\begin{pmatrix}1\\-1\\1\end{pmatrix}$，$\beta=\begin{pmatrix}-1\\0\\1\end{pmatrix}$。
$$
(G,A)=\begin{pmatrix}1&-1&1&-1&3&0&-1\\-1&0&-1&0&-2&-1&-1\\1&1&1&1&1&2&3\end{pmatrix}\to\begin{pmatrix}1&-1&1&-1&3&0&-1\\0&-1&0&-1&1&-1&-2\\0&2&0&2&-2&2&4\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&-1&1&-1&3&0&-1\\0&1&0&1&-1&1&2\\0&0&0&0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&1&0&2&1&1\\0&1&0&1&-1&1&2\\0&0&0&0&0&0&0\end{pmatrix}
$$
故而，$H=\begin{pmatrix}1&0&2&1&1\\0&1&-1&1&2\end{pmatrix}$。`,
  source: '《2025 数学三解析》第 14–15 页',
});
