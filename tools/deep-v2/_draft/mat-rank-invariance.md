### ONELINE
转置、乘非零数、可逆变换都不改秩

### PAIN
换个活儿：手上是个含参矩阵，硬展开子式又长又容易错，你想先做几步行、列变换把它化简，再数非零行：

$$
A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \qquad P = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
$$

可心里没底：两边随便乘个矩阵，秩还认得出是原来那个吗？试试转置、乘 3、左乘 $P$：

$$
A^{\mathrm{T}} = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \qquad 3A = \begin{pmatrix} 3 & 6 \\ 6 & 12 \end{pmatrix}, \qquad PA = \begin{pmatrix} 3 & 6 \\ 2 & 4 \end{pmatrix}
$$

三个的秩都是 1，和 $r(A)$ 一样 —— 这不像巧合，但也不是随便乘什么矩阵都行。

### GAP

那直接硬算行不行？硬算的代价很实在：

- **坑一 · 逐个子式展开太贵**：$5$ 阶矩阵光 $3$ 阶子式就有 $C_5^3 \cdot C_5^3 = 100$ 个，含参数时每个都是多项式，展开完还得判断哪些为零，手算基本报废；
- **坑二 · 不敢化简**：就算想“先化简再数非零行”，不知道哪些变换保秩，你就不敢确定化简后数出来的还是不是原矩阵的秩；
- **坑三 · 拿恒等式当验证**：秩 1 的 $A$ 能写成 $A = \alpha\beta^{\mathrm{T}}$，此时 $A^{\mathrm{T}}A = (\alpha^{\mathrm{T}}\alpha)\beta\beta^{\mathrm{T}}$ 两行必然成比例，所以秩相等 —— 但这是秩 1 的巧合，换成一般的 $A$ 这条推理一步都用不上，得另找对**所有实矩阵**都成立的依据。
### INTRO

于是引入一组秩的不变性，把“能不能安全化简”这件事钉死。上面那三个坑，逐个补上：

- **坑一补上 · 换个便宜的量去把握**：$r(A^{\mathrm{T}}) = r(A)$：$A^{\mathrm{T}}x = 0$ 与 $Ax = 0$ 是同一组方程（转置不改变每个式子的系数），同解所以秩相等；$r(kA) = r(A)$ 要求 $k \ne 0$（$k = 0$ 时 $r(kA) = 0$）。
- **坑二补上 · 化简的合法性有了依据**：$P, Q$ 可逆时 $r(PAQ) = r(A)$ —— 可逆变换只是换一组坐标，不丢信息也不添信息，所以行变换、列变换可以放心做，化简完再数非零行是合法的；
- **坑三补上 · 换成能验证的等式**：$r(A^{\mathrm{T}}A) = r(A)$，**对实矩阵**成立，它把“解方程组”和“秩”直接接上了，也是这一族结论里最常用的。
### DETAIL
**四个结论**（$P, Q$ 可逆，$A$ 是 $m \times n$ 矩阵）：

$$
r(A^{\mathrm{T}}) = r(A), \qquad r(kA) = r(A) \quad (k \ne 0), \qquad r(PAQ) = r(PA) = r(AQ) = r(A)
$$

**$r(A^{\mathrm{T}}A) = r(A)$ 的实质是同解论证**（所以只对实矩阵成立）：$A^{\mathrm{T}}Ax = 0$ 与 $Ax = 0$ 同解，因为

$$
A^{\mathrm{T}}Ax = 0 \iff x^{\mathrm{T}}A^{\mathrm{T}}Ax = 0 \iff (Ax)^{\mathrm{T}}(Ax) = 0 \iff Ax = 0
$$

反向显然。两个方程组同解，基础解系所含向量个数就相同，即 $n - r(A^{\mathrm{T}}A) = n - r(A)$（$n$ 是 $A$ 的列数），所以 $r(A^{\mathrm{T}}A) = r(A)$。

顺带得到：$A^{\mathrm{T}}A$ 可逆 $\iff r(A^{\mathrm{T}}A) = n \iff r(A) = n \iff A$ 的列向量组线性无关。

### USAGE
1. 解答题：设 $A$ 为实矩阵，用 $r(A^{\mathrm{T}}A) = r(A)$ 证明 $A^{\mathrm{T}}AX = 0$ 与 $AX = 0$ 同解，进而得 $A^{\mathrm{T}}A$ 可逆 $\iff r(A^{\mathrm{T}}A) = n \iff r(A) = n \iff A$ 的列向量组线性无关。
2. 证明题：设 $P, Q$ 可逆，证明 $r(PAQ) = r(A)$，常作为“秩在等价变换下不变”的核心结论使用。
3. 填空题或解答题：算含参矩阵的秩时，先左乘、右乘可逆矩阵做行、列变换，把矩阵化简再数非零行的个数。

### SELFCHECK
1. 验证 $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ 时 $A^{\mathrm{T}}A = \begin{pmatrix} 5 & 10 \\ 10 & 20 \end{pmatrix}$（每个元素是两列的内积），$\lvert A^{\mathrm{T}}A \rvert = 5 \times 20 - 10 \times 10 = 0$，所以 $r(A^{\mathrm{T}}A) = 1 = r(A)$。再想清楚：为什么不能靠“两行成比例”来证明 $r(A^{\mathrm{T}}A) = r(A)$？（实质是 $A^{\mathrm{T}}Ax = 0$ 与 $Ax = 0$ 同解。）
2. 判断：$r(kA) = r(A)$ 对任意常数 $k$ 都成立吗？（不成立，$k = 0$ 时 $r(kA) = 0$。）
3. 写出一个 $3 \times 2$ 矩阵 $A$，使 $r(A^{\mathrm{T}}A) = r(A) = 2$，并说明这时 $A^{\mathrm{T}}A$ 为什么可逆。
