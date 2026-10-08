---
tags:
  - 基础
  - 线代
  - 考研数学
章节: "[[第二章 矩阵|第二章 矩阵]]"
层次: 基础
知识点ID: mat-nocancel
充分⇒:
  - "[[AX = AY 推不出 X = Y|AX = AY 推不出 X = Y]]"
---

# AB = O 没有零因子

> <span class="oneline">​</span>**一句话**：两个非零矩阵相乘，可能得到零矩阵

**考试层次**：`基础` ｜ **章节**：[[第二章 矩阵|第二章 矩阵]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

数的世界里“积为 0 必有一个是 0”，搬到矩阵上就出事。看这两个：$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$、$B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$，两个都不是零矩阵。
可 $AB = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = O$，$BA = O$ 也是 —— 两个非零的东西乘出零来了。
平方也一个样：$N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ 非零，而 $N^{2} = O$，所以由 $A^{2} = O$ 也推不出 $A = O$。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

土办法是把数的消去律整套搬过来：$AB = O$ 就想约掉一个非零因子，$AB = AC$ 且 $A \ne O$ 就想约掉 $A$ 得 $B = C$。
- <span class="pit">​</span>**劣势一**：这条直接用错。上面两个反例就摆在那，正确答案是“都不对”，只能拿反例排除。
- <span class="pit">​</span>**劣势二**：乱约分会把解丢掉。解矩阵方程时两边同除 $A$，非零解就被你扔了；反过来也可能误以为只有零解。
- <span class="pit">​</span>**劣势三**：这一脚踩错会连锁：后面判断可逆、算秩、讨论解空间全跟着错。

## <span class="hx hx-intro">🟢</span> 三、于是引入：AB = O 没有零因子

于是先把话说明白：矩阵乘法不满足"积为 0 则至少一个因子为 0"这条性质 —— 非零矩阵可以当零因子，也没有消去律，由 $AB = O$ 推不出 $A = O$ 或 $B = O$。
上面那三个劣势，逐个补上：

- <span class="fix">​</span>**第一个劣势补上**：把“积为 0”的直觉换成“信息被压掉了”的理解：$B$ 的每一列都被 $A$ 变成了零向量，信息丢了，对方自然不必是 0。
- <span class="fix">​</span>**第二个劣势补上**：约分改成有前提的操作，只有 $A$ 可逆（$\lvert A \rvert \ne 0$）时，才能在 $AB = O$ 两边左乘 $A^{-1}$ 得 $B = O$。
- <span class="fix">​</span>**第三个劣势补上**：不可逆时改用结构性结论 —— $B$ 的每一列都是 $Ax = 0$ 的解，于是 $r(A) + r(B) \le n$，这句话在证明题里很好用。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="pit">​</span>**反例（必须记住）**：

$$
A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}, \qquad AB = BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = O
$$

$A$、$B$ 都非零，所以由 $AB = O$ 既推不出 $A = O$，也推不出 $B = O$；连 $BA = O$ 也成立，两边都别想约。
<span class="lab">​</span>**再看平方**：$N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ 非零，而 $N^{2} = O$，说明由 $A^{2} = O$ 同样推不出 $A = O$。
<span class="lab">​</span>**能用的那一条**：若 $AB = O$ 且 $A$ 可逆（$\lvert A \rvert \ne 0$），两边左乘 $A^{-1}$ 得 $B = O$ —— 约分不是不能做，是得先看 $A$ 可逆不可逆。
<span class="lab">​</span>**常用变形**：由 $AB = O$ 可知 $B$ 的每一列都是 $Ax = 0$ 的解，从而 $r(A) + r(B) \le n$；又比如 $A^{2} = O$ 时 $A + E$ 可逆，且 $(A + E)^{-1} = E - A$，验证一下就是 $(A + E)(E - A) = E - A^{2} = E$。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：判断“$AB = O \Rightarrow A = O$ 或 $B = O$”“$AB = AC$ 且 $A \ne O \Rightarrow B = C$”是否正确，答案都是否，用反例排除最快。
2. 填空题：由 $AB = O$ 加上条件求参数，或者求满足条件的非零矩阵 $B$；常用结论是 $B$ 的每一列都是 $Ax = 0$ 的解，从而 $r(A) + r(B) \le n$。
3. 解答题：证明或利用 $A^{2} = O$、$A^{2} = A$（幂等）这类条件讨论可逆性与秩，比如“$A^{2} = O$ 时 $A + E$ 可逆，且 $(A + E)^{-1} = E - A$”。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 由 AB=O 直接断定 A 或 B 为零矩阵

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 举两个 2 阶非零矩阵 $A$、$B$，使 $AB = O$。
- [ ] 判断：$A^{2} = O \Rightarrow A = O$ 对吗？给反例或者证明。
- [ ] 判断：$AB = O$ 且 $A$ 可逆时，能不能推出 $B = O$？说明理由。

> [!quote]- 🕸️ 八、关系网（点开查看 3 条关系：1 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟧 充分不必要（⇒） | [[AX = AY 推不出 X = Y]] | 无零因子与无消去律同根同源 |
> | 对方 ⇒ 本点 | 🟥 充要（⇔） | [[可逆的充要条件（汇总枢纽）]] | 不可逆 ⇔ 必有非零零因子 |
> | 对方 ⇒ 本点 | 🟩 概念关联（同源/构成） | [[AB ≠ BA（乘法不可交换）]] | 乘法不交换是有零因子、无消去律这些反直觉现象的同一个根源 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟧 充分 ⇒ [[AX = AY 推不出 X = Y]]——无零因子与无消去律同根同源
> - [[可逆的充要条件（汇总枢纽）]] ⇒ 🟥 充要 ⇒ 本点——不可逆 ⇔ 必有非零零因子
> - [[AB ≠ BA（乘法不可交换）]] ⇒ 🟩 关联 ⇒ 本点——乘法不交换是有零因子、无消去律这些反直觉现象的同一个根源

## <span class="hx hx-exam">📝</span> 九、真题（1997–2004）

### 2004 年 · 数学一 · 第 12 题（选择，4 分）

设 $A,B$ 为满足 $AB=O$ 的任意两个非零矩阵，则必有（　　）

（A）$A$ 的列向量组线性相关，$B$ 的行向量组线性相关．
（B）$A$ 的列向量组线性相关，$B$ 的列向量组线性相关．
（C）$A$ 的行向量组线性相关，$B$ 的行向量组线性相关．
（D）$A$ 的行向量组线性相关，$B$ 的列向量组线性相关．

> [!success]- 答案与解析
> **答案**：（A）
>
> 【解】 方法一 设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times s$ 矩阵．
>
> 由 $AB=O$，得 $r(A)+r(B)\le n$．
>
> 因为 $A,B$ 为非零矩阵，所以 $r(A)\ge 1,r(B)\ge 1$，于是 $r(A)<n,r(B)<n$．
>
> 因为矩阵的秩、矩阵行向量组的秩、矩阵列向量组的秩都相等，于是 $A$ 的列向量组的秩小于列数，$B$ 的行向量组的秩小于行数，$A$ 的列向量组线性相关，$B$ 的行向量组线性相关，应选（A）．
>
> 方法二 设
> $$
> A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}=(\alpha_1,\alpha_2,\cdots,\alpha_n),\quad B=\begin{pmatrix}b_{11}&b_{12}&\cdots&b_{1s}\\b_{21}&b_{22}&\cdots&b_{2s}\\\vdots&\vdots&&\vdots\\b_{n1}&b_{n2}&\cdots&b_{ns}\end{pmatrix}=\begin{pmatrix}\beta_1\\\beta_2\\\vdots\\\beta_n\end{pmatrix},
> $$
> 由 $AB=O$ 得
> $$
> \begin{cases}b_{11}\alpha_1+b_{21}\alpha_2+\cdots+b_{n1}\alpha_n=0,\\b_{12}\alpha_1+b_{22}\alpha_2+\cdots+b_{n2}\alpha_n=0,\\\vdots\\b_{1s}\alpha_1+b_{2s}\alpha_2+\cdots+b_{ns}\alpha_n=0,\end{cases}\text{及}\begin{cases}a_{11}\beta_1+a_{12}\beta_2+\cdots+a_{1n}\beta_n=0,\\a_{21}\beta_1+a_{22}\beta_2+\cdots+a_{2n}\beta_n=0,\\\vdots\\a_{m1}\beta_1+a_{m2}\beta_2+\cdots+a_{mn}\beta_n=0.\end{cases}
> $$
> 因为 $A,B$ 为非零矩阵，所以存在不全为零的常数 $b_{1j},b_{2j},\cdots,b_{nj}$ 及 $a_{i1},a_{i2},\cdots,a_{in}$，使得 $b_{1j}\alpha_1+b_{2j}\alpha_2+\cdots+b_{nj}\alpha_n=0$ 及 $a_{i1}\beta_1+a_{i2}\beta_2+\cdots+a_{in}\beta_n=0$．
>
> 即 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 与 $\beta_1,\beta_2,\cdots,\beta_n$ 都线性相关，应选（A）．
>
> > **方法点评**：当研究矩阵的秩与向量相关性时，一般使用矩阵的秩、矩阵行向量组的秩、矩阵列向量组的秩相等的性质．
> > 向量组线性相关的充要条件是该向量组的秩小于向量组所含向量的个数；向量组线性无关的充要条件是向量组的秩与向量组所含向量个数相等．

### 1997 年 · 数学一 · 填空题第 4 题（填空，3 分）

设
$$
A=\begin{pmatrix}1&2&-2\\4&t&3\\3&-1&1\end{pmatrix},
$$
$B$ 为 3 阶非零矩阵，且 $AB=O$，则 $t=$______.

> [!success]- 答案与解析
> **答案**：$t=-3$.
>
> **方法一** 因为 $B\ne O$ 且 $AB=O$，所以方程组 $AX=0$ 有非零解，于是 $|A|=0$，而
> $$
> |A|=\begin{vmatrix}1&2&-2\\4&t&3\\3&-1&1\end{vmatrix}=7t+21=0,
> $$
> 得 $t=-3$.
>
> **方法二** 由 $AB=O$ 得 $r(A)+r(B)\le 3$，再由 $B\ne O$ 得 $r(B)\ge 1$，于是 $r(A)\le 2<3$，故 $|A|=0$，解得 $t=-3$.

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
