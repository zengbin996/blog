# JavaScript 事件

事件是可以被 JavaScript 侦测到的行为。

### 事件类型

- 鼠标事件

```javascript
onclick; //单击
onmousemove; //鼠标移动
onmouseenter; //鼠标指针移到元素之上
onmouseleave; //鼠标指针移出元素
onmouseover; //鼠标移到元素之上
onmouseout; //鼠标移出元素
oncontextmenu; //右键菜单
ondblclick; //双击
onmousedown; //左键按下
onmouseup; //左键按下
onmousewheel; //鼠标滚轮滚动
DOMMouseScroll; //鼠标滚轮滚动  火狐专用，只能使用二级事件绑定
```

- 键盘事件

```javascript
onkeydown; //某个键盘按键被按下
onkeyup; //某个键盘按键被松开
onkeypress; //牧歌键盘按键被按下并松开
```

- [其他事件](https://www.runoob.com/jsref/dom-obj-event.html)

```
onload  //一张页面或一幅图像完成加载
```

### 事件对象

当事件发生的时候，浏览器会将事件的相关信息保存在内置的全局对象 window.evnet 当中，可以直接使用，其中包括事件类型，操作对象，鼠标位置等。

### 事件的绑定与取消

1. DOM 0 级事件

**元素.事件类型 = 处理函数**
**元素.事件类型 = null （取消）**

```
var elem = document.querySelector("div");

elem.onclick = function() {
	alert("这是一个DOM 0级事件添加的");
}

elem.onclick = null;  //取消点击事件
```

使用 DOM0 级事件添加的事件，如果重复给一个元素添加了同样的事件，那么后面添加的事件会覆盖前面添加的。

2. DOM 2 级事件

**元素.addEventListener(事件类型, 处理函数, 是否捕获)**
**元素.attachEvent(事件类型, 处理函数)** ie 低版本

```
var elem = document.querySelector("div");

elem.addEventListener("click", fun, false);  //绑定点击事件
elem.removeEventListener("click", fun, false);  //取消点击事件

//一下两种为IE低版本方法，此方法需要给事件前面加 on
elem.attachEvent("onclick", fun);  //绑定点击事件
elem.detachEvent("onclick", fun);  //取消点击事件

function fun() {
	alert("这是一个DOM 2级事件添加的");
}
```

### DOM 事件流

事件发生时会在元素节点与根节点之间按照特定的顺序传播，路径所经过的所有节点都会收到该事件，这个过程总共可以分为三个阶段：
事件捕获阶段，确定目标阶段，事件冒泡阶段。
![DOM事件流](https://upload-images.jianshu.io/upload_images/19038988-8700ac819bf7a84c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
注意：在 IE 低版本中没有 window 节点，Document 中最高节点。

在 JavaScript 中，默认是事件冒泡流机制，利用`addEventListener()`添加的事件的第三个参数如果为 true，那么在事件触发时将先捕获后冒泡。

**阻止事件传播的方法**

1. 阻止事件冒泡

```javascript
function stopPropagation(ev) {
  var ev = window.ev || ev;
  if (ev.stopPropagation) {
    ev.stopPropagation(); //标准浏览器
  } else {
    ev.cancelBubble = true; //兼容IE浏览器
  }
}
```

2. 阻止默认事件

```
function preventDefa(ev) {
	if (window.event) { 
		window.event.returnValue = false;  //IE浏览器
	} else {
		ev.preventDefault();  //标准浏览器
	}
}
```

**事件委托**
事件委托利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件

```
function entrust(ev) {
	console.log(ev.target.innerHTML);
	//ev.target 可以获取触发事件的元素
}
```
