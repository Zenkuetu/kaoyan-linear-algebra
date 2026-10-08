// 2005 · 数学二 · 线性代数（题面取自《1987-2009考研数学二真题》第 44–46 页；答案与解析取自《2005—2013 考研数二真题答案解析》）
EXAMS.push({
  year: 2005, subject: '数二', number: 6, kind: '填空', score: 4,
  ids: ['det-product', 'mat-mult'],
  question: String.raw`设 $\alpha_1,\alpha_2,\alpha_3$ 均为 3 维列向量，记矩阵
$$
A=(\alpha_1,\alpha_2,\alpha_3),\qquad B=(\alpha_1+\alpha_2+\alpha_3,\ \alpha_1+2\alpha_2+4\alpha_3,\ \alpha_1+3\alpha_2+9\alpha_3).
$$
如果 $|A|=1$，那么 $|B|=$ ________.`,
  answer: '2',
  analysis: String.raw`方法1：因为 $(\alpha_1+\alpha_2+\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1\\1\\1\end{pmatrix}$，$(\alpha_1+2\alpha_2+4\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1\\2\\4\end{pmatrix}$，
$$
(\alpha_1+3\alpha_2+9\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1\\3\\9\end{pmatrix},
$$
故 $B=(\alpha_1+\alpha_2+\alpha_3,\alpha_1+2\alpha_2+4\alpha_3,\alpha_1+3\alpha_2+9\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&1&1\\1&2&3\\1&4&9\end{pmatrix}$，

记 $A=(\alpha_1,\alpha_2,\alpha_3)$，两边取行列式，于是有
$$
|B|=|A|\cdot\begin{vmatrix}1&1&1\\1&2&3\\1&4&9\end{vmatrix}=1\times2=2.
$$
方法2：利用行列式性质（在行列式中，把某行的各元素分别乘以非零常数加到另一行的对应元素上，行列式的值不变；从某一行或列中提取某一公因子行列式值不变）
$$
|B|=|\alpha_1+\alpha_2+\alpha_3,\alpha_1+2\alpha_2+4\alpha_3,\alpha_1+3\alpha_2+9\alpha_3|
$$
$$
\xrightarrow[3\text{列}-1\text{列}]{2\text{列}-1\text{列}}|\alpha_1+\alpha_2+\alpha_3,\alpha_2+3\alpha_3,2\alpha_2+8\alpha_3|\xrightarrow{3\text{列}-2\text{列}\times2}|\alpha_1+\alpha_2+\alpha_3,\alpha_2+3\alpha_3,2\alpha_3|
$$
$$
=2|\alpha_1+\alpha_2+\alpha_3,\alpha_2+3\alpha_3,\alpha_3|\xrightarrow[2\text{列}-3\text{列}\times3]{1\text{列}-3\text{列}}2|\alpha_1+\alpha_2,\alpha_2,\alpha_3|\xrightarrow{1\text{列}-2\text{列}}2|\alpha_1,\alpha_2,\alpha_3|
$$
又因为 $|A|=|\alpha_1,\alpha_2,\alpha_3|=1$，故 $|B|=2|A|=2$.`,
  source: '《2005—2013 考研数二真题答案解析》第 3 页',
});

EXAMS.push({
  year: 2005, subject: '数二', number: 13, kind: '选择', score: 4,
  ids: ['vec-indep-crit', 'eig-property'],
  question: String.raw`设 $\lambda_1,\lambda_2$ 是矩阵 $A$ 的两个不同的特征值，对应的特征向量分别为 $\alpha_1,\alpha_2$，则 $\alpha_1,A(\alpha_1+\alpha_2)$ 线性无关的充分必要条件是（　）

（A）$\lambda_1\ne0$.
（B）$\lambda_2\ne0$.
（C）$\lambda_1=0$.
（D）$\lambda_2=0$.`,
  answer: '（B）',
  analysis: String.raw`方法1：利用线性无关的定义

$\alpha_1,\alpha_2$ 分别是特征值 $\lambda_1,\lambda_2$ 对应的特征向量，根据特征值、特征向量的定义，有
$$
A\alpha_1=\lambda_1\alpha_1,\ A\alpha_2=\lambda_2\alpha_2\Rightarrow A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2.
$$
设有数 $k_1,k_2$，使得 $k_1\alpha_1+k_2A(\alpha_1+\alpha_2)=0$，则
$$
k_1\alpha_1+k_2\lambda_1\alpha_1+k_2\lambda_2\alpha_2=0\Rightarrow(k_1+k_2\lambda_1)\alpha_1+k_2\lambda_2\alpha_2=0.
$$
因 $\lambda_1\ne\lambda_2$，因不同特征值对应的特征向量必线性无关，故 $\alpha_1,\alpha_2$ 线性无关，则
$$
\begin{cases}k_1+k_2\lambda_1=0,\\k_2\lambda_2=0.\end{cases}
$$
当 $\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}=\lambda_2\ne0$ 时，方程只有零解，则 $k_1=0,k_2=0$，此时 $\alpha_1$，$A(\alpha_1+\alpha_2)$ 线性无关；反过来，若 $\alpha_1$，$A(\alpha_1+\alpha_2)$ 线性无关，则必然有 $\lambda_2\ne0$（否则，$\alpha_1$ 与 $A(\alpha_1+\alpha_2)=\lambda_1\alpha_1$ 线性相关），故应选（B）.

方法2：将向量组的表出关系表示成矩阵形式

$\alpha_1,\alpha_2$ 分别是特征值 $\lambda_1,\lambda_2$ 对应的特征向量，根据特征值、特征向量的定义，有
$$
A\alpha_1=\lambda_1\alpha_1,\ A\alpha_2=\lambda_2\alpha_2\Rightarrow A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2.
$$
由于 $(\alpha_1,A(\alpha_1+\alpha_2))=(\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2)=(\alpha_1,\alpha_2)\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}$，

因 $\lambda_1\ne\lambda_2$，因不同特征值对应的特征向量必线性无关，知 $\alpha_1,\alpha_2$ 线性无关. 若 $\alpha_1$，$A(\alpha_1+\alpha_2)$ 线性无关，则 $r(\alpha_1,A(\alpha_1+\alpha_2))=2$，则
$$
2=r\left((\alpha_1,\alpha_2)\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\right)\le\min\left\{r(\alpha_1,\alpha_2),r\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\right\}\le r\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\le2,
$$
故 $2\le r\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\le2$，从而 $r\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}=2$，从而 $\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}=\lambda_2\ne0$

若 $\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}=\lambda_2\ne0$，则 $r\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}=2$，又 $\alpha_1,\alpha_2$ 线性无关，则
$$
r\left((\alpha_1,\alpha_2)\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\right)=r\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}=2,
$$
则 $r(\alpha_1,A(\alpha_1+\alpha_2))=2$，从而 $\alpha_1$，$A(\alpha_1+\alpha_2)$ 线性无关的充要条件是 $\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}=\lambda_2\ne0$. 故应选（B）.

方法3：利用矩阵的秩

$\alpha_1,\alpha_2$ 分别是特征值 $\lambda_1,\lambda_2$ 对应的特征向量，根据特征值、特征向量的定义，有
$$
A\alpha_1=\lambda_1\alpha_1,\ A\alpha_2=\lambda_2\alpha_2\Rightarrow A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2.
$$
因 $\lambda_1\ne\lambda_2$，因不同特征值对应的特征向量必线性无关，故 $\alpha_1,\alpha_2$ 线性无关，又 $A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2$，故 $\alpha_1$，$A(\alpha_1+\alpha_2)$ 线性无关 $\Leftrightarrow r(\alpha_1,A(\alpha_1+\alpha_2))=2$

又因为 $(\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2)\xrightarrow{\text{将}\alpha_1\text{的}-\lambda_1\text{倍加到第2列}}(\alpha_1,\lambda_2\alpha_2)$

则 $r(\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2)=r(\alpha_1,\lambda_2\alpha_2)=2\Leftrightarrow\lambda_2\ne0$（若 $\lambda_2=0$，与 $r(\alpha_1,\lambda_2\alpha_2)=2$ 矛盾）.

方法4：利用线性齐次方程组

$\alpha_1,\alpha_2$ 分别是特征值 $\lambda_1,\lambda_2$ 对应的特征向量，根据特征值、特征向量的定义，有
$$
A\alpha_1=\lambda_1\alpha_1,\ A\alpha_2=\lambda_2\alpha_2\Rightarrow A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2.
$$
由 $\lambda_1\ne\lambda_2$，因不同特征值对应的特征向量必线性无关，故 $\alpha_1,\alpha_2$ 线性无关，
$$
\alpha_1,A(\alpha_1+\alpha_2)\text{线性无关}
$$
$$
\Leftrightarrow\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2\text{线性无关}
$$
$$
\Leftrightarrow|\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2|\ne0,
$$
$$
\Leftrightarrow(\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2)X=0\text{只有零解，又}(\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2)=(\alpha_1,\alpha_2)\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}
$$
$$
\Leftrightarrow(\alpha_1,\alpha_2)\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=0\text{只有零解}
$$
$$
\Leftrightarrow\alpha_1,\alpha_2\text{线性无关时}(\alpha_1,\alpha_2)Y=0\text{只有零解，故}Y=\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=0\text{只有零解，}
$$
$$
\Leftrightarrow Y=\begin{pmatrix}1&\lambda_1\\0&\lambda_2\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=0\text{的系数矩阵是个可逆矩阵，}
$$
$\Leftrightarrow\begin{vmatrix}1&\lambda_1\\0&\lambda_2\end{vmatrix}=\lambda_2\ne0$，故应选（B）.

方法5：由 $\lambda_1\ne\lambda_2$，$\alpha_1,\alpha_2$ 线性无关

$\alpha_1,\alpha_2$ 分别是特征值 $\lambda_1,\lambda_2$ 对应的特征向量，根据特征值、特征向量的定义，有
$$
A\alpha_1=\lambda_1\alpha_1,\ A\alpha_2=\lambda_2\alpha_2\Rightarrow A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2.
$$
向量组(I)：$\alpha_1,\alpha_2$ 和向量组(II)：$\alpha_1,A(\alpha_1+\alpha_2)=\lambda_1\alpha_1+\lambda_2\alpha_2$. 显然向量组(II)可以由向量组(I)线性表出；当 $\lambda_2\ne0$ 时，不论 $\lambda_1$ 的取值如何，向量组(I)可以由向量组(II)线性表出
$$
\alpha_1=\alpha_1,\ \alpha_2=(-\frac{\lambda_1}{\lambda_2}\alpha_1)+\frac{1}{\lambda_2}(\lambda_1\alpha_1+\lambda_2\alpha_2)=-\frac{\lambda_1}{\lambda_2}\cdot\alpha_1+\frac{1}{\lambda_2}A(\alpha_1+\alpha_2),
$$
从而(I)，(II)是等价向量组 $\Rightarrow$ 当 $\lambda_2\ne0$ 时，$r(\alpha_1,\alpha_2)=r(\alpha_1,\lambda_1\alpha_1+\lambda_2\alpha_2)=2$.`,
  source: '《2005—2013 考研数二真题答案解析》第 5–8 页',
});

EXAMS.push({
  year: 2005, subject: '数二', number: 14, kind: '选择', score: 4,
  ids: ['mat-elem-mat', 'mat-adj-identity'],
  question: String.raw`设 $A$ 为 $n\ (n\ge2)$ 阶可逆矩阵，交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，$A^*,B^*$ 分别为 $A,B$ 的伴随矩阵，则（　）

（A）交换 $A^*$ 的第 1 列与第 2 列得 $B^*$.
（B）交换 $A^*$ 的第 1 行与第 2 行得 $B^*$.
（C）交换 $A^*$ 的第 1 列与第 2 列得 $-B^*$.
（D）交换 $A^*$ 的第 1 行与第 2 行得 $-B^*$.`,
  answer: '（C）',
  analysis: String.raw`方法1：由题设，存在初等矩阵 $E_{12}$（交换 $n$ 阶单位矩阵的第 1 行与第 2 行所得），使得
$$
E_{12}A=B,\quad(A\text{进行行变换，故}A\text{左乘初等矩阵}),
$$
于是 $B^*=(E_{12}A)^*=A^*E_{12}^*$，

又初等矩阵都是可逆的，故 $E_{12}^{-1}=\frac{E_{12}^*}{|E_{12}|}$，

又 $|E_{12}|=-|E|=-1$（行列式的两行互换，行列式反号），$E_{12}^{-1}=E_{12}$，故
$$
B^*=A^*E_{12}^*=A^*|E_{12}|\cdot E_{12}^{-1}=-A^*E_{12}^{-1}=-A^*E_{12},
$$
即 $A^*E_{12}=-B^*$，可见应选（C）.

方法2：交换 $A$ 的第一行与第二行得 $B$，即 $B=E_{12}A$.

又因为 $A$ 是可逆阵，$|E_{12}|=-|E|=-1$，故 $|B|=|E_{12}A|=|E_{12}||A|=-|A|\ne0$，

所以 $B$ 可逆，且 $B^{-1}=(E_{12}A)^{-1}=A^{-1}E_{12}$.

又 $A^{-1}=\frac{A^*}{|A|}$，$B^{-1}=\frac{B^*}{|B|}$，故 $\frac{B^*}{|B|}=\frac{A^*}{|A|}E_{12}$，又因 $|B|=-|A|$，故 $A^*E_{12}=-B^*$.`,
  source: '《2005—2013 考研数二真题答案解析》第 8–9 页',
});

EXAMS.push({
  year: 2005, subject: '数二', number: 22, kind: '解答', score: 9,
  ids: ['vec-express-crit', 'vec-equivalent'],
  question: String.raw`确定常数 $a$，使向量组 $\alpha_1=(1,1,a)^{\mathrm{T}}$，$\alpha_2=(1,a,1)^{\mathrm{T}}$，$\alpha_3=(a,1,1)^{\mathrm{T}}$ 可由向量组 $\beta_1=(1,1,a)^{\mathrm{T}}$，$\beta_2=(-2,a,4)^{\mathrm{T}}$，$\beta_3=(-2,a,a)^{\mathrm{T}}$ 线性表示，但向量组 $\beta_1,\beta_2,\beta_3$ 不能由向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性表示.`,
  answer: '$a=1$.',
  analysis: String.raw`方法1：记 $A=(\alpha_1,\alpha_2,\alpha_3)$，$B=(\beta_1,\beta_2,\beta_3)$. 由于 $\beta_1,\beta_2,\beta_3$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，故 $r(A)<3$（若 $r(A)=3$，则任何三维向量都可以由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出），从而
$$
|A|=\begin{vmatrix}1&1&a\\1&a&1\\a&1&1\end{vmatrix}\xrightarrow[\text{把第 }2,3\text{ 行加到第 }1\text{ 行}]{}\begin{vmatrix}2+a&2+a&2+a\\1&a&1\\a&1&1\end{vmatrix}\xrightarrow[\text{提取第 }1\text{ 行的公因子}(2+a)]{}(2+a)\begin{vmatrix}1&1&1\\1&a&1\\a&1&1\end{vmatrix}
$$
$$
\xrightarrow[3\text{行}-1\text{行}]{2\text{行}-1\text{行},}(2+a)\begin{vmatrix}1&1&1\\0&a-1&0\\a-1&0&0\end{vmatrix}\xrightarrow{\text{按第 }3\text{ 列展开}}(2+a)\cdot(-1)^{1+3}\times1\times\begin{vmatrix}0&a-1\\a-1&0\end{vmatrix}=-(2+a)(a-1)^2=0
$$
（其中 $(-1)^{1+3}$ 指数中的 $1$ 和 $3$ 分别是 $1$ 所在的行数和列数）从而得 $a=1$ 或 $a=-2$.

当 $a=1$ 时，$\alpha_1=\alpha_2=\alpha_3=\beta_1=[1,1,1]^{\mathrm{T}}$，则 $\alpha_1=\alpha_2=\alpha_3=\beta_1+0\cdot\beta_2+0\cdot\beta_3$，故 $\alpha_1,\alpha_2,\alpha_3$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表出，但 $\beta_2=[-2,1,4]^{\mathrm{T}}$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出（因为方程组
$$
\beta_2=\begin{pmatrix}-2\\1\\4\end{pmatrix}=k_1\begin{pmatrix}1\\1\\1\end{pmatrix}+k_2\begin{pmatrix}1\\1\\1\end{pmatrix}+k_3\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad\text{即}\qquad\begin{cases}k_1+k_2+k_3=-2,\\k_1+k_2+k_3=1,\\k_1+k_2+k_3=4\end{cases}
$$
无解），故 $a=1$ 符合题意.

当 $a=-2$ 时，由于
$$
[B:A]=\begin{pmatrix}1&-2&-2&:&1&1&-2\\1&-2&-2&:&1&-2&1\\-2&4&-2&:&-2&1&1\end{pmatrix}\xrightarrow[2\text{行}-1\text{行}]{3\text{行}+1\text{行}\times2}\begin{pmatrix}1&-2&-2&:&1&1&-2\\0&0&0&:&0&-3&-3\\0&0&-6&:&0&0&0\end{pmatrix}
$$
因 $r(B)=2\ne r(B:\alpha_2)=3$，系数矩阵的秩和增广矩阵的秩不相等，故方程组 $BX=\alpha_2$ 无解，故 $\alpha_2$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表出，这和题设矛盾，故 $a=-2$ 不合题意.

因此 $a=1$.
方法2：对矩阵 $\overline{A}=(\beta_1,\beta_2,\beta_3:\alpha_1,\alpha_2,\alpha_3)$ 作初等行变换，有
$$
\overline{A}=(\beta_1,\beta_2,\beta_3:\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&-2&-2&:&1&1&a\\1&a&a&:&1&a&1\\a&4&a&:&a&1&1\end{pmatrix}
$$
$$
\xrightarrow[3\text{行}-1\text{行}\times a]{2\text{行}-1\text{行},}\begin{pmatrix}1&-2&-2&:&1&1&a\\0&a+2&a+2&:&0&a-1&0\\0&4+2a&3a&:&0&1-a&1-a\end{pmatrix}
$$
$$
\xrightarrow{3\text{行}-2\text{行}\times2}\begin{pmatrix}1&-2&-2&:&1&1&a\\0&a+2&a+2&:&0&a-1&0\\0&0&a-4&:&0&3(1-a)&1-a\end{pmatrix},
$$
当 $a=-2$ 时，$\overline{A}\to\begin{pmatrix}1&-2&-2&:&1&1&-2\\0&0&0&:&0&-3&0\\0&0&-6&:&0&3&3\end{pmatrix}$，不存在非零常数 $k_1,k_2,k_3$，使得 $\begin{pmatrix}1\\-3\\3\end{pmatrix}=k_1\begin{pmatrix}1\\0\\0\end{pmatrix}+k_2\begin{pmatrix}-2\\0\\0\end{pmatrix}+k_3\begin{pmatrix}-2\\0\\-6\end{pmatrix}$，$\alpha_2$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表示，因此 $a\ne-2$；

当 $a=4$ 时，
$$
\overline{A}\to\begin{pmatrix}1&-2&-2&:&1&1&4\\0&6&6&:&0&3&0\\0&0&0&:&0&-9&-3\end{pmatrix},
$$
$\alpha_3$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表示，不存在非零常数 $k_1,k_2,k_3$，使得 $\begin{pmatrix}4\\0\\-3\end{pmatrix}=k_1\begin{pmatrix}1\\0\\0\end{pmatrix}+k_2\begin{pmatrix}-2\\6\\0\end{pmatrix}+k_3\begin{pmatrix}-2\\6\\0\end{pmatrix}$. 因此 $a\ne4$.

而当 $a\ne-2$ 且 $a\ne4$ 时，秩 $r(\beta_1,\beta_2,\beta_3)=3$，此时向量组 $\alpha_1,\alpha_2,\alpha_3$ 可由向量组 $\beta_1,\beta_2,\beta_3$ 线性表示. 又
$$
\overline{B}=(\alpha_1,\alpha_2,\alpha_3:\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&1&a&:&1&-2&-2\\1&a&1&:&1&a&a\\a&1&1&:&a&4&a\end{pmatrix}
$$
$$
\xrightarrow[3\text{行}-1\text{行}\times a]{2\text{行}-1\text{行},}\begin{pmatrix}1&1&a&:&1&-2&-2\\0&a-1&1-a&:&0&a+2&a+2\\0&1-a&1-a^2&:&0&4+2a&3a\end{pmatrix}
$$
$$
\xrightarrow{3\text{行}+2\text{行}}\begin{pmatrix}1&1&a&:&1&-2&-2\\0&a-1&1-a&:&0&a+2&a+2\\0&0&2-a-a^2&:&0&6+3a&4a+2\end{pmatrix},
$$
由题设向量组 $\beta_1,\beta_2,\beta_3$ 不能由向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，则方程组 $(\alpha_1\ \alpha_2\ \alpha_3)x=\beta_1$ 或 $(\alpha_1\ \alpha_2\ \alpha_3)x=\beta_2$ 或 $(\alpha_1\ \alpha_2\ \alpha_3)x=\beta_3$ 无解，故系数矩阵的秩 $\ne$ 增广矩阵的秩，故 $r(\overline{B})\ne r(\alpha_1\ \alpha_2\ \alpha_3)$.

又当 $a\ne-2$ 且 $a\ne4$ 时，$r(\overline{B})=3$，则必有 $a-1=0$ 或 $2-a-a^2=0$，即 $a=1$ 或 $a=-2$.

综上所述，满足题设条件的 $a$ 只能是：$a=1$.

方法3：记 $A=(\alpha_1,\alpha_2,\alpha_3),B=(\beta_1,\beta_2,\beta_3)$，对矩阵 $(A:B)$ 作初等行变换，得
$$
(A:B)=(\alpha_1,\alpha_2,\alpha_3:\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&1&a&:&1&-2&-2\\1&a&1&:&1&a&a\\a&1&1&:&a&4&a\end{pmatrix}
$$
$$
\xrightarrow[3\text{行}-1\text{行}\times a]{2\text{行}-1\text{行},}\begin{pmatrix}1&1&a&:&1&-2&-2\\0&a-1&1-a&:&0&a+2&a+2\\0&1-a&1-a^2&:&0&4+2a&3a\end{pmatrix}
$$
$$
\xrightarrow{3\text{行}+2\text{行}}\begin{pmatrix}1&1&a&:&1&-2&-2\\0&a-1&1-a&:&0&a+2&a+2\\0&0&2-a-a^2&:&0&6+3a&4a+2\end{pmatrix},
$$
由于 $\beta_1,\beta_2,\beta_3$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，故 $r(A)<3$，（若 $r(A)=3$，则任何三维向量都可以由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出），从而
$$
|A|=\begin{vmatrix}1&1&a\\1&a&1\\a&1&1\end{vmatrix}\xrightarrow[\text{加到第1行}]{\text{把第}2,3\text{行}}\begin{vmatrix}2+a&2+a&2+a\\1&a&1\\a&1&1\end{vmatrix}\xrightarrow[\text{公因子}(2+a)]{\text{提取第1行的}}(2+a)\begin{vmatrix}1&1&1\\1&a&1\\a&1&1\end{vmatrix}
$$
$$
\xrightarrow[3\text{行}-1\text{行}]{2\text{行}-1\text{行}}(2+a)\begin{vmatrix}1&1&1\\0&a-1&0\\a-1&0&0\end{vmatrix}\xrightarrow{\text{按第3列展开}}(2+a)\cdot(-1)^{1+3}\times1\times\begin{vmatrix}0&a-1\\a-1&0\end{vmatrix}
$$
$$
=-(2+a)(a-1)^2=0
$$
从而得 $a=1$ 或 $a=-2$.

当 $a=1$ 时，
$$
(A:B)=\begin{pmatrix}1&1&1&:&1&-2&2\\0&0&0&:&0&3&3\\0&0&0&:&0&9&6\end{pmatrix},
$$
则 $\alpha_1=\alpha_2=\alpha_3=\beta_1+0\cdot\beta_2+0\cdot\beta_3$，$\alpha_1,\alpha_2,\alpha_3$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表出，但由于 $r(A)=1\ne r(A:\beta_2)=2$，系数矩阵的秩和增广矩阵的秩不相等，方程组 $Ax=\beta_2$ 无解，$\beta_2=[-2,1,4]^{\mathrm{T}}$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出. 或由于 $r(A)=1\ne r(A:\beta_3)=2$，系数矩阵的秩和增广矩阵的秩不相等，方程组 $Ax=\beta_3$ 无解，$\beta_3$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，即 $\beta_1,\beta_2,\beta_3$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，故 $a=1$ 符合题意.

当 $a=-2$ 时，
$$
(A:B)=\begin{pmatrix}1&1&-2&:&1&-2&2\\0&-3&3&:&0&0&0\\0&0&0&:&0&0&-6\end{pmatrix},
$$
因 $r(A)=2\ne r(A:\beta_3)=3$，系数矩阵的秩和增广矩阵的秩不相等，$\beta_1,\beta_2,\beta_3$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，但 $r(B)=2\ne r(B:\alpha_2)=3$（或 $r(B:\alpha_3)=3$），系数矩阵的秩和增广矩阵的秩不相等，即 $BX=\alpha_2$（或 $BX=\alpha_3$）无解，即 $\alpha_1,\alpha_2,\alpha_3$ 不能由 $\beta_1,\beta_2,\beta_3$ 线性表出，与题设矛盾，故 $a=-2$ 不合题意.

故 $a=1$.`,
  source: '《2005—2013 考研数二真题答案解析》第 15–17 页',
});

EXAMS.push({
  year: 2005, subject: '数二', number: 23, kind: '解答', score: 9,
  ids: ['eq-AX-O-AB-O', 'eq-homo-general'],
  question: String.raw`已知 3 阶矩阵 $A$ 的第一行是 $(a,b,c)$，$a,b,c$ 不全为零，矩阵 $B=\begin{pmatrix}1&2&3\\2&4&6\\3&6&k\end{pmatrix}$（$k$ 为常数），且 $AB=O$，求线性方程组 $Ax=0$ 的通解.`,
  answer: String.raw`见解析（与 $k$ 有关）：当 $k\ne9$ 时，通解为 $x=k_1(1,2,3)^{\mathrm{T}}+k_2(3,6,k)^{\mathrm{T}}$；当 $k=9$ 且 $r(A)=2$ 时，通解为 $x=k_1(1,2,3)^{\mathrm{T}}$；当 $k=9$ 且 $r(A)=1$ 时，通解为 $x=k_1(-\frac{b}{a},1,0)^{\mathrm{T}}+k_2(-\frac{c}{a},0,1)^{\mathrm{T}}$（$a\ne0$）.`,
  analysis: String.raw`由 $AB=0$ 知，$B$ 的每一列均为 $Ax=0$ 的解，且 $r(A)+r(B)\le3$（$3$ 是 $A$ 的列数或 $B$ 的行数）

（1）若 $k\ne9$，$\beta_1,\beta_3$ 不成比例，$\beta_1,\beta_2$ 成比例，则 $r(B)=2$、方程组 $Ax=0$ 的解向量中至少有两个线性无关的解向量，故它的基础解系中解向量的个数 $\ge2$，又基础解系中解向量的个数$=$未知数的个数$-r(A)=3-r(A)$，于是 $r(A)\le1$.

又矩阵 $A$ 的第一行元素 $(a,b,c)$ 不全为零，显然 $r(A)\ge1$，故 $r(A)=1$. 可见此时 $Ax=0$ 的基础解系由 $3-r(A)=2$ 个线性无关解向量组成，$\beta_1,\beta_3$ 是方程组的解且线性无关，可作为其基础解系，故 $Ax=0$ 的通解为：
$$
x=k_1\begin{pmatrix}1\\2\\3\end{pmatrix}+k_2\begin{pmatrix}3\\6\\k\end{pmatrix},k_1,k_2\text{为任意常数}.
$$
（2）若 $k=9$，则 $\beta_1,\beta_2,\beta_3$ 均成比例，故 $r(B)=1$，从而 $1\le r(A)\le2$. 故 $r(A)=1$ 或 $r(A)=2$.

① 若 $r(A)=2$，则方程组的基础解系由一个线性无关的解组成，$\beta_1$ 是方程组 $Ax=0$ 的基础解系，则 $Ax=0$ 的通解为：$x=k_1\begin{pmatrix}1\\2\\3\end{pmatrix}$，$k_1$ 为任意常数.

② 若 $r(A)=1$，则 $A$ 的三个行向量成比例，因第 1 行元素 $(a,b,c)$ 不全为零，不妨设 $a\ne0$，则 $Ax=0$ 的同解方程组为：$ax_1+bx_2+cx_3=0$，系数矩阵的秩为 1，故基础解系由 $3-1=2$ 个线性无关解向量组成，选 $x_2,x_3$ 为自由未知量，分别取 $x_2=1,x_3=0$ 或 $x_2=0,x_3=1$，方程组的基础解系为 $\xi_1=\begin{pmatrix}-\frac{b}{a}\\1\\0\end{pmatrix},\xi_2=\begin{pmatrix}-\frac{c}{a}\\0\\1\end{pmatrix}$，则其通解为 $x=k_1\begin{pmatrix}-\frac{b}{a}\\1\\0\end{pmatrix}+k_2\begin{pmatrix}-\frac{c}{a}\\0\\1\end{pmatrix}$，$k_1,k_2$ 为任意常数.`,
  source: '《2005—2013 考研数二真题答案解析》第 17–18 页',
});
