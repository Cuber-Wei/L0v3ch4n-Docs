---
title: 020 Magic Method魔术方法
createTime: 2026/03/12 10:02:05
permalink: /language/PythonAd/MagicMethods/
---

## 0xFF 前言

“魔术方法”在官方的文档里名为：Special Method。它们是 Python 提供的、让用户客制化一个类的方式。是定义在类中的方法，特点为方法名字前后都有两个下划线 `_`。

## 0x00 基础的魔术方法

:::: tabs
@tab `__new__`和`__init__`

这两个方法可以改变建立一个对象时候的行为。`__new__` 是从一个 `class` 建立一个 `object` 的过程，`__init__` 是得到 `object` 后，给这个 `object` 初始化的过程。

::: python-repl
```python
class A:
    def __new__(cls, x):
        print("__new__")
        return super().__new__(cls)

    def __init__(self, x) -> None:
        self.x = x
        print("__init__")

a = A(1)
# obj = __new__(A, 1)
# __init__(obj, 1)
```
:::

@tab `__del__`

`__del__` 方法可以粗略地理解为析构函数，定义当这个 `object` 被释放时要做的事情。

> [!note]
> `__del__` 方法和 `del` 关键字之间无直接联系，`del` 关键字的作用是将对象的引用计数减一，`__del__` 方法只在对象被释放时执行。

::: python-repl editable
```python
class A:
    def __del__(self):
        print("__del__")

a = A()
# 取消下行注释进行对比运行结果
# b = a
del a
print("finfish")
```
:::

@tab `__repr__`、`__str__`、`__format__`

这两个方法都是返回这个 `object` 的字符串表示。区别主要在于语义上的不同：

- `__str__` 返回人类更容易理解的字符串，注重可读性
- `__repr__` 返回更详细的信息

在两个方法都定义的情况下，`print()` 会使用 `__str__` 方法。

`__format__` 用于按照特定格式打印信息。

::: python-repl
```python
class A:
    def __repr__(self) -> str:
        return "<A repr>"

    def __str__(self) -> str:
        return "<A str>"

    def __format__(self, format_spec: str) -> str:
        if format_spec == "x":
            return "0xA"
        return "<A>"

print(repr(A()))
print(A())
print(f"{A()}")
print(f"{A():x}")
```
:::

@tab `__bytes__`

当尝试从对象建立 `bytes` 时调用。

::: python-repl
```python
class A:
    def __bytes__(self):
        print("__bytes__")
        return bytes([0, 1])

print(bytes(A()))
```
:::

::::

## 0x01 用于比较的魔术方法

::: python-repl
```python
class Date:
    def __init__(self, year: int, month: int, day: int) -> None:
        self.year = year
        self.month = month
        self.day = day

    def __eq__(self, value: object) -> bool:
        print("__eq__")
        if isinstance(value, Date):
            return (self.year == value.year and
                    self.month == value.month and
                    self.day == value.day)
        else:
            return False

    def __ne__(self, value: object) -> bool:
        # 未定义 `__ne__` 方法时，Python会调用 `__eq__` 方法并将结果取反
        print("__ne__")
        if isinstance(value, Date):
            return (self.year != value.year or
                    self.month != value.month or
                    self.day != value.day)
        else:
            return True

    def __gt__(self, other: "Date"):
        print("__gt__")
        if self.year > other.year:
            return True
        if self.year == other.year:
            if self.month > other.month:
                return True
            if self.month == other.month:
                return self.day > other.day
        return False

    def __lt__(self, other: "Date"):
        print("__lt__")
        if self.year < other.year:
            return True
        if self.year == other.year:
            if self.month < other.month:
                return True
            if self.month == other.month:
                return self.day <= other.day
        return False

    def __ge__(self, other: "Date"):
        print("__ge__")
        if self.year > other.year:
            return True
        if self.year == other.year:
            if self.month > other.month:
                return True
            if self.month == other.month:
                return self.day > other.day
        return False

    def __le__(self, other: "Date"):
        print("__le__")
        if self.year < other.year:
            return True
        if self.year == other.year:
            if self.month < other.month:
                return True
            if self.month == other.month:
                return self.day <= other.day
        return False

d1 = Date(2026, 3, 12)
d2 = Date(2026, 3, 20)

# d1.__eq__(d2)
print(d1 == d2)
# d1.__ne__(d2)
print(d1 != d2)
# d1.__gt__(d2)
print(d1 > d2)
# d1.__lt__(d2)
print(d1 < d2)
# d1.__ge__(d2)
print(d1 >= d2)
# d1.__le__(d2)
print(d1 <= d2)
```
:::

> [!info]
> - 等于和不等于默认通过 `is` 进行比较。
> - `x` 和 `y` 在做 `rich comparision` 时，若两者不是同一个类，调用的方法可能不符合符号的预期。
>   - 若 `y` 是 `x` 的衍生类，优先使用 `y` 的方法，否则优先使用 `x` 的方法。
>   - 大部分情况下优先使用左边的类的方法，若未定义方法则寻找右边类的方法。

### `__hash__`
`__hash__` 方法用于求对象的 hash 值，默认存在实现。但若定义了 `__eq__` 方法，默认的 `__hash__` 方法会被删去，因为需要保证两个相等的对象 hash 值相等。

官方建议采用 `hash()` 这一 BuiltIn 函数，将对象的关键属性组成tuple，返回这个tuple的hash值。

:::python-repl editable
```python
class Date:
    def __init__(self, year: int, month: int, day: int) -> None:
        self.year = year
        self.month = month
        self.day = day

    # def __eq__(self, value: object) -> bool:
    #     print("__eq__")
    #     if isinstance(value, Date):
    #         return (self.year == value.year and
    #                 self.month == value.month and
    #                 self.day == value.day)
    #     else:
    #         return False

    # def __hash__(self) -> int:
    #     return int(f"{self.year:0>4}{self.month:0>2}{self.day:0>2}")

    # def __hash__(self) -> int:
    # return hash((self.year,
    #     self.month,
    #     self.day))

d = Date(2026, 3, 12)
print(hash(d))
```
:::

### `__bool__`

当自定义对象作为条件判断时，默认会得到 `True`。若要修改结果，需重写 `__bool__` 方法。
::: python-repl
```python
class Date:
    def __init__(self, year: int, month: int, day: int) -> None:
        self.year = year
        self.month = month
        self.day = day

    def __bool__(self):
        print("__bool__")
        return self.year >= 1970

d = Date(2026, 3, 12)
print(bool(d))
if d:
    print("Hello!")
```
:::

## 0x02 属性相关的魔术方法

## 0x03 用于构建类的魔术方法

## 0x04 用于运算的魔术方法

## 0x05 用于模拟的魔术方法

## 参考

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1b84y1e7hG)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1Mx4y1u7gG)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1vR4y1b7u4)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1zv4y147Ms)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1Jx4y1w7oJ)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1p24y137FN)
