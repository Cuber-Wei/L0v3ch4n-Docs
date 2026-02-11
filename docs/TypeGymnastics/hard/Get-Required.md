---
title: Get Required
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Get-Required/
---

## 题目

实现高级工具类型 `GetRequired<T>`，该类型保留所有必需的属性

例如

```ts
type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
```


## 解题思路

待补充

## 答案

```ts
type GetRequired<T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]

```

## 参考

无

