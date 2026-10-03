### ONELINE
两组能互相表示就叫等价，等价秩必相等

### PAIN
**向量组的等价要解决的问题是：两组向量的"本事"是不是一样大。**
先看具体动作。有两组向量
$$
(\mathrm{I}): \alpha_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \alpha_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}; \qquad (\mathrm{II}): \beta_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \beta_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}
$$
问：这两组的表示能力一样吗（(I) 能凑出来的向量，(II) 是不是也都凑得出来，反过来呢）？最容易想到的办法是一个一个试着表示：(I) 的两个向量能不能由 (II) 表示（两次判定），(II) 的两个能不能由 (I) 表示（又是两次），一共四次，每次都得做一遍行变换。

### GAP
所以需要一个能"一次判完"的说法。土办法挨个数一遍：

- **坑一 · 双向逐个试**：四次判定起步，组一大就是两个组向量个数的乘积那么多次；每次判定本身还得做行变换，工作量堆得很快。
- **坑二 · 用"秩相等"直接下结论**：秩相等只是必要条件。$\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ 单独一组，$\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 单独一组，两组的秩都是 $1$，可谁也不能表示谁，根本不等价。
- **坑三 · 靠"长相"判断**（向量个数一样、有公共向量、数值接近）：都不靠谱。上面 (I)(II) 的四个向量长得完全不一样，却互相能表示；反过来 $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ 与 $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 都是 1 个向量、秩都是 $1$，却不等价。

### INTRO
于是引入**向量组的等价**：设两组向量 (I) $\alpha_1, \dots, \alpha_s$ 与 (II) $\beta_1, \dots, \beta_t$，若 (I) 里每个向量都能由 (II) 线性表示，且 (II) 里每个向量都能由 (I) 线性表示，就说这两组向量等价 —— 两边的表示能力一样大。

判定不必逐个试。把 (I) 的向量按列排成矩阵 $A$、(II) 的按列排成 $B$，再记 $r(A, B)$ 为把两组向量全部并在一起排成的矩阵的秩，则 (I) 与 (II) 等价当且仅当
$$
r(A) = r(B) = r(A, B)
$$

上面那三个坑，逐个补上：

- **坑一补上 · 不用逐个试**：比较三个秩就够；上面那组 $r(A) = r(B) = r(A, B) = 2$，等价，表示式也能顺手写出来 —— $\beta_1 = \alpha_1 + \alpha_2$、$\beta_2 = \alpha_1 - \alpha_2$，反过来 $\alpha_1 = \frac{1}{2}\beta_1 + \frac{1}{2}\beta_2$、$\alpha_2 = \frac{1}{2}\beta_1 - \frac{1}{2}\beta_2$。
- **坑二补上 · 秩相等只是必要条件**：再加"并起来秩不变"这一刀就够用了。$\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ 与 $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 两个组秩都是 $1$，可并起来秩是 $2 \ne 1$，直接否掉。
- **坑三补上 · 换掉"看长相"的判断**：等价说的是"互相能表示"，跟向量个数、数值长相都无关；多带一个能被组里其他向量表示的"白搭"向量，也不影响等价。

> 顺带提一句：到第四章会看到，两个方程组"解完全一样"当且仅当它们的行向量组等价，等价这个概念到那时是主力工具。现在不懂方程组那套说法不影响做本点的题。

### DETAIL
**定义**：设 (I) 与 (II) 是两组**同维数**的向量（都取自 $\mathbb{R}^{n}$；维数不同的两组连"互相表示"这句话都写不出来）。设 (I) $\alpha_1, \dots, \alpha_s$ 与 (II) $\beta_1, \dots, \beta_t$ 是两个向量组。若 (I) 中每个向量都可由 (II) 线性表示，且 (II) 中每个向量都可由 (I) 线性表示，则称 (I) 与 (II) 等价。
**性质**：自己跟自己等价；对称 —— (I) 与 (II) 等价则 (II) 与 (I) 等价；传递 —— (I) 与 (II) 等价、(II) 与 (III) 等价，则 (I) 与 (III) 等价（把两次的表示式串起来就是一次表示）。
**判据**：把 (I)、(II) 分别按列排成 $A$、$B$，则 (I) 与 (II) 等价当且仅当
$$
r(A) = r(B) = r(A, B)
$$
**算例**：(I) $\alpha_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \alpha_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$；(II) $\beta_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \beta_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$。
$$
A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \qquad \lvert A \rvert = 1 \ne 0, \qquad \lvert B \rvert = -2 \ne 0
$$
所以 $r(A) = r(B) = 2$；把四个向量并排，前两列正好是单位向量，秩也是 $2$，即 $r(A, B) = 2$。三个秩相等，(I) 与 (II) 等价，表示式写全：
$$
\beta_1 = \alpha_1 + \alpha_2, \qquad \beta_2 = \alpha_1 - \alpha_2
$$
$$
\alpha_1 = \frac{1}{2}\beta_1 + \frac{1}{2}\beta_2, \qquad \alpha_2 = \frac{1}{2}\beta_1 - \frac{1}{2}\beta_2
$$
**秩相等不是充分条件**：(I) 只有 $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$，(II) 只有 $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$，两个组的秩都是 $1$，但并起来秩是 $2$，所以不等价 —— 实际上 $k\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 的第一个分量永远是 $0$，凑不出 $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$。
**常用结论**：等价的向量组秩一定相等；秩相等的向量组不一定等价；一个向量组与它的极大线性无关组等价（下一条）；若 (I) 可由 (II) 表示且两组秩相等，则两组等价。

### USAGE
1. 选择题：给两组向量判是否等价 —— 算 $r(A)$、$r(B)$、$r(A, B)$ 三个秩，只对上一个是不够的。
2. 填空题：含参数的向量组问参数取何值时与另一组等价。
3. 解答题：证明"等价组秩相等"（用"能表示就有秩不超过"这条，两个方向各用一次）；也常要求写出双向表示式。

### SELFCHECK
1. 判断：$\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 与 $\begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ 等价吗？（等价，能互相表示。）
2. 判断：秩相等的两组一定等价吗？（不一定，$\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ 与 $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 秩都是 $1$，却不等价。）
3. 判断：$\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 与 $\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 等价吗？（等价，多出来的向量是前两个之和，属于"白搭"的那种。）
