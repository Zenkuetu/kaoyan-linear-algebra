### ONELINE
逐个减掉投影变正交，再除以长度单位化

### PAIN
**正交化要解决的问题是：把一组不垂直的向量，换成一组两两垂直、本事不变的向量。**
先看具体动作。两个线性无关的向量
$$
\alpha_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad \alpha_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}
$$
先算 $(\alpha_1, \alpha_2) = 1 \times 1 + 1 \times 0 + 0 \times 1 = 1 \ne 0$，它们不垂直。要求换出两个两两垂直的向量，而且换出来的向量与原来两个"本事一样大"（能互相表示）。最容易想到的办法是直接改用 $\varepsilon_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$、$\varepsilon_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$：它们确实垂直，可本事变大了 —— $\alpha_1 - \alpha_2 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$ 能被 $\alpha_1, \alpha_2$ 凑出来，却凑不成 $\varepsilon_1, \varepsilon_2$ 的组合（第三个分量永远凑不出 $-1$）。

### GAP
所以只能"改造"原来的向量，不能换一批。土办法挨个数一遍：

- **坑一 · 直接换成坐标轴方向的 $\varepsilon$**：垂直是垂直了，表示能力变了（上面已经否掉），换出来的组跟原来的组根本不等价。
- **坑二 · 靠试凑垂直**：三维、四维还能碰碰运气，$n$ 维就试不动了；随手试出来的向量很可能落到原来的表示范围外面，凑不出原来的向量。
- **坑三 · 把"正交化"和"单位化"混着做**：一边减投影一边除长度，投影系数马上就乱 —— 分母该用内积 $(\beta_j, \beta_j)$，很多人写成长度 $\lVert\beta_j\rVert$，或者写成 $(\alpha_j, \alpha_j)$，整个 $\beta_i$ 都跟着错。

### INTRO
于是引入**施密特正交化**：从第一个向量开始，一个一个地"减掉它在前面所有向量上的投影"，
$$
\beta_1 = \alpha_1, \qquad \beta_i = \alpha_i - \sum_{j=1}^{i-1} \frac{(\alpha_i, \beta_j)}{(\beta_j, \beta_j)} \beta_j
$$
这样得到的 $\beta_1, \dots, \beta_s$ 两两正交，而且与原来的组等价（本事一点没变）。最后把每个 $\beta_i$ 除以自己的长度，得到长度都是 $1$ 的向量，这一步叫**单位化**；如果原来那组是 $n$ 个**线性无关**的 $n$ 维向量，正交化后得到 $n$ 个两两正交的非零向量，再单位化就得到 $n$ 个两两正交的单位向量 —— 这组单位向量就叫**标准正交基**。

上面那三个坑，逐个补上：

- **坑一补上 · 一直待在原来的范围里**：每一步减掉的都是前面 $\beta$ 的倍数，而 $\beta$ 又是 $\alpha$ 的组合，所以做出来的向量始终能由原来的组表示；反过来也能解回去（$\alpha_2 = \beta_2 + \frac{1}{2}\beta_1$），两边等价，本事没变。
- **坑二补上 · 有公式不用试**：投影系数固定是 $\frac{(\alpha_i, \beta_j)}{(\beta_j, \beta_j)}$，照着算就行，$n$ 维也一样。
- **坑三补上 · 两件事分开做**：先把 $s$ 个 $\beta$ 全部正交化完，最后统一单位化；分母是内积 $(\beta_j, \beta_j)$，不是长度 $\lVert\beta_j\rVert$。

> 顺带提一句：到第五章求实对称矩阵的正交对角化时，这一步是必经之路（重根对应的特征向量要先正交化）。现在不懂特征值不影响做本点的题。

### DETAIL
**前提（不能省）**：要正交化的向量组必须**线性无关**，而且全程都在实向量里做（内积的正定性 $(\alpha, \alpha) \ge 0$ 靠的是实数平方和非负）。原因很直接：如果原来那组相关，某一步会算出 $\beta_i = 0$，下一步要除以 $(\beta_i, \beta_i) = 0$，根本除不动。
**公式**：
$$
\beta_1 = \alpha_1
$$
$$
\beta_i = \alpha_i - \frac{(\alpha_i, \beta_1)}{(\beta_1, \beta_1)}\beta_1 - \frac{(\alpha_i, \beta_2)}{(\beta_2, \beta_2)}\beta_2 - \dots - \frac{(\alpha_i, \beta_{i-1})}{(\beta_{i-1}, \beta_{i-1})}\beta_{i-1}
$$
**单位化**：
$$
\gamma_i = \frac{1}{\lVert\beta_i\rVert}\beta_i
$$
（$\beta_i \ne 0$：线性无关这个前提保证了这一点；若 $\beta_i = 0$，说明 $\alpha_i$ 能由前面 $i-1$ 个向量表示，与整组无关矛盾）
**算例（全步骤）**：$\alpha_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$、$\alpha_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$、$\alpha_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$（这组线性无关）。
第一步：$\beta_1 = \alpha_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$，$(\beta_1, \beta_1) = 1 + 1 + 0 = 2$。
第二步：$(\alpha_2, \beta_1) = 1 \times 1 + 0 \times 1 + 1 \times 0 = 1$，于是
$$
\beta_2 = \alpha_2 - \frac{1}{2}\beta_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \begin{pmatrix} \frac{1}{2} \\ \frac{1}{2} \\ 0 \end{pmatrix} = \begin{pmatrix} \frac{1}{2} \\ -\frac{1}{2} \\ 1 \end{pmatrix}
$$
验算：$(\beta_1, \beta_2) = 1 \times \frac{1}{2} + 1 \times (-\frac{1}{2}) + 0 \times 1 = 0$，确实正交；$(\beta_2, \beta_2) = \frac{1}{4} + \frac{1}{4} + 1 = \frac{3}{2}$。
第三步：$(\alpha_3, \beta_1) = 0 \times 1 + 1 \times 1 + 1 \times 0 = 1$，$(\alpha_3, \beta_2) = 0 \times \frac{1}{2} + 1 \times (-\frac{1}{2}) + 1 \times 1 = \frac{1}{2}$，于是
$$
\beta_3 = \alpha_3 - \frac{1}{2}\beta_1 - \frac{\frac{1}{2}}{\frac{3}{2}}\beta_2 = \alpha_3 - \frac{1}{2}\beta_1 - \frac{1}{3}\beta_2
$$
$$
= \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} - \begin{pmatrix} \frac{1}{2} \\ \frac{1}{2} \\ 0 \end{pmatrix} - \begin{pmatrix} \frac{1}{6} \\ -\frac{1}{6} \\ \frac{1}{3} \end{pmatrix} = \begin{pmatrix} -\frac{2}{3} \\ \frac{2}{3} \\ \frac{2}{3} \end{pmatrix}
$$
验算：$(\beta_1, \beta_3) = -\frac{2}{3} + \frac{2}{3} + 0 = 0$，$(\beta_2, \beta_3) = -\frac{1}{3} - \frac{1}{3} + \frac{2}{3} = 0$，都正交；$(\beta_3, \beta_3) = \frac{4}{9} + \frac{4}{9} + \frac{4}{9} = \frac{4}{3}$。
单位化：$\lVert\beta_1\rVert = \sqrt{2}$，$\lVert\beta_2\rVert = \sqrt{\frac{3}{2}} = \frac{\sqrt{6}}{2}$，$\lVert\beta_3\rVert = \sqrt{\frac{4}{3}} = \frac{2}{\sqrt{3}}$，所以
$$
\gamma_1 = \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \\ 0 \end{pmatrix}, \qquad \gamma_2 = \begin{pmatrix} \frac{1}{\sqrt{6}} \\ -\frac{1}{\sqrt{6}} \\ \frac{2}{\sqrt{6}} \end{pmatrix}, \qquad \gamma_3 = \begin{pmatrix} -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{pmatrix}
$$
核一下长度：$\gamma_2$ 三个分量的平方和是 $\frac{1}{6} + \frac{1}{6} + \frac{4}{6} = 1$，$\gamma_3$ 的是 $\frac{1}{3} + \frac{1}{3} + \frac{1}{3} = 1$，都是单位向量。
**结果不唯一**：每个 $\beta_i$ 都可以乘任意非零常数（单位化后就是差一个正负号），但"与原来那组等价"这件事不变。
**常用结论**：正交化前后两组等价，所以秩相等、表示能力一样，而且原来那组能表示的向量，新的正交组也都能表示；把 $\gamma_1, \dots, \gamma_n$ 按列排成的 $n$ 阶方阵 $Q$ 满足 $Q^{\mathrm{T}}Q = E$，也就是第二章讲的正交矩阵 —— 这正是正交矩阵的来路。

### USAGE
1. 选择题：给正交化公式问某个 $\beta_i$，或问投影系数的分母是什么（内积 $(\beta_j, \beta_j)$，不是长度）。
2. 填空题：把给定的线性无关组正交化、单位化（三阶最常见），写出 $\beta_2$ 或 $\gamma_2$。
3. 解答题：求一组标准正交基 —— 后面求正交矩阵、实对称矩阵正交对角化时必须先做这一步。**数二同样要求**：大纲要求掌握线性无关向量组正交规范化的施密特(Schmidt)方法。

### SELFCHECK
1. 算：$\alpha_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \alpha_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ 正交化后的 $\beta_2$，并验算 $(\beta_1, \beta_2) = 0$。（$\beta_2 = \begin{pmatrix} \frac{1}{2} \\ -\frac{1}{2} \\ 1 \end{pmatrix}$，$(\beta_1, \beta_2) = \frac{1}{2} - \frac{1}{2} + 0 = 0$。）
2. 判断：投影系数的分母该写 $(\beta_j, \beta_j)$ 还是 $\lVert\beta_j\rVert$？（写 $(\beta_j, \beta_j)$；写成长度，系数就算错了。）
3. 判断：任意向量组都能做施密特正交化吗？（不行，必须线性无关，否则中间某步会算出零向量，下一步除不动。）
