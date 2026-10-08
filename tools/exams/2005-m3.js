// 2005 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2005 年卷；答案与解析取自《2005 年数学三真题答案解析》）
EXAMS.push({
  year: 2005, subject: '数三', number: 4, kind: '填空', score: 4,
  ids: ['vec-indep-crit', 'det-roots', 'det-def'],
  question: String.raw`设行向量组 $(2,1,1,1)$，$(2,1,a,a)$，$(3,2,1,a)$，$(4,3,2,1)$ 线性相关，且 $a\ne 1$，则 $a=$ $\underline{\qquad}$。`,
  answer: String.raw`$a=\dfrac{1}{2}$。`,
  analysis: String.raw`【分析】四个 $4$ 维向量线性相关，必有其对应行列式为零，由此即可确定 $a$。

【详解】由题设，有
$$
\begin{vmatrix}2&1&1&1\\2&1&a&a\\3&2&1&a\\4&3&2&1\end{vmatrix}=(a-1)(2a-1)=0,
$$
得 $a=1,a=\dfrac{1}{2}$，但题设 $a\ne 1$，故 $a=\dfrac{1}{2}$。`,
  source: '《2005 年数学三真题答案解析》第 1 页',
});

EXAMS.push({
  year: 2005, subject: '数三', number: 12, kind: '选择', score: 4,
  ids: ['mat-adj-identity', 'mat-adj-rank', 'mat-transpose'],
  question: String.raw`设矩阵 $A=(a_{ij})_{3\times 3}$ 满足 $A^*=A^{\mathrm{T}}$，其中 $A^*$ 是 $A$ 的伴随矩阵，$A^{\mathrm{T}}$ 为 $A$ 的转置矩阵。若 $a_{11},a_{12},a_{13}$ 为三个相等的正数，则 $a_{11}$ 为（　　）
（A）$\dfrac{\sqrt{3}}{3}$　　（B）$3$　　（C）$\dfrac{1}{3}$　　（D）$\sqrt{3}$`,
  answer: String.raw`（A）`,
  analysis: String.raw`【分析】题设与 $A$ 的伴随矩阵有关，一般联想到用行列展开定理和相应公式：$AA^*=A^*A=|A|E$。

【详解】由 $A^*=A^{\mathrm{T}}$ 及 $AA^*=A^*A=|A|E$，有 $a_{ij}=A_{ij},\ i,j=1,2,3$，其中 $A_{ij}$ 为 $a_{ij}$ 的代数余子式，且
$$
AA^{\mathrm{T}}=|A|E\Rightarrow |A|^2=|A|^3\Rightarrow |A|=0\text{ 或 }|A|=1.
$$
而
$$
|A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=3a_{11}^2\ne 0,
$$
于是 $|A|=1$，且 $a_{11}^2=\dfrac{1}{3}$，即 $a_{11}=\dfrac{\sqrt{3}}{3}$。故正确选项为（A）。`,
  source: '《2005 年数学三真题答案解析》第 4 页',
});

EXAMS.push({
  year: 2005, subject: '数三', number: 13, kind: '选择', score: 4,
  ids: ['vec-indep-crit', 'eig-def', 'eig-property'],
  question: String.raw`设 $\lambda_1,\lambda_2$ 是矩阵 $A$ 的两个不同的特征值，对应的特征向量分别为 $\alpha_1,\alpha_2$，则 $\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关的充分必要条件是（　　）
（A）$\lambda_1=0$　　（B）$\lambda_2=0$　　（C）$\lambda_1\ne 0$　　（D）$\lambda_2\ne 0$`,
  answer: String.raw`（D）`,
  analysis: String.raw`【分析】讨论一组抽象向量的线性无关性，可用定义或转化为求其秩即可。

【详解】方法一：令 $k_1\alpha_1+k_2A(\alpha_1+\alpha_2)=0$，则
$$
k_1\alpha_1+k_2\lambda_1\alpha_1+k_2\lambda_2\alpha_2=0,\quad (k_1+k_2\lambda_1)\alpha_1+k_2\lambda_2\alpha_2=0.
$$
由于 $\alpha_1,\alpha_2$ 线性无关，于是有
$$
\begin{cases}k_1+k_2\lambda_1=0,\\k_2\lambda_2=0.\end{cases}
$$
当 $\lambda_2\ne 0$ 时，显然有 $k_1=0,k_2=0$，此时 $\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关；反过来，若 $\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关，则必然有 $\lambda_2\ne 0$（否则 $\alpha_1$ 与 $A(\alpha_1+\alpha_2)=\lambda_1\alpha_1$ 线性相关），故应选（D）。

方法二：由于
$$
[\alpha_1,A(\alpha_1+\alpha_2)]=[\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2]=[\alpha_1,\alpha_2]\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix},
$$
可见 $\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关的充要条件是 $\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}=\lambda_2\ne 0$。故应选（D）。`,
  source: '《2005 年数学三真题答案解析》第 4–5 页',
});

EXAMS.push({
  year: 2005, subject: '数三', number: 20, kind: '解答', score: 13,
  ids: ['eq-samesol', 'eq-homo-general', 'eq-homo-structure'],
  question: String.raw`（本题满分 13 分）已知齐次线性方程组
$$
\text{（i）}\begin{cases}x_1+2x_2+3x_3=0,\\2x_1+3x_2+5x_3=0,\\x_1+x_2+ax_3=0,\end{cases}
\quad\text{和}\quad
\text{（ii）}\begin{cases}x_1+bx_2+cx_3=0,\\2x_1+b^2x_2+(c+1)x_3=0\end{cases}
$$
同解，求 $a,b,c$ 的值。`,
  answer: String.raw`$a=2,\ b=1,\ c=2$。`,
  analysis: String.raw`【分析】方程组（ii）显然有无穷多解，于是方程组（i）也有无穷多解，从而可确定 $a$，这样先求出（i）的通解，再代入方程组（ii）确定 $b,c$ 即可。

【详解】方程组（ii）的未知量个数大于方程个数，故方程组（ii）有无穷多解。因为方程组（i）与（ii）同解，所以方程组（i）的系数矩阵的秩小于 $3$。

对方程组（i）的系数矩阵施以初等行变换
$$
\begin{pmatrix}1&2&3\\2&3&5\\1&1&a\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&a-2\end{pmatrix},
$$
从而 $a=2$。此时，方程组（i）的系数矩阵可化为
$$
\begin{pmatrix}1&2&3\\2&3&5\\1&1&2\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix},
$$
故 $(-1,-1,1)^{\mathrm{T}}$ 是方程组（i）的一个基础解系。

将 $x_1=-1,x_2=-1,x_3=1$ 代入方程组（ii）可得
$$
b=1,c=2\text{ 或 }b=0,c=1.
$$
当 $b=1,c=2$ 时，对方程组（ii）的系数矩阵施以初等行变换，有
$$
\begin{pmatrix}1&1&2\\2&1&3\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix},
$$
显然此时方程组（i）与（ii）同解。

当 $b=0,c=1$ 时，对方程组（ii）的系数矩阵施以初等行变换，有
$$
\begin{pmatrix}1&0&1\\2&0&2\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&0&0\end{pmatrix},
$$
显然此时方程组（i）与（ii）的解不相同。

综上所述，当 $a=2,b=1,c=2$ 时，方程组（i）与（ii）同解。`,
  source: '《2005 年数学三真题答案解析》第 8–9 页',
});

EXAMS.push({
  year: 2005, subject: '数三', number: 21, kind: '解答', score: 13,
  ids: ['qf-positive-def', 'mat-block', 'qf-positive-crit'],
  question: String.raw`（本题满分 13 分）设 $D=\begin{pmatrix}A&C\\C^{\mathrm{T}}&B\end{pmatrix}$ 为正定矩阵，其中 $A,B$ 分别为 $m$ 阶，$n$ 阶对称矩阵，$C$ 为 $m\times n$ 矩阵。

（Ⅰ）计算 $P^{\mathrm{T}}DP$，其中 $P=\begin{pmatrix}E_m&-A^{-1}C\\O&E_n\end{pmatrix}$；

（Ⅱ）利用（Ⅰ）的结果判断矩阵 $B-C^{\mathrm{T}}A^{-1}C$ 是否为正定矩阵，并证明你的结论。`,
  answer: String.raw`（Ⅰ）$P^{\mathrm{T}}DP=\begin{pmatrix}A&O\\O&B-C^{\mathrm{T}}A^{-1}C\end{pmatrix}$；（Ⅱ）$B-C^{\mathrm{T}}A^{-1}C$ 是正定矩阵，证明见解析。`,
  analysis: String.raw`【分析】第一部分直接利用分块矩阵的乘法即可；第二部分是讨论抽象矩阵的正定性，一般用定义。

【详解】（Ⅰ）因 $P^{\mathrm{T}}=\begin{pmatrix}E_m&O\\-C^{\mathrm{T}}A^{-1}&E_n\end{pmatrix}$，有
$$
P^{\mathrm{T}}DP=\begin{pmatrix}E_m&O\\-C^{\mathrm{T}}A^{-1}&E_n\end{pmatrix}\begin{pmatrix}A&C\\C^{\mathrm{T}}&B\end{pmatrix}\begin{pmatrix}E_m&-A^{-1}C\\O&E_n\end{pmatrix}
$$
$$
=\begin{pmatrix}A&C\\O&B-C^{\mathrm{T}}A^{-1}C\end{pmatrix}\begin{pmatrix}E_m&-A^{-1}C\\O&E_n\end{pmatrix}
=\begin{pmatrix}A&O\\O&B-C^{\mathrm{T}}A^{-1}C\end{pmatrix}.
$$
（Ⅱ）矩阵 $B-C^{\mathrm{T}}A^{-1}C$ 是正定矩阵。

由（Ⅰ）的结果可知，矩阵 $D$ 合同于矩阵
$$
M=\begin{pmatrix}A&O\\O&B-C^{\mathrm{T}}A^{-1}C\end{pmatrix}.
$$
又 $D$ 为正定矩阵，可知矩阵 $M$ 为正定矩阵。

因矩阵 $M$ 为对称矩阵，故 $B-C^{\mathrm{T}}A^{-1}C$ 为对称矩阵。对 $X=(0,0,\cdots,0)^{\mathrm{T}}$ 及任意的 $Y=(y_1,y_2,\cdots,y_n)^{\mathrm{T}}\ne 0$，有
$$
(X^{\mathrm{T}},Y^{\mathrm{T}})\begin{pmatrix}A&O\\O&B-C^{\mathrm{T}}A^{-1}C\end{pmatrix}\begin{pmatrix}X\\Y\end{pmatrix}=Y^{\mathrm{T}}(B-C^{\mathrm{T}}A^{-1}C)Y>0.
$$
故 $B-C^{\mathrm{T}}A^{-1}C$ 为正定矩阵。`,
  source: '《2005 年数学三真题答案解析》第 9–10 页',
});
