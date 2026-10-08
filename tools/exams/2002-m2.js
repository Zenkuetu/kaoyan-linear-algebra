// 2002 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 35–37 页；答案与解析取自《1989—2004 考研数二真题答案解析》）
EXAMS.push({
  year: 2002, subject: '数二', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ['eig-poly', 'eig-def'],
  question: String.raw`矩阵 $\begin{pmatrix}0&-2&-2\\2&2&-2\\-2&-2&2\end{pmatrix}$ 的非零特征值是________.`,
  answer: '4',
  analysis: String.raw`记 $A=\begin{pmatrix}0&-2&-2\\2&2&-2\\-2&-2&2\end{pmatrix}$，则
$$
\lambda E-A=\begin{pmatrix}\lambda&&\\&\lambda&\\&&\lambda\end{pmatrix}-\begin{pmatrix}0&-2&-2\\2&2&-2\\-2&-2&2\end{pmatrix}=\begin{pmatrix}\lambda&2&2\\-2&\lambda-2&2\\2&2&\lambda-2\end{pmatrix}\quad(\text{对应元素相减})
$$
两边取行列式，
$$
|\lambda E-A|=\begin{vmatrix}\lambda&2&2\\-2&\lambda-2&2\\2&2&\lambda-2\end{vmatrix}\xrightarrow{2\text{行}+3\text{行}}\begin{vmatrix}\lambda&2&2\\0&\lambda&\lambda\\2&2&\lambda-2\end{vmatrix}\xrightarrow[\text{因子}\lambda\text{提出来}]{\text{把第}2\text{行的公}}\begin{vmatrix}\lambda&2&2\\0&1&1\\2&2&\lambda-2\end{vmatrix}
$$
$$
\xrightarrow{1\text{行}-2\text{行}\times2}\lambda\begin{vmatrix}0&0&0\\0&1&1\\2&2&\lambda-2\end{vmatrix}\xrightarrow{\text{按第}1\text{行展开}}\lambda\cdot(-1)^{1+1}\begin{vmatrix}1&1\\2&\lambda-2\end{vmatrix}
$$
（其中 $(-1)^{1+1}$ 指数中的 $1$ 和 $1$ 分别是 $\lambda$ 所在的行数和列数）
$$
=\lambda^2(\lambda-2-2)=\lambda^2(\lambda-4)
$$
令 $|\lambda E-A|=0$，解得 $\lambda_1=\lambda_2=0,\lambda_3=4$，故 $\lambda=4$ 是矩阵的非零特征值.（另一个特征值是 $\lambda=0$（二重））`,
  source: '《1989—2004 考研数二真题答案解析》第 158 页',
});

EXAMS.push({
  year: 2002, subject: '数二', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ['vec-indep-concl', 'vec-express-crit'],
  question: String.raw`设向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，向量 $\beta_1$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，而向量 $\beta_2$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，则对于任意常数 $k$，必有（　）

（A）$\alpha_1,\alpha_2,\alpha_3,k\beta_1+\beta_2$ 线性无关.
（B）$\alpha_1,\alpha_2,\alpha_3,k\beta_1+\beta_2$ 线性相关.
（C）$\alpha_1,\alpha_2,\alpha_3,\beta_1+k\beta_2$ 线性无关.
（D）$\alpha_1,\alpha_2,\alpha_3,\beta_1+k\beta_2$ 线性相关.`,
  answer: '（A）',
  analysis: String.raw`方法1：对任意常数 $k$，向量组 $\alpha_1,\alpha_2,\alpha_3$，$k\beta_1+\beta_2$ 线性无关. 用反证法，若 $\alpha_1,\alpha_2,\alpha_3$，$k\beta_1+\beta_2$ 线性相关，因已知 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，故 $k\beta_1+\beta_2$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出. 即存在常数 $\lambda_1,\lambda_2,\lambda_3$，使得 $k\beta_1+\beta_2=\lambda_1\alpha_1+\lambda_2\alpha_2+\lambda_3\alpha_3$.

又已知 $\beta_1$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，即存在常数 $l_1,l_2,l_3$，使得 $\beta_1=l_1\alpha_1+l_2\alpha_2+l_3\alpha_3$，代入上式，得
$$
k\beta_1+\beta_2=k(l_1\alpha_1+l_2\alpha_2+l_3\alpha_3)+\beta_2=\lambda_1\alpha_1+\lambda_2\alpha_2+\lambda_3\alpha_3
$$
$$
\Rightarrow\beta_2=(\lambda_1-kl_1)\alpha_1+(\lambda_2-kl_2)\alpha_2+(\lambda_3-kl_3)\alpha_3
$$
与 $\beta_2$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出矛盾. 故向量组 $\alpha_1,\alpha_2,\alpha_3$，$k\beta_1+\beta_2$ 线性无关，选（A）.

方法2：用排除法

B 选项：取 $k=0$，向量组 $\alpha_1,\alpha_2,\alpha_3$，$k\beta_1+\beta_2$ 即 $\alpha_1,\alpha_2,\alpha_3$，$\beta_2$ 线性相关不成立，否则因为 $\alpha_1,\alpha_2,\alpha_3$，$\beta_2$ 线性相关，又 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，故 $\beta_2$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出. 即存在常数 $\lambda_1,\lambda_2,\lambda_3$，使得 $\beta_2=\lambda_1\alpha_1+\lambda_2\alpha_2+\lambda_3\alpha_3$ 与已知矛盾，排除（B）.

C 选项：取 $k=0$，向量组 $\alpha_1,\alpha_2,\alpha_3$，$\beta_1+k\beta_2$，即 $\alpha_1,\alpha_2,\alpha_3$，$\beta_1$ 线性无关不成立，因为 $\beta_1$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，$\alpha_1,\alpha_2,\alpha_3$，$\beta_1$ 线性相关，排除（C）.

D 选项：$k\ne0$ 时，$\alpha_1,\alpha_2,\alpha_3$，$\beta_1+k\beta_2$ 线性相关不成立. 若 $\alpha_1,\alpha_2,\alpha_3$，$\beta_1+k\beta_2$ 线性相关，因已知 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，故 $\beta_1+k\beta_2$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出. 即存在常数 $\lambda_1,\lambda_2,\lambda_3$，使得 $\beta_1+k\beta_2=\lambda_1\alpha_1+\lambda_2\alpha_2+\lambda_3\alpha_3$. 又已知 $\beta_1$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，即存在常数 $l_1,l_2,l_3$，使得 $\beta_1=l_1\alpha_1+l_2\alpha_2+l_3\alpha_3$ 代入上式，得
$$
\beta_1+k\beta_2=(l_1\alpha_1+l_2\alpha_2+l_3\alpha_3)+k\beta_2=\lambda_1\alpha_1+\lambda_2\alpha_2+\lambda_3\alpha_3
$$
$$
\Rightarrow k\beta_2=(\lambda_1-l_1)\alpha_1+(\lambda_2-l_2)\alpha_2+(\lambda_3-l_3)\alpha_3
$$
因为 $k\ne0$，故 $\beta_2=\frac{\lambda_1-l_1}{k}\alpha_1+\frac{\lambda_2-l_2}{k}\alpha_2+\frac{\lambda_3-l_3}{k}\alpha_3$ 与 $\beta_2$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出矛盾. 故 $\alpha_1,\alpha_2,\alpha_3,\beta_1+k\beta_2$ 线性相关不成立，排除（D）. 故选（A）.`,
  source: '《1989—2004 考研数二真题答案解析》第 160 页',
});

EXAMS.push({
  year: 2002, subject: '数二', number: 311, kind: '解答', score: 6, label: '第十一题',
  ids: ['mat-invertible-crit', 'mat-inv-method'],
  question: String.raw`已知 $A,B$ 为 3 阶矩阵，且满足 $2A^{-1}B=B-4E$，其中 $E$ 是 3 阶单位矩阵.

（1）证明：矩阵 $A-2E$ 可逆；

（2）若 $B=\begin{pmatrix}1&-2&0\\1&2&0\\0&0&2\end{pmatrix}$，求矩阵 $A$.`,
  answer: String.raw`（1）见解析；（2）
$$
A=\begin{pmatrix}0&2&0\\-1&-1&0\\0&0&-2\end{pmatrix}.
$$`,
  analysis: String.raw`（1）由题设条件 $2A^{-1}B=B-4E$，两边左乘 $A$，得 $2AA^{-1}B=AB-4A$，即 $2B=AB-4A\Rightarrow AB-2B=4A$

所以 $(A-2E)B=AB-2B=4A=4A-8E+8E=4(A-2E)+8E$，

$$
\Rightarrow(A-2E)B-4(A-2E)=8E\Rightarrow(A-2E)B-(A-2E)\cdot4E=8E
$$
$$
\Rightarrow(A-2E)(B-4E)=8E\Rightarrow(A-2E)\frac{1}{8}(B-4E)=E
$$
根据可逆矩阵的定义知 $A-2E$ 可逆，且 $(A-2E)^{-1}=\frac{1}{8}(B-4E)$.

（2）由(1)结果知 $(A-2E)^{-1}=\frac{1}{8}(B-4E)$，根据逆矩阵的性质 $(kA)^{-1}=k^{-1}A^{-1}$，其中 $k$ 为不等于零的常数，有
$$
A-2E=\left[\frac{1}{8}(B-4E)\right]^{-1}=8(B-4E)^{-1}
$$
故 $A=8(B-4E)^{-1}+2E$

又 $B-4E=\begin{pmatrix}1&-2&0\\1&2&0\\0&0&2\end{pmatrix}-\begin{pmatrix}4&0&0\\0&4&0\\0&0&4\end{pmatrix}=\begin{pmatrix}-3&-2&0\\1&-2&0\\0&0&-2\end{pmatrix}\quad(\text{对应元素相减})$

因为若 $(A\ E)\xrightarrow{\text{初等行变换}}(E\ A^{-1})$，对 $[B-4E;E]$ 进行初等行变换，
$$
[B-4E;E]=\left(\begin{array}{ccc|ccc}-3&-2&0&1&0&0\\1&-2&0&0&1&0\\0&0&-2&0&0&1\end{array}\right)\xrightarrow{1,3\text{行互换}}\left(\begin{array}{ccc|ccc}1&-2&0&0&1&0\\-3&-2&0&1&0&0\\0&0&-2&0&0&1\end{array}\right)
$$
$$
\to\left(\begin{array}{ccc|ccc}1&-2&0&0&1&0\\0&-8&0&1&3&0\\0&0&1&0&0&-\frac{1}{2}\end{array}\right)\xrightarrow{2\text{行}\times(-\frac{1}{8})}\left(\begin{array}{ccc|ccc}1&-2&0&0&1&0\\0&1&0&-\frac{1}{8}&-\frac{3}{8}&0\\0&0&1&0&0&-\frac{1}{2}\end{array}\right)
$$
$$
\xrightarrow{1\text{行}+2\text{行}\times2}\left(\begin{array}{ccc|ccc}1&0&0&-\frac{1}{4}&\frac{1}{4}&0\\0&1&0&-\frac{1}{8}&-\frac{3}{8}&0\\0&0&1&0&0&-\frac{1}{2}\end{array}\right)
$$
故 $(B-4E)^{-1}=\begin{pmatrix}-\frac{1}{4}&\frac{1}{4}&0\\-\frac{1}{8}&-\frac{3}{8}&0\\0&0&-\frac{1}{2}\end{pmatrix}$，代入 $A=8(B-4E)^{-1}+2E$ 中，则
$$
A=8(B-4E)^{-1}+2E=8\begin{pmatrix}-\frac{1}{4}&\frac{1}{4}&0\\-\frac{1}{8}&-\frac{3}{8}&0\\0&0&-\frac{1}{2}\end{pmatrix}+\begin{pmatrix}2&&\\&2&\\&&2\end{pmatrix}
$$
（常数与矩阵相乘，矩阵的每一个元素都需要乘以该常数）
$$
=\begin{pmatrix}-2&2&0\\-1&-3&0\\0&0&-4\end{pmatrix}+\begin{pmatrix}2&&\\&2&\\&&2\end{pmatrix}=\begin{pmatrix}0&2&0\\-1&-1&0\\0&0&-2\end{pmatrix}\quad(\text{对应元素相加})$$`,
  source: '《1989—2004 考研数二真题答案解析》第 166–167 页',
});

EXAMS.push({
  year: 2002, subject: '数二', number: 312, kind: '解答', score: 6, label: '第十二题',
  ids: ['eq-nonhomo-general', 'eq-homo-structure'],
  question: String.raw`已知 4 阶方阵 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 均为 4 维列向量，其中 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，$\alpha_1=2\alpha_2-\alpha_3$. 如果 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$，求线性方程组 $Ax=\beta$ 的通解.`,
  answer: String.raw`$$
x=k[1,-2,1,0]^{\mathrm{T}}+[1,1,1,1]^{\mathrm{T}},\qquad(k\ \text{是任意常数}).
$$`,
  analysis: String.raw`方法1：记 $A=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]$，由 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，及 $\alpha_1=2\alpha_2-\alpha_3+0\alpha_4$，即 $\alpha_1$ 可以由 $\alpha_2,\alpha_3,\alpha_4$ 线性表出，故 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关，及 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$ 即 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表出，知
$$
r[A;\beta]=r[\alpha_1,\alpha_2,\alpha_3,\alpha_4,\beta]=r[\alpha_1,\alpha_2,\alpha_3,\alpha_4]=r(A)=r[\alpha_1,\alpha_2,\alpha_3]=3
$$
系数矩阵的秩与增广矩阵的秩相等，故 $Ax=\beta$ 有解.

对应齐次方程组 $Ax=0$，其系数矩阵的秩为 3，故其基础解系中含有 $4-3$（未知量的个数减系数矩阵的秩）个线性无关的解向量，故其通解可以写成 $k\xi$，$\eta^*$ 是 $Ax=\beta$ 的一个特解，根据非齐次线性方程组的解的结构定理，知 $Ax=\beta$ 的通解为 $k\xi+\eta^*$，其中 $k\xi$ 是对应齐次方程组 $Ax=0$ 的通解，$\eta^*$ 是 $Ax=\beta$ 的一个特解，因
$$
\alpha_1=2\alpha_2-\alpha_3+0\alpha_4,\ \text{故}\ \alpha_1-2\alpha_2+\alpha_3-0\alpha_4=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}=0,
$$
故 $\xi=[1,-2,1,0]^{\mathrm{T}}$ 是 $Ax=0$ 的一个非零解向量，因为 $Ax=0$ 的基础解系中只含有一个解向量，故 $\xi=[1,-2,1,0]^{\mathrm{T}}$ 是 $Ax=0$ 的基础解系.

又
$$
\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]\begin{pmatrix}1\\1\\1\\1\end{pmatrix},\ \text{即}\ A\begin{pmatrix}1\\1\\1\\1\end{pmatrix}=\beta
$$
故 $\eta^*=[1,1,1,1]^{\mathrm{T}}$ 是 $Ax=\beta$ 的一个特解，根据非齐次线性方程组的解的结构定理，方程组的通解为 $k[1,-2,1,0]^{\mathrm{T}}+[1,1,1,1]^{\mathrm{T}}$.（其中 $k$ 是任意常数）

方法2：令 $x=[x_1,x_2,x_3,x_4]^{\mathrm{T}}$，则线性非齐次方程为
$$
Ax=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]x=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=\beta
$$
已知 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$，故 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=\alpha_1+\alpha_2+\alpha_3+\alpha_4$

将 $\alpha_1=2\alpha_2-\alpha_3$ 代入上式，得
$$
(2\alpha_2-\alpha_3)x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=(2\alpha_2-\alpha_3)+\alpha_2+\alpha_3+\alpha_4
$$
$$
\Rightarrow2\alpha_2x_1-\alpha_3x_1+\alpha_2x_2+\alpha_3x_3+\alpha_4x_4=2\alpha_2-\alpha_3+\alpha_2+\alpha_3+\alpha_4=3\alpha_2+\alpha_4
$$
$$
\Rightarrow(2x_1+x_2)\alpha_2-\alpha_3x_1+\alpha_3x_3+\alpha_4x_4-3\alpha_2-\alpha_4=0
$$
$$
\Rightarrow(2x_1+x_2-3)\alpha_2+(-x_1+x_3)\alpha_3+(x_4-1)\alpha_4=0
$$
由已知 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，根据线性无关的定义，不存在不全为零的常数使得 $k_2\alpha_2+k_3\alpha_3+k_4\alpha_4=0$，上式成立当且仅当
$$
\begin{cases}2x_1+x_2=3\\-x_1+x_3=0\\x_4-1=0\end{cases}
$$
其系数矩阵为 $\begin{pmatrix}2&1&0&0\\-1&0&1&0\\0&0&0&1\end{pmatrix}$，因为 3 阶子式 $\begin{vmatrix}1&0&0\\0&1&0\\0&0&1\end{vmatrix}=1\ne0$，其秩为 3，故其齐次线性方程组的基础解系中存在 1 个（$4-3$）线性无关的解向量，取自由未知量 $x_3=k$，则方程组有解
$$
x_4=1,x_3=k,x_1=x_3=k,x_2=-2k+3
$$
故方程组 $Ax=\beta$ 有通解
$$
\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=\begin{pmatrix}k\\-2k+3\\k\\1\end{pmatrix}=k\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}+\begin{pmatrix}0\\3\\0\\1\end{pmatrix}.\quad(\text{其中}k\text{是任意常数})$$`,
  source: '《1989—2004 考研数二真题答案解析》第 167–169 页',
});
