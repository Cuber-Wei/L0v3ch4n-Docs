---
title: AnyOf
icon: ph:check-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/AnyOf/
---

## 题目

在类型系统中实现类似于 Python 中 `any` 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 `true`，否则返回 `false`。如果数组为空，返回 `false`。

例如：

```ts
type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
```

## 解题思路

把所有为 `false` 的类型列举出来依次比较即可。

> `Record<string, never>` 常用于构建只包含属性名称而不包含属性值的对象，即 `{ [k: string]: never }`

## 答案

```ts
type Falsely = 0 | '' | false | undefined | null | [] | Record<string, never>
type AnyOf<T extends readonly any[]> = T[number] extends Falsely ? false : true
```

## 验证

```ts twoslash
import type { Equal, Expect } from '@type-challenges/utils'
type Falsely = 0 | '' | false | undefined | null | [] | Record<string, never>
type AnyOf<T extends readonly any[]> = T[number] extends Falsely ? false : true
// ---cut---
type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]
```

## 参考

无
