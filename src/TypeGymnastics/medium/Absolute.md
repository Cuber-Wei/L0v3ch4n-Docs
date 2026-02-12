---
title: Absolute
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Absolute/
---

## 题目

实现一个接收string,number或bigInt类型参数的`Absolute`类型,返回一个正数字符串。

例如

```ts
type Test = -100
type Result = Absolute<Test> // expected to be "100"
```

## 解题思路

利用模板字符串会把数字转成十进制字符串的原理，匹配第一个字符是否为 `-`，取其数字部分即可。

## 答案

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer R}`
  ? (F extends '-' ? R : `${F}${R}`)
  : ''
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer R}`
  ? (F extends '-' ? R : `${F}${R}`)
  : ''
// ---cut---
type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
]
```

## 参考

- [模板字面量类型 Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
- [条件类型 Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [条件类型中的类型推断 Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
