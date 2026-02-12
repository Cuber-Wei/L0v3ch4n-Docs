---
title: OmitByType
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/OmitByType/
---

## 题目

From ```T```, pick a set of properties whose type are not assignable to ```U```.

For Example

```typescript
type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }
```

## 解题思路

待补充

## 答案

```ts
type OmitByType<T, U> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string, count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number, isReadonly: boolean, isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string, isReadonly: boolean, isEnable: boolean }>>,
]
```

## 参考

无
