### ONELINE
$Q^{\mathrm{T}}AQ = \Lambda$：实对称阵必有正交对角化

### PAIN
**要解决的是：把实对称矩阵变成对角阵时，顺带要求那个变换矩阵是"正交的"（转置就是逆，$Q^{-1} = Q^{\mathrm{T}}$），该怎么做到。**
具体动作：给 $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$，求正交矩阵 $Q$ 使 $Q^{\mathrm{T}}AQ$ 是对角阵。
最容易想到的办法是照搬上一节的对角化：$A$ 的特征值是 4 和 1（其中 $\lambda = 1$ 是二重根）。$\lambda = 1$ 时解 $(\lambda E - A)x = 0$，方程是 $x_1 + x_2 + x_3 = 0$，取基础解系

$$
\xi_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}, \qquad \xi_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
$$

再把 $\lambda = 4$ 的特征向量 $\xi_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ 一起拼成 $P$，照样有 $P^{-1}AP = \Lambda$ —— 可这个 $P$ **不是正交矩阵**：$\xi_1^{\mathrm{T}}\xi_2 = 1 \times 1 + (-1)\times 0 + 0 \times (-1) = 1 \ne 0$，两个列向量不垂直。题目要求的那件事没做到，"拼出来就行"这一招在这里不够用。

### GAP
- **坑一 · 直接把特征向量拼起来当 Q**：重根内部的基础解系（上面 $\xi_1, \xi_2$）不一定垂直，拼出来的矩阵不满足 $Q^{\mathrm{T}}Q = E$，也就不是正交矩阵；
- **坑二 · 只做正交化，忘了单位化**：施密特正交化以后各列垂直了，但长度还不是 1；正交矩阵要求每一列都是单位向量（$Q^{\mathrm{T}}Q = E$ 的对角元就是各列长度的平方）；
- **坑三 · 重根处只取一个特征向量**：$\lambda = 1$ 是二重根，属于它的线性无关特征向量有 2 个（解空间是二维的）；只取 $\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ 一个，$Q$ 就凑不满 3 列，$Q$ 不可逆，更谈不上正交。

### INTRO
于是给出**实对称矩阵的正交对角化**：设 $A$ 是 $n$ 阶实对称矩阵，则一定存在**正交矩阵** $Q$（满足 $Q^{\mathrm{T}}Q = E$，即 $Q^{-1} = Q^{\mathrm{T}}$）和对角阵 $\Lambda$，使

$$
Q^{\mathrm{T}}AQ = Q^{-1}AQ = \Lambda
$$

步骤是：求特征值 → 求各特征值的特征向量 → **重根内部**施密特正交化 → 全部单位化 → 按列拼 $Q$（列的次序与 $\Lambda$ 的对角元一一对应）。

上面那三个坑，逐个补上：

- **坑一补上 · 只对重根内部做正交化**：同一重根内部的特征向量用施密特正交化处理，不同特征值的特征向量本来就正交、不用动。上面对 $\xi_1, \xi_2$ 做一次：

$$
\eta_2 = \xi_2 - \frac{\xi_1^{\mathrm{T}}\xi_2}{\xi_1^{\mathrm{T}}\xi_1}\xi_1 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} - \frac{1}{2}\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} \frac{1}{2} \\ \frac{1}{2} \\ -1 \end{pmatrix}
$$

取同方向的 $\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$ 更方便，它与 $\xi_1$ 的内积是 $1 - 1 + 0 = 0$ ✓；
- **坑二补上 · 正交完再单位化**：$q_1 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$，$q_2 = \frac{1}{\sqrt{6}}\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$，$q_3 = \frac{1}{\sqrt{3}}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ —— 除长度这一步一个都不能漏，**单重根的特征向量也要单位化**；
- **坑三补上 · 重根处取满个数**：$k$ 重特征值要取 $k$ 个线性无关的特征向量（实对称矩阵一定取得到），取不够就说明前面算错了；取满之后 $Q$ 才有 $n$ 列。

### DETAIL
**定理**：$n$ 阶实对称矩阵 $A$ 一定可以正交对角化，即存在正交矩阵 $Q$ 使 $Q^{\mathrm{T}}AQ = \Lambda$，$\Lambda$ 的对角元就是 $A$ 的全部特征值。反过来，能正交对角化的矩阵一定是实对称矩阵：由 $Q^{\mathrm{T}}AQ = \Lambda$ 得 $A = Q\Lambda Q^{\mathrm{T}}$，转置一下 $A^{\mathrm{T}} = Q\Lambda^{\mathrm{T}}Q^{\mathrm{T}} = Q\Lambda Q^{\mathrm{T}} = A$。
**步骤（五步）**：
1. 解 $\lvert \lambda E - A \rvert = 0$，求出全部特征值及重数；
2. 对每个特征值解 $(\lambda E - A)x = 0$，取基础解系；
3. **只对同一个重根内部**的基础解系做施密特正交化（不同特征值的特征向量自动正交，不用处理）；
4. 把所有特征向量单位化（各自除以自己的长度）；
5. 按列的次序拼成 $Q$，$\Lambda$ 的对角元按同样次序填写。
**算例（写全步骤）**：$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$。
第一步，求特征值。把第二、三行加到第一行，第一行变成 $(\lambda - 4, \lambda - 4, \lambda - 4)$，提出公因式：

$$
\lvert \lambda E - A \rvert = \begin{vmatrix} \lambda - 2 & -1 & -1 \\ -1 & \lambda - 2 & -1 \\ -1 & -1 & \lambda - 2 \end{vmatrix} = (\lambda - 4)\begin{vmatrix} 1 & 1 & 1 \\ -1 & \lambda - 2 & -1 \\ -1 & -1 & \lambda - 2 \end{vmatrix} = (\lambda - 4)(\lambda - 1)^{2}
$$

所以 $\lambda_1 = \lambda_2 = 1$（二重），$\lambda_3 = 4$。校验：$1 + 1 + 4 = 6 = \mathrm{tr}(A) = 2 + 2 + 2$ ✓；$\lvert A \rvert = 1 \times 1 \times 4 = 4$（直接按第一行展开算行列式：$2 \times (4 - 1) - 1 \times (2 - 1) + 1 \times (1 - 2) = 6 - 1 - 1 = 4$ ✓）。

第二步，求特征向量。对 $\lambda = 1$：

$$
E - A = \begin{pmatrix} -1 & -1 & -1 \\ -1 & -1 & -1 \\ -1 & -1 & -1 \end{pmatrix} \xrightarrow{\;r_2 - r_1,\ r_3 - r_1\;} \begin{pmatrix} -1 & -1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \implies x_1 + x_2 + x_3 = 0
$$

基础解系取 $\xi_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$、$\xi_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$（两个，与重数 2 相符）。
对 $\lambda = 4$：

$$
4E - A = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix} \xrightarrow{\;r_1 \leftrightarrow r_2\;} \begin{pmatrix} -1 & 2 & -1 \\ 2 & -1 & -1 \\ -1 & -1 & 2 \end{pmatrix} \xrightarrow{\;r_2 + 2r_1\;} \begin{pmatrix} -1 & 2 & -1 \\ 0 & 3 & -3 \\ -1 & -1 & 2 \end{pmatrix}
$$

再作 $r_3 - r_1$ 得 $\begin{pmatrix} -1 & 2 & -1 \\ 0 & 3 & -3 \\ 0 & -3 & 3 \end{pmatrix}$，再 $r_3 + r_2$ 得 $\begin{pmatrix} -1 & 2 & -1 \\ 0 & 3 & -3 \\ 0 & 0 & 0 \end{pmatrix}$。于是 $-x_1 + 2x_2 - x_3 = 0$、$x_2 = x_3$，解得 $x_1 = x_2 = x_3$，取 $\xi_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$。校验：$A\xi_3 = \begin{pmatrix} 4 \\ 4 \\ 4 \end{pmatrix} = 4\xi_3$ ✓。
第三步，重根内部正交化（只处理 $\xi_1, \xi_2$）：

$$
\eta_2 = \xi_2 - \frac{\xi_1^{\mathrm{T}}\xi_2}{\xi_1^{\mathrm{T}}\xi_1}\xi_1 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} - \frac{1}{2}\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} \frac{1}{2} \\ \frac{1}{2} \\ -1 \end{pmatrix}
$$

取同方向的 $\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$ 即可（乘非零常数不影响结果），它与 $\xi_1$ 的内积是 $1 - 1 + 0 = 0$ ✓；

校验：$\xi_1^{\mathrm{T}}\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix} = 1 - 1 + 0 = 0$；$\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}^{\mathrm{T}}\xi_3 = 1 + 1 - 2 = 0$ ✓（不同特征值之间本来就是正交的）。
第四步，单位化：$q_1 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$，$q_2 = \frac{1}{\sqrt{6}}\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$，$q_3 = \frac{1}{\sqrt{3}}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$。
第五步，拼 $Q$：

$$
Q = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ 0 & -\frac{2}{\sqrt{6}} & \frac{1}{\sqrt{3}} \end{pmatrix}, \qquad Q^{\mathrm{T}}AQ = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{pmatrix}
$$

**校验**：三列两两内积为 0、每列长度为 1，所以 $Q^{\mathrm{T}}Q = E$；再按列看 $AQ = Q\Lambda$ 即 $Aq_j = \lambda_jq_j$（$q_1, q_2$ 配 1，$q_3$ 配 4），所以 $Q^{\mathrm{T}}AQ = \Lambda$。
**常用结论**：
- 实对称矩阵必可正交对角化；能正交对角化的矩阵必是实对称矩阵；
- $Q$ 不唯一（重根内部可以换一组正交基、特征向量可以取相反方向、列可以对调，$\Lambda$ 同步对调）；
- 正交矩阵的好处：$Q^{-1} = Q^{\mathrm{T}}$，求逆不用算 —— 这一点后面的章节里还会反复用到，现在先记住这个便利就行。

### USAGE
1. 选择题：问"求正交矩阵 $Q$ 使 $Q^{\mathrm{T}}AQ = \Lambda$ 的过程中必须做哪一步"（重根内部正交化、全部单位化），或判断给定矩阵是不是正交矩阵。
2. 填空题：补全 $Q$ 的某一列（用单位化或正交性），或写出 $\Lambda$ 的对角元。
3. 解答题：求正交矩阵 $Q$ 把实对称矩阵化为对角阵，五步一步都不能少。**数二不要求本节内容。**

### SELFCHECK
1. 算：$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$，写出 $\lambda = 1$ 的两个特征向量，算内积看是否正交。
2. 算：对上面两个特征向量做施密特正交化，再各自单位化。
3. 判：$\begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{pmatrix}$ 是正交矩阵吗？
