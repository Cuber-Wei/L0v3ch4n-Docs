---
title: Schmidt-Samoa密码系统
createTime: 2025/03/12 20:05:53
permalink: /CTF/SchmidtSamoa/
tags:
  - CTF
  - Crypto
  - Schmidt-Samoa
---

Schmidt-Samoa 密码系统，像 Rabin 加密一样，其安全性基于整数因式分解的难度。但 Rabin 解密时会得到四个解，而 Schmidt-Samoa
得到的是唯一解。

## 加密过程

**密钥生成**

1. 选取两个大的质数p和q并进行计算 $N = p^2*q$
2. 计算 $d=invert(N,\varphi(pq))$
3. 公钥取数对$(N, d)$

**加密**

对消息 $m$ ，计算密文 $C=m^N \pmod N$

**解密**

计算明文 $m = C^d\pmod{pq}$

正确性证明就不写了。~~摸了摸了~~

## 关于pq的获取问题

我们有$N=p^2q,d\cdot N\equiv1\pmod{(p-1)(q-1)}$，有欧拉定理：
$$
a^{(p-1)(q-1)}\equiv1\pmod{pq}
$$

所以：
$$
a^{(p-1)(q-1)}\cdot a\equiv1\pmod{pq}
$$
$$
a\equiv a^{(p-1)(q-1)}\pmod{pq}
$$

由此，我们有：
$$
k\cdot pq=a^{Nd}-a
$$
$$
pq=gcd(a^{Nd}-a,N)
$$
我们只要随便取个$a$就行能拿到$pq$了。

## 例题

```python
from Crypto.Util.number import *
flag = b'NSSCTF{******}'

p = getPrime(512)
q = getPrime(512)
n = p*p*q
e = n

c = pow(bytes_to_long(flag), e, n)
d = inverse(e, (p-1)*(q-1))
```

$$
x^{nd}\equiv x^{nd-1}\cdot x\equiv x\pmod{pq}
$$

显然有 $pq\mid{(x^{nd}-x)}$ 。然后题目有$n=p^2q$ ，GCD一下就有$pq$了。

**exp**:

```python
from Crypto.Util.number import *

n =
d =
c =

pq = GCD(n, pow(2, n*d, n)-2)
m = pow(c, d, pq)
print(long_to_bytes(m))
```
