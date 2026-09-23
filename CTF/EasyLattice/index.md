---
url: /CTF/EasyLattice/index.md
---
利用格基约化的技术，我们可以求解一些加密脚本中含未知数的问题。

格密码一般是基于两个格上的难题建立的（**SVP**和**CVP**）

> \[!note]
> 这边引入一个定理（**Hermite 定理**）：
> 这个定理揭示了格中最短向量的大概长度。
> 定理本体：对$n$维的格$L$，都包含一个非零向量$\mathbf{v}\in L$，满足：
>
> $$
> ||\mathbf{v}||\le\sqrt{n}det(L)^{1/n}
> $$
>
> 衍生出**Hermite 常数**$\gamma\_n$，有：
>
> $$
> ||\mathbf{v}||^2\le\gamma\_ndet(L)^{2/n}
> $$
>
> $$
> \frac{n}{2\pi e}\le\gamma\_n\le\frac{n}{2\pi e}
> $$

格密码的解题思路一般为：

1. 列出题目给出的一些关系式，明确未知数和已知数。
2. 对关系式进行变化，将关系式转化成向量相乘的形式。
3. 构造格，用 Hermite 定理进行大小验证，若不满足，考虑重新造格。
4. 格基约化求解，得到未知数。

## 一

```python
from Crypto.Util.number import *
import random

flag = b'******'
m = bytes_to_long(flag)

a = getPrime(1024)
b = getPrime(1536)

p = getPrime(512)
q = getPrime(512)
r = random.randint(2**14, 2**15)
assert ((p-r) * a + q) % b < 50

c = pow(m, 65537, p*q)

print(f'c = {c}')
print(f'a = {a}')
print(f'b = {b}')
```

我们可以从题目里拿到以下关系：

$$
(p-r)\cdot a+q+k\cdot b = x < 50
$$

$$
c\equiv m^{65537}\pmod{(pq)}
$$

$a,b$是已知的，$p,q,r$是未知的。然后后面的加密是正常的 RSA 加密手法。

看看大小：

$$
|a|=2^{1024},|b|=2^{1536},|p|=2^{512},|q|=2^{512},2^{14}<|r|<2^{15}
$$

稍微移一下项，我们忘格子的形式上靠：

$$
(p-r)\cdot a+k\cdot b=x-q
$$

考虑构造以下格子：

$$
L=\begin{bmatrix}
1 & a\\
0 & b
\end{bmatrix}
$$

这样可以找到：

$$
(p-r,k)L=(p-r,x-q)=\mathbf{v}
$$

计算 $\mathbf{v}$ 的大小：

$$
||\mathbf{v}||=\sqrt{|p-r|^2+|x-q|^2}\approx\sqrt2\cdot2^{512}<\sqrt2\cdot |b|^{1/2}
$$

大小可以，开归！然后就是正常的 RSA，进行一个爆破的解密。

**exp:**

```python
from Crypto.Util.number import *

c =
a =
b =
e = 65537

L = Matrix(ZZ, [[1, a],
                [0, b]])

p, q = map(abs, L.LLL()[0])

flag = False
for r in range(2**14, 2**15):
    for x in range(50):
        P = p + r
        Q = q + x
        phi = (P - 1)*(Q - 1)
        if gcd(phi, e) != 1:
            continue
        d = inverse_mod(e, phi)
        m = power_mod(c, d, P*Q)
        if b'NSSCTF' in long_to_bytes(int(m)):
            print(long_to_bytes(int(m)))
            flag = True
            break
    if flag:
        break
```

## 二

```python
from Crypto.Util.number import *

flag = b'******' # uuid形式
flag = bytes_to_long(flag)

p = getPrime(1024)
r = getPrime(175)
a = inverse(r, p)
a = (a*flag) % p

print(f'a = {a}')
print(f'p = {p}')
```

老样子，拿关系式：

$$
|p|=2^{1024},|r|=2^{175}
$$

$$
a\_0\cdot r=k\_1\cdot p + 1
$$

$$
a=a\_0\cdot m+k\_2\cdot p
$$

$a,p$是已知的，$r,a\_0,m$是未知。

移项，构造式子：

$$
ma\_0r=mk\_1p+m
$$

$$
(a-k\_2p)r=K\_1p+m
$$

$$
ar=kp+m
$$

$$
ra+kp=m
$$

考虑构造格：

$$
L=\begin{bmatrix}
1 & a\\
0 & p
\end{bmatrix}
$$

这样就有：

$$
(r,k)L=(r,m)=\mathbf{v}
$$

看看大小：$m$大概$128$bit 大小。

$$
||\mathbf{v}||=\sqrt{|r|^2+|m|^2}\approx 2^{176}<|p|^{1/2}=2^{512}
$$

还说什么呢，开归！

**exp:**

```python
from Crypto.Util.number import *

a =
p =

L = Matrix(ZZ, [[1, a],
                [0, p]])
r, m = L.LLL()[0]
print(long_to_bytes(abs(m)))
```

## 三

```python
from Crypto.Util.number import *
from gmpy2 import *

flag = b'******'
m = bytes_to_long(flag)

assert m.bit_length() == 351
p = getPrime(1024)
b = getPrime(1024)
c = getPrime(400)

a = (b*m + c) % p

print(f'a = {a}')
print(f'b = {b}')
print(f'p = {p}')
```

拿条件：

$$
a=bm+c+kp
$$

$$
a-bm-kp=c
$$

可以构造格：

$$
L=\begin{bmatrix}
1 & 0 & a\\
0 & 1 & -b\\
0 & 0 & p
\end{bmatrix}
$$

有：

$$
(1,m,-k)L=(1,m,c)=\mathbf{v}
$$

看大小：

$$
||\mathbf{v}||=\sqrt{1+|m|^2+|c|^2}\approx 2^{401}>|p|^{1/3}=2^{341}
$$

归不了一点！这下不得不优化一下凑个数据了：

先看看差多少：401-341=60，算上三次方得补上 60\*3=180。这个补充对向量大小影响不大，这里考虑冗余先补个 200 试试看。

$$
L=\begin{bmatrix}
2^{200} & 0 & a\\
0 & 1 & -b\\
0 & 0 & p
\end{bmatrix}
$$

看大小：

$$
||\mathbf{v}||=\sqrt{2^{200\times2}+|m|^2+|c|^2}\approx 2^{401}<|2^{200}p|^{1/3}=2^{408}
$$

格基规约，启动！

**exp:**

```python
from Crypto.Util.number import *

a =
b =
p =

L = Matrix(ZZ, [[2**200, 0, a],
                [0, 1, -b],
                [0, 0, p]])
_, m, _ = L.LLL()[0]
print(long_to_bytes(abs(m)))
```
