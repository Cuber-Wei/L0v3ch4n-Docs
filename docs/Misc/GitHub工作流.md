---
title: GitHub工作流
createTime: 2025/05/13 14:08:15
permalink: /Misc/GitHub-Workflow/
draft: true
tags:
  - GitHub
  - Git
  - workflow
---

## 0xFF 前沿
最近在教同学学习git，顺便也回去巩固了github工作流的最佳实践。现记录于下。

## 0x00 准备工作
### 1. 下载Git
[参考链接](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

::: tabs
@tab <Icon name="logos:microsoft-windows-icon" /> Windows
在 Windows 上安装 Git 有几种安装方法。 官方版本可以在 Git 官方网站下载。 打开 [https://git-scm.com/download/win](https://git-scm.com/download/win)，
下载会自动开始。 

要注意这是一个名为 Git for Windows 的项目（也叫做 msysGit），和 Git 是分别独立的项目；更多信息请访问 [http://msysgit.github.io/](http://msysgit.github.io/)。

@tab <Icon name="qlementine-icons:mac-16" /> MacOS
在 Mac 上安装 Git 有多种方式。 最简单的方法是安装 Xcode Command Line Tools。 Mavericks （10.9） 或更高版本的系统中，在 Terminal 里尝试首次运行 'git' 命令即可。
```bash
git --version
```
如果没有安装过命令行开发者工具，将会提示你安装。

如果你想安装更新的版本，可以使用二进制安装程序。 官方维护的 macOS Git 安装程序可以在 Git 官方网站下载，
网址为 [https://git-scm.com/download/mac](https://git-scm.com/download/mac)。

@tab <Icon name="flat-color-icons:linux" /> Linux
如果你想在 Linux 上用二进制安装程序来安装基本的 Git 工具，可以使用发行版包含的基础软件包管理工具来安装。 
以 Fedora 为例，如果你在使用它（或与之紧密相关的基于 RPM 的发行版，如 RHEL 或 CentOS），你可以使用 dnf：
```bash
sudo dnf install git-all
```
如果你在基于 Debian 的发行版上，如 Ubuntu，请使用 apt：
```bash
sudo apt install git-all
```
要了解更多选择，Git 官方网站上有在各种 Unix 发行版的系统上安装步骤，网址为 [https://git-scm.com/download/linux](https://git-scm.com/download/linux)。
:::

