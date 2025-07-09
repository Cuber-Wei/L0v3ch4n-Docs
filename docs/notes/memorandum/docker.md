---
title: docker
icon: logos:docker-icon
createTime: 2025/08/20 14:01:24
permalink: /memorandum/docker/
---

## Dockerfile 模板

```Dockerfile
# 基础镜像，必需
FROM <image-name>:<version>
# 设置工作目录，必需
WORKDIR /app
# 配置环境变量
ENV ENVIRONMENT_VARIABLE=VALUE
# 执行命令，用于安装环境依赖包
RUN cmd to install dependencies
# 将项目文件复制到工作目录，必需
COPY . /app
# 重置项目入口
ENTRYPOINT []
# 运行项目的一般命令，必需
CMD ["sh", "-c", "cmd to run app"]
```

## docker-compose 模板

以 mysql 和 nacos 容器组合为样例。
::: tabs
@tab <Icon name="logos:docker-icon" /> docker-compose.yml
`docker-compose` 主文件

```Dockerfile
version: "3"
services:
  mysql:
    image: mysql/mysql-server:8.0.32
    container_name: mysql
    restart: always
    volumes:
      - ${DATA_DIRECTORY}/data/mysql/data:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD:-passwd} # mysql数据库root账号的密码
      - TZ=Asia/Shanghai
      - NACOS_USERNAME=${NACOS_USERNAME:-root} # 后续nacos所用管理员账号
      - NACOS_PASSWORD=${NACOS_PASSWORD:-passwd} # 后续nacos所用管理员密码
    ports:
      - ${MYSQL_PUBLIC_PORT:-3306}:3306
    networks:
      network:
        ipv4_address: ${MYSQL_HOST:-172.20.0.2}
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-u", "root", "-p${MYSQL_ROOT_PASSWORD:-passwd}"]
      interval: 10s
      timeout: 10s
      retries: 10

  nacos:
    image: nacos/nacos-server:1.4.2
    container_name: nacos
    restart: always
    depends_on:
      mysql:
        condition: service_healthy
    environment:
      - JVM_XMX=384m
      - JVM_XMS=384m
      - JVM_XMN=192m
      - MODE=standalone
      - SPRING_DATASOURCE_PLATFORM=mysql
      - MYSQL_SERVICE_HOST=${MYSQL_HOST:-172.20.0.2}
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=root
      - MYSQL_SERVICE_PASSWORD=${MYSQL_ROOT_PASSWORD:-passwd} # 与上面数据库密码一致
      - MYSQL_SERVICE_DB_NAME=nacos
      - NACOS_AUTH_ENABLE=true # 开启鉴权
    ports:
      - ${NACOS_PORT:-8848}:8848
    healthcheck:
      test: curl -f http://${NACOS_HOST:-172.20.0.3}:8848/nacos/index.html || exit 1
      interval: 10s
      timeout: 10s
      retries: 12
    networks:
      network:
        ipv4_address: ${NACOS_HOST:-172.20.0.3}

  autohealth: # 监控不健康的容器进行重启
    restart: always
    container_name: autohealth
    image: willfarrell/autoheal
    environment:
      - AUTOHEAL_CONTAINER_LABEL=all
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

networks:
  network:
    driver: bridge
    ipam:
      config:
        - subnet: ${SUBNET:-172.20.0.0/16}
```

@tab <Icon name="file-icons:dotenv" /> .env
相关环境变量配置

```bash
DATA_DIRECTORY=./hoj

# mysql的docker内网ip
MYSQL_HOST=172.20.0.2
# mysql暴露的端口号
MYSQL_PUBLIC_PORT=3306
# mysql的密码
MYSQL_ROOT_PASSWORD=passwd

# nacos的配置
NACOS_HOST=172.20.0.3
NACOS_PORT=8848
NACOS_USERNAME=root
NACOS_PASSWORD=passwd

# docker network的配置
SUBNET=172.20.0.0/16
```

:::

## 常用 Docker 命令

`docker build -t tag:v1` 编译

> `-t` 设置镜像名字和版本号
>
> 命令参考：[https://docs.docker.com/engine/reference/commandline/build/](https://docs.docker.com/engine/reference/commandline/build/)

`docker run -p 8080:8080 --name container-name tag:v1` 运行

> `-p` 映射容器内端口到宿主机
>
> `--name` 容器名字
>
> `-d` 后台运行
>
> 命令参考文档：[https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)

`docker ps` 查看当前运行中的容器

`docker images` 查看镜像列表

`docker rm container-id` 删除指定 id 的容器

`docker stop/start container-id` 停止/启动指定 id 的容器

`docker rmi image-id` 删除指定 id 的镜像

`docker volume ls` 查看 volume 列表

`docker network ls` 查看网络列表

`docker logs container-id` 查看指定 id 的容器运行 log

## 常用 docker-compose 命令

`docker-compose up` 运行服务

`docker-compose up -d` 在后台运行

`docker-compose ps` 查看运行状态

`docker-compose stop` 停止运行

`docker-compose restart` 重启

`docker-compose restart service-name` 重启单个服务

`docker-compose exec service-name sh` 进入容器命令行

`docker-compose logs service-name` 查看容器运行 log
