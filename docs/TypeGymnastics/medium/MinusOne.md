---
title: MinusOne
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/MinusOne/
---

## 题目

给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。

例如:

```ts
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
```


## 解题思路

待补充

## 答案

```ts
type MinusOne<T extends number> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

```

## 参考

无

