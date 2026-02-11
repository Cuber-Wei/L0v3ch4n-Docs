---
title: Tuple Filter
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Tuple-Filter/
---

## 题目

Implement a type `FilterOut<T, F>` that filters out items of the given type `F` from the tuple `T`.

For example,
```ts
type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
```


## 解题思路

待补充

## 答案

```ts
type FilterOut<T extends any[], F> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
]

```

## 参考

无

