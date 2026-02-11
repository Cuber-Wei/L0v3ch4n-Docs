---
title: Remove Index Signature
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Remove-Index-Signature/
---

## 题目

Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

For example:

```ts
type Foo = {
  [key: string]: any
  foo(): void
}

type A = RemoveIndexSignature<Foo> // expected { foo(): void }
```


## 解题思路

待补充

## 答案

```ts
type RemoveIndexSignature<T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void, 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void, baz: string }>>,
]

```

## 参考

无

