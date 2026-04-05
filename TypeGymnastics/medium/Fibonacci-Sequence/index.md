---
url: /TypeGymnastics/medium/Fibonacci-Sequence/index.md
---
## 题目

Implement a generic Fibonacci\<T> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

The sequence starts:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

For example

```js
type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
```

## 解题思路

待补充

## 答案

```ts
type Fibonacci<T extends number> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]
```

## 参考

无
