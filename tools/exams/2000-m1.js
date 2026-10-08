// 2000 · 数学一 · 线性代数（题面取自《2000年考研数学（一）真题》，答案与解析取自《2000数学一解析》；本卷填空/选择各自编号，故 number 用大类号×100+小题号并加 label）
EXAMS.push({
  year: 2000, subject: '数一', number: 104, kind: '填空', score: 3, label: '填空题第 4 题',
  ids: ['eq-nonhomo-crit', 'eq-rank-relation', 'det-roots'],
  question: String.raw`已知方程组 $\begin{pmatrix}1&2&1\\2&3&a+2\\1&a&-2\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\3\\0\end{pmatrix}$ 无解，则 $a=\underline{\qquad}$．`,
  answer: String.raw`$-1$`,
  analysis: String.raw`（4）【答案】 $-1$．

【解】 因为原方程组无解，所以 $r(A)<r(\overline{A})$，而 $r(\overline{A})\le 3$，所以 $r(A)<3$．

于是 $|A|=0$，解得 $a=-1$ 或 $a=3$．
$$
\text{当 }a=3\text{ 时，由 }\overline{A}=\begin{pmatrix}1&2&1&\mid&1\\2&3&5&\mid&3\\1&3&-2&\mid&0\end{pmatrix}\to\begin{pmatrix}1&2&1&\mid&1\\0&-1&3&\mid&1\\0&1&-3&\mid&-1\end{pmatrix}\to\begin{pmatrix}1&2&1&\mid&1\\0&-1&3&\mid&1\\0&0&0&\mid&0\end{pmatrix},
$$
得 $r(A)=r(\overline{A})=2$，原方程组有无数个解，所以 $a\ne 3$，故 $a=-1$．`,
  source: '《2000 年数学（一）真题解析》第 1 页',
});

EXAMS.push({
  year: 2000, subject: '数一', number: 204, kind: '选择', score: 3, label: '选择题第 4 题',
  ids: ['mat-equiv', 'vec-rank-vs-mat', 'vec-rank-def'],
  question: String.raw`设 $n$ 维列向量组 $\alpha_1,\cdots,\alpha_m$（$m<n$）线性无关，则 $n$ 维列向量组 $\beta_1,\cdots,\beta_m$ 线性无关的充分必要条件为（　　）

（A）向量组 $\alpha_1,\cdots,\alpha_m$ 可由向量组 $\beta_1,\cdots,\beta_m$ 线性表示．
（B）向量组 $\beta_1,\cdots,\beta_m$ 可由向量组 $\alpha_1,\cdots,\alpha_m$ 线性表示．
（C）向量组 $\alpha_1,\cdots,\alpha_m$ 与向量组 $\beta_1,\cdots,\beta_m$ 等价．
（D）矩阵 $A=(\alpha_1,\cdots,\alpha_m)$ 与矩阵 $B=(\beta_1,\cdots,\beta_m)$ 等价．`,
  answer: String.raw`（D）`,
  analysis: String.raw`（9）【答案】 （D）．

【解】 令 $A=(\alpha_1,\alpha_2,\cdots,\alpha_m)$，$B=(\beta_1,\beta_2,\cdots,\beta_m)$．

由 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 线性无关，得 $r(A)=m$．

若 $\beta_1,\beta_2,\cdots,\beta_m$ 线性无关，则 $r(B)=m$，因为 $r(A)=r(B)=m$，所以矩阵 $A,B$ 等价；

反之，若矩阵 $A,B$ 等价，则 $r(A)=r(B)$，因为 $r(A)=m$，所以 $r(B)=m$，又因为矩阵的秩与矩阵列向量组的秩相等，所以 $\beta_1,\beta_2,\cdots,\beta_m$ 的秩为 $m$，即 $\beta_1,\beta_2,\cdots,\beta_m$ 线性无关，应选（D）．`,
  source: '《2000 年数学（一）真题解析》第 3 页',
});

EXAMS.push({
  year: 2000, subject: '数一', number: 310, kind: '解答', score: 6, label: '解答题第 10 题',
  ids: ['mat-adj-identity', 'mat-eq-solve', 'mat-inv-method'],
  question: String.raw`（本题满分 6 分）设矩阵 $A$ 的伴随矩阵 $A^{*}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&-3&0&8\end{pmatrix}$，且 $ABA^{-1}=BA^{-1}+3E$，其中 $E$ 为 4 阶单位矩阵，求矩阵 $B$．`,
  answer: String.raw`$B=\begin{pmatrix}6&0&0&0\\0&6&0&0\\6&0&6&0\\0&3&0&-1\end{pmatrix}$`,
  analysis: String.raw`（18）【解】 $|A^{*}|=8$，由 $|A^{*}|=|A|^3$，得 $|A|=2$．

由 $ABA^{-1}=BA^{-1}+3E$，得 $AB=B+3A$，解得 $(A-E)B=3A$．

于是 $B=3(A-E)^{-1}A=3[A^{-1}(A-E)]^{-1}=6(2E-2A^{-1})^{-1}=6(2E-A^{*})^{-1}$，
$$
\text{因为 }2E-A^{*}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\-1&0&1&0\\0&3&0&-6\end{pmatrix},\text{所以 }(2E-A^{*})^{-1}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&\dfrac{1}{2}&0&-\dfrac{1}{6}\end{pmatrix},
$$
$$
\text{于是 }B=\begin{pmatrix}6&0&0&0\\0&6&0&0\\6&0&6&0\\0&3&0&-1\end{pmatrix}.
$$`,
  source: '《2000 年数学（一）真题解析》第 6 页',
});

EXAMS.push({
  year: 2000, subject: '数一', number: 311, kind: '解答', score: 8, label: '解答题第 11 题',
  ids: ['eig-power-app', 'eig-diag-method', 'eig-def'],
  question: String.raw`（本题满分 8 分）某试验性生产线每年一月份进行熟练工与非熟练工的人数统计，然后将 $\dfrac{1}{6}$ 熟练工支援其他生产部门，其缺额由招收新的非熟练工补齐．新、老非熟练工经过培训及实践至年终考核有 $\dfrac{2}{5}$ 成为熟练工．设第 $n$ 年一月份统计的熟练工和非熟练工所占百分比分别为 $x_n$ 和 $y_n$，记成向量 $\begin{pmatrix}x_n\\y_n\end{pmatrix}$．

（1）求 $\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}$ 与 $\begin{pmatrix}x_n\\y_n\end{pmatrix}$ 的关系式并写成矩阵形式：$\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A\begin{pmatrix}x_n\\y_n\end{pmatrix}$；

（2）验证 $\eta_1=\begin{pmatrix}4\\1\end{pmatrix}$，$\eta_2=\begin{pmatrix}-1\\1\end{pmatrix}$ 是 $A$ 的两个线性无关的特征向量，并求出相应的特征值；

（3）当 $\begin{pmatrix}x_1\\y_1\end{pmatrix}=\begin{pmatrix}\dfrac{1}{2}\\\dfrac{1}{2}\end{pmatrix}$ 时，求 $\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}$．`,
  answer: String.raw`（1）$\begin{cases}x_{n+1}=\dfrac{9}{10}x_n+\dfrac{2}{5}y_n,\\y_{n+1}=\dfrac{1}{10}x_n+\dfrac{3}{5}y_n,\end{cases}$ 即 $A=\begin{pmatrix}\dfrac{9}{10}&\dfrac{2}{5}\\\dfrac{1}{10}&\dfrac{3}{5}\end{pmatrix}$；（2）$\eta_1,\eta_2$ 线性无关；$\eta_1$ 为 $A$ 的属于特征值 $\lambda_1=1$ 的特征向量，$\eta_2$ 为 $A$ 的属于特征值 $\lambda_2=\dfrac{1}{2}$ 的特征向量；（3）$\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=\dfrac{1}{10}\begin{pmatrix}8-\dfrac{3}{2^n}\\2+\dfrac{3}{2^n}\end{pmatrix}$．`,
  analysis: String.raw`（19）【解】 （Ⅰ）由题意得
$$
\begin{cases}x_{n+1}=\dfrac{5}{6}x_n+\dfrac{2}{5}\left(\dfrac{1}{6}x_n+y_n\right),\\y_{n+1}=\dfrac{3}{5}\left(\dfrac{1}{6}x_n+y_n\right),\end{cases}\text{整理得}\begin{cases}x_{n+1}=\dfrac{9}{10}x_n+\dfrac{2}{5}y_n,\\y_{n+1}=\dfrac{1}{10}x_n+\dfrac{3}{5}y_n.\end{cases}
$$
$$
\text{令 }A=\begin{pmatrix}\dfrac{9}{10}&\dfrac{2}{5}\\\dfrac{1}{10}&\dfrac{3}{5}\end{pmatrix},\text{则}\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A\begin{pmatrix}x_n\\y_n\end{pmatrix}.
$$

（Ⅱ）令 $P=(\eta_1,\eta_2)=\begin{pmatrix}4&-1\\1&1\end{pmatrix}$，因为 $\eta_1,\eta_2$ 不成比例，所以 $\eta_1,\eta_2$ 线性无关．

由 $A\eta_1=\eta_1$，得 $\eta_1$ 为 $A$ 的属于特征值 $\lambda_1=1$ 的特征向量；

由 $A\eta_2=\dfrac{1}{2}\eta_2$，得 $\eta_2$ 为 $A$ 的属于特征值 $\lambda_2=\dfrac{1}{2}$ 的特征向量．

（Ⅲ）$\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A\begin{pmatrix}x_n\\y_n\end{pmatrix}=A^2\begin{pmatrix}x_{n-1}\\y_{n-1}\end{pmatrix}=\cdots=A^n\begin{pmatrix}x_1\\y_1\end{pmatrix}$，
$$
\text{由 }P^{-1}AP=\begin{pmatrix}1&0\\0&\dfrac{1}{2}\end{pmatrix},\text{得 }A=P\begin{pmatrix}1&0\\0&\dfrac{1}{2}\end{pmatrix}P^{-1},\text{于是 }A^n=P\begin{pmatrix}1&0\\0&\dfrac{1}{2^n}\end{pmatrix}P^{-1},
$$
$$
\text{而 }P^{-1}=\dfrac{1}{5}\begin{pmatrix}1&1\\-1&4\end{pmatrix},\text{因此 }A^n=P\begin{pmatrix}1&0\\0&\dfrac{1}{2^n}\end{pmatrix}P^{-1}=\dfrac{1}{5}\begin{pmatrix}4+\dfrac{1}{2^n}&4-\dfrac{1}{2^{n-2}}\\1-\dfrac{1}{2^n}&1+\dfrac{1}{2^{n-2}}\end{pmatrix},
$$
$$
\text{故}\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A^n\cdot\dfrac{1}{2}\begin{pmatrix}1\\1\end{pmatrix}=\dfrac{1}{10}\begin{pmatrix}8-\dfrac{3}{2^n}\\2+\dfrac{3}{2^n}\end{pmatrix}.
$$`,
  source: '《2000 年数学（一）真题解析》第 6–7 页',
});

