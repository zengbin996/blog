# DOM 操作

DOM（Document Object Model，文档对象模型），DOM 定义了访问和操作 HTML 文档的标准方法。DOM 以树结构表达 HTML 文档。
![Document树](https://upload-images.jianshu.io/upload_images/19038988-36ed582b3bb2a237.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 获取标签（元素）

1. `document.getElementById("元素的ID名")` 通过 ID 名字来获取元素（如果 ID 名重复了，只能获取到第一个）。如果页面没有该元素，返回 null。
2. `document.getElementsByClassName("类名")` 通过类名来获取元素。此方法将获取到同一类名的一个集合（HTMLCollection 对象），可以通过下标访问（从 0 开始），length 代表长度。即使页面只有一个元素或者没有元素，也会返回这个对象。
3. `document.getElementsByTagName("标签名")` 通过标签名获取元素，使用方法和第二种相似
4. `document.getElementsByName("nameValue")` 通过元素 name 获取元素，通常用于获取表单元素具有相同 name 的标签
5. `document.querySelector("CSS选择符")` 通过 CSS 选择符来获取元素，返回匹配到的第一个元素
   `document.querySelector("CSS选择符")` 通过 CSS 选择符来获取元素，返回匹配到元素集合
6. `document.documentElement` 获取 HTML 标签
   `document.body` 获取 body 标签

```
var ID = document.getElementById("ID");
var className = document.getElementsByClassName("class")[0];
var tagName = document.getElementsByTagName("div")[0];
var nameName = document.getElementsByName("input")[0];
var div1 = document.querySelector(".class");
var div2 = document.querySelectorAll("#ID");
var html = document.documentElement;
var body = document.body;
```

以上方法均可再页面中获取标签，document 表示在全局下获取，在使用时也可以通过其他的节点来获取。其中`document.getElementsByTagName`和`document.getElementsByTagName`属于动态获取，即使页面上的内容是通过 JavaScript 后面动态添加的，也能获取到，而其他的方法是获取不到的。

#### 获取节点

- 获取子节点

1. `父节点.children` 返回保存子元素的集合，是一个 HTMLcollection 对象

```
<div>
	<p></p>
	<p></p>
	<p></p>
</div>

<script type="text/javascript">
	var div = document.querySelector("div");
	console.log(div.children);  //IE8以下会返回文本节点
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-8c86958e0e7f615a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. `父节点.childNodes` 返回一个 NodeList 对象，NodeList 是一种类数组对象，可以通过位置来访问这些节点。

```
<div>
	<p></p>
	<p></p>
	<p></p>
</div>

<script type="text/javascript">
	var div = document.querySelector("div");
	console.log(div.childNodes);  //IE9之前不会返回文本节点
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-14e5dedb8f302948.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 获取父节点

1. `元素.parentNode` 获取文档树中的父节点
2. `元素.offsetParent` 获取当前元素最近的有定位的父节点

```
<div class="parent">
	<div class="son"></div>
</div>

<script type="text/javascript">
	var son = document.querySelector(".son");
	console.log(son.parentNode);
	console.log(son.offsetParent);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-f65be4d17d2435b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 获取其他节点

1. `元素.firstElementChild//(IE)元素.firstChild` 获取元素的首个子节点
2. `元素.nextSibling//(IE)元素.nextElementSibling` 获取下一个兄弟节点
3. `元素.previousSibling//(IE)元素.previousElementSibling`获取上一个兄弟节点

```
<div class="parent">
	<div class="son1"></div>
	<div class="son2"></div>
	<div class="son3"></div>
</div>

<script type="text/javascript">
	var parent = document.querySelector(".parent");
	var son2 = document.getElementsByClassName("son2")[0];
	console.log(parent.firstElementChild);
	console.log(son2.nextElementSibling);
	console.log(son2.previousElementSibling);
</script>

```

![](https://upload-images.jianshu.io/upload_images/19038988-746a91d800cca063.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 获取节点信息

1. `节点.nodeName`获取标签节点标签名字
2. `节点.nodeValue`获取文本节点内容
3. `节点.nodeType`获取文本类型（标签-1，属性-2，文本-3）

```
<div class="parent">hello world</div>

<script type="text/javascript">
	var parent = document.querySelector(".parent");
	console.log(parent.nodeName);
	console.log(parent.childNodes[0].nodeValue);
	console.log(parent.nodeType);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-82f86d243f84bbe1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 操作节点

- 创建节点

1. `document.createElement("标签名")` 创建一个标签对象
2. `document.createTextNode("文本")` 创建一个文本对象

- 添加节点

1. `父元素.appendChild(节点对象)` 向父元素末尾添加一个节点
2. `父元素.insertBefore(子对象,参考节点)`向参考节点前插入一个子节点

```
<div class="demo">
	<p class="p1">p1</p>
	<p class="p2">p2</p>
</div>

<script type="text/javascript">
	var demo = document.getElementsByClassName("demo")[0];
	var p2 = document.getElementsByClassName("p2")[0];

	//创建节点并添加文本
	var p3 = document.createElement("p");
	var text = document.createTextNode("text");
	p3.appendChild(text);

	//在p2之前插入p3
	demo.insertBefore(p3, p2);
    console.log(demo);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-17835564388b5b7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 删除节点
  `父元素.removeChild(需要删除的节点)`

```
<div class="demo">
	<p class="p1">p1</p>
	<p class="p2">p2</p>
</div>

<script type="text/javascript">
	var demo = document.getElementsByClassName("demo")[0];
	var p2 = document.getElementsByClassName("p2")[0];

	demo.removeChild(p2);
	console.log(demo);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-2c2333778589f864.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 替换节点
  `父元素.replaceChild(新节点,需要替换的节点)`

```
<div class="demo">
	<p class="p1">p1</p>
	<p class="p2">p2</p>
</div>

<script type="text/javascript">
	var demo = document.getElementsByClassName("demo")[0];
	var p2 = document.getElementsByClassName("p2")[0];

	var p3 = document.createElement('p');
	p3.innerText = "p3";

	demo.replaceChild(p3, p2);
	console.log(demo);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-693233ec02dce7cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 复制节点
  `被复制节点.cloneNode(Boolean)`复制节点并返回，参数代表是否复制节点内容

```
<div class="demo">div1</div>

<script type="text/javascript">
	var demo = document.getElementsByClassName("demo")[0];

	var copy = demo.cloneNode(true);
	console.log(copy);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-72a92673076c1826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
