<!--
 * @Author: xiatian
 * @Date: 2020-04-16 11:52:52
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-12 22:21:18
 -->
---

title:  live2d看板娘配置

meta:
  - name: description
    content:  live2d看板娘配置
  - name: keywords
    content:  live2d

created: 2020/04/16

updated: 2020/04/16
 
tags:
  - live2d
  - 使用教程

---

## 介绍

> VuePress集成Live2D看板娘 Live2D plugin for VuePress.
- 功能还很少，欢迎各位给我提意见和建议~
- [vuepress-plugin-helper-live2d](https://github.com/JoeyBling/vuepress-plugin-helper-live2d) 是为 [VuePress](https://v1.vuepress.vuejs.org/zh/) `1.0.0+`制作的插件。


## 线上预览

> 预览 ➡️ [live2d模板展示](https://zhousiwei.gitee.io/live2d-widget.js/examples/index.html)

## 安装

```cmd
yarn add vuepress-plugin-helper-live2d
```

### or
```cmd
npm install vuepress-plugin-helper-live2d --save
```

## 开始使用
### 引入该插件
在配置文件中引入` vuepress-plugin-helper-live2d `

> 查看 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)。

```js
module.exports = {
  plugins: [
    'vuepress-plugin-helper-live2d',
  ],
}
```

## 插件配置

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}
```

> 此作者的技术分享笔记[查看笔记](https://zhousiwei.gitee.io/ibooks/)