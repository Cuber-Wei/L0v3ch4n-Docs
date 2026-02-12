---
title: Dynamic Route
icon: ph:minus-bold
createTime: 2026/02/11 13:52:35
permalink: /TypeGymnastics/extreme/Dynamic-Route/
---

## 题目

Given below routes, infer its dynamic params.
| Route                          | Params Type Definition                                                                                     |
|--------------------------------|------------------------------------------------------------------------------------------------------------|
| `/blog/[slug]/page.js`         | `{ slug: string }`                                                                                         |
| `/shop/[...slug]/page.js`      | `{ slug: string[] }`                                                                                       |
| `/shop/[[...slug]]/page.js`    | `{ slug?: string[] }`                                                                                      |
| `/[categoryId]/[itemId]/page.js` | `{ categoryId: string, itemId: string }`                                                                 |
| `/app/[...foo]/[...bar]`       | `never` - It's ambiguous as we cannot decide if `b` on `/app/a/b/c` is belongs to `foo` or `bar`.          |
| `/[[...foo]]/[slug]/[...bar]`  | `never`                                                                                                    |
| `/[first]/[[...foo]]/stub/[...bar]/[last]` | `{ first: string, foo?: string[], bar: string[], last: string }`                               |

## 解题思路

待补充

## 答案

```ts
type DynamicRoute<T extends string> = any
```

## 验证

```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DynamicRoute<'/shop'>, {}>>,
  Expect<Equal<DynamicRoute<'/shop/[]'>, {}>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]'>, { slug: string }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/'>, { slug: string }>>,
  Expect<
    Equal<DynamicRoute<'/shop/[slug]/[foo]'>, { slug: string, foo: string }>
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[foo]'>,
      { slug: string, foo: string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[foo]'>,
      { slug: string, foo: string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[...foo]'>,
      { slug: string, foo: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]'>,
      { slug: string, foo?: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[]'>,
      { slug: string, foo?: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[...]'>,
      { 'slug': string, 'foo'?: string[], '...': string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[...]/[]index.html'>,
      { 'slug': string, 'foo'?: string[], '...': string }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[...]/[...]index.html'>,
      { 'slug': string, 'foo'?: string[], '...': string }
    >
  >,
  Expect<Equal<DynamicRoute<'/[slug]/[[...foo]]/[...bar]'>, never>>,
  Expect<Equal<DynamicRoute<'/[[...foo]]/[slug]/[...bar]'>, never>>,
  Expect<Equal<DynamicRoute<'/[[...foo]]/[...bar]/static'>, never>>,
  Expect<
    Equal<
      DynamicRoute<'[[...foo]]/stub/[...bar]'>,
      { foo?: string[], bar: string[] }
    >
  >,
  Expect<
    Equal<
      DynamicRoute<'[first]/[[...foo]]/stub/[...bar]/[last]'>,
      { first: string, foo?: string[], bar: string[], last: string }
    >
  >,
]
```

## 参考

无
