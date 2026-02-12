---
title: Union to Intersection
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Union-to-Intersection/
---

## 题目

实现高级工具类型 `UnionToIntersection<U>`

例如

```ts
type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
```

## 解题思路

待补充

## 答案

```ts
type UnionToIntersection<U> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]
```

## 参考

无
