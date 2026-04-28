# 网页常用布局方式

## 两列布局（左边固定，右边自适应）

![两列布局](https://upload-images.jianshu.io/upload_images/19038988-c188a4a94090ef3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

HTML 结构：

```html
<div class="box">
  <div class="left">左边</div>
  <div class="right">右边</div>
</div>
```

### 方法 1：浮动

```css
.left {
  width: 200px;
  float: left;
  background-color: green;
}

.right {
  background-color: blue;
  overflow: hidden;   /* 方法一：触发 BFC */
  /* margin-left: 200px; */ /* 方法二：设置左外边距 */
}
```

### 方法 2：inline-block 布局

```css
.box {
  font-size: 0; /* 消除 inline-block 元素之间的空格影响 */
}

.left {
  background-color: green;
  display: inline-block;
  width: 200px;
  font-size: 16px;
}

.right {
  background-color: blue;
  display: inline-block;
  width: calc(100% - 200px);
  font-size: 16px;
}
```

### 方法 3：绝对定位

```css
.box {
  position: relative;
}

.left {
  position: absolute;
  width: 200px;
  background-color: green;
}

.right {
  background-color: blue;
  margin-left: 200px;      /* 方法一：设置左外边距 */

  /* 方法二：绝对定位充满右侧 */
  /* position: absolute; */
  /* left: 200px; */
  /* right: 0; */
}
```

### 方法 4：表格布局

```css
.box {
  display: table;
  width: 100%;
}

.left {
  width: 200px;
  background-color: green;
  display: table-cell;
}

.right {
  background-color: blue;
  display: table-cell;
}
```

### 方法 5：弹性盒子布局（推荐）

```css
.box {
  display: flex;
}

.left {
  width: 200px;
  background-color: green;
}

.right {
  flex: 1;
  background-color: blue;
}
```

### 方法 6：网格布局

```css
.box {
  display: grid;
  grid-template-columns: 200px auto;
}

.left {
  background-color: green;
}

.right {
  background-color: blue;
}
```

---

## 三列布局（左右固定，中间自适应）

![三列布局](https://upload-images.jianshu.io/upload_images/19038988-becc4d014354f6ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> **注意：** 出于性能和用户体验考虑，应将中间主体内容的标签写在左右两侧之前，使其优先加载和渲染。

### 方法 1：圣杯布局

HTML 部分：

```html
<div class="parent">
  <div class="center">中间</div>
  <div class="left">左边</div>
  <div class="right">右边</div>
</div>
```

CSS 部分：

```css
.center,
.left,
.right {
  float: left;
}

.left,
.right {
  width: 200px;
  background-color: red;
}

.left {
  margin-left: -100%;
}

.right {
  margin-left: -200px;
}

.center {
  width: 100%;
  padding: 0 200px;
  box-sizing: border-box;
  background-color: green;
}
```

### 方法 2：双飞翼布局

HTML 部分：

```html
<div class="parent">
  <div class="box column">
    <div class="center">中间</div>
  </div>
  <div class="left column">左边</div>
  <div class="right column">右边</div>
</div>
```

CSS 部分：

```css
.column {
  float: left;
}

.left,
.right {
  width: 200px;
  background-color: red;
}

.box {
  width: 100%;
}

.left {
  margin-left: -100%;
}

.right {
  margin-left: -200px;
}

.center {
  margin: 0 200px;
  background: green;
}
```

---

## 等高布局

![等高布局](https://upload-images.jianshu.io/upload_images/19038988-95f60c9c94df895d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 方法 1：内外边距相消法（模拟等高）

利用 `padding-bottom` 设置超大正值、`margin-bottom` 设置相同负值相互抵消，配合父元素 `overflow: hidden` 裁剪多余区域，产生视觉等高效果。

HTML 部分：

```html
<div class="container">
  <div class="box1">
    <p>内容一</p>
    <p>内容二</p>
  </div>
  <div class="box2">
    <p>内容</p>
  </div>
  <div class="box3">
    <p>内容</p>
  </div>
</div>
```

CSS 部分：

```css
.container {
  overflow: hidden;
}

.box1,
.box2,
.box3 {
  float: left;
  margin-left: 20px;
  padding-bottom: 9999px;
  margin-bottom: -9999px;
  width: 300px;
  background: skyblue;
}
```

### 方法 2：表格布局

使用 `display: table` 和 `display: table-cell`，单元格默认等高。

### 方法 3：弹性盒子布局（推荐）

Flex 容器的 `align-items` 默认值为 `stretch`，子元素会自动拉伸到相同高度。

```css
.container {
  display: flex;
  align-items: stretch; /* 默认值，可省略 */
}
```

### 方法 4：网格布局

Grid 布局同一行内的子元素默认等高。
