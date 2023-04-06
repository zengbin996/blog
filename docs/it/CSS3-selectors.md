# CSS3 选择器

###属性选择器

- [attr^=vlaue] 选择器
  指定属性名，且属性值必须以 value 开头
  ![](https://upload-images.jianshu.io/upload_images/19038988-9c0a5ada000aa676.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- [attr@=vlaue] 选择器
  指定属性名，且属性值必须以 value 结尾
  ![](https://upload-images.jianshu.io/upload_images/19038988-2d5ea45bba589a10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- [attr*=vlaue] 选择器
  指定属性名，且属性值只要包括 value 即可

###伪类结构选择器

- :first-child 选择器
  :first-child 选择器用于选取属于其父元素的首个子元素的指定选择器。
  ![](https://upload-images.jianshu.io/upload_images/19038988-9487430609b41bcb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- :last-child 选择器
  :last-child 选择器用于选取属于其父元素的最后一个子元素的指定选择器。
  ![](https://upload-images.jianshu.io/upload_images/19038988-2d80df7dd8382ae4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注意：
以上两个选择器在使用的时候，选择器前面的：之前可以指定元素类型，如果指定了元素，当选择的元素与指定元素类型不一致时，将无法成功匹配到。例如下面两种都是无效的

```
.container h3:last-child {
	color: red;
}

.container p:first-child {
	color: red;
}

```

- :nth-child(n) 选择器
  :nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。
  n 可以是数字、关键词或公式。
  ![](https://upload-images.jianshu.io/upload_images/19038988-0e3041e48f7a3c45.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- nth-of-type(n) 选择器
  :nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素.
  n 可以是数字、关键词或公式。
  ![](https://upload-images.jianshu.io/upload_images/19038988-66d12d543d751c7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

以上这些为常用的一些选择器，了解跟多 CSS3 选择器，请点击[这里](https://www.runoob.com/cssref/css-selectors.html)。
