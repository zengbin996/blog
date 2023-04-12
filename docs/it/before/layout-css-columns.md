# 多列布局方案

### 两栏布局

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

### 三栏布局

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

### 等高布局

等高布局是指子元素在父元素中高度相等的布局方式。
![](https://upload-images.jianshu.io/upload_images/19038988-2d237d34311fca95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1024)
