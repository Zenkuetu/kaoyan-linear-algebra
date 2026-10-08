---
tags:
  - 基础
  - 线代
  - 考研数学
章节: "[[第四章 线性方程组|第四章 线性方程组]]"
层次: 基础
知识点ID: eq-homo-sol
必要⇐:
  - "[[基础解系|基础解系]]"
  - "[[齐次方程组的通解与解空间|齐次方程组的通解与解空间]]"
---

# 齐次方程组 Ax = 0

> <span class="oneline">​</span>**一句话**：零解永远有，有非零解就看 r(A) 是否小于 n

**考试层次**：`基础` ｜ **章节**：[[第四章 线性方程组|第四章 线性方程组]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

**齐次方程组要解决的问题是：除了全零的 $x = 0$，还有没有别的解。**
先看一组具体的（三个未知数、三个方程）：

$$
\begin{cases} x_1 + x_2 + x_3 = 0 \\ x_1 + 2x_2 + 3x_3 = 0 \\ 2x_1 + 3x_2 + 4x_3 = 0 \end{cases}
$$

把 $x = (0,0,0)$ 代进去，三个等式全是 $0 = 0$ —— 这一步等于白做：零解永远成立，它不构成任何判据。
那换个思路，凑一个非零解试试。取 $x = (1,-2,1)$，三个式子分别是 $1 - 2 + 1 = 0$、$1 - 4 + 3 = 0$、$2 - 6 + 4 = 0$，全对，确实是非零解。可这只回答了"至少有一个"：题目真正问的是"到底有没有非零解、非零解有几个独立方向"，凑一个数答不上来；系数里带参数时（某个位置是 $a$），连从哪儿凑起都不知道。
所以需要的是一条**只看系数就能定性**的判据。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

"试几个数"这条路走不通，常见的土办法也各有硬伤：

- <span class="pit">​</span>**坑一 · 靠凑、靠试代**：偶尔能撞上一个非零解（上面撞到了 $(1,-2,1)$），可撞上了只说明"有"，撞不上也不能说"没有"；系数含参数时连试的起点都没有；
- **坑二 · 只对方阵算 $\lvert A \rvert$**：只有方程个数等于未知数个数、系数矩阵是方阵时才算得出 $\lvert A \rvert$，而题目经常是"两个方程三个未知数"，压根没有方阵行列式可算；就算算出来 $\lvert A \rvert = 0$，它也只回答"有非零解"，回答不了"有几个独立方向"；
- <span class="pit">​</span>**坑三 · 一个未知数一个未知数往里代**：从第一个式子解出 $x_1$ 再代入，最后会落到 $0 = 0$ 这种恒等式上，既看不出是"只有零解"还是"有无穷多解"，也不知道还剩几个未知数可以自由取值。

## <span class="hx hx-intro">🟢</span> 三、于是引入：齐次方程组 Ax = 0

于是引入**用秩来判断齐次方程组**。先把两件事分清：$x = 0$ 一定是解（全零代进去，左边全是 $0$），所以齐次方程组永远"有解"，唯一的区别是零解之外还有没有别的解；再把系数矩阵 $A$ 用初等行变换化成行阶梯形，数出主元个数就是 $r(A)$，和未知数个数 $n$ 比大小：

- $r(A) = n$：没有自由未知量，只有零解；
- $r(A) < n$：有 $n - r(A)$ 个自由未知量，一定有非零解，解有 $n - r(A)$ 个独立方向。

上面那三个坑，逐个补上：

- <span class="fix">​</span>**坑一补上 · 不用凑，看系数就能定性**：上面那组恰好有 $(2,3,4) = (1,1,1) + (1,2,3)$（第三行是第一行加第二行），消元后第三行整行变成 $0$，主元只剩 $2$ 个，$r(A) = 2 < 3 = n$，所以不用试也知道一定有非零解；刚才凑出来的 $(1,-2,1)$ 正是其中一个；
- <span class="fix">​</span>**坑二补上 · 长方阵一样能判**：秩判据只看 $A$ 的主元个数，两个方程三个未知数照样判；方阵时才多一条近路 —— $\lvert A \rvert \neq 0$ 就是只有零解，$\lvert A \rvert = 0$ 就是有非零解，两件事是一回事；
- <span class="fix">​</span>**坑三补上 · 连"有几个方向"一起给**：$n - r(A)$ 就是自由未知量的个数，上面那组是 $3 - 2 = 1$，说明非零解只有一个独立方向，全部解就是 $(1,-2,1)$ 的任意倍。

> 顺带提一句：到第五章会换一个说法 —— $\lvert A \rvert = 0$ 就是"$A$ 有零特征值"。名字换了，判据一模一样，现在不懂"特征值"照样做题。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">​</span>**定义**：形如 $Ax = 0$ 的方程组叫齐次方程组，其中 $A$ 是 $m \times n$ 矩阵、$x$ 是 $n$ 维未知列向量；$x = 0$ 这个解叫零解。
<span class="key">​</span>**两条基础结论**：$Ax = 0$ 必有零解；有非零解 $\iff r(A) < n$，只有零解 $\iff r(A) = n$。
<span class="lab">​</span>**方阵特例**：$n$ 个方程 $n$ 个未知数时，有非零解 $\iff \lvert A \rvert = 0$（第一章的行列式判据）。
<span class="lab">​</span>**判定流程**：写出 $A$，只用初等行变换化到行阶梯形，数主元得 $r(A)$，再与 $n$ 比。
<span class="lab">​</span>**算例**：判断下面的齐次方程组有没有非零解，并写出全部解。

$$
\begin{cases} x_1 + x_2 + x_3 = 0 \\ x_1 + 2x_2 + 3x_3 = 0 \\ 2x_1 + 3x_2 + 4x_3 = 0 \end{cases}
$$

只对系数矩阵作初等行变换：

$$
\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 2 & 3 & 4 \end{pmatrix} \xrightarrow{\;r_2 - r_1,\ r_3 - 2r_1\;} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 1 & 2 \end{pmatrix} \xrightarrow{\;r_3 - r_2\;} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{pmatrix}
$$

再作一次 $r_1 - r_2$ 得到行最简形：

$$
\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{pmatrix}
$$

<span class="lab">​</span>**读解**：主元在第 $1$、$2$ 列，$r(A) = 2$；第 $3$ 列没有主元，$x_3$ 是自由未知量，个数 $n - r(A) = 3 - 2 = 1$。由行最简形读出 $x_1 - x_3 = 0$、$x_2 + 2x_3 = 0$，即 $x_1 = x_3$、$x_2 = -2x_3$；取 $x_3 = 1$ 得基础解系 $\xi_1 = (1,-2,1)^{\mathrm{T}}$，通解 $x = k(1,-2,1)^{\mathrm{T}}$（$k$ 为任意常数）。
<span class="lab">​</span>**验算**：把 $(1,-2,1)$ 代回三个方程，$1 - 2 + 1 = 0$、$1 - 4 + 3 = 0$、$2 - 6 + 4 = 0$，全成立；取 $k = 0$ 得到的正是零解。
<span class="pit">​</span>**易错提醒**：有非零解的条件是 $r(A) < n$，不是 $r(A) \le n$（后者恒成立，等于没说）；方阵时也别把 $\lvert A \rvert = 0$ 读成"无解"—— 齐次方程组有非零解时是"无穷多解"，永远不会有"无解"。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：给含参数的齐次方程组，问"有非零解的充要条件"或"参数取何值时只有零解"，做法就是比较 $r(A)$ 与 $n$，方阵时可以直接令 $\lvert A \rvert = 0$。
2. 填空题：已知 $Ax = 0$ 有非零解反求参数（常见于含 $a$ 的三阶方阵），或者已知 $r(A)$ 与 $n$ 求基础解系的向量个数 $n - r(A)$。
3. 解答题：判断齐次方程组解的情形并写出通解；"方程个数小于未知数个数时必有非零解"这类证明题，第一句依据就是 $r(A) \le m < n$。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 把"有非零解"的条件写成 r(A) ≤ n 之外的形式

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 算：系数矩阵为 $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 2 & 3 & 4 \end{pmatrix}$ 的齐次方程组有非零解吗？$r(A)$ 是几？取一组非零解代回验一验。
- [ ] 判：两个方程、三个未知数的齐次方程组，有可能只有零解吗？
- [ ] 判：$A$ 是三阶方阵且 $\lvert A \rvert = 0$，$Ax = 0$ 是"无解"还是"有无穷多解"？

> [!quote]- 🕸️ 八、关系网（点开查看 7 条关系：2 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟪 必要不充分（⇐） | [[基础解系]] | 有非零解才谈基础解系 |
> | 本点 ⇒ 对方 | 🟪 必要不充分（⇐） | [[齐次方程组的通解与解空间]] | 通解以基础解系为构件 |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[高斯消元法与行阶梯形]] | 消元即可判齐次解的情形 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[齐次与非齐次解的关系]] | 讨论基于齐次的解集情形 |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[克拉默法则]] | ｜A｜≠0 ⇒ 齐次只有零解 |
> | 对方 ⇒ 本点 | 🟥 充要（⇔） | [[矩阵方程 AX = O 与 AB = O]] | AB=O 即 B 的列都是齐次解 |
> | 对方 ⇒ 本点 | 🟥 充要（⇔） | [[可逆的充要条件（汇总枢纽）]] | 可逆 ⇔ 齐次只有零解 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟪 必要 ⇒ [[基础解系]]——有非零解才谈基础解系
> - 本点 ⇒ 🟪 必要 ⇒ [[齐次方程组的通解与解空间]]——通解以基础解系为构件
> - [[高斯消元法与行阶梯形]] ⇒ 🟧 充分 ⇒ 本点——消元即可判齐次解的情形
> - [[齐次与非齐次解的关系]] ⇒ 🟪 必要 ⇒ 本点——讨论基于齐次的解集情形
> - [[克拉默法则]] ⇒ 🟧 充分 ⇒ 本点——｜A｜≠0 ⇒ 齐次只有零解
> - [[矩阵方程 AX = O 与 AB = O]] ⇒ 🟥 充要 ⇒ 本点——AB=O 即 B 的列都是齐次解
> - [[可逆的充要条件（汇总枢纽）]] ⇒ 🟥 充要 ⇒ 本点——可逆 ⇔ 齐次只有零解

## <span class="hx hx-exam">📝</span> 九、真题（2004–2025）

### 2025 年 · 数学一 · 第 15 题（填空，5 分）

设矩阵 $A=\begin{pmatrix}4&2&-3\\a&3&-4\\b&5&-7\end{pmatrix}$，若方程组 $A^2x=0$ 与 $Ax=0$ 不同解，则 $a-b=\underline{\qquad}$。

> [!success]- 答案与解析
> **答案**：$-4$
>
> 根据题意，$|A|=0$，
> $$
> |A|=\begin{vmatrix}4&2&-3\\a&3&-4\\b&5&-7\end{vmatrix}=\begin{vmatrix}4&2&-3\\a-b&-2&3\\b&5&-7\end{vmatrix}=\begin{vmatrix}4+a-b&0&0\\a-b&-2&3\\b&5&-7\end{vmatrix}=(4+a-b)(-1)=0,
> $$
> 故
> $$
> a-b=-4.
> $$

### 2004 年 · 数学一 · 第 20 题（解答，9 分）

（本题满分 9 分）设有齐次线性方程组
$$
\begin{cases}(1+a)x_1+x_2+\cdots+x_n=0,\\2x_1+(2+a)x_2+\cdots+2x_n=0,\\\cdots\cdots\\nx_1+nx_2+\cdots+(n+a)x_n=0,\end{cases}\quad(n\ge 2),
$$
试问 $a$ 取何值时，该方程组有非零解，并求出其通解．

> [!success]- 答案与解析
> **答案**：当 $a=0$ 或 $a=-\dfrac{n(n+1)}{2}$ 时方程组有非零解；$a=0$ 时通解为 $X=C_1\begin{pmatrix}-1\\1\\0\\\vdots\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\1\\\vdots\\0\end{pmatrix}+\cdots+C_{n-1}\begin{pmatrix}-1\\0\\0\\\vdots\\1\end{pmatrix}$（$C_1,C_2,\cdots,C_{n-1}$ 为任意常数）；$a=-\dfrac{n(n+1)}{2}$ 时通解为 $X=C\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}$（$C$ 为任意常数）．
>
> 【解】 方法一
> $$
> |A|=\begin{vmatrix}1+a&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{vmatrix}=\left[a+\frac{n(n+1)}{2}\right]\begin{vmatrix}1&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{vmatrix}
> $$
> $$
> =\left[a+\frac{n(n+1)}{2}\right]a^{n-1}.
> $$
> 当 $a=0$ 或 $a=-\dfrac{n(n+1)}{2}$ 时，方程组有非零解．
>
> 当 $a=0$ 时，由 $A\to\begin{pmatrix}1&1&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix}$ 得方程组的通解为
> $$
> X=C_1\begin{pmatrix}-1\\1\\0\\\vdots\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\1\\\vdots\\0\end{pmatrix}+\cdots+C_{n-1}\begin{pmatrix}-1\\0\\0\\\vdots\\1\end{pmatrix}\quad(C_1,C_2,\cdots,C_{n-1}\text{ 为任意常数});
> $$
> 当 $a=-\dfrac{n(n+1)}{2}$ 时，
> $$
> \text{由 }A=\begin{pmatrix}1+a&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix}\to\begin{pmatrix}1+a&1&\cdots&1\\-2a&a&\cdots&0\\\vdots&\vdots&&\vdots\\-na&0&\cdots&a\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1+a&1&\cdots&1\\-2&1&\cdots&0\\\vdots&\vdots&&\vdots\\-n&0&\cdots&1\end{pmatrix}\to\begin{pmatrix}-2&1&0&\cdots&0\\-3&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-n&0&0&\cdots&1\\0&0&0&\cdots&0\end{pmatrix},
> $$
> 原方程组的通解为 $X=C\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}$（$C$ 为任意常数）．
>
> 方法二
> $$
> A=\begin{pmatrix}1+a&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix}\to\begin{pmatrix}a+\dfrac{n(n+1)}{2}&a+\dfrac{n(n+1)}{2}&\cdots&a+\dfrac{n(n+1)}{2}\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix},
> $$
> 当 $a+\dfrac{n(n+1)}{2}=0$，即 $a=-\dfrac{n(n+1)}{2}$，由 $r(A)=n-1<n$ 得原方程组有无数个解，
> $$
> \text{显然 }A\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}=0,\text{故方程组的通解为 }X=C\begin{pmatrix}1\\2\\\vdots\\n\end{pmatrix}\text{（}C\text{ 为任意常数）};
> $$
> 当 $a+\dfrac{n(n+1)}{2}\ne 0$ 时，$A\to\begin{pmatrix}1&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{pmatrix}\to\begin{pmatrix}1&1&\cdots&1\\0&a&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&a\end{pmatrix}$，
>
> 当 $a=0$ 时，方程组有无数个解，由 $A\to\begin{pmatrix}1&1&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix}$ 得通解为
> $$
> X=C_1\begin{pmatrix}-1\\1\\0\\\vdots\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\1\\\vdots\\0\end{pmatrix}+\cdots+C_{n-1}\begin{pmatrix}-1\\0\\0\\\vdots\\1\end{pmatrix}\quad(C_1,C_2,\cdots,C_{n-1}\text{ 为任意常数}).
> $$

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第四章 线性方程组|第四章 线性方程组]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
