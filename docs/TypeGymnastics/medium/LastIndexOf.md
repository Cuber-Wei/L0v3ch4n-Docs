---
title: LastIndexOf
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/LastIndexOf/
---

## 题目

实现类型版本的 ```Array.lastIndexOf```, ```LastIndexOf<T, U>```  接受数组 ```T```, any 类型 ```U```, 如果 ```U``` 存在于 ```T``` 中, 返回 ```U``` 在数组 ```T``` 中最后一个位置的索引, 不存在则返回 ```-1```

For example:

```typescript
type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
```


## 解题思路

待补充

## 答案

```ts
type LastIndexOf<T, U> = any

```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]

```

## 参考

无

