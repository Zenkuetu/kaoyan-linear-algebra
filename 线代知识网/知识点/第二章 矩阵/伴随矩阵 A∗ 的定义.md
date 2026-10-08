---
tags:
  - 基础
  - 线代
  - 考研数学
章节: "[[第二章 矩阵|第二章 矩阵]]"
层次: 基础
知识点ID: mat-adjoint
必要⇐:
  - "[[AA∗ = A∗A = ｜A｜E|AA* = A*A = ｜A｜E]]"
---

# 伴随矩阵 A* 的定义

> <span class="oneline">​</span>**一句话**：代数余子式排成矩阵再转置，记作 $A^{*}$

**考试层次**：`基础` ｜ **章节**：[[第二章 矩阵|第二章 矩阵]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

解 $AX = b$ 想把 $A$ 一步撤掉，就得先知道每个位置的代数余子式怎么摆；$2$ 阶那种 $\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ 的现成摆法倒是好用，可两个问题绕不开：右边那个 $\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ 到底从哪冒出来的？$3$ 阶还有同样的摆法吗？

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

- <span class="pit">​</span>**坑一 · 按定义硬猜**：按定义 $AB = BA = E$ 硬猜，$2$ 阶还能凑一凑，$3$ 阶是 $9$ 个未知数 $9$ 个方程，猜不出来。
- <span class="pit">​</span>**坑二 · 逐个位置去算**：逐个位置去算也吃不消，要想把 $A$ 撤掉，每个位置该摆哪个数都得自己去找 —— 那一格的数由 $A$ 中“划掉第 $j$ 行第 $i$ 列”剩下的那块决定（注意下标是反的），符号还要看 $(-1)^{i+j}$，$n$ 阶要算 $n^{2}$ 个行列式。
- <span class="pit">​</span>**坑三 · 没有统一公式**：散着写谁也记不住，更写不成一个统一公式。

## <span class="hx hx-intro">🟢</span> 三、于是引入：伴随矩阵 A* 的定义

于是引入伴随矩阵：把这些代数余子式一次全算出来、按格子摆好、再转置，打包成一个矩阵。上面那三个坑，逐个补上：

$$
A^{*} = (A_{ji}), \qquad A_{ij} = (-1)^{i+j}M_{ij}
$$

- <span class="fix">​</span>**坑一补上 · 不用再猜**：不用拿 $AB = BA = E$ 去硬凑，按上面这条式子把元素一次算好，伴随矩阵就到手了；
- <span class="fix">​</span>**坑二补上 · 位置和符号都有规矩**：其中 $M_{ij}$ 是划掉第 $i$ 行第 $j$ 列后剩下的行列式，$A_{ij}$ 是代数余子式；每个位置该放哪个、符号是正是负，都照上面这条式子走；
- <span class="fix">​</span>**坑三补上 · 统一公式到手**：$2$ 阶、$3$ 阶到 $n$ 阶不再各写各的，摆好之后逆矩阵就有了统一公式 $A^{-1} = \dfrac{1}{\lvert A \rvert}A^{*}$（$\lvert A \rvert \ne 0$），$2$ 阶口诀“主对调、副变号”就是这个公式在 $n = 2$ 时的样子。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">​</span>**定义**：$A^{*} = (A_{ji})$，也就是把每个元素的代数余子式排成矩阵后**再转置**（转置这一步最容易漏）。

**$2$ 阶口诀**：$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ 时 $A^{*} = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$（主对调、副变号）。

**$3$ 阶照定义算**：取

$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}, \qquad \lvert A \rvert = 1
$$

$$
A_{11} = \begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} = -24, \quad A_{21} = -\begin{vmatrix} 2 & 3 \\ 6 & 0 \end{vmatrix} = 18, \quad A_{31} = \begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix} = 5
$$

其余位置照算，算完记得转置，得

$$
A^{*} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}, \qquad AA^{*} = E \quad (\lvert A \rvert = 1)
$$

<span class="lab">​</span>**检查办法**：把算出来的 $A^{*}$ 与 $A$ 相乘，应该得到 $\lvert A \rvert E$，这是验算伴随矩阵最快的手段。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 已知 $A$ 求 $A^{*}$：$2$ 阶直接套口诀，$3$ 阶按定义逐个算代数余子式，最后别忘了转置
2. 已知 $A$ 与 $\lvert A \rvert$ 求 $A^{*}$（用 $A^{*} = \lvert A \rvert A^{-1}$），或者反过来由 $A^{*}$ 求 $A$（用 $A = \lvert A \rvert (A^{*})^{-1}$）
3. 变形计算：$(A^{\mathrm{T}})^{*}$、$(kA)^{*}$、$(A^{*})^{\mathrm{T}}$ 这一类，例如 $(kA)^{*} = k^{n-1}A^{*}$、$(A^{*})^{\mathrm{T}} = (A^{\mathrm{T}})^{*}$

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 忘记转置，把 A* 直接排成 (Aᵢⱼ)

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 算：$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ 的伴随矩阵是多少？（用主对调、副变号，答案 $\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$）
- [ ] 说：$3$ 阶矩阵的 $\lvert A^{*} \rvert$ 与 $\lvert A \rvert$ 是什么关系？（答案：$\lvert A^{*} \rvert = \lvert A \rvert^{2} = \lvert A \rvert^{n-1}$）
- [ ] 验：$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ 时 $AA^{*} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix} = \lvert A \rvert E$ 成立吗？

> [!quote]- 🕸️ 八、关系网（点开查看 1 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟪 必要不充分（⇐） | [[AA∗ = A∗A = ｜A｜E|AA* = A*A = ｜A｜E]] | 先有 A* 才有该恒等式 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟪 必要 ⇒ [[AA∗ = A∗A = ｜A｜E|AA* = A*A = ｜A｜E]]——先有 A* 才有该恒等式

## <span class="hx hx-exam">📝</span> 九、真题（1987–2026）

### 1987 年 · 数学一 · 选择题第 4 题（选择，3 分）

- [ ] 选择题第 4 题

  设 $A$ 为 $n$ 阶矩阵，且 $|A|=a\ne 0$，$A^*$ 是 $A$ 的伴随矩阵，则 $|A^*|=$（　　）

  （A）$a$　（B）$\dfrac{1}{a}$　（C）$a^{n-1}$　（D）$a^n$

  > [!success]- 答案与解析
  > **答案**：（C）.
  >
  > 由 $AA^*=|A|E$ 得出 $|A|\cdot|A^*|=||A|E|=|A|^n$，由 $|A|=a\ne 0$ 得 $|A^*|=a^{n-1}$，应选（C）.

### 1988 年 · 数学三 · 第九题（解答，6 分）

- [ ] 第九题

  设 $A$ 是三阶方阵，$A^*$ 是 $A$ 的伴随矩阵，$A$ 的行列式 $|A|=\dfrac{1}{2}$. 求行列式 $|(3A)^{-1}-2A^*|$ 的值.

  > [!success]- 答案与解析
  > **答案**：$-\dfrac{16}{27}$.
  >
  > 解：因 $(3A)^{-1}=\dfrac{1}{3}A^{-1}$，
  > 故 $A^*=|A|\cdot A^{-1}=\dfrac{1}{2}A^{-1}$，
  > 所以
  > $$
  > |(3A)^{-1}-2A^*|=\left|\dfrac{1}{3}A^{-1}-A^{-1}\right|=\left|-\dfrac{2}{3}A^{-1}\right|=\left(-\dfrac{2}{3}\right)^3|A^{-1}|=-\dfrac{16}{27}.
  > $$

### 1989 年 · 数学一 · 第八大题（证明题）（解答，8 分）

- [ ] 第八大题（证明题）

  设 $\lambda$ 为 $n$ 阶可逆矩阵 $A$ 的一个特征值，证明：

  （1）$\dfrac{1}{\lambda}$ 为 $A^{-1}$ 的特征值；
  （2）$\dfrac{|A|}{\lambda}$ 为 $A$ 的伴随矩阵 $A^*$ 的特征值.

  > [!success]- 答案与解析
  > **答案**：证明见解析.
  >
  > （1）因为 $A$ 可逆，所以 $\lambda\ne 0$，设 $A$ 的属于特征值 $\lambda$ 的特征向量为 $\alpha$，即 $A\alpha=\lambda\alpha$，将 $A\alpha=\lambda\alpha$ 两边左乘 $A^{-1}$，得 $A^{-1}A\alpha=\lambda A^{-1}\alpha$，于是 $A^{-1}\alpha=\dfrac{1}{\lambda}\alpha$，即 $\dfrac{1}{\lambda}$ 为 $A^{-1}$ 的特征值.
  >
  > （2）因为 $A^*=|A|A^{-1}$，所以 $A^*\alpha=|A|A^{-1}\alpha=\dfrac{|A|}{\lambda}\alpha$，即 $\dfrac{|A|}{\lambda}$ 为 $A$ 的伴随矩阵 $A^*$ 的特征值.

### 1991 年 · 数学三 · 选择题第 3 题（选择，3 分）

- [ ] 选择题第 3 题

  设 $A$ 为 $n$ 阶可逆矩阵，$\lambda$ 是 $A$ 的一个特征值，则 $A$ 的伴随矩阵 $A^*$ 的特征值之一是（　　）

  （A）$\lambda^{-1}|A|^n$.　（B）$\lambda^{-1}|A|$.　（C）$\lambda|A|$.　（D）$\lambda|A|^n$.

  > [!success]- 答案与解析
  > **答案**：（B）．
  >
  > 【解析】由 $\lambda$ 为 $A$ 的特征值可知，存在非零向量 $X$，使得 $AX=\lambda X$.
  > 两端同时乘以 $A^*$，有 $A^*(\lambda X)=A^*AX$，由公式 $A^*A=|A|E$ 得到 $\lambda A^*X=|A|X$. 于是
  > $$
  > A^*X=\lambda^{-1}|A|X.
  > $$
  > 按特征值定义知 $\lambda^{-1}|A|$ 是伴随矩阵 $A^*$ 的特征值. 故应选（B）．

### 1993 年 · 数学三 · 填空题第 4 题（填空，3 分）

- [ ] 填空题第 4 题

  设 4 阶方阵 $A$ 的秩为 2，则其伴随矩阵 $A^*$ 的秩为______.

  > [!success]- 答案与解析
  > **答案**：$0$.
  >
  > 【解析】本题考查伴随矩阵的定义及矩阵的秩的定义.
  > 由于 $r(A)=2$，说明 $A$ 中 3 阶子式全为 0，于是 $|A|$ 的代数余子式 $A_{ij}\equiv 0$，故 $A^*=O$.
  > 所以秩 $r(A^*)=0$.
  > 若熟悉伴随矩阵 $A^*$ 秩的关系式
  > $$
  > r(A^*)=\begin{cases}n,&r(A)=n,\\1,&r(A)=n-1,\\0,&r(A)<n-1,\end{cases}
  > $$
  > 易知 $r(A^*)=0$.
  > 按定义
  > $$
  > A^*=\begin{pmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{pmatrix},
  > $$
  > 伴随矩阵是 $n$ 阶矩阵，它的元素是行列式 $|A|$ 的代数余子式，是 $n-1$ 阶子式.

### 1994 年 · 数学一 · 第九大题（证明题）（解答，6 分）

- [ ] 第九大题（证明题）

  设 $A$ 为 $n$ 阶非零方阵，$A^*$ 为 $A$ 的伴随矩阵，$A^{\mathrm{T}}$ 是 $A$ 的转置矩阵，当 $A^*=A^{\mathrm{T}}$ 时，证明：$|A|\ne 0$.

  > [!success]- 答案与解析
  > **答案**：证明见解析.
  >
  > 由 $A^*=A^{\mathrm{T}}$ 得 $a_{ij}=A_{ij}\ (i,j=1,2,\cdots,n)$. 因为 $A$ 为非零矩阵，所以矩阵 $A$ 中有非零元素，不妨设 $a_{1j}\ne 0$，故
  > $$
  > |A|=a_{11}A_{11}+a_{12}A_{12}+\cdots+a_{1n}A_{1n}=a_{11}^2+a_{12}^2+\cdots+a_{1n}^2>0.
  > $$

### 1995 年 · 数学三 · 填空题第 4 题（填空，3 分）

- [ ] 填空题第 4 题

  设
  $$
  A=\begin{pmatrix}1&0&0\\2&2&0\\3&4&5\end{pmatrix},
  $$
  $A^*$ 是 $A$ 的伴随矩阵，则 $(A^*)^{-1}=$______.

  > [!success]- 答案与解析
  > **答案**：
  > $$
  > (A^*)^{-1}=\frac{A}{|A|}=\frac{1}{10}\begin{pmatrix}1&0&0\\2&2&0\\3&4&5\end{pmatrix}.
  > $$
  >
  > 【解析】由 $AA^*=|A|E$，有 $\dfrac{A}{|A|}A^*=E$，故 $(A^*)^{-1}=\dfrac{A}{|A|}$.
  > 而
  > $$
  > |A|=\begin{vmatrix}1&0&0\\2&2&0\\3&4&5\end{vmatrix}=10,
  > $$
  > 所以
  > $$
  > (A^*)^{-1}=\frac{A}{|A|}=\frac{1}{10}\begin{pmatrix}1&0&0\\2&2&0\\3&4&5\end{pmatrix}.
  > $$

### 1996 年 · 数学三 · 选择题第 3 题（选择，3 分）

- [ ] 选择题第 3 题

  设 $n$ 阶矩阵 $A$ 非奇异（$n\ge 2$），$A^*$ 是矩阵 $A$ 的伴随矩阵，则（　　）
  （A）$(A^*)^*=|A|^{n-1}A$
  （B）$(A^*)^*=|A|^{n+1}A$
  （C）$(A^*)^*=|A|^{n-2}A$
  （D）$(A^*)^*=|A|^{n+2}A$

  > [!success]- 答案与解析
  > **答案**：（C）.
  >
  > 【解析】伴随矩阵的基本关系式为 $AA^*=A^*A=|A|E$，
  > 现将 $A^*$ 视为关系式中的矩阵 $A$，则有 $A^*(A^*)^*=|A^*|E$.
  > 方法一：由 $|A^*|=|A|^{n-1}$ 及 $(A^*)^{-1}=\dfrac{A}{|A|}$，可得
  > $$
  > (A^*)^*=|A^*|(A^*)^{-1}=|A|^{n-1}\frac{A}{|A|}=|A|^{n-2}A.
  > $$
  > 故应选（C）.
  > 方法二：由 $A^*(A^*)^*=|A^*|E$，左乘 $A$ 得
  > $$
  > (AA^*)(A^*)^*=|A|^{n-1}A,\ \text{即}\ (|A|E)(A^*)^*=|A|^{n-1}A.
  > $$
  > 故应选（C）.

### 1998 年 · 数学二 · 选择题第 5 题（选择，3 分）

- [ ] 选择题第 5 题

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

### 2005 年 · 数学一 · 第 12 题（选择，4 分）

- [ ] 第 12 题

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

### 2009 年 · 数学三 · 第 5 题（选择，4 分）

- [ ] 第 5 题

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

- [ ] 第 6 题

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

### 2013 年 · 数学一 · 第 13 题（填空，5 分）

- [ ] 第 13 题

  设 $A=(a_{ij})$ 是 3 阶非零矩阵，$|A|$ 为 $A$ 的行列式，$A_{ij}$ 为 $a_{ij}$ 的代数余子式．若 $a_{ij}+A_{ij}=0\ (i,j=1,2,3)$，则 $|A|=\underline{\qquad}$．

  > [!success]- 答案与解析
  > **答案**：$-1$
  >
  > 由 $A_{ij}=-a_{ij}$，得 $A^{\mathrm{T}}=-A^*$，两边取行列式，得 $|A|=(-1)^3|A^*|=-|A|^2$，于是 $|A|=0$ 或 $|A|=-1$．
  >
  > 因为 $A$ 为非零矩阵，所以 $a_{ij}\ (i,j=1,2,3)$ 不全为零，不妨设 $a_{11}\ne 0$，
  >
  > 由
  >
  > $$
  > |A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=-(a_{11}^2+a_{12}^2+a_{13}^2)<0,
  > $$
  >
  > 得 $|A|=-1$．

### 2013 年 · 数学三 · 第 13 题（填空，4 分）

- [ ] 第 13 题

  设 $A=(a_{ij})$ 是三阶非零矩阵，$|A|$ 为 $A$ 的行列式，$A_{ij}$ 为 $a_{ij}$ 的代数余子式。若 $a_{ij}+A_{ij}=0\ (i,j=1,2,3)$，则 $|A|=\underline{\qquad}$。

  > [!success]- 答案与解析
  > **答案**：$-1$
  >
  > 由 $a_{ij}+A_{ij}=0$ 可知 $A^{\mathrm{T}}=-A^{*}$。
  > $$
  > |A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=a_{11}A_{11}+a_{21}A_{21}+a_{31}A_{31}
  > =-\sum_{j=1}^{3}a_{1j}^2=-\sum_{i=1}^{3}\sum_{j=1}^{3}a_{ij}^2<0,
  > $$
  > 从而有 $|A|=|A^{\mathrm{T}}|=|-A^{*}|=-|A^{*}|=-|A|^2$，故 $|A|=-1$。

### 2023 年 · 数学三 · 第 5 题（选择，5 分）

- [ ] 第 5 题

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

- [ ] 第 8 题

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

### 2026 年 · 数学二 · 第 8 题（选择，5 分）

- [ ] 第 8 题

  单位矩阵经若干次互换两行得到的矩阵为置换矩阵. 设 $A$ 为 $n$ 阶置换矩阵，$A^*$ 为 $A$ 的伴随矩阵，则

  （A）$A^*$ 为置换矩阵　　（B）$A^{-1}$ 为置换矩阵

  （C）$A^{-1}=A^*$　　（D）$A^{-1}=-A^*$

  > [!success]- 答案与解析
  > **答案**：（B）
  >
  > 【解析】由题设知 $A=P_1\cdot P_2\cdots P_s$，其中 $P_1,P_2,\cdots,P_s$ 均为初等矩阵，则 $A^{-1}=(P_1\cdot P_2\cdots P_s)^{-1}=P_s^{-1}\cdots P_2^{-1}P_1^{-1}=P_s\cdots P_2\cdot P_1$ 也为置换矩阵，故选（B）.

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第二章 矩阵|第二章 矩阵]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
