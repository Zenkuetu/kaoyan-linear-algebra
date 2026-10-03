### ONELINE
三类初等矩阵的行列式：$-1$、$k$、$1$

### PAIN
用行变换算行列式是常规操作，比如

$$
\lvert A \rvert = \begin{vmatrix} 2 & 3 \\ 4 & 5 \end{vmatrix} \;\longrightarrow\; \begin{vmatrix} 2 & 3 \\ 0 & -1 \end{vmatrix} = 2 \times (-1) = -2
$$

和直接算 $2 \times 5 - 3 \times 4 = -2$ 一致。
可心里得一直悬着几个问号：交换两行要不要变号？某一行乘了 $2$ 最后要不要除回去？倍加会不会悄悄改变行列式？
这些真不是小事——搞错一个，大题最后一步直接报废。

### GAP
只有 $\lvert EA \rvert = \lvert E \rvert \cdot \lvert A \rvert$ 这一句还不够，三个坑等着填：
- **坑一 · 三个数没交代**：它只说“乘初等矩阵等于乘它的行列式”，可每个初等矩阵的行列式是几，并没有交代；
- **坑二 · 靠感觉记会记错**：光靠感觉记“倍加不变、换行变号、倍乘提出来”，一紧张就会把倍加也算上一个系数；
- **坑三 · 两个 $k$ 最容易混**：而且 $\lvert kA \rvert = k^n \lvert A \rvert$（整个矩阵乘 $k$）和“某一行乘 $k$”长得太像，最容易混。

### INTRO
于是把三类初等矩阵的行列式**当场算出来**，对应关系就闭环了：换行的 $\lvert E \rvert = -1$（换行变号），倍乘的 $\lvert E \rvert = k$（倍乘提出 $k$），倍加的 $\lvert E \rvert = 1$（倍加不变）。
上面那三个坑，逐个补上：
- **坑一补上 · 三个数当面算出来**：换行 $-1$、倍乘 $k$、倍加 $1$，$\lvert E \rvert$ 各是几不用再猜；
- **坑二补上 · 感觉换成公式**：$\lvert EA \rvert = \lvert E \rvert \cdot \lvert A \rvert$ 把“凭感觉记”变成三条明确的对应，倍加不会再被加上一个系数；
- **坑三补上 · 两个 $k$ 分开记**：倍乘是“某一行乘 $k$”提出一个 $k$，$\lvert E \rvert = k$；整个矩阵乘 $k$ 才是 $\lvert kA \rvert = k^n \lvert A \rvert$，两个 $k$ 从此分得开；

有了这三个数，$\lvert EA \rvert = \lvert E \rvert \cdot \lvert A \rvert$ 就自动翻译成“用行变换算行列式”的三条规则。

### DETAIL
以 3 阶为例（约定 $E(ij(k))$ 表示第 $i$ 行加第 $j$ 行的 $k$ 倍）：

$$
E(1, 3) = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}, \qquad \lvert E(1, 3) \rvert = -1
$$

交换两行，行列式变号。

$$
E(2(5)) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad \lvert E(2(5)) \rvert = 5
$$

对角元相乘即可。

$$
E(21(3)) = \begin{pmatrix} 1 & 0 & 0 \\ 3 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad \lvert E(21(3)) \rvert = 1
$$

这是第 2 行加第 1 行的 $3$ 倍，是下三角且对角全为 $1$。
**一句话对应**：$\lvert EA \rvert = \lvert E \rvert \cdot \lvert A \rvert$ 说明——交换两行 $\lvert A \rvert$ 变号；某行乘 $k$ 可把 $k$ 提到行列式外；倍加 $\lvert A \rvert$ 不变。这就是用行变换算行列式的依据。
**常用推论**：$\lvert kA \rvert = k^n \lvert A \rvert$、$\lvert A^{*} \rvert = \lvert A \rvert^{\,n-1}$、$\lvert A^{-1} \rvert = \dfrac{1}{\lvert A \rvert}$。
用行变换把行列式化成上三角后，把每一步的变号与倍数记清，再乘对角元就行。

### USAGE
1. 用 $\lvert EA \rvert = \lvert E \rvert \cdot \lvert A \rvert$ 判断关系：交换两行 $\lvert A \rvert$ 变号，某行乘 $k$ 可提出 $k$，倍加 $\lvert A \rvert$ 不变——这正是用行变换算行列式的依据。
2. 计算题：先用行变换把行列式化成上三角，再乘对角元，要记清每一步的变号与倍数。
3. 判断题：$\lvert kA \rvert = k^n \lvert A \rvert$ 而不是 $k \lvert A \rvert$，$\lvert A^{*} \rvert = \lvert A \rvert^{\,n-1}$，$\lvert A^{-1} \rvert = \dfrac{1}{\lvert A \rvert}$，常混在一起考。

### SELFCHECK
1. 写出 3 阶的 $E(2, 3)$、$E(3(-4))$、$E(13(2))$ 并各算行列式（答案依次是 $-1$、$-4$、$1$）。
2. 设 $\lvert A \rvert = 5$，交换 $A$ 的第 1、2 行得 $B$，则 $\lvert B \rvert = -5$；再把 $B$ 的第 3 行乘 $2$ 得 $C$，则 $\lvert C \rvert = -10$。
3. 用 $\begin{pmatrix} 2 & 3 \\ 4 & 5 \end{pmatrix}$ 演示：$r_2 - 2r_1$ 得 $\begin{pmatrix} 2 & 3 \\ 0 & -1 \end{pmatrix}$，$\lvert A \rvert = 2 \times (-1) = -2$，与直接算 $2 \times 5 - 3 \times 4 = -2$ 一致。
