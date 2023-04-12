# HTML5 新增语义化标签

####结构化标签

```
<header>页眉</header>
<footer>页脚</footer>
<main>网页主体</main>
<nav>导航栏</nav>
<article>文档独立区域</article>
<section>文章的一个章节<section>
<aside>侧边栏</aside>
<figure>文档独立流内容</figure>
<address>文档中的联系信息</address>
<hgroup>标题分组</hgroup>
```

####其他标签

```
<figure>标题</figure>
<mark>标记，自带黄色背景</mark>
<time>时间</time>
```

#### 表单标签

新增 input 的 type 类型

- number 只能输入数字，它并附带两个值
  max 最大值
  min 最小值
  value 最小

- url 只能输入网址，在提交表单时会自带验证

- email 只能输入邮箱，在提交表单时会自带验证

- color 颜色选择框，添加 value 属性可以设置颜色默认值（#FF0000）

- date 日期选择框，默认值（yyyy-mm-dd）

- time 时间选择框，默认值（hh:mm）

- range 滑块

- search 搜索框

- week/month 周/年

新增属性

- autofocus 自动获取焦点
- required 必填项目
- pattern 匹配正则表单式
- placeholder 占位符

#### 多媒体标签

- 音频

`<audio src="music.mp3 controls="controls">当浏览器不支持时显示我</audio>`

1. 目前的主流浏览器都支持，IE8 及以下不支持
2. 支持音频格式，MP3、Wav（IE 不支持）、Ogg（Safari、IE 不支持）
3. 相关属性（属性名和属性值相同时，值可以省略）
   `controls="controls"` 显示播放按钮
   `loop="loop"` 循环播放
   `muted="muted"` 静音播放
   `preload="none/auto/meta"` 是否需要预加载；不需要/需要/预加载元数据
   `src="url"` 设置音频地址

- 视频
  `<video src="movie.mp4" controls="controls"></video>`

1. 浏览器支持和格式
   MP4：IE9+，Chrome 6+，Safari 5+
   WebM：Chrome 6+，Firefox 3.6+
   Ogg：Chrome 6+，Firefox 3.6+
2. 属性，除了 audio 的属性外加 width 和 height

- 资源标签

```
<audio>
<source src="music.mp3" type="audio/mpeg">
<source src="music.ogg" type="audio/ogg">
您的浏览器不支持audio标签播放音乐
</audio>
```

source 标签可以为媒体元素指定多个媒体资源，当第一个资源不支持时自动识别下一个，多用于解决浏览器兼容问题
