---
tags:
  - 基础
  - 线代
  - 考研数学
章节: "[[第一章 行列式|第一章 行列式]]"
层次: 基础
知识点ID: det-product
充分⇒:
  - "[[可逆的充要条件（汇总枢纽）|可逆的充要条件（汇总枢纽）]]"
  - "[[特征值的应用：求行列式与幂|特征值的应用：求行列式与幂]]"
---

# ｜AB｜ = ｜A｜｜B｜

> <span class="oneline">​</span>**一句话**：$\lvert AB\rvert = \lvert A\rvert\lvert B\rvert$，先乘后取行列式一样

**考试层次**：`基础` ｜ **章节**：[[第一章 行列式|第一章 行列式]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

**乘积的行列式要解决的问题是：两组系数"连着用一次"（先按第一张表算一遍，再按第二张表算一遍），合成的那张表，它的行列式跟两张表各自的行列式是什么关系？**
先看具体动作。第一步按 $B=\begin{pmatrix}1&0\\0&2\end{pmatrix}$ 把 $x$ 变成 $y$：$y_1=x_1$、$y_2=2x_2$；第二步按 $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ 把 $y$ 变成 $z$：$z_1=y_1+2y_2$、$z_2=3y_1+4y_2$。把 $y$ 一代进去，$z_1=x_1+4x_2$、$z_2=3x_1+8x_2$，两张表合成一张 $\begin{pmatrix}1&4\\3&8\end{pmatrix}$（怎么合出来的见第二章）。
现在算三个数：$\lvert A\rvert=1\times4-2\times3=-2$，$\lvert B\rvert=1\times2-0\times0=2$，合成表的 $\lvert AB\rvert=1\times8-4\times3=-4$。注意 $-4=(-2)\times2$ —— 看着像"乘积的行列式等于行列式的乘积"。那到底是乘还是加？加法版本给的是 $-2+2=0$，跟 $-4$ 差着十万八千里。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

所以这个关系得说准，土办法有三个坑：

- <span class="pit">​</span>**坑一 · 猜成加法**：$\lvert A\rvert+\lvert B\rvert=-2+2=0$，而真值 $-4$，一个具体数字就把它否掉了；
- **坑二 · 顺着往下推广到 $\lvert A+B\rvert$**：以为 $\lvert A+B\rvert=\lvert A\rvert+\lvert B\rvert$。反例：取 $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$、$B=\begin{pmatrix}0&0\\0&1\end{pmatrix}$，两张表都"扁"得很（各自行列式都是 $0$），可一加就变回单位形状，$\lvert A+B\rvert=1$，而 $\lvert A\rvert+\lvert B\rvert=0+0=0$；
- <span class="pit">​</span>**坑三 · 前提和顺序不管**：随口就说"$\lvert AB\rvert=\lvert A\rvert\lvert B\rvert$"，忘了 $A$、$B$ 必须是**同为 $n$ 行 $n$ 列的表**；也忘了 $AB$ 与 $BA$ 一般不是同一张表，只有它们的行列式才一定相等。

## <span class="hx hx-intro">🟢</span> 三、于是引入：｜AB｜ = ｜A｜｜B｜

于是引入**乘积的行列式公式**：$A$、$B$ 同为 $n$ 行 $n$ 列的表时

$$
\lvert AB\rvert=\lvert A\rvert\lvert B\rvert
$$

上面那三个坑，逐个补上：

- <span class="fix">​</span>**坑一补上 · 是乘法不是加法**：$\lvert AB\rvert=(-2)\times2=-4$，与直接把合成表算出来的 $-4$ 严丝合缝；
- <span class="fix">​</span>**坑二补上 · 加法没有这类公式**：$\lvert A+B\rvert$ 一般既不等于 $\lvert A\rvert+\lvert B\rvert$，也没有别的简单公式，只能先把两张表加起来再算；上面那对 $A$、$B$ 就是活反例（$1$ 对 $0$）；
- **坑三补上 · 前提是同为 $n$ 行 $n$ 列的表，顺序则无所谓**：只有 $A$、$B$ 同为 $n$ 行 $n$ 列，两边的 $\lvert AB\rvert$ 与 $\lvert A\rvert\lvert B\rvert$ 才都有意义；又因为数的乘法可交换，$\lvert AB\rvert=\lvert A\rvert\lvert B\rvert=\lvert B\rvert\lvert A\rvert=\lvert BA\rvert$ —— 两张表谁先谁后不影响这个值，尽管 $AB$ 与 $BA$ 本身往往不是同一张表。

> 顺带提一句：等第二章学完逆矩阵，这一条会跟 $\lvert A^{-1}\rvert=\frac{1}{\lvert A\rvert}$（前提 $\lvert A\rvert\ne0$）、$\lvert A^{*}\rvert=\lvert A\rvert^{n-1}$（前提 $A$ 为 $n$ 阶）绑在一起考。现在只要把"乘积的行列式 = 行列式的乘积"用熟就行。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="key">​</span>**结论**：$A$、$B$ 都是 $n$ 阶方阵时 $\lvert AB\rvert=\lvert A\rvert\lvert B\rvert$；有限多个同阶方阵连乘照样成立，$\lvert A_1A_2\cdots A_k\rvert=\lvert A_1\rvert\lvert A_2\rvert\cdots\lvert A_k\rvert$。特别地 $\lvert A^{k}\rvert=\lvert A\rvert^{k}$（$k$ 为正整数）。
<span class="lab">​</span>**算例**：$A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$、$B=\begin{pmatrix}1&0\\0&2\end{pmatrix}$。合成表 $AB=\begin{pmatrix}1\times1+2\times0&1\times0+2\times2\\3\times1+4\times0&3\times0+4\times2\end{pmatrix}=\begin{pmatrix}1&4\\3&8\end{pmatrix}$，于是 $\lvert AB\rvert=1\times8-4\times3=-4$；另一方面 $\lvert A\rvert\lvert B\rvert=(1\times4-2\times3)\times(1\times2-0\times0)=(-2)\times2=-4$，两个 $-4$ 对上。
<span class="lab">​</span>**算例（幂）**：取同一个 $A$，$A^{2}=\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}1&2\\3&4\end{pmatrix}=\begin{pmatrix}7&10\\15&22\end{pmatrix}$，$\lvert A^{2}\rvert=7\times22-10\times15=154-150=4$；而 $\lvert A\rvert^{2}=(-2)^{2}=4$，一样。
<span class="lab">​</span>**怎么操作**：遇到 $\lvert AB\rvert$ 先别急着把 $AB$ 乘出来 —— 分别算两个行列式再相乘，往往快得多；反过来，已知 $\lvert A\rvert$ 与 $\lvert AB\rvert$ 求 $\lvert B\rvert$，就用除法 $\lvert B\rvert=\frac{\lvert AB\rvert}{\lvert A\rvert}$（前提 $\lvert A\rvert\ne0$）。
<span class="key">​</span>**两条配套结论**：$\lvert A^{k}\rvert=\lvert A\rvert^{k}$；由 $\lvert AB\rvert=\lvert A\rvert\lvert B\rvert$ 可知"两个行列式都不为零"就能推出"乘积的行列式不为零"（第二章会把它翻译成"$AB$ 可逆"）。
<span class="pit">​</span>**易错**：把公式推广到加法 $\lvert A+B\rvert$；忘了 $A$、$B$ 必须同阶；把 $AB=BA$ 也一并当成成立（行列式相等不等于表相等）。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：判断 $\lvert AB\rvert$、$\lvert A\rvert\lvert B\rvert$、$\lvert A+B\rvert$、$\lvert A\rvert+\lvert B\rvert$ 之间的关系，或者判断某个等式的真假。
2. 填空题：给 $\lvert A\rvert$、$\lvert B\rvert$ 求 $\lvert AB\rvert$、$\lvert A^{3}\rvert$、$\lvert 2AB\rvert$ 这类组合值（注意 $\lvert 2AB\rvert$ 里还有第 4 条的 $2^{n}$）。
3. 解答题：抽象题里用这条式子把 $\lvert AB\rvert$ 与 $\lvert A\rvert\lvert B\rvert$ 互相搬运，尤其是证明某张表的值不为零。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 错误推广到加法：｜A+B｜ ≠ ｜A｜+｜B｜

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 算：$A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$、$B=\begin{pmatrix}1&0\\0&2\end{pmatrix}$，先把 $AB$ 乘出来求 $\lvert AB\rvert$，再求 $\lvert A\rvert\lvert B\rvert$，看是否相等。
- [ ] 判断：$A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$、$B=\begin{pmatrix}0&0\\0&1\end{pmatrix}$ 时，$\lvert A+B\rvert$ 与 $\lvert A\rvert+\lvert B\rvert$ 各是多少？
- [ ] 算：上面那个 $A$ 的 $\lvert A^{2}\rvert$，再和 $\lvert A\rvert^{2}$ 对一下。

> [!quote]- 🕸️ 八、关系网（点开查看 4 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟧 充分不必要（⇒） | [[可逆的充要条件（汇总枢纽）]] | ｜A｜｜B｜≠0 ⇒ AB 可逆 |
> | 本点 ⇒ 对方 | 🟧 充分不必要（⇒） | [[特征值的应用：求行列式与幂]] | ｜A｜＝∏λ 由乘积公式与相似不变性得到 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[初等矩阵与初等变换的对应]] | 由 ｜AB｜=｜A｜｜B｜ 推出变换对行列式的影响 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[克拉默法则]] | 公式的分子分母都是行列式 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟧 充分 ⇒ [[可逆的充要条件（汇总枢纽）]]——｜A｜｜B｜≠0 ⇒ AB 可逆
> - 本点 ⇒ 🟧 充分 ⇒ [[特征值的应用：求行列式与幂]]——｜A｜＝∏λ 由乘积公式与相似不变性得到
> - [[初等矩阵与初等变换的对应]] ⇒ 🟪 必要 ⇒ 本点——由 ｜AB｜=｜A｜｜B｜ 推出变换对行列式的影响
> - [[克拉默法则]] ⇒ 🟪 必要 ⇒ 本点——公式的分子分母都是行列式

## <span class="hx hx-exam">📝</span> 九、真题（2010–2018）

### 2018 年 · 数学三 · 第 13 题（填空，4 分）

设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2,\alpha_3$ 是线性无关的向量组. 若 $A\alpha_1=\alpha_1+\alpha_2$，$A\alpha_2=\alpha_2+\alpha_3$，$A\alpha_3=\alpha_1+\alpha_3$，则 $|A|=$ $\underline{\qquad}$.

> [!success]- 答案与解析
> **答案**：2
>
> 由题意得
> $$
> A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},
> $$
> 而 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $|(\alpha_1,\alpha_2,\alpha_3)|\ne0$. 则
> $$
> |A|=\begin{vmatrix}1&0&1\\1&1&0\\0&1&1\end{vmatrix}=2.
> $$
> 故应填 2.

### 2012 年 · 数学二 · 第 14 题（填空，4 分）

设 $A$ 为 3 阶矩阵，$|A|=3$，$A^*$ 为 $A$ 的伴随矩阵，若交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，则 $|BA^*|=$ ________.

> [!success]- 答案与解析
> **答案**：-27
>
> 由于 $B=E_{12}A$，故 $BA^*=E_{12}\cdot A\cdot A^*=|A|E_{12}=3E_{12}$，
> 所以，$|BA^*|=|3E_{12}|=3^3|E_{12}|=27\times(-1)=-27$.

### 2010 年 · 数学二 · 第 14 题（填空，4 分）

设 $A,B$ 为 3 阶矩阵，且 $|A|=3$，$|B|=2$，$|A^{-1}+B|=2$，则 $|A+B^{-1}|=$ ________.

> [!success]- 答案与解析
> **答案**：3
>
> 由于 $A(A^{-1}+B)B^{-1}=(E+AB)B^{-1}=B^{-1}+A$，所以
> $$
> |A+B^{-1}|=|A(A^{-1}+B)B^{-1}|=|A||A^{-1}+B||B^{-1}|
> $$
> 因为 $|B|=2$，所以 $|B^{-1}|=|B|^{-1}=\frac{1}{2}$，因此
> $$
> |A+B^{-1}|=|A||A^{-1}+B||B^{-1}|=3\times2\times\frac{1}{2}=3.
> $$

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第一章 行列式|第一章 行列式]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
