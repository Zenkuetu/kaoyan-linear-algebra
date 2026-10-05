### ONELINE
矩阵乘法不能随便约分，除非 A 可逆

### PAIN
拿到 $AX = AY$ 这种等式，第一反应都是两边约掉 $A$，得 $X = Y$。
拿 $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ 试试：取 $X = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$、$Y = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$，算出来 $AX = O$，而 $AY = \begin{pmatrix} 1 \times 0 + 0 \times 1 & 1 \times 0 + 0 \times 1 \\ 0 \times 0 + 0 \times 1 & 0 \times 0 + 0 \times 1 \end{pmatrix} = O$。
于是 $AX = AY$ 成立，可 $X \ne Y$ —— 这个 $A$ 就是约不掉。把 $A$ 换成 $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$，再由 $AX = AY$ 就确实能推出 $X = Y$。同一个操作一会儿行一会儿不行，到底凭什么？

### GAP
土办法是凭感觉约：觉得 $A \ne O$ 就能约。
- **劣势一**：$A \ne O$ 完全不够。上面那个 $A$ 就不是零矩阵，照样约不掉，硬约就把 $X \ne Y$ 这样的解丢了。
- **劣势二**：没有判据就只能靠猜，选择题里那些错误选项往往就是漏掉“$A$ 可逆”这个前提，一猜就中招。
- **劣势三**：前提漏一次后面全塌：$AX = 0$ 的解结构、秩的关系一步推错，整道题跟着崩。

### INTRO
于是把“能不能约”变成一个明确的判据：$AX = AY$ 先移项成 $A(X - Y) = O$，再看 $A$ 可不可逆。
上面那三个劣势，逐个补上：

- **第一个劣势补上**：判据不看你感觉，只看 $A$ —— $A$ 可逆时两边左乘 $A^{-1}$ 得 $X = Y$；不可逆时 $AX = AY$ 不蕴含 $X = Y$。
- **第二个劣势补上**：约分要的通行证是 $A$ 可逆（或 $A$ 列满秩），没有这张证就老老实实停在 $A(X - Y) = O$ 这一步，别硬约。
- **第三个劣势补上**：不可逆时换成能用的结论 —— $X - Y$ 的每一列都是 $Ax = 0$ 的解；$AB = O$ 时 $B$ 的每一列都是 $AX = 0$ 的解。

### DETAIL
**核心事实**：$AX = AY \iff A(X - Y) = O$；能不能推出 $X = Y$，全看 $A$ 可不可逆。
**不可逆的反例**：

$$
A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad X = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}, \quad Y = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}, \qquad AX = AY = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}
$$

这里 $AX = AY$ 成立但 $X \ne Y$，所以 $A$ 约不掉；换成 $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$，$AX = AY$ 会把两边每个位置逐格暴露出来，直接得 $X = Y$。
**怎么判**：先算 $\lvert A \rvert$ 或者看 $r(A)$，$\lvert A \rvert \ne 0$（等价地 $r(A) = n$）才能约；$A$ 列满秩时同样可以，由 $A(X - Y) = O$ 得 $X - Y = O$。
**顺带记一句**：$AB = AC$ 且 $A \ne O$ 也不能约，除非再补上 $A$ 可逆；$AB = O$ 且 $A \ne O$ 时只能得到 $B$ 的每一列都是 $AX = 0$ 的解（等价说法是 $r(A) + r(B) \le n$），得不到 $B = O$。

### USAGE
1. 选择题：给具体数字矩阵，判断“由 $AX = AY$ 能不能推出 $X = Y$”，错误选项往往是漏掉 $A$ 可逆这个前提。
2. 选择题或填空题：已知 $AB = AC$ 且 $A \ne O$，问能不能约去 $A$ —— 不能，除非再补上 $A$ 可逆（或 $A$ 列满秩）。
3. 解答题：由 $AB = O$ 且 $A \ne O$ 反推 $B$ 的性质，只能得 $B$ 的每一列都是 $AX = 0$ 的解，不能得 $B = O$（等价说法是 $r(A) + r(B) \le n$）。

### SELFCHECK
1. 写出三阶矩阵 $A \ne O$ 和 $B \ne O$，使 $AB = O$。
2. 对 $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$，写出两个不同的二阶矩阵 $X$、$Y$，使 $AX = AY$。
3. 判断：若 $A$ 可逆且 $AX = AY$，则 $X = Y$（对，两边左乘 $A^{-1}$ 即得）。
