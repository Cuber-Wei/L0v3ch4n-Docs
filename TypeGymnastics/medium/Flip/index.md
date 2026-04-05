---
url: /TypeGymnastics/medium/Flip/index.md
---
## 题目

Implement the type of `just-flip-object`. Examples:

```typescript
Flip<{ a: 'x', b: 'y', c: 'z' }> // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }> // {1: 'a', 2: 'b', 3: 'c'}
Flip<{ a: false, b: true }> // {false: 'a', true: 'b'}
```

No need to support nested objects and values which cannot be object keys such as arrays

## 解题思路

待补充

## 答案

```ts
type Flip<T> = any
```

## 验证

```ts
import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi', true: 'bool' }, Flip<{ pi: 3.14, bool: true }>>>,
  Expect<Equal<{ val2: 'prop2', val: 'prop' }, Flip<{ prop: 'val', prop2: 'val2' }>>>,
]
```

## 参考

无
