# CSS 预处理

CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特特性，将 CSS 作为目标生成文件，然后开发者只要用这种语言进行编码工作。

使用 CSS 预处理器语言，可以让你的 CSS 看起来更加的整洁、适应性更强、可读性更佳，更易于代码的维护等诸多的好处。

目前市面上的主要 CSS 预处理语言有[Less](http://lesscss.cn/),[Sass](https://www.sass.hk/),[Stylus](http://stylus-lang.com/)三种

#### 使用方法

- 方法一，引入 Less.js 文件

去官网下载 Less.js 文件，使用时候引入这两行代码

```
<link rel="stylesheet/less" type="text/css" href="styles.less">
<script src="Less.js" type="text/javascript"></script>
```

- 方法二，软件方式编译
  推荐[koala](http://koala-app.com/index-zh.html),koala 是优秀的编译器，界面清晰简洁，操作起来也非常简单。鉴于 koala 是免费编译器，简单操作如下图:
  ![](https://upload-images.jianshu.io/upload_images/19038988-71a1f1d983abc834.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 方法三，使用编辑器插件

以[Hbuild X](http://www.dcloud.io/hbuilderx.html)的插件使用为例子
安装 less 插件
![](https://upload-images.jianshu.io/upload_images/19038988-3e2c6eb284d1759b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
修改配置

```
"commands": [
			{
				"id": "LESS_COMPILE",
				"name": "编译less",
				"command": [
					"${programPath}",
					"${file}",
					"../css/${fileBasename}.css"  //此处代表文件地址
				],
				"extensions": "less",
				"key": "",
				"showInParentMenu": false,
				"onDidSaveExecution": true   //此处代表是否打开自动保存
			}
		]
```

完成以上步骤之后，当.less 文件保存之后会自动生成一个.css 文件

#### 语法

1. 注释

- 标准 CSS 注释`/* comment */ `，会保留到编译后的文件中。
- 单行注释`//comment`，之后保留在 less 源文件中，编译后被省略。

2. 变量
   less 允许用户使用变量，变量以@开头

```
@color:#FF0000;

#div {
    color:@color;
}

@side:left;

#div {
    border-@{side}-radius:5px;
}
```

3.嵌套

- 选择器嵌套

```
#header {
	width: 100px;
	#con {
		font-size: 14px;
		h3 {
			background: #00E5EE;
		}
	}
}
```

编译后的文件

```
#header {
  width: 100px;
}
#header #con {
  font-size: 14px;
}
#header #con h3 {
  background: #00E5EE;
}
```

在嵌套的代码中，可以使用&引用父元素。例如`a:hover`伪类可以写成

```
a {
   &:hover{color:#FFAD00;}
}
```

4. 混入

```
.box {
	border:1px solid black;
	background: skyblue;
}

.inner {
	color: white;
	.box;
}
```

编译后的文件

```
.inner {
color: white;
border: 1px solid black;
background: skyblue;
}
```

- 混入参数

```
.box(@clolr:red) {
	background: @clolr;
}

#header {
	.box(green);
}
```

编译结果

```
#header {
  background: green;
}

```

混入参数是，如果指定了参数，则使用指定的参数，如果没有指定参数，则使用默认的。当没有指定默认参数时，必须指定参数，负责编译错误。

5. 运算
   任何数字、颜色、或者变量都可以参与运算，运算被包括在括号里面。

```
.box {width:(200px-20)*2;}

//结果
.box{width:360px;}
```

CSS 预处理是对于 CSS 语言的一种加强的使用，开发者只需要使用这种语言进行编码工作，减少枯燥无味的 CSS 代码的编写过程的同时，它能让你的 CSS 具备更加简洁、适应性更强、可读性更加、层级关系更加明显、更易于代码的维护等诸多好处。
