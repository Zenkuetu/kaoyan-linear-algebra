// 1994 · 数学一 · 线性代数（题面取自《1994年考研数学（一）真题.pdf》；答案与解析取自《1994数学一解析.pdf》）
EXAMS.push({
  year: 1994, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["mat-power"],
  question: String.raw`已知 $\alpha=(1,2,3)$，$\beta=\left(1,\dfrac{1}{2},\dfrac{1}{3}\right)$，设 $A=\alpha^{\mathrm{T}}\beta$，其中 $\alpha^{\mathrm{T}}$ 是 $\alpha$ 的转置，则 $A^n=$______.`,
  answer: String.raw`$$
A^n=3^{n-1}A=3^{n-1}\begin{pmatrix}1&\dfrac{1}{2}&\dfrac{1}{3}\\2&1&\dfrac{2}{3}\\3&\dfrac{3}{2}&1\end{pmatrix}.
$$`,
  analysis: String.raw`因为 $(\alpha,\beta)=3$，
$$
A=\begin{pmatrix}1\\2\\3\end{pmatrix}\left(1,\dfrac{1}{2},\dfrac{1}{3}\right)=\begin{pmatrix}1&\dfrac{1}{2}&\dfrac{1}{3}\\2&1&\dfrac{2}{3}\\3&\dfrac{3}{2}&1\end{pmatrix},
$$
所以 $A^n=3^{n-1}A=3^{n-1}\begin{pmatrix}1&\dfrac{1}{2}&\dfrac{1}{3}\\2&1&\dfrac{2}{3}\\3&\dfrac{3}{2}&1\end{pmatrix}$.`,
  source: '《1994 数学一解析.pdf》PDF 第 1–2 页',
});

EXAMS.push({
  year: 1994, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["vec-indep-crit","vec-indep-concl"],
  question: String.raw`已知向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关，则向量组（　　）.

（A）$\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_4,\alpha_4+\alpha_1$ 线性无关
（B）$\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_4,\alpha_4-\alpha_1$ 线性无关
（C）$\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_4,\alpha_4-\alpha_1$ 线性无关
（D）$\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3-\alpha_4,\alpha_4-\alpha_1$ 线性无关`,
  answer: String.raw`（C）.`,
  analysis: String.raw`**方法一** 由 $(\alpha_1+\alpha_2)-(\alpha_2+\alpha_3)+(\alpha_3+\alpha_4)-(\alpha_4+\alpha_1)=0$ 得向量组 $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_4,\alpha_4+\alpha_1$ 线性相关，（A）不对；由 $(\alpha_1-\alpha_2)+(\alpha_2-\alpha_3)+(\alpha_3-\alpha_4)+(\alpha_4-\alpha_1)=0$ 得向量组 $\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_4,\alpha_4-\alpha_1$ 线性相关，（B）不对；由 $(\alpha_1+\alpha_2)-(\alpha_2+\alpha_3)+(\alpha_3-\alpha_4)+(\alpha_4-\alpha_1)=0$ 得向量组 $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3-\alpha_4,\alpha_4-\alpha_1$ 线性相关，（D）不对，应选（C）.

**方法二** 令 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，因为 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关，所以 $r(A)=4$. 令 $B=(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_4,\alpha_4-\alpha_1)$，则 $B=A\begin{pmatrix}1&0&0&-1\\1&1&0&0\\0&1&1&0\\0&0&1&1\end{pmatrix}$，因为
$$
\begin{vmatrix}1&0&0&-1\\1&1&0&0\\0&1&1&0\\0&0&1&1\end{vmatrix}=\begin{vmatrix}1&0&0&-1\\0&1&0&1\\0&1&1&0\\0&0&1&1\end{vmatrix}=2\ne 0,
$$
得 $\begin{pmatrix}1&0&0&-1\\1&1&0&0\\0&1&1&0\\0&0&1&1\end{pmatrix}$ 满秩，所以 $r(B)=r(A)=4$，故 $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_4,\alpha_4-\alpha_1$ 线性无关，应选（C）.`,
  source: '《1994 数学一解析.pdf》PDF 第 2–3 页',
});

EXAMS.push({
  year: 1994, subject: '数一', number: 301, kind: '解答', score: 8, label: '第八大题',
  ids: ["eq-samesol","eq-homo-structure"],
  question: String.raw`设四元齐次线性方程组（I）为
$$
\begin{cases}x_1+x_2=0,\\x_2-x_4=0.\end{cases}
$$
又已知某线性齐次方程组（II）的通解为
$$
k_1(0,1,1,0)^{\mathrm{T}}+k_2(-1,2,2,1)^{\mathrm{T}}.
$$
（1）求线性方程组（I）的基础解系；
（2）问线性方程组（I）与（II）是否有非零公共解？若有，求出所有非零的公共解；若没有，说明理由.`,
  answer: String.raw`（1）（I）的基础解系为
$$
(0,0,1,0)^{\mathrm{T}},\ (-1,1,0,1)^{\mathrm{T}}.
$$
（2）有非零公共解，所有非零公共解为 $k(-1,1,1,1)^{\mathrm{T}}$（$k$ 为不等于零的任意常数）.`,
  analysis: String.raw`（1）由（I）有
$$
\begin{cases}x_1=-x_2,\\x_4=x_2,\end{cases}
$$
分别取 $\begin{pmatrix}x_2\\x_3\end{pmatrix}=\begin{pmatrix}0\\1\end{pmatrix}$ 和 $\begin{pmatrix}1\\0\end{pmatrix}$，得（I）的基础解系为
$$
(0,0,1,0)^{\mathrm{T}},\ (-1,1,0,1)^{\mathrm{T}}.
$$

（2）有非零公共解.（II）的通解可表示为 $(x_1,x_2,x_3,x_4)^{\mathrm{T}}=(-k_2,k_1+2k_2,k_1+2k_2,k_2)^{\mathrm{T}}$，将其代入（I）得
$$
\begin{cases}-k_2+(k_1+2k_2)=0,\\(k_1+2k_2)-k_2=0,\end{cases}
$$
解得 $k_1=-k_2$. 当 $k_1=-k_2\ne 0$ 时，（II）的通解化为
$$
k_1(0,1,1,0)^{\mathrm{T}}+k_2(-1,2,2,1)^{\mathrm{T}}=k_2[(0,-1,-1,0)^{\mathrm{T}}+(-1,2,2,1)^{\mathrm{T}}]=k_2(-1,1,1,1)^{\mathrm{T}},
$$
此向量即是（I）与（II）的非零公共解，故方程组（I）（II）的所有非零公共解是
$$
k(-1,1,1,1)^{\mathrm{T}}\quad(k\text{ 为不等于零的任意常数}).
$$`,
  source: '《1994 数学一解析.pdf》PDF 第 5 页',
});

EXAMS.push({
  year: 1994, subject: '数一', number: 401, kind: '解答', score: 6, label: '第九大题（证明题）',
  ids: ["mat-adjoint","mat-adj-identity"],
  question: String.raw`设 $A$ 为 $n$ 阶非零方阵，$A^*$ 为 $A$ 的伴随矩阵，$A^{\mathrm{T}}$ 是 $A$ 的转置矩阵，当 $A^*=A^{\mathrm{T}}$ 时，证明：$|A|\ne 0$.`,
  answer: String.raw`证明见解析.`,
  analysis: String.raw`由 $A^*=A^{\mathrm{T}}$ 得 $a_{ij}=A_{ij}\ (i,j=1,2,\cdots,n)$. 因为 $A$ 为非零矩阵，所以矩阵 $A$ 中有非零元素，不妨设 $a_{1j}\ne 0$，故
$$
|A|=a_{11}A_{11}+a_{12}A_{12}+\cdots+a_{1n}A_{1n}=a_{11}^2+a_{12}^2+\cdots+a_{1n}^2>0.
$$`,
  source: '《1994 数学一解析.pdf》PDF 第 5 页',
});
