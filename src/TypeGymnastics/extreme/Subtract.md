---
title: Subtract
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/extreme/Subtract/
---

## 题目

Implement the type Subtraction that is ` - ` in Javascript by using BuildTuple.

If the minuend is less than the subtrahend, it should be `never`.

It's a simple version.

For example

```ts
Subtract<2, 1> // expect to be 1
Subtract<1, 2> // expect to be never
```

## 解题思路

待补充

## 答案

```ts
// M => minuend, S => subtrahend
type Subtract<M extends number, S extends number> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subtract<1, 1>, 0>>,
  Expect<Equal<Subtract<2, 1>, 1>>,
  Expect<Equal<Subtract<1, 2>, never>>,
  // @ts-expect-error
  Expect<Equal<Subtract<1000, 999>, 1>>,
]
```

## 参考

无
