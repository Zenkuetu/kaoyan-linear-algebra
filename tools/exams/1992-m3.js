// 1992 · 数学三 · 线性代数（题面取自《1、1987-1996 考研数学三真题》1992 年试卷（四）；答案与解析取自《1992 年数学三真题答案解析》）
EXAMS.push({
  year: 1992, subject: '数三', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['det-block', 'mat-block'],
  question: String.raw`设 $A$ 为 $m$ 阶方阵，$B$ 为 $n$ 阶方阵，且 $|A|=a$，$|B|=b$，
$$
C=\begin{pmatrix}O&A\\B&O\end{pmatrix},
$$
则 $|C|=$______.`,
  answer: String.raw`$(-1)^{mn}ab$.`,
  analysis: String.raw`【解析】由拉普拉斯展开式，
$$
|C|=\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{mn}|A||B|=(-1)^{mn}ab.
$$
【相关知识点】两种特殊的拉普拉斯展开式：设 $A$ 是 $m$ 阶矩阵，$B$ 是 $n$ 阶矩阵，则
$$
\begin{vmatrix}A&O\\*&B\end{vmatrix}=\begin{vmatrix}A&*\\O&B\end{vmatrix}=|A|\cdot|B|,
$$
$$
\begin{vmatrix}O&A\\B&*\end{vmatrix}=\begin{vmatrix}*&A\\B&O\end{vmatrix}=(-1)^{mn}|A|\cdot|B|.
$$`,
  source: '《1992 年数学三真题答案解析》PDF 第 2–3 页',
});

EXAMS.push({
  year: 1992, subject: '数三', number: 203, kind: '选择', score: 3, label: '选择题第 3 题',
  ids: ['eq-homo-sol', 'vec-rank-vs-mat', 'mat-rank-crit'],
  question: String.raw`设 $A$ 为 $m\times n$ 矩阵，齐次线性方程组 $Ax=0$ 仅有零解的充分条件是（　　）
（A）$A$ 的列向量线性无关
（B）$A$ 的列向量线性相关
（C）$A$ 的行向量线性无关
（D）$A$ 的行向量线性相关`,
  answer: String.raw`（A）.`,
  analysis: String.raw`【解析】齐次方程组 $Ax=0$ 只有零解 $\Leftrightarrow r(A)=n$.
由于 $r(A)=A$ 的行秩 $=A$ 的列秩，现 $A$ 是 $m\times n$ 矩阵，$r(A)=n$，即 $A$ 的列向量线性无关. 故应选（A）.
【相关知识点】对齐次线性方程组 $Ax=0$，有定理如下：
对矩阵 $A$ 按列分块，有 $A=(\alpha_1,\alpha_2,\cdots,\alpha_n)$，则 $Ax=0$ 的向量形式为
$$
x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n=0.
$$
那么，
$$
Ax=0\text{ 有非零解}\Leftrightarrow \alpha_1,\alpha_2,\cdots,\alpha_n\text{ 线性相关}
$$
$$
\Leftrightarrow r(\alpha_1,\alpha_2,\cdots,\alpha_n)<n\Leftrightarrow r(A)<n.
$$`,
  source: '《1992 年数学三真题答案解析》PDF 第 4 页',
});

EXAMS.push({
  year: 1992, subject: '数三', number: 309, kind: '解答', score: 7, label: '第九题',
  ids: ['eig-similar-prop', 'eig-diag-method', 'eig-similar'],
  question: String.raw`设矩阵 $A$ 与 $B$ 相似，其中
$$
A=\begin{pmatrix}-2&0&0\\2&x&2\\3&1&1\end{pmatrix},\quad B=\begin{pmatrix}-1&0&0\\0&2&0\\0&0&y\end{pmatrix}.
$$
（1）求 $x$ 和 $y$ 的值；
（2）求可逆矩阵 $P$，使得 $P^{-1}AP=B$.`,
  answer: String.raw`（1）$x=0,\ y=-2$.
（2）
$$
P=\begin{pmatrix}0&0&1\\-2&1&0\\1&1&-1\end{pmatrix}.
$$`,
  analysis: String.raw`【解析】因为 $A\sim B$，故可用相似矩阵的性质建立方程组来求参数 $x$ 和 $y$ 的值. 若 $P^{-1}AP=\Lambda$，则 $\Lambda$ 是 $A$ 的特征值. 求可逆矩阵 $P$ 就是求 $A$ 的特征向量.
（1）因为 $A\sim B$，故其特征多项式相同，即 $|\lambda E-A|=|\lambda E-B|$，即
$$
(\lambda+2)[\lambda^2-(x+1)\lambda+(x-2)]=(\lambda+1)(\lambda-2)(\lambda-y).
$$
由于是 $\lambda$ 的多项式，由 $\lambda$ 的任意性，
$$
\lambda=0\text{ 得}\ 2(x-2)=2y,\qquad \lambda=1\text{ 得}\ 3\cdot(-2)=-2(1-y).
$$
由上两式解出 $y=-2$ 与 $x=0$.
（2）由（1）知
$$
\begin{pmatrix}-2&0&0\\2&0&2\\3&1&1\end{pmatrix}\sim\begin{pmatrix}-1&0&0\\0&2&0\\0&0&-2\end{pmatrix}.
$$
因为 $B$ 恰好是对角阵，所以马上可得出矩阵 $A$ 的特征值，矩阵 $A$ 的特征值是
$$
\lambda_1=-1,\ \lambda_2=2,\ \lambda_3=-2.
$$
当 $\lambda_1=-1$ 时，由 $(-E-A)x=0$，
$$
\begin{pmatrix}1&0&0\\-2&-1&-2\\-3&-1&-2\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&2\\0&0&0\end{pmatrix},
$$
得到属于特征值 $\lambda=-1$ 的特征向量 $\alpha_1=(0,-2,1)^{\mathrm{T}}$.
当 $\lambda_2=2$ 时，由 $(2E-A)x=0$，
$$
\begin{pmatrix}4&0&0\\-2&2&-2\\-3&-1&1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&-1\\0&0&0\end{pmatrix},
$$
得到属于特征值 $\lambda=2$ 的特征向量 $\alpha_2=(0,1,1)^{\mathrm{T}}$.
当 $\lambda_3=-2$ 时，由 $(-2E-A)x=0$，
$$
\begin{pmatrix}0&0&0\\-2&-2&-2\\-3&-1&-3\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&0\\0&0&0\end{pmatrix}.
$$
得到属于特征值 $\lambda=-2$ 的特征向量 $\alpha_3=(1,0,-1)^{\mathrm{T}}$.
那么令
$$
P=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}0&0&1\\-2&1&0\\1&1&-1\end{pmatrix},
$$
有 $P^{-1}AP=B$.`,
  source: '《1992 年数学三真题答案解析》PDF 第 9–10 页',
});

EXAMS.push({
  year: 1992, subject: '数三', number: 310, kind: '解答', score: 6, label: '第十题',
  ids: ['eq-AX-O-AB-O', 'eq-homo-sol', 'mat-rank-ineq'],
  question: String.raw`已知三阶矩阵 $B\ne O$，且 $B$ 的每一个列向量都是以下方程组的解：
$$
\begin{cases}x_1+2x_2-2x_3=0,\\2x_1-x_2+\lambda x_3=0,\\3x_1+x_2-x_3=0.\end{cases}
$$
（1）求 $\lambda$ 的值；
（2）证明 $|B|=0$.`,
  answer: String.raw`（1）$\lambda=1$；（2）证明见解析.`,
  analysis: String.raw`【解析】对于条件 $AB=0$ 应当有两个思路：一是 $B$ 的列向量是齐次方程组 $Ax=0$ 的解；另一个是秩的信息即 $r(A)+r(B)\le n$. 要有这两种思考问题的意识.
（1）令
$$
A=\begin{pmatrix}1&2&-2\\2&-1&\lambda\\3&1&-1\end{pmatrix},
$$
对 3 阶矩阵 $A$，由 $AB=0$，$B\ne 0$ 知必有 $|A|=0$，否则 $A$ 可逆，从而 $B=A^{-1}(AB)=A^{-1}0=0$，这与 $B\ne 0$ 矛盾. 故
$$
|A|=\begin{vmatrix}1&2&-2\\2&-1&\lambda\\3&1&-1\end{vmatrix}=0,
$$
用行列式的等价变换，将第三列加到第二列上，再按第二列展开，有
$$
|A|=\begin{vmatrix}1&0&-2\\2&\lambda-1&\lambda\\3&0&-1\end{vmatrix}=5(\lambda-1)=0.
$$
解出 $\lambda=1$.
（2）反证法：对于 $AB=0$，若 $|B|\ne 0$，则 $B$ 可逆，那么 $A=(AB)B^{-1}=0B^{-1}=0$. 与已知条件 $A\ne 0$ 矛盾. 故假设不成立，$|B|=0$.
【相关知识点】对矩阵 $B$ 按列分块，记 $B=(\beta_1,\beta_2,\beta_3)$，那么
$$
AB=A(\beta_1,\beta_2,\beta_3)=(A\beta_1,A\beta_2,A\beta_3)=(0,0,0).
$$
因而 $A\beta_i=0\ (i=1,2,3)$，即 $\beta_i$ 是 $Ax=0$ 的解.`,
  source: '《1992 年数学三真题答案解析》PDF 第 10–11 页',
});

EXAMS.push({
  year: 1992, subject: '数三', number: 311, kind: '解答', score: 6, label: '第十一题',
  ids: ['qf-positive-def', 'qf-positive-crit', 'mat-block'],
  question: String.raw`设 $A$、$B$ 分别为 $m$、$n$ 阶正定矩阵，试判定分块矩阵
$$
C=\begin{pmatrix}A&O\\O&B\end{pmatrix}
$$
是否是正定矩阵.`,
  answer: String.raw`$C$ 是正定矩阵.`,
  analysis: String.raw`【解析】在证明一个矩阵是正定矩阵时，不要忘记验证该矩阵是对称的.
方法 1：定义法.
因为 $A$、$B$ 均为正定矩阵，由正定矩阵的性质，故 $A^{\mathrm{T}}=A$，$B^{\mathrm{T}}=B$，那么
$$
C^{\mathrm{T}}=\begin{pmatrix}A&O\\O&B\end{pmatrix}^{\mathrm{T}}=\begin{pmatrix}A^{\mathrm{T}}&O\\O&B^{\mathrm{T}}\end{pmatrix}=\begin{pmatrix}A&O\\O&B\end{pmatrix}=C,
$$
即 $C$ 是对称矩阵.
设 $m+n$ 维列向量 $Z^{\mathrm{T}}=(X^{\mathrm{T}},Y^{\mathrm{T}})$，其中 $X^{\mathrm{T}}=(x_1,x_2,\cdots,x_m)$，$Y^{\mathrm{T}}=(y_1,y_2,\cdots,y_n)$，若 $Z\ne 0$，则 $X,Y$ 不同时为 0，不妨设 $X\ne 0$，因为 $A$ 是正定矩阵，所以 $X^{\mathrm{T}}AX>0$.
又因为 $B$ 是正定矩阵，故对任意的 $n$ 维向量 $Y$，恒有 $Y^{\mathrm{T}}BY\ge 0$. 于是
$$
Z^{\mathrm{T}}CZ=(X^{\mathrm{T}},Y^{\mathrm{T}})\begin{pmatrix}A&O\\O&B\end{pmatrix}\begin{pmatrix}X\\Y\end{pmatrix}=X^{\mathrm{T}}AX+Y^{\mathrm{T}}BY>0,
$$
即 $Z^{\mathrm{T}}CZ$ 是正定二次型，因此 $C$ 是正定矩阵.
方法 2：用正定的充分必要条件是特征值大于 0，这是证明正定时很常用的一种方法.
因为 $A$、$B$ 均为正定矩阵，由正定矩阵的性质，故 $A^{\mathrm{T}}=A$，$B^{\mathrm{T}}=B$，那么
$$
C^{\mathrm{T}}=\begin{pmatrix}A&O\\O&B\end{pmatrix}^{\mathrm{T}}=\begin{pmatrix}A^{\mathrm{T}}&O\\O&B^{\mathrm{T}}\end{pmatrix}=\begin{pmatrix}A&O\\O&B\end{pmatrix}=C,
$$
即 $C$ 是对称矩阵.
设 $A$ 的特征值是 $\lambda_1,\lambda_2,\cdots,\lambda_m$，$B$ 的特征值是 $\mu_1,\mu_2,\cdots,\mu_n$. 由 $A,B$ 均正定，知 $\lambda_i>0,\mu_j>0\ (i=1,2,\cdots,m,\ j=1,2,\cdots,n)$. 因为
$$
|\lambda E-C|=\begin{vmatrix}\lambda E_m-A&O\\O&\lambda E_n-B\end{vmatrix}=|\lambda E_m-A||\lambda E_n-B|
$$
$$
=(\lambda-\lambda_1)\cdots(\lambda-\lambda_m)(\lambda-\mu_1)\cdots(\lambda-\mu_n),
$$
于是，矩阵 $C$ 的特征值为 $\lambda_1,\lambda_2,\cdots,\lambda_m,\mu_1,\mu_2,\cdots,\mu_n$.
因为 $C$ 的特征值全大于 0，所以矩阵 $C$ 正定.`,
  source: '《1992 年数学三真题答案解析》PDF 第 12 页',
});
