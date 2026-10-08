// 1998 · 数学一 · 线性代数（题面取自《1998年考研数学（一）真题》，答案与解析取自《1998数学一解析》；本卷填空/选择各自编号，故 number 用大类号×100+小题号并加 label）
EXAMS.push({
  year: 1998, subject: '数一', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['eig-ops', 'mat-adj-identity', 'eig-property'],
  question: String.raw`设 $A$ 为 $n$ 阶矩阵，$|A|\ne 0$，$A^{*}$ 为 $A$ 的伴随矩阵，$E$ 为 $n$ 阶单位矩阵．若 $A$ 有特征值 $\lambda$，则 $(A^{*})^2+E$ 必有特征值 $\underline{\qquad}$．`,
  answer: String.raw`$\left(\dfrac{|A|}{\lambda}\right)^2+1$`,
  analysis: String.raw`（4）【答案】 $\left(\dfrac{|A|}{\lambda}\right)^2+1$．

【解】 设 $A$ 的对应于特征值 $\lambda$ 的特征向量为 $\alpha$，则 $A\alpha=\lambda\alpha$，
$$
\text{由 }A^{*}\alpha=\frac{|A|}{\lambda}\alpha\text{ 得 }[(A^{*})^2+E]\alpha=\left[\left(\frac{|A|}{\lambda}\right)^2+1\right]\alpha,
$$
故 $(A^{*})^2+E$ 一定有特征值 $\left(\dfrac{|A|}{\lambda}\right)^2+1$．`,
  source: '《1998 年数学（一）真题解析》第 1 页',
});

EXAMS.push({
  year: 1998, subject: '数一', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ['eq-geometry', 'det-rank', 'det-def'],
  question: String.raw`设矩阵 $\begin{pmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{pmatrix}$ 是满秩的，则直线 $\dfrac{x-a_3}{a_1-a_2}=\dfrac{y-b_3}{b_1-b_2}=\dfrac{z-c_3}{c_1-c_2}$ 与直线 $\dfrac{x-a_1}{a_2-a_3}=\dfrac{y-b_1}{b_2-b_3}=\dfrac{z-c_1}{c_2-c_3}$（　　）

（A）相交于一点．
（B）重合．
（C）平行但不重合．
（D）异面．`,
  answer: String.raw`（A）`,
  analysis: String.raw`（4）【答案】 （A）．
$$
\text{【解】 因为}\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}=\begin{vmatrix}a_1-a_2&b_1-b_2&c_1-c_2\\a_2-a_3&b_2-b_3&c_2-c_3\\a_3&b_3&c_3\end{vmatrix}\ne 0,
$$
所以两条直线的方向向量不平行，（B）与（C）不对；

令 $s_1=\{a_1-a_2,b_1-b_2,c_1-c_2\}$，$s_2=\{a_2-a_3,b_2-b_3,c_2-c_3\}$，$M_1(a_3,b_3,c_3),M_2(a_1,b_1,c_1)$ 分别为两条直线上的点，$\overrightarrow{M_1M_2}=\{a_1-a_3,b_1-b_3,c_1-c_3\}$，
$$
\text{因为}\overrightarrow{M_1M_2}\cdot(s_1\times s_2)=\begin{vmatrix}a_1-a_3&b_1-b_3&c_1-c_3\\a_1-a_2&b_1-b_2&c_1-c_2\\a_2-a_3&b_2-b_3&c_2-c_3\end{vmatrix}=0,\text{所以两直线共面且不平行，即两直线交于一}
$$
点，应选（A）．`,
  source: '《1998 年数学（一）真题解析》第 2–3 页',
});

