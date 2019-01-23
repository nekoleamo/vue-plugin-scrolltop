# 一个简单的Vue返回顶部插件

## 使用说明

1、npm install --save vue-plugin-scrolltop

2、引入

```js
import VuePluginScrolltop from 'vue-plugin-scrolltop'

import 'vue-plugin-scrolltop/dist/vue-plugin-scrolltop.css'
```

3、使用

```html
<template>
  <div id="app">
    <router-view/>
    <scroll-top :step="100" :scroll="100"></scroll-top>
  </div>
</template>
```

4、参数

> `step` 参数表示滚动速度，默认100，越大越快

> `scroll` 参数表示距离底部的距离，默认100px

5、效果

[![kAUhb6.gif](https://s2.ax1x.com/2019/01/23/kAUhb6.gif)](https://imgchr.com/i/kAUhb6)