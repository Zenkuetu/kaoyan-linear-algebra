### ONELINE
解 (λE−A)x=0，基础解系就是特征向量

### PAIN
**要解决的是：特征值算出来以后，属于它的特征向量到底有哪些 —— 题目要的是"全部特征向量"，只给一个不够。**
继续用 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，上一节已经算出 $\lambda = 3$ 是特征值。现在的任务是：找出所有满足 $A\alpha = 3\alpha$ 的非零向量 $\alpha$。
最容易想到的办法是接着"试"：试出 $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 是一个；那么 $2\begin{pmatrix} 1 \\ 1 \end{pmatrix}$、$-5\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 也是。可除此之外还有没有别的方向的向量？靠试是试不出"没有别的了"这个结论的。
另一个想法是把 $A\alpha = 3\alpha$ 按分量拆成两个方程硬解 —— 这一步方向是对的，问题是拆完以后怎么把"全部解"写成一个干净的形式，并且别把不该算的向量也算进去。

### GAP
- **坑一 · 只写一个特征向量就交卷**：题目问"全部特征向量"，答案得写成 $k\begin{pmatrix} 1 \\ 1 \end{pmatrix}$（$k \ne 0$ 为任意常数）这种形式；只丢一个向量上去，属于答案不完整；
- **坑二 · 忘了把零向量踢掉**：解 $(\lambda E - A)x = 0$ 得到的是齐次方程组的通解，里面含 $k = 0$ 这一项，而零向量不是特征向量，结论里必须补一句"$k \ne 0$"；
- **坑三 · 把不同特征值的特征向量加在一起**：若 $\alpha_1$ 属于 3、$\alpha_2$ 属于 1，则 $A(\alpha_1 + \alpha_2) = 3\alpha_1 + 1\cdot\alpha_2$，它既不等于 $3(\alpha_1 + \alpha_2)$ 也不等于 $1\cdot(\alpha_1 + \alpha_2)$，所以 $\alpha_1 + \alpha_2$ 不是特征向量 —— 特征向量要按特征值分组，不能跨组相加。

### INTRO
于是引入**特征子空间**：固定一个特征值 $\lambda$，把满足 $(\lambda E - A)x = 0$ 的全部向量（连同零向量）放在一起，记作

$$
V_\lambda = \{\, x \mid (\lambda E - A)x = 0 \,\}
$$

它其实就是第四章里那个齐次方程组的解空间 —— 名字里带"空间"两个字听着唬人，算法完全是老一套：对 $\lambda E - A$ 作行变换、求基础解系。它的维数有一个干净公式：$\dim V_\lambda = n - r(\lambda E - A)$。

上面那三个坑，逐个补上：

- **坑一补上 · 全部特征向量一次写全**：$V_\lambda$ 里去掉零向量就是属于 $\lambda$ 的**全部**特征向量，写成"基础解系的非零线性组合"。上面 $\lambda = 3$ 时 $r(3E - A) = 1$，只有 1 个自由未知量，所以全部特征向量正好是 $k\begin{pmatrix} 1 \\ 1 \end{pmatrix}$（$k \ne 0$），一个不漏；
- **坑二补上 · 零向量被单独排除**：$V_\lambda$ 是解空间（含零向量），"特征向量"指 $V_\lambda$ 里**非零**的那些 —— 集合和集合里的非零元素分清楚，最后补一句 $k \ne 0$ 就完事；
- **坑三补上 · 按 λ 分组写，不跨组相加**：属于 3 的写成 $k_1\begin{pmatrix} 1 \\ 1 \end{pmatrix}$，属于 1 的写成 $k_2\begin{pmatrix} 1 \\ -1 \end{pmatrix}$，两组分开列；不同组的向量还线性无关（下下节讲），这正好是判断能不能对角化的材料。

### DETAIL
**定义**：$V_\lambda = \{\, x \mid (\lambda E - A)x = 0 \,\}$ 称为 $A$ 的属于 $\lambda$ 的特征子空间；它的非零向量就是属于 $\lambda$ 的全部特征向量；$\dim V_\lambda = n - r(\lambda E - A)$。
**求法（四步）**：
1. 把 $\lambda$ 代进去，写出矩阵 $\lambda E - A$；
2. 对 $\lambda E - A$ 作初等行变换，化成行阶梯形（行变换不改变方程组的解集）；
3. 取自由未知量，写出基础解系 $\xi_1, \dots, \xi_{n-r}$；
4. 全部特征向量写成 $k_1\xi_1 + \cdots + k_{n-r}\xi_{n-r}$，其中 $k_1, \dots, k_{n-r}$ 不全为零。
**算例（写全步骤）**：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。
对 $\lambda = 3$：

$$
3E - A = \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \xrightarrow{\;r_2 + r_1\;} \begin{pmatrix} 1 & -1 \\ 0 & 0 \end{pmatrix}
$$

同解方程 $x_1 - x_2 = 0$，即 $x_1 = x_2$，$x_2$ 是自由未知量；取 $x_2 = 1$ 得基础解系 $\xi_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$。全部特征向量：$k\begin{pmatrix} 1 \\ 1 \end{pmatrix}$，$k \ne 0$。维数 $= 2 - r(3E - A) = 2 - 1 = 1$。
对 $\lambda = 1$：

$$
E - A = \begin{pmatrix} -1 & -1 \\ -1 & -1 \end{pmatrix} \xrightarrow{\;r_2 - r_1\;} \begin{pmatrix} -1 & -1 \\ 0 & 0 \end{pmatrix}
$$

同解方程 $x_1 + x_2 = 0$，取 $x_2 = 1$ 得基础解系 $\xi_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$。全部特征向量：$k\begin{pmatrix} 1 \\ -1 \end{pmatrix}$，$k \ne 0$。维数 $= 2 - 1 = 1$。
**能不能对角化**：$n = 2$，两组各能拿出 1 个线性无关的特征向量，共 $1 + 1 = 2 = n$ 个 —— 能对角化（判据下一节给）。
**常用结论**：
- 属于同一个 $\lambda$ 的特征向量的非零线性组合，仍是属于 $\lambda$ 的特征向量（因为 $V_\lambda$ 是解空间，对加法与数乘封闭）；
- 属于不同特征值的特征向量线性无关；
- $\dim V_\lambda = n - r(\lambda E - A)$，这个数就是下一节的"几何重数"；
- $\lambda$ 是特征值 $\iff r(\lambda E - A) < n \iff \lvert \lambda E - A \rvert = 0$，三种说法等价。

### USAGE
1. 选择题：给一个小矩阵，问"下列哪个向量是 $A$ 的特征向量"（代进去看 $A\xi$ 与 $\xi$ 是否成比例最快），或者问某特征值对应的线性无关特征向量有几个。
2. 填空题：由已知特征向量反求矩阵中的参数；或由 $r(\lambda E - A)$ 反求特征值与特征向量的个数。
3. 解答题：求"全部特征值与特征向量"，标准答法是每个 $\lambda$ 后面跟一句"属于 $\lambda$ 的全部特征向量为 $k\xi$（$k \ne 0$，$k$ 为任意常数）"，多个基础解系时写成 $k_1\xi_1 + k_2\xi_2$ 并注明不全为零。

### SELFCHECK
1. 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，$\lambda = 3$ 时对 $3E - A$ 作行变换，写出基础解系。
2. 判：$\begin{pmatrix} 1 \\ 1 \end{pmatrix} + \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$ 是 $A$ 的特征向量吗？
3. 数：$A$ 是 3 阶矩阵，$\lambda = 5$ 是二重特征值，$r(5E - A) = 2$，属于 5 的线性无关特征向量有几个？
