---
url: /DevTools/Docker/DockerBasic/index.md
---
## 0xFF Docker 简介

Docker 是一个用于 构建(build)、运行(run)、传送(share) 应用程序的平台。

有了 Docker，我们就可以将一个程序及其运行时所需要的依赖包、第三方软件库、配置文件等打包在一起，以便在任何环境中都能正确地运行。

## 0x00 Docker 与传统虚拟机的区别

虚拟机在一定程度上实现了资源的整合，但是缺点也很明显：每台虚拟机都需要大量资源，并且启动的时间都比较久。
这个缺陷在我们仅需要运行一个对外提供服务的应用程序时就盖过了它带来的好处。

Docker 和容器并不是同一概念，Docker 是容器化技术的一个解决方案，而容器是一种虚拟化技术，和虚拟机类似，也是一个独立的环境。
与虚拟机不同，容器并不需要在其中运行完整的操作系统，而是使用宿主机的操作系统，因此它的启动速度非常快；
同时，因为需要的资源少，我们可以在一台物理机上运行更多的容器，能够更加充分利用物理机的资源，减少资源闲置

## 0x01 Docker 基本概念

![Docker架构](https://file.l0v3ch4n.top/L0v3ch4n-Docs-images/DevTool/Docker/Docker架构.png)

Docker 采用 C/S 架构模式，Docker Client 与 Docker Daemon 之间通过 Socket 或者 RESTful API 进行通信。
Docker Daemon 是 Docker 服务端的守护进程，负责管理 Docker 的各种资源。
Docker Client 负责向 Docker Daemon 发送请求，Docker Daemon 在接收到请求后进行处理并返回服务端的处理结果给 Docker Client

**镜像(image)**：镜像是个只读的模板，它可以用来创建容器。

**容器(container)**：容器是 Docker 运行的实例，它提供了一个独立的可移植的环境，可以在这个环境中运行应用程序。

**仓库(registry)**：Docker 仓库是用来存储 Docker 镜像的地方。最流行、最常用的 Docker 仓库是[DockerHub](https://www.docker.com/products/docker-hub/)。

> **常见比喻**
>
> 如果将镜像比做食谱，容器就是按照食谱烹饪出来的菜肴；只要你严格按照食谱来制作，就一定能做出完全一致的菜肴。
> 同时你也可以将这个食谱分享给朋友，Ta 也能根据这个食谱做出完全一样的菜来。
> 你可以把你发明的食谱上传到社交媒体（Docker 仓库）上，这样其他人就可以根据这个食谱，也做出完全一样的菜来。

## 0x02 Docker 的安装配置

在[官网](https://www.docker.com)下载安装包，安装即可。安装好 Docker 后请务必记得启动 Docker，否则无法使用 Docker 命令进行相应操作。

在终端输入`docker version`，若返回了 Client 和 Server 的版本信息则视为安装 Docker 成功，否则请检查是否启动 Docker 程序。

## 0x03 容器化和 Dockerfile

顾名思义就是将应用程序打包成容器，然后在容器中运行应用程序的过程。这个过程简单来说可以分成三个步骤：

1. 创建一个 Dockerfile，告诉 Docker 构建应用程序镜像所需要的步骤和配置。
2. 使用 Dockerfile 构建镜像。
3. 使用这个镜像创建和运行容器。

**Dockerfile**：用于指导 Docker 构建镜像的文本文件，其中包括应用程序执行的所有命令。一般来说包括以下内容：

1. 精简版的操作系统（如 Alpine）
2. 应用程序运行时环境（如 NodeJS，Java，Python）
3. 应用程序（如 Spring Boot 打包好的 jar 包）
4. 应用程序依赖的第三方库或者包、配置文件、环境变量等。
