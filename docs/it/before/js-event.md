# JavaScript 事件

**事件**是可以被 JavaScript 侦测到的用户行为或浏览器行为。通过绑定事件处理函数，可以在特定行为发生时执行相应的代码逻辑。

---

## 事件类型

### 鼠标事件

```javascript
onclick        // 鼠标单击
ondblclick     // 鼠标双击
onmousedown    // 鼠标按键按下
onmouseup      // 鼠标按键松开
onmousemove    // 鼠标移动
onmouseenter   // 鼠标指针移入元素（不冒泡）
onmouseleave   // 鼠标指针移出元素（不冒泡）
onmouseover    // 鼠标指针移入元素或其子元素（冒泡）
onmouseout     // 鼠标指针移出元素或其子元素（冒泡）
oncontextmenu  // 右键菜单
onmousewheel   // 鼠标滚轮滚动（Firefox 使用 DOMMouseScroll，需通过 addEventListener 绑定）
```

### 键盘事件

```javascript
onkeydown   // 某个键盘按键被按下
onkeyup     // 某个键盘按键被松开
onkeypress  // 某个键盘按键被按下并松开（不推荐，已从标准中移除）
```

### 其他常用事件

```javascript
onload    // 页面或图片完成加载
oninput   // 表单元素的值发生变化
onchange  // 表单元素失焦且值发生变化
onsubmit  // 表单提交
onfocus   // 元素获得焦点
onblur    // 元素失去焦点
onscroll  // 元素滚动条滚动
onresize  // 窗口尺寸发生变化
```

更多事件类型参考：[MDN 事件参考](https://developer.mozilla.org/zh-CN/docs/Web/Events) 或 [菜鸟教程事件参考](https://www.runoob.com/jsref/dom-obj-event.html)

---

## 事件对象

当事件触发时，浏览器会自动将事件相关信息封装为一个**事件对象**，作为参数传入事件处理函数。事件对象中包含事件类型、触发元素、鼠标位置、键盘按键等信息。

```javascript
element.addEventListener('click', function (event) {
  console.log(event.type);    // 事件类型，如 "click"
  console.log(event.target);  // 实际触发事件的元素
  console.log(event.clientX, event.clientY); // 鼠标相对于视口的坐标
});
```

> IE 低版本通过 `window.event` 全局对象获取事件对象，现代浏览器通过回调参数获取。

---

## 事件的绑定与取消

### DOM 0 级事件

直接将处理函数赋值给元素的事件属性。同一事件只能绑定一个处理函数，后面赋值的会覆盖前面的。

```javascript
var elem = document.querySelector("div");

// 绑定
elem.onclick = function () {
  alert("DOM 0 级事件");
};

// 取消
elem.onclick = null;
```

### DOM 2 级事件（推荐）

使用 `addEventListener` / `removeEventListener`，同一事件可绑定多个处理函数，不会相互覆盖。

```javascript
var elem = document.querySelector("div");

function handler() {
  alert("DOM 2 级事件");
}

// 绑定（第三个参数：false = 冒泡阶段触发，true = 捕获阶段触发）
elem.addEventListener("click", handler, false);

// 取消（必须传入与绑定时相同的函数引用）
elem.removeEventListener("click", handler, false);

// IE 低版本（事件名需加 "on" 前缀）
elem.attachEvent("onclick", handler);   // 绑定
elem.detachEvent("onclick", handler);   // 取消
```

---

## DOM 事件流

事件发生时，会在元素节点与根节点之间按特定顺序传播，路径上经过的所有节点都会收到该事件。事件流分为三个阶段：

1. **捕获阶段**：事件从 `window` → `document` → `html` → ... → 目标元素的父节点，由外向内传播。
2. **目标阶段**：事件到达实际触发的目标元素。
3. **冒泡阶段**：事件从目标元素向上传播，直至 `window`，由内向外。

![DOM事件流](https://upload-images.jianshu.io/upload_images/19038988-8700ac819bf7a84c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

JavaScript 默认采用**事件冒泡**机制。`addEventListener` 的第三个参数为 `true` 时，处理函数在捕获阶段执行；为 `false`（默认）时，在冒泡阶段执行。

> 注意：IE 低版本不支持捕获阶段，`Document` 是其最高节点（无 `window` 节点）。

---

## 阻止事件传播

### 阻止冒泡

```javascript
function stopPropagation(ev) {
  var ev = ev || window.event;
  if (ev.stopPropagation) {
    ev.stopPropagation(); // 标准浏览器
  } else {
    ev.cancelBubble = true; // IE 低版本兼容
  }
}
```

### 阻止默认行为

```javascript
function preventDefault(ev) {
  var ev = ev || window.event;
  if (ev.preventDefault) {
    ev.preventDefault(); // 标准浏览器
  } else {
    ev.returnValue = false; // IE 低版本兼容
  }
}
```

---

## 事件委托

**事件委托**利用事件冒泡机制，将子元素的事件处理函数统一绑定到父元素上，只需一个处理函数即可管理所有子元素的同类事件。适用于动态添加的子元素，性能更优。

```html
<ul id="list">
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ul>

<script>
  var list = document.getElementById('list');

  list.addEventListener('click', function (ev) {
    var target = ev.target; // 获取实际触发事件的子元素
    if (target.tagName === 'LI') {
      console.log(target.innerHTML);
    }
  });
</script>
```
