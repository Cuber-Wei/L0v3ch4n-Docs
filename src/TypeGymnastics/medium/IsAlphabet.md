---
title: IsAlphabet
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/IsAlphabet/
---

## 题目

Determine if the given letter is an alphabet.

## 解题思路

待补充

## 答案

```ts
type IsAlphabet<S extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'z'>, true>>,
  Expect<Equal<IsAlphabet<'9'>, false>>,
  Expect<Equal<IsAlphabet<'!'>, false>>,
  Expect<Equal<IsAlphabet<'😂'>, false>>,
  Expect<Equal<IsAlphabet<''>, false>>,
]
```

## 参考

无
