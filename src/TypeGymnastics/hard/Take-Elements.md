---
title: Take Elements
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Take-Elements/
---

## 题目

Implement a type `Take<N, Arr>` that returns the first `N` elements from an array `Arr`. If `N` is negative, return the last `|N|` elements

For example,
```ts
type T0 = Take<2, [1, 2, 3]> // [1, 2]
type T1 = Take<3, ['1', 2, true, false]> // ['1', 2, true]
type T2 = Take<-2, [1, 2, 3]> // [2, 3]
type T3 = Take<0, [1, 2, 3]> // []
type T4 = Take<5, [1, 2, 3]> // [1, 2, 3]
type T5 = Take<3, []> // []
```

## 解题思路

待补充

## 答案

```ts
type Take<N, Arr> = Arr
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Take<2, [1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Take<3, ['1', 2, true, false]>, ['1', 2, true]>>,
  Expect<Equal<Take<-2, [1, 2, 3]>, [2, 3]>>,
  Expect<Equal<Take<0, [1, 2, 3]>, []>>,
  Expect<Equal<Take<5, [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Take<3, []>, []>>,
]
```

## 参考

无
