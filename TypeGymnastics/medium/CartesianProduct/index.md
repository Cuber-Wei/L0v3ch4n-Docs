---
url: /TypeGymnastics/medium/CartesianProduct/index.md
---
## 题目

Given 2 sets (unions), return its Cartesian product in a set of tuples, e.g.

```ts
CartesianProduct<1 | 2, 'a' | 'b'>
// [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']
```

## 解题思路

待补充

## 答案

```ts
type CartesianProduct<T, U> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>>,
  Expect<Equal<CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>, [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']>>,
  Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a']>>,
  Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>,
]
```

## 参考

无
