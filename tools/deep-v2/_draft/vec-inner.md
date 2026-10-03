### ONELINE
内积是一个数，开方是长度，等于零就正交

### PAIN
**内积要解决的问题是：用算出来的一个数说清两个向量"正不正、有多长"。**
先看具体动作。给两个 $3$ 维向量
$$
\alpha = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \qquad \beta = \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}
$$
问：它们垂不垂直？顺便再问 $\alpha$ 有多长？最容易想到的办法是逐项比对：$\alpha$ 的三个分量都是 $1$，$\beta$ 是 $1, -2, 1$，看得出一项一样、一项符号不同、一项不一样 —— 可"有几项一样"跟"垂不垂直"到底什么关系，说不出来；想靠画图，三维勉强能画，四维以上连图都没有。

### GAP
所以得有一个能算的量。土办法挨个数一遍：

- **坑一 · 逐项相减看"差多少"**：$\alpha - \beta = \begin{pmatrix} 0 \\ 3 \\ 0 \end{pmatrix}$，这是三个数，不是一个数；两组向量之间"谁更像谁"照样没法比较大小。
- **坑二 · 画图量夹角**：三维以内还能硬画，$n \ge 4$ 就没图可画；就算画出来也只是目测，卷面上写不出依据。
- **坑三 · 拿"对应位置相乘"当乘法**：$\alpha$ 与 $\beta$ 对应位置相乘得 $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$，仍然是三个数，判不了垂直；而且 $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ 与 $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$ 这么乘，第二章的矩阵乘法里根本没有这条规则。

### INTRO
于是引入**内积**：把 $\alpha^{\mathrm{T}}\beta$（第二章里那个 $1 \times 1$ 矩阵）读成一个数，就称它是 $\alpha$ 与 $\beta$ 的内积，记作 $(\alpha, \beta)$；内积开平方给出长度 $\lVert\alpha\rVert = \sqrt{(\alpha, \alpha)}$；内积等于 $0$ 就说两个向量**正交**（也就是垂直）。

上面那三个坑，逐个补上：

- **坑一补上 · "像不像"压缩成一个数**：$(\alpha, \beta) = 1 \times 1 + 1 \times (-2) + 1 \times 1 = 0$，一个数就把垂直说死了；换个向量 $\gamma = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$，$(\alpha, \gamma) = 1 + 0 + 1 = 2 \ne 0$，不垂直，一眼分明。
- **坑二补上 · 不画图也能算夹角**：$\cos\theta = \frac{(\alpha, \beta)}{\lVert\alpha\rVert \lVert\beta\rVert}$，四个数一除就出结果；$\alpha$ 与 $\beta$ 的 $\cos\theta = 0$，正好是直角。
- **坑三补上 · 乘法的写法定死**：向量之间"乘成一个数"只有一条路 —— 前一个转置成行，$(\alpha, \beta) = \alpha^{\mathrm{T}}\beta$；不转置的 $\alpha\beta$ 永远不合法，$\alpha\beta^{\mathrm{T}}$ 则是另一回事（得到一张表，后面有用）。

> 顺带提一句：到第五章会知道，实对称矩阵不同特征值对应的特征向量天然两两正交，"正交"这个词会被反复用上。现在不懂特征值不影响做本点的题。

### DETAIL
**定义**：设 $\alpha = (a_1, a_2, \dots, a_n)^{\mathrm{T}}$、$\beta = (b_1, b_2, \dots, b_n)^{\mathrm{T}}$ 是实向量，称
$$
(\alpha, \beta) = \alpha^{\mathrm{T}}\beta = a_1b_1 + a_2b_2 + \dots + a_nb_n
$$
为 $\alpha$ 与 $\beta$ 的内积；$\lVert\alpha\rVert = \sqrt{(\alpha, \alpha)}$ 叫 $\alpha$ 的长度；$(\alpha, \beta) = 0$ 时称 $\alpha$ 与 $\beta$ 正交，记 $\alpha \perp \beta$。
**算例**：$\alpha = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\beta = \begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix}$，则
$$
(\alpha, \beta) = 1 \times 2 + 2 \times 0 + 3 \times (-1) = -1, \qquad (\beta, \alpha) = -1
$$
$$
\lVert\alpha\rVert = \sqrt{1 + 4 + 9} = \sqrt{14}, \qquad \lVert\beta\rVert = \sqrt{4 + 0 + 1} = \sqrt{5}, \qquad \cos\theta = \frac{-1}{\sqrt{70}}
$$
内积是负数，说明夹角是钝角；同时 $\lvert(\alpha, \beta)\rvert = 1$ 远小于 $\lVert\alpha\rVert \lVert\beta\rVert = \sqrt{70} \approx 8.37$，柯西不等式在这里成立。
**性质**（都在实向量里说）：
- $(\alpha, \beta) = (\beta, \alpha)$；
- $(k\alpha, \beta) = k(\alpha, \beta)$，$(\alpha + \beta, \gamma) = (\alpha, \gamma) + (\beta, \gamma)$；
- $(\alpha, \alpha) \ge 0$，且 $(\alpha, \alpha) = 0$ 当且仅当 $\alpha = 0$ —— 这一条叫正定性，靠的是实数平方和非负，所以内积这一套要求实向量；
- 柯西不等式：$(\alpha, \beta)^2 \le (\alpha, \alpha)(\beta, \beta)$，也就是 $\lvert(\alpha, \beta)\rvert \le \lVert\alpha\rVert \lVert\beta\rVert$，等号当且仅当两个向量成比例。
**单位化**：$\alpha \ne 0$ 时 $\frac{1}{\lVert\alpha\rVert}\alpha$ 的长度是 $1$。例如 $\alpha = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$，$\lVert\alpha\rVert = \sqrt{1 + 4 + 4} = 3$，单位化得 $\frac{1}{3}\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$。
**勾股公式**：$\alpha \perp \beta$ 时 $\lVert\alpha + \beta\rVert^2 = \lVert\alpha\rVert^2 + \lVert\beta\rVert^2$。拿 $\alpha = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$、$\beta = \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$ 验一遍：$\alpha + \beta = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$，$\lVert\alpha + \beta\rVert^2 = 4 + 1 + 4 = 9$，而 $\lVert\alpha\rVert^2 + \lVert\beta\rVert^2 = 3 + 6 = 9$，对得上。
**常用结论**：两两正交的非零向量组线性无关（"线性无关"四个字按第 4 条的定义读，现在不懂不影响看懂下面的推法）：设 $k_1\alpha_1 + \dots + k_s\alpha_s = 0$，两边与 $\alpha_i$ 做内积得 $k_i(\alpha_i, \alpha_i) = 0$，而 $(\alpha_i, \alpha_i) > 0$，只好 $k_i = 0$。另外零向量与任何向量都正交，但零向量不能放进"正交组"里用上面这条结论。

### USAGE
1. 选择题：判断给定向量是否正交，或问"$\lambda$ 取何值时 $\alpha$ 与 $\beta$ 正交"（令 $(\alpha, \beta) = 0$ 解出 $\lambda$）。
2. 填空题：求内积、长度、夹角余弦、单位向量；也给 $(\alpha, \beta) = 0$ 这个条件反求某个分量。
3. 解答题：证明内积的性质、柯西不等式、正交组的线性无关；到了求正交矩阵那一步，本点是必备工具。

### SELFCHECK
1. 算：$\alpha = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$、$\beta = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$，求 $(\alpha, \beta)$、$\lVert\alpha\rVert$、$\lVert\beta\rVert$。（$(\alpha, \beta) = 2 + 2 - 4 = 0$，两个长度都是 $3$。）
2. 判断：零向量与任何向量都正交吗？（是，内积恒为 $0$；但零向量不能放进正交组去谈线性无关。）
3. 判断：$\alpha \perp \beta$ 时 $\lVert\alpha + \beta\rVert^2 = \lVert\alpha\rVert^2 + \lVert\beta\rVert^2$ 成立吗？（成立，就是勾股公式。）
