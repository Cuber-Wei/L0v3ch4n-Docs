---
url: /TypeGymnastics/medium/String-to-Union/index.md
---
## 题目

实现一个将接收到的String参数转换为一个字母Union的类型。

例如

```ts
type Test = '123'
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"
```

## 解题思路

待补充

## 答案

```ts
type StringToUnion<T extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
```

## 参考

无
