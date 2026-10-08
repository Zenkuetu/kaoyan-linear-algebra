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

## <span class="hx hx-exam">📝</span> 九、真题（1989–2025）

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

### 2004 年 · 数学二 · 第 22 题（解答，9 分）

设有齐次线性方程组
$$
\begin{cases}
(1+a)x_1+x_2+x_3+x_4=0,\\
2x_1+(2+a)x_2+2x_3+2x_4=0,\\
3x_1+3x_2+(3+a)x_3+3x_4=0,\\
4x_1+4x_2+4x_3+(4+a)x_4=0,
\end{cases}
$$
试问 $a$ 取何值时，该方程组有非零解，并求出其通解.

> [!success]- 答案与解析
> **答案**：$a=0$ 或 $a=-10$ 时方程组有非零解. 当 $a=0$ 时，通解为 $x=k_1(-1,1,0,0)^{\mathrm{T}}+k_2(-1,0,1,0)^{\mathrm{T}}+k_3(-1,0,0,1)^{\mathrm{T}}$（$k_1,k_2,k_3$ 为任意常数）；当 $a=-10$ 时，通解为 $x=k(1,2,3,4)^{\mathrm{T}}$（$k$ 为任意常数）.
>
> 方法1：对方程组的系数矩阵 $A$ 作初等行变换，有
> $$
> A=\begin{pmatrix}1+a&1&1&\cdots&1\\2&2+a&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n+a\end{pmatrix}\xrightarrow[i\times(-i)+i\text{行}]{i=2,\cdots,n}\begin{pmatrix}1+a&1&1&\cdots&1\\-2a&a&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\-na&0&0&\cdots&a\end{pmatrix}=B
> $$
> 对 $|B|$ 是否为零进行讨论：
>
> 当 $a=0$ 时，$r(A)=1<n$，由齐次方程组有非零解的判别定理：设 $A$ 是 $m\times n$ 矩阵，齐次方程组 $Ax=0$ 有非零解的充要条件是 $r(A)<n$. 故此方程组有非零解，把 $a=0$ 代入原方程组，得其同解方程组为
> $$
> x_1+x_2+\cdots+x_n=0,\tag{*}
> $$
> 此时，$r(A)=1$，故方程组有 $n-r=n-1$ 个自由未知量. 选 $x_2,x_3,\cdots,x_n$ 为自由未知量，将他们的 $n-1$ 组值 $(1,0,\cdots,0),(0,1,\cdots,0),\cdots,(0,0,\cdots,1)$ 分别代入 $(*)$ 式，得基础解系
> $$
> \eta_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \eta_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\cdots,\eta_{n-1}=(-1,0,0,\cdots,1)^{\mathrm{T}},
> $$
> 于是方程组的通解为
> $$
> x=k_1\eta_1+\cdots+k_{n-1}\eta_{n-1},\ \text{其中}\ k_1,\cdots,k_{n-1}\ \text{为任意常数}.
> $$
> 当 $a\ne0$ 时，对矩阵 $B$ 作初等行变换，有
> $$
> B\to\begin{pmatrix}a+\frac{n(n+1)}{2}&0&0&\cdots&0\\-2&1&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\-n&0&0&\cdots&1\end{pmatrix}\xrightarrow[i\times(-1)+1\text{行}]{i=2,3,\cdots,n},
> $$
> 可知 $a=-\frac{n(n+1)}{2}$ 时，$r(A)=n-1<n$，由齐次方程组有非零解的判别定理，知方程组也有非零解，把 $a=-\frac{n(n+1)}{2}$ 代入原方程组，其同解方程组为
> $$
> \begin{cases}
> -2x_1+x_2=0,\\
> -3x_1+x_3=0,\\
> \cdots\cdots\cdots\cdots\\
> -nx_1+x_n=0,
> \end{cases}
> $$
> 此时，$r(A)=n-1$，故方程组有 $n-r=n-(n-1)=1$ 个自由未知量. 选 $x_2$ 为自由未知量，取 $x_2=1$，由此得基础解系为 $\eta=(1,2,\cdots,n)^{\mathrm{T}}$，于是方程组的通解为 $x=k\eta$，其中 $k$ 为任意常数.
>
> 方法2：计算方程组的系数行列式：
> $$
> A=\begin{pmatrix}1+a&1&1&\cdots&1\\2&2+a&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n+a\end{pmatrix}\xrightarrow{\text{矩阵加法}}\begin{pmatrix}a&0&0&\cdots&0\\0&a&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&a\end{pmatrix}+\begin{pmatrix}1&1&1&\cdots&1\\2&2&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n\end{pmatrix}
> $$
> $$
> =aE+\begin{pmatrix}1&1&1&\cdots&1\\2&2&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n\end{pmatrix}\triangleq aE+Q,
> $$
> 下面求矩阵 $Q$ 的特征值：
> $$
> |\lambda E-Q|=\begin{vmatrix}\lambda-1&-1&-1&\cdots&-1\\-2&\lambda-2&-2&\cdots&-2\\\cdots&\cdots&\cdots&\cdots&\cdots\\-n&-n&-n&\cdots&\lambda-n\end{vmatrix}\xrightarrow[i\times(-i)+i\text{行}]{i=2,3,\cdots,n}\begin{vmatrix}\lambda-1&-1&-1&\cdots&-1\\-2\lambda&\lambda&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\-n\lambda&0&0&\cdots&\lambda\end{vmatrix}
> $$
> $$
> \xrightarrow[i\text{列}\times(i)+1\text{列}]{i=2,3,\cdots,n}\begin{vmatrix}\lambda-\frac{n(n+1)}{2}&-1&-1&\cdots&-1\\0&\lambda&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&\lambda\end{vmatrix}=\lambda^{n-1}\left(\lambda-\frac{n(n+1)}{2}\right)
> $$
> 则 $Q$ 的特征值 $0,\cdots,0,\frac{n(n+1)}{2}$，由性质：若 $Ax=\lambda x$，则 $(kA)x=(k\lambda)x,A^mx=\lambda^mx$，因此对任意多项式 $f(x)$，$f(A)x=f(\lambda)x$，即 $f(\lambda)$ 是 $f(A)$ 的特征值.
>
> 故，$A$ 的特征值为 $a,a,\cdots,a+\frac{n(n+1)}{2}$，由特征值的乘积等于矩阵行列式的值，得 $A$ 行列式 $|A|=\left(a+\frac{n(n+1)}{2}\right)a^{n-1}$.
>
> 由齐次方程组有非零解的判别定理：设 $A$ 是 $n$ 阶矩阵，齐次方程组 $Ax=0$ 有非零解的充要条件是 $|A|=0$. 可知，当 $|A|=0$，即 $a=0$ 或 $a=-\frac{n(n+1)}{2}$ 时，方程组有非零解.
>
> 当 $a=0$ 时，对系数矩阵 $A$ 作初等行变换，有
> $$
> A=\begin{pmatrix}1&1&1&\cdots&1\\2&2&2&\cdots&2\\\cdots&\cdots&\cdots&\cdots&\cdots\\n&n&n&\cdots&n\end{pmatrix}\xrightarrow[i\times(-i)+i\text{行}]{i=2,\cdots,n}\begin{pmatrix}1&1&1&\cdots&1\\0&0&0&\cdots&0\\\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&0\end{pmatrix},
> $$
> 故方程组的同解方程组为
> $$
> x_1+x_2+\cdots+x_n=0,
> $$
> 此时，$r(A)=1$，故方程组有 $n-r=n-1$ 个自由未知量. 选 $x_2,x_3,\cdots,x_n$ 为自由未知量，将他们的 $n-1$ 组值 $(1,0,\cdots,0),(0,1,\cdots,0),\cdots,(0,0,\cdots,1)$ 分别代入 $(*)$ 式，由此得基础解系为
> $$
> \eta_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \eta_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\cdots,\eta_{n-1}=(-1,0,0,\cdots,1)^{\mathrm{T}},
> $$
> 于是方程组的通解为 $x=k_1\eta_1+\cdots+k_{n-1}\eta_{n-1}$，其中 $k_1,\cdots,k_{n-1}$ 为任意常数.

### 2003 年 · 数学一 · 选择题第 5 题（选择，4 分）

设有齐次线性方程组 $Ax=0$ 和 $Bx=0$，其中 $A,B$ 均为 $m\times n$ 矩阵，现有 4 个命题：

①若 $Ax=0$ 的解均是 $Bx=0$ 的解，则秩$(A)\ge$秩$(B)$；

②若秩$(A)\ge$秩$(B)$，则 $Ax=0$ 的解均是 $Bx=0$ 的解；

③若 $Ax=0$ 与 $Bx=0$ 同解，则秩$(A)=$秩$(B)$；

④若秩$(A)=$秩$(B)$，则 $Ax=0$ 与 $Bx=0$ 同解．

以上命题中正确的是（　　）

（A）①②．
（B）①③．
（C）②④．
（D）③④．

> [!success]- 答案与解析
> **答案**：（B）
>
> （11）【答案】 （B）．
>
> 【解】 方法一 若 $AX=0$ 的解为 $BX=0$ 的解，则 $AX=0$ 的基础解系所含的线性无关的解向量的个数不超过 $BX=0$ 的基础解系所含的线性无关的解向量个数，即 $n-r(A)\le n-r(B)$，从而 $r(A)\ge r(B)$；
>
> 若 $AX=0$ 与 $BX=0$ 同解，则 $r(A)=r(B)$，反之不对，故应选（B）．
>
> 方法二 取 $A=\begin{pmatrix}1&1&-2\\1&0&-1\end{pmatrix}$，$B=(1\ \ 1\ \ 1)$，$r(A)=2\ge r(B)=1$，
> $$
> \text{但 }X=\begin{pmatrix}1\\1\\1\end{pmatrix}\text{ 为 }AX=0\text{ 的解，不是 }BX=0\text{ 的解，第 2 个命题不对}；
> $$
> 取 $A=(1\ \ 1\ \ -1)$，$B=(1\ \ -1\ \ -1)$，$r(A)=r(B)$，但 $AX=0$ 与 $BX=0$ 不同解，第 4 个命题不对，应选（B）．
>
> > **方法点评**：本题考查两个齐次线性方程组的解与系数矩阵的秩的关系．
> > 齐次线性方程组系数矩阵的秩即为方程组中约束条件的个数，系数矩阵的秩大则约束条件越多，解就越少；系数矩阵的秩小则约束条件越少，解就越多．设 $AX=0$ 与 $BX=0$ 为两个齐次线性方程组，则：
> > （1）若 $AX=0$ 与 $BX=0$ 同解，则 $r(A)=r(B)$，反之不对；
> > （2）若 $AX=0$ 的解为 $BX=0$ 的解，则 $r(A)\ge r(B)$；
> > （3）若 $AX=0$ 的解为 $BX=0$ 的解，反之不对，则 $r(A)>r(B)$；
> > （4）若 $AX=0$ 的解为 $BX=0$ 的解，且 $r(A)=r(B)$，则 $AX=0$ 与 $BX=0$ 同解．

### 2003 年 · 数学三 · 第九题（解答，13 分）

（本题满分 13 分）已知齐次线性方程组
$$
\begin{cases}(a_1+b)x_1+a_2x_2+a_3x_3+\cdots+a_nx_n=0,\\a_1x_1+(a_2+b)x_2+a_3x_3+\cdots+a_nx_n=0,\\a_1x_1+a_2x_2+(a_3+b)x_3+\cdots+a_nx_n=0,\\\cdots\cdots\cdots\\a_1x_1+a_2x_2+a_3x_3+\cdots+(a_n+b)x_n=0,\end{cases}
$$
其中 $\sum\limits_{i=1}^n a_i\ne 0$，试讨论 $a_1,a_2,\cdots,a_n$ 和 $b$ 满足何种关系时，

（1）方程组仅有零解；

（2）方程组有非零解，在有非零解时，求此方程组的一个基础解系。

> [!success]- 答案与解析
> **答案**：（1）$b\ne 0$ 且 $b+\sum\limits_{i=1}^n a_i\ne 0$ 时方程组仅有零解；（2）$b=0$ 时，基础解系为 $\alpha_1=\left(-\dfrac{a_2}{a_1},1,0,\cdots,0\right)^{\mathrm{T}},\alpha_2=\left(-\dfrac{a_3}{a_1},0,1,\cdots,0\right)^{\mathrm{T}},\cdots,\alpha_{n-1}=\left(-\dfrac{a_n}{a_1},0,0,\cdots,1\right)^{\mathrm{T}}$；$b=-\sum\limits_{i=1}^n a_i$ 时，基础解系为 $\alpha=(1,1,\cdots,1)^{\mathrm{T}}$。
>
> 【分析】方程的个数与未知量的个数相同，问题转化为系数矩阵行列式是否为零，而系数行列式的计算具有明显的特征：所有列对应元素相加后相等。可先将所有列对应元素相加，然后提出公因式，再将第一行的 $(-1)$ 倍加到其余各行，即可计算出行列式的值。
>
> 【详解】方程组的系数行列式
> $$
> |A|=\begin{vmatrix}a_1+b&a_2&a_3&\cdots&a_n\\a_1&a_2+b&a_3&\cdots&a_n\\a_1&a_2&a_3+b&\cdots&a_n\\\vdots&\vdots&\vdots&&\vdots\\a_1&a_2&a_3&\cdots&a_n+b\end{vmatrix}=b^{n-1}\left(b+\sum_{i=1}^n a_i\right).
> $$
> （1）当 $b\ne 0$ 时且 $b+\sum\limits_{i=1}^n a_i\ne 0$ 时，秩 $(A)=n$，方程组仅有零解。
>
> （2）当 $b=0$ 时，原方程组的同解方程组为
> $$
> a_1x_1+a_2x_2+\cdots+a_nx_n=0.
> $$
> 由 $\sum\limits_{i=1}^n a_i\ne 0$ 可知，$a_i\ (i=1,2,\cdots,n)$ 不全为零。不妨设 $a_1\ne 0$，得原方程组的一个基础解系为
> $$
> \alpha_1=\left(-\frac{a_2}{a_1},1,0,\cdots,0\right)^{\mathrm{T}},\ \alpha_2=\left(-\frac{a_3}{a_1},0,1,\cdots,0\right)^{\mathrm{T}},\ \cdots,\ \alpha_{n-1}=\left(-\frac{a_n}{a_1},0,0,\cdots,1\right)^{\mathrm{T}}.
> $$
> 当 $b=-\sum\limits_{i=1}^n a_i$ 时，有 $b\ne 0$，原方程组的系数矩阵可化为
> $$
> \begin{pmatrix}a_1-\sum\limits_{i=1}^n a_i&a_2&a_3&\cdots&a_n\\a_1&a_2-\sum\limits_{i=1}^n a_i&a_3&\cdots&a_n\\a_1&a_2&a_3-\sum\limits_{i=1}^n a_i&\cdots&a_n\\\vdots&\vdots&\vdots&&\vdots\\a_1&a_2&a_3&\cdots&a_n-\sum\limits_{i=1}^n a_i\end{pmatrix}
> $$
> （将第 $1$ 行的 $-1$ 倍加到其余各行，再从第 $2$ 行到第 $n$ 行同乘以 $-\dfrac{1}{\sum\limits_{i=1}^n a_i}$ 倍）
> $$
> \to\begin{pmatrix}a_1-\sum\limits_{i=1}^n a_i&a_2&a_3&\cdots&a_n\\-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\end{pmatrix}
> $$
> （将第 $n$ 行的 $-a_n$ 倍到第 $2$ 行的 $-a_2$ 倍加到第 $1$ 行，再将第 $1$ 行移到最后一行）
> $$
> \to\begin{pmatrix}-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\\0&0&0&\cdots&0\end{pmatrix}.
> $$
> 由此得原方程组的同解方程组为
> $$
> x_2=x_1,\ x_3=x_1,\ \cdots,\ x_n=x_1.
> $$
> 原方程组的一个基础解系为
> $$
> \alpha=(1,1,\cdots,1)^{\mathrm{T}}.
> $$
>
> 【评注】本题的难点在 $b=-\sum\limits_{i=1}^n a_i$ 时的讨论，事实上也可这样分析：此时系数矩阵的秩为 $n-1$（存在 $n-1$ 阶子式不为零），且显然 $\alpha=(1,1,\cdots,1)^{\mathrm{T}}$ 为方程组的一个非零解，即可作为基础解系。

### 2002 年 · 数学三 · 选择题第 3 题（选择，3 分）

设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times m$ 矩阵，则线性方程组 $(AB)x=0$（　　）
（A）当 $n>m$ 时仅有零解　　（B）当 $n>m$ 时必有非零解
（C）当 $m>n$ 时仅有零解　　（D）当 $m>n$ 时必有非零解

> [!success]- 答案与解析
> **答案**：（D）
>
> 【详解】方法 1：$A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times m$ 矩阵，则 $AB$ 是 $m$ 阶方阵，因
> $$
> r(AB)\le\min(r(A),r(B)).
> $$
> 当 $m>n$ 时，有 $r(AB)\le\min(r(A),r(B))\le n<m$（系数矩阵的秩小于未知数的个数），方程组 $(AB)x=0$ 必有非零解，故应选（D）。
>
> 方法 2：$B$ 是 $n\times m$ 矩阵，当 $m>n$ 时，则 $r(B)\le n<m$（系数矩阵的秩小于未知数的个数），方程组 $Bx=0$ 必有非零解，即存在 $x_0\ne 0$，使得 $Bx_0=0$，两边左乘 $A$，得 $ABx_0=0$，即 $ABx=0$ 有非零解，故选（D）。

### 2002 年 · 数学三 · 第九题（解答，8 分）

（本题满分 8 分）设齐次线性方程组
$$
\begin{cases}ax_1+bx_2+bx_3+\cdots+bx_n=0,\\bx_1+ax_2+bx_3+\cdots+bx_n=0,\\\cdots\cdots\cdots\\bx_1+bx_2+bx_3+\cdots+ax_n=0,\end{cases}
$$
其中 $a\ne 0,b\ne 0,n\ge 2$。试讨论 $a,b$ 为何值时，方程组仅有零解、有无穷多组解？在有无穷多组解时，求出全部解，并用基础解系表示全部解。

> [!success]- 答案与解析
> **答案**：（1）当 $a\ne b$ 且 $a\ne -(n-1)b$ 时，方程组仅有零解；（2）当 $a=b(\ne 0)$ 时，方程组有无穷多组解，全部解为 $X=k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $\xi_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\xi_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\cdots,\xi_{n-1}=(-1,0,\cdots,0,1)^{\mathrm{T}}$，$k_1,k_2,\cdots,k_{n-1}$ 为任意常数；（3）当 $a=-(n-1)b\ (b\ne 0)$ 时，方程组有无穷多组解，全部解为 $X=k(1,1,\cdots,1)^{\mathrm{T}}$，$k$ 为任意常数。
>
> 【详解】方法 1：对系数矩阵记为 $A$ 作初等行变换
> $$
> A=\begin{pmatrix}a&b&b&\cdots&b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{pmatrix}\xrightarrow[3\text{ 行}-1\text{ 行}]{\cdots\cdots\cdots}\begin{pmatrix}a&b&b&\cdots&b\\b-a&a-b&0&\cdots&0\\b-a&0&a-b&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\b-a&0&0&\cdots&a-b\end{pmatrix}.
> $$
> 当 $a=b(\ne 0)$ 时，$r(A)=1$，$AX=0$ 的同解方程组为 $x_1+x_2+\cdots+x_n=0$，基础解系中含有 $n-1$ 个（未知数的个数 $-$ 系数矩阵的秩）线性无关的解向量。取 $x_2,x_3,\cdots,x_n$ 为自由未知量，分别取 $x_2=1,x_3=0,\cdots,x_n=0$；$x_2=0,x_3=1,\cdots,x_n=0$；$\cdots$；$x_2=0,x_3=0,\cdots,x_n=1$，得方程组 $n-1$ 个线性无关的解
> $$
> \xi_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \xi_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\ \cdots,\ \xi_{n-1}=(-1,0,\cdots,0,1)^{\mathrm{T}},
> $$
> 为基础解系，方程组 $AX=0$ 的全部解为 $X=k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $k_i\ (i=1,2,\cdots,n-1)$ 是任意常数。
>
> 当 $a\ne b$ 时，
> $$
> A\xrightarrow[\cdots\cdots\cdots]{\text{各行除以 }(a-b)}\begin{pmatrix}a&b&b&\cdots&b\\-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\end{pmatrix}\xrightarrow[1\text{ 行减 }2\text{ 行}\times b,\ 1\text{ 行减 }3\text{ 行}\times b,\ \cdots,\ 1\text{ 行减 }n\text{ 行}\times b]{}\begin{pmatrix}a+(n-1)b&0&0&\cdots&0\\-1&1&0&\cdots&0\\-1&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-1&0&0&\cdots&1\end{pmatrix}.
> $$
> 当 $a\ne b$ 且 $a\ne -(n-1)b$ 时，$|A|=a+(n-1)b\ne 0$，$r(A)=n$，$AX=0$ 仅有零解。
>
> 当 $a=-(n-1)b$ 时，$r(A)=n-1$，$AX=0$ 的同解方程组是
> $$
> \begin{cases}-x_1+x_2=0,\\-x_1+x_3=0,\\\cdots\cdots\cdots\\-x_1+x_n=0.\end{cases}
> $$
> 基础解系中含有 $1$ 个线性无关的解向量，取 $x_1$ 为自由未知量，取 $x_1=1$，得方程组 $1$ 个非零解
> $$
> \xi=(1,1,\cdots,1)^{\mathrm{T}},
> $$
> 即其基础解系，故方程组的全部解为 $X=k\xi$，其中 $k$ 是任意常数。
>
> 方法 2：方程组的系数行列式
> $$
> |A|=\begin{vmatrix}a&b&b&\cdots&b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{vmatrix}\xrightarrow[\text{把第 }2,\cdots,n\text{ 列加到第 }1\text{ 列}]{}\begin{vmatrix}a+(n-1)b&b&b&\cdots&b\\a+(n-1)b&a&b&\cdots&b\\a+(n-1)b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\a+(n-1)b&b&b&\cdots&a\end{vmatrix}
> $$
> $$
> \xrightarrow[\text{提取第 }1\text{ 列的公因子}]{}\,[a+(n-1)b]\begin{vmatrix}1&b&b&\cdots&b\\1&a&b&\cdots&b\\1&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\1&b&b&\cdots&a\end{vmatrix}\xrightarrow[\text{第 }2,3,\cdots,n\text{ 行}-\text{第 }1\text{ 行}]{}\,[a+(n-1)b]\begin{vmatrix}1&b&b&\cdots&b\\0&a-b&0&\cdots&0\\0&0&a-b&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&a-b\end{vmatrix}
> $$
> $$
> =[a+(n-1)b](a-b)^{n-1}.
> $$
> （1）当 $a\ne b$ 且 $a\ne -(n-1)b$ 时，$|A|\ne 0$，$r(A)=n$，方程组只有零解。
>
> （2）当 $a=b(\ne 0)$ 时，
> $$
> A=\begin{pmatrix}a&a&a&\cdots&a\\a&a&a&\cdots&a\\a&a&a&\cdots&a\\\vdots&\vdots&\vdots&&\vdots\\a&a&a&\cdots&a\end{pmatrix}\xrightarrow[\text{第 }2,3,\cdots,n\text{ 行}-\text{第 }1\text{ 行}]{}\begin{pmatrix}a&a&a&\cdots&a\\0&0&0&\cdots&0\\0&0&0&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&0\end{pmatrix}\xrightarrow[1\text{ 行}\times\dfrac{1}{a}]{}\begin{pmatrix}1&1&1&\cdots&1\\0&0&0&\cdots&0\\0&0&0&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&0\end{pmatrix}.
> $$
> 方程组的同解方程组为
> $$
> x_1+x_2+\cdots+x_n=0.
> $$
> 基础解系中含有 $n-1$ 个线性无关的解向量，取 $x_2,x_3,\cdots,x_n$ 为自由未知量，分别取 $x_2=1,x_3=0,\cdots,x_n=0$；$x_2=0,x_3=1,\cdots,x_n=0$；$\cdots$；$x_2=0,x_3=0,\cdots,x_n=1$，得方程组 $n-1$ 个线性无关的解
> $$
> \xi_1=(-1,1,0,\cdots,0)^{\mathrm{T}},\ \xi_2=(-1,0,1,\cdots,0)^{\mathrm{T}},\ \cdots,\ \xi_{n-1}=(-1,0,\cdots,0,1)^{\mathrm{T}},
> $$
> 为基础解系，方程组 $AX=0$ 的全部解为 $X=k_1\xi_1+k_2\xi_2+\cdots+k_{n-1}\xi_{n-1}$，其中 $k_i\ (i=1,2,\cdots,n-1)$ 是任意常数。
>
> （3）当 $a=-(n-1)b\ (b\ne 0)$ 时，
> $$
> A=\begin{pmatrix}(1-n)b&b&b&\cdots&b\\b&(1-n)b&b&\cdots&b\\b&b&(1-n)b&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&(1-n)b\end{pmatrix}\xrightarrow[1,2,\cdots,n\text{ 行分别乘以 }\dfrac{1}{b}]{}\begin{pmatrix}1-n&1&1&\cdots&1\\1&1-n&1&\cdots&1\\1&1&1-n&\cdots&1\\\vdots&\vdots&\vdots&&\vdots\\1&1&1&\cdots&1-n\end{pmatrix}
> $$
> $$
> \xrightarrow[2,3,\cdots,n\text{ 行}-\text{第 }1\text{ 行}]{}\begin{pmatrix}1-n&1&1&\cdots&1\\n&-n&0&\cdots&0\\n&0&-n&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\n&0&0&\cdots&-n\end{pmatrix}\xrightarrow[\text{把第 }2,\cdots,n\text{ 行都分别乘以}\dfrac{1}{n}\text{ 依次加到第 }1\text{ 行}]{}\begin{pmatrix}0&0&0&\cdots&0\\1&-1&0&\cdots&0\\1&0&-1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\1&0&0&\cdots&-1\end{pmatrix},
> $$
> $r(A)=n-1$，其同解方程组是
> $$
> \begin{cases}x_1-x_2=0,\\x_1-x_3=0,\\\cdots\cdots\cdots\\x_1-x_n=0.\end{cases}
> $$
> 基础解系中含有 $1$ 个线性无关的解向量，取 $x_1$ 为自由未知量，取 $x_1=1$，得方程组 $1$ 个非零解
> $$
> \xi=(1,1,\cdots,1)^{\mathrm{T}},
> $$
> 即其基础解系，故方程组的全部解为 $X=k\xi$，其中 $k$ 是任意常数。

### 2001 年 · 数学三 · 选择题第 4 题（选择，3 分）

设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维列向量。若 $r\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}=r(A)$，则线性方程组（　　）

（A）$AX=\alpha$ 必有无穷多解　　（B）$AX=\alpha$ 必有唯一解

（C）$\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}\begin{pmatrix}X\\y\end{pmatrix}=0$ 仅有零解　　（D）$\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}\begin{pmatrix}X\\y\end{pmatrix}=0$ 必有非零解

> [!success]- 答案与解析
> **答案**：（D）
>
> 【详解】由题设，$A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维列向量，即 $\alpha^{\mathrm{T}}$ 是一维行向量，可知 $\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}$ 是 $n+1$ 阶矩阵。显然有
> $$
> r\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}=r(A)\le n<n+1,
> $$
> 即系数矩阵 $\begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}$ 不是列满秩，由齐次线性方程组有非零解的充要条件：系数矩阵非列满秩，可知齐次线性方程组
> $$
> \begin{pmatrix}A&\alpha\\\alpha^{\mathrm{T}}&0\end{pmatrix}\begin{pmatrix}X\\y\end{pmatrix}=0
> $$
> 必有非零解，应选（D）。

### 2000 年 · 数学三 · 选择题第 4 题（选择，3 分）

设 $A$ 为 $n$ 阶实矩阵，$A^{\mathrm{T}}$ 为 $A$ 的转置矩阵，则对于线性方程组（Ⅰ）：$AX=0$ 和（Ⅱ）$A^{\mathrm{T}}AX=0$，必有（　　）
（A）（Ⅱ）的解是（Ⅰ）的解，（Ⅰ）的解也是（Ⅱ）的解
（B）（Ⅱ）的解是（Ⅰ）的解，但（Ⅰ）的解不是（Ⅱ）的解
（C）（Ⅰ）的解不是（Ⅱ）的解，（Ⅱ）的解也不是（Ⅰ）的解
（D）（Ⅰ）的解是（Ⅱ）的解，但（Ⅱ）的解不是（Ⅰ）的解

> [!success]- 答案与解析
> **答案**：（A）
>
> 【详解】若 $\alpha$ 是方程组（Ⅰ）：$AX=0$ 的解，即 $A\alpha=0$，两边左乘 $A^{\mathrm{T}}$，得 $A^{\mathrm{T}}A\alpha=0$，即 $\alpha$ 也是方程组（Ⅱ）：$A^{\mathrm{T}}AX=0$ 的解，即（Ⅰ）的解也是（Ⅱ）的解。
>
> 若 $b$ 是方程组（Ⅱ）：$A^{\mathrm{T}}AX=0$ 的解，即 $A^{\mathrm{T}}Ab=0$，两边左乘 $b^{\mathrm{T}}$ 得
> $$
> b^{\mathrm{T}}A^{\mathrm{T}}Ab=(Ab)^{\mathrm{T}}Ab=0.
> $$
> $Ab$ 是一个向量，设 $Ab=[b_1,b_2,\cdots,b_n]^{\mathrm{T}}$，则
> $$
> (Ab)^{\mathrm{T}}Ab=\sum_{i=1}^n b_i^2=0.
> $$
> 故有 $b_i=0,\ i=1,2,\cdots,n$，从而有 $Ab=0$，即 $b$ 也是方程组（Ⅰ）：$AX=0$ 的解。
>
> 所以（Ⅰ）与（Ⅱ）同解，应选（A）。

### 1998 年 · 数学三 · 选择题第 3 题（选择，3 分）

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

### 1992 年 · 数学三 · 选择题第 3 题（选择，3 分）

设 $A$ 为 $m\times n$ 矩阵，齐次线性方程组 $Ax=0$ 仅有零解的充分条件是（　　）
（A）$A$ 的列向量线性无关
（B）$A$ 的列向量线性相关
（C）$A$ 的行向量线性无关
（D）$A$ 的行向量线性相关

> [!success]- 答案与解析
> **答案**：（A）.
>
> 【解析】齐次方程组 $Ax=0$ 只有零解 $\Leftrightarrow r(A)=n$.
> 由于 $r(A)=A$ 的行秩 $=A$ 的列秩，现 $A$ 是 $m\times n$ 矩阵，$r(A)=n$，即 $A$ 的列向量线性无关. 故应选（A）.
> 【相关知识点】对奇次线性方程组 $Ax=0$，有定理如下：
> 对矩阵 $A$ 按列分块，有 $A=(\alpha_1,\alpha_2,\cdots,\alpha_n)$，则 $Ax=0$ 的向量形式为
> $$
> x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n=0.
> $$
> 那么，
> $$
> Ax=0\text{ 有非零解}\Leftrightarrow \alpha_1,\alpha_2,\cdots,\alpha_n\text{ 线性相关}
> $$
> $$
> \Leftrightarrow r(\alpha_1,\alpha_2,\cdots,\alpha_n)<n\Leftrightarrow r(A)<n.
> $$

### 1992 年 · 数学一 · 选择题第 5 题（选择，3 分）

要使 $\xi_1=\begin{pmatrix}1\\0\\2\end{pmatrix},\xi_2=\begin{pmatrix}0\\1\\-1\end{pmatrix}$ 都是线性方程组 $AX=0$ 的解，只要系数矩阵 $A$ 为（　　）.

（A）$(-2\ 1\ 1)$
（B）$\begin{pmatrix}2&0&-1\\0&1&1\end{pmatrix}$
（C）$\begin{pmatrix}-1&0&2\\0&1&-1\end{pmatrix}$
（D）$\begin{pmatrix}0&1&-1\\4&-2&-2\\0&1&1\end{pmatrix}$

> [!success]- 答案与解析
> **答案**：（A）.
>
> 因为 $\xi_1$ 与 $\xi_2$ 线性无关，所以三元齐次线性方程组 $AX=0$ 的基础解系中至少含 2 个解向量，即 $3-r(A)\ge 2$，得 $r(A)\le 1$，而选项（B）（C）（D）中矩阵的秩都大于 1，所以均不对，只有选项（A）正确.

### 1992 年 · 数学三 · 第十题（解答，6 分）

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

### 1989 年 · 数学三 · 填空题第 3 题（填空，3 分）

若齐次线性方程组
$$
\begin{cases}\lambda x_1+x_2+x_3=0,\\ x_1+\lambda x_2+x_3=0,\\ x_1+x_2+x_3=0\end{cases}
$$
只有零解，则 $\lambda$ 应满足的条件是______.

> [!success]- 答案与解析
> **答案**：$\lambda\ne 1$.
>

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第四章 线性方程组|第四章 线性方程组]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
