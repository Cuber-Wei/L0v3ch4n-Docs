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

### `__getattr__` 和 `__getattribute__`
用于获取对象的属性，`__getattr__` 为对象不存在这一属性时调用，`__getattribute__` 在尝试读取对象属性时都会调用。

::: python-repl title="获取属性"
```python
class A:
    def __init__(self) -> None:
        self.a = 123
        self.counter = 0

    def __getattr__(self, name):
        print(f"getting {name} via __getattr__")
        return None

    def __getattribute__(self, name: str):
        print(f"getting {name} via __getattribute__")
        if name == "a":
            self.counter += 1
        return super().__getattribute__(name) # 要使用 `super` 函数来实现默认表现

a = A()
print(a.a)
a.a
print(a.counter)
```
:::

### `__setattr__`

用于设置对象的属性值

::: python-repl title="设置属性值"
```python
class A:
    def __init__(self) -> None:
        self.data = "abc"
        self.counter = 0

    def __setattr__(self, name: str, value) -> None:
        print(f"set {name} with {value}")
        super().__setattr__(name, value)

a = A()
print(a.data)
```
:::

### `__delattr__`

在正常的对象产生和消亡的过程中，`__delattr__` 不会被调用。它会在尝试删除一个对象的属性时被调用。

::: python-repl editable
```python
class A:
    def __init__(self) -> None:
        self.data = "abc"

    def __delattr__(self, name: str) -> None:
        print(f"del {name}")

a = A()
# del a.data
```
:::

### `__dir__`

在正常的对象产生和消亡的过程中，`__dir__` 不会被调用。它会在尝试删除一个对象的属性时被调用。

::: python-repl editable
```python
class A:
    def __init__(self) -> None:
        self.data = "abc"

    def __dir__(self):
        lst = super().__dir__()
        return [el for el in lst if not el.startswith("_")]

a = A()
print(dir(a))
```
:::

### 描述器 Descriptor 相关
`__get__` 函数会在尝试读取 `a.x` 时被调用。下例中 `__get__` 函数的参数对应为：

- `self`：描述器本身，即 `x`。
- `instance`：实例化对象，即 `o`。
- `owner`：对象的类，即 `A`。

`__set__` 函数会在尝试设置 `a.x` 时被调用。

`__delete__` 函数会在尝试删除 `a.x` 时被调用。

::: python-repl
```python
class D:
    def __init__(self) -> None:
        self.val = 10

    def __get__(self, instance, owner=None):
        print(instance, owner)
        return self.val

    def __set__(self, instance, value):
        self.val = value

    def __delete__(self, instance):
        print("delete")

class A:
    x = D()

a = A()
a_ = A()
print(a.x)
print(a_.x)
a.x = 1
print(a.x)
print(a_.x)
del a.x
```
:::

> [!note]
> `__get__` 和 `__set__` 是类级的（Descriptor是 Class Level 的），故对一个实例化对象的操作会同步到该类实例化的所有对象。

## 0x03 用于构建类的魔术方法

:::: tabs
@tab `__init_subclass__`
在建立衍生类时被调用。
::: python-repl
```python
class Base:
    def __init_subclass__(cls, name) -> None:
        print(cls)
        cls.x = {}
        cls.name = name

class A(Base, name="AAA"):
    pass

print(A.x)
print(A.name)
```
:::

@tab `__set_name__`

当在类定义里构建该类的 `instance` 时被调用。
::: python-repl
```python
class D:
    def __set_name__(self, owner, name):
        print(owner, name)

class A:
    x = D()
```
:::

@tab PEP 560

> 相关介绍：[PEP 560](https://peps.python.org/pep-0560/)

`__class_getitem__` 在做特定 `Type Hint` 时调用。
::: python-repl
```python
class A:
    def __class_getitem__(cls, item):
        print(item)
        return "123"

print(A[0])

int_arr_type = list[int]
l1: int_arr_type = []
l2: int_arr_type = []
```
:::

`__mro_entries__` 辅助子类寻找基类。
::: python-repl
```python
class A:
    def __mro_entries__(self, bases):
        print(bases)
        return ()

class AA:
    def __mro_entries__(self, bases):
        print(bases)
        return (AA, )

class B(A(), AA()):
    pass

print(issubclass(B, A)) # expect False
print(issubclass(B, AA)) # expect True
```
:::

@tab Meta Class 相关

::: python-repl
```python
class Meta(type):
    @classmethod
    def __prepare__(metacls, name, bases, /, **kwds):
        # 用于准备要构建的 `class` 的命名空间
        print(name, bases, kwds)
        return {"x": 10}

    def __instancecheck__(self, instance):\
        # isinstance(instance, A)
        print("Instance Check")
        return isinstance(instance, int)

    def __subclasscheck__(self, subclass):
        # issubclass(subclass, A)
        print("Subclass Check")
        if subclass is int:
            return True
        return False

class A(metaclass=Meta):
    pass

print(A.x)
o = A()
print(isinstance(123, A))
print(issubclass(int, A))

```
:::

::::

## 0x04 用于运算的魔术方法

一般来说，所有的操作符对应魔法方法都有 `r` 版本和 `i` 版本，分别表示操作数在左侧的情况和结果就地更新的情况。

::: python-repl
```python
class Vector:
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y

    def __repr__(self) -> str:
        return f"Vector({self.x}, {self.y})"

    """ 二元操作符 """

    def __add__(self, other):
        # v1 + v2
        return Vector(self.x + other.x, self.y + other.y)

    def __iadd__(self, other):
        # v1 += v2
        self.x += other.x
        self.y += other.y
        return self

    def __sub__(self, other):
        # v1 - v2
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, other):
        # v1 * v2
        if isinstance(other, int):
            return Vector(self.x * other, self.y * other)
        elif isinstance(other, Vector):
            return self.x * other.x + self.y * other.y
        else:
            raise ValueError("Can not calculate!")

    def __rmul__(self, other):
        # other * self
        if isinstance(other, int):
            return Vector(self.x * other, self.y * other)
        elif isinstance(other, Vector):
            return self.x * other.x + self.y * other.y
        else:
            raise ValueError("Can not calculate!")

    def __matmul__(self, other):
        # v1 @ v2
        return self.x * other.x + self.y * other.y

    def __truediv__(self, other):
        # v1 / v2
        pass

    def __floordiv__(self, other):
        # v1 // v2
        pass

    def __mod__(self, other):
        # v1 % v2
        pass

    def __divmod__(self, other):
        # divmod(v1, v2)
        pass

    def __pow__(self, other, modulo=None):
        # pow(v1, v2, mod=None)
        # v1 ** v2
        pass

    def __lshift__(self, other):
        # v1 << v2
        pass

    def __rshift__(self, other):
        # v1 >> v2
        pass

    def __and__(self, other):
        # v1 & v2
        pass

    def __xor__(self, other):
        # v1 ^ v2
        pass

    def __or__(self, value):
        # v1 | v2
        pass

    """ 一元操作符 """

    def __neg__(self):
        # -v1
        return Vector(-self.x, -self.y)

    def __pos__(self):
        # +v1
        return Vector(self.x, self.y)

    def __abs__(self):
        # abs(v1)
        return Vector(abs(self.x), abs(self.y))

    def __invert__(self):
        # ~v1
        return Vector(self.y, self.x)

    """ 类型转换 """

    def __complex__(self):
        return complex(self.x, self.y)

    def __int__(self):
        return int(self.x)

    def __float__(self):
        return float(self.x)

    def __index__(self):
        # 作为索引时的表现
        return int(self.x)

    """ 取整 """

    def __round__(self, ndigits=None):
        # round()，四舍五入
        return int(self.x)

    def __trunc__(self):
        # math.trunc()，小数部分舍去，即向0取整
        return int(self.x)

    def __floor__(self):
        # math.floor()，向下向负无穷取整
        return int(self.x)

    def __ceil__(self):
        # math.ceil()，向上向正无穷取整
        return int(self.x)

v1 = Vector(1, 2)
v2 = Vector(4, 5)
print(v1 + v2)
print(v1 - v2)
print(v1 * 2)
# print(v1 * '1')
print(2 * v2)
print(v1 * v2)
```
:::

## 0x05 用于模拟的魔术方法

::: python-repl
```python
import time

class MultiplierAndTimer:
    def __init__(self, mul) -> None:
        self.mul = mul
        self.history = []

    def __call__(self, arg):
        # 模拟 Callable
        self.history.append(arg)
        return self.mul * arg

    """ 容器 """

    def __len__(self):
        # len()
        return len(self.history)

    def __length_hint__(self):
        # operator.length_hint()
        return len(self.history)

    def __getitem__(self, key):
        # o[key]
        return self.history[int(key)]

    def __setitem__(self, key, value):
        # o[key] = value
        try:
            self.history[int(key)] = value
        except IndexError:
            pass

    def __delitem__(self, key):
        # del o[key]
        self.history = self.history[0:key] + self.history[key+1:]

    def __reversed__(self):
        # reverse()
        return self.history[::-1]

    def __contains__(self, item):
        # in
        return item in self.history

    def __iter__(self):
        # 返回对象的 Iterator 迭代器
        return iter(self.history)

    def __missing__(self, key):
        # 寻找元素 key 时未找到时进行的处理
        return None

    """ 上下文 """

    def __enter__(self):
        # with 进入时
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        # with 后处理
        print(f"Time: {time.time() - self.start}")

o = MultiplierAndTimer(3)
print(o(4))
print(len(o))

with o:
    for _ in range(10000):
        __ = 1 + 1
```
:::

## 参考

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1b84y1e7hG)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1Mx4y1u7gG)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1vR4y1b7u4)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1zv4y147Ms)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1Jx4y1w7oJ)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1p24y137FN)
