### ONELINE
比个数、算行列式、看秩，三步判相关

### PAIN
**判定方法要解决的问题是：不回定义硬解，也能快速判出相关还是无关。**
先看具体动作。给四个 $3$ 维向量
$$
\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \qquad \alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}, \qquad \alpha_3 = \begin{pmatrix} 3 \\ 2 \\ 5 \end{pmatrix}, \qquad \alpha_4 = \begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}
$$
问：这组向量相关还是无关？最容易想到的办法是按定义设 $k_1\alpha_1 + k_2\alpha_2 + k_3\alpha_3 + k_4\alpha_4 = 0$，展开成三个等式硬解。四个未知数三个式子，硬凑也能凑出 $k_1 = 1$、$k_2 = 1$、$k_3 = -1$、$k_4 = 0$，可换成另一组向量又得从头再凑一遍。

### GAP
所以要把"解一堆式子"换成更省事的判据。土办法挨个数一遍：

- **坑一 · 一律回到定义硬解**：分量一多、向量一多，式子和未知数一起涨，算得慢还容易错；而且"解出来一组"和"解不出来"之间很容易看走眼。
- **坑二 · 只比向量个数 $s$ 与维数 $n$ 谁大**：$s > n$ 必相关是对的，可反过来"$s \le n$ 就无关"完全不成立 —— $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ 与 $\begin{pmatrix} 2 \\ 4 \end{pmatrix}$ 是 2 个 2 维向量（$s = n$）却相关；$\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ 与 $\begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}$ 是 2 个 3 维向量（$s < n$）确实无关，可换成 $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ 与 $\begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}$ 也是 2 个 3 维向量，却相关了。大小只能单向用。
- **坑三 · 不管向量有几个、怎么排，上来就凑一个方阵算行列式**：行列式只有 $s = n$ 时才有；$s \ne n$ 时硬凑方阵算的是别的对象，像上面那四个 3 维向量，$3 \times 4$ 的矩阵根本没有行列式。

### INTRO
于是按"向量个数 $s$ 与维数 $n$"分三档给判据：

- $s > n$：这组向量**一定线性相关**，不用算；
- $s = n$：把向量按列排成 $n$ 阶方阵 $A$，$\lvert A \rvert = 0$ 相关，$\lvert A \rvert \ne 0$ 无关；
- 其余情形（含 $s < n$）：把向量按列排成 $n \times s$ 矩阵 $A$，行变换数出 $r(A)$，$r(A) = s$ 无关，$r(A) < s$ 相关。

上面那三个坑，逐个补上：

- **坑一补上 · 定义里的硬解换成一个数或一个秩**：$s = n$ 时一个行列式定案，一般情形行变换数非零行，再也不用凑系数。
- **坑二补上 · 大小只当"必相关"的单向闸门**：$s > n$ 直接判相关；$s \le n$ 不能反推，还得算行列式或秩。
- **坑三补上 · 排法定死**：要判的是"一组向量"，一律**按列**排成矩阵（一列一个向量），比较的是 $r(A)$ 与向量个数 $s$；只有 $s = n$ 时它才是方阵，才有行列式可算。

### DETAIL
**判定流程**（三步按顺序走）：
1. 数出向量个数 $s$ 与维数 $n$。$s > n$ 直接判**线性相关**，收工；
2. $s = n$：把向量按列排成 $n$ 阶方阵 $A$，算 $\lvert A \rvert$。$\lvert A \rvert = 0$ 相关，$\lvert A \rvert \ne 0$ 无关；
3. 其余情形（$s < n$，或者 $s = n$ 但不想算行列式）：把向量按列排成 $n \times s$ 矩阵 $A$，行变换化成行阶梯形，数非零行的个数得 $r(A)$。$r(A) = s$ 无关，$r(A) < s$ 相关。
**算例一（$s > n$ 直接判）**：上面四个 3 维向量 $s = 4 > n = 3$，一定相关。顺手找一组系数验一验：$\alpha_3 = \alpha_1 + \alpha_2$，于是
$$
\alpha_1 + \alpha_2 - \alpha_3 + 0 \cdot \alpha_4 = 0
$$
系数 $1, 1, -1, 0$ 不全为零，确实相关（另外 $\alpha_4 = 2\alpha_1$，也能单独说明问题）。
**算例二（$s = n$ 算行列式）**：$\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$、$\alpha_3 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$，$s = n = 3$，按列排成
$$
A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 1 \\ 3 & 1 & 0 \end{pmatrix}, \qquad \lvert A \rvert = 1 \times (0 \times 0 - 1 \times 1) - 2 \times (2 \times 0 - 1 \times 3) + 0 = -1 + 6 = 5 \ne 0
$$
所以这组向量线性无关。
**算例三（一般情形算秩）**：$\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}$、$\alpha_3 = \begin{pmatrix} 3 \\ 2 \\ 5 \end{pmatrix}$，$s = n = 3$，按列排成
$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 0 & 2 \\ 3 & 2 & 5 \end{pmatrix} \xrightarrow{\;r_2 - 2r_1\;} \begin{pmatrix} 1 & 2 & 3 \\ 0 & -4 & -4 \\ 3 & 2 & 5 \end{pmatrix} \xrightarrow{\;r_3 - 3r_1\;} \begin{pmatrix} 1 & 2 & 3 \\ 0 & -4 & -4 \\ 0 & -4 & -4 \end{pmatrix} \xrightarrow{\;r_3 - r_2\;} \begin{pmatrix} 1 & 2 & 3 \\ 0 & -4 & -4 \\ 0 & 0 & 0 \end{pmatrix}
$$
非零行 2 行，$r(A) = 2 < s = 3$，这组向量线性相关（也确实有 $\alpha_3 = \alpha_1 + \alpha_2$）。
**算例四（$s < n$ 算秩）**：$\alpha_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}$，按列排成 $3 \times 2$ 矩阵
$$
A = \begin{pmatrix} 1 & 2 \\ 2 & 0 \\ 3 & 2 \end{pmatrix} \xrightarrow{\;r_2 - 2r_1\;} \begin{pmatrix} 1 & 2 \\ 0 & -4 \\ 3 & 2 \end{pmatrix} \xrightarrow{\;r_3 - 3r_1\;} \begin{pmatrix} 1 & 2 \\ 0 & -4 \\ 0 & -4 \end{pmatrix} \xrightarrow{\;r_3 - r_2\;} \begin{pmatrix} 1 & 2 \\ 0 & -4 \\ 0 & 0 \end{pmatrix}
$$
非零行 2 行，$r(A) = 2 = s$，这组向量线性无关。
**常用结论**：$s$ 个 $n$ 维向量线性无关当且仅当 $r(A) = s$；$n$ 个 $n$ 维向量线性无关当且仅当它们排成的方阵可逆（第二章的话）；任意 $n + 1$ 个 $n$ 维向量一定线性相关；线性无关组的部分组也线性无关。

### USAGE
1. 选择题：给具体向量组判相关还是无关；也给含参数的组问何时无关（$s = n$ 时就是 $\lvert A \rvert \ne 0$ 的条件）。
2. 填空题：已知 $\lvert A \rvert = 0$ 反求参数；或问"$n + 1$ 个 $n$ 维向量是否一定相关"这类结论题。
3. 解答题：用 $r(A)$ 与 $s$ 的关系说明某组向量相关或无关，行变换是第一步操作 —— 也是后面求极大无关组、求秩的通用起手式。

### SELFCHECK
1. 判断：4 个 3 维向量一定线性相关吗？（一定，$s = 4 > n = 3$。）
2. 算：$A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 1 \\ 3 & 1 & 0 \end{pmatrix}$ 的三列相关还是无关？（无关，$\lvert A \rvert = 5 \ne 0$。）
3. 判断：3 个 3 维向量一定无关吗？（不一定，$\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}, \begin{pmatrix} 3 \\ 2 \\ 5 \end{pmatrix}$ 就相关，系数 $1, 1, -1$。）
