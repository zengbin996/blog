# CSS 小技巧

### css 精灵图

英文名：css sprites
也可以叫做雪碧图、精灵图、css 贴图定位、css 图像拼合

**原理和好处**

- 把很多个小的图片拼合到一张大图上，通过 background-image、background-repeat、background-position 等属性将需要的小图片呈现出来即可
- 合理使用 css 精灵可以减少网页 http 请求次数，提高页面的加载速度。
- 但是对于一些比较大的图片来说，我们为了防止图片加载太慢，我们会把图片切成多块分开加载。

<br>
###  css滑动门技术
为了使各种特殊的背景能够自动适应文字的多少，我们就需要使用滑动门技术

**实现原理：**
使用 css 精灵技术、使用 padding 撑开盒子来实现滑动门

- a 标签嵌套 span，因为导航大多数都是可以点击的
- a 标签控制左门（左边的背景）
- span 控制右门（显示右半边的背景）

**代码**

```
<a href="#"><span>首页</span></a>
```

```
a {
	display: inline-block;
	height: 33px;
	background: url("./image.png") no-repeat left;
	padding-left: 15px;
	line-height: 33px;
	text-decoration: none;
	color: #fff;
}

span {
	display: inline-block;
	height: 33px;
	background: url("./imang.png") no-repeat right;
	padding-right: 15px;
}

```

![image.png](https://upload-images.jianshu.io/upload_images/19038988-25b0a01f0ebbb106.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
