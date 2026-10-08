// 2003 · 数学三 · 线性代数（题面取自《2、1997-2009 考研数学三真题》里的 2003 年卷；答案与解析取自《2003 年数学三真题答案解析》）
EXAMS.push({
  year: 2003, subject: '数三', number: 104, kind: '填空', score: 4,
  ids: ['mat-inverse-def', 'mat-invertible-crit', 'mat-mult'],
  label: '填空题第 4 题',
  question: String.raw`设 $n$ 维向量 $\alpha=(a,0,\cdots,0,a)^{\mathrm{T}}$，$a<0$；$E$ 为 $n$ 阶单位矩阵，矩阵 $A=E-\alpha\alpha^{\mathrm{T}}$，$B=E+\dfrac{1}{a}\alpha\alpha^{\mathrm{T}}$，其中 $A$ 的逆矩阵为 $B$，则 $a=$ $\underline{\qquad}$。`,
  answer: String.raw`$a=-1$。`,
  analysis: String.raw`【分析】这里 $\alpha\alpha^{\mathrm{T}}$ 为 $n$ 阶矩阵，而 $\alpha^{\mathrm{T}}\alpha=2a^2$ 为数，直接通过 $AB=E$ 进行计算并注意利用乘法的结合律即可。

【详解】由题设，有
$$
AB=(E-\alpha\alpha^{\mathrm{T}})\left(E+\frac{1}{a}\alpha\alpha^{\mathrm{T}}\right)
=E-\alpha\alpha^{\mathrm{T}}+\frac{1}{a}\alpha\alpha^{\mathrm{T}}-\frac{1}{a}\alpha\alpha^{\mathrm{T}}\alpha\alpha^{\mathrm{T}}
$$
$$
=E-\alpha\alpha^{\mathrm{T}}+\frac{1}{a}\alpha\alpha^{\mathrm{T}}-\frac{1}{a}\alpha(\alpha^{\mathrm{T}}\alpha)\alpha^{\mathrm{T}}
=E-\alpha\alpha^{\mathrm{T}}+\frac{1}{a}\alpha\alpha^{\mathrm{T}}-\frac{1}{a}\cdot 2a^2\alpha\alpha^{\mathrm{T}}
$$
$$
=E+\left(-1-2a+\frac{1}{a}\right)\alpha\alpha^{\mathrm{T}}=E,
$$
于是有 $-1-2a+\dfrac{1}{a}=0$，即 $2a^2+a-1=0$，解得 $a=\dfrac{1}{2},a=-1$。由于 $a<0$，故 $a=-1$。`,
  source: '《2003 年数学三真题答案解析》第 1–2 页',
});

EXAMS.push({
  year: 2003, subject: '数三', number: 204, kind: '选择', score: 4,
  ids: ['mat-adj-rank', 'mat-rank-crit', 'det-rank'],
  label: '选择题第 4 题',
  question: String.raw`设 $3$ 阶矩阵 $A=\begin{pmatrix}a&b&b\\b&a&b\\b&b&a\end{pmatrix}$，若 $A$ 的伴随矩阵的秩等于 $1$，则必有（　　）
（A）$a=b$ 或 $a+2b=0$　　（B）$a=b$ 或 $a+2b\ne 0$
（C）$a\ne b$ 且 $a+2b=0$　　（D）$a\ne b$ 且 $a+2b\ne 0$`,
  answer: String.raw`（C）`,
  analysis: String.raw`【分析】$A$ 的伴随矩阵的秩为 $1$，说明 $A$ 的秩为 $2$，由此可确定 $a,b$ 应满足的条件。

【详解】根据 $A$ 与其伴随矩阵 $A^*$ 秩之间的关系知，秩 $(A)=2$，故有
$$
\begin{vmatrix}a&b&b\\b&a&b\\b&b&a\end{vmatrix}=(a+2b)(a-b)^2=0,
$$
即有 $a+2b=0$ 或 $a=b$。

但当 $a=b$ 时，显然秩 $(A)\ne 2$，故必有 $a\ne b$ 且 $a+2b=0$。应选（C）。

【评注】$n\ (n\ge 2)$ 阶矩阵 $A$ 与其伴随矩阵 $A^*$ 的秩之间有下列关系：
$$
r(A^*)=\begin{cases}n,&r(A)=n,\\1,&r(A)=n-1,\\0,&r(A)<n-1.\end{cases}
$$`,
  source: '《2003 年数学三真题答案解析》第 3–4 页',
});

EXAMS.push({
  year: 2003, subject: '数三', number: 205, kind: '选择', score: 4,
  ids: ['vec-indep-def', 'vec-indep-concl', 'vec-rank-def'],
  label: '选择题第 5 题',
  question: String.raw`设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 均为 $n$ 维向量，下列结论不正确的是（　　）
（A）若对于任意一组不全为零的数 $k_1,k_2,\cdots,k_s$，都有 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s\ne 0$，则 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关
（B）若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则对于任意一组不全为零的数 $k_1,k_2,\cdots,k_s$，有 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0$
（C）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关的充分必要条件是此向量组的秩为 $s$
（D）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关的必要条件是其中任意两个向量线性无关`,
  answer: String.raw`（B）`,
  analysis: String.raw`【分析】本题涉及到线性相关、线性无关概念的理解，以及线性相关、线性无关的等价表现形式。应注意是寻找不正确的命题。

【详解】（A）：若对于任意一组不全为零的数 $k_1,k_2,\cdots,k_s$，都有 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s\ne 0$，则 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 必线性无关，因为若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则存在一组不全为零的数 $k_1,k_2,\cdots,k_s$，使得 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0$，矛盾。可见（A）成立。

（B）：若 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，则存在一组，而不是对任意一组不全为零的数 $k_1,k_2,\cdots,k_s$，都有 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0$。（B）不成立。

（C）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则此向量组的秩为 $s$；反过来，若向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 的秩为 $s$，则 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，因此（C）成立。

（D）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，则其任一部分组线性无关，当然其中任意两个向量线性无关，可见（D）也成立。

综上所述，应选（B）。

【评注】原命题与其逆否命题是等价的。例如，原命题：若存在一组不全为零的数 $k_1,k_2,\cdots,k_s$，使得 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0$ 成立，则 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关。其逆否命题为：若对于任意一组不全为零的数 $k_1,k_2,\cdots,k_s$，都有 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s\ne 0$，则 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关。`,
  source: '《2003 年数学三真题答案解析》第 4 页',
});

EXAMS.push({
  year: 2003, subject: '数三', number: 309, kind: '解答', score: 13,
  ids: ['eq-homo-sol', 'eq-homo-structure', 'eq-homo-general'],
  label: '第九题',
  question: String.raw`（本题满分 13 分）已知齐次线性方程组
$$
\begin{cases}(a_1+b)x_1+a_2x_2+a_3x_3+\cdots+a_nx_n=0,\\a_1x_1+(a_2+b)x_2+a_3x_3+\cdots+a_nx_n=0,\\a_1x_1+a_2x_2+(a_3+b)x_3+\cdots+a_nx_n=0,\\\cdots\cdots\cdots\\a_1x_1+a_2x_2+a_3x_3+\cdots+(a_n+b)x_n=0,\end{cases}
$$
其中 $\sum\limits_{i=1}^n a_i\ne 0$，试讨论 $a_1,a_2,\cdots,a_n$ 和 $b$ 满足何种关系时，

（1）方程组仅有零解；

（2）方程组有非零解，在有非零解时，求此方程组的一个基础解系。`,
  answer: String.raw`（1）$b\ne 0$ 且 $b+\sum\limits_{i=1}^n a_i\ne 0$ 时方程组仅有零解；（2）$b=0$ 时，基础解系为 $\alpha_1=\left(-\dfrac{a_2}{a_1},1,0,\cdots,0\right)^{\mathrm{T}},\alpha_2=\left(-\dfrac{a_3}{a_1},0,1,\cdots,0\right)^{\mathrm{T}},\cdots,\alpha_{n-1}=\left(-\dfrac{a_n}{a_1},0,0,\cdots,1\right)^{\mathrm{T}}$；$b=-\sum\limits_{i=1}^n a_i$ 时，基础解系为 $\alpha=(1,1,\cdots,1)^{\mathrm{T}}$。`,
  analysis: String.raw`【分析】方程的个数与未知量的个数相同，问题转化为系数矩阵行列式是否为零，而系数行列式的计算具有明显的特征：所有列对应元素相加后相等。可先将所有列对应元素相加，然后提出公因式，再将第一行的 $(-1)$ 倍加到其余各行，即可计算出行列式的值。

【详解】方程组的系数行列式
$$
|A|=\begin{vmatrix}a_1+b&a_2&a_3&\cdots&a_n\\a_1&a_2+b&a_3&\cdots&a_n\\a_1&a_2&a_3+b&\cdots&a_n\\\vdots&\vdots&\vdots&&\vdots\\a_1&a_2&a_3&\cdots&a_n+b\end{vmatrix}=b^{n-1}\left(b+\sum_{i=1}^n a_i\right).
$$
（1）当 $b\ne 0$ 时且 $b+\sum\limits_{i=1}^n a_i\ne 0$ 时，秩 $(A)=n$，方程组仅有零解。

（2）当 $b=0$ 时，原方程组的同解方程组为
$$
a_1x_1+a_2x_2+\cdots+a_nx_n=0.
$$
由 $\sum\limits_{i=1}^n a_i\ne 0$ 可知，$a_i\ (i=1,2,\cdots,n)$ 不全为零。不妨设 $a_1\ne 0$，得原方程组的一个基础解系为
$$
\alpha_1=\left(-\frac{a_2}{a_1},1,0,\cdots,0\right)^{\mathrm{T}},\ \alpha_2=\left(-\frac{a_3}{a_1},0,1,\cdots,0\right)^{\mathrm{T}},\ \cdots,\ \alpha_{n-1}=\left(-\frac{a_n}{a_1},0,0,\cdots,1\right)^{\mathrm{T}}.
$$
当 $b=-\sum\limits_{i=1}^n a_i$ 时，有 $b\ne 0$，原方程组的系数矩阵可化为
$$
\begin{pmatrix}a_1-\sum\limits_{i=1}^n a_i&a_2&a_3&\cdots&a_n\\a_1&a_2-\sum\limits_{i=1}^n a_i&a_3&\cdots&a_n\\a_1&a_2&a_3-\sum\limits_{i=1}^n a_i&\cdots&a_n\\\vdots&\vdots&\vdots&&\vdots\\a_1&a_2&a_3&\cdots&a_n-\sum\limits_{i=1}^n a_i\end{pmatrix}
$$
（将第 $1$ 行的 $-1$ 倍加到其余各行，再从第 $2$ 行到第 $n$ 行同乘以 $-\dfrac{1}{\sum\limits_{i=1}^n a_i}$ 倍）
$$
\to\begin{pmatrix}a_1-\sum\limits_{i=1}^n a_i&a_2&a_3&\cdots&a_n\\-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\end{pmatrix}
$$
（将第 $n$ 行的 $-a_n$ 倍到第 $2$ 行的 $-a_2$ 倍加到第 $1$ 行，再将第 $1$ 行移到最后一行）
$$
\to\begin{pmatrix}-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\\0&0&0&\cdots&0\end{pmatrix}.
$$
由此得原方程组的同解方程组为
$$
x_2=x_1,\ x_3=x_1,\ \cdots,\ x_n=x_1.
$$
原方程组的一个基础解系为
$$
\alpha=(1,1,\cdots,1)^{\mathrm{T}}.
$$

【评注】本题的难点在 $b=-\sum\limits_{i=1}^n a_i$ 时的讨论，事实上也可这样分析：此时系数矩阵的秩为 $n-1$（存在 $n-1$ 阶子式不为零），且显然 $\alpha=(1,1,\cdots,1)^{\mathrm{T}}$ 为方程组的一个非零解，即可作为基础解系。`,
  source: '《2003 年数学三真题答案解析》第 8–10 页',
});

EXAMS.push({
  year: 2003, subject: '数三', number: 310, kind: '解答', score: 13,
  ids: ['qf-orthogonal', 'eig-orth-diag', 'qf-canonical'],
  label: '第十题',
  question: String.raw`（本题满分 13 分）设二次型 $f(x_1,x_2,x_3)=X^{\mathrm{T}}AX=ax_1^2+2x_2^2-2x_3^2+2bx_1x_3\ (b>0)$，其中二次型的矩阵 $A$ 的特征值之和为 $1$，特征值之积为 $-12$。

（1）求 $a,b$ 之值；

（2）利用正交变换将二次型化为标准形，并写出所用的正交变换和对应的正交矩阵。`,
  answer: String.raw`（1）$a=1,b=2$；（2）正交变换 $X=QY$，其中 $Q=\begin{pmatrix}\dfrac{2}{\sqrt{5}}&0&\dfrac{1}{\sqrt{5}}\\0&1&0\\\dfrac{1}{\sqrt{5}}&0&-\dfrac{2}{\sqrt{5}}\end{pmatrix}$，标准形 $f=2y_1^2+2y_2^2-3y_3^2$。`,
  analysis: String.raw`【分析】特征值之和为 $A$ 的主对角线上元素之和，特征值之积为 $A$ 的行列式，由此可求出 $a,b$ 的值；进一步求出 $A$ 的特征值和特征向量，并将相同特征值的特征向量正交化（若有必要），然后将特征向量单位化并以此为列所构造的矩阵即为所求的正交矩阵。

【详解】（1）二次型 $f$ 的矩阵为
$$
A=\begin{pmatrix}a&0&b\\0&2&0\\b&0&-2\end{pmatrix}.
$$
设 $A$ 的特征值为 $\lambda_i\ (i=1,2,3)$。由题设，有
$$
\lambda_1+\lambda_2+\lambda_3=a+2+(-2)=1,
$$
$$
\lambda_1\lambda_2\lambda_3=\begin{vmatrix}a&0&b\\0&2&0\\b&0&-2\end{vmatrix}=-4a-2b^2=-12.
$$
解得 $a=1,b=2$。

（2）由矩阵 $A$ 的特征多项式
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&0&-2\\0&\lambda-2&0\\-2&0&\lambda+2\end{vmatrix}=(\lambda-2)^2(\lambda+3),
$$
得 $A$ 的特征值 $\lambda_1=\lambda_2=2,\lambda_3=-3$。

对于 $\lambda_1=\lambda_2=2$，解齐次线性方程组 $(2E-A)x=0$，得其基础解系
$$
x_1=(2,0,1)^{\mathrm{T}},\quad x_2=(0,1,0)^{\mathrm{T}}.
$$
对于 $\lambda_3=-3$，解齐次线性方程组 $(-3E-A)x=0$，得基础解系
$$
x_3=(1,0,-2)^{\mathrm{T}}.
$$
由于 $x_1,x_2,x_3$ 已是正交向量组，为了得到规范正交向量组，只需将 $x_1,x_2,x_3$ 单位化，由此得
$$
\eta_1=\left(\frac{2}{\sqrt{5}},0,\frac{1}{\sqrt{5}}\right)^{\mathrm{T}},\quad \eta_2=(0,1,0)^{\mathrm{T}},\quad \eta_3=\left(\frac{1}{\sqrt{5}},0,-\frac{2}{\sqrt{5}}\right)^{\mathrm{T}}.
$$
令矩阵
$$
Q=(\eta_1,\eta_2,\eta_3)=\begin{pmatrix}\dfrac{2}{\sqrt{5}}&0&\dfrac{1}{\sqrt{5}}\\0&1&0\\\dfrac{1}{\sqrt{5}}&0&-\dfrac{2}{\sqrt{5}}\end{pmatrix},
$$
则 $Q$ 为正交矩阵。在正交变换 $X=QY$ 下，有
$$
Q^{\mathrm{T}}AQ=\begin{pmatrix}2&0&0\\0&2&0\\0&0&-3\end{pmatrix},
$$
且二次型的标准形为
$$
f=2y_1^2+2y_2^2-3y_3^2.
$$

【评注】本题求 $a,b$，也可先计算特征多项式，再利用根与系数的关系确定：二次型 $f$ 的矩阵 $A$ 对应特征多项式为
$$
|\lambda E-A|=\begin{vmatrix}\lambda-a&0&-b\\0&\lambda-2&0\\-b&0&\lambda+2\end{vmatrix}=(\lambda-2)[\lambda^2-(a-2)\lambda-(2a+b^2)].
$$
设 $A$ 的特征值为 $\lambda_1,\lambda_2,\lambda_3$，则 $\lambda_1=2,\lambda_2+\lambda_3=a-2,\lambda_2\lambda_3=-(2a+b^2)$。由题设得
$$
\lambda_1+\lambda_2+\lambda_3=2+(a-2)=1,\quad \lambda_1\lambda_2\lambda_3=-2(2a+b^2)=-12.
$$
解得 $a=1,b=2$。`,
  source: '《2003 年数学三真题答案解析》第 10–12 页',
});
