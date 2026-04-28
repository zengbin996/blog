# 多列布局方案

## 两栏布局

两栏布局的常见形式：

- 左侧固定，右侧自适应
- 右侧固定，左侧自适应

### 技术原理（左侧固定，右侧自适应）

- 结构上左右各一个盒子，左侧设置固定宽度，右侧宽度设为 `100%`
- 给左侧盒子设置**绝对定位**
- 给右侧盒子内部添加子盒子，并设置左内边距（`padding-left`），留出左侧盒子的空间

### 代码实现

```html
<div class="wrap">
  <div class="left">left 盒子</div>
  <div class="right">
    <div class="son">right 盒子</div>
  </div>
</div>
```

```css
.left {
  position: absolute;
  width: 300px;
  min-height: 200px;
  background-color: aqua;
}

.right {
  width: 100%;
  min-height: 200px;
  background-color: pink;
}

.son {
  padding-left: 300px;
}
```

---

## 三栏布局

三栏布局：左右盒子固定宽度，中间盒子自适应。

### （1）圣杯布局

**技术原理：**

- HTML 结构中，中间盒子放在最前面，左右盒子在后面。这样中间内容可以优先加载，提升用户体验。
- 左右盒子设置固定宽度，中间盒子宽度设为 `100%`。
- 三个子盒子均设置**左浮动**。
- 利用负 `margin-left` 将左右盒子拉到中间盒子两侧：
  - 左侧：`margin-left: -100%`
  - 右侧：`margin-left: -自身宽度`
- 给父元素设置 `padding`，将中间区域显露出来：
  - `padding-left`：左侧盒子的宽度
  - `padding-right`：右侧盒子的宽度
- 利用**相对定位**将左右盒子移回正确位置：
  - 左侧：`left: -自身宽度`
  - 右侧：`right: -自身宽度`

**代码实现：**

```html
<div class="wrap">
  <div class="center">中间盒子</div>
  <div class="left">left 盒子</div>
  <div class="right">right 盒子</div>
</div>
```

```css
.wrap div {
  float: left;
  min-height: 200px;
}

.wrap {
  padding: 0 300px 0 200px;
}

.left {
  position: relative;
  left: -200px;
  width: 200px;
  background: aqua;
  margin-left: -100%;
}

.right {
  position: relative;
  right: -300px;
  width: 300px;
  background: pink;
  margin-left: -300px;
}

.center {
  width: 100%;
  background: yellow;
}
```

### （2）双飞翼布局

双飞翼布局由玉伯提出，始于淘宝 UED。与圣杯布局类似，同样可以实现左右宽度固定、中间自适应的三栏效果。

**区别：** 双飞翼布局在中间盒子内部再添加一个子盒子，通过子盒子的 `margin` 属性来留出两侧空间，无需使用相对定位，实现更简洁。

**代码实现：**

```html
<div class="wrap">
  <div class="center">
    <div class="son">中间内容</div>
  </div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

```css
.wrap > div {
  float: left;
  min-height: 300px;
}

.left {
  width: 300px;
  background-color: tomato;
  margin-left: -100%;
}

.right {
  width: 400px;
  background-color: pink;
  margin-left: -400px;
}

.center {
  width: 100%;
  background-color: skyblue;
}

.son {
  margin: 0 400px 0 300px;
}
```

---

## 等高布局

等高布局是指各子元素在父容器中保持视觉高度相等的布局方式。

![等高布局示意图](https://upload-images.jianshu.io/upload_images/19038988-2d237d34311fca95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1024)

> **常见实现方式：** 内外边距相抵消法（`padding-bottom` 大正值 + `margin-bottom` 等值负值，配合父元素 `overflow: hidden`）、Flexbox 布局（默认 `align-items: stretch`）。
