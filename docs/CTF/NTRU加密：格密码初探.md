---
title: NTRU加密：格密码初探
createTime: 2025/03/12 19:55:16
permalink: /CTF/NTRU/
tags:
  - CTF
  - Crypto
  - Lattice
  - NTRU
---

## 参数

    - 模 p
    - 私钥 $(f,g)$
    - 公钥 $h=f^{-1}g\pmod p$
    - 临时密钥 r

## 加密

$$
c\equiv rh+m\equiv rf^{-1}g+m\pmod p
$$

## 解密

$$
fc\equiv rg+mf\equiv fm\pmod g
$$
再乘上$f^{-1}$就是m了。

**参数大小**

显然当$rg+fm<p,m<g$时才能正常解密。

考虑格
$$
L=\begin{bmatrix}1&h\\0&p\end{bmatrix}
$$
同时我们有$hf+kp=g$，
此时我们发现$(f,g)$时格中的一个格点。因为：
$$
(f,k)L=(f,fh+kp)=(f,g)
$$
因此，如果我们能够找到$(f,p)$，那我们就可以确定$(f,g)$。

**更多条件**
$$
f<\frac{p^{1/2}}{2},g<\frac{p^{1/2}}{2},m<\frac{p^{1/2}}{4},r<\frac{p^{1/2}}{2}
$$
此时我们可以发现向量$\mathbf{b}=(f,g)$的长度（欧几里得范数）为：
$$
||\mathbf{b}||=\sqrt{f^2+g^2}<\sqrt{\frac{p}{2}}
$$
这条向量就是在$L$这个格下的最短向量，我们可以求解这个SVP问题得到$f,g$。

## 例题

```python
from Crypto.Util.number import *

p = getPrime(1024)

f = getPrime(400)
g = getPrime(512)
r = getPrime(400)

h = inverse(f, p) * g % p

m = b'******'
m = bytes_to_long(m)

c = (r*h + m) % p
```

**exp：**

```python
from Crypto.Util.number import *

p = 
h = 
c = 

# 构造格子
L = matrix([[1, h],
            [0, p]])
# 格基约化拿到f, g
f, g = L.LLL()[0]
# 计算fm
fm = c * f % p % g
# 乘f逆得到m
m = fm * inverse(f, g) % g
print(long_to_bytes(m))
# NSSCTF{94068324-38bb-410b-b464-e1b8baf6b358}
```