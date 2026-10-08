// 2001 · 数学一 · 线性代数（题面取自《2001年考研数学（一）真题》，答案与解析取自《2001数学一解析》；本卷填空/选择各自编号，故 number 用大类号×100+小题号并加 label）
EXAMS.push({
  year: 2001, subject: '数一', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['mat-inv-method', 'mat-power', 'mat-invertible-crit'],
  question: String.raw`设矩阵 $A$ 满足 $A^2+A-4E=O$，其中 $E$ 为单位矩阵，则 $(A-E)^{-1}=\underline{\qquad}$．`,
  answer: String.raw`$\dfrac{1}{2}(A+2E)$`,
  analysis: String.raw`（4）【答案】 $\dfrac{1}{2}(A+2E)$．

【解】 由 $A^2+A-4E=O$，得 $(A-E)(A+2E)=2E$．

于是 $(A-E)\cdot\dfrac{1}{2}(A+2E)=E$，由逆矩阵的定义得 $(A-E)^{-1}=\dfrac{1}{2}(A+2E)$．`,
  source: '《2001 年数学（一）真题解析》第 1 页',
});

EXAMS.push({
  year: 2001, subject: '数一', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ['qf-contract-vs-similar', 'eig-symmetric', 'qf-congruent'],
  question: String.raw`设 $A=\begin{pmatrix}1&1&1&1\\1&1&1&1\\1&1&1&1\\1&1&1&1\end{pmatrix}$，$B=\begin{pmatrix}4&0&0&0\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$，则 $A$ 与 $B$（　　）

（A）合同且相似．
（B）合同但不相似．
（C）不合同但相似．
（D）不合同且不相似．`,
  answer: String.raw`（A）`,
  analysis: String.raw`（9）【答案】 （A）．

【解】 令 $|\lambda E-A|=0$，得 $A$ 的特征值为 $\lambda_1=4,\lambda_2=\lambda_3=\lambda_4=0$．

显然 $B$ 与 $A$ 特征值相同，且 $A,B$ 都是实对称矩阵，故 $A,B$ 相似且合同，应选（A）．

> **方法点评**：设 $A,B$ 是两个实对称矩阵，则 $A$ 与 $B$ 相似的充分必要条件是 $|\lambda E-A|=|\lambda E-B|$，即两个矩阵的特征值相同；
> 设 $A,B$ 是两个实对称矩阵，则 $A$ 与 $B$ 合同的充分必要条件是 $A,B$ 正、负特征值的个数相同．`,
  source: '《2001 年数学（一）真题解析》第 2 页',
});

EXAMS.push({
  year: 2001, subject: '数一', number: 309, kind: '解答', score: 6, label: '解答题第 9 题',
  ids: ['eq-homo-structure', 'vec-indep-crit', 'vec-maximal'],
  question: String.raw`（本题满分 6 分）设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 为线性方程组 $Ax=0$ 的一个基础解系，$\beta_1=t_1\alpha_1+t_2\alpha_2$，$\beta_2=t_1\alpha_2+t_2\alpha_3$，$\cdots$，$\beta_s=t_1\alpha_s+t_2\alpha_1$，其中 $t_1,t_2$ 为实常数．试问 $t_1,t_2$ 满足什么关系时，$\beta_1,\beta_2,\cdots,\beta_s$ 也为 $Ax=0$ 的一个基础解系．`,
  answer: String.raw`当 $t_1^s+(-1)^{s+1}t_2^s\ne 0$，即当 $s$ 为偶数时 $t_1\ne\pm t_2$、当 $s$ 为奇数时 $t_1\ne -t_2$ 时，$\beta_1,\beta_2,\cdots,\beta_s$ 为方程组 $AX=0$ 的基础解系．`,
  analysis: String.raw`（17）【解】 因为 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 为 $AX=0$ 的基础解系，所以 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关．

由齐次线性方程组解的结构性质得 $\beta_1,\beta_2,\cdots,\beta_s$ 仍为方程组 $AX=0$ 的解，

则 $\beta_1,\beta_2,\cdots,\beta_s$ 为方程组 $AX=0$ 的基础解系的充分必要条件是 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关，
$$
\text{而 }(\beta_1,\beta_2,\cdots,\beta_s)=(\alpha_1,\alpha_2,\cdots,\alpha_s)\begin{pmatrix}t_1&0&0&\cdots&t_2\\t_2&t_1&0&\cdots&0\\0&t_2&t_1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&t_1\end{pmatrix},
$$
$$
\text{则 }\beta_1,\beta_2,\cdots,\beta_s\text{ 线性无关的充分必要条件是}\begin{vmatrix}t_1&0&0&\cdots&t_2\\t_2&t_1&0&\cdots&0\\0&t_2&t_1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&t_1\end{vmatrix}=t_1^s+(-1)^{s+1}t_2^s\ne 0,
$$
当 $t_1^s+(-1)^{s+1}t_2^s\ne 0$ 时，即当 $s$ 为偶数时，$t_1\ne\pm t_2$；当 $s$ 为奇数时，$t_1\ne -t_2$，向量组 $\beta_1,\beta_2,\cdots,\beta_s$ 为方程组 $AX=0$ 的基础解系．`,
  source: '《2001 年数学（一）真题解析》第 5–6 页',
});

EXAMS.push({
  year: 2001, subject: '数一', number: 310, kind: '解答', score: 8, label: '解答题第 10 题',
  ids: ['eig-similar-prop', 'mat-power', 'eig-ops'],
  question: String.raw`（本题满分 8 分）已知 3 阶矩阵 $A$ 与 3 维向量 $x$，使得向量组 $x,Ax,A^2x$ 线性无关，且满足
$$
A^3x=3Ax-2A^2x.
$$
（1）记 $P=(x,Ax,A^2x)$，求 3 阶矩阵 $B$，使 $A=PBP^{-1}$；

（2）计算行列式 $|A+E|$．`,
  answer: String.raw`（1）$B=\begin{pmatrix}0&0&0\\1&0&3\\0&1&-2\end{pmatrix}$；（2）$|A+E|=-4$．`,
  analysis: String.raw`（18）【解】 （Ⅰ）由
$$
AP=(Ax,A^2x,A^3x)=(Ax,A^2x,3Ax-2A^2x)=P\begin{pmatrix}0&0&0\\1&0&3\\0&1&-2\end{pmatrix}=PB.
$$
得 $A=PBP^{-1}$，其中 $B=\begin{pmatrix}0&0&0\\1&0&3\\0&1&-2\end{pmatrix}$．

（Ⅱ）由
$$
|\lambda E-B|=\begin{vmatrix}\lambda&0&0\\-1&\lambda&-3\\0&-1&\lambda+2\end{vmatrix}=(\lambda+3)\lambda(\lambda-1)=0,
$$
得 $B$ 的特征值为 $\lambda_1=-3,\lambda_2=0,\lambda_3=1$．

因为 $A\sim B$，所以 $A$ 的特征值为 $\lambda_1=-3,\lambda_2=0,\lambda_3=1$，于是 $A+E$ 的特征值为 $\mu_1=-2,\mu_2=1,\mu_3=2$，故 $|A+E|=-4$．

> **方法点评**：求矩阵的特征值通常有如下三个方法：
> （1）定义法，即令 $AX=\lambda X(X\ne 0)$，通过矩阵满足的方程求出矩阵的特征值．
> 【例】 设 $A$ 为方阵，且 $A^2=2A$，求 $A$ 的特征值．
> 【解】 令 $AX=\lambda X$，由 $A^2=2A$ 得 $(\lambda^2-2\lambda)X=0$，因为 $X\ne 0$，所以 $\lambda=0$ 或 $\lambda=2$．
> （2）公式法，即通过特征方程 $|\lambda E-A|=0$ 求出特征值．
> （3）关联矩阵法，即若 $A\sim B$，则 $|\lambda E-A|=|\lambda E-B|$，从而 $A,B$ 特征值相同．`,
  source: '《2001 年数学（一）真题解析》第 6 页',
});

