# 常用网页布局

## 一、多列布局

### （1） 宽度自适应布局

#### 两栏布局

- 左侧固定右侧自适应
- 右侧固定左侧自适应

**技术原理**（左侧固定右侧自适应）

- 结构上左右两个盒子，左侧设置为固定宽度，右侧设置为 100%
- 给左侧盒子设置绝对定位
- 给右侧盒子设置一个子盒，并且给盒子设置左外边距，留出左盒空间

**代码**

```
<div class="wrap">
	<div class="left">left盒子</div>

	<div class="right">
		<div class="son">right盒子</div>
	</div>
</div>

```

```
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

**技术原理**

- 结构上需要三个盒子，左侧盒子、右侧盒子、中间盒子。中间盒子放在前面，两边盒子后面，这样做的目的是因为中间的内容一般比较重要，放在前面可以优先加载，利于用户体验。
- 左右盒子设置固定宽度，中间盒子设置 100%。
- 给子盒子设置浮动
- 利用 margin-left 将左右盒子拉到中间盒子两侧。
  左边 margin-left:-100%；右边 margin-left:-自身的宽度；
- 将中间盒子露出来，给三个盒子的父元素设置
  padding-left：左侧盒子的宽度；padding-right：右侧盒子的距离；
- 利用相对定位将左右盒子归位
  左侧设置 left：-自身的宽度；左侧设置 right：-自身的宽度；

**代码实现**

```
<div class="wrap">
	<div class="center">中间盒子</div>
	<div class="left">left盒子</div>
	<div class="right">right盒子</div>
</div>
```

```
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

双飞翼布局是玉伯大大提出来的，始于淘宝 UED
与圣杯布局相似，双飞翼布局也可以实现左右宽度跨度固定，中间自适应。
双飞翼布局在解决中间盒子位置是给中间盒子添加一个父盒子并且设置 margin 属性来露出和两侧盒子重叠的区域，其他实现方法与圣杯布局相同。

**代码**

```
<div class="wrap">
	<div class="center">
		<div class="son">中间内容</div>
	</div>
	<div class="left">left</div>
	<div class="right">right</div>
</div>
```

```
.wrap>div {
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

### （2） 等高布局

等高布局是指子元素在父元素中高度相等的布局方式。
![](https://upload-images.jianshu.io/upload_images/19038988-0e255cce014313e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 方法一 内外间距相抵消

该方法使用 margin-bottom 和 padding-bottom 一个设置较大正值，另一个设置相同负值，相互抵消实现视觉等高。使用该方法必须给父元素设置`overflow:hidden;`
**代码**

```html
<div class="wrap">
  <div class="left">left盒子</div>
  <div class="center">center盒子</div>
  <div class="right">right盒子</div>
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

##### 方法二 利用内容撑开父元素的特点实现等高

**代码**

```html
<div class="wrap">
  <!-- col1、col2、col3他们负责背景 -->
  <div class="col1">
    <div class="col2">
      <div class="col3">
        <div class="left">left盒子</div>
        <div class="center">center盒子</div>
        <div class="right">right盒子</div>
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
  /* 负责第二列的背景颜色 */
  background-color: pink;
  /* 露出第一列的背景颜色 */
  position: relative;
  left: 200px;
}

.col3 {
  /* 负责第三列的背景颜色 */
  background-color: yellow;
  /* 露出第二列的背景颜色 */
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

## 二、弹性盒子布局

弹性盒子是 css3 的一种新的布局模式，使用弹性盒子可以更快的完成一些我们想要的布局

![弹性盒子](https://upload-images.jianshu.io/upload_images/19038988-741d407333068222.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
.box {
    display:flex;//块级元素
    display：inline-flex;//行内元素
}
```

**注意：设置 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效**

- 特点

1. 子元素默认横向布局，此时默认横轴为主轴，纵轴叫做交叉轴。
2. 子元素默认继承父元素高度。
3. 子元素宽度默认由内容撑开。
4. 子元素的宽度总和大于父元素的宽度，子元素自动收缩。

####弹性盒子属性

**flex-direction：（设置主轴的方向）**

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直轴，起点在下沿。

**justify-content：（设置主轴对齐方式）**

_具体对齐方式与主轴方向有关有关，下面假设主轴从左到右_

- flex-start（默认值）：左对齐。
- flex-end：右对齐。
- center：居中对齐。
- space-between（常用）：两端对齐，项目之间的间距都相等。
- space-around：每个项目两侧的间距都相等。所以，项目之间的间隔比项目与边框的距离大一倍。

**align-items：（设置项目在交叉轴上的对齐方式）**

_具体对齐方式与交叉方向有关有关，下面假设交叉轴从上到下_

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center ：交叉轴终点对齐。
- baseline：项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或者宽度设为 atuo，将占满整个容器。

**flex-wrap: （设置子元素是否换行）**

- nowrap(默认值) 不换行
- wrap 换行
- wrap-reverse 向上换行

#### 项目的属性

**order**
order 属性用整数值来定义排列顺序。数值越小，排列越靠前，默认为 0，可以为负值。

**align-self：**
定义弹性容器内被选中项目的对齐方式，和弹性容器的 align-items 属性作用相同
取值参考弹性盒子 align-item 值。

**flex-shrink（定义项目缩小比例）**
默认值为 1，如果空间不足，将缩小。
设置为 0 即为不缩小

**flex-grow（定义项目的放大比例）**
默认是 0，即如果存在剩余空间，也不放大
设置为 1 即为沾满全屏

**flex：**
flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。

详情参考[这里](https://www.runoob.com/cssref/css3-pr-flex.html)

## 三、响应式布局

响应式布局就是一套代码可以同时在多了设备上运行，而不需要为每一个终端写一套代码，可以根据用户的屏幕尺寸大小进行相应的调整。从而满足不用设备用户的体验需求。

#### 实现手段

1. meta 标签设置

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

content 参数解释

width:可视区域的宽度，值可为数字或关键词 device-width
height:同 width
intial-scale:页面首次被显示是可视区域的缩放级别，取值 1.0 则页面按实际尺寸显示，无任何缩放
maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别，
maximum-scale 用户可将页面放大的程序，1.0 将禁止用户放大到实际尺寸之上。
user-scalable:是否可对页面进行缩放，no 禁止缩放

简单来说就是自动适应手机屏幕大小

2. 流式布局

- 宽度用百分比
- img 标签设置 max-width 控制图片最大宽度，防止图片失真
- 设备查询，CSS 加入以下代码

```
@media screen and (min-width: 屏幕宽度最小值){你所要兼容的模块}
```

以下列举常用的尺寸

```
/*最大1200px显屏*/
@media screen and (max-width : 1200px) {}

/*最大800px显屏*/
@media screen and (max-width : 800px) {}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {}

/*最大640px显屏*/
@media screen and (max-width : 640px) {}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
}
/*iPad横板显屏*/
@media screen and (max-device-width: 1024px) and (orientation: landscape) {  }

/*iPad竖板显屏*/
@media screen and (max-device-width: 768px) and (orientation: portrait) {  }

/*iPhone 和 Smartphones*/
@media screen and (min-device-width: 320px) and (min-device-width: 480px) {  }
```

响应式布局优缺点总结
优点：

1.在不同设备下能有不同的页面排版，这也是响应式最大的优点，在分辨率不同，设备环境进行一些不同的设计，所有开发维护和运营上，相对多个版本成本会降低很多。 2.兼容性好，能在不同的设备下浏览。 3.方便后期维护页面，只需要对必要的页面进行修改，不会影响其他页面。

缺点：

1.页面加载过多的代码，当你在 pc 端加载的时候，css 样式也会将手机端的冗余代码一块加载，这样就直接影响了加载速度。 2.在响应式设计中，图片和视频都是统一加载的，当你在设备低的手机上加载不符合当前需要的图片或者视频，就会过多的消耗用户的流量。 3.局限性，对于响应式，局限性较大，不适合一些大型的门户网或者电商网站，一般门户网或电商网站一个界面内容较多，而响应式最忌讳较多内容，代码过多会影响运行速度。
