// 2023 · 数学二 · 线性代数（题面取自《2023年考研数学二真题》，答案与解析取自《2023 数学二解析》）
EXAMS.push({
  year: 2023, subject: '数二', number: 8, kind: '选择', score: 5,
  ids: ["mat-adjoint","mat-adj-identity","mat-block"],
  question: String.raw`设 $A,B$ 为 $n$ 阶可逆矩阵，$E$ 为 $n$ 阶单位矩阵，$M^*$ 为矩阵 $M$ 的伴随矩阵，则
$$
\begin{pmatrix}A&E\\O&B\end{pmatrix}^*=
$$

（A）$\begin{pmatrix}|A|B^*&-B^*A^*\\O&|B|A^*\end{pmatrix}$　　（B）$\begin{pmatrix}|A|B^*&-A^*B^*\\O&|B|A^*\end{pmatrix}$

（C）$\begin{pmatrix}|B|A^*&-B^*A^*\\O&|A|B^*\end{pmatrix}$　　（D）$\begin{pmatrix}|B|A^*&-A^*B^*\\O&|A|B^*\end{pmatrix}$`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解】
$$
\begin{vmatrix}A&E\\O&B\end{vmatrix}=|A|\cdot|B|,
$$
令
$$
\begin{pmatrix}A&E\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}X_{11}&X_{12}\\X_{21}&X_{22}\end{pmatrix},
$$
由
$$
\begin{pmatrix}A&E\\O&B\end{pmatrix}\begin{pmatrix}X_{11}&X_{12}\\X_{21}&X_{22}\end{pmatrix}=\begin{pmatrix}E&O\\O&E\end{pmatrix}
$$
得
$$
\begin{cases}AX_{11}+EX_{21}=E,\\AX_{12}+EX_{22}=O,\\BX_{21}=O,\\BX_{22}=E,\end{cases}
$$
解得
$$
\begin{cases}X_{11}=A^{-1},\\X_{12}=-A^{-1}B^{-1},\\X_{21}=O,\\X_{22}=B^{-1},\end{cases}
$$
则
$$
\begin{pmatrix}A&E\\O&B\end{pmatrix}^*=|A|\cdot|B|\begin{pmatrix}A^{-1}&-A^{-1}B^{-1}\\O&B^{-1}\end{pmatrix}=\begin{pmatrix}|B|A^*&-A^*B^*\\O&|A|B^*\end{pmatrix},
$$
选（D）。`,
  source: "《2023 数学二解析》第 8 页",
});

EXAMS.push({
  year: 2023, subject: '数二', number: 9, kind: '选择', score: 5,
  ids: ["qf-canonical","qf-inertia-index"],
  question: String.raw`二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_1+x_3)^2-4(x_2-x_3)^2$ 的规范形为

（A）$y_1^2+y_2^2$　　（B）$y_1^2-y_2^2$　　（C）$y_1^2+y_2^2-4y_3^2$　　（D）$y_1^2+y_2^2-y_3^2$`,
  answer: String.raw`（B）`,
  analysis: String.raw`【解】
$$
A=\begin{pmatrix}2&1&1\\1&-3&4\\1&4&-3\end{pmatrix},
$$
由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&-1\\-1&\lambda+3&-4\\-1&-4&\lambda+3\end{vmatrix}=\lambda(\lambda+7)(\lambda-3)=0
$$
得 $\lambda_1=3,\lambda_2=-7,\lambda_3=0$，故二次型的规范形为 $y_1^2-y_2^2$，选（B）。`,
  source: "《2023 数学二解析》第 8 页",
});

EXAMS.push({
  year: 2023, subject: '数二', number: 10, kind: '选择', score: 5,
  ids: ["vec-combo","vec-express-crit"],
  question: String.raw`已知向量
$$
\alpha_1=\begin{pmatrix}1\\2\\3\end{pmatrix},\quad\alpha_2=\begin{pmatrix}2\\1\\1\end{pmatrix},\quad\beta_1=\begin{pmatrix}2\\5\\9\end{pmatrix},\quad\beta_2=\begin{pmatrix}1\\0\\1\end{pmatrix}.
$$
若 $\gamma$ 既可由 $\alpha_1,\alpha_2$ 线性表示，也可由 $\beta_1,\beta_2$ 线性表示，则 $\gamma=$

（A）$k\begin{pmatrix}3\\3\\4\end{pmatrix},k\in\mathbf R$　　（B）$k\begin{pmatrix}3\\5\\10\end{pmatrix},k\in\mathbf R$

（C）$k\begin{pmatrix}-1\\1\\2\end{pmatrix},k\in\mathbf R$　　（D）$k\begin{pmatrix}1\\5\\8\end{pmatrix},k\in\mathbf R$`,
  answer: String.raw`（D）`,
  analysis: String.raw`【解】令 $\gamma=k_1\alpha_1+k_2\alpha_2=-l_1\beta_1-l_2\beta_2$，或 $k_1\alpha_1+k_2\alpha_2+l_1\beta_1+l_2\beta_2=0$，由
$$
\begin{pmatrix}1&2&2&1\\2&1&5&0\\3&1&9&1\end{pmatrix}\to\begin{pmatrix}1&2&2&1\\0&-3&1&-2\\0&1&-1&0\end{pmatrix}\to\begin{pmatrix}1&0&0&-3\\0&1&0&1\\0&0&1&1\end{pmatrix}
$$
得
$$
\begin{pmatrix}k_1\\k_2\\l_1\\l_2\end{pmatrix}=k\begin{pmatrix}3\\-1\\-1\\1\end{pmatrix}=\begin{pmatrix}3k\\-k\\-k\\k\end{pmatrix},
$$
故
$$
\gamma=3k\alpha_1-k\alpha_2=k\beta_1-k\beta_2=3k\begin{pmatrix}1\\2\\3\end{pmatrix}-k\begin{pmatrix}2\\1\\1\end{pmatrix}=k\begin{pmatrix}1\\5\\8\end{pmatrix}\ (k\in\mathbf R),
$$
选（D）。`,
  source: "《2023 数学二解析》第 9 页",
});

EXAMS.push({
  year: 2023, subject: '数二', number: 16, kind: '填空', score: 5,
  ids: ["eq-nonhomo-crit","det-expansion","eq-rank-relation"],
  question: String.raw`已知线性方程组
$$
\begin{cases}ax_1+x_3=1,\\x_1+ax_2+x_3=0,\\x_1+2x_2+ax_3=0,\\ax_1+bx_2=2\end{cases}
$$
有解，其中 $a,b$ 为常数. 若
$$
\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=4,
$$
则
$$
\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=\underline{\qquad}.
$$`,
  answer: String.raw`$8$`,
  analysis: String.raw`【解】
$$
\overline{A}=\begin{pmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{pmatrix},
$$
因为原方程组有解，所以 $r(A)=r(\overline{A})\le 3<4$，从而 $|\overline{A}|=0$，

由
$$
|\overline{A}|=\begin{vmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{vmatrix}=-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}+2\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=8-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=0
$$
得
$$
\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=8.
$$`,
  source: "《2023 数学二解析》第 10 页",
});

EXAMS.push({
  year: 2023, subject: '数二', number: 22, kind: '解答', score: 12,
  ids: ["eig-diag-method","eig-diag-crit","mat-def"],
  question: String.raw`（本题满分 12 分）设矩阵 $A$ 满足：对任意 $x_1,x_2,x_3$ 均有
$$
A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}x_1+x_2+x_3\\2x_1-x_2+x_3\\x_2-x_3\end{pmatrix}.
$$

（1）求 $A$；

（2）求可逆矩阵 $P$ 与对角矩阵 $\Lambda$，使得 $P^{-1}AP=\Lambda$.`,
  answer: String.raw`（1）$A=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}$；（2）特征值为 $-2,-1,2$，取
$$
P=\begin{pmatrix}0&-1&4\\-1&0&3\\1&2&1\end{pmatrix},\quad\Lambda=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&2\end{pmatrix},
$$
则 $P^{-1}AP=\Lambda$。`,
  analysis: String.raw`【解】（1）
$$
A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}x_1+x_2+x_3\\2x_1-x_2+x_3\\x_2-x_3\end{pmatrix}
$$
写成
$$
A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
$$
因为对任意的 $x_1,x_2,x_3$ 都成立，所以有
$$
A\begin{pmatrix}1\\0\\0\end{pmatrix}=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}\begin{pmatrix}1\\0\\0\end{pmatrix},\quad A\begin{pmatrix}0\\1\\0\end{pmatrix}=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}\begin{pmatrix}0\\1\\0\end{pmatrix},\quad A\begin{pmatrix}0\\0\\1\end{pmatrix}=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}\begin{pmatrix}0\\0\\1\end{pmatrix},
$$
于是有
$$
A\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},
$$
故 $A=\begin{pmatrix}1&1&1\\2&-1&1\\0&1&-1\end{pmatrix}$.

（2）由
$$
|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&-1\\-2&\lambda+1&-1\\0&-1&\lambda+1\end{vmatrix}=(\lambda+2)(\lambda+1)(\lambda-2)=0
$$
得 $\lambda_1=-2,\lambda_2=-1,\lambda_3=2$；

由
$$
2E+A=\begin{pmatrix}3&1&1\\2&1&1\\0&1&1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&1\\0&0&0\end{pmatrix}
$$
得 $\alpha_1=\begin{pmatrix}0\\-1\\1\end{pmatrix}$；

由
$$
E+A=\begin{pmatrix}2&1&1\\2&0&1\\0&1&0\end{pmatrix}\to\begin{pmatrix}1&0&\frac12\\0&1&0\\0&0&0\end{pmatrix}
$$
得 $\alpha_2=\begin{pmatrix}-1\\0\\2\end{pmatrix}$；

由
$$
2E-A=\begin{pmatrix}1&-1&-1\\-2&3&-1\\0&-1&3\end{pmatrix}\to\begin{pmatrix}1&0&-4\\0&1&-3\\0&0&0\end{pmatrix}
$$
得 $\alpha_3=\begin{pmatrix}4\\3\\1\end{pmatrix}$，

令
$$
P=\begin{pmatrix}0&-1&4\\-1&0&3\\1&2&1\end{pmatrix},\quad\Lambda=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&2\end{pmatrix},
$$
则 $P^{-1}AP=\Lambda$.`,
  source: "《2023 数学二解析》第 13–14 页",
});

