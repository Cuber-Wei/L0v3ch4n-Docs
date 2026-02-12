---
title: GetMiddleElement
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/GetMiddleElement/
---

## 题目

通过实现一个 ``GetMiddleElement`` 方法，获取数组的中间元素，用数组表示
> 如果数组的长度为奇数，则返回中间一个元素
> 如果数组的长度为偶数，则返回中间两个元素
~~~ts
  type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>, // 返回 [3]
  type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // 返回 [3, 4]
~~~

## 解题思路

待补充

## 答案

```ts
type GetMiddleElement<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<Equal<GetMiddleElement<[() => number, '3', [3, 4], 5]>, ['3', [3, 4]]>>,
  Expect<Equal<GetMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>,
]
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>
```

## 参考

无
