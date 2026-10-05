---
tags:
  - 基础
  - 线代
  - 考研数学
章节: "[[第二章 矩阵|第二章 矩阵]]"
层次: 基础
知识点ID: mat-adj-identity
必要⇐:
  - "[[逆矩阵的求法|逆矩阵的求法]]"
---

# AA* = A*A = ｜A｜E

> <span class="oneline">​</span>**一句话**：$A$ 与 $A^{*}$ 怎么乘都等于 $\lvert A \rvert E$（数量阵）

**考试层次**：`基础` ｜ **章节**：[[第二章 矩阵|第二章 矩阵]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

手上有 $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$，$\lvert A \rvert = 1 \times 4 - 2 \times 3 = -2$，伴随矩阵 $A^{*} = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$。乘一下：

$$
AA^{*} = \begin{pmatrix} 1 \times 4 + 2 \times (-3) & 1 \times (-2) + 2 \times 1 \\ 3 \times 4 + 4 \times (-3) & 3 \times (-2) + 4 \times 1 \end{pmatrix} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix}
$$

结果很干净：非对角元全是 $0$，对角元全是 $-2$，正好是 $\lvert A \rvert$。这是巧合还是规律？

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

- <span class="pit">​</span>**坑一 · 硬乘看不出规律**：一个个乘着找规律不现实，$n$ 阶要算 $n^{2}$ 个元素，每个元素本身又是一串乘积求和，靠算例猜不出一般结论。
- <span class="pit">​</span>**坑二 · 右边该长什么样没数**：更麻烦的是右边该长什么样根本没数，为什么偏偏是数量阵 $\lvert A \rvert E$，而不是 $\lvert A \rvert$ 的某个幂、或者别的什么矩阵？不把这条恒等式点破就看不出来。
- <span class="pit">​</span>**坑三 · 前提容易糊**：前提也容易糊，哪一步需要 $\lvert A \rvert \ne 0$，哪一步 $\lvert A \rvert = 0$ 也照样成立，光靠乘法验不出来。

## <span class="hx hx-intro">🟢</span> 三、于是引入：AA* = A*A = ｜A｜E

于是把这件事写成一条恒等式，这也是伴随矩阵存在的第二个理由。上面那三个坑，逐个补上：

$$
AA^{*} = A^{*}A = \lvert A \rvert E
$$

- <span class="fix">​</span>**坑一补上 · 不用一个个乘**：有了这条恒等式，$n$ 阶那 $n^{2}$ 个元素不用一个个乘出来找规律；
- <span class="fix">​</span>**坑二补上 · 右边就是数量阵**：右边为什么偏偏是数量阵 $\lvert A \rvert E$、非对角元为什么是 $0$，一句话就点破了 —— 因为“一行元素乘上另一行对应的代数余子式”会全部抵消，这是行列式展开定理的直接推论；而且 $A$ 与 $A^{*}$ 相乘可以互换位置；
- <span class="fix">​</span>**坑三补上 · 前提分得清**：哪一步要 $\lvert A \rvert \ne 0$、哪一步不用，由这条恒等式就分得清 —— 求逆就是一步乘系数 $A^{-1} = \dfrac{A^{*}}{\lvert A \rvert}$（$\lvert A \rvert \ne 0$）。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">​</span>**恒等式**：$AA^{*} = A^{*}A = \lvert A \rvert E$，右边是数量阵，说明 $A$ 和 $A^{*}$ 相乘可以交换。

<span class="lab">​</span>**由它推出来的三条**：

- 当 $\lvert A \rvert \ne 0$（也就是 $A$ 可逆）时，两边同乘 $\lvert A \rvert^{-1}$ 得 $A^{*} = \lvert A \rvert A^{-1}$，注意前提是 $\lvert A \rvert \ne 0$；
- 两边取行列式得 $\lvert A \rvert\lvert A^{*} \rvert = \lvert A \rvert^{n}$，于是 $n \ge 2$ 时 $\lvert A^{*} \rvert = \lvert A \rvert^{n-1}$（$\lvert A \rvert = 0$ 时结论是 $\lvert A^{*} \rvert = 0$），$n = 2$ 时就是 $\lvert A^{*} \rvert = \lvert A \rvert$；
- $\lvert A \rvert = 0$ 时恒等式退化成 $AA^{*} = A^{*}A = O$。

**左右都验一遍**（下式与上面的 $AA^{*}$ 结果相同）：

$$
A^{*}A = \begin{pmatrix} 4 \times 1 + (-2) \times 3 & 4 \times 2 + (-2) \times 4 \\ -3 \times 1 + 1 \times 3 & -3 \times 2 + 1 \times 4 \end{pmatrix} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix} = \lvert A \rvert E
$$

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 证明题：设 $A$ 为 $n$（$n \ge 2$）阶方阵。用 $AA^{*} = \lvert A \rvert E$，在 $\lvert A \rvert \ne 0$（即 $A$ 可逆）时两边同乘 $\lvert A \rvert^{-1}$ 得 $A^{*} = \lvert A \rvert A^{-1}$；再取行列式得 $\lvert A^{*} \rvert = \lvert A \rvert^{n-1}$（$\lvert A \rvert = 0$ 时结论是 $\lvert A^{*} \rvert = 0$），$n = 2$ 时即 $\lvert A^{*} \rvert = \lvert A \rvert$
2. 抽象矩阵计算：把 $(A^{*})^{2}$、$A^{*}A^{-1}$、$\lvert AA^{*} \rvert$ 这类表达式化简
3. 求 $\lvert A \rvert$：由 $AB = O$ 或 $AA^{*} = 2E$ 这类条件反解 $A$ 的行列式与参数

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 把 ｜A*｜ 记成 ｜A｜ⁿ

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 说：$A$ 可逆时 $A^{*}$ 等于什么？（答案：$A^{*} = \lvert A \rvert A^{-1}$）
- [ ] 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$（$\lvert A \rvert = 1$）时 $A^{*}$ 是不是正好等于 $A^{-1}$？动手算一遍
- [ ] 说：$A^{k}$ 与 $A^{*}$ 相乘能交换吗？（答案：能，因为 $AA^{*} = A^{*}A$，$A$ 与 $A^{*}$ 互换位置结果相同）

> [!quote]- 🕸️ 八、关系网（点开查看 2 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟪 必要不充分（⇐） | [[逆矩阵的求法]] | 伴随公式法求逆的依据 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[伴随矩阵 A∗ 的定义|伴随矩阵 A* 的定义]] | 先有 A* 才有该恒等式 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟪 必要 ⇒ [[逆矩阵的求法]]——伴随公式法求逆的依据
> - [[伴随矩阵 A∗ 的定义|伴随矩阵 A* 的定义]] ⇒ 🟪 必要 ⇒ 本点——先有 A* 才有该恒等式

## <span class="hx hx-nav">🧭</span> 九、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
