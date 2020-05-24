/*
 * @Author: xiatian
 * @Date: 2020-04-14 11:43:22
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-12 20:37:52
 */
module.exports = [
  'serve',
  ['@vssue/vuepress-plugin-vssue', {
    platform: 'github',
    owner: 'tommymarc',
    repo: 'blog-vssue',
    clientId: '',
    clientSecret: '',
  }],
  ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
  }],
  ['vuepress-plugin-helper-live2d',{
    live2d: {
      // 是否启用(关闭请设置为false)(default: true)
      enable: true,
      // 模型名称(default: hibiki)>>>取值请参考：
      // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
      model: 'haruto',
      display: {
        position: "left", // 显示位置：left/right(default: 'right')
        width: 135, // 模型的长度(default: 135)
        height: 300, // 模型的高度(default: 300)
        hOffset: 5, //  水平偏移(default: 65)
        vOffset: 0, //  垂直偏移(default: 0)
      },
      mobile: {
        show: false // 是否在移动设备上显示(default: false)
      },
      react: {
        opacity: 0.9 // 模型透明度(default: 0.8)
      }
    }
  }],
  ['@dw/d-audio']
]
