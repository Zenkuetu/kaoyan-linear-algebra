### ONELINE
实对称矩阵特征值全实数，不同特征值向量正交

### PAIN
**要解决的是：最特殊的一类矩阵 —— 转置等于自己的矩阵 $A^{\mathrm{T}} = A$，它的特征值、特征向量有什么额外好处。**
$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 就是这种矩阵（转置一下还是它自己），特征值是 3 和 1，对应的特征向量 $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 与 $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$。算一下内积：$1 \times 1 + 1 \times (-1) = 0$ —— 两个向量**垂直**。这是巧合吗？
再看一个对照：$C = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$，它和 $A$ 只差几个符号的位置，特征值却跑到了复数域：$\pm i$。它偏偏**不**是对称矩阵。
最容易想到的办法是"每个矩阵都验一遍"：解完特征方程看看有没有复根，再算算特征向量的内积 —— 每道题都这么折腾，既慢，又不知道什么时候能用这两条性质抄近路。

### GAP
- **坑一 · 逐个验证"特征值是不是实数"**：一般矩阵的特征方程可能有复根（上面 $C$ 就是），没办法一眼断定；每次都去解复数根、再判断虚实，纯属浪费；
- **坑二 · 以为对称矩阵也要逐项检验"能不能对角化"**：一般矩阵得先算 $r(\lambda E - A)$ 比几何重数与代数重数；对实对称矩阵这一整套检验是多余的（下面给结论）；
- **坑三 · 把"不同特征值正交"推广成"重根内部也自动正交"**：$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ 的 $\lambda = 2$ 是二重根，属于它的特征向量是 $(x_1, x_2, 0)^{\mathrm{T}}$ 这一整片；取 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ 与 $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$，两个都是特征向量，内积却是 $1 \times 1 + 0 \times 1 + 0 \times 0 = 1 \ne 0$ —— **同一个重根内部的特征向量不保证正交**，要正交得自己动手做正交化。

### INTRO
于是立起**实对称矩阵的两条专属性质**（前提：$A$ 是实矩阵且 $A^{\mathrm{T}} = A$）：

- $A$ 的特征值全部是实数，不会出现 $\pm i$ 这类复数；
- 属于**不同**特征值的特征向量相互**正交**（内积为 0）。

再加上一条：实对称矩阵一定可以对角化，而且能做到更强 —— 存在**正交矩阵** $Q$ 使 $Q^{\mathrm{T}}AQ$ 是对角阵（下一节讲）。

上面那三个坑，逐个补上：

- **坑一补上 · "特征值是实数"这条不用验**：题目一说"实对称"，就可以直接断言特征值全为实数，不必去解复数根；
- **坑二补上 · "可对角化"这条也不用验**：实对称矩阵一定可对角化，不用再去数几何重数；进一步还能正交对角化；
- **坑三补上 · 正交只保证在不同特征值之间**：重根内部的特征向量互不相干，想要正交必须在重根内部再做一次施密特正交化 —— 这一步下一节当作必备步骤来写。

### DETAIL
**性质一（特征值全为实数）**：实对称矩阵的特征值一定是实数。理由（考试不要求写过程，看懂即可）：把 $A\alpha = \lambda\alpha$ 两边左乘 $\overline{\alpha}^{\mathrm{T}}$（把 $\alpha$ 的元素取共轭后再转置），右边出现 $\overline{\alpha}^{\mathrm{T}}\alpha = \lvert\alpha_1\rvert^{2} + \cdots + \lvert\alpha_n\rvert^{2}$，这是正实数；左边因为 $A$ 的元素是实数、且 $A^{\mathrm{T}} = A$，取共轭后等于它自己，所以左边也是实数 —— 实数除以正实数只能是实数。对照：$\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ 不是对称矩阵，特征值就是 $\pm i$。
**性质二（不同特征值的特征向量正交）的完整推导**：设 $A\alpha_1 = \lambda_1\alpha_1$、$A\alpha_2 = \lambda_2\alpha_2$，且 $\lambda_1 \ne \lambda_2$。把 $\alpha_1^{\mathrm{T}}A\alpha_2$ 用两种方式算：

$$
\alpha_1^{\mathrm{T}}(A\alpha_2) = \lambda_2\alpha_1^{\mathrm{T}}\alpha_2, \qquad (A\alpha_1)^{\mathrm{T}}\alpha_2 = \lambda_1\alpha_1^{\mathrm{T}}\alpha_2
$$

第二个式子用了 $\alpha_1^{\mathrm{T}}A = (A^{\mathrm{T}}\alpha_1)^{\mathrm{T}} = (A\alpha_1)^{\mathrm{T}}$ —— 这一步正是 $A^{\mathrm{T}} = A$ 的用处。两个式子左边是同一个数 $\alpha_1^{\mathrm{T}}A\alpha_2$，所以 $(\lambda_1 - \lambda_2)\alpha_1^{\mathrm{T}}\alpha_2 = 0$；由 $\lambda_1 \ne \lambda_2$ 得 $\alpha_1^{\mathrm{T}}\alpha_2 = 0$，即内积为 0，两向量正交。
**算例（写全步骤）**：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，$A^{\mathrm{T}} = A$。
- 特征多项式 $\lvert \lambda E - A \rvert = (\lambda - 2)^{2} - 1 = (\lambda - 1)(\lambda - 3)$，特征值 3、1 都是实数；
- 对 $\lambda = 3$：$3E - A = \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \xrightarrow{\;r_2 + r_1\;} \begin{pmatrix} 1 & -1 \\ 0 & 0 \end{pmatrix}$，基础解系 $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$；
- 对 $\lambda = 1$：$E - A = \begin{pmatrix} -1 & -1 \\ -1 & -1 \end{pmatrix} \xrightarrow{\;r_2 - r_1\;} \begin{pmatrix} -1 & -1 \\ 0 & 0 \end{pmatrix}$，基础解系 $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$；
- 内积：$\begin{pmatrix} 1 \\ 1 \end{pmatrix}^{\mathrm{T}}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = 1 \times 1 + 1 \times (-1) = 0$，正交 ✓。
**两个反例/边界**：
- "重根内部自动正交"是错的：$\begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ 中属于 $\lambda = 2$ 的 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ 与 $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ 内积为 1；
- "只有实对称矩阵的特征值才是实数"也是错的：$\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ 不对称，特征值 1、2 全是实数。实数性不是实对称的专利，"不同特征值的特征向量正交"对非对称矩阵一般不成立。
**常用结论**：
- 实对称矩阵的特征值全为实数，且一定可对角化（还能正交对角化）；
- 属于不同特征值的特征向量正交；重根内部的要自己做正交化；
- 实对称矩阵的 $k$ 重特征值一定有 $k$ 个线性无关的特征向量（即 $m_i = n_i$）；
- 前提别丢：一定是**实**矩阵且 $A^{\mathrm{T}} = A$，这两条性质才是白送的。

### USAGE
1. 选择题：判断"实对称矩阵一定具有的性质"（特征值全实数、可对角化、不同特征值的特征向量正交），或用正交性求参数。
2. 填空题：已知两个特征向量求第三个（用"与已知特征向量正交"列方程组），或由正交性反求矩阵中的参数。
3. 解答题：求实对称矩阵的特征值与特征向量时，用正交性校验答案；求正交矩阵 $Q$ 的前一步必须先算特征向量（下一节）。

### SELFCHECK
1. 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 的两个特征向量，算内积看是否为 0。
2. 判：$\begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ 中属于 $\lambda = 2$ 的 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ 与 $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ 正交吗？
3. 想：$C = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ 的特征值是 $\pm i$，它是对称矩阵吗？
