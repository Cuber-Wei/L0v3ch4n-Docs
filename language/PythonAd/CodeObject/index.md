---
url: /language/PythonAd/CodeObject/index.md
---
我们写的所有 Python 代码都被编译成了 [`CodeObject`](https://docs.python.org/zh-cn/3/library/inspect.html)。

将其属性进行分类：

1. `co_code`：存储这段代码的字节码（二进制形式）
2. metadata：辅助数据
   1. `co_name`：定义此代码对象的名称（一般为定义的函数名字）
   2. `co_filename`：创建此代码对象的文件的名称
   3. `co_lnotab`：	编码的行号到字节码索引的映射（二进制形式）
3. VM需要的数据
   1. `co_flags`：`CO_*` 标志的位图
   2. `co_stacksize`：所需的虚拟机栈空间
4. 输入参数数量相关（Python进行函数重载的基础）
   1. `co_argcount`：参数数量（不包括仅关键字参数、\* 或 \*\* 参数）
   2. `co_posonlyargcount`：仅限位置参数的数量
   3. `co_kwonlyargcount`：	仅限关键字参数的数量（不包括 \*\* 参数）

> \[!note]
>
> 参数类型小解：
>
> Python 的函数定义形式中，`/` 和 `*` 分别作为划定参数的 `Positional Only` 和 `Keyword Only` 的分界符。在 `/` 之前的都为 `Positional Only` args ，`*` 之后的都为 `Keyword Only` args。`/` 和 `*`  本身不作为参数。
> :::: tabs
>
> @tab test1
> ::: python-repl title="测试参数数量"
>
> ```python
> def f(a, b=3, *args, **kwargs):
>     pass
> code = f.__code__
>
> print(code.co_argcount)
> print(code.co_posonlyargcount)
> print(code.co_kwonlyargcount)
> ```
>
> :::
>
> @tab test2
> ::: python-repl title="测试参数数量"
>
> ```python
> def f(a, b=3, /, *args, **kwargs):
>     pass
> code = f.__code__
>
> print(code.co_argcount)
> print(code.co_posonlyargcount)
> print(code.co_kwonlyargcount)
> ```
>
> @tab test3
> ::: python-repl title="测试参数数量"
>
> ```python
> def f(a, *, b=3, **kwargs):
>     pass
> code = f.__code__
>
> print(code.co_argcount)
> print(code.co_posonlyargcount)
> print(code.co_kwonlyargcount)
> ```
>
> @tab test4
> ::: python-repl title="测试参数数量"
>
> ```python
> def f(a, b=3, /, c=5, *, d=3, **kwargs):
>     pass
> code = f.__code__
>
> print(code.co_argcount)
> print(code.co_posonlyargcount)
> print(code.co_kwonlyargcount)
> ```
>
> ::::

5. 字节码设计相关，实现以 `O(1)` 的时间来获取名字
   1. `co_nlocals`：局部变量的数量
   2. `co_varnames`：参数名和局部变量的元组
   3. `co_names`：除参数和函数局部变量之外的名称元组
   4. `co_cellvars`：单元变量名称的元组(通过包含作用域引用)，用于完成闭包
   5. `co_freevars`：自由变量的名字组成的元组（通过函数闭包引用），用于完成闭包
   6. `co_consts`：字节码中使用的常量元组

:::: tabs
@tab 局部变量
::: python-repl title="局部变量演示"

```python
import dis
def f(a):
    b = a
    c = a.attr
    d = a.method()
    return b

code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")

```

:::

@tab 闭包
::: python-repl title="闭包演示"

```python
import dis
def g(a):
    d = {}
    def f():
        d["a"] = 1
        pass
    return f

code = g.__code__
dis.dis(g)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
```

:::

@tab 常量
::: python-repl title="常量演示"

```python
def f(a):
    a = 1
    b = "abcabc"
    return b * a

code = f.__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
```

:::

::::

## 参考

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV12i4y1C7MH)
