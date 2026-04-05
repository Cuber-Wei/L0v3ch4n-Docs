---
url: /TypeGymnastics/medium/Merge/index.md
---
## 题目

将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

例如

```ts
interface foo {
  name: string
  age: string
}

interface coo {
  age: number
  sex: string
}

type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
```

## 解题思路

待补充

## 答案

```ts
type Merge<F, S> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface Foo {
  a: number
  b: string
}
interface Bar {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]
```

## 参考

无
