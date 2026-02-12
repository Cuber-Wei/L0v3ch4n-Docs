---
title: ReplaceKeys
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/ReplaceKeys/
---

## 题目

Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing,
A type takes three arguments.

For example:

```ts
interface NodeA {
  type: 'A'
  name: string
  flag: number
}

interface NodeB {
  type: 'B'
  id: number
  flag: number
}

interface NodeC {
  type: 'C'
  name: string
  flag: number
}

type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<
  Nodes,
  'name' | 'flag',
  { name: number, flag: string }
> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
```

## 解题思路

待补充

## 答案

```ts
type ReplaceKeys<U, T, Y> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface NodeA {
  type: 'A'
  name: string
  flag: number
}

interface NodeB {
  type: 'B'
  id: number
  flag: number
}

interface NodeC {
  type: 'C'
  name: string
  flag: number
}

interface ReplacedNodeA {
  type: 'A'
  name: number
  flag: string
}

interface ReplacedNodeB {
  type: 'B'
  id: number
  flag: string
}

interface ReplacedNodeC {
  type: 'C'
  name: number
  flag: string
}

interface NoNameNodeA {
  type: 'A'
  flag: number
  name: never
}

interface NoNameNodeC {
  type: 'C'
  flag: number
  name: never
}

type Nodes = NodeA | NodeB | NodeC
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB

type cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number, flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,
]
```

## 参考

无
