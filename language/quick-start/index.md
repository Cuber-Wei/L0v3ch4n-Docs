---
url: /language/quick-start/index.md
---
# 环境搭建

如果你想运行 Python 代码，你需要安装 Python 解释器。Python 解释器是执行 Python 代码的程序，没有它，Python 代码将无法运行。

## 安装 Python 解释器

::: tabs
@tab  Windows

你可以从[Python 官网](https://www.python.org/)下载 Python 解释器。下载完成后，按照提示进行安装即可。

> \[!important]
> 在安装过程中，请确保选中`Add Python 3.x to PATH`选项，这样你就可以在命令行中直接运行 Python 解释器了。

@tab  Linux

在 Linux 系统中，你可以使用包管理器来安装 Python 解释器。例如，在 Ubuntu 系统中，你可以使用以下命令来安装 Python 解释器：

```bash
sudo apt-get update
sudo apt-get install python3
```

@tab  MacOS

在 macOS 系统中，你可以使用`Homebrew`来安装 Python 解释器。首先，你需要[安装 Homebrew](https://zhuanlan.zhihu.com/p/372576355)，
然后使用以下命令来安装 Python 解释器：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install python
```

:::

> \[!tip]
> 如果你已经安装了 Python 解释器，但是仍然无法在命令行中运行 Python 解释器，那么你可能需要将 Python 解释器的路径添加到系统的环境变量中。

在装好 Python 解释器后，你可以在命令行或终端中输入`python -V`来检查 Python 解释器是否配置成功。如果配置成功，你将看到 Python 解释器的版本信息。

## 安装代码编辑器

工欲善其事，必先利其器。为了编写 Python 代码，你需要一个代码编辑器。以下是一些常用的 Python 代码编辑器：

* [VS Code](https://code.visualstudio.com/)
* [PyCharm](https://www.jetbrains.com/pycharm/)
* 记事本（任何能写文字的编辑器）

推荐使用现代 IDE（集成开发环境），如 VS Code 或 PyCharm，它们提供了语法高亮、代码补全、调试等功能，可以帮助你更高效地编写 Python 代码。

## 快速开始

在安装好 Python 解释器和代码编辑器后，你就可以开始编写 Python 代码了。以下是一个简单的 Python 程序：

```python
print("Hello, World!")
```

将以上代码保存为`hello.py`文件，然后在命令行或终端中输入`python hello.py`，你将看到输出`Hello, World!`。

> 在 Python 中，`print`函数用于输出文本。你可以使用`print`函数来输出任何你想要的内容。

恭喜你，你已经迈出了万里长征的第一步（也是最重要的一步）！现在你可以开始学习 Python 的基础知识了。祝你学习愉快！
