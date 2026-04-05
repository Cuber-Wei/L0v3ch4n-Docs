---
title: macList
icon: qlementine-icons:mac-16
createTime: 2026/04/05 10:51:08
permalink: /memorandum/macList/
---

记录 L0v3ch4n 的 Mac 新机环境搭建清单。

## 基础软件

1. [Chrome](https://www.google.cn/chrome/index.html): 执行效果最标准的浏览器。
2. [Clash Verge](https://file.congyu.org/cfw/Clash.Verge_2.4.5_aarch64.dmg): 装机必备魔法软件。
3. [HomeBrew](https://brew.sh/): 软件包管理神器，绝大部分软件均可通过 brew 安装。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 系统体验优化类

1. [Supercharge](https://sindresorhus.com/supercharge): 超级好用的系统功能拓展工具，包含快捷键优化和实用小功能。
2. [MenuBar Spacing](https://sindresorhus.com/menu-bar-spacing): 管理菜单栏图标之间的间距。
3. [Hidden Bar](https://apps.apple.com/cn/app/hidden-bar/id1452453066?mt=12): 隐藏菜单栏项目的小工具。
4. [Pandan](https://sindresorhus.com/pandan): 监控当前回话连续使用时间，提醒用户按时休息。
5. [Shareful](https://sindresorhus.com/shareful): 赋予 macOS 分享菜单超能力。
6. [RunCat](https://apps.apple.com/cn/app/runcat/id1429033973?mt=12): 系统资源占用显示。
7. [Snipaste](https://zh.snipaste.com/): 非常好用的截图工具。
8. [Alcove](https://tryalcove.com/): Mac 上的灵动岛解决方案，优化刘海屏的使用体验。
9. [AppCleaner](https://freemacsoft.net/appcleaner/): 卸载软件时清除相关文件。

## 文字处理类

1. [Typora](https://typoraio.cn/): Markdown 编辑器。
2. [WPS](https://wpss-www.com.cn/download.html): 最终还得向 Word 屈服。

## 互联、共享类

1. [Tailscale](https://tailscale.com/): 多设备互联的实用工具。
2. [ToDesk](https://www.todesk.com/): 桌面远控软件。

## 开发相关

1. [Visual Sutdio Code](https://code.visualstudio.com/): 微软做的最好的软件（真）。
2. [WakaTime](https://wakatime.com/desktop): 记录每天的编码时间。
3. [Postman](https://www.postman.com/downloads/): 接口调试工具。
4. [Docker](https://www.docker.com/): 容器化伟力。
5. [MySQL](https://www.mysql.com/cn/)
6. [Redis](https://redis.io/)
7. [Warp](https://www.warp.dev/): 好看强大的终端模拟器。

### 环境配置

1. [uv](https://docs.astral.sh/uv/): 现代的 Python 包管理器。
2. [nvm](https://nvm.uihtm.com/doc/install.html): Node.js 环境管理器。

## 其他

1. [7zip](https://7-zip.org/download.html): 好用的解压缩软件。
    ```bash
    brew install p7zip 
    ```
2. [btop](https://github.com/aristocratos/btop): 电脑资源占用监控软件。
3. [fastfetch](https://github.com/fastfetch-cli/fastfetch): 解决了 MacOS 上没有刷新键的问题。
