# 整点节律 / hourly-rhythm

## 概述

一个可以播放音乐的app，它可以开启闹钟功能，即到**整点**时停止音乐，然后播放闹铃，闹铃在两次（默认）循环后结束；等5分钟（默认）后继续并播放音乐。此时开启的闹钟功能将结束（两种设置：1. 开启1次；2. 无限）。

> 在工作的时候，通过该软件强制分配工作和休息时间，这样可以不用一直在意时间。

## 安装模拟器运行项目

#### 1. 安装 Andriod Studio

`Android Studio` 可以通过 `JetBrains Toolbox` 安装，`JDK` 安装查看第一个链接；`Android Studio` 的配置和模拟器的安装查看第二个链接。

- [Set Up Your Environment - React Native Docs](https://reactnative.dev/docs/set-up-your-environment)
- [Set up your environment - Expo Docs](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated)

#### 2. 获取项目

1. 克隆项目到本地：`git clone https://github.com/as436845345/hourly-rhythm.git`；
2. 命令行执行：`cd hourly-rhythm && npm install`。

#### 3. 运行项目

1. 打开模拟器；
2. 在项目根目录的命令行执行 `npm run android` 并等待项目在模拟器启动即可。

## v1.0 实现需求

### 界面

- 播放界面；
- 音乐列表界面；
- 闹钟功能界面。

#### 样式

- 背景：白色；
- 字体：Consolas。

#### 播放界面

- 显示播放的音乐名称；
- 播放/暂停；
- 上一条/下一条/随机一条；
- 音乐图片（不确定）。

#### 音乐列表界面

- 切换界面时：
  - 将界面移动到正在播放的音乐中，居中；
- 搜索框（从缓存获取）；
- 音乐列表（从缓存获取）；
- 正在播放的音乐：
  - 额外样式。

#### 闹钟功能界面

- 闹铃相应下拉框，默认2次，1-5次；
- 等待时间下拉框，默认5分钟，1-10分钟可选；
- 闹钟模式选择框：
  - 开启1次；
  - 无限；
- 开启按钮/结束按钮。

## 链接

#### Text

- [Safe areas - Expo Docs](https://docs.expo.dev/develop/user-interface/safe-areas/)

#### Stack

- [Stack - Expo Docs](https://docs.expo.dev/router/advanced/stack/)

#### Tabs

- [Tabs - Expo Docs](https://docs.expo.dev/router/advanced/tabs/)

#### Icons

- [@expo/vector-icons 图标大全](https://icons.expo.fyi/Index)

以下未使用：

- [icomoon](https://icomoon.io/app/#/select/font)
- [iconfont](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=5125027)
- [createiconsetfromicomoon - Expo Docs](https://docs.expo.dev/guides/icons/#createiconsetfromicomoon)

#### List

- [FlashList Docs](https://shopify.github.io/flash-list/docs/)
- [flatlist - React Native Docs](https://reactnative.dev/docs/flatlist)

#### SelectionList

- [Picker - Github](https://github.com/react-native-picker/picker)