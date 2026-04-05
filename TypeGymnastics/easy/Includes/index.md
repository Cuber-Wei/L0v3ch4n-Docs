---
url: /TypeGymnastics/easy/Includes/index.md
---
## 题目

在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。

例如：

```ts
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
```

## 解题思路

第一次尝试是这样的：

```ts
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? U extends First
    ? true
    : Includes<Rest, U>
  : false
```

但是存在一个问题，即 `{}` 和 `{ 1, 2 }` 是同类型的，并非相等。故需要引入 `Equal` 进行相等判断。

```ts
// 利用函数进行延迟求值
type MyEqual<T, U> = (
  <P>() => P extends T ? 1 : 2
) extends (
  <P>() => P extends U ? 1 : 2
) ? true : false
```

## 答案

```ts
type MyEqual<T, U> = (
  <P>() => P extends T ? 1 : 2
) extends (
  <P>() => P extends U ? 1 : 2
) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? MyEqual<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type MyEqual<T, U> = (
  <P>() => P extends T ? 1 : 2
) extends (
  <P>() => P extends U ? 1 : 2
) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? MyEqual<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false
// ---cut---
type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]
```

## 参考

> * [泛型 Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
> * [泛型约束 Generics Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
> * [条件类型 Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
> * [条件类型分支 Distributive Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)
> * [条件类型中的类型推断 Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
