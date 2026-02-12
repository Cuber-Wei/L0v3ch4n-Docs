---
title: If
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/If/
---

## 题目

实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。

例如：

```ts
type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

## 解题思路

`extends` 关键字配合 ` ? : ` 三目运算符使用，可以进行条件判断。`A extends B ? a : b` 意为判断 `A` 是否为 `B` 的子类型，若为真则返回 `a`，否则`b`。

## 答案

```ts
type If<C extends boolean, T, F> = C extends true ? T : F
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type If<C extends boolean, T, F> = C extends true ? T : F
// ---cut---
type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
```

## 参考

> - [条件类型 Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
