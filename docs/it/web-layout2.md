# 网页常用布局方式

#### 两列布局（左边固定，右边自适应）

![两列布局](https://upload-images.jianshu.io/upload_images/19038988-c188a4a94090ef3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

html 结构

```
<div class="box">
	<div class="left">左边</div>
	<div class="right">右边</div>
</div>
```

1.浮动

```
.left {
    width: 200px;
    float: left;
    background-color: green;
}

.right {
    background-color: blue;
    overflow: hidden;/*方法一*/
    margin-left: 200px;/*方法二*/
}
```

2. inline-block 布局

```
.box {
	font-size: 0;/*解决空格对inline-block元素的影响*/
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

3. 绝对定位

```
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

    margin-left: 200px; /*方法一*/

    position: absolute;/*方法二*/
    left: 200px;/*方法二*/
    right: 0;/*方法二*/
}
```

4. 表格布局

```
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
}
```

5. 弹性盒子布局

```
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

6. 网格布局

```
.box {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 200px auto;
}

.left {
	background-color: green;
}

.right {
	background-color: blue;
}
```

#### 三列布局（左右固定，中间自适应）

![三列布局](https://upload-images.jianshu.io/upload_images/19038988-becc4d014354f6ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在三列布局中，考虑浏览器性能及网速问题，应该把中间的主题部分优先显示出来，然后在显示两边的。在写的时候把中间的标签写在两边的上面
两列布局很多也适用于三列布局，此处只描述两种最经典的。

1. 圣杯布局

html 部分

```
<div class="parent">
	<div class="center">1</div>
	<div class="left">2</div>
	<div class="right">3</div>
</div>
```

css 部分

```
.column {
	float: left;
	}

.left, .right{
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

2. 双飞翼布局

html 部分

```
<div class="parent">
	<div class="box column">
		<div class="center">中间</div>
	</div>
	<div class="left column">左边</div>
	<div class="right column">右边</div>
</div>
```

css 部分

```
.column {
	float: left;
}

.right, .left {
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

#### 等高布局

![等高布局](https://upload-images.jianshu.io/upload_images/19038988-95f60c9c94df895d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

1. 内外边距相消法（模拟等高）

HTML 部分

```
<div class="container">
	<div class="box1">
		<p>中</p>
		<p>国</p>
	</div>
	<div class="box2">
		<p>中国</p>
	</div>
	<div class="box3">
		<p>中国</p>
	</div>
</div>
```

css 部分

```
.container {
	overflow: hidden;
}

.box1, .box2, .box3 {
	float: left;
	margin-left: 20px;
	padding-bottom: 9999px;
	margin-bottom: -9999px;
	width: 300px;
	background: skyblue;
}
```

_以下方法在横向布局中都有描述，不在细述_ 2. 表格布局 3. 弹性盒子布局 4. 网格布局
