---
title: Count Element Number To Object
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Count-Element-Number-To-Object/
---

## 题目

通过实现一个``CountElementNumberToObject``方法，统计数组中相同元素的个数
~~~ts
type Simple1 = CountElementNumberToObject<[]> // return {}
type Simple2 = CountElementNumberToObject<[1,2,3,4,5]> 
/*
 return {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1
}
*/
type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]> 
/*
 return {
  1: 2,
  2: 2,
  3: 2,
  4: 1,
  5: 1
}
*/
~~~


## 解题思路

待补充

## 答案

```ts
type CountElementNumberToObject<T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
    1: 1
    2: 1
    3: 1
    4: 1
    5: 1
  } >>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
    1: 2
    2: 2
    3: 2
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
    1: 3
    2: 3
    3: 2
    4: 3
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
    0: 1
    1: 1
    2: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
    'a': 1
    'b': 1
    'c': 1
    'd': 1
  }>>,
]

```

## 参考

无

