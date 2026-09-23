---
url: /TypeGymnastics/medium/Deep-Omit/index.md
---
## 题目

Implement a type`DeepOmit`, Like Utility types [Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys), A type takes two arguments.

For example:

```ts
interface obj {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type test1 = DeepOmit<obj, 'person'> // {}
type test2 = DeepOmit<obj, 'person.name'> // { person: { age: { value: number } } }
type test3 = DeepOmit<obj, 'name'> // { person: { name: string; age: { value: number } } }
type test4 = DeepOmit<obj, 'person.age.value'> // { person: { name: string; age: {} } }
```

## 解题思路

待补充

## 答案

```ts
type DeepOmit = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

interface obj {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string, age: {} } }>>,
]
```

## 参考

无
