---
url: /TypeGymnastics/medium/Public-Type/index.md
---
## 题目

Remove the key starting with `_` from given type `T`.

## 解题思路

待补充

## 答案

```ts
type PublicType<T extends object> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
]
```

## 参考

无
