### ONELINE
A^k=PΛ^kP⁻¹：幂和矩阵函数一次算完

### PAIN
**要解决的是：$A$ 的 10 次方、100 次方，以及 $a_{n+2} = a_{n+1} + a_n$ 这类递推数列的通项，怎么算得不那么痛苦。**
先看 $A^{10}$，$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。硬乘也能凑：先算 $A^{2}$，再平方得 $A^{4}$，再平方得 $A^{8}$，最后乘两次 —— 大约 4 次矩阵乘法。可换成 $A^{100}$ 呢？还是 8 次左右，勉强能忍；但矩阵换成 10 阶（一次乘法就是 1000 次乘加），那就彻底不现实了。
再看递推数列：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，求 $a_{20}$。硬算要加 18 次，$a_{200}$ 就没法硬算了。
两个问题看着无关，其实是一件事：都是"同一个矩阵反复作用很多次"。最容易想到的"硬算"，在次数一大时全部失效。

### GAP
- **坑一 · 硬乘/硬递推**：$A^{k}$ 要 $k-1$ 次矩阵乘法（平方加速也还是要 $\log k$ 次大矩阵乘法），次数一大算不动，更看不出通项公式的样子；
- **坑二 · 不管能不能对角化就套公式**：$A^{k} = P\Lambda^{k}P^{-1}$ 的前提是 $A$ 能对角化。$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 只有 1 个线性无关的特征向量，写不出这样的 $P$，公式直接失效；
- **坑三 · 递推数列不知道怎么写成一阶**：手里只有 $a_{n+2} = a_{n+1} + a_n$，看着跟矩阵没关系。要用矩阵，得先把相邻两项打包成向量 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$，再把递推写成 $u_{n+1} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}u_n$；不知道这一步，公式再熟也用不上。

### INTRO
于是引入**用对角化求幂与矩阵函数**：只要能找到可逆 $P$ 使 $A = P\Lambda P^{-1}$（$\Lambda$ 是对角阵），就有

$$
A^{k} = P\Lambda^{k}P^{-1}, \qquad f(A) = Pf(\Lambda)P^{-1}
$$

其中 $\Lambda^{k}$ 只是把每个对角元各自取 $k$ 次方，$f(\Lambda)$ 同理。递推数列则用 $u_k = A^{k}u_0$ 一次到位。

上面那三个坑，逐个补上：

- **坑一补上 · 幂从矩阵搬到数上**：$\Lambda^{k} = \begin{pmatrix} \lambda_1^{k} & 0 \\ 0 & \lambda_2^{k} \end{pmatrix}$，$3^{10}$ 一秒出结果；$\Lambda$ 求一百次方也无所谓，工作量只有两个数的幂；
- **坑二补上 · 先判可对角化再用**：写 $A^{k} = P\Lambda^{k}P^{-1}$ 之前，先确认 $\sum_i m_i = n$；不能对角化就不能用这条（考到的矩阵一般都能对角化）；
- **坑三补上 · 递推打包成一阶**：$u_{n+1} = Au_n$ 立刻给出 $u_n = A^{n-1}u_1$，问题变成求 $A$ 的幂。初值取 $u_1 = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$（相邻两项打包成一个向量），别漏项也别错位。

### DETAIL
**公式**：设 $A = P\Lambda P^{-1}$，$\Lambda = \mathrm{diag}(\lambda_1, \dots, \lambda_n)$，$k$ 为正整数，则

$$
A^{k} = (P\Lambda P^{-1})^{k} = P\Lambda^{k}P^{-1}
$$

（$k$ 个 $P\Lambda P^{-1}$ 连乘，中间的 $P^{-1}P = E$ 两两抵消，只剩两头的 $P$ 与 $P^{-1}$。）同理，对多项式 $f(x) = c_kx^{k} + \cdots + c_1x + c_0$：

$$
f(A) = Pf(\Lambda)P^{-1}, \qquad f(\Lambda) = \mathrm{diag}(f(\lambda_1), \dots, f(\lambda_n))
$$

**算例一（写全步骤，求 $A^{10}$）**：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。
上一节已得 $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$，$\Lambda = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$，且 $P^{2} = 2E$ 故 $P^{-1} = \frac{1}{2}P$。于是

$$
A^{10} = P\Lambda^{10}P^{-1} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3^{10} & 0 \\ 0 & 1^{10} \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
$$

先算前两个的乘积：

$$
\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3^{10} & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 3^{10} & 1 \\ 3^{10} & -1 \end{pmatrix}
$$

再乘第三个：

$$
A^{10} = \frac{1}{2}\begin{pmatrix} 3^{10} & 1 \\ 3^{10} & -1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 3^{10} + 1 & 3^{10} - 1 \\ 3^{10} - 1 & 3^{10} + 1 \end{pmatrix}
$$

代入 $3^{10} = 59049$：

$$
A^{10} = \begin{pmatrix} 29525 & 29524 \\ 29524 & 29525 \end{pmatrix}
$$

**校验**：$A^{10}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 应当等于 $3^{10}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 59049 \\ 59049 \end{pmatrix}$；而 $\begin{pmatrix} 29525 & 29524 \\ 29524 & 29525 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 29525 + 29524 \\ 29524 + 29525 \end{pmatrix} = \begin{pmatrix} 59049 \\ 59049 \end{pmatrix}$，对上了。
**算例二（递推数列）**：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，求 $a_6$。
打包 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$，则 $u_{n+1} = Au_n$，$A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$，于是 $u_5 = A^{4}u_1$。逐步算：

$$
A^{2} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}, \qquad A^{4} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 3 & 5 \end{pmatrix}
$$

$$
u_5 = A^{4}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 + 3 \\ 3 + 5 \end{pmatrix} = \begin{pmatrix} 5 \\ 8 \end{pmatrix} \implies a_5 = 5, \quad a_6 = 8
$$

与逐项加出来的 $1, 1, 2, 3, 5, 8$ 一致。这里 $A$ 的特征值是 $\frac{1 \pm \sqrt{5}}{2}$（解 $\lambda^{2} - \lambda - 1 = 0$），次数大时用对角化算 $A^{n}$ 才是通法。
**常用结论**：
- $A^{k} = P\Lambda^{k}P^{-1}$，$\Lambda^{k}$ 只把对角元各自取幂；
- $f(A) = Pf(\Lambda)P^{-1}$，于是 $\lvert f(A) \rvert = \prod_i f(\lambda_i)$、$\mathrm{tr}(f(A)) = \sum_i f(\lambda_i)$ 一起解决；
- 递推 $\alpha_{k+1} = A\alpha_k$ 的通项是 $\alpha_k = A^{k}\alpha_0$，配合对角化就能写出通项公式；
- $\lvert A^{k} \rvert = \lvert \Lambda^{k} \rvert = \lambda_1^{k}\cdots\lambda_n^{k}$，也是一个常用的口算点；
- 前提：必须先确认 $A$ 可对角化（$\sum_i m_i = n$）。

### USAGE
1. 选择题：由 $A = P\Lambda P^{-1}$ 判断 $A^{k}$ 的表达式，或者问"下列哪个矩阵能用这个公式求幂"（考可对角化的前提）。
2. 填空题：给特征值与 $P$，写出 $A^{k}$ 或 $f(A)$，常见 $\lvert A^{k} \rvert = \lvert A \rvert^{k}$、$\mathrm{tr}(A^{k}) = \sum\lambda_i^{k}$。
3. 解答题：求 $A^{n}$（标准五步：特征值 → 特征向量 → $P$ 与 $\Lambda$ → 求 $P^{-1}$ → 代 $A^{n} = P\Lambda^{n}P^{-1}$），以及由此求递推数列的通项。

### SELFCHECK
1. 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，用 $P\Lambda^{10}P^{-1}$ 写出 $A^{10}$ 的主对角元。
2. 判：$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 能不能写成 $P\Lambda P^{-1}$（$\Lambda$ 为对角阵）？为什么？
3. 算：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，写出对应的 $A$ 与 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$ 的递推式，并算出 $a_6$。
