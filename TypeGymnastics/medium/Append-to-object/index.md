---
url: /TypeGymnastics/medium/Append-to-object/index.md
---
## 题目

实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

例如:

```ts
interface Test { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
```

## 解题思路

待补充

## 答案

```ts
type AppendToObject<T, U, V> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface test1 {
  key: 'cat'
  value: 'green'
}

interface testExpect1 {
  key: 'cat'
  value: 'green'
  home: boolean
}

interface test2 {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

interface testExpect2 {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

interface test3 {
  key: 'cow'
  value: 'yellow'
  sun: false
}

interface testExpect3 {
  key: 'cow'
  value: 'yellow'
  sun: false
  moon: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'moon', false | undefined>, testExpect3>>,
]
```

## 参考

无
