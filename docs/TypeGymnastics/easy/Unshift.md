---
title: Unshift
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/Unshift/
---

## 题目

实现类型版本的 ```Array.unshift```。

例如：

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2]
```


## 解题思路

待补充

## 答案

```ts
type Unshift<T, U> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]

```

## 参考

无

