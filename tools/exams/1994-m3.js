// 1994 · 数学三 · 线性代数（题面取自《1、1987-1996 考研数学三真题》1994 年试卷（四）；答案与解析取自《1994 年数学三真题答案解析》）
EXAMS.push({
  year: 1994, subject: '数三', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['mat-block', 'mat-inv-method'],
  question: String.raw`设
$$
A=\begin{pmatrix}0&a_1&0&\cdots&0\\0&0&a_2&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&a_{n-1}\\a_n&0&0&\cdots&0\end{pmatrix},
$$
其中 $a_i\ne 0$，$i=1,2,\cdots,n$，则 $A^{-1}=$______.`,
  answer: String.raw`$$
A^{-1}=\begin{pmatrix}0&0&\cdots&0&\dfrac{1}{a_n}\\\dfrac{1}{a_1}&0&\cdots&0&0\\0&\dfrac{1}{a_2}&\cdots&0&0\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&\dfrac{1}{a_{n-1}}&0\end{pmatrix}.
$$`,
  analysis: String.raw`【解析】由分块矩阵求逆的运算性质，有公式
$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix},
$$
且
$$
\begin{pmatrix}a_1&&&\\&a_2&&\\&&\ddots&\\&&&a_n\end{pmatrix}^{-1}=\begin{pmatrix}\dfrac{1}{a_1}&&&\\&\dfrac{1}{a_2}&&\\&&\ddots&\\&&&\dfrac{1}{a_n}\end{pmatrix}.
$$
所以，本题对 $A$ 分块后可得
$$
A^{-1}=\begin{pmatrix}0&0&\cdots&0&\dfrac{1}{a_n}\\\dfrac{1}{a_1}&0&\cdots&0&0\\0&\dfrac{1}{a_2}&\cdots&0&0\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&\dfrac{1}{a_{n-1}}&0\end{pmatrix}.
$$`,
  source: '《1994 年数学三真题答案解析》PDF 第 2 页',
});

EXAMS.push({
  year: 1994, subject: '数三', number: 203, kind: '选择', score: 3, label: '选择题第 3 题',
  ids: ['mat-rank-invariance', 'mat-rank-ineq', 'mat-rank'],
  question: String.raw`设 $A$ 是 $m\times n$ 矩阵，$C$ 是 $n$ 阶可逆矩阵，矩阵 $A$ 的秩为 $r$，矩阵 $B=AC$ 的秩为 $r_1$，则（　　）
（A）$r>r_1$
（B）$r<r_1$
（C）$r=r_1$
（D）$r$ 与 $r_1$ 的关系依 $C$ 而定`,
  answer: String.raw`（C）.`,
  analysis: String.raw`【解析】由公式 $r(AB)\le\min(r(A),r(B))$，若 $A$ 可逆，则
$$
r(AB)\le r(B)=r(EB)=r[A^{-1}(AB)]\le r(AB).
$$
从而 $r(AB)=r(B)$，即可逆矩阵与矩阵相乘不改变矩阵的秩，所以选（C）.`,
  source: '《1994 年数学三真题答案解析》PDF 第 3 页',
});

EXAMS.push({
  year: 1994, subject: '数三', number: 309, kind: '解答', score: 11, label: '第九题',
  ids: ['det-vandermonde', 'eq-nonhomo-crit', 'eq-nonhomo-general'],
  question: String.raw`设线性方程组
$$
\begin{cases}x_1+a_1x_2+a_1^2x_3=a_1^3,\\x_1+a_2x_2+a_2^2x_3=a_2^3,\\x_1+a_3x_2+a_3^2x_3=a_3^3,\\x_1+a_4x_2+a_4^2x_3=a_4^3,\end{cases}
$$
（1）证明：若 $a_1,a_2,a_3,a_4$ 两两不相等，则此线性方程组无解；
（2）设 $a_1=a_3=k,a_2=a_4=-k(k\ne 0)$，且已知 $\beta_1,\beta_2$ 是该方程组的两个解，其中
$$
\beta_1=\begin{pmatrix}-1\\1\\1\end{pmatrix},\quad\beta_2=\begin{pmatrix}1\\1\\-1\end{pmatrix},
$$
写出此方程组的通解.`,
  answer: String.raw`（1）证明见解析；（2）
$$
\beta_1+k\eta=\begin{pmatrix}-1\\1\\1\end{pmatrix}+k\begin{pmatrix}-2\\0\\2\end{pmatrix}\quad(k\text{ 为任意常数}).
$$`,
  analysis: String.raw`【解析】（1）因为增广矩阵 $\overline{A}$ 的行列式是范德蒙行列式，$a_1,a_2,a_3,a_4$ 两两不相等，则有
$$
|\overline{A}|=(a_2-a_1)(a_3-a_1)(a_4-a_1)(a_3-a_2)(a_4-a_2)(a_4-a_3)\ne 0,
$$
故 $r(\overline{A})=4$. 而系数矩阵 $A$ 的秩 $r(A)=3$，所以方程组无解.
（2）当 $a_1=a_3=k,a_2=a_4=-k(k\ne 0)$ 时，方程组同解于
$$
\begin{cases}x_1+kx_2+k^2x_3=k^3,\\x_1-kx_2+k^2x_3=-k^3.\end{cases}
$$
因为 $\begin{vmatrix}1&k\\1&-k\end{vmatrix}=-2k\ne 0$，知 $r(A)=r(\overline{A})=2$.
由 $n-r(A)=3-2=1$，知导出组 $Ax=0$ 的基础解系含有 1 个解向量，即解空间的维数为 1.
由解的结构和解的性质，
$$
\eta=\beta_1-\beta_2=\begin{pmatrix}-1\\1\\1\end{pmatrix}-\begin{pmatrix}1\\1\\-1\end{pmatrix}=\begin{pmatrix}-2\\0\\2\end{pmatrix}
$$
是 $Ax=0$ 的基础解系.
于是方程组的通解为
$$
\beta_1+k\eta=\begin{pmatrix}-1\\1\\1\end{pmatrix}+k\begin{pmatrix}-2\\0\\2\end{pmatrix},
$$
其中 $k$ 为任意常数.
【相关知识点】1. 非齐次线性方程组有解的判定定理：设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$ 有解的充分必要条件是系数矩阵的秩等于增广矩阵 $\overline{A}=(A\vdots b)$ 的秩，即 $r(A)=r(\overline{A})$.
设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$，则
（1）有唯一解 $\Leftrightarrow r(A)=r(\overline{A})=n$.
（2）有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$.
（3）无解 $\Leftrightarrow r(A)+1=r(\overline{A})\Leftrightarrow b$ 不能由 $A$ 的列向量 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线表出.
2. 解的结构：若 $\eta_1$、$\eta_2$ 是对应齐次线性方程组 $Ax=0$ 的基础解系，知 $Ax=b$ 的通解形式为 $k_1\eta_1+k_2\eta_2+\xi$，其中 $\eta_1,\eta_2$ 是 $Ax=0$ 的基础解系，$\xi$ 是 $Ax=b$ 的一个特解.
3. 解的性质：如果 $\eta_1,\eta_2$ 是 $Ax=0$ 的两个解，则其线性组合 $k_1\eta_1+k_2\eta_2$ 仍是 $Ax=0$ 的解；如果 $\xi$ 是 $Ax=b$ 的一个解，$\eta$ 是 $Ax=0$ 的一个解，则 $\xi+\eta$ 仍是 $Ax=b$ 的解.`,
  source: '《1994 年数学三真题答案解析》PDF 第 9–10 页',
});

EXAMS.push({
  year: 1994, subject: '数三', number: 310, kind: '解答', score: 8, label: '第十题',
  ids: ['eig-diag-crit', 'eig-mult', 'eig-diag-method'],
  question: String.raw`设
$$
A=\begin{pmatrix}0&0&1\\x&1&y\\1&0&0\end{pmatrix}
$$
有三个线性无关的特征向量，求 $x$ 和 $y$ 应满足的条件.`,
  answer: String.raw`$x+y=0$.`,
  analysis: String.raw`【解析】由 $A$ 的特征方程，按照第二列展开，有
$$
|\lambda E-A|=\begin{vmatrix}\lambda&0&-1\\-x&\lambda-1&-y\\-1&0&\lambda\end{vmatrix}=(\lambda-1)\begin{vmatrix}\lambda&-1\\-1&\lambda\end{vmatrix}=(\lambda-1)^2(\lambda+1)=0,
$$
得到 $A$ 的特征值为 $\lambda_1=\lambda_2=1,\lambda_3=-1$.
由题设有三个线性无关的特征向量，因此，$\lambda=1$ 必有两个线性无关的特征向量，从而 $r(E-A)=1$. 这样才能保证方程组 $(E-A)X=0$ 解空间的维数是 2，即有两个线性无关的解向量.
由初等行变换，将 $E-A$ 第一行加到第三行上，第一行乘以 $x$ 后加到第二行上有
$$
E-A=\begin{pmatrix}1&0&-1\\-x&0&-y\\-1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1\\0&0&-x-y\\0&0&0\end{pmatrix},
$$
由 $r(E-A)=1$，得 $x$ 和 $y$ 必须满足条件 $x+y=0$.`,
  source: '《1994 年数学三真题答案解析》PDF 第 10 页',
});
