---
title: IsRequiredKey
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/IsRequiredKey/
---

## 题目

Implement a generic ```IsRequiredKey<T, K>```  that return whether ```K``` are required keys of ```T``` .

For example

```typescript
type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
```


## 解题思路

待补充

## 答案

```ts
type IsRequiredKey<T, K extends keyof T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b' | 'a'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: undefined }, 'b' | 'a'>, true>>,
]

```

## 参考

无

