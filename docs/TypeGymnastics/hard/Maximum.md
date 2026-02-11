---
title: Maximum
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Maximum/
---

## 题目

### Description

Implement the type `Maximum`, which takes an input type `T`, and returns the maximum value in `T`.

If `T` is an empty array, it returns `never`. **Negative numbers** are not considered.

For example:

```ts
Maximum<[]> // never
Maximum<[0, 2, 1]> // 2
Maximum<[1, 20, 200, 150]> // 200
```

### Advanced

Can you implement type `Minimum` inspired by `Maximum`?


## 解题思路

待补充

## 答案

```ts
type Maximum<T extends any[]> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
]

```

## 参考

无

