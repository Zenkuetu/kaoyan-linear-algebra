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

EXAMS.push({
  year: 1998, subject: '数一', number: 310, kind: '解答', score: 6, label: '解答题第 10 题',
  ids: ['qf-orthogonal', 'eig-orth-diag', 'qf-canonical'],
  question: String.raw`（本题满分 6 分）已知二次曲面方程 $x^2+ay^2+z^2+2bxy+2xz+2yz=4$ 可以经过正交变换
$$
\begin{pmatrix}x\\y\\z\end{pmatrix}=P\begin{pmatrix}\xi\\\eta\\\zeta\end{pmatrix}
$$
化为椭圆柱面方程 $\eta^2+4\zeta^2=4$，求 $a,b$ 的值和正交矩阵 $P$．`,
  answer: String.raw`$a=3$，$b=1$，$P=\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{6}}\\0&-\dfrac{1}{\sqrt{3}}&\dfrac{2}{\sqrt{6}}\\\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{6}}\end{pmatrix}$．`,
  analysis: String.raw`十、【解】 令 $A=\begin{pmatrix}1&b&1\\b&a&1\\1&1&1\end{pmatrix}$，$X=\begin{pmatrix}x\\y\\z\end{pmatrix}$，则二次曲面表示为 $X^{\mathrm{T}}AX=4$．

因为 $X^{\mathrm{T}}AX$ 经过正交变换可以化为 $\eta^2+4\zeta^2$，所以矩阵 $A$ 的特征值为 $\lambda_1=0,\lambda_2=1,\lambda_3=4$，

由 $\operatorname{tr}A=\lambda_1+\lambda_2+\lambda_3$ 得 $a+2=5$，解得 $a=3$．

由 $|A|=\lambda_1\lambda_2\lambda_3$ 得 $b=1$，即 $A=\begin{pmatrix}1&1&1\\1&3&1\\1&1&1\end{pmatrix}$．
$$
\text{由 }0E-A\to\begin{pmatrix}1&0&1\\0&1&0\\0&0&0\end{pmatrix}\text{得 }\lambda_1=0\text{ 对应的特征向量为 }\alpha_1=\begin{pmatrix}-1\\0\\1\end{pmatrix};
$$
$$
\text{由 }E-A\to\begin{pmatrix}1&0&-1\\0&1&1\\0&0&0\end{pmatrix}\text{得 }\lambda_2=1\text{ 对应的特征向量为 }\alpha_2=\begin{pmatrix}1\\-1\\1\end{pmatrix};
$$
$$
\text{由 }4E-A\to\begin{pmatrix}1&0&-1\\0&1&-2\\0&0&0\end{pmatrix}\text{得 }\lambda_3=4\text{ 对应的特征向量为 }\alpha_3=\begin{pmatrix}1\\2\\1\end{pmatrix},
$$
规范化得 $\gamma_1=\dfrac{1}{\sqrt{2}}\begin{pmatrix}-1\\0\\1\end{pmatrix}$，$\gamma_2=\dfrac{1}{\sqrt{3}}\begin{pmatrix}1\\-1\\1\end{pmatrix}$，$\gamma_3=\dfrac{1}{\sqrt{6}}\begin{pmatrix}1\\2\\1\end{pmatrix}$，
$$
\text{得正交矩阵 }P=\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{6}}\\0&-\dfrac{1}{\sqrt{3}}&\dfrac{2}{\sqrt{6}}\\\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{6}}\end{pmatrix}.
$$`,
  source: '《1998 年数学（一）真题解析》第 5–6 页',
});

EXAMS.push({
  year: 1998, subject: '数一', number: 312, kind: '解答', score: 5, label: '解答题第 12 题',
  ids: ['eq-homo-structure', 'eq-samesol', 'eq-AX-O-AB-O'],
  question: String.raw`（本题满分 5 分）已知线性方程组
$$
(\text{I})\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1,2n}x_{2n}=0,\\a_{21}x_1+a_{22}x_2+\cdots+a_{2,2n}x_{2n}=0,\\\cdots\cdots\\a_{n1}x_1+a_{n2}x_2+\cdots+a_{n,2n}x_{2n}=0\end{cases}
$$
的一个基础解系为 $(b_{11},b_{12},\cdots,b_{1,2n})^{\mathrm{T}},(b_{21},b_{22},\cdots,b_{2,2n})^{\mathrm{T}},\cdots,(b_{n1},b_{n2},\cdots,b_{n,2n})^{\mathrm{T}}$．试写出线性方程组
$$
(\text{II})\begin{cases}b_{11}y_1+b_{12}y_2+\cdots+b_{1,2n}y_{2n}=0,\\b_{21}y_1+b_{22}y_2+\cdots+b_{2,2n}y_{2n}=0,\\\cdots\cdots\\b_{n1}y_1+b_{n2}y_2+\cdots+b_{n,2n}y_{2n}=0\end{cases}
$$
的通解，并说明理由．`,
  answer: String.raw`通解为 $Y=C_1\begin{pmatrix}a_{11}\\a_{12}\\\vdots\\a_{1,2n}\end{pmatrix}+C_2\begin{pmatrix}a_{21}\\a_{22}\\\vdots\\a_{2,2n}\end{pmatrix}+\cdots+C_n\begin{pmatrix}a_{n1}\\a_{n2}\\\vdots\\a_{n,2n}\end{pmatrix}$（$C_1,C_2,\cdots,C_n$ 为任意常数）．`,
  analysis: String.raw`十二、【解】 令
$$
A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1,2n}\\a_{21}&a_{22}&\cdots&a_{2,2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{n,2n}\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\\vdots\\x_{2n}\end{pmatrix},\quad B=\begin{pmatrix}b_{11}&b_{21}&\cdots&b_{n1}\\b_{12}&b_{22}&\cdots&b_{n2}\\\vdots&\vdots&&\vdots\\b_{1,2n}&b_{2,2n}&\cdots&b_{n,2n}\end{pmatrix},
$$
因为 $(b_{11},b_{12},\cdots,b_{1,2n})^{\mathrm{T}},(b_{21},b_{22},\cdots,b_{2,2n})^{\mathrm{T}},\cdots,(b_{n1},b_{n2},\cdots,b_{n,2n})^{\mathrm{T}}$ 为方程组 $AX=0$ 的基础解系，所以 $r(A)=2n-n=n$ 且 $AB=O$．

又因为 $(b_{11},b_{12},\cdots,b_{1,2n})^{\mathrm{T}},(b_{21},b_{22},\cdots,b_{2,2n})^{\mathrm{T}},\cdots,(b_{n1},b_{n2},\cdots,b_{n,2n})^{\mathrm{T}}$ 线性无关，所以 $r(B)=n$．

令 $Y=(y_1,y_2,\cdots,y_{2n})^{\mathrm{T}}$，方程组（Ⅱ）表示为 $B^{\mathrm{T}}Y=0$，

由 $AB=O$ 得 $B^{\mathrm{T}}A^{\mathrm{T}}=O$，即 $(a_{11},a_{12},\cdots,a_{1,2n})^{\mathrm{T}},(a_{21},a_{22},\cdots,a_{2,2n})^{\mathrm{T}},\cdots,(a_{n1},a_{n2},\cdots,a_{n,2n})^{\mathrm{T}}$ 为方程组 $B^{\mathrm{T}}Y=0$ 的解．

因为 $r(A)=n$，所以 $(a_{11},a_{12},\cdots,a_{1,2n})^{\mathrm{T}},(a_{21},a_{22},\cdots,a_{2,2n})^{\mathrm{T}},\cdots,(a_{n1},a_{n2},\cdots,a_{n,2n})^{\mathrm{T}}$ 线性无关，又因为 $r(B^{\mathrm{T}})=n$，所以 $(a_{11},a_{12},\cdots,a_{1,2n})^{\mathrm{T}},(a_{21},a_{22},\cdots,a_{2,2n})^{\mathrm{T}},\cdots,(a_{n1},a_{n2},\cdots,a_{n,2n})^{\mathrm{T}}$ 为方程组（Ⅱ）的一个基础解系．`,
  source: '《1998 年数学（一）真题解析》第 6 页',
});

EXAMS.push({
  year: 1998, subject: '数一', number: 411, kind: '解答', score: 4, label: '证明题第 11 题',
  ids: ['vec-indep-def', 'mat-power', 'eq-AX-O-AB-O'],
  question: String.raw`（本题满分 4 分）设 $A$ 是 $n$ 阶矩阵，若存在正整数 $k$，使线性方程组 $A^kx=0$ 有解向量 $\alpha$，且 $A^{k-1}\alpha\ne 0$．证明：向量组 $\alpha,A\alpha,\cdots,A^{k-1}\alpha$ 是线性无关的．`,
  answer: String.raw`证明见解析．`,
  analysis: String.raw`十一、【证明】 显然 $A^k\alpha=0$，令 $l_0\alpha+l_1A\alpha+\cdots+l_{k-1}A^{k-1}\alpha=0$，

将 $l_0\alpha+l_1A\alpha+\cdots+l_{k-1}A^{k-1}\alpha=0$ 两边左乘 $A^{k-1}$ 得 $l_0A^{k-1}\alpha=0$，

因为 $A^{k-1}\alpha\ne 0$，所以 $l_0=0$；

将 $l_1A\alpha+\cdots+l_{k-1}A^{k-1}\alpha=0$ 两边左乘 $A^{k-2}$ 得 $l_1A^{k-1}\alpha=0$，从而 $l_1=0$．

依次类推，可得 $l_2=\cdots=l_{k-1}=0$，故 $\alpha,A\alpha,\cdots,A^{k-1}\alpha$ 线性无关．`,
  source: '《1998 年数学（一）真题解析》第 6 页',
});

