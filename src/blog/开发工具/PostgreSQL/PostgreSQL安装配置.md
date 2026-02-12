---
title: PostgreSQL安装配置
createTime: 2025/12/29 14:30:46
permalink: /DevTools/PostgreSQL/PosegreSQLInstallation/
tags:
    - DevTool
    - PostgreSQL
---

> 最近正在做个人网站的技术调研，由于听说PostgreSQL这个数据库很强大，所以来安装一下玩一玩。

## 一、安装PostgreSQL
::: tabs
@tab <Icon name="logos:microsoft-windows-icon" /> Windows

```bash
# 下载安装包（官网：postgresql.org）
# 安装时注意：
# - 记住设置的密码（默认用户：postgres）
# - 选择安装路径
# - 默认端口5432
```

@tab <Icon name="qlementine-icons:mac-16" /> MacOS

```bash
# 使用Homebrew安装
brew install postgresql@18
brew services start postgresql@18
```

@tab <Icon name="flat-color-icons:linux" /> Linux

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

:::

## 二、基础配置步骤

### 1. **访问PostgreSQL**
```bash
# Linux/macOS
sudo psql -u postgres

# Windows（使用pgAdmin或psql命令行）
```

### 2. **修改postgres用户密码**
```sql
ALTER USER postgres WITH PASSWORD '你的新密码';
```

### 3. **创建新用户和数据库**
```sql
-- 创建新用户
CREATE USER myuser WITH PASSWORD 'mypassword';

-- 创建数据库
CREATE DATABASE mydatabase OWNER myuser;

-- 授予权限
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
```

## 三、配置文件修改

### 1. **找到配置文件位置**
```bash
# Linux通常位置
/etc/postgresql/[版本]/main/

# 主要配置文件：
# - postgresql.conf   主配置文件
# - pg_hba.conf       客户端认证配置
```

### 2. **修改连接权限（pg_hba.conf）**
```
# 允许本地连接（添加或修改）
local   all             all                                     trust
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
```

### 3. **启用远程访问（如果需要）**
```bash
# postgresql.conf中修改：
listen_addresses = '*'  # 修改为 '*' 或具体IP

# pg_hba.conf中添加：
host    all             all             0.0.0.0/0               md5
```

### 4. **重启服务使配置生效**
```bash
# Linux
sudo systemctl restart postgresql

# macOS
brew services restart postgresql@16
```

## 四、常用工具

```bash
# 连接到数据库
psql -h localhost -U username -d databasename

# 常用命令
\l     # 列出所有数据库
\c dbname  # 切换数据库
\dt    # 列出当前数据库的表
\du    # 列出用户
\q     # 退出
```

## 五、基础测试

### 1. **连接测试**
```bash
# 使用新用户连接
psql -h localhost -U myuser -d mydatabase
```

### 2. **创建测试表**
```sql
-- 创建表
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入数据
INSERT INTO users (name, email)
VALUES ('张三', 'zhangsan@example.com');

-- 查询数据
SELECT * FROM users;
```

## 六、安全建议

### 1. **基础安全设置**
```sql
-- 不要使用默认的postgres用户进行应用连接
-- 为每个应用创建独立用户
-- 限制用户权限

-- 示例：创建只有特定权限的用户
CREATE USER appuser WITH PASSWORD 'securepassword';
GRANT CONNECT ON DATABASE mydb TO appuser;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO appuser;
```

### 2. **定期备份**
```bash
# 使用pg_dump备份
pg_dump -U username -d databasename -f backup.sql

# 恢复备份
psql -U username -d databasename -f backup.sql
```

## 七、常见问题解决

### 1. **连接被拒绝**
```bash
# 检查服务是否运行
sudo systemctl status postgresql

# 检查配置文件是否正确
```

### 2. **忘记密码**
```bash
# 修改pg_hba.conf，将认证改为trust
# 重启服务后无需密码登录
# 使用ALTER USER修改密码
# 改回原来的认证方式
```

### 3. **端口占用**
```bash
# 查看占用5432端口的进程
sudo lsof -i :5432

# 修改端口（在postgresql.conf中）
port = 5433
```
