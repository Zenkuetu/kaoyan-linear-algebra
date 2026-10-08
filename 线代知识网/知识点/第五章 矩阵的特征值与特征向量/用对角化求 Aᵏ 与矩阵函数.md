---
tags:
  - 数一
  - 数二
  - 线代
  - 考研数学
章节: "[[第五章 矩阵的特征值与特征向量|第五章 矩阵的特征值与特征向量]]"
层次: 数一+数二
知识点ID: eig-power-app
---

# 用对角化求 Aᵏ 与矩阵函数

> <span class="oneline">​</span>**一句话**：A^k=PΛ^kP⁻¹：幂和矩阵函数一次算完

**考试层次**：`数一` `数二` ｜ **章节**：[[第五章 矩阵的特征值与特征向量|第五章 矩阵的特征值与特征向量]]

## <span class="hx hx-pain">🟠</span> 一、先看要解决什么

**要解决的是：$A$ 的 10 次方、100 次方，以及 $a_{n+2} = a_{n+1} + a_n$ 这类递推数列的通项，怎么算得不那么痛苦。**
先看 $A^{10}$，$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。硬乘也能凑：先算 $A^{2}$，再平方得 $A^{4}$，再平方得 $A^{8}$，最后乘两次 —— 大约 4 次矩阵乘法。可换成 $A^{100}$ 呢？还是 8 次左右，勉强能忍；但矩阵换成 10 阶（一次乘法就是 1000 次乘加），那就彻底不现实了。
再看递推数列：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，求 $a_{20}$。硬算要加 18 次，$a_{200}$ 就没法硬算了。
两个问题看着无关，其实是一件事：都是"同一个矩阵反复作用很多次"。最容易想到的"硬算"，在次数一大时全部失效。

## <span class="hx hx-gap">🔴</span> 二、直接办法为什么不够

- <span class="pit">​</span>**坑一 · 硬乘/硬递推**：$A^{k}$ 要 $k-1$ 次矩阵乘法（平方加速也还是要 $\log k$ 次大矩阵乘法），次数一大算不动，更看不出通项公式的样子；
- <span class="pit">​</span>**坑二 · 不管能不能对角化就套公式**：$A^{k} = P\Lambda^{k}P^{-1}$ 的前提是 $A$ 能对角化。$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 只有 1 个线性无关的特征向量，写不出这样的 $P$，公式直接失效；
- <span class="pit">​</span>**坑三 · 递推数列不知道怎么写成一阶**：手里只有 $a_{n+2} = a_{n+1} + a_n$，看着跟矩阵没关系。要用矩阵，得先把相邻两项打包成向量 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$，再把递推写成 $u_{n+1} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}u_n$；不知道这一步，公式再熟也用不上。

## <span class="hx hx-intro">🟢</span> 三、于是引入：用对角化求 Aᵏ 与矩阵函数

于是引入**用对角化求幂与矩阵函数**：只要能找到可逆 $P$ 使 $A = P\Lambda P^{-1}$（$\Lambda$ 是对角阵），就有

$$
A^{k} = P\Lambda^{k}P^{-1}, \qquad f(A) = Pf(\Lambda)P^{-1}
$$

其中 $\Lambda^{k}$ 只是把每个对角元各自取 $k$ 次方，$f(\Lambda)$ 同理。递推数列则用 $u_k = A^{k}u_0$ 一次到位。

上面那三个坑，逐个补上：

- <span class="fix">​</span>**坑一补上 · 幂从矩阵搬到数上**：$\Lambda^{k} = \begin{pmatrix} \lambda_1^{k} & 0 \\ 0 & \lambda_2^{k} \end{pmatrix}$，$3^{10}$ 一秒出结果；$\Lambda$ 求一百次方也无所谓，工作量只有两个数的幂；
- <span class="fix">​</span>**坑二补上 · 先判可对角化再用**：写 $A^{k} = P\Lambda^{k}P^{-1}$ 之前，先确认 $\sum_i m_i = n$；不能对角化就不能用这条（考到的矩阵一般都能对角化）；
- <span class="fix">​</span>**坑三补上 · 递推打包成一阶**：$u_{n+1} = Au_n$ 立刻给出 $u_n = A^{n-1}u_1$，问题变成求 $A$ 的幂。初值取 $u_1 = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$（相邻两项打包成一个向量），别漏项也别错位。

## <span class="hx hx-detail">🔵</span> 四、细节

<span class="lab">​</span>**公式**：设 $A = P\Lambda P^{-1}$，$\Lambda = \mathrm{diag}(\lambda_1, \dots, \lambda_n)$，$k$ 为正整数，则

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

<span class="lab">​</span>**校验**：$A^{10}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 应当等于 $3^{10}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 59049 \\ 59049 \end{pmatrix}$；而 $\begin{pmatrix} 29525 & 29524 \\ 29524 & 29525 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 29525 + 29524 \\ 29524 + 29525 \end{pmatrix} = \begin{pmatrix} 59049 \\ 59049 \end{pmatrix}$，对上了。
<span class="lab">​</span>**算例二（递推数列）**：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，求 $a_6$。
打包 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$，则 $u_{n+1} = Au_n$，$A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$，于是 $u_5 = A^{4}u_1$。逐步算：

$$
A^{2} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}, \qquad A^{4} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 3 & 5 \end{pmatrix}
$$

$$
u_5 = A^{4}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 + 3 \\ 3 + 5 \end{pmatrix} = \begin{pmatrix} 5 \\ 8 \end{pmatrix} \implies a_5 = 5, \quad a_6 = 8
$$

与逐项加出来的 $1, 1, 2, 3, 5, 8$ 一致。这里 $A$ 的特征值是 $\frac{1 \pm \sqrt{5}}{2}$（解 $\lambda^{2} - \lambda - 1 = 0$），次数大时用对角化算 $A^{n}$ 才是通法。
<span class="key">​</span>**常用结论**：
- $A^{k} = P\Lambda^{k}P^{-1}$，$\Lambda^{k}$ 只把对角元各自取幂；
- $f(A) = Pf(\Lambda)P^{-1}$，于是 $\lvert f(A) \rvert = \prod_i f(\lambda_i)$、$\mathrm{tr}(f(A)) = \sum_i f(\lambda_i)$ 一起解决；
- 递推 $\alpha_{k+1} = A\alpha_k$ 的通项是 $\alpha_k = A^{k}\alpha_0$，配合对角化就能写出通项公式；
- $\lvert A^{k} \rvert = \lvert \Lambda^{k} \rvert = \lambda_1^{k}\cdots\lambda_n^{k}$，也是一个常用的口算点；
- 前提：必须先确认 $A$ 可对角化（$\sum_i m_i = n$）。

## <span class="hx hx-usage">🟣</span> 五、怎么用

1. 选择题：由 $A = P\Lambda P^{-1}$ 判断 $A^{k}$ 的表达式，或者问"下列哪个矩阵能用这个公式求幂"（考可对角化的前提）。
2. 填空题：给特征值与 $P$，写出 $A^{k}$ 或 $f(A)$，常见 $\lvert A^{k} \rvert = \lvert A \rvert^{k}$、$\mathrm{tr}(A^{k}) = \sum\lambda_i^{k}$。
3. 解答题：求 $A^{n}$（标准五步：特征值 → 特征向量 → $P$ 与 $\Lambda$ → 求 $P^{-1}$ → 代 $A^{n} = P\Lambda^{n}P^{-1}$），以及由此求递推数列的通项。

## <span class="hx hx-err">⚠️</span> 六、易错点

- ⚠️ 对不可对角化矩阵仍用此公式

## <span class="hx hx-check">🎯</span> 七、30 秒自测

- [ ] 算：$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，用 $P\Lambda^{10}P^{-1}$ 写出 $A^{10}$ 的主对角元。
- [ ] 判：$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 能不能写成 $P\Lambda P^{-1}$（$\Lambda$ 为对角阵）？为什么？
- [ ] 算：$a_1 = a_2 = 1$，$a_{n+2} = a_{n+1} + a_n$，写出对应的 $A$ 与 $u_n = \begin{pmatrix} a_n \\ a_{n+1} \end{pmatrix}$ 的递推式，并算出 $a_6$。

> [!quote]- 🕸️ 八、关系网（点开查看 2 条关系：0 条充要）
>
> | 方向 | 关系类型 | 与之相连的知识点 | 数学含义 |
> | --- | --- | --- | --- |
> | 对方 ⇒ 本点 | 🟧 充分不必要（⇒） | [[相似对角化的方法与步骤]] | 对角化后立得幂与矩阵函数 |
> | 对方 ⇒ 本点 | 🟩 概念关联（同源/构成） | [[方阵的幂与矩阵多项式]] | 同一个"求 Aᵏ"主题的两种手段：初等技巧（拆分/秩 1）与对角化 |
>
> 图例：🟥 充要（可互换）｜🟧 充分不必要（条件更强）｜🟪 必要不充分（条件更弱）｜⬜ 互不可推 ｜🟩 同源/构成。
>
> **图谱用双链**：（供 Obsidian 图谱与反向链接面板使用）
>
> - [[相似对角化的方法与步骤]] ⇒ 🟧 充分 ⇒ 本点——对角化后立得幂与矩阵函数
> - [[方阵的幂与矩阵多项式]] ⇒ 🟩 关联 ⇒ 本点——同一个"求 Aᵏ"主题的两种手段：初等技巧（拆分/秩 1）与对角化

## <span class="hx hx-exam">📝</span> 九、真题（1988–2026）

### 1988 年 · 数学一 · 第七大题（解答，6 分）

- [ ]

  已知 $AP=PB$，其中
  $$
  B=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix},\quad P=\begin{pmatrix}1&0&0\\2&-1&0\\2&1&1\end{pmatrix},
  $$
  求 $A$ 及 $A^5$.

  > [!success]- 答案与解析
  > **答案**：
  > $$
  > A=\begin{pmatrix}1&0&0\\2&0&0\\6&-1&-1\end{pmatrix},\quad A^5=A=\begin{pmatrix}1&0&0\\2&0&0\\6&-1&-1\end{pmatrix}.
  > $$
  >
  > $$
  > P^{-1}=\begin{pmatrix}1&0&0\\2&-1&0\\-4&1&1\end{pmatrix},\quad A=PBP^{-1}=\begin{pmatrix}1&0&0\\2&0&0\\6&-1&-1\end{pmatrix};
  > $$
  > $$
  > A^5=PB^5P^{-1}=PBP^{-1}=A.
  > $$

### 1992 年 · 数学一 · 第九大题（解答，7 分）

- [ ]

  设 3 阶矩阵 $A$ 的特征值为 $\lambda_1=1,\lambda_2=2,\lambda_3=3$，对应的特征向量依次为
  $$
  \xi_1=\begin{pmatrix}1\\1\\1\end{pmatrix},\quad\xi_2=\begin{pmatrix}1\\2\\4\end{pmatrix},\quad\xi_3=\begin{pmatrix}1\\3\\9\end{pmatrix},
  $$
  又向量 $\beta=\begin{pmatrix}1\\1\\3\end{pmatrix}$.

  （1）将 $\beta$ 用 $\xi_1,\xi_2,\xi_3$ 线性表示；
  （2）求 $A^n\beta$（$n$ 为自然数）.

  > [!success]- 答案与解析
  > **答案**：
  > （1）$\beta=2\xi_1-2\xi_2+\xi_3$.
  > （2）
  > $$
  > A^n\beta=\begin{pmatrix}2-2^{n+1}+3^n\\2-2^{n+2}+3^{n+1}\\2-2^{n+3}+3^{n+2}\end{pmatrix}.
  > $$
  >
  > （1）设
  > $$
  > \beta=x_1\xi_1+x_2\xi_2+x_3\xi_3=(\xi_1,\xi_2,\xi_3)\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix},
  > $$
  > 对此方程组的增广矩阵作初等行变换
  > $$
  > (\xi_1,\xi_2,\xi_3\vdots\beta)=\begin{pmatrix}1&1&1&1\\1&2&3&1\\1&4&9&3\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&2&0\\0&3&8&2\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&1&2&0\\0&0&1&1\end{pmatrix},
  > $$
  > 得唯一解 $(2,-2,1)^{\mathrm{T}}$，故有 $\beta=2\xi_1-2\xi_2+\xi_3$.
  >
  > （2）由于 $A\xi_i=\lambda_i\xi_i$，故 $A^n\xi_i=\lambda_i^n\xi_i,i=1,2,3$，因此
  > $$
  > A^n\beta=A^n(2\xi_1-2\xi_2+\xi_3)=2A^n\xi_1-2A^n\xi_2+A^n\xi_3
  > $$
  > $$
  > =2\begin{pmatrix}1\\1\\1\end{pmatrix}-2^{n+1}\begin{pmatrix}1\\2\\4\end{pmatrix}+3^n\begin{pmatrix}1\\3\\9\end{pmatrix}=\begin{pmatrix}2-2^{n+1}+3^n\\2-2^{n+2}+3^{n+1}\\2-2^{n+3}+3^{n+2}\end{pmatrix}.
  > $$

### 2000 年 · 数学一 · 解答题第 11 题（解答，8 分）

- [ ]

  （本题满分 8 分）某试验性生产线每年一月份进行熟练工与非熟练工的人数统计，然后将 $\dfrac{1}{6}$ 熟练工支援其他生产部门，其缺额由招收新的非熟练工补齐．新、老非熟练工经过培训及实践至年终考核有 $\dfrac{2}{5}$ 成为熟练工．设第 $n$ 年一月份统计的熟练工和非熟练工所占百分比分别为 $x_n$ 和 $y_n$，记成向量 $\begin{pmatrix}x_n\\y_n\end{pmatrix}$．

  （1）求 $\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}$ 与 $\begin{pmatrix}x_n\\y_n\end{pmatrix}$ 的关系式并写成矩阵形式：$\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A\begin{pmatrix}x_n\\y_n\end{pmatrix}$；

  （2）验证 $\eta_1=\begin{pmatrix}4\\1\end{pmatrix}$，$\eta_2=\begin{pmatrix}-1\\1\end{pmatrix}$ 是 $A$ 的两个线性无关的特征向量，并求出相应的特征值；

  （3）当 $\begin{pmatrix}x_1\\y_1\end{pmatrix}=\begin{pmatrix}\dfrac{1}{2}\\\dfrac{1}{2}\end{pmatrix}$ 时，求 $\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}$．

  > [!success]- 答案与解析
  > **答案**：（1）$\begin{cases}x_{n+1}=\dfrac{9}{10}x_n+\dfrac{2}{5}y_n,\\y_{n+1}=\dfrac{1}{10}x_n+\dfrac{3}{5}y_n,\end{cases}$ 即 $A=\begin{pmatrix}\dfrac{9}{10}&\dfrac{2}{5}\\\dfrac{1}{10}&\dfrac{3}{5}\end{pmatrix}$；（2）$\eta_1,\eta_2$ 线性无关；$\eta_1$ 为 $A$ 的属于特征值 $\lambda_1=1$ 的特征向量，$\eta_2$ 为 $A$ 的属于特征值 $\lambda_2=\dfrac{1}{2}$ 的特征向量；（3）$\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=\dfrac{1}{10}\begin{pmatrix}8-\dfrac{3}{2^n}\\2+\dfrac{3}{2^n}\end{pmatrix}$．
  >
  > （19）【解】 （Ⅰ）由题意得
  > $$
  > \begin{cases}x_{n+1}=\dfrac{5}{6}x_n+\dfrac{2}{5}\left(\dfrac{1}{6}x_n+y_n\right),\\y_{n+1}=\dfrac{3}{5}\left(\dfrac{1}{6}x_n+y_n\right),\end{cases}\text{整理得}\begin{cases}x_{n+1}=\dfrac{9}{10}x_n+\dfrac{2}{5}y_n,\\y_{n+1}=\dfrac{1}{10}x_n+\dfrac{3}{5}y_n.\end{cases}
  > $$
  > $$
  > \text{令 }A=\begin{pmatrix}\dfrac{9}{10}&\dfrac{2}{5}\\\dfrac{1}{10}&\dfrac{3}{5}\end{pmatrix},\text{则}\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A\begin{pmatrix}x_n\\y_n\end{pmatrix}.
  > $$
  >
  > （Ⅱ）令 $P=(\eta_1,\eta_2)=\begin{pmatrix}4&-1\\1&1\end{pmatrix}$，因为 $\eta_1,\eta_2$ 不成比例，所以 $\eta_1,\eta_2$ 线性无关．
  >
  > 由 $A\eta_1=\eta_1$，得 $\eta_1$ 为 $A$ 的属于特征值 $\lambda_1=1$ 的特征向量；
  >
  > 由 $A\eta_2=\dfrac{1}{2}\eta_2$，得 $\eta_2$ 为 $A$ 的属于特征值 $\lambda_2=\dfrac{1}{2}$ 的特征向量．
  >
  > （Ⅲ）$\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A\begin{pmatrix}x_n\\y_n\end{pmatrix}=A^2\begin{pmatrix}x_{n-1}\\y_{n-1}\end{pmatrix}=\cdots=A^n\begin{pmatrix}x_1\\y_1\end{pmatrix}$，
  > $$
  > \text{由 }P^{-1}AP=\begin{pmatrix}1&0\\0&\dfrac{1}{2}\end{pmatrix},\text{得 }A=P\begin{pmatrix}1&0\\0&\dfrac{1}{2}\end{pmatrix}P^{-1},\text{于是 }A^n=P\begin{pmatrix}1&0\\0&\dfrac{1}{2^n}\end{pmatrix}P^{-1},
  > $$
  > $$
  > \text{而 }P^{-1}=\dfrac{1}{5}\begin{pmatrix}1&1\\-1&4\end{pmatrix},\text{因此 }A^n=P\begin{pmatrix}1&0\\0&\dfrac{1}{2^n}\end{pmatrix}P^{-1}=\dfrac{1}{5}\begin{pmatrix}4+\dfrac{1}{2^n}&4-\dfrac{1}{2^{n-2}}\\1-\dfrac{1}{2^n}&1+\dfrac{1}{2^{n-2}}\end{pmatrix},
  > $$
  > $$
  > \text{故}\begin{pmatrix}x_{n+1}\\y_{n+1}\end{pmatrix}=A^n\cdot\dfrac{1}{2}\begin{pmatrix}1\\1\end{pmatrix}=\dfrac{1}{10}\begin{pmatrix}8-\dfrac{3}{2^n}\\2+\dfrac{3}{2^n}\end{pmatrix}.
  > $$

### 2006 年 · 数学三 · 第 21 题（解答，13 分）

- [ ]

  （本题满分 13 分）设 $3$ 阶实对称矩阵 $A$ 的各行元素之和均为 $3$，向量 $\alpha_1=(-1,2,-1)^{\mathrm{T}}$，$\alpha_2=(0,-1,1)^{\mathrm{T}}$ 是线性方程组 $Ax=0$ 的两个解。

  （Ⅰ）求 $A$ 的特征值与特征向量；

  （Ⅱ）求正交矩阵 $Q$ 和对角矩阵 $\Lambda$，使得 $Q^{\mathrm{T}}AQ=\Lambda$；

  （Ⅲ）求 $A$ 及 $\left(A-\dfrac{3}{2}E\right)^6$，其中 $E$ 为 $3$ 阶单位矩阵。

  > [!success]- 答案与解析
  > **答案**：（Ⅰ）$A$ 的特征值为 $3,0,0$；属于 $3$ 的特征向量为 $k_3\alpha_3$（$\alpha_3=(1,1,1)^{\mathrm{T}}$，$k_3\ne 0$），属于 $0$ 的特征向量为 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为零）；（Ⅱ）$Q=\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\[4pt]\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\[4pt]-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}$，$\Lambda=\begin{pmatrix}0&0&0\\0&0&0\\0&0&3\end{pmatrix}$；（Ⅲ）$A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$，$\left(A-\dfrac{3}{2}E\right)^6=\left(\dfrac{3}{2}\right)^6E=\dfrac{729}{64}E$。
  >
  > 【详解】（Ⅰ）由题设条件 $A\alpha_1=0=0\alpha_1$，$A\alpha_2=0=0\alpha_2$，故 $\alpha_1,\alpha_2$ 是 $A$ 的对应于 $\lambda=0$ 的特征向量，又因为 $\alpha_1,\alpha_2$ 线性无关，故 $\lambda=0$ 至少是 $A$ 的二重特征值。又因为 $A$ 的每行元素之和为 $3$，所以有 $A(1,1,1)^{\mathrm{T}}=(3,3,3)^{\mathrm{T}}=3(1,1,1)^{\mathrm{T}}$，由特征值、特征向量的定义，$\alpha_0=(1,1,1)^{\mathrm{T}}$ 是 $A$ 的特征向量，特征值为 $\lambda_3=3$，$\lambda_3$ 只能是单根，$k_3\alpha_0,k_3\ne 0$ 是全体特征向量，从而知 $\lambda=0$ 是二重特征值。
  >
  > 于是 $A$ 的特征值为 $3,0,0$；属于 $3$ 的特征向量：$k_3\alpha_3,k_3\ne 0$；属于 $0$ 的特征向量：$k_1\alpha_1+k_2\alpha_2$，$k_1,k_2$ 不都为 $0$。
  >
  > （Ⅱ）为了求出可逆矩阵必须对特征向量进行单位正交化。
  >
  > 先将 $\alpha_0$ 单位化，得 $\eta_0=\left(\dfrac{\sqrt{3}}{3},\dfrac{\sqrt{3}}{3},\dfrac{\sqrt{3}}{3}\right)^{\mathrm{T}}$。
  >
  > 对 $\alpha_1,\alpha_2$ 作施密特正交化，得 $\eta_1=\left(0,-\dfrac{\sqrt{2}}{2},\dfrac{\sqrt{2}}{2}\right)^{\mathrm{T}}$，$\eta_2=\left(-\dfrac{\sqrt{6}}{3},\dfrac{\sqrt{6}}{6},\dfrac{\sqrt{6}}{6}\right)^{\mathrm{T}}$。
  >
  > 作 $Q=(\eta_1,\eta_2,\eta_0)$，则 $Q$ 是正交矩阵，并且
  > $$
  > Q^{\mathrm{T}}AQ=Q^{-1}AQ=\begin{pmatrix}0&0&0\\0&0&0\\0&0&3\end{pmatrix}.
  > $$
  > （Ⅲ）由 $Q^{\mathrm{T}}AQ=\Lambda$，其中 $Q^{\mathrm{T}}=Q^{-1}$，
  > $$
  > A=Q\Lambda Q^{\mathrm{T}}=\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\[4pt]\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\[4pt]-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}\begin{pmatrix}0&&\\&0&\\&&3\end{pmatrix}\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&\dfrac{2}{\sqrt{6}}&-\dfrac{1}{\sqrt{6}}\\[4pt]-\dfrac{1}{\sqrt{2}}&0&\dfrac{1}{\sqrt{2}}\\[4pt]\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}
  > $$
  > $$
  > =\begin{pmatrix}-\dfrac{1}{\sqrt{6}}&-\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\\[4pt]\dfrac{2}{\sqrt{6}}&0&\dfrac{1}{\sqrt{3}}\\[4pt]-\dfrac{1}{\sqrt{6}}&\dfrac{1}{\sqrt{2}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}\begin{pmatrix}0&0&0\\0&0&0\\\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}&\dfrac{1}{\sqrt{3}}\end{pmatrix}=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.
  > $$
  > $$
  > \left(A-\frac{3}{2}E\right)^6=\left(Q\Lambda Q^{-1}-\frac{3}{2}E\right)^6=\left[Q\left(\Lambda-\frac{3}{2}E\right)Q^{-1}\right]^6=Q\left(\Lambda-\frac{3}{2}E\right)^6Q^{-1}
  > $$
  > $$
  > =Q\begin{pmatrix}-\dfrac{3}{2}&&\\&-\dfrac{3}{2}&\\&&\dfrac{3}{2}\end{pmatrix}^6Q^{-1}=Q\left(\frac{3}{2}\right)^6EQ^{-1}=\left(\frac{3}{2}\right)^6QQ^{-1}=\left(\frac{3}{2}\right)^6E.
  > $$

### 2016 年 · 数学一 · 第 21 题（解答，11 分）

- [ ]

  （本题满分 11 分）已知矩阵
  $$
  A=\begin{pmatrix}0&-1&1\\2&-3&0\\0&0&0\end{pmatrix}.
  $$
  （Ⅰ）求 $A^{99}$；

  （Ⅱ）设 3 阶矩阵 $B=(\alpha_1,\alpha_2,\alpha_3)$ 满足 $B^2=BA$。记 $B^{100}=(\beta_1,\beta_2,\beta_3)$，将 $\beta_1,\beta_2,\beta_3$ 分别表示为 $\alpha_1,\alpha_2,\alpha_3$ 的线性组合。

  > [!success]- 答案与解析
  > **答案**：
  > （Ⅰ）$A^{99}=\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}$；
  > （Ⅱ）$\beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2$，$\beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2$，$\beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2$
  >
  > （Ⅰ）由
  > $$
  > |\lambda E-A|=\begin{vmatrix}\lambda&1&-1\\-2&\lambda+3&0\\0&0&\lambda\end{vmatrix}=\lambda(\lambda+1)(\lambda+2)=0
  > $$
  > 得矩阵 $A$ 的特征值为 $\lambda_1=-1,\lambda_2=-2,\lambda_3=0$。
  >
  > 将 $\lambda_1=-1$ 代入 $(\lambda E-A)X=0$，由
  > $$
  > -E-A=\begin{pmatrix}-1&1&-1\\-2&2&0\\0&0&-1\end{pmatrix}\to\begin{pmatrix}1&-1&0\\0&0&1\\0&0&0\end{pmatrix}
  > $$
  > 得 $\lambda_1=-1$ 对应的特征向量为 $\xi_1=\begin{pmatrix}1\\1\\0\end{pmatrix}$；
  >
  > 将 $\lambda_2=-2$ 代入 $(\lambda E-A)X=0$，由
  > $$
  > -2E-A=\begin{pmatrix}-2&1&-1\\-2&1&0\\0&0&-2\end{pmatrix}\to\begin{pmatrix}1&-\frac{1}{2}&0\\0&0&1\\0&0&0\end{pmatrix}
  > $$
  > 得 $\lambda_2=-2$ 对应的特征向量为 $\xi_2=\begin{pmatrix}1\\2\\0\end{pmatrix}$；
  >
  > 将 $\lambda_3=0$ 代入 $(\lambda E-A)X=0$，由
  > $$
  > -A=\begin{pmatrix}0&1&-1\\-2&3&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&-\frac{3}{2}\\0&1&-1\\0&0&0\end{pmatrix}
  > $$
  > 得 $\lambda_3=0$ 对应的特征向量为 $\xi_3=\begin{pmatrix}3\\2\\2\end{pmatrix}$。
  >
  > 令 $P=\begin{pmatrix}1&1&3\\1&2&2\\0&0&2\end{pmatrix}$，由 $P^{-1}AP=\begin{pmatrix}-1&0&0\\0&-2&0\\0&0&0\end{pmatrix}$ 得
  > $$
  > A^{99}=P\begin{pmatrix}(-1)^{99}&0&0\\0&(-2)^{99}&0\\0&0&0\end{pmatrix}P^{-1}=\begin{pmatrix}1&1&3\\1&2&2\\0&0&2\end{pmatrix}\begin{pmatrix}(-1)^{99}&0&0\\0&(-2)^{99}&0\\0&0&0\end{pmatrix}\begin{pmatrix}2&-1&-2\\-1&1&\frac{1}{2}\\0&0&\frac{1}{2}\end{pmatrix}
  > $$
  > $$
  > =\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}.
  > $$
  >
  > （Ⅱ）由 $B^2=BA$ 得 $B^{100}=B^{98}B^2=B^{99}A=\cdots=BA^{99}$，即
  > $$
  > (\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix},
  > $$
  > 故
  > $$
  > \begin{cases}
  > \beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2+0\alpha_3,\\
  > \beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2+0\alpha_3,\\
  > \beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2+0\alpha_3.
  > \end{cases}
  > $$

### 2016 年 · 数学三 · 第 21 题（解答，11 分）

- [ ]

  （本题满分 11 分）已知矩阵 $A=\begin{pmatrix}0&-1&1\\2&-3&0\\0&0&0\end{pmatrix}$.

  （Ⅰ）求 $A^{99}$；

  （Ⅱ）设 3 阶矩阵 $B=(\alpha_1,\alpha_2,\alpha_3)$ 满足 $B^2=BA$，记 $B^{100}=(\beta_1,\beta_2,\beta_3)$，将 $\beta_1,\beta_2,\beta_3$ 分别表示为 $\alpha_1,\alpha_2,\alpha_3$ 的线性组合.

  > [!success]- 答案与解析
  > **答案**：$A^{99}=\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}$；$\beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2$，$\beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2$，$\beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2$
  >
  > （Ⅰ）因为
  > $$
  > |\lambda E-A|=\begin{vmatrix}\lambda&1&-1\\-2&\lambda+3&0\\0&0&\lambda\end{vmatrix}=\lambda(\lambda+1)(\lambda+2),
  > $$
  > 所以 $A$ 的特征值为 $\lambda_1=-1,\lambda_2=-2,\lambda_3=0$.
  >
  > 当 $\lambda_1=-1$ 时，解方程组 $(-E-A)x=0$，得特征向量 $\xi_1=(1,1,0)^{\mathrm{T}}$；
  >
  > 当 $\lambda_2=-2$ 时，解方程组 $(-2E-A)x=0$，得特征向量 $\xi_2=(1,2,0)^{\mathrm{T}}$；
  >
  > 当 $\lambda_3=0$ 时，解方程组 $Ax=0$，得特征向量 $\xi_3=(3,2,2)^{\mathrm{T}}$.
  >
  > 令 $P=(\xi_1,\xi_2,\xi_3)=\begin{pmatrix}1&1&3\\1&2&2\\0&0&2\end{pmatrix}$，则
  > $$
  > P^{-1}AP=\begin{pmatrix}-1&0&0\\0&-2&0\\0&0&0\end{pmatrix},
  > $$
  > 所以
  > $$
  > A^{99}=P\begin{pmatrix}(-1)^{99}&0&0\\0&(-2)^{99}&0\\0&0&0\end{pmatrix}P^{-1}=\begin{pmatrix}1&1&3\\1&2&2\\0&0&2\end{pmatrix}\begin{pmatrix}(-1)^{99}&0&0\\0&(-2)^{99}&0\\0&0&0\end{pmatrix}\begin{pmatrix}2&-1&-2\\-1&1&\frac12\\0&0&\frac12\end{pmatrix}
  > $$
  > $$
  > =\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}.
  > $$
  >
  > （Ⅱ）因为 $B^2=BA$，所以
  > $$
  > B^{100}=B^{98}B^2=B^{99}A=B^{97}B^2A=B^{98}A^2=\cdots=BA^{99},
  > $$
  > 即
  > $$
  > (\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix},
  > $$
  > 所以
  > $$
  > \begin{cases}
  > \beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2,\\
  > \beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2,\\
  > \beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2,
  > \end{cases}
  > $$

### 2016 年 · 数学二 · 第 23 题（解答，11 分）

- [ ]

  （本题满分 11 分）已知矩阵
  $$
  A=\begin{pmatrix}0&-1&1\\2&-3&0\\0&0&0\end{pmatrix}.
  $$
  （Ⅰ）求 $A^{99}$；

  （Ⅱ）设 3 阶矩阵 $B=(\alpha_1,\alpha_2,\alpha_3)$ 满足 $B^2=BA$。记 $B^{100}=(\beta_1,\beta_2,\beta_3)$，将 $\beta_1,\beta_2,\beta_3$ 分别表示为 $\alpha_1,\alpha_2,\alpha_3$ 的线性组合。

  > [!success]- 答案与解析
  > **答案**：
  > （Ⅰ）
  > $$
  > A^{99}=\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}
  > $$
  > （Ⅱ）$\beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2$，$\beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2$，$\beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2$。
  >
  > 本题中的矩阵是一个一般矩阵，要求它的 99 次幂，若直接计算，则计算量会比较大，而对角矩阵的高次幂较容易计算。因此我们可以考虑证明 $A$ 相似于一个对角矩阵，并利用以下结论：
  >
  > 若 $A$ 相似于对角矩阵 $\Lambda$，即存在可逆矩阵 $P$，使得 $P^{-1}AP=\Lambda$，则 $A=P\Lambda P^{-1},A^{99}=P\Lambda^{99}P^{-1}$。
  >
  > 解（Ⅰ）计算 $A$ 的特征多项式 $|\lambda E-A|$。
  > $$
  > |\lambda E-A|=\begin{vmatrix}\lambda&1&-1\\-2&\lambda+3&0\\0&0&\lambda\end{vmatrix}\xrightarrow{\text{按第三行展开}}\lambda(\lambda^2+3\lambda+2)=\lambda(\lambda+1)(\lambda+2).
  > $$
  > 因此，$A$ 有 3 个不同的特征值，$-2,-1,0$。
  >
  > 由于属于不同特征值的特征向量线性无关，故 $A$ 有 3 个线性无关的特征向量，$A$ 相似于对角矩阵
  > $$
  > \begin{pmatrix}-2&0&0\\0&-1&0\\0&0&0\end{pmatrix}.
  > $$
  > 分别计算 $A$ 的属于特征值 $-2,-1,0$ 的特征向量。
  >
  > 当 $\lambda=-2$ 时，解 $(-2E-A)x=0$。由于
  > $$
  > -2E-A=\begin{pmatrix}-2&1&-1\\-2&1&0\\0&0&-2\end{pmatrix}\to\begin{pmatrix}-2&1&0\\0&0&1\\0&0&0\end{pmatrix},
  > $$
  > 故 $(1,2,0)^{\mathrm{T}}$ 为 $A$ 的属于特征值 $-2$ 的特征向量。
  >
  > 当 $\lambda=-1$ 时，解 $(-E-A)x=0$。由于
  > $$
  > -E-A=\begin{pmatrix}-1&1&-1\\-2&2&0\\0&0&-1\end{pmatrix}\to\begin{pmatrix}-1&1&0\\0&0&1\\0&0&0\end{pmatrix},
  > $$
  > 故 $(1,1,0)^{\mathrm{T}}$ 为 $A$ 的属于特征值 $-1$ 的特征向量。
  >
  > 当 $\lambda=0$ 时，解 $(0E-A)x=0$。由于
  > $$
  > 0E-A=\begin{pmatrix}0&1&-1\\-2&3&0\\0&0&0\end{pmatrix},
  > $$
  > 故 $(3,2,2)^{\mathrm{T}}$ 为 $A$ 的属于特征值 $0$ 的特征向量。
  >
  > 令 $P=\begin{pmatrix}1&1&3\\2&1&2\\0&0&2\end{pmatrix}$，则 $P^{-1}AP=\begin{pmatrix}-2&0&0\\0&-1&0\\0&0&0\end{pmatrix}$。
  >
  > 计算 $P^{-1}$ 得，$P^{-1}=\begin{pmatrix}-1&1&\frac12\\2&-1&-2\\0&0&\frac12\end{pmatrix}$。
  > $$
  > A^{99}=P\begin{pmatrix}(-2)^{99}&0&0\\0&(-1)^{99}&0\\0&0&0\end{pmatrix}P^{-1}=\begin{pmatrix}1&1&3\\2&1&2\\0&0&2\end{pmatrix}\begin{pmatrix}-2^{99}&0&0\\0&-1&0\\0&0&0\end{pmatrix}\begin{pmatrix}-1&1&\frac12\\2&-1&-2\\0&0&\frac12\end{pmatrix}
  > $$
  > $$
  > =\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}.
  > $$
  > （Ⅱ）先求 $B^{100}$。
  >
  > 由于 $B^2=BA$，故
  > $$
  > B^3=B(B^2)=B(BA)=B^2A=(BA)A=BA^2.
  > $$
  > 下面我们用数学归纳法证明 $B^n=BA^{n-1},n=2,3,\cdots$。
  >
  > 当 $n=2$ 时，$B^2=BA$。
  >
  > 假设该命题对 $n=k$ 成立，下面证明该命题对 $n=k+1$ 也成立。
  > $$
  > B^n=B^{k+1}=BB^k\xrightarrow{\text{归纳假设}}B(BA^{k-1})=B^2A^{k-1}=(BA)A^{k-1}=BA^k=BA^{n-1}.
  > $$
  > 于是，该命题对 $n=k+1$ 也成立，从而由数学归纳法可知，该命题对所有 $\ge2$ 的正整数均成立。
  >
  > 因此，
  > $$
  > (\beta_1,\beta_2,\beta_3)=B^{100}=BA^{99}=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\2^{100}-2&1-2^{100}&2-2^{99}\\0&0&0\end{pmatrix}.
  > $$
  > 综上所述，
  > $$
  > \beta_1=(2^{99}-2)\alpha_1+(2^{100}-2)\alpha_2,
  > $$
  > $$
  > \beta_2=(1-2^{99})\alpha_1+(1-2^{100})\alpha_2,
  > $$
  > $$
  > \beta_3=(2-2^{98})\alpha_1+(2-2^{99})\alpha_2.
  > $$

### 2024 年 · 数学一 · 第 21 题（解答，12 分）

- [ ]

  （本题满分 12 分）已知数列 $\{x_n\},\{y_n\},\{z_n\}$ 满足 $x_0=-1$，$y_0=0$，$z_0=2$，且
  $$
  \begin{cases}
  x_n=-2x_{n-1}+2z_{n-1},\\
  y_n=-2y_{n-1}-2z_{n-1},\\
  z_n=-6x_{n-1}-3y_{n-1}+3z_{n-1},
  \end{cases}
  $$
  记 $\alpha_n=\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$，写出满足 $\alpha_n=A\alpha_{n-1}$ 的矩阵 $A$，并求 $A^n$ 及 $x_n,y_n,z_n\ (n=1,2,\cdots)$。

  > [!success]- 答案与解析
  > **答案**：$x_n=8+(-2)^n$，$y_n=-8+(-2)^{n+1}$，$z_n=12\ (n=1,2,\cdots)$
  >
  > 由题设得
  > $$
  > \begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}=\begin{pmatrix}-2&0&2\\0&-2&-2\\-6&-3&3\end{pmatrix}\begin{pmatrix}x_{n-1}\\y_{n-1}\\z_{n-1}\end{pmatrix},
  > $$
  > 得矩阵 $A=\begin{pmatrix}-2&0&2\\0&-2&-2\\-6&-3&3\end{pmatrix}$ 满足 $\alpha_n=A\alpha_{n-1}$。
  >
  > 因为
  > $$
  > |\lambda E-A|=\begin{vmatrix}\lambda+2&0&-2\\0&\lambda+2&2\\6&3&\lambda-3\end{vmatrix}=\lambda(\lambda-1)(\lambda+2),
  > $$
  > 所以矩阵 $A$ 的特征值为 $\lambda_1=0$，$\lambda_2=1$，$\lambda_3=-2$。
  >
  > 当 $\lambda_1=0$ 时，解方程组 $(0E-A)x=0$，得特征向量 $\xi_1=\begin{pmatrix}1\\-1\\1\end{pmatrix}$；
  >
  > 当 $\lambda_2=1$ 时，解方程组 $(E-A)x=0$，得特征向量 $\xi_2=\begin{pmatrix}2\\-2\\3\end{pmatrix}$；
  >
  > 当 $\lambda_3=-2$ 时，解方程组 $(-2E-A)x=0$，得特征向量 $\xi_3=\begin{pmatrix}-1\\2\\0\end{pmatrix}$。
  >
  > 令 $P=(\xi_1,\xi_2,\xi_3)=\begin{pmatrix}1&2&-1\\-1&-2&2\\1&3&0\end{pmatrix}$，则 $P^{-1}AP=\begin{pmatrix}0&0&0\\0&1&0\\0&0&-2\end{pmatrix}$，即
  > $$
  > A=P\begin{pmatrix}0&0&0\\0&1&0\\0&0&-2\end{pmatrix}P^{-1},
  > $$
  > 从而得
  > $$
  > A^n=P\begin{pmatrix}0&0&0\\0&1&0\\0&0&-2\end{pmatrix}^nP^{-1}=\begin{pmatrix}1&2&-1\\-1&-2&2\\1&3&0\end{pmatrix}\begin{pmatrix}0&0&0\\0&1&0\\0&0&(-2)^n\end{pmatrix}\begin{pmatrix}6&3&-2\\-2&-1&1\\1&1&0\end{pmatrix}
  > $$
  > $$
  > =\begin{pmatrix}-4-(-2)^n&-2-(-2)^n&2\\4-(-2)^{n+1}&2-(-2)^{n+1}&-2\\-6&-3&3\end{pmatrix}.
  > $$
  > 由递推式 $\alpha_n=A\alpha_{n-1}$ 知 $\alpha_n=A^n\alpha_0$，其中 $\alpha_0=\begin{pmatrix}-1\\0\\2\end{pmatrix}$，所以
  > $$
  > \alpha_n=A^n\alpha_0=\begin{pmatrix}-4-(-2)^n&-2-(-2)^n&2\\4-(-2)^{n+1}&2-(-2)^{n+1}&-2\\-6&-3&3\end{pmatrix}\begin{pmatrix}-1\\0\\2\end{pmatrix}=\begin{pmatrix}8+(-2)^n\\-8+(-2)^{n+1}\\12\end{pmatrix},
  > $$
  > 故 $x_n=8+(-2)^n$，$y_n=-8+(-2)^{n+1}$，$z_n=12\ (n=1,2,\cdots)$。

### 2026 年 · 数学二 · 第 10 题（选择，5 分）

- [ ]

  设 3 阶矩阵 $A,B$，满足 $AB+BA=A^2+B^2$，则 $A\ne B$. 则下列结论错误的是

  （A）$(A-B)^3=O$　　（B）$A-B$ 只有零特征值

  （C）$A,B$ 不能都是对角矩阵　　（D）$A-B$ 只有一个线性无关的特征向量

  > [!success]- 答案与解析
  > **答案**：（D）
  >
  > 【解析】由 $AB+BA=A^2+B^2$，得 $(A-B)^2=O$.
  >
  > $(A-B)^2=O\Rightarrow (A-B)^3=O$，（A）正确；
  >
  > $(A-B)^2=O\Rightarrow A-B$ 的特征值满足 $\lambda^2=0$，所以 $A-B$ 只有零特征值，（B）正确；
  >
  > 若 $A,B$ 都是对角矩阵，则 $A-B$ 是对角矩阵，$(A-B)^2=O\Rightarrow A-B=O$，与题意矛盾；（C）正确；
  >
  > $(A-B)^2=O\Rightarrow r(A-B)+r(A-B)\le 3$，又 $A-B\ne O$，得 $r(A-B)=1$，$n-r(A-B)=2$，从而 $A-B$ 有 2 个线性无关的特征向量，（D）错误，故选（D）.

### 2026 年 · 数学二 · 第 22 题（解答，12 分）

- [ ]

  （本题满分 12 分）已知向量组
  $$
  \alpha_1=\begin{pmatrix}1\\0\\-1\\-1\end{pmatrix},\quad\alpha_2=\begin{pmatrix}1\\-1\\0\\-2\end{pmatrix},\quad\alpha_3=\begin{pmatrix}0\\-1\\1\\-1\end{pmatrix},\quad\alpha_4=\begin{pmatrix}0\\1\\-1\\1\end{pmatrix},
  $$
  记 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$G=(\alpha_1,\alpha_2)$.

  （1）证明：$\alpha_1,\alpha_2$ 是 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的极大线性无关组；

  （2）求矩阵 $H$ 使得 $A=GH$，并求 $A^{10}$.

  > [!success]- 答案与解析
  > **答案**：
  > （1）证明见解析；（2）
  > $$
  > H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix},\quad A^{10}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}.
  > $$
  >
  > 【解析】（1）由
  > $$
  > (\alpha_1,\alpha_2,\alpha_3,\alpha_4)=\begin{pmatrix}1&1&0&0\\0&-1&-1&1\\-1&0&1&-1\\-1&-2&-1&1\end{pmatrix}\to\begin{pmatrix}1&0&-1&1\\0&1&1&-1\\0&0&0&0\\0&0&0&0\end{pmatrix},
  > $$
  > 故 $r(\alpha_1,\alpha_2)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=2$，故极大线性无关组中有 2 个向量，又由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 均可由 $\alpha_1,\alpha_2$ 线性表示，故 $\alpha_1,\alpha_2$ 为向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的一个极大线性无关组.
  >
  > （2）由（1）知 $\alpha_3=-\alpha_1+\alpha_2$，$\alpha_4=\alpha_1-\alpha_2$，故
  > $$
  > (\alpha_1,\alpha_2,\alpha_3,\alpha_4)=(\alpha_1,\alpha_2)\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix},
  > $$
  > 故
  > $$
  > H=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix},
  > $$
  > 由于 $A=GH$，故
  > $$
  > A^{10}=GH\cdot GH\cdot GH\cdots GH=G(HG)^9H,
  > $$
  > 由
  > $$
  > HG=\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}=\begin{pmatrix}1&-1\\0&1\end{pmatrix},
  > $$
  > 故
  > $$
  > (HG)^9=\begin{pmatrix}1&-9\\0&1\end{pmatrix},
  > $$
  > 则
  > $$
  > A^{10}=G(HG)^9H=\begin{pmatrix}1&1\\0&-1\\-1&0\\-1&-2\end{pmatrix}\begin{pmatrix}1&-9\\0&1\end{pmatrix}\begin{pmatrix}1&0&-1&1\\0&1&1&-1\end{pmatrix}=\begin{pmatrix}1&-8&-9&9\\0&-1&-1&1\\-1&9&10&-10\\-1&7&8&-8\end{pmatrix}.
  > $$

## <span class="hx hx-nav">🧭</span> 十、导航


- 本章：[[第五章 矩阵的特征值与特征向量|第五章 矩阵的特征值与特征向量]] ｜ 总览：[00 线性代数知识网总览](00%20线性代数知识网总览.md)
- 关系图：[[01 关系网索引（章节结构）.canvas]] ｜ 充分必要链：[02 充分必要条件链](02%20充分必要条件链.md)
- 速查表：[03 基础数一数二对照表](03%20基础数一数二对照表.md) ｜ 易错点：[04 易错点与陷阱清单](04%20易错点与陷阱清单.md)
