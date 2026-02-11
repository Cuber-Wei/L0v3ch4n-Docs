---
title: Zip
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Zip/
---

## 题目

In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
```ts
type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
```


## 解题思路

待补充

## 答案

```ts
type Zip<T, U> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]

```

## 参考

无

