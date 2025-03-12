---
title: CTF Crypto 常用函数库的常见函数使用
createTime: 2025/03/12 19:37:02
permalink: /article/CryptoFunctions/
tags:
  - CTF
  - Crypto
  - 常用函数
---

发现有些博客里面写的不是很全，而且自己也懒得去找。

一个菜鸡一边学一边补充的，没写完。

## Crypto.Util.number

1. $int\rightarrow bytes$

```python
# long_to_bytes()
'''
将整数转化成byte字符串
:param	要转化的数字(int)
:return	转化结果(byte)
'''
>>> long_to_bytes(112615676672893) 
b'flag{}'
```

2. $bytes\rightarrow int$

```python
# bytes_to_long()
'''
将byte字符串转化为整数
:param	要转化的二进制字符串(byte)
:return	转化结果(int)
'''
>>> bytes_to_long(b'flag{}')
112615676672893
```

3. 获取指定二进制位数的质数

```python
# getPrime()
'''
获取随机的指定位数（二进制位）的质数
:param	质数的位数(int)
:return	对应位数的质数(int)
'''
>>> getPrime(16)
62297
```

4. 计算乘法逆元

```python
# inverse()
'''
计算乘法逆元
:param	原数(int)
:param	模数(int)
:return	原数的乘法逆元(int)，若不存在则报错
'''
>>> inverse(2,9)  
5
```

5. 最大公约数

```python
# GCD()
'''
计算两数的最大公约数
:param	数字一(int)
:param	数字二(int)
:return	最大公约数(int)
'''
>>> GCD(114, 514)
2
```

## gmpy2

1. 开n次方

```python
# iroot()
'''
开n次方
:param	被开方数(int)
:param	方次n(int)
:return	(开方结果（向下取整）, 是否开尽)(tuple)
'''
>>> gmpy2.iroot(16, 4) 
(mpz(2), True)
>>> gmpy2.iroot(16, 5) 
(mpz(1), False)
```

2. 最大公约数

```python
# gmpy2.gcd()
'''
计算两数的最大公约数
:param	数字一(int)
:param	数字二(int)
:return	最大公约数(int)
'''
>>> gmpy2.gcd(24, 20)
mpz(4)
```

3. 拓展欧几里得定理

```python
# gmpy2.gcdext() 
'''
计算两数的最大公约数及对应的a, b系数
:param	数字一(int)
:param	数字二(int)
:return	(最大公约数, a, b)(tuple)
'''
>>> gmpy2.gcdext(114, 514)  
(mpz(2), mpz(-9), mpz(2))
```

4. 高次模幂

```python
# gmpy2.powmod()
'''
计算高次模幂。
:param	底数(int)
:param	指数(int)
:param	模数(int)
:return	计算结果(int)
'''
>>> gmpy2.powmod(114, 514, 1919810) 
mpz(290606)
```

5. 下一个质数

```python
# gmpy2.next_prime()
'''
找到下一个质数。
:param	基数(int)
:return	下一个质数(int)
'''
>>> gmpy2.next_prime(4)
mpz(5)
```

## sagemath

~~先摸了~~