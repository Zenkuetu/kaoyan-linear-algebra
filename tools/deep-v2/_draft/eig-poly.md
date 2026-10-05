### ONELINE
|λE−A|=0 的根就是全部特征值（含重数）

### PAIN
**要解决的是：上一节留下的那个 $\lambda$ 到底等于几 —— 也就是特征值该怎么系统地算出来。**
上一节留下了 $(\lambda E - A)\alpha = 0$，可 $\lambda$ 和 $\alpha$ 都还没定，而题目问的恰恰是"求 $A$ 的全部特征值"。
拿 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 说，要找的是所有让 $(\lambda E - A)\alpha = 0$ 有非零解的 $\lambda$。
最容易想到的办法是"猜"：上一节试出来的两个数是 3 和 1，而 $A$ 的主对角元都是 2 —— 那就猜 $\lambda = 2$？一验就错：$\lambda = 2$ 时

$$
2E - A = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}
$$

它的行列式是 $0 \times 0 - (-1)\times(-1) = -1 \ne 0$，齐次方程组只有零解，所以 2 根本不是特征值。猜不出来，那能不能像解方程组那样把 $\lambda$ 解出来？

### GAP
- **坑一 · 试数/猜数**：特征值未必是整数。$A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$ 的特征值是 $\frac{1 \pm \sqrt{5}}{2}$，$\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ 的特征值是 $\pm i$，这些数根本试不出来，也猜不到；
- **坑二 · 把 $(\lambda E - A)\alpha = 0$ 当普通方程组硬解**：$n = 2$ 时看着像 $\lambda, x_1, x_2$ 三个未知数、两个方程，其实**不是**线性方程组 —— $\lambda$ 和 $x_i$ 是乘在一起的（$\lambda x_i$ 是二次项），"未知数比方程多就有无穷多解"这条规律在这里根本不适用，硬解也解不出"一族含 $\lambda$ 的解"；$n$ 大了更没戏；
- **坑三 · 把主对角元当特征值**：上面 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 的主对角元都是 2，它的特征值却是 3 和 1，一个都对不上。只有三角形矩阵（非对角元全是 0）才能直接从主对角元读出特征值，一般矩阵不行。

### INTRO
于是引入**特征多项式**与**特征方程**：对 $n$ 阶矩阵 $A$，把 $\lambda$ 当成未知数，

$$
\lvert \lambda E - A \rvert = \begin{vmatrix} \lambda - a_{11} & -a_{12} & \cdots & -a_{1n} \\ -a_{21} & \lambda - a_{22} & \cdots & -a_{2n} \\ \vdots & \vdots & & \vdots \\ -a_{n1} & -a_{n2} & \cdots & \lambda - a_{nn} \end{vmatrix}
$$

算出来是一个关于 $\lambda$ 的 $n$ 次多项式，叫 $A$ 的**特征多项式**；方程 $\lvert \lambda E - A \rvert = 0$ 叫**特征方程**，它的根就是 $A$ 的全部特征值（重根按重数计）。

上面那三个坑，逐个补上：

- **坑一补上 · 一次把根全算出来**：$n$ 次方程在复数范围内正好有 $n$ 个根（计重数），不用试也不会漏；$\frac{1 \pm \sqrt{5}}{2}$、$\pm i$ 这种根照样能解出来；
- **坑二补上 · 把 λ 单独摘出来**：用第四章那条"齐次方程组有非零解 $\iff$ 系数行列式为 0"，$(\lambda E - A)\alpha = 0$ 有非零解就等价于 $\lvert \lambda E - A \rvert = 0$ —— 向量 $\alpha$ 被消掉，只剩 $\lambda$ 一个未知数；
- **坑三补上 · 有现成的校验**：算完特征值别急着往下走，用 $\lambda_1 + \lambda_2 = \mathrm{tr}(A)$（主对角元之和）、$\lambda_1\lambda_2 = \lvert A \rvert$ 对一遍。上面 $A$ 的特征值是 3 和 1：$3 + 1 = 2 + 2 = 4$ 对上了，$3 \times 1 = 2 \times 2 - 1 \times 1 = 3$ 也对上了。

### DETAIL
**定义**：$\lvert \lambda E - A \rvert$ 称为 $A$ 的特征多项式（$\lambda$ 的 $n$ 次多项式，最高次项系数为 1）；$\lvert \lambda E - A \rvert = 0$ 称为特征方程；它的根（计重数）就是 $A$ 的全部特征值。
**算例（写全步骤）**：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。
第一步，写出特征多项式：

$$
\lvert \lambda E - A \rvert = \begin{vmatrix} \lambda - 2 & -1 \\ -1 & \lambda - 2 \end{vmatrix} = (\lambda - 2)^{2} - (-1)\times(-1) = (\lambda - 2)^{2} - 1
$$

第二步，展开并因式分解：

$$
(\lambda - 2)^{2} - 1 = \lambda^{2} - 4\lambda + 3 = (\lambda - 1)(\lambda - 3)
$$

第三步，令它等于 0 解方程：$\lambda_1 = 3$，$\lambda_2 = 1$（两个单根）。
第四步，校验：$\lambda_1 + \lambda_2 = 4 = 2 + 2 = \mathrm{tr}(A)$；$\lambda_1\lambda_2 = 3 = 2 \times 2 - 1 \times 1 = \lvert A \rvert$，两把都对上。
**另一个算例（三角形矩阵）**：$B = \begin{pmatrix} 1 & 0 \\ 4 & 3 \end{pmatrix}$ 是下三角，$\lvert \lambda E - B \rvert = (\lambda - 1)(\lambda - 3)$，特征值就是主对角元 1 和 3；校验：$\mathrm{tr}(B) = 1 + 3 = 4$，$\lvert B \rvert = 1 \times 3 = 3$。
**复特征值**：$C = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$，$\lvert \lambda E - C \rvert = \lambda^{2} + 1$，根是 $\lambda = \pm i$ —— 实矩阵的特征值也可能是复数，所以求根要在复数范围内进行（这也解释了为什么"$n$ 个特征值"这句话永远成立）。
**常用结论**：
- $\lambda_1 + \lambda_2 + \cdots + \lambda_n = a_{11} + a_{22} + \cdots + a_{nn} = \mathrm{tr}(A)$；
- $\lambda_1\lambda_2\cdots\lambda_n = \lvert A \rvert$；
- 三角形矩阵（含对角阵）的特征值就是主对角线上的数；
- 实矩阵的**非实**特征值成共轭对出现（上面 $\pm i$ 就是一对），所以非实特征值的个数总是偶数个；奇数阶实矩阵则必定至少有一个实特征值。

### USAGE
1. 选择题：判断某个数是不是特征值（代进 $\lvert \lambda E - A \rvert$ 看是否为 0），或者用"$\sum\lambda_i = \mathrm{tr}(A)$"直接排除选项。
2. 填空题：给含参矩阵，由已知特征值（或由迹、行列式）反求参数；也考"特征值之和 = 主对角元之和"这类口算题。
3. 解答题：求特征值是所有特征值题目的第一步，解答里必须写出特征多项式、解方程、标明重数，再往下求特征向量。

### SELFCHECK
1. 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，写出 $\lvert \lambda E - A \rvert$、解出特征值，并用迹和行列式校验。
2. 判：$\begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$ 的特征值是多少？（提示：上三角矩阵）
3. 想：$\lambda = 2$ 是 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 的特征值吗？代进特征多项式看看。
