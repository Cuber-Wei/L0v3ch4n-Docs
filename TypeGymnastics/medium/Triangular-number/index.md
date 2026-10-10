---
url: /TypeGymnastics/medium/Triangular-number/index.md
---
## 题目

Given a number N, find the Nth triangular number, i.e. `1 + 2 + 3 + ... + N`

## 解题思路

待补充

## 答案

```ts
type Triangular<N extends number> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>,
]
```

## 参考

无
