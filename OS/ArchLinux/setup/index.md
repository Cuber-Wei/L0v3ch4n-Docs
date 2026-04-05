---
url: /OS/ArchLinux/setup/index.md
---
## 0xFF 前言

前前后后两天多，ArchLinux 和一些常用软件的安装也算是基本完成了。

![fastfetch](https://file.l0v3ch4n.top/L0v3ch4n-Docs-images/notes/OS/ArchLinux/setup/fastfetch.jpg)

回想这次的~~挑战~~安装过程，感觉 ArchLinux 的安装过程还是相对比较顺利的 （毕竟网上教程有好多，
跟着[Wiki](https://wiki.archlinuxcn.org/wiki/%E9%A6%96%E9%A1%B5)很多问题也能找到解决方案 ）。

在这边浅浅记录一下本次安装过程中碰到的亿些小问题，也方便今后巩固和回顾。

## 0x00 安装前的准备

### 物料准备

* 一台电脑（不然系统装哪里去）
* 一块 U 盘（8G 就足够了）
* 一根网线（能连无线网就不用这个了）

### 制作启动盘

1. 下载[ArchLinux 镜像](https://archlinux.org/download/)
2. 使用[Rufus](https://rufus.ie/zh/)烧录镜像到 U 盘
3. 重启电脑，进入 BIOS，将 U 盘设置为第一启动项，然后保存并重启
4. 选择 Arch Install 选项，等待 Live 环境启动完成

### Live 环境中的安装前准备

现在我们就在 Live 环境中了，我们需要在安装之前进行一些准备操作。

1. 关闭 reflector 服务
   目前 ArchLinux 中的 reflector 服务会自动更新镜像源，导致我们无法手动选择镜像源，因此我们需要先关闭 reflector 服务。

   ```bash
    systemctl stop reflector.service
   ```

2. 编辑`pacman`镜像源配置文件，将需要的镜像源放于文件头部

   ```bash
    vim /etc/pacman.d/mirrorlist
   ```

3. 硬盘分区、格式化
   这里我使用的是`fdisk`
   进行分区，具体分区操作可以参考[ArchLinux Wiki](https://wiki.archlinuxcn.org/wiki/%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97#%E5%BB%BA%E7%AB%8B%E7%A1%AC%E7%9B%98%E5%88%86%E5%8C%BA)。

   我的分区表是这样子：

   | 已安装系统上的挂载点 | 分区大小   | 格式化类型                                 | 备注                                      |
   | -------------------- | ---------- | ------------------------------------------ | ----------------------------------------- |
   | /boot                | 1G         | fat32                                      | 启动引导分区，不小于 512M                 |
   | \[SWAP]               | 64G        | Linux swap                                 | Linux 交换分区，按内存大小确定，不小于 4G |
   | /                    | 剩下的空间 | ext4（也可以用 btrfs，快照的大小会比较小） | 根目录，设备剩余空间，至少 23-32GiB       |

   ![lsblk](https://file.l0v3ch4n.top/L0v3ch4n-Docs-images/notes/OS/ArchLinux/setup/lsblk.png)

4. 挂载分区
   使用`mount`命令将分区挂载到对应的挂载点。
   ```bash
   mount /dev/sda1 /mnt # 挂载根分区
   mkdir /mnt/boot # 创建boot目录
   mount /dev/sda2 /mnt/boot # 挂载boot分区
   ```

5. 连接网络
   这里我用的是无线连接，使用`iwctl`命令连接到无线网络。
   ```bash
   iwctl # 进入iwctl命令行
   device list # 列出所有无线网卡设备
   station <interface> scan # 扫描无线网络
   station <interface> get-networks # 获取无线网络列表
   station <interface> connect <ssid> <password> # 连接到无线网络
   exit # 退出iwctl命令行
   ```

## 0x01 正式安装

经过以上挣扎，我们终于可以开始安装系统了。

### 安装必需的软件包和编辑器

我比较喜欢`vim`来在命令行中编辑文件，当然你也可以选择`nano`,`vi`等用得习惯的编辑器。

```bash
pacstrap -K /mnt base linux linux-firmware intel-ucode vim
# 编辑器不要忘了装，新系统中是没有编辑器的
# amd CPU用户需要下载amd-ucode
```

## 0x02 系统配置

### 生成`fstab`文件

```bash
genfstab -U /mnt >> /mnt/etc/fstab
cat /mnt/etc/fstab # 检查写入是否成功
```

### 切换到新系统环境

使用`chroot`命令切换到新系统环境。

```bash
arch-chroot /mnt
```

### 安装辅助软件包

这时候也可以安装一些辅助软件包，这能帮助你更方便地使用、配置系统。

```bash
pacman -S sudo networkmanager xorg xorg-server pipewire-pluse intel-media-driver
```

根据喜好安装 WM，我这边安装的是 KDE Plasma。

```bash
pacman -S sddm plasma-meta kde-applications
```

还有一些日常使用会用到的东西

```bash
pacman -S git openssh zsh fakeroot noto-fonts-cjk
```

安装输入法

```bash
pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-moegirl
```

在`/etc/environment`中添加以下内容

```bash
XIM="fcitx"
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
GLFW_IM_MODULE=ibus
INPUT_METHOD=fcitx
```

### 设置时区

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

### 设置语言

```bash
vim /etc/locale.gen # 取消 en_US.UTF-8 UTF-8 和 zh_CN.UTF-8 UTF-8 的注释
locale-gen # 生成语言环境
echo "LANG=zh_CN.UTF-8" > /etc/locale.conf # 设置语言环境
```

### 网络配置

1. 编辑`hostname`文件

   ```bash
   echo yourhostname > /etc/hostname # 设置主机名
   ```

2. 编辑本地主机名文件`/etc/hosts`

   ```bash
   vim /etc/hosts
   ```

   在文件中加入以下内容：

   ```bash
   127.0.0.1   localhost
   ::1         localhost
   127.0.1.1   yourhostname.localdomain yourhostname
   ```

### 设置 root 密码

```bash
passwd # 设置root密码
```

配置用户

```bash
useradd -m -G wheel,audio,video,storage -s /bin/bash yourusername # 创建用户
passwd yourusername # 设置用户密码
```

编辑 sudoers 文件，给用户 sudo 权限

```bash
vim /etc/sudoers
```

在文件中找到`root ALL=(ALL:ALL) ALL`这一行，在下方添加`yourusername ALL=(ALL:ALL) ALL`，保存并退出。

### 设置开机自启动项

```bash
systemctl enable NetworkManager # 开机自启动网络管理器
systemctl enable sddm # 开机自启动显示管理器
```

### 安装`grub`引导程序

```bash
pacman -S grub efibootmgr # 安装grub和efibootmgr
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB # 安装grub
grub-mkconfig -o /boot/grub/grub.cfg # 生成grub配置文件
```

## 0x03 重启

至此，崭新的带有桌面环境的 ArchLinux 系统就安装完成了。

我们可以通过`exit`命令退出 chroot 环境，然后使用`umount -R /mnt`命令取消挂载分区，
最后使用`reboot`命令重启系统。（记得在启动进入 BIOS 之前拔出 U 盘！！！）

尽情玩耍吧！

## 参考教程

[ArchWiki#安装指南](https://wiki.archlinuxcn.org/wiki/%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97)

[archlinux 基础安装](https://arch.icekylin.online/guide/rookie/basic-install)

[全盘加密安装 Arch Linux 的一切（困难模式）](https://www.bilibili.com/video/BV1DTT2zSE5R/)

@[bilibili time="0" width="100%" height="400px" ratio="16:9" auto="0"](BV1DTT2zSE5R)
