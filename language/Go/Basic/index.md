---
url: /language/Go/Basic/index.md
---
## 程序结构

一个最简单的 Go 程序如下：

```go
package main  // 声明包名，可执行程序必须在 main 包下

import "fmt"  // 导入标准库的格式化输出包

func main() { // main 函数是程序执行的入口
    fmt.Println("Hello, World!")
}
```

* **包管理**：Go 通过包来组织代码。`import` 导入所需包，`go.mod` 文件管理项目依赖。
* **入口函数**：`func main()` 是唯一且必需的执行起点。

## 变量与常量

Go 是静态类型语言，但支持类型推断。

```go
// 1. 标准声明： var 变量名 类型 = 值
var name string = "Alice"
var age int = 30

// 2. 类型推断（最常用）：使用 := 短变量声明
city := "Beijing" // 编译器自动推断 city 为 string 类型
score := 95.5     // 推断为 float64 类型

// 3. 批量声明
var (
    isStudent bool   = true
    salary    float64
)

// 4. 常量声明
const Pi = 3.14159
const (
    StatusOK = 200
    StatusNotFound = 404
)
```

**核心要点**：

* 函数内推荐使用短变量声明 `:=`。
* 变量声明后必须使用，否则编译报错（这有助于保持代码整洁）。

## 基本数据类型

Go 的内置基础类型非常清晰：

| 类型                                  | 说明                                 | 示例               |
| :------------------------------------ | :----------------------------------- | :----------------- |
| **`bool`**                            | 布尔值                               | `true`, `false`    |
| **`string`**                          | 字符串                               | `"hello"` (不可变) |
| **`int`, `int8`, `int64`, `uint`...** | 整型系列                             | `42`, `-1`, `0xFF` |
| **`float32`, `float64`**              | 浮点型                               | `3.14`, `1.0e-10`  |
| **`byte`**                            | `uint8`的别名，代表一个 ASCII 字符   |                    |
| **`rune`**                            | `int32`的别名，代表一个 Unicode 码点 |                    |

## 流程控制

Go 的流程控制语句很直观，条件表达式**不需要括号**。

```go
// 1. 条件判断 (if)
if age >= 18 {
    fmt.Println("成年")
} else if age > 12 {
    fmt.Println("青少年")
} else {
    fmt.Println("儿童")
}

// 2. 循环 (for) - Go只有for一种循环关键字
// 类似C语言的for
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
// 类似while循环
sum := 0
for sum < 100 {
    sum += 10
}
// 无限循环
for {
    // ... 通常配合break使用
}

// 3. 分支选择 (switch)
grade := "B"
switch grade {
case "A":
    fmt.Println("优秀")
case "B", "C": // 多条件匹配
    fmt.Println("良好")
default:
    fmt.Println("其他")
}
```

## 复合数据类型：数组、切片、映射

这是最常用、最重要的三种数据结构。

* **数组**：长度固定的序列，不常用。
  ```go
  var arr [3]int = [3]int{1, 2, 3}
  ```

* **切片**：**长度可变的动态数组，这是 Go 中最核心的数据结构**。它基于数组，但提供了强大的灵活性和易用性。

  ```go
  // 创建切片（最常用）
  s := []int{1, 2, 3}
  s = append(s, 4, 5) // 动态追加元素
  fmt.Println(s[1:3]) // 切片操作，输出 [2 3]

  // 使用make创建指定长度和容量的切片
  nums := make([]int, 0, 5) // 长度0，容量5
  ```

* **映射**：键值对集合，在其他语言中常被称为字典或哈希表。

  ```go
  // 创建映射
  m := make(map[string]int)
  m["Alice"] = 25
  m["Bob"] = 30

  // 直接初始化
  scores := map[string]int{"math": 90, "english": 85}

  // 判断键是否存在
  if age, ok := m["Charlie"]; ok {
      fmt.Println(age)
  } else {
      fmt.Println("键不存在")
  }
  ```

## 函数

Go 函数支持多返回值，这是其一大特色，广泛用于错误处理。

```go
// 基本函数
func add(a int, b int) int {
    return a + b
}

// 多返回值（最常见的模式：返回值 + 错误信息）
func divide(a, b float64) (float64, error) {
    if b == 0.0 {
        return 0, errors.New("除数不能为零")
    }
    return a / b, nil // nil 表示没有错误
}

// 调用函数并处理错误
result, err := divide(10, 2)
if err != nil {
    fmt.Println("出错:", err)
} else {
    fmt.Println("结果:", result)
}
```

## 结构体与方法：面向对象的基石

Go 没有“类”的概念，使用**结构体**来封装数据，并通过**方法**为其定义行为。

```go
// 定义结构体
type Person struct {
    Name string
    Age  int
}

// 为结构体定义方法（值接收者）
func (p Person) SayHello() {
    fmt.Printf("你好，我是 %s，今年 %d 岁。\n", p.Name, p.Age)
}

// 方法也可以使用指针接收者（可以修改结构体内部数据）
func (p *Person) HaveBirthday() {
    p.Age++ // 这里使用指针才能实际修改原结构体的Age
}

func main() {
    // 初始化结构体
    p1 := Person{Name: "小明", Age: 20}
    p1.SayHello() // 输出：你好，我是小明，今年20岁。

    p2 := &Person{Name: "小红", Age: 18} // p2 是一个指针
    p2.HaveBirthday()
    fmt.Println(p2.Age) // 输出：19
}
```

**这是理解 Gin 中数据绑定的关键**。在 Gin 中，经常会定义结构体来接收 HTTP 请求的 JSON 数据。

## 接口：实现多态

接口定义了一组方法的集合。**任何实现了接口所有方法的类型，都隐式地满足了该接口**。这是一种强大的抽象方式。

```go
// 定义一个“说话者”接口
type Speaker interface {
    Speak() string
}

// Person 类型实现 Speaker 接口
func (p Person) Speak() string {
    return "我是人，我叫" + p.Name
}

// 另一个类型 Dog
type Dog struct { Name string }
func (d Dog) Speak() string {
    return "汪汪，我是" + d.Name
}

// 函数接收 Speaker 接口类型
func introduce(s Speaker) {
    fmt.Println(s.Speak())
}

func main() {
    p := Person{Name: "Alice"}
    d := Dog{Name: "Buddy"}

    introduce(p) // 输出：我是人，我叫Alice
    introduce(d) // 输出：汪汪，我是Buddy
}
```

## 错误处理

Go 没有传统的`try-catch`异常机制，而是将错误作为普通的值返回（多返回值）。必须显式地检查并处理错误。

```go
file, err := os.Open("filename.txt")
if err != nil {
    // 处理错误：记录日志、返回错误、程序终止等
    log.Fatal("打开文件失败:", err)
}
defer file.Close() // defer 确保函数返回前关闭文件，是资源管理的常用手法

// ... 正常操作文件
```

**`error`是一个内置接口**，任何实现了`Error() string`方法的类型都可以作为错误。

## 10. 并发入门：goroutine 与 channel

这是 Go 语言的杀手锏，但在初学阶段了解其基本概念即可。

* **goroutine**：由 Go 运行时管理的轻量级线程。使用`go`关键字即可启动。
  ```go
  func say(s string) {
      for i := 0; i < 3; i++ {
          time.Sleep(100 * time.Millisecond)
          fmt.Println(s)
      }
  }
  func main() {
      go say("world") // 在新的goroutine中执行
      say("hello")    // 在当前goroutine中执行
  }
  ```
* **channel**：用于在 goroutine 之间安全地传递数据。
  ```go
  ch := make(chan int) // 创建一个传递int类型的channel
  go func() {
      ch <- 42 // 向channel发送数据
  }()
  value := <-ch // 从channel接收数据
  fmt.Println(value) // 输出: 42
  ```
