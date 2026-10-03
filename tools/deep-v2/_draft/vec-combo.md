### ONELINE
β 能不能凑出来，等于矩阵方程 Ax=β 有没有解

### PAIN
**线性表示要解决的问题是：一组向量能不能凑出指定的那一个向量。**
先看具体动作。手里有三个向量
$$
\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \qquad \alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}, \qquad \beta = \begin{pmatrix} 5 \\ 2 \\ 5 \end{pmatrix}
$$
问：$\beta$ 能不能写成 $\alpha_1$ 与 $\alpha_2$ 各乘一个数再相加？最容易想到的办法是逐项配系数，凑 $k_1 \cdot 1 + k_2 \cdot 2 = 5$、$k_1 \cdot 2 + k_2 \cdot 0 = 2$、$k_1 \cdot 3 + k_2 \cdot 1 = 5$：第二个式子给出 $k_1 = 1$，代回第一个得 $k_2 = 2$，第三个 $3 + 2 = 5$ 也对上了，于是 $\beta = \alpha_1 + 2\alpha_2$。
凑得出来是运气好。把 $\beta$ 换成 $\gamma = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$，第二个式子还是给 $k_1 = 1$，第一个式子给 $k_2 = 0$，可第三个要 $3 \times 1 + 0 = 4$，怎么都对不上 —— 到底是真凑不出来，还是自己没凑对系数？手工配系数给不出保证。

### GAP
所以需要一个能一次说清的办法。土办法挨个数一遍：

- **坑一 · 手工配系数**：分量个数一多就要把一堆式子联立着看，全靠眼力凑；凑不出来时也分不清是"根本没有"还是"自己没凑到"。
- **坑二 · 只看 $\beta$ 的分量个数或数值大小**：当 $\alpha = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ 时，$\beta = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$ 能凑（$\beta = 2\alpha$），而 $\beta = \begin{pmatrix} 2 \\ 5 \end{pmatrix}$ 凑不出来；两个 $\beta$ 一样是 $2$ 个分量，光看分量多少分不出来。
- **坑三 · 把"能不能凑"和"凑法有几种"当成一件事**：$\beta = \alpha_1 + 2\alpha_2$ 是一种凑法，可要是 $\alpha_2$ 本身是 $\alpha_1$ 的倍数（比如 $\alpha_2 = 3\alpha_1$），那么 $\beta$ 一旦能凑出来就有无穷多种凑法；这两件事考试分开问，条件也不一样。

### INTRO
于是引入**线性组合**与**线性表示**：把 $k_1\alpha_1 + k_2\alpha_2 + \dots + k_s\alpha_s$ 这种"各乘一个数再相加"叫这组向量的一个线性组合；如果某个 $\beta$ 正好等于这样的一个组合，就说 $\beta$ 可由 $\alpha_1, \dots, \alpha_s$ **线性表示**。

关键在于，这件事第二章已经给了现成的算法。把 $\alpha_1, \dots, \alpha_s$ 竖着并排排成矩阵 $A = (\alpha_1, \dots, \alpha_s)$，把系数排成 $x = (k_1, \dots, k_s)^{\mathrm{T}}$。按第二章"左行右列"的乘法规则，$Ax$ 的第 $i$ 个分量是 $A$ 的第 $i$ 行乘 $x$，也就是 $a_{i1}k_1 + a_{i2}k_2 + \dots + a_{is}k_s$ —— 这正好是 $k_1\alpha_1 + \dots + k_s\alpha_s$ 的第 $i$ 个分量。所以
$$
k_1\alpha_1 + k_2\alpha_2 + \dots + k_s\alpha_s = Ax
$$
"$\beta$ 可由这组向量线性表示"就等价于"矩阵方程 $Ax = \beta$ 有解"。

上面那三个坑，逐个补上：

- **坑一补上 · 凑系数变成解矩阵方程**：把 $\beta$ 添到 $A$ 的最后一列，用第二章的行变换化成行阶梯形，"有没有解、解是多少"一次算完；上面对 $\beta$ 能化到第三行整行为零，直接读出 $k_2 = 2$、$k_1 = 1$，换成 $\gamma$ 则会化出一行矛盾式，一眼看出凑不出来。
- **坑二补上 · 有明确的判据**：能不能表示看的是 $r(A)$ 与 $r(A, \beta)$ 这两个秩（第 11 条细讲），跟 $\beta$ 有几个分量、数大不大无关。
- **坑三补上 · 两件事分开说清**："能表示"是一件事，"表示方式有几个"是另一件；$r(A) = r(A, \beta) = s$ 时唯一，$r(A) = r(A, \beta) < s$ 时无穷多，第 11 条给完整表格。

> 顺带提一句：这套说法到第四章会换上"方程有没有解、有几个解"的完整语言，两边的结论是同一批。现在不懂那套语言不影响做本点的题。

### DETAIL
**定义**：设 $\alpha_1, \dots, \alpha_s$ 是 $n$ 维向量，$k_1, \dots, k_s$ 是数，称 $k_1\alpha_1 + \dots + k_s\alpha_s$ 为这组向量的一个线性组合；若存在 $k_1, \dots, k_s$ 使
$$
\beta = k_1\alpha_1 + k_2\alpha_2 + \dots + k_s\alpha_s
$$
则称 $\beta$ 可由 $\alpha_1, \dots, \alpha_s$ 线性表示。
**与矩阵方程对上**：把 $\alpha_i$ 按列排成 $A = (\alpha_1, \dots, \alpha_s)$，$x = (k_1, \dots, k_s)^{\mathrm{T}}$，则 $k_1\alpha_1 + \dots + k_s\alpha_s = Ax$，所以"$\beta$ 可由这组向量线性表示"等价于"矩阵方程 $Ax = \beta$ 有解"。
**算例一（能表示）**：$\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$、$\beta = \begin{pmatrix} 5 \\ 2 \\ 5 \end{pmatrix}$。把 $\beta$ 添在 $A$ 的最后一列做行变换：
$$
\begin{pmatrix} 1 & 2 & 5 \\ 2 & 0 & 2 \\ 3 & 1 & 5 \end{pmatrix} \xrightarrow{\;r_2 - 2r_1\;} \begin{pmatrix} 1 & 2 & 5 \\ 0 & -4 & -8 \\ 3 & 1 & 5 \end{pmatrix} \xrightarrow{\;r_3 - 3r_1\;} \begin{pmatrix} 1 & 2 & 5 \\ 0 & -4 & -8 \\ 0 & -5 & -10 \end{pmatrix} \xrightarrow{\;r_3 - \frac{5}{4}r_2\;} \begin{pmatrix} 1 & 2 & 5 \\ 0 & -4 & -8 \\ 0 & 0 & 0 \end{pmatrix}
$$
第三行整行为零，没有矛盾式，说明有解。由第二行 $-4k_2 = -8$ 得 $k_2 = 2$，代回第一行 $k_1 + 2 \times 2 = 5$ 得 $k_1 = 1$，所以
$$
\beta = \alpha_1 + 2\alpha_2
$$
**算例二（不能表示）**：$\gamma = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$，同样添在最后一列：
$$
\begin{pmatrix} 1 & 2 & 1 \\ 2 & 0 & 2 \\ 3 & 1 & 4 \end{pmatrix} \xrightarrow{\;r_2 - 2r_1\;} \begin{pmatrix} 1 & 2 & 1 \\ 0 & -4 & 0 \\ 3 & 1 & 4 \end{pmatrix} \xrightarrow{\;r_3 - 3r_1\;} \begin{pmatrix} 1 & 2 & 1 \\ 0 & -4 & 0 \\ 0 & -5 & 1 \end{pmatrix} \xrightarrow{\;r_3 - \frac{5}{4}r_2\;} \begin{pmatrix} 1 & 2 & 1 \\ 0 & -4 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$
最后一行读出来是 $0 = 1$，矛盾，所以 $\gamma$ 不能由 $\alpha_1, \alpha_2$ 线性表示。
**算例三（表示方式不唯一）**：$\alpha_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$、$\beta = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$。式子只有 $k_1 + 2k_2 = 1$ 一条，$k_2$ 想取什么就取什么：$k_2 = 0$ 给 $k_1 = 1$，$k_2 = 1$ 给 $k_1 = -1$，$k_2 = \frac{1}{2}$ 给 $k_1 = 0$ —— 无穷多种凑法。
**常用结论**：$\beta$ 可由 $A$ 的列向量组线性表示当且仅当 $r(A) = r(A, \beta)$；零向量可由任何一组向量表示，系数全取 $0$ 就行。

### USAGE
1. 选择题：判断 $\beta$ 能否由给定向量组线性表示 —— 比较 $r(A)$ 与 $r(A, \beta)$，或者看行阶梯形里有没有矛盾行。
2. 填空题：给 $\beta = k_1\alpha_1 + k_2\alpha_2$ 反求 $k_1$ 与 $k_2$；也给含参数的 $\beta$，问参数取何值时可表示。
3. 解答题：求表示式 —— 把 $(\alpha_1, \dots, \alpha_s, \beta)$ 化成行最简形，按主元回代读出系数；接着再问唯一性、表示方式有几个。

### SELFCHECK
1. 算：$\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$、$\beta = \begin{pmatrix} 5 \\ 2 \\ 5 \end{pmatrix}$，求系数。（$\beta = \alpha_1 + 2\alpha_2$。）
2. 判断：$\gamma = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$ 能由上面两个向量表示吗？（不能，行变换后出现 $0 = 1$ 这种矛盾行。）
3. 判断："$\beta$ 能由 $\alpha$ 组表示"就是"表示方式唯一"吗？（不是；唯一还要 $\alpha$ 组本身线性无关。）
