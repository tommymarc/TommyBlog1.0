---

title: FormData 对象的使用

meta:
  - name: description
    content: FormData 对象的使用
  - name: keywords
    content: js，javaScript，formData，upload，upload组件，上传,上传文件

created: 2020/04/15

updated: 2020/04/15
 
tags:
  - js
  - javaScript
  - upload
  - file


---

## FormData 对象的使用
`FormData`对象用以将数据编译成键值对，以便用`XMLHttpRequest`来发送数据。其主要用于发送表单数据，但亦可用于发送带键数据(keyed data)，而独立于表单使用。如果表单`enctype`属性设为`multipart/form-data` ，则会使用表单的`submit()`方法来发送数据，从而，发送数据具有同样形式。

## 从零开始创建FormData对象
你可以自己创建一个FormData对象，然后调用它的`append()`方法来添加字段，像这样：
```js
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); //数字123456会被立即转换成字符串 "123456"

// HTML 文件类型input，由用户选择
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like 对象
var content = '<a id="a"><b id="b">hey!</b></a>'; // 新文件的正文...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```

:::tip
注意：字段 "userfile" 和 "webmasterfile"  都包含一个文件. 字段 `"accountnum"` 是数字类型，它将被FormData.append()方法转换成字符串类型(FormData 对象的字段类型可以是 Blob, File, 或者 string: 如果它的字段类型不是Blob也不是File，则会被转换成字符串类)。
:::
上面的示例创建了一个FormData实例，包含`"username"`, `"accountnum"`, `"userfile"` 和 `"webmasterfile"`四个字段，然后使用`XMLHttpRequest`的send()方法发送表单数据。字段 `"webmasterfile"` 是 Blob类型。一个 Blob对象表示一个不可变的, 原始数据的类似文件对象。Blob表示的数据不一定是一个JavaScript原生格式。 `File` 接口基于Blob，继承 blob功能并将其扩展为支持用户系统上的文件。你可以通过 Blob() 构造函数创建一个Blob对象。

##  通过HTML表单创建FormData对象
想要构造一个包含Form表单数据的FormData对象，需要在创建FormData对象时指定表单的元素。
:::tip
注意：FormData将仅使用具有name属性的输入字段。
:::
```js
var formData = new FormData(someFormElement);
```
示例
```js
var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```
你还可以在创建一个包含Form表单数据的FormData对象之后和发送请求之前，附加额外的数据到FormData对象里，像这样：
```js
var formElement = document.querySelector("form");
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
```
这样你就可以在发送请求之前自由地附加不一定是用户编辑的字段到表单数据里。

## 使用FormData对象上传文件
你还可以使用FormData上传文件。使用的时候需要在表单中添加一个文件类型的input：
```html
<form enctype="multipart/form-data" method="post" name="fileinfo">
  <label>Your email address:</label>
  <input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
  <label>Custom file label:</label>
  <input type="text" name="filelabel" size="12" maxlength="32" /><br />
  <label>File to stash:</label>
  <input type="file" name="file" required />
  <input type="submit" value="Stash the file!" />
</form>
<div></div>
```
然后使用下面的代码发送请求：
```js
var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {

  var oOutput = document.querySelector("div"),
      oData = new FormData(form);

  oData.append("CustomField", "This is some extra data");

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "stash.php", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
    } else {
      oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
    }
  };

  oReq.send(oData);
  ev.preventDefault();
}, false);
```

:::tip
注意：如果FormData对象是通过表单创建的，则表单中指定的请求方式会被应用到方法open()中 。
:::

你还可以直接向FormData对象附加File或Blob类型的文件，如下所示：

```js
data.append("myfile", myBlob, "filename.txt");
```

使用append()方法时，可以通过第三个可选参数设置发送请求的头 Content-Disposition 指定文件名。如果不指定文件名（或者不支持该参数时），将使用名字“blob”。

如果你设置正确的配置项，你也可以通过jQuery来使用FormData对象：

```js
var fd = new FormData(document.querySelector("form"));
fd.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false,  // 不处理数据
  contentType: false   // 不设置内容类型
});
```

## 不使用FormData对象,通过AJAX提交表单和上传文件
如果你想知道不使用FormData对象的情况下，可以通过[AJAX序列化](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)和[提交表单](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files)。