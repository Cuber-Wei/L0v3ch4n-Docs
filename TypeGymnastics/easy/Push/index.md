---
url: /TypeGymnastics/easy/Push/index.md
---
## 题目

在类型系统里实现通用的 `Array.push` 。

例如：

```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

## 解题思路

展开数组即可。

## 答案

```ts
type Push<T extends any[], U> = [...T, U]
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type Push<T extends any[], U> = [...T, U]
// ---cut---
type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]
```

## 参考

> * [可变元组 Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
> * [泛型 Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
> * [泛型约束 Generics Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
