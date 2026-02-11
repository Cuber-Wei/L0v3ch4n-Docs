---
title: ObjectFromEntries
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/ObjectFromEntries/
---

## 题目

Implement the type version of ```Object.fromEntries```

For example:

```typescript
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type result = ObjectFromEntries<ModelEntries> // expected to be Model
```


## 解题思路

待补充

## 答案

```ts
type ObjectFromEntries<T> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
]

```

## 参考

无

