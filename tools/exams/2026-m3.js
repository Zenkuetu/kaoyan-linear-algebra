// 2026 · 数学三 · 线性代数（题面取自《2026年数学三真题及答案》，答案与解析取自《2026年考研数学三真题及答案解析》）
EXAMS.push({
  year: 2026, subject: '数三', number: 5, kind: '选择', score: 5,
  ids: ['mat-eq-solve', 'eq-nonhomo-crit'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&0&1\\0&0&1\\1&1&3\\1&1&1\end{pmatrix}$，$C=\begin{pmatrix}2&0\\1&1\\1&1\\a&b\end{pmatrix}$，若存在矩阵 $B$ 满足 $AB=C$，则（ ）

（A）$a=-1,b=-1$　（B）$a=2,b=2$　（C）$a=-1,b=2$　（D）$a=2,b=-1$`,
  answer: '（A）',
  analysis: String.raw`由于存在矩阵 $B$ 满足 $AB=C$，可知方程 $AX=C$ 有解，所以有 $r(A)=r(A,C)$，初等行变换易得 $a=b=-1$，故选 A。`,
  source: '《2026 数学三解析》第 5 页',
});

EXAMS.push({
  year: 2026, subject: '数三', number: 6, kind: '选择', score: 5,
  ids: ['mat-adj-identity', 'mat-adj-rank'],
  question: String.raw`设 $A$ 为 3 阶非零矩阵，$A^{*}$ 为 $A$ 的伴随矩阵。若 $A^{*}=-2A$，则 $A^2=$（ ）

（A）$\begin{pmatrix}-4&0&0\\0&-4&0\\0&0&-4\end{pmatrix}$　（B）$\begin{pmatrix}-4&0&0\\0&-4&0\\0&0&4\end{pmatrix}$

（C）$\begin{pmatrix}-4&0&0\\0&4&0\\0&0&4\end{pmatrix}$　（D）$\begin{pmatrix}4&0&0\\0&4&0\\0&0&4\end{pmatrix}$`,
  answer: '（D）',
  analysis: String.raw`由 $A^{*}=-2A$ 两边同时左乘 $A$ 可得，$AA^{*}=-2AA\Rightarrow A^2=\frac{|A|}{-2}E$；对 $A^{*}=-2A$ 取行列式可得
$$
|A^{*}|=|-2A|\Rightarrow |A|^2=(-2)^3|A|\Rightarrow |A|=(-2)^3,
$$
从而 $A^2=4E$，故答案选 D。`,
  source: '《2026 数学三解析》第 5–6 页',
});

EXAMS.push({
  year: 2026, subject: '数三', number: 7, kind: '选择', score: 5,
  ids: ['eig-property', 'eig-def'],
  question: String.raw`设 3 阶矩阵 $A$、$B$ 满足 $AB+BA=A^2+B^2$，且 $A\ne B$，则下列错误的是（ ）

（A）$(A-B)^3=O$　（B）$A-B$ 只有零特征值

（C）$A$、$B$ 不能都是对角矩阵　（D）$A-B$ 只有一个线性无关的特征向量`,
  answer: '（D）',
  analysis: String.raw`A 选项：$\because (A-B)^3=(A-B)(A-B)^2$，$(A-B)^2=A^2-AB-BA+B^2=O$，$\therefore (A-B)^3=O$；

B 选项：显然 $(A-B)^3$ 只有 $0$ 特征值，故 $A-B$ 也只有 $0$ 特征值；

C 选项：若 $A,B$ 都是对角矩阵，则 $AB=BA$，那么由 $(A-B)^2=O$ 知 $A=B$，而 $A\ne B$，故 $A,B$ 不都是对角矩阵；

D 选项：由 $(A-B)^2=O$ 且 $A-B\ne O$ 知，$r(A-B)=1$，$A-B$ 存在两个线性无关特征向量。

综上：ABC 正确，D 错误，故选 D。`,
  source: '《2026 数学三解析》第 6 页',
});

EXAMS.push({
  year: 2026, subject: '数三', number: 15, kind: '填空', score: 5,
  ids: ['qf-canonical', 'qf-def'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&b&-1\\a+2&3&-3a\end{pmatrix}$，若二次型 $x^{\mathrm{T}}(AA^{\mathrm{T}})x$ 的规范型为 $y_1^2$，则 $a+b=\underline{\qquad}$。`,
  answer: String.raw`$2$`,
  analysis: String.raw`因为二次型规范型 $y_1^2$，所以存在可逆矩阵 $Q$，使得 $Q^{\mathrm{T}}AA^{\mathrm{T}}Q=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，故 $r(AA^{\mathrm{T}})=1$，则 $r(A)=r(AA^{\mathrm{T}})=1$，那么
$$
\frac{a+2}{1}=\frac{3}{b}=\frac{-3a}{-1},
$$
解得 $a=b=1$，$a+b=2$。`,
  source: '《2026 数学三解析》第 9 页',
});

EXAMS.push({
  year: 2026, subject: '数三', number: 21, kind: '解答', score: 12,
  ids: ['vec-maximal', 'vec-indep-crit'],
  question: String.raw`（本题满分 12 分）已知向量 $\alpha_1=\begin{pmatrix}1\\0\\-1\\-1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}1\\-1\\0\\-2\end{pmatrix}$，$\alpha_3=\begin{pmatrix}0\\-1\\1\\-1\end{pmatrix}$，$\alpha_4=\begin{pmatrix}0\\1\\-1\\1\end{pmatrix}$，记 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$G=(\alpha_1,\alpha_2)$。

（1）证明：$\alpha_1,\alpha_2$ 是 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的极大线性无关组；

（2）求矩阵 $H$ 使得 $A=GH$，并求 $A^{10}$。`,
  answer: String.raw`（2）$H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}$，$A^{10}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}$`,
  analysis: String.raw`（1）
$$
(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=\begin{pmatrix}1&1&0&0\\0&-1&-1&1\\-1&0&1&-1\\-1&-2&-1&1\end{pmatrix}\to\begin{pmatrix}1&1&0&0\\0&1&1&-1\\0&0&0&0\\0&0&0&0\end{pmatrix}
$$
$r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=2$，所以 $\alpha_1,\alpha_2$ 是 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的极大线性无关组。

（2）法一：$A=GH$，设 $H=\begin{pmatrix}x_1&x_2&x_3&x_4\\x_5&x_6&x_7&x_8\end{pmatrix}$，
$$
\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}\begin{pmatrix}x_1&x_2&x_3&x_4\\x_5&x_6&x_7&x_8\end{pmatrix}=\begin{pmatrix}1&1&0&0\\0&-1&-1&1\\-1&0&1&-1\\-1&-2&-1&1\end{pmatrix},
$$
$$
\begin{cases}x_1+x_5=1\\-x_5=0\\-x_1=-1\\-x_1-2x_5=-1\end{cases},
$$
解得 $x_1=1,x_5=0$。同理可得 $x_2=0,x_6=1,x_3=-1,x_7=1,x_4=1,x_8=-1$。

所以 $H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}$。
$$
HG=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}.
$$
所以
$$
A^{10}=(GH)^{10}=G(HG)^{9}H=\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}\begin{pmatrix}1&-9\\0&1\end{pmatrix}\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}.
$$`,
  source: '《2026 数学三解析》第 12–13 页',
});
