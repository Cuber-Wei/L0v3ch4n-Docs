---
title: CountReversePairs
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/extreme/CountReversePairs/
---

## 题目

Given an integer array nums, return the number of reverse pairs in the array.

A reverse pair is a pair (i, j) where:

* 0 <= i < j < nums.length and
* nums[i] > nums[j].

## 解题思路

待补充

## 答案

```ts
type CountReversePairs<T extends number[]> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CountReversePairs<[5, 2, 6, 1]>, 4>>,
  Expect<Equal<CountReversePairs<[1, 2, 3, 4]>, 0>>,
  Expect<Equal<CountReversePairs<[-1, -1]>, 0>>,
  Expect<Equal<CountReversePairs<[-1]>, 0>>,
]
```

## 参考

无
