# 真题数据（tools/exams/）

按知识点归档的考研数学**线性代数**真题。数据层由 [tools/exams.js](../exams.js) 声明容器、本目录下 `<年份>-m<科目>.js` 逐个 `EXAMS.push({...})` 填充；[tools/build.js](../build.js) 按文件名排序拼接执行，渲染进每篇知识点笔记的「📝 九、真题」小节。

## 文件命名

```
tools/exams/2024-m1.js    # 2024 年 · 数学一
tools/exams/2024-m2.js    # 2024 年 · 数学二
tools/exams/2024-m3.js    # 2024 年 · 数学三
```

## 每条记录

```js
EXAMS.push({
  year: 2024, subject: '数一', number: 21, kind: '解答', score: 12,
  ids: ['eig-diag-method', 'eig-power-app'],   // 1~n 个知识点 ID：一题可进多篇笔记
  question: String.raw`...题面 LaTeX...`,
  answer: String.raw`...答案...`,
  analysis: String.raw`...解析...`,
  source: '《2024 数学一解析》第 14–15 页',
});
```

| 字段 | 说明 |
| --- | --- |
| `year` | 年份（数字） |
| `subject` | `'数一'` / `'数二'` / `'数三'` |
| `number` | 卷面题号（数字） |
| `kind` | `'选择'` / `'填空'` / `'解答'` |
| `score` | 分值（选择/填空 5，解答 10 或 12） |
| `ids` | 知识点 ID 数组，取下面「知识点 ID 总表」里的值 |
| `question` | 题面（转写自"真题"PDF） |
| `answer` | 答案（转写自"答案及解析"PDF） |
| `analysis` | 解析原文（转写自"答案及解析"PDF，**不要自己写**） |
| `source` | 解析出处（书名 + 书上印的页码） |

## 排版约定（校验会查）

- 显示公式一律 `$$` **独占一行**（同一行写 `$$x$$` 会被 tools/check-notes.mjs 判错）；
- 矩阵/方程组换行用 `\\`（两个反斜杠），列分隔用 `&`；
- 行内公式用 `$...$`，且 `$...$` 里不要写中文；
- 解析里的叙述文字写在数学外，用 `> ` 引用行分段（渲染时会包进可折叠 callout）。

## 素材与做法

真题与解析在 `E:\BaiduNetdiskDownload\历年考研数学真题`（159 个 PDF）：

| 目录 | 内容 |
| --- | --- |
| `1、…数学一真题` / `3、…数学二真题` / `5、…数学三真题` | 题面（1987–2025，数二/数三早年是多年合集） |
| `2、…数学一真题答案及解析` / `4、…数学二…` / `6、…数学三…` | 答案与解析（**解析一律取自这里**） |
| `2026年考研数学*真题及答案` | 2026 三套 |

这些 PDF 是扫描件或"文字转曲"件，**没有可用文字层**（`get_text()` 出来是乱码或空），做法是：

```python
import fitz                      # PyMuPDF 已装：python -m pip show PyMuPDF
d = fitz.open(r"E:\...\2024年考研数学（一）真题.pdf")
for i in range(d.page_count):
    d[i].get_pixmap(dpi=130).save(f".build/pdfscan/ex/page{i+1}.png")   # 再逐页看图转写
```

## 校验

```
node tools/build.js .build/_vault_test
node tools/check-notes.mjs .build/_vault_test        # LaTeX 配对/命令/环境
node tools/check-template.mjs .build/_vault_test tools/deep-v2
node tools/check-contain.mjs .build/_vault_test
node tools/sync-vault.mjs --apply                    # 同步进 线代知识网/
```

## 知识点 ID 总表（103 个）

### 第一章 行列式

- `det-add-row` —— 倍加变换不改变行列式（基础）
- `det-arrow` —— 箭形（爪形）行列式（基础）
- `det-block` —— 分块（拉普拉斯）行列式（基础+数二）
- `det-cofactor` —— 余子式与代数余子式（基础）
- `det-def` —— n 阶行列式（基础）
- `det-elimination` —— 行列式计算的总思路：化三角形（基础）
- `det-expansion` —— 展开定理（按行／列展开）（基础）
- `det-multilinearity` —— 数乘与行列式的线性性（基础）
- `det-product` —— ｜AB｜ = ｜A｜｜B｜（基础）
- `det-rank` —— 由行列式判定矩阵的秩（基础）
- `det-roots` —— 方程根与行列式的结合（基础）
- `det-rowsum-zero` —— ｜A｜=0 ⇔ 行（列）线性相关（基础）
- `det-swap` —— 换行（列）变号（基础）
- `det-transpose` —— 行列式转置不变（基础）
- `det-triangular` —— 三角（含对角）行列式（基础）
- `det-tridiagonal` —— 三对角与递推型行列式（基础）
- `det-vandermonde` —— 范德蒙德行列式（基础）

### 第三章 向量（向量组的线性相关性）

- `vec-combo` —— 线性组合与线性表示（数一+数二）
- `vec-def` —— n 维向量及其运算（数一+数二）
- `vec-equivalent` —— 向量组的等价（数一+数二）
- `vec-express-crit` —— 线性表出的判定定理（数一+数二）
- `vec-indep-concl` —— 线性相关性的重要结论（数一+数二）
- `vec-indep-crit` —— 线性相关性的判定方法（数一+数二）
- `vec-indep-def` —— 线性相关与线性无关的定义（数一+数二）
- `vec-inner` —— 向量的内积、长度与正交（数一+数二）
- `vec-maximal` —— 极大线性无关组（数一+数二）
- `vec-rank-def` —— 向量组的秩（数一+数二）
- `vec-rank-table` —— 向量组秩与线性表出的关系表（数一+数二）
- `vec-rank-vs-mat` —— 向量组的秩与矩阵的秩（数一+数二）
- `vec-schmidt` —— 施密特正交化与标准正交基（数一+数二）

### 第二章 矩阵

- `mat-adj-identity` —— AA∗ = A∗A = ｜A｜E（基础）
- `mat-adj-rank` —— A∗ 的秩与可逆性判定（基础）
- `mat-adjoint` —— 伴随矩阵 A∗ 的定义（基础）
- `mat-block` —— 分块矩阵及其运算（基础+数二）
- `mat-def` —— 矩阵的定义与相等（基础）
- `mat-elem-mat` —— 初等矩阵与等价标准形（基础）
- `mat-elem-op` —— 初等变换（三种）（基础+数二）
- `mat-elem-relation` —— 初等矩阵与初等变换的对应（基础）
- `mat-eq-solve` —— 用初等变换求逆与解矩阵方程 AX = B（基础+数二）
- `mat-equiv` —— 矩阵等价与秩（基础）
- `mat-inv-method` —— 逆矩阵的求法（基础+数二）
- `mat-inverse-def` —— 逆矩阵的定义（基础）
- `mat-invertible-crit` —— 可逆的充要条件（汇总枢纽）（基础）
- `mat-linear` —— 矩阵的加法与数乘（基础）
- `mat-mult` —— 矩阵乘法（基础）
- `mat-nocancel` —— AB = O 没有零因子（基础）
- `mat-nocancel-2` —— AX = AY 推不出 X = Y（基础）
- `mat-noncommute` —— AB ≠ BA（乘法不可交换）（基础）
- `mat-orthogonal` —— 正交矩阵与正交变换（数一+数二）
- `mat-power` —— 方阵的幂与矩阵多项式（基础）
- `mat-rank` —— 矩阵的秩（基础+数二）
- `mat-rank-crit` —— 由秩判定矩阵性质（基础）
- `mat-rank-ineq` —— 秩的不等式（乘法与加法）（基础）
- `mat-rank-invariance` —— 秩的运算不变性（基础）
- `mat-trace` —— 矩阵的迹（基础+数二）
- `mat-transpose` —— 矩阵的转置（基础）
- `mat-types` —— 常见特殊矩阵（基础）

### 第五章 矩阵的特征值与特征向量

- `eig-def` —— 特征值与特征向量的定义（数一+数二）
- `eig-diag-crit` —— 可对角化的充要条件（数一+数二）
- `eig-diag-method` —— 相似对角化的方法与步骤（数一+数二）
- `eig-estimate` —— 特征值的范围与估计（数一）
- `eig-minpoly` —— 最小多项式与可对角化（数一）
- `eig-mult` —— 代数重数与几何重数（数一+数二）
- `eig-ops` —— 特征值的运算性质（数一+数二）
- `eig-orth-diag` —— 实对称矩阵的正交对角化（数一+数二）
- `eig-poly` —— 特征多项式与特征方程（数一+数二）
- `eig-power-app` —— 用对角化求 Aᵏ 与矩阵函数（数一+数二）
- `eig-property` —— 特征值与特征向量的性质（数一+数二）
- `eig-similar` —— 相似矩阵的定义（数一+数二）
- `eig-similar-crit` —— 相似的判定与反例（数一）
- `eig-similar-prop` —— 相似矩阵的性质与不变量（数一+数二）
- `eig-symmetric` —— 实对称矩阵的特征值与特征向量（数一+数二）
- `eig-trace-det-app` —— 特征值的应用：求行列式与幂（数一+数二）
- `eig-vector-space` —— 特征子空间与特征向量的求法（数一+数二）

### 第六章 二次型

- `qf-canonical` —— 标准形与规范形（数一+数二）
- `qf-complete-square` —— 配方法化标准形（数一+数二）
- `qf-congruent` —— 矩阵合同（数一+数二）
- `qf-contract-vs-similar` —— 合同与相似的对比（数一+数二）
- `qf-def` —— 二次型及其矩阵表示（数一+数二）
- `qf-inertia-index` —— 惯性指数与符号差（数一+数二）
- `qf-inertia-law` —— 惯性定理（数一+数二）
- `qf-orthogonal` —— 正交变换法化标准形（数一+数二）
- `qf-positive-crit` —— 正定的充要条件（五条等价）（数一+数二）
- `qf-positive-def` —— 正定二次型与正定矩阵（数一+数二）
- `qf-semi-def` —— 半正定与负定矩阵（数一）

### 第四章 线性方程组

- `eq-AX-O-AB-O` —— 矩阵方程 AX = O 与 AB = O（数一）
- `eq-cramer` —— 克拉默法则（基础）
- `eq-gauss` —— 高斯消元法与行阶梯形（基础）
- `eq-geometry` —— 方程组的几何意义（平面与直线）（基础）
- `eq-homo-general` —— 齐次方程组的通解与解空间（基础）
- `eq-homo-nonhomo` —— 齐次与非齐次解的关系（基础）
- `eq-homo-sol` —— 齐次方程组 Ax = 0（基础）
- `eq-homo-structure` —— 基础解系（基础）
- `eq-nonhomo-crit` —— 非齐次方程组 Ax = b 的相容性判别（基础）
- `eq-nonhomo-general` —— 非齐次方程组的通解结构（基础）
- `eq-rank-relation` —— 系数矩阵与增广矩阵的关系（基础）
- `eq-samesol` —— 同解方程组与公共解（数一）

### 附录 线性空间与线性变换

- `sp-def` —— 线性空间与子空间（数一）
- `sp-dim-basis` —— 维数、基与坐标（数一）
- `sp-kernel-image` —— 核与像（值域）（数一）
- `sp-similar-transform` —— 线性变换与矩阵的对应（相似）（数一）
- `sp-transform` —— 线性变换的定义与矩阵表示（数一）
- `sp-transition` —— 过渡矩阵与坐标变换（数一）
