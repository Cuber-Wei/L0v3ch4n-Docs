---
url: /TypeGymnastics/extreme/Get-Readonly-Keys/index.md
---
## 题目

实现泛型`GetReadonlyKeys<T>`，`GetReadonlyKeys<T>`返回由对象 T 所有只读属性的键组成的联合类型。

例如

```ts
interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
```

## 解题思路

待补充

## 答案

```ts
type GetReadonlyKeys<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
```

## 参考

无
