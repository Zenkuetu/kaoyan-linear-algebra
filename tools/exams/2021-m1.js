// 2021 · 数学一 · 线性代数（题面取自《2021年考研数学（一）真题》，答案与解析取自《2021数学一解析》）
EXAMS.push({
  year: 2021, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['qf-inertia-index', 'qf-def'],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2+x_3)^2-(x_3-x_1)^2$ 的正惯性指数与负惯性指数依次为（　）

（A）$2,0$　（B）$1,1$　（C）$2,1$　（D）$1,2$`,
  answer: '（B）',
  analysis: String.raw`令 $A=\begin{pmatrix}0&1&1\\1&2&1\\1&1&0\end{pmatrix}$，$X=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$，则 $f=X^{\mathrm{T}}AX$。

由
$$
|\lambda E-A|=\begin{vmatrix}\lambda&-1&-1\\-1&\lambda-2&-1\\-1&-1&\lambda\end{vmatrix}=(\lambda+1)\begin{vmatrix}1&0&0\\-1&\lambda-2&-2\\-1&-1&\lambda-1\end{vmatrix}=(\lambda+1)(\lambda^2-3\lambda)=0,
$$
得 $\lambda_1=-1,\lambda_2=0,\lambda_3=3$，应选（B）。`,
  source: '《2021 数学一解析》第 1 页',
});

EXAMS.push({
  year: 2021, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['vec-inner', 'vec-schmidt'],
  question: String.raw`已知 $\alpha_1=\begin{pmatrix}1\\0\\1\end{pmatrix},\alpha_2=\begin{pmatrix}1\\2\\1\end{pmatrix},\alpha_3=\begin{pmatrix}3\\1\\2\end{pmatrix}$，$\beta_1=\alpha_1,\beta_2=\alpha_2-k\beta_1,\beta_3=\alpha_3-l_1\beta_1-l_2\beta_2$，若 $\beta_1,\beta_2,\beta_3$ 两两正交，则 $l_1,l_2$ 依次为（　）

（A）$\dfrac{5}{2},\dfrac{1}{2}$　（B）$-\dfrac{5}{2},\dfrac{1}{2}$　（C）$\dfrac{5}{2},-\dfrac{1}{2}$　（D）$-\dfrac{5}{2},-\dfrac{1}{2}$`,
  answer: '（A）',
  analysis: String.raw`由施密特正交化得
$$
l_1=\dfrac{(\alpha_3,\beta_1)}{(\beta_1,\beta_1)}=\dfrac{5}{2},\qquad l_2=\dfrac{(\alpha_3,\beta_2)}{(\beta_2,\beta_2)}=\dfrac{2}{4}=\dfrac{1}{2},
$$
应选（A）。

> 方法点评：将线性无关的向量组化为两两正交的规范向量组即施密特正交规范化，实对称矩阵的对角化的正交变换法需要将线性无关的特征向量进行正交化和单位化。设 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，$\beta_1=\alpha_1,\beta_2=\alpha_2-l_1\beta_1,\beta_3=\alpha_3-k_1\beta_1-k_2\beta_2$，且 $\beta_1,\beta_2,\beta_3$ 线性无关，则 $l_1=\dfrac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)},k_1=\dfrac{(\alpha_3,\beta_1)}{(\beta_1,\beta_1)},k_2=\dfrac{(\alpha_3,\beta_2)}{(\beta_2,\beta_2)}$。`,
  source: '《2021 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2021, subject: '数一', number: 7, kind: '选择', score: 5,
  ids: ['mat-rank-ineq', 'mat-rank-invariance'],
  question: String.raw`设 $A,B$ 为 $n$ 阶矩阵，下列结论不成立的是（　）

（A）$r\begin{pmatrix}A&O\\O&A^{\mathrm{T}}A\end{pmatrix}=2r(A)$　（B）$r\begin{pmatrix}A&AB\\O&A^{\mathrm{T}}\end{pmatrix}=2r(A)$
（C）$r\begin{pmatrix}A&BA\\O&AA^{\mathrm{T}}\end{pmatrix}=2r(A)$　（D）$r\begin{pmatrix}A&O\\BA&A^{\mathrm{T}}\end{pmatrix}=2r(A)$`,
  answer: '（C）',
  analysis: String.raw`$$
r\begin{pmatrix}A&O\\O&A^{\mathrm{T}}A\end{pmatrix}=r(A)+r(A^{\mathrm{T}}A)=2r(A);
$$
由
$$
\begin{pmatrix}A&AB\\O&A^{\mathrm{T}}\end{pmatrix}\xrightarrow{\text{列}}\begin{pmatrix}A&O\\O&A^{\mathrm{T}}\end{pmatrix}
$$
得 $r\begin{pmatrix}A&AB\\O&A^{\mathrm{T}}\end{pmatrix}=2r(A)$；由
$$
r\begin{pmatrix}A&O\\BA&A^{\mathrm{T}}\end{pmatrix}\xrightarrow{\text{行}}r\begin{pmatrix}A&O\\O&A^{\mathrm{T}}\end{pmatrix}
$$
得 $r\begin{pmatrix}A&O\\BA&A^{\mathrm{T}}\end{pmatrix}=2r(A)$，应选（C）。`,
  source: '《2021 数学一解析》第 2 页',
});

EXAMS.push({
  year: 2021, subject: '数一', number: 15, kind: '填空', score: 5,
  ids: ['det-cofactor', 'det-expansion'],
  question: String.raw`设 $A=(a_{ij})$ 为 3 阶矩阵，$A_{ij}$ 为代数余子式，若 $A$ 的每行元素之和均为 $2$，且 $|A|=3$，则 $A_{11}+A_{21}+A_{31}=\underline{\qquad}$。`,
  answer: String.raw`$\dfrac{3}{2}$`,
  analysis: String.raw`$$
|A|=2\begin{vmatrix}1&a_{12}&a_{13}\\1&a_{22}&a_{23}\\1&a_{32}&a_{33}\end{vmatrix}=2(A_{11}+A_{21}+A_{31})=3,
$$
则
$$
A_{11}+A_{21}+A_{31}=\dfrac{3}{2}.
$$`,
  source: '《2021 数学一解析》第 4 页',
});

EXAMS.push({
  year: 2021, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['qf-positive-def', 'eig-orth-diag'],
  question: String.raw`（本题满分 12 分）

已知 $A=\begin{pmatrix}a&1&-1\\1&a&-1\\-1&-1&a\end{pmatrix}$。

（Ⅰ）求正交矩阵 $P$，使得 $P^{\mathrm{T}}AP$ 为对角矩阵；

（Ⅱ）求正定矩阵 $C$，使得 $C^2=(a+3)E-A$。`,
  answer: String.raw`（Ⅰ）$P=\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{3}}\\[2mm]\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{3}}\\[2mm]0&\dfrac{2}{\sqrt{6}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}$，$P^{\mathrm{T}}AP=\begin{pmatrix}a-1&0&0\\0&a-1&0\\0&0&a+2\end{pmatrix}$；（Ⅱ）$C=\dfrac{1}{3}\begin{pmatrix}5&-1&1\\-1&5&1\\1&1&5\end{pmatrix}$`,
  analysis: String.raw`（Ⅰ）由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-a&-1&1\\-1&\lambda-a&1\\1&1&\lambda-a\end{vmatrix}
=\begin{vmatrix}\lambda-a+1&-(\lambda-a+1)&0\\-1&\lambda-a&1\\1&1&\lambda-a\end{vmatrix}
$$
$$
=(\lambda-a+1)\begin{vmatrix}1&-1&0\\-1&\lambda-a&1\\1&1&\lambda-a\end{vmatrix}
=(\lambda-a+1)\begin{vmatrix}1&0&0\\-1&\lambda-a-1&1\\1&2&\lambda-a\end{vmatrix}
=(\lambda-a+1)^2(\lambda-a-2)=0,
$$
得 $\lambda_1=\lambda_2=a-1,\lambda_3=a+2$。

由
$$
(a-1)E-A=\begin{pmatrix}-1&-1&1\\-1&-1&1\\1&1&-1\end{pmatrix}\to\begin{pmatrix}1&1&-1\\0&0&0\\0&0&0\end{pmatrix}
$$
得 $\lambda_1=\lambda_2=a-1$ 对应的线性无关的特征向量为 $\alpha_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\alpha_2=\begin{pmatrix}1\\0\\1\end{pmatrix}$；

由
$$
(a+2)E-A=\begin{pmatrix}2&-1&1\\-1&2&1\\1&1&2\end{pmatrix}\to\begin{pmatrix}1&-2&-1\\0&1&1\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $\lambda_3=a+2$ 对应的特征向量为 $\alpha_3=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$。

令
$$
\beta_1=\alpha_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\quad
\beta_2=\alpha_2-\dfrac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)}\beta_1=\begin{pmatrix}1\\0\\1\end{pmatrix}+\dfrac{1}{2}\begin{pmatrix}-1\\1\\0\end{pmatrix}=\dfrac{1}{2}\begin{pmatrix}1\\1\\2\end{pmatrix},\quad
\beta_3=\alpha_3=\begin{pmatrix}-1\\-1\\1\end{pmatrix}.
$$
再令
$$
\gamma_1=\dfrac{1}{\sqrt{2}}\begin{pmatrix}-1\\1\\0\end{pmatrix},\quad
\gamma_2=\dfrac{1}{\sqrt{6}}\begin{pmatrix}1\\1\\2\end{pmatrix},\quad
\gamma_3=\dfrac{1}{\sqrt{3}}\begin{pmatrix}-1\\-1\\1\end{pmatrix},
$$
得正交矩阵
$$
P=\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{3}}\\[2mm]\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{3}}\\[2mm]0&\dfrac{2}{\sqrt{6}}&\dfrac{1}{\sqrt{3}}\end{pmatrix},
$$
使得
$$
P^{\mathrm{T}}AP=\begin{pmatrix}a-1&0&0\\0&a-1&0\\0&0&a+2\end{pmatrix}.
$$

（Ⅱ）由 $P^{\mathrm{T}}[(a+3)E-A]P=\begin{pmatrix}4&0&0\\0&4&0\\0&0&1\end{pmatrix}$ 得
$$
(a+3)E-A=P\begin{pmatrix}4&0&0\\0&4&0\\0&0&1\end{pmatrix}P^{\mathrm{T}}=P\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}P^{\mathrm{T}}\cdot P\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}P^{\mathrm{T}},
$$
令
$$
C=P\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}P^{\mathrm{T}},
$$
$$
=\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{3}}\\[2mm]\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{3}}\\[2mm]0&\dfrac{2}{\sqrt{6}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}\begin{pmatrix}-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{2}}&0\\[2mm]\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{6}}&\dfrac{2}{\sqrt{6}}\\[2mm]-\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}
=\dfrac{1}{3}\begin{pmatrix}5&-1&1\\-1&5&1\\1&1&5\end{pmatrix}.
$$
则 $C^2=(a+3)E-A$。`,
  source: '《2021 数学一解析》第 7–8 页',
});
