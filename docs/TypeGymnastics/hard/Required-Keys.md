---
title: Required Keys
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Required-Keys/
---

## 题目

实现高级工具类型 `RequiredKeys<T>`，该类型返回 T 中所有必需属性的键组成的一个联合类型。

例如

```ts
type Result = RequiredKeys<{ foo: number; bar?: string }>
// expected to be “foo”
```


## 解题思路

待补充

## 答案

```ts
type RequiredKeys<T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number, b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]

```

## 参考

无

