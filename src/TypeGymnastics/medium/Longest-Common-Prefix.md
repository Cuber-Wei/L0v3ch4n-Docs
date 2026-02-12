---
title: Longest Common Prefix
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/medium/Longest-Common-Prefix/
---

## 题目

### Longest Common Prefix

Write a type, `LongestCommonPrefix` that returns the longest common prefix string amongst a tuple of strings.

If there is no common prefix, return an empty string `""`.

```ts
type Common = LongestCommonPrefix<['flower', 'flow', 'flight']>
//   ?^ "fl"

type Uncommon = LongestCommonPrefix<['dog', 'racecar', 'race']>
//   ?^ ""
```
Inspired by [LeetCode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

## 解题思路

待补充

## 答案

```ts
type LongestCommonPrefix<T extends string[], P extends string = ''> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LongestCommonPrefix<['flower', 'flow', 'flight']>, 'fl'>>,
  Expect<Equal<LongestCommonPrefix<['dog', 'racecar', 'race']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', '', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', '', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', 'a', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', '', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', 'a', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', '', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', 'a', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', 'a', 'a']>, 'a'>>,
  Expect<Equal<LongestCommonPrefix<['abc', 'abcd', 'abcde']>, 'abc'>>,
  Expect<Equal<LongestCommonPrefix<[' ', ' ', ' ']>, ' '>>,
  Expect<Equal<LongestCommonPrefix<['type-challenges', 'type-hero', 'typescript']>, 'type'>>,
]
```

## 参考

无
