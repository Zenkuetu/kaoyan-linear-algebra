---
tags:
  - 数一
  - 数二
  - 线代
  - 考研数学
章节: "[[第五章 矩阵的特征值与特征向量|第五章 矩阵的特征值与特征向量]]"
层次: 数一+数二
知识点ID: eig-power-app
---

# 用对角化求 Aᵏ 与矩阵函数

> <span class="oneline">**一句话**：A^k=PΛ^kP⁻¹：幂和矩阵函数一次算完</span>

**考试层次**：`数一` `数二` ｜ **章节**：[[第五章 矩阵的特征值与特征向量|第五章 矩阵的特征值与特征向量]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

**要解决的是：$A$ 的 10 次方、100 次方，以及 $a_{n+2} = a_{n+1} + a_n$ 这类递推数列的通项，怎么算得不那么痛苦。**
先看 $A^{10}$，$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。硬乘也能凑：先算 $A^{2}$，再平方得 $A^{4}$，再平方得 $A^{8}$，最后乘两次 —— 大约 4 次矩阵乘法。可换成 $A^{100}$ 呢？还是 8 次左右，勉强能忍；但矩阵换成 10 阶（一次乘法就是 1000 次乘加），那就彻底不现实了。
再看递推数列：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，求 $a_{20}$。硬算要加 18 次，$a_{200}$ 就没法硬算了。
两个问题看着无关，其实是一件事：都是"同一个矩阵反复作用很多次"。最容易想到的"硬算"，在次数一大时全部失效。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

- <span class="pit">**坑一 · 硬乘/硬递推**</span>：$A^{k}$ 要 $k-1$ 次矩阵乘法（平方加速也还是要 $\log k$ 次大矩阵乘法），次数一大算不动，更看不出通项公式的样子；
- <span class="pit">**坑二 · 不管能不能对角化就套公式**</span>：$A^{k} = P\Lambda^{k}P^{-1}$ 的前提是 $A$ 能对角化。$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 只有 1 个线性无关的特征向量，写不出这样的 $P$，公式直接失效；
- <span class="pit">**坑三 · 递推数列不知道怎么写成一阶**</span>：手里只有 $a_{n+2} = a_{n+1} + a_n$，看着跟矩阵没关系。要用矩阵，得先把相邻两项打包成向量 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$，再把递推写成 $u_{n+1} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}u_n$；不知道这一步，公式再熟也用不上。

## <span class="hx hx-intro">🟢</span> 三、于是引入：用对角化求 Aᵏ 与矩阵函数

于是引入**用对角化求幂与矩阵函数**：只要能找到可逆 $P$ 使 $A = P\Lambda P^{-1}$（$\Lambda$ 是对角阵），就有

$$
A^{k} = P\Lambda^{k}P^{-1}, \qquad f(A) = Pf(\Lambda)P^{-1}
$$

其中 $\Lambda^{k}$ 只是把每个对角元各自取 $k$ 次方，$f(\Lambda)$ 同理。递推数列则用 $u_k = A^{k}u_0$ 一次到位。

上面那三个坑，逐个补上：

- <span class="fix">**坑一补上 · 幂从矩阵搬到数上**</span>：$\Lambda^{k} = \begin{pmatrix} \lambda_1^{k} & 0 \\ 0 & \lambda_2^{k} \end{pmatrix}$，$3^{10}$ 一秒出结果；$\Lambda$ 求一百次方也无所谓，工作量只有两个数的幂；
- <span class="fix">**坑二补上 · 先判可对角化再用**</span>：写 $A^{k} = P\Lambda^{k}P^{-1}$ 之前，先确认 $\sum_i m_i = n$；不能对角化就不能用这条（考到的矩阵一般都能对角化）；
- <span class="fix">**坑三补上 · 递推打包成一阶**</span>：$u_{n+1} = Au_n$ 立刻给出 $u_n = A^{n-1}u_1$，问题变成求 $A$ 的幂。初值取 $u_1 = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$（相邻两项打包成一个向量），别漏项也别错位。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">**公式**</span>：设 $A = P\Lambda P^{-1}$，$\Lambda = \mathrm{diag}(\lambda_1, \dots, \lambda_n)$，$k$ 为正整数，则

$$
A^{k} = (P\Lambda P^{-1})^{k} = P\Lambda^{k}P^{-1}
$$

（$k$ 个 $P\Lambda P^{-1}$ 连乘，中间的 $P^{-1}P = E$ 两两抵消，只剩两头的 $P$ 与 $P^{-1}$。）同理，对多项式 $f(x) = c_kx^{k} + \cdots + c_1x + c_0$：

$$
f(A) = Pf(\Lambda)P^{-1}, \qquad f(\Lambda) = \mathrm{diag}(f(\lambda_1), \dots, f(\lambda_n))
$$

**算例一（写全步骤，求 $A^{10}$）**：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。
上一节已得 $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$，$\Lambda = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$，且 $P^{2} = 2E$ 故 $P^{-1} = \frac{1}{2}P$。于是

$$
A^{10} = P\Lambda^{10}P^{-1} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3^{10} & 0 \\ 0 & 1^{10} \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
$$

先算前两个的乘积：

$$
\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3^{10} & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 3^{10} & 1 \\ 3^{10} & -1 \end{pmatrix}
$$

再乘第三个：

$$
A^{10} = \frac{1}{2}\begin{pmatrix} 3^{10} & 1 \\ 3^{10} & -1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 3^{10} + 1 & 3^{10} - 1 \\ 3^{10} - 1 & 3^{10} + 1 \end{pmatrix}
$$

代入 $3^{10} = 59049$：

$$
A^{10} = \begin{pmatrix} 29525 & 29524 \\ 29524 & 29525 \end{pmatrix}
$$

<span class="lab">**校验**</span>：$A^{10}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 应当等于 $3^{10}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 59049 \\ 59049 \end{pmatrix}$；而 $\begin{pmatrix} 29525 & 29524 \\ 29524 & 29525 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 29525 + 29524 \\ 29524 + 29525 \end{pmatrix} = \begin{pmatrix} 59049 \\ 59049 \end{pmatrix}$，对上了。
<span class="lab">**算例二（递推数列）**</span>：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，求 $a_6$。
打包 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$，则 $u_{n+1} = Au_n$，$A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$，于是 $u_5 = A^{4}u_1$。逐步算：

$$
A^{2} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}, \qquad A^{4} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 3 & 5 \end{pmatrix}
$$

$$
u_5 = A^{4}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 + 3 \\ 3 + 5 \end{pmatrix} = \begin{pmatrix} 5 \\ 8 \end{pmatrix} \implies a_5 = 5, \quad a_6 = 8
$$

与逐项加出来的 $1, 1, 2, 3, 5, 8$ 一致。这里 $A$ 的特征值是 $\frac{1 \pm \sqrt{5}}{2}$（解 $\lambda^{2} - \lambda - 1 = 0$），次数大时用对角化算 $A^{n}$ 才是通法。
<span class="key">**常用结论**</span>：
- $A^{k} = P\Lambda^{k}P^{-1}$，$\Lambda^{k}$ 只把对角元各自取幂；
- $f(A) = Pf(\Lambda)P^{-1}$，于是 $\lvert f(A) \rvert = \prod_i f(\lambda_i)$、$\mathrm{tr}(f(A)) = \sum_i f(\lambda_i)$ 一起解决；
- 递推 $\alpha_{k+1} = A\alpha_k$ 的通项是 $\alpha_k = A^{k}\alpha_0$，配合对角化就能写出通项公式；
- $\lvert A^{k} \rvert = \lvert \Lambda^{k} \rvert = \lambda_1^{k}\cdots\lambda_n^{k}$，也是一个常用的口算点；
- 前提：必须先确认 $A$ 可对角化（$\sum_i m_i = n$）。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：由 $A = P\Lambda P^{-1}$ 判断 $A^{k}$ 的表达式，或者问"下列哪个矩阵能用这个公式求幂"（考可对角化的前提）。
2. 填空题：给特征值与 $P$，写出 $A^{k}$ 或 $f(A)$，常见 $\lvert A^{k} \rvert = \lvert A \rvert^{k}$、$\mathrm{tr}(A^{k}) = \sum\lambda_i^{k}$。
3. 解答题：求 $A^{n}$（标准五步：特征值 → 特征向量 → $P$ 与 $\Lambda$ → 求 $P^{-1}$ → 代 $A^{n} = P\Lambda^{n}P^{-1}$），以及由此求递推数列的通项。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 对不可对角化矩阵仍用此公式

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，用 $P\Lambda^{10}P^{-1}$ 写出 $A^{10}$ 的主对角元。
- [ ] 判：$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 能不能写成 $P\Lambda P^{-1}$（$\Lambda$ 为对角阵）？为什么？
- [ ] 算：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，写出对应的 $A$ 与 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$ 的递推式，并算出 $a_6$。

> [!quote]- 🕸️ 八、关系网（点开查看 2 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[相似对角化的方法与步骤]] | 对角化后立得幂与矩阵函数 |
> | 对方 ⇒ 本点 | 🟩 概念关联（同源/构成） | [[方阵的幂与矩阵多项式]] | 同一个"求 Aᵏ"主题的两种手段：初等技巧（拆分/秩 1）与对角化 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - [[相似对角化的方法与步骤]] ⇒ 🟧 充分 ⇒ 本点——对角化后立得幂与矩阵函数
> - [[方阵的幂与矩阵多项式]] ⇒ 🟩 关联 ⇒ 本点——同一个"求 Aᵏ"主题的两种手段：初等技巧（拆分/秩 1）与对角化

## <span class="hx hx-nav">🧭</span> 九、导航


- 本章：[[第五章 矩阵的特征值与特征向量|第五章 矩阵的特征值与特征向量]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
