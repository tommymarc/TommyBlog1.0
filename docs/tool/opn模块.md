---

title:  opn模块

meta:
  - name: description
    content:  opn模块
  - name: keywords
    content:  opn模块

created: 2020/04/15

updated: 2020/04/15
 
tags:
  - opn

---

## 简介

`opn`模块通常是作为`跨平台的打开文件或者网站的模块`，在web应用中最常见的使用是比如项目开发或者启动的时候打开浏览器进行访问。

>  [模块地址](https://npm.taobao.org/package/opn)

### 优点

::: tip
- 长期维护
- 支持应用参数
- 因为它使用spawn而不是更安全exec
- 修复了大部分未node-open解决的问题
- 包含Linux 的最新xdg-open脚本
:::

## 一键搭建

### 下载脚本

```bash
npm install opn
```

### 使用

```bash
const opn = require('opn');

//Opens the image in the default image viewer
opn('unicorn.png').then(()=>{
    //image viewer closed
});

//Opens the url in the default browser
opn('http://sindresorhus.com');

//Specify the app to open in
opn('http://sindresorhus.com',{app:'firefox'});

//Specify app arguments
opn('http://sindresorhus.com',{app:['google chrome','--incognito']})
```

## api

### 目标

类型为`字符串`。目标通常为你想打开的文件、url或者可执行的文件，一般会用系统中默认的应用打开，当然也可以指定应用以及相关的开启参数。

### 配置项

类型为`对象`，`object`。

- wait 等待，布尔型 默认为false，不需要等待
- app 指定打开的应用，字符串类型windows平台必须设置app，可以设置相关的app启动参数，特殊说明，chrome的指定字符串，win : chrome,  mac : google chrome,  linux : google-chrome

### 实践

自己在本地写一个demo，可以实现这个模块的使用，在使用的时候大家要注意我们除了常规的gulp调用模块只为也可以直接用npm工作流来实现我们的需求，在根目录下新建scripts文件夹，写对应的功能js文件，然后在package.json中直接node执行这个文件即可

```json
//package.json
"scripts": {
    "test":"teset",
    "opn":"gulp",
    "opn2":"node ./scripts/opn"
}
```

```js
//gulpfile.js
let gulp = require('gulp')
let opn = require('opn')
let os = require('os')
let uri = "http://www.baidu.com"
gulp.task("default",function(){
    let osStr = os.platform()
    if(osStr.indexOf("win") > -1){
        opn(uri,{
            app:['chrome']
        })
    }
})
```

```js
//opn.js
let opn = require("opn")
let is = require("os")
let osStr = os.platform()
let uri = "http://www.baidu.com"
if(osStr.indexOf("win") > -1){
    opn(uri,{app:['chrome']})
};
```

##更多探索
我们知道默认的weback也可以通过dev-server来实现启动浏览器和服务，我们看下它是否也是以来这个模块来实现的呢？

在webpack-dev-server的模块中，生产以来中，我们如愿找到了opn的模块依赖，顺便扒一下源代码，webpack-dev-server，我们找到了opn模块的引入以及其对应的使用

```js
const open = require('opn');
if(PushSubscriptionOptions.open){
    let openOptions = {};
    let openMessage = 'Unable to open browser';
    
    if(typeof PushSubscriptionOptions.open === 'string'){
        openOptions = {app: PushSubscriptionOptions.open};
        openMessage += `:${options.open}`;
    }

    open(uri + (options.openPage || ''), openOptions).catch(()=>{
        console.log(`${openMessage}.If you are running in a headless environment, please do not use the open flag.`);
        
    })
}
```

## 代码分析

- 作为尝试我们要知道引入的模块我们一般不会更改的，所以定义用的const，同理大家在定义常量的时候也要注意这点；而在模块内定义的变量尽量用let
- 作为尝试，我们要知道对象的属性为配置或者配置为undefined转为布尔均为false的，所以判断其是否配置只需要options.open即可
- 一个小功能需要的字段以及提示信息需要在功能开始之前进行定义，比如openOptions,openMessage
- 针对引入的字段需要做严谨的判断，比如配置项的options.open的类型，如果存在的话，那么就需要指定对应的app，并修改其报文信息。
- 针对字符串的拼接尽量引用字符串的模版语法${}
- 尽可能的简化语法，简单的字符串拼接不用单独定义一个变量，uri+（options.openPage || ''）,同时针对配置项的异常情况提供一个默认空字符串
- 针对模块的使用异常，进行catch捕捉，如果感觉模块本身的报错不够，可以追加自己的业务的报错信息
