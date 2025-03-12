---
title: Lattice练习
createTime: 2025/03/12 20:03:52
permalink: /article/LatticePractise/
tags:
  - CTF
  - Crypto
  - Lattice
---

题目：

```python
from Crypto.Util.number import *

flag = b'******'
m = bytes_to_long(flag)

p = getPrime(512)
s = [getPrime(32) for i in range(3)]
a = [getPrime(512) for i in range(3)]

c = (a[0]*s[0]**2*s[1]**2 + a[1]*s[0]*s[2]**2 + a[2]*s[1]*s[2]) % p

flag = m*s[0]*s[1]*s[2]
print(f'c = {c}')
print(f'flag = {flag}')
print(f'a = {a}')
print(f'p = {p}')
```

拿来检测Lattice的学习效果还是不错的。

先拿关系式：
$$
c = a_0s_0^2s_1^2 + a_1s_0s_2^2 + a_2s_1s_2+kp
$$
$$
enc = ms_0s_1s_2
$$
分析已知和未知条件：

|    已知     |  未知   |
|:---------:|:-----:|
|   $a_i$   | $s_i$ |
| $c,p,enc$ |       |

思路就是求出$s_0,s_1,s_2$的值。

处理这种关系式，为了简化式子，我们选择把次数少的拎出来：
$$
a_2s_1s_2=c-a_0s_0^2s_1^2-a_1s_0s_2^2+kp
$$
把系数变成1：
$$
s_1s_2=a_2^{-1}c-a_2^{-1}a_0s_0^2s_1-a_2^{-1}a_1s_0s_2+kp
$$
然后就可以构造格了：
$$
L=\begin{bmatrix}
1 & 0 & 0 & -a_0a_2^{-1}\\
0 & 1 & 0 & -a_1a_2^{-1}\\
0 & 0 & 1 & ca_2^{-1}\\
0 & 0 & 0 & p\\
\end{bmatrix}
$$
这样就有：
$$
(s_0^2s_1^2, s_0s_2^2, 1, k)L=(s_0^2s_1^2, s_0s_2^2, 1, s_1s_2)=\mathbf{v}
$$
看看长度：
$$
||\mathbf{v}||=\sqrt{|s_0^2s_1^2|^2+|s_0s_2^2|^2+1^2+|s_1s_2|^2}\approx 2^{129}>|p|^{1/4}=2^{128}
$$
显然这规约不了一点，但是我们可以将对角线配平，这样会好一点。

目前向量$\mathbf{v}$的对角线大小为：
$$
(128, 96, 1, 64)
$$
我们就乘上这样一个矩阵：
$$
M=\begin{bmatrix}
1 & 0 & 0 & 0\\
0 & 2^{32} & 0 & 0\\
0 & 0 & 2^{128} & 0\\
0 & 0 & 0 & 2^{64}\\
\end{bmatrix}
$$
这样，
$$
||\mathbf{v}*M||=2^{130}<|2^{32+128+64}p|^{1/4}=2^{184}
$$
就可以规约出来了。

**exp:**

```python
from Crypto.Util.number import *

c = 
flag = 
a = []
p = 

ia = inverse_mod(a[2], p)

L = Matrix(ZZ, [[1, 0, 0, -a[0]*ia%p],
                [0, 1, 0, -a[1]*ia%p],
                [0, 0, 1,     c*ia%p],
                [0, 0, 0,         p]])
L *= diagonal_matrix(ZZ, [1, 2^32, 2^128, 2^64])

v = L.LLL()[0]
s0s1 = isqrt(abs(v[0]))
s1s2 = abs(v[3]) >> 64
s1 = gcd(s0s1, s1s2)
s0 = s0s1 // s1
s2 = s1s2 // s1

flag = flag // s0 // s1 // s2
print(long_to_bytes(flag))
```
