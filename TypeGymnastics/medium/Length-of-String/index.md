---
url: /TypeGymnastics/medium/Length-of-String/index.md
---
## 题目

计算字符串的长度，类似于 `String#length` 。

## 解题思路

待补充

## 答案

```ts
type LengthOfString<S extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
```

## 参考

无
