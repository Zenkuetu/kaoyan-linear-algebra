---
tags:
  - 数一
  - 线代
  - 考研数学
章节: "[[第四章 线性方程组|第四章 线性方程组]]"
层次: 数一
知识点ID: eq-AX-O-AB-O
充要⇔:
  - "[[齐次方程组 Ax = 0|齐次方程组 Ax = 0]]"
---

# 矩阵方程 AX = O 与 AB = O

> <span class="oneline">​</span>**一句话**：AB = O 就是说 B 的每一列都是 Ax = 0 的解

**考试层次**：`数一` ｜ **章节**：[[第四章 线性方程组|第四章 线性方程组]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

**矩阵方程 $AX = O$ 与 $AB = O$ 要解决的问题是：一个"乘积为零矩阵"的等式，能反过来告诉我们什么关于秩的信息。**
具体一组：$A$ 是 $2 \times 4$ 矩阵、$B$ 是 $4 \times 2$ 矩阵，

$$
A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 \\ -1 & 0 \\ 1 & 0 \\ 0 & 0 \end{pmatrix}
$$

乘一下：$AB$ 的第 $1$ 行第 $1$ 列是 $1 \times 1 + 1 \times (-1) + 0 \times 1 + 0 \times 0 = 0$，第 $1$ 行第 $2$ 列也是 $0$，第 $2$ 行的两列分别是 $0 - 1 + 1 + 0 = 0$ 和 $0$，所以 $AB = O$。
最容易想到的处理是"乘出来全是零，那 $A$、$B$ 里总有一个是零矩阵吧"—— 可这两个矩阵谁都不是零矩阵（$A$ 的两行不成比例，$B$ 的第 $1$ 列也不是全零）。所以"乘积为零"不是废话，它一定逼出了别的东西；问题只是怎么把这条信息挖出来。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

"当成零矩阵"会得出全错的结论，三个坑如下：

- <span class="pit">​</span>**坑一 · 硬把矩阵乘开再算秩**：阶数一高（或者元素带参数）就乘不动；就算乘完确认了全是 $0$，也看不出这条等式对秩有什么限制；
- **坑二 · 以为乘积是零矩阵就意味着 $A$、$B$ 里必有一个是零矩阵**：上面那组两个都不是零矩阵，乘积却是 $O$（第二章已经知道 $AB = O$ 推不出 $A = O$ 或 $B = O$）；照这个思路走，就会把题目里的 $A$、$B$ 当成零矩阵，结论全错；
- <span class="pit">​</span>**坑三 · 用错那个 $n$**：写秩的不等式时把 $n$ 当成 $A$ 的行数（$2$）或 $B$ 的列数（$2$），于是写出 $r(A) + r(B) \le 2$；可上面 $r(A) = 2$、$r(B) = 1$，加起来是 $3$，一句话就把这个式子推翻 —— 正确的 $n$ 是 $A$ 的列数，也正是 $B$ 的行数（$4$）。

## <span class="hx hx-intro">🟢</span> 三、于是引入：矩阵方程 AX = O 与 AB = O

于是引入**把矩阵等式翻译成方程组**。$AB$ 的第 $j$ 列等于"$A$ 乘 $B$ 的第 $j$ 列"，所以 $AB = O$ 等价于说：**$B$ 的每一列都是齐次方程组 $Ax = 0$ 的解**。
既然 $B$ 的列全都落在 $Ax = 0$ 的解集里，而解集的独立方向只有 $n - r(A)$ 个（$n$ 是 $A$ 的列数），那 $B$ 的秩自然也超不过它：

$$
r(B) \leq n - r(A) \quad \Longrightarrow \quad r(A) + r(B) \leq n
$$

这里的 $n$ 是 $A$ 的列数，也正是 $B$ 的行数 —— 不满足这个"内标相同"，$AB$ 根本乘不起来。

上面那三个坑，逐个补上：

- <span class="fix">​</span>**坑一补上 · 不用把矩阵乘开**：只要认准"$B$ 的列都是 $Ax = 0$ 的解"，秩的大小关系立刻就有，元素具体是什么根本不重要；
- <span class="fix">​</span>**坑二补上 · 不是零矩阵也能乘出零矩阵**：上面那组 $r(A) = 2$、$r(B) = 1$，两个矩阵都不为零矩阵，却满足 $AB = O$ —— 真正被这条等式约束的是秩，$2 + 1 = 3 \leq 4 = n$；
- <span class="fix">​</span>**坑三补上 · 记牢 $n$ 的身份**：$n$ 是 $A$ 的列数（中间那个"内标"，等于 $B$ 的行数）；把 $n$ 认错，算出来的结论立刻与例子矛盾。

> 顺带提一句：到附录里会说"$B$ 的列向量都落在 $A$ 的零空间里"，名字更高级，内容就是"$B$ 的列都是 $Ax = 0$ 的解"，现在不懂不影响做题。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">​</span>**定义**：形如 $AX = O$ 的等式叫矩阵方程，其中 $X$ 是未知矩阵；$AB = O$ 是它的一个特例（$X$ 取成 $B$）。
<span class="key">​</span>**核心结论**：设 $A$ 是 $m \times n$ 矩阵、$B$ 是 $n \times p$ 矩阵，则 $AB = O$ $\iff$ $B$ 的每一列都是 $Ax = 0$ 的解；由此得到 $r(A) + r(B) \leq n$。
<span class="lab">​</span>**推理链**：$B$ 的列都是 $Ax = 0$ 的解 $\Rightarrow$ $B$ 的列向量组整个落在解集里 $\Rightarrow$ $r(B) \le$ 解集的独立方向个数 $= n - r(A)$。
<span class="lab">​</span>**算例**：验证 $AB = O$，并核对秩的不等式。

$$
A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 \\ -1 & 0 \\ 1 & 0 \\ 0 & 0 \end{pmatrix}
$$

$B$ 的第 $1$ 列是 $(1,-1,1,0)^{\mathrm{T}}$，与 $A$ 的两行分别配对：$1 - 1 + 0 + 0 = 0$、$0 - 1 + 1 + 0 = 0$；$B$ 的第 $2$ 列是全零列，乘出来当然是 $0$。所以 $AB = O$。
<span class="lab">​</span>**秩的核对**：$A$ 的两行不成比例，$r(A) = 2$；$B$ 的第 $2$ 列是全零列，两列不成比例（第 $1$ 列非零），$r(B) = 1$；$n = 4$，于是 $2 + 1 = 3 \leq 4$，不等式成立。
<span class="lab">​</span>**等号能取到**：解 $Ax = 0$，对 $A$ 作 $r_1 - r_2$ 得行最简形 $\begin{pmatrix} 1 & 0 & -1 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}$，基础解系 $\xi_1 = (1,-1,1,0)^{\mathrm{T}}$、$\xi_2 = (0,0,0,1)^{\mathrm{T}}$。取 $B_0 = (\xi_1, \xi_2)$，则 $AB_0 = O$ 且 $r(B_0) = 2 = n - r(A)$，于是 $r(A) + r(B_0) = 4 = n$，等号真的能取到。
<span class="lab">​</span>**推论**：$A$ 为 $n$ 阶方阵时 $AB = O \Rightarrow r(A) + r(B) \le n$；特别地若 $B \neq O$（此时 $r(B) \ge 1$），则 $r(A) \le n - 1$，也就是 $A$ 不可逆。
<span class="pit">​</span>**易错提醒**：$n$ 是"$A$ 的列数"，不要顺手写成 $A$ 的行数或 $B$ 的列数；另外 $A$ 与 $B$ 的位置不能对调 —— 由 $AB = O$ 得到的是"$B$ 的列是 $Ax = 0$ 的解"，把等式转置成 $B^{\mathrm{T}}A^{\mathrm{T}} = O$ 才对得上"$A$ 的行是 $B^{\mathrm{T}}x = 0$ 的解"。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：给 $AB = O$ 问 $r(A) + r(B)$ 与 $n$ 的关系，或者问"$B$ 的列向量满足什么条件"。
2. 填空题：由 $AB = O$ 且已知 $r(A)$ 求 $r(B)$ 的最大值（$r(B) \le n - r(A)$），或者由"$A$ 不可逆"反推齐次方程组有非零解。
3. 解答题：证明题（数一为主，数二不要求这类"用解方程组证明秩不等式"的题型）—— 先说明 $B$ 的列是 $Ax = 0$ 的解，再用解集的独立方向个数卡出 $r(A) + r(B) \le n$。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 用错 n：应为 A 的列数、也就是 B 的行数

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 判：$A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}$、$B = \begin{pmatrix} 1 & 0 \\ -1 & 0 \\ 1 & 0 \\ 0 & 0 \end{pmatrix}$，$AB$ 等于什么？$r(A) + r(B)$ 与 $4$ 是什么关系？
- [ ] 判：$AB = O$ 能不能推出 $A = O$ 或 $B = O$？
- [ ] 判：$A$ 是四阶方阵、$B$ 是四阶非零矩阵且 $AB = O$，$A$ 可逆吗？

> [!quote]- 🕸️ 八、关系网（点开查看 3 条关系：1 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟥 充要（⇔） | [[齐次方程组 Ax = 0]] | AB=O 即 B 的列都是齐次解 |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[秩的不等式（乘法与加法）]] | 乘法秩不等式 r(AB) ≥ r(A)+r(B)−n 中令 r(AB)=0，即得 AB=O 时的 r(A)+r(B) ≤ n（特例，反过来不成立） |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[用初等变换求逆与解矩阵方程 AX = B]] | 把 B 换成 O 即得齐次矩阵方程 AX = O，解法与 AX = B 完全同形 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟥 充要 ⇒ [[齐次方程组 Ax = 0]]——AB=O 即 B 的列都是齐次解
> - [[秩的不等式（乘法与加法）]] ⇒ 🟧 充分 ⇒ 本点——乘法秩不等式 r(AB) ≥ r(A)+r(B)−n 中令 r(AB)=0，即得 AB=O 时的 r(A)+r(B) ≤ n（特例，反过来不成立）
> - [[用初等变换求逆与解矩阵方程 AX = B]] ⇒ 🟧 充分 ⇒ 本点——把 B 换成 O 即得齐次矩阵方程 AX = O，解法与 AX = B 完全同形

## <span class="hx hx-exam">📝</span> 九、真题（1992–2022）

### 1992 年 · 数学三 · 第十题（解答，6 分）

- [ ] 第十题

  已知三阶矩阵 $B\ne O$，且 $B$ 的每一个列向量都是以下方程组的解：
  $$
  \begin{cases}x_1+2x_2-2x_3=0,\\2x_1-x_2+\lambda x_3=0,\\3x_1+x_2-x_3=0.\end{cases}
  $$
  （1）求 $\lambda$ 的值；
  （2）证明 $|B|=0$.

  > [!success]- 答案与解析
  > **答案**：（1）$\lambda=1$；（2）证明见解析.
  >
  > 【解析】对于条件 $AB=0$ 应当有两个思路：一是 $B$ 的列向量是齐次方程组 $Ax=0$ 的解；另一个是秩的信息即 $r(A)+r(B)\le n$. 要有这两种思考问题的意识.
  > （1）令
  > $$
  > A=\begin{pmatrix}1&2&-2\\2&-1&\lambda\\3&1&-1\end{pmatrix},
  > $$
  > 对 3 阶矩阵 $A$，由 $AB=0$，$B\ne 0$ 知必有 $|A|=0$，否则 $A$ 可逆，从而 $B=A^{-1}(AB)=A^{-1}0=0$，这与 $B\ne 0$ 矛盾. 故
  > $$
  > |A|=\begin{vmatrix}1&2&-2\\2&-1&\lambda\\3&1&-1\end{vmatrix}=0,
  > $$
  > 用行列式的等价变换，将第三列加到第二列上，再按第二列展开，有
  > $$
  > |A|=\begin{vmatrix}1&0&-2\\2&\lambda-1&\lambda\\3&0&-1\end{vmatrix}=5(\lambda-1)=0.
  > $$
  > 解出 $\lambda=1$.
  > （2）反证法：对于 $AB=0$，若 $|B|\ne 0$，则 $B$ 可逆，那么 $A=(AB)B^{-1}=0B^{-1}=0$. 与已知条件 $A\ne 0$ 矛盾. 故假设不成立，$|B|=0$.
  > 【相关知识点】对矩阵 $B$ 按列分块，记 $B=(\beta_1,\beta_2,\beta_3)$，那么
  > $$
  > AB=A(\beta_1,\beta_2,\beta_3)=(A\beta_1,A\beta_2,A\beta_3)=(0,0,0).
  > $$
  > 因而 $A\beta_i=0\ (i=1,2,3)$，即 $\beta_i$ 是 $Ax=0$ 的解.

### 1993 年 · 数学一 · 选择题第 5 题（选择，3 分）

- [ ] 选择题第 5 题

  已知
  $$
  Q=\begin{pmatrix}1&2&3\\2&4&t\\3&6&9\end{pmatrix},
  $$
  $P$ 为 3 阶非零矩阵，且满足 $PQ=O$，则（　　）.

  （A）$t=6$ 时，$P$ 的秩必为 1
  （B）$t=6$ 时，$P$ 的秩必为 2
  （C）$t\ne 6$ 时，$P$ 的秩必为 1
  （D）$t\ne 6$ 时，$P$ 的秩必为 2

  > [!success]- 答案与解析
  > **答案**：（C）.
  >
  > 由 $PQ=O$ 得 $r(P)+r(Q)\le 3$，当 $t\ne 6$ 时 $r(Q)=2$，则 $r(P)\le 1$，再由 $P$ 为非零矩阵得 $r(P)\ge 1$，故 $r(P)=1$，应选（C）.

### 1998 年 · 数学三 · 选择题第 3 题（选择，3 分）

- [ ] 选择题第 3 题

  齐次线性方程组
  $$
  \begin{cases}\lambda x_1+x_2+\lambda^2x_3=0,\\x_1+\lambda x_2+x_3=0,\\x_1+x_2+\lambda x_3=0\end{cases}
  $$
  的系数矩阵记为 $A$。若存在 $3$ 阶矩阵 $B\ne O$，使得 $AB=O$，则（　　）
  （A）$\lambda=-2$ 且 $|B|=0$　　（B）$\lambda=-2$ 且 $|B|\ne 0$
  （C）$\lambda=1$ 且 $|B|=0$　　（D）$\lambda=1$ 且 $|B|\ne 0$

  > [!success]- 答案与解析
  > **答案**：（C）
  >
  > 【解析】方法 1：由 $AB=O$ 知 $r(A)+r(B)\le 3$，又 $A\ne O,B\ne O$，于是 $1\le r(A)<3$，$1\le r(B)<3$，故 $|A|=0,|B|=0$，即
  > $$
  > |A|=\begin{vmatrix}\lambda&1&\lambda^2\\1&\lambda&1\\1&1&\lambda\end{vmatrix}=\begin{vmatrix}0&1-\lambda&0\\0&\lambda-1&1-\lambda\\1&1&\lambda\end{vmatrix}=\begin{vmatrix}1-\lambda&0\\\lambda-1&1-\lambda\end{vmatrix}=(1-\lambda)^2=0,
  > $$
  > 得 $\lambda=1$。应选（C）。
  >
  > 方法 2：由 $AB=O$ 知 $r(A)+r(B)\le 3$，又 $A\ne O,B\ne O$，于是 $1\le r(A)<3$，$1\le r(B)<3$，故 $|B|=0$。
  >
  > 显然，$\lambda=1$ 时 $A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$，有 $1\le r(A)<3$，故应选（C）。
  >
  > 作为选择题，只需在 $\lambda=-2$ 与 $\lambda=1$ 中选择一个，因而可以用特殊值代入法。
  >
  > 评注：对于条件 $AB=O$ 应当有两个思路：一是 $B$ 的列向量是齐次方程组 $Ax=0$ 的解；二是秩的信息，即 $r(A)+r(B)\le n$，要有这两种思考问题的意识。

### 1998 年 · 数学一 · 解答题第 12 题（解答，5 分）

- [ ] 解答题第 12 题

  （本题满分 5 分）已知线性方程组
  $$
  (\text{I})\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1,2n}x_{2n}=0,\\a_{21}x_1+a_{22}x_2+\cdots+a_{2,2n}x_{2n}=0,\\\cdots\cdots\\a_{n1}x_1+a_{n2}x_2+\cdots+a_{n,2n}x_{2n}=0\end{cases}
  $$
  的一个基础解系为 $(b_{11},b_{12},\cdots,b_{1,2n})^{\mathrm{T}},(b_{21},b_{22},\cdots,b_{2,2n})^{\mathrm{T}},\cdots,(b_{n1},b_{n2},\cdots,b_{n,2n})^{\mathrm{T}}$．试写出线性方程组
  $$
  (\text{II})\begin{cases}b_{11}y_1+b_{12}y_2+\cdots+b_{1,2n}y_{2n}=0,\\b_{21}y_1+b_{22}y_2+\cdots+b_{2,2n}y_{2n}=0,\\\cdots\cdots\\b_{n1}y_1+b_{n2}y_2+\cdots+b_{n,2n}y_{2n}=0\end{cases}
  $$
  的通解，并说明理由．

  > [!success]- 答案与解析
  > **答案**：通解为 $Y=C_1\begin{pmatrix}a_{11}\\a_{12}\\\vdots\\a_{1,2n}\end{pmatrix}+C_2\begin{pmatrix}a_{21}\\a_{22}\\\vdots\\a_{2,2n}\end{pmatrix}+\cdots+C_n\begin{pmatrix}a_{n1}\\a_{n2}\\\vdots\\a_{n,2n}\end{pmatrix}$（$C_1,C_2,\cdots,C_n$ 为任意常数）．
  >
  > 十二、【解】 令
  > $$
  > A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1,2n}\\a_{21}&a_{22}&\cdots&a_{2,2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{n,2n}\end{pmatrix},\quad X=\begin{pmatrix}x_1\\x_2\\\vdots\\x_{2n}\end{pmatrix},\quad B=\begin{pmatrix}b_{11}&b_{21}&\cdots&b_{n1}\\b_{12}&b_{22}&\cdots&b_{n2}\\\vdots&\vdots&&\vdots\\b_{1,2n}&b_{2,2n}&\cdots&b_{n,2n}\end{pmatrix},
  > $$
  > 因为 $(b_{11},b_{12},\cdots,b_{1,2n})^{\mathrm{T}},(b_{21},b_{22},\cdots,b_{2,2n})^{\mathrm{T}},\cdots,(b_{n1},b_{n2},\cdots,b_{n,2n})^{\mathrm{T}}$ 为方程组 $AX=0$ 的基础解系，所以 $r(A)=2n-n=n$ 且 $AB=O$．
  >
  > 又因为 $(b_{11},b_{12},\cdots,b_{1,2n})^{\mathrm{T}},(b_{21},b_{22},\cdots,b_{2,2n})^{\mathrm{T}},\cdots,(b_{n1},b_{n2},\cdots,b_{n,2n})^{\mathrm{T}}$ 线性无关，所以 $r(B)=n$．
  >
  > 令 $Y=(y_1,y_2,\cdots,y_{2n})^{\mathrm{T}}$，方程组（Ⅱ）表示为 $B^{\mathrm{T}}Y=0$，
  >
  > 由 $AB=O$ 得 $B^{\mathrm{T}}A^{\mathrm{T}}=O$，即 $(a_{11},a_{12},\cdots,a_{1,2n})^{\mathrm{T}},(a_{21},a_{22},\cdots,a_{2,2n})^{\mathrm{T}},\cdots,(a_{n1},a_{n2},\cdots,a_{n,2n})^{\mathrm{T}}$ 为方程组 $B^{\mathrm{T}}Y=0$ 的解．
  >
  > 因为 $r(A)=n$，所以 $(a_{11},a_{12},\cdots,a_{1,2n})^{\mathrm{T}},(a_{21},a_{22},\cdots,a_{2,2n})^{\mathrm{T}},\cdots,(a_{n1},a_{n2},\cdots,a_{n,2n})^{\mathrm{T}}$ 线性无关，又因为 $r(B^{\mathrm{T}})=n$，所以 $(a_{11},a_{12},\cdots,a_{1,2n})^{\mathrm{T}},(a_{21},a_{22},\cdots,a_{2,2n})^{\mathrm{T}},\cdots,(a_{n1},a_{n2},\cdots,a_{n,2n})^{\mathrm{T}}$ 为方程组（Ⅱ）的一个基础解系．

### 1998 年 · 数学一 · 证明题第 11 题（解答，4 分）

- [ ] 证明题第 11 题

  （本题满分 4 分）设 $A$ 是 $n$ 阶矩阵，若存在正整数 $k$，使线性方程组 $A^kx=0$ 有解向量 $\alpha$，且 $A^{k-1}\alpha\ne 0$．证明：向量组 $\alpha,A\alpha,\cdots,A^{k-1}\alpha$ 是线性无关的．

  > [!success]- 答案与解析
  > **答案**：证明见解析．
  >
  > 十一、【证明】 显然 $A^k\alpha=0$，令 $l_0\alpha+l_1A\alpha+\cdots+l_{k-1}A^{k-1}\alpha=0$，
  >
  > 将 $l_0\alpha+l_1A\alpha+\cdots+l_{k-1}A^{k-1}\alpha=0$ 两边左乘 $A^{k-1}$ 得 $l_0A^{k-1}\alpha=0$，
  >
  > 因为 $A^{k-1}\alpha\ne 0$，所以 $l_0=0$；
  >
  > 将 $l_1A\alpha+\cdots+l_{k-1}A^{k-1}\alpha=0$ 两边左乘 $A^{k-2}$ 得 $l_1A^{k-1}\alpha=0$，从而 $l_1=0$．
  >
  > 依次类推，可得 $l_2=\cdots=l_{k-1}=0$，故 $\alpha,A\alpha,\cdots,A^{k-1}\alpha$ 线性无关．

### 2004 年 · 数学二 · 第 14 题（选择，4 分）

- [ ] 第 14 题

  设 $A,B$ 为满足 $AB=O$ 的任意两个非零矩阵，则必有（　）

  （A）$A$ 的列向量组线性相关，$B$ 的行向量组线性相关.
  （B）$A$ 的列向量组线性相关，$B$ 的列向量组线性相关.
  （C）$A$ 的行向量组线性相关，$B$ 的行向量组线性相关.
  （D）$A$ 的行向量组线性相关，$B$ 的列向量组线性相关.

  > [!success]- 答案与解析
  > **答案**：（A）
  >
  > 方法1：由矩阵秩的重要公式：若 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times p$ 矩阵，如果 $AB=0$，则 $r(A)+r(B)\le n$
  >
  > 设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times s$ 矩阵，由 $AB=0$ 知，$r(A)+r(B)\le n$，其中 $n$ 是矩阵 $A$ 的列数，也是 $B$ 的行数
  >
  > 因 $A$ 为非零矩阵，故 $r(A)\ge1$，因 $r(A)+r(B)\le n$，从而 $r(B)\le n-1<n$，由向量组线性相关的充分必要条件向量组的秩小于向量的个数，知 $B$ 的行向量组线性相关.
  >
  > 因 $B$ 为非零矩阵，故 $r(B)\ge1$，因 $r(A)+r(B)\le n$，从而 $r(A)\le n-1<n$，由向量组线性相关的充分必要条件向量组的秩小于向量的个数，知 $A$ 的列向量组线性相关. 故应选（A）.
  >
  > 方法2：设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times s$ 矩阵，将 $B$ 按列分块，由 $AB=0$ 得，
  > $$
  > AB=A[\beta_1,\beta_2,\cdots,\beta_s]=0,\ A\beta_i=0,\ i=1,2,\cdots,s.
  > $$
  > 因 $B$ 是非零矩阵，故存在 $\beta_i\ne0$，使得 $A\beta_i=0$. 即齐次线性方程组 $Ax=0$ 有非零解. 由齐次线性方程组 $Ax=0$ 有非零解的充要条件 $r(A)<n$，知 $r(A)<n$. 所以 $A$ 的列向量组线性相关.
  >
  > 又 $(AB)^{\mathrm{T}}=B^{\mathrm{T}}A^{\mathrm{T}}=0$，将 $A^{\mathrm{T}}$ 按列分块，得
  > $$
  > B^{\mathrm{T}}A^{\mathrm{T}}=B^{\mathrm{T}}[\alpha_1^{\mathrm{T}},\alpha_2^{\mathrm{T}},\cdots,\alpha_m^{\mathrm{T}}]=0,\ B^{\mathrm{T}}\alpha_i^{\mathrm{T}}=0,\ i=1,2,\cdots,m.
  > $$
  > 因 $A$ 是非零矩阵，故存在 $\alpha_i^{\mathrm{T}}\ne0$，使得 $B^{\mathrm{T}}\alpha_i^{\mathrm{T}}=0$，即齐次线性方程组 $Bx=0$ 有非零解. 由齐次线性方程组 $Bx=0$ 有非零解的充要条件，知 $B^{\mathrm{T}}$ 的列向量组线性相关，由 $B^{\mathrm{T}}$ 是 $B$ 行列互换得到的，从而 $B$ 的行向量组线性相关，故应选（A）.
  >
  > 方法3：设 $A=(a_{ij})_{m\times n},B=(b_{ij})_{n\times s}$，将 $A$ 按列分块，记 $A=(A_1\ A_2\ \cdots\ A_n)$
  > $$
  > AB=0\Rightarrow(A_1\ A_2\ \cdots\ A_n)\begin{pmatrix}b_{11}&b_{12}&\cdots&b_{1s}\\b_{21}&b_{22}&\cdots&b_{2s}\\\cdot&\cdot&\cdots&\cdot\\b_{n1}&b_{n2}&\cdots&b_{ns}\end{pmatrix}=(b_{11}A_1+\cdots+b_{n1}A_n,\ \cdots,\ b_{1s}A_1+\cdots+b_{ns}A_n)=0\tag{1}
  > $$
  > 由于 $B\ne0$，所以至少有一个 $b_{ij}\ne0$（$1\le i\le n,1\le j\le s$）. 又由(1)知，
  > $$
  > b_{1j}A_1+b_{2j}A_2+\cdots+b_{ij}A_i+\cdots+b_{nj}A_n=0,
  > $$
  > 所以 $A_1,A_2,\cdots,A_n$ 线性相关. 即 $A$ 的列向量组线性相关.
  >
  > （向量组线性相关的定义：如果对 $m$ 个向量 $\alpha_1,\alpha_2,\cdots,\alpha_m\in R^n$，有 $m$ 个不全为零的数 $k_1,k_2,\cdots,k_m\in R$，使 $k_1\alpha_1+k_2\alpha_2+\cdots+k_m\alpha_m=0$ 成立，则称 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 线性相关.）
  >
  > 又将 $B$ 按行分块，记 $B=\begin{pmatrix}B_1\\B_2\\\vdots\\B_n\end{pmatrix}$，同样，
  > $$
  > AB=0\Rightarrow\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\cdot&\cdot&\cdots&\cdot\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}\begin{pmatrix}B_1\\B_2\\\vdots\\B_n\end{pmatrix}=\begin{pmatrix}a_{11}B_1+a_{12}B_2+\cdots+a_{1n}B_n\\a_{21}B_1+a_{22}B_2+\cdots+a_{2n}B_n\\\cdots\\a_{m1}B_1+a_{m2}B_2+\cdots+a_{mn}B_n\end{pmatrix}=0
  > $$
  > 由于 $A\ne0$，则至少存在一个 $a_{ij}\ne0$（$1\le i\le m,1\le j\le n$），使
  > $$
  > a_{i1}B_1+a_{i2}B_2+\cdots+a_{ij}B_j+\cdots+a_{in}B_n=0,
  > $$
  > 由向量组线性相关的定义知，$B_1,B_2,\cdots,B_n$ 线性相关，即 $B$ 的行向量组线性相关，故应选（A）.
  >
  > 方法4：用排除法. 取满足题设条件的 $A,B$.
  >
  > 取 $A=\begin{pmatrix}1&0&0\\1&0&0\end{pmatrix}\ne0$，$B=\begin{pmatrix}0&0\\1&0\\0&1\end{pmatrix}\ne0$，有 $AB=\begin{pmatrix}1&0&0\\1&0&0\end{pmatrix}\begin{pmatrix}0&0\\1&0\\0&1\end{pmatrix}=0$，
  >
  > $A$ 的行向量组，列向量组均线性相关，但 $B$ 的列向量组线性无关，故（B），（D）不成立.
  >
  > 又取 $A=\begin{pmatrix}0&1&0\\0&0&1\end{pmatrix}\ne0$，$B=\begin{pmatrix}1&1\\0&0\\0&0\end{pmatrix}\ne0$，有 $AB=\begin{pmatrix}0&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&1\\0&0\\0&0\end{pmatrix}=0$，
  >
  > $A$ 的行向量组线性无关，$B$ 的列向量组线性相关，故（C）不成立. 由排除法知应选（A）.

### 2005 年 · 数学一 · 第 21 题（解答，9 分）　／　数学二 · 第 23 题

- [ ] 第 21 题

  （本题满分 9 分）已知 3 阶矩阵 $A$ 的第一行是 $(a,b,c)$，$a,b,c$ 不全为零，矩阵 $B=\begin{pmatrix}1&2&3\\2&4&6\\3&6&k\end{pmatrix}$（$k$ 为常数），且 $AB=O$，求线性方程组 $Ax=0$ 的通解．

  > [!success]- 答案与解析
  > **答案**：当 $k\ne 9$ 时，通解为 $X=C_1\begin{pmatrix}1\\2\\3\end{pmatrix}+C_2\begin{pmatrix}3\\6\\k\end{pmatrix}$（$C_1,C_2$ 为任意常数）；当 $k=9$ 时，若 $r(A)=2$，通解为 $X=C\begin{pmatrix}1\\2\\3\end{pmatrix}$（$C$ 为任意常数）；若 $r(A)=1$，通解为 $X=C_1\begin{pmatrix}-\dfrac{b}{a}\\1\\0\end{pmatrix}+C_2\begin{pmatrix}-\dfrac{c}{a}\\0\\1\end{pmatrix}$（$C_1,C_2$ 为任意常数）．
  >
  > **解法1**
  > 【解】 由 $AB=O$，得 $r(A)+r(B)\le 3$，
  >
  > 因为 $A$ 为非零矩阵，所以 $r(A)\ge 1$．
  >
  > 当 $k\ne 9$ 时，由 $r(B)=2$ 得 $r(A)=1$．
  >
  > 因为 $AB=O$，所以 $B$ 的列向量为方程组 $AX=0$ 的解，于是方程组 $AX=0$ 的通解为
  > $$
  > X=C_1\begin{pmatrix}1\\2\\3\end{pmatrix}+C_2\begin{pmatrix}3\\6\\k\end{pmatrix}\quad(C_1,C_2\text{ 为任意常数}).
  > $$
  > 当 $k=9$ 时，$r(B)=1$，则 $1\le r(A)\le 2$．
  >
  > 当 $r(A)=2$ 时，因为 $AB=O$，所以 $B$ 的列向量为 $AX=0$ 的解，于是方程组 $AX=0$ 的通解为 $X=C\begin{pmatrix}1\\2\\3\end{pmatrix}$（$C$ 为任意常数）．
  > $$
  > \text{当 }r(A)=1\text{ 时，不妨设 }a\ne 0,\text{由 }A\to\begin{pmatrix}a&b&c\\0&0&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&\dfrac{b}{a}&\dfrac{c}{a}\\0&0&0\\0&0&0\end{pmatrix},\text{得方程组 }AX=0\text{ 的通解为}
  > $$
  > $$
  > X=C_1\begin{pmatrix}-\dfrac{b}{a}\\1\\0\end{pmatrix}+C_2\begin{pmatrix}-\dfrac{c}{a}\\0\\1\end{pmatrix}\quad(C_1,C_2\text{ 为任意常数}).
  > $$
  >
  > > **方法点评**：设 $A,B$ 分别为 $m\times n$ 与 $n\times s$ 两个矩阵，对 $AB=O$ 有两种解读：
  > > （1）$r(A)+r(B)\le n$；
  > > （2）矩阵 $B$ 的列向量为齐次线性方程组 $AX=0$ 的一组解．
  >
  > **解法2**
  > 由 $AB=0$ 知，$B$ 的每一列均为 $Ax=0$ 的解，且 $r(A)+r(B)\le3$（$3$ 是 $A$ 的列数或 $B$ 的行数）
  >
  > （1）若 $k\ne9$，$\beta_1,\beta_3$ 不成比例，$\beta_1,\beta_2$ 成比例，则 $r(B)=2$、方程组 $Ax=0$ 的解向量中至少有两个线性无关的解向量，故它的基础解系中解向量的个数 $\ge2$，又基础解系中解向量的个数$=$未知数的个数$-r(A)=3-r(A)$，于是 $r(A)\le1$.
  >
  > 又矩阵 $A$ 的第一行元素 $(a,b,c)$ 不全为零，显然 $r(A)\ge1$，故 $r(A)=1$. 可见此时 $Ax=0$ 的基础解系由 $3-r(A)=2$ 个线性无关解向量组成，$\beta_1,\beta_3$ 是方程组的解且线性无关，可作为其基础解系，故 $Ax=0$ 的通解为：
  > $$
  > x=k_1\begin{pmatrix}1\\2\\3\end{pmatrix}+k_2\begin{pmatrix}3\\6\\k\end{pmatrix},k_1,k_2\text{为任意常数}.
  > $$
  > （2）若 $k=9$，则 $\beta_1,\beta_2,\beta_3$ 均成比例，故 $r(B)=1$，从而 $1\le r(A)\le2$. 故 $r(A)=1$ 或 $r(A)=2$.
  >
  > ① 若 $r(A)=2$，则方程组的基础解系由一个线性无关的解组成，$\beta_1$ 是方程组 $Ax=0$ 的基础解系，则 $Ax=0$ 的通解为：$x=k_1\begin{pmatrix}1\\2\\3\end{pmatrix}$，$k_1$ 为任意常数.
  >
  > ② 若 $r(A)=1$，则 $A$ 的三个行向量成比例，因第 1 行元素 $(a,b,c)$ 不全为零，不妨设 $a\ne0$，则 $Ax=0$ 的同解方程组为：$ax_1+bx_2+cx_3=0$，系数矩阵的秩为 1，故基础解系由 $3-1=2$ 个线性无关解向量组成，选 $x_2,x_3$ 为自由未知量，分别取 $x_2=1,x_3=0$ 或 $x_2=0,x_3=1$，方程组的基础解系为 $\xi_1=\begin{pmatrix}-\frac{b}{a}\\1\\0\end{pmatrix},\xi_2=\begin{pmatrix}-\frac{c}{a}\\0\\1\end{pmatrix}$，则其通解为 $x=k_1\begin{pmatrix}-\frac{b}{a}\\1\\0\end{pmatrix}+k_2\begin{pmatrix}-\frac{c}{a}\\0\\1\end{pmatrix}$，$k_1,k_2$ 为任意常数.

### 2022 年 · 数学一 · 第 6 题（选择，5 分）

- [ ] 第 6 题

  设 $A,B$ 为 $n$ 阶矩阵，$E$ 为 $n$ 阶单位矩阵，若方程组 $Ax=0$ 与 $Bx=0$ 同解，则（　）

  （A）$\begin{pmatrix}A&O\\E&B\end{pmatrix}y=0$ 只有零解
  （B）$\begin{pmatrix}E&A\\O&AB\end{pmatrix}y=0$ 只有零解
  （C）$\begin{pmatrix}A&B\\O&B\end{pmatrix}y=0$ 与 $\begin{pmatrix}B&A\\O&A\end{pmatrix}y=0$ 同解
  （D）$\begin{pmatrix}AB&B\\O&A\end{pmatrix}y=0$ 与 $\begin{pmatrix}BA&A\\O&B\end{pmatrix}y=0$ 同解

  > [!success]- 答案与解析
  > **答案**：（C）
  >
  > > 本题主要考查方程组的同解问题。$Ax=0$ 与 $Bx=0$ 同解，说明 $Ax=0$ 的解都是 $Bx=0$ 的解，且 $Bx=0$ 的解也都是 $Ax=0$ 的解。
  >
  > 设 $y_1,y_2$ 均为 $n$ 维列向量，$y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$。对 $\begin{pmatrix}A&B\\O&B\end{pmatrix}$ 和 $\begin{pmatrix}B&A\\O&A\end{pmatrix}$ 分别作初等行变换：
  > $$
  > \begin{pmatrix}E&-E\\O&E\end{pmatrix}\begin{pmatrix}A&B\\O&B\end{pmatrix}=\begin{pmatrix}A&O\\O&B\end{pmatrix},\qquad \begin{pmatrix}E&-E\\O&E\end{pmatrix}\begin{pmatrix}B&A\\O&A\end{pmatrix}=\begin{pmatrix}B&O\\O&A\end{pmatrix}.
  > $$
  > 于是，$\begin{pmatrix}A&B\\O&B\end{pmatrix}y=0$ 等价于 $\begin{pmatrix}A&O\\O&B\end{pmatrix}y=0$，即 $\begin{cases}Ay_1=0,\\By_2=0,\end{cases}$ 该方程组的解 $y$ 满足 $y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，其中 $y_1$ 为 $Ax=0$ 的解，$y_2$ 为 $Bx=0$ 的解。
  >
  > 同理，$\begin{pmatrix}B&A\\O&A\end{pmatrix}y=0$ 等价于 $\begin{pmatrix}B&O\\O&A\end{pmatrix}y=0$，即 $\begin{cases}By_1=0,\\Ay_2=0,\end{cases}$ 该方程组的解 $y$ 满足 $y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，其中 $y_1$ 为 $Bx=0$ 的解，$y_2$ 为 $Ax=0$ 的解。
  >
  > 由于 $Ax=0$ 与 $Bx=0$ 同解，故选项 C 中的两个方程组同解。应选 C。
  >
  > 同选项 C 的分析，选项 D 中的第一个方程组可化为
  > $$
  > \begin{pmatrix}AB&B\\O&A\end{pmatrix}\begin{pmatrix}y_1\\y_2\end{pmatrix}=\begin{pmatrix}ABy_1+By_2\\Ay_2\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix}.
  > $$
  > 展开可得 $\begin{cases}ABy_1+By_2=0,\\Ay_2=0.\end{cases}$ 由于 $Ax=0$ 与 $Bx=0$ 同解，故该方程组等价于 $\begin{cases}ABy_1=0,\\Ay_2=0.\end{cases}$ 同理可得，$\begin{pmatrix}BA&A\\O&B\end{pmatrix}y=0$ 等价于 $\begin{cases}BAy_1=0,\\By_2=0.\end{cases}$ 但是 $ABx=0$ 与 $BAx=0$ 并不一定同解。取 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix},B=\begin{pmatrix}0&1\\0&1\end{pmatrix}$，则 $AB=\begin{pmatrix}0&1\\0&0\end{pmatrix},BA=\begin{pmatrix}0&0\\0&0\end{pmatrix}$，$ABx=0$ 与 $BAx=0$ 不同解。

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第四章 线性方程组|第四章 线性方程组]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
