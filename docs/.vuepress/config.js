/*
 * @Author: xiatian
 * @Date: 2020-04-14 11:33:19
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-14 12:57:42
 */
const path = require('path')
const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins')

module.exports = {
  base: '/tommymarc/',
  head,
  evergreen: true,
  theme: path.resolve(__dirname, '../../tommy'),
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true,
  },
  host: 'localhost',
  port: 4208,
  dest: 'tommyblog',
  extraWatchFiles: [
    '/docs/.vuepress/config.js',
  ],
}
