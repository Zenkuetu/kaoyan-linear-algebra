### ONELINE
主对角线元素之和，等于特征值之和

### PAIN
手上是个二阶矩阵 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，想解 $\lvert \lambda E - A \rvert = 0$ 这种“含参数的行列式等于 0”：

$$
A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}, \qquad \lvert \lambda E - A \rvert = \begin{vmatrix} \lambda - 2 & -1 \\ -1 & \lambda - 2 \end{vmatrix} = \lambda^2 - 4\lambda + 3
$$

解得 $\lambda_1 = 1$、$\lambda_2 = 3$。回头一看：$\lambda_1 + \lambda_2 = 4$，正好等于主对角线元素之和 $2 + 2 = 4$；$\lambda_1\lambda_2 = 3$，正好等于 $\lvert A \rvert$。

再看乘积：$A = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$、$B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$，$AB = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$、$BA = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix}$，两个乘积连样子都不一样，迹却都是 $0$。

这些“正好”肯定不是运气，问题是：凭什么？

### GAP

那硬算行不行？硬算的代价很实在：

- **坑一 · 展开特征多项式算不动**：二阶还能展开，$n$ 阶就是逐项展开一个 $n$ 次特征多项式，考场上根本算不动 —— 可特征值之和其实一直明明白白摆在对角线上，白白浪费；
- **坑二 · 为什么不变没证清**：“特征值之和 = 对角线之和”这句里，左边换一种写法（第五章会叫相似变换）不变（特征值不变），右边却长得像跟坐标系有关（写法一换，对角元全变了）—— 不证清楚，用起来心里发虚；
- **坑三 · 推广一步就翻车**：乘积那边更玄：$\mathrm{tr}(AB) = \mathrm{tr}(BA)$ 里两个矩阵的形状都可能不同，凭什么总相等？而一旦想当然推广成 $\mathrm{tr}(ABC) = \mathrm{tr}(ACB)$，立刻就翻车。
### INTRO

于是引入迹：$\mathrm{tr}(A)$ 就是主对角线元素之和 —— 一个只吃对角线、却完全不受坐标变换影响的数。上面那三个坑，逐个补上：

- **坑一补上 · 特征值之和一个加法搞定**：特征值之和是迹（搭配 $\lvert A \rvert$ 就是特征值之积，二阶特征值直接口算），不用展开特征多项式；
- **坑二补上 · 相似不变性有了依据**：换一种写法（第五章会叫相似变换）后迹不变 —— 所以迹是相似不变量；虽然写法一换对角元全变了，但它们之和不变；
- **坑三补上 · 转一圈相等，但别乱推广**：$\mathrm{tr}(AB) = \mathrm{tr}(BA)$，乘积转一圈迹不变；但 $\mathrm{tr}(ABC) = \mathrm{tr}(ACB)$ 一般不成立，别顺手推广。
> 顺带提一句：这里冒出来的 $\lambda$ 到第五章会正式叫“特征值”，本篇只用“特征多项式 $=0$ 的根”这个身份，现在不懂“特征值”照样做题。
### DETAIL
**定义**：$n$ 阶方阵 $A = (a_{ij})$ 的迹是主对角线元素之和：

$$
\mathrm{tr}(A) = \Sigma_{i=1}^{n} a_{ii}
$$

**基本性质**：线性 $\mathrm{tr}(kA + lB) = k\,\mathrm{tr}(A) + l\,\mathrm{tr}(B)$；相似不变 $\mathrm{tr}(P^{-1}AP) = \mathrm{tr}(A)$。

**乘积的轮换**（注意是转圈，不是随便交换）：

$$
\mathrm{tr}(AB) = \mathrm{tr}(BA), \qquad \mathrm{tr}(ABC) = \mathrm{tr}(BCA) = \mathrm{tr}(CAB)
$$

但 $\mathrm{tr}(ABC) = \mathrm{tr}(ACB)$ 一般不成立，恒成立的只有轮换。

**与特征值**（特征值按代数重数计，重根要数进去）：

$$
\mathrm{tr}(A) = \Sigma_{i=1}^{n}\lambda_i, \qquad \mathrm{tr}(A^2) = \Sigma_{i=1}^{n}\lambda_i^2
$$

$\lvert A \rvert$ 等于全部特征值之积；$\mathrm{tr}(A^{*})$ 等于所有 $n - 1$ 阶主子式之和。

### USAGE
1. 填空题：已知 $\mathrm{tr}(A)$ 与 $\lvert A \rvert$ 反解二阶矩阵的特征值 —— 特征方程就是 $\lambda^2 - \mathrm{tr}(A)\lambda + \lvert A \rvert = 0$；也常用来求参数取值。
2. 证明题：证明 $\mathrm{tr}(AB) = \mathrm{tr}(BA)$，并由此推出相似矩阵的迹相等（$\mathrm{tr}(P^{-1}AP) = \mathrm{tr}(A)$），这是特征值不变量的常用入口。
3. 解答题：由特征值求 $\mathrm{tr}(A)$、$\mathrm{tr}(A^2)$、$\mathrm{tr}(A^{*})$ 这类组合量 —— $n$ 阶时用 $\mathrm{tr}(A) = \Sigma_{i=1}^{n}\lambda_i$、$\mathrm{tr}(A^2) = \Sigma_{i=1}^{n}\lambda_i^2$，而 $\mathrm{tr}(A^{*})$ 等于所有 $n - 1$ 阶主子式之和。

### SELFCHECK
1. 对 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 验证 $\lambda_1 + \lambda_2 = \mathrm{tr}(A) = 4$、$\lambda_1\lambda_2 = \lvert A \rvert = 3$。
2. 判断：$\mathrm{tr}(ABC) = \mathrm{tr}(ACB)$ 恒成立吗？（不恒成立 —— 恒成立的只有轮换 $\mathrm{tr}(ABC) = \mathrm{tr}(BCA) = \mathrm{tr}(CAB)$。）
3. 用迹与 $\lvert A \rvert$ 求 $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ 的特征值之和与积。（和为 $5$，积为 $-2$。）
