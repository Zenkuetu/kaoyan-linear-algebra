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

## <span class="hx hx-exam">📝</span> 九、真题（2013–2021）

### 2021 年 · 数学二 · 第 10 题（选择，5 分）

已知矩阵
$$
A=\begin{pmatrix}1&0&-1\\2&-1&1\\-1&2&-5\end{pmatrix},
$$
若下三角可逆矩阵 $P$ 和上三角可逆矩阵 $Q$，使 $PAQ$ 为对角矩阵，则 $P$，$Q$ 可以分别取

（A）$\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},\ \begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}$

（B）$\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix},\ \begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$

（C）$\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix},\ \begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}$

（D）$\begin{pmatrix}1&0&0\\0&1&0\\1&3&1\end{pmatrix},\ \begin{pmatrix}1&2&-3\\0&-1&2\\0&0&1\end{pmatrix}$

> [!success]- 答案与解析
> **答案**：（C）
>
> 【解析】
> $$
> (A,E)=\begin{pmatrix}1&0&-1&1&0&0\\2&-1&1&0&1&0\\-1&2&-5&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1&0&0\\0&-1&3&-2&1&0\\0&2&-6&1&0&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1&0&0\\0&1&-3&2&-1&0\\0&0&0&-3&2&1\end{pmatrix}
> $$
> $=(F,P)$，则
> $$
> P=\begin{pmatrix}1&0&0\\2&-1&0\\-3&2&1\end{pmatrix};
> $$
> $$
> \begin{pmatrix}F\\E\end{pmatrix}=\begin{pmatrix}1&0&-1\\0&1&-3\\0&0&0\\1&0&0\\0&1&0\\0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\\1&0&1\\0&1&3\\0&0&1\end{pmatrix}=\begin{pmatrix}\Lambda\\Q\end{pmatrix},
> $$
> 则
> $$
> Q=\begin{pmatrix}1&0&1\\0&1&3\\0&0&1\end{pmatrix}.
> $$
> 故应选 C。

### 2018 年 · 数学一 · 第 21 题（解答，11 分）

（本题满分 11 分）已知 $a$ 是常数，且矩阵
$$
A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}
$$
可经初等列变换化为矩阵
$$
B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}.
$$
（Ⅰ）求 $a$；

（Ⅱ）求满足 $AP=B$ 的可逆矩阵 $P$。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$a=2$；（Ⅱ）$P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix}$（$k_1,k_2,k_3$ 为任意常数且 $k_2\ne k_3$）
>
> （Ⅰ）显然 $r(A)=2$，因为初等变换不改变矩阵的秩，所以 $r(B)=2$，而
> $$
> B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&a+1&3\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&0&2-a\end{pmatrix},
> $$
> 故 $a=2$。
>
> （Ⅱ）
> $$
> A=\begin{pmatrix}1&2&2\\1&3&0\\2&7&-2\end{pmatrix},\quad B=\begin{pmatrix}1&2&2\\0&1&1\\-1&1&1\end{pmatrix}.
> $$
> 令 $P=(X_1,X_2,X_3)$，由
> $$
> (A\ \vdots\ B)=\left(\begin{array}{ccc|ccc}1&2&2&1&2&2\\1&3&0&0&1&1\\2&7&-2&-1&1&1\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&0&6&3&4&4\\0&1&-2&-1&-1&-1\\0&0&0&0&0&0\end{array}\right)
> $$
> 得
> $$
> X_1=k_1\begin{pmatrix}-6\\2\\1\end{pmatrix}+\begin{pmatrix}3\\-1\\0\end{pmatrix}=\begin{pmatrix}-6k_1+3\\2k_1-1\\k_1\end{pmatrix},\quad X_2=k_2\begin{pmatrix}-6\\2\\1\end{pmatrix}+\begin{pmatrix}4\\-1\\0\end{pmatrix}=\begin{pmatrix}-6k_2+4\\2k_2-1\\k_2\end{pmatrix},
> $$
> $$
> X_3=k_3\begin{pmatrix}-6\\2\\1\end{pmatrix}+\begin{pmatrix}4\\-1\\0\end{pmatrix}=\begin{pmatrix}-6k_3+4\\2k_3-1\\k_3\end{pmatrix},
> $$
> 则所求的可逆矩阵为
> $$
> P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix}\ (k_1,k_2,k_3\ \text{为任意常数且}\ k_2\ne k_3).
> $$

### 2018 年 · 数学三 · 第 21 题（解答，11 分）

（本题满分 11 分）已知 $a$ 是常数，且矩阵 $A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}$ 可经初等列变换化为矩阵 $B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}$.

（Ⅰ）求 $a$；

（Ⅱ）求满足 $AP=B$ 的可逆矩阵 $P$.

> [!success]- 答案与解析
> **答案**：$a=2$；$P=\begin{pmatrix}3-6k_1&4-6k_2&4-6k_3\\-1+2k_1&-1+2k_2&-1+2k_3\\k_1&k_2&k_3\end{pmatrix}$（其中 $k_2\ne k_3$）
>
> （Ⅰ）对矩阵 $A,B$ 分别施以初等行变换得
> $$
> A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}\to\begin{pmatrix}1&0&3a\\0&1&-a\\0&0&0\end{pmatrix},
> $$
> $$
> B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&1\\0&0&2-a\end{pmatrix}.
> $$
> 由题设知 $a=2$.
>
> （Ⅱ）由（Ⅰ）知 $a=2$，对矩阵 $(A\mid B)$ 施以初等行变换得
> $$
> (A\mid B)=\left(\begin{array}{ccc|ccc}1&2&2&1&2&2\\1&3&0&0&1&1\\2&7&-2&-1&1&1\end{array}\right)\to\left(\begin{array}{ccc|ccc}1&0&6&3&4&4\\0&1&-2&-1&-1&-1\\0&0&0&0&0&0\end{array}\right).
> $$
> 记 $B=(\beta_1,\beta_2,\beta_3)$，由于
> $$
> A\begin{pmatrix}-6\\2\\1\end{pmatrix}=0,\quad A\begin{pmatrix}3\\-1\\0\end{pmatrix}=\beta_1,\quad A\begin{pmatrix}4\\-1\\0\end{pmatrix}=\beta_2,\quad A\begin{pmatrix}4\\-1\\0\end{pmatrix}=\beta_3,
> $$
> 故 $AX=B$ 的解为
> $$
> X=\begin{pmatrix}3-6k_1&4-6k_2&4-6k_3\\-1+2k_1&-1+2k_2&-1+2k_3\\k_1&k_2&k_3\end{pmatrix},
> $$
> 其中 $k_1,k_2,k_3$ 为任意常数.
>
> 由于 $|X|=k_3-k_2$，所以满足 $AP=B$ 的可逆矩阵为
> $$
> P=\begin{pmatrix}3-6k_1&4-6k_2&4-6k_3\\-1+2k_1&-1+2k_2&-1+2k_3\\k_1&k_2&k_3\end{pmatrix},
> $$
> 其中 $k_2\ne k_3$.

### 2018 年 · 数学二 · 第 23 题（解答，11 分）

（本题满分 11 分）已知 $a$ 是常数，且矩阵
$$
A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}
$$
可经初等列变换化为矩阵
$$
B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}.
$$
（Ⅰ）求 $a$；（Ⅱ）求满足 $AP=B$ 的可逆矩阵 $P$。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$a=2$；（Ⅱ）
$$
P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix},
$$
其中 $k_1,k_2,k_3$ 为任意常数，且 $k_2\ne k_3$。
>
> （Ⅰ）由已知有 $r(A)=r(B)$，
> $$
> A=\begin{pmatrix}1&2&a\\1&3&0\\2&7&-a\end{pmatrix}\to\begin{pmatrix}1&2&a\\0&1&-a\\0&3&-3a\end{pmatrix}\to\begin{pmatrix}1&2&a\\0&1&-a\\0&0&0\end{pmatrix},
> $$
> $$
> B=\begin{pmatrix}1&a&2\\0&1&1\\-1&1&1\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&1+a&3\end{pmatrix}\to\begin{pmatrix}1&a&2\\0&1&1\\0&0&2-a\end{pmatrix},
> $$
> 所以 $2-a=0$，即 $a=2$；
>
> （Ⅱ）
> $$
> (A,B)=\begin{pmatrix}1&2&2&1&2&2\\1&3&0&0&1&1\\2&7&-2&-1&1&1\end{pmatrix}\to\begin{pmatrix}1&0&6&3&4&4\\0&1&-2&-1&-1&-1\\0&0&0&0&0&0\end{pmatrix},
> $$
> 所以方程 $AX=B$ 的解
> $$
> X=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix},
> $$
> 且当 $|X|\ne0$ 即 $k_2\ne k_3$ 时，$X$ 可逆，
>
> 则取
> $$
> P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix},
> $$
> 其中 $k_1,k_2,k_3$ 为任意常数，且 $k_2\ne k_3$，即为所求。

### 2016 年 · 数学一 · 第 20 题（解答，11 分）

（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}1&-1&-1\\2&a&1\\-1&1&a\end{pmatrix},\quad B=\begin{pmatrix}2&2\\1&a\\-a-1&-2\end{pmatrix}.
$$
当 $a$ 为何值时，方程 $AX=B$ 无解、有唯一解、有无穷多解？在有解时，求解此方程。

> [!success]- 答案与解析
> **答案**：当 $a\ne -2$ 且 $a\ne 1$ 时，有唯一解 $X=\begin{pmatrix}1&\frac{3a}{a+2}\\0&\frac{a-4}{a+2}\\-1&0\end{pmatrix}$；当 $a=1$ 时，有无穷多解 $X=\begin{pmatrix}1&1\\-k_1-1&-k_2-1\\k_1&k_2\end{pmatrix}$（$k_1,k_2$ 为任意常数）；当 $a=-2$ 时，无解
>
> 方法一
> $$
> (A\ \vdots\ B)=\left(\begin{array}{ccc|cc}1&-1&-1&2&2\\2&a&1&1&a\\-1&1&a&-a-1&-2\end{array}\right)\to\left(\begin{array}{ccc|cc}1&-1&-1&2&2\\0&a+2&3&-3&a-4\\0&0&a-1&1-a&0\end{array}\right)
> $$
> 当 $a\ne -2$ 且 $a\ne 1$ 时，
> $$
> (A\ \vdots\ B)\to\left(\begin{array}{ccc|cc}1&0&0&1&\frac{3a}{a+2}\\0&1&0&0&\frac{a-4}{a+2}\\0&0&1&-1&0\end{array}\right),
> $$
> $AX=B$ 有唯一解，$X=A^{-1}B=\begin{pmatrix}1&\frac{3a}{a+2}\\0&\frac{a-4}{a+2}\\-1&0\end{pmatrix}$；
>
> 当 $a=1$ 时，
> $$
> (A\ \vdots\ B)\to\left(\begin{array}{ccc|cc}1&0&0&1&1\\0&1&1&-1&-1\\0&0&0&0&0\end{array}\right),
> $$
> 由 $r(A)=r(A\ \vdots\ B)=2<3$ 得 $AX=B$ 有无数个解。
>
> 令 $X=(X_1,X_2)$，由
> $$
> X_1=k_1\begin{pmatrix}0\\-1\\1\end{pmatrix}+\begin{pmatrix}1\\-1\\0\end{pmatrix}=\begin{pmatrix}1\\-k_1-1\\k_1\end{pmatrix},\quad X_2=k_2\begin{pmatrix}0\\-1\\1\end{pmatrix}+\begin{pmatrix}1\\-1\\0\end{pmatrix}=\begin{pmatrix}1\\-k_2-1\\k_2\end{pmatrix}
> $$
> 得
> $$
> X=\begin{pmatrix}1&1\\-k_1-1&-k_2-1\\k_1&k_2\end{pmatrix}\ (k_1,k_2\ \text{为任意常数}).
> $$
>
> $a=-2$ 时，
> $$
> (A\ \vdots\ B)\to\left(\begin{array}{ccc|cc}1&-1&-1&2&2\\0&0&3&-3&-6\\0&0&-3&3&0\end{array}\right)\to\left(\begin{array}{ccc|cc}1&-1&-1&2&2\\0&0&1&-1&0\\0&0&0&0&1\end{array}\right),
> $$
> 因为 $r(A)\ne r(A\ \vdots\ B)$，所以 $AX=B$ 无解。
>
> 方法二
> $$
> |A|=\begin{vmatrix}1&-1&-1\\2&a&1\\-1&1&a\end{vmatrix}=\begin{vmatrix}1&-1&-1\\0&a+2&3\\0&0&a-1\end{vmatrix}=(a+2)(a-1).
> $$
> 当 $a\ne -2$ 且 $a\ne 1$ 时，因为 $r(A)=r(A\ \vdots\ B)=3$，所以 $AX=B$ 有唯一解，同方法一得 $X=A^{-1}B=\begin{pmatrix}1&\frac{3a}{a+2}\\0&\frac{a-4}{a+2}\\-1&0\end{pmatrix}$；
>
> 当 $a=1$ 时，由 $r(A)=r(A\ \vdots\ B)=2<3$ 得 $AX=B$ 有无数个解，$X=\begin{pmatrix}1&1\\-k_1-1&-k_2-1\\k_1&k_2\end{pmatrix}$（$k_1,k_2$ 为任意常数）；
>
> 当 $a=-2$ 时，因为 $r(A)\ne r(A\ \vdots\ B)$，所以 $AX=B$ 无解。

### 2015 年 · 数学三 · 第 20 题（解答，11 分）

（本题满分 11 分）设矩阵 $A=\begin{pmatrix}a&1&0\\1&a&-1\\0&1&a\end{pmatrix}$，且 $A^3=O$.

（Ⅰ）求 $a$ 的值；

（Ⅱ）若矩阵 $X$ 满足 $X-XA^2-AX+AXA^2=E$，其中 $E$ 为 3 阶单位矩阵，求 $X$.

> [!success]- 答案与解析
> **答案**：$a=0$；$X=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}$
>
> （Ⅰ）由于 $A^3=O$，所以
> $$
> |A|=\begin{vmatrix}a&1&0\\1&a&-1\\0&1&a\end{vmatrix}=a^3=0,
> $$
> 于是 $a=0$.
>
> （Ⅱ）由于
> $$
> X-XA^2-AX+AXA^2=E,
> $$
> 所以
> $$
> (E-A)X(E-A^2)=E.
> $$
> 由（Ⅰ）知
> $$
> E-A=\begin{pmatrix}1&-1&0\\-1&1&1\\0&-1&1\end{pmatrix},\quad E-A^2=\begin{pmatrix}0&0&1\\0&1&0\\-1&0&2\end{pmatrix},
> $$
> 因为 $E-A,E-A^2$ 均可逆，所以
> $$
> X=(E-A)^{-1}(E-A^2)^{-1}=\begin{pmatrix}2&1&-1\\1&1&-1\\1&1&0\end{pmatrix}\begin{pmatrix}2&0&-1\\0&1&0\\1&0&0\end{pmatrix}=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}.
> $$

### 2015 年 · 数学二 · 第 22 题（解答，11 分）

（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}a&1&0\\1&a&-1\\0&1&a\end{pmatrix},
$$
且 $A^3=O$。

（Ⅰ）求 $a$ 的值；

（Ⅱ）若矩阵 $X$ 满足 $X-XA^2-AX+AXA^2=E$，其中 $E$ 为 3 阶单位矩阵，求 $X$。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$a=0$；（Ⅱ）
$$
X=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}
$$
>
> （Ⅰ）$A^3=O\Rightarrow|A|=0\Rightarrow$
> $$
> \begin{vmatrix}a&1&0\\1&a&-1\\0&1&a\end{vmatrix}=\begin{vmatrix}0&1&0\\1-a^2&a&-1\\-a&1&a\end{vmatrix}=a^3=0\Rightarrow a=0
> $$
> （Ⅱ）由题意知
> $$
> X-XA^2-AX+AXA^2=E\Rightarrow X(E-A^2)-AX(E-A^2)=E
> $$
> $$
> \Rightarrow(E-A)X(E-A^2)=E\Rightarrow X=(E-A)^{-1}(E-A^2)^{-1}=\left[(E-A^2)(E-A)\right]^{-1}
> $$
> $$
> \Rightarrow X=(E-A^2-A)^{-1}
> $$
> $$
> E-A^2-A=\begin{pmatrix}0&-1&1\\-1&1&1\\-1&-1&2\end{pmatrix},
> $$
> $$
> (E-A^2-A,E)=\begin{pmatrix}0&-1&1&1&0&0\\-1&1&1&0&1&0\\-1&-1&2&0&0&1\end{pmatrix}\to\begin{pmatrix}1&-1&-1&0&-1&0\\0&-1&1&1&0&0\\-1&-1&2&0&0&1\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&-1&-1&0&-1&0\\0&1&-1&-1&0&0\\0&-2&1&0&-1&1\end{pmatrix}\to\begin{pmatrix}1&-1&0&2&0&-1\\0&1&0&1&1&-1\\0&0&1&2&1&-1\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&0&0&3&1&-2\\0&1&0&1&1&-1\\0&0&1&2&1&-1\end{pmatrix}
> $$
> $$
> \therefore X=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}
> $$

### 2014 年 · 数学一 · 第 20 题（解答，11 分）

（本题满分 11 分）设

$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix},
$$

$E$ 为 3 阶单位矩阵．

（Ⅰ）求方程组 $Ax=0$ 的一个基础解系；

（Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$．

> [!success]- 答案与解析
> **答案**：（Ⅰ）基础解系为 $\xi=(-1,2,3,1)^{\mathrm{T}}$；（Ⅱ）$B=\begin{pmatrix}2-k_1&6-k_2&-k_3-1\\2k_1-1&2k_2-3&2k_3+1\\3k_1-1&3k_2-4&3k_3+1\\k_1&k_2&k_3\end{pmatrix}$（$k_1,k_2,k_3$ 为任意常数）．
>
> （Ⅰ）
>
> $$
> A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}\to\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&4&-3&1\end{pmatrix}\to\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&0&1&-3\end{pmatrix}
> $$
>
> $$
> \to\begin{pmatrix}1&-2&0&5\\0&1&0&-2\\0&0&1&-3\end{pmatrix}\to\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix},
> $$
>
> 则方程组 $AX=0$ 的一个基础解系为 $\xi=(-1,2,3,1)^{\mathrm{T}}$．
>
> （Ⅱ）方法一 由
>
> $$
> (A\ \vdots\ E)=\left(\begin{array}{cccc|ccc}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\1&2&0&-3&0&0&1\end{array}\right)\to\left(\begin{array}{cccc|ccc}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&4&-3&1&-1&0&1\end{array}\right)
> $$
>
> $$
> \to\left(\begin{array}{cccc|ccc}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&0&1&-3&-1&-4&1\end{array}\right)\to\left(\begin{array}{cccc|ccc}1&-2&0&5&4&12&-3\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{array}\right)
> $$
>
> $$
> \to\left(\begin{array}{cccc|ccc}1&0&0&1&2&6&-1\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{array}\right),
> $$
>
> 得
>
> $$
> B=\begin{pmatrix}2-k_1&6-k_2&-k_3-1\\2k_1-1&2k_2-3&2k_3+1\\3k_1-1&3k_2-4&3k_3+1\\k_1&k_2&k_3\end{pmatrix}\quad (k_1,k_2,k_3\ \text{为任意常数}).
> $$
>
> 方法二 令 $B=(X_1,X_2,X_3)$，$E=(e_1,e_2,e_3)$，
>
> 则 $AB=E$ 等价于 $AX_1=e_1$，$AX_2=e_2$，$AX_3=e_3$，
>
> 方程组 $AX_1=e_1$ 的通解为
>
> $$
> X_1=k_1\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}2\\-1\\-1\\0\end{pmatrix}=\begin{pmatrix}-k_1+2\\2k_1-1\\3k_1-1\\k_1\end{pmatrix}\quad (k_1\ \text{为任意常数}),
> $$
>
> 方程组 $AX_2=e_2$ 的通解为
>
> $$
> X_2=k_2\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}6\\-3\\-4\\0\end{pmatrix}=\begin{pmatrix}-k_2+6\\2k_2-3\\3k_2-4\\k_2\end{pmatrix}\quad (k_2\ \text{为任意常数}),
> $$
>
> 方程组 $AX_3=e_3$ 的通解为
>
> $$
> X_3=k_3\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\1\\0\end{pmatrix}=\begin{pmatrix}-k_3-1\\2k_3+1\\3k_3+1\\k_3\end{pmatrix}\quad (k_3\ \text{为任意常数}),
> $$
>
> 故
>
> $$
> B=\begin{pmatrix}-k_1+2&-k_2+6&-k_3-1\\2k_1-1&2k_2-3&2k_3+1\\3k_1-1&3k_2-4&3k_3+1\\k_1&k_2&k_3\end{pmatrix}\quad (k_1,k_2,k_3\ \text{为任意常数}).
> $$

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

### 2014 年 · 数学二 · 第 22 题（解答，11 分）

设矩阵
$$
A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix},
$$
$E$ 为 3 阶单位矩阵.

（Ⅰ）求方程组 $Ax=0$ 的一个基础解系；

（Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$.

> [!success]- 答案与解析
> **答案**：（Ⅰ）$c\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}$（$c$ 为任意常数）；（Ⅱ）$B=\begin{pmatrix}-c_1+2&-c_2+6&-c_3-1\\2c_1-1&2c_2-3&2c_3+1\\3c_1-1&3c_2-4&3c_3+1\\c_1&c_2&c_3\end{pmatrix}$（$c_1,c_2,c_3$ 为任意常数）
>
> （Ⅰ）
> $$
> (A)=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}\xrightarrow{r_1+r_3}\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&4&-3&1\end{pmatrix}\xrightarrow{-4r_2+r_3}\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&0&1&-3\end{pmatrix}
> $$
> $$
> \xrightarrow{r_3+r_2,\ -3r_3+r_1}\begin{pmatrix}1&-2&0&5\\0&1&0&-2\\0&0&1&-3\end{pmatrix}\xrightarrow{2r_2+r_1}\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix}
> $$
> $$
> x_1=-x_4,\quad x_2=2x_4,\quad x_3=3x_4,\quad x_4=x_4
> $$
> $$
> \begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=c\begin{pmatrix}-1\\2\\3\\1\end{pmatrix},\quad c\text{ 为任意常数}
> $$
> （Ⅱ）设 $B=\begin{pmatrix}x_1&y_1&z_1\\x_2&y_2&z_2\\x_3&y_3&z_3\end{pmatrix}$
> $$
> A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\0\\0\end{pmatrix}\Rightarrow\left(\begin{array}{cccc|c}1&-2&3&-4&1\\0&1&-1&1&0\\1&2&0&-3&0\end{array}\right)
> $$
> $$
> A\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}=\begin{pmatrix}0\\1\\0\end{pmatrix}\Rightarrow\left(\begin{array}{cccc|c}1&-2&3&-4&0\\0&1&-1&1&1\\1&2&0&-3&0\end{array}\right)
> $$
> $$
> A\begin{pmatrix}z_1\\z_2\\z_3\end{pmatrix}=\begin{pmatrix}0\\0\\1\end{pmatrix}\Rightarrow\left(\begin{array}{cccc|c}1&-2&3&-4&0\\0&1&-1&1&0\\1&2&0&-3&1\end{array}\right)
> $$
> 即
> $$
> \begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\1&2&0&-3&0&0&1\end{pmatrix}\to\begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&4&-3&1&0&0&1\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&-2&3&-4&1&0&0\\0&1&-1&1&0&1&0\\0&0&1&-3&0&0&1\end{pmatrix}\to\begin{pmatrix}1&-2&0&5&4&12&-3\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&0&0&1&2&6&-1\\0&1&0&-2&-1&-3&1\\0&0&1&-3&-1&-4&1\end{pmatrix}
> $$
> $$
> \begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=c_1\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}2\\-1\\-1\\0\end{pmatrix},\quad \begin{pmatrix}y_1\\y_2\\y_3\\y_4\end{pmatrix}=c_2\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}6\\-3\\-4\\0\end{pmatrix},\quad \begin{pmatrix}z_1\\z_2\\z_3\\z_4\end{pmatrix}=c_3\begin{pmatrix}-1\\2\\3\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\1\\0\end{pmatrix}
> $$
> $$
> \therefore B=\begin{pmatrix}-c_1+2&-c_2+6&-c_3-1\\2c_1-1&2c_2-3&2c_3+1\\3c_1-1&3c_2-4&3c_3+1\\c_1&c_2&c_3\end{pmatrix}
> $$
> $c_1,c_2,c_3$ 为任意常数

### 2013 年 · 数学一 · 第 20 题（解答，11 分）

（本题满分 11 分）设 $A=\begin{pmatrix}1&a\\1&0\end{pmatrix}$，$B=\begin{pmatrix}0&1\\1&b\end{pmatrix}$．当 $a,b$ 为何值时，存在矩阵 $C$ 使得 $AC-CA=B$，并求所有矩阵 $C$．

> [!success]- 答案与解析
> **答案**：$a=-1$，$b=0$；$C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}$（$k_1,k_2$ 为任意常数）．
>
> 设 $C=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$，则
>
> $$
> AC-CA=\begin{pmatrix}-x_2+ax_3&-ax_1+x_2+ax_4\\x_1-x_3-x_4&x_2-ax_3\end{pmatrix},
> $$
>
> 由 $AC-CA=B$，得
>
> $$
> \begin{cases}-x_2+ax_3=0,\\-ax_1+x_2+ax_4=1,\\x_1-x_3-x_4=1,\\x_2-ax_3=b.\end{cases}
> $$
>
> 设以上方程组对应的系数矩阵为 $D$，则
>
> $$
> \overline{D}=\begin{pmatrix}0&-1&a&0&\mid&0\\-a&1&0&a&\mid&1\\1&0&-1&-1&\mid&1\\0&1&-a&0&\mid&b\end{pmatrix}\to\begin{pmatrix}0&-1&a&0&\mid&0\\0&1&-a&0&\mid&1+a\\1&0&-1&-1&\mid&1\\0&1&-a&0&\mid&b\end{pmatrix}
> $$
>
> $$
> \to\begin{pmatrix}1&0&-1&-1&\mid&1\\0&1&-a&0&\mid&1+a\\0&0&0&0&\mid&1+a\\0&0&0&0&\mid&b\end{pmatrix}.
> $$
>
> 当 $a=-1$，$b=0$ 时，线性方程组 $AC-CA=B$ 有解，
>
> 由
>
> $$
> \overline{D}\to\begin{pmatrix}1&0&-1&-1&\mid&1\\0&1&1&0&\mid&0\\0&0&0&0&\mid&0\\0&0&0&0&\mid&0\end{pmatrix},
> $$
>
> 得 $AC-CA=B$ 的通解为
>
> $$
> X=k_1\begin{pmatrix}1\\-1\\1\\0\end{pmatrix}+k_2\begin{pmatrix}1\\0\\0\\1\end{pmatrix}+\begin{pmatrix}1\\0\\0\\0\end{pmatrix}=\begin{pmatrix}k_1+k_2+1\\-k_1\\k_1\\k_2\end{pmatrix},
> $$
>
> 故
>
> $$
> C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}\quad (k_1,k_2\ \text{为任意常数}).
> $$

### 2013 年 · 数学三 · 第 20 题（解答，11 分）

（本题满分 11 分）设
$$
A=\begin{pmatrix}1&a\\1&0\end{pmatrix},\quad B=\begin{pmatrix}0&1\\1&b\end{pmatrix}.
$$
当 $a,b$ 为何值时，存在矩阵 $C$ 使得 $AC-CA=B$，并求所有矩阵 $C$。

> [!success]- 答案与解析
> **答案**：$a=-1$，$b=0$；此时 $C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}$，$k_1,k_2$ 为任意常数。
>
> 由题意可知矩阵 $C$ 为 2 阶矩阵，故可设 $C=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$，则由 $AC-CA=B$ 可得线性方程组
> $$
> \begin{cases}
> -x_2+ax_3=0,\\
> -ax_1+x_2+ax_4=1,\\
> x_1-x_3-x_4=1,\\
> x_2-ax_3=b.
> \end{cases}\tag{1}
> $$
> 对增广矩阵作初等行变换：
> $$
> \begin{pmatrix}0&-1&a&0&0\\-a&1&0&a&1\\1&0&-1&-1&1\\0&1&-a&0&b\end{pmatrix}
> \to\begin{pmatrix}1&0&-1&-1&1\\-a&1&0&a&1\\0&-1&a&0&0\\0&1&-a&0&b\end{pmatrix}
> \to\begin{pmatrix}1&0&-1&-1&1\\0&1&-a&0&1+a\\0&-1&a&0&0\\0&1&-a&0&b\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&0&-1&-1&1\\0&1&-a&0&1+a\\0&0&0&0&1+a\\0&0&0&0&b-1-a\end{pmatrix}.
> $$
> 由于方程组 (1) 有解，故 $1+a=0$，$b-1-a=0$，即 $a=-1,\ b=0$。从而有
> $$
> \begin{pmatrix}0&-1&a&0&0\\-a&1&0&a&1\\1&0&-1&-1&1\\0&1&-a&0&b\end{pmatrix}\to\begin{pmatrix}1&0&-1&-1&1\\0&1&1&0&0\\0&0&0&0&0\\0&0&0&0&0\end{pmatrix},
> $$
> 故有
> $$
> \begin{cases}x_1=k_1+k_2+1,\\ x_2=-k_1,\\ x_3=k_1,\\ x_4=k_2,\end{cases}
> $$
> 其中 $k_1,k_2$ 任意。从而有
> $$
> C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}.
> $$

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
