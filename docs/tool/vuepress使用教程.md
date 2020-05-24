---

title:  VuePress简单教程

meta:
  - name: description
    content:  VuePress简单教程
  - name: keywords
    content:  VuePress

created: 2020/04/15

updated: 2020/04/15
 
tags:
  - VuePress
  - 使用教程

---

## 1）VuePress是什么
- 像vue官网的文档页面，因为vuePress就是尤大大的一个力作
- [vuePress](https://www.vuepress.cn)官网介绍介绍的很详细，这里只做搭建VuePress项目教程

## 2）安装

> 注意 VuePress基于node 8.0+

```cmd
npm install -g vuepress
```

>- 创建工作文件夹 `study`
>- 进入文件夹
>- 快速初始化`package.json`

```cmd
npm init -y
```

### 新建文件夹docs

配置`package.json`，添加下述兩行

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
进入`docs`文件夹 创建 `README.md`文件

此时运行命令

```cmd
npm run  docs:dev
```

此时文件夹结构

```
study
+--docs
+----README.md
+--package.json
```

运行访问`http://localhost:8080/`

结束运行 ，执行打包命令

```cmd
npm run docs:build
```

- 然后看文件变化 多了个`node_modules`
- `docs` 多了个 `.vuepress`文件夹

``` js{3,7}
study
+--docs
+----.vuepress
+------ dist   //打包后的文件夹
+----README.md
+--package.json
+--node_modules
```

我们在`.vuepress` 创建 `config.js` 文件

添加一下配置

```js
module.exports = {
  title: '个人博客',  // 设置网站标题
  description : 'Adroi',
  base : '/v1/adroi-h5/adroiapi/',
  themeConfig : {
    nav : [
        { text: '接口定义', link: '/apiword' },
        { text: '接口字段定义', link: '/api' },
        { text: '附录：错误码', link: '/error' }
    ],
    sidebar: {
        '/' : [
      "/", //指的是根目录的md文件 也就是 README.md 里面的内容
            "apiword",  根目录创建 apiword.md文件
            "api",根目录创建 api.md文件
            "error" 根目录创建 error.md文件
        ]
    },
    sidebarDepth : 2
  }
}
```

## 3）添加静态图片

```js
![An image](./baner.png)
```

## 4)添加指定样式

> 添加样式 分两种 一种不用预编译处理、一种使用

```html
//不使用预编译处理
//直接在md文件底部添上
<style></style>
```

```html
//使用预编译处理
首先需要安装所需的模块  举例：stylus
npm i stylus stylus-loader -D
<style lang="stylus"></style>
```

## 5)vuePress可添加js代码

> 既然是尤大大的作品 那肯定是支持vue语法的
>
> 在MD文件中直接写入js的语法

```html
<script>
  export default{
    //...do something
}
</script>
```

## 6)代码发布或上传至服务器

> 关于发布问题：首先我们知道在打包后的文件都是静态文件之前的MD文件都被打包成html静态文件了,其次在文件config.js中 base至关重要

### 6-1发布在云盘中如百度云盘 github上可直接通过链接访问

> 在云盘上创建根目录如vuepress，然后在config中 bese这部分就填写`/vuepress`,然后进行打包操作，再然后把打包后的文件上传至云盘上的vuepress文件中

### 6-2 通过服务器发布

在服务器上安装Apache或者nginx 这里拿nginx举例：

至于nginx 安装 以及配置文件的解读使用 我这里就不详述了，不了解的童鞋可以自己查阅相关文件

> 同样base的填写很重要

```js
//为了简单明了 我们把打包好的文件放入nginx中html文件下  之前的文件可以清空
server {
      listen  8081;  //监听8081端口
      server_name  localhost; //localhost:8081即可指向也可写别名如local.vuepress.com.cn  那我们访问这个端口的别名加端口就可以
      location / {
          root   /nginx/nginx-1.9.15/html; //至关重要你的入口文件在本机的位置
          index  index.html index.htm; //入口文件
      }
  }
```

### 6-3可以通过koa启用服务发布

> 具体代码不详述：可通过koa来学习