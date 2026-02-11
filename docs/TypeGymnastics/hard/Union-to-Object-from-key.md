---
title: Union to Object from key
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Union-to-Object-from-key/
---

## 题目

Find the object containing the key in the union type by the key. It  takes two parameters: a union of object types and a key name.


## 解题思路

待补充

## 答案

```ts
type UnionToObjectFromKey<Union, Key> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  foo: string
  common: boolean
}

type Bar = {
  bar: number
  common: boolean
}

type Other = {
  other: string
}

type cases = [
  Expect<Equal<UnionToObjectFromKey<Foo | Bar, 'foo'>, Foo>>,
  Expect<Equal<UnionToObjectFromKey<Foo | Bar, 'common'>, {
    foo: string
    common: boolean
  } | {
    bar: number
    common: boolean
  }>>,
  Expect<Equal<UnionToObjectFromKey<Foo | Bar | Other, 'common'>, {
    foo: string
    common: boolean
  } | {
    bar: number
    common: boolean
  }>>,
]

```

## 参考

无

