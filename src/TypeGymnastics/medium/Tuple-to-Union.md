---
title: Tuple to Union
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Tuple-to-Union/
---

## 题目

实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

例如

```ts
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

## 解题思路

待补充

## 答案

```ts
type TupleToUnion<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
```

## 参考

无
