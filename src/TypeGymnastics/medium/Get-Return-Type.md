---
title: Get Return Type
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Get-Return-Type/
---

## 题目

不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。

例如：

```ts
function fn(v: boolean) {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```

## 解题思路

匹配函数模式即可。`(...args: any) => infer R`

## 答案

```ts
type MyReturnType<T> = T extends (...args: any) => infer U ? U : never
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type MyReturnType<T> = T extends (...args: any) => infer U ? U : never
// ---cut---
type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

interface ComplexObject {
  a: [12, 'foo']
  bar: 'hello'
  prev: () => number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2
```

## 参考

无
