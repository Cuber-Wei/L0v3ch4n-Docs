---
title: Construct Tuple
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Construct-Tuple/
---

## 题目

构造一个给定长度的元组。

例如

```ts
type result = ConstructTuple<2> // 期望得到 [unknown, unknown]
```


## 解题思路

待补充

## 答案

```ts
type ConstructTuple<L extends number> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

```

## 参考

无

