---
url: /TypeGymnastics/medium/ToPrimitive/index.md
---
## 题目

// 将类型为字面类型（标签类型）的属性，转换为基本类型。

type PersonInfo = {
name: 'Tom',
age: 30,
married: false,
addr: {
home: '123456',
phone: '13111111111'
}
}

// 要求结果如下：
type PersonInfo = {
name: string,
age: number,
married: boolean,
addr: {
home: string,
phone: string
}
}

## 解题思路

待补充

## 答案

```ts
type ToPrimitive = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface PersonInfo {
  name: 'Tom'
  age: 30
  married: false
  addr: {
    home: '123456'
    phone: '13111111111'
  }
  hobbies: ['sing', 'dance']
  readonlyArr: readonly ['test']
  fn: () => any
}

interface ExpectedResult {
  name: string
  age: number
  married: boolean
  addr: {
    home: string
    phone: string
  }
  hobbies: [string, string]
  readonlyArr: readonly [string]
  fn: Function
}

type cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
]
```

## 参考

无
