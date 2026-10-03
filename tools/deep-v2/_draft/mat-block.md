### ONELINE
把大矩阵当小矩阵使，整体运算

### PAIN
比如这个矩阵，要它的行列式和逆：

$$
M = \begin{pmatrix} 1 & 2 & 0 \\ 3 & 4 & 0 \\ 0 & 0 & 2 \end{pmatrix}
$$

数字不大，硬算也扛得住：三阶行列式展开一次，逆就做 $(M \mid E)$ 消元。
但你看得出来，它左下、右上一整块全是 $0$——这其实是两个小矩阵拼起来的。

### GAP
逐元素硬算的毛病很明显，三个坑全都躲不开：
- **坑一 · 零块白算**：把那些 $0$ 也当数字老老实实算一遍，纯属浪费；
- **坑二 · 阶数一高顶不住**：阶数一高（比如 $m + n$ 阶），$(M \mid E)$ 就是一大堆列，手算顶不住；
- **坑三 · 带字母根本写不出来**：很多题的矩阵阶数里带字母（$A$ 是 $m$ 阶、$B$ 是 $n$ 阶），逐元素根本写不出来。

### INTRO
于是按零的位置切块，把 $A$、$B$ 这些小方块当成“大矩阵的元素”来运算，这就是**分块矩阵**。
上面那三个坑，逐个补上：
- **坑一补上 · 零块整块记账**：切块以后那些 $0$ 块直接当零块用，不用再挨个当数字算，白算的那部分省掉；
- **坑二补上 · 块上一步到位**：分块对角阵里每块各管一段、互不干扰，所以行列式相乘、逆各自求、秩相加，不用再对一大堆列做消元；
- **坑三补上 · 字母阶数也照写**：阶数带字母时，把 $A$、$B$ 当成“大矩阵的元素”直接写块公式，不必把每个元素写出来。

### DETAIL
**分块规则**：加法要求两边分法完全相同；乘法要求左矩阵的**列**分法与右矩阵的**行**分法一致（不匹配就不能乘）；转置是“先分块转置、再把每块转置”。
**分块对角**（$M = \begin{pmatrix} A & O \\ O & B \end{pmatrix}$，$A$ 为 $m$ 阶、$B$ 为 $n$ 阶方阵）：

$$
\lvert M \rvert = \lvert A \rvert \cdot \lvert B \rvert, \qquad M^{-1} = \begin{pmatrix} A^{-1} & O \\ O & B^{-1} \end{pmatrix}, \qquad r(M) = r(A) + r(B)
$$

**分块三角**（$A$、$C$ 均可逆）：

$$
\begin{pmatrix} A & B \\ O & C \end{pmatrix}^{-1} = \begin{pmatrix} A^{-1} & -A^{-1} B C^{-1} \\ O & C^{-1} \end{pmatrix}
$$

两个公式的前提不同，别把 $\lvert M \rvert = \lvert A \rvert\lvert B \rvert$ 套到块三角上。
**算例**：把上面的 $M$ 写成 $\begin{pmatrix} A & O \\ O & B \end{pmatrix}$，其中 $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$、$B = \begin{pmatrix} 2 \end{pmatrix}$、$O$ 是零块。
于是 $\lvert M \rvert = \lvert A \rvert \cdot \lvert B \rvert = (-2) \times 2 = -4$，而

$$
M^{-1} = \begin{pmatrix} A^{-1} & O \\ O & B^{-1} \end{pmatrix} = \begin{pmatrix} -2 & 1 & 0 \\ \dfrac{3}{2} & -\dfrac{1}{2} & 0 \\ 0 & 0 & \dfrac{1}{2} \end{pmatrix}
$$

抽查 $M M^{-1}$ 的第一行：$1 \times (-2) + 2 \times \dfrac{3}{2} + 0 = 1$，$1 \times 1 + 2 \times (-\dfrac{1}{2}) = 0$，第三列是 $0$，确实是 $E$ 的第一行。

### USAGE
1. 分块对角阵或分块三角阵求逆、求行列式、求秩，直接套块公式比硬算快得多。
2. 抽象分块求逆：$\begin{pmatrix} A & B \\ O & C \end{pmatrix}^{-1} = \begin{pmatrix} A^{-1} & -A^{-1} B C^{-1} \\ O & C^{-1} \end{pmatrix}$（$A$、$C$ 均可逆），选择题高频。
3. 分块矩阵的乘法与转置：分块必须匹配，左矩阵的列分法与右矩阵的行分法要一致。

### SELFCHECK
1. 写出 $\begin{pmatrix} A & O \\ O & B \end{pmatrix}$ 的逆、行列式与秩（分别是 $\begin{pmatrix} A^{-1} & O \\ O & B^{-1} \end{pmatrix}$、$\lvert A \rvert \cdot \lvert B \rvert$、$r(A) + r(B)$），并说明理由。
2. 对 $M = \begin{pmatrix} 1 & 2 & 0 \\ 3 & 4 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ 直接按三阶展开算 $\lvert M \rvert$，看是否等于 $\lvert A \rvert \cdot \lvert B \rvert = -4$。
3. 取 $A = \begin{pmatrix} 2 \end{pmatrix}$、$B = \begin{pmatrix} 3 \end{pmatrix}$、$C = \begin{pmatrix} 5 \end{pmatrix}$，用公式算 $\begin{pmatrix} A & B \\ O & C \end{pmatrix}^{-1} = \begin{pmatrix} \dfrac{1}{2} & -\dfrac{3}{10} \\ 0 & \dfrac{1}{5} \end{pmatrix}$，再乘原矩阵验证得 $E$。
