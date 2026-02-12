---
url: /TypeGymnastics/easy/Unshift/index.md
---
## 题目

实现类型版本的 `Array.unshift`。

例如：

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2]
```

## 解题思路

待补充

## 答案

```ts
type Unshift<T extends any[], U> = [U, ...T]
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type Unshift<T extends any[], U> = [U, ...T]
// ---cut---
type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]
```

## 参考

> * [可变元组 Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
> * [泛型 Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
> * [泛型约束 Generics Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
