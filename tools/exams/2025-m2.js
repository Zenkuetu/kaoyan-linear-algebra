// 2025 · 数学二 · 线性代数（题面取自《2025年考研数学二真题》，答案与解析取自《2025 数学二解析》）
EXAMS.push({
  year: 2025, subject: '数二', number: 8, kind: '选择', score: 5,
  ids: ["eig-def","eig-poly","eig-ops"],
  question: String.raw`设矩阵
$$
\begin{pmatrix}1&2&0\\2&a&0\\0&0&b\end{pmatrix}
$$
有一个正特征值和两个负特征值，则

（A）$a>4,b>0$　　（B）$a<4,b>0$　　（C）$a>4,b<0$　　（D）$a<4,b<0$`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解析】由题意，
$$
\begin{vmatrix}1&2&0\\2&a&0\\0&0&b\end{vmatrix}=b(a-4)>0,
$$
则 $a>4,b>0$，或 $a<4,b<0$，
$$
\left|\lambda E-\begin{pmatrix}1&2&0\\2&a&0\\0&0&b\end{pmatrix}\right|=(b-\lambda)\left[\lambda^2-(a-1)\lambda-4\right].
$$
由于 $\lambda^2-(a-1)\lambda-4=0$ 有两个异号的根，进而 $b<0$，故 $a<4,b<0$.`,
  source: "《2025 数学二解析》第 6 页",
});

EXAMS.push({
  year: 2025, subject: '数二', number: 9, kind: '选择', score: 5,
  ids: ["mat-elem-op","mat-elem-mat"],
  question: String.raw`下列矩阵中，可以经过若干初等行变换得到矩阵
$$
\begin{pmatrix}1&1&0&1\\0&0&1&2\\0&0&0&0\end{pmatrix}
$$
的是

（A）$\begin{pmatrix}1&1&0&1\\1&2&1&3\\2&3&1&4\end{pmatrix}$　　（B）$\begin{pmatrix}1&1&0&1\\1&1&2&5\\1&1&1&3\end{pmatrix}$

（C）$\begin{pmatrix}1&0&0&1\\0&1&0&3\\0&1&0&0\end{pmatrix}$　　（D）$\begin{pmatrix}1&1&2&3\\1&2&2&3\\2&3&4&6\end{pmatrix}$`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解析】（B）选项，
$$
\begin{pmatrix}1&1&0&1\\1&1&2&5\\1&1&1&3\end{pmatrix}\to\begin{pmatrix}1&1&0&1\\0&0&1&2\\0&0&0&0\end{pmatrix}.
$$`,
  source: "《2025 数学二解析》第 6–7 页",
});

EXAMS.push({
  year: 2025, subject: '数二', number: 10, kind: '选择', score: 5,
  ids: ["eq-homo-general","mat-rank-ineq"],
  question: String.raw`设 3 阶矩阵 $A,B$ 满足 $r(AB)=r(BA)+1$，则

（A）方程组 $(A+B)x=0$ 只有零解

（B）方程组 $Ax=0$ 与方程组 $Bx=0$ 均只有零解

（C）方程组 $Ax=0$ 与方程组 $Bx=0$ 没有公共非零解

（D）方程组 $ABAx=0$ 与方程组 $BABx=0$ 有公共非零解`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解析】令
$$
A=\begin{pmatrix}1&1&1\\-1&-1&-1\\0&0&0\end{pmatrix},\quad B=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix},
$$
则
$$
AB=\begin{pmatrix}3&3&3\\-3&-3&-3\\0&0&0\end{pmatrix},\quad BA=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix},
$$
满足 $r(AB)=r(BA)+1$，则 $(A+B)x=0$ 有非零解，故 A 错；

由 $Ax=0$ 与 $Bx=0$ 均有非零解，故 B 错；由 $Ax=0$ 与 $Bx=0$ 同解，故 C 错；故选 D.`,
  source: "《2025 数学二解析》第 7 页",
});

EXAMS.push({
  year: 2025, subject: '数二', number: 16, kind: '填空', score: 5,
  ids: ["eq-nonhomo-general","eq-homo-structure","vec-combo"],
  question: String.raw`设矩阵 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，若 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，且 $\alpha_1+\alpha_2=\alpha_3+\alpha_4$，则方程组 $Ax=\alpha_1+4\alpha_4$ 的通解为 $x=\underline{\qquad}$.`,
  answer: String.raw`$x=k\begin{pmatrix}1\\1\\-1\\-1\end{pmatrix}+\begin{pmatrix}1\\0\\0\\4\end{pmatrix}$，$k\in\mathbf R$`,
  analysis: String.raw`【解析】
$$
\alpha_4=\alpha_1+\alpha_2-\alpha_3,
$$
$$
r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3)=3=r(A).
$$
$Ax=0$ 的基础解系中有 1 个线性无关的解向量.

$(1,1,-1,-1)^{\mathrm T}$ 为 $Ax=0$ 的解.

$(1,0,0,4)^{\mathrm T}$ 为 $Ax=\alpha_1+4\alpha_4$ 的解.

则通解为
$$
x=k\begin{pmatrix}1\\1\\-1\\-1\end{pmatrix}+\begin{pmatrix}1\\0\\0\\4\end{pmatrix}.
$$`,
  source: "《2025 数学二解析》第 10–11 页",
});

EXAMS.push({
  year: 2025, subject: '数二', number: 22, kind: '解答', score: 12,
  ids: ["qf-congruent","eig-orth-diag","eig-similar-prop"],
  question: String.raw`（本题满分 12 分）已知矩阵
$$
A=\begin{pmatrix}4&1&-2\\1&1&1\\-2&1&a\end{pmatrix}
$$
与
$$
B=\begin{pmatrix}k&0&0\\0&6&0\\0&0&0\end{pmatrix}
$$
合同.

（1）求 $a$ 的值及 $k$ 的取值范围；

（2）若存在正交矩阵 $Q$，使得 $Q^{\mathrm T}AQ=B$，求 $k$ 及 $Q$.`,
  answer: String.raw`（1）$a=4$，$k>0$；（2）$k=3$，
$$
Q=\begin{pmatrix}\dfrac{1}{\sqrt3}&-\dfrac{1}{\sqrt2}&\dfrac{1}{\sqrt6}\\\dfrac{1}{\sqrt3}&0&-\dfrac{2}{\sqrt6}\\\dfrac{1}{\sqrt3}&\dfrac{1}{\sqrt2}&\dfrac{1}{\sqrt6}\end{pmatrix}.
$$`,
  analysis: String.raw`（1）$\because A$ 与 $B$ 合同，$\therefore \lambda=0$ 为 $A$ 的一个特征值 $\Rightarrow |A|=0\Rightarrow a=4$，

由 $|\lambda E-A|=0\Rightarrow \lambda_1=3,\lambda_2=6,\lambda_3=0\Rightarrow k>0$.

（2）因为存在正交矩阵 $Q$，使得 $Q^{\mathrm T}AQ=B\Rightarrow k=3$.

当 $\lambda_1=3$ 时，由 $(3E-A)x=0\Rightarrow \xi_1=\begin{pmatrix}1\\1\\1\end{pmatrix}$；

当 $\lambda_2=6$ 时，由 $(6E-A)x=0\Rightarrow \xi_2=\begin{pmatrix}-1\\0\\1\end{pmatrix}$；

当 $\lambda_3=0$ 时，由 $(0E-A)x=0\Rightarrow \xi_3=\begin{pmatrix}1\\-2\\1\end{pmatrix}$；

再单位化 $\xi_1,\xi_2,\xi_3$ 可得
$$
Q=\begin{pmatrix}\dfrac{1}{\sqrt3}&-\dfrac{1}{\sqrt2}&\dfrac{1}{\sqrt6}\\\dfrac{1}{\sqrt3}&0&-\dfrac{2}{\sqrt6}\\\dfrac{1}{\sqrt3}&\dfrac{1}{\sqrt2}&\dfrac{1}{\sqrt6}\end{pmatrix}.
$$`,
  source: "《2025 数学二解析》第 16–17 页",
});

