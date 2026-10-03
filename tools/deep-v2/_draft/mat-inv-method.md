### ONELINE
求逆三招：$(A \mid E)$、伴随公式、凑 $AB=E$

### PAIN
现在要算 $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ 的逆矩阵。
按定义来就是找一个 $B$ 让 $AB = BA = E$，二阶还行，四个方程四个未知数；**到三阶就是九个未知数九个方程**，手算基本是自杀。
那照葫芦画瓢抄二阶公式行不行？

$$
A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix},
\qquad
A^{-1} = \frac{1}{1 \times 4 - 2 \times 3}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}
$$

乘一下 $A A^{-1} = E$，结果没问题。
但这个公式只有二阶长得这么干净，三阶照抄就是九个代数余子式加一次转置，口诀一句都记不住。

### GAP
靠这两条路都不稳，三个坑挨个数：
- **坑一 · 硬解太费体力**：按定义硬解，$n$ 阶要解 $n^2$ 个未知数的方程组，纯体力活，抄错一个符号全盘皆输；
- **坑二 · 伴随公式一步不能错**：伴随公式得算 $n^2$ 个代数余子式（三阶就是 9 个二阶行列式），再转置、再除 $\lvert A \rvert$，一步都不能错；
- **坑三 · 抽象题无从下手**：抽象题里的 $A$ 根本没给数字，只有一个矩阵方程，上面两种办法都无从下手。

### INTRO
所以求逆要按“手上有什么”分三条路走。上面那三个坑，逐个补上：
- **坑一补上 · 改成一路行变换**：有具体数字矩阵，把 $A$ 和单位阵并排，只用行变换消成 $(E \mid A^{-1})$，不用再解 $n^2$ 个未知数；
- **坑二补上 · 照公式一次算完**：给的是 $\lvert A \rvert$、$A^{*}$ 或某个代数余子式时，直接走 $A^{-1} = \dfrac{A^{*}}{\lvert A \rvert}$，位次一次摆对（$A^{*}$ 的第 $i$ 行第 $j$ 列放 $A_{ji}$），不用解 $n^{2}$ 个未知数；
- **坑三补上 · 抽象题凑乘积**：给的是抽象矩阵方程，凑 $AB = E$，凑出来的 $B$ 就是 $A^{-1}$。

### DETAIL
**方法一：初等行变换**（$(A \mid E)$ 化成 $(E \mid A^{-1})$，**只能作行变换**，中间用一次列变换这题就废了）：

$$
(A \mid E) = \begin{pmatrix} 1 & 2 & 1 & 0 \\ 3 & 4 & 0 & 1 \end{pmatrix}
\;\longrightarrow\;
\begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & -2 & -3 & 1 \end{pmatrix}
\;\longrightarrow\;
\begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 1 & \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}
\;\longrightarrow\;
\begin{pmatrix} 1 & 0 & -2 & 1 \\ 0 & 1 & \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}
$$

三步依次是 $r_2 - 3r_1$、$r_2 \times (-\dfrac{1}{2})$、$r_1 - 2r_2$；左半成了 $E$，右半就是 $A^{-1}$。道理在这儿：那串行变换每一步都能写成左乘一个初等矩阵，合起来就是一个可逆矩阵 $P$，使 $P A = E$；两边右乘 $A^{-1}$ 得 $P = A^{-1}$。所以把同一串变换作用到 $E$ 上，得到的就是 $P E = A^{-1}$。
**方法二：伴随公式** $A^{-1} = \dfrac{A^{*}}{\lvert A \rvert}$（要求 $\lvert A \rvert \neq 0$），核心恒等式是 $A A^{*} = A^{*} A = \lvert A \rvert E$。
本例如 $A^{*} = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$、$\lvert A \rvert = -2$，于是 $A^{-1} = \dfrac{1}{-2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$，和方法一的结果完全一致。
**方法三：抽象凑乘积**。由 $A^2 - 2A - 3E = O$ 提公因式得 $A(A - 2E) = 3E$，也就是 $A \cdot \dfrac{A - 2E}{3} = E$，所以 $A^{-1} = \dfrac{A - 2E}{3}$。

### USAGE
1. 给 2 阶或 3 阶数字矩阵，要求用初等行变换求 $A^{-1}$，必须写出 $(A \mid E)$ 的每一步（过程分占大头，只写答案不给分）。
2. 伴随公式题：给 $\lvert A \rvert$、$A^{*}$ 或某个代数余子式，求 $A^{-1}$、$(A^{*})^{-1}$、$\lvert A^{*} \rvert$，核心恒等式是 $A A^{*} = \lvert A \rvert E$。
3. 抽象定义法：由 $A^2 - 2A - 3E = O$ 提公因式得 $A \cdot \dfrac{A - 2E}{3} = E$，于是 $A^{-1} = \dfrac{A - 2E}{3}$。

### SELFCHECK
1. 用 $(A \mid E)$ 求 $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ 的逆，写完把 $A A^{-1}$ 乘出来核对是不是 $E$。
2. 直接写出 $\begin{pmatrix} 2 & 3 \\ 1 & 1 \end{pmatrix}$ 的行列式与逆：$\lvert A \rvert = 2 \times 1 - 3 \times 1 = -1$，$A^{-1} = \dfrac{1}{-1}\begin{pmatrix} 1 & -3 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} -1 & 3 \\ 1 & -2 \end{pmatrix}$，再验算 $A A^{-1} = E$。
3. 设 $A^2 = 3A$ 且 $A \neq O$，判断 $A$ 是否一定可逆：不一定，反例 $A = \begin{pmatrix} 3 & 0 \\ 0 & 0 \end{pmatrix}$ 满足 $A^2 = 3A$ 但 $\lvert A \rvert = 0$。
