---
url: /TypeGymnastics/medium/ExtractToObject/index.md
---
## 题目

Implement a type that extract prop value to the interface. The type takes the two arguments. The output should be an object with the prop values.
Prop value is object.

For example

```ts
interface Test { id: '1', myProp: { foo: '2' } }
type Result = ExtractToObject<Test, 'myProp'> // expected to be { id: '1', foo: '2' }
```

## 解题思路

待补充

## 答案

```ts
type ExtractToObject<T, U> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface test1 { id: '1', myProp: { foo: '2' } }

interface testExpect1 {
  id: '1'
  foo: '2'
}

interface test2 {
  id: '1'
  prop1: { zoo: '2' }
  prop2: { foo: '4' }
}

interface testExpect2 {
  id: '1'
  prop1: { zoo: '2' }
  foo: '4'
}

interface test3 {
  prop1: { zoo: '2', a: 2, b: 4, c: 7 }
  prop2: { foo: '4', v: 2, d: 4, g: 7 }
  k: 289
}

interface testExpect3 {
  zoo: '2'
  a: 2
  b: 4
  c: 7
  prop2: { foo: '4', v: 2, d: 4, g: 7 }
  k: 289
}

interface test4 { id: '1', myProp: { foo: '2' } }

interface testExpect4 {
  id: '1'
  myProp: { foo: '2' }
}

type cases = [
  Expect<Equal<ExtractToObject<test1, 'myProp'>, testExpect1>>,
  Expect<Equal<ExtractToObject<test2, 'prop2'>, testExpect2>>,
  Expect<Equal<ExtractToObject<test3, 'prop1'>, testExpect3>>,
  // @ts-expect-error
  Expect<Equal<ExtractToObject<test4, 'prop4'>, testExpect4>>,
]
```

## 参考

无
