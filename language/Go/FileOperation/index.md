---
url: /language/Go/FileOperation/index.md
---
Go 语言的文件操作主要依赖 `os`、`io`、`io/ioutil` 和 `bufio` 等标准库包。它遵循 **“显式错误处理”** 和 **“对底层控制友好”** 的设计哲学。

## 一、核心包与核心理念

* **`os`**：提供了与操作系统交互的核心函数，包括文件的打开、创建、删除、重命名、获取属性等。
* **`io`**：定义了基本的 I/O 接口，如 `Reader` 和 `Writer`。
* **`io/ioutil`**（Go 1.16+后部分函数移至 `os` 和 `io` 包）：提供了一些实用的工具函数。
* **`bufio`**：提供带缓冲的 I/O，提升读写效率。
* **`path/filepath`**：用于跨操作系统的路径处理。

**核心理念**：

1. **打开的文件是资源**，必须显式关闭（通常使用 `defer`）。
2. **错误必须显式检查**，几乎所有文件操作都会返回 `error`。
3. 提供了**不同粒度**的操作方式，从一次性读取到带缓冲的流式处理。

## 二、基础文件操作

### 1. 打开与关闭文件

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    // 1. 只读方式打开文件
    file, err := os.Open("test.txt")
    if err != nil {
        // 文件不存在或无权限时，err不为nil
        panic(fmt.Sprintf("打开文件失败: %v", err))
    }
    defer file.Close() // 确保函数退出前关闭文件，释放资源

    // 2. 使用OpenFile指定更复杂的模式
    // os.O_RDWR：读写模式
    // os.O_CREATE：如果不存在则创建
    // os.O_APPEND：追加模式
    // os.O_TRUNC：打开时清空文件
    // 0644：Unix风格的文件权限（所有者可读写，其他人只读）
    file2, err := os.OpenFile("data.txt", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0644)
    if err != nil {
        panic(err)
    }
    defer file2.Close()

    fmt.Println("文件打开成功")
}
```

### 2. 读取文件

Go 提供了多种读取方式，适应不同场景。

```go
import (
    "os"
    "io/ioutil"
    "bufio"
    "fmt"
)

// 方法1：一次性读取整个文件（适用于小文件）
func readAllAtOnce(filename string) {
    data, err := os.ReadFile(filename) // Go 1.16+ 推荐
    // 或使用旧的：ioutil.ReadFile(filename)
    if err != nil {
        panic(err)
    }
    fmt.Printf("文件内容:\n%s\n", data)
}

// 方法2：使用bufio.Scanner按行读取（最常用）
func readByLine(filename string) {
    file, err := os.Open(filename)
    if err != nil {
        panic(err)
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    lineNum := 1
    for scanner.Scan() { // 每次读取一行
        line := scanner.Text()
        fmt.Printf("第%d行: %s\n", lineNum, line)
        lineNum++
    }

    if err := scanner.Err(); err != nil {
        panic(err)
    }
}

// 方法3：使用缓冲区读取（适合大文件或需要控制读取过程）
func readWithBuffer(filename string) {
    file, err := os.Open(filename)
    if err != nil {
        panic(err)
    }
    defer file.Close()

    buffer := make([]byte, 1024) // 1KB的缓冲区
    for {
        n, err := file.Read(buffer) // n是实际读取的字节数
        if n > 0 {
            fmt.Printf("读取到 %d 字节: %s\n", n, string(buffer[:n]))
        }
        if err == io.EOF { // 到达文件末尾
            fmt.Println("文件读取完毕")
            break
        }
        if err != nil {
            panic(err)
        }
    }
}
```

### 3. 写入文件

```go
import "os"

// 方法1：一次性写入整个文件（会覆盖原内容）
func writeAllAtOnce(filename string, content []byte) {
    err := os.WriteFile(filename, content, 0644) // Go 1.16+
    // 旧版：ioutil.WriteFile(filename, content, 0644)
    if err != nil {
        panic(err)
    }
}

// 方法2：使用bufio.Writer缓冲写入（适合多次写入）
func writeWithBuffer(filename string, lines []string) {
    file, err := os.OpenFile(filename, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0644)
    if err != nil {
        panic(err)
    }
    defer file.Close()

    writer := bufio.NewWriter(file)
    for _, line := range lines {
        _, err := writer.WriteString(line + "\n")
        if err != nil {
            panic(err)
        }
    }
    writer.Flush() // 必须调用，确保缓冲区数据写入磁盘
}

// 方法3：直接写入（简单场景）
func writeDirectly(filename string) {
    file, err := os.OpenFile(filename, os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
    if err != nil {
        panic(err)
    }
    defer file.Close()

    _, err = file.WriteString("追加一行内容\n")
    if err != nil {
        panic(err)
    }
}
```

## 三、文件与目录管理

### 1. 检查文件/目录是否存在

```go
func checkFileExists(filename string) bool {
    _, err := os.Stat(filename)
    if err == nil {
        return true
    }
    if os.IsNotExist(err) {
        return false
    }
    // 其他错误（如权限不足）
    panic(err)
}
```

### 2. 获取文件信息

```go
func getFileInfo(filename string) {
    info, err := os.Stat(filename)
    if err != nil {
        panic(err)
    }

    fmt.Printf("文件名: %s\n", info.Name())
    fmt.Printf("大小: %d 字节\n", info.Size())
    fmt.Printf("是否是目录: %v\n", info.IsDir())
    fmt.Printf("修改时间: %v\n", info.ModTime())
    fmt.Printf("权限: %v\n", info.Mode())
}
```

### 3. 目录操作

```go
func directoryOperations() {
    // 创建目录
    err := os.Mkdir("mydir", 0755)
    if err != nil && !os.IsExist(err) {
        panic(err)
    }

    // 创建多级目录
    err = os.MkdirAll("path/to/nested/dir", 0755)
    if err != nil {
        panic(err)
    }

    // 读取目录内容
    entries, err := os.ReadDir(".") // Go 1.16+
    // 旧版：ioutil.ReadDir(".")
    if err != nil {
        panic(err)
    }

    fmt.Println("当前目录内容:")
    for _, entry := range entries {
        name := entry.Name()
        if entry.IsDir() {
            fmt.Printf("[目录] %s/\n", name)
        } else {
            info, _ := entry.Info()
            fmt.Printf("[文件] %s (%d bytes)\n", name, info.Size())
        }
    }

    // 删除文件或空目录
    os.Remove("file.txt")
    os.RemoveAll("path/to/nested/dir") // 删除目录及其所有内容
}
```

### 4. 文件路径处理

**重要**：不要直接用字符串拼接路径，使用 `path/filepath` 包。

```go
import "path/filepath"

func pathExamples() {
    // 拼接路径（自动处理操作系统差异）
    fullPath := filepath.Join("dir", "subdir", "file.txt")
    fmt.Println(fullPath) // 在Windows输出: dir\subdir\file.txt

    // 获取绝对路径
    absPath, _ := filepath.Abs(".")
    fmt.Println("绝对路径:", absPath)

    // 获取文件扩展名
    ext := filepath.Ext("document.pdf")
    fmt.Println("扩展名:", ext) // .pdf

    // 获取基名和目录名
    base := filepath.Base("/home/user/file.txt")
    dir := filepath.Dir("/home/user/file.txt")
    fmt.Printf("文件: %s, 所在目录: %s\n", base, dir) // 文件: file.txt, 所在目录: /home/user
}
```

## 四、实际应用场景示例

### 场景 1：读取配置文件（如 JSON）

```go
import "encoding/json"

type Config struct {
    Port     int    `json:"port"`
    Database string `json:"database"`
}

func loadConfig(filename string) Config {
    data, err := os.ReadFile(filename)
    if err != nil {
        panic(err)
    }

    var config Config
    if err := json.Unmarshal(data, &config); err != nil {
        panic(err)
    }
    return config
}
```

### 场景 2：简单的日志记录器

```go
type Logger struct {
    file *os.File
}

func NewLogger(filename string) (*Logger, error) {
    file, err := os.OpenFile(filename, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil {
        return nil, err
    }
    return &Logger{file: file}, nil
}

func (l *Logger) Log(message string) {
    timestamp := time.Now().Format("2006-01-02 15:04:05")
    logEntry := fmt.Sprintf("[%s] %s\n", timestamp, message)
    l.file.WriteString(logEntry)
}

func (l *Logger) Close() {
    l.file.Close()
}

// 使用
logger, _ := NewLogger("app.log")
defer logger.Close()
logger.Log("应用启动")
```

### 场景 3：文件复制

```go
func copyFile(src, dst string) error {
    source, err := os.Open(src)
    if err != nil {
        return err
    }
    defer source.Close()

    destination, err := os.Create(dst)
    if err != nil {
        return err
    }
    defer destination.Close()

    // 使用io.Copy进行高效复制
    _, err = io.Copy(destination, source)
    return err
}
```

## 五、最佳实践与常见陷阱

### 最佳实践

1. **总是检查错误**：Go 的文件操作几乎都会返回错误，必须检查。
2. **使用 defer 关闭文件**：防止资源泄露。
3. **使用`filepath`处理路径**：保证跨平台兼容性。
4. **大文件使用流式处理**：避免一次性加载大文件到内存。
5. **写入时考虑文件锁**：多进程/协程写入同一文件时可能需要同步。

### 常见陷阱

```go
// 陷阱1：忘记检查错误
file, _ := os.Open("file.txt") // 错误被忽略了！
// 正确做法：
file, err := os.Open("file.txt")
if err != nil { /* 处理错误 */ }

// 陷阱2：在循环中频繁打开关闭文件
// 正确做法：打开一次，多次使用

// 陷阱3：使用字符串拼接路径
path := "dir" + "/" + "file.txt" // 在Windows上可能有问题
// 正确做法：
path := filepath.Join("dir", "file.txt")
```

## 六、总结速查表

| 操作               | 推荐方法                             | 适用场景                  |
| ------------------ | ------------------------------------ | ------------------------- |
| **读取整个文件**   | `os.ReadFile()`                      | 配置文件、小文件（<10MB） |
| **按行读取**       | `bufio.NewScanner()`                 | 日志文件、文本处理        |
| **缓冲读取大文件** | `file.Read(buffer)`                  | 大文件、网络传输          |
| **写入整个文件**   | `os.WriteFile()`                     | 保存配置、生成报告        |
| **追加写入**       | `os.OpenFile(..., os.O_APPEND, ...)` | 日志记录                  |
| **缓冲写入**       | `bufio.NewWriter()`                  | 多次写入、性能敏感        |
| **检查存在性**     | `os.Stat()` + `os.IsNotExist()`      | 条件逻辑                  |
| **目录遍历**       | `os.ReadDir()` 或 `filepath.Walk()`  | 批量处理文件              |
| **路径操作**       | `filepath.Join()`, `Dir()`, `Base()` | 所有路径处理              |
