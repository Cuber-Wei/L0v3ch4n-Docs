---
title: AllCombinations
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/AllCombinations/
---

## 题目

Implement type ```AllCombinations<S>``` that return all combinations of strings which use characters from ```S``` at most once.

For example:

```ts
type AllCombinations_ABC = AllCombinations<'ABC'>
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
```

## 解题思路

首先，看结果我们需要一个联合类型，那么我们可以通过分离联合类型并递归来实现。

先实现一个字符串转联合类型的工具类型 `StringToUnion<S>`，注意这里会返回空字符串 ''。

```ts twoslash
type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S
type Test = StringToUnion<'ABC'>
```

我们需要在递归中保存联合类型，因此需要添加一个参数 `T`，默认值为 `StringToUnion<S>`。我们还需要将联合类型分离，因而再添加一个参数 `U`，默认值为 `T`。

递归体内，我们需要每次将用到的 `U` 从 `T` 中删去，我们可以用 `Exclude` 类型：

```ts twoslash
type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S
// ---cut---
// @errors: 2589
type AllCombinations<
  S extends string,
  T extends string = StringToUnion<S>,
  U extends string = T,
> = U extends U ? `${U}${AllCombinations<S, Exclude<T, U>>}` : never
type Test = AllCombinations<'ABC'>
```

现在这段代码无论传什么都会返回 `never`，因为最后联合类型 `T` 中的所有类型都被删去了，但我们的逻辑是正确的，现在就保持这样。

接下来我们考虑空字符串 `''`，我们可以将 `''`，`'A'`，`'AB'` 这样的结果视作字母与多个空字符串传的组合，换言之，空字符串在排列组合中可以出现多次。

如何做到呢？如果 `U` 为空字符串 `''`，那么就不从 `T` 中将其删去，将它保留到一下次递归即可：

```ts twoslash
type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S
// ---cut---
// @errors: 2589
type AllCombinations<
  S extends string,
  T extends string = StringToUnion<S>,
  U extends string = T,
> = U extends U ? `${U}${AllCombinations<S, U extends '' ? T : Exclude<T, U>>}` : never
type Test = AllCombinations<'ABC'>
```

最后，我们需要想想怎么让我们的的类型跳出递归。现在，由于空字符串不会被从 `T` 中删去，这段代码会无限递归，而且，我们也无法通过 `T` 来判断是否应当跳出递归。那么我们还能通过什么来判断呢？

那就是 `S` 的长度。我们可以每次递归从 `S` 中删去一个字符，再在递归前对其进行非空判断即可。

## 答案

```ts
type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S
type AllCombinations<
  S extends string,
  T extends string = StringToUnion<S>,
  U extends string = T,
> = S extends `${infer F}${infer R}`
  ? U extends U
    ? `${U}${AllCombinations<R, U extends '' ? T : Exclude<T, U>>}`
    : never
  : ''
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S
type AllCombinations<
  S extends string,
  T extends string = StringToUnion<S>,
  U extends string = T,
> = S extends `${infer F}${infer R}`
  ? U extends U
    ? `${U}${AllCombinations<R, U extends '' ? T : Exclude<T, U>>}`
    : never
  : ''
// ---cut---
type cases = [
  Expect<Equal<AllCombinations<''>, ''>>,
  Expect<Equal<AllCombinations<'A'>, '' | 'A'>>,
  Expect<Equal<AllCombinations<'AB'>, '' | 'A' | 'B' | 'AB' | 'BA'>>,
  Expect<Equal<AllCombinations<'ABC'>, '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'>>,
  Expect<Equal<AllCombinations<'ABCD'>, '' | 'A' | 'B' | 'C' | 'D' | 'AB' | 'AC' | 'AD' | 'BA' | 'BC' | 'BD' | 'CA' | 'CB' | 'CD' | 'DA' | 'DB' | 'DC' | 'ABC' | 'ABD' | 'ACB' | 'ACD' | 'ADB' | 'ADC' | 'BAC' | 'BAD' | 'BCA' | 'BCD' | 'BDA' | 'BDC' | 'CAB' | 'CAD' | 'CBA' | 'CBD' | 'CDA' | 'CDB' | 'DAB' | 'DAC' | 'DBA' | 'DBC' | 'DCA' | 'DCB' | 'ABCD' | 'ABDC' | 'ACBD' | 'ACDB' | 'ADBC' | 'ADCB' | 'BACD' | 'BADC' | 'BCAD' | 'BCDA' | 'BDAC' | 'BDCA' | 'CABD' | 'CADB' | 'CBAD' | 'CBDA' | 'CDAB' | 'CDBA' | 'DABC' | 'DACB' | 'DBAC' | 'DBCA' | 'DCAB' | 'DCBA'>>,
]
```

## 参考

无
