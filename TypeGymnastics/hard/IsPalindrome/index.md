---
url: /TypeGymnastics/hard/IsPalindrome/index.md
---
## 题目

Implement type `IsPalindrome<T>` to check whether  a string or number is palindrome.

For example:

```typescript
IsPalindrome<'abc'> // false
IsPalindrome<121> // true
```

## 解题思路

待补充

## 答案

```ts
type IsPalindrome<T> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abba'>, true>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<2332>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]
```

## 参考

无
