---

title: antd配置config-overrides.js文件

meta:
  - name: description
    content: antd配置config-overrides.js文件
  - name: keywords
    content: js，antd，ant-design，按需加载， customize-cra ，react-app-rewired

created: 2020/04/15

updated: 2020/04/15
 
tags:
  - js
  - ant-design
  - antd
  - npm
  - react
  - customize-cra


---

## antd配置config-overrides.js文件

### 下载antd 包 

```cmd
npm install antd
```

### 下载依赖包（定义组件按需求打包）

```cmd
npm install react-app-rewired customize-cra babel-plugin-import
```

### 自定义less-loader,改变antd默认样式

```cmd
npm install less less-loader
```

### 根目录定义加载按需打包的js配置模块: config-overrides.js

```js
const {override,fixBabelImports,addLessLoader} =require('customize-cra');

module.exports = override(
    // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true,//自动打包相关的样式 默认为 style:'css'
    }),
    // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars:{'@primary-color':'#1DA57A'},
    })
);
```

### 修改packge.json 的配置文件

```js
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react--app-rewired test",
    "eject": "react-scripts eject"
  },
```

### 在app.js引入需要的antd模块：

```js
import React ,{Component} from 'react';
import { Button , message} from 'antd';

/* 
应用的根组件
*/

export default class App extends Component{

    handleClick = ()=>{
        message.success('成功啦')
    }
    render(){
        return (
            <Button type="primary" onClick={this.handleClick}>测试antd</Button>
            
    
            )
    }

}
```
