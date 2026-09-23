---
url: /TypeGymnastics/hard/Camelize/index.md
---
## 题目

实现 Camelize 类型: 将对象属性名从 蛇形命名(下划线命名) 转换为 小驼峰命名

```ts
Camelize<{
  some_prop: string
  prop: { another_prop: string }
  array: [{ snake_case: string }]
}>

// expected to be
// {
//   someProp: string,
//   prop: { anotherProp: string },
//   array: [{ snakeCase: string }]
// }
```

## 解题思路

待补充

## 答案

```ts
type Camelize<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<
    Camelize<{
      some_prop: string
      prop: { another_prop: string }
      array: [
        { snake_case: string },
        { another_element: { yet_another_prop: string } },
        { yet_another_element: string },
      ]
    }>,
    {
      someProp: string
      prop: { anotherProp: string }
      array: [
        { snakeCase: string },
        { anotherElement: { yetAnotherProp: string } },
        { yetAnotherElement: string },
      ]
    }
  >>,
]
```

## 参考

无
