// 1990 · 数学一 · 线性代数（题面取自《1990年考研数学（一）真题.pdf》；答案与解析取自《1990数学一解析.pdf》）
EXAMS.push({
  year: 1990, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["vec-rank-def","vec-rank-vs-mat"],
  question: String.raw`已知向量组
$$
\alpha_1=(1,2,3,4),\ \alpha_2=(2,3,4,5),\ \alpha_3=(3,4,5,6),\ \alpha_4=(4,5,6,7),
$$
则该向量组的秩为______.`,
  answer: String.raw`$2$.`,
  analysis: String.raw`$$
A=(\alpha_1^{\mathrm{T}},\alpha_2^{\mathrm{T}},\alpha_3^{\mathrm{T}},\alpha_4^{\mathrm{T}})=\begin{pmatrix}1&2&3&4\\2&3&4&5\\3&4&5&6\\4&5&6&7\end{pmatrix}\to\begin{pmatrix}1&2&3&4\\0&-1&-2&-3\\0&-2&-4&-6\\0&-3&-6&-9\end{pmatrix}\to\begin{pmatrix}1&2&3&4\\0&1&2&3\\0&0&0&0\\0&0&0&0\end{pmatrix},
$$
因为 $r(A)=2$，所以该向量组的秩为 $2$.`,
  source: '《1990 数学一解析.pdf》PDF 第 1 页',
});

EXAMS.push({
  year: 1990, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["eq-nonhomo-general","eq-homo-structure"],
  question: String.raw`已知 $\beta_1,\beta_2$ 是非齐次线性方程组 $AX=b$ 的两个不同解，$\alpha_1,\alpha_2$ 是对应的齐次线性方程组 $AX=0$ 的基础解系，$k_1,k_2$ 为任意常数，则方程组 $AX=b$ 的通解为（　　）.

（A）$k_1\alpha_1+k_2(\alpha_1+\alpha_2)+\dfrac{\beta_1-\beta_2}{2}$
（B）$k_1\alpha_1+k_2(\alpha_1-\alpha_2)+\dfrac{\beta_1+\beta_2}{2}$
（C）$k_1\alpha_1+k_2(\beta_1+\beta_2)+\dfrac{\beta_1-\beta_2}{2}$
（D）$k_1\alpha_1+k_2(\beta_1-\beta_2)+\dfrac{\beta_1+\beta_2}{2}$`,
  answer: String.raw`（B）.`,
  analysis: String.raw`令 $k_1\alpha_1+k_2(\alpha_1-\alpha_2)=0$，即 $(k_1+k_2)\alpha_1-k_2\alpha_2=0$，因为 $\alpha_1,\alpha_2$ 线性无关，所以 $k_1+k_2=0,-k_2=0$，或 $k_1=0,k_2=0$，即 $\alpha_1,\alpha_1-\alpha_2$ 线性无关，又因为 $\alpha_1,\alpha_1-\alpha_2$ 为齐次线性方程组 $AX=0$ 的解，所以 $\alpha_1,\alpha_1-\alpha_2$ 为齐次线性方程组 $AX=0$ 的基础解系；而 $\dfrac{\beta_1+\beta_2}{2}$ 为非齐次线性方程组 $AX=b$ 的解，故 $k_1\alpha_1+k_2(\alpha_1-\alpha_2)+\dfrac{\beta_1+\beta_2}{2}$ 为 $AX=b$ 的通解，应选（B）.`,
  source: '《1990 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1990, subject: '数一', number: 301, kind: '解答', score: 6, label: '第七大题',
  ids: ["mat-eq-solve","mat-inv-method"],
  question: String.raw`设 4 阶矩阵
$$
B=\begin{pmatrix}1&-1&0&0\\0&1&-1&0\\0&0&1&-1\\0&0&0&1\end{pmatrix},\quad C=\begin{pmatrix}2&1&3&4\\0&2&1&3\\0&0&2&1\\0&0&0&2\end{pmatrix},
$$
且矩阵 $A$ 满足关系式
$$
A(E-C^{-1}B)^{\mathrm{T}}C^{\mathrm{T}}=E,
$$
其中 $E$ 为 4 阶单位矩阵，$C^{-1}$ 表示 $C$ 的逆矩阵，$C^{\mathrm{T}}$ 表示 $C$ 的转置矩阵，将上述关系式化简并求矩阵 $A$.`,
  answer: String.raw`$$
A=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
$$`,
  analysis: String.raw`由 $A(E-C^{-1}B)^{\mathrm{T}}C^{\mathrm{T}}=E$ 得 $A[C(E-C^{-1}B)]^{\mathrm{T}}=E$，即 $A(C-B)^{\mathrm{T}}=E$，解得
$$
A=[(C-B)^{\mathrm{T}}]^{-1},
$$
而
$$
C-B=\begin{pmatrix}1&2&3&4\\0&1&2&3\\0&0&1&2\\0&0&0&1\end{pmatrix},\quad(C-B)^{\mathrm{T}}=\begin{pmatrix}1&0&0&0\\2&1&0&0\\3&2&1&0\\4&3&2&1\end{pmatrix},
$$
由
$$
\begin{pmatrix}1&0&0&0&1&0&0&0\\2&1&0&0&0&1&0&0\\3&2&1&0&0&0&1&0\\4&3&2&1&0&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&0&1&0&0&0\\0&1&0&0&-2&1&0&0\\0&0&1&0&1&-2&1&0\\0&0&0&1&0&1&-2&1\end{pmatrix},
$$
得
$$
A=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
$$`,
  source: '《1990 数学一解析.pdf》PDF 第 3 页',
});

EXAMS.push({
  year: 1990, subject: '数一', number: 302, kind: '解答', score: 8, label: '第八大题',
  ids: ["qf-orthogonal","eig-orth-diag","qf-canonical"],
  question: String.raw`求一个正交变换，化二次型
$$
f(x_1,x_2,x_3)=x_1^2+4x_2^2+4x_3^2-4x_1x_2+4x_1x_3-8x_2x_3
$$
为标准形.`,
  answer: String.raw`令
$$
Q=\begin{pmatrix}\dfrac{2}{\sqrt{5}}&-\dfrac{2}{3\sqrt{5}}&\dfrac{1}{3}\\[2mm]\dfrac{1}{\sqrt{5}}&\dfrac{4}{3\sqrt{5}}&-\dfrac{2}{3}\\[2mm]0&\dfrac{5}{3\sqrt{5}}&\dfrac{2}{3}\end{pmatrix},
$$
则正交变换 $X=QY$ 将二次型化为标准形 $f=9y_3^2$.`,
  analysis: String.raw`令
$$
A=\begin{pmatrix}1&-2&2\\-2&4&-4\\2&-4&4\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$
则 $f=X^{\mathrm{T}}AX$，由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&2&-2\\2&\lambda-4&4\\-2&4&\lambda-4\end{vmatrix}=\lambda^2(\lambda-9)=0,
$$
得 $\lambda_1=\lambda_2=0,\lambda_3=9$，由
$$
0E-A\to\begin{pmatrix}1&-2&2\\0&0&0\\0&0&0\end{pmatrix}
$$
得 $\lambda_1=\lambda_2=0$ 对应的线性无关的特征向量为
$$
\alpha_1=\begin{pmatrix}2\\1\\0\end{pmatrix},\quad\alpha_2=\begin{pmatrix}-2\\0\\1\end{pmatrix};
$$
由
$$
9E-A\to\begin{pmatrix}1&0&-\dfrac{1}{2}\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $\lambda_3=9$ 对应的特征向量为 $\alpha_3=\begin{pmatrix}1\\-2\\2\end{pmatrix}$，令
$$
\beta_1=\alpha_1=\begin{pmatrix}2\\1\\0\end{pmatrix},\quad\beta_2=\alpha_2-\dfrac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)}\beta_1=\begin{pmatrix}-2\\0\\1\end{pmatrix}+\dfrac{4}{5}\begin{pmatrix}2\\1\\0\end{pmatrix}=\dfrac{1}{5}\begin{pmatrix}-2\\4\\5\end{pmatrix},\quad\beta_3=\begin{pmatrix}1\\-2\\2\end{pmatrix},
$$
规范化得
$$
\gamma_1=\dfrac{1}{\sqrt{5}}\begin{pmatrix}2\\1\\0\end{pmatrix},\quad\gamma_2=\dfrac{1}{3\sqrt{5}}\begin{pmatrix}-2\\4\\5\end{pmatrix},\quad\gamma_3=\dfrac{1}{3}\begin{pmatrix}1\\-2\\2\end{pmatrix},
$$
令
$$
Q=\begin{pmatrix}\dfrac{2}{\sqrt{5}}&-\dfrac{2}{3\sqrt{5}}&\dfrac{1}{3}\\[2mm]\dfrac{1}{\sqrt{5}}&\dfrac{4}{3\sqrt{5}}&-\dfrac{2}{3}\\[2mm]0&\dfrac{5}{3\sqrt{5}}&\dfrac{2}{3}\end{pmatrix},
$$
所求的正交变换为 $X=QY$，则 $f=X^{\mathrm{T}}AX=9y_3^2$.`,
  source: '《1990 数学一解析.pdf》PDF 第 3–4 页',
});
