// 1991 · 数学一 · 线性代数（题面取自《1991年考研数学（一）真题.pdf》；答案与解析取自《1991数学一解析.pdf》）
EXAMS.push({
  year: 1991, subject: '数一', number: 105, kind: '填空', score: 3, label: '填空题第 5 题',
  ids: ["mat-inv-method","mat-block"],
  question: String.raw`设 4 阶矩阵
$$
A=\begin{pmatrix}5&2&0&0\\2&1&0&0\\0&0&1&-2\\0&0&1&1\end{pmatrix},
$$
则 $A$ 的逆矩阵 $A^{-1}=$______.`,
  answer: String.raw`$$
A^{-1}=\begin{pmatrix}1&-2&0&0\\-2&5&0&0\\0&0&\dfrac{1}{3}&\dfrac{2}{3}\\0&0&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix}.
$$`,
  analysis: String.raw`令 $B=\begin{pmatrix}5&2\\2&1\end{pmatrix},C=\begin{pmatrix}1&-2\\1&1\end{pmatrix}$，则 $A^{-1}=\begin{pmatrix}B^{-1}&O\\O&C^{-1}\end{pmatrix}$，由
$$
\begin{pmatrix}5&2&1&0\\2&1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&1&-2\\2&1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&1&-2\\0&1&-2&5\end{pmatrix},
$$
得 $B^{-1}=\begin{pmatrix}1&-2\\-2&5\end{pmatrix}$；由
$$
\begin{pmatrix}1&-2&1&0\\1&1&0&1\end{pmatrix}\to\begin{pmatrix}1&-2&1&0\\0&1&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix}\to\begin{pmatrix}1&0&\dfrac{1}{3}&\dfrac{2}{3}\\0&1&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix},
$$
得 $C^{-1}=\begin{pmatrix}\dfrac{1}{3}&\dfrac{2}{3}\\-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix}$，故
$$
A^{-1}=\begin{pmatrix}1&-2&0&0\\-2&5&0&0\\0&0&\dfrac{1}{3}&\dfrac{2}{3}\\0&0&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix}.
$$`,
  source: '《1991 数学一解析.pdf》PDF 第 1–2 页',
});

EXAMS.push({
  year: 1991, subject: '数一', number: 205, kind: '选择', score: 3, label: '选择题第 5 题',
  ids: ["mat-inverse-def","mat-invertible-crit"],
  question: String.raw`设 $n$ 阶矩阵 $A,B,C$ 满足关系式 $ABC=E$，其中 $E$ 为 $n$ 阶单位矩阵，则必有（　　）.

（A）$ACB=E$　（B）$CBA=E$　（C）$BAC=E$　（D）$BCA=E$`,
  answer: String.raw`（D）.`,
  analysis: String.raw`由 $ABC=E$ 得 $BC=A^{-1}$，则 $BCA=A^{-1}A=E$，应选（D）.`,
  source: '《1991 数学一解析.pdf》PDF 第 2 页',
});

EXAMS.push({
  year: 1991, subject: '数一', number: 301, kind: '解答', score: 8, label: '第七大题',
  ids: ["vec-express-crit","vec-combo"],
  question: String.raw`设
$$
\alpha_1=(1,0,2,3),\ \alpha_2=(1,1,3,5),\ \alpha_3=(1,-1,a+2,1),\ \alpha_4=(1,2,4,a+8)
$$
及 $\beta=(1,1,b+3,5)$.

（1）$a,b$ 为何值时，$\beta$ 不可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示？
（2）$a,b$ 为何值时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 唯一线性表示？并写出该表达式.`,
  answer: String.raw`（1）当 $a=-1,b\ne 0$ 时，$\beta$ 不可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示.
（2）当 $a\ne -1$ 时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 唯一线性表示，且
$$
\beta=-\dfrac{2b}{a+1}\alpha_1+\dfrac{a+b+1}{a+1}\alpha_2+\dfrac{b}{a+1}\alpha_3+0\alpha_4.
$$`,
  analysis: String.raw`令 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=\beta$，
$$
(\alpha_1^{\mathrm{T}},\alpha_2^{\mathrm{T}},\alpha_3^{\mathrm{T}},\alpha_4^{\mathrm{T}}\vdots\beta^{\mathrm{T}})=\begin{pmatrix}1&1&1&1&1\\0&1&-1&2&1\\2&3&a+2&4&b+3\\3&5&1&a+8&5\end{pmatrix}\to\begin{pmatrix}1&1&1&1&1\\0&1&-1&2&1\\0&0&a+1&0&b\\0&0&0&a+1&0\end{pmatrix},
$$
（1）当 $a=-1,b\ne 0$ 时，因为 $r(A)\ne r(\overline{A})$，所以方程组 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=\beta$ 无解，即 $\beta$ 不可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示.

（2）当 $a\ne -1$ 时，因为 $r(A)=r(\overline{A})=4$，所以方程组 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=\beta$ 有唯一解，且 $x_1=-\dfrac{2b}{a+1},\ x_2=\dfrac{a+b+1}{a+1},\ x_3=\dfrac{b}{a+1},\ x_4=0$，故 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 唯一线性表示，且
$$
\beta=-\dfrac{2b}{a+1}\alpha_1+\dfrac{a+b+1}{a+1}\alpha_2+\dfrac{b}{a+1}\alpha_3+0\alpha_4.
$$`,
  source: '《1991 数学一解析.pdf》PDF 第 4–5 页',
});

EXAMS.push({
  year: 1991, subject: '数一', number: 401, kind: '解答', score: 6, label: '第八大题（证明题）',
  ids: ["qf-positive-crit","eig-symmetric"],
  question: String.raw`设 $A$ 为 $n$ 阶正定矩阵，$E$ 为 $n$ 阶单位矩阵，证明：$|A+E|>1$.`,
  answer: String.raw`证明见解析.`,
  analysis: String.raw`**方法一** 因为 $A$ 为正定矩阵，所以矩阵 $A$ 的特征值 $\lambda_i>0\ (i=1,2,\cdots,n)$，从而 $A+E$ 的特征值为 $\lambda_1+1,\lambda_2+1,\cdots,\lambda_n+1$，故
$$
|A+E|=(\lambda_1+1)(\lambda_2+1)\cdots(\lambda_n+1)>1.
$$

**方法二** 因为 $A$ 是 $n$ 阶正定矩阵，所以其特征值 $\lambda_i>0\ (i=1,2,\cdots,n)$，存在正交矩阵 $Q$，使得
$$
Q^{\mathrm{T}}AQ=\begin{pmatrix}\lambda_1&0&\cdots&0\\0&\lambda_2&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda_n\end{pmatrix},
$$
或
$$
A=Q\begin{pmatrix}\lambda_1&0&\cdots&0\\0&\lambda_2&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda_n\end{pmatrix}Q^{\mathrm{T}},
$$
于是
$$
A+E=Q\begin{pmatrix}\lambda_1&0&\cdots&0\\0&\lambda_2&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda_n\end{pmatrix}Q^{\mathrm{T}}+QQ^{\mathrm{T}}=Q\begin{pmatrix}\lambda_1+1&0&\cdots&0\\0&\lambda_2+1&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda_n+1\end{pmatrix}Q^{\mathrm{T}},
$$
故
$$
|A+E|=|Q|\begin{vmatrix}\lambda_1+1&0&\cdots&0\\0&\lambda_2+1&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&\lambda_n+1\end{vmatrix}|Q^{\mathrm{T}}|=(\lambda_1+1)(\lambda_2+1)\cdots(\lambda_n+1)>1.
$$`,
  source: '《1991 数学一解析.pdf》PDF 第 5 页',
});
