// 1997 · 数学一 · 线性代数（题面取自《1997年考研数学（一）真题.pdf》；答案与解析取自《1997数学一解析.pdf》）
EXAMS.push({
  year: 1997, subject: '数一', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ["mat-nocancel","det-rank"],
  question: String.raw`设
$$
A=\begin{pmatrix}1&2&-2\\4&t&3\\3&-1&1\end{pmatrix},
$$
$B$ 为 3 阶非零矩阵，且 $AB=O$，则 $t=$______.`,
  answer: String.raw`$t=-3$.`,
  analysis: String.raw`**方法一** 因为 $B\ne O$ 且 $AB=O$，所以方程组 $AX=0$ 有非零解，于是 $|A|=0$，而
$$
|A|=\begin{vmatrix}1&2&-2\\4&t&3\\3&-1&1\end{vmatrix}=7t+21=0,
$$
得 $t=-3$.

**方法二** 由 $AB=O$ 得 $r(A)+r(B)\le 3$，再由 $B\ne O$ 得 $r(B)\ge 1$，于是 $r(A)\le 2<3$，故 $|A|=0$，解得 $t=-3$.`,
  source: '《1997 数学一解析.pdf》PDF 第 1 页',
});

EXAMS.push({
  year: 1997, subject: '数一', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ["vec-rank-table","eq-geometry"],
  question: String.raw`设
$$
\alpha_1=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix},\quad\alpha_2=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix},\quad\alpha_3=\begin{pmatrix}c_1\\c_2\\c_3\end{pmatrix},
$$
则三条直线 $a_1x+b_1y+c_1=0$，$a_2x+b_2y+c_2=0$，$a_3x+b_3y+c_3=0$（其中 $a_i^2+b_i^2\ne 0,i=1,2,3$）交于一点的充要条件是（　　）.

（A）$\alpha_1,\alpha_2,\alpha_3$ 线性相关
（B）$\alpha_1,\alpha_2,\alpha_3$ 线性无关
（C）秩 $r(\alpha_1,\alpha_2,\alpha_3)=$ 秩 $r(\alpha_1,\alpha_2)$
（D）$\alpha_1,\alpha_2,\alpha_3$ 线性相关，$\alpha_1,\alpha_2$ 线性无关`,
  answer: String.raw`（D）.`,
  analysis: String.raw`三条直线交于一点的充分必要条件是方程组
$$
\begin{cases}a_1x+b_1y=-c_1,\\a_2x+b_2y=-c_2,\\a_3x+b_3y=-c_3\end{cases}
$$
有唯一解，即 $r(A)=r(\overline{A})=2$，其中
$$
A=\begin{pmatrix}a_1&b_1\\a_2&b_2\\a_3&b_3\end{pmatrix},\quad\overline{A}=\begin{pmatrix}a_1&b_1&-c_1\\a_2&b_2&-c_2\\a_3&b_3&-c_3\end{pmatrix},
$$
故 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，而 $\alpha_1,\alpha_2$ 线性无关，应选（D）.`,
  source: '《1997 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1997, subject: '数一', number: 301, kind: '解答', score: 11, label: '第七大题',
  ids: ["vec-schmidt","eig-def","eig-diag-crit"],
  question: String.raw`（1）设 $B$ 是秩为 2 的 $5\times 4$ 矩阵，$\alpha_1=(1,1,2,3)^{\mathrm{T}}$，$\alpha_2=(-1,1,4,-1)^{\mathrm{T}}$，$\alpha_3=(5,-1,-8,9)^{\mathrm{T}}$ 是齐次线性方程组 $Bx=0$ 的解向量，求 $Bx=0$ 的解空间的一个标准正交基.

（2）已知 $\xi=\begin{pmatrix}1\\1\\-1\end{pmatrix}$ 是矩阵
$$
A=\begin{pmatrix}2&-1&2\\5&a&3\\-1&b&-2\end{pmatrix}
$$
的一个特征向量.

（I）试确定参数 $a,b$ 及特征向量 $\xi$ 所对应的特征值；
（II）问 $A$ 能否相似于对角阵？说明理由.`,
  answer: String.raw`（1）$Bx=0$ 的解空间的一个标准正交基为
$$
\gamma_1=\dfrac{1}{\sqrt{15}}\begin{pmatrix}1\\1\\2\\3\end{pmatrix},\quad\gamma_2=\dfrac{1}{\sqrt{39}}\begin{pmatrix}-2\\1\\5\\-3\end{pmatrix}.
$$
（2）（I）$a=-3,b=0$，特征向量 $\xi$ 对应的特征值为 $\lambda=-1$.
（II）$A$ 不能相似于对角阵.`,
  analysis: String.raw`（1）因为 $r(B)=2<4$，所以 $Bx=0$ 的基础解系含两个线性无关的特征向量，因为 $\alpha_1,\alpha_2$ 线性无关，所以 $\alpha_1,\alpha_2$ 为基础解系，令
$$
\beta_1=\alpha_1=\begin{pmatrix}1\\1\\2\\3\end{pmatrix},\quad\beta_2=\alpha_2-\dfrac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)}\beta_1=\begin{pmatrix}-1\\1\\4\\-1\end{pmatrix}-\dfrac{1}{3}\begin{pmatrix}1\\1\\2\\3\end{pmatrix}=\dfrac{2}{3}\begin{pmatrix}-2\\1\\5\\-3\end{pmatrix},
$$
则 $Bx=0$ 的解空间的一个标准正交基为
$$
\gamma_1=\dfrac{1}{\sqrt{15}}\begin{pmatrix}1\\1\\2\\3\end{pmatrix},\quad\gamma_2=\dfrac{1}{\sqrt{39}}\begin{pmatrix}-2\\1\\5\\-3\end{pmatrix}.
$$

（2）（I）由
$$
\begin{pmatrix}2&-1&2\\5&a&3\\-1&b&-2\end{pmatrix}\begin{pmatrix}1\\1\\-1\end{pmatrix}=\lambda\begin{pmatrix}1\\1\\-1\end{pmatrix}
$$
得
$$
\begin{cases}-1=\lambda,\\a+2=\lambda,\\b+1=-\lambda,\end{cases}
$$
解得 $a=-3,b=0$，特征向量 $\xi$ 对应的特征值为 $\lambda=-1$.

（II）
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&1&-2\\-5&\lambda+3&-3\\1&0&\lambda+2\end{vmatrix}=(\lambda+1)^3=0
$$
得 $\lambda_1=\lambda_2=\lambda_3=-1$，
$$
-E-A=\begin{pmatrix}-3&1&-2\\-5&2&-3\\1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix},
$$
因为 $r(-E-A)=2$，所以 $A$ 不可相似对角化.`,
  source: '《1997 数学一解析.pdf》PDF 第 4–5 页',
});

EXAMS.push({
  year: 1997, subject: '数一', number: 401, kind: '解答', score: 5, label: '第八大题（证明题）',
  ids: ["mat-elem-op","mat-elem-relation"],
  question: String.raw`设 $A$ 是 $n$ 阶可逆方阵，将 $A$ 的第 $i$ 行和第 $j$ 行对换后得到的矩阵记为 $B$.

（1）证明 $B$ 可逆；
（2）求 $AB^{-1}$.`,
  answer: String.raw`（1）$B$ 可逆.
（2）$AB^{-1}=E(i,j)$.`,
  analysis: String.raw`（1）显然 $B=E(i,j)A$ 且 $|E(i,j)|=-1$. 因为 $A$ 可逆，所以 $|A|\ne 0$，于是 $|B|=-|A|\ne 0$，故 $B$ 可逆.

（2）$AB^{-1}=AA^{-1}E(i,j)^{-1}=E(i,j)^{-1}=E(i,j)$.`,
  source: '《1997 数学一解析.pdf》PDF 第 5 页',
});
