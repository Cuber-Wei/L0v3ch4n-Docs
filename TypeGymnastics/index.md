---
url: /TypeGymnastics/index.md
---
## 简介

[type-challenges](https://github.com/type-challenges/type-challenges) 是一个能够让你更好的
了解 `typescript` 类型系统的开源项目。

本笔记用于整理记录 L0v3ch4n 的类型体操学习过程。

根据 [type-challenges](https://github.com/type-challenges/type-challenges) 的题目难度，
分为了五个难度：

* `热身`  1 / 1
* `简单`  13 / 13
* `中等`  0 / 103
* `困难`  0 / 43
* `地狱`  0 / 14

## VSCode 插件

[VS Code 插件 **Type-Challenges**](https://marketplace.visualstudio.com/items?itemName=YRM.type-challenges){.read-more}

插件提供了开源项目的所有题目，以及测试用例，可以通过在 `VSCode` 中安装该插件，在 `VSCode` 中进行答题，
以获得良好的 编辑器类型检查帮助。

## 说明

在这个项目中，每一个挑战都将作为单独的文章进行编写。其内容包括:

* **题目**：提出的挑战
* **解题思路**
* **答案**
* **验证**：借助 [typescript twoslash](https://theme-plume.vuejs.press/guide/markdown/twoslash/) 的帮助，你可以在这里查看答案中每一处的类型，以及验证结果是否符合预期
* **参考**：列出这个挑战需要使用的 `typescript` 知识点

## 类型工具

在 验证 过程中，将会使用到以下的类型工具：

```ts
/**
 * 类型断言
 */
export type Expect<T extends true> = T
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T
export type IsTrue<T extends true> = T
export type IsFalse<T extends false> = T

/**
 * 比较两个类型是否完全相等
 */
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

/**
 * 判断类型是否为 `any`
 */
export type IsAny<T> = 0 extends 1 & T ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true

export type Debug<T> = { [K in keyof T]: T[K] }
export type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T

/**
 * 判断两个类型是否相似
 */
export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>

/**
 * 判断一个类型是否继承于另一个类型
 */
export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false
/**
 * 判断一个函数的参数是否符合预期
 */
export type ExpectValidArgs<
  FUNC extends (...args: any[]) => any,
  ARGS extends any[]
> = ARGS extends Parameters<FUNC> ? true : false

/**
 * 将联合类型转换为交叉类型
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never
```
