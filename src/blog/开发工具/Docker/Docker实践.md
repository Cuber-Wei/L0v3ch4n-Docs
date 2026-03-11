---
title: Docker实践
createTime: 2025/06/13 10:20:46
permalink: /DevTools/Docker/DockerPractice/
tags:
    - DevTool
    - Practice
    - Docker
---

## 0xFF 引言

本文主要介绍如何编写 Dockerfile、创建镜像、启动容器的全过程。

编写 Dockerfile 是构建 Docker 镜像的核心环节，它通过一系列指令定义了镜像的内容和启动行为。下面从基础概念、常用指令、编写步骤、示例以及最佳实践几个方面进行详细讲解。

## 0x01. 什么是 Dockerfile？

Dockerfile 是一个文本文件，包含了一条条指令，每一条指令对应一层镜像的构建。Docker 可以读取该文件中的指令，并自动构建出一个自定义的镜像。

## 0x02. Dockerfile 常用指令

|      指令      |                                   作用                                    |
| :------------: | :-----------------------------------------------------------------------: |
|    **FROM**    |               指定基础镜像，必须为第一条指令（除 ARG 外）。               |
|    **RUN**     | 执行命令（通常用于安装软件包、修改配置等），每一条 RUN 都会创建一个新层。 |
|    **COPY**    |                    将宿主机的文件或目录复制到镜像中。                     |
|    **ADD**     |         类似 COPY，但支持自动解压 tar 文件，也能从 URL 复制文件。         |
|  **WORKDIR**   |     设置工作目录（后续指令如 RUN、CMD、ENTRYPOINT 都在此目录执行）。      |
|    **ENV**     |                              设置环境变量。                               |
|   **EXPOSE**   |      声明容器运行时监听的端口（仅起到说明作用，实际发布需用 `-p`）。      |
|    **CMD**     |      指定容器启动时的默认命令，可以被 `docker run` 后面的命令覆盖。       |
| **ENTRYPOINT** |      配置容器启动时运行的命令，不易被覆盖（常与 CMD 配合传递参数）。      |
|   **VOLUME**   |               创建一个可从本地主机或其他容器挂载的挂载点。                |
|    **USER**    |                      指定运行容器时的用户名或 UID。                       |
|    **ARG**     |                    定义构建时的变量（仅构建时有效）。                     |

## 0x03. 编写 Dockerfile 的步骤

编写 Dockerfile 通常遵循以下流程：

### 步骤 1：选择基础镜像
根据应用类型选择合适的基础镜像。例如：
- **Java 应用**：`openjdk:11-jre-slim`
- **Python 应用**：`python:3.9-slim`
- **Node.js 应用**：`node:16-alpine`
- **静态网站**：`nginx:alpine`

基础镜像应尽量选择轻量级（如 `-slim`、`-alpine`）且版本明确，避免使用 `latest`。

### 步骤 2：设置工作目录
使用 `WORKDIR` 指令创建工作目录并切换进去，后续的 COPY、RUN、CMD 都会基于此目录执行。

### 步骤 3：复制项目文件
将宿主机上的源代码、配置文件等复制到镜像中。通常先复制依赖定义文件（如 `package.json`、`requirements.txt`），再复制其他源码，这样可以利用 Docker 缓存，避免每次构建都重新安装依赖。

### 步骤 4：安装依赖和构建
执行 `RUN` 命令安装软件包或编译代码。对于多阶段构建，这部分可能只存在于构建阶段。

### 步骤 5：设置环境变量
使用 `ENV` 定义容器运行时需要的环境变量，如 `ENV NODE_ENV=production`。

### 步骤 6：暴露端口
用 `EXPOSE` 声明应用监听的端口（例如 `EXPOSE 8080`），便于用户了解容器将使用哪些端口。

### 步骤 7：定义启动命令
用 `CMD` 或 `ENTRYPOINT` 指定容器启动时要执行的进程。通常建议使用 **exec 格式**（如 `CMD ["node", "app.js"]`），而不是 shell 格式，以确保能正确接收信号。

## 0x04. 示例：一个 Node.js 应用的 Dockerfile

```dockerfile
# 1. 选择基础镜像
FROM node:16-alpine

# 2. 设置工作目录
WORKDIR /usr/src/app

# 3. 复制依赖定义文件并安装依赖（利用缓存）
COPY package*.json ./
RUN npm ci --only=production

# 4. 复制源码
COPY . .

# 5. 设置环境变量
ENV NODE_ENV=production

# 6. 声明端口
EXPOSE 3000

# 7. 启动应用
CMD ["node", "server.js"]
```

## 0x05. 构建与运行

### 构建镜像
在 Dockerfile 所在目录执行：
```bash
docker build -t myapp:1.0 .
```
`-t` 指定镜像名称和标签，`.` 表示构建上下文路径。

### 运行容器
```bash
docker run -d -p 3000:3000 --name myapp myapp:1.0
```
`-d` 后台运行，`-p` 将宿主机端口映射到容器端口。

## 0x06. 最佳实践建议

1. **使用明确版本的基础镜像**：避免 `latest`，确保构建可重复。
2. **利用构建缓存**：将变化少的指令（如安装依赖）放在前面，变化多的指令（如复制源码）放在后面。
3. **减少镜像层数**：合并多个 `RUN` 指令（用 `&&` 连接命令），清理不必要的文件（如 apt 缓存、临时文件）。
4. **使用 `.dockerignore` 文件**：排除不需要的文件（如 node_modules、.git、日志），减小构建上下文体积。
5. **尽量使用非 root 用户运行**：出于安全考虑，可以在最后切换到普通用户（`USER node`）。
6. **采用多阶段构建**：对于编译型语言（Go、Java），先在一个带编译环境的镜像中编译，再将产物复制到精简的运行时镜像中，极大减小最终镜像体积。
7. **使用 `COPY` 而非 `ADD`**：除非确实需要自动解压或远程 URL 功能，否则 `COPY` 更透明。
8. **每个容器只运行一个前台进程**：确保容器生命周期与进程一致，方便管理和监控。

## 0x07. 多阶段构建示例（以 Go 为例）

```dockerfile
# 构建阶段
FROM golang:1.18 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o myapp .

# 运行阶段
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/myapp .
EXPOSE 8080
CMD ["./myapp"]
```

通过这种方式，最终镜像只包含可执行文件和必要的运行时库，大小大大减小。
