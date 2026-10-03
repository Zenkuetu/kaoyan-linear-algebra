### ONELINE
解 $AX=B$：把 $(A \mid B)$ 消成 $(E \mid A^{-1}B)$

### PAIN
题目给 $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$、$B = \begin{pmatrix} 5 \\ 11 \end{pmatrix}$，要解矩阵方程 $AX = B$。
顺手就想到：先把 $A^{-1}$ 求出来，再乘一下 $B$。
听起来挺对，但实际操作是先做一整轮 $(A \mid E)$ 的消元，再额外算一次矩阵乘法。
要是 $B$ 有两列、三列呢？$A^{-1}$ 这个中间结果得先单独算出来、再拿去和 $B$ 相乘，多抄一遍就多一次抄错的机会。

$$
AX = B, \qquad A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 5 \\ 11 \end{pmatrix}
$$

### GAP
“先求逆再乘”这条路有三个说不通的地方：
- **坑一 · 求逆多一道工序**：得先把 $A^{-1}$ 单独算出来，才能拿它去乘 $B$；这一步算错，后面全错。
- **坑二 · 多列时要多存一个中间结果**：$B$ 的列数一多，$A^{-1}$ 这个中间结果得先单独算出来抄一遍，再和整个 $B$ 相乘，多抄一遍就多一次抄错的机会；
- **坑三 · $A$ 不可逆就过不去**：$A$ 不可逆时 $A^{-1}$ 压根不存在，这条路过不去——但方程照样可能有解（无穷多解）。

### INTRO
于是换个思路：把 $A$ 和 $B$ **并排**写成 $(A \mid B)$，一次消元同时处理所有列。
因为初等行变换等于左乘可逆矩阵，不改变方程的解；$A$ 可逆时把左半消成 $E$，右半自然就是 $A^{-1}B$。
上面那三个坑，逐个补上：
- **坑一补上 · 省掉单独求逆这道工序**：不用先把 $A^{-1}$ 单独算出来，把 $(A \mid B)$ 并排一次消元就行；
- **坑二补上 · 多列一次搞定**：$B$ 有几列就并排写几列，一次消元同时出所有列，不用把 $A^{-1}$ 单独算出来当中间量；
- **坑三补上 · 不可逆时退化成看秩**：$A$ 不可逆时左半消不出 $E$，就退化成用秩判断有没有解、有多少解。

### DETAIL
**结论**：$A$ 可逆时，对增广阵只用行变换

$$
(A \mid B) \;\longrightarrow\; (E \mid A^{-1}B)
$$

右半就是 $X$。这里“化成 $(E \mid A^{-1}B)$”的前提是 **$A$ 可逆**；$A$ 不可逆时左半消不出 $E$，只能靠秩判断。
**算例**（一步步走）：

$$
(A \mid B) = \begin{pmatrix} 1 & 2 & 5 \\ 3 & 4 & 11 \end{pmatrix}
\;\xrightarrow{\; r_2 - 3r_1 \;}\;
\begin{pmatrix} 1 & 2 & 5 \\ 0 & -2 & -4 \end{pmatrix}
\;\xrightarrow{\; r_2 \times (-\frac{1}{2}) \;}\;
\begin{pmatrix} 1 & 2 & 5 \\ 0 & 1 & 2 \end{pmatrix}
\;\xrightarrow{\; r_1 - 2r_2 \;}\;
\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \end{pmatrix}
$$

即 $X = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$。验算 $A X = \begin{pmatrix} 1 \times 1 + 2 \times 2 \\ 3 \times 1 + 4 \times 2 \end{pmatrix} = \begin{pmatrix} 5 \\ 11 \end{pmatrix} = B$，对的。
**$B$ 有两列就并排写**，$(A \mid B)$ 一次消元同时解出每一列。
**遇到 $XA = B$**：不能直接对 $A$ 作行变换，先转置成 $A^{\mathrm{T}} X^{\mathrm{T}} = B^{\mathrm{T}}$，用 $(A^{\mathrm{T}} \mid B^{\mathrm{T}})$ 求出 $X^{\mathrm{T}}$，再转置回去。

### USAGE
1. $(A \mid B)$ 型：给 $A$ 与两列的 $B$，求 $AX = B$ 中的 $X$，考你能不能一次消元同时解出多个方程组。
2. $XA = B$ 型：转置成 $A^{\mathrm{T}} X^{\mathrm{T}} = B^{\mathrm{T}}$，用 $(A^{\mathrm{T}} \mid B^{\mathrm{T}})$ 求 $X^{\mathrm{T}}$ 再转置回去（直接对 $A$ 作行变换是错的）。
3. 含参或 $A$ 不可逆的情形：用 $r(A)$ 与 $r(A, B)$ 是否相等判无解或无穷多解，要解就写通解。

### SELFCHECK
1. 用 $(A \mid B)$ 解 $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} X = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$，确认算出来的正是 $A^{-1} = \begin{pmatrix} -2 & 1 \\ \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}$。
2. 解 $\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} X = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$：$X = \dfrac{1}{5}\begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} \dfrac{1}{5} \\ \dfrac{3}{5} \end{pmatrix}$，代回得 $A X = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$。
3. 说出 $AX = B$ 有唯一解的条件（$\lvert A \rvert \neq 0$），并说明 $A$ 不可逆时只看哪两个秩。
