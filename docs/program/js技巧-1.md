---

title:  收下这波JS技巧，从此少加班

meta:
  - name: description
    content:  JS技巧
  - name: keywords
    content:  JS技巧,javascript

created: 2020/04/17

updated: 2020/04/17
 
tags:
  - javascript

---

# 常用 JS 函数

## 1.时间格式化

> 界面展示的时间千变万化, 所以一个处理时间的函数，它的重要性就不言而喻了。

```js
export function formatDate (oldDate, fmt) {  
  let date = new Date()  
  if (typeof oldDate === 'string' || typeof oldDate === 'number') {    
    date = new Date(+oldDate)  
  } else {    
    date = oldDate  
  }  
if (/(y+)/.test(fmt)) {    
  fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))  }  
  let o = {    
  'M+': date.getMonth() + 1,    
  'd+': date.getDate(),    
  'h+': date.getHours(),    
  'm+': date.getMinutes(),    
  's+': date.getSeconds()  }  
  function padLeftZero (str) {    
    return ('00' + str).substr(str.length)  
  }  
  for (let k in o) {    
    if (new RegExp(`(${k})`).test(fmt)) {      
      let str = o[k] + ''      
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))    
    }  
  }  
  return fmt
}
```

formatDate 接受俩个参数, oldDate 类型可以是 Date，String，Number。

因为现在用时间戳传递时间真的是蛮多，也蛮方便的，而JS 是一门弱类型语言，所以我将 String 和 Number 类型的数据统一当做时间戳来处理。 

fmt 是格式化的类型：yyyy-MM-dd hh:mm，其中的  yyyy | MM | dd | hh | mm 是分别匹配 年 | 月 | 日 | 时 | 分 的关键字。

其中的连字符是可以随意替换的，只展示年月将其他关键字去掉即可。举几个例子：

- yyyy年MM月dd -> 2019年09月7日

- hh分mm秒 -> 16分53秒

## 2.以“天”为单位获取响应的时间戳

> 通常都会获取三天前的时间，12 个以内的数据，24 小时以内的数据，因此我弄了一个以天为单位获取时间戳的函数

```js
export function setDate(num) {  return Date.now() + num * 24 * 60 * 60 * 1000}
```

时间为正可以获得未来的时间，时间为负可以获得过去时间。举个例子

- 12 个小时之前的时间 -> setDate(-.5)
- 24 个小时之前的时间 -> setDate(-1)
- 三天后的时间 -> setDate(3)

## 3.获取 URL 中的参数
> 这个需求在三大框架的时代应用貌似不多了，不过面试中问的还是蛮多的，了解一下是好的

### 3.1简单实现

```js
var urlParams = new URLSearchParams('?post=1234&action=edit');
console.log(urlParams.get('action')); // "edit"
```

看了一下浏览器支持情况还是蛮好的，除了万恶的 ie

### 3.2复杂实现

```js
function getUrlParams(param){
  // 有赖于浏览器环境， window.location.search 是浏览器函数
  // 意思是:设置或返回从问号 (?) 开始的 URL（查询部分）。       
  var query = window.location.search.substring(1);       
  var vars = query.split("&");       
  for (var i=0;i<vars.length;i++) {               
    var pair = vars[i].split("=");               
    if(pair[0] == param){return pair[1];}       
  }       
  return(false);
}
```

举个例子： http://xuyuechao.top?a=3&b=5&c=8888

- getUrlParams('a') -> 3
- getUrlParams('b') -> 5
- getUrlParams('c') -> 8888

## 4.手机端判断浏览器类型

```js
BrowserInfo = {      
  isAndroid: Boolean(navigator.userAgent.match(/android/ig)),      
  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),      
  isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),      
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),      
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
}
```

目前主要支持 安卓 & 苹果 & ipad & 微信 & 支付宝 & 是否是手机端。

## 5. 数组降维

### 5.1二维数组

```js
let arr = [ [1], [2], [3] ]
arr = Array.prototype.concat.apply([], arr); // [1, 2, 3]
```

### 5.2多维数组降维

```js
let arr = [1, 2, [3], [[4]]]
arr = arr.flat(3) // [1, 2, 3, 4]
```

> flat 有兼容性问题，手机端问题不大。浏览器端不兼容 edge。填 Infinity 可展开任意深度的数组

## 6.深拷贝

> 使用变量 a 拷贝对象 b，改变 a 中的值 b 中的值也会跟着改变，这叫做浅拷贝。要想让 a 独立于 b 就需要深拷贝

### 6.1简易处理

```js
function deepClone() {
    return JSON.parse(JSON.stringify(obj))
}
```

既然是简易处理就有他的不足，上面主要是用了 JSON 的序列化和反序列化。而 JSON 是不支持函数和 undefined 的因此碰到这些情况会缺失，但是已经能够满足大部分情况了

### 6.2复杂处理

复杂处理就需要采用递归的方式了

```js
function deepClone(obj) {  
  function isClass(o) {    
  if (o === null) return "Null";    
  if (o === undefined) return "Undefined";    
    return Object.prototype.toString.call(o).slice(8, -1);  
  }  
  var result;  
  var oClass = isClass(obj);  
  if (oClass === "Object") {    
    result = {};  
  } else if (oClass === "Array") {
    result = [];  
  } else {    
    return obj;  
  }  
  for (var key in obj) {    
    var copy = obj[key];    
    if (isClass(copy) == "Object") {      
      result[key] = arguments.callee(copy);//递归调用    
    } else if (isClass(copy) == "Array") {      
      result[key] = arguments.callee(copy);    
    } else {      
      result[key] = obj[key];    
    }  
  }  
  return result;
}
```

## 7. 防抖 & 节流

> 防抖和节流属于高阶技巧，业务中比较多见的场合也就是搜索内容改变提示信息。即使不加也也不一定能看出区别，但是加了新手维护代码可能会崇拜你哦。

### 7.1防抖

```js
function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}
```

### 7.2节流

```js
function throttle(func, wait) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}
```

## 8. 获取数组极值

```js
function smallest(array){                           
  return Math.min.apply(Math, array);             
}                                                 
function largest(array){                            
  return Math.max.apply(Math, array);             
}  
smallest([0, 1, 2.2, 3.3]); // 0
largest([0, 1, 2.2, 3.3]); // 3.3
```

感谢岁月无影的评论，再此补充用 es6 的实现方式

```js
let list = [1, 2, 3, 4, 5]
Math.max(...list) // 5
Math.min(...list) // 1
```

## 9.判断小数是否相等

```js
function epsEqu(x,y) {  
  return Math.abs(x - y) < Math.pow(2, -52);
}
// 举例
0.1 + 0.2 === 0.3 // false
epsEqu(0.1 + 0.2, 0.3) // true
```

感谢 [IAmFineThanks](https://juejin.im/user/59660a416fb9a06ba2687d6c) 提供的 Number.EPSILON ，Number.EPSILON === Math.pow(2, -52)因此上述方法也可以这么写

```js
function epsEqu(x,y) {  
  return Math.abs(x - y) < Number.EPSILON;
}
```

用户输入的是十进制数字，计算机保存的是二进制数。所以计算结果会有偏差，所以我们不应该直接比较非整数，而是取其上限，把误差计算进去。这样一个上限称为 machine epsilon，双精度的标准 epsilon 值是 2^-53 （Math.pow(2, -53)）

## 总结：

文中的代码可能不一定是最优代码，要是你有更好的代码欢迎评论。

:::tip
 参考资料：


- [函数防抖和节流](https://www.jianshu.com/p/c8b86b09daf0)

- [100个直接可以拿来用的JavaScript实用功能代码片段](https://www.cnblogs.com/wxydigua/p/3314274.html)
 
- [JS对象深度克隆实现](https://blog.csdn.net/u014607184/article/details/52749332)
 
- [不定期更新 JavaScript技巧](https://rockjins.js.org/2017/02/15/2017-02-15-javascript-skill/)
:::

# 一些让 JS 更优雅 / 易读的小技巧

> 对于工程师来说，代码是写一遍、修改很多遍、阅读更多遍的重要产出，可读性至关重要，所以高可读代码的重要性不言而喻。

## 1.用对象代替 switch / if

```js
公共内容:
let a = 'VIP'

场景 1
if (a === 'VIP') {
  return 1
} else if (a === 'SVIP') {
  return 2
}

场景 2
switch(a) {
  case 'VIP':
    return 1
  case 'SVIP':
    return 2
}

场景 3
let obj = {
  VIP: 1,
  SVIP: 2
}
```

这里只是提供了一种方式，具体的使用场景还是要你自己判断。我用的比较多的一个场景是状态映射中文含义，例如支付状态通常获取的是 1， 2，3，4 这种值，但是列表要求显示相应的中文状态 未支付 | 支付中 | 已退款等等

## 2. || 和 && 的妙用

```js
// 场景 1
function b(a) {
  if (a) {
    return a
  } else {
    return ''
  }
}
// 场景 2
function b(a) {
  return a || ''
}
```

上面是 || 的用法，也叫做短路处理。常见于 if 条件中，但是他其实也可以直接用于语句中。

当第一个参数为 true 就会取第一个参数的值，当第一个参数不为 true 就会取第二个参数的值。

&& 正好与 || 相反。

第一个参数 为 true 会取第二个参数的值

## 总结

> 这一部分就只想到了俩个，优化空间蛮大的。希望多才多艺的网友纷纷评论献计让文章无比壮大起来

:::tip
➡️[掘金详细文章地址](https://juejin.im/post/5d7659c76fb9a06b307068ed)
:::
