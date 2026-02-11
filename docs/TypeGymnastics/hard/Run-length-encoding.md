---
title: Run-length encoding
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Run-length-encoding/
---

## 题目

Given a `string` sequence of a letters f.e. `AAABCCXXXXXXY`. Return run-length encoded string `3AB2C6XY`.
Also make a decoder for that string.


## 解题思路

待补充

## 答案

```ts
namespace RLE {
  export type Encode<S extends string> = any
  export type Decode<S extends string> = any
}

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'3AB2C6XY'>, 'AAABCCXXXXXXY'>>,
]

```

## 参考

无

