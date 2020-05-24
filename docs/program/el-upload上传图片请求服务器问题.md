---

title: el-upload组件上传文件，后台无法获取到参数

meta:
  - name: description
    content: element UI upload组件:data=“data”,上传文件额外参数，后台无法获取到参数问题
  - name: keywords
    content: vue，element-ui，ui，upload，upload组件，上传,上传文件,后台无法获取

created: 2020/04/15

updated: 2020/04/15
 
tags:
  - element-ui
  - Vue
  - el-upload


---




# element UI upload组件:data=“data”,上传文件额外参数，后台无法获取到参数问题

用element UI的upload上传组件上传文件，上传文件没有问题，但是通过data传参时，nodejs后台怎么也接收不到参数，一直显示`“{}”`；

> 详细文章可见我的博客[博客园](https://www.cnblogs.com/tommymarc/p/12190522.html)

data 参数， 是后台上传如果有额外的其他参数的时候所post 的参数
并且，upload组件中上传的文件，默认参数名为file 所以上传后台的时候，需要自己将其处理
```js
const formdata = new FormData()
formdata.append('newImages', file)
formdata.append('CardId', this.editId)
formdata.append('type', this.imgType)
```
后台所接文件格式为form-data， 所以我们需要创建一个FormData()， 然后将我们将后台所需要的参数(newImages, CardId, type) 全部都append 到formdata中，然后通过axios.post将它传给后台即可