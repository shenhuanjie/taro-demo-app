#Taro

多端统一开发框架，支持用 React 的开发方式编写一次代码，生成能运行在微信小程序、H5、React Native 等的应用。

>
>参看：Taro官网 https://taro.aotu.io/

## 概况

* 这是一个使用Taro构建的订餐APP

本项目使用React Taro构建，使用npm 部署，请确保开发环境中安装
* Node.Js
* npm

## 框架安装

```bash
$ npm install -g @tarojs/cli
$ taro init app
```

## 部署

```bash
# Git clone 最新代码
$ git https://github.com/shenhuanjie/taro-demo-app.git
$ cd taro-demo-app
$ npm install
```
## 运行

```bash
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp
```
