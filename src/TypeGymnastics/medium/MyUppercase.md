---
title: MyUppercase
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/MyUppercase/
---

## 题目

Implement `Uppercase<T>`, convert all letter to uppercase

## 解题思路

待补充

## 答案

```ts
type MyUppercase<T extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyUppercase<'a'>, 'A'>>,
  Expect<Equal<MyUppercase<'Z'>, 'Z'>>,
  Expect<Equal<MyUppercase<'A z h yy 😃cda\n\t  a   '>, 'A Z H YY 😃CDA\n\t  A   '>>,
]
```

## 参考

无
