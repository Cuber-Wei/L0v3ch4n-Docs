---
title: SnakeCase
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/SnakeCase/
---

## 题目

Create a `SnakeCase<T>` generic that turns a string formatted in **camelCase** into a string formatted in **snake_case**.

A few examples:

```ts
type res1 = SnakeCase<"hello">; // => "hello"
type res2 = SnakeCase<"userName">; // => "user_name"
type res3 = SnakeCase<"getElementById">; // => "get_element_by_id"
```


## 解题思路

待补充

## 答案

```ts
type SnakeCase<T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<Equal<SnakeCase<'getElementById' | 'getElementByClassNames'>, 'get_element_by_id' | 'get_element_by_class_names'>>,
]

```

## 参考

无

