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

