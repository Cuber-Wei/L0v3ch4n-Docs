---
url: /language/PythonAd/Appendix01/index.md
---
## 问题

众所周知，Python 的元组是只读的，那么可不可以通过自定义类的形式，使得我们能够修改元组中的元素内容？

## 解答

先定义下列代码，观察报错。

```python
class Point:
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y

test_tuple = (Point(1, 2), Point(3, 4))

def test1():
    test_tuple[0].x = -1

def test2():
    test_tuple[0] = Point(-1, -2) # [!code error]
```

通过 `Pylance` 进行检测发现 `line 12` 报错 `未在类型"tuple[Point, Point]"上定义"__setitem__"方法`。尝试运行代码可知 `test1` 操作可行， `test2` 操作不可行。

**故：我们可以利用自定义类的方式，做到修改元组中元素的值。**

## 原理

::: python-repl title="字节码展示"

```python
import dis
class Point:
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y

test_tuple = (Point(1, 2), Point(3, 4))

def test1():
    test_tuple[0].x = -1

def test2():
    test_tuple[0] = Point(-1, -2)

dis.dis(test1)
print("----------------------------------------------")
dis.dis(test2)
```

:::

通过对比两个操作的字节码，我们可以将问题聚焦于两个字节码（`BINARY_SUBSCR` 和 `STORE_SUBSCR`）。

### BINARY\_SUBSCR

实现：

```
key = STACK.pop()
container = STACK.pop()
STACK.append(container[key])
```

### STORE\_SUBSCR

实现：

```
key = STACK.pop()
container = STACK.pop()
value = STACK.pop()
container[key] = value
```

从字节码的实现层面可以知道，第一种方式会将新的值存储于对应变量中，第二种方式则是尝试将新的对象存回原元组中。而元组这一数据类型没有定义`__setitem__`魔法方法，不支持修改数据，这与 Pylance 中显示的报错一致。

## 参考

[`BINARY_SUBSCR` 字节码](https://docs.python.org/zh-cn/3.13/library/dis.html#opcode-BINARY_SUBSCR)

[`STORE_SUBSCR` 字节码](https://docs.python.org/zh-cn/3.13/library/dis.html#opcode-STORE_SUBSCR)
