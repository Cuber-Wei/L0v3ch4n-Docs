---
url: /TypeGymnastics/hard/CamelCase/index.md
---
## 题目

实现 `CamelCase<T>` ，将 `snake_case` 类型的表示的字符串转换为 `camelCase` 的表示方式。

例如

```ts
type camelCase1 = CamelCase<'hello_world_with_types'> // 预期为 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // 期望与前一个相同
```

## 解题思路

待补充

## 答案

```ts
type CamelCase<S extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
  Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
  Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
  Expect<Equal<CamelCase<'foo_bar__'>, 'fooBar__'>>,
  Expect<Equal<CamelCase<'foo_bar_$'>, 'fooBar_$'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]
```

## 参考

无
