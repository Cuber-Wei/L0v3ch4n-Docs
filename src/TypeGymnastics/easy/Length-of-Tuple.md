---
title: Length of Tuple
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/easy/Length-of-Tuple/
---

## 题目

创建一个`Length`泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

例如：

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

## 解题思路

获取元组的 `length` 属性即可。

注意若要获取 `length` 属性，需要限定泛型的类型。

## 答案

```ts
type Length<T extends readonly any[]> = T['length']
```

## 验证

```ts twoslash
// @errors: 2307
import type { Equal, Expect } from '@type-challenges/utils'
type Length<T extends readonly any[]> = T['length']
// ---cut---
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]
```

## 参考

> - [索引访问类型 Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
