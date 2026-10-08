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

## <span class="hx hx-exam">📝</span> 九、真题（1987–2026）

### 1987 年 · 数学一 · 第九大题（解答，8 分）

问 $a,b$ 为何值时，线性方程组
$$
\begin{cases}x_1+x_2+x_3+x_4=0,\\x_2+2x_3+2x_4=1,\\-x_2+(a-3)x_3-2x_4=b,\\3x_1+2x_2+x_3+ax_4=-1\end{cases}
$$
有唯一解？无解？有无穷多个解？并求出有无穷多个解时的通解.

> [!success]- 答案与解析
> **答案**：
> 当 $a\ne 1$，$b$ 为任意常数时，方程组有唯一解；当 $a=1,b\ne -1$ 时，方程组无解；当 $a=1,b=-1$ 时，方程组有无穷多个解，通解为
> $$
> X=k_1\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}+k_2\begin{pmatrix}1\\-2\\0\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\0\\0\end{pmatrix}\quad(k_1,k_2\text{ 为任意常数}).
> $$
>
> $$
> \overline{A}=\begin{pmatrix}1&1&1&1&0\\0&1&2&2&1\\0&-1&a-3&-2&b\\3&2&1&a&-1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&0\\0&1&2&2&1\\0&-1&a-3&-2&b\\0&-1&-2&a-3&-1\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&1&1&1&0\\0&1&2&2&1\\0&0&a-1&0&b+1\\0&0&0&a-1&0\end{pmatrix},
> $$
> 当 $a\ne 1$，$b$ 为任意常数时，方程组有唯一解；当 $a=1,b\ne -1$ 时，方程组无解；当 $a=1,b=-1$ 时，方程组有无数个解，将 $a,b$ 代入后得出
> $$
> \overline{A}\to\begin{pmatrix}1&0&-1&-1&-1\\0&1&2&2&1\\0&0&0&0&0\\0&0&0&0&0\end{pmatrix},
> $$
> 得方程组的通解为
> $$
> X=k_1\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}+k_2\begin{pmatrix}1\\-2\\0\\1\end{pmatrix}+\begin{pmatrix}-1\\1\\0\\0\end{pmatrix}\quad(k_1,k_2\text{ 为任意常数}).
> $$

### 1988 年 · 数学三 · 第七题（解答，8 分）

已知线性方程组
$$
\begin{cases}x_1+x_2+2x_3+3x_4=1,\\ x_1+3x_2+6x_3+x_4=3,\\ 3x_1-x_2-k_1x_3+15x_4=3,\\ x_1-5x_2-10x_3+12x_4=k_2.\end{cases}
$$
问 $k_1$ 和 $k_2$ 各取何值时，方程组无解？有唯一解？有无穷多解？在方程组有无穷多解的情况下，试求出一般解.

> [!success]- 答案与解析
> **答案**：当 $k_1\ne 2$ 时，方程组有唯一解；当 $k_1=2$ 而 $k_2\ne 1$ 时，方程组无解；当 $k_1=2$ 且 $k_2=1$ 时，方程组有无穷多解，其一般解为 $x_1=-8$，$x_2=3-2c$，$x_3=c$，$x_4=2$，其中 $c$ 为任意常数．
>
> 解：以 $A$ 表示方程组的系数矩阵，以 $(A|B)$ 表示增广矩阵，
> $$
> (A|B)=\begin{pmatrix}1&1&2&3&1\\1&3&6&1&3\\3&-1&-k_1&15&3\\1&-5&-10&12&k_2\end{pmatrix}\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&-k_1+2&2&4\\0&0&0&3&k_2+5\end{pmatrix},
> $$
> 故当 $k_1\ne 2$ 时，$R(A)=R(A|B)=4$，方程组有唯一解；
> 当 $k_1=2$ 时，有
> $$
> (A|B)\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&0&2&4\\0&0&0&3&k_2+5\end{pmatrix}\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&0&1&2\\0&0&0&0&k_2-1\end{pmatrix},
> $$
> 这时，若 $k_2\ne 1$，则 $R(A)=3<R(A|B)=4$，故方程组无解；
> 若 $k_2=1$，则 $R(A)=R(A|B)=3<4$，故方程组有无穷多组解，此时有
> $$
> (A|B)\to\begin{pmatrix}1&1&2&3&1\\0&1&2&-1&1\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0&4&0\\0&1&2&-1&1\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0&0&-8\\0&1&2&0&3\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix},
> $$
> 相应的方程组为 $x_1=-8$，$x_2=3-2x_3$，$x_4=2$. 取 $x_3=c$（$c$ 为任意常数），得方程组的一般解：$x_1=-8$，$x_2=3-2c$，$x_3=c$，$x_4=2$.
>
> 综上所述：当 $k_1\ne 2$ 时，方程组有唯一解；当 $k_1=2$ 而 $k_2\ne 1$ 时，方程组无解；当 $k_1=2$ 且 $k_2=1$ 时，方程组有无穷多组解，其一般解为 $x_1=-8$，$x_2=3-2c$，$x_3=c$，$x_4=2$，其中 $c$ 为任意常数．

### 1989 年 · 数学一 · 第七大题（解答，6 分）

问 $\lambda$ 为何值时，线性方程组
$$
\begin{cases}x_1+x_3=\lambda,\\4x_1+x_2+2x_3=\lambda+2,\\6x_1+x_2+4x_3=2\lambda+3\end{cases}
$$
有解，并求出解的一般形式.

> [!success]- 答案与解析
> **答案**：
> 当 $\lambda=1$ 时，方程组有解，通解为
> $$
> X=k\begin{pmatrix}-1\\2\\1\end{pmatrix}+\begin{pmatrix}1\\-1\\0\end{pmatrix}\quad(k\text{ 为任意常数}).
> $$
>
> $$
> \overline{A}=\begin{pmatrix}1&0&1&\lambda\\4&1&2&\lambda+2\\6&1&4&2\lambda+3\end{pmatrix}\to\begin{pmatrix}1&0&1&\lambda\\0&1&-2&2-3\lambda\\0&1&-2&3-4\lambda\end{pmatrix}\to\begin{pmatrix}1&0&1&\lambda\\0&1&-2&2-3\lambda\\0&0&0&1-\lambda\end{pmatrix},
> $$
> 当 $\lambda=1$ 时，方程组有解，再由 $\lambda=1$ 时
> $$
> \overline{A}\to\begin{pmatrix}1&0&1&1\\0&1&-2&-1\\0&0&0&0\end{pmatrix},
> $$
> 得方程组的通解为
> $$
> X=k\begin{pmatrix}-1\\2\\1\end{pmatrix}+\begin{pmatrix}1\\-1\\0\end{pmatrix}\quad(k\text{ 为任意常数}).
> $$

### 1990 年 · 数学三 · 填空题第 4 题（填空，3 分）

若线性方程组
$$
\begin{cases}x_1+x_2=-a_1,\\ x_2+x_3=a_2,\\ x_3+x_4=-a_3,\\ x_4+x_1=a_4\end{cases}
$$
有解，则常数 $a_1,a_2,a_3,a_4$ 应满足条件______.

> [!success]- 答案与解析
> **答案**：$a_1+a_2+a_3+a_4=0$.
>
> 【解析】由于方程组有解 $\Leftrightarrow r(A)=r(\overline{A})$，对 $\overline{A}$ 作初等行变换，
> 第一行乘以 $(-1)$ 加到第四行上，有
> $$
> \begin{pmatrix}1&1&0&0&-a_1\\0&1&1&0&a_2\\0&0&1&1&-a_3\\1&0&0&1&a_4\end{pmatrix}\to\begin{pmatrix}1&1&0&0&-a_1\\0&1&1&0&a_2\\0&0&1&1&-a_3\\0&-1&0&1&a_1+a_4\end{pmatrix},
> $$
> 第二行加到第四行上，再第三行乘以 $(-1)$ 加到第四行上，有
> $$
> \to\begin{pmatrix}1&1&0&0&-a_1\\0&1&1&0&a_2\\0&0&1&1&-a_3\\0&0&1&1&a_1+a_2+a_4\end{pmatrix}\to\begin{pmatrix}1&1&0&0&-a_1\\&1&1&0&a_2\\&&1&1&-a_3\\&&&0&a_1+a_2+a_3+a_4\end{pmatrix}.
> $$
> 为使 $r(A)=r(\overline{A})$，常数 $a_1,a_2,a_3,a_4$ 应满足条件：$a_1+a_2+a_3+a_4=0$.

### 1990 年 · 数学三 · 第六题（解答，8 分）

已知线性方程组
$$
\begin{cases}x_1+x_2+x_3+x_4+x_5=a,\\ 3x_1+2x_2+x_3+x_4-3x_5=0,\\ x_2+2x_3+2x_4+6x_5=b,\\ 5x_1+4x_2+3x_3+3x_4-x_5=2.\end{cases}
$$

（1）$a,b$ 为何值时，方程组有解？

（2）方程组有解时，求出方程组的导出组的一个基础解系；

（3）方程组有解时，求出方程组的全部解.

> [!success]- 答案与解析
> **答案**：当 $a=1$，$b=3$ 时方程组有解；此时导出组的一个基础解系为 $\eta_1=(1,-2,1,0,0)^{\mathrm{T}}$，$\eta_2=(1,-2,0,1,0)^{\mathrm{T}}$，$\eta_3=(5,-6,0,0,1)^{\mathrm{T}}$；方程组的全部解为 $\alpha+k_1\eta_1+k_2\eta_2+k_3\eta_3$，其中 $\alpha=(-2,3,0,0,0)^{\mathrm{T}}$，$k_1,k_2,k_3$ 为任意常数．
>
> 【解析】本题中，方程组有解 $\Leftrightarrow r(A)=r(\overline{A})$.（相关定理见第一题（4））
>
> 对增广矩阵作初等行变换，第一行乘以 $(-3)$、$(-5)$ 分别加到第二、四行上，有
> $$
> \begin{pmatrix}1&1&1&1&1&a\\3&2&1&1&-3&0\\0&1&2&2&6&b\\5&4&3&3&-1&2\end{pmatrix}\to\begin{pmatrix}1&1&1&1&1&a\\0&-1&-2&-2&-6&-3a\\0&1&2&2&6&b\\0&-1&-2&-2&-6&2-5a\end{pmatrix},
> $$
> 第二行乘以 $1$、$(-1)$ 分别加到第三、四行上，第二行再自乘 $(-1)$，有
> $$
> \to\begin{pmatrix}1&1&1&1&1&a\\&1&2&2&6&3a\\&&&b-3a\\&&&2-2a\end{pmatrix},
> $$
> （1）当 $b-3a=0$ 且 $2-2a=0$，即 $a=1,b=3$ 时方程组有解.
>
> （2）当 $a=1,b=3$ 时，方程组的同解方程组是
> $$
> \begin{cases}x_1+x_2+x_3+x_4+x_5=1,\\ x_2+2x_3+2x_4+6x_5=3.\end{cases}
> $$
> 由 $n-r(A)=5-2=3$，即解空间的维数为 $3$. 取自变量为 $x_3,x_4,x_5$，则导出组的基础解系为
> $$
> \eta_1=(1,-2,1,0,0)^{\mathrm{T}},\quad\eta_2=(1,-2,0,1,0)^{\mathrm{T}},\quad\eta_3=(5,-6,0,0,1)^{\mathrm{T}}.
> $$
> （3）令 $x_3=x_4=x_5=0$，得方程组的特解为 $\alpha=(-2,3,0,0,0)^{\mathrm{T}}$. 因此，方程组的所有解是 $\alpha+k_1\eta_1+k_2\eta_2+k_3\eta_3$，其中 $k_1,k_2,k_3$ 为任意常数．

### 1991 年 · 数学三 · 第九题（解答，7 分）

设有 3 维列向量
$$
\alpha_1=\begin{pmatrix}1+\lambda\\1\\1\end{pmatrix},\quad\alpha_2=\begin{pmatrix}1\\1+\lambda\\1\end{pmatrix},\quad\alpha_3=\begin{pmatrix}1\\1\\1+\lambda\end{pmatrix},\quad\beta=\begin{pmatrix}0\\\lambda\\\lambda^2\end{pmatrix},
$$
问 $\lambda$ 取何值时，

（1）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，且表达式唯一？

（2）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表达式不唯一？

（3）$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？

> [!success]- 答案与解析
> **答案**：（1）$\lambda\ne 0$ 且 $\lambda\ne -3$；（2）$\lambda=0$；（3）$\lambda=-3$．
>
> 【解析】设 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta$，将分量代入得到方程组
> $$
> \begin{cases}(1+\lambda)x_1+x_2+x_3=0,\\ x_1+(1+\lambda)x_2+x_3=\lambda,\\ x_1+x_2+(1+\lambda)x_3=\lambda^2.\end{cases}
> $$
> 对方程组的增广矩阵作初等行变换.
>
> 第一行分别乘以 $(-1)$、$-(1+\lambda)$ 加到第二行和第三行上，有
> $$
> \begin{pmatrix}1+\lambda&1&1&0\\1&1+\lambda&1&\lambda\\1&1&1+\lambda&\lambda^2\end{pmatrix}\to\begin{pmatrix}1+\lambda&1&1&0\\-\lambda&\lambda&0&\lambda\\-\lambda^2-2\lambda&-\lambda&0&\lambda^2\end{pmatrix},
> $$
> 再第二行加到第三行上，所以有
> $$
> \to\begin{pmatrix}1+\lambda&1&1&0\\-\lambda&\lambda&0&\lambda\\-\lambda^2-3\lambda&0&0&\lambda^2+\lambda\end{pmatrix}.
> $$
> 若 $\lambda\ne 0$ 且 $\lambda^2+3\lambda\ne 0$，即 $\lambda\ne 0$ 且 $\lambda\ne -3$，$r(A)=r(\overline{A})=3$，方程组有唯一解，即 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示且表达式唯一.
>
> 若 $\lambda=0$，则 $r(A)=r(\overline{A})=1<3$，方程组有无穷多解，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，且表达式不唯一.
>
> 若 $\lambda=-3$，则 $r(A)=2$，$r(\overline{A})=3$，方程组无解，从而 $\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示．

### 1993 年 · 数学三 · 第八题（解答，10 分）

$k$ 为何值时，线性方程组
$$
\begin{cases}x_1+x_2+kx_3=4,\\-x_1+kx_2+x_3=k^2,\\x_1-x_2+2x_3=-4\end{cases}
$$
有唯一解、无解、有无穷多解？在有解情况下，求出其全部解.

> [!success]- 答案与解析
> **答案**：
> 当 $k\ne -1$ 且 $k\ne 4$ 时，方程组有唯一解
> $$
> x_1=\frac{k^2+2k}{k+1},\quad x_2=\frac{k^2+2k+4}{k+1},\quad x_3=\frac{-2k}{k+1};
> $$
> 当 $k=-1$ 时，方程组无解；当 $k=4$ 时，方程组有无穷多解，通解为
> $$
> \alpha+k\eta=(0,4,0)^{\mathrm{T}}+k(-3,-1,1)^{\mathrm{T}}\quad(k\text{ 为任意常数}).
> $$
>
> 【解析】对方程组的增广矩阵作初等行变换，
> 第一行和第三行互换，再第一行分别乘以 $(1)$、$(-1)$ 加到第二行和第三行上，再第二行和第三行互换，再第二行乘以 $\left(\dfrac{1-k}{2}\right)$ 加到第三行上，有
> $$
> \overline{A}=\begin{pmatrix}1&1&k&\vdots&4\\-1&k&1&\vdots&k^2\\1&-1&2&\vdots&-4\end{pmatrix}\to\begin{pmatrix}1&-1&2&\vdots&-4\\-1&k&1&\vdots&k^2\\1&1&k&\vdots&4\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&-1&2&\vdots&-4\\0&k-1&3&\vdots&k^2-4\\0&2&k-2&\vdots&8\end{pmatrix}\to\begin{pmatrix}1&-1&2&\vdots&-4\\0&2&k-2&\vdots&8\\0&k-1&3&\vdots&k^2-4\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&-1&2&\vdots&-4\\0&2&k-2&\vdots&8\\0&0&\dfrac{(1+k)(4-k)}{2}&\vdots&k(k-4)\end{pmatrix}.
> $$
> （1）当 $k\ne -1$ 且 $k\ne 4$ 时，$r(\overline{A})=r(A)=3$，方程组有唯一解，即
> $$
> x_1=\frac{k^2+2k}{k+1},\quad x_2=\frac{k^2+2k+4}{k+1},\quad x_3=\frac{-2k}{k+1}.
> $$
> （2）当 $k=-1$ 时，$r(\overline{A})=3,r(A)=2$，方程组无解.
> （3）当 $k=4$ 时，有
> $$
> \overline{A}=\begin{pmatrix}1&-1&2&\vdots&-4\\0&2&2&\vdots&8\\0&0&0&\vdots&0\end{pmatrix}\to\begin{pmatrix}1&0&3&\vdots&0\\0&1&1&\vdots&4\\0&0&0&\vdots&0\end{pmatrix}.
> $$
> 因为 $r(\overline{A})=r(A)=2<3$，方程组有无穷多解.
> 取 $x_3$ 为自由变量，得方程组的特解为 $\alpha=(0,4,0)^{\mathrm{T}}$.
> 又导出组的基础解系为 $\eta=(-3,-1,1)^{\mathrm{T}}$，所以方程组的通解为 $\alpha+k\eta$，其中 $k$ 为任意常数.
> 【相关知识点】非齐次线性方程组有解的判定定理：
> 设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$ 有解的充分必要条件是系数矩阵的秩等于增广矩阵 $\overline{A}=(A\vdots b)$ 的秩，即 $r(A)=r(\overline{A})$.（或者说，$b$ 可由 $A$ 的列向量 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线表出，亦等同于 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 与 $\alpha_1,\alpha_2,\cdots,\alpha_n,b$ 是等价向量组）
> 设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$，则
> （1）有唯一解 $\Leftrightarrow r(A)=r(\overline{A})=n$.
> （2）有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$.
> （3）无解 $\Leftrightarrow r(A)+1=r(\overline{A})\Leftrightarrow b$ 不能由 $A$ 的列向量 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线表出.

### 1994 年 · 数学三 · 第九题（解答，11 分）

设线性方程组
$$
\begin{cases}x_1+a_1x_2+a_1^2x_3=a_1^3,\\x_1+a_2x_2+a_2^2x_3=a_2^3,\\x_1+a_3x_2+a_3^2x_3=a_3^3,\\x_1+a_4x_2+a_4^2x_3=a_4^3,\end{cases}
$$
（1）证明：若 $a_1,a_2,a_3,a_4$ 两两不相等，则此线性方程组无解；
（2）设 $a_1=a_3=k,a_2=a_4=-k(k\ne 0)$，且已知 $\beta_1,\beta_2$ 是该方程组的两个解，其中
$$
\beta_1=\begin{pmatrix}-1\\1\\1\end{pmatrix},\quad\beta_2=\begin{pmatrix}1\\1\\-1\end{pmatrix},
$$
写出此方程组的通解.

> [!success]- 答案与解析
> **答案**：
> （1）证明见解析；（2）
> $$
> \beta_1+k\eta=\begin{pmatrix}-1\\1\\1\end{pmatrix}+k\begin{pmatrix}-2\\0\\2\end{pmatrix}\quad(k\text{ 为任意常数}).
> $$
>
> 【解析】（1）因为增广矩阵 $\overline{A}$ 的行列式是范德蒙行列式，$a_1,a_2,a_3,a_4$ 两两不相等，则有
> $$
> |\overline{A}|=(a_2-a_1)(a_3-a_1)(a_4-a_1)(a_3-a_2)(a_4-a_2)(a_4-a_3)\ne 0,
> $$
> 故 $r(\overline{A})=4$. 而系数矩阵 $A$ 的秩 $r(A)=3$，所以方程组无解.
> （2）当 $a_1=a_3=k,a_2=a_4=-k(k\ne 0)$ 时，方程组同解于
> $$
> \begin{cases}x_1+kx_2+k^2x_3=k^3,\\x_1-kx_2+k^2x_3=-k^3.\end{cases}
> $$
> 因为 $\begin{vmatrix}1&k\\1&-k\end{vmatrix}=-2k\ne 0$，知 $r(A)=r(\overline{A})=2$.
> 由 $n-r(A)=3-2=1$，知导出组 $Ax=0$ 的基础解系含有 1 个解向量，即解空间的维数为 1.
> 由解的结构和解的性质，
> $$
> \eta=\beta_1-\beta_2=\begin{pmatrix}-1\\1\\1\end{pmatrix}-\begin{pmatrix}1\\1\\-1\end{pmatrix}=\begin{pmatrix}-2\\0\\2\end{pmatrix}
> $$
> 是 $Ax=0$ 的基础解系.
> 于是方程组的通解为
> $$
> \beta_1+k\eta=\begin{pmatrix}-1\\1\\1\end{pmatrix}+k\begin{pmatrix}-2\\0\\2\end{pmatrix},
> $$
> 其中 $k$ 为任意常数.
> 【相关知识点】1. 非齐次线性方程组有解的判定定理：设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$ 有解的充分必要条件是系数矩阵的秩等于增广矩阵 $\overline{A}=(A\vdots b)$ 的秩，即 $r(A)=r(\overline{A})$.
> 设 $A$ 是 $m\times n$ 矩阵，线性方程组 $Ax=b$，则
> （1）有唯一解 $\Leftrightarrow r(A)=r(\overline{A})=n$.
> （2）有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$.
> （3）无解 $\Leftrightarrow r(A)+1=r(\overline{A})\Leftrightarrow b$ 不能由 $A$ 的列向量 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线表出.
> 2. 解的结构：若 $\eta_1$、$\eta_2$ 是对应齐次线性方程组 $Ax=0$ 的基础解系，知 $Ax=b$ 的通解形式为 $k_1\eta_1+k_2\eta_2+\xi$，其中 $\eta_1,\eta_2$ 是 $Ax=0$ 的基础解系，$\xi$ 是 $Ax=b$ 的一个特解.
> 3. 解的性质：如果 $\eta_1,\eta_2$ 是 $Ax=0$ 的两个解，则其线性组合 $k_1\eta_1+k_2\eta_2$ 仍是 $Ax=0$ 的解；如果 $\xi$ 是 $Ax=b$ 的一个解，$\eta$ 是 $Ax=0$ 的一个解，则 $\xi+\eta$ 仍是 $Ax=b$ 的解.

### 1997 年 · 数学二 · 第四题（解答，8 分）

$\lambda$ 取何值时，方程组
$$
\begin{cases}2x_1+\lambda x_2-x_3=1,\\ \lambda x_1-x_2+x_3=2,\\ 4x_1+5x_2-5x_3=-1\end{cases}
$$
无解，有唯一解或有无穷多解？并在有无穷多解时写出方程组的通解。

> [!success]- 答案与解析
> **答案**：
> 当 $\lambda\ne-\dfrac{4}{5}$ 且 $\lambda\ne 1$ 时，方程组有唯一解；当 $\lambda=-\dfrac{4}{5}$ 时，方程组无解；当 $\lambda=1$ 时，方程组有无穷多解，通解为
> $$
> \begin{cases}x_1=1,\\ x_2=-1+k,\\ x_3=k,\end{cases}\quad(k\text{ 为任意常数}).
> $$
>
> 【解析】方法 1：对原方程组的增广矩阵作初等行变换：
> $$
> [A:b]=\begin{pmatrix}2&\lambda&-1&:&1\\\lambda&-1&1&:&2\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[2]+[1],[3]+[1]\times(-5)}\begin{pmatrix}2&\lambda&-1&:&1\\\lambda+2&\lambda-1&0&:&3\\-6&-5\lambda+5&0&:&-6\end{pmatrix}\xrightarrow{[3]+[2]\times 5}\begin{pmatrix}2&\lambda&-1&:&1\\\lambda+2&\lambda-1&0&:&3\\5\lambda+4&0&0&:&9\end{pmatrix}
> $$
> 当 $\lambda\ne-\dfrac{4}{5}$ 且 $\lambda\ne 1$ 时，$r(A)=r[A:b]=3$，即方程组的系数矩阵与增广矩阵的秩相等且等于未知量的个数，故原方程组有唯一解。
>
> 当 $\lambda=-\dfrac{4}{5}$ 时，$r(A)=2\ne r[A:b]=3$，即方程组的系数矩阵与增广矩阵的秩不相等，故原方程组无解。
>
> 当 $\lambda=1$ 时，原方程组的同解方程组为
> $$
> \begin{cases}2x_1+x_2-x_3=1,\\ x_1=1,\end{cases}
> $$
> 原方程组有无穷多解，其通解为
> $$
> \begin{cases}x_1=1,\\ x_2=-1+k,\\ x_3=k,\end{cases}\quad(k\text{ 为任意常数}).
> $$
>
> （或 $[x_1,x_2,x_3]^{\mathrm{T}}=[1,-1,0]^{\mathrm{T}}+k[0,1,1]^{\mathrm{T}}$（$k$ 为任意常数））
>
> > **编者注**：原书通解末行印作 $x_3==k$（多一个等号），此处按 $x_3=k$ 转写。
>
> 方法 2：原方程组系数矩阵的行列式
> $$
> |A|=\begin{vmatrix}2&\lambda&-1\\\lambda&-1&1\\4&5&-5\end{vmatrix}=\begin{vmatrix}2&\lambda&\lambda-1\\\lambda&-1&0\\4&5&0\end{vmatrix}=(\lambda-1)(5\lambda+4),
> $$
> 故知：当 $\lambda\ne-\dfrac{4}{5}$ 且 $\lambda\ne 1$ 时，$r(A)=r[A:b]=3$，即方程组的系数矩阵与增广矩阵的秩相等且等于未知量的个数，故原方程组有唯一解。
>
> 当 $\lambda=-\dfrac{4}{5}$ 时，对原方程组的增广矩阵作初等行变换，得
> $$
> [A:b]=\begin{pmatrix}2&-\dfrac{4}{5}&-1&:&1\\-\dfrac{4}{5}&-1&1&:&2\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[1]\times 5,[2]\times 5}\begin{pmatrix}10&-4&-5&:&5\\-4&-5&5&:&10\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[3]+[2]}\begin{pmatrix}10&-4&-5&:&5\\-4&-5&5&:&10\\0&0&0&:&9\end{pmatrix}
> $$
> $r(A)\ne r[A:b]$，即方程组的系数矩阵与增广矩阵的秩不相等，故原方程组无解。
>
> 当 $\lambda=1$ 时，对原方程组的增广矩阵作初等行变换，得
> $$
> [A:b]=\begin{pmatrix}2&1&-1&:&1\\1&-1&1&:&2\\4&5&-5&:&-1\end{pmatrix}\xrightarrow{[1]\leftrightarrow[2],[2]+[1]\times(-2),[3]+[1]\times(-4)}\begin{pmatrix}1&-1&1&:&2\\0&3&-3&:&-3\\0&9&-9&:&-9\end{pmatrix}\xrightarrow{[3]+[2]\times 3,[2]\times\dfrac{1}{3}}\begin{pmatrix}1&-1&1&:&2\\0&1&-1&:&-1\\0&0&0&:&0\end{pmatrix}
> $$
> $r(A)=r[A:b]=2<3$，即方程组的系数矩阵与增广矩阵的秩相等且小于未知量的个数，故原方程组有无穷多解，其通解为
> $$
> \begin{cases}x_1=1,\\ x_2=-1+k,\\ x_3=k,\end{cases}\quad(k\text{ 为任意常数}).
> $$
>
> （或 $[x_1,x_2,x_3]^{\mathrm{T}}=[1,-1,0]^{\mathrm{T}}+k[0,1,1]^{\mathrm{T}}$（$k$ 为任意常数））
>
> > **编者注**：原书此处行变换标记印作 $[3]+[2]\times 3$，但由结果 $0$ 行应为 $[3]+[2]\times(-3)$，疑为原书漏印负号（按原文转写标记）。

### 1998 年 · 数学二 · 第十三题（解答，6 分）

已知 $\alpha_1=(1,4,0,2)^{\mathrm{T}},\alpha_2=(2,7,1,3)^{\mathrm{T}},\alpha_3=(0,1,-1,a)^{\mathrm{T}},\beta=(3,10,b,4)^{\mathrm{T}}$，问：

（1）$a,b$ 取何值时，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？

（2）$a,b$ 取何值时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？并写出此表示式.

> [!success]- 答案与解析
> **答案**：（1）$b\ne2$ 时 $\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；（2）$b=2,a\ne1$ 时唯一表示为 $\beta=-\alpha_1+2\alpha_2$；$b=2,a=1$ 时表示法为无穷多，$\beta=-(2k+1)\alpha_1+(k+2)\alpha_2+k\alpha_3$（$k$ 为任意常数）.
>
> 【分析】$\beta$ 能由（不能由）$\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性表出 $\Leftrightarrow$ $\alpha_i,i=1,2,\cdots,s,\beta$ 为列向量的非齐次线性方程组 $\alpha_1x_1+\alpha_2x_2+\cdots+\alpha_sx_s=\beta$ 有解（无解），从而将线性表出的问题转化为方程组解的判定与求解.
>
> 【解析】令 $A=[\alpha_1,\alpha_2,\alpha_3],X=[x_1,x_2,x_3]^{\mathrm{T}}$，作方程组 $AX=\beta$，并对此方程组的增广矩阵进行初等变换：
> $$
> [A;\beta]=\begin{pmatrix}1&2&0&:&3\\4&7&1&:&10\\0&1&-1&:&b\\2&3&a&:&4\end{pmatrix}\xrightarrow{(*_1)}\begin{pmatrix}1&2&0&:&3\\0&-1&1&:&-2\\0&1&-1&:&b\\0&-1&a&:&-2\end{pmatrix}\xrightarrow{(*_2)}\begin{pmatrix}1&2&0&:&3\\0&-1&1&:&-2\\0&0&a-1&:&0\\0&0&0&:&b-2\end{pmatrix}.
> $$
> 其中，$(*_1)$ 变换：将第 1 行乘以 $-4$ 加到第 2 行，再将第 1 行乘以 $-2$ 加到第 4 行；
>
> $(*_2)$ 变换：第 2 行加到第 1 行，再将第 2 行乘以 $-1$ 加到第 4 行，最后 3、4 行互换.
>
> 由非齐次线性方程组有解的判定定理，可得
>
> （1）当 $b\ne2$ 时，线性方程组 $AX=\beta$ 无解，此时 $\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出.
>
> （2）当 $b=2,a\ne1$ 时，$r(A)=r(\overline{A})=3$，线性方程组 $AX=\beta$ 有唯一解，下面求此唯一解.
>
> 由以上增广矩阵变换可得线性方程组 $AX=\beta$ 的同解方程组为
> $$
> \begin{cases}
> x_1+2x_2=3\\
> -x_2+x_3=-2\\
> (a-1)x_3=0
> \end{cases}
> $$
> 解得唯一解为 $X=[-1,2,0]^{\mathrm{T}}$. 故 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出为 $\beta=-\alpha_1+2\alpha_2$.
>
> （3）当 $b=2,a=1$ 时，$r(A)=r(\overline{A})=2<3$，线性方程组 $AX=\beta$ 有无穷多解. 求齐次线性方程组 $AX=0$ 的基础解系.
>
> 齐次线性方程组 $AX=0$ 的同解方程组为
> $$
> \begin{cases}
> x_1+2x_2=0\\
> -x_2+x_3=0
> \end{cases}
> $$
> 基础解系所含向量的个数为 $n-r(A)=3-2=1$，选 $x_2$ 为自由未知量，取 $x_2=1$，解得基础解系为 $\xi=(-2,1,1)^{\mathrm{T}}$. 取 $x_3=0$，解得的一个特解为 $\eta^*=(-1,2,0)^{\mathrm{T}}$，则由非齐次线性方程组解的结构可知，方程组 $AX=\beta$ 的通解为
> $$
> X=k\xi+\eta^*=(-2k-1,k+2,k)^{\mathrm{T}},\ k\ \text{是任意常数}.
> $$
> 则 $\beta$ 能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，且表示法为无穷多（常数 $k$ 可以任意），且
> $$
> \beta=-(2k+1)\alpha_1+(k+2)\alpha_2+k\alpha_3.
> $$
> 【相关知识点】非齐次线性方程组有解的判定定理：设 $A$ 是 $m\times n$ 矩阵，方程组 $Ax=b$，则
>
> (1) 有唯一解 $\Leftrightarrow r(A)=r(\overline{A})=n$.
>
> (2) 有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$.
>
> (3) 无解 $\Leftrightarrow r(A)+1=r(\overline{A})$. $\Leftrightarrow b$ 不能由 $A$ 的列向量线性表出.

### 2000 年 · 数学一 · 填空题第 4 题（填空，3 分）

已知方程组 $\begin{pmatrix}1&2&1\\2&3&a+2\\1&a&-2\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\3\\0\end{pmatrix}$ 无解，则 $a=\underline{\qquad}$．

> [!success]- 答案与解析
> **答案**：$-1$
>
> （4）【答案】 $-1$．
>
> 【解】 因为原方程组无解，所以 $r(A)<r(\overline{A})$，而 $r(\overline{A})\le 3$，所以 $r(A)<3$．
>
> 于是 $|A|=0$，解得 $a=-1$ 或 $a=3$．
> $$
> \text{当 }a=3\text{ 时，由 }\overline{A}=\begin{pmatrix}1&2&1&\mid&1\\2&3&5&\mid&3\\1&3&-2&\mid&0\end{pmatrix}\to\begin{pmatrix}1&2&1&\mid&1\\0&-1&3&\mid&1\\0&1&-3&\mid&-1\end{pmatrix}\to\begin{pmatrix}1&2&1&\mid&1\\0&-1&3&\mid&1\\0&0&0&\mid&0\end{pmatrix},
> $$
> 得 $r(A)=r(\overline{A})=2$，原方程组有无数个解，所以 $a\ne 3$，故 $a=-1$．

### 2000 年 · 数学三 · 选择题第 3 题（选择，3 分）

设 $\alpha_1,\alpha_2,\alpha_3$ 是四元非齐次线性方程组 $AX=b$ 的三个解向量，且 $r(A)=3$，$\alpha_1=(1,2,3,4)^{\mathrm{T}}$，$\alpha_2+\alpha_3=(0,1,2,3)^{\mathrm{T}}$，$C$ 表示任意常数，则线性方程组 $AX=b$ 的通解为（　　）

（A）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$　　（B）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}0\\1\\2\\3\end{pmatrix}$

（C）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}2\\3\\4\\5\end{pmatrix}$　　（D）$\begin{pmatrix}1\\2\\3\\4\end{pmatrix}+C\begin{pmatrix}3\\4\\5\\6\end{pmatrix}$

> [!success]- 答案与解析
> **答案**：（C）
>
> 【详解】因为 $\alpha_1=(1,2,3,4)^{\mathrm{T}}$ 是非齐次方程组的解向量，所以有 $A\alpha_1=b$，故 $\alpha_1$ 是 $AX=b$ 的一个特解。
>
> 又 $r(A)=3$，$n=4$（未知量的个数），故 $AX=b$ 导出组 $AX=0$ 的基础解系由一个非零解组成，即基础解系的个数为 $1$。
>
> 因为
> $$
> A\bigl(2\alpha_1-(\alpha_2+\alpha_3)\bigr)=2b-b-b=0,
> $$
> 故
> $$
> 2\alpha_1-(\alpha_2+\alpha_3)=2\begin{pmatrix}1\\2\\3\\4\end{pmatrix}-\begin{pmatrix}0\\1\\2\\3\end{pmatrix}=\begin{pmatrix}2\\3\\4\\5\end{pmatrix}
> $$
> 是 $AX=0$ 的基础解系，故 $AX=b$ 的通解为
> $$
> C\bigl(2\alpha_1-(\alpha_2+\alpha_3)\bigr)+\alpha_1=C\begin{pmatrix}2\\3\\4\\5\end{pmatrix}+\begin{pmatrix}1\\2\\3\\4\end{pmatrix}.
> $$

### 2000 年 · 数学三 · 第九题（解答，8 分）

（本题满分 8 分）设向量组
$$
\alpha_1=(a,2,10)^{\mathrm{T}},\quad \alpha_2=(-2,1,5)^{\mathrm{T}},\quad \alpha_3=(-1,1,4)^{\mathrm{T}},\quad \beta=(1,b,c)^{\mathrm{T}}.
$$
试问：当 $a,b,c$ 满足什么条件时，

（1）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，且表示唯一？

（2）$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示？

（3）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表示不唯一？并求出一般表达式。

> [!success]- 答案与解析
> **答案**：（1）$a\ne -4$ 时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示且表示唯一；（2）$a=-4$ 且 $c-3b+1\ne 0$ 时，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；（3）$a=-4$ 且 $c-3b+1=0$ 时，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示但表示不唯一，一般表达式为 $k(1,-2,0)^{\mathrm{T}}+(0,-(b+1),2b+1)^{\mathrm{T}}$（$k$ 为任意常数）。
>
> 【详解】方法 1：设方程组
> $$
> \alpha_1x_1+\alpha_2x_2+\alpha_3x_3=\beta.\tag{①}
> $$
> 对方程组的增广矩阵作初等行变换，化成阶梯形矩阵，有
> $$
> [\alpha_1,\alpha_2,\alpha_3\ \vdots\ \beta]=\begin{pmatrix}a&-2&-1&\mid&1\\2&1&1&\mid&b\\10&5&4&\mid&c\end{pmatrix}\to\begin{pmatrix}a&-2&-1&\mid&1\\2&1&1&\mid&b\\10+4a&-3&0&\mid&c+4\end{pmatrix}\to\begin{pmatrix}a&-2&-1&\mid&1\\2&1&1&\mid&b\\4+a&0&0&\mid&c-3b+1\end{pmatrix}.
> $$
> （1）当 $a\ne -4$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=r[\alpha_1,\alpha_2,\alpha_3,\beta]=3$，方程组①有唯一解，即 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，且表出唯一。
>
> （2）当 $a=-4$，但 $c-3b+1\ne 0$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=2\ne r[\alpha_1,\alpha_2,\alpha_3,\beta]=3$，方程组①无解，$\beta$ 不可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出。
>
> （3）当 $a=-4$，且 $c-3b+1=0$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=r[\alpha_1,\alpha_2,\alpha_3,\beta]=2$，方程组①有无穷多解，此时有
> $$
> [\alpha_1,\alpha_2,\alpha_3\ \vdots\ \beta]\to\begin{pmatrix}-4&-2&-1&\mid&1\\2&1&1&\mid&b\\0&0&0&\mid&0\end{pmatrix}.
> $$
> 得对应齐次方程组的基础解系为：$\xi=(1,-2,0)^{\mathrm{T}}$（取自由未知量 $x_2=1$，回代得 $x_2=-2$，$x_3=0$）；非齐次方程组的一个特解是 $\eta=(0,-(b+1),2b+1)^{\mathrm{T}}$，故通解为
> $$
> k\begin{pmatrix}1\\-2\\0\end{pmatrix}+\begin{pmatrix}0\\-(b+1)\\2b+1\end{pmatrix},\quad k\ \text{为任意常数}.
> $$
>
> 方法 2：设方程组 $\alpha_1x_1+\alpha_2x_2+\alpha_3x_3=\beta$\quad①
>
> 因为①是三个方程三个未知量的线性非齐次方程组，故也可由系数行列式讨论，
> $$
> |A|=|\alpha_1,\alpha_2,\alpha_3|=\begin{vmatrix}a&-2&-1\\2&1&1\\10&5&4\end{vmatrix}=-\,(a+4).
> $$
> 因此知道：
>
> （1）当 $a\ne -4$ 时，$|A|\ne 0$，方程组有唯一解，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，且表出唯一。
>
> （2）当 $a=-4$ 时（有可能无解或有无穷多解），对增广矩阵作初等行变换，得
> $$
> [\alpha_1,\alpha_2,\alpha_3\ \vdots\ \beta]=\begin{pmatrix}-4&-2&-1&\mid&1\\2&1&1&\mid&b\\10&5&4&\mid&c\end{pmatrix}\to\begin{pmatrix}2&1&1&\mid&b\\0&0&1&\mid&2b+1\\0&0&-1&\mid&c-5b\end{pmatrix}\to\begin{pmatrix}2&1&1&\mid&b\\0&0&1&\mid&2b+1\\0&0&0&\mid&c-3b+1\end{pmatrix}.
> $$
> （i）当 $a=-4$，且 $c-3b+1\ne 0$ 时，有 $r[\alpha_1,\alpha_2,\alpha_3]=2\ne r[\alpha_1,\alpha_2,\alpha_3,\beta]=3$，方程组①无解。
>
> （ii）当 $a=-4$，且 $c-3b+1=0$ 时，$r[\alpha_1,\alpha_2,\alpha_3]=r[\alpha_1,\alpha_2,\alpha_3,\beta]=2$，方程组①有无穷多解，其通解为
> $$
> k\begin{pmatrix}1\\-2\\0\end{pmatrix}+\begin{pmatrix}0\\-(b+1)\\2b+1\end{pmatrix},\quad k\ \text{为任意常数}.
> $$

### 2001 年 · 数学二 · 填空题第 5 题（填空，3 分）

设方程组 $\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\1\\-2\end{pmatrix}$ 有无穷多解，则 $a=$ ________.

> [!success]- 答案与解析
> **答案**：$-2$
>
> 方法1：利用初等行变换化增广矩阵为阶梯形，有
> $$
> \overline{A}=\begin{pmatrix}a&1&1&:&1\\1&a&1&:&1\\1&1&a&:&-2\end{pmatrix}\xrightarrow{1,3\text{行互换}}\begin{pmatrix}1&1&a&:&-2\\1&a&1&:&1\\a&1&1&:&1\end{pmatrix}
> $$
> $$
> \xrightarrow[1\text{行的}(-1),(-a)\text{倍分别加到}2,3\text{行}]{}\begin{pmatrix}1&1&a&:&-2\\0&a-1&1-a&:&3\\0&1-a&1-a^2&:&1+2a\end{pmatrix}
> $$
> $$
> \xrightarrow{2\text{行加到}3\text{行}}\begin{pmatrix}1&1&a&:&-2\\0&a-1&1-a&:&3\\0&0&(1-a)(a+2)&:&2(2+a)\end{pmatrix}
> $$
> 由非齐次线性方程组有无穷多解的充要条件：设 $A$ 是 $m\times n$ 矩阵，方程组 $Ax=b$ 有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$. 可见，只有当 $a=-2$ 时才有秩 $r(\overline{A})=r(A)=2<3$，对应方程组有无穷多个解.
>
> 方法2：设 $A$ 是 $m\times n$ 矩阵，方程组 $Ax=b$ 有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n$，则方程组
> $$
> \begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\1\\-2\end{pmatrix}
> $$
> 有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<3$. 从而有 $|A|=0$，即
> $$
> |A|=\begin{vmatrix}a&1&1\\1&a&1\\1&1&a\end{vmatrix}\xrightarrow{2,3\text{列分别加到}1\text{列}}\begin{vmatrix}a+2&a+2&a+2\\1&a&1\\1&1&a\end{vmatrix}\xrightarrow{1\text{行提出}(a+2)}(a+2)\begin{vmatrix}1&1&1\\1&a&1\\1&1&a\end{vmatrix}
> $$
> $$
> \xrightarrow{1\text{行}\times(-1)\text{分别加到}2,3\text{行}}(a+2)\begin{vmatrix}1&1&1\\0&a-1&0\\0&0&a-1\end{vmatrix}=(-1)^{1+1}(a+2)\begin{vmatrix}a-1&0\\0&a-1\end{vmatrix}=(a+2)(a-1)^2=0,
> $$
> 则，$a=1$ 或 $a=-2$.
>
> 当 $a=1$ 时，
> $$
> \overline{A}=\begin{pmatrix}1&1&1&:&1\\1&1&1&:&1\\1&1&1&:&-2\end{pmatrix}\xrightarrow{1\text{行}\times(-1)\text{分别加到}2,3\text{行}}\begin{pmatrix}1&1&1&:&1\\0&0&0&:&0\\0&0&0&:&-3\end{pmatrix}
> $$
> 可见 $r(A)=1\ne r(\overline{A})=2$，原方程组无解.
>
> 当 $a=-2$ 时，有
> $$
> \overline{A}=\begin{pmatrix}-2&1&1&:&1\\1&-2&1&:&1\\1&1&-2&:&-2\end{pmatrix}\xrightarrow{1,3\text{行互换}}\begin{pmatrix}1&1&-2&:&-2\\1&-2&1&:&1\\-2&1&1&:&1\end{pmatrix}
> $$
> $$
> \xrightarrow{2\text{行}-1\text{行}}\begin{pmatrix}1&1&-2&:&-2\\0&-3&3&:&3\\-2&1&1&:&1\end{pmatrix}\xrightarrow{1\text{行}\times2\text{加到}3\text{行}}\begin{pmatrix}1&1&-2&:&-2\\0&-3&3&:&3\\0&3&-3&:&-3\end{pmatrix}
> $$
> $$
> \xrightarrow{3\text{行}+2\text{行}}\begin{pmatrix}1&1&-2&:&-2\\0&-3&3&:&3\\0&0&0&:&0\end{pmatrix}\xrightarrow{2\text{行}\div(-3)}\begin{pmatrix}1&1&-2&:&-2\\0&1&-1&:&-1\\0&0&0&:&0\end{pmatrix}
> $$
> 可知，$r(\overline{A})=r(A)=2<3$，
>
> 故当 $a=-2$ 时，原方程组有无穷多解.

### 2001 年 · 数学三 · 第九题（解答，9 分）

（本题满分 9 分）设矩阵 $A=\begin{pmatrix}1&1&a\\1&a&1\\a&1&1\end{pmatrix}$，$\beta=\begin{pmatrix}1\\1\\-2\end{pmatrix}$。已知线性方程组 $AX=\beta$ 有解但不唯一，试求

（1）$a$ 的值；

（2）正交矩阵 $Q$，使 $Q^{\mathrm{T}}AQ$ 为对角矩阵。

> [!success]- 答案与解析
> **答案**：（1）$a=-2$；（2）$Q=\begin{pmatrix}\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&0&\dfrac{2}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\end{pmatrix}$，$Q^{\mathrm{T}}AQ=\begin{pmatrix}0&0&0\\0&3&0\\0&0&-3\end{pmatrix}$。
>
> 【详解】（1）线性方程组 $AX=\beta$ 有解但不唯一，即有无穷多解 $\Leftrightarrow r(A)=r(\overline{A})<n=3$，将增广矩阵作初等行变换，得
> $$
> \overline{A}=\begin{pmatrix}1&1&a&\mid&1\\1&a&1&\mid&1\\a&1&1&\mid&-2\end{pmatrix}\xrightarrow[3\text{ 行}-1\text{ 行}\times a]{2\text{ 行}-1\text{ 行}}\begin{pmatrix}1&1&a&\mid&1\\0&a-1&1-a&\mid&0\\0&1-a&1-a^2&\mid&-2-a\end{pmatrix}
> $$
> $$
> \xrightarrow{2\text{ 行加到 }3\text{ 行}}\begin{pmatrix}1&1&a&\mid&1\\0&a-1&1-a&\mid&0\\0&0&-(a-1)(a+2)&\mid&-(a+2)\end{pmatrix}.
> $$
> 因为方程组 $AX=\beta$ 有解但不唯一，所以 $r(A)=r(\overline{A})<3$，故 $a=-2$。
>
> （2）由（1），有
> $$
> A=\begin{pmatrix}1&1&-2\\1&-2&1\\-2&1&1\end{pmatrix}.
> $$
> 由
> $$
> |\lambda E-A|=\begin{vmatrix}\lambda-1&-1&2\\-1&\lambda+2&-1\\2&-1&\lambda-1\end{vmatrix}\xrightarrow{2,3\text{ 列加到 }1\text{ 列}}\begin{vmatrix}\lambda&-1&2\\\lambda&\lambda+2&-1\\\lambda&-1&\lambda-1\end{vmatrix}
> $$
> $$
> \xrightarrow{1\text{ 列提出公因子 }\lambda}\lambda\begin{vmatrix}1&-1&2\\1&\lambda+2&-1\\1&-1&\lambda-1\end{vmatrix}\xrightarrow{1\text{ 行}\times(-1)\text{ 分别加到 }2,3\text{ 行}}\lambda\begin{vmatrix}1&-1&2\\0&\lambda+3&-3\\0&0&\lambda-3\end{vmatrix}
> =\lambda(\lambda+3)(\lambda-3)=0,
> $$
> 故 $A$ 的特征值为 $\lambda_1=0,\lambda_2=-3,\lambda_3=3$。
>
> 当 $\lambda_1=0$ 时，
> $$
> (0E-A)=\begin{pmatrix}-1&-1&2\\-1&2&-1\\2&-1&-1\end{pmatrix}\xrightarrow[1\text{ 行的 }(-1),2\text{ 倍分别加到 }2,3\text{ 行}]{}\begin{pmatrix}-1&-1&2\\0&3&-3\\0&-3&3\end{pmatrix}\xrightarrow[2\text{ 行加到 }3\text{ 行}]{}\begin{pmatrix}-1&-1&2\\0&3&-3\\0&0&0\end{pmatrix}.
> $$
> 于是得方程组 $(0E-A)x=0$ 的同解方程组为
> $$
> \begin{cases}x_1+x_2-2x_3=0,\\3x_2-3x_3=0.\end{cases}
> $$
> 可见 $r(0E-A)=2$，基础解系个数为 $n-r(0E-A)=3-2=1$，故有 $1$ 个自由未知量，选 $x_2$ 为自由未知量，取 $x_2=1$，解得对应的特征向量为 $x_1=(1,1,1)^{\mathrm{T}}$。
>
> 当 $\lambda=3$ 时，
> $$
> (3E-A)=\begin{pmatrix}2&-1&2\\-1&5&-1\\2&-1&2\end{pmatrix}\xrightarrow[2\text{ 行互换}]{1,2}\begin{pmatrix}-1&5&-1\\2&-1&2\\2&-1&2\end{pmatrix}\xrightarrow[3\text{ 行}-2\text{ 行}]{1\text{ 行}\times 2\text{ 加到 }2\text{ 行}}\begin{pmatrix}-1&5&-1\\0&9&0\\0&0&0\end{pmatrix}.
> $$
> 于是得方程组 $(3E-A)x=0$ 的同解方程组为
> $$
> \begin{cases}-x_1+5x_2-x_3=0,\\9x_2=0.\end{cases}
> $$
> 可见 $r(3E-A)=2$，基础解系个数为 $1$，选 $x_1$ 为自由未知量，取 $x_1=1$，解得对应的特征向量为 $x_2=(1,0,-1)^{\mathrm{T}}$。
>
> 当 $\lambda=-3$ 时，
> $$
> (-3E-A)=\begin{pmatrix}-4&-1&2\\-1&-1&-1\\2&-1&-4\end{pmatrix}\xrightarrow[1,2\text{ 行互换}]{}\begin{pmatrix}-1&-1&-1\\-4&-1&2\\2&-1&-4\end{pmatrix}\xrightarrow[1\text{ 行 }(-4)\text{ 倍、}2\text{ 倍分别加到 }2,3\text{ 行}]{}\begin{pmatrix}-1&-1&-1\\0&3&6\\0&-3&-6\end{pmatrix}\xrightarrow[2\text{ 行加到 }3\text{ 行}]{}\begin{pmatrix}-1&-1&-1\\0&3&6\\0&0&0\end{pmatrix}.
> $$
> 于是得方程组 $(-3E-A)x=0$ 的同解方程组为
> $$
> \begin{cases}-x_1-x_2-x_3=0,\\3x_2+6x_3=0.\end{cases}
> $$
> 可见 $r(-3E-A)=2$，基础解系个数为 $1$，选 $x_3$ 为自由未知量，取 $x_3=2$，解得对应的特征向量为 $x_3=(-1,2,-1)^{\mathrm{T}}$。
>
> 由于 $A$ 是实对称矩阵，其不同特征值的特征向量相互正交，故这三个不同特征值的特征向量相互正交，只需将 $x_1,x_2,x_3$ 单位化，
> $$
> \beta_1=\frac{x_1}{|x_1|}=\frac{1}{\sqrt{3}}\begin{pmatrix}1\\1\\1\end{pmatrix},\quad \beta_2=\frac{x_2}{|x_2|}=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\0\\-1\end{pmatrix},\quad \beta_3=\frac{x_3}{|x_3|}=\frac{1}{\sqrt{6}}\begin{pmatrix}-1\\2\\-1\end{pmatrix},
> $$
> 其中 $|x_1|=\sqrt{1^2+1^2+1^2}=\sqrt{3}$，$|x_2|=\sqrt{1^2+(-1)^2}=\sqrt{2}$，$|x_3|=\sqrt{(-1)^2+2^2+(-1)^2}=\sqrt{6}$。
>
> 令
> $$
> Q=(\beta_1,\beta_2,\beta_3)=\begin{pmatrix}\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&0&\dfrac{2}{\sqrt{6}}\\[4pt]\dfrac{1}{\sqrt{3}}&-\dfrac{1}{\sqrt{2}}&-\dfrac{1}{\sqrt{6}}\end{pmatrix},
> $$
> 则有
> $$
> Q^{\mathrm{T}}AQ=Q^{-1}AQ=\begin{pmatrix}0&0&0\\0&3&0\\0&0&-3\end{pmatrix}.
> $$

### 2002 年 · 数学一 · 选择题第 4 题（选择，3 分）

设有三张不同平面的方程 $a_{i1}x+a_{i2}y+a_{i3}z=b_i$，$i=1,2,3$，它们所组成的线性方程组的系数矩阵与增广矩阵的秩都为 2，则这三张平面可能的位置关系为（　　）

（原题配图为四个平面位置关系示意图：（A）三张平面交于唯一点；（B）三张平面交于同一条直线（呈"书页"状）；（C）三张平面两两相交、三条交线互相平行且无公共点；（D）三张平面两两相交围成三棱柱、无公共点．）

> [!success]- 答案与解析
> **答案**：（B）
>
> （9）【答案】 （B）．
>
> 【解】 因为 $A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix}$，$X=\begin{pmatrix}x\\y\\z\end{pmatrix}$，$b=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$．
>
> 因为 $r(A)=r(\overline{A})=2<3$，所以方程组 $AX=b$ 有无数个解，即三个平面有无数个交点，因为（A）只有一个交点，而（C），（D）没有交点，所以应选（B）．

### 2003 年 · 数学二 · 第十二题（证明题）（解答，8 分）

已知平面上三条不同直线的方程分别为
$$
l_1:ax+2by+3c=0,
$$
$$
l_2:bx+2cy+3a=0,
$$
$$
l_3:cx+2ay+3b=0.
$$
试证：这三条直线交于一点的充分必要条件为 $a+b+c=0$.

> [!success]- 答案与解析
> **答案**：见解析.
>
> 【分析】三条直线相交于一点，相当于对应线性方程组有唯一解，进而转化为系数矩阵与增广矩阵的秩均为 2.
>
> 【详解】方法1：“必要性”. 设三条直线 $l_1,l_2,l_3$ 交于一点，则线性方程组
> $$
> \begin{cases}
> ax+2by=-3c,\\
> bx+2cy=-3a,\\
> cx+2ay=-3b,
> \end{cases}\tag{*}
> $$
> 有唯一解，故系数矩阵 $A=\begin{pmatrix}a&2b\\b&2c\\c&2a\end{pmatrix}$ 与增广矩阵 $\overline{A}=\begin{pmatrix}a&2b&-3c\\b&2c&-3a\\c&2a&-3b\end{pmatrix}$ 的秩均为 2，于是 $|\overline{A}|=0$.
>
> $$
> |\overline{A}|=\begin{vmatrix}a&2b&-3c\\b&2c&-3a\\c&2a&-3b\end{vmatrix}=\begin{vmatrix}a+b+c&2(b+c+a)&-3(c+a+b)\\b&2c&-3a\\c&2a&-3b\end{vmatrix}
> $$
> $$
> =(a+b+c)\begin{vmatrix}1&2&-3\\b&2c&-3a\\c&2a&-3b\end{vmatrix}=-6(a+b+c)\begin{vmatrix}1&1&1\\b&c&a\\c&a&b\end{vmatrix}
> $$
> $$
> =3(a+b+c)\left[(a-b)^2+(b-c)^2+(c-a)^2\right],
> $$
> 由于三条直线互不相同，所以 $(a-b)^2+(b-c)^2+(c-a)^2\ne0$，故 $a+b+c=0$.
>
> “充分性”. 由 $a+b+c=0$，则从必要性的证明可知，$|\overline{A}|=0$，故秩$(\overline{A})<3$.
>
> 由于 $\begin{vmatrix}a&2b\\b&2c\end{vmatrix}=2(ac-b^2)=-2\left[\left(a+\frac{1}{2}b\right)^2+\frac{3}{4}b^2\right]\ne0$，故秩$(\overline{A})=2$. 于是，秩$(A)=$秩$(\overline{A})=2$. 因此方程组(*)有唯一解，即三直线 $l_1,l_2,l_3$ 交于一点.
>
> 方法2：“必要性”. 设三直线交于一点 $(x_0,y_0)$，则 $\begin{pmatrix}x_0\\y_0\\1\end{pmatrix}$ 为 $BX=0$ 的非零解，其中 $B=\begin{pmatrix}2a&2b&3c\\2b&2c&3a\\2c&2a&3b\end{pmatrix}$.
>
> 所以 $|B|=0$. 而
> $$
> |B|=\begin{vmatrix}2a&2b&3c\\2b&2c&3a\\2c&2a&3b\end{vmatrix}=-6(a+b+c)\left[(a-b)^2+(b-c)^2+(c-a)^2\right],
> $$
> （解法同方法1）
>
> 但根据题设 $(a-b)^2+(b-c)^2+(c-a)^2\ne0$，故 $a+b+c=0$.
>
> “充分性”：考虑线性方程组
> $$
> \begin{cases}
> ax+2by=-3c,\\
> bx+2cy=-3a,\\
> cx+2ay=-3b,
> \end{cases}\tag{*}
> $$
> 将方程组(*)的三个方程相加，并由 $a+b+c=0$ 可知，方程组(*)等价于方程组
> $$
> \begin{cases}
> ax+2by=-3c,\\
> bx+2cy=-3a,
> \end{cases}\tag{**}
> $$
> 因为 $\begin{vmatrix}a&2b\\b&2c\end{vmatrix}=2(ac-b^2)=-2\left[\left(a+\frac{1}{2}b\right)^2+\frac{3}{4}b^2\right]\ne0$，
>
> 故方程组(**)有唯一解，所以方程组(*)有唯一解，即三直线 $l_1,l_2,l_3$ 交于一点.

### 2004 年 · 数学三 · 第 20 题（解答，13 分）

（本题满分 13 分）设 $\alpha_1=(1,2,0)^{\mathrm{T}}$，$\alpha_2=(1,a+2,-3a)^{\mathrm{T}}$，$\alpha_3=(-1,-b-2,a+2b)^{\mathrm{T}}$，$\beta=(1,3,-3)^{\mathrm{T}}$，试讨论当 $a,b$ 为何值时，

（Ⅰ）$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；

（Ⅱ）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 唯一地线性表示，并求出表示式；

（Ⅲ）$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表示式不唯一，并求出表示式。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$a=0$ 时，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示；（Ⅱ）$a\ne 0$ 且 $a\ne b$ 时，$\beta$ 唯一表示为 $\beta=\left(1-\dfrac{1}{a}\right)\alpha_1+\dfrac{1}{a}\alpha_2$；（Ⅲ）$a=b\ne 0$ 时，表示式不唯一，$\beta=\left(1-\dfrac{1}{a}\right)\alpha_1+\left(\dfrac{1}{a}+c\right)\alpha_2+c\alpha_3$（$c$ 为任意常数）。
>
> 【分析】将 $\beta$ 可否由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示的问题转化为线性方程组 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=\beta$ 是否有解的问题即易求解。
>
> 【详解】设有数 $k_1,k_2,k_3$，使得
> $$
> k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=\beta.\tag{*}
> $$
> 记 $A=(\alpha_1,\alpha_2,\alpha_3)$。对矩阵 $(A,\beta)$ 施以初等行变换，有
> $$
> (A,\beta)=\begin{pmatrix}1&1&-1&\mid&1\\2&a+2&-b-2&\mid&3\\0&-3a&a+2b&\mid&-3\end{pmatrix}\to\begin{pmatrix}1&1&-1&\mid&1\\0&a&b&\mid&1\\0&0&a-b&\mid&0\end{pmatrix}.
> $$
> （Ⅰ）当 $a=0$ 时，有
> $$
> (A,\beta)\to\begin{pmatrix}1&1&-1&\mid&1\\0&0&b&\mid&1\\0&0&0&\mid&-1\end{pmatrix}.
> $$
> 可知 $r(A)\ne r(A,\beta)$。故方程组 $(*)$ 无解，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示。
>
> （Ⅱ）当 $a\ne 0$，且 $a\ne b$ 时，有
> $$
> (A,\beta)\to\begin{pmatrix}1&1&-1&\mid&1\\0&a&b&\mid&1\\0&0&a-b&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&1-\dfrac{1}{a}\\[4pt]0&1&0&\mid&\dfrac{1}{a}\\[4pt]0&0&1&\mid&0\end{pmatrix},
> $$
> $r(A)=r(A,\beta)=3$，方程组 $(*)$ 有唯一解：
> $$
> k_1=1-\frac{1}{a},\quad k_2=\frac{1}{a},\quad k_3=0.
> $$
> 此时 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 唯一地线性表示，其表示式为
> $$
> \beta=\left(1-\frac{1}{a}\right)\alpha_1+\frac{1}{a}\alpha_2.
> $$
> （Ⅲ）当 $a=b\ne 0$ 时，对矩阵 $(A,\beta)$ 施以初等行变换，有
> $$
> (A,\beta)\to\begin{pmatrix}1&1&-1&\mid&1\\0&a&b&\mid&1\\0&0&a-b&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&1-\dfrac{1}{a}\\[4pt]0&1&-1&\mid&\dfrac{1}{a}\\[4pt]0&0&0&\mid&0\end{pmatrix},
> $$
> $r(A)=r(A,\beta)=2$，方程组 $(*)$ 有无穷多解，其全部解为
> $$
> k_1=1-\frac{1}{a},\quad k_2=\frac{1}{a}+c,\quad k_3=c,\quad\text{其中 }c\text{ 为任意常数}.
> $$
> $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但表示式不唯一，其表示式为
> $$
> \beta=\left(1-\frac{1}{a}\right)\alpha_1+\left(\frac{1}{a}+c\right)\alpha_2+c\alpha_3.
> $$
>
> 【评注】本题属于常规题型，曾考过两次（1991，2000）。

### 2006 年 · 数学一 · 第 20 题（解答，9 分）

（本题满分 9 分）已知非齐次线性方程组
$$
\begin{cases}x_1+x_2+x_3+x_4=-1,\\4x_1+3x_2+5x_3-x_4=-1,\\ax_1+x_2+3x_3+bx_4=1\end{cases}
$$
有 3 个线性无关的解．

（Ⅰ）证明方程组系数矩阵 $A$ 的秩 $r(A)=2$；

（Ⅱ）求 $a,b$ 的值及方程组的通解．

> [!success]- 答案与解析
> **答案**：（Ⅰ）$r(A)=2$；（Ⅱ）$a=2$，$b=-3$，通解为 $X=C_1\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+C_2\begin{pmatrix}4\\-5\\0\\1\end{pmatrix}+\begin{pmatrix}2\\-3\\0\\0\end{pmatrix}$（$C_1,C_2$ 为任意常数）．
>
> （Ⅰ）令 $A=\begin{pmatrix}1&1&1&1\\4&3&5&-1\\a&1&3&b\end{pmatrix}$，$X=\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}$，$b=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$，原方程组可表示为 $AX=b$．
>
> 因为 $A$ 至少有两行不成比例，所以 $r(A)\ge 2$．
>
> 设 $\alpha_1,\alpha_2,\alpha_3$ 为 $AX=b$ 的三个线性无关解，则 $\alpha_1-\alpha_2,\alpha_1-\alpha_3$ 为 $AX=0$ 的两个解．
>
> 令 $k_1(\alpha_1-\alpha_2)+k_2(\alpha_1-\alpha_3)=0$，则 $(k_1+k_2)\alpha_1-k_1\alpha_2-k_2\alpha_3=0$，因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，所以 $k_1=k_2=0$，从而 $\alpha_1-\alpha_2,\alpha_1-\alpha_3$ 线性无关，即 $AX=0$ 至少有两个线性无关解，于是 $4-r(A)\ge 2$ 或 $r(A)\le 2$，故 $r(A)=2$．
>
> （Ⅱ）方法一
> $$
> \overline{A}=\begin{pmatrix}1&1&1&1&\mid&-1\\4&3&5&-1&\mid&-1\\a&1&3&b&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&-1&1&-5&\mid&3\\0&1-a&3-a&b-a&\mid&1+a\end{pmatrix},
> $$
> 因为 $r(A)=r(\overline{A})=2$，所以 $\dfrac{-1}{1-a}=\dfrac{1}{3-a}=\dfrac{-5}{b-a}=\dfrac{3}{1+a}$，解得 $a=2$，$b=-3$，
> $$
> \text{由 }\overline{A}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&-1&1&-5&\mid&3\\0&0&0&0&\mid&0\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&2&-4&\mid&2\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix},
> $$
> 得原方程的通解为 $X=C_1\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+C_2\begin{pmatrix}4\\-5\\0\\1\end{pmatrix}+\begin{pmatrix}2\\-3\\0\\0\end{pmatrix}$（$C_1,C_2$ 为任意常数）．
>
> 方法二 因为 $r(A)=2$，所以 $A$ 的所有三阶子式都为零．
> $$
> \text{由 }\begin{vmatrix}1&1&1\\4&3&5\\a&1&3\end{vmatrix}=0,\quad\begin{vmatrix}1&1&1\\3&5&-1\\1&3&b\end{vmatrix}=0\text{ 得 }a=2,b=-3.
> $$
> $$
> \text{由 }\overline{A}=\begin{pmatrix}1&1&1&1&\mid&-1\\4&3&5&-1&\mid&-1\\2&1&3&-3&\mid&1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&-1&1&-5&\mid&3\\0&-1&1&-5&\mid&3\end{pmatrix}\to\begin{pmatrix}1&1&1&1&\mid&-1\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&0&2&-4&\mid&2\\0&1&-1&5&\mid&-3\\0&0&0&0&\mid&0\end{pmatrix},
> $$
> 得原方程组的通解为 $X=k_1\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+k_2\begin{pmatrix}4\\-5\\0\\1\end{pmatrix}+\begin{pmatrix}2\\-3\\0\\0\end{pmatrix}$（$k_1,k_2$ 为任意常数）．
>
> > **方法点评**：设 $A$ 为 $m\times n$ 矩阵，若 $r(A)=r(A\ \vdots\ b)$ 时，$AX=b$ 有解．
> > 若 $r(A)=r$，则 $AX=0$ 的基础解系含 $n-r(A)$ 个解向量，但 $AX=b$ 线性无关的解向量组所含解向量的个数最多含 $n-r(A)+1$ 个．

### 2007 年 · 数学一 · 第 21 题（解答，11 分）

（本题满分 11 分）设线性方程组
$$
\begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0\end{cases}\tag{①}
$$
与方程
$$
x_1+2x_2+x_3=a-1\tag{②}
$$
有公共解，求 $a$ 的值及所有公共解．

> [!success]- 答案与解析
> **答案**：当 $a=1$ 时，公共解为 $X=C\begin{pmatrix}-1\\0\\1\end{pmatrix}$（$C$ 为任意常数）；当 $a=2$ 时，唯一公共解为 $X=\begin{pmatrix}0\\1\\-1\end{pmatrix}$；当 $a\ne 1$ 且 $a\ne 2$ 时，两方程组没有公共解．
>
> 【解】 令
> $$
> \begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0,\\x_1+2x_2+x_3=a-1.\end{cases}\tag{③}
> $$
> 方程组①、②有公共解的充分必要条件是方程组③有解．
> $$
> \overline{C}=\begin{pmatrix}1&1&1&\mid&0\\1&2&a&\mid&0\\1&4&a^2&\mid&0\\1&2&1&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&3&a^2-1&\mid&0\\0&1&0&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&(a-1)(a-2)&\mid&0\\0&0&1-a&\mid&a-1\end{pmatrix},
> $$
> 当 $a=1$ 时，方程组③为齐次线性方程组，两个方程组一定有公共解，
>
> 由 $C=\begin{pmatrix}1&1&1\\1&2&1\\1&4&1\\1&2&1\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&0\\0&3&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&0\\0&0&0\\0&0&0\end{pmatrix}$ 得
>
> 两方程组的公共解为 $X=C\begin{pmatrix}-1\\0\\1\end{pmatrix}$（$C$ 为任意常数）；
>
> 当 $a\ne 1$ 时，
> $$
> \overline{C}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&a-2&\mid&0\\0&0&1&\mid&-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&1&\mid&-1\\0&0&0&\mid&a-2\end{pmatrix},
> $$
> 情形一：当 $a\ne 2$ 时，因为 $r(C)\ne r(\overline{C})$，所以两个方程组没有公共解；
>
> 情形二：当 $a=2$ 时，由 $r(C)=r(\overline{C})=3$ 得两个方程组有唯一的公共解，
> $$
> \overline{C}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&1&\mid&0\\0&0&1&\mid&-1\\0&0&0&\mid&0\end{pmatrix}\to\begin{pmatrix}1&0&0&\mid&0\\0&1&0&\mid&1\\0&0&1&\mid&-1\\0&0&0&\mid&0\end{pmatrix}
> $$
> 得唯一公共解为 $X=\begin{pmatrix}0\\1\\-1\end{pmatrix}$．

### 2007 年 · 数学三 · 第 21 题（解答，11 分）

（本题满分 11 分）设线性方程组
$$
\begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0\end{cases}\tag{①}
$$
与方程组
$$
x_1+2x_2+x_3=a-1\tag{②}
$$
有公共解，求 $a$ 的值及所有公共解。

> [!success]- 答案与解析
> **答案**：当 $a=1$ 时，公共解为 $k(1,0,-1)^{\mathrm{T}}$（$k$ 为任意常数）；当 $a=2$ 时，公共解为 $(0,1,-1)^{\mathrm{T}}$。
>
> 【详解】方法 1：联立方程组
> $$
> \begin{cases}x_1+x_2+x_3=0,\\x_1+2x_2+ax_3=0,\\x_1+4x_2+a^2x_3=0,\\x_1+2x_2+x_3=a-1.\end{cases}\tag{③}
> $$
> 对联立方程组的增广矩阵作初等行变换
> $$
> (\overline{A},b)=\begin{pmatrix}1&1&1&\mid&0\\1&2&a&\mid&0\\1&4&a^2&\mid&0\\1&2&1&\mid&a-1\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&3&a^2-1&\mid&0\\0&1&0&\mid&a-1\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&a-1&\mid&1-a\\0&0&a^2-1&\mid&3-3a\end{pmatrix}\to\begin{pmatrix}1&1&1&\mid&0\\0&1&a-1&\mid&0\\0&0&a-1&\mid&1-a\\0&0&0&\mid&(a-1)(a-2)\end{pmatrix}.
> $$
> 由此知，要使此线性方程组有解，$a$ 必须满足 $(a-1)(a-2)=0$，即 $a=1$ 或 $a=2$。
>
> 当 $a=1$ 时，$r(A)=2$，联立方程组③的同解方程组为
> $$
> \begin{cases}x_1+x_2+x_3=0,\\x_2=0,\end{cases}
> $$
> 由 $r(A)=2$，方程组有 $n-r=3-2=1$ 个自由未知量。选 $x_1$ 为自由未知量，取 $x_1=1$，解得两方程组的公共解为 $k(1,0,-1)^{\mathrm{T}}$，其中 $k$ 是任意常数。
>
> 当 $a=2$ 时，联立方程组③的同解方程组为
> $$
> \begin{cases}x_1+x_2+x_3=0,\\x_2=0,\\x_3=-1,\end{cases}
> $$
> 解得两方程的公共解为 $(0,1,-1)^{\mathrm{T}}$。
>
> 方法 2：将方程组①的系数矩阵 $A$ 作初等行变换
> $$
> A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&a-1\\0&3&a^2-1\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&a-1\\0&0&(a-1)(a-2)\end{pmatrix}.
> $$
> 当 $a=1$ 时，$r(A)=2$，方程组①的同解方程组为
> $$
> \begin{cases}x_1+x_2+x_3=0,\\x_2=0,\end{cases}
> $$
> 方程组有 $n-r=3-2=1$ 个自由未知量。选 $x_1$ 为自由未知量，取 $x_1=1$，解得①的通解为 $k(1,0,-1)^{\mathrm{T}}$，其中 $k$ 是任意常数。将通解 $k(1,0,-1)^{\mathrm{T}}$ 代入方程②得 $k+0+(-k)=0$，对任意的 $k$ 成立，故当 $a=1$ 时，$k(1,0,-1)^{\mathrm{T}}$ 是①、②的公共解。
>
> 当 $a=2$ 时，$r(A)=2$，方程组①的同解方程组为
> $$
> \begin{cases}x_1+x_2+x_3=0,\\x_2+x_3=0,\end{cases}
> $$
> 方程组有 $n-r=3-2=1$ 个自由未知量。选 $x_2$ 为自由未知量，取 $x_2=1$，解得①的通解为 $\mu(0,1,-1)^{\mathrm{T}}$，其中 $\mu$ 是任意常数。将通解 $\mu(0,1,-1)^{\mathrm{T}}$ 代入方程②得 $2\mu-\mu=1$，即 $\mu=1$，故当 $a=2$ 时，①和②的公共解为 $(0,1,-1)^{\mathrm{T}}$。

### 2007 年 · 数学二 · 第 23 题（解答，11 分）

设线性方程组
$$
\begin{cases}
x_1+x_2+x_3=0,\\
x_1+2x_2+ax_3=0,\\
x_1+4x_2+a^2x_3=0,
\end{cases}\tag{①}
$$
与方程组
$$
x_1+2x_2+x_3=a-1\tag{②}
$$
有公共解，求 $a$ 的值及所有公共解.

> [!success]- 答案与解析
> **答案**：当 $a=1$ 时，公共解为 $k(1,0,-1)^{\mathrm{T}}$（$k$ 为任意常数）；当 $a=2$ 时，公共解为 $(0,1,-1)^{\mathrm{T}}$.
>
> 方法1：因为方程组(1)、(2)有公共解，将方程组联立得
> $$
> \begin{cases}
> x_1+x_2+x_3=0\\
> x_1+2x_2+ax_3=0\\
> x_1+4x_2+a^2x_3=0\\
> x_1+2x_2+x_3=a-1
> \end{cases}\tag{3}
> $$
> 对联立方程组的增广矩阵作初等行变换
> $$
> (A|b)=\begin{pmatrix}1&1&1&0\\1&2&a&0\\1&4&a^2&0\\1&2&1&a\end{pmatrix}\to\begin{pmatrix}1&1&1&0\\0&1&0&a-1\\0&0&a-1&1-a\\0&0&0&(a-1)(a-2)\end{pmatrix}
> $$
> 由此知，要使此线性方程组有解，$a$ 必须满足 $(a-1)(a-2)=0$，即 $a=1$ 或 $a=2$.
>
> 当 $a=1$ 时，$r(A)=2$，联立方程组(3)的同解方程组为 $\begin{cases}x_1+x_2+x_3=0,\\x_2=0,\end{cases}$ 由 $r(A)=2$，方程组有 $n-r=3-2=1$ 个自由未知量. 选 $x_1$ 为自由未知量，取 $x_1=1$，解得两方程组的公共解为 $k(1,0,-1)^{\mathrm{T}}$，其中 $k$ 是任意常数.
>
> 当 $a=2$ 时，联立方程组(3)的同解方程组为 $\begin{cases}x_1+x_2+x_3=0\\x_2=0\\x_3=-1\end{cases}$，解得两方程的公共解为 $(0,1,-1)^{\mathrm{T}}$.
>
> 方法2：将方程组(1)的系数矩阵 $A$ 作初等行变换
> $$
> A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&1&a-1\\0&0&(a-1)(a-2)\end{pmatrix}
> $$
> 当 $a=1$ 时，$r(A)=2$，方程组(1)的同解方程组为 $\begin{cases}x_1+x_2+x_3=0,\\x_2=0,\end{cases}$ 由 $r(A)=2$，方程组有 $n-r=3-2=1$ 个自由未知量. 选 $x_1$ 为自由未知量，取 $x_1=1$，解得(1)的通解为 $k(1,0,-1)^{\mathrm{T}}$，其中 $k$ 是任意常数. 将通解 $k(1,0,-1)^{\mathrm{T}}$ 代入方程(2)得 $k+0+(-k)=0$，对任意的 $k$ 成立，故当 $a=1$ 时，$k(1,0,-1)^{\mathrm{T}}$ 是(1)、(2)的公共解.
>
> 当 $a=2$ 时，$r(A)=2$，方程组(1)的同解方程组为 $\begin{cases}x_1+x_2+x_3=0,\\x_2+x_3=0,\end{cases}$ 由 $r(A)=2$，方程组有 $n-r=3-2=1$ 个自由未知量. 选 $x_2$ 为自由未知量，取 $x_2=1$，解得(1)的通解为 $\mu(0,1,-1)^{\mathrm{T}}$，其中 $\mu$ 是任意常数. 将通解 $\mu(0,1,-1)^{\mathrm{T}}$ 代入方程(2)得 $2\mu-\mu=1$，即 $\mu=1$，故当 $a=2$ 时，(1)和(2)的公共解为 $(0,1,-1)^{\mathrm{T}}$.

### 2008 年 · 数学三 · 第 20 题（解答，12 分）

（本题满分 12 分）设 $n$ 元线性方程组 $Ax=b$，其中
$$
A=\begin{pmatrix}2a&1&&&\\a^2&2a&1&&\\&\ddots&\ddots&\ddots&\\&&a^2&2a&1\\&&&a^2&2a\end{pmatrix}_{n\times n},\quad
x=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix},\quad
b=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}.
$$
（Ⅰ）证明行列式 $|A|=(n+1)a^n$；

（Ⅱ）当 $a$ 为何值时，该方程组有唯一解，并求 $x_1$；

（Ⅲ）当 $a$ 为何值时，该方程组有无穷多解，并求通解。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$|A|=(n+1)a^n$；（Ⅱ）$a\ne 0$ 时方程组有唯一解，$x_1=\dfrac{n}{(n+1)a}$；（Ⅲ）$a=0$ 时方程组有无穷多解，通解为 $k(1,0,0,\cdots,0)^{\mathrm{T}}+(0,1,0,\cdots,0)^{\mathrm{T}}$，$k$ 为任意常数。
>
> （Ⅰ）**证法一（化三角形）**
> $$
> |A|=\begin{vmatrix}2a&1&&&&\\a^2&2a&1&&&\\&a^2&2a&\ddots&&\\&&\ddots&\ddots&\ddots&\\&&&a^2&2a&1\\&&&&a^2&2a\end{vmatrix}
> \xrightarrow{r_2-\frac{1}{2}ar_1}
> \begin{vmatrix}2a&1&&&&\\0&\dfrac{3a}{2}&1&&&\\&a^2&2a&\ddots&&\\&&\ddots&\ddots&\ddots&\\&&&a^2&2a&1\\&&&&a^2&2a\end{vmatrix}
> =\cdots
> $$
> $$
> \xrightarrow{r_n-\frac{n-1}{n}ar_{n-1}}
> \begin{vmatrix}2a&1&&&&\\0&\dfrac{3a}{2}&1&&&\\&0&\dfrac{4a}{3}&\ddots&&\\&&\ddots&\ddots&\ddots&\\&&&0&\dfrac{(n+1)a}{n}\end{vmatrix}
> =2a\cdot\frac{3a}{2}\cdot\frac{4a}{3}\cdot\cdots\cdot\frac{(n+1)a}{n}=(n+1)a^n.
> $$
>
> **证法二（数学归纳法）** 记 $D_n=|A|$，下面用数学归纳法证明 $D_n=(n+1)a^n$。
>
> 当 $n=1$ 时，$D_1=2a$，结论成立。
>
> 当 $n=2$ 时，$D_2=\begin{vmatrix}2a&1\\a^2&2a\end{vmatrix}=3a^2$，结论成立。
>
> 假设结论对小于 $n$ 的情况成立。将 $D_n$ 按第 1 行展开得
> $$
> D_n=2aD_{n-1}-\begin{vmatrix}a^2&1&&&\\0&2a&1&&\\&a^2&2a&\ddots&\\&&\ddots&\ddots&\ddots&\\&&&a^2&2a\end{vmatrix}
> =2aD_{n-1}-a^2D_{n-2}=2ana^{n-1}-a^2(n-1)a^{n-2}=(n+1)a^n.
> $$
> 故 $|A|=(n+1)a^n$。
>
> **证法三（递推）** 记 $D_n=|A|$，将其按第一列展开得 $D_n=2aD_{n-1}-a^2D_{n-2}$，
>
> 所以
> $$
> D_n-aD_{n-1}=aD_{n-1}-a^2D_{n-2}=a(D_{n-1}-aD_{n-2})
> =a^2(D_{n-2}-aD_{n-3})=\cdots=a^{n-2}(D_2-aD_1)=a^n.
> $$
>
> （Ⅱ）因为方程组有唯一解，所以由 $Ax=b$ 知 $|A|\ne 0$，又 $|A|=(n+1)a^n$，故 $a\ne 0$。
>
> 由克莱姆法则，将 $D_n$ 的第 1 列换成 $b$，得行列式为
> $$
> \begin{vmatrix}1&1&&&&\\0&2a&1&&&\\&a^2&2a&\ddots&&\\&&\ddots&\ddots&\ddots&\\&&&a^2&2a&1\\&&&&a^2&2a\end{vmatrix}_{n\times n}
> =\begin{vmatrix}2a&1&&&&\\a^2&2a&1&&&\\&a^2&2a&\ddots&&\\&&\ddots&\ddots&\ddots&\\&&&a^2&2a&1\\&&&&a^2&2a\end{vmatrix}_{(n-1)\times(n-1)}
> =D_{n-1}=na^{n-1}.
> $$
> 所以
> $$
> x_1=\frac{D_{n-1}}{D_n}=\frac{n}{(n+1)a}.
> $$
>
> （Ⅲ）方程组有无穷多解，由 $|A|=0$，有 $a=0$，则方程组为
> $$
> \begin{pmatrix}0&1&&&&\\0&0&1&&&\\&\ddots&\ddots&\ddots&&\\&&&0&1&\\&&&&0\end{pmatrix}\begin{pmatrix}x_1\\x_2\\\vdots\\x_{n-1}\\x_n\end{pmatrix}=\begin{pmatrix}1\\0\\\vdots\\0\\0\end{pmatrix},
> $$
> 此时方程组系数矩阵的秩和增广矩阵的秩均为 $n-1$，所以方程组有无穷多解，其通解为
> $$
> k(1\ 0\ 0\ \cdots\ 0)^{\mathrm{T}}+(0\ 1\ 0\ \cdots\ 0)^{\mathrm{T}},\quad k\ \text{为任意常数}.
> $$

### 2008 年 · 数学一 · 第 21 题（解答，12 分）

（本题满分 12 分）设 $n$ 元线性方程组 $Ax=b$，其中
$$
A=\begin{pmatrix}2a&1&&&\\a^2&2a&1&&\\&\ddots&\ddots&\ddots&\\&&a^2&2a&1\\&&&a^2&2a\end{pmatrix},\quad
x=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix},\quad
b=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}.
$$
（Ⅰ）证明行列式 $|A|=(n+1)a^n$；

（Ⅱ）当 $a$ 为何值时，该方程组有唯一解，并求 $x_1$；

（Ⅲ）当 $a$ 为何值时，该方程组有无穷多解，并求通解。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$|A|=(n+1)a^n$；（Ⅱ）$a\ne 0$ 时方程组有唯一解，$x_1=\dfrac{n}{(n+1)a}$；（Ⅲ）$a=0$ 时方程组有无穷多解，通解为 $X=C\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}+\begin{pmatrix}0\\1\\0\\\vdots\\0\end{pmatrix}$（$C$ 为任意常数）。
>
> （Ⅰ）**方法一（数学归纳法）** 当 $n=1$ 时，$|A|=D_1=2a$，结论显然成立；
>
> 设当 $n=k$ 时，$|A|=D_k=(k+1)a^k$；当 $n=k+1$ 时，
> $$
> |A|=D_{k+1}=2aD_k-a^2D_{k-1}=2a(k+1)a^k-ka^{k+1}=2(k+1)a^{k+1}-ka^{k+1}=(k+2)a^{k+1},
> $$
> 由数学归纳法，对一切的自然数 $n$，有 $|A|=(n+1)a^n$。
>
> **方法二**
> $$
> |A|=\begin{vmatrix}2a&1&0&\cdots&0\\a^2&2a&1&\cdots&0\\0&a^2&2a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\0&0&0&\cdots&2a\end{vmatrix}
> =\begin{vmatrix}2a&1&0&\cdots&0\\0&\dfrac{3a}{2}&1&\cdots&0\\0&a^2&2a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\0&0&0&\cdots&2a\end{vmatrix}
> $$
> $$
> =\cdots=\begin{vmatrix}2a&1&0&\cdots&0\\0&\dfrac{3a}{2}&1&\cdots&0\\0&0&\dfrac{4a}{3}&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\0&0&0&\cdots&\dfrac{(n+1)a}{n}\end{vmatrix}=(n+1)a^n.
> $$
>
> **方法三** 令 $D_n=|A|$，将 $D_n$ 按第一列展开，得 $D_n=2aD_{n-1}-a^2D_{n-2}$，从而
> $$
> D_n-aD_{n-1}=a(D_{n-1}-aD_{n-2}),
> $$
> 由递推关系得
> $$
> D_n-aD_{n-1}=a(D_{n-1}-aD_{n-2})=\cdots=a^{n-2}(D_2-aD_1)=a^n,
> $$
> 于是
> $$
> D_n=aD_{n-1}+a^n=a(aD_{n-2}+a^{n-1})+a^n=a^2D_{n-2}+2a^n=\cdots=a^{n-1}D_1+(n-1)a^n=(n+1)a^n.
> $$
>
> （Ⅱ）当 $r(A)=n$ 或 $|A|\ne 0$，即 $a\ne 0$ 时，方程组有唯一解。由
> $$
> D_1=\begin{vmatrix}1&1&0&\cdots&0\\0&2a&1&\cdots&0\\0&a^2&2a&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&2a\end{vmatrix}=na^{n-1},
> $$
> 得
> $$
> x_1=\frac{D_1}{D}=\frac{n}{(n+1)a}.
> $$
>
> （Ⅲ）当 $r(A)<n$ 或 $|A|=0$，即 $a=0$ 时，方程组 $AX=b$ 有无数个解，由
> $$
> \overline{A}=\begin{pmatrix}0&1&0&\cdots&0&1\\0&0&1&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&1&0\\0&0&0&\cdots&0&0\end{pmatrix},
> $$
> 得通解为
> $$
> X=C\begin{pmatrix}1\\0\\0\\\vdots\\0\end{pmatrix}+\begin{pmatrix}0\\1\\0\\\vdots\\0\end{pmatrix}
> $$
> （$C$ 为任意常数）。

### 2008 年 · 数学二 · 第 22 题（解答，12 分）

设 $n$ 元线性方程组 $Ax=b$，其中
$$
A=\begin{pmatrix}
2a&1&&&&\\
a^2&2a&1&&&\\
&a^2&2a&\ddots&&\\
&&\ddots&\ddots&1&\\
&&&a^2&2a
\end{pmatrix}_{n\times n},\qquad
x=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix},\qquad
b=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}.
$$
（Ⅰ）证明行列式 $|A|=(n+1)a^n$；

（Ⅱ）当 $a$ 为何值时，该方程组有唯一解，并求 $x_1$；

（Ⅲ）当 $a$ 为何值时，该方程组有无穷多解，并求通解.

> [!success]- 答案与解析
> **答案**：（Ⅰ）见解析；（Ⅱ）当 $a\ne0$ 时方程组有唯一解，$x_1=\frac{n}{(n+1)a}$；（Ⅲ）当 $a=0$ 时方程组有无穷多解，通解为 $k(1,0,0,\cdots,0)^{\mathrm{T}}+(0,1,0,\cdots,0)^{\mathrm{T}}$，$k$ 为任意常数.
>
> （Ⅰ）证法一：
> $$
> |A|=\begin{vmatrix}2a&1&&&\\a^2&2a&1&&\\&a^2&2a&\ddots&\\&&\ddots&\ddots&1\\&&&a^2&2a\end{vmatrix}\xrightarrow{r_2-\frac{1}{2}ar_1}\begin{vmatrix}2a&1&&&\\0&\frac{3a}{2}&1&&\\a^2&2a&\ddots&\\&&\ddots&\ddots&1\\&&&a^2&2a\end{vmatrix}=\cdots
> $$
> $$
> \xrightarrow{r_n-\frac{n-1}{n}ar_{n-1}}\begin{vmatrix}2a&1&&&\\0&\frac{3a}{2}&1&&\\&0&\frac{4a}{3}&\ddots&\\&&\ddots&\ddots&1\\&&&0&\frac{(n+1)a}{n}\end{vmatrix}=2a\cdot\frac{3a}{2}\cdot\frac{4a}{3}\cdot\cdots\cdot\frac{(n+1)a}{n}=(n+1)a^n
> $$
> 证法二：记 $D_n=|A|$，下面用数学归纳法证明 $D_n=(n+1)a^n$.
>
> 当 $n=1$ 时，$D_1=2a$，结论成立.
>
> 当 $n=2$ 时，$D_2=\begin{vmatrix}2a&1\\a^2&2a\end{vmatrix}=3a^2$，结论成立.
>
> 假设结论对小于 $n$ 的情况成立. 将 $D_n$ 按第 $1$ 行展开得
> $$
> D_n=2aD_{n-1}-a^2D_{n-2}=2ana^{n-1}-a^2(n-1)a^{n-2}=(n+1)a^n
> $$
> 故 $|A|=(n+1)a^n$.
>
> 证法三：记 $D_n=|A|$，将其按第一列展开得 $D_n=2aD_{n-1}-a^2D_{n-2}$，所以
> $$
> D_n-aD_{n-1}=aD_{n-1}-a^2D_{n-2}=a(D_{n-1}-aD_{n-2})
> $$
> $$
> =a^2(D_{n-2}-aD_{n-3})=\cdots=a^{n-2}(D_2-aD_1)=a^n
> $$
> 即 $D_n=a^n+aD_{n-1}=a^n+a(a^{n-1}+aD_{n-2})=2a^n+a^2D_{n-2}=\cdots=(n-1)a^n+a^{n-1}D_1=(n-1)a^n+a^{n-1}\cdot2a=(n+1)a^n$.
>
> （Ⅱ）因为方程组有唯一解，所以由 $Ax=B$ 知 $|A|\ne0$，又 $|A|=(n+1)a^n$，故 $a\ne0$.
>
> 由克莱姆法则，将 $D_n$ 的第 $1$ 列换成 $b$，得行列式为
> $$
> \begin{vmatrix}1&1&&&\\0&2a&1&&\\a^2&2a&\ddots&\\&\ddots&\ddots&1\\&&a^2&2a\end{vmatrix}_{n\times n}=\begin{vmatrix}2a&1&&&\\a^2&2a&1&&\\&a^2&2a&\ddots&\\&&\ddots&\ddots&1\\&&&a^2&2a\end{vmatrix}_{(n-1)\times(n-1)}=D_{n-1}=na^{n-1}
> $$
> 所以 $x_1=\frac{D_{n-1}}{D_n}=\frac{n}{(n+1)a}$.
>
> （Ⅲ）方程组有无穷多解，由 $|A|=0$，有 $a=0$，则方程组为
> $$
> \begin{pmatrix}0&1&&&\\0&0&1&&\\&&\ddots&\ddots&\\&&&0&1\\&&&&0\end{pmatrix}\begin{pmatrix}x_1\\x_2\\\vdots\\x_{n-1}\\x_n\end{pmatrix}=\begin{pmatrix}1\\0\\\vdots\\0\\0\end{pmatrix}
> $$
> 此时方程组系数矩阵的秩和增广矩阵的秩均为 $n-1$，所以方程组有无穷多解，其通解为 $k(1,0,0,\cdots,0)^{\mathrm{T}}+(0,1,0,\cdots,0)^{\mathrm{T}}$，$k$ 为任意常数.

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

### 2010 年 · 数学三 · 第 20 题（解答，11 分）

（本题满分 11 分）设
$$
A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix},\quad b=\begin{pmatrix}a\\1\\1\end{pmatrix}.
$$
已知线性方程组 $Ax=b$ 存在两个不同的解。

（Ⅰ）求 $\lambda$，$a$；

（Ⅱ）求方程组 $Ax=b$ 的通解。

> [!success]- 答案与解析
> **答案**：
> （Ⅰ）$\lambda=-1$，$a=-2$；
>
> （Ⅱ）$x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac32\\-\frac12\\0\end{pmatrix}$（$k$ 为任意常数）。
>
> 因为方程组有两个不同的解，所以可以判断方程组增广矩阵的秩小于 3，进而可以通过秩的关系求解方程组中未知参数，有以下两种方法。
>
> 方法 1：（Ⅰ）已知 $Ax=b$ 有 2 个不同的解，故 $r(A)=r(\overline{A})<3$，对增广矩阵进行初等行变换，得
> $$
> \overline{A}=\begin{pmatrix}\lambda&1&1&a\\0&\lambda-1&0&1\\1&1&\lambda&1\end{pmatrix}\to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\\lambda&1&1&a\end{pmatrix}\to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\0&1-\lambda&1-\lambda^2&a-\lambda\end{pmatrix}
> $$
> $$
> \to\begin{pmatrix}1&1&\lambda&1\\0&\lambda-1&0&1\\0&0&1-\lambda^2&a-\lambda+1\end{pmatrix}.
> $$
> 当 $\lambda=1$ 时，$\overline{A}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\0&0&0&a\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&0&0&1\\0&0&0&0\end{pmatrix}$，此时，$r(A)\ne r(\overline{A})$，故 $Ax=b$ 无解（舍去）。
>
> 当 $\lambda=-1$ 时，$\overline{A}\to\begin{pmatrix}1&1&-1&1\\0&-2&0&1\\0&0&0&a+2\end{pmatrix}$，由于 $r(A)=r(\overline{A})<3$，所以 $a=-2$，故 $\lambda=-1$，$a=-2$。
>
> 方法 2：已知 $Ax=b$ 有 2 个不同的解，故 $r(A)=r(\overline{A})<3$，因此 $|A|=0$，即
> $$
> |A|=\begin{vmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{vmatrix}=(\lambda-1)^2(\lambda+1)=0,
> $$
> 知 $\lambda=1$ 或 $-1$。
>
> 当 $\lambda=1$ 时，$r(A)=1\ne r(\overline{A})=2$，此时，$Ax=b$ 无解，因此 $\lambda=-1$。由 $r(A)=r(\overline{A})$，得 $a=-2$。
>
> （Ⅱ）对增广矩阵做初等行变换
> $$
> \overline{A}=\begin{pmatrix}-1&1&1&-2\\0&-2&0&1\\1&1&-1&1\end{pmatrix}\to\begin{pmatrix}1&-1&-1&2\\0&2&0&-1\\0&0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&-1&\frac32\\0&1&0&-\frac12\\0&0&0&0\end{pmatrix}.
> $$
> 可知原方程组等价为
> $$
> \begin{cases}x_1-x_3=\frac32,\\x_2=-\frac12,\end{cases}
> $$
> 写成向量的形式，即
> $$
> \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=x_3\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac32\\-\frac12\\0\end{pmatrix}.
> $$
> 因此 $Ax=b$ 的通解为
> $$
> x=k\begin{pmatrix}1\\0\\1\end{pmatrix}+\begin{pmatrix}\frac32\\-\frac12\\0\end{pmatrix},
> $$
> 其中 $k$ 为任意常数。

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

### 2012 年 · 数学三 · 第 20 题（解答，11 分）

（本题满分 11 分）设
$$
A=\begin{pmatrix}1&a&0&0\\0&1&a&0\\0&0&1&a\\a&0&0&1\end{pmatrix},\qquad \beta=\begin{pmatrix}1\\-1\\0\\0\end{pmatrix}.
$$
（Ⅰ）计算行列式 $|A|$；

（Ⅱ）当实数 $a$ 为何值时，方程组 $Ax=\beta$ 有无穷多解，并求其通解。

> [!success]- 答案与解析
> **答案**：（Ⅰ）$|A|=1-a^4$；（Ⅱ）$a=-1$ 时方程组有无穷多解，通解为 $x=k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}$（$k$ 为任意常数）。
>
> （Ⅰ）
> $$
> |A|=1\times\begin{vmatrix}1&a&0\\0&1&a\\0&0&1\end{vmatrix}+a\times(-1)^{4+1}\begin{vmatrix}a&0&0\\1&a&0\\0&1&a\end{vmatrix}=1-a^4.
> $$
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
> 可知导出组的基础解系为 $\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$，非齐次方程的特解为 $\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}$，故其通解为
> $$
> x=k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}.
> $$

### 2012 年 · 数学二 · 第 22 题（解答，11 分）

设
$$
A=\begin{pmatrix}1&a&0&0\\0&1&a&0\\0&0&1&a\\a&0&0&1\end{pmatrix},\quad \beta=\begin{pmatrix}1\\-1\\0\\0\end{pmatrix}.
$$
（Ⅰ）计算行列式 $|A|$；

（Ⅱ）当实数 $a$ 为何值时，方程组 $Ax=\beta$ 有无穷多解，并求其通解.

> [!success]- 答案与解析
> **答案**：（Ⅰ）$|A|=1-a^4$；（Ⅱ）$a=-1$，通解 $x=k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}$（$k$ 为任意常数）
>
> （Ⅰ）
> $$
> |A|=\begin{vmatrix}1&a&0&0\\0&1&a&0\\0&0&1&a\\a&0&0&1\end{vmatrix}=1\times\begin{vmatrix}1&a&0\\0&1&a\\0&0&1\end{vmatrix}+a\times(-1)^{4+1}\begin{vmatrix}a&0&0\\1&a&0\\0&1&a\end{vmatrix}=1-a^4
> $$
> （Ⅱ）
> $$
> \left(\begin{array}{cccc|c}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\a&0&0&1&0\end{array}\right)\to\left(\begin{array}{cccc|c}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&-a^2&0&1&-a\end{array}\right)\to\left(\begin{array}{cccc|c}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&0&a^3&1&-a-a^2\end{array}\right)
> $$
> $$
> \to\left(\begin{array}{cccc|c}1&a&0&0&1\\0&1&a&0&-1\\0&0&1&a&0\\0&0&0&1-a^4&-a-a^2\end{array}\right)
> $$
> 可知当要使得原线性方程组有无穷多解，则有 $1-a^4=0$ 及 $-a-a^2=0$，可知 $a=-1$.
>
> 此时，原线性方程组增广矩阵为
> $$
> \left(\begin{array}{cccc|c}1&-1&0&0&1\\0&1&-1&0&-1\\0&0&1&-1&0\\0&0&0&0&0\end{array}\right),
> $$
> 进一步化为行最简形得
> $$
> \left(\begin{array}{cccc|c}1&0&0&-1&0\\0&1&0&-1&-1\\0&0&1&-1&0\\0&0&0&0&0\end{array}\right),
> $$
> 可知导出组的基础解系为 $\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$，非齐次方程的特解为 $\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}$，故其通解为
> $$
> k\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}0\\-1\\0\\0\end{pmatrix}.
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

### 2013 年 · 数学二 · 第 22 题（解答，11 分）

设 $A=\begin{pmatrix}1&a\\1&0\end{pmatrix},B=\begin{pmatrix}0&1\\1&b\end{pmatrix}$. 当 $a,b$ 为何值时，存在矩阵 $C$ 使得 $AC-CA=B$，并求所有矩阵 $C$.

> [!success]- 答案与解析
> **答案**：$a=-1,b=0$；$C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}$（$k_1,k_2$ 任意）
>
> 由题意可知矩阵 $C$ 为 2 阶矩阵，故可设 $C=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$，则由 $AC-CA=B$ 可得线性方程组：
> $$
> \begin{cases}-x_2+ax_3=0\\-ax_1+x_2+ax_4=1\\x_1-x_3-x_4=1\\x_2-ax_3=b\end{cases}\quad (1)
> $$
> $$
> \left(\begin{array}{cccc|c}0&-1&a&0&0\\-a&1&0&a&1\\1&0&-1&-1&1\\0&1&-a&0&b\end{array}\right)\to\left(\begin{array}{cccc|c}1&0&-1&-1&1\\-a&1&0&a&1\\0&-1&a&0&0\\0&1&-a&0&b\end{array}\right)\to\left(\begin{array}{cccc|c}1&0&-1&-1&1\\0&1&-a&0&1+a\\0&-1&a&0&0\\0&1&-a&0&b\end{array}\right)
> $$
> $$
> \to\left(\begin{array}{cccc|c}1&0&-1&-1&1\\0&1&-a&0&1+a\\0&0&0&0&1+a\\0&0&0&0&b-1-a\end{array}\right)
> $$
> 由于方程组 (1) 有解，故有 $1+a=0,b-1-a=0$，即 $a=-1,b=0$，从而有
> $$
> \left(\begin{array}{cccc|c}0&-1&a&0&0\\-a&1&0&a&1\\1&0&-1&-1&1\\0&1&-a&0&b\end{array}\right)\to\left(\begin{array}{cccc|c}1&0&-1&-1&1\\0&1&1&0&0\\0&0&0&0&0\\0&0&0&0&0\end{array}\right),
> $$
> 故有
> $$
> \begin{cases}x_1=k_1+k_2+1\\x_2=-k_1\\x_3=k_1\\x_4=k_2\end{cases},\quad \text{其中 }k_1,k_2\text{ 任意}.
> $$
> 从而有 $C=\begin{pmatrix}k_1+k_2+1&-k_1\\k_1&k_2\end{pmatrix}$.

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

### 2015 年 · 数学二 · 第 7 题（选择，4 分）

设矩阵
$$
A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix},\quad b=\begin{pmatrix}1\\d\\d^2\end{pmatrix}.
$$
若集合 $\Omega=\{1,2\}$，则线性方程组 $Ax=b$ 有无穷多解的充分必要条件为（　）

（A）$a\notin\Omega,\ d\notin\Omega$　（B）$a\notin\Omega,\ d\in\Omega$　（C）$a\in\Omega,\ d\notin\Omega$　（D）$a\in\Omega,\ d\in\Omega$

> [!success]- 答案与解析
> **答案**：（D）
>
> $$
> (A,b)=\begin{pmatrix}1&1&1&1\\1&2&a&d\\1&4&a^2&d^2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&a-1&d-1\\0&0&(a-1)(a-2)&(d-1)(d-2)\end{pmatrix},
> $$
> 由 $r(A)=r(A,b)<3$，故 $a=1$ 或 $a=2$，同时 $d=1$ 或 $d=2$。故选（D）。

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

### 2016 年 · 数学二 · 第 22 题（解答，11 分）

（本题满分 11 分）设矩阵
$$
A=\begin{pmatrix}1&1&1-a\\1&0&a\\a+1&1&a+1\end{pmatrix},\quad\beta=\begin{pmatrix}0\\1\\2a-2\end{pmatrix},
$$
且方程组 $Ax=\beta$ 无解。

（Ⅰ）求 $a$ 的值；

（Ⅱ）求方程组 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解。

> [!success]- 答案与解析
> **答案**：
> （Ⅰ）$a=0$；（Ⅱ）通解为
> $$
> x=(1,-2,0)^{\mathrm{T}}+k(0,-1,1)^{\mathrm{T}}\quad(k\ \text{为任意常数})
> $$
>
> 本题主要考查非齐次线性方程组有解的条件以及求线性方程组的通解。
>
> 已知 $Ax=\beta$ 无解，我们可以利用 $r(A,\beta)\ne r(A)$ 来讨论参数 $a$ 的值。
>
> 解（Ⅰ）由于 $Ax=\beta$ 无解，故由非齐次线性方程组有解的充分必要条件可知，$r(A,\beta)\ne r(A)$。
> $$
> (A,\beta)=\begin{pmatrix}1&1&1-a&0\\1&0&a&1\\a+1&1&a+1&2a-2\end{pmatrix}\xrightarrow[r_3-(a+1)r_1]{r_2-r_1}\begin{pmatrix}1&1&1-a&0\\0&-1&2a-1&1\\0&-a&a^2+a&2a-2\end{pmatrix}
> $$
> $$
> \xrightarrow[r_3^*+ar_2^{**}]{r_2\times(-1)}\begin{pmatrix}1&1&1-a&0\\0&1&1-2a&-1\\0&0&-a^2+2a&a-2\end{pmatrix}.
> $$
> （$r_i^*$ 表示对第 $i$ 行作初等行变换后所得新的第 $i$ 行，每做一次初等行变换，加一个 $*$。）
>
> 由上面的式子可知，$r(A)\ge2$。从而，$Ax=\beta$ 无解当且仅当 $r(A)=2$ 且 $r(A,\beta)=3$。此时，$-a^2+2a=0$，且 $a-2\ne0$，解得 $a=0$。
>
> （Ⅱ）当 $a=0$ 时，$A^{\mathrm{T}}=\begin{pmatrix}1&1&1\\1&0&1\\1&0&1\end{pmatrix},A^{\mathrm{T}}A=\begin{pmatrix}3&2&2\\2&2&2\\2&2&2\end{pmatrix},A^{\mathrm{T}}\beta=\begin{pmatrix}-1\\-2\\-2\end{pmatrix}$。
> $$
> (A^{\mathrm{T}}A,A^{\mathrm{T}}\beta)=\begin{pmatrix}3&2&2&-1\\2&2&2&-2\\2&2&2&-2\end{pmatrix}\xrightarrow[r_2\times\frac12]{r_3-r_2}\begin{pmatrix}3&2&2&-1\\1&1&1&-1\\0&0&0&0\end{pmatrix}\xrightarrow[r_2-r_1^*]{r_1-2r_2^*}\begin{pmatrix}1&0&0&1\\1&1&1&-1\\0&0&0&0\end{pmatrix}
> $$
> $$
> \xrightarrow{r_2^*-r_1^*}\begin{pmatrix}1&0&0&1\\0&1&1&-2\\0&0&0&0\end{pmatrix}.
> $$
> $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 对应的齐次线性方程组等价于 $\begin{cases}x_1=0,\\x_2+x_3=0,\end{cases}$ 即 $(0,-1,1)^{\mathrm{T}}$ 为该方程组的一个基础解系。又因为 $(1,-2,0)^{\mathrm{T}}$ 是 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的一个特解，所以 $A^{\mathrm{T}}Ax=A^{\mathrm{T}}\beta$ 的通解为 $k(0,-1,1)^{\mathrm{T}}+(1,-2,0)^{\mathrm{T}}$，其中 $k$ 为任意常数。
>
> 注 在第（Ⅰ）问中，还可以利用 $|A|=0$ 求得 $a=0$ 或 $a=2$。讨论 $a=0$ 与 $a=2$ 的情况可知，当 $a=2$ 时，方程组有无穷多解，不符合题意。

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

### 2019 年 · 数学三 · 第 13 题（填空，4 分）

已知矩阵 $A=\begin{pmatrix}1&0&-1\\1&1&-1\\0&1&a^2-1\end{pmatrix}$，$b=\begin{pmatrix}0\\1\\a\end{pmatrix}$，若线性方程组 $Ax=b$ 有无穷多解，则 $a=$ $\underline{\qquad}$.

> [!success]- 答案与解析
> **答案**：1
>
> 由题意得
> $$
> \overline{A}=\left(\begin{array}{ccc|c}1&0&-1&0\\1&1&-1&1\\0&1&a^2-1&a\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&-1&0\\0&1&0&1\\0&1&a^2-1&a\end{array}\right)\to\left(\begin{array}{ccc|c}1&0&-1&0\\0&1&0&1\\0&0&a^2-1&a-1\end{array}\right).
> $$
> 要使 $Ax=b$ 有无穷多解，则应使 $r(A)=r(\overline{A})<3$，
> 当 $a^2-1=a-1=0$，即 $a=1$ 时，$r(A)=r(\overline{A})=2<3$.
> 故应填 1.

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

### 2023 年 · 数学三 · 第 15 题（填空，5 分）

已知线性方程组
$$
\begin{cases}
ax_1+x_3=1,\\
x_1+ax_2+x_3=0,\\
x_1+2x_2+ax_3=0,\\
ax_1+bx_2=2
\end{cases}
$$
有解，其中 $a,b$ 为常数。若
$$
\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=4,
$$
则
$$
\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=\underline{\qquad}.
$$

> [!success]- 答案与解析
> **答案**：$8$
>
> 已知题中方程组有解，所以 $r(A)=r(B)$，
> $$
> A=\begin{bmatrix}a&0&1\\1&a&1\\1&2&a\end{bmatrix},\quad B=\begin{bmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{bmatrix}.
> $$
> 又因为
> $$
> \begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=4\ne 0,
> $$
> 所以 $r(A)=3$，从而 $r(B)=3$，$|B|=0$。
> $$
> |B|=\begin{vmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{vmatrix}\xrightarrow{\text{按 4 列展开}}-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}+2\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=8-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=0.
> $$
> 所以
> $$
> \begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=8.
> $$

### 2023 年 · 数学二 · 第 16 题（填空，5 分）

已知线性方程组
$$
\begin{cases}ax_1+x_3=1,\\x_1+ax_2+x_3=0,\\x_1+2x_2+ax_3=0,\\ax_1+bx_2=2\end{cases}
$$
有解，其中 $a,b$ 为常数. 若
$$
\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=4,
$$
则
$$
\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=\underline{\qquad}.
$$

> [!success]- 答案与解析
> **答案**：$8$
>
> 【解】
> $$
> \overline{A}=\begin{pmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{pmatrix},
> $$
> 因为原方程组有解，所以 $r(A)=r(\overline{A})\le 3<4$，从而 $|\overline{A}|=0$，
>
> 由
> $$
> |\overline{A}|=\begin{vmatrix}a&0&1&1\\1&a&1&0\\1&2&a&0\\a&b&0&2\end{vmatrix}=-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}+2\begin{vmatrix}a&0&1\\1&a&1\\1&2&a\end{vmatrix}=8-\begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=0
> $$
> 得
> $$
> \begin{vmatrix}1&a&1\\1&2&a\\a&b&0\end{vmatrix}=8.
> $$

### 2025 年 · 数学三 · 第 5 题（选择，5 分）

已知 $A$ 是 $m\times n$ 的矩阵，$\beta$ 是 $m$ 维非零向量。若 $A$ 有 $k$ 阶非零子式，则（ ）

（A）当 $k=m$ 时 $Ax=\beta$ 有解　（B）当 $k=m$ 时 $Ax=\beta$ 无解

（C）当 $k<m$ 时 $Ax=\beta$ 有解　（D）当 $k<m$ 时 $Ax=\beta$ 无解

> [!success]- 答案与解析
> **答案**：（A）
>
> $k=m$ 时，$r(A)=r(\overline{A})=m$ 进而 $Ax=\beta$ 有解，A 正确。

### 2025 年 · 数学一 · 第 6 题（选择，5 分）

设 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是 $n$ 维列向量，向量 $\alpha_1,\alpha_2$ 线性无关，$\alpha_1,\alpha_2,\alpha_3$ 线性相关，且 $\alpha_1+\alpha_2+\alpha_4=0$。空间直角坐标系中关于 $x,y,z$ 的方程 $x\alpha_1+y\alpha_2+z\alpha_3=\alpha_4$（　）

（A）过原点的一个平面　（B）过原点的一条直线
（C）不过原点的一个平面　（D）不过原点的一条直线

> [!success]- 答案与解析
> **答案**：（D）
>
> 由 $\alpha_1,\alpha_2$ 线性无关，$\alpha_1,\alpha_2,\alpha_3$ 线性相关，则 $r(\alpha_1,\alpha_2,\alpha_3)=2$，又 $\alpha_1+\alpha_2+\alpha_4=0$，则 $r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=r(\alpha_1,\alpha_2,\alpha_3)=2$，进而 $x\alpha_1+y\alpha_2+z\alpha_3=0$ 的基础解系向量个数为 $1$。
>
> 又 $x=y=z=0$ 时，$\alpha_4=0$，此时 $\alpha_1+\alpha_2=0$，与 $\alpha_1,\alpha_2$ 线性无关矛盾，故而不过原点，选（D）。

### 2026 年 · 数学三 · 第 5 题（选择，5 分）

设矩阵 $A=\begin{pmatrix}1&0&1\\0&0&1\\1&1&3\\1&1&1\end{pmatrix}$，$C=\begin{pmatrix}2&0\\1&1\\1&1\\a&b\end{pmatrix}$，若存在矩阵 $B$ 满足 $AB=C$，则（ ）

（A）$a=-1,b=-1$　（B）$a=2,b=2$　（C）$a=-1,b=2$　（D）$a=2,b=-1$

> [!success]- 答案与解析
> **答案**：（A）
>
> 由于存在矩阵 $B$ 满足 $AB=C$，可知方程 $AX=C$ 有解，所以有 $r(A)=r(A,C)$，初等行变换易得 $a=b=-1$，故选 A。

### 2026 年 · 数学一 · 第 6 题（选择，5 分）

设 $A,B$ 为 $n$ 阶矩阵，$\beta$ 是 $n$ 维列向量，若 $A$ 的列向量组可由 $B$ 的列向量组表示，则（　）

（A）当 $Ax=\beta$ 有解时，$Bx=\beta$ 有解
（B）当 $A^{\mathrm{T}}x=\beta$ 有解时，$B^{\mathrm{T}}x=\beta$ 有解
（C）当 $Bx=\beta$ 有解时，$Ax=\beta$ 有解
（D）当 $B^{\mathrm{T}}x=\beta$ 有解时，$A^{\mathrm{T}}x=\beta$ 有解

> [!success]- 答案与解析
> **答案**：（A）
>
> 由题设知存在矩阵 $C$ 使得 $A=BC$，若 $Ax=\beta$ 有解，则 $BCx=\beta$ 有解，令 $X=Cx$，则 $BX=\beta$ 有解，故选（A）。

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

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第四章 线性方程组|第四章 线性方程组]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
