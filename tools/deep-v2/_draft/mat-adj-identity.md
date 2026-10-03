### ONELINE
$A$ 与 $A^{*}$ 怎么乘都等于 $\lvert A \rvert E$（数量阵）

### PAIN
手上有 $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$，$\lvert A \rvert = 1 \times 4 - 2 \times 3 = -2$，伴随矩阵 $A^{*} = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$。乘一下：

$$
AA^{*} = \begin{pmatrix} 1 \times 4 + 2 \times (-3) & 1 \times (-2) + 2 \times 1 \\ 3 \times 4 + 4 \times (-3) & 3 \times (-2) + 4 \times 1 \end{pmatrix} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix}
$$

结果很干净：非对角元全是 $0$，对角元全是 $-2$，正好是 $\lvert A \rvert$。这是巧合还是规律？

### GAP
- **坑一 · 硬乘看不出规律**：一个个乘着找规律不现实，$n$ 阶要算 $n^{2}$ 个元素，每个元素本身又是一串乘积求和，靠算例猜不出一般结论。
- **坑二 · 右边该长什么样没数**：更麻烦的是右边该长什么样根本没数，为什么偏偏是数量阵 $\lvert A \rvert E$，而不是 $\lvert A \rvert$ 的某个幂、或者别的什么矩阵？不把这条恒等式点破就看不出来。
- **坑三 · 前提容易糊**：前提也容易糊，哪一步需要 $\lvert A \rvert \ne 0$，哪一步 $\lvert A \rvert = 0$ 也照样成立，光靠乘法验不出来。

### INTRO

于是把这件事写成一条恒等式，这也是伴随矩阵存在的第二个理由。上面那三个坑，逐个补上：

$$
AA^{*} = A^{*}A = \lvert A \rvert E
$$

- **坑一补上 · 不用一个个乘**：有了这条恒等式，$n$ 阶那 $n^{2}$ 个元素不用一个个乘出来找规律；
- **坑二补上 · 右边就是数量阵**：右边为什么偏偏是数量阵 $\lvert A \rvert E$、非对角元为什么是 $0$，一句话就点破了 —— 因为“一行元素乘上另一行对应的代数余子式”会全部抵消，这是行列式展开定理的直接推论；而且 $A$ 与 $A^{*}$ 相乘可以互换位置；
- **坑三补上 · 前提分得清**：哪一步要 $\lvert A \rvert \ne 0$、哪一步不用，由这条恒等式就分得清 —— 求逆就是一步乘系数 $A^{-1} = \dfrac{A^{*}}{\lvert A \rvert}$（$\lvert A \rvert \ne 0$）。
### DETAIL
**恒等式**：$AA^{*} = A^{*}A = \lvert A \rvert E$，右边是数量阵，说明 $A$ 和 $A^{*}$ 相乘可以交换。

**由它推出来的三条**：

- 当 $\lvert A \rvert \ne 0$（也就是 $A$ 可逆）时，两边同乘 $\lvert A \rvert^{-1}$ 得 $A^{*} = \lvert A \rvert A^{-1}$，注意前提是 $\lvert A \rvert \ne 0$；
- 两边取行列式得 $\lvert A \rvert\lvert A^{*} \rvert = \lvert A \rvert^{n}$，于是 $n \ge 2$ 时 $\lvert A^{*} \rvert = \lvert A \rvert^{n-1}$（$\lvert A \rvert = 0$ 时结论是 $\lvert A^{*} \rvert = 0$），$n = 2$ 时就是 $\lvert A^{*} \rvert = \lvert A \rvert$；
- $\lvert A \rvert = 0$ 时恒等式退化成 $AA^{*} = A^{*}A = O$。

**左右都验一遍**（下式与上面的 $AA^{*}$ 结果相同）：

$$
A^{*}A = \begin{pmatrix} 4 \times 1 + (-2) \times 3 & 4 \times 2 + (-2) \times 4 \\ -3 \times 1 + 1 \times 3 & -3 \times 2 + 1 \times 4 \end{pmatrix} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix} = \lvert A \rvert E
$$

### USAGE
1. 证明题：设 $A$ 为 $n$（$n \ge 2$）阶方阵。用 $AA^{*} = \lvert A \rvert E$，在 $\lvert A \rvert \ne 0$（即 $A$ 可逆）时两边同乘 $\lvert A \rvert^{-1}$ 得 $A^{*} = \lvert A \rvert A^{-1}$；再取行列式得 $\lvert A^{*} \rvert = \lvert A \rvert^{n-1}$（$\lvert A \rvert = 0$ 时结论是 $\lvert A^{*} \rvert = 0$），$n = 2$ 时即 $\lvert A^{*} \rvert = \lvert A \rvert$
2. 抽象矩阵计算：把 $(A^{*})^{2}$、$A^{*}A^{-1}$、$\lvert AA^{*} \rvert$ 这类表达式化简
3. 求 $\lvert A \rvert$：由 $AB = O$ 或 $AA^{*} = 2E$ 这类条件反解 $A$ 的行列式与参数

### SELFCHECK
1. 说：$A$ 可逆时 $A^{*}$ 等于什么？（答案：$A^{*} = \lvert A \rvert A^{-1}$）
2. 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$（$\lvert A \rvert = 1$）时 $A^{*}$ 是不是正好等于 $A^{-1}$？动手算一遍
3. 说：$A^{k}$ 与 $A^{*}$ 相乘能交换吗？（答案：能，因为 $AA^{*} = A^{*}A$，$A$ 与 $A^{*}$ 互换位置结果相同）
