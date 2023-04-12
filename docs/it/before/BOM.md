# BOM 操作

BOM（Browser Object Model 浏览器对象模型），BOM 提供了了很多的对象，用于访问浏览器的功能。这些功能都是由浏览器厂商所提供的，没有一个统一的标准，每个浏览器的 BOM 操作可能有一定的差异。BOM 的很多操作权限都很高（例如关闭浏览器窗口），可能某一些浏览器提供商会禁止使用这些功能，因此我们在实际开发中应该尽量减少 BOM 操作。

### body 位置属性

1. client 系列

- `元素.clientWidth` 元素的可视宽（width + 左右 padding）
- `元素.clientHeight` 元素的可视高 （height + 上下 padding）
- `元素.clientTop` 上边框的高度（border-top-width）
- `元素.clientLeft` 左边框的高度（border-left-width）

2. offset 系列

- `元素.offsetWidth` (width+padding+border)
- `元素.offsetHeight` (height+padding+border)
- `元素.offsetTop` 元素顶部到定位父元素的距离(没有定位父元素，则到 body)
- `元素.offsetLeft` 元素左边到定位父元素的距离(没有定位父元素，则到 body)

3. scroll 系列

- `元素.scrollTop` 被卷去的高
- `元素.scrollLeft` 被卷去的宽
- `元素.scrollWidth` 元素实际内容宽
- `元素.scrollHeight` 元素实际内容高

### window 对象

所有的浏览器都支持 window 对象。在浏览器中，window 对象有着双重的角色，他既是 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的一个 GLobal 对象。

1. `window.alert("我是一个警告框");//弹出一个警告框`
   ![](https://upload-images.jianshu.io/upload_images/19038988-df89bdf2c12dc066.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. `window.confirm("是否重置");//返回一个Boolean值`
   ![](https://upload-images.jianshu.io/upload_images/19038988-7510952eda2e8861.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. `window.prompt("提示信息", 默认值);//以字符串返回用户输入的值`
   ![](https://upload-images.jianshu.io/upload_images/19038988-95b30e273a69fb22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4. `open()//打开一个窗口`
   ![](https://upload-images.jianshu.io/upload_images/19038988-4616428c2efb00bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5. `close()//关闭窗口,如果没有参数默认关闭当前窗口`

### location 对象

location 是最有用的 BOM 对象之一，它提供了当前窗口加载的文档有关的信息，还提供了一些导航功能。location 既是 window 对象的属性，也是 document 对象的属性。

1. `hash "#contents"` 返回 URL 中的 hash（#号后跟零或多个字符），如果 URL 中不包
   含散列，则返回空字符串
2. `host "www.wrox.com:8080"` 返回服务器名称和端口号（如果有）
3. `hostname "www.wrox.com"` 返回不带端口号的服务器名称
4. `href "http:/www.wrox.com"` 返回当前加载页面的完整 URL。而 location 对象的`toString()`方法也返回这个值
5. `pathname "/WileyCDA/"` 返回 URL 中的目录和（或）文件名
6. `port "8080"` 返回 URL 中指定的端口号。如果 URL 中不包含端口号，则这个属性返回空字符串
7. `protocol "http:"` 返回页面使用的协议。通常是`http:`或`https:search "?q=javascript" `返回 URL 的查询字符串。这个字符串以问号开头
8. `console.log(location.search);` // 返回 URL 的查询字符串。这个字符串以问号开头

### history 对象

history 对象保存了用户的上网记录

1. `history`: 历史记录
   `console.log(window.history);`
2. `go()`: 跳转页面
3. `back()`: 返回
4. `forward()`: 前进

### navigator 对象

navigator 对象的属性用于检测网页的浏览器类型

```
<script type="text/javascript">
	console.log(window.navigator);;
	window.onload = function() {
		var txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
		txt += "<p>浏览器名称: " + navigator.appName + "</p>";
		txt += "<p>浏览器版本: " + navigator.appVersion + "</p>";
		txt += "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
		txt += "<p>硬件平台: " + navigator.platform + "</p>";
		txt += "<p>用户代理: " + navigator.userAgent + "</p>";
		txt += "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
		document.write(txt);
	}
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-aa863999ffde767a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/19038988-3dfc6b250d188e17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
