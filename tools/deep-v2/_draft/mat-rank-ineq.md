### ONELINE
秩在加法与乘法下的三条不等式

### PAIN
先看一组对比。取

$$
A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}, \qquad r(A) = r(B) = 1
$$

加一下：$A + B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = E$，$r(A + B) = 2$，比 $r(A)$、$r(B)$ 都大；乘一下：$AB = O$，$r(AB) = 0$，又比两个都小。

两个秩都是 1 的矩阵，加起来秩能涨到 2，乘起来能塌到 0 —— 到底有没有什么界能管住它们？

### GAP

直接找公式行不行？不行：

- **坑一 · 想凑等式没戏**：$r(A + B) = r(A) + r(B)$？取 $A = B = E$ 立刻反例（$2 \ne 4$）；$r(AB) = r(A)r(B)$ 更不用说，取 $A = B = E$ 就有 $r(AB) = 2 \ne 4$；
- **坑二 · 信息不够，只能给界**：想要精确值，就得知道两个矩阵“重叠”了多少，可题目只给你 $r(A)$、$r(B)$ 两个数，重叠部分完全没交代，能给的只能是界；
- **坑三 · 界的方向容易写反**：加法是**上界**（两块信息可能叠在一起把缺口补上），乘法是**下界**（信息只会被一层层过滤），方向写反整题就废。
### INTRO

于是引入三条不等式，把矩阵加法、矩阵乘法**算出来的那个矩阵的秩**圈进可控范围：

$$
r(A + B) \le r(A) + r(B), \qquad r(AB) \le \mathrm{min}\{r(A), r(B)\}, \qquad r(AB) \ge r(A) + r(B) - n
$$

上面那三个坑，逐个补上：

- **坑一补上 · 等式换成不等式**：精确等式不成立，但三条不等式把上下界都框住，判断和证明都够用；
- **坑二补上 · 重叠部分交给界去兜**：不必知道重叠多少，界本身就能下结论（比如 $r(AB) \le \mathrm{min}\{r(A), r(B)\}$ 说明乘法只会降秩）；
- **坑三补上 · 方向定死**：加法取上界、乘法取下界；最后一条里的 $n$ 是 $A$ 的列数，同时也等于 $B$ 的行数（$A$ 是 $m \times n$、$B$ 是 $n \times s$ 时才谈得上 $AB$）。
### DETAIL
**三条不等式**（$A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times s$ 矩阵）：

$$
r(A + B) \le r(A) + r(B), \qquad r(AB) \le \mathrm{min}\{r(A), r(B)\}, \qquad r(AB) \ge r(A) + r(B) - n
$$

**为什么是这个方向**：$AB$ 的每一列都是 $A$ 的列的线性组合，列空间只会变小，所以 $r(AB) \le r(A)$；把 $r(AB) \le r(B)$ 转置过来看同理，两条合起来就是那个 $\mathrm{min}$。

**取等的例子**：$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$、$B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ 时 $A + B = E$，$r(A + B) = 2 = r(A) + r(B)$；而 $r(A) + r(B) - n = 1 + 1 - 2 = 0$，此时 $AB = O$、$r(AB) = 0$，下界也取到等号。
非退化的紧例：$A = \begin{pmatrix} 1 & 0 \end{pmatrix}$、$B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$（$n = 2$）时 $r(AB) = 1 = 1 + 2 - 2$，下界取等。

**高频特例**：$AB = O$ 时 $0 = r(AB) \ge r(A) + r(B) - n$，即 $r(A) + r(B) \le n$。

### USAGE
1. 选择题：比较 $r(A + B)$、$r(AB)$ 与 $r(A)$、$r(B)$、$\mathrm{min}\{r(A), r(B)\}$ 的大小，错误选项常把加法写成 $r(A + B) \le \mathrm{max}\{r(A), r(B)\}$，或把乘法写成 $r(AB) \ge \mathrm{min}\{r(A), r(B)\}$。
2. 证明题：由 $AB = O$ 证明 $r(A) + r(B) \le n$（对 $B$ 的列用 $r(AB) \ge r(A) + r(B) - n$，左边为 $0$），这是考研高频结论。
3. 解答题：抽象矩阵推理，如已知 $r(A) = n$ 或 $r(AB) = r(B)$，结合不等式推出 $B$ 的列都在某个解空间里，或某矩阵可逆。

### SELFCHECK
1. 取 $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$、$B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ 时 $A + B = E$、$r(A+B) = 2 = r(A) + r(B)$（上界取等）；再把 $B$ 换成 $\begin{pmatrix} 0 & 0 \\ 0 & -1 \end{pmatrix}$ 时 $A + B = O$、$r(A+B) = 0$，两档都对得上。
2. 举一个具体例子使 $r(AB) < \mathrm{min}\{r(A), r(B)\}$，并算出三个秩各是几。
3. 说明 $r(AB) \ge r(A) + r(B) - n$ 里的 $n$ 指什么（$A$ 的列数，同时是 $B$ 的行数，两个数相等）。
