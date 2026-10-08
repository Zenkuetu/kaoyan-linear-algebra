---
tags:
  - 基础
  - 线代
  - 考研数学
章节: "[[第四章 线性方程组|第四章 线性方程组]]"
层次: 基础
知识点ID: eq-nonhomo-crit
必要⇐:
  - "[[系数矩阵与增广矩阵的关系|系数矩阵与增广矩阵的关系]]"
  - "[[非齐次方程组的通解结构|非齐次方程组的通解结构]]"
---

# 非齐次方程组 Ax = b 的相容性判别

> <span class="oneline">​</span>**一句话**：有解 ⇔ r(A) = r(A,b)，两个秩一起比

**考试层次**：`基础` ｜ **章节**：[[第四章 线性方程组|第四章 线性方程组]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

**非齐次的相容性判别要解决的问题是：方程组摆在那儿，先弄清它到底有没有解。**
先看一组：

$$
\begin{cases} x_1 + 2x_2 + 3x_3 = 1 \\ 2x_1 + 4x_2 + 6x_3 = 4 \end{cases}
$$

第二行的系数是第一行的 $2$ 倍，可右端的 $4$ 不是 $1$ 的 $2$ 倍 —— 只要第一个方程成立，左边乘 $2$ 就该等于 $2$，第二个方程偏偏要求它等于 $4$，无论 $x_1, x_2, x_3$ 怎么取都不可能同时满足，所以它**无解**。
麻烦在于：这种现象全靠肉眼比对"系数成比例、右端不成比例"才看得出来，稍微变个样子就失灵。比如

$$
\begin{cases} x_1 + x_2 + x_3 = 1 \\ x_1 + 2x_2 + 3x_3 = 2 \\ 2x_1 + 3x_2 + 4x_3 = 3 \end{cases}
$$

三行谁也不是谁的倍数，肉眼看不出名堂，可它其实有解（$x = (0,1,0)$ 就是一个解）。所以需要的是一条**不用靠运气、直接算出来**的判据。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

"肉眼比对"靠不住，常见的土办法各有毛病：

- <span class="pit">​</span>**坑一 · 靠看系数是否成比例**：只有"某两行系数成比例"这种最扎眼的情形能看出来，行数一多、或者像上面那组一样三行互不成比例，就完全没有主意（而那组其实有解）；
- <span class="pit">​</span>**坑二 · 闷头往下解，撞上矛盾再说**：解到某一步冒出 $0 = 1$ 才发现无解，前面全白算；要是题目只问"$a$ 取什么值时有解"，把解一股脑解出来纯属浪费；
- <span class="pit">​</span>**坑三 · 只算系数矩阵的秩就下结论**：算出 $r(A) = 2 < 3 = n$ 就判"有无穷多解"—— 忘了无解的情形同样可以有 $r(A) < n$：把上面那组的右端换成 $(1,2,4)$，$r(A)$ 还是 $2$，方程组却根本无解。

## <span class="hx hx-intro">🟢</span> 三、于是引入：非齐次方程组 Ax = b 的相容性判别

于是引入**非齐次方程组的相容性判别**。非齐次方程组记作 $Ax = b$（$b \neq 0$），把右端那一列接到系数矩阵右边得到增广矩阵记作 $(A,b)$，然后比较两个秩：

- $r(A) = r(A,b)$：有解（这时也叫"相容"）；
- $r(A) < r(A,b)$：无解，而且此时一定正好差 $1$，即 $r(A,b) = r(A) + 1$。

有解时再看未知数个数 $n$：$r(A) = r(A,b) = n$ 是唯一解，$r(A) = r(A,b) < n$ 是无穷多解（自由未知量 $n - r(A)$ 个）。

上面那三个坑，逐个补上：

- <span class="fix">​</span>**坑一补上 · 化成行阶梯形，一眼定性**：无解那组消元时 $r_2 - 2r_1$ 之后第二行变成左边全 $0$、右端是 $2$，也就是 $0 = 2$，矛盾就露出来了；有解那组消完是 $0 = 0$，不是矛盾，所以有解；
- <span class="fix">​</span>**坑二补上 · 判据只用两个秩，不必把解解出来**：含参数的题（问 $a$ 取何值有解）就是把 $r(A)$ 与 $r(A,b)$ 都化成含 $a$ 的表达式，再令两者相等，比硬解省一大截；
- <span class="fix">​</span>**坑三补上 · 两个秩一起看，别只算一个**：$r(A) < n$ 只能说明"若有解则有无穷多解"，判不了有没有解；右端换成 $(1,2,4)$ 后 $r(A) = 2$、$r(A,b) = 3$，两者不等，直接判无解。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">​</span>**定义**：$Ax = b$（$b \neq 0$）叫非齐次方程组；把常数列接到系数矩阵右边得到的 $(A,b)$ 叫增广矩阵；有解也叫相容。
<span class="lab">​</span>**判定流程**：
1. 写出增广矩阵 $(A,b)$，只用初等行变换化到行阶梯形（不许作列变换）；
2. 数主元：系数部分的主元个数是 $r(A)$，整个增广矩阵的主元个数是 $r(A,b)$；
3. 比大小：相等则有解；$r(A) < r(A,b)$ 则无解，标志就是出现 $(0,0,\dots,0 \mid c)$ 且 $c \neq 0$ 这样一行；
4. 有解时再与 $n$ 比：$r(A) = n$ 唯一解，$r(A) < n$ 无穷多解。
<span class="lab">​</span>**三种情形一览**：$r(A) < r(A,b)$ 无解；$r(A) = r(A,b) = n$ 唯一解；$r(A) = r(A,b) < n$ 无穷多解（对应的齐次方程组一定有非零解，所以说"无穷多"）。
<span class="lab">​</span>**算例**：判断下面方程组有没有解（$a$ 为参数）。

$$
\begin{cases} x_1 + x_2 + x_3 = 1 \\ x_1 + 2x_2 + 3x_3 = 2 \\ 2x_1 + 3x_2 + 4x_3 = 3 + a \end{cases}
$$

$$
(A,b) = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 2 \\ 2 & 3 & 4 & 3 + a \end{pmatrix} \xrightarrow{\;r_2 - r_1,\ r_3 - 2r_1\;} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 1 \\ 0 & 1 & 2 & 1 + a \end{pmatrix} \xrightarrow{\;r_3 - r_2\;} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & a \end{pmatrix}
$$

<span class="lab">​</span>**读解**：最后一行给出 $0 = a$，而 $r(A) = 2$ 与 $a$ 无关。$a \neq 0$ 时 $r(A,b) = 3 > r(A)$，无解；$a = 0$ 时 $r(A,b) = 2 = r(A)$，有解，且 $r(A) = 2 < 3 = n$，所以是无穷多解。
<span class="lab">​</span>**验算**：$a = 0$ 时取 $x_3 = 0$，由 $x_2 + 2x_3 = 1$ 得 $x_2 = 1$，再由 $x_1 + x_2 + x_3 = 1$ 得 $x_1 = 0$；把 $(0,1,0)$ 代回第三个方程，左边 $0 + 3 + 0 = 3$，右端 $3 + 0 = 3$，对上。
<span class="lab">​</span>**上限提醒**：增广矩阵只比系数矩阵多一列，所以 $r(A,b)$ 最多比 $r(A)$ 大 $1$，不会出现差 $2$ 的情形。
<span class="pit">​</span>**易错提醒**：别只比 $r(A)$ 与 $n$，那只能判"唯一还是无穷多"，判不了"有没有解"。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：给含参数的非齐次方程组，问"无解 / 有唯一解 / 有无穷多解"分别对应参数的什么取值，做法就是比 $r(A)$ 与 $r(A,b)$，再与 $n$ 比。
2. 填空题：给出行阶梯形让判断解的情形，或者由"方程组无解"反求参数（常令最后一行出现 $0 = c$ 型矛盾，$c \neq 0$）。
3. 解答题：含参数的线性方程组讨论题（数一、数二、数三都常考）—— 先判相容性，再在相容的情形里写通解。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 只比较 r(A) 与 n 而漏掉增广矩阵的秩

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 判：$\begin{cases} x_1 + 2x_2 + 3x_3 = 1 \\ 2x_1 + 4x_2 + 6x_3 = 4 \end{cases}$ 有解吗？依据是哪两个秩？
- [ ] 算：$\begin{cases} x_1 + x_2 + x_3 = 1 \\ x_1 + 2x_2 + 3x_3 = 2 \\ 2x_1 + 3x_2 + 4x_3 = 3 + a \end{cases}$ 中 $a$ 取什么值时有解？
- [ ] 判：已知 $r(A) = 2$、$n = 3$，能不能直接断定方程组有无穷多解？

> [!quote]- 🕸️ 八、关系网（点开查看 6 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 本点 ⇒ 对方 | 🟪 必要不充分（⇐） | [[系数矩阵与增广矩阵的关系]] | 相容性判别用系数与增广矩阵的秩 |
> | 本点 ⇒ 对方 | 🟪 必要不充分（⇐） | [[非齐次方程组的通解结构]] | 先判有解再写通解 |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[高斯消元法与行阶梯形]] | 化行最简形后比较两个秩 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[齐次与非齐次解的关系]] | 还需相容性判别 |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[克拉默法则]] | ｜A｜≠0 ⇒ 唯一解 |
> | 对方 ⇒ 本点 | 🟪 必要不充分（⇐） | [[方程组的几何意义（平面与直线）]] | 几何形态由秩决定 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - 本点 ⇒ 🟪 必要 ⇒ [[系数矩阵与增广矩阵的关系]]——相容性判别用系数与增广矩阵的秩
> - 本点 ⇒ 🟪 必要 ⇒ [[非齐次方程组的通解结构]]——先判有解再写通解
> - [[高斯消元法与行阶梯形]] ⇒ 🟧 充分 ⇒ 本点——化行最简形后比较两个秩
> - [[齐次与非齐次解的关系]] ⇒ 🟪 必要 ⇒ 本点——还需相容性判别
> - [[克拉默法则]] ⇒ 🟧 充分 ⇒ 本点——｜A｜≠0 ⇒ 唯一解
> - [[方程组的几何意义（平面与直线）]] ⇒ 🟪 必要 ⇒ 本点——几何形态由秩决定

## <span class="hx hx-exam">📝</span> 九、真题（2010–2022）

### 2022 年 · 数学三 · 第 6 题（选择，5 分）

设矩阵
$$
A=\begin{pmatrix}1&1&1\\1&a&a^2\\1&b&b^2\end{pmatrix},\quad b=\begin{pmatrix}1\\2\\4\end{pmatrix},
$$
则线性方程组 $Ax=b$ 的解的情况为（ ）

（A）无解　（B）有解　（C）有无穷多解或无解　（D）有唯一解或无解

> [!success]- 答案与解析
> **答案**：（D）
>
> 本题主要考查线性方程组的解的情况。
>
> 本题的方程组的系数矩阵带参数，故需要分情况讨论。但若注意到系数矩阵行列式与范德蒙德行列式有关，则有一种情况实际上是很好判断的。
>
> **范德蒙德行列式** 形如 $V_n=\begin{vmatrix}1&1&\cdots&1\\x_1&x_2&\cdots&x_n\\x_1^2&x_2^2&\cdots&x_n^2\\\vdots&\vdots&&\vdots\\x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}\end{vmatrix}$ 的 $n$ 阶行列式被称为范德蒙德行列式，$V_n=\prod\limits_{n\ge i>j\ge 1}(x_i-x_j)$。不难发现，若存在 $x_i=x_j\ (i\ne j)$，则 $V_n=0$，否则 $V_n\ne 0$。
>
> 解 （法一）注意到
> $$
> |A|=\begin{vmatrix}1&1&1\\1&a&a^2\\1&b&b^2\end{vmatrix}=\begin{vmatrix}1&1&1\\1&a&b\\1&a^2&b^2\end{vmatrix}=(b-a)(b-1)(a-1).
> $$
> 当 $a\ne 1,b\ne 1$，且 $a\ne b$ 时，$|A|\ne 0$。由克拉默法则可知，此时方程组 $Ax=b$ 有唯一解。
>
> 当 $a=1$ 时，
> $$
> (A,b)=\begin{pmatrix}1&1&1&1\\1&1&1&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\1&b&b^2&4\end{pmatrix}.
> $$
> $r(A,b)\ne r(A)$，方程组无解。同理可得，当 $b=1$ 时，$r(A,b)\ne r(A)$，方程组无解。
>
> 当 $a=b$ 时，
> $$
> (A,b)=\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\0&0&0&2\end{pmatrix}.
> $$
> $r(A,b)\ne r(A)$，方程组无解。
>
> 综上所述，方程组 $Ax=b$ 的解的情况只有两种可能，有唯一解或无解。应选 D。
>
> （法二）直接对增广矩阵 $(A,b)$ 作初等行变换。
> $$
> (A,b)=\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&a-1&a^2-1&1\\0&b-1&b^2-1&3\end{pmatrix}.
> $$
> 当 $a=b=1$ 时，$r(A)=1,r(A,b)=2$，方程组无解。
>
> 当 $a=1,b\ne 1$ 或 $a\ne 1,b=1$ 时，$r(A)=2,r(A,b)=3$，方程组无解。
>
> 当 $a=b$，但均不等于 1 时，$r(A)=2,r(A,b)=3$，方程组无解。
>
> 当 $a\ne 1,b\ne 1$，且 $a\ne b$ 时，$r(A)=r(A,b)=3$。方程组有唯一解。
>
> 综上所述，方程组 $Ax=b$ 的解的情况只有两种可能，有唯一解或无解。应选 D。
>
> <small>解析出处：《2022 数学三解析》第 11–12 页</small>

### 2022 年 · 数学二 · 第 9 题（选择，5 分）

设矩阵
$$
A=\begin{pmatrix}1&1&1\\1&a&a^2\\1&b&b^2\end{pmatrix},\quad b=\begin{pmatrix}1\\2\\4\end{pmatrix},
$$
则线性方程组 $Ax=b$ 的解的情况为

（A）无解　　（B）有解　　（C）有无穷多解或无解　　（D）有唯一解或无解

> [!success]- 答案与解析
> **答案**：（D）
>
> 【分析】本题主要考查线性方程组的解的情况.
>
> 本题的方程组的系数矩阵带参数，故需要分情况讨论. 但若注意到系数矩阵行列式与范德蒙德行列式有关，则有一种情况实际上是很好判断的.
>
> 范德蒙德行列式：形如
> $$
> V_n=\begin{vmatrix}1&1&\cdots&1\\x_1&x_2&\cdots&x_n\\x_1^2&x_2^2&\cdots&x_n^2\\\vdots&\vdots&&\vdots\\x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}\end{vmatrix}
> $$
> 的 $n$ 阶行列式被称为范德蒙德行列式，$V_n=\prod\limits_{n\ge i>j\ge 1}(x_i-x_j)$. 不难发现，若存在 $x_i=x_j\ (i\ne j)$，则 $V_n=0$，否则 $V_n\ne 0$.
>
> 【解】（法一）注意到
> $$
> |A|=\begin{vmatrix}1&1&1\\1&a&a^2\\1&b&b^2\end{vmatrix}=\begin{vmatrix}1&1&1\\1&a&b\\1&a^2&b^2\end{vmatrix}=(b-a)(b-1)(a-1).
> $$
> 当 $a\ne 1,b\ne 1$，且 $a\ne b$ 时，$|A|\ne 0$. 由克拉默法则可知，此时方程组 $Ax=b$ 有唯一解.
>
> 当 $a=1$ 时，
> $$
> (A,b)=\begin{pmatrix}1&1&1&1\\1&1&1&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\1&b&b^2&4\end{pmatrix}.
> $$
> $r(A,b)\ne r(A)$，方程组无解. 同理可得，当 $b=1$ 时，$r(A,b)\ne r(A)$，方程组无解.
>
> 当 $a=b$ 时，
> $$
> (A,b)=\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\0&0&0&2\end{pmatrix}.
> $$
> $r(A,b)\ne r(A)$，方程组无解.
>
> 综上所述，方程组 $Ax=b$ 的解的情况只有两种可能，有唯一解或无解. 应选 D.
>
> （法二）直接对增广矩阵 $(A,b)$ 作初等行变换.
> $$
> (A,b)=\begin{pmatrix}1&1&1&1\\1&a&a^2&2\\1&b&b^2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&a-1&a^2-1&1\\0&b-1&b^2-1&3\end{pmatrix}.
> $$
> 当 $a=b=1$ 时，$r(A)=1$，$r(A,b)=2$，方程组无解.
>
> 当 $a=1,b\ne 1$ 或 $a\ne 1,b=1$ 时，$r(A)=2$，$r(A,b)=3$，方程组无解.
>
> 当 $a=b$，但均不等于 $1$ 时，$r(A)=2$，$r(A,b)=3$，方程组无解.
>
> 当 $a\ne 1,b\ne 1$，且 $a\ne b$ 时，$r(A)=r(A,b)=3$. 方程组有唯一解.
>
> 综上所述，方程组 $Ax=b$ 的解的情况只有两种可能，有唯一解或无解. 应选 D.
>
> <small>解析出处：《2022 数学二解析》第 14–15 页</small>

### 2019 年 · 数学一 · 第 6 题（选择，4 分）

有 3 张平面两两相交，交线相互平行，它们的方程
$$
a_{i1}x+a_{i2}y+a_{i3}z=d_i\quad (i=1,2,3)
$$
组成的线性方程组的系数矩阵和增广矩阵分别记为 $A,\overline{A}$，则（　）

（A）$r(A)=2,\ r(\overline{A})=3$　（B）$r(A)=2,\ r(\overline{A})=2$　（C）$r(A)=1,\ r(\overline{A})=2$　（D）$r(A)=1,\ r(\overline{A})=1$

> [!success]- 答案与解析
> **答案**：（A）
>
> $$
> A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix},\quad \overline{A}=\begin{pmatrix}a_{11}&a_{12}&a_{13}&d_1\\a_{21}&a_{22}&a_{23}&d_2\\a_{31}&a_{32}&a_{33}&d_3\end{pmatrix},
> $$
> 因为任两个平面不平行，所以 $r(A)\ge 2$。
>
> 又因为三个平面没有公共的交点，所以 $r(A)<r(\overline{A})$，
>
> 再由 $r(A)\le 3$ 得 $r(A)=2,\ r(\overline{A})=3$，应选（A）。
>
> <small>解析出处：《2019 数学一解析》第 2 页</small>

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
>
> <small>解析出处：《2016 数学一解析》第 6–8 页</small>

### 2016 年 · 数学三 · 第 20 题（解答，11 分）

（本题满分 11 分）设矩阵 $A=\begin{pmatrix}1&1&1-a\\1&0&a\\a+1&1&a+1\end{pmatrix}$，$\beta=\begin{pmatrix}0\\1\\2a-2\end{pmatrix}$，且方程组 $Ax=\beta$ 无解.

（Ⅰ）求 $a$ 的值；

（Ⅱ）求方程组 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解.

> [!success]- 答案与解析
> **答案**：$a=0$；$x=\begin{pmatrix}1\\-2\\0\end{pmatrix}+k\begin{pmatrix}0\\-1\\1\end{pmatrix}$（$k$ 为任意常数）
>
> （Ⅰ）对矩阵 $(A\mid\beta)$ 施以初等行变换
> $$
> (A\mid\beta)=\left(\begin{array}{ccc|c}1&1&1-a&0\\1&0&a&1\\a+1&1&a+1&2a-2\end{array}\right)\to\left(\begin{array}{ccc|c}1&1&1-a&0\\0&-1&2a-1&1\\0&0&-a^2+2a&a-2\end{array}\right),
> $$
> 由方程组无解知，秩 $(A\mid\beta)>$ 秩 $A$，即 $-a^2+2a=0$，且 $a-2\ne0$，解得 $a=0$.
>
> （Ⅱ）对矩阵 $(A^{\mathrm{T}}A\mid A^{\mathrm{T}}\beta)$ 施以初等行变换
> $$
> (A^{\mathrm{T}}A\mid A^{\mathrm{T}}\beta)=\left(\begin{array}{ccc|c}3&2&2&-1\\2&2&2&-2\\2&2&2&-2\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&0&1\\0&1&1&-2\\0&0&0&0\end{array}\right),
> $$
> 所以，方程组 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解
> $$
> x=\begin{pmatrix}1\\-2\\0\end{pmatrix}+k\begin{pmatrix}0\\-1\\1\end{pmatrix}\quad(k\ \text{为任意常数}).
> $$
>
> <small>解析出处：《2016 数学三真题答案解析》第 5 页</small>

### 2015 年 · 数学一 · 第 5 题（选择，4 分）

设矩阵 $A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}$，$b=\begin{pmatrix}1\\d\\d^2\end{pmatrix}$。若集合 $\Omega=\{1,2\}$，则线性方程组 $Ax=b$ 有无穷多解的充分必要条件为（　）

（A）$a\notin\Omega,\ d\notin\Omega$　（B）$a\notin\Omega,\ d\in\Omega$　（C）$a\in\Omega,\ d\notin\Omega$　（D）$a\in\Omega,\ d\in\Omega$

> [!success]- 答案与解析
> **答案**：（D）
>
> 因为 $Ax=b$ 有无数个解，所以 $r(A)=r(\overline{A})<3$，由
> $$
> |A|=\begin{vmatrix}1&1&1\\1&2&a\\1&4&a^2\end{vmatrix}=(a-1)(a-2)=0
> $$
> 得 $a=1,\ a=2$；
>
> 当 $a=1$ 时，
> $$
> \overline{A}=\begin{pmatrix}1&1&1&1\\1&2&1&d\\1&4&1&d^2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&0&d-1\\0&3&0&d^2-1\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&0&d-1\\0&0&0&d^2-3d+2\end{pmatrix},
> $$
> 因为方程组有无数个解，所以 $d=1$ 或 $d=2$；
>
> 当 $a=2$ 时，
> $$
> \overline{A}=\begin{pmatrix}1&1&1&1\\1&2&2&d\\1&4&4&d^2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&1&d-1\\0&3&3&d^2-1\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&1&d-1\\0&0&0&d^2-3d+2\end{pmatrix},
> $$
> 因为方程组有无数个解，所以 $d=1$ 或 $d=2$，应选（D）。
>
> > 方法点评：本题考查非齐次线性方程组的基本理论。本题非齐次线性方程组有无数个解的两个关键点为：$r(A)<3$ 及 $r(A)=r(\overline{A})$。
>
> <small>解析出处：《2015 数学一解析》第 1–2 页</small>

### 2015 年 · 数学三 · 第 5 题（选择，4 分）

设矩阵 $A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}$，$b=\begin{pmatrix}1\\d\\d^2\end{pmatrix}$. 若集合 $\Omega=\{1,2\}$，则线性方程组 $Ax=b$ 有无穷多解的充分必要条件为（　）

（A）$a\notin \Omega,\ d\notin \Omega$.　（B）$a\notin \Omega,\ d\in \Omega$.　（C）$a\in \Omega,\ d\notin \Omega$.　（D）$a\in \Omega,\ d\in \Omega$.

> [!success]- 答案与解析
> **答案**：（D）
>
> $$
> |A|=\begin{vmatrix}1&1&1\\1&2&a\\1&4&a^2\end{vmatrix}=(a-2)(a-1)(2-1)=(a-2)(a-1).
> $$
> 由线性方程组有无穷多解，得 $|A|=0$，即 $a=1$ 或 $a=2$.
>
> 当 $a=1$ 时，
> $$
> (A,b)\to\begin{pmatrix}1&1&1&1\\0&1&0&d-1\\0&0&0&(d-1)(d-2)\end{pmatrix},
> $$
> 由题意，知 $r(A)=r(A,b)<3$，即 $d=1$ 或 $d=2$.
>
> 同理，当 $a=2$ 时，
> $$
> (A,b)\to\begin{pmatrix}1&1&1&1\\0&1&1&d-1\\0&0&0&(d-1)(d-2)\end{pmatrix},
> $$
> 由题意，知 $r(A)=r(A,b)<3$，即 $d=1$ 或 $d=2$.
>
> 故应选 D.
>
> <small>解析出处：《2015 数学三真题答案解析》第 2 页</small>

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
>
> <small>解析出处：《2013 年数学（三）试题答案》第 8 页</small>

### 2012 年 · 数学三 · 第 20 题（解答，11 分）

（本题满分 11 分）设
$$
A=\begin{pmatrix}1&a&0&0\\0&1&a&0\\0&0&1&a\\a&0&0&1\end{pmatrix},\qquad \beta=\begin{pmatrix}1\\-1\\0\\0\end{pmatrix}.
$$
（Ⅰ）计算行列式 $|A|$；

（Ⅱ）当实数 $a$ 为何值时，方程组 $Ax=\beta$ 有无穷多解，并求其通解。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$|A|=1-a^4$；（Ⅱ）$a=-1$ 时方程组有无穷多解，通解为 $x=k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}-1\\0\\0\\0\end{pmatrix}$（$k$ 为任意常数）。
>
> （Ⅱ）对方程组的增广矩阵作初等行变换：
> $$
> \begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\a&0&0&1&0\end{pmatrix}
> \to\begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&-a^2&0&1&-a\end{pmatrix}
> \to\begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&0&a^3&1&-a-a^2\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&0&0&1-a^4&-a-a^2\end{pmatrix}.
> $$
> 要使得原线性方程组有无穷多解，则有 $1-a^4=0$ 及 $-a-a^2=0$，可知 $a=-1$。
>
> 此时原线性方程组增广矩阵为 $\begin{pmatrix}1&-1&0&0&1\\0&1&-1&0&-1\\0&0&1&-1&0\\0&0&0&0&0\end{pmatrix}$，进一步化为行最简形得 $\begin{pmatrix}1&0&0&-1&0\\0&1&0&-1&-1\\0&0&1&-1&0\\0&0&0&0&0\end{pmatrix}$，
>
> 可知导出组的基础解系为 $\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$，非齐次方程的特解为 $\begin{pmatrix}-1\\0\\0\\0\end{pmatrix}$，故其通解为
> $$
> x=k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}-1\\0\\0\\0\end{pmatrix}.
> $$
>
> <small>解析出处：《2012 年数学（三）试题答案》第 9–10 页</small>

### 2010 年 · 数学一 · 第 20 题（解答，11 分）

（本题满分 11 分）设

$$
A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix},\quad b=\begin{pmatrix}a\\1\\1\end{pmatrix}.
$$

已知线性方程组 $Ax=b$ 存在 2 个不同的解．

（Ⅰ）求 $\lambda,a$；

（Ⅱ）求方程组 $Ax=b$ 的通解．

> [!success]- 答案与解析
> **答案**：（Ⅰ）$\lambda=-1$，$a=-2$；（Ⅱ）$x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac{3}{2}\\-\frac{1}{2}\\0\end{pmatrix}$（$k$ 为任意常数）．
>
> （Ⅰ）因为线性方程组 $AX=b$ 存在两个不同解，所以 $r(A)<3$，即 $|A|=0$，解得 $\lambda=-1$ 或 $\lambda=1$．
>
> 当 $\lambda=-1$ 时，
>
> $$
> \overline{A}=\begin{pmatrix}-1&1&1&\mid&a\\0&-2&0&\mid&1\\1&1&-1&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&-1&\mid&1\\0&2&0&\mid&-1\\0&2&0&\mid&a+1\end{pmatrix}\to\begin{pmatrix}1&1&-1&\mid&1\\0&2&0&\mid&-1\\0&0&0&\mid&a+2\end{pmatrix},
> $$
>
> 因为 $r(A)=r(\overline{A})<3$，所以 $a=-2$；
>
> 当 $\lambda=1$ 时，
>
> $$
> \overline{A}=\begin{pmatrix}1&1&1&\mid&a\\0&0&0&\mid&1\\1&1&1&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&1\\0&0&0&\mid&1\\0&0&0&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&1\\0&0&0&\mid&1\\0&0&0&\mid&0\end{pmatrix},
> $$
>
> 显然 $r(A)\ne r(\overline{A})$，所以 $\lambda\ne 1$，故 $\lambda=-1$，$a=-2$．
>
> （Ⅱ）由
>
> $$
> \overline{A}\to\begin{pmatrix}1&0&-1&\mid&\frac{3}{2}\\0&1&0&\mid&-\frac{1}{2}\\0&0&0&\mid&0\end{pmatrix},
> $$
>
> 得方程组 $AX=b$ 的通解为
>
> $$
> X=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac{3}{2}\\-\frac{1}{2}\\0\end{pmatrix}\quad (k\ \text{为任意常数}).
> $$
>
> <small>解析出处：《2010 数学一解析》第 9 页</small>

### 2010 年 · 数学二 · 第 22 题（解答，11 分）

设
$$
A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix},\quad b=\begin{pmatrix}a\\1\\1\end{pmatrix}.
$$
已知线性方程组 $Ax=b$ 存在两个不同的解.

（Ⅰ）求 $\lambda,a$；

（Ⅱ）求方程组 $Ax=b$ 的通解.

> [!success]- 答案与解析
> **答案**：（Ⅰ）$\lambda=-1,\ a=-2$；（Ⅱ）$x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac{3}{2}\\-\frac{1}{2}\\0\end{pmatrix}$（$k$ 为任意常数）
>
> 因为方程组有两个不同的解，所以可以判断方程组增广矩阵的秩小于 3，进而可以通过秩的关系求解方程组中未知参数，有以下两种方法.
>
> 方法 1：（Ⅰ）已知 $Ax=b$ 有 2 个不同的解，故 $r(A)=r(\overline{A})<3$，对增广矩阵进行初等行变换，得
> $$
> \overline{A}=\begin{pmatrix}\lambda&1&1&a\\0&\lambda-1&0&1\\1&1&\lambda&1\end{pmatrix}\to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\\lambda&1&1&a\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\0&1-\lambda&1-\lambda^2&a-\lambda\end{pmatrix}\to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\0&0&1-\lambda^2&a-\lambda+1\end{pmatrix}
> $$
> 当 $\lambda=1$ 时，
> $$
> \overline{A}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\0&0&0&a\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\0&0&0&0\end{pmatrix},
> $$
> 此时，$r(A)\ne r(\overline{A})$，故 $Ax=b$ 无解（舍去）.
>
> 当 $\lambda=-1$ 时，
> $$
> \overline{A}\to\begin{pmatrix}1&1&-1&1\\0&-2&0&1\\0&0&0&a+2\end{pmatrix},
> $$
> 由于 $r(A)=r(\overline{A})<3$，所以 $a=-2$，故 $\lambda=-1$，$a=-2$.
>
> 方法 2：已知 $Ax=b$ 有 2 个不同的解，故 $r(A)=r(\overline{A})<3$，因此 $|A|=0$，即
> $$
> |A|=\begin{vmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{vmatrix}=(\lambda-1)^2(\lambda+1)=0,
> $$
> 知 $\lambda=1$ 或 $-1$.
>
> 当 $\lambda=1$ 时，$r(A)=1\ne r(\overline{A})=2$，此时，$Ax=b$ 无解，因此 $\lambda=-1$. 由 $r(A)=r(\overline{A})$，得 $a=-2$.
>
> （Ⅱ）对增广矩阵做初等行变换
> $$
> \overline{A}=\begin{pmatrix}-1&1&1&-2\\0&-2&0&1\\1&1&-1&1\end{pmatrix}\to\begin{pmatrix}1&-1&-1&2\\0&2&0&-1\\0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&-1&\frac{3}{2}\\0&1&0&-\frac{1}{2}\\0&0&0&0\end{pmatrix}
> $$
> 可知原方程组等价为 $\begin{cases}x_1-x_3=\frac{3}{2},\\x_2=-\frac{1}{2},\end{cases}$ 写成向量的形式，即
> $$
> \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=x_3\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac{3}{2}\\-\frac{1}{2}\\0\end{pmatrix}.
> $$
> 因此 $Ax=b$ 的通解为 $x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac{3}{2}\\-\frac{1}{2}\\0\end{pmatrix}$，其中 $k$ 为任意常数.
>
> <small>解析出处：《2005—2013 考研数二真题答案解析》第 80–82 页</small>

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第四章 线性方程组|第四章 线性方程组]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
