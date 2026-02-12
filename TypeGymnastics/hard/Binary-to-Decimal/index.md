---
url: /TypeGymnastics/hard/Binary-to-Decimal/index.md
---
## 题目

Implement `BinaryToDecimal<S>` which takes an exact string type `S` consisting 0 and 1 and returns an exact number type corresponding with `S` when `S` is regarded as a binary.
You can assume that the length of `S` is equal to or less than 8 and `S` is not empty.

```ts
type Res1 = BinaryToDecimal<'10'> // expected to be 2
type Res2 = BinaryToDecimal<'0011'> // expected to be 3
```

## 解题思路

待补充

## 答案

```ts
type BinaryToDecimal<S extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]
```

## 参考

无
