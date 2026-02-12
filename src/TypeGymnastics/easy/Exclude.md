---
title: Exclude
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/Exclude/
---

## 题目

实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。

> 从联合类型 `T` 中排除 `U` 中的类型，来构造一个新的类型。

例如：

```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

## 解题思路

判断 `T` 的类型是否 是 `U` 的类型进行取舍即可。

## 答案

```ts
type MyExclude<T, U> = T extends U ? never : T
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type MyExclude<T, U> = T extends U ? never : T
// ---cut---
type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
```

## 参考

> [分配条件类型 Distributive Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)
