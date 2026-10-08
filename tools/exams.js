// 考研数学真题（线性代数部分）—— 数据层
// 每题只挂"最相关"的 1~n 个知识点：ids 可写多个，允许一道题同时进多篇笔记。
// 字段：year 年份 | subject '数一'|'数二'|'数三' | number 题号 | kind '选择'|'填空'|'解答' | score 分值
//       ids 知识点 ID 数组 | question 题面 | answer 答案 | analysis 解析
// 题面与解析用 String.raw 包裹（文件里的反斜杠原样保留，交给 Obsidian 的 MathJax 渲染）。
// 排版约定：显示公式一律 `$$` 独占一行；矩阵换行用 \\；行内公式用 $...$。
const EXAMS = [];

// ---------- 2024 · 数学一 ----------
EXAMS.push({
  year: 2024, subject: '数一', number: 5, kind: '选择', score: 5,
  ids: ['eq-rank-relation', 'eq-geometry'],
  question: String.raw`设空间直角坐标系 $O\text{-}xyz$ 中，三张平面 $\pi_i:\ a_ix+b_iy+c_iz=d_i\ (i=1,2,3)$ 的位置关系如图所示（三张平面交于同一条直线）。记 $\alpha_i=(a_i,b_i,c_i)$，$\beta_i=(a_i,b_i,c_i,d_i)$。若 $r(\alpha_1,\alpha_2,\alpha_3)=m$，$r(\beta_1,\beta_2,\beta_3)=n$，则

（A）$m=1,n=2$　（B）$m=n=2$　（C）$m=2,n=3$　（D）$m=n=3$`,
  answer: '（B）',
  analysis: String.raw`图形给的是**三张平面交于同一条直线**：既有公共点（不是空集），又不重合、也不交于一点。

- $\alpha$ 组是方程组**系数**矩阵的三行（三个法向量）：交于一条直线 ⇒ 三个法向量共面但不平行 ⇒ $r(\alpha_1,\alpha_2,\alpha_3)=2$，即 $m=2$；
- $\beta$ 组是**增广**矩阵的三行：解集是一条直线（无穷多解、1 个自由未知量）⇒ $r(\beta)=3-1=2$，即 $n=2$。

所以 $m=n=2$，选（B）。

> **判定口径**：设 $n$ 个未知数，$r(A)=r(A,b)=n$ 唯一解；$r(A)=r(A,b)<n$ 无穷多解；$r(A)<r(A,b)$ 无解。解集是直线 ⇔ 无穷多解且恰有 1 个自由未知量。`,
});

EXAMS.push({
  year: 2024, subject: '数一', number: 6, kind: '选择', score: 5,
  ids: ['vec-indep-def', 'vec-indep-crit'],
  question: String.raw`设向量
$$
\alpha_1=\begin{pmatrix}a\\1\\-1\\1\end{pmatrix},\quad \alpha_2=\begin{pmatrix}1\\1\\b\\a\end{pmatrix},\quad \alpha_3=\begin{pmatrix}1\\a\\-1\\1\end{pmatrix},
$$
若 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，且其中任意两个向量均线性无关，则

（A）$a=1,\ b\ne -1$　（B）$a=1,\ b=-1$　（C）$a\ne -2,\ b=2$　（D）$a=-2,\ b=2$`,
  answer: '（D）',
  analysis: String.raw`三个 4 维向量"线性相关、但任意两个线性无关"，等价于它们的**秩恰好是 2**：所有 3 阶子式全为零，且存在某个 2 阶子式非零。

取前 3 行构成的 3 阶子式
$$
D_1=\begin{vmatrix}a&1&1\\1&1&a\\-1&b&-1\end{vmatrix}=-(a^2b+2a-b-2),
$$
取第 1、2、4 行构成的 3 阶子式
$$
D_2=\begin{vmatrix}a&1&1\\1&1&a\\1&a&1\end{vmatrix}=-(a-1)^2(a+2).
$$
由 $D_2=0$ 得 $a=1$ 或 $a=-2$。

- 若 $a=1$：$\alpha_1=(1,1,-1,1)^{\mathrm{T}}$，而 $\alpha_3=(1,1,-1,1)^{\mathrm{T}}$，两者相等 ⇒ 这一对线性相关，与"任意两个均线性无关"矛盾；
- 若 $a=-2$：代入 $D_1=0$ 得 $-3b+6=0$，即 $b=2$。

故 $a=-2,\ b=2$，选（D）。

> **易错**：只由 $D_2=0$ 就选 $a=1$ 或 $a=-2$，会漏掉"任意两个线性无关"这条附加信息 —— 它对 $a=1$ 是致命的。`,
});

EXAMS.push({
  year: 2024, subject: '数一', number: 7, kind: '选择', score: 5,
  ids: ['eig-ops', 'eig-def'],
  question: String.raw`设 $A$ 是秩为 $2$ 的 3 阶矩阵，$\alpha$ 是满足 $A\alpha=0$ 的非零向量。若对满足 $\beta^{\mathrm{T}}\alpha=0$ 的任意向量 $\beta$，均有 $A\beta=\beta$，则

（A）$A^3$ 的迹为 $2$　（B）$A^3$ 的迹为 $5$　（C）$A^5$ 的迹为 $7$　（D）$A^5$ 的迹为 $9$`,
  answer: '（A）',
  analysis: String.raw`先读出 $A$ 的全部特征值：

- $A\alpha=0=0\cdot\alpha$ 且 $\alpha\ne 0$ ⇒ $\lambda_1=0$ 是特征值，$\alpha$ 是它的特征向量；
- $\beta^{\mathrm{T}}\alpha=0$ 的解空间是 $\alpha^{\perp}$，维数 $3-1=2$；题设说 $A$ 在其上**恒等**：$A\beta=\beta$ ⇒ 这个二维子空间里每个非零向量都是特征值 $1$ 的特征向量，它有两个线性无关向量，故 $\lambda_2=\lambda_3=1$。

于是 $A$ 相似于 $\mathrm{diag}(0,1,1)$。相似矩阵的幂也相似，而迹是相似不变量，所以对一切 $k\ge 1$ 有 $\mathrm{tr}(A^k)=0^k+1^k+1^k=2$。

因此 $A^3$ 与 $A^5$ 的迹都等于 $2$，选（A）。

> **要点**：幂的迹 = 特征值的 $k$ 次幂之和；本题不需要把 $A$ 真的写出来。`,
});

EXAMS.push({
  year: 2024, subject: '数一', number: 15, kind: '填空', score: 5,
  ids: ['qf-semi-def', 'qf-positive-def'],
  question: String.raw`设实矩阵
$$
A=\begin{pmatrix}a+1&a\\a&a\end{pmatrix},
$$
若对任意实向量 $\alpha=\begin{pmatrix}x_1\\x_2\end{pmatrix}$，$\beta=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，都有
$$
(\alpha^{\mathrm{T}}A\beta)^2\le \alpha^{\mathrm{T}}A\alpha\cdot\beta^{\mathrm{T}}A\beta,
$$
则 $a$ 的取值范围是 $\underline{\qquad}$。`,
  answer: '$a\\ge 0$',
  analysis: String.raw`把 $\alpha^{\mathrm{T}}A\beta$ 看成由 $A$ 给出的双线性型。对**对称**矩阵 $A$，不等式
$$
(\alpha^{\mathrm{T}}A\beta)^2\le(\alpha^{\mathrm{T}}A\alpha)(\beta^{\mathrm{T}}A\beta)\qquad(\forall\alpha,\beta)
$$
恰好就是"$A$ 半正定"：半正定时它是对 $A$ 的二次型写出的柯西–施瓦茨不等式；反过来若 $A$ 有负特征值，取 $x$ 为该特征值的特征向量即可让不等式失效。

$A=\begin{pmatrix}a+1&a\\a&a\end{pmatrix}$ 对称，半正定 ⇔ 各阶顺序主子式 $\ge 0$：
$$
\Delta_1=a+1\ge 0,\qquad \Delta_2=\begin{vmatrix}a+1&a\\a&a\end{vmatrix}=a(a+1)-a^2=a\ge 0.
$$
两式合并得 $a\ge 0$。

> **易错**：只写 $\Delta_1=a+1\ge 0$ 会误得 $a\ge -1$；漏掉 $\Delta_2=a\ge 0$ 就不对了。`,
});

EXAMS.push({
  year: 2024, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['eig-diag-method', 'eig-power-app'],
  question: String.raw`（本题满分 12 分）已知数列 $\{x_n\},\{y_n\},\{z_n\}$ 满足 $x_0=-1$，$y_0=0$，$z_0=2$，且
$$
\begin{cases}
x_n=-2x_{n-1}+2z_{n-1},\\
y_n=-2y_{n-1}-2z_{n-1},\\
z_n=-6x_{n-1}-3y_{n-1}+3z_{n-1},
\end{cases}
$$
记 $\alpha_n=\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$，写出满足 $\alpha_n=A\alpha_{n-1}$ 的矩阵 $A$，并求 $A^n$ 及 $x_n,y_n,z_n\ (n=1,2,\cdots)$。`,
  answer: String.raw`$A=\begin{pmatrix}-2&0&2\\0&-2&-2\\-6&-3&3\end{pmatrix}$，$A^n=\begin{pmatrix}-4-(-2)^n&-2-(-2)^n&2\\4+2(-2)^n&2+2(-2)^n&-2\\-6&-3&3\end{pmatrix}$，$x_n=8+(-2)^n,\ y_n=-8-2(-2)^n,\ z_n=12\ (n\ge 1)$。`,
  analysis: String.raw`**第一步：写 $A$。** 把三元递推式的系数直接读成矩阵：
$$
A=\begin{pmatrix}-2&0&2\\0&-2&-2\\-6&-3&3\end{pmatrix}.
$$

**第二步：特征值与特征向量。**
$$
|\lambda E-A|=\begin{vmatrix}\lambda+2&0&-2\\0&\lambda+2&2\\6&3&\lambda-3\end{vmatrix}=(\lambda+2)\big[(\lambda+2)(\lambda-3)-6\big]+12(\lambda+2)=\lambda(\lambda+2)(\lambda-1),
$$
三个特征值 $0,-2,1$ **互异** ⇒ $A$ 可对角化。逐个求特征向量：

- $\lambda=0$：解 $Ax=0$ 得 $x=z,\ y=-z$，取 $v_1=(1,-1,1)^{\mathrm{T}}$；
- $\lambda=-2$：解 $(\lambda E-A)x=0$ 得 $z=0,\ y=-2x$，取 $v_2=(1,-2,0)^{\mathrm{T}}$；
- $\lambda=1$：解 $(E-A)x=0$ 得 $3x=2z,\ 3y=-2z$，取 $z=3$ 得 $v_3=(2,-2,3)^{\mathrm{T}}$。

**第三步：构造 $P$ 与 $P^{-1}$。** 取
$$
P=\begin{pmatrix}1&1&2\\-1&-2&-2\\1&0&3\end{pmatrix},\qquad P^{-1}=\begin{pmatrix}6&3&-2\\-1&-1&0\\-2&-1&1\end{pmatrix},
$$
则 $P^{-1}AP=\mathrm{diag}(0,-2,1)=:\Lambda$，即 $A=P\Lambda P^{-1}$。

**第四步：求 $A^n$。** 由 $A^n=P\Lambda^nP^{-1}$，且对角阵第一列乘 $0^n=0$ 后消失，只用第二、三列：
$$
A^n=(-2)^n\begin{pmatrix}1\\-2\\0\end{pmatrix}\begin{pmatrix}-1&-1&0\end{pmatrix}+\begin{pmatrix}2\\-2\\3\end{pmatrix}\begin{pmatrix}-2&-1&1\end{pmatrix}
=\begin{pmatrix}-4-(-2)^n&-2-(-2)^n&2\\4+2(-2)^n&2+2(-2)^n&-2\\-6&-3&3\end{pmatrix}.
$$

**第五步：求三个数列。** $\alpha_n=A^n\alpha_0$，$\alpha_0=(-1,0,2)^{\mathrm{T}}$，于是
$$
x_n=(-1)\big(-4-(-2)^n\big)+2\cdot 2=8+(-2)^n,\quad
y_n=(-1)\big(4+2(-2)^n\big)+(-2)\cdot 2=-8-2(-2)^n,\quad
z_n=(-1)(-6)+3\cdot 2=12.
$$

**验算（$n=1$）**：$x_1=6,\ y_1=-4,\ z_1=12$；直接代递推式也得 $6,-4,-12$ 中的前两个吻合、$z_1=12$ ✓（三式一致）。

> **要点**：三元递推的标准套路是 $\alpha_n=A\alpha_{n-1}\Rightarrow\alpha_n=A^n\alpha_0$，再用**相似对角化**求 $A^n$；三个特征值互异，省掉了正交化的麻烦。`,
});
