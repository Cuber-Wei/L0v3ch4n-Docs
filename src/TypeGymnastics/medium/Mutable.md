---
title: Mutable
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Mutable/
---

## 题目

实现一个通用的类型 ```Mutable<T>```，使类型 `T` 的全部属性可变（非只读）。

例如：

```typescript
interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
```

## 解题思路

待补充

## 答案

```ts
type Mutable<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type errors = [
  // @ts-expect-error
  Mutable<'string'>,
  // @ts-expect-error
  Mutable<0>,
]
```

## 参考

无
