# DOM 操作

**DOM**（Document Object Model，文档对象模型）定义了访问和操作 HTML 文档的标准方法。DOM 以树形结构表达 HTML 文档，页面中每一个标签、文本、属性都是树上的一个节点。

![Document树](https://upload-images.jianshu.io/upload_images/19038988-36ed582b3bb2a237.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

## 获取元素

| 方法 | 说明 |
|------|------|
| `document.getElementById("id")` | 通过 ID 获取元素，ID 重复时只返回第一个，不存在则返回 `null` |
| `document.getElementsByClassName("class")` | 通过类名获取元素集合（`HTMLCollection`），可通过下标访问 |
| `document.getElementsByTagName("tag")` | 通过标签名获取元素集合，用法同上 |
| `document.getElementsByName("name")` | 通过 `name` 属性获取元素，常用于获取同名表单元素 |
| `document.querySelector("CSS选择器")` | 通过 CSS 选择器获取**第一个**匹配的元素 |
| `document.querySelectorAll("CSS选择器")` | 通过 CSS 选择器获取**所有**匹配元素的集合（`NodeList`） |
| `document.documentElement` | 获取 `<html>` 根标签 |
| `document.body` | 获取 `<body>` 标签 |

```js
var byId       = document.getElementById("myId");
var byClass    = document.getElementsByClassName("myClass")[0];
var byTag      = document.getElementsByTagName("div")[0];
var byName     = document.getElementsByName("username")[0];
var first      = document.querySelector(".myClass");
var all        = document.querySelectorAll("#myId");
var html       = document.documentElement;
var body       = document.body;
```

> **注意**：`getElementsByClassName` 和 `getElementsByTagName` 返回的是**动态集合**，页面 DOM 变化后集合会自动更新；而 `querySelector` / `querySelectorAll` 返回的是静态快照，不会随 DOM 变化而更新。

---

## 获取节点

### 获取子节点

1. **`父节点.children`** — 返回子**元素**集合（`HTMLCollection`），不包含文本节点和注释节点。

```html
<div>
  <p></p>
  <p></p>
  <p></p>
</div>

<script>
  var div = document.querySelector("div");
  console.log(div.children); // HTMLCollection(3) [p, p, p]
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-8c86958e0e7f615a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. **`父节点.childNodes`** — 返回所有子节点（`NodeList`），包含文本节点（空白、换行）和注释节点。

```html
<div>
  <p></p>
  <p></p>
  <p></p>
</div>

<script>
  var div = document.querySelector("div");
  console.log(div.childNodes); // NodeList(7) [text, p, text, p, text, p, text]
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-14e5dedb8f302948.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 获取父节点

1. **`元素.parentNode`** — 获取文档树中的直接父节点。
2. **`元素.offsetParent`** — 获取当前元素最近的**有定位**（`position` 非 `static`）的祖先元素。

```html
<div class="parent">
  <div class="son"></div>
</div>

<script>
  var son = document.querySelector(".son");
  console.log(son.parentNode);   // div.parent
  console.log(son.offsetParent); // div.parent（若 parent 有定位）
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-f65be4d17d2435b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 获取兄弟及首尾节点

1. **`元素.firstElementChild`** — 获取第一个子**元素**节点（IE8 及以下用 `firstChild`，但会包含文本节点）
2. **`元素.nextElementSibling`** — 获取下一个兄弟**元素**节点（IE8 及以下用 `nextSibling`）
3. **`元素.previousElementSibling`** — 获取上一个兄弟**元素**节点（IE8 及以下用 `previousSibling`）

```html
<div class="parent">
  <div class="son1"></div>
  <div class="son2"></div>
  <div class="son3"></div>
</div>

<script>
  var parent = document.querySelector(".parent");
  var son2   = document.getElementsByClassName("son2")[0];
  console.log(parent.firstElementChild);      // div.son1
  console.log(son2.nextElementSibling);       // div.son3
  console.log(son2.previousElementSibling);   // div.son1
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-746a91d800cca063.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 获取节点信息

1. **`节点.nodeName`** — 获取节点名称（元素节点返回大写标签名，文本节点返回 `"#text"`）
2. **`节点.nodeValue`** — 获取文本节点的内容（元素节点该属性为 `null`）
3. **`节点.nodeType`** — 获取节点类型（元素节点=**1**，属性节点=**2**，文本节点=**3**）

```html
<div class="parent">hello world</div>

<script>
  var parent = document.querySelector(".parent");
  console.log(parent.nodeName);                    // "DIV"
  console.log(parent.childNodes[0].nodeValue);     // "hello world"
  console.log(parent.nodeType);                    // 1
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-82f86d243f84bbe1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

## 操作节点

### 创建节点

- **`document.createElement("标签名")`** — 创建一个新的元素节点
- **`document.createTextNode("文本")`** — 创建一个新的文本节点

### 添加节点

- **`父元素.appendChild(节点)`** — 将节点追加到父元素的**末尾**
- **`父元素.insertBefore(新节点, 参考节点)`** — 将新节点插入到参考节点**之前**

```html
<div class="demo">
  <p class="p1">p1</p>
  <p class="p2">p2</p>
</div>

<script>
  var demo = document.getElementsByClassName("demo")[0];
  var p2   = document.getElementsByClassName("p2")[0];

  // 创建节点并添加文本
  var p3   = document.createElement("p");
  var text = document.createTextNode("p3");
  p3.appendChild(text);

  // 在 p2 之前插入 p3
  demo.insertBefore(p3, p2);
  console.log(demo);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-17835564388b5b7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 删除节点

**`父元素.removeChild(目标节点)`** — 从父元素中移除指定子节点

```html
<div class="demo">
  <p class="p1">p1</p>
  <p class="p2">p2</p>
</div>

<script>
  var demo = document.getElementsByClassName("demo")[0];
  var p2   = document.getElementsByClassName("p2")[0];

  demo.removeChild(p2);
  console.log(demo);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-2c2333778589f864.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 替换节点

**`父元素.replaceChild(新节点, 被替换节点)`** — 用新节点替换指定的子节点

```html
<div class="demo">
  <p class="p1">p1</p>
  <p class="p2">p2</p>
</div>

<script>
  var demo = document.getElementsByClassName("demo")[0];
  var p2   = document.getElementsByClassName("p2")[0];

  var p3 = document.createElement('p');
  p3.innerText = "p3";

  demo.replaceChild(p3, p2);
  console.log(demo);
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-693233ec02dce7cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 复制节点

**`节点.cloneNode(deep)`** — 复制节点并返回副本，参数为 `true` 时深度复制（含子节点），`false` 时只复制节点本身

```html
<div class="demo">div1</div>

<script>
  var demo = document.getElementsByClassName("demo")[0];

  var copy = demo.cloneNode(true);
  console.log(copy); // <div class="demo">div1</div>
</script>
```

![](https://upload-images.jianshu.io/upload_images/19038988-72a92673076c1826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
