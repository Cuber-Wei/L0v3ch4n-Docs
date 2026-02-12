---
title: Paillier：最著名的半同态加密方案
createTime: 2025/03/12 19:50:25
permalink: /CTF/Paillier/
tags:
    - CTF
    - Crypto
    - Paillier
---

## 何为同态加密（HE）？

HE 是一种特殊的加密方法，它允许直接对加密数据执行计算，如加法和乘法，而计算过程不会泄露原文的任何信息。计算的结果仍然是加密的，拥有密钥的用户对处理过的密文数据进行解密后，得到的正好是处理后原文的结果

根据支持的计算类型和支持程度，同态加密可以分为以下三种类型：

-   **半同态加密（Partially Homomorphic Encryption, PHE）**：只支持加法或乘法中的一种运算。其中，只支持加法运算的又叫
    **加法同态加密（Additive Homomorphic Encryption, AHE）**；

-   **部分同态加密（Somewhat Homomorphic Encryption, SWHE）**：可同时支持加法和乘法运算，但支持的计算次数有限；

-   **全同态加密（Fully Homomorphic Encryption, FHE）**：支持任意次的加法和乘法运算。

在同态加密概念被 Rivest 在 1978 年首次提出后，学术界出现了多个支持 PHE 的方案，如 RSA、GM、Elgamal、Paillier。此后，SWHE 方案也相继问世，如 BGN。关于 FHE 如何实现，学术界在很长的时间都没有答案。直到 2009 年，Gentry 使用理想格构造了第一个 FHE 方案，轰动了整个学术界，并引发了学者们对于 FHE 方案构造的研究热潮。此后相继涌现出多个优秀的 FHE 方案，包括 BFV、BGV、CKKS 等，以及多个优秀的开源算法库如 SEAL、HELib 等。

## Paillier 简介

Paillier 是一个**支持加法同态的公钥密码系统**。由于其效率较高、安全性证明完备的特点，在各大顶会和实际应用中被广泛使用，是隐私计算场景中最常用的 PHE 实例化方案之一。

## Paillier 方案原理

### 前置知识

**加法同态加密定义**

在描述具体方案之前，我们先定义加法 PHE。首先列举方案具有的所有算法。

-   `KeyGen()`：密钥生成算法。用于产生加密数据的公钥 PK（Public Key）和私钥 SK（Secret Key），以及一些公开常数 PP（Public Parameter）；

-   `Encrypt()`：加密算法。使用 PK 对用户数据 Data 进行加密，得到密文 CT（Ciphertext）；

-   `Decrypt()`：解密算法。用于解密得到数据原文 PT（Plaintext）。

HE 除了加解密以外，还具有在密文上进行处理的能力，所以还应拥有“处理”算法。对于加法 PHE，支持的算法有同态加以及同态标量乘（标量乘法可看作多次加法）。

-   `Add()`：同态加算法。输入两个 CT 进行同态加运算。

-   `ScalaMul()`：同态标量乘算法。输入一个 CT 和一个标量 PT，计算 CT 的标量乘结果。

### Paillier 方案描述

原版 Paillier 方案详见论文: Paillier P. Public-key cryptosystems based on composite degree residuosity classes[C]
//International conference on the theory and applications of cryptographic techniques. Springer, Berlin, Heidelberg,
1999: 223-238

**密钥生成**

第一形式：

1. 随机选择两个大素数$p$, $q$满足 $g c d ( p q , ( p − 1 ) ( q − 1 ) ) = 1$，且满足$p$,$q$长度相等。
2. 计算$n=pq$及$\lambda=lcm(p-1,q-1)=\frac{(p-1)(q-1)}{gcd(p-1,q-1)}$，这里$lcm$表示最小公倍数，$|n|$为$n$的比特长度。
3. 选择随机整数$g\leftarrow Z^*_{n^2}$即$0<g<n^2$。
4. 定义$L$函数：$L(x)=\frac{x-1}{n}$，计算$\mu=[L(g^\lambda~mod~n^2)]^{-1}_n$。

公钥$(n,g)$，私钥$(\lambda, \mu)$。

第二形式（优化参数选择）：

其余参数不变，主要改变$g$，$\lambda$，$\mu$的定义。

$$
g=n+1\\
\lambda=\phi(n)=(p-1)(q-1)\\
\mu=[\phi(n)]^{-1}_n
$$

**加密**

1. 输入明文信息$m$，满足$0\le m<n$。
2. 选择随机整数$r$，满足$0\le r<n$且$r\in Z^*_m$。
3. 计算密文$c=g^mr^n~mod~n^2$。

**解密**

1. 输入密文$c$，满足$c\in Z^*_{n^2}$。
2. 计算明文信息$m=L(c^\lambda~mod~n^2)\cdot\mu~mod~n$。

**同态加**

对密文$c_1$，$c_2$，计算$c=c_1\cdot c_2~mod~n^2$。

**同态标量乘**

对密文$c_1$和标量$a$，计算$c=c_1^a~mod~n^2$。

**安全性**

Paillier 方案满足加密方案的标准安全定义：语义安全，即在选择明文攻击下的密文的不可区分性（IND-CPA）。直观地说，就是密文不会泄露明文中的任意信息。方案安全性可以归约到判定性合数剩余假设（Decisional
Composite Residuosity Assumption,
DCRA），即给定一个合数 n 和整数 z，判定 z 是否在 n^2 下是否是 n 次剩余是困难的。这个假设经过了几十年的充分研究，到目前为止还没有多项式时间的算法可以攻破，所以 Paillier 加密方案的安全性被认为相当可靠。

## CTF 例题

DASCTF-2020 四月-Crypto-not_RSA

```python
from Crypto.Util.number import getPrime as getprime, long_to_bytes, bytes_to_long, inverse
from secret import flag, p, q
from sympy import isprime, nextprime
import random

m=bytes_to_long(flag)
n=p*q
g=n+1
r=random.randint(1,n)

c=(pow(g,m,n*n)*pow(r,n,n*n))%(n*n)

print "c=%d"%(c)
print "n=%d"%(n)

'''
c=29088911054711509252215615231015162998042579425917914434962376243477176757448053722602422672251758332052330100944900171067962180230120924963561223495629695702541446456981441239486190458125750543542379899722558637306740763104274377031599875275807723323394379557227060332005571272240560453811389162371812183549
n=6401013954612445818165507289870580041358569258817613282142852881965884799988941535910939664068503367303343695466899335792545332690862283029809823423608093
'''
```

### 思路

从$Z_{n}\times Z_{n}^{*}$到$Z_{n^{2}}^{*}$存在双射关系$(x,y)\rightarrow g^{x}y^{n}(mod\ n^{2})$

$g\in Z_{n^{2}}^{*},\quad\therefore \exists(a, b),s.t.\ g=(n+1)^{a}b^{n}(mod\ n^{2})$

$c^{\lambda}=(n+1)^{am\lambda}b^{nm\lambda}r^{n\lambda}=(n+1)^{am\lambda}=1+am\lambda n(mod\ n^{2})$

$L(c^{\lambda}\ mod\ n^{2})=am\lambda$，同理$L(g^{\lambda}\ mod\ n^{2})=a\lambda$，证毕

本题$g=n+1$，且 n 可以直接`Fermat`分解得到$p$，$q$，按上述方法解密即可。

### exp

```python
from Crypto.Util.number import *

p = 80006336965345725157774618059504992841841040207998249416678435780577798937819
q = 80006336965345725157774618059504992841841040207998249416678435780577798937447
n = p * q
c = 29088911054711509252215615231015162998042579425917914434962376243477176757448053722602422672251758332052330100944900171067962180230120924963561223495629695702541446456981441239486190458125750543542379899722558637306740763104274377031599875275807723323394379557227060332005571272240560453811389162371812183549
lcm = ((p - 1) * (q - 1)) // GCD(p - 1, q - 1)
a = (pow(c, lcm, n * n) - 1) // n
b = (pow(n + 1, lcm, n * n) - 1) // n
m = long_to_bytes((a * inverse(b, n)) % n)
print(m)
```
