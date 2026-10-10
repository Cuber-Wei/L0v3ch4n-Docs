---
url: /TypeGymnastics/medium/Without/index.md
---
## 题目

实现一个像 Lodash.without 函数一样的泛型 `Without<T, U>`，它接收数组类型的 T 和数字或数组类型的 U 为参数，会返回一个去除 U 中元素的数组 T。

例如：

```ts
type Res = Without<[1, 2], 1> // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]> // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]> // expected to be []
```

## 解题思路

待补充

## 答案

```ts
type Without<T, U> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]
```

## 参考

无
