---
title: Greater Than
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Greater-Than/
---

## 题目

In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

Negative numbers do not need to be considered.

For example

```ts
GreaterThan<2, 1> // should be true
GreaterThan<1, 1> // should be false
GreaterThan<10, 100> // should be false
GreaterThan<111, 11> // should be true
```

Good Luck!

## 解题思路

待补充

## 答案

```ts
type GreaterThan<T extends number, U extends number> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]
```

## 参考

无
