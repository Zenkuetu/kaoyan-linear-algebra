### ONELINE
能被少数组表示，个数超过它的秩就必相关

### PAIN
**这张关系表要解决的问题是：用"谁能表示谁"判相关，而不是只比个数和维数。**
先看具体动作。(II) 是两个向量 $\beta_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$、$\beta_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$；(I) 是三个向量
$$
\alpha_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad \alpha_2 = \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix}, \qquad \alpha_3 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}
$$
而且 (I) 里每个向量都能由 (II) 表示：$\alpha_1 = \beta_1 + \beta_2$、$\alpha_2 = 2\beta_1 + 3\beta_2$、$\alpha_3 = \beta_2$。问：(I) 线性相关还是无关？最容易想到的办法是数个数比维数：(I) 是 3 个 3 维向量，$s = n = 3$，这一档什么结论都给不出 —— 可它其实是相关的，三个向量全都挤在 $\beta_1, \beta_2$ 能表示的范围里。

### GAP
所以刻度要换。土办法挨个数一遍：

- **坑一 · 只比向量个数 $s$ 与维数 $n$**：$s = n$ 时这条线索什么都给不出；真正的刻度是 $s$ 与"能表示它的那组的秩"。
- **坑二 · 把"能由别人表示"和"自己相关"当成两件不相干的事**：其实只要 (I) 能被 $r$ 个向量表示出来，(I) 的秩就不会超过 $r$；$r$ 比 $s$ 小，"白搭"就跑不掉。
- **坑三 · 把这条定理反着用**：$s$ 不超过被表示组的秩时就说 (I) 无关，推不出来。反例：(II) 还是 $\beta_1, \beta_2$（秩 $2$），(I) 换成 $\alpha_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix}$：$s = 2$ 不超过 $2$，可 (I) 明显相关（$\alpha_2 = 2\alpha_1$）。

### INTRO
于是给出这张关系表里最要紧的一条**单向定理**：若 (I) 可由 (II) 线性表示，且 (I) 中向量的个数 $s$ 大于 (II) 的秩 $r(\mathrm{II})$，则 (I) 必线性相关。更一般的样子是：**能由 (II) 表示的向量组，其秩不超过 (II) 的秩**。"以少表多，必有多余"说的就是这件事。

上面那三个坑，逐个补上：

- **坑一补上 · 刻度换对了**：比的不是 $s$ 与 $n$，而是 $s$ 与 $r(\mathrm{II})$；上面那组 $s = 3 > r(\mathrm{II}) = 2$，立刻判相关。原来那条"$s > n$ 必相关"其实是这条定理的特例 —— 任何 $n$ 维向量都能由 $n$ 维单位向量组表示，取 (II) 为单位向量组，$r(\mathrm{II}) = n$。
- **坑二补上 · "能表示"翻译成"秩受限"**：能表示就有秩不超过对方；对方的秩又小于 $s$，秩追不上向量个数，必相关。
- **坑三补上 · 方向说死**：这是单行道，只能从"个数超过对方的秩"推到"相关"。反方向不成立 —— 上面 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix}$ 相关，却也能由秩为 $2$ 的那组表示。

### DETAIL
**定理**：若向量组 (I) 可由向量组 (II) 线性表示，则
$$
r(\mathrm{I}) \le r(\mathrm{II})
$$
特别地，若 $s > r(\mathrm{II})$（$s$ 是 (I) 中向量的个数），则 (I) 一定线性相关。
**几条常用推论**：
- (I) 可由 (II) 表示，且 (I) 线性无关（此时 $r(\mathrm{I}) = s$）⇒ $s \le r(\mathrm{II})$：无关组要挤进对方的表示能力里，个数受对方的秩管着；
- (I)、(II) 都线性无关，(I) 可由 (II) 表示 ⇒ (I) 的向量个数不超过 (II) 的向量个数；
- 两组等价 ⇒ 秩相等：这条定理两个方向各用一次就得到；
- $s > n$ ⇒ 一定相关：取 (II) 为 $n$ 维单位向量组，$r(\mathrm{II}) = n$，代进定理即可。
**算例**：(II) $\beta_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \beta_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$，$r(\mathrm{II}) = 2$；(I) $\alpha_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \alpha_2 = \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix}, \alpha_3 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$，$s = 3 > 2$，所以 (I) 必相关。找一组不全为零的系数验一验：
$$
-2\alpha_1 + \alpha_2 - \alpha_3 = \begin{pmatrix} -2 \\ -2 \\ 0 \end{pmatrix} + \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$
系数 $-2, 1, -1$ 不全为零，确实是相关。
**反例（说明不能反着用）**：(I) 取 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix}$，它是相关的，$s = 2$；它照样能由秩为 $2$ 的 (II) 表示，此时 $s \le r(\mathrm{II})$ 成立。所以"个数超过对方的秩"只是相关的充分条件，不是必要条件。
**常用结论**：秩的这个不等式是本章最常用的一把刀，凡是"谁能表示谁"的题都从它下手。

### USAGE
1. 选择题：给"能表示"的条件问相关性（比较 $s$ 与 $r(\mathrm{II})$）；也问"无关组最多能被几个向量表示"。
2. 填空题：含参数的两组向量，问参数取何值时 (I) 必相关。
3. 解答题：证明题 —— "若 (I) 可由 (II) 表示且 (I) 无关，则 (I) 的向量个数不超过 (II) 的向量个数"；也用来做"以少表多必相关"的反证。

### SELFCHECK
1. 判断：$\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ 能由 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ 表示，它相关吗？（相关，$3 > r(\mathrm{II}) = 2$，且 $-2\alpha_1 + \alpha_2 - \alpha_3 = 0$。）
2. 判断：向量个数不超过对方的秩，能说明这组无关吗？（不能，$\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix}$ 就相关。）
3. 判断："$s > n$ 必相关"是不是"以少表多"的特例？（是，取 (II) 为 $n$ 维单位向量组，$r(\mathrm{II}) = n$。）
