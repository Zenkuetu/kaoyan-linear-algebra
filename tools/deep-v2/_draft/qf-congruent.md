### ONELINE
有可逆 $C$ 使 $C^{\mathrm{T}}AC=B$，就称 $A$ 与 $B$ 合同

### PAIN
**矩阵合同要解决的是：两个二次型的矩阵，什么时候能靠"换变量"互相变过去。**
拿一个具体的来。$f = 2x_1^2 + 2x_1x_2 + 2x_2^2$ 的矩阵是 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$；换成变量以后得到 $g = 3y_1^2 + y_2^2$，它的矩阵是 $B = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$。问题很实际：**这两个矩阵算不算"同一个东西的两种写法"？** 就像相似矩阵那样，能不能找到一个矩阵把它们连起来？

最容易想到的是照搬相似的定义：找个可逆矩阵 $P$，看 $P^{-1}AP$ 能不能等于 $B$。试一下：取 $P = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$，因为它是正交矩阵，$P^{-1} = P^{\mathrm{T}}$，于是 $P^{-1}AP = P^{\mathrm{T}}AP = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$，正好等于 $B$。**这个例子成功了**，于是很自然地以为"合同 = 相似"。可换一对就穿了：$A' = \mathrm{diag}(2,2)$ 与 $B' = \mathrm{diag}(1,3)$ —— 它们当然算同一类（两个正项），取 $C = \begin{pmatrix} \frac{1}{\sqrt{2}} & 0 \\ 0 & \sqrt{\frac{3}{2}} \end{pmatrix}$ 就有 $C^{\mathrm{T}}A'C = \mathrm{diag}(1,3) = B'$；但它们的特征值分别是 $2,2$ 与 $1,3$，**任何** $P^{-1}A'P$ 都保持特征值不变，永远变不到 $B'$。照相似的路子走，会把这类本该算"同一类"的矩阵判成不同类。

### GAP
所以"换变量"对应的连接方式跟相似不是一回事，土办法的三个缺口是：

- **坑一 · 把 $C^{\mathrm{T}}AC$ 写成 $C^{-1}AC$**：二次型换变量是 $x = Cy$，代进去得 $y^{\mathrm{T}}(C^{\mathrm{T}}AC)y$，出来的是**转置**形式，不是 $C^{-1}AC$。写成 $C^{-1}$ 就跑到相似那边去了，判据全错；
- **坑二 · 以为合同和相似差不多**：$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$（特征值 $3, -1$）与 $B = \mathrm{diag}(3,-1)$ 相似（特征值相同），也与 $\mathrm{diag}(1,-1)$ 合同（都是"一正一负"），但 $A$ 与 $\mathrm{diag}(3,-1)$ 也合同、与 $\mathrm{diag}(1,-1)$ 却**不相似**。两个关系各管一头，混着用必错；
- **坑三 · 拿"秩相等"当合同**：$\mathrm{diag}(1,-1,0)$ 与 $\mathrm{diag}(1,1,0)$ 秩都是 $2$，秩一样却**不合同**（一个 $p = 1, q = 1$，一个 $p = 2, q = 0$）。只看秩远远不够。

### INTRO
于是引入**矩阵合同**：设 $A$、$B$ 为 $n$ 阶方阵，若存在**可逆**矩阵 $C$ 使

$$
C^{\mathrm{T}}AC = B
$$

就称 $A$ 与 $B$ **合同**（记作 $A \simeq B$），这个变换叫**合同变换**。

上面那三个坑，逐个补上：

- **坑一补上 · 出来的一定是转置形式**：$x = Cy$ 代入 $f = x^{\mathrm{T}}Ax$ 得 $f = y^{\mathrm{T}}(C^{\mathrm{T}}AC)y$，所以二次型换变量对应的矩阵变化就是 $C^{\mathrm{T}}AC$，从头到尾没有求逆这一步。上面例子里用 $C = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ 得 $C^{\mathrm{T}}AC = \mathrm{diag}(3,1) = B$，$A \simeq B$；
- **坑二补上 · 两个关系的判据各归各位**：相似看**特征值**（$P^{-1}AP$ 保持特征值不变），合同看**惯性指数**（$C^{\mathrm{T}}AC$ 只保持正负项的个数）。$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ 与 $\mathrm{diag}(3,-1)$ 相似（特征值 $3,-1$ 相同），与 $\mathrm{diag}(1,-1)$ 合同（$p = q = 1$ 相同）；当 $C$ 恰好是正交矩阵时 $C^{\mathrm{T}} = C^{-1}$，两个关系才重合 —— 这正是正交变换法两头都占的原因；
- **坑三补上 · 实对称矩阵合同的完整判据**：对**实对称**矩阵，$A \simeq B \iff$ $A$ 与 $B$ 的正惯性指数、负惯性指数**分别相同**。用这条判 $\mathrm{diag}(1,-1,0)$ 与 $\mathrm{diag}(1,1,0)$：$(1,1) \neq (2,0)$，不合同，一句话定案。

> 顺带提一句：这层"同一个二次型在不同变量下的矩阵"的关系，到附录会换一个说法。名字换了，判据一模一样，现在不懂它照样能把题做完。

### DETAIL
**定义**：设 $A$、$B$ 为 $n$ 阶矩阵，若存在**可逆**矩阵 $C$ 使得 $C^{\mathrm{T}}AC = B$，则称 $A$ 与 $B$ 合同，记作 $A \simeq B$；$C$ 可逆这个条件是必须的（否则 $C^{\mathrm{T}}AC$ 的秩会掉）。

**基本性质**：
- **反身性**：取 $C = E$ 得 $A \simeq A$；
- **对称性**：$C^{\mathrm{T}}AC = B$ 时取 $C^{-1}$ 得 $(C^{-1})^{\mathrm{T}}BC^{-1} = A$，所以 $B \simeq A$；
- **传递性**：$C_1^{\mathrm{T}}AC_1 = B$、$C_2^{\mathrm{T}}BC_2 = D$ 时 $(C_1C_2)^{\mathrm{T}}A(C_1C_2) = D$；
- **保持对称性**：$A$ 对称时 $(C^{\mathrm{T}}AC)^{\mathrm{T}} = C^{\mathrm{T}}A^{\mathrm{T}}C = C^{\mathrm{T}}AC$，所以 $C^{\mathrm{T}}AC$ 必为对称矩阵；
- **保持秩**：$C$ 可逆时 $r(C^{\mathrm{T}}AC) = r(A)$。

**算例一（把 $A$ 合同到 $E$）**：$A = \begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}$。取

$$
C = \begin{pmatrix} 1 & -\frac{1}{\sqrt{2}} \\ 0 & \frac{1}{\sqrt{2}} \end{pmatrix}, \qquad \lvert C \rvert = \frac{1}{\sqrt{2}} \neq 0
$$

验算 $C^{\mathrm{T}}AC$：先算 $AC = \begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} 1 & -\frac{1}{\sqrt{2}} \\ 0 & \frac{1}{\sqrt{2}} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & \frac{2}{\sqrt{2}} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & \sqrt{2} \end{pmatrix}$；再左乘 $C^{\mathrm{T}} = \begin{pmatrix} 1 & 0 \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{pmatrix}$ 得 $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$。所以 $A \simeq E$。这与 $A$ 正定（$p = 2 = n$）一致。

**算例二（合同到 $\mathrm{diag}(1,-1)$）**：$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$，特征值 $3, -1$，$(p,q) = (1,1)$。取

$$
C = \begin{pmatrix} \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{2}} \end{pmatrix}, \qquad \lvert C \rvert = -\frac{1}{\sqrt{3}} \neq 0
$$

两列分别是 $A$ 关于 $\lambda = 3$ 与 $\lambda = -1$ 的特征向量（两列的范数平方分别是 $\frac{1}{3}$ 与 $1$），于是 $C^{\mathrm{T}}AC = \mathrm{diag}(3 \times \frac{1}{3}, -1 \times 1) = \mathrm{diag}(1,-1)$。所以 $A \simeq \mathrm{diag}(1,-1)$，这与 $(p,q) = (1,1)$ 一致。
（**注意**：若误写成 $C^{-1}AC$，得到的会是 $\mathrm{diag}(3,-1)$ —— 那是相似对角化，不是合同对角化。）

**算例三（秩同但不合同）**：$\mathrm{diag}(1,-1,0)$ 与 $\mathrm{diag}(1,1,0)$。两者秩都是 $2$，但惯性指数 $(1,1)$ 与 $(2,0)$ 不同，所以**不合同**。

**常用结论**：
- 实对称矩阵：$A \simeq B \iff$ 正、负惯性指数分别相同（判定的唯一工具）；
- 合同 $\Rightarrow$ 秩相等、对称性保持（反过来不成立）；
- 前提提醒：判据"惯性指数相同"要求 $A$、$B$ 都是**实对称**矩阵；一般矩阵的合同问题要用别的手段。

### USAGE
1. 选择题：判断"下列矩阵中与 $A$ 合同的是哪一个" —— 一律先算 $A$ 的 $(p,q)$，再逐个算候选矩阵的 $(p,q)$，相同者入选。**数二要求了解合同变换与合同矩阵的概念**，这类题数二会出现，且主要靠惯性指数来做。
2. 填空题：由"$A$ 与 $B$ 合同"反求参数（两者的秩、惯性指数必须一致），或填一个具体的可逆矩阵 $C$ 使 $C^{\mathrm{T}}AC$ 成为对角阵。数二一般只考概念与惯性指数层面。
3. 解答题：证明合同关系的性质（传递性、$C^{\mathrm{T}}AC$ 仍对称），或"求可逆矩阵 $C$ 使 $C^{\mathrm{T}}AC$ 为对角阵"。**数二对"求 $C$"这类计算同样要求**（正交变换法/配方法化标准形都要写出所用的替换矩阵），不只是概念与判据。

### SELFCHECK
1. 写出 $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ 的一个合同对角形，并说明依据。（$\mathrm{diag}(1,-1)$；因为 $A$ 的特征值是 $3, -1$，$(p,q) = (1,1)$。）
2. 判断：$C^{\mathrm{T}}AC$ 与 $C^{-1}AC$ 是一回事吗？（不是 —— 前者是合同，后者是相似；只有 $C$ 正交时两者才相等。）
3. $\mathrm{diag}(2,2)$ 与 $\mathrm{diag}(1,-1)$ 合同吗？（不合同 —— 前者 $(p,q) = (2,0)$，后者是 $(1,1)$，惯性指数不同。）
