---
title: IsEqual
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/IsEqual/
---

## 题目

Implements the equal operator that returns a boolean for whether the two given types are equal.

For example:

```ts
type X1 = 1
type Y1 = 1
type T1 = IsEqual<X1, Y1> // expected to be true

type X2 = 1
type Y2 = 2
type T2 = IsEqual<X2, Y2> // expected to be false
```

## 解题思路

待补充

## 答案

```ts
type IsEqual<X, Y> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsEqual<number, string>, false>>,
  Expect<Equal<IsEqual<1, 1>, true>>,
  Expect<Equal<IsEqual<any, 1>, false>>,
  Expect<Equal<IsEqual<1 | 2, 1>, false>>,
  Expect<Equal<IsEqual<any, never>, false>>,
  Expect<Equal<IsEqual<[any], [number]>, false>>,
]
```

## 参考

无
