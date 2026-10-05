---
tags:
  - 基础
  - 线代
  - 考研数学
章节: "[[第二章 矩阵|第二章 矩阵]]"
层次: 基础
知识点ID: mat-nocancel-2
---

# AX = AY 推不出 X = Y

> <span class="oneline">​</span>**一句话**：矩阵乘法不能随便约分，除非 A 可逆

**考试层次**：`基础` ｜ **章节**：[[第二章 矩阵|第二章 矩阵]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

拿到 $AX = AY$ 这种等式，第一反应都是两边约掉 $A$，得 $X = Y$。
拿 $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ 试试：取 $X = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$、$Y = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$，算出来 $AX = O$，而 $AY = \begin{pmatrix} 1 \times 0 + 0 \times 1 & 1 \times 0 + 0 \times 1 \\ 0 \times 0 + 0 \times 1 & 0 \times 0 + 0 \times 1 \end{pmatrix} = O$。
于是 $AX = AY$ 成立，可 $X \ne Y$ —— 这个 $A$ 就是约不掉。把 $A$ 换成 $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$，再由 $AX = AY$ 就确实能推出 $X = Y$。同一个操作一会儿行一会儿不行，到底凭什么？

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

土办法是凭感觉约：觉得 $A \ne O$ 就能约。
- <span class="pit">​</span>**劣势一**：$A \ne O$ 完全不够。上面那个 $A$ 就不是零矩阵，照样约不掉，硬约就把 $X \ne Y$ 这样的解丢了。
- <span class="pit">​</span>**劣势二**：没有判据就只能靠猜，选择题里那些错误选项往往就是漏掉“$A$ 可逆”这个前提，一猜就中招。
- <span class="pit">​</span>**劣势三**：前提漏一次后面全塌：$AX = 0$ 的解结构、秩的关系一步推错，整道题跟着崩。

## <span class="hx hx-intro">🟢</span> 三、于是引入：AX = AY 推不出 X = Y

于是把“能不能约”变成一个明确的判据：$AX = AY$ 先移项成 $A(X - Y) = O$，再看 $A$ 可不可逆。
上面那三个劣势，逐个补上：

- <span class="fix">​</span>**第一个劣势补上**：判据不看你感觉，只看 $A$ —— $A$ 可逆时两边左乘 $A^{-1}$ 得 $X = Y$；不可逆时 $AX = AY$ 不蕴含 $X = Y$。
- <span class="fix">​</span>**第二个劣势补上**：约分要的通行证是 $A$ 可逆（或 $A$ 列满秩），没有这张证就老老实实停在 $A(X - Y) = O$ 这一步，别硬约。
- <span class="fix">​</span>**第三个劣势补上**：不可逆时换成能用的结论 —— $X - Y$ 的每一列都是 $Ax = 0$ 的解；$AB = O$ 时 $B$ 的每一列都是 $AX = 0$ 的解。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">​</span>**核心事实**：$AX = AY \iff A(X - Y) = O$；能不能推出 $X = Y$，全看 $A$ 可不可逆。
<span class="pit">​</span>**不可逆的反例**：

$$
A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad X = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}, \quad Y = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}, \qquad AX = AY = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}
$$

这里 $AX = AY$ 成立但 $X \ne Y$，所以 $A$ 约不掉；换成 $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$，$AX = AY$ 会把两边每个位置逐格暴露出来，直接得 $X = Y$。
<span class="lab">​</span>**怎么判**：先算 $\lvert A \rvert$ 或者看 $r(A)$，$\lvert A \rvert \ne 0$（等价地 $r(A) = n$）才能约；$A$ 列满秩时同样可以，由 $A(X - Y) = O$ 得 $X - Y = O$。
<span class="lab">​</span>**顺带记一句**：$AB = AC$ 且 $A \ne O$ 也不能约，除非再补上 $A$ 可逆；$AB = O$ 且 $A \ne O$ 时只能得到 $B$ 的每一列都是 $AX = 0$ 的解（等价说法是 $r(A) + r(B) \le n$），得不到 $B = O$。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：给具体数字矩阵，判断“由 $AX = AY$ 能不能推出 $X = Y$”，错误选项往往是漏掉 $A$ 可逆这个前提。
2. 选择题或填空题：已知 $AB = AC$ 且 $A \ne O$，问能不能约去 $A$ —— 不能，除非再补上 $A$ 可逆（或 $A$ 列满秩）。
3. 解答题：由 $AB = O$ 且 $A \ne O$ 反推 $B$ 的性质，只能得 $B$ 的每一列都是 $AX = 0$ 的解，不能得 $B = O$（等价说法是 $r(A) + r(B) \le n$）。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 在含未知矩阵的等式两边随意"约去"同一个矩阵

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 写出三阶矩阵 $A \ne O$ 和 $B \ne O$，使 $AB = O$。
- [ ] 对 $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$，写出两个不同的二阶矩阵 $X$、$Y$，使 $AX = AY$。
- [ ] 判断：若 $A$ 可逆且 $AX = AY$，则 $X = Y$（对，两边左乘 $A^{-1}$ 即得）。

> [!quote]- 🕸️ 八、关系网（点开查看 2 条关系：1 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[AB = O 没有零因子]] | 无零因子与无消去律同根同源 |
> | 对方 ⇒ 本点 | 🟥 充要（⇔） | [[可逆的充要条件（汇总枢纽）]] | 可逆 ⇔ 可以消去 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - [[AB = O 没有零因子]] ⇒ 🟧 充分 ⇒ 本点——无零因子与无消去律同根同源
> - [[可逆的充要条件（汇总枢纽）]] ⇒ 🟥 充要 ⇒ 本点——可逆 ⇔ 可以消去

## <span class="hx hx-nav">🧭</span> 九、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
