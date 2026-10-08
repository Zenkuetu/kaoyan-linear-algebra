// 1987 · 数学三 · 线性代数（题面取自《1、1987-1996考研数学三真题.pdf》1987 年 试卷Ⅳ；答案与解析取自《1987数学三真题答案解析（试卷四）.pdf》）
EXAMS.push({
  year: 1987, subject: '数三', number: 504, kind: '选择', score: 2, label: '判断题第 4 题',
  ids: ["det-rank","mat-rank"],
  question: String.raw`假设 $D$ 是矩阵 $A$ 的 $r$ 阶子式，且含 $D$ 的一切 $r+1$ 阶子式都等于 $0$，那么矩阵 $A$ 的一切 $r+1$ 阶子式都等于 $0$.`,
  answer: String.raw`（√）．`,
  analysis: '',
  source: '《1987 数学三真题答案解析（试卷四）.pdf》第 1 页',
});

EXAMS.push({
  year: 1987, subject: '数三', number: 204, kind: '选择', score: 2, label: '选择题第 4 题',
  ids: ["mat-rank","vec-maximal","vec-rank-def"],
  question: String.raw`设 $n$ 阶方阵 $A$ 的秩 $r(A)=r<n$，那么在 $A$ 的 $n$ 个行向量中（　　）

（A）必有 $r$ 个行向量线性无关.

（B）任意 $r$ 个行向量都线性无关.

（C）任意 $r$ 个行向量都构成极大线性无关向量组.

（D）任意一个行向量都可以由其它 $r$ 个行向量线性表示.`,
  answer: String.raw`（A）．`,
  analysis: '',
  source: '《1987 数学三真题答案解析（试卷四）.pdf》第 1–2 页',
});

EXAMS.push({
  year: 1987, subject: '数三', number: 308, kind: '解答', score: 8, label: '第八题',
  ids: ["eq-gauss","eq-nonhomo-general","eq-homo-structure"],
  question: String.raw`解线性方程组
$$
\begin{cases}2x_1-x_2+4x_3-3x_4=-4,\\ x_1+x_3-x_4=-3,\\ 3x_1+x_2+x_3=1,\\ 7x_1+7x_3-3x_4=3.\end{cases}
$$`,
  answer: String.raw`$$
(x_1,x_2,x_3,x_4)^{\mathrm{T}}=(3,-8,0,6)^{\mathrm{T}}+k(-1,2,1,0)^{\mathrm{T}},
$$
其中 $k$ 为任意常数．`,
  analysis: String.raw`解：对方程组的增广矩阵进行初等行变换，有
$$
\begin{pmatrix}2&-1&4&-3&-4\\1&0&1&-1&-3\\3&1&1&0&1\\7&0&7&-3&3\end{pmatrix}\to\cdots\to\begin{pmatrix}1&0&1&0&3\\0&1&-2&0&-8\\0&0&0&1&6\\0&0&0&0&0\end{pmatrix},
$$
故原方程组与下方程组同解：
$$
\begin{cases}x_1=3-x_3,\\ x_2=-8+2x_3,\\ x_4=6.\end{cases}
$$
令 $x_3=0$，可得原方程组的特解 $\beta=(3,-8,0,6)^{\mathrm{T}}$.
又显然原方程组的导出组与下方程组同解：
$$
\begin{cases}x_1=-x_3,\\ x_2=2x_3,\\ x_4=0.\end{cases}
$$
令 $x_3=1$，可得导出组的基础解系 $\eta=(-1,2,1,0)^{\mathrm{T}}$.
因此原方程组的通解为 $(x_1,x_2,x_3,x_4)=(3,-8,0,6)^{\mathrm{T}}+k(-1,2,1,0)^{\mathrm{T}}$，其中 $k$ 为任意常数．`,
  source: '《1987 数学三真题答案解析（试卷四）.pdf》第 4 页',
});

EXAMS.push({
  year: 1987, subject: '数三', number: 309, kind: '解答', score: 7, label: '第九题',
  ids: ["mat-eq-solve","mat-inv-method","mat-mult"],
  question: String.raw`设矩阵 $A$ 和 $B$ 满足 $AB=A+2B$，求矩阵 $B$，其中
$$
A=\begin{pmatrix}4&2&3\\1&1&0\\-1&2&3\end{pmatrix}.
$$`,
  answer: String.raw`$$
B=\begin{pmatrix}3&-8&-6\\2&-9&-6\\-2&12&9\end{pmatrix}.
$$`,
  analysis: String.raw`因 $AB=A+2B$，故 $AB-2B=A$，即 $(A-2E)B=A$，
$$
B=(A-2E)^{-1}A=\begin{pmatrix}3&-8&-6\\2&-9&-6\\-2&12&9\end{pmatrix}.
$$`,
  source: '《1987 数学三真题答案解析（试卷四）.pdf》第 4 页',
});

EXAMS.push({
  year: 1987, subject: '数三', number: 310, kind: '解答', score: 6, label: '第十题',
  ids: ["eig-poly","eig-vector-space","eig-def"],
  question: String.raw`求矩阵
$$
A=\begin{pmatrix}-3&-1&2\\0&-1&4\\-1&0&1\end{pmatrix}
$$
的实特征值与对应的特征向量．`,
  answer: String.raw`实特征值 $\lambda=1$，对应的特征向量为 $k(0,2,1)^{\mathrm{T}}$，其中 $k$ 为非零任意常数．`,
  analysis: String.raw`令 $|\lambda E-A|=0$，即 $(\lambda-1)(\lambda^2+4\lambda+5)=0$，可见矩阵 $A$ 只有一个实特征值 $\lambda=1$.

易见，线性方程组 $(\lambda E-A)X=0$ 的基础解系为 $(0,2,1)^{\mathrm{T}}$，故 $A$ 对应于实特征值 $\lambda=1$ 的特征向量为 $k(0,2,1)^{\mathrm{T}}$，其中 $k$ 为非零任意常数．`,
  source: '《1987 数学三真题答案解析（试卷四）.pdf》第 5 页',
});
