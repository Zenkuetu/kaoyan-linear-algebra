// 1988 · 数学三 · 线性代数（题面取自《1、1987-1996考研数学三真题.pdf》1988 年 试卷Ⅳ；答案与解析取自《1988数学三真题答案解析（试卷四）.pdf》）
EXAMS.push({
  year: 1988, subject: '数三', number: 102, kind: '填空', score: 3, label: '填空题第 2 题',
  ids: ["det-def","det-elimination"],
  question: String.raw`$$
\begin{vmatrix}1&1&1&0\\1&1&0&1\\1&0&1&1\\0&1&1&1\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$-3$.`,
  analysis: '',
  source: '《1988 数学三真题答案解析（试卷四）.pdf》第 1 页',
});

EXAMS.push({
  year: 1988, subject: '数三', number: 103, kind: '填空', score: 3, label: '填空题第 3 题',
  ids: ["mat-inv-method","mat-types"],
  question: String.raw`设矩阵
$$
A=\begin{pmatrix}0&0&0&1\\0&0&1&0\\0&1&0&0\\1&0&0&0\end{pmatrix},
$$
则 $A^{-1}=$______.`,
  answer: String.raw`$$
\begin{pmatrix}0&0&0&1\\0&0&1&0\\0&1&0&0\\1&0&0&0\end{pmatrix}.
$$`,
  analysis: '',
  source: '《1988 数学三真题答案解析（试卷四）.pdf》第 1 页',
});

EXAMS.push({
  year: 1988, subject: '数三', number: 504, kind: '选择', score: 2, label: '判断题第 4 题',
  ids: ["mat-nocancel","mat-rank","det-rowsum-zero"],
  question: String.raw`若 $A$ 和 $B$ 都是 $n$ 阶非零方阵，且 $AB=O$，则 $A$ 的秩必小于 $n$.`,
  answer: String.raw`（√）．`,
  analysis: '',
  source: '《1988 数学三真题答案解析（试卷四）.pdf》第 1 页',
});

EXAMS.push({
  year: 1988, subject: '数三', number: 307, kind: '解答', score: 8, label: '第七题',
  ids: ["eq-nonhomo-crit","eq-nonhomo-general","eq-gauss"],
  question: String.raw`已知线性方程组
$$
\begin{cases}x_1+x_2+2x_3+3x_4=1,\\ x_1+3x_2+6x_3+x_4=3,\\ 3x_1-x_2-k_1x_3+15x_4=3,\\ x_1-5x_2-10x_3+12x_4=k_2.\end{cases}
$$
问 $k_1$ 和 $k_2$ 各取何值时，方程组无解？有唯一解？有无穷多解？在方程组有无穷多解的情况下，试求出一般解.`,
  answer: String.raw`当 $k_1\ne 2$ 时，方程组有唯一解；当 $k_1=2$ 而 $k_2\ne 1$ 时，方程组无解；当 $k_1=2$ 且 $k_2=1$ 时，方程组有无穷多解，其一般解为 $x_1=-8$，$x_2=3-2c$，$x_3=c$，$x_4=2$，其中 $c$ 为任意常数．`,
  analysis: String.raw`解：以 $A$ 表示方程组的系数矩阵，以 $(A|B)$ 表示增广矩阵，
$$
(A|B)=\begin{pmatrix}1&1&2&3&1\\1&3&6&1&3\\3&-1&-k_1&15&3\\1&-5&-10&12&k_2\end{pmatrix}\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&-k_1+2&2&4\\0&0&0&3&k_2+5\end{pmatrix},
$$
故当 $k_1\ne 2$ 时，$R(A)=R(A|B)=4$，方程组有唯一解；
当 $k_1=2$ 时，有
$$
(A|B)\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&0&2&4\\0&0&0&3&k_2+5\end{pmatrix}\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&0&1&2\\0&0&0&0&k_2-1\end{pmatrix},
$$
这时，若 $k_2\ne 1$，则 $R(A)=3<R(A|B)=4$，故方程组无解；
若 $k_2=1$，则 $R(A)=R(A|B)=3<4$，故方程组有无穷多组解，此时有
$$
(A|B)\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0&4&0\\0&1&2&-1&1\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0&0&-8\\0&1&2&0&3\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix},
$$
相应的方程组为 $x_1=-8$，$x_2=3-2x_3$，$x_4=2$. 取 $x_3=c$（$c$ 为任意常数），得方程组的一般解：$x_1=-8$，$x_2=3-2c$，$x_3=c$，$x_4=2$.

综上所述：当 $k_1\ne 2$ 时，方程组有唯一解；当 $k_1=2$ 而 $k_2\ne 1$ 时，方程组无解；当 $k_1=2$ 且 $k_2=1$ 时，方程组有无穷多组解，其一般解为 $x_1=-8$，$x_2=3-2c$，$x_3=c$，$x_4=2$，其中 $c$ 为任意常数．`,
  source: '《1988 数学三真题答案解析（试卷四）.pdf》第 5 页',
});

EXAMS.push({
  year: 1988, subject: '数三', number: 308, kind: '解答', score: 7, label: '第八题',
  ids: ["vec-indep-crit","vec-indep-def","vec-indep-concl"],
  question: String.raw`已知向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$（$s\ge 2$）线性无关．设 $\beta_1=\alpha_1+\alpha_2$，$\beta_2=\alpha_2+\alpha_3$，$\cdots$，$\beta_{s-1}=\alpha_{s-1}+\alpha_s$，$\beta_s=\alpha_s+\alpha_1$．试讨论向量组 $\beta_1,\beta_2,\cdots,\beta_s$ 的线性相关性.`,
  answer: String.raw`当 $s$ 为奇数时，向量组 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关；当 $s$ 为偶数时，向量组 $\beta_1,\beta_2,\cdots,\beta_s$ 线性相关．`,
  analysis: String.raw`解：假设 $k_1,k_2,\cdots,k_s$ 是一数组，满足条件 $k_1\beta_1+k_2\beta_2+\cdots+k_s\beta_s=0$，
那么，有 $(k_s+k_1)\alpha_1+(k_1+k_2)\alpha_2+\cdots+(k_{s-1}+k_s)\alpha_s=0$.
由于 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，故有
$$
\begin{cases}k_s+k_1=0,\\ k_1+k_2=0,\\ k_2+k_3=0,\\ \cdots\cdots\cdots,\\ k_{s-1}+k_s=0.\end{cases}(*)
$$
此方程组的系数行列式为 $s$ 阶行列式：
$$
D=\begin{vmatrix}1&0&0&\cdots&\cdots&0&1\\1&1&0&\cdots&\cdots&0&0\\0&1&1&\cdots&\cdots&0&0\\\cdots&\cdots&\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&\cdots&1&1\end{vmatrix}=1+(-1)^{s+1}=\begin{cases}2,&\text{若}s\text{为奇数}\\0,&\text{若}s\text{为偶数}\end{cases}
$$
若 $s$ 为奇数，则 $D=2\ne 0$，故方程组 $(*)$ 只有零解，即 $k_1,k_2,\cdots,k_s$ 必全为 $0$.
这时，向量组 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关.

若 $s$ 为偶数，则 $D=0$，故方程组 $(*)$ 有非零解，即存在不全为 $0$ 的数组 $k_1,k_2,\cdots,k_s$，使 $k_1\beta_1+k_2\beta_2+\cdots+k_s\beta_s=0$. 这时，向量组 $\beta_1,\beta_2,\cdots,\beta_s$ 线性相关．`,
  source: '《1988 数学三真题答案解析（试卷四）.pdf》第 5–6 页',
});

EXAMS.push({
  year: 1988, subject: '数三', number: 309, kind: '解答', score: 6, label: '第九题',
  ids: ["mat-adj-identity","mat-adjoint","det-product"],
  question: String.raw`设 $A$ 是三阶方阵，$A^*$ 是 $A$ 的伴随矩阵，$A$ 的行列式 $|A|=\dfrac{1}{2}$. 求行列式 $|(3A)^{-1}-2A^*|$ 的值.`,
  answer: String.raw`$-\dfrac{16}{27}$.`,
  analysis: String.raw`解：因 $(3A)^{-1}=\dfrac{1}{3}A^{-1}$，
故 $A^*=|A|\cdot A^{-1}=\dfrac{1}{2}A^{-1}$，
所以
$$
|(3A)^{-1}-2A^*|=\left|\dfrac{1}{3}A^{-1}-A^{-1}\right|=\left|-\dfrac{2}{3}A^{-1}\right|=\left(-\dfrac{2}{3}\right)^3|A^{-1}|=-\dfrac{16}{27}.
$$`,
  source: '《1988 数学三真题答案解析（试卷四）.pdf》第 6 页',
});