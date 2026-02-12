---
title: Replace Union
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Replace-Union/
---

## 题目

Given an `union of types` and `array of type pairs` to replace (`[[string, number], [Date, null]]`), return a new union replaced with the `type pairs`.

## 解题思路

待补充

## 答案

```ts
type UnionReplace<T, U extends [any, any][]> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null], [Date, Function]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>, undefined | string | object>>,
]
```

## 参考

无
