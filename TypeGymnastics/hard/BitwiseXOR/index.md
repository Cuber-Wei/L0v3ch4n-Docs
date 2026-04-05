---
url: /TypeGymnastics/hard/BitwiseXOR/index.md
---
## 题目

Implement `BitwiseXOR<S1,S2>` which takes two binary string literal type and returns a binary string that represents the bitwise XOR of S1 and S2

For example:

```typescript
BitwiseXOR<'0', '1'> // expect '1'
BitwiseXOR<'1', '1'> // expect '0'
BitwiseXOR<'10', '1'> // expect '11'
```

## 解题思路

待补充

## 答案

```ts
type BitwiseXOR<S1 extends string, S2 extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BitwiseXOR<'0', '1'>, '1'>>,
  Expect<Equal<BitwiseXOR<'1', '1'>, '0'>>,
  Expect<Equal<BitwiseXOR<'10', '1'>, '11'>>,
  Expect<Equal<BitwiseXOR<'110', '1'>, '111'>>,
  Expect<Equal<BitwiseXOR<'101', '11'>, '110'>>,
]
```

## 参考

无
