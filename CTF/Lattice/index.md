---
url: /CTF/Lattice/index.md
---
## 什么是格(Lattice)

在一个线性空间内确定两个线性无关向量，作为基底，它们进行线性组合后扫过的空间就是格。

![image-20230703205526008](https://file.l0v3ch4n.top/L0v3ch4n-Docs-images/CTF/LatticeCrypto/image-20230703205526008.png)

在格密码中，我们一般设置基底前的系数为整数，因此形成的格都是离散的。

![image-20230703205601877](https://file.l0v3ch4n.top/L0v3ch4n-Docs-images/CTF/LatticeCrypto/image-20230703205601877.png)

格在密码学中很有趣因为我们很少处理实数，而它们给我们提供了很多处理整数的工具。

就像向量空间一样，格也可以用不同的基表示为矩阵来描述。不过与矩阵表示习惯不同的是，我们在格理论中常把基向量作为矩阵的行向量。

下面定义一个格 L${\overrightarrow{b\_1},\overrightarrow{b\_2},\dots\overrightarrow{b\_\omega}}$的行列式：

$$
det(L):=\prod\_{i=1}^{\omega}||\overrightarrow{b\_i}||
$$

\~~(其实就是矩阵的行列式)~~

## LLL 格基约化算法

**Lenstra-Lenstra-Lov´asz**格基约简算法是一种一步一步的演算，可以在多项式时间内减少格基。晶格保持不变，但根据某些定义，其新基的行向量“更小”

\*\*Definition 1:\*\*设 L 是一个基 B 的格，在 L 的基 B 上应用 LLL 算法产生了 L 的一个新基:$B'={b1,\dots,b\_n}$满足以下条件：

$$
\forall1\le j\<i\le n~\text{有}~|\mu\_{ij}|\le\frac{1}{2}\\
\forall1\le i\<n~\text{有}~\delta\cdot||\overrightarrow{b\_i}||^2\le||\mu\_{i+1,i}\cdot\overrightarrow{b\_i}+\overrightarrow{b\_{i+1}}||\\
\text{同时}~\mu\_{i,j}=\frac{b\_i\cdot\overrightarrow{b\_j}}{\overrightarrow{b\_j}\cdot\overrightarrow{b\_j}}~\text{且}~\overrightarrow{b\_1}=b\_1(\text{正交化})
$$

![image-20230703211709280](https://file.l0v3ch4n.top/L0v3ch4n-Docs-images/CTF/LatticeCrypto/image-20230703211709280.png)

## LLL 的性质

LLL 给出了最短向量问题的近似解。这对我们很有用，因为如果我们把晶格基的行向量看作多项式的系数向量。我们可以找到系数“特别小”的多项式的线性组合。

设 L 是一个维数为 n 的格。在多项式时间内，LLL 算法输出约简基向量$v\_i$，对于$1\le i\le n$，满足:

$$
||v\_1||\le||v\_2||\le\dots\le||v\_i||\le2^{\frac{n(n-1)}{4(n+1-i)}}\cdot det(L)^{\frac{1}{n+1-i}}
$$

由此，我们可以通过修改格基的维数和行列式来修改向量的界。
