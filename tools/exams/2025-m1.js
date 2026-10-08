// 2025 · 数学一 · 线性代数（题面取自《2025年考研数学（一）真题》，答案取自其参考答案；解析取自《2025 数学一解析》）
EXAMS.push({
  year: 2025, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['qf-inertia-index', 'qf-complete-square'],
  question: String.raw`二次型 $f(x_1,x_2,x_3)=x_1^2+2x_1x_2+2x_1x_3$ 的正惯性指数为（　）

（A）$0$　（B）$1$　（C）$2$　（D）$3$`,
  answer: '（B）',
  analysis: String.raw`$$
f(x_1,x_2,x_3)=x_1^2+2x_1x_2+2x_1x_3
$$
$$
=x_1^2+2x_1(x_2+x_3)+(x_2+x_3)^2-(x_2+x_3)^2=(x_1+x_2+x_3)^2-(x_2+x_3)^2.
$$`,
  source: '《2025 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2025, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['eq-geometry', 'eq-nonhomo-crit'],
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是 $n$ 维列向量，向量 $\alpha_1,\alpha_2$ 线性无关，$\alpha_1,\alpha_2,\alpha_3$ 线性相关，且 $\alpha_1+\alpha_2+\alpha_4=0$。空间直角坐标系中关于 $x,y,z$ 的方程 $x\alpha_1+y\alpha_2+z\alpha_3=\alpha_4$（　）

（A）过原点的一个平面　（B）过原点的一条直线
（C）不过原点的一个平面　（D）不过原点的一条直线`,
  answer: '（D）',
  analysis: String.raw`由 $\alpha_1,\alpha_2$ 线性无关，$\alpha_1,\alpha_2,\alpha_3$ 线性相关，则 $r(\alpha_1,\alpha_2,\alpha_3)=2$，又 $\alpha_1+\alpha_2+\alpha_4=0$，则 $r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3)=2$，进而 $x\alpha_1+y\alpha_2+z\alpha_3=0$ 的基础解系向量个数为 $1$。

又 $x=y=z=0$ 时，$\alpha_4=0$，此时 $\alpha_1+\alpha_2=0$，与 $\alpha_1,\alpha_2$ 线性无关矛盾，故而不过原点，选（D）。`,
  source: '《2025 数学一解析》第 4–5 页',
});

EXAMS.push({
  year: 2025, subject: '数一', number: 7, kind: '选择', score: 5,
  ids: ['mat-rank-ineq', 'mat-rank-crit'],
  question: String.raw`设 $n$ 阶矩阵 $A,B,C$ 满足 $r(A)+r(B)+r(C)=r(ABC)+2n$，给出下列四个结论：

① $r(ABC)+n=r(AB)+r(C)$；② $r(AB)+n=r(A)+r(B)$；③ $r(A)=r(B)=r(C)=n$；④ $r(AB)=r(BC)=n$。

其中正确的选项是（　）

（A）①②　（B）①③　（C）②④　（D）③④`,
  answer: '（A）',
  analysis: String.raw`取 $n=1,A=a\ne 0,B=b\ne 0,C=0$ 满足条件，而③④不对，故选 A。`,
  source: '《2025 数学一解析》第 5 页',
});

EXAMS.push({
  year: 2025, subject: '数一', number: 15, kind: '填空', score: 5,
  ids: ['det-rank', 'eq-homo-sol'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}4&2&-3\\a&3&-4\\b&5&-7\end{pmatrix}$，若方程组 $A^2x=0$ 与 $Ax=0$ 不同解，则 $a-b=\underline{\qquad}$。`,
  answer: String.raw`$-4$`,
  analysis: String.raw`根据题意，$|A|=0$，
$$
|A|=\begin{vmatrix}4&2&-3\\a&3&-4\\b&5&-7\end{vmatrix}=\begin{vmatrix}4&2&-3\\a-b&-2&3\\b&5&-7\end{vmatrix}=\begin{vmatrix}4+a-b&0&0\\a-b&-2&3\\b&5&-7\end{vmatrix}=(4+a-b)(-1)=0,
$$
故
$$
a-b=-4.
$$`,
  source: '《2025 数学一解析》第 8–9 页',
});

EXAMS.push({
  year: 2025, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['eig-def', 'eig-property'],
  question: String.raw`（本题满分 12 分）设矩阵 $A=\begin{pmatrix}0&-1&2\\-1&0&2\\-1&-1&a\end{pmatrix}$，已知 $1$ 是 $A$ 的特征多项式的重根。

（1）求 $a$ 的值；

（2）求所有满足 $A^2\alpha=\alpha+2\beta$，$A\alpha=\alpha+\beta$ 的非零列向量 $\alpha,\beta$。`,
  answer: String.raw`（1）$a=3$；（2）$\alpha=(k_1,k_2,k_3)^{\mathrm{T}}$（其中 $k_1,k_2,k_3$ 不全为 $0$），$\beta=(k,k,k)^{\mathrm{T}}$（其中 $k\ne 0$）`,
  analysis: String.raw`> 说明：《2025 数学一解析》一书中本题的【解析】为空白（原书此处未印出解答过程），故本题的解析无法从该解析资料转写，仅能依据其参考答案给出上述答案。`,
  source: '《2025 数学一解析》第 14 页（原书此处【解析】空白，答案见《2025年考研数学（一）真题》参考答案）',
});
