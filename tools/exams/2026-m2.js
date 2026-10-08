// 2026 · 数学二 · 线性代数（题面取自《2026年考研数学二真题》，答案与解析取自《2026 数学二真题及答案》）
EXAMS.push({
  year: 2026, subject: '数二', number: 8, kind: '选择', score: 5,
  ids: ["mat-adjoint","mat-elem-mat","mat-invertible-crit"],
  question: String.raw`单位矩阵经若干次互换两行得到的矩阵为置换矩阵. 设 $A$ 为 $n$ 阶置换矩阵，$A^*$ 为 $A$ 的伴随矩阵，则

（A）$A^*$ 为置换矩阵　　（B）$A^{-1}$ 为置换矩阵

（C）$A^{-1}=A^*$　　（D）$A^{-1}=-A^*$`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解析】由题设知 $A=P_1\cdot P_2\cdots P_s$，其中 $P_1,P_2,\cdots,P_s$ 均为初等矩阵，则 $A^{-1}=(P_1\cdot P_2\cdots P_s)^{-1}=P_s^{-1}\cdots P_2^{-1}P_1^{-1}=P_s\cdots P_2\cdot P_1$ 也为置换矩阵，故选（B）.`,
  source: "《2026 数学二真题及答案》第 4 页",
});

EXAMS.push({
  year: 2026, subject: '数二', number: 9, kind: '选择', score: 5,
  ids: ["eq-nonhomo-crit","mat-eq-solve","mat-rank-relation"],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}1&0&1\\0&0&1\\1&1&3\\1&1&1\end{pmatrix},\quad C=\begin{pmatrix}2&0\\1&1\\1&1\\a&b\end{pmatrix},
$$
若存在矩阵 $B$ 满足 $AB=C$，则

（A）$a=-1,\ b=-1$　　（B）$a=2,\ b=2$

（C）$a=-1,\ b=2$　　（D）$a=2,\ b=-1$`,
  answer: String.raw`（A）`,
  analysis: String.raw`【解析】
$$
(A,C)=\begin{pmatrix}1&0&1&2&0\\0&0&1&1&1\\1&1&3&1&1\\1&1&1&a&b\end{pmatrix}\to\begin{pmatrix}1&0&1&2&0\\0&0&1&1&1\\0&1&2&-1&1\\0&0&-2&a-1&b-1\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&1&2&0\\0&0&1&1&1\\0&1&2&-1&1\\0&0&0&a+1&b+1\end{pmatrix}
$$
由于 $r(A,C)=r(A)$，故 $a+1=0,b+1=0$，故 $a=-1,b=-1$. 故选（A）.`,
  source: "《2026 数学二真题及答案》第 4–5 页",
});

EXAMS.push({
  year: 2026, subject: '数二', number: 10, kind: '选择', score: 5,
  ids: ["eig-def","eig-property","eig-power-app"],
  question: String.raw`设 3 阶矩阵 $A,B$，满足 $AB+BA=A^2+B^2$，则 $A\ne B$. 则下列结论错误的是

（A）$(A-B)^3=O$　　（B）$A-B$ 只有零特征值

（C）$A,B$ 不能都是对角矩阵　　（D）$A-B$ 只有一个线性无关的特征向量`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解析】由 $AB+BA=A^2+B^2$，得 $(A-B)^2=O$.

$(A-B)^2=O\Rightarrow (A-B)^3=O$，（A）正确；

$(A-B)^2=O\Rightarrow A-B$ 的特征值满足 $\lambda^2=0$，所以 $A-B$ 只有零特征值，（B）正确；

若 $A,B$ 都是对角矩阵，则 $A-B$ 是对角矩阵，$(A-B)^2=O\Rightarrow A-B=O$，与题意矛盾；（C）正确；

$(A-B)^2=O\Rightarrow r(A-B)+r(A-B)\le 3$，又 $A-B\ne O$，得 $r(A-B)=1$，$n-r(A-B)=2$，从而 $A-B$ 有 2 个线性无关的特征向量，（D）错误，故选（D）.`,
  source: "《2026 数学二真题及答案》第 5 页",
});

EXAMS.push({
  year: 2026, subject: '数二', number: 16, kind: '填空', score: 5,
  ids: ["qf-canonical","mat-rank-crit","qf-def"],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}1&b&-1\\a+2&3&-3a\end{pmatrix},
$$
若二次型 $x^{\mathrm T}(AA^{\mathrm T})x$ 的规范型为 $y_1^2$，则 $a+b=\underline{\qquad}$.`,
  answer: String.raw`$2$`,
  analysis: String.raw`【解析】由题设知 $r(AA^{\mathrm T})=1$，故 $r(A)=1$，则
$$
\frac{a+2}{1}=\frac{3}{b}=\frac{-3a}{-1},
$$
故 $a=b=1$，则 $a+b=2$.`,
  source: "《2026 数学二真题及答案》第 6–7 页",
});

EXAMS.push({
  year: 2026, subject: '数二', number: 22, kind: '解答', score: 12,
  ids: ["vec-maximal","vec-express-crit","eig-power-app"],
  question: String.raw`（本题满分 12 分）已知向量组
$$
\alpha_1=\begin{pmatrix}1\\0\\-1\\-1\end{pmatrix},\quad\alpha_2=\begin{pmatrix}1\\-1\\0\\-2\end{pmatrix},\quad\alpha_3=\begin{pmatrix}0\\-1\\1\\-1\end{pmatrix},\quad\alpha_4=\begin{pmatrix}0\\1\\-1\\1\end{pmatrix},
$$
记 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$G=(\alpha_1,\alpha_2)$.

（1）证明：$\alpha_1,\alpha_2$ 是 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的极大线性无关组；

（2）求矩阵 $H$ 使得 $A=GH$，并求 $A^{10}$.`,
  answer: String.raw`（1）证明见解析；（2）
$$
H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix},\quad A^{10}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}.
$$`,
  analysis: String.raw`【解析】（1）由
$$
(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=\begin{pmatrix}1&1&0&0\\0&-1&-1&1\\-1&0&1&-1\\-1&-2&-1&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1\\0&1&1&-1\\0&0&0&0\\0&0&0&0\end{pmatrix},
$$
故 $r(\alpha_1,\alpha_2)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=2$，故极大线性无关组中有 2 个向量，又由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 均可由 $\alpha_1,\alpha_2$ 线性表示，故 $\alpha_1,\alpha_2$ 为向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的一个极大线性无关组.

（2）由（1）知 $\alpha_3=-\alpha_1+\alpha_2$，$\alpha_4=\alpha_1-\alpha_2$，故
$$
(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=(\alpha_1,\alpha_2)\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix},
$$
故
$$
H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix},
$$
由于 $A=GH$，故
$$
A^{10}=GH\cdot GH\cdot GH\cdots GH=G(HG)^9H,
$$
由
$$
HG=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}=\begin{pmatrix}1&-1\\0&1\end{pmatrix},
$$
故
$$
(HG)^9=\begin{pmatrix}1&-9\\0&1\end{pmatrix},
$$
则
$$
A^{10}=G(HG)^9H=\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}\begin{pmatrix}1&-9\\0&1\end{pmatrix}\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}.
$$`,
  source: "《2026 数学二真题及答案》第 9 页",
});

