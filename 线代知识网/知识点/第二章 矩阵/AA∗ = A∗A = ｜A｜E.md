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

## <span class="hx hx-exam">📝</span> 九、真题（1987–2026）

### 2026 年 · 数学一 · 第 5 题（选择，5 分）

单位矩阵经过若干次互换两行得到的矩阵称为置换矩阵，设 $A$ 为 $n$ 阶置换矩阵，$A^*$ 为 $A$ 的伴随矩阵，则（　）

（A）$A^*$ 为置换矩阵　（B）$A^{-1}$ 为置换矩阵　（C）$A^{-1}=A^*$　（D）$A^{-1}=-A^*$

> [!success]- 答案与解析
> **答案**：（B）
>
> 由题设知 $A=P_1P_2\cdots P_s$，其中 $P_1,P_2,\cdots,P_s$ 均为初等矩阵，则
> $$
> A^{-1}=(P_1P_2\cdots P_s)^{-1}=P_s^{-1}\cdots P_2^{-1}P_1^{-1}=P_s\cdots P_2P_1
> $$
> 也为置换矩阵，故选（B）。

### 2026 年 · 数学三 · 第 6 题（选择，5 分）

设 $A$ 为 3 阶非零矩阵，$A^{*}$ 为 $A$ 的伴随矩阵。若 $A^{*}=-2A$，则 $A^2=$（ ）

（A）$\begin{pmatrix}-4&0&0\\0&-4&0\\0&0&-4\end{pmatrix}$　（B）$\begin{pmatrix}-4&0&0\\0&-4&0\\0&0&4\end{pmatrix}$

（C）$\begin{pmatrix}-4&0&0\\0&4&0\\0&0&4\end{pmatrix}$　（D）$\begin{pmatrix}4&0&0\\0&4&0\\0&0&4\end{pmatrix}$

> [!success]- 答案与解析
> **答案**：（D）
>
> 由 $A^{*}=-2A$ 两边同时左乘 $A$ 可得，$AA^{*}=-2AA\Rightarrow A^2=\frac{|A|}{-2}E$；对 $A^{*}=-2A$ 取行列式可得
> $$
> |A^{*}|=|-2A|\Rightarrow |A|^2=(-2)^3|A|\Rightarrow |A|=(-2)^3,
> $$
> 从而 $A^2=4E$，故答案选 D。

### 2023 年 · 数学三 · 第 5 题（选择，5 分）

设 $A,B$ 为 $n$ 阶可逆矩阵，$E$ 为 $n$ 阶单位矩阵，$M^{*}$ 为矩阵 $M$ 的伴随矩阵，则
$$
\begin{bmatrix}A&E\\O&B\end{bmatrix}^{*}=
$$
（A）$\begin{bmatrix}|A|B^{*}&-B^{*}A^{*}\\O&|B|A^{*}\end{bmatrix}$　（B）$\begin{bmatrix}|B|A^{*}&-A^{*}B^{*}\\O&|A|B^{*}\end{bmatrix}$

（C）$\begin{bmatrix}|B|A^{*}&-B^{*}A^{*}\\O&|A|B^{*}\end{bmatrix}$　（D）$\begin{bmatrix}|A|B^{*}&-A^{*}B^{*}\\O&|B|A^{*}\end{bmatrix}$

> [!success]- 答案与解析
> **答案**：（B）
>
> （方法一）分别令（A）（B）（C）（D）选项中的矩阵为 $I_1,I_2,I_3,I_4$。
> $$
> \begin{bmatrix}A&E\\O&B\end{bmatrix}I_1=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}|A|B^{*}&-B^{*}A^{*}\\O&|B|A^{*}\end{bmatrix}=\begin{bmatrix}|A|AB^{*}&\cdots\\\cdots&\cdots\end{bmatrix},
> $$
> 不能保证 $|A|AB^{*}=|A||B|E$，所以 $I_1$ 不是 $\begin{bmatrix}A&E\\O&B\end{bmatrix}^{*}$，选项（A）不正确。同理，选项（D）也不正确。
> $$
> \begin{bmatrix}A&E\\O&B\end{bmatrix}I_3=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}|B|A^{*}&-B^{*}A^{*}\\O&|A|B^{*}\end{bmatrix}=\begin{bmatrix}|A||B|E&-AB^{*}A^{*}+|A|B^{*}\\O&|A||B|E\end{bmatrix},
> $$
> （C）不正确。
> $$
> \begin{bmatrix}A&E\\O&B\end{bmatrix}I_4=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}|A|B^{*}&-A^{*}B^{*}\\O&|B|A^{*}\end{bmatrix}=\begin{bmatrix}|A||B|E&-|A|B^{*}+|A|B^{*}\\O&|A||B|E\end{bmatrix}=\begin{bmatrix}|A||B|E&O\\O&|A||B|E\end{bmatrix},
> $$
> 选项（B）是正确的。
>
> （方法二）
> $$
> \begin{bmatrix}A&E\\O&B\end{bmatrix}^{*}=\begin{bmatrix}A&E\\O&B\end{bmatrix}\begin{bmatrix}A&E\\O&B\end{bmatrix}^{-1}=|A||B|\begin{bmatrix}A^{-1}&-A^{-1}B^{-1}\\O&B^{-1}\end{bmatrix}=\begin{bmatrix}|A||B|A^{-1}&-|A||B|A^{-1}B^{-1}\\O&|A||B|B^{-1}\end{bmatrix}=\begin{bmatrix}|B|A^{*}&-A^{*}B^{*}\\O&|A|B^{*}\end{bmatrix}.
> $$

### 2023 年 · 数学二 · 第 8 题（选择，5 分）

设 $A,B$ 为 $n$ 阶可逆矩阵，$E$ 为 $n$ 阶单位矩阵，$M^*$ 为矩阵 $M$ 的伴随矩阵，则
$$
\begin{pmatrix}A&E\\O&B\end{pmatrix}^*=
$$

（A）$\begin{pmatrix}|A|B^*&-B^*A^*\\O&|B|A^*\end{pmatrix}$　　（B）$\begin{pmatrix}|A|B^*&-A^*B^*\\O&|B|A^*\end{pmatrix}$

（C）$\begin{pmatrix}|B|A^*&-B^*A^*\\O&|A|B^*\end{pmatrix}$　　（D）$\begin{pmatrix}|B|A^*&-A^*B^*\\O&|A|B^*\end{pmatrix}$

> [!success]- 答案与解析
> **答案**：（D）
>
> 【解】
> $$
> \begin{vmatrix}A&E\\O&B\end{vmatrix}=|A|\cdot|B|,
> $$
> 令
> $$
> \begin{pmatrix}A&E\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}X_{11}&X_{12}\\X_{21}&X_{22}\end{pmatrix},
> $$
> 由
> $$
> \begin{pmatrix}A&E\\O&B\end{pmatrix}\begin{pmatrix}X_{11}&X_{12}\\X_{21}&X_{22}\end{pmatrix}=\begin{pmatrix}E&O\\O&E\end{pmatrix}
> $$
> 得
> $$
> \begin{cases}AX_{11}+EX_{21}=E,\\AX_{12}+EX_{22}=O,\\BX_{21}=O,\\BX_{22}=E,\end{cases}
> $$
> 解得
> $$
> \begin{cases}X_{11}=A^{-1},\\X_{12}=-A^{-1}B^{-1},\\X_{21}=O,\\X_{22}=B^{-1},\end{cases}
> $$
> 则
> $$
> \begin{pmatrix}A&E\\O&B\end{pmatrix}^*=|A|\cdot|B|\begin{pmatrix}A^{-1}&-A^{-1}B^{-1}\\O&B^{-1}\end{pmatrix}=\begin{pmatrix}|B|A^*&-A^*B^*\\O&|A|B^*\end{pmatrix},
> $$
> 选（D）。

### 2013 年 · 数学二 · 第 14 题（填空，4 分）

设 $A=(a_{ij})$ 是 3 阶非零矩阵，$|A|$ 为 $A$ 的行列式，$A_{ij}$ 为 $a_{ij}$ 的代数余子式. 若 $a_{ij}+A_{ij}=0\ (i,j=1,2,3)$，则 $|A|=$ ________.

> [!success]- 答案与解析
> **答案**：-1
>
> 由 $a_{ij}+A_{ij}=0$ 可知，$A^{\mathrm{T}}=-A^*$
> $$
> |A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=a_{1j}A_{1j}+a_{2j}A_{2j}+a_{3j}A_{3j}
> $$
> $$
> =-\sum_{j=1}^{3}a_{1j}^2=-\sum_{i=1}^{3}a_{1i}^2<0
> $$
> 从而有 $|A|=|A^{\mathrm{T}}|=|-A^*|=-|A|^2$，故 $|A|=-1$.

### 2012 年 · 数学三 · 第 13 题（填空，4 分）

设 $A$ 为 3 阶矩阵，$|A|=3$，$A^{*}$ 为 $A$ 的伴随矩阵，若交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，则 $|BA^{*}|=\underline{\qquad}$。

> [!success]- 答案与解析
> **答案**：$-27$
>
> 由于 $B=E_{12}A$，故
> $$
> BA^{*}=E_{12}A\cdot A^{*}=|A|E_{12}=3E_{12},
> $$
> 所以
> $$
> |BA^{*}|=|3E_{12}|=3^3|E_{12}|=27\times(-1)=-27.
> $$

### 2012 年 · 数学二 · 第 14 题（填空，4 分）

设 $A$ 为 3 阶矩阵，$|A|=3$，$A^*$ 为 $A$ 的伴随矩阵，若交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，则 $|BA^*|=$ ________.

> [!success]- 答案与解析
> **答案**：-27
>
> 由于 $B=E_{12}A$，故 $BA^*=E_{12}\cdot A\cdot A^*=|A|E_{12}=3E_{12}$，
> 所以，$|BA^*|=|3E_{12}|=3^3|E_{12}|=27\times(-1)=-27$.

### 2011 年 · 数学二 · 第 8 题（选择，4 分）

设 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ 是 4 阶矩阵，$A^*$ 为 $A$ 的伴随矩阵. 若 $(1,0,1,0)^{\mathrm{T}}$ 是方程组 $Ax=0$ 的一个基础解系，则 $A^*x=0$ 的基础解系可为（　）

（A）$\alpha_1,\alpha_3$　（B）$\alpha_1,\alpha_2$　（C）$\alpha_1,\alpha_2,\alpha_3$　（D）$\alpha_2,\alpha_3,\alpha_4$

> [!success]- 答案与解析
> **答案**：（D）
>
> 由于 $(1,0,1,0)^{\mathrm{T}}$ 是方程组 $Ax=0$ 的一个基础解系，所以 $A(1,0,1,0)^{\mathrm{T}}=0$，且 $r(A)=4-1=3$，即 $\alpha_1+\alpha_3=0$，且 $|A|=0$. 由此可得 $A^*A=|A|E=O$，即
> $$
> A^*(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=O,
> $$
> 这说明 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是 $A^*x=0$ 的解.
>
> 由于 $r(A)=3$，$\alpha_1+\alpha_3=0$，所以 $\alpha_2,\alpha_3,\alpha_4$ 线性无关. 又由于 $r(A)=3$，所以 $r(A^*)=1$，因此 $A^*x=0$ 的基础解系中含有 $4-1=3$ 个线性无关的解向量. 而 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，且为 $A^*x=0$ 的解，所以 $\alpha_2,\alpha_3,\alpha_4$ 可作为 $A^*x=0$ 的基础解系，故选 (D).

### 2009 年 · 数学三 · 第 5 题（选择，4 分）

设 $A,B$ 均为 2 阶方阵，$A^*,B^*$ 分别为 $A,B$ 的伴随矩阵。若 $|A|=2$，$|B|=3$，则分块矩阵
$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}
$$
的伴随矩阵为（　　）

（A）$\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$　　（B）$\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$

（C）$\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$　　（D）$\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$

> [!success]- 答案与解析
> **答案**：（B）
>
> 根据 $CC^*=|C|E$，若 $C^*=|C|C^{-1}$，$C^{-1}=\frac{1}{|C|}C^*$。
>
> 分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的行列式
> $$
> \begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{2\times2}|A||B|=2\times3=6,
> $$
> 即分块矩阵可逆，故
> $$
> \begin{pmatrix}O&A\\B&O\end{pmatrix}^*=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=6\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=6\begin{pmatrix}O&\frac{1}{|B|}B^*\\\frac{1}{|A|}A^*&O\end{pmatrix}=6\begin{pmatrix}O&\frac13B^*\\\frac12A^*&O\end{pmatrix}=\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}.
> $$
> 故答案为（B）。

### 2009 年 · 数学一 · 第 6 题（选择，5 分）

设 $A,B$ 均为 2 阶矩阵，$A^*,B^*$ 分别为 $A,B$ 的伴随矩阵，若 $|A|=2$，$|B|=3$，则分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的伴随矩阵为（　　）

（A）$\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$．　　（B）$\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$．

（C）$\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$．　　（D）$\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$．

> [!success]- 答案与解析
> **答案**：（B）
>
> $\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{2\times 2}|A|\cdot|B|=6$，则
>
> $$
> \begin{pmatrix}O&A\\B&O\end{pmatrix}^*=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=6\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=\begin{pmatrix}O&6B^{-1}\\6A^{-1}&O\end{pmatrix}=\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix},
> $$
>
> 应选（B）．

### 2009 年 · 数学二 · 第 7 题（选择，4 分）

设 $A,B$ 均为 2 阶方阵，$A^*,B^*$ 分别为 $A,B$ 的伴随矩阵. 若 $|A|=2$，$|B|=3$，则分块矩阵
$$
\begin{pmatrix}
O&A\\
B&O
\end{pmatrix}
$$
的伴随矩阵为（　）

（A）$\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$　（B）$\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$　（C）$\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$　（D）$\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$

> [!success]- 答案与解析
> **答案**：（B）
>
> 根据 $CC^*=|C|E$ 若 $C^*=|C|C^{-1},C^{-1}=\frac{1}{|C|}C^*$
>
> 分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的行列式 $\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{2\times2}|A||B|=2\times3=6$ 即分块矩阵可逆
> $$
> \begin{pmatrix}O&A\\B&O\end{pmatrix}^*=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=6\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}=6\begin{pmatrix}O&\frac{1}{|B|}B^*\\\frac{1}{|A|}A^*&O\end{pmatrix}
> $$
> $$
> =6\begin{pmatrix}O&\frac{1}{3}B^*\\\frac{1}{2}A^*&O\end{pmatrix}=\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}
> $$

### 2005 年 · 数学一 · 第 12 题（选择，4 分）

设 $A$ 为 $n\ (n\ge 2)$ 阶可逆矩阵，交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，$A^{*},B^{*}$ 分别为 $A,B$ 的伴随矩阵，则（　　）

（A）交换 $A^{*}$ 的第 1 列与第 2 列得 $B^{*}$．
（B）交换 $A^{*}$ 的第 1 行与第 2 行得 $B^{*}$．
（C）交换 $A^{*}$ 的第 1 列与第 2 列得 $-B^{*}$．
（D）交换 $A^{*}$ 的第 1 行与第 2 行得 $-B^{*}$．

> [!success]- 答案与解析
> **答案**：（C）
>
> 【解】 令 $E_{12}=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$，由题意得 $B=E_{12}A$．
>
> 由 $|B|=|E_{12}|\cdot|A|=-|A|$，$B^{-1}=A^{-1}E_{12}^{-1}=A^{-1}E_{12}$，
>
> 得 $B^{*}=|B|B^{-1}=-|A|\cdot A^{-1}E_{12}=-A^{*}E_{12}$ 或 $-B^{*}=A^{*}E_{12}$，
>
> 即交换 $A^{*}$ 的第 1、2 两列得 $-B^{*}$，应选（C）．
>
> > **方法点评**：本题考查初等变换与伴随矩阵．
> > 设 $A$ 为可逆矩阵，当研究 $A^{*}$ 时，一般需要使用公式 $A^{*}=|A|A^{-1}$，即将伴随矩阵问题转化为逆矩阵问题，注意使用如下结论：
> > （1）设 $A,B$ 为可逆的 $n$ 阶矩阵，则 $(AB)^{*}=B^{*}A^{*}$；
> > （2）设 $A,B$ 分别为可逆的 $m$ 阶及 $n$ 阶矩阵，则
> > $\begin{pmatrix}A&O\\O&B\end{pmatrix}^{*}=\begin{vmatrix}A&O\\O&B\end{vmatrix}\begin{pmatrix}A&O\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}|B|A^{*}&O\\O&|A|B^{*}\end{pmatrix}$；
> > $\begin{pmatrix}O&A\\B&O\end{pmatrix}^{*}=\begin{vmatrix}O&A\\B&O\end{vmatrix}\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=(-1)^{mn}\begin{pmatrix}O&|A|B^{*}\\|B|A^{*}&O\end{pmatrix}$．

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

### 1998 年 · 数学二 · 选择题第 5 题（选择，3 分）

设 $A$ 是任一 $n\ (n\ge3)$ 阶方阵，$A^*$ 是其伴随矩阵，又 $k$ 为常数，且 $k\ne0,\pm1$，则必有 $(kA)^*=(\quad)$

（A）$kA^*$.
（B）$k^{n-1}A^*$.
（C）$k^nA^*$.
（D）$k^{-1}A^*$.

> [!success]- 答案与解析
> **答案**：（B）
>
> 对任何 $n$ 阶矩阵都要成立的关系式，对特殊的 $n$ 阶矩阵自然也要成立. 那么，当 $A$ 可逆时，由 $A^*=|A|A^{-1}$，有
> $$
> (kA)^*=|kA|(kA)^{-1}=k^n|A|\cdot\frac{1}{k}A^{-1}=k^{n-1}|A|A^{-1}=k^{n-1}A^*.
> $$
> 故应选（B）.
>
> 一般地，若 $A=(a_{ij})_{n\times n}$，那么 $kA=(ka_{ij})_{n\times n}$，那么矩阵 $kA$ 的第 $i$ 行 $j$ 列元素的代数余子式为
> $$
> (-1)^{i+j}\begin{vmatrix}ka_{11}&\cdots&ka_{1,j-1}&ka_{1,j+1}&\cdots&ka_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\ka_{i-1,1}&\cdots&ka_{i-1,j-1}&ka_{i-1,j+1}&\cdots&ka_{i-1,n}\\ka_{i+1,1}&\cdots&ka_{i+1,j-1}&ka_{i+1,j+1}&\cdots&ka_{i+1,n}\\\vdots&&\vdots&\vdots&&\vdots\\ka_{n1}&\cdots&ka_{n,j-1}&ka_{n,j+1}&\cdots&ka_{nn}\end{vmatrix}=(-1)^{i+j}k^{n-1}\begin{vmatrix}a_{11}&\cdots&a_{1,j-1}&a_{1,j+1}&\cdots&a_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{i-1,1}&\cdots&a_{i-1,j-1}&a_{i-1,j+1}&\cdots&a_{i-1,n}\\a_{i+1,1}&\cdots&a_{i+1,j-1}&a_{i+1,j+1}&\cdots&a_{i+1,n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{n,j-1}&a_{n,j+1}&\cdots&a_{nn}\end{vmatrix},
> $$
> 即 $|kA|$ 中每个元素的代数余子式恰好是 $|A|$ 相应元素的代数余子式的 $k^{n-1}$ 倍，因而，按伴随矩阵的定义知 $(kA)^*$ 的元素是 $A^*$ 对应元素的 $k^{n-1}$ 倍.
>
> 【相关知识点】1. 行列式的性质：若 $A$ 是 $n$ 阶矩阵，则 $|kA|=k^n|A|$. 2. 矩阵 $A$ 可逆的充要条件是 $|A|\ne0$，且 $A^{-1}=\frac{1}{|A|}A^*$.

### 1997 年 · 数学三 · 第九题（解答，6 分）

（本题满分 6 分）设 $A$ 为 $n$ 阶非奇异矩阵，$\alpha$ 为 $n$ 维列向量，$b$ 为常数。记分块矩阵
$$
P=\begin{pmatrix}E&O\\-\alpha^{\mathrm{T}}A^{*}&|A|\end{pmatrix},\qquad Q=\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&b\end{pmatrix},
$$
其中 $A^{*}$ 是矩阵 $A$ 的伴随矩阵，$E$ 为 $n$ 阶单位矩阵。

（1）计算并化简 $PQ$；

（2）证明：矩阵 $Q$ 可逆的充分必要条件是 $\alpha^{\mathrm{T}}A^{-1}\alpha\ne b$。

> [!success]- 答案与解析
> **答案**：（1）$PQ=\begin{pmatrix}A&\alpha\\0&|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)\end{pmatrix}$；（2）证明见解析（$Q$ 可逆 $\Leftrightarrow \alpha^{\mathrm{T}}A^{-1}\alpha\ne b$）。
>
> 【解析】（1）由 $AA^{*}=A^{*}A=|A|E$ 及 $A^{*}=|A|A^{-1}$，有
> $$
> PQ=\begin{pmatrix}E&O\\-\alpha^{\mathrm{T}}A^{*}&|A|\end{pmatrix}\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&b\end{pmatrix}
> =\begin{pmatrix}A&\alpha\\-\alpha^{\mathrm{T}}A^{*}A+|A|\alpha^{\mathrm{T}}&-\alpha^{\mathrm{T}}A^{*}\alpha+b|A|\end{pmatrix}
> =\begin{pmatrix}A&\alpha\\0&|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)\end{pmatrix}.
> $$
>
> （2）用行列式拉普拉斯展开式及行列式乘法公式，有
> $$
> |P|=\begin{vmatrix}E&O\\-\alpha^{\mathrm{T}}A^{*}&|A|\end{vmatrix}=|A|,
> $$
> $$
> |P||Q|=|PQ|=\begin{vmatrix}A&\alpha\\0&|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)\end{vmatrix}=|A|^2(b-\alpha^{\mathrm{T}}A^{-1}\alpha).
> $$
> 又因 $A$ 是非奇异矩阵，所以 $|A|\ne 0$，故 $|Q|=|A|(b-\alpha^{\mathrm{T}}A^{-1}\alpha)$。
>
> 由此可知 $Q$ 可逆的充要条件是 $|Q|\ne 0$，即 $b-\alpha^{\mathrm{T}}A^{-1}\alpha\ne 0$，亦即 $\alpha^{\mathrm{T}}A^{-1}\alpha\ne b$。
>
> > 评注：本题考查分块矩阵的运算，要看清 $\alpha^{\mathrm{T}}A^{-1}\alpha$ 是 1 阶矩阵，是一个数。

### 1989 年 · 数学一 · 第八大题（证明题）（解答，8 分）

设 $\lambda$ 为 $n$ 阶可逆矩阵 $A$ 的一个特征值，证明：

（1）$\dfrac{1}{\lambda}$ 为 $A^{-1}$ 的特征值；
（2）$\dfrac{|A|}{\lambda}$ 为 $A$ 的伴随矩阵 $A^*$ 的特征值.

> [!success]- 答案与解析
> **答案**：证明见解析.
>
> （1）因为 $A$ 可逆，所以 $\lambda\ne 0$，设 $A$ 的属于特征值 $\lambda$ 的特征向量为 $\alpha$，即 $A\alpha=\lambda\alpha$，将 $A\alpha=\lambda\alpha$ 两边左乘 $A^{-1}$，得 $A^{-1}A\alpha=\lambda A^{-1}\alpha$，于是 $A^{-1}\alpha=\dfrac{1}{\lambda}\alpha$，即 $\dfrac{1}{\lambda}$ 为 $A^{-1}$ 的特征值.
>
> （2）因为 $A^*=|A|A^{-1}$，所以 $A^*\alpha=|A|A^{-1}\alpha=\dfrac{|A|}{\lambda}\alpha$，即 $\dfrac{|A|}{\lambda}$ 为 $A$ 的伴随矩阵 $A^*$ 的特征值.

### 1987 年 · 数学一 · 选择题第 4 题（选择，3 分）

设 $A$ 为 $n$ 阶矩阵，且 $|A|=a\ne 0$，$A^*$ 是 $A$ 的伴随矩阵，则 $|A^*|=$（　　）

（A）$a$　（B）$\dfrac{1}{a}$　（C）$a^{n-1}$　（D）$a^n$

> [!success]- 答案与解析
> **答案**：（C）.
>
> 由 $AA^*=|A|E$ 得出 $|A|\cdot|A^*|=||A|E|=|A|^n$，由 $|A|=a\ne 0$ 得 $|A^*|=a^{n-1}$，应选（C）.

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
