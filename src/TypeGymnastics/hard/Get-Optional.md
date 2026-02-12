---
title: Get Optional
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Get-Optional/
---

## 题目

实现高级工具类型 `GetOptional<T>`，该类型保留所有可选属性

例如

```ts
type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
```

## 解题思路

待补充

## 答案

```ts
type GetOptional<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]
```

## 参考

无
