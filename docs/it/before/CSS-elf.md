# CSS 小技巧

### css 精灵图

英文名：css sprites
也可以叫做雪碧图、精灵图、css 贴图定位、css 图像拼合

**原理和优点**

- 将多个小图标拼合到一张大图上，通过 `background-image`、`background-repeat`、`background-position` 等属性将需要的小图显示出来；
- 减少 HTTP 请求次数，提高页面加载速度（HTTP/1.1 下效果尤为明显）；
- 减小图片文件总大小（合并后的图片压缩率更高）。

**注意**：对于较大的图片，为防止单次加载时间过长，通常切成多块分开加载；精灵图适合用于小图标类资源。在 HTTP/2 环境下，多路复用使得请求数的影响减小，精灵图的优势相对降低，可根据实际情况选用 SVG 图标或 Icon Font 替代。

<br>
### CSS 滑动门技术

为了使各种特殊的背景能够自动适应元素内文字内容的多少，可以使用滑动门技术。

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
	background: url("./image.png") no-repeat right;
	padding-right: 15px;
}

```

![image.png](https://upload-images.jianshu.io/upload_images/19038988-25b0a01f0ebbb106.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
