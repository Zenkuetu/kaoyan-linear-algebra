### ONELINE
转置就等于逆矩阵的那种方阵

### PAIN
平面上把一个点绕原点转 90 度的矩阵长这样：

$$
A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \qquad A^{\mathrm{T}} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}, \qquad A^{\mathrm{T}}A = E
$$

转 90 度不改变长度、也不改变夹角，想转回去再转 -90 度就行；算出来 $A^{-1} = A^{\mathrm{T}}$，正好是“转置”这个几乎不要钱的操作。$\lvert A \rvert = 1$，两列 $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 与 $\begin{pmatrix} -1 \\ 0 \end{pmatrix}$ 点积为 $0$、长度都是 $1$，是一组标准正交基。

这种矩阵怎么认？是不是只要 $\lvert A \rvert = \pm 1$ 就算？

### GAP

按定义硬求逆行不行？不但绕远，还容易认错：

- **坑一 · 求逆走了远路**：求逆要走 $\lvert A \rvert$ 和 $A^{*}$，$n$ 阶要算 $n^2$ 个 $n - 1$ 阶行列式 —— 可对“只转个角度”的矩阵来说，这明显是绕远路；
- **坑二 · 行列式当判据不成立**：想拿 $\lvert A \rvert = \pm 1$ 当判据更危险：$\lvert A \rvert = 1$ 只说明体积没变，长度和夹角照样能被拉歪 —— 比如 $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 的 $\lvert A \rvert = 1$，它却不是正交矩阵，这个方向**反过来不成立**；
- **坑三 · 特征值也不能当判据**：拿特征值判也不行：实特征值只能是 $\pm 1$ 是正交矩阵的**性质**，不是判据，何况复特征值还可以是 $\cos\theta \pm i\sin\theta$。
### INTRO

于是引入正交矩阵：把“转置就能当逆矩阵”这一类方阵单独拎出来，定义成一个等式 $A^{\mathrm{T}}A = E$。上面那三个坑，逐个补上：

- **坑一补上 · 求逆只要转置**：$A^{-1} = A^{\mathrm{T}}$，不算行列式、不算伴随矩阵；
- **坑二补上 · 有了真正的判据**：不用展开子式，逐列验标准正交即可（列向量两两正交、每列长度为 $1$）；
- **坑三补上 · 几何含义明确**：$A$ 是刚性动作（旋转或镜像），长度和夹角都不变 —— 这也解释了为什么 $\lvert A \rvert$ 只能取 $\pm 1$，但反过来不成立。
### DETAIL
**定义**：$n$ 阶实方阵 $A$ 若满足 $A^{\mathrm{T}}A = E$，就称 $A$ 为正交矩阵；等价的说法是

$$
A^{-1} = A^{\mathrm{T}}, \qquad AA^{\mathrm{T}} = E
$$

**判别（看列）**：把 $A$ 按列分块，$A$ 为正交矩阵 $\iff$ 任意两列正交（$\alpha_i^{\mathrm{T}}\alpha_j = 0$，$i \ne j$）且每列都是单位向量（$\alpha_i^{\mathrm{T}}\alpha_i = 1$）；这时列向量组是标准正交基，行向量组也一样。

**关键结论**：

$$
\lvert A \rvert = \pm 1, \qquad (Ax)^{\mathrm{T}}(Ay) = x^{\mathrm{T}}y, \qquad (Ax)^{\mathrm{T}}(Ax) = x^{\mathrm{T}}x
$$

注意 $\lvert A \rvert = \pm 1$ 反过来不成立（反例见上）。实特征值只能是 $\pm 1$：设 $A\alpha = \lambda\alpha$（$\alpha \ne 0$，$\lambda$ 为实数），由 $A$ 正交得 $(A\alpha)^{\mathrm{T}}(A\alpha) = \alpha^{\mathrm{T}}\alpha$，代入 $A\alpha = \lambda\alpha$ 得 $\lambda^2 \alpha^{\mathrm{T}}\alpha = \alpha^{\mathrm{T}}\alpha$，而 $\alpha^{\mathrm{T}}\alpha \ne 0$，故 $\lambda^2 = 1$、$\lambda = \pm 1$；复特征值则可以是 $\cos\theta \pm i\sin\theta$。

另外：$A$、$B$ 都正交时，$AB$、$A^{\mathrm{T}}$、$A^{-1}$ 也都正交。

### USAGE
1. 解答题：判断给定矩阵（常含参数或含 $\cos\theta$、$\sin\theta$）是不是正交矩阵 —— 标准做法是验算列向量两两正交且都是单位向量，也可以直接算 $A^{\mathrm{T}}A$ 看是不是 $E$。
2. 证明题：证明正交矩阵的实特征值只能是 $1$ 或 $-1$ —— 由 $A\alpha = \lambda\alpha$ 与 $(A\alpha)^{\mathrm{T}}(A\alpha) = \alpha^{\mathrm{T}}\alpha$ 推出 $\lambda^2 = 1$。
3. 选择题：考 $A^{\mathrm{T}}A = E$ 与 $\lvert A \rvert = \pm 1$ 的推出关系 —— $\lvert A \rvert = \pm 1$ 推不出正交，如 $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 的 $\lvert A \rvert = 1$ 却不正交。

### SELFCHECK
1. 验证 $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ 满足 $A^{\mathrm{T}}A = E$，并写出 $A^{-1}$。
2. 举一个 $\lvert A \rvert = 1$ 但不是正交矩阵的例子，如 $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$，并指出它的哪一列不是单位向量（第二列，$1^2 + 1^2 = 2 \ne 1$）。
3. 判断：正交矩阵的特征值一定都是 $\pm 1$ 吗？（不一定 —— 实特征值只能是 $\pm 1$，还可能有 $\cos\theta \pm i\sin\theta$ 这样的共轭复特征值。）
