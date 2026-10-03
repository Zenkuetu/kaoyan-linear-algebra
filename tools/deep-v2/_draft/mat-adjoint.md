### ONELINE
代数余子式排成矩阵再转置，记作 $A^{*}$

### PAIN
解 $AX = b$ 想把 $A$ 一步撤掉，就得先知道每个位置的代数余子式怎么摆；$2$ 阶那种 $\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ 的现成摆法倒是好用，可两个问题绕不开：右边那个 $\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ 到底从哪冒出来的？$3$ 阶还有同样的摆法吗？

### GAP
- **坑一 · 按定义硬猜**：按定义 $AB = BA = E$ 硬猜，$2$ 阶还能凑一凑，$3$ 阶是 $9$ 个未知数 $9$ 个方程，猜不出来。
- **坑二 · 逐个位置去算**：逐个位置去算也吃不消，要想把 $A$ 撤掉，每个位置该摆哪个数都得自己去找 —— 那一格的数由 $A$ 中“划掉第 $j$ 行第 $i$ 列”剩下的那块决定（注意下标是反的），符号还要看 $(-1)^{i+j}$，$n$ 阶要算 $n^{2}$ 个行列式。
- **坑三 · 没有统一公式**：散着写谁也记不住，更写不成一个统一公式。

### INTRO

于是引入伴随矩阵：把这些代数余子式一次全算出来、按格子摆好、再转置，打包成一个矩阵。上面那三个坑，逐个补上：

$$
A^{*} = (A_{ji}), \qquad A_{ij} = (-1)^{i+j}M_{ij}
$$

- **坑一补上 · 不用再猜**：不用拿 $AB = BA = E$ 去硬凑，按上面这条式子把元素一次算好，伴随矩阵就到手了；
- **坑二补上 · 位置和符号都有规矩**：其中 $M_{ij}$ 是划掉第 $i$ 行第 $j$ 列后剩下的行列式，$A_{ij}$ 是代数余子式；每个位置该放哪个、符号是正是负，都照上面这条式子走；
- **坑三补上 · 统一公式到手**：$2$ 阶、$3$ 阶到 $n$ 阶不再各写各的，摆好之后逆矩阵就有了统一公式 $A^{-1} = \dfrac{1}{\lvert A \rvert}A^{*}$（$\lvert A \rvert \ne 0$），$2$ 阶口诀“主对调、副变号”就是这个公式在 $n = 2$ 时的样子。
### DETAIL
**定义**：$A^{*} = (A_{ji})$，也就是把每个元素的代数余子式排成矩阵后**再转置**（转置这一步最容易漏）。

**$2$ 阶口诀**：$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ 时 $A^{*} = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$（主对调、副变号）。

**$3$ 阶照定义算**：取

$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}, \qquad \lvert A \rvert = 1
$$

$$
A_{11} = \begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} = -24, \quad A_{21} = -\begin{vmatrix} 2 & 3 \\ 6 & 0 \end{vmatrix} = 18, \quad A_{31} = \begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix} = 5
$$

其余位置照算，算完记得转置，得

$$
A^{*} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}, \qquad AA^{*} = E \quad (\lvert A \rvert = 1)
$$

**检查办法**：把算出来的 $A^{*}$ 与 $A$ 相乘，应该得到 $\lvert A \rvert E$，这是验算伴随矩阵最快的手段。

### USAGE
1. 已知 $A$ 求 $A^{*}$：$2$ 阶直接套口诀，$3$ 阶按定义逐个算代数余子式，最后别忘了转置
2. 已知 $A$ 与 $\lvert A \rvert$ 求 $A^{*}$（用 $A^{*} = \lvert A \rvert A^{-1}$），或者反过来由 $A^{*}$ 求 $A$（用 $A = \lvert A \rvert (A^{*})^{-1}$）
3. 变形计算：$(A^{\mathrm{T}})^{*}$、$(kA)^{*}$、$(A^{*})^{\mathrm{T}}$ 这一类，例如 $(kA)^{*} = k^{n-1}A^{*}$、$(A^{*})^{\mathrm{T}} = (A^{\mathrm{T}})^{*}$

### SELFCHECK
1. 算：$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ 的伴随矩阵是多少？（用主对调、副变号，答案 $\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$）
2. 说：$3$ 阶矩阵的 $\lvert A^{*} \rvert$ 与 $\lvert A \rvert$ 是什么关系？（答案：$\lvert A^{*} \rvert = \lvert A \rvert^{2} = \lvert A \rvert^{n-1}$）
3. 验：$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ 时 $AA^{*} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix} = \lvert A \rvert E$ 成立吗？
