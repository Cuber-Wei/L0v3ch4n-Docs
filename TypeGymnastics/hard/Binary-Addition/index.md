---
url: /TypeGymnastics/hard/Binary-Addition/index.md
---
## 题目

Implement `BinaryAdd` to add two binary numbers together. The numbers should not be translated out of binary at any point.

Note the two inputs will always have the same length.

## 解题思路

待补充

## 答案

```ts
type Bit = 1 | 0

type BinaryAdd<A extends Bit[], B extends Bit[]> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<
    BinaryAdd<[1], [1]>,
    [1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[0], [1]>,
    [1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 0], [0, 0, 1]>,
    [1, 1, 1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>,
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 1, 1, 0, 0]>,
    [1, 0, 0, 1, 1, 1, 0, 1, 0]
  >>,
]
```

## 参考

无
