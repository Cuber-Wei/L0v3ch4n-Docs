---
title: O&M
icon: vaadin:tools
createTime: 2026/03/10 16:25:19
permalink: /memorandum/O&M/
---
## 常用的运维命令
在 Linux 运维工作中，熟练掌握常用命令是基本功。下面按功能分类列出一些最常用的命令，并附上简要说明。

### 1. 文件与目录操作
- `ls`：列出目录内容（常用选项 `-l` 详细列表，`-a` 显示隐藏文件）
- `cd`：切换工作目录
- `pwd`：显示当前工作目录的绝对路径
- `cp`：复制文件或目录（`-r` 递归复制目录）
- `mv`：移动或重命名文件/目录
- `rm`：删除文件或目录（`-r` 递归删除，`-f` 强制删除）
- `mkdir`：创建新目录（`-p` 递归创建多级目录）
- `rmdir`：删除空目录
- `touch`：创建空文件或更新文件时间戳
- `find`：在目录树中查找文件（按名称、大小、时间等条件）
- `locate`：快速查找文件（依赖数据库，需先 `updatedb`）
- `tree`：以树形结构显示目录内容（需安装）

### 2. 查看文件内容
- `cat`：连接文件并输出到标准输出（适合小文件）
- `less` / `more`：分页查看文件内容（`less` 支持上下翻页）
- `head`：显示文件开头几行（默认10行）
- `tail`：显示文件结尾几行（常用 `-f` 实时跟踪日志）
- `grep`：在文件中搜索文本模式（支持正则表达式）
- `awk`：文本处理工具，适合按列处理数据
- `sed`：流编辑器，用于文本替换、删除等操作

### 3. 权限管理
- `chmod`：修改文件或目录的权限（如 `chmod 755 file`）
- `chown`：修改文件所有者（如 `chown user:group file`）
- `chgrp`：修改文件所属组
- `umask`：设置新建文件的默认权限掩码

### 4. 进程管理
- `ps`：查看当前进程快照（常用 `ps aux` 或 `ps -ef`）
- `top` / `htop`：动态显示系统进程及资源占用（`htop` 更友好）
- `kill`：终止进程（根据 PID，常用 `kill -9` 强制终止）
- `pkill` / `killall`：按进程名终止进程
- `pgrep`：按名称查找进程 PID
- `nice` / `renice`：调整进程优先级
- `jobs`：查看当前终端后台任务
- `bg` / `fg`：将任务放到后台/前台运行

### 5. 系统信息与资源监控
- `uname`：显示系统信息（如 `uname -a` 显示全部）
- `hostname`：查看或设置主机名
- `df`：查看磁盘分区使用情况（`-h` 人类可读格式）
- `du`：估算文件或目录占用的磁盘空间（`-sh` 汇总）
- `free`：查看内存和交换空间使用情况（`-h` 人类可读）
- `uptime`：显示系统运行时间、负载等
- `w` / `who`：查看当前登录用户
- `last`：显示最近登录记录
- `dmesg`：查看内核环形缓冲区消息（常用于诊断硬件问题）

### 6. 网络管理
- `ifconfig` / `ip`：配置或查看网络接口（`ip addr` 更现代）
- `ping`：测试网络连通性
- `netstat`：显示网络连接、路由表、接口统计等（`-tulnp` 常用）
- `ss`：替代 `netstat` 的更快的套接字查看工具
- `route` / `ip route`：查看或操作路由表
- `traceroute`：追踪数据包到达目标主机的路径
- `nslookup` / `dig`：DNS 查询工具
- `wget` / `curl`：下载文件或与 URL 交互
- `ssh`：远程登录到另一台主机
- `scp`：通过 SSH 安全复制文件

### 7. 压缩与归档
- `tar`：打包和解包文件（常用 `-czvf` 创建 `.tar.gz`，`-xzvf` 解压）
- `gzip` / `gunzip`：压缩或解压 `.gz` 文件
- `zip` / `unzip`：处理 `.zip` 格式文件

### 8. 软件包管理（依发行版而异）
- **Debian/Ubuntu**：`apt`（如 `apt update`、`apt install`）
- **Red Hat/CentOS**：`yum` 或 `dnf`（如 `yum install`）
- **Arch Linux**：`pacman`
- **通用**：`rpm`（RPM 包管理）、`dpkg`（Debian 包管理）

### 9. 服务管理（Systemd）
- `systemctl`：管理系统服务（如 `systemctl start nginx`）
- `service`：旧版服务管理（部分系统仍可用）
- `init.d`：位于 `/etc/init.d/` 的脚本，可直接运行（如 `/etc/init.d/nginx restart`）

### 10. 用户与组管理
- `useradd` / `usermod` / `userdel`：添加、修改、删除用户
- `groupadd` / `groupdel`：添加、删除组
- `passwd`：修改用户密码
- `id`：显示当前用户或指定用户的 UID/GID 信息
- `whoami`：显示当前登录用户名

### 11. 其他实用命令
- `crontab`：设置定时任务（`-e` 编辑，`-l` 列出）
- `alias`：设置命令别名（如 `alias ll='ls -l'`）
- `history`：查看命令历史记录
- `man`：查看命令手册（如 `man ls`）
- `echo`：输出文本或变量值
- `export`：设置环境变量
