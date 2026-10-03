### ONELINE
比较两个秩与向量个数，定唯一还是无穷多

### PAIN
**判定定理要解决的问题是：给一个 $\beta$ 和一组 $\alpha$，一次说清"能不能表示"和"表示方式有几种"。**
先看具体动作。$\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$，问
$$
\beta = \begin{pmatrix} 5 \\ 2 \\ 5 \end{pmatrix}, \qquad \gamma = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}
$$
这两个向量各能不能由 $\alpha_1, \alpha_2$ 表示？如果能，表示方式唯一还是有无穷多种？最容易想到的办法是手工解系数：$\beta$ 解出 $k_1 = 1$、$k_2 = 2$；$\gamma$ 第三个式子对不上。可"解出一组系数"跟"只有这一组系数"是两件事，手工解根本看不出来。

### GAP
所以要有分档的判据。土办法挨个数一遍：

- **坑一 · 手工解方程数解的个数**：解出一组就当唯一；而"无穷多种"的情形手工往往只碰得到一两组，看不见全貌。
- **坑二 · 只看 $r(A) = r(A, \beta)$ 就宣布"表示唯一"**：这只说明**能**表示，说明不了唯一。反例：$\alpha_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$、$\beta = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ —— $\beta = 1 \cdot \alpha_1 + 0 \cdot \alpha_2$，也可以写成 $\beta = 0 \cdot \alpha_1 + \frac{1}{2}\alpha_2$，还可以写成 $\beta = -1 \cdot \alpha_1 + 1 \cdot \alpha_2$，$r(A) = r(A, \beta) = 1$ 成立，表示却有无穷多种。
- **坑三 · 靠"组里向量个数多不多"猜唯一性**：$\alpha_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \alpha_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \alpha_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ 一共 3 个向量，表示 $\beta = \begin{pmatrix} 2 \\ 3 \\ 4 \end{pmatrix}$ 仍然唯一。个数多少不是判据。

### INTRO
于是引入**线性表出的判定定理**：把 (I) $\alpha_1, \dots, \alpha_s$ 按列排成矩阵 $A$，把 $\beta$ 添在最后一列得到 $(A, \beta)$，比较 $r(A)$、$r(A, \beta)$ 与向量个数 $s$ 这三个数：

- $r(A) < r(A, \beta)$（添上 $\beta$ 秩变大了）：$\beta$ **不能**由 (I) 线性表示；
- $r(A) = r(A, \beta) = s$（(I) 线性无关）：$\beta$ 能由 (I) 表示，且**表示方式唯一**；
- $r(A) = r(A, \beta) < s$（(I) 线性相关）：$\beta$ 能由 (I) 表示，且**有无穷多种**表示方式。

实际操作只要一次行变换：把 $(A, \beta)$ 化成行阶梯形，看有没有矛盾行（前面全是 $0$、最后一列不是 $0$ 的那种行），再数一数秩。

上面那三个坑，逐个补上：

- **坑一补上 · 解的个数有了判据**：秩和向量个数两个数一比较，"不能表示 / 唯一 / 无穷多"三档全定，不用靠手气。
- **坑二补上 · 唯一性的前提写全**：不只 $r(A) = r(A, \beta)$，还得 $r(A) = s$（也就是 (I) 线性无关）才能说唯一。
- **坑三补上 · 不再靠个数猜**：拿 $s$ 与 $r(A)$ 比，$r(A) < s$ 就说明组里有白搭的向量，每白搭一个就多一族表示。

> 顺带提一句：$\beta$ 不能表示时那行矛盾式，到第四章会叫"无解"；能表示且不唯一时会叫"有无穷多解"。术语换了，判断方法一模一样，现在不懂不影响做题。

### DETAIL
**三种情形**（$A$ 是 (I) 按列排成的矩阵，$s$ 是 (I) 中向量的个数）：
1. $r(A) < r(A, \beta)$：$\beta$ 不能由 (I) 线性表示；
2. $r(A) = r(A, \beta) = s$：能表示，且表示唯一；
3. $r(A) = r(A, \beta) < s$：能表示，且有无穷多种表示。
注意 $r(A) \le r(A, \beta) \le r(A) + 1$（$\beta$ 只添了一列），所以第一种情形里的"小于"其实就是"差 $1$"。
**算例一（唯一表示）**：$\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$、$\beta = \begin{pmatrix} 5 \\ 2 \\ 5 \end{pmatrix}$。
$$
(A, \beta) = \begin{pmatrix} 1 & 2 & 5 \\ 2 & 0 & 2 \\ 3 & 1 & 5 \end{pmatrix} \xrightarrow{\;r_2 - 2r_1\;} \begin{pmatrix} 1 & 2 & 5 \\ 0 & -4 & -8 \\ 3 & 1 & 5 \end{pmatrix} \xrightarrow{\;r_3 - 3r_1\;} \begin{pmatrix} 1 & 2 & 5 \\ 0 & -4 & -8 \\ 0 & -5 & -10 \end{pmatrix} \xrightarrow{\;r_3 - \frac{5}{4}r_2\;} \begin{pmatrix} 1 & 2 & 5 \\ 0 & -4 & -8 \\ 0 & 0 & 0 \end{pmatrix}
$$
没有矛盾行，$r(A) = r(A, \beta) = 2 = s$，属于第二种：能表示且唯一。回代：$-4k_2 = -8$ 给 $k_2 = 2$，$k_1 + 2 \times 2 = 5$ 给 $k_1 = 1$，即 $\beta = \alpha_1 + 2\alpha_2$。
**算例二（不能表示）**：$\gamma = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$。
$$
(A, \gamma) = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 0 & 2 \\ 3 & 1 & 4 \end{pmatrix} \xrightarrow{\;r_2 - 2r_1\;} \begin{pmatrix} 1 & 2 & 1 \\ 0 & -4 & 0 \\ 3 & 1 & 4 \end{pmatrix} \xrightarrow{\;r_3 - 3r_1\;} \begin{pmatrix} 1 & 2 & 1 \\ 0 & -4 & 0 \\ 0 & -5 & 1 \end{pmatrix} \xrightarrow{\;r_3 - \frac{5}{4}r_2\;} \begin{pmatrix} 1 & 2 & 1 \\ 0 & -4 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$
第三行读出来是"前两个系数都是 $0$，右边却是 $1$"，矛盾；$r(A) = 2 < r(A, \gamma) = 3$，属于第一种：不能表示。
**算例三（无穷多种）**：$\alpha_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$、$\beta = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$。此时 $r(A) = r(A, \beta) = 1$，而 $s = 2 > 1$，属于第三种：能表示且有无穷多种。写出来就是 $k_1 + 2k_2 = 1$，$k_2$ 取什么值都行，每一组 $(k_1, k_2) = (1 - 2k_2, k_2)$ 都是一种表示。
**常用结论**：(I) 线性无关时，$\beta$ 只要能由 (I) 表示，表示方式必唯一；(I) 线性相关时，只要 $\beta$ 能表示就有无穷多种；$s$ 比 $r(A)$ 多几个，就有几个可以随便取的数。

### USAGE
1. 选择题：给 $\beta$ 和一组 $\alpha$，问"能否表示""表示是否唯一" —— 比较 $r(A)$、$r(A, \beta)$、$s$ 三个数。
2. 填空题：含参数的 $\beta$，问参数取何值时不能表示、唯一表示、有无穷多表示（找让秩跳变的参数值）。
3. 解答题：求表示式并判断唯一性；无穷多种时写出带参数的表示式（把主元对应的系数用那个**可以随便取**的系数表示出来）。

### SELFCHECK
1. 判断：$\beta = \begin{pmatrix} 5 \\ 2 \\ 5 \end{pmatrix}$ 能由 $\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$ 唯一表示吗？（能，$r(A) = r(A, \beta) = 2 = s$，$\beta = \alpha_1 + 2\alpha_2$。）
2. 判断：$r(A) = r(A, \beta)$ 就说明表示唯一吗？（不一定，还得 $r(A) = s$；否则有无穷多种。）
3. 判断：$\gamma = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$ 能由上面那两个向量表示吗？（不能，$r(A, \gamma) = 3 > r(A) = 2$。）
