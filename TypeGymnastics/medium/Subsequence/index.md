---
url: /TypeGymnastics/medium/Subsequence/index.md
---
## 题目

Given an array of unique elements, return all possible subsequences.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

For example:

```typescript
type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
```

## 解题思路

待补充

## 答案

```ts
type Subsequence<T extends any[]> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>,
  Expect<Equal<Subsequence<[1, 2, 3, 4, 5]>, []
  | [1] | [2] | [3] | [4] | [5]
  | [1, 2] | [1, 3] | [1, 4] | [1, 5] | [2, 3] | [2, 4] | [2, 5] | [3, 4] | [3, 5] | [4, 5]
  | [1, 2, 3] | [1, 2, 4] | [1, 2, 5] | [1, 3, 4] | [1, 3, 5] | [1, 4, 5] | [2, 3, 4] | [2, 3, 5] | [2, 4, 5] | [3, 4, 5]
  | [1, 2, 3, 4] | [1, 2, 3, 5] | [1, 2, 4, 5] | [1, 3, 4, 5] | [2, 3, 4, 5]
  | [1, 2, 3, 4, 5]>>,
  Expect<Equal<Subsequence<['a', 'b', 'c']>, []
  | ['a'] | ['b'] | ['c']
  | ['a', 'b'] | ['a', 'c'] | ['b', 'c']
  | ['a', 'b', 'c']>>,
  Expect<Equal<Subsequence<['x', 'y']>, []
  | ['x'] | ['y']
  | ['x', 'y']>>,
]
```

## 参考

无
