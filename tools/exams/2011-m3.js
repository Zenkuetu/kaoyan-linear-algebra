// 2011 · 数学三 · 线性代数（题面取自《3、2010-2022考研数学三真题》第 45–48 页的 2011 年部分；答案与解析取自《2011年数学三真题答案解析》）
EXAMS.push({
  year: 2011, subject: '数三', number: 5, kind: '选择', score: 4,
  ids: ["mat-elem-relation", "mat-elem-mat", "mat-inv-method"],
  question: String.raw`设 $A$ 为 3 阶矩阵，将 $A$ 的第 2 列加到第 1 列得矩阵 $B$，再交换 $B$ 的第 2 行与第 3 行得单位矩阵。记
$$
P_1=\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix},\quad P_2=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix},
$$
则 $A=$（　　）

（A）$P_1P_2$　　（B）$P_1^{-1}P_2$　　（C）$P_2P_1$　　（D）$P_2P_1^{-1}$`,
  answer: String.raw`（D）`,
  analysis: String.raw`由于将 $A$ 的第 2 列加到第 1 列得矩阵 $B$，故
$$
A\begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}=B,
$$
即 $AP_1=B$，$A=BP_1^{-1}$。

由于交换 $B$ 的第 2 行和第 3 行得单位矩阵，故
$$
\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}B=E,
$$
即 $P_2B=E$，故 $B=P_2^{-1}=P_2$。因此，$A=P_2P_1^{-1}$，故选（D）。`,
  source: '《2011 年数学三真题答案解析》第 2 页',
});

EXAMS.push({
  year: 2011, subject: '数三', number: 6, kind: '选择', score: 4,
  ids: ["eq-nonhomo-general", "eq-homo-nonhomo"],
  question: String.raw`设 $A$ 为 $4\times 3$ 矩阵，$\eta_1,\eta_2,\eta_3$ 是非齐次线性方程组 $Ax=\beta$ 的 3 个线性无关的解，$k_1,k_2$ 为任意常数，则 $Ax=\beta$ 的通解为（　　）

（A）$\frac{\eta_2+\eta_3}{2}+k_1(\eta_2-\eta_1)$　　（B）$\frac{\eta_2-\eta_3}{2}+k_1(\eta_2-\eta_1)$

（C）$\frac{\eta_2+\eta_3}{2}+k_1(\eta_2-\eta_1)+k_2(\eta_3-\eta_1)$　　（D）$\frac{\eta_2-\eta_3}{2}+k_1(\eta_2-\eta_1)+k_2(\eta_3-\eta_1)$`,
  answer: String.raw`（C）`,
  analysis: String.raw`由于 $\eta_1,\eta_2,\eta_3$ 是 $Ax=\beta$ 的 3 个线性无关的解，所以 $\eta_3-\eta_1$，$\eta_2-\eta_1$ 是 $Ax=0$ 的两个线性无关的解，即 $Ax=0$ 的基础解系中至少有 2 个线性无关的解，所以可排除（A）、（B）选项。

又因为
$$
A\frac{\eta_2-\eta_3}{2}=0,
$$
所以 $\frac{\eta_2-\eta_3}{2}$ 是 $Ax=0$ 的解，不是 $Ax=\beta$ 的解，故排除（D）选项，因此选（C）。

事实上，由于 $\eta_1,\eta_2,\eta_3$ 是 $Ax=\beta$ 的三个线性无关的解，所以 $\eta_2-\eta_1$，$\eta_3-\eta_1$ 是 $Ax=0$ 的两个线性无关的解，即 $Ax=0$ 的基础解系中至少有 2 个线性无关的解，亦即 $3-r(A)\ge 2$，故 $r(A)\le 1$。由于 $A\ne O$，所以 $r(A)\ge 1$，故 $r(A)=1$。这样，$Ax=0$ 的基础解系中正好有 2 个线性无关的解，由此知 $\eta_2-\eta_1$，$\eta_3-\eta_1$ 是 $Ax=0$ 的一个基础解系。

因为 $\eta_1,\eta_2,\eta_3$ 是 $Ax=\beta$ 的解，所以 $A\eta_2=\beta$，$A\eta_3=\beta$，因此
$$
A\frac{\eta_2+\eta_3}{2}=\beta,
$$
所以 $\frac{\eta_2+\eta_3}{2}$ 是 $Ax=\beta$ 的一个特解。

由非齐次线性方程组解的结构，可知 $Ax=\beta$ 的通解为
$$
\frac{\eta_2+\eta_3}{2}+k_1(\eta_2-\eta_1)+k_2(\eta_3-\eta_1).
$$`,
  source: '《2011 年数学三真题答案解析》第 2–3 页',
});

EXAMS.push({
  year: 2011, subject: '数三', number: 13, kind: '填空', score: 4,
  ids: ["qf-canonical", "eig-ops", "mat-trace"],
  question: String.raw`设二次型 $f(x_1,x_2,x_3)=x^{\mathrm{T}}Ax$ 的秩为 1，$A$ 的各行元素之和为 3，则 $f$ 在正交变换 $x=Qy$ 下的标准形为 $\underline{\qquad}$。`,
  answer: String.raw`$3y_1^2$`,
  analysis: String.raw`因为 $A$ 的各行元素之和为 3，所以
$$
A\begin{pmatrix}1\\1\\1\end{pmatrix}=3\begin{pmatrix}1\\1\\1\end{pmatrix},
$$
故 3 为矩阵 $A$ 的特征值。

由 $r(A)=1$ 知矩阵 $A$ 有两个特征值为零，从而 $\lambda_1=3$，$\lambda_2=\lambda_3=0$。

由于二次型在正交变换下标准形前面的系数即为二次型所对应矩阵的特征值，所以二次型在正交变换下的标准形为 $3y_1^2$。`,
  source: '《2011 年数学三真题答案解析》第 5 页',
});

EXAMS.push({
  year: 2011, subject: '数三', number: 20, kind: '解答', score: 11,
  ids: ["vec-express-crit", "vec-rank-table"],
  question: String.raw`（本题满分 11 分）设向量组 $\alpha_1=(1,0,1)^{\mathrm{T}}$，$\alpha_2=(0,1,1)^{\mathrm{T}}$，$\alpha_3=(1,3,5)^{\mathrm{T}}$ 不能由向量组 $\beta_1=(1,1,1)^{\mathrm{T}}$，$\beta_2=(1,2,3)^{\mathrm{T}}$，$\beta_3=(3,4,a)^{\mathrm{T}}$ 线性表示。

（Ⅰ）求 $a$ 的值；

（Ⅱ）将 $\beta_1,\beta_2,\beta_3$ 用 $\alpha_1,\alpha_2,\alpha_3$ 线性表示。`,
  answer: String.raw`（Ⅰ）$a=5$；

（Ⅱ）$\beta_1=2\alpha_1+4\alpha_2-\alpha_3$，$\beta_2=\alpha_1+2\alpha_2$，$\beta_3=5\alpha_1+10\alpha_2-2\alpha_3$。`,
  analysis: String.raw`（Ⅰ）由于 $\alpha_1,\alpha_2,\alpha_3$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表示，对 $(\beta_1,\beta_2,\beta_3,\alpha_1,\alpha_2,\alpha_3)$ 进行初等行变换：
$$
(\beta_1,\beta_2,\beta_3,\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&1&3&1&0&1\\1&2&4&0&1&3\\1&3&a&1&1&5\end{pmatrix}\to\begin{pmatrix}1&1&3&1&0&1\\0&1&1&-1&1&2\\0&2&a-3&0&1&4\end{pmatrix}\to\begin{pmatrix}1&1&3&1&0&1\\0&1&1&-1&1&2\\0&0&a-5&2&-1&0\end{pmatrix}.
$$
当 $a=5$ 时，$r(\beta_1,\beta_2,\beta_3)=2\ne r(\beta_1,\beta_2,\beta_3,\alpha_1)=3$，此时，$\alpha_1$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表示，故 $\alpha_1,\alpha_2,\alpha_3$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表示。

（Ⅱ）对 $(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)$ 进行初等行变换：
$$
(\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&0&1&1&1&3\\0&1&3&1&2&4\\1&1&5&1&3&5\end{pmatrix}\to\begin{pmatrix}1&0&1&1&1&3\\0&1&3&1&2&4\\0&1&4&0&2&2\end{pmatrix}\to\begin{pmatrix}1&0&1&1&1&3\\0&1&3&1&2&4\\0&0&1&-1&0&-2\end{pmatrix}
$$
$$
\to\begin{pmatrix}1&0&0&2&1&5\\0&1&0&4&2&10\\0&0&1&-1&0&-2\end{pmatrix}.
$$
故 $\beta_1=2\alpha_1+4\alpha_2-\alpha_3$，$\beta_2=\alpha_1+2\alpha_2$，$\beta_3=5\alpha_1+10\alpha_2-2\alpha_3$。`,
  source: '《2011 年数学三真题答案解析》第 8 页',
});

EXAMS.push({
  year: 2011, subject: '数三', number: 21, kind: '解答', score: 11,
  ids: ["eig-symmetric", "eig-property", "eig-orth-diag"],
  question: String.raw`（本题满分 11 分）设 $A$ 为 3 阶实对称矩阵，$A$ 的秩为 2，且
$$
A\begin{pmatrix}1&1\\0&0\\-1&1\end{pmatrix}=\begin{pmatrix}-1&1\\0&0\\1&1\end{pmatrix}.
$$
（Ⅰ）求 $A$ 的所有特征值与特征向量；

（Ⅱ）求矩阵 $A$。`,
  answer: String.raw`（Ⅰ）特征值为 $\lambda_1=-1$，$\lambda_2=1$，$\lambda_3=0$；对应的特征向量分别为 $k_1\alpha_1$，$k_2\alpha_2$，$k_3\alpha_3$（$k_1,k_2,k_3$ 为非零常数），其中 $\alpha_1=(1,0,-1)^{\mathrm{T}}$，$\alpha_2=(1,0,1)^{\mathrm{T}}$，$\alpha_3=(0,1,0)^{\mathrm{T}}$；

（Ⅱ）$A=\begin{pmatrix}0&0&1\\0&0&0\\1&0&0\end{pmatrix}$。`,
  analysis: String.raw`（Ⅰ）由于
$$
A\begin{pmatrix}1&1\\0&0\\-1&1\end{pmatrix}=\begin{pmatrix}-1&1\\0&0\\1&1\end{pmatrix},
$$
设 $\alpha_1=(1,0,-1)^{\mathrm{T}}$，$\alpha_2=(1,0,1)^{\mathrm{T}}$，则
$$
A(\alpha_1,\alpha_2)=(-\alpha_1,\alpha_2),
$$
即 $A\alpha_1=-\alpha_1$，$A\alpha_2=\alpha_2$，而 $\alpha_1\ne 0$，$\alpha_2\ne 0$，知 $A$ 的特征值为 $\lambda_1=-1$，$\lambda_2=1$，对应的特征向量分别为 $k_1\alpha_1\ (k_1\ne 0)$，$k_2\alpha_2\ (k_2\ne 0)$。

由于 $r(A)=2$，故 $|A|=0$，所以 $\lambda_3=0$。

由于 $A$ 是三阶实对称矩阵，故不同特征值对应的特征向量相互正交，设 $\lambda_3=0$ 对应的特征向量为 $\alpha_3=(x_1,x_2,x_3)^{\mathrm{T}}$，则
$$
\begin{cases}\alpha_1^{\mathrm{T}}\alpha_3=0,\\\alpha_2^{\mathrm{T}}\alpha_3=0,\end{cases}
$$
即
$$
\begin{cases}x_1-x_3=0,\\x_1+x_3=0.\end{cases}
$$
解此方程组，得 $\alpha_3=(0,1,0)^{\mathrm{T}}$，故 $\lambda_3=0$ 对应的特征向量为 $k_3\alpha_3\ (k_3\ne 0)$。

（Ⅱ）由于不同特征值对应的特征向量已经正交，只需单位化：
$$
\beta_1=\frac{\alpha_1}{\|\alpha_1\|}=\frac{1}{\sqrt2}(1,0,-1)^{\mathrm{T}},\quad \beta_2=\frac{\alpha_2}{\|\alpha_2\|}=\frac{1}{\sqrt2}(1,0,1)^{\mathrm{T}},\quad \beta_3=\frac{\alpha_3}{\|\alpha_3\|}=(0,1,0)^{\mathrm{T}}.
$$
令 $Q=(\beta_1,\beta_2,\beta_3)$，则
$$
Q^{\mathrm{T}}AQ=\Lambda=\begin{pmatrix}-1&&\\&1&\\&&0\end{pmatrix},\quad A=Q\Lambda Q^{\mathrm{T}}
$$
$$
=\begin{pmatrix}\frac{\sqrt2}{2}&\frac{\sqrt2}{2}&0\\0&0&1\\-\frac{\sqrt2}{2}&\frac{\sqrt2}{2}&0\end{pmatrix}\begin{pmatrix}-1&&\\&1&\\&&0\end{pmatrix}\begin{pmatrix}\frac{\sqrt2}{2}&0&-\frac{\sqrt2}{2}\\\frac{\sqrt2}{2}&0&\frac{\sqrt2}{2}\\0&1&0\end{pmatrix}=\begin{pmatrix}0&0&1\\0&0&0\\1&0&0\end{pmatrix}.
$$`,
  source: '《2011 年数学三真题答案解析》第 9–10 页',
});
