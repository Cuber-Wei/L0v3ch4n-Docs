---
title: Mutable Keys
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Mutable-Keys/
---

## 题目

Implement the advanced util type `MutableKeys<T>`, which picks all the mutable (not readonly) keys into a union.

For example:

```ts
type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// expected to be “bar”
```


## 解题思路

待补充

## 答案

```ts
type MutableKeys<T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MutableKeys<{ a: number, readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined, readonly b: undefined }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined, readonly b?: undefined, c: string, d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<MutableKeys<{}>, never>>,
]

```

## 参考

无

