---
title: TS类型体操技巧
createTime: 2026/02/11 19:27:22
permalink: /Misc/TS-tricks/
---
## 1. keyof 和 in
### keyof

`keyof` 关键字用于提取类型中的键的联合类型。

```ts twoslash
type R = keyof {
  a: 1
  b: 2
  c: 3
}
```

### in

`in` 关键字用于遍历联合类型。

```ts twoslash
type R = {
  [key in ('a' | 'b' | 'c')]: true
}
```

### in + keyof

`in + keyof` 组合可以进行对类型中键的遍历。

```ts twoslash
interface R {
  a: 1
  b: 2
  c: 3
}
type RR = {
  [key in keyof R]: true
}
```

## 2. extends

`extends` 关键字有三种使用方法。

### 1）类的继承

```ts twoslash
class Animal {
  eat(){ console.log(1) }
}

class Dog extends Animal {
  sleep(){ console.log(2) }
}

let dahuang = new Dog();
// @noErrors
dahuang.
//      ^|

type R = Dog extends Animal ? true : false;
```

### 2）类型约束

`extends` 关键字可以对类型进行约束。

```ts twoslash
function func<T extends { length: number }>(a: T, b: T): T {
  if (a.length >= b.length)
    return a
  else return b
}
let test1 = func([1], [1, 2])
// @errors: 2345
let test2 = func([1], 1)
```

### 3）类型判断

`extends` 关键字配合 ` ? : ` 三目运算符使用，可以进行条件判断。`A extends B ? a : b` 意为判断 `A` 是否为 `B` 的子类型，若为真则返回 `a`，否则`b`。

```ts twoslash
type R = 1 extends number ? true : false
type RR = symbol extends string ? true : false
```

## 3. infer

`infer` 关键字用于设置变量。

```ts twoslash
type R<T extends readonly any[]> = T extends [infer First, ...any] ? First : never
type RR = R<[1, 2, 3, 4]>
```

## 4. 数组/元组的遍历

`T[number]` 即可实现对数组/元组类型的遍历，获取其内容的联合类型。

```ts twoslash
type Test<T extends readonly (number | string | symbol)[]> = {
  [key in T[number]]: T[number]
}
type R = Test<[1, 2, '3', symbol]>
```
