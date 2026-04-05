---
url: /TypeGymnastics/hard/String-to-Number/index.md
---
## 题目

Convert a string literal to a number, which behaves like `Number.parseInt`.

## 解题思路

待补充

## 答案

```ts
type ToNumber<S extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]
```

## 参考

无
