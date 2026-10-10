---
url: /TypeGymnastics/medium/Filter/index.md
---
## 题目

Implement the type `Filter<T, Predicate>`. Here `T` is an array, and `Predicate` is a primitive type or a union of primitive types. The result should be an array that contains only those elements whose types are included in `Predicate`.

## 解题思路

待补充

## 答案

```ts
type Filter<T extends any[], P> = []
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]
```

## 参考

无
