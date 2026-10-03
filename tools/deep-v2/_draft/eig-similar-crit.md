### ONELINE
特征值相同不一定相似，还要看能否对角化

### PAIN
**要解决的是：两个矩阵的不变量全都一样时，怎么最终判定它们相似还是不相似。**
典型题：判断 $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ 与 $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 是否相似。这两个矩阵的特征值都是 1（二重）、特征多项式都是 $(\lambda - 1)^{2}$、行列式都是 1、迹都是 2、秩都是 2 —— 不变量清单上一项不差。
最容易想到的两条路都堵着：找 $P$ 是硬解方程组，解不出来；按"不变量相同"下结论，又会把这两个明显不同的矩阵判成相似（$A$ 本来就是最简的对角阵，$B$ 连两个线性无关的特征向量都拿不出来）。可见还需要一条专门对付"不变量全同"的判据。

### GAP
- **坑一 · 拿"特征值相同"当相似**：上面 $A$ 与 $B$ 就是反例 —— 特征值、重数、行列式、迹全同，却不相似；
- **坑二 · 硬找相似变换矩阵 P**：2 阶还能试，3 阶以上没法做；而且"没找到 $P$"只能说明你没找到，不能证明不相似；
- **坑三 · 只比"行列式、迹、秩"这几项最省事的量**：它们全都只是必要条件；上面对反例在这三项上完全一致，一个都没挡住。必要条件的清单再长，也得补上"可对角化性""$r(\lambda E - A)$"这类更细的量。

### INTRO
于是把判定分成两条路线：

- **判"不相似"**：拿不变量清单逐项比（行列式、迹、秩、特征多项式、$r(\lambda E - A)$、可对角化性），任一项不同就够了 —— 最省力，考试里绝大多数"不相似"都靠它；
- **判"相似"**：常用两个办法。① 同阶、特征多项式相同、且**两者都可对角化** $\Rightarrow$ 相似（它们都相似于同一个对角阵，用传递性搭桥）；② 直接构造出可逆 $P$ 使 $P^{-1}AP = B$。

上面那三个坑，逐个补上：

- **坑一补上 · 特征值相同只是起跑线**：$A$ 与 $B$ 的分水岭在"能不能对角化"。$A = E$ 本身就是对角阵；而 $B$ 解 $(I - B)x = 0$：$E - B = \begin{pmatrix} 0 & -1 \\ 0 & 0 \end{pmatrix}$，得 $x_2 = 0$，基础解系只有 $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ 一个，凑不出 2 个线性无关的特征向量，不可对角化。所以两者不相似；
- **坑二补上 · 不用硬解 P，用"桥"**：$A \sim \Lambda$ 且 $B \sim \Lambda$ $\Rightarrow$ $A \sim B$（相似有传递性），分别算出两者的对角阵就行；
- **坑三补上 · 秩是最锋利的那把刀**：$r(\lambda E - A)$ 是相似不变量，所以只要**存在某个 $\lambda$** 使 $r(\lambda E - A) \ne r(\lambda E - B)$，立刻判不相似。上面那对：$r(I - A) = r(O) = 0$，而 $r(I - B) = 1$，一刀两断。

### DETAIL
**判定流程（拿到两个同阶矩阵）**：
1. 比最省事的三个数：$\lvert A \rvert$、$\mathrm{tr}(A)$、$r(A)$。任一不同 $\Rightarrow$ 不相似，结束；
2. 比特征多项式（等价于比特征值含重数）。不同 $\Rightarrow$ 不相似，结束；
3. 特征值全同时，对每个特征值比 $r(\lambda E - A)$ 与 $r(\lambda E - B)$。只要有一处不同 $\Rightarrow$ 不相似；
4. 若以上全部相同、且**两者都能对角化** $\Rightarrow$ 相似（都相似于同一个对角阵，对角元就是那组特征值）；
5. 若全部相同、且两者都不能对角化，考研里出现的情形基本已被第 3 步分开（更细的判定要用 $r((\lambda E - A)^{k})$，大纲不作要求）。例：$A = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ 与 $B = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$：特征多项式都是 $\lambda^{4}$、行列式与迹都是 $0$、秩都是 $2$，但 $A^{2} = O$（$r(A^{2}) = 0$）而 $r(B^{2}) = 1$，所以两者不相似。
**反例算例（写全步骤）**：$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$，$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$。
- 行列式：$\lvert A \rvert = 1$，$\lvert B \rvert = 1\times 1 - 1\times 0 = 1$，相同；
- 迹：$\mathrm{tr}(A) = 2 = \mathrm{tr}(B)$，相同；秩：$r(A) = 2 = r(B)$，相同；
- 特征多项式：$\lvert \lambda E - A \rvert = (\lambda - 1)^{2}$；$B$ 是上三角，$\lvert \lambda E - B \rvert = (\lambda - 1)^{2}$，也相同；
- 分水岭在秩：$E - A = O$ 故 $r(I - A) = 0$；$E - B = \begin{pmatrix} 0 & -1 \\ 0 & 0 \end{pmatrix}$ 故 $r(I - B) = 1$。$0 \ne 1$，所以 $A$ 与 $B$ **不相似**。
**正例算例（不变量全同 + 都能对角化）**：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 与 $B = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$：特征值都是 3 和 1（互异，都是单根，所以都可对角化），同阶 $\Rightarrow$ 相似。直接验证：取 $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$，前面算过 $P^{-1}AP = B$。
**再一个正例（都不可对角化也能相似）**：$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 与 $B = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$。两个都不可对角化，特征值都是 1（二重），$r(I - A) = 1 = r(I - B)$。这时直接找 $P$：取 $P = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$，则 $P^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$，于是

$$
P^{-1}AP = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & \frac{1}{2} \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = B
$$

所以它们相似 —— **"不可对角化"不等于"跟谁都不相似"**。
**常用结论**：
- 同阶 + 特征值相同 + 两者都可对角化 $\Rightarrow$ 相似；
- 存在 $\lambda$ 使 $r(\lambda E - A) \ne r(\lambda E - B)$ $\Rightarrow$ 不相似；
- 相似 $\Rightarrow$ 可对角化性相同（一个能对角化，另一个也必须能）；
- 只有"不变量 + 秩条件"全同才**有可能**相似；这些条件加起来对 4 阶以上仍不是充分条件（大纲不要求判定到底）。

### USAGE
1. 选择题：给两个矩阵问是否相似，或者问"下列条件中哪个能推出 $A$ 与 $B$ 相似"（注意排除只有必要条件的选项）。
2. 填空题：判断含参矩阵与某个对角阵是否相似，由 $r(\lambda E - A)$ 反求参数。
3. 解答题：证明两个矩阵相似（用"都相似于同一个对角阵"搭桥）；用 $\mathrm{tr}$、$\lvert A \rvert$ 相等求出参数后再构造 $P$。**数二不要求本节内容。**

### SELFCHECK
1. 判：$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ 与 $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$，在 $\lambda = 1$ 处 $r(I - A)$、$r(I - B)$ 各是几？它们相似吗？
2. 判：两个同阶矩阵的特征值都是 1、2，其中一个能对角化、另一个不能，它们相似吗？
3. 算：$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 与 $B = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$，验证 $P = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$ 满足 $P^{-1}AP = B$。
