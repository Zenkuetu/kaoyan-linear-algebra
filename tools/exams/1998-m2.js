// 1998 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 23–25 页；答案与解析取自《1989—2004 考研数二真题答案解析》）
EXAMS.push({
  year: 1998, subject: '数二', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ['mat-adjoint', 'mat-adj-identity'],
  question: String.raw`设 $A$ 是任一 $n\ (n\ge3)$ 阶方阵，$A^*$ 是其伴随矩阵，又 $k$ 为常数，且 $k\ne0,\pm1$，则必有 $(kA)^*=(\quad)$

（A）$kA^*$.
（B）$k^{n-1}A^*$.
（C）$k^nA^*$.
（D）$k^{-1}A^*$.`,
  answer: '（B）',
  analysis: String.raw`对任何 $n$ 阶矩阵都要成立的关系式，对特殊的 $n$ 阶矩阵自然也要成立. 那么，当 $A$ 可逆时，由 $A^*=|A|A^{-1}$，有
$$
(kA)^*=|kA|(kA)^{-1}=k^n|A|\cdot\frac{1}{k}A^{-1}=k^{n-1}|A|A^{-1}=k^{n-1}A^*.
$$
故应选（B）.

一般地，若 $A=(a_{ij})_{n\times n}$，那么 $kA=(ka_{ij})_{n\times n}$，那么矩阵 $kA$ 的第 $i$ 行 $j$ 列元素的代数余子式为
$$
(-1)^{i+j}\begin{vmatrix}ka_{11}&\cdots&ka_{1,j-1}&ka_{1,j+1}&\cdots&ka_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\ka_{i-1,1}&\cdots&ka_{i-1,j-1}&ka_{i-1,j+1}&\cdots&ka_{i-1,n}\\ka_{i+1,1}&\cdots&ka_{i+1,j-1}&ka_{i+1,j+1}&\cdots&ka_{i+1,n}\\\vdots&&\vdots&\vdots&&\vdots\\ka_{n1}&\cdots&ka_{n,j-1}&ka_{n,j+1}&\cdots&ka_{nn}\end{vmatrix}=(-1)^{i+j}k^{n-1}\begin{vmatrix}a_{11}&\cdots&a_{1,j-1}&a_{1,j+1}&\cdots&a_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{i-1,1}&\cdots&a_{i-1,j-1}&a_{i-1,j+1}&\cdots&a_{i-1,n}\\a_{i+1,1}&\cdots&a_{i+1,j-1}&a_{i+1,j+1}&\cdots&a_{i+1,n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{n,j-1}&a_{n,j+1}&\cdots&a_{nn}\end{vmatrix},
$$
即 $|kA|$ 中每个元素的代数余子式恰好是 $|A|$ 相应元素的代数余子式的 $k^{n-1}$ 倍，因而，按伴随矩阵的定义知 $(kA)^*$ 的元素是 $A^*$ 对应元素的 $k^{n-1}$ 倍.

【相关知识点】1. 行列式的性质：若 $A$ 是 $n$ 阶矩阵，则 $|kA|=k^n|A|$. 2. 矩阵 $A$ 可逆的充要条件是 $|A|\ne0$，且 $A^{-1}=\frac{1}{|A|}A^*$.`,
  source: '《1989—2004 考研数二真题答案解析》第 99–100 页',
});

EXAMS.push({
  year: 1998, subject: '数二', number: 312, kind: '解答', score: 5, label: '第十二题',
  ids: ['mat-eq-solve', 'mat-transpose'],
  question: String.raw`设 $(2E-C^{-1}B)A^{\mathrm{T}}=C^{-1}$，其中 $E$ 是 4 阶单位矩阵，$A^{\mathrm{T}}$ 是 4 阶矩阵 $A$ 的转置矩阵，
$$
B=\begin{pmatrix}1&2&-3&-2\\0&1&2&-3\\0&0&1&2\\0&0&0&1\end{pmatrix},\qquad C=\begin{pmatrix}1&2&0&1\\0&1&2&0\\0&0&1&2\\0&0&0&1\end{pmatrix}.
$$
求 $A$.`,
  answer: String.raw`$$
A=(2C^{\mathrm{T}}-B^{\mathrm{T}})^{-1}=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
$$`,
  analysis: String.raw`由矩阵运算法则，将等式 $(2E-C^{-1}B)A^{\mathrm{T}}=C^{-1}$ 两边左乘 $C$，得
$$
C(2E-C^{-1}B)A^{\mathrm{T}}=CC^{-1},\ \text{即}\ (2C-B)A^{\mathrm{T}}=E.
$$
对上式两端取转置，有 $A(2C^{\mathrm{T}}-B^{\mathrm{T}})=E$.

由可逆矩阵及逆矩阵的定义，可知矩阵 $2C^{\mathrm{T}}-B^{\mathrm{T}},A$ 均可逆，因为 $A$ 是 4 阶方阵，故
$$
A=(2C^{\mathrm{T}}-B^{\mathrm{T}})^{-1}=\begin{pmatrix}1&0&0&0\\2&1&0&0\\3&2&1&0\\4&3&2&1\end{pmatrix}^{-1}=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
$$`,
  source: '《1989—2004 考研数二真题答案解析》第 109–110 页',
});

EXAMS.push({
  year: 1998, subject: '数二', number: 313, kind: '解答', score: 6, label: '第十三题',
  ids: ['vec-express-crit', 'eq-nonhomo-crit'],
  question: String.raw`已知 $\alpha_1=(1,4,0,2)^{\mathrm{T}},\alpha_2=(2,7,1,3)^{\mathrm{T}},\alpha_3=(0,1,-1,a)^{\mathrm{T}},\beta=(3,10,b,4)^{\mathrm{T}}$，问：

（1）$a,b$ 取何值时，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？

（2）$a,b$ 取何值时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？并写出此表示式.`,
  answer: String.raw`（1）$b\ne2$ 时 $\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；（2）$b=2,a\ne1$ 时唯一表示为 $\beta=-\alpha_1+2\alpha_2$；$b=2,a=1$ 时表示法为无穷多，$\beta=-(2k+1)\alpha_1+(k+2)\alpha_2+k\alpha_3$（$k$ 为任意常数）.`,
  analysis: String.raw`【分析】$\beta$ 能由（不能由）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性表出 $\Leftrightarrow$ $\alpha_i,i=1,2,\cdots,s,\beta$ 为列向量的非齐次线性方程组 $\alpha_1x_1+\alpha_2x_2+\cdots+\alpha_sx_s=\beta$ 有解（无解），从而将线性表出的问题转化为方程组解的判定与求解.

【解析】令 $A=[\alpha_1,\alpha_2,\alpha_3],X=[x_1,x_2,x_3]^{\mathrm{T}}$，作方程组 $AX=\beta$，并对此方程组的增广矩阵进行初等变换：
$$
[A;\beta]=\begin{pmatrix}1&2&0&:&3\\4&7&1&:&10\\0&1&-1&:&b\\2&3&a&:&4\end{pmatrix}\xrightarrow{(*_1)}\begin{pmatrix}1&2&0&:&3\\0&-1&1&:&-2\\0&1&-1&:&b\\0&-1&a&:&-2\end{pmatrix}\xrightarrow{(*_2)}\begin{pmatrix}1&2&0&:&3\\0&-1&1&:&-2\\0&0&a-1&:&0\\0&0&0&:&b-2\end{pmatrix}.
$$
其中，$(*_1)$ 变换：将第 1 行乘以 $-4$ 加到第 2 行，再将第 1 行乘以 $-2$ 加到第 4 行；

$(*_2)$ 变换：第 2 行加到第 1 行，再将第 2 行乘以 $-1$ 加到第 4 行，最后 3、4 行互换.

由非齐次线性方程组有解的判定定理，可得

（1）当 $b\ne2$ 时，线性方程组 $AX=\beta$ 无解，此时 $\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出.

（2）当 $b=2,a\ne1$ 时，$r(A)=r(\overline{A})=3$，线性方程组 $AX=\beta$ 有唯一解，下面求此唯一解.

由以上增广矩阵变换可得线性方程组 $AX=\beta$ 的同解方程组为
$$
\begin{cases}
x_1+2x_2=3\\
-x_2+x_3=-2\\
(a-1)x_3=0
\end{cases}
$$
解得唯一解为 $X=[-1,2,0]^{\mathrm{T}}$. 故 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出为 $\beta=-\alpha_1+2\alpha_2$.

（3）当 $b=2,a=1$ 时，$r(A)=r(\overline{A})=2<3$，线性方程组 $AX=\beta$ 有无穷多解. 求齐次线性方程组 $AX=0$ 的基础解系.

齐次线性方程组 $AX=0$ 的同解方程组为
$$
\begin{cases}
x_1+2x_2=0\\
-x_2+x_3=0
\end{cases}
$$
基础解系所含向量的个数为 $n-r(A)=3-2=1$，选 $x_2$ 为自由未知量，取 $x_2=1$，解得基础解系为 $\xi=(-2,1,1)^{\mathrm{T}}$. 取 $x_3=0$，解得的一个特解为 $\eta^*=(-1,2,0)^{\mathrm{T}}$，则由非齐次线性方程组解的结构可知，方程组 $AX=\beta$ 的通解为
$$
X=k\xi+\eta^*=(-2k-1,k+2,k)^{\mathrm{T}},\ k\ \text{是任意常数}.
$$
则 $\beta$ 能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，且表示法为无穷多（常数 $k$ 可以任意），且
$$
\beta=-(2k+1)\alpha_1+(k+2)\alpha_2+k\alpha_3.
$$
【相关知识点】非齐次线性方程组有解的判定定理：设 $A$ 是 $m\times n$ 矩阵，方程组 $Ax=b$，则

(1) 有唯一解 $\Leftrightarrow r(A)=r(\overline{A})=n$.

(2) 有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$.

(3) 无解 $\Leftrightarrow r(A)+1=r(\overline{A})$. $\Leftrightarrow b$ 不能由 $A$ 的列向量线性表出.`,
  source: '《1989—2004 考研数二真题答案解析》第 109–111 页',
});
