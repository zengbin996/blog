# 常用网页布局

## 一、多列布局

### （1）宽度自适应布局

#### 两栏布局

常见形式：

- 左侧固定，右侧自适应
- 右侧固定，左侧自适应

**技术原理（左侧固定，右侧自适应）：**

- 左右各一个盒子，左侧设置固定宽度，右侧宽度设为 `100%`
- 给左侧盒子设置**绝对定位**
- 给右侧盒子内部添加子盒子，并设置 `padding-left` 留出左侧空间

**代码实现：**

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

#### 三栏布局

- 左右盒子固定宽度，中间盒子自适应

##### （1）圣杯布局

**技术原理：**

- HTML 结构中，中间盒子放在最前面，左右盒子在后面，使中间内容优先加载，提升用户体验。
- 左右盒子设置固定宽度，中间盒子宽度设为 `100%`。
- 三个子盒子均设置**左浮动**。
- 利用负 `margin-left` 将左右盒子拉到中间盒子两侧：
  - 左侧：`margin-left: -100%`
  - 右侧：`margin-left: -自身宽度`
- 给父元素设置 `padding` 将中间区域显露出来：
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

##### （2）双飞翼布局

双飞翼布局由玉伯提出，始于淘宝 UED。与圣杯布局类似，同样实现左右固定、中间自适应的三栏效果。

**区别：** 双飞翼布局通过在中间盒子内部添加子盒子，利用子盒子的 `margin` 留出两侧空间，无需相对定位，实现更简洁。

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

### （2）等高布局

等高布局是指各子元素在父容器中保持视觉高度相等的布局方式。

![等高布局](https://upload-images.jianshu.io/upload_images/19038988-0e255cce014313e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 方法一：内外边距相抵消（模拟等高）

利用 `padding-bottom` 设置较大正值、`margin-bottom` 设置相同负值相互抵消，产生视觉等高效果。父元素必须设置 `overflow: hidden` 以裁剪多余区域。

```html
<div class="wrap">
  <div class="left">left 盒子</div>
  <div class="center">center 盒子</div>
  <div class="right">right 盒子</div>
</div>
```

```css
.wrap {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.wrap div {
  float: left;
  min-height: 200px;
}

.left {
  width: 200px;
  background-color: tomato;
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}

.center {
  width: 500px;
  background-color: yellow;
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}

.right {
  width: 300px;
  background-color: violet;
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}
```

##### 方法二：利用嵌套背景实现等高

通过多层嵌套 div 各自负责一列的背景色，利用子元素内容撑开父元素高度的特性实现真正的等高效果。

```html
<div class="wrap">
  <!-- col1、col2、col3 分别负责各列的背景色 -->
  <div class="col1">
    <div class="col2">
      <div class="col3">
        <div class="left">left 盒子</div>
        <div class="center">center 盒子</div>
        <div class="right">right 盒子</div>
      </div>
    </div>
  </div>
</div>
```

```css
.wrap {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.col1 {
  /* 负责第一列的背景颜色 */
  background-color: tomato;
}

.col2 {
  /* 负责第二列的背景颜色，向右偏移露出第一列 */
  background-color: pink;
  position: relative;
  left: 200px;
}

.col3 {
  /* 负责第三列的背景颜色，向右偏移露出第二列 */
  background-color: yellow;
  position: relative;
  left: 500px;
}

.left {
  float: left;
  width: 200px;
  min-height: 200px;
  margin-left: -700px;
}

.center {
  float: left;
  width: 500px;
  min-height: 200px;
  margin-left: -500px;
}

.right {
  float: left;
  width: 300px;
  min-height: 200px;
}
```

---

## 二、弹性盒子布局（Flexbox）

弹性盒子是 CSS3 引入的新布局模式，可以快速实现各种对齐和分配需求。

![弹性盒子](https://upload-images.jianshu.io/upload_images/19038988-741d407333068222.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```css
.box {
  display: flex;        /* 块级弹性容器 */
  display: inline-flex; /* 行内弹性容器 */
}
```

> **注意：** 设置 Flex 布局之后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。

**弹性容器的特点：**

1. 子元素默认**横向排列**，横轴为**主轴**，纵轴为**交叉轴**。
2. 子元素默认继承父元素高度。
3. 子元素宽度默认由内容撑开。
4. 子元素宽度之和超过父元素宽度时，子元素自动收缩。

#### 弹性容器的属性

**flex-direction（主轴方向）**

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

**justify-content（主轴对齐方式）**

_以下假设主轴从左到右：_

- `flex-start`（默认值）：左对齐。
- `flex-end`：右对齐。
- `center`：居中对齐。
- `space-between`（常用）：两端对齐，子元素之间间距相等。
- `space-around`：每个子元素两侧间距相等，子元素间距是子元素与边框间距的两倍。

**align-items（交叉轴对齐方式）**

_以下假设交叉轴从上到下：_

- `flex-start`：交叉轴起点对齐。
- `flex-end`：交叉轴终点对齐。
- `center`：交叉轴居中对齐。
- `baseline`：按第一行文字基线对齐。
- `stretch`（默认值）：若子元素未设置高度或高度为 `auto`，将拉伸占满容器高度。

**flex-wrap（换行控制）**

- `nowrap`（默认值）：不换行。
- `wrap`：换行，第一行在上方。
- `wrap-reverse`：换行，第一行在下方。

#### 弹性子项的属性

**order**：用整数定义排列顺序，数值越小越靠前，默认为 `0`，支持负值。

**align-self**：单独控制某子元素的交叉轴对齐方式，覆盖容器的 `align-items` 设置。

**flex-shrink（收缩比例）**：默认值为 `1`（空间不足时等比收缩）。设置为 `0` 则禁止收缩。

**flex-grow（放大比例）**：默认值为 `0`（有剩余空间也不放大）。设置为 `1` 则占满剩余空间。

**flex（简写属性）**：`flex-grow`、`flex-shrink` 和 `flex-basis` 的简写。

详情参考 [菜鸟教程 - flex](https://www.runoob.com/cssref/css3-pr-flex.html)

---

## 三、响应式布局

响应式布局是指使用一套代码适配多种设备屏幕尺寸，根据用户的屏幕大小自动调整页面排版，无需为每种终端单独编写代码。

#### 实现手段

**1. viewport meta 标签**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`content` 参数说明：

| 参数 | 说明 |
|------|------|
| `width` | 可视区域宽度，可设为数值或 `device-width` |
| `height` | 同 `width` |
| `initial-scale` | 页面首次显示时的缩放级别，`1.0` 表示按实际尺寸显示 |
| `maximum-scale` | 用户可放大的最大比例 |
| `minimum-scale` | 用户可缩小的最小比例 |
| `user-scalable` | 是否允许用户缩放，`no` 表示禁止缩放 |

**2. 流式布局 + 媒体查询**

- 宽度使用百分比
- 图片设置 `max-width: 100%`，防止图片超出容器
- 使用 `@media` 媒体查询针对不同屏幕编写样式

```css
@media screen and (min-width: 屏幕最小宽度) {
  /* 针对该宽度范围的样式 */
}
```

常用断点示例：

```css
/* 大屏显示器（>1200px） */
@media screen and (max-width: 1200px) {}

/* 平板电脑（768px ~ 979px） */
@media (min-width: 768px) and (max-width: 979px) {}

/* 小屏（<=800px） */
@media screen and (max-width: 800px) {}

/* 横向手机（<=640px） */
@media screen and (max-width: 640px) {}

/* 小型手机（<=480px） */
@media (max-width: 480px) {}

/* iPad 横屏 */
@media screen and (max-device-width: 1024px) and (orientation: landscape) {}

/* iPad 竖屏 */
@media screen and (max-device-width: 768px) and (orientation: portrait) {}

/* iPhone 和智能手机 */
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {}
```

#### 响应式布局优缺点总结

**优点：**

1. 一套代码适配多种设备，降低多端开发和维护成本。
2. 兼容性好，可在不同设备下正常浏览。
3. 后期维护便捷，修改样式不会影响其他设备的展示。

**缺点：**

1. 页面会加载所有端的 CSS 代码，PC 端加载时也会包含移动端的冗余代码，影响加载性能。
2. 图片和视频统一加载，低端设备也会加载高清资源，浪费用户流量。
3. 局限性较大，不适合内容复杂的大型门户网站或电商网站，过多的代码会影响运行速度。
