---
title: Awaited
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/Awaited/
---

## 题目

假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 `Promise<T>` 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

例如：`Promise<ExampleType>`，请你返回 ExampleType 类型。

```ts
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```

> 这个挑战来自于 [@maciejsikora](https://github.com/maciejsikora) 的文章：[original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4)


## 解题思路

考虑到样例中不是只有 `Promise` 类型，其中有实现了 `then` 方法的对象，我们采用 `PromiseLise` 类型。

递归地对传入类型进行拆解，形式为 `PromiseLike<R>`，对 `R` 进一步判断是否需要继续拆解，若仍为 `PromiseLike` 类型则继续，否则返回 `R`。

## 答案

```ts
type MyAwaited<T> = T extends PromiseLike<infer R> 
? R extends PromiseLike<any> 
  ? MyAwaited<R> 
  : R 
: never

```

## 验证

```ts twoslash
// @errors: 2307
import type { Equal, Expect } from '@type-challenges/utils'
type MyAwaited<T> = T extends PromiseLike<infer R> ? R extends PromiseLike<any> ? MyAwaited<R> : R : never
// ---cut---
type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

```

## 参考

> - [条件类型 Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
> - [条件类型中的类型推断 Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
