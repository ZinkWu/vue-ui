# 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/ZinkWu/vue-ui.svg?branch=master)](https://travis-ci.org/ZinkWu/vue-ui)

## 介绍

这是我在工作之余做的一个 UI 框架，请勿投入生产环境使用

## 开始使用
1.添加 CSS

使用本框架前，请在 CSS 中开启 border-box
```css
*，*:before,*:after{
    box-sizing: border-box;
}
```
请将默认颜色的CSS代码加入到你的代码中（后续会完善）
```css
html{
    --button-height: 32px;
    --font-szie: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-hover-color: #666
}
```
IE 15 及以上浏览器支持

2.安装
```
npm i --save vue-ui-test-96
```

3.引入
```javascript
import {Button, ButtonGroup, Icon} from 'vue-ui-test-96'
import 'vue-ui-test-96/dist/index.css'

export default {
  name: 'App',
  components: {
    "v-button": Button
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


