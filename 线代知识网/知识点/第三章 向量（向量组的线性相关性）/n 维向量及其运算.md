---
tags:
  - 数一
  - 数二
  - 线代
  - 考研数学
章节: "[[第三章 向量（向量组的线性相关性）|第三章 向量（向量组的线性相关性）]]"
层次: 数一+数二
知识点ID: vec-def
关联:
  - "[[向量的内积、长度与正交|向量的内积、长度与正交]]"
---

# n 维向量及其运算

> <span class="oneline">**一句话**：n 个数竖着排成一列就是 n 维向量，运算按分量来</span>

**考试层次**：`数一` `数二` ｜ **章节**：[[第三章 向量（向量组的线性相关性）|第三章 向量（向量组的线性相关性）]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

**向量要解决的问题是：矩阵里"单独一列数"要能拿出来当一个东西算。**
先看具体动作。给一个 $3 \times 3$ 矩阵
$$
A = \begin{pmatrix} 1 & 2 & 5 \\ 2 & 0 & 2 \\ 3 & 1 & 5 \end{pmatrix}
$$
问：第三列能不能由前两列凑出来？最容易想到的办法是逐项配系数：$1 \cdot k_1 + 2 \cdot k_2 = 5$、$2 \cdot k_1 + 0 \cdot k_2 = 2$、$3 \cdot k_1 + 1 \cdot k_2 = 5$，凑一凑，$k_1 = 1$、$k_2 = 2$ 正好全对得上。
这一题凑出来了，可这套"拿一列数出来算"的动作有三个别扭的地方：每问一次就要把整列抄一遍，抄错一位整题报废；三个式子是分开写的，一列对一列的关系看不出全局；而且"第三列能由前两列凑出来"这句话本身没有名字，下次遇到同类问题还得从头解释。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

所以先给"一列数"一个正经身份，这件事值得单独立一条。土办法挨个数一遍：

- **坑一 · 每次现抄成一个 $n \times 1$ 矩阵**：$\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ 这种写法本身没错，可一列抄一次，五列抄五次，题目一长就分不清哪个括号对应哪一列；而且第二章里矩阵是一张"表"，把一列也写成括号，读者分不清这里要的是一个对象还是一张表。
- <span class="pit">**坑二 · 直接套矩阵乘法把两列乘起来**</span>：$\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ 与 $\begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$ 都是 $3 \times 1$，内标 $3$ 与 $1$ 对不上，这么写根本不合法；于是有人改成"对应位置相乘"得 $\begin{pmatrix} 4 \\ 10 \\ 18 \end{pmatrix}$，可这结果只是三个数各自乘了一下，没有合起来，判不了两列像不像。
- <span class="pit">**坑三 · 分不清结果是数还是表**</span>：$\alpha = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$、$\beta = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ 时，$\alpha^{\mathrm{T}}\beta = 1 \times 3 + 2 \times 4 = 11$ 是一个数，而 $\alpha\beta^{\mathrm{T}} = \begin{pmatrix} 3 & 4 \\ 6 & 8 \end{pmatrix}$ 是一张表；两个式子只差转置写在谁头上，结果一个是数一个是表，靠肉眼记迟早要错。

## <span class="hx hx-intro">🟢</span> 三、于是引入：n 维向量及其运算

于是引入 **$n$ 维向量**：把 $n$ 个数按顺序竖着排成一列，整体用一个字母记，
$$
\alpha = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix} = (a_1, a_2, \dots, a_n)^{\mathrm{T}}
$$
加法与数乘都**按分量**进行，转置把列变行。

上面那三个坑，逐个补上：

- <span class="fix">**坑一补上 · 一列数有了名字**</span>：上面 $A$ 的三列直接记作 $\alpha_1, \alpha_2, \alpha_3$，写 $\alpha_3 = \alpha_1 + 2\alpha_2$ 就完事，不用再抄括号；
- <span class="fix">**坑二补上 · 哪些运算合法有了明文规定**</span>：同维数的向量只能做加法和数乘（分量对分量）；想"乘"必须让一个是行、一个是列 —— 把前一个转置成行向量，$1 \times n$ 乘 $n \times 1$ 内标对上了才算得出来；
- <span class="fix">**坑三补上 · 数与表在记号上分开**</span>：$\alpha^{\mathrm{T}}\beta$ 是 $1 \times 1$ 矩阵，读成一个数；$\alpha\beta^{\mathrm{T}}$ 是 $n \times n$ 矩阵，是一张表；口诀是"转置写在前面，结果才是数"。

> 顺带提一句：到了第四章，会用专门讲"解方程有没有解"的那套语言来问"这一列能不能由那几列凑出来"，本点的 $\alpha_3 = \alpha_1 + 2\alpha_2$ 到那时会换个名字。现在不懂那套语言不影响做本点的题。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">**定义**</span>：由 $n$ 个数 $a_1, a_2, \dots, a_n$ 组成的有序数组称为 $n$ 维向量。竖着写的叫列向量，
$$
\alpha = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}
$$
横着写的 $\alpha^{\mathrm{T}} = (a_1, a_2, \dots, a_n)$ 叫行向量；$a_i$ 叫第 $i$ 个分量。**"有序"两个字要紧**：$(1,2)$ 与 $(2,1)$ 是两个不同的向量。
<span class="lab">**算例**</span>：$\alpha = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\beta = \begin{pmatrix} 4 \\ 0 \\ -1 \end{pmatrix}$，则
$$
\alpha + \beta = \begin{pmatrix} 1 + 4 \\ 2 + 0 \\ 3 - 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \\ 2 \end{pmatrix}, \qquad 2\alpha - \beta = \begin{pmatrix} 2 - 4 \\ 4 - 0 \\ 6 + 1 \end{pmatrix} = \begin{pmatrix} -2 \\ 4 \\ 7 \end{pmatrix}
$$
<span class="lab">**零向量**</span>：分量全是 $0$ 的向量记作 $0$；写 $\alpha = 0$ 是指每个分量都为 $0$，只要有一个分量不为 $0$ 就不是零向量。
<span class="lab">**运算律**</span>：$\alpha + \beta = \beta + \alpha$、$(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$、$k(\alpha + \beta) = k\alpha + k\beta$、$(k + l)\alpha = k\alpha + l\alpha$、$1 \cdot \alpha = \alpha$、$0 \cdot \alpha = 0$。这些按分量逐条验证即可，因为向量本来就是 $n \times 1$ 矩阵，加法数乘的规则跟第二章完全一样。
<span class="lab">**两种乘法别混**</span>：以 $\alpha = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$、$\beta = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ 为例，
$$
\alpha^{\mathrm{T}}\beta = \begin{pmatrix} 1 & 2 \end{pmatrix}\begin{pmatrix} 3 \\ 4 \end{pmatrix} = 1 \times 3 + 2 \times 4 = 11
$$
$$
\alpha\beta^{\mathrm{T}} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}\begin{pmatrix} 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 6 & 8 \end{pmatrix}
$$
一个数、一张表，区别只在转置写在哪里。
<span class="key">**常用结论**</span>：$\alpha = \beta$ 当且仅当对应分量逐个相等；$\alpha - \alpha = 0$；但两个非零向量相加也可能得零向量，例如 $\begin{pmatrix} 1 \\ 2 \end{pmatrix} + \begin{pmatrix} -1 \\ -2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：判断式子是否合法、结果是数还是表 —— 给 $\alpha^{\mathrm{T}}\beta$、$\alpha\beta^{\mathrm{T}}$、$\alpha + \beta^{\mathrm{T}}$ 这类写法，先看内标对不对得上。
2. 填空题：给两个具体向量求 $k\alpha + l\beta$ 的某个分量，或反过来由 $k\alpha + l\beta = \gamma$ 解出 $k$ 与 $l$。
3. 解答题：按分量验证向量运算的性质（交换律、结合律、$k(\alpha + \beta) = k\alpha + k\beta$）；本点也是后面线性表示、线性相关性问题里的"最小零件"。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 把 αᵀβ 与 αβᵀ 混同

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 算：$\alpha = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$、$\beta = \begin{pmatrix} 4 \\ 0 \\ -1 \end{pmatrix}$，求 $2\alpha - \beta$。（$\begin{pmatrix} -2 \\ 4 \\ 7 \end{pmatrix}$。）
- [ ] 判断：$\begin{pmatrix} 1 \\ 2 \end{pmatrix}\begin{pmatrix} 3 \\ 4 \end{pmatrix}$ 合法吗？（不合法，$2 \times 1$ 配 $2 \times 1$ 内标对不上；要算成数得写成 $\begin{pmatrix} 1 & 2 \end{pmatrix}\begin{pmatrix} 3 \\ 4 \end{pmatrix} = 11$。）
- [ ] 判断：$(1,2)$ 与 $(2,1)$ 是同一个向量吗？（不是，向量是有序数组，分量顺序不能换。）

> [!quote]- 🕸️ 八、关系网（点开查看 1 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟩 概念关联（同源/构成） | [[向量的内积、长度与正交]] | 内积是向量的运算 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟩 关联 ⇒ [[向量的内积、长度与正交]]——内积是向量的运算

## <span class="hx hx-nav">🧭</span> 九、导航


- 本章：[[第三章 向量（向量组的线性相关性）|第三章 向量（向量组的线性相关性）]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
