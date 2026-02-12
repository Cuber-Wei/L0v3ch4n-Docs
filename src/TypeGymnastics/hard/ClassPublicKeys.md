---
title: ClassPublicKeys
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/hard/ClassPublicKeys/
---

## 题目

Implement the generic `ClassPublicKeys<T>` which returns all public keys of a class.

For example:

```ts
class A {
  public str: string
  protected num: number
  private bool: boolean
  getNum() {
    return Math.random()
  }
}

type publicKeys = ClassPublicKeys<A> // 'str' | 'getNum'
```

## 解题思路

待补充

## 答案

```ts
type ClassPublicKeys = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }

  getNum() {
    return Math.random()
  }
}

type cases = [
  Expect<Equal<ClassPublicKeys<A>, 'str' | 'getNum'>>,
]
```

## 参考

无
