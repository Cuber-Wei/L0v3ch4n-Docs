---
title: Assign
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/Assign/
---

## 题目

You have a target object and a source array of objects. You need to copy property from source to target, if it has the same property as the source, you should always keep the source property, and drop the target property. (Inspired by the `Object.assign` API)

### example

```ts
interface Target {
  a: 'a'
}

interface Origin1 {
  b: 'b'
}

// type Result = Assign<Target, [Origin1]>
interface Result {
  a: 'a'
  b: 'b'
}
```

```ts
interface Target {
  a: 'a'
  d: {
    hi: 'hi'
  }
}

interface Origin1 {
  a: 'a1'
  b: 'b'
}

interface Origin2 {
  b: 'b2'
  c: 'c'
}

interface Answer {
  a: 'a1'
  b: 'b2'
  c: 'c'
  d: {
    hi: 'hi'
  }
}
```

## 解题思路

待补充

## 答案

```ts
type Assign<T extends Record<string, unknown>, U> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

// case1
interface Case1Target {}

interface Case1Origin1 {
  a: 'a'
}

interface Case1Origin2 {
  b: 'b'
}

interface Case1Origin3 {
  c: 'c'
}

interface Case1Answer {
  a: 'a'
  b: 'b'
  c: 'c'
}

// case2
interface Case2Target {
  a: [1, 2, 3]
}

interface Case2Origin1 {
  a: {
    a1: 'a1'
  }
}

interface Case2Origin2 {
  b: [2, 3, 3]
}

interface Case2Answer {
  a: {
    a1: 'a1'
  }
  b: [2, 3, 3]
}

// case3

interface Case3Target {
  a: 1
  b: ['b']
}

interface Case3Origin1 {
  a: 2
  b: {
    b: 'b'
  }
  c: 'c1'
}

interface Case3Origin2 {
  a: 3
  c: 'c2'
  d: true
}

interface Case3Answer {
  a: 3
  b: {
    b: 'b'
  }
  c: 'c2'
  d: true
}

// case 4
interface Case4Target {
  a: 1
  b: ['b']
}

interface Case4Answer {
  a: 1
  b: ['b']
}

type cases = [
  Expect<Equal<Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>, Case1Answer>>,
  Expect<Equal<Assign<Case2Target, [Case2Origin1, Case2Origin2]>, Case2Answer>>,
  Expect<Equal<Assign<Case3Target, [Case3Origin1, Case3Origin2]>, Case3Answer>>,
  Expect<Equal<Assign<Case4Target, ['', 0]>, Case4Answer>>,
]
```

## 参考

无
