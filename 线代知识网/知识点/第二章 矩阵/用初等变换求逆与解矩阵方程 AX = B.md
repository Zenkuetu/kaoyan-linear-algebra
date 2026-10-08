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

## <span class="hx hx-exam">📝</span> 九、真题（1987–2026）

### 2026 年 · 数学三 · 第 5 题（选择，5 分）

设矩阵 $A=\begin{pmatrix}1&0&1\\0&0&1\\1&1&3\\1&1&1\end{pmatrix}$，$C=\begin{pmatrix}2&0\\1&1\\1&1\\a&b\end{pmatrix}$，若存在矩阵 $B$ 满足 $AB=C$，则（ ）

（A）$a=-1,b=-1$　（B）$a=2,b=2$　（C）$a=-1,b=2$　（D）$a=2,b=-1$

> [!success]- 答案与解析
> **答案**：（A）
>
> 由于存在矩阵 $B$ 满足 $AB=C$，可知方程 $AX=C$ 有解，所以有 $r(A)=r(A,C)$，初等行变换易得 $a=b=-1$，故选 A。

### 2026 年 · 数学二 · 第 9 题（选择，5 分）

设矩阵
$$
A=\begin{pmatrix}1&0&1\\0&0&1\\1&1&3\\1&1&1\end{pmatrix},\quad C=\begin{pmatrix}2&0\\1&1\\1&1\\a&b\end{pmatrix},
$$
若存在矩阵 $B$ 满足 $AB=C$，则

（A）$a=-1,\ b=-1$　　（B）$a=2,\ b=2$

（C）$a=-1,\ b=2$　　（D）$a=2,\ b=-1$

> [!success]- 答案与解析
> **答案**：（A）
>
> 【解析】
> $$
> (A,C)=\begin{pmatrix}1&0&1&2&0\\0&0&1&1&1\\1&1&3&1&1\\1&1&1&a&b\end{pmatrix}\to\begin{pmatrix}1&0&1&2&0\\0&0&1&1&1\\0&1&2&-1&1\\0&0&-2&a-1&b-1\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&0&1&2&0\\0&0&1&1&1\\0&1&2&-1&1\\0&0&0&a+1&b+1\end{pmatrix}
> $$
> 由于 $r(A,C)=r(A)$，故 $a+1=0,b+1=0$，故 $a=-1,b=-1$. 故选（A）.

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
> **答案**：
> （Ⅰ）$a=2$；（Ⅱ）
> $$
> P=\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\2k_1-1&2k_2-1&2k_3-1\\k_1&k_2&k_3\end{pmatrix},
> $$
> 其中 $k_1,k_2,k_3$ 为任意常数，且 $k_2\ne k_3$。
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
> **答案**：
> （Ⅰ）$a=0$；（Ⅱ）
> $$
> X=\begin{pmatrix}3&1&-2\\1&1&-1\\2&1&-1\end{pmatrix}
> $$
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
> **答案**：
> （Ⅰ）基础解系 $\alpha=(-1,2,3,1)^{\mathrm{T}}$；
>
> （Ⅱ）$B=\begin{pmatrix}2&6&-1\\-1&-3&1\\-1&-4&1\\0&0&0\end{pmatrix}+(k_1\alpha,\ k_2\alpha,\ k_3\alpha)$，$k_1,k_2,k_3$ 为任意常数。
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

### 2006 年 · 数学一 · 第 5 题（填空，4 分）

设矩阵 $A=\begin{pmatrix}2&1\\-1&2\end{pmatrix}$，$E$ 为 2 阶单位矩阵，矩阵 $B$ 满足 $BA=B+2E$，则 $|B|=\underline{\qquad}$．

> [!success]- 答案与解析
> **答案**：$2$
>
> 【解】 由 $BA=B+2E$，得 $B(A-E)=2E$，两边取行列式，得 $|B|\cdot|A-E|=4$，
>
> 因为 $A-E=\begin{pmatrix}1&1\\-1&1\end{pmatrix}$，所以 $|A-E|=2$，于是 $|B|=2$．

### 2004 年 · 数学一 · 第 5 题（填空，4 分）

设矩阵 $A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&1\end{pmatrix}$，矩阵 $B$ 满足 $ABA^{*}=2BA^{*}+E$，其中 $A^{*}$ 为 $A$ 的伴随矩阵，$E$ 是单位矩阵，则 $|B|=\underline{\qquad}$．

> [!success]- 答案与解析
> **答案**：$\dfrac{1}{9}$
>
> 【解】 $|A|=3$，在 $ABA^{*}=2BA^{*}+E$ 两边右乘 $A$，得 $3AB=6B+A$ 或 $3(A-2E)B=A$．于是 $3^3|A-2E|\cdot|B|=|A|$．
> $$
> \text{而 }A-2E=\begin{pmatrix}0&1&0\\1&0&0\\0&0&-1\end{pmatrix},\quad|A-2E|=1,\text{故 }|B|=\frac{1}{9}.
> $$
>
> > **方法点评**：本题考查由矩阵关系等式确定的矩阵的行列式．本题的关键是要应用公式 $AA^{*}=A^{*}A=|A|E$．

### 2001 年 · 数学二 · 第十一题（解答，6 分）

已知矩阵 $A=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}$，$B=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}$，且矩阵 $X$ 满足 $AXA+BXB=AXB+BXA+E$，其中 $E$ 是 3 阶单位矩阵，求 $X$.

> [!success]- 答案与解析
> **答案**：
> $$
> X=\begin{pmatrix}1&2&5\\0&1&2\\0&0&1\end{pmatrix}.
> $$
>
> 由题设，原方程可化为
> $$
> AX(A-B)+BX(B-A)=E,\ \text{即}\ (A-B)X(A-B)=E.
> $$
> 其中，
> $$
> A-B=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}-\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}=\begin{pmatrix}1&-1&-1\\0&1&-1\\0&0&1\end{pmatrix}
> $$
> 因为 $|A-B|=\begin{vmatrix}1&-1&-1\\0&1&-1\\0&0&1\end{vmatrix}=(-1)^{1+1}\begin{vmatrix}1&-1\\0&1\end{vmatrix}=1\ne0$，
>
> 故由 $n$ 阶矩阵 $A$ 可逆的充要条件 $|A|\ne0$，知矩阵 $A-B$ 可逆，用初等行变换求 $(A-B)^{-1}$：
> $$
> (A-B,E)=\begin{pmatrix}1&-1&-1&:&1&0&0\\0&1&-1&:&0&1&0\\0&0&1&:&0&0&1\end{pmatrix}\xrightarrow{3\text{行分别加到}1,2\text{行}}\begin{pmatrix}1&-1&0&:&1&0&1\\0&1&0&:&0&1&1\\0&0&1&:&0&0&1\end{pmatrix}
> $$
> $$
> \xrightarrow{2\text{行加到}1\text{行}}\begin{pmatrix}1&0&0&:&1&1&2\\0&1&0&:&0&1&1\\0&0&1&:&0&0&1\end{pmatrix}
> $$
> 故而
> $$
> (A-B)^{-1}=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix},
> $$
> 于是，等式 $(A-B)X(A-B)=E$ 两边左、右乘 $(A-B)^{-1}$ 可得
> $$
> X=\left[(A-B)^{-1}\right]^2=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}=\begin{pmatrix}1&2&5\\0&1&2\\0&0&1\end{pmatrix}.
> $$

### 2000 年 · 数学一 · 解答题第 10 题（解答，6 分）

（本题满分 6 分）设矩阵 $A$ 的伴随矩阵 $A^{*}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&-3&0&8\end{pmatrix}$，且 $ABA^{-1}=BA^{-1}+3E$，其中 $E$ 为 4 阶单位矩阵，求矩阵 $B$．

> [!success]- 答案与解析
> **答案**：$B=\begin{pmatrix}6&0&0&0\\0&6&0&0\\6&0&6&0\\0&3&0&-1\end{pmatrix}$
>
> （18）【解】 $|A^{*}|=8$，由 $|A^{*}|=|A|^3$，得 $|A|=2$．
>
> 由 $ABA^{-1}=BA^{-1}+3E$，得 $AB=B+3A$，解得 $(A-E)B=3A$．
>
> 于是 $B=3(A-E)^{-1}A=3[A^{-1}(A-E)]^{-1}=6(2E-2A^{-1})^{-1}=6(2E-A^{*})^{-1}$，
> $$
> \text{因为 }2E-A^{*}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\-1&0&1&0\\0&3&0&-6\end{pmatrix},\text{所以 }(2E-A^{*})^{-1}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&\dfrac{1}{2}&0&-\dfrac{1}{6}\end{pmatrix},
> $$
> $$
> \text{于是 }B=\begin{pmatrix}6&0&0&0\\0&6&0&0\\6&0&6&0\\0&3&0&-1\end{pmatrix}.
> $$

### 1999 年 · 数学二 · 第十一题（解答，6 分）

设矩阵 $A=\begin{pmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{pmatrix}$，矩阵 $X$ 满足 $A^*X=A^{-1}+2X$，其中 $A^*$ 是 $A$ 的伴随矩阵，求矩阵 $X$.

> [!success]- 答案与解析
> **答案**：
> $$
> X=\frac{1}{4}\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}.
> $$
>
> 题设条件 $A^*X=A^{-1}+2X$
>
> 上式两端左乘 $A$，得 $AA^*X=AA^{-1}+2AX$
>
> 因为 $AA^*=|A|E,AA^{-1}=E$，所以 $|A|X=E+2AX\Rightarrow(|A|E-2A)X=E$
>
> 根据可逆矩阵的定义：对于矩阵 $A_n$，如果存在矩阵 $B_n$，使得 $AB=BA=E$，则称 $A$ 为可逆矩阵，并称 $B$ 是 $A$ 的逆矩阵，故 $(|A|E-2A),X$ 均是可逆矩阵，且
> $$
> X=(|A|E-2A)^{-1}
> $$
> 又
> $$
> |A|=\begin{vmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{vmatrix}\xrightarrow[3\text{行}+1\text{行}]{2\text{行}+1\text{行}}\begin{vmatrix}1&1&-1\\0&2&0\\2&0&0\end{vmatrix}\xrightarrow{1\text{行}-3\text{行}\times\frac{1}{2}}\begin{vmatrix}0&1&-1\\0&2&0\\2&0&0\end{vmatrix}\xrightarrow{1\text{行}-2\text{行}\times\frac{1}{2}}\begin{vmatrix}0&0&-1\\0&2&0\\2&0&0\end{vmatrix}=4
> $$
> 因为常数 $k$ 与矩阵 $A$ 相乘，$A$ 的每个元素都要乘以 $k$，故
> $$
> |A|E=4E=\begin{pmatrix}4&0&0\\0&4&0\\0&0&4\end{pmatrix},\qquad 2A=\begin{pmatrix}2&2&-2\\-2&2&2\\2&-2&2\end{pmatrix}
> $$
> 所以
> $$
> |A|E-2A=2(2E-A)=\begin{pmatrix}2&-2&2\\2&2&-2\\-2&2&2\end{pmatrix}=2\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}\quad(\text{对应元素相减})
> $$
> $$
> X=(|A|E-2A)^{-1}=\left(2\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}\right)^{-1}=\frac{1}{2}\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}^{-1}\quad((kA)^{-1}=k^{-1}A^{-1})
> $$
> 用初等行变换求逆，当用初等行变换将矩阵 $A$ 化为单位矩阵时，经过相同的初等行变换，单位矩阵 $E$ 化成了 $A^{-1}$，即 $(A\ E)\xrightarrow{\text{初等行变换}}(E\ A^{-1})$
> $$
> \left(\begin{array}{ccc|ccc}1&-1&1&1&0&0\\1&1&-1&0&1&0\\-1&1&1&0&0&1\end{array}\right)\to\cdots\to\left(\begin{array}{ccc|ccc}1&0&0&\frac{1}{2}&\frac{1}{2}&0\\0&1&0&0&\frac{1}{2}&\frac{1}{2}\\0&0&1&\frac{1}{2}&0&\frac{1}{2}\end{array}\right)
> $$
> 故
> $$
> X=\frac{1}{2}\begin{pmatrix}\frac{1}{2}&\frac{1}{2}&0\\0&\frac{1}{2}&\frac{1}{2}\\\frac{1}{2}&0&\frac{1}{2}\end{pmatrix}=\frac{1}{4}\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}.
> $$

### 1998 年 · 数学三 · 填空题第 4 题（填空，3 分）

设矩阵 $A,B$ 满足 $A^*BA=2BA-8E$，其中 $A=\begin{pmatrix}1&0&0\\0&-2&0\\0&0&1\end{pmatrix}$，$E$ 为单位矩阵，$A^*$ 为 $A$ 的伴随矩阵，则 $B=$ $\underline{\qquad}$。

> [!success]- 答案与解析
> **答案**：$B=\begin{pmatrix}2&0&0\\0&-4&0\\0&0&2\end{pmatrix}$。
>
> 【解析】由题设 $A^*BA=2BA-8E$，
> $$
> |A|=-2\ne 0,
> $$
> 所以 $A$ 可逆。上式两边左乘 $A$，右乘 $A^{-1}$，得
> $$
> AA^*BAA^{-1}=2ABAA^{-1}-8AA^{-1},
> $$
> $$
> |A|B=2AB-8E\quad(\text{利用公式：}AA^*=|A|E,\ AA^{-1}=E),
> $$
> $$
> |A|B-2AB=-8E\quad(\text{移项}),
> $$
> $$
> (|A|E-2A)B=-8E\quad(\text{矩阵乘法的运算法则}).
> $$
> 将 $|A|=-2$ 代入上式，整理得
> $$
> \frac{1}{4}(E+A)B=E.
> $$
> 由矩阵可逆的定义，知 $E+A,B$ 均可逆，且
> $$
> B=4(E+A)^{-1}=4\begin{pmatrix}\dfrac{1}{2}&0&0\\0&-1&0\\0&0&\dfrac{1}{2}\end{pmatrix}=\begin{pmatrix}2&0&0\\0&-4&0\\0&0&2\end{pmatrix}.
> $$

### 1998 年 · 数学二 · 第十二题（解答，5 分）

设 $(2E-C^{-1}B)A^{\mathrm{T}}=C^{-1}$，其中 $E$ 是 4 阶单位矩阵，$A^{\mathrm{T}}$ 是 4 阶矩阵 $A$ 的转置矩阵，
$$
B=\begin{pmatrix}1&2&-3&-2\\0&1&2&-3\\0&0&1&2\\0&0&0&1\end{pmatrix},\qquad C=\begin{pmatrix}1&2&0&1\\0&1&2&0\\0&0&1&2\\0&0&0&1\end{pmatrix}.
$$
求 $A$.

> [!success]- 答案与解析
> **答案**：
> $$
> A=(2C^{\mathrm{T}}-B^{\mathrm{T}})^{-1}=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
> $$
>
> 由矩阵运算法则，将等式 $(2E-C^{-1}B)A^{\mathrm{T}}=C^{-1}$ 两边左乘 $C$，得
> $$
> C(2E-C^{-1}B)A^{\mathrm{T}}=CC^{-1},\ \text{即}\ (2C-B)A^{\mathrm{T}}=E.
> $$
> 对上式两端取转置，有 $A(2C^{\mathrm{T}}-B^{\mathrm{T}})=E$.
>
> 由可逆矩阵及逆矩阵的定义，可知矩阵 $2C^{\mathrm{T}}-B^{\mathrm{T}},A$ 均可逆，因为 $A$ 是 4 阶方阵，故
> $$
> A=(2C^{\mathrm{T}}-B^{\mathrm{T}})^{-1}=\begin{pmatrix}1&0&0&0\\2&1&0&0\\3&2&1&0\\4&3&2&1\end{pmatrix}^{-1}=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
> $$

### 1997 年 · 数学二 · 计算题第 6 题（解答，5 分）

已知矩阵
$$
A=\begin{pmatrix}1&1&-1\\0&1&1\\0&0&-1\end{pmatrix},
$$
且 $A^2-AB=E$，其中 $E$ 是 $3$ 阶单位矩阵，求矩阵 $B$。

> [!success]- 答案与解析
> **答案**：
> $$
> B=\begin{pmatrix}0&2&1\\0&0&0\\0&0&0\end{pmatrix}.
> $$
>
> 【答案】
> $$
> \begin{pmatrix}0&2&1\\0&0&0\\0&0&0\end{pmatrix}
> $$
>
> 【解析】由题设条件 $A^2-AB=E$，把 $A$ 提出来得 $A(A-B)=E$，因为
> $$
> |A|=\begin{vmatrix}1&1&-1\\0&1&1\\0&0&-1\end{vmatrix}=-1\ne 0,
> $$
> 由此知道 $A$ 是满秩的，所以 $A$ 可逆，两边左乘 $A^{-1}$，从而有 $A-B=A^{-1}$，$B=A-A^{-1}$。
>
> （或 $A^2-AB=E$，$AB=A^2-E$，$A$ 可逆，两边左乘 $A^{-1}$，得 $B=A^{-1}(A^2-E)=A-A^{-1}$。）
>
> 用矩阵的初等变换求 $A^{-1}$。
> $$
> [A:E]=\begin{pmatrix}1&1&-1&:&1&0&0\\0&1&1&:&0&1&0\\0&0&-1&:&0&0&1\end{pmatrix}\xrightarrow{[1]+[3]\times(-1),[2]+[3]}\begin{pmatrix}1&1&0&:&1&0&-1\\0&1&0&:&0&1&1\\0&0&-1&:&0&0&1\end{pmatrix}\xrightarrow{[1]+[2]\times(-1),[3]\times(-1)}\begin{pmatrix}1&0&0&:&1&-1&-2\\0&1&0&:&0&1&1\\0&0&1&:&0&0&-1\end{pmatrix}=[E:A^{-1}],
> $$
> 得
> $$
> A^{-1}=\begin{pmatrix}1&-1&-2\\0&1&1\\0&0&-1\end{pmatrix},
> $$
> 从而得
> $$
> B=A-A^{-1}=\begin{pmatrix}1&1&-1\\0&1&1\\0&0&-1\end{pmatrix}-\begin{pmatrix}1&-1&-2\\0&1&1\\0&0&-1\end{pmatrix}=\begin{pmatrix}0&2&1\\0&0&0\\0&0&0\end{pmatrix}.
> $$

### 1995 年 · 数学一 · 填空题第 5 题（填空，3 分）

设 3 阶方阵 $A,B$ 满足关系式 $A^{-1}BA=6A+BA$，且
$$
A=\begin{pmatrix}\dfrac{1}{3}&0&0\\0&\dfrac{1}{4}&0\\0&0&\dfrac{1}{7}\end{pmatrix},
$$
则 $B=$______.

> [!success]- 答案与解析
> **答案**：
> $$
> B=\begin{pmatrix}3&0&0\\0&2&0\\0&0&1\end{pmatrix}.
> $$
>
> 由 $A^{-1}BA=6A+BA$ 得 $BA=6A^2+ABA$，然后右乘 $A^{-1}$ 得 $B=6A+AB$，解得
> $$
> B=6(E-A)^{-1}A=6[A^{-1}(E-A)]^{-1}=6(A^{-1}-E)^{-1},
> $$
> 由
> $$
> A^{-1}-E=\begin{pmatrix}2&0&0\\0&3&0\\0&0&6\end{pmatrix},
> $$
> 得 $(A^{-1}-E)^{-1}=\begin{pmatrix}\dfrac{1}{2}&0&0\\0&\dfrac{1}{3}&0\\0&0&\dfrac{1}{6}\end{pmatrix}$，故
> $$
> B=\begin{pmatrix}3&0&0\\0&2&0\\0&0&1\end{pmatrix}.
> $$

### 1990 年 · 数学一 · 第七大题（解答，6 分）

设 4 阶矩阵
$$
B=\begin{pmatrix}1&-1&0&0\\0&1&-1&0\\0&0&1&-1\\0&0&0&1\end{pmatrix},\quad C=\begin{pmatrix}2&1&3&4\\0&2&1&3\\0&0&2&1\\0&0&0&2\end{pmatrix},
$$
且矩阵 $A$ 满足关系式
$$
A(E-C^{-1}B)^{\mathrm{T}}C^{\mathrm{T}}=E,
$$
其中 $E$ 为 4 阶单位矩阵，$C^{-1}$ 表示 $C$ 的逆矩阵，$C^{\mathrm{T}}$ 表示 $C$ 的转置矩阵，将上述关系式化简并求矩阵 $A$.

> [!success]- 答案与解析
> **答案**：
> $$
> A=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
> $$
>
> 由 $A(E-C^{-1}B)^{\mathrm{T}}C^{\mathrm{T}}=E$ 得 $A[C(E-C^{-1}B)]^{\mathrm{T}}=E$，即 $A(C-B)^{\mathrm{T}}=E$，解得
> $$
> A=[(C-B)^{\mathrm{T}}]^{-1},
> $$
> 而
> $$
> C-B=\begin{pmatrix}1&2&3&4\\0&1&2&3\\0&0&1&2\\0&0&0&1\end{pmatrix},\quad(C-B)^{\mathrm{T}}=\begin{pmatrix}1&0&0&0\\2&1&0&0\\3&2&1&0\\4&3&2&1\end{pmatrix},
> $$
> 由
> $$
> \begin{pmatrix}1&0&0&0&1&0&0&0\\2&1&0&0&0&1&0&0\\3&2&1&0&0&0&1&0\\4&3&2&1&0&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&0&0&1&0&0&0\\0&1&0&0&-2&1&0&0\\0&0&1&0&1&-2&1&0\\0&0&0&1&0&1&-2&1\end{pmatrix},
> $$
> 得
> $$
> A=\begin{pmatrix}1&0&0&0\\-2&1&0&0\\1&-2&1&0\\0&1&-2&1\end{pmatrix}.
> $$

### 1989 年 · 数学三 · 第七题（解答，5 分）

已知 $X=AX+B$，其中
$$
A=\begin{pmatrix}0&1&0\\-1&1&1\\-1&0&-1\end{pmatrix},\qquad B=\begin{pmatrix}1&-1\\2&0\\5&-3\end{pmatrix},
$$
求矩阵 $X$.

> [!success]- 答案与解析
> **答案**：
> $$
> X=\begin{pmatrix}3&-1\\2&0\\1&-1\end{pmatrix}.
> $$
>
> 解：以 $E$ 表示 3 阶单位矩阵，由 $X=AX+B$，有 $(E-A)X=B$.
> 其中
> $$
> E-A=\begin{pmatrix}1&-1&0\\1&0&-1\\1&0&2\end{pmatrix}.
> $$
> 其逆矩阵为
> $$
> (E-A)^{-1}=\begin{pmatrix}0&\dfrac{2}{3}&\dfrac{1}{3}\\-1&\dfrac{2}{3}&\dfrac{1}{3}\\0&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix};
> $$
> 于是
> $$
> X=(E-A)^{-1}B=\begin{pmatrix}0&\dfrac{2}{3}&\dfrac{1}{3}\\-1&\dfrac{2}{3}&\dfrac{1}{3}\\0&-\dfrac{1}{3}&\dfrac{1}{3}\end{pmatrix}\begin{pmatrix}1&-1\\2&0\\5&-3\end{pmatrix}=\begin{pmatrix}3&-1\\2&0\\1&-1\end{pmatrix}.
> $$

### 1987 年 · 数学一 · 第三大题第（2）小题（解答，4 分）

设矩阵 $A$ 与 $B$ 满足 $AB=A+2B$，其中
$$
A=\begin{pmatrix}3&0&1\\1&1&0\\0&1&4\end{pmatrix},
$$
求矩阵 $B$.

> [!success]- 答案与解析
> **答案**：$B=\begin{pmatrix}5&-2&-2\\4&-3&-2\\-2&2&3\end{pmatrix}$
>
> 由 $AB=A+2B$ 得 $(A-2E)B=A$，解得 $B=(A-2E)^{-1}A$，而
> $$
> A-2E=\begin{pmatrix}1&0&1\\1&-1&0\\0&1&2\end{pmatrix},
> $$
> 由
> $$
> \begin{pmatrix}1&0&1&1&0&0\\1&-1&0&0&1&0\\0&1&2&0&0&1\end{pmatrix}\to\begin{pmatrix}1&0&1&1&0&0\\0&-1&-1&-1&1&0\\0&0&1&-1&1&1\end{pmatrix}\to\begin{pmatrix}1&0&0&2&-1&-1\\0&1&0&2&-2&-1\\0&0&1&-1&1&1\end{pmatrix},
> $$
> 得
> $$
> (A-2E)^{-1}=\begin{pmatrix}2&-1&-1\\2&-2&-1\\-1&1&1\end{pmatrix},
> $$
> 于是
> $$
> B=\begin{pmatrix}2&-1&-1\\2&-2&-1\\-1&1&1\end{pmatrix}\begin{pmatrix}3&0&1\\1&1&0\\0&1&4\end{pmatrix}=\begin{pmatrix}5&-2&-2\\4&-3&-2\\-2&2&3\end{pmatrix}.
> $$

### 1987 年 · 数学三 · 第九题（解答，7 分）

设矩阵 $A$ 和 $B$ 满足 $AB=A+2B$，求矩阵 $B$，其中
$$
A=\begin{pmatrix}4&2&3\\1&1&0\\-1&2&3\end{pmatrix}.
$$

> [!success]- 答案与解析
> **答案**：
> $$
> B=\begin{pmatrix}3&-8&-6\\2&-9&-6\\-2&12&9\end{pmatrix}.
> $$
>
> 因 $AB=A+2B$，故 $AB-2B=A$，即 $(A-2E)B=A$，
> $$
> B=(A-2E)^{-1}A=\begin{pmatrix}3&-8&-6\\2&-9&-6\\-2&12&9\end{pmatrix}.
> $$

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
