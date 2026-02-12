---
title: Concat
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/Concat/
---

## 题目

在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

例如：

```ts
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

## 解题思路

利用数组的展开语法即可。

## 答案

```ts
type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]
```

## 验证

```ts twoslash
// @errors: 2307
import type { Equal, Expect } from '@type-challenges/utils'
type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]
// ---cut---
const tuple = [1] as const

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

// @ts-expect-error
type error = Concat<null, undefined>
```

## 参考

> - [可变元组 Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
