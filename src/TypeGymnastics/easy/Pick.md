---
title: Pick
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/Pick/
---

## 题目

不使用 `Pick<T, K>` ，实现 TS 内置的 `Pick<T, K>` 的功能。

**从类型 `T` 中选出符合 `K` 的属性，构造一个新的类型**。

例如：

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

## 解题思路

通过 `keyof` 关键字获取 `T` 的键数组，再利用 `in` 关键字遍历键数组获取每个键。

## 答案

```ts
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
// ---cut---
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
```

## 参考

> - [查找类型 Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
> - [映射类型 Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
> - [索引访问类型 Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
