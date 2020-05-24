---

title: Vue 监听鼠标按键

meta:
  - name: description
    content: Vue 监听鼠标左键 鼠标右键以及鼠标中键修饰符click.left&contextmenu&click.middle
  - name: keywords
    content: js，javaScript，Vue，鼠标左键，鼠标，鼠标右键,鼠标中键，修饰符

created: 2020/04/15

updated: 2020/04/15
 
tags:
  - js
  - javaScript
  - vue
  - click
  - mouseClick


---

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="vue.js"></script>
    <title id="title">{{title}}</title>
</head>
<body>
<div id="ask"><!--vue不能控制body和html的标签-->
    <!--鼠标左键-->
    <div :style="left_style" @click.left="mouseclick('左')"></div>
    <!--鼠标中键-->
    <div :style="middle_style" @click.middle="mouseclick('中')"></div>
    <!--鼠标右键-->
    <!--加prevent为了屏蔽浏览器自带右键-->
    <div :style="right_style" @contextmenu.prevent="mouseclick('右')"></div>

</div>
<script>
    var vue = function (options){new Vue(options)};
    vue({
        el:'#title',
        data:{
            title:'Vue 监听鼠标左键 鼠标右键以及鼠标中键修饰符click.left&contextmenu&click.middle'
        }
    });
    var app = vue({
        el:'#ask',
        data:{
            left_style:{border:'solid 2px red',height:'200px'},
            right_style:{border:'solid 2px blue',height:'200px'},
            middle_style:{border:'solid 2px yellow',height:'200px'},
        },
        methods:{
            mouseclick(where){
                alert('点击鼠标'+where+'键触发');
            },

        }
    });

</script>
</body>
</html>
```

