---

title: css应用视觉设计

meta:
  - name: description
    content: css应用视觉设计
  - name: keywords
    content: css，视觉设计，设计，视觉

created: 2020/04/15

updated: 2020/04/15
 
tags:
  - css


---

## 应用视觉设计：创建一个 CSS 线性渐变
HTML元素的背景色并不局限于单色。css还提供了颜色过渡，也就是渐变。可以通过`background`里面的`linear-gradient()`来实现线性渐变，下面是它的语法：
```css
background:linear-gradient(gradient_direction,颜色1，颜色2，颜色3，...)
```
第一个参数指定了颜色过渡的方向-它的值是角度，90deg代表垂直渐变，45deg的渐变角度和反斜杠方向差不多。剩下的参数指定了渐变颜色的顺序：
```css
background:linear-gradient(90deg,red,yellow,rgb(204,204,255));
```

## 应用视觉设计：使用 CSS 线性渐变创建条纹元素
`repeating-linear-gradient()`函数和`linear-gradient()`很像，主要区别就是`repeating-linear-gradient()`有很多参数，为了便于理解，只用到角度值和起止渐变颜色值。

角度就是渐变的方向。起止渐变颜色值代表渐变颜色及其宽度值，由颜色值和起止位置组成，起止位置用百分比或者像素值表示。

例子：渐变开始于0像素位置的yellow，然后过渡到距离开始位置40像素的blue。由于下一个起止渐变颜色值的起止位置也是40像素，所以颜色直接渐变成第三个颜色值green，然后过渡到距离开始位置80像素的red
```css
repeating-linear-gradient( 45deg, yellow 0px, blue 40px, green 80px)

repeating-linear-gradient(45deg, yellow 0px, yellow 40px, black 40px, black 80px )
```
如果每对起止渐变颜色值的颜色都是相同的，由于是在两个相同的颜色间过渡，那么中间的过渡色也为同色，接着就是同色的过渡色和下一个起止颜色，最终产生的效果就是条纹

## 应用视觉设计：通过添加细微图案作为背景图像来创建纹理

添加一个精致的背景图，可以增加页面的质感，让页面更美观。关键是要找到一个平衡点，抢了内容的风头，宣兵夺主可就不妙了。

`background`属性支持使用url()函数通过链接的方式引入一个指定纹理或样式的图片。图片链接地址在括号内，一般会用引号抱起来

用`body`选择器设置整个页面的`background`为url （https://i.imgur.com/MJAkxbh.png指定的图片。）

```css
body{
     background:url(https://i.imgur.com/MJAkxbh.png);
}
```

## 应用视觉设计：使用 CSS Transform scale 属性可以更改元素的大小

css属性`transform`里面的`scale()`函数，可以用来改变元素的显示比例。下面的例子把页面的段落元素放大了2倍：
```css
p{
    transform:scale(2); //scale() 调整元素的缩放比例
}
```

## 应用视觉设计：使用CSS Transform scale 属性在悬停时缩放元素

`transform`属性有很多函数，可以对元素进行调整大小、移动、旋转、翻转等操作。当使用伪类描述元素的指定状态如 `:hover`时，`transform`属性可以方便的给元素添加交互

下面是当用户悬停段落元素时，段落大小缩放到原始大小2.1倍的例子：

```css
p:hover{
     transform:scale(2.1); //缩放比例为2.1
}
```

## 应用视觉设计：使用 CSS Transform skex 属性沿X轴倾斜元素

接下来要介绍的`transform`属性是`skewX`,`skewX`使选择的元素沿着X轴(横向)翻转指定的角度。

下面的代码沿着X轴翻转段落元素-32度

```css
p{
     transform:skewX(-32deg);//沿着X轴旋转-32度
}
```

## 应用视觉设计：使用 CSS 创建一个图形

术语表：

- blur-radius => 模糊半径，

- spread-radius => 辐射半径，

- transparent => 透明的，

- border-radius => 圆角边框

通过使用选择器选择不同的元素并改变其属性，你可以创造一些有趣的形状。

比如新月：你可以使用`box-shadow`属性来设置元素的阴影，`border-radius`属性控制元素的圆角边框。

首先你将会创建一个圆的、透明的对象，它具有模糊阴影并略微向两边递减。如你所见，这个阴影其实就是新月形状。

为了创建一个圆形的对象，`border-radius`应该被设置成50%。

你应该还记得之前关卡的`box-shadow`属性以及它的依次取值 `offset-x`、`offset-y`、`blur-radius`、`spread-radius`和`颜色值`。其中`blur-radius`和`spread-radius`是可选的。

```css
box-shadow:offset-x offset-y blur-radius spread-radius color;
box-shadow:25px 10px 0px 0px yellow;
```

```html
<style>
.content{
     position:absolute;
     top:0;
     right:0;   
     bottom:0;
     left:0;
     margin:auto;
     height:100px;
     width:100px;

     background-color:transparent; //原图形透明
     border-radius:50%;盒子的圆滑度
     box-shadow:25px 10px 0px 0px blue;
}


</style>
<div class="content"></div>
```

## 应用视觉设计：使用 CSS 和 HTML 创建更复杂的形状

世界上最流行的形状非心形莫属，用纯CSS创建一个心形。需要先了解 `:before`和 `:after`伪类。

这些伪类用来在选择元素之前和之后添加一些内容。在下面的例子里，`:before`伪类元素用来给`class`为`heart`的元素添加一个正方形

```css
.heart{
      position:absolute;
      margin:auto;
      top:0;
      bottom:0;
      right:0;
      left:0;
      width:50px;
      height:50px;
      
      background-color:pink;
      transform:rotate(-45deg);
}
.heart:before{
      content:"";
      background-color:pink;
      border-radius:50%;
      position:absolute;
      height:50px;
      width:50px;
      bottom:25px;
      left:0px;
}

.heart:after{
      content:"";
      background-color:pink;
      border-radius:50%;
      position:absolute;
      height:50px;
      width:50px;
      top:0px;
      right:25px;
}
```

`:before`和`:after`必须配合`content`来使用。这个属性通常用来给元素添加内容诸如图片或文字。

当`:before`和`:after`伪类用来添加某些形状而不是图片或文字时，`content`属性仍然是必须的，但是它的值可以是空字符串。

在上面的例子，`class`为`heart`元素的`:before`伪类添加了一个粉色的正方形，正方形的`height`和`width`分别为50px。由于设置了其边框半径为50%，所以正方形为圆形，同时其相对位置为距离`left` 0px，以及向`top`偏移25px。

class为`heart`元素的`:after`伪类添加了一个粉色的正方形，正方形的`height`和`width`分别为50px。由于设置了其边框半径为50%，所以正方形为圆形，同时其相对位置为距离`left` 0px，`bottom`偏移25px

## 应用视觉设计：了解 CSS 的关键帧和动画是如何工作的

如果要给元素添加动画，你需要了解`animation`属性以及`@keyframes`规则。

`animation`属性控制动画的外观，`@keyframes`规则控制动画中各阶段的变化。总共有8个animation属性。

- animation-name设置动画的名称，也就是要绑定的选择器的@keyframes的名称
- animation-duration设置动画所花费的时间
- animation-fill-mode:forwards; 设置动画结束始终高亮
- animation-iteration-count:infinite;设置动画播放次数,infinite无限循环播放
@keyframes能够创建动画。创建动画的原理是将一套css样式逐渐变化为另一套样式。具体是通过设置动画期间对应的frames的css的属性，以百分比来规定改变的时间，或者通过关键词`from` 和 `to`，等价于0%和100%。打个比方，css里面的0%属性就像是电影的开场镜头。css里面的100%属性就是元素最后的样子，相当于电影里面的片尾。css在对应的时间内给元素过渡添加效果。

- opacity:0.1;设置动画元素隐身度

```html
<style>
div{
      height:40px;
      width:70%;
      background:black;
      margin:50px auto;
      border-radius:5px;
}

#rect{
      animation-name:rainbow;
      animation-duration:4s;
}
@keyframes rainbow{
      0%{
            background-color:blue;
      }
      50%{
            background-color:green;
      }
      100%{
            background-color:yellow;
      }
}
</style>
<div id="rect"></div>
```

## 应用视觉设计：使用CSS动画更改按钮的悬停状态

你可以在按钮悬停时使用`@keyframes`改变按钮的颜色

下面是在图片悬停时改变图片宽度的例子

```html
<style>
     img:hover{
          animation-name:width;
          animation-duration:1s;         
     }
     @keyframes width{
          100%{
               width:40px;
          }
     }
</style>
<img src="https://bit.ly/smallgooglelog" alt="Google's Logo" />
```

下面是在按钮悬停时改变按钮颜色的例子

```html
<style>
     button{
          border-radius:5px;
          color:white;
          background-color:#0f5897;
          padding:5px 10px 8px 10px;
     }

     button:hover{
          animation-name:background-color;
          animation-duration:1s;
     }
     @keyframes background-color{
          100%{
               background-color:#4791d0;
          }
     }
</style>
<button>注册</button>
```

## 应用视觉设计：修改动画的填充模式

注意动画在1s之后重制了，所以按钮又变回了原来的颜色。而我们想要的效果是按钮在悬停时始终高亮。

这可以通过吧`animation-fill-mode`设置成forwards来实现

`animation-fill-mode`指定了在动画结束时元素的样式。你可以像这样设置它：

```css 
animation-fill-mode:forwards;
```

## 应用视觉设计：使用 CSS 动画创建运动

当元素的`position`被指定，如`fixed`或者`relative`时，css偏移属性right、left、top、bottom可以用在动画规则里创建动作。

就像下面的例子展示的那样，你可以在50%`keyframes`处设置top属性为50px，在开始(0%)和最后(100%)`keyframes`处设置为0px，以产生项目向下运动，然后返回的动作效果。

```css 
@keyframes rainbow{
     0%{
          background-color:blue;
          top:0px;
     }
     50%{
          background-color:green;
          top:50px;
     }
     100%{
          background-color:yellow;
          top:0px;
     }
}
```

## 应用视觉设计：通过从左到右淡化元素来创建视觉方向

改变动画元素的`opacity`，使其在到达屏幕右侧时渐隐。

在展示的动画里，具有渐变背景的圆形元素在50%标记的`@keyframes`规则处向右移动。

```html
<style>
#ball{
      width:70px;
      height:70px;
      position:absolute;
      left:20%;
      border-radius:50%;
      background:linear-gradient(
            35deg,
            #ccffff,
            #ffcccc
      );
      animation-name:fade;
      animation-duration:3s;
}
@keyframes fade{
      100%{
            left:60%;
            opacity:0.1;
      }
}
</style>
<div id="ball"></div>
```

## 应用视觉设计：使用无限的动画计数制作永不停止的动画

`animation-iteration-count`，这个属性允许你控制动画循环的次数。

```css
animation-iteration-count:3; //动画会播放3次
animation-iteration-count:infinite; //动画会一直运行
```

## 应用视觉设计：使用无限的动画计数制作 CSS 心跳

用`animation-iteration-count`属性创造持续动画的例子，它基于前面创建的心形。

心跳动画的每一秒包含两个部分。

heart元素`(包括:before和:after)`使用transform属性改变其大小，背景div使用background属性改变其颜色

```html
<style>
.balls{
     width:50px;
     height:50px;
     border-radius:50%;
     background:linear-gradient(
          35deg,
          #ccffff,
          #ffffcc
     );
     position:absolute;
     margin-top:50px;
     animation-name:bounce;
     animation-duration:2s;
     animation-iteration-count:infinite;
}
.ball1{
     left:27%;
     animation-timing-function:linear;
}
.ball2{
     left:56%;
     animation-timing-function:ease-out;
}
@keyframes bounce{
     0%{
          top:0px;
     }
     100%{
          top:249px;
     }
}
</style>
<div class="balls ball1"></div>
<div class="balls ball2"></div>
```

## 应用视觉设计：学习贝塞尔曲线的原理

除了`animation-timing-function`定义不同时间内的动画速度。css还提供了贝塞尔曲线(Bezier curves)来更出色的控制动画的速度曲线

在css动画里，用`cubic-bezier`来定义贝塞尔曲线。曲线的形状代表了动画的速度。曲线在1*1坐标系统内，曲线的X轴代表动画的时间间隔(类似于时间比例尺)，Y轴代表动画的改变。

cubic-bezier函数包含了1*1网格里的4个点：p0、p1、p2、p3.

其中p0和p3是固定值，代表曲线的起始点和结束点，坐标值依次是(0,0)和(1,1)。你只需要设置另外两点的x值，y值，设置的这两点确定了曲线的形状从而确定了动画的速度曲线。在css里面通过(x1,y1,x2,y2)来确定p1和p2.综上，下面就是css贝塞尔曲线的例子

```css
animation-timing-function:cubic-bezier(0.25,0.25,0.75,0.75);
```

在上面例子里，两个点的x和y值相等(x1=0.25=y1 和 x2=0.75=y2)，如果你还记得初中几何，结果是从原点到点(1，1)的一条直线。动画速度呈线性，效果和linear一致。换言之，元素匀速运动

## 应用视觉设计：使用贝塞尔曲线移动图形

前面涉及的`ease-out`预定义值描述了动画以告诉开始低俗结束。`ease-out`预定义值可以用贝塞尔曲线函数实现。

通俗的讲，将一条直线放在范围只有1的坐标轴中，并从中间拿p1和p2两个点来拉扯 （X轴的取值区间是[0,1]，Y轴任意），最后形成的曲线就是动画的贝塞尔加速度曲线。

```css
animation-timing-function:cubic-bezier(0,0,0.58,1); //高速开始，低速结束 ease-out
```

## 应用视觉设计：使用贝塞尔曲线让运动更加自然

当`animation-iteration-count`值为 `infinite` 时`animation-timing-function`会自动循环 keyframe。由于是在动画周期中间（50%处）设置的 keyframe 规则，最终的结果是球向上和球向下是两个同样的动画过程。

:::primaryLong
注意 y2 的值是大于 1 的。虽然贝塞尔曲线是在 1*1 的坐标系统内 x 值只能在 0 到 1，但是 y 值是可以大于 1 的。这样才能模拟杂耍球运动。
:::

```css
- animation-name:yourAnimationName;     //设置动画名称
- animation-duration:4s;                //设置动画效果时间
- animation-fill-mode:forwards;         //设置动画结束高亮
- animation-timing-function:ease;       //设置动画进展速度
- animation-iteration-count:infinite;   //设置动画执行次数
- opacity:0.5;                          //设置动画淡化程度
- cubic-bezier(0,0,0.5,0.5)             //贝塞尔曲线，设置动画进展速度
```