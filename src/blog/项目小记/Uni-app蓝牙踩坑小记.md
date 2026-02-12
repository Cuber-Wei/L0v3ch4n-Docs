---
title: uni-app蓝牙踩坑小记
createTime: 2025/01/31 21:21:12
permalink: /article/uniapp-bluetooth/
tags:
    - 项目小记
    - uni-app
    - 蓝牙
---

> 之前接了个与硬件建立蓝牙通讯的项目，学到了一些 uni-app 蓝牙操作的知识，也踩了一些坑，特此记录一下防止忘记。

> [!note]
> 在蓝牙模块调用时，采用的是 Promise 链式调用的形式，因此下文所提供的代码片段均为 Promise 形式。
>
> <div style="text-align: center">
>     <img src="https://file.l0v3ch4n.top/L0v3ch4n-Docs-images/ProjectNote/promise链.png" style="height: 80%; width: 80%;" alt="超绝promise链">
> </div>
>
> 文章参考：[uni-app 官网](https://zh.uniapp.dcloud.io/quickstart-hx.html)、
> [蓝牙](https://uniapp.dcloud.net.cn/api/system/bluetooth.html)、
> [低功耗蓝牙](https://uniapp.dcloud.net.cn/api/system/ble.html)

## Step1 初始化蓝牙适配器

使用`uni.openBluetoothAdapter()`函数初始化蓝牙适配器，`uni.getBluetoothAdapterState()`函数获取蓝牙适配器状态。

```javascript
// Step1 初始化蓝牙
function initBlue() {
  return new Promise((resolve, reject) => {
    // [!code word:openBluetoothAdapter]
    uni.openBluetoothAdapter({
      success(res) {
        console.log('初始化蓝牙成功')
        // [!code word:getBluetoothAdapterState]
        uni.getBluetoothAdapterState({
          success(r) {
            console.log('蓝牙状态', r.available)
            if (r.available) {
              resolve()
            }
            else {
              uni.showToast({
                title: '请开启蓝牙',
                icon: 'error',
                duration: 2000,
              })
              reject()
            }
          },
          fail(err) {
            uni.showToast({
              title: '请开启蓝牙',
              icon: 'error',
              duration: 2000,
            })
            reject()
          },
        })
      },
      fail(err) {
        console.log('初始化蓝牙失败')
        console.error(err)
        uni.showToast({
          title: '请开启蓝牙',
          icon: 'error',
          duration: 2000,
        })
        reject()
      },
    })
  })
}
```

## Step2 开始搜索附近的蓝牙设备

使用`uni.startBluetoothDevicesDiscovery()`函数启动搜索附近的蓝牙设备，`uni.onBluetoothDeviceFound()`函数定义搜索到新设备时的回调函数。

```javascript
// Step2 开始搜寻附近设备
function discovery() {
  return new Promise((resolve, reject) => {
    // [!code word:startBluetoothDevicesDiscovery]
    uni.startBluetoothDevicesDiscovery({
      success(res) {
        uni.showLoading({
          title: '正在搜索设备',
          icon: 'none',
        })
        // 开启监听回调
        // [!code word:onBluetoothDeviceFound]
        uni.onBluetoothDeviceFound((devices) => {
          let obj = devices.devices[0]
          console.log(obj.name)
          if (obj.name === conf.deviceName) {
            // 找到目标设备
            // 设置设备ID到同步缓存中
            uni.setStorageSync('deviceId', obj.deviceId)
            uni.hideLoading()
            resolve()
          }
        })
        console.log('搜索蓝牙外围设备完成', res)
      },
      fail(err) {
        console.log(err)
      },
    })
  })
}
```

## Step3 连接蓝牙设备

使用`uni.createBLEConnection(deviceId)`函数连接到目标蓝牙设备。

```javascript
// Step3 连接设备
function connect() {
  return new Promise((resolve, reject) => {
    // [!code word:createBLEConnection]
    uni.createBLEConnection({
      deviceId: uni.getStorageSync('deviceId'), // 设备id
      success(res) {
        console.log('连接成功')
        console.log(res)
        uni.showToast({
          title: '连接成功',
          icon: 'success',
        })
        // Step4 蓝牙连接成功后关闭蓝牙搜索
        stopDiscovery()
        resolve()
      },
      fail(err) {
        uni.showToast({
          title: '连接失败',
          icon: 'error',
        })
        console.log('蓝牙连接失败')
        console.log(err)
        reject()
      },
    })
  })
}
```

> [!important]
> 由于 Setp2 中搜索蓝牙设备的功能比较耗费系统资源，因此在搜索并连接到设备后务必[停止搜索](#step4-停止搜索)。

## Step4 停止搜索

使用`uni.stopBluetoothDevicesDiscovery()`函数停止搜索附近的蓝牙设备。

```javascript
// Step4 停止搜索
function stopDiscovery() {
  // [!code word:stopBluetoothDevicesDiscovery]
  uni.stopBluetoothDevicesDiscovery({
    success(res) {
      console.log('停止成功')
      console.log(res)
    },
    fail(err) {
      console.log('停止失败')
      console.error(err)
    },
  })
}
```

## Step5 获取蓝牙设备所有服务

使用`uni.getBLEDeviceServices(deviceId)`函数获取蓝牙设备所有服务。

```javascript
// Step5 获取蓝牙设备所有服务
function getServices() {
  return new Promise((resolve, reject) => {
    // [!code word:getBLEDeviceServices]
    uni.getBLEDeviceServices({
      deviceId: uni.getStorageSync('deviceId'),
      success(res) {
        console.log(res)
        resolve()
      },
      fail(err) {
        console.error(err)
        reject()
      },
    })
  })
}
```

## Step6 获取蓝牙设备某个服务中所有特征值

使用`uni.getBLEDeviceCharacteristics(deviceId, serviceId)`函数获取蓝牙设备某个服务中所有特征值。

```javascript
// Step6 获取蓝牙设备某个服务中所有特征值
function getCharacteristics() {
  return new Promise((resolve, reject) => {
    // [!code word:getBLEDeviceCharacteristics]
    uni.getBLEDeviceCharacteristics({
      deviceId: uni.getStorageSync('deviceId'),
      serviceId: conf.serviceId,
      success(res) {
        console.log(res)
        resolve()
      },
      fail(err) {
        console.error(err)
        reject()
      },
    })
  })
}
```

## Step7 开启消息监听

使用`uni.notifyBLECharacteristicValueChange(deviceId, serviceId, characteristicId, ...)`函数开启消息监听。

```javascript
// Step7 开启消息监听
function notify(handleFunc) {
  // 这里传入一个回调函数，用于处理接收到的数据。
  // [!code word:notifyBLECharacteristicValueChange]
  uni.notifyBLECharacteristicValueChange({
    deviceId: uni.getStorageSync('deviceId'), // 设备id
    serviceId: conf.serviceId, // 监听指定的服务
    characteristicId: conf.characteristicId, // 监听对应的特征值
    state: true,
    success(res) {
      console.log(res)
      listenValueChange(handleFunc) // 开启监听消息变化，并传入回调函数。
    },
    fail(err) {
      console.error(err)
      uni.showToast({
        title: '监听失败',
        icon: 'error',
      })
    },
  })
}
```

## Step8 监听消息变化

使用`uni.onBLECharacteristicValueChange()`函数监听消息变化并根据需求做相应处理。

```javascript
// Step8 监听消息变化
function listenValueChange(handleFunc) {
  // 这里传入一个回调函数，用于处理接收到的数据。
  // [!code word:onBLECharacteristicValueChange]
  uni.onBLECharacteristicValueChange((res) => {
    let resArray = ab2array(res.value) // 拿到数字数组
    // Something to do...
  })
}
// ArrayBuffer 转数组
function ab2array(buffer) {
  return Array.from(new Uint8Array(buffer))
}
```

## Step9 发送数据

使用`uni.writeBLECharacteristicValue(deviceId, serviceId, characteristicId, value)`函数向蓝牙设备发送数据。

```javascript
// Step9 发送数据
function sendCommand(data) {
  // [!code word:writeBLECharacteristicValue]
  uni.writeBLECharacteristicValue({
    deviceId: uni.getStorageSync('deviceId'),
    serviceId: conf.serviceId,
    characteristicId: conf.characteristicId,
    // 注意：value 是ArrayBuffer类型，需要进行转换。
    value: array2ab(data), // [!code highlight]
    success(res) {
      console.log(`写入成功${res.errMsg}`)
    },
    fail(err) {
      console.error(err)
      uni.showToast({
        title: '指令发送失败',
        icon: 'error',
      })
    },
  })
}
// 数组转Arraybuffer
function array2ab(numbers) {
  // 创建一个ArrayBuffer，其大小等于数字数组的长度
  const buffer = new ArrayBuffer(numbers.length)
  // 创建一个Uint8Array视图来操作buffer
  const uint8View = new Uint8Array(buffer)
  // 将数字填充到Uint8Array中
  for (let i = 0; i < numbers.length; i++) {
    uint8View[i] = numbers[i]
  }
  // 返回ArrayBuffer
  return buffer
}
```

## Step10 断开蓝牙连接

使用`uni.closeBLEConnection(deviceId)`函数断开蓝牙连接。

```javascript
// Step10 断开蓝牙连接
function stopConnection() {
  return new Promise((resolve, reject) => {
    // [!code word:closeBLEConnection]
    uni.closeBLEConnection({
      deviceId: uni.getStorageSync('deviceId'), // 设备id
      success(r) {
        resolve()
      },
      fail(r) {
        console.log(r)
        reject()
      },
    })
  })
}
```

## 踩过的坑

### 为什么收到的数据是乱码（不符合预期）？

1. **协议文档写错了**：可能是文档看错了或者硬件那边把协议改了却没有更新文档。
2. **数据类型不对**：可能是收到的数据没有进行转换，直接在 ArrayBuffer 上面进行了数据解析操作。
3. **硬件波特率设置有问题**：可能是硬件那边的波特率设置有问题，导致数据收发不正常。经过~~测试~~踩坑，波特率设置成 9600 时，
   数据收发正常。

### 为什么采用 Promise 链的形式？

1. **逻辑清晰**：Promise 链的形式可以让代码看起来更加清晰，易于理解。
2. **避免上下文影响**
   ：一些函数的调用会影响到下文，若只是按顺序结构编写逻辑则有可能发生[获取服务](#step5-获取蓝牙设备所有服务)
   先于[蓝牙连接](#step3-连接蓝牙设备)的情况，导致程序报错。
