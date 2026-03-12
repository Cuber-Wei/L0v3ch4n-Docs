---
url: /TypeGymnastics/medium/Combination-key-type/index.md
---
## 题目

1. 把多个修饰键两两组合，但不可以出现相同的修饰键组合。
2. 提供的 `ModifierKeys` 中，前面的值比后面的值高，即 `cmd ctrl` 是可以的，但 `ctrl cmd` 是不允许的。

## 解题思路

待补充

## 答案

```ts
// 实现 Combs
type Combs<T extends any[]> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
]
```

## 参考

无
