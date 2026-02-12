---
url: /TypeGymnastics/medium/Fill/index.md
---
## 题目

`Fill`, a common JavaScript function, now let us implement it with types.
`Fill<T, N, Start?, End?>`, as you can see,`Fill` accepts four types of parameters, of which `T` and `N` are required parameters, and `Start` and `End` are optional parameters.
The requirements for these parameters are: `T` must be a `tuple`, `N` can be any type of value, `Start` and `End` must be integers greater than or equal to 0.

```ts
type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
```

In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

## 解题思路

待补充

## 答案

```ts
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]
```

## 参考

无
