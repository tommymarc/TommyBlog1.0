---

title:  新手前端不要慌! 救命稻草来了

meta:
  - name: description
    content:  优秀的前端框架，本文会一直更新实用的插件
  - name: keywords
    content:  js,javascript,es6,es7,es8

created: 2020/04/17

updated: 2020/04/17
 
tags:
  - js
  - javascript
  - es6
  - github
  - 插件
  

---

新手阶段的前端面临的最大问题就是: "😥这个咋做?", 这个阶段的前端自己实现交互功能基本是不可能的, 那怎么体现价值呢?

给个建议: "不会写还不会用吗?", 其实js发展这么多年,常见的功能在github上都是可以找到的, 下面分享一些"救命插件"!

## [2020-03-16新增] qs (构造/解析地址栏参数)

```js
qs.stringify({ a: ['b', 'c', 'd'] });
// 'a[0]=b&a[1]=c&a[2]=d'
});

qs.parse('a=b&c=d');
// {a:'b',c:'d'}
```

>  [传送地址](github.com/ljharb/qs)

## [2019-10-25新增] highlight (代码高亮)

```js
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
```

>  [传送地址](https://github.com/highlightjs/highlight.js)

## [2019-10-11新增] blueimp-md5 (md5加密)

```js
var hash = md5('value') // "2063c1608d6e0baf80249c42e2be5804" 
```

> [传送地址](https://github.com/blueimp/JavaScript-MD5)

## [2019-10-10新增] vconsole(移动端调试神器,在手机上可看到控制台)

```js
new VConsole(); // 就这么简单
```

> [传送地址](https://github.com/Tencent/vConsole)

## copy-to-clipboard (剪贴板)

```js
var clipboard = new ClipboardJS('.btn');
```

> [传送地址](https://github.com/zenorocha/clipboard.js)

## FileSaver (文件另存为)

```js
var FileSaver = require('file-saver');
var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "hello world.txt");
```

> [传送地址](https://github.com/eligrey/FileSaver.js)

## excel-js (xlsx转换)

```js
var workbook = XLSX.utils.table_to_book(document.getElementById('table'));
```

> [传送地址](https://github.com/SheetJS/sheetjs)

## jsPDF (生成pdf)

```js
var doc = new jsPDF();
doc.text('Hello world!', 10, 10);
doc.save('a4.pdf');
```

> [传送地址](https://github.com/MrRio/jsPDF)

## fileApi (上传, 支持进度/分段)

```js
var uploadButton = document.getElementById('uploadButton');
FileAPI.event.on(uploadButton, 'change', function (evt){

}
```

> [传送地址](https://github.com/mailru/FileAPI)

## swipe(轮播)

```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">第一页</div>
        <div class="swiper-slide">第二页</div>
        <div class="swiper-slide">第三页</div>
    </div>
</div>
```
```js
new Swiper ('#my-swiper');
```

> [传送地址](https://github.com/nolimits4web/swiper)

## qrcodejs(二维码生成器)

```js
var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "你好js!",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
```

> [传送地址](https://github.com/davidshimjs/qrcodejs)

## autosize (textara高度自适应文字)

```js
autosize(document.querySelectorAll('textarea'));
```

> [传送地址](https://github.com/jackmoore/autosize)

## shake.js (监听手机震动) 

```js
var myShakeEvent = new Shake({
    threshold: 15,
    timeout: 1000
});

window.addEventListener('shake', ()=>{
	// 摇晃触发
}, false);
```

> [传送地址](https://github.com/alexgibson/shake.js)  提示: 适合用来做"摇一摇"的活动页面活游戏

## dayjs (时间格式转换)

```js
dayjs('2018').fromNow(); // 1年前
```

> [传送地址](https://github.com/iamkun/dayjs)

## axios (代替jq的$ajax, 纯js实现, 无依赖)

```js
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  });
```

> [传送地址](https://github.com/axios/axios)

## progressbar (进度条)

```js
var bar = new ProgressBar.Circle(container, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(1.0);  
```

> [传送地址](https://github.com/kimmobrunfeldt/progressbar.js)

## any-rule (正则查询)

支持vscode版本, 查正则再也不用"百度"了.

> [传送地址](https://github.com/any86/any-rule)

## any-touch

一个手势库, 支持tap(点击) / press(按) / pan(拖拽) / swipe(划) / pinch(捏合) / rotate(旋转) 6大类手势, 同时支持鼠标和触屏.

```js
import AnyTouch from "any-touch";
const el = doucument.getElementById("box");
const at = new AnyTouch(el);

at.on("pan", ev => {
  // 拖拽触发.
});
```

> [传送地址](https://github.com/any86/any-touch)

## vue-create-root (插入组件)

把vue组件变成this.$xxx这样的命令.

```js
// main.js
Vue.use(createRoot);

// xxx.vue
import UCom from '../UCom.vue';
{
    mounted(){
        // 默认组件被插入到<body>尾部
        this.$createRoot(UCom, {props: {value:'hello vue!'}});
        // 或者简写为:
        this.$createRoot(UCom, {value:'hello vue!'});
    }
}
```

> [传送地址](https://github.com/any86/vue-create-root)

## be-full (全屏)

任意元素一键全屏.

```js
beFull(document.body);
```

> [传送地址](https://github.com/any86/be-full)

:::tip
文章摘自 [`铁皮饭盒`](https://juejin.im/post/5d904712e51d45781e0f5dd0) 大佬文章
 
:::