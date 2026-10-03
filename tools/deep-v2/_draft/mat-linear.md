### ONELINE
同型矩阵逐格对齐相加，数乘就是每格都乘 k

### PAIN
手上有两条数据要合起来看：$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$、$B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$，现在要算 $A + B$ 和 $2A + 3B$。
旁边还有个 $C$ 是 $2 \times 3$ 的，$A + C$ 能不能算？
更要命的是，$2 \times 3$ 和 $3 \times 2$ 两边都是 6 个数，凭什么说它们不能相加？

### GAP
第一个坑是硬加：土办法是“反正都是数，全加起来”，可 6 个数摊平了确实能加，它们却根本不在同一个位置上，加出来的东西没有任何意义。
第二个坑是运算律凭感觉用：矩阵加法到底满不满足交换律、结合律、分配律？不敢确定，解矩阵等式时就不知道该不该移项、能不能合并。
第三个坑是数乘之后“个头”怎么变：$kA$ 每一格都乘了 $k$，它和 $A$ 的行列式之间是什么关系？$\lvert kA \rvert$ 到底等于多少，说不利索。

### INTRO
于是引入矩阵的加法与数乘，规则一句话：同型才相加，对应位置相加；数乘就是每个位置都乘 $k$。
上面那三个坑，逐个补上：

- **第一个坑补上**：先把“同型”这个前提卡死，$2 \times 3$ 与 $3 \times 2$ 型不同，压根不满足运算条件，不用再纠结数字个数。
- **第二个坑补上**：因为是逐格独立、互不干扰，交换律、结合律、分配律全部照搬数字的规矩，移项和合并同类项可以放心做。
- **第三个坑补上**：数乘对行列式的影响一句话记住：$\lvert kA \rvert = k^{n}\lvert A \rvert$（$A$ 为 $n$ 阶），每格都乘 $k$，行列式就翻 $k^{n}$ 倍，$n$ 阶有几个 $k$ 就乘几次，逐格展开就能看出来。转置方向的那组结论（$(A+B)^{\mathrm{T}} = A^{\mathrm{T}} + B^{\mathrm{T}}$、$(kA)^{\mathrm{T}} = kA^{\mathrm{T}}$）本章讲转置时再补齐，现在不懂不影响做题。

### DETAIL
**定义**：设 $A = (a_{ij})$、$B = (b_{ij})$ 都是 $m \times n$ 矩阵，则 $A + B = (a_{ij} + b_{ij})$，$kA = (ka_{ij})$ —— 加法要同型，数乘不需要伙伴。
**算例**：

$$
A + B = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 4 & 4 \end{pmatrix}, \qquad 2A = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}
$$

接着算 $2A + 3B$：先各自数乘得 $\begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}$ 与 $\begin{pmatrix} 0 & 3 \\ 3 & 0 \end{pmatrix}$，再逐格相加得 $\begin{pmatrix} 2 & 7 \\ 9 & 8 \end{pmatrix}$。
**运算律**：$A + B = B + A$，$(A + B) + C = A + (B + C)$，$k(A + B) = kA + kB$，$(k + l)A = kA + lA$ —— 和数一模一样，因为每个位置都是独立的数。
**三条必记结论**：只有同型矩阵才能相加，$C$ 为 $2 \times 3$ 时 $A + C$ 没有意义；$(A + B)^{\mathrm{T}} = A^{\mathrm{T}} + B^{\mathrm{T}}$、$(kA)^{\mathrm{T}} = kA^{\mathrm{T}}$；$kA = O \iff k = 0$ 或 $A = O$。

### USAGE
1. 填空题：给出 $A + 2B = C$ 或 $2A - 3B = O$ 之类的等式，反解未知矩阵 $B$；或者求含参矩阵等式里的参数。
2. 选择题：判断运算律与结构，比如“矩阵加法、数乘是否满足交换律与结合律”“由 $kA = O$ 能不能推出 $A = O$”。
3. 解答题：与行列式结合，用 $\lvert kA \rvert = k^{n}\lvert A \rvert$（$A$ 为 $n$ 阶）化简或证明。

### SELFCHECK
1. 算：$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$、$B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ 时，$2A + 3B$ 等于多少？
2. 判断：$2 \times 3$ 矩阵能与 $3 \times 2$ 矩阵相加吗？理由是什么？
3. 判断：$k \ne 0$ 且 $kA = O$，能推出 $A = O$ 吗？为什么？（提示：逐格看 $ka_{ij} = 0$）
