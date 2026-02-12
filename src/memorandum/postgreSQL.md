---
title: postgreSQL
createTime: 2025/12/29 14:25:16
permalink: /memorandum/postgreSQL/
---
# PostgreSQL 常用命令和语法

## 一、基础连接和系统命令

### 1. **连接命令**
```bash
# 基本连接
psql -U 用户名 -d 数据库名 -h 主机 -p 端口
psql postgres                         # 连接默认数据库

# 退出
\q
```

### 2. **信息查看命令**
```sql
\l 或 \list                          -- 列出所有数据库
\c 数据库名                          -- 切换数据库
\d                                 -- 列出当前数据库的表
\d 表名                             -- 查看表结构
\d+ 表名                            -- 查看详细信息（包括索引、外键等）
\dt                                -- 只列出表
\dv                                -- 列出视图
\df                                -- 列出函数
\du 或 \dg                         -- 列出用户/角色
\dn                                -- 列出模式
\dp 或 \z                          -- 查看表权限
\dy                                -- 列出事件触发器
\conninfo                          -- 显示当前连接信息
\?                                 -- 查看psql命令帮助
\h                                 -- 查看SQL命令帮助
\timing                            -- 切换执行时间显示（开/关）
\x auto                            -- 切换扩展显示模式（宽表自动换行）
```

## 二、数据库操作

### 1. **创建和管理数据库**
```sql
-- 创建数据库
CREATE DATABASE 数据库名;

-- 创建带参数的数据库
CREATE DATABASE mydb
  WITH
  OWNER = 用户名
  ENCODING = 'UTF8'
  LC_COLLATE = 'en_US.UTF-8'
  LC_CTYPE = 'en_US.UTF-8'
  TABLESPACE = pg_default
  CONNECTION LIMIT = -1;

-- 重命名数据库
ALTER DATABASE 旧名 RENAME TO 新名;

-- 删除数据库
DROP DATABASE IF EXISTS 数据库名;

-- 复制数据库
CREATE DATABASE 新数据库 TEMPLATE 原数据库;
```

### 2. **备份和恢复**
```bash
# 备份单个数据库
pg_dump -U 用户名 数据库名 > 备份文件.sql

# 备份整个集群
pg_dumpall > 全部备份.sql

# 恢复数据库
psql -U 用户名 -d 数据库名 < 备份文件.sql

# 压缩备份
pg_dump 数据库名 | gzip > 备份文件.sql.gz
```

## 三、表操作

### 1. **创建表**
```sql
-- 基本创建
CREATE TABLE 表名 (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER DEFAULT 0,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

-- 带约束的表
CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary NUMERIC(10,2) CHECK (salary > 0),
    dept_id INTEGER REFERENCES departments(id),
    hire_date DATE DEFAULT CURRENT_DATE,
    CONSTRAINT uk_email UNIQUE (email)
);

-- 从现有表创建新表
CREATE TABLE 新表名 AS SELECT * FROM 原表名;
CREATE TABLE 新表名 (LIKE 原表名 INCLUDING ALL);
```

### 2. **修改表结构**
```sql
-- 添加列
ALTER TABLE 表名 ADD COLUMN 列名 数据类型 约束;

-- 删除列
ALTER TABLE 表名 DROP COLUMN 列名;

-- 修改列类型
ALTER TABLE 表名 ALTER COLUMN 列名 TYPE 新类型;

-- 重命名列
ALTER TABLE 表名 RENAME COLUMN 旧列名 TO 新列名;

-- 添加约束
ALTER TABLE 表名 ADD CONSTRAINT 约束名 PRIMARY KEY (列);
ALTER TABLE 表名 ADD CONSTRAINT 约束名 FOREIGN KEY (列) REFERENCES 其他表(列);
ALTER TABLE 表名 ADD CONSTRAINT 约束名 UNIQUE (列);
ALTER TABLE 表名 ADD CONSTRAINT 约束名 CHECK (条件);

-- 删除约束
ALTER TABLE 表名 DROP CONSTRAINT 约束名;

-- 重命名表
ALTER TABLE 旧表名 RENAME TO 新表名;
```

## 四、数据操作（CRUD）

### 1. **插入数据**
```sql
-- 插入单行
INSERT INTO 表名 (列1, 列2) VALUES (值1, 值2);

-- 插入多行
INSERT INTO 表名 (列1, 列2)
VALUES
    (值1, 值2),
    (值3, 值4),
    (值5, 值6);

-- 从查询结果插入
INSERT INTO 表名1 (列1, 列2)
SELECT 列1, 列2 FROM 表名2 WHERE 条件;

-- 插入并返回结果
INSERT INTO 表名 (列1) VALUES (值1) RETURNING id;
```

### 2. **查询数据**
```sql
-- 基础查询
SELECT * FROM 表名;
SELECT 列1, 列2 FROM 表名;
SELECT DISTINCT 列 FROM 表名;

-- 带条件
SELECT * FROM 表名 WHERE 条件;
SELECT * FROM users WHERE age > 18 AND status = 'active';
SELECT * FROM products WHERE price BETWEEN 10 AND 100;
SELECT * FROM users WHERE name LIKE '张%';

-- 排序
SELECT * FROM 表名 ORDER BY 列1 ASC, 列2 DESC;

-- 限制和偏移
SELECT * FROM 表名 LIMIT 10;
SELECT * FROM 表名 LIMIT 10 OFFSET 20;  -- 跳过前20条，取10条

-- 聚合函数
SELECT
    COUNT(*) as 总数,
    AVG(price) as 平均价格,
    SUM(amount) as 总金额,
    MAX(date) as 最近日期,
    MIN(date) as 最早日期
FROM 表名;

-- 分组和筛选
SELECT
    department,
    COUNT(*) as 员工数,
    AVG(salary) as 平均工资
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;

-- 连接查询
SELECT
    e.name,
    d.department_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- 子查询
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);

-- 分页查询（推荐）
SELECT * FROM 表名 ORDER BY id LIMIT 10 OFFSET 0;  -- 第1页
SELECT * FROM 表名 ORDER BY id LIMIT 10 OFFSET 10; -- 第2页
```

### 3. **更新数据**
```sql
-- 基础更新
UPDATE 表名 SET 列1 = 值1, 列2 = 值2 WHERE 条件;

-- 更新所有行
UPDATE 表名 SET status = 'inactive';

-- 使用子查询更新
UPDATE products
SET price = price * 1.1
WHERE category_id IN (
    SELECT id FROM categories WHERE name = 'Electronics'
);

-- 更新并返回结果
UPDATE users SET status = 'active' WHERE id = 1 RETURNING *;
```

### 4. **删除数据**
```sql
-- 删除指定行
DELETE FROM 表名 WHERE 条件;

-- 删除所有行
DELETE FROM 表名;

-- 更快地删除所有行（不可回滚）
TRUNCATE TABLE 表名;

-- 删除并返回结果
DELETE FROM users WHERE id = 1 RETURNING *;
```

## 五、索引操作

### 1. **创建索引**
```sql
-- 创建B-tree索引（默认）
CREATE INDEX idx_name ON 表名 (列名);

-- 创建唯一索引
CREATE UNIQUE INDEX idx_unique_email ON users (email);

-- 创建复合索引
CREATE INDEX idx_name_age ON users (last_name, first_name);

-- 创建部分索引
CREATE INDEX idx_active_users ON users (status) WHERE status = 'active';

-- 创建表达式索引
CREATE INDEX idx_lower_name ON users (LOWER(name));

-- 查看表索引
SELECT * FROM pg_indexes WHERE tablename = '表名';
```

### 2. **删除索引**
```sql
DROP INDEX IF EXISTS 索引名;
```

## 六、事务控制

```sql
-- 开始事务
BEGIN;  -- 或 START TRANSACTION;

-- 提交事务
COMMIT;

-- 回滚事务
ROLLBACK;

-- 保存点
BEGIN;
SAVEPOINT my_savepoint;
-- 一些操作
ROLLBACK TO SAVEPOINT my_savepoint;  -- 回滚到保存点
COMMIT;

-- 事务示例
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

## 七、视图

```sql
-- 创建视图
CREATE VIEW 视图名 AS
SELECT 列1, 列2 FROM 表名 WHERE 条件;

-- 创建可更新视图
CREATE VIEW active_users AS
SELECT * FROM users WHERE status = 'active';

-- 创建物化视图（缓存结果）
CREATE MATERIALIZED VIEW mv_sales_summary AS
SELECT product_id, SUM(quantity) as total_sold
FROM orders
GROUP BY product_id;

-- 刷新物化视图
REFRESH MATERIALIZED VIEW mv_sales_summary;

-- 删除视图
DROP VIEW IF EXISTS 视图名;
```

## 八、函数和存储过程

### 1. **创建函数**
```sql
-- 简单函数
CREATE OR REPLACE FUNCTION get_user_count()
RETURNS INTEGER AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM users);
END;
$$ LANGUAGE plpgsql;

-- 带参数的函数
CREATE OR REPLACE FUNCTION get_user_by_id(user_id INTEGER)
RETURNS SETOF users AS $$
BEGIN
    RETURN QUERY SELECT * FROM users WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- 调用函数
SELECT get_user_count();
SELECT * FROM get_user_by_id(1);
```

### 2. **创建存储过程**
```sql
CREATE OR REPLACE PROCEDURE update_salary(
    emp_id INTEGER,
    new_salary NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE employees SET salary = new_salary WHERE id = emp_id;
    COMMIT;
END;
$$;

-- 调用存储过程
CALL update_salary(1, 50000);
```

## 九、触发器

```sql
-- 创建触发器函数
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 创建触发器
CREATE TRIGGER update_user_modtime
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();
```

## 十、权限管理

```sql
-- 创建用户/角色
CREATE USER 用户名 WITH PASSWORD '密码';
CREATE ROLE 角色名;

-- 授予权限
GRANT SELECT, INSERT, UPDATE ON 表名 TO 用户名;
GRANT ALL PRIVILEGES ON DATABASE 数据库名 TO 用户名;
GRANT USAGE ON SCHEMA 模式名 TO 用户名;

-- 撤销权限
REVOKE INSERT ON 表名 FROM 用户名;

-- 查看权限
\dp 表名
```

## 十一、高级查询技巧

### 1. **窗口函数**
```sql
SELECT
    name,
    department,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank,
    AVG(salary) OVER (PARTITION BY department) as avg_dept_salary
FROM employees;
```

### 2. **CTE（公共表表达式）**
```sql
WITH recent_orders AS (
    SELECT * FROM orders WHERE order_date > CURRENT_DATE - INTERVAL '30 days'
),
high_value_orders AS (
    SELECT * FROM recent_orders WHERE amount > 1000
)
SELECT COUNT(*) FROM high_value_orders;
```

### 3. **JSON操作**
```sql
-- 创建JSON字段
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    attributes JSONB
);

-- 插入JSON数据
INSERT INTO products (name, attributes)
VALUES ('Laptop', '{"color": "black", "ram": 16, "brand": "Dell"}');

-- 查询JSON
SELECT name, attributes->>'brand' as brand FROM products;
SELECT * FROM products WHERE attributes @> '{"brand": "Dell"}';
```

## 十二、实用技巧和最佳实践

### 1. **查看查询计划**
```sql
EXPLAIN SELECT * FROM users WHERE id = 1;
EXPLAIN ANALYZE SELECT * FROM users WHERE id = 1;  -- 实际执行
```

### 2. **导入/导出数据**
```bash
# 导出CSV
psql -c "\copy (SELECT * FROM table) TO 'data.csv' WITH CSV HEADER"

# 导入CSV
psql -c "\copy table FROM 'data.csv' WITH CSV HEADER"
```

### 3. **性能监控**
```sql
-- 查看活跃查询
SELECT * FROM pg_stat_activity;

-- 查看表大小
SELECT
    tablename,
    pg_size_pretty(pg_total_relation_size(tablename)) as total_size
FROM pg_tables
ORDER BY pg_total_relation_size(tablename) DESC;

-- 查看索引使用情况
SELECT * FROM pg_stat_user_indexes;
```

### 4. **维护命令**
```sql
-- 分析表（更新统计信息）
ANALYZE 表名;

-- 重建表（回收空间）
VACUUM FULL 表名;

-- 重建索引
REINDEX TABLE 表名;
```

## 十三、快捷方式速查

| 快捷键 | 功能 |
|--------|------|
| `\e` | 打开文本编辑器编辑查询 |
| `\g` | 再次执行最后一条查询 |
| `\s` | 查看命令历史 |
| `\i 文件` | 执行外部SQL文件 |
| `\o 文件` | 将查询结果输出到文件 |
| `\! 命令` | 执行shell命令 |
| `Ctrl + R` | 搜索命令历史 |
| `Ctrl + D` | 退出psql（等同于\q） |
