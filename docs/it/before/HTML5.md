# HTML5 新增语义化标签

## 结构化标签

```html
<header>页眉</header>
<footer>页脚</footer>
<main>网页主体内容</main>
<nav>导航栏</nav>
<article>独立的内容区域（如博客文章、新闻）</article>
<section>文章的一个章节</section>
<aside>侧边栏（与主内容相关的附加内容）</aside>
<figure>独立的流内容（如图片、图表、代码块）</figure>
<figcaption>figure 元素的标题/说明</figcaption>
<address>文档或文章作者的联系信息</address>
<hgroup>标题分组（将多个标题组合为一组）</hgroup>
```

## 其他常用标签

```html
<mark>标记文本，自带黄色背景高亮效果</mark>
<time datetime="2024-01-01">时间（datetime 属性提供机器可读格式）</time>
<details>可折叠的详情区域</details>
<summary>details 元素的摘要/标题</summary>
<progress value="70" max="100">进度条</progress>
<meter value="6" min="0" max="10">度量值</meter>
```

## 表单标签

### 新增 input 的 type 类型

- **`number`**：只能输入数字，附带相关属性：
  - `max`：最大值
  - `min`：最小值
  - `step`：步进值

- **`url`**：只能输入网址，提交表单时自动验证格式。

- **`email`**：只能输入邮箱地址，提交表单时自动验证格式。

- **`color`**：颜色选择框，`value` 属性可设置默认颜色，格式为十六进制（如 `#FF0000`）。

- **`date`**：日期选择框，默认值格式为 `yyyy-mm-dd`。

- **`time`**：时间选择框，默认值格式为 `hh:mm`。

- **`range`**：滑块控件，配合 `min`、`max`、`step` 属性使用。

- **`search`**：搜索框，部分浏览器会显示清除按钮。

- **`week`** / **`month`**：周选择 / 月份选择。

### 新增属性

- **`autofocus`**：页面加载后自动获取焦点。
- **`required`**：必填项，提交时若为空则阻止提交。
- **`pattern`**：使用正则表达式验证输入格式。
- **`placeholder`**：输入框的占位提示文字。
- **`multiple`**：允许输入多个值（用于 `email`、`file` 等类型）。
- **`min`** / **`max`**：设置输入的最小值/最大值。

## 多媒体标签

### 音频

```html
<audio src="music.mp3" controls="controls">您的浏览器不支持 audio 标签</audio>
```

1. 主流浏览器均已支持，IE8 及以下不支持。
2. 支持的音频格式：
   - **MP3**：兼容性最好，各主流浏览器均支持。
   - **Wav**：IE 不支持。
   - **Ogg**：Safari 和 IE 不支持。
3. 常用属性（布尔属性可省略属性值）：
   - `controls`：显示播放控件。
   - `loop`：循环播放。
   - `muted`：静音播放。
   - `autoplay`：自动播放（受浏览器策略限制，通常需配合 `muted` 使用）。
   - `preload="none|auto|metadata"`：预加载策略；不预加载 / 预加载整个文件 / 只预加载元数据。
   - `src`：音频文件地址。

### 视频

```html
<video src="movie.mp4" controls="controls" width="640" height="360"></video>
```

1. 浏览器兼容性与格式支持：
   - **MP4（H.264）**：IE9+、Chrome、Safari、Firefox、Edge，兼容性最好，推荐使用。
   - **WebM**：Chrome 6+、Firefox 3.6+、Edge。
   - **Ogg**：Chrome 6+、Firefox 3.6+。
2. 在 `audio` 属性基础上，额外支持 `width`、`height`、`poster`（封面图）等属性。

### 多资源标签

使用 `<source>` 标签为媒体元素指定多个备用资源，当第一个格式不被支持时浏览器会自动尝试下一个，常用于解决跨浏览器兼容性问题：

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  您的浏览器不支持 audio 标签，请升级浏览器。
</audio>
```
