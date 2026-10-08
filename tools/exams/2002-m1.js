// 2002 · 数学一 · 线性代数（题面取自《2002年考研数学（一）真题》，答案与解析取自《2002数学一解析》；本卷填空/选择各自编号，故 number 用大类号×100+小题号并加 label）
EXAMS.push({
  year: 2002, subject: '数一', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['qf-orthogonal', 'qf-canonical', 'eig-symmetric'],
  question: String.raw`已知实二次型 $f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+4x_1x_2+4x_1x_3+4x_2x_3$ 经正交变换 $x=Py$ 可化成标准形 $f=6y_1^2$，则 $a=\underline{\qquad}$．`,
  answer: String.raw`$2$`,
  analysis: String.raw`（4）【答案】 2．

【解】 方法一 $A=\begin{pmatrix}a&2&2\\2&a&2\\2&2&a\end{pmatrix}$，因为二次型经过正交变换得标准形为 $f=6y_1^2$，所以矩阵 $A$ 的特征值为 $\lambda_1=6,\lambda_2=\lambda_3=0$，由 $\operatorname{tr}A=\lambda_1+\lambda_2+\lambda_3$ 得 $a=2$．

方法二 因为二次型 $f$ 经过正交变换化为 $f=6y_1^2$，所以 $\lambda_1=6,\lambda_2=\lambda_3=0$，于是 $|A|=0$．
$$
\text{由 }|A|=\begin{vmatrix}a&2&2\\2&a&2\\2&2&a\end{vmatrix}=(a+4)(a-2)^2=0,\text{得 }a=-4\text{ 或 }a=2.
$$
$$
\text{当 }a=-4\text{ 时，}A=\begin{pmatrix}-4&2&2\\2&-4&2\\2&2&-4\end{pmatrix}.
$$
$$
\text{由 }|\lambda E-A|=\begin{vmatrix}\lambda+4&-2&-2\\-2&\lambda+4&-2\\-2&-2&\lambda+4\end{vmatrix}=\lambda(\lambda+6)^2=0,\text{得 }\lambda_1=0,\lambda_2=\lambda_3=-6,\text{矛盾},
$$
故 $a=2$．`,
  source: '《2002 年数学（一）真题解析》第 1–2 页',
});

EXAMS.push({
  year: 2002, subject: '数一', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ['eq-geometry', 'eq-rank-relation', 'eq-nonhomo-crit'],
  question: String.raw`设有三张不同平面的方程 $a_{i1}x+a_{i2}y+a_{i3}z=b_i$，$i=1,2,3$，它们所组成的线性方程组的系数矩阵与增广矩阵的秩都为 2，则这三张平面可能的位置关系为（　　）

（原题配图为四个平面位置关系示意图：（A）三张平面交于唯一点；（B）三张平面交于同一条直线（呈"书页"状）；（C）三张平面两两相交、三条交线互相平行且无公共点；（D）三张平面两两相交围成三棱柱、无公共点．）`,
  answer: String.raw`（B）`,
  analysis: String.raw`（9）【答案】 （B）．

【解】 因为 $A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix}$，$X=\begin{pmatrix}x\\y\\z\end{pmatrix}$，$b=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$．

因为 $r(A)=r(\overline{A})=2<3$，所以方程组 $AX=b$ 有无数个解，即三个平面有无数个交点，因为（A）只有一个交点，而（C），（D）没有交点，所以应选（B）．`,
  source: '《2002 年数学（一）真题解析》第 3 页',
});

EXAMS.push({
  year: 2002, subject: '数一', number: 309, kind: '解答', score: 6, label: '解答题第 9 题',
  ids: ['eq-nonhomo-general', 'eq-homo-structure', 'vec-indep-def'],
  question: String.raw`（本题满分 6 分）已知 4 阶方阵 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 均为 4 维列向量，其中 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，$\alpha_1=2\alpha_2-\alpha_3$．如果 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$，求线性方程组 $Ax=\beta$ 的通解．`,
  answer: String.raw`$X=k\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}+\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$（$k$ 为任意常数）．`,
  analysis: String.raw`（17）【解】 因为 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，而 $\alpha_1=2\alpha_2-\alpha_3$，所以 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的秩为 3，于是 $r(A)=3$．

又因为 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$，所以 $r(A)=r(\overline{A})=3$，$AX=0$ 的基础解系含一个线性无关的解向量．

而 $AX=0$ 等价于 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=0$，由 $\alpha_1-2\alpha_2+\alpha_3+0\alpha_4=0$ 得 $AX=0$ 的基础解系为 $\xi=(1,-2,1,0)^{\mathrm{T}}$．

又 $AX=\beta$ 等价于 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=\beta$ 且 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$，则方程组 $AX=\beta$ 的特解为 $\eta=(1,1,1,1)^{\mathrm{T}}$，故方程组 $AX=\beta$ 的通解为
$$
X=k\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}+\begin{pmatrix}1\\1\\1\\1\end{pmatrix}\quad(k\text{ 为任意常数}).
$$

> **方法点评**：本题考查方程组解向量形式与方程组的通解．
> 本题关键需要使用 $AX=0$ 的向量形式 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=0$ 及 $AX=b$ 的向量形式 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=b$．`,
  source: '《2002 年数学（一）真题解析》第 6 页',
});

EXAMS.push({
  year: 2002, subject: '数一', number: 410, kind: '解答', score: 8, label: '证明题第 10 题',
  ids: ['eig-similar-crit', 'eig-similar-prop', 'eig-symmetric'],
  question: String.raw`（本题满分 8 分）设 $A,B$ 为同阶方阵，

（1）如果 $A,B$ 相似，试证 $A,B$ 的特征多项式相等．

（2）举一个 2 阶方阵的例子说明（1）的逆命题不成立．

（3）当 $A,B$ 均为实对称矩阵时，试证（1）的逆命题成立．`,
  answer: String.raw`（1）证明见解析；（2）取 $A=\begin{pmatrix}0&0\\0&0\end{pmatrix}$，$B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$，则 $|\lambda E-A|=|\lambda E-B|=\lambda^2$，但 $r(A)=0\ne r(B)=1$，故 $A$ 与 $B$ 不相似；（3）证明见解析．`,
  analysis: String.raw`（18）【解】 （Ⅰ）设 $A\sim B$，则存在可逆矩阵 $P$，使得 $P^{-1}AP=B$．

于是 $|\lambda E-B|=|\lambda E-P^{-1}AP|=|\lambda P^{-1}P-P^{-1}AP|=|P^{-1}||\lambda E-A||P|=|\lambda E-A|$．

（Ⅱ）令 $A=\begin{pmatrix}0&0\\0&0\end{pmatrix}$，$B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$，显然 $|\lambda E-A|=|\lambda E-B|=\lambda^2$．

因为 $r(A)=0\ne r(B)=1$，所以 $A$ 与 $B$ 不相似．

（Ⅲ）设 $A^{\mathrm{T}}=A,B^{\mathrm{T}}=B$．

若 $|\lambda E-A|=|\lambda E-B|$，则 $A,B$ 有相同的特征值，设为 $\lambda_1,\lambda_2,\cdots,\lambda_n$．

因为 $A,B$ 可对角化，所以存在可逆矩阵 $P_1,P_2$，使得
$$
P_1^{-1}AP_1=\begin{pmatrix}\lambda_1&0&\cdots&0\\0&\lambda_2&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda_n\end{pmatrix},\quad P_2^{-1}BP_2=\begin{pmatrix}\lambda_1&0&\cdots&0\\0&\lambda_2&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda_n\end{pmatrix},
$$
从而 $P_1^{-1}AP_1=P_2^{-1}BP_2$ 或 $(P_1P_2^{-1})^{-1}AP_1P_2^{-1}=B$，令 $P=P_1P_2^{-1}$，则 $P^{-1}AP=B$，即 $A\sim B$．`,
  source: '《2002 年数学（一）真题解析》第 7 页',
});

