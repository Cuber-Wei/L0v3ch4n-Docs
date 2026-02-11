---
title: Push
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/Push/
---

## 题目

在类型系统里实现通用的 ```Array.push``` 。

例如：

```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```


## 解题思路

待补充

## 答案

```ts
type Push<T, U> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

type errors = [
  // @ts-expect-error
  Expect<Equal<Push<number[], string>, string[]>>,
  // @ts-expect-error
  Expect<Equal<Push<string[], number>, [string, number]>>,
]

```

## 参考

无

