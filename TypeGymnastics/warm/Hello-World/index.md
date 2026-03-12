---
url: /TypeGymnastics/warm/Hello-World/index.md
---
## 题目

Hello, World!

这个简单的提问希望让你可以快速上手 Type Challenges。在这里，我们使用了一些神奇的技巧让 TypeScript 通过自身的类型系统来实现自动判题。

在这个挑战中，你需要修改下方的代码使得测试通过（使其没有类型错误）。

```ts
// 期望是一个 string 类型
type HelloWorld = any

// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>
```

## 解题思路

显然，`HelloWorld` 即为 `string` 类型。

## 答案

```ts
type HelloWorld = string // expected to be a string
```

## 验证

```ts twoslash
import { Equal, Expect } from '@type-challenges/utils'
type HelloWorld = string
// ---cut---
type test = Expect<Equal<HelloWorld, string>>
```

## 参考

无
