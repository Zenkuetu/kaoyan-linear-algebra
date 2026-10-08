// 1995 · 数学三 · 线性代数（题面取自《1、1987-1996 考研数学三真题》1995 年试卷（四）；答案与解析取自《1995 年数学三真题答案解析》）
EXAMS.push({
  year: 1995, subject: '数三', number: 104, kind: '填空', score: 3, label: '试卷四·填空题第 4 题',
  ids: ['mat-adj-identity', 'mat-adjoint', 'mat-inv-method'],
  question: String.raw`设
$$
A=\begin{pmatrix}1&0&0\\2&2&0\\3&4&5\end{pmatrix},
$$
$A^*$ 是 $A$ 的伴随矩阵，则 $(A^*)^{-1}=$______.`,
  answer: String.raw`$$
(A^*)^{-1}=\frac{A}{|A|}=\frac{1}{10}\begin{pmatrix}1&0&0\\2&2&0\\3&4&5\end{pmatrix}.
$$`,
  analysis: String.raw`【解析】由 $AA^*=|A|E$，有 $\dfrac{A}{|A|}A^*=E$，故 $(A^*)^{-1}=\dfrac{A}{|A|}$.
而
$$
|A|=\begin{vmatrix}1&0&0\\2&2&0\\3&4&5\end{vmatrix}=10,
$$
所以
$$
(A^*)^{-1}=\frac{A}{|A|}=\frac{1}{10}\begin{pmatrix}1&0&0\\2&2&0\\3&4&5\end{pmatrix}.
$$`,
  source: '《1995 年数学三真题答案解析》PDF 第 1–2 页',
});

EXAMS.push({
  year: 1995, subject: '数三', number: 203, kind: '选择', score: 3, label: '试卷四·选择题第 3 题',
  ids: ['mat-rank', 'mat-rank-crit', 'mat-rank-ineq'],
  question: String.raw`设矩阵 $A_{m\times n}$ 的秩为 $r(A)=m<n$，$E_m$ 为 $m$ 阶单位矩阵，则下述结论中正确的是（　　）
（A）$A$ 的任意 $m$ 个列向量必线性无关
（B）$A$ 的任意一个 $m$ 阶子式不等于零
（C）若矩阵 $B$ 满足 $BA=O$，则 $B=O$
（D）$A$ 通过初等行变换，必可以化为 $(E_m,O)$ 的形式`,
  answer: String.raw`（C）.`,
  analysis: String.raw`【解析】$r(A)=m$ 表示 $A$ 中有 $m$ 个列向量线性无关，有 $m$ 阶子式不等于零，并不是任意的，因此（A）、（B）均不正确.
经初等变换可把 $A$ 化成标准形，一般应当既有初等行变换也有初等列变换，只用一种不一定能化为标准形. 例如 $\begin{pmatrix}0&1&0\\0&0&1\end{pmatrix}$，只用初等行变换就不能化成 $(E_2,O)$ 的形式，故（D）不正确.
关于（C），由 $BA=O$ 知 $r(B)+r(A)\le m$，又 $r(A)=m$，从而 $r(B)\le 0$，按定义又有 $r(B)\ge 0$，于是 $r(B)=0$，即 $B=O$. 故应选（C）.`,
  source: '《1995 年数学三真题答案解析》PDF 第 3 页',
});

EXAMS.push({
  year: 1995, subject: '数三', number: 309, kind: '解答', score: 9, label: '试卷四·第九题',
  ids: ['vec-rank-def', 'vec-indep-crit', 'vec-rank-table'],
  question: String.raw`已知向量组（Ⅰ）$\alpha_1,\alpha_2,\alpha_3$；（Ⅱ）$\alpha_1,\alpha_2,\alpha_3,\alpha_4$；（Ⅲ）$\alpha_1,\alpha_2,\alpha_3,\alpha_5$. 如果各向量组的秩分别为 $r(\mathrm{I})=r(\mathrm{II})=3$，$r(\mathrm{III})=4$.
证明：向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_5-\alpha_4$ 的秩为 4.`,
  answer: String.raw`证明见解析.`,
  analysis: String.raw`【解析】因为 $r(\mathrm{I})=r(\mathrm{II})=3$，所以 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，而 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关，因此 $\alpha_4$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，设为 $\alpha_4=l_1\alpha_1+l_2\alpha_2+l_3\alpha_3$.
若
$$
k_1\alpha_1+k_2\alpha_2+k_3\alpha_3+k_4(\alpha_5-\alpha_4)=0,
$$
即
$$
(k_1-l_1k_4)\alpha_1+(k_2-l_2k_4)\alpha_2+(k_3-l_3k_4)\alpha_3+k_4\alpha_5=0,
$$
由于 $r(\mathrm{III})=4$，所以 $\alpha_1,\alpha_2,\alpha_3,\alpha_5$ 线性无关. 故必有
$$
\begin{cases}k_1-l_1k_4=0,\\k_2-l_2k_4=0,\\k_3-l_3k_4=0,\\k_4=0.\end{cases}
$$
解出 $k_4=0,k_3=0,k_2=0,k_1=0$.
于是 $\alpha_1,\alpha_2,\alpha_3,\alpha_5-\alpha_4$ 线性无关，即其秩为 4.`,
  source: '《1995 年数学三真题答案解析》PDF 第 9 页',
});

EXAMS.push({
  year: 1995, subject: '数三', number: 310, kind: '解答', score: 10, label: '试卷四·第十题',
  ids: ['qf-orthogonal', 'eig-orth-diag', 'eig-diag-method'],
  question: String.raw`已知二次型
$$
f(x_1,x_2,x_3)=4x_2^2-3x_3^2+4x_1x_2-4x_1x_3+8x_2x_3.
$$
（1）写出二次型 $f$ 的矩阵表达式；
（2）用正交变换把二次型 $f$ 化为标准形，并写出相应的正交矩阵.`,
  answer: String.raw`（1）
$$
f(x_1,x_2,x_3)=x^{\mathrm{T}}Ax=(x_1,x_2,x_3)\begin{pmatrix}0&2&-2\\2&4&4\\-2&4&-3\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}.
$$
（2）
$$
Q=(\gamma_1\gamma_2\gamma_3)=\begin{pmatrix}\dfrac{2}{\sqrt{5}}&\dfrac{1}{\sqrt{30}}&\dfrac{1}{\sqrt{6}}\\0&\dfrac{5}{\sqrt{30}}&-\dfrac{1}{\sqrt{6}}\\-\dfrac{1}{\sqrt{5}}&\dfrac{2}{\sqrt{30}}&\dfrac{2}{\sqrt{6}}\end{pmatrix},
$$
经正交变换 $x=Qy$，得 $f=x^{\mathrm{T}}Ax=y^{\mathrm{T}}\Lambda y=y_1^2+6y_2^2-6y_3^2$.`,
  analysis: String.raw`【解析】（1）因为 $f(x_1,x_2,x_3)$ 对应的矩阵为
$$
A=\begin{pmatrix}0&2&-2\\2&4&4\\-2&4&-3\end{pmatrix},
$$
故 $f(x_1,x_2,x_3)$ 的矩阵表示为
$$
f(x_1,x_2,x_3)=x^{\mathrm{T}}Ax=(x_1,x_2,x_3)\begin{pmatrix}0&2&-2\\2&4&4\\-2&4&-3\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}.
$$
（2）由 $A$ 的特征方程
$$
|\lambda E-A|=\begin{vmatrix}\lambda&-2&2\\-2&\lambda-4&-4\\2&-4&\lambda+3\end{vmatrix}=\begin{vmatrix}\lambda&-2&2-2\lambda\\-2&\lambda-4&0\\2&-4&\lambda-1\end{vmatrix}
$$
$$
=\begin{vmatrix}\lambda+4&-10&0\\-2&\lambda-4&0\\2&-4&\lambda-1\end{vmatrix}=(\lambda-1)(\lambda^2-36)=0,
$$
得到 $A$ 的特征值为 $\lambda_1=1,\lambda_2=6,\lambda_3=-6$.
由 $(E-A)x=0$ 得基础解系 $X_1=(2,0,-1)^{\mathrm{T}}$，即属于 $\lambda=1$ 的特征向量.
由 $(6E-A)x=0$ 得基础解系 $X_2=(1,5,2)^{\mathrm{T}}$，即属于 $\lambda=6$ 的特征向量.
由 $(-6E-A)x=0$ 得基础解系 $X_3=(1,-1,2)^{\mathrm{T}}$，即属于 $\lambda=-6$ 的特征向量.
对于实对称矩阵，特征值不同特征向量已正交，故只须单位化，有
$$
\gamma_1=\frac{X_1}{\lVert X_1\rVert}=\frac{1}{\sqrt{5}}\begin{pmatrix}2\\0\\-1\end{pmatrix},\quad \gamma_2=\frac{X_2}{\lVert X_2\rVert}=\frac{1}{\sqrt{30}}\begin{pmatrix}1\\5\\2\end{pmatrix},\quad \gamma_3=\frac{X_3}{\lVert X_3\rVert}=\frac{1}{\sqrt{6}}\begin{pmatrix}1\\-1\\2\end{pmatrix},
$$
那么令
$$
Q=(\gamma_1\gamma_2\gamma_3)=\begin{pmatrix}\dfrac{2}{\sqrt{5}}&\dfrac{1}{\sqrt{30}}&\dfrac{1}{\sqrt{6}}\\0&\dfrac{5}{\sqrt{30}}&-\dfrac{1}{\sqrt{6}}\\-\dfrac{1}{\sqrt{5}}&\dfrac{2}{\sqrt{30}}&\dfrac{2}{\sqrt{6}}\end{pmatrix},
$$
经正交变换
$$
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=Q\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix},
$$
二次型化为标准形
$$
f(x_1,x_2,x_3)=x^{\mathrm{T}}Ax=y^{\mathrm{T}}\Lambda y=y_1^2+6y_2^2-6y_3^2.
$$`,
  source: '《1995 年数学三真题答案解析》PDF 第 9–10 页',
});
