---
tags:
  - 基础
  - 数二
  - 线代
  - 考研数学
章节: "[[第二章 矩阵|第二章 矩阵]]"
层次: 基础+数二
知识点ID: mat-eq-solve
充分⇒:
  - "[[矩阵方程 AX = O 与 AB = O|矩阵方程 AX = O 与 AB = O]]"
关联:
  - "[[逆矩阵的求法|逆矩阵的求法]]"
---

# 用初等变换求逆与解矩阵方程 AX = B

> <span class="oneline">​</span>**一句话**：解 $AX=B$：把 $(A \mid B)$ 消成 $(E \mid A^{-1}B)$

**考试层次**：`基础` `数二` ｜ **章节**：[[第二章 矩阵|第二章 矩阵]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

题目给 $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$、$B = \begin{pmatrix} 5 \\ 11 \end{pmatrix}$，要解矩阵方程 $AX = B$。
顺手就想到：先把 $A^{-1}$ 求出来，再乘一下 $B$。
听起来挺对，但实际操作是先做一整轮 $(A \mid E)$ 的消元，再额外算一次矩阵乘法。
要是 $B$ 有两列、三列呢？$A^{-1}$ 这个中间结果得先单独算出来、再拿去和 $B$ 相乘，多抄一遍就多一次抄错的机会。

$$
AX = B, \qquad A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 5 \\ 11 \end{pmatrix}
$$

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

“先求逆再乘”这条路有三个说不通的地方：
- <span class="pit">​</span>**坑一 · 求逆多一道工序**：得先把 $A^{-1}$ 单独算出来，才能拿它去乘 $B$；这一步算错，后面全错。
- <span class="pit">​</span>**坑二 · 多列时要多存一个中间结果**：$B$ 的列数一多，$A^{-1}$ 这个中间结果得先单独算出来抄一遍，再和整个 $B$ 相乘，多抄一遍就多一次抄错的机会；
- <span class="pit">​</span>**坑三 · $A$ 不可逆就过不去**：$A$ 不可逆时 $A^{-1}$ 压根不存在，这条路过不去——但方程照样可能有解（无穷多解）。

## <span class="hx hx-intro">🟢</span> 三、于是引入：用初等变换求逆与解矩阵方程 AX = B

于是换个思路：把 $A$ 和 $B$ **并排**写成 $(A \mid B)$，一次消元同时处理所有列。
因为初等行变换等于左乘可逆矩阵，不改变方程的解；$A$ 可逆时把左半消成 $E$，右半自然就是 $A^{-1}B$。
上面那三个坑，逐个补上：
- <span class="fix">​</span>**坑一补上 · 省掉单独求逆这道工序**：不用先把 $A^{-1}$ 单独算出来，把 $(A \mid B)$ 并排一次消元就行；
- <span class="fix">​</span>**坑二补上 · 多列一次搞定**：$B$ 有几列就并排写几列，一次消元同时出所有列，不用把 $A^{-1}$ 单独算出来当中间量；
- <span class="fix">​</span>**坑三补上 · 不可逆时退化成看秩**：$A$ 不可逆时左半消不出 $E$，就退化成用秩判断有没有解、有多少解。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="key">​</span>**结论**：$A$ 可逆时，对增广阵只用行变换

$$
(A \mid B) \;\longrightarrow\; (E \mid A^{-1}B)
$$

右半就是 $X$。这里“化成 $(E \mid A^{-1}B)$”的前提是 **$A$ 可逆**；$A$ 不可逆时左半消不出 $E$，只能靠秩判断。
<span class="lab">​</span>**算例（一步步走）**：

$$
(A \mid B) = \begin{pmatrix} 1 & 2 & 5 \\ 3 & 4 & 11 \end{pmatrix}
\;\xrightarrow{\; r_2 - 3r_1 \;}\;
\begin{pmatrix} 1 & 2 & 5 \\ 0 & -2 & -4 \end{pmatrix}
\;\xrightarrow{\; r_2 \times (-\frac{1}{2}) \;}\;
\begin{pmatrix} 1 & 2 & 5 \\ 0 & 1 & 2 \end{pmatrix}
\;\xrightarrow{\; r_1 - 2r_2 \;}\;
\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \end{pmatrix}
$$

即 $X = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$。验算 $A X = \begin{pmatrix} 1 \times 1 + 2 \times 2 \\ 3 \times 1 + 4 \times 2 \end{pmatrix} = \begin{pmatrix} 5 \\ 11 \end{pmatrix} = B$，对的。
**$B$ 有两列就并排写**，$(A \mid B)$ 一次消元同时解出每一列。
**遇到 $XA = B$**：不能直接对 $A$ 作行变换，先转置成 $A^{\mathrm{T}} X^{\mathrm{T}} = B^{\mathrm{T}}$，用 $(A^{\mathrm{T}} \mid B^{\mathrm{T}})$ 求出 $X^{\mathrm{T}}$，再转置回去。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. $(A \mid B)$ 型：给 $A$ 与两列的 $B$，求 $AX = B$ 中的 $X$，考你能不能一次消元同时解出多个方程组。
2. $XA = B$ 型：转置成 $A^{\mathrm{T}} X^{\mathrm{T}} = B^{\mathrm{T}}$，用 $(A^{\mathrm{T}} \mid B^{\mathrm{T}})$ 求 $X^{\mathrm{T}}$ 再转置回去（直接对 $A$ 作行变换是错的）。
3. 含参或 $A$ 不可逆的情形：用 $r(A)$ 与 $r(A, B)$ 是否相等判无解或无穷多解，要解就写通解。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 对增广块作列变换（列变换会破坏解的结构）
- ⚠️ 忽略 A 可逆这一前提条件

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 用 $(A \mid B)$ 解 $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} X = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$，确认算出来的正是 $A^{-1} = \begin{pmatrix} -2 & 1 \\ \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}$。
- [ ] 解 $\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} X = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$：$X = \dfrac{1}{5}\begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} \dfrac{1}{5} \\ \dfrac{3}{5} \end{pmatrix}$，代回得 $A X = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$。
- [ ] 说出 $AX = B$ 有唯一解的条件（$\lvert A \rvert \neq 0$），并说明 $A$ 不可逆时只看哪两个秩。

> [!quote]- 🕸️ 八、关系网（点开查看 4 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟩 概念关联（同源/构成） | [[逆矩阵的求法]] | (A|B) 的行化简就是 (A|E) 求逆的加宽版：得到 E 即得 A⁻¹，同步读出 X |
> | 本点 ⇒ 对方 | 🟧 充分不必要（⇒） | [[矩阵方程 AX = O 与 AB = O]] | 把 B 换成 O 即得齐次矩阵方程 AX = O，解法与 AX = B 完全同形 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[矩阵乘法]] | AX = B 本身就是一个矩阵乘法等式，"解矩阵方程"就是解这个乘法等式 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[初等变换（三种）]] | (A | E) → (E | A⁻¹)、(A|B) → (E|A⁻¹B) 靠的正是三种初等行变换 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟩 关联 ⇒ [[逆矩阵的求法]]——(A|B) 的行化简就是 (A|E) 求逆的加宽版：得到 E 即得 A⁻¹，同步读出 X
> - 本点 ⇒ 🟧 充分 ⇒ [[矩阵方程 AX = O 与 AB = O]]——把 B 换成 O 即得齐次矩阵方程 AX = O，解法与 AX = B 完全同形
> - [[矩阵乘法]] ⇒ 🟪 必要 ⇒ 本点——AX = B 本身就是一个矩阵乘法等式，"解矩阵方程"就是解这个乘法等式
> - [[初等变换（三种）]] ⇒ 🟪 必要 ⇒ 本点——(A | E) → (E | A⁻¹)、(A|B) → (E|A⁻¹B) 靠的正是三种初等行变换

## <span class="hx hx-exam">📝</span> 九、真题（2014–2016）

### 2016 年 · 数学一 · 第 20 题（解答，11 分）

（本题满分 11 分）设矩阵
$$
A=\\begin{pmatrix}1&-1&-1\\\\2&a&1\\\\-1&1&a\\end{pmatrix},\\quad B=\\begin{pmatrix}2&2\\\\1&a\\\\-a-1&-2\\end{pmatrix}.
$$
当 $a$ 为何值时，方程 $AX=B$ 无解、有唯一解、有无穷多解？在有解时，求解此方程。

> [!success]- 答案与解析
> **答案**：当 $a\\ne -2$ 且 $a\\ne 1$ 时，有唯一解 $X=\\begin{pmatrix}1&\\frac{3a}{a+2}\\\\0&\\frac{a-4}{a+2}\\\\-1&0\\end{pmatrix}$；当 $a=1$ 时，有无穷多解 $X=\\begin{pmatrix}1&1\\\\-k_1-1&-k_2-1\\\\k_1&k_2\\end{pmatrix}$（$k_1,k_2$ 为任意常数）；当 $a=-2$ 时，无解
>
> 方法一
> $$
> (A\\ \\vdots\\ B)=\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\2&a&1&1&a\\\\-1&1&a&-a-1&-2\\end{array}\\right)\\to\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\0&a+2&3&-3&a-4\\\\0&0&a-1&1-a&0\\end{array}\\right)
> $$
> 当 $a\\ne -2$ 且 $a\\ne 1$ 时，
> $$
> (A\\ \\vdots\\ B)\\to\\left(\\begin{array}{ccc|cc}1&0&0&1&\\frac{3a}{a+2}\\\\0&1&0&0&\\frac{a-4}{a+2}\\\\0&0&1&-1&0\\end{array}\\right),
> $$
> $AX=B$ 有唯一解，$X=A^{-1}B=\\begin{pmatrix}1&\\frac{3a}{a+2}\\\\0&\\frac{a-4}{a+2}\\\\-1&0\\end{pmatrix}$；
>
> 当 $a=1$ 时，
> $$
> (A\\ \\vdots\\ B)\\to\\left(\\begin{array}{ccc|cc}1&0&0&1&1\\\\0&1&1&-1&-1\\\\0&0&0&0&0\\end{array}\\right),
> $$
> 由 $r(A)=r(A\\ \\vdots\\ B)=2<3$ 得 $AX=B$ 有无数个解。
>
> 令 $X=(X_1,X_2)$，由
> $$
> X_1=k_1\\begin{pmatrix}0\\\\-1\\\\1\\end{pmatrix}+\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}=\\begin{pmatrix}1\\\\-k_1-1\\\\k_1\\end{pmatrix},\\quad X_2=k_2\\begin{pmatrix}0\\\\-1\\\\1\\end{pmatrix}+\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}=\\begin{pmatrix}1\\\\-k_2-1\\\\k_2\\end{pmatrix}
> $$
> 得
> $$
> X=\\begin{pmatrix}1&1\\\\-k_1-1&-k_2-1\\\\k_1&k_2\\end{pmatrix}\\ (k_1,k_2\\ \\text{为任意常数}).
> $$
>
> $a=-2$ 时，
> $$
> (A\\ \\vdots\\ B)\\to\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\0&0&3&-3&-6\\\\0&0&-3&3&0\\end{array}\\right)\\to\\left(\\begin{array}{ccc|cc}1&-1&-1&2&2\\\\0&0&1&-1&0\\\\0&0&0&0&1\\end{array}\\right),
> $$
> 因为 $r(A)\\ne r(A\\ \\vdots\\ B)$，所以 $AX=B$ 无解。
>
> 方法二
> $$
> |A|=\\begin{vmatrix}1&-1&-1\\\\2&a&1\\\\-1&1&a\\end{vmatrix}=\\begin{vmatrix}1&-1&-1\\\\0&a+2&3\\\\0&0&a-1\\end{vmatrix}=(a+2)(a-1).
> $$
> 当 $a\\ne -2$ 且 $a\\ne 1$ 时，因为 $r(A)=r(A\\ \\vdots\\ B)=3$，所以 $AX=B$ 有唯一解，同方法一得 $X=A^{-1}B=\\begin{pmatrix}1&\\frac{3a}{a+2}\\\\0&\\frac{a-4}{a+2}\\\\-1&0\\end{pmatrix}$；
>
> 当 $a=1$ 时，由 $r(A)=r(A\\ \\vdots\\ B)=2<3$ 得 $AX=B$ 有无数个解，$X=\\begin{pmatrix}1&1\\\\-k_1-1&-k_2-1\\\\k_1&k_2\\end{pmatrix}$（$k_1,k_2$ 为任意常数）；
>
> 当 $a=-2$ 时，因为 $r(A)\\ne r(A\\ \\vdots\\ B)$，所以 $AX=B$ 无解。
>
> <small>解析出处：《2016 数学一解析》第 6–8 页</small>

### 2014 年 · 数学三 · 第 20 题（解答，11 分）

（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix},
$$
$E$ 为 3 阶单位矩阵。

（Ⅰ）求方程组 $Ax=0$ 的一个基础解系；

（Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$。

> [!success]- 答案与解析
> **答案**：（Ⅰ）基础解系 $\alpha=(-1,2,3,1)^{\mathrm{T}}$；

（Ⅱ）$B=\begin{pmatrix}2&6&-1\\-1&-3&1\\-1&-4&1\\0&0&0\end{pmatrix}+(k_1\alpha,\ k_2\alpha,\ k_3\alpha)$，$k_1,k_2,k_3$ 为任意常数。
>
> （Ⅰ）对矩阵 $A$ 施以初等行变换
> $$
> A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}\to\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix},
> $$
> 则方程组 $Ax=0$ 的一个基础解系为
> $$
> \alpha=\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}.
> $$
>
> （Ⅱ）对矩阵 $(A\ \vdots\ E)$ 施以初等行变换
> $$
> (A\ \vdots\ E)=\begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\1&2&0&-3&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&1&2&6&-1\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{pmatrix}.
> $$
> 记 $E=(e_1,e_2,e_3)$，则
> $$
> Ax=e_1\ \text{的通解}\ x=\begin{pmatrix}2\\-1\\-1\\0\end{pmatrix}+k_1\alpha,\quad
> Ax=e_2\ \text{的通解}\ x=\begin{pmatrix}6\\-3\\-4\\0\end{pmatrix}+k_2\alpha,\quad
> Ax=e_3\ \text{的通解}\ x=\begin{pmatrix}-1\\1\\1\\0\end{pmatrix}+k_3\alpha,
> $$
> $k_1,k_2,k_3$ 为任意常数。
>
> 于是，所求矩阵为
> $$
> B=\begin{pmatrix}2&6&-1\\-1&-3&1\\-1&-4&1\\0&0&0\end{pmatrix}+(k_1\alpha,\ k_2\alpha,\ k_3\alpha),
> $$
> $k_1,k_2,k_3$ 为任意常数。
>
> <small>解析出处：《2014 年数学（三）参考答案》第 5 页</small>

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
