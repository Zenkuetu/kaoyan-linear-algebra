### ONELINE
实对称 $A$ 正定，等价于各阶顺序主子式全大于零

### PAIN
**正定的充要条件要解决的是：怎么用有限的几步算完，判定一个矩阵正不正定。**
拿一个三阶的来：

$$
A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}, \qquad f = x^{\mathrm{T}}Ax
$$

定义是"对任意 $x \neq 0$ 都有 $x^{\mathrm{T}}Ax > 0$"，可 $x$ 有无穷多组，照定义没法验。

最容易想到的办法是回到特征值：$A$ 正定 $\iff$ 特征值全为正，那就求特征值。算一下 $\lvert \lambda E - A \rvert$：

$$
\begin{vmatrix} \lambda - 2 & -1 & 0 \\ -1 & \lambda - 2 & -1 \\ 0 & -1 & \lambda - 2 \end{vmatrix} = \lambda^3 - 6\lambda^2 + 10\lambda - 4 = (\lambda - 2)(\lambda^2 - 4\lambda + 2)
$$

三次方程要试根、要因式分解，考场上光这一步就够呛；而且解出来还得逐个判正负。**问题不在结论对不对，在于算得太贵。**

### GAP
所以需要一条"只用加减乘除、不用解方程"的判据，土办法的三个缺口是：

- **坑一 · 每次都去求特征值**：三阶就要展开三次多项式、试根、分解（$g(\lambda) = \lambda^3 - 6\lambda^2 + 10\lambda - 4 = (\lambda-2)(\lambda^2 - 4\lambda + 2)$，还得处理 $\sqrt{2}$ 这种无理根）；阶数一高就更算不动，而判正定本来不需要这一整套；
- **坑二 · 只算最高阶的行列式**：$\lvert A \rvert = 4 > 0$ 看着很"正"，可 $\lvert A \rvert > 0$ 远远不够 —— 取 $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$，$\lvert A \rvert = -3$ 直接排除；取 $A = \mathrm{diag}(-1,-1,-4)$，$\lvert A \rvert = -4 < 0$；而 $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}$ 的行列式是 $-1$，也不正定。**反过来**，$\lvert A \rvert > 0$ 也可能不正定（二阶 $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ 行列式为 $1$ 却负定）—— 总之只看最高阶那一项不行；
- **坑三 · 用配方代替判据**：配方确实能判（$f$ 配成三个正平方项就是正定），但配方过程依赖"先配哪个变量"的顺序，算到一半还容易出错；而且配方出来的系数**不是**特征值，跟题目后面要求的正交变换常常接不上。

### INTRO
于是引入**正定的充要条件（五条等价）**：设 $A$ 为 $n$ 阶**实对称**矩阵，则下面五条彼此等价 ——

1. $A$ 正定（即对任意 $x \neq 0$ 有 $x^{\mathrm{T}}Ax > 0$）；
2. $A$ 的**特征值全大于零**；
3. $A$ 的**正惯性指数** $p = n$（等价地：$A$ 与 $E$ 合同）；
4. 存在**可逆**矩阵 $C$ 使 $A = C^{\mathrm{T}}C$；
5. $A$ 的**各阶顺序主子式全大于零**：$\Delta_1 > 0,\ \Delta_2 > 0,\ \dots,\ \Delta_n = \lvert A \rvert > 0$。

上面那三个坑，逐个补上：

- **坑一补上 · 行列式一层层算，不用解方程**：上面那个三阶 $A$，一阶 $\Delta_1 = 2 > 0$；二阶 $\Delta_2 = \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} = 3 > 0$；三阶 $\Delta_3 = \lvert A \rvert = 4 > 0$。三个都正，**正定**，全程只有加减乘除；
- **坑二补上 · 要"每一阶"都正**：判据是 $\Delta_1, \Delta_2, \dots, \Delta_n$ **全体**大于零，不是只看 $\lvert A \rvert$。上面 $A$ 的三阶行列式为 $4$ 只是其中一环；而 $\mathrm{diag}(1,1,-1)$ 的 $\Delta_3 = -1 < 0$ 在第三阶就被拦住了；
- **坑三补上 · 五条判据随时换着用**：想省事就数顺序主子式（第 5 条）；题目已经给了特征值就用第 2 条；要跟标准形/规范形挂钩就用第 3 条（$p = n$，即规范形是 $y_1^2 + \dots + y_n^2$）；要构造矩阵就用第 4 条（$A = C^{\mathrm{T}}C$，例如 $A = \begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}$ 可取 $C = \begin{pmatrix} 1 & 1 \\ 0 & \sqrt{2} \end{pmatrix}$，验算 $C^{\mathrm{T}}C = \begin{pmatrix} 1 & 1 \\ 1 & 1+2 \end{pmatrix} = A$）。**五条是同一件事的五种说法**，哪条好算用哪条。

> 顺带提一句：第 4 条 $A = C^{\mathrm{T}}C$ 在附录里会换一个说法（跟"内积"有关）。名字换了，算式一模一样，现在不懂它照样能把题做完。

### DETAIL
**定理（霍尔维茨判据）**：设 $A = (a_{ij})$ 为 $n$ 阶**实对称**矩阵，则 $A$ 正定 $\iff$ $A$ 的各阶**顺序**主子式全大于零，即

$$
\Delta_1 = a_{11} > 0, \quad \Delta_2 = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} > 0, \quad \dots, \quad \Delta_n = \lvert A \rvert > 0
$$

其中 $\Delta_k$ 是 $A$ 的**左上角** $k$ 阶子式（取前 $k$ 行、前 $k$ 列）。

**五条等价，逐条对照**（每条都写成能直接用的形式）：
- 第 1 条（定义）：对任意 $x \neq 0$，$x^{\mathrm{T}}Ax > 0$；
- 第 2 条（特征值）：$\lambda_i > 0$（$i = 1, \dots, n$，按重数计）；
- 第 3 条（惯性指数）：$p = n$，即 $q = 0$ 且无零项（$r(A) = n$）；等价说法：$A$ 合同于单位矩阵 $E$；
- 第 4 条（分解）：存在**可逆**矩阵 $C$ 使 $A = C^{\mathrm{T}}C$（注意 $C$ 必须可逆，否则 $A$ 只能保证半正定）；
- 第 5 条（顺序主子式）：$\Delta_k > 0$，$k = 1, \dots, n$。

**算例一（三阶，用第 5 条）**：$A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$。
一阶：$\Delta_1 = 2 > 0$。
二阶：$\Delta_2 = 2 \times 2 - 1 \times 1 = 3 > 0$。
三阶：按第一行展开 $\lvert A \rvert = 2\begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} - 1\begin{vmatrix} 1 & 1 \\ 0 & 2 \end{vmatrix} + 0 = 2 \times 3 - 1 \times 2 = 4 > 0$。
三个都正，所以 $A$ **正定**。
用第 2 条核对：$\lvert \lambda E - A \rvert = \lambda^3 - 6\lambda^2 + 10\lambda - 4 = (\lambda - 2)(\lambda^2 - 4\lambda + 2)$，特征值是 $2$、$2 - \sqrt{2} \approx 0.586$ 与 $2 + \sqrt{2} \approx 3.414$，全为正，一致。顺带核对：特征值之和 $2 + (2 + \sqrt{2}) + (2 - \sqrt{2}) = 6 = \mathrm{tr}(A) = 2+2+2$；之积 $2 \times (2 + \sqrt{2})(2 - \sqrt{2}) = 2 \times 2 = 4 = \lvert A \rvert$；二阶主子式之和 $3 + 4 + 3 = 10$，正好等于特征值两两乘积之和 $(2+\sqrt{2})(2-\sqrt{2}) + 2(2+\sqrt{2}) + 2(2-\sqrt{2}) = 2 + 8 = 10$，都对上了。

**算例二（二阶，用第 5 条）**：$A = \begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}$。$\Delta_1 = 1 > 0$，$\Delta_2 = 3 - 1 = 2 > 0$，正定。
用第 4 条核对：取 $C = \begin{pmatrix} 1 & 1 \\ 0 & \sqrt{2} \end{pmatrix}$（$\lvert C \rvert = \sqrt{2} \neq 0$），$C^{\mathrm{T}}C = \begin{pmatrix} 1 & 1 \\ 1 & 1 + 2 \end{pmatrix} = A$，一致。
用第 3 条核对：特征值是 $2 - \sqrt{2} \approx 0.586$ 与 $2 + \sqrt{2} \approx 3.414$，都正，所以 $p = 2 = n$，$A$ 与 $E$ 合同。

**算例三（不正定）**：$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$，$\Delta_2 = 1 - 4 = -3 < 0$，不正定（特征值 $3, -1$，$\lambda = -1 < 0$，两条判据一致）。

**前提与易错**：
- 第 5 条要求 $A$ **实对称**，且用的是**顺序**主子式（左上角那串），不是"所有主子式"——"所有主子式非负"是**半正定**的判据，两者别混；
- 只算 $\lvert A \rvert > 0$ 不充分；只算主对角元全正也不充分（见 $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$）；
- $A$ 正定 $\Rightarrow$ $A$ 可逆、$\lvert A \rvert > 0$、$a_{ii} > 0$，这些是必要条件，可以用来快速排除。

### USAGE
1. 选择题：判断矩阵（或二次型）是否正定；或问"$A$ 正定的充要条件是哪一个"（常把充分条件和必要条件混在一起当干扰项，如"$\lvert A \rvert > 0$"、"$a_{ii} > 0$"这些只是必要）。**数二不要求**正定性判定，故此类题为数一。
2. 填空题：含参数矩阵正定，求参数范围 —— 写出 $\Delta_1 > 0, \Delta_2 > 0, \dots$，逐个解不等式再取交集。**数二不要求**。
3. 解答题：证明某矩阵正定（选最方便的一条判据：给了特征值走第 2 条，结构像 $C^{\mathrm{T}}C$ 走第 4 条，具体数字走第 5 条）；或与正交变换法、惯性指数结合出综合题。**数二不要求**。

### SELFCHECK
1. 用顺序主子式判断 $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$ 是否正定。（$\Delta_1 = 2$、$\Delta_2 = 3$、$\Delta_3 = 4$ 全大于零，正定。）
2. 判断：$\lvert A \rvert > 0$ 是 $A$ 正定的充要条件吗？（不是 —— 只是必要条件；取 $B = \mathrm{diag}(2,-1,-1)$，$\lvert B \rvert = 2 > 0$ 却不定，特征值 $-1 < 0$。）
3. 把 $A = \begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}$ 写成 $C^{\mathrm{T}}C$，并说明 $C$ 为什么必须可逆。（$C = \begin{pmatrix} 1 & 1 \\ 0 & \sqrt{2} \end{pmatrix}$，$\lvert C \rvert = \sqrt{2} \neq 0$；$C$ 不可逆时 $A = C^{\mathrm{T}}C$ 只能保证半正定。）
