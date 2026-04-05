---
url: /TypeGymnastics/medium/Shift/index.md
---
## 题目

Implement the type version of `Array.shift`

For example

```typescript
type Result = Shift<[3, 2, 1]> // [2, 1]
```

## 解题思路

待补充

## 答案

```ts
type Shift<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]
```

## 参考

无
