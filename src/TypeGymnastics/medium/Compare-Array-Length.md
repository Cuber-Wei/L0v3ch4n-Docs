---
title: Compare Array Length
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Compare-Array-Length/
---

## 题目

Implement `CompareArrayLength` to compare two array length(T & U).

If length of T array is greater than U, return 1;
If length of U array is greater than T, return -1;
If length of T array is equal to U, return 0.

## 解题思路

待补充

## 答案

```ts
type CompareArrayLength<T extends any[], U extends any[]> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CompareArrayLength<[1, 2, 3, 4], [5, 6]>, 1>>,
  Expect<Equal<CompareArrayLength<[1, 2], [3, 4, 5, 6]>, -1>>,
  Expect<Equal<CompareArrayLength<[], []>, 0>>,
  Expect<Equal<CompareArrayLength<[1, 2, 3], [4, 5, 6]>, 0>>,
]
```

## 参考

无
