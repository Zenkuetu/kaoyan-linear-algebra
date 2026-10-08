// 2026 · 数学一 · 线性代数（题面取自《26考研数学一》/《2026考研数学真题（数学一）水印版》，答案与解析取自《2026年考研数学一真题及答案》）
EXAMS.push({
  year: 2026, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['mat-adj-identity', 'mat-inv-method'],
  question: String.raw`单位矩阵经过若干次互换两行得到的矩阵称为置换矩阵，设 $A$ 为 $n$ 阶置换矩阵，$A^*$ 为 $A$ 的伴随矩阵，则（　）

（A）$A^*$ 为置换矩阵　（B）$A^{-1}$ 为置换矩阵　（C）$A^{-1}=A^*$　（D）$A^{-1}=-A^*$`,
  answer: '（B）',
  analysis: String.raw`由题设知 $A=P_1P_2\cdots P_s$，其中 $P_1,P_2,\cdots,P_s$ 均为初等矩阵，则
$$
A^{-1}=(P_1P_2\cdots P_s)^{-1}=P_s^{-1}\cdots P_2^{-1}P_1^{-1}=P_s\cdots P_2P_1
$$
也为置换矩阵，故选（B）。`,
  source: '《2026 考研数学一真题及答案》第 3 页',
});

EXAMS.push({
  year: 2026, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['eq-nonhomo-crit', 'vec-express-crit'],
  question: String.raw`设 $A,B$ 为 $n$ 阶矩阵，$\beta$ 是 $n$ 维列向量，若 $A$ 的列向量组可由 $B$ 的列向量组表示，则（　）

（A）当 $Ax=\beta$ 有解时，$Bx=\beta$ 有解
（B）当 $A^{\mathrm{T}}x=\beta$ 有解时，$B^{\mathrm{T}}x=\beta$ 有解
（C）当 $Bx=\beta$ 有解时，$Ax=\beta$ 有解
（D）当 $B^{\mathrm{T}}x=\beta$ 有解时，$A^{\mathrm{T}}x=\beta$ 有解`,
  answer: '（A）',
  analysis: String.raw`由题设知存在矩阵 $C$ 使得 $A=BC$，若 $Ax=\beta$ 有解，则 $BCx=\beta$ 有解，令 $X=Cx$，则 $BX=\beta$ 有解，故选（A）。`,
  source: '《2026 考研数学一真题及答案》第 3 页',
});

EXAMS.push({
  year: 2026, subject: '数一', number: 7, kind: '选择', score: 5,
  ids: ['qf-canonical', 'qf-inertia-index'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+4x_1x_2+4x_1x_3+4x_2x_3$，若方程 $f(x_1,x_2,x_3)=-1$ 表示的曲面为圆柱面，则（　）

（A）$a=-4$，且 $f(x_1,x_2,x_3)$ 对应的规范型为 $-y_1^2-y_2^2-y_3^2$
（B）$a=-4$，且 $f(x_1,x_2,x_3)$ 在正交变换下的标准型为 $-6y_1^2-6y_2^2$
（C）$a=2$，且 $f(x_1,x_2,x_3)$ 对应的规范型为 $-y_1^2-y_2^2-y_3^2$
（D）$a=2$，且 $f(x_1,x_2,x_3)$ 在正交变换下的标准型为 $-6y_1^2-6y_2^2$`,
  answer: '（B）',
  analysis: String.raw`由 $f(x_1,x_2,x_3)=-1$ 表示圆柱面，故二次型矩阵 $A$ 的特征值为 $\lambda_1<0,\lambda_2<0,\lambda_3=0$，故
$$
|A|=\begin{vmatrix}a&2&2\\2&a&2\\2&2&a\end{vmatrix}=0,
$$
则 $a=2$ 或 $-4$，又由 $\lambda_1+\lambda_2+\lambda_3=3a<0$，故 $a=-4$。

此时 $A=\begin{pmatrix}-4&2&2\\2&-4&2\\2&2&-4\end{pmatrix}$，由
$$
|\lambda E-A|=\begin{vmatrix}\lambda+4&-2&-2\\-2&\lambda+4&-2\\-2&-2&\lambda+4\end{vmatrix}=0,
$$
得 $A$ 的特征值为 $\lambda_1=-6,\lambda_2=-6,\lambda_3=0$，故 $f(x_1,x_2,x_3)$ 在正交变换下的标准形为 $-6y_1^2-6y_2^2$。故选（B）。`,
  source: '《2026 考研数学一真题及答案》第 3–4 页',
});

EXAMS.push({
  year: 2026, subject: '数一', number: 15, kind: '填空', score: 5,
  ids: ['eig-def', 'eig-poly'],
  question: String.raw`设矩阵 $A=\begin{pmatrix}1&0&0\\2&a&2\\0&2&a\end{pmatrix}$，$B=\begin{pmatrix}a&-1&-1\\-1&2&1\\-1&-1&a\end{pmatrix}$，$m(X)$ 是 3 阶矩阵 $X$ 的实特征值的最大值，且 $m(A)<m(B)$，则 $a$ 的取值范围是 $\underline{\qquad}$。`,
  answer: String.raw`$a<0$`,
  analysis: String.raw`由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&0&0\\-2&\lambda-a&-2\\0&-2&\lambda-a\end{vmatrix}=0,
$$
得 $A$ 的特征值为 $\lambda_1=1,\lambda_2=a+2,\lambda_3=a-2$，同理
$$
|\lambda E-B|=\begin{vmatrix}\lambda-a&1&1\\1&\lambda-2&-1\\1&1&\lambda-a\end{vmatrix}=0,
$$
得 $B$ 的特征值为 $\lambda_1=2,\lambda_2=a+1,\lambda_3=a-1$，又 $m(A)<m(B)$，则 $a+2<2$，故 $a<0$。`,
  source: '《2026 考研数学一真题及答案》第 7 页',
});

EXAMS.push({
  year: 2026, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['vec-maximal', 'mat-power'],
  question: String.raw`（本题满分 12 分）已知向量组
$$
\alpha_1=\begin{pmatrix}1\\0\\-1\\-1\end{pmatrix},\quad
\alpha_2=\begin{pmatrix}1\\-1\\0\\-2\end{pmatrix},\quad
\alpha_3=\begin{pmatrix}0\\-1\\1\\-1\end{pmatrix},\quad
\alpha_4=\begin{pmatrix}0\\1\\-1\\1\end{pmatrix},
$$
记 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$G=(\alpha_1,\alpha_2)$。

（1）证明：$\alpha_1,\alpha_2$ 是 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的极大线性无关组。

（2）求矩阵 $H$ 使得 $A=GH$，并求 $A^{10}$。`,
  answer: String.raw`（1）证明见解析；（2）$H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}$，$A^{10}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}$`,
  analysis: String.raw`（1）由
$$
(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=\begin{pmatrix}1&1&0&0\\0&-1&-1&1\\-1&0&1&-1\\-1&-2&-1&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1\\0&1&1&-1\\0&0&0&0\\0&0&0&0\end{pmatrix},
$$
故 $r(\alpha_1,\alpha_2)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=2$，故极大线性无关组中有 2 个向量，又由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 均可由 $\alpha_1,\alpha_2$ 线性表示，故 $\alpha_1,\alpha_2$ 为向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的一个极大线性无关组。

（2）由（1）知 $\alpha_3=-\alpha_1+\alpha_2,\alpha_4=\alpha_1-\alpha_2$，故
$$
(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=(\alpha_1,\alpha_2)\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix},
$$
故 $H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}$。由于 $A=GH$，故
$$
A^{10}=GH\cdot GH\cdot GH\cdot\cdots GH=G(HG)^9H,
$$
由
$$
HG=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}=\begin{pmatrix}1&-1\\0&1\end{pmatrix},
$$
故 $(HG)^9=\begin{pmatrix}1&-9\\0&1\end{pmatrix}$，则
$$
A^{10}=G(HG)^9H=\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}\begin{pmatrix}1&-9\\0&1\end{pmatrix}\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}.
$$`,
  source: '《2026 考研数学一真题及答案》第 9–10 页',
});
