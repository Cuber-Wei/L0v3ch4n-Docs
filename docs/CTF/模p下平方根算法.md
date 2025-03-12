---
title: 模p下平方根算法
createTime: 2025/03/12 19:41:18
permalink: /article/mod_p/
tags:
  - CTF
  - Crypto
---

## 根的存在性与数量

计算模$p$下$n$的平方根其实就是求解方程
$$
x^2\equiv n \pmod p,gcd(n, p)=1
$$
显然，$n$必须是模$p$的二次剩余。

- 当$p$是素数时，根据欧拉判别法$n$需要满足：

$$
n^{\frac{p-1}{2}}\equiv 1\pmod p
$$

方程有$0$或$2$个解。

- 当$p$是奇合数时，方程有$0$或$2^l$个解（$p = \prod^{l}_{i=1}p^{e_i}_i$，即$l$为$p$的因子个数）

## 模四余三

有一个通用公式:
$$
x\equiv \pm n^{\frac{p+1}{4}}\pmod p
$$

## 模四余一

这类素数的公式其实也是上面那个，但是问题是当 $p\equiv 1 \pmod p$ 时，$\frac{p+1}{4}$并不是整数，而我们无法在模 $p$
的情况下直接计算分数次幂（不然这篇东西就不必要存在了）。

于是我们有了**$Cipolla$~~魔法~~算法** 和 **$Tonelli–Shanks$~~魔法~~算法**。

下面请记住要求解的方程~~待会可能就认不出它了~~：
$$
x^2\equiv n \pmod p
$$

## Cipolla魔法

先对方程进行亿点点变形：
$$
x \equiv \sqrt{n}\equiv(a^2-(a^2-n))^\frac{1}{2}\pmod p\\
令\omega^2\equiv a^2-n\pmod p,(a^2-n)^\frac{p-1}{2}\equiv-1\pmod p,得到:\\
\left\{\begin{matrix}
x\equiv (a^2-\omega^2)^\frac{1}{2}\equiv((a+\omega)(a-\omega))^\frac{1}{2}\pmod p\\
\omega^p=\omega^{p-1}\times\omega=(a^2-n)^\frac{p-1}{2}\times\omega\equiv-\omega\pmod p\\
a^p=a^{p-1}\times a\equiv a\pmod p
\end{matrix}\right.\\
所以:\\
x\equiv((a^p+\omega^p)(a+\omega))^\frac{1}{2}\pmod p\\
又(a+\omega)^p\equiv a^p+\omega^p\pmod p,故:\\
x\equiv(a+\omega)^\frac{1}{2}\pmod p
$$
接下来就是确定$a$和$\omega$了。

### a

$a$由$(a^2-n)^\frac{p-1}{2}\equiv-1\pmod p$决定的。也就是说，$(a^2-n)^\frac{p-1}{2}$是$p$的二次非剩余。这样的$a$
是很好找的，因为模$p$的既约剩余系中有一半是它的二次非剩余，我们只要随机找一个$a$
，然后带入检验即可，这一步不会花费太久（期望为$2$次）。

### $\omega$

$\omega$是二次非剩余$(a^2-n)$的平方根，显然不存在。但是$\omega^2$确实存在。

通过对$x\equiv(a+\omega)^\frac{p+1}{2}\pmod p$展开，得到$c+\omega d,~~c,d\in \R$这样的数（是不是很像复数）。$\omega$
不存在，但是$x$存在（方程有解），那么~~心机之蛙，一直摸你肚子~~真相只有一个）——“虚部”为$0$，即$d=0$。

**所以我们得出结论，计算结果与$\omega$无关。**

计算步骤可以利用二项式定理计算，也可以借用复数的运算法则（写个复数快速幂）。

### 脚本

```python
#x**2 = c mod p
# 定义模p复数域上的乘法
def multiplication(x1,y1,x2,y2,w,p):
    x=(x1*x2+y1*y2*w)%p
    y=(x1*y2+x2*y1)%p
    return x,y

# 获取w,使得w = -1 mod p, w是复数元的平方
def get_w(c,p):
    a=randint(1,p)
    w=pow(a, 2) - c
    while pow(w,(p - 1)//2,p)!=p-1:
        a=randint(1,p)
        w=pow(a,2)-c
    return w,a
def Cipolla_algorithm(c,p):
    #主体部分
    w,a=get_w(c,p)
    power=(p+1)//2
    x1=a
    y1=1
    x=1
    y=0
    while(power!=0):
        if(power!=(p+1)//2):
            x1,y1=multiplication(x1,y1,x1,y1,w,p)
        if(power & 1):
            x,y=multiplication(x,y,x1,y1,w,p)
        power>>=1
    return x
```

## Tonelli–Shanks魔法

首先，我们从$p-1$分解出$2$的幂次，即$p-1=Q2^S$，其中$Q$是奇数。

分类讨论$S$：

- $S=1$

    - 得到$p=2(2n+1)+1=4n+3$，即$p\equiv3\pmod4$，利用通用公式解得$x\equiv \pm n^\frac{p+1}{4}\pmod p$。

- or else

    - 令$R\equiv n^\frac{Q+1}{2}\pmod p$，则$R^2\equiv n^{Q+1}=n\times n^Q\pmod p$。

        - 若$t\equiv n^Q\equiv1\pmod p$，则$R$是$n$模$p$下的平方根。
        - 否则我们令$M=S$，有：

      $$
      R\equiv nt\pmod p\\
      t^{2^{M-1}}=t^{2^{S-1}}\equiv n^{Q2^{S-1}}=n^\frac{p-1}{2}\pmod p,~即t是1模p下的2^{M-1}次方根
      $$

        - 此时，对$M$的一个特殊值选择一组$R$和$t$（$R$不是$t$的二次方根），使得上述关系成立，我们可以算出另外一组$R$和$t$
          ，使得上述关系成立。如此下去直到$t$变成$1$模$p$下的$2^0$方根，即$t=1$，此时$R$就是$n$在模$p$下的二次方根。
        - 需要注意的一点是$t^{2^{M-2}}~mod~p\in\{-1,1\}$（$(\pm1)^2=1$）。
        - **下面是计算另一组$R$和$t$的方法：**
        - 将$R$乘上一个数$b$,同时$t$必须乘上$b^2$以保证$R^2\equiv nt\pmod p$。同时保证$tb^2$是$1$模$p$下的$2^{M-2}$
          次方根（或者是$-1$的）。
        - 找到一个模$p$二次非剩余$z$。则$z^Q$是$-1$模$p$下的$a^{S-1}$次方根。所以我们找到一个$i$
          ，使得$t^{2^i}\equiv1\pmod p$，同时能导出$b=c^{2^{m-i-1}},~c=z^Q$。

### 算法

```
:param p:	一个素数
:param n:	一个模p的二次剩余
:return:	方程的解
```

1. 从$p-1$分解出$2$的幂次，即$p-1=Q2^S$，其中$Q$是奇数。如果$S=1$，直接返回$r\equiv \pm n^\frac{p+1}{4}\pmod p$。
2. 找到$z$，使得$z$对$p$的勒让德符号为$-1$，令$c\equiv z^Q\pmod p$。
3. 令$r\equiv n^\frac{Q+1}{2}\pmod p,t\equiv n^Q\pmod p,m=S$。
4. 循环：
    - 如果$t\equiv 1\pmod p$，返回$r$。
    - 否则，找到最小的一个$i(0<i<m)$，且$t^{2i}\equiv1\pmod p$。
    - 更新$b\equiv c^{2^{m-i-1}}\pmod p,r\equiv br\pmod p,t\equiv tb^2\pmod p,c\equiv b^2\pmod p,m=i$。

若能得到一个解$x$，则另一解为$p-x$。

### 脚本

```python
def legendre(a,p):
    symbol = pow(a, (p - 1) // 2, p)
    if symbol == p - 1:
        return -1
    return symbol

def tonelli(a,p):
    if a == 0 or legendre(a,p) != 1:
        return 0
    q = p - 1
    s = 0
    while q % 2 == 0:
        q //= 2
        s += 1
    if s == 1:
        return pow(n, (p + 1) // 4, p)
    
    z = 2
    while legendre(z, p) != -1:
        z += 1
        
    m = s
    c = pow(z, q, p)
    t = pow(a, q, p)
    r = pow(a, (q +1) // 2, p)
    
    while t!= 1:
        t2 = t
        i = 0
        while t2 != 1 and i < m:
            t2 = pow(t2, 2, p)
            i += 1
        b = pow(c, 2 ** (m - i - 1), p)
        m = i
        c = (b * b) % p
        t = (t * c) % p
        r = (r * b) % p
        
    return r
```

## 应用(p=PQ)

只是一个示例，多因子$n$也是同个思路。

根据中国剩余定理，$\left\{\begin{matrix}x^2\equiv n\pmod p\\p = PQ\end{matrix}\right.$可以写成方程组
$$
\left\{\begin{matrix}x^2\equiv n\pmod P\\x^2\equiv n\pmod Q\end{matrix}\right.
$$
然后分解出来，得到两组（四个）解。

**只有中国剩余定理的每个方程都有解，原方程才有解。**

