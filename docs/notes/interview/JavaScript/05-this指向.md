---
title: 函数中的this指向
createTime: 2025/03/13 10:24:35
permalink: /interview/thisInFunction/
---

| 调用方式              | 示例                 | 函数中的this指向 |
|:------------------|:-------------------|:-----------|
| 通过new调用           | `new method()`     | 新对象        |
| 直接调用              | `method()`         | 全局对象       |
| 通过对象调用            | `obj.method()`     | 前面的对象      |
| call, apply, bind | `method.call(ctx)` | 第一个参数      |

> [!note]
> 关于全局对象：
>
>   在浏览器环境中指向`window`
>
>   在node环境中指向`global`
>
> 关于箭头函数：
>
>   箭头函数是基于闭包的