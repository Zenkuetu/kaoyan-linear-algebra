// 1995 · 数学一 · 线性代数（题面取自《1995年考研数学（一）真题.pdf》；答案与解析取自《1995数学一解析.pdf》）
EXAMS.push({
  year: 1995, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["mat-eq-solve","mat-inv-method"],
  question: String.raw`设 3 阶方阵 $A,B$ 满足关系式 $A^{-1}BA=6A+BA$，且
$$
A=\begin{pmatrix}\dfrac{1}{3}&0&0\\0&\dfrac{1}{4}&0\\0&0&\dfrac{1}{7}\end{pmatrix},
$$
则 $B=$______.`,
  answer: String.raw`$$
B=\begin{pmatrix}3&0&0\\0&2&0\\0&0&1\end{pmatrix}.
$$`,
  analysis: String.raw`由 $A^{-1}BA=6A+BA$ 得 $BA=6A^2+ABA$，然后右乘 $A^{-1}$ 得 $B=6A+AB$，解得
$$
B=6(E-A)^{-1}A=6[A^{-1}(E-A)]^{-1}=6(A^{-1}-E)^{-1},
$$
由
$$
A^{-1}-E=\begin{pmatrix}2&0&0\\0&3&0\\0&0&6\end{pmatrix},
$$
得 $(A^{-1}-E)^{-1}=\begin{pmatrix}\dfrac{1}{2}&0&0\\0&\dfrac{1}{3}&0\\0&0&\dfrac{1}{6}\end{pmatrix}$，故
$$
B=\begin{pmatrix}3&0&0\\0&2&0\\0&0&1\end{pmatrix}.
$$`,
  source: '《1995 数学一解析.pdf》PDF 第 1 页',
});

EXAMS.push({
  year: 1995, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["mat-elem-relation","mat-elem-mat"],
  question: String.raw`设
$$
A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix},\quad B=\begin{pmatrix}a_{21}&a_{22}&a_{23}\\a_{11}&a_{12}&a_{13}\\a_{31}+a_{11}&a_{32}+a_{12}&a_{33}+a_{13}\end{pmatrix},\quad P_1=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},
$$
$$
P_2=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix},
$$
则必有（　　）.

（A）$AP_1P_2=B$　（B）$AP_2P_1=B$　（C）$P_1P_2A=B$　（D）$P_2P_1A=B$`,
  answer: String.raw`（C）.`,
  analysis: String.raw`将 $A$ 的第 1 行加到第 3 行，再将第 1 行与第 2 行对调得 $B$，即
$$
B=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix}A=P_1P_2A,
$$
应选（C）.`,
  source: '《1995 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1995, subject: '数一', number: 301, kind: '解答', score: 7, label: '第八大题',
  ids: ["eig-symmetric","eig-orth-diag"],
  question: String.raw`设 3 阶实对称矩阵 $A$ 的特征值为 $\lambda_1=-1,\lambda_2=\lambda_3=1$，对应于 $\lambda_1$ 的特征向量为 $\xi_1=(0,1,1)^{\mathrm{T}}$，求 $A$.`,
  answer: String.raw`$$
A=\begin{pmatrix}1&0&0\\0&0&-1\\0&-1&0\end{pmatrix}.
$$`,
  analysis: String.raw`设 $\xi=(x_1,x_2,x_3)^{\mathrm{T}}$ 为 $\lambda_2=\lambda_3=1$ 对应的特征向量，由 $\xi_1^{\mathrm{T}}\xi=0$ 得 $x_2+x_3=0$，则 $\lambda_2=\lambda_3=1$ 对应的线性无关的特征向量为
$$
\xi_2=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad\xi_3=\begin{pmatrix}0\\1\\-1\end{pmatrix},
$$
令
$$
P=\begin{pmatrix}0&1&0\\1&0&1\\1&0&-1\end{pmatrix},
$$
由
$$
P^{-1}AP=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix}
$$
得
$$
A=P\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix}P^{-1}=\begin{pmatrix}1&0&0\\0&0&-1\\0&-1&0\end{pmatrix}.
$$`,
  source: '《1995 数学一解析.pdf》PDF 第 4 页',
});

EXAMS.push({
  year: 1995, subject: '数一', number: 302, kind: '解答', score: 6, label: '第九大题',
  ids: ["mat-orthogonal","det-product"],
  question: String.raw`设 $A$ 是 $n$ 阶矩阵，满足 $AA^{\mathrm{T}}=E$（$E$ 为 $n$ 阶单位矩阵，$A^{\mathrm{T}}$ 为 $A$ 的转置矩阵），$|A|<0$，求 $|A+E|$.`,
  answer: String.raw`$|A+E|=0$.`,
  analysis: String.raw`**方法一** 由 $AA^{\mathrm{T}}=E$ 得 $|A|\cdot|A^{\mathrm{T}}|=1$，即 $|A|^2=1$，再由 $|A|<0$ 得 $|A|=-1$. 于是
$$
|A+E|=|A+AA^{\mathrm{T}}|=|A|\cdot|E+A^{\mathrm{T}}|=-|(E+A)^{\mathrm{T}}|=-|E+A|,
$$
故 $|E+A|=0$.

**方法二** 令 $AX=\lambda X\ (X\ne 0)$，由 $AX=\lambda X$ 得 $X^{\mathrm{T}}A^{\mathrm{T}}=\lambda X^{\mathrm{T}}$，两边右乘 $AX$ 得 $X^{\mathrm{T}}A^{\mathrm{T}}AX=\lambda X^{\mathrm{T}}AX$，即 $X^{\mathrm{T}}X=\lambda^2X^{\mathrm{T}}X$，或 $(\lambda^2-1)X^{\mathrm{T}}X=0$，由 $X^{\mathrm{T}}X=\|X\|^2>0$ 得 $\lambda^2-1=0$，即 $\lambda=\pm 1$. 因为 $|A|<0$，所以 $A$ 至少有一个特征值为 $-1$，从而 $A+E$ 的特征值至少有一个为 $0$，故 $|A+E|=0$.`,
  source: '《1995 数学一解析.pdf》PDF 第 4 页',
});
