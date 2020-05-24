---

title: CSS 常用小技巧

meta:
  - name: description
    content: CSS 常用小技巧
  - name: keywords
    content: CSS, CSS3, 小技巧

created: 2020/05/13

updated: 2020/05/13
 
tags:
  - CSS
  - 小技巧
  - CSS3
 
---

# CSS 常用小技巧

## css禁止被文字被选中

> 有时需要利用重叠标签仿造效果，即使设置透明色，但是用户选中还是可以看到文字，又无法设置visibility或者display使其隐藏（会使事件不执行），所以需要设置禁止文字被选中的样式

```css
* {
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
```

## CSS3 动画

### CSS3 @keyframes 规则

如需在 CSS3 中创建动画，您需要学习` @keyframes `规则。

` @keyframes `规则用于创建动画。在` @keyframes `中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。


<br>
<p class="big-size">实例:</p>


```css
@keyframes myfirst{
  from {background: red;}
  to {background: yellow;}
}

@-moz-keyframes myfirst /* Firefox */
{
  from {background: red;}
  to {background: yellow;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
  from {background: red;}
  to {background: yellow;}
}

@-o-keyframes myfirst /* Opera */
{
  from {background: red;}
  to {background: yellow;}
}
```

----- 

<br>
<br>


当在 @keyframes 中创建动画时，请把它捆绑到某个选择器，否则不会产生动画效果。

通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：

- 规定动画的名称

- 规定动画的时长

<br>
<p class="big-size">实例:</p>

把 "myfirst" 动画捆绑到 div 元素，时长：5 秒：

```css
div {
  animation: myfirst 5s;
  -moz-animation: myfirst 5s;	/* Firefox */
  -webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
  -o-animation: myfirst 5s;	/* Opera */
}
```


> 注释：必须定义动画的名称和时长。如果忽略时长，则动画不会允许，因为默认值是 0。

----

### 什么是 CSS3 中的动画？

动画是使元素从一种样式逐渐变化为另一种样式的效果。

您可以改变任意多的样式任意多的次数。

请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

0% 是动画的开始，100% 是动画的完成。

为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。

<br>
<p class="big-size">实例:</p>

当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变：

```css
@keyframes myfirst
{
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

@-moz-keyframes myfirst /* Firefox */
{
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

@-o-keyframes myfirst /* Opera */
{
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}
```


<br>
<p class="big-size">实例:</p>

改变背景色和位置：


```css
@keyframes myfirst
{
0%   {background: red; left:0px; top:0px;}
25%  {background: yellow; left:200px; top:0px;}
50%  {background: blue; left:200px; top:200px;}
75%  {background: green; left:0px; top:200px;}
100% {background: red; left:0px; top:0px;}
}

@-moz-keyframes myfirst /* Firefox */
{
0%   {background: red; left:0px; top:0px;}
25%  {background: yellow; left:200px; top:0px;}
50%  {background: blue; left:200px; top:200px;}
75%  {background: green; left:0px; top:200px;}
100% {background: red; left:0px; top:0px;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
0%   {background: red; left:0px; top:0px;}
25%  {background: yellow; left:200px; top:0px;}
50%  {background: blue; left:200px; top:200px;}
75%  {background: green; left:0px; top:200px;}
100% {background: red; left:0px; top:0px;}
}

@-o-keyframes myfirst /* Opera */
{
0%   {background: red; left:0px; top:0px;}
25%  {background: yellow; left:200px; top:0px;}
50%  {background: blue; left:200px; top:200px;}
75%  {background: green; left:0px; top:200px;}
100% {background: red; left:0px; top:0px;}
}
```



<style>
  .big-size{
    font-size:20px;
    margin:20px 0;
  }
</style>