---
url: /TypeGymnastics/easy/First-of-Array/index.md
---
## 题目

实现一个`First<T>`泛型，它接受一个数组`T`并返回它的第一个元素的类型。

例如：

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3
```

## 解题思路

1. `infer R` 可以定义类似变量的概念，以形式进行匹配。
2. `T extends R ? ... : ...` 可作为类似三元表达式的效果，用于判断 `T` 是否为 `R` 的子集。

## 答案

```ts
type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never
// ---cut---
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]
```

## 参考

> * [索引访问类型 Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
> * [条件类型 Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
