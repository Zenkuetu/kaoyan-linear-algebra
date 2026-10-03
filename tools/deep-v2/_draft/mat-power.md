### ONELINE
同一个方阵连乘 $k$ 次，结果靠找规律不硬算

### PAIN
要算 $A^{100}$，其中 $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$。硬乘两下：$A^{2} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$，$A^{3} = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$，规律肉眼可见：

$$
A^{k} = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix} \qquad (k \ge 1)
$$

可换个矩阵呢？右上角不是 $1$，或者干脆是 $3$ 阶，硬乘到 $100$ 次显然不现实。

### GAP

- **坑一 · 以为元素各自乘方**：矩阵乘法不是“每个元素各自乘方”，以为 $A^{k}$ 就是每个元素单独取 $k$ 次方，这个想法从根上就错了，乘法是按“行乘列”混着算的。
- **坑二 · 硬乘没有操作性**：硬乘没有可操作性，$A^{100}$ 要乘 $99$ 次，考场上没这个时间，而且中间错一步全盘皆错。
- **坑三 · 最省事的那条路也会断**（它第五章才讲，先记个印象）：$A = PDP^{-1}$ 这条路不是万能的，$A$ 不能对角化（特征向量不够）的时候直接断掉，比如只有 $0$ 特征值的 $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$，只能回头找别的结构。
### INTRO

所以求幂改成“先找结构，再套公式”这一套。上面那三个坑，逐个补上：

- **坑一补上 · 幂有结构可依**：幂不是每个元素各自乘方，而是看结构套公式 —— **拆**：$A = \lambda E + B$，其中 $B$ 幂零（比如 $B^{2} = O$），二项式展开后只剩有限几项；
- **坑二补上 · 高次幂不必硬乘**：$A^{100}$ 不用乘 $99$ 次，先把结构找出来、再套公式，一步到位；
- **坑三补上 · 不止一条路可走**：那条最省事的路断了也不要紧 —— **秩 $1$ 型**：$A = \alpha\beta^{\mathrm{T}}$，幂全都能压回 $A$ 自己身上；**周期型**：$A^{2} = A$ 或 $A^{2} = E$，幂在几个矩阵之间循环。

> 顺带提一句：第五章还有一招 —— 换到特征向量的坐标里算完再变回来。现在不懂“特征向量”不影响做题，手上有上面几套结构就够用了。
### DETAIL
**拆分法**：$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = E + B$，其中 $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$。

$$
B^{2} = O \Rightarrow A^{k} = (I + B)^{k} = E + kB = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}
$$

**秩 $1$ 型**：$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = \alpha\beta^{\mathrm{T}}$，$\alpha = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$，$\beta = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$，$\beta^{\mathrm{T}}\alpha = 1 + 4 = 5$。

$$
A^{2} = 5A, \qquad A^{k} = (\beta^{\mathrm{T}}\alpha)^{k-1}A = 5^{k-1}A \qquad (k \ge 1)
$$

直接验 $k = 2$：$A^{2} = \begin{pmatrix} 5 & 10 \\ 10 & 20 \end{pmatrix} = 5A$，对得上。

### USAGE
1. 求高次幂：给一个 $2$ 阶或 $3$ 阶矩阵，考 $A^{10}$、$A^{n}$ 或者 $A^{2025}$
2. 考拆分：$A = \lambda E + B$ 且 $B$ 幂零（例如 $B^{3} = O$），用二项式展开算 $A^{n}$
3. 秩 $1$ 型：$A = \alpha\beta^{\mathrm{T}}$，先用 $A^{k} = (\beta^{\mathrm{T}}\alpha)^{k-1}A$（$k \ge 1$）把幂求出来；第五章还会用“能不能对角化”继续算 $A^{n}$，现在不懂不影响本章做题

### SELFCHECK
1. 举一个满足 $A^{2} = E$、但 $A$ 既不等于 $E$ 也不等于 $- E$ 的 $2$ 阶矩阵，说出它的 $A^{k}$ 是什么
2. 算：$A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ 的 $A^{k}$（答案：$\begin{pmatrix} 2^{k} & k \cdot 2^{k-1} \\ 0 & 2^{k} \end{pmatrix}$，$k \ge 1$）
3. 验：$A = \alpha\beta^{\mathrm{T}}$ 且 $\beta^{\mathrm{T}}\alpha = 3$，则 $A^{k}$ 等于多少（$k \ge 1$）？（答案：$3^{k-1}A$）
