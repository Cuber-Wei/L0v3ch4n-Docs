---
url: /TypeGymnastics/hard/Capitalize-Nest-Object-Keys/index.md
---
## 题目

Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.

## 解题思路

待补充

## 答案

```ts
type CapitalizeNestObjectKeys<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface foo {
  foo: string
  bars: [{ foo: string }]
}

interface Foo {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]
```

## 参考

无
