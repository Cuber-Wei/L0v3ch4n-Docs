---
title: webpack
createTime: 2025/03/14 10:24:27
permalink: /interview/webpack/
---

::: tip 提问

1. 对webpack的了解
2. webpack的工作原理
3. loader和plugin有什么区别
4. webpack优化

:::

## webpack

webpack是一个用于现代javascript应用程序的静态打包工具。

## 工作原理

1. 读取`webpack`配置参数
2. 启动`webpack`，创建`compiler`对象，开始解析项目
3. 从入口文件`entry`开始解析，并找到其导入的**依赖模块**，递归遍历分析，形成**依赖关系树**
4. 对不同的文件类型资源的依赖模块文件，使用对应的`Loader`进行转换，最终转为`webpack`的有效模块
5. 在编译过程中，`webpack`通过**发布订阅模式**，向外抛出一些`hooks`，`webpack`的`Plugin`通过监听各个`hooks`，
   执行插件任务，扩展`webpack`的功能，干预输出结果
6. 根据输出配置`output`，将打包构建好的资源文件输出

## loader

将其他类型的资源文件转换为webpack能够处理的有效模块。

## plugin

plugin是webpack的核心功能，其目的是在于解决loader无法解决的其他事上。

plugin可以在webpack访问到webpack的整个生命周期，并且可以访问到compile对象，以及当前编译过程对象`compilation`,
这使得plugin拥有非常强大的能力。

## loader和plugin的区别

loader仅能对其关联的模块类型进行解析转换，不能访问到webpack的整个生命周期

plugin是对webpack的扩展，可以访问到webpack整个生命周期。

## webpack 优化

以下内容是针对`webpack@5`的优化方向建议：

### 构建流程分析

在进行优化前，首先要搞清楚有哪些地方出现了痛点，需要进行优化。

- 编译速度分析

  借助`speed-measure-webpack-plugin`插件，可以帮助我们获取插件、loader的耗时。
  消耗时间比较长的，认为可以优化的，则放到优化计划中。

- 打包体积分析

  借助`webpack-bundle-analyzer`插件，可以帮助我们获取打包后生成的bundle的体积中，各个模块的位置、体积等信息。

### 编译速度优化

1. 配置缓存方案。

   在webpack的配置文件中 声明 配置：`{ cache: { type: 'filesystem } }`,来启用对模块和chunk的持久缓存。
   可以大幅度优化 二次启动构建速度、打包速度等。

2. 对使用的loader，根据其作用，指定 include 或者 exclude，减少loader的应用范围。

3. 管理资源

   使用webpack5内置的`asset/resource`代替`assets loader`(如， url-loader、file-loader、raw-loader)。

4. 多进程打包编译

   使用`thread-loader`将耗时长的loader进行包装，放到其他的线程中进行处理。

### 打包体积优化

重复多次出现的模块，可以抽到共享chunk中，非首屏加载必须的模块，可以抽到异步chunk中。

（还有对各种资源进行压缩等）