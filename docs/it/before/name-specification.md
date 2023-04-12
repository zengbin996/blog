# 项目根目录结构及代码规范

### 文件夹规范

1. 根据项目名创建项目文件夹。
2. 在项目文件夹创建 html、css、img、js 四个文件夹存放相应文档。
3. 文件命名时应该全部使用英文命名，尽量语义化。媒体文件命名时尽量与模块名称有关联（如 login_bg.jpg、login_user_ico.gif 等）。

### HTML 书写规范

1. 书写规范：
   书写时根据页面结构实现层次分明的缩进；
   标签属性名由数字、小写字母、下划线组成，且所有标签必须闭合；
2. 语义化 HTML：
   在布局是尽量用 html5 中的一些新的[语义化标签](https://blog.csdn.net/qq_41229582/article/details/80637518)，标题 h1 只能出现一次、段落用 p、行级元素不能嵌套块级元素等。
3. 尽量保证结构样式分离。
4. 尽量控制元素嵌套的层级不合理的嵌套可能会影响页面性能。
5. HTML 中的图片
   img 标签添加 alt="" 替换文本，以防图片丢失；
   在保证视觉效果的情况下尽量选择比较小的图片，以减少加载时间；
   使用精灵图标技术减少页面的 HTTP 请求。

### css 书写规范

1. 指定编码集，统一为 UFT-8。

2. 书写代码前

- 考虑样式规划，提高样式重复使用率。
- 确定版心，合理布局。

3. 书写代码时

- 适当的添加注释。
- 保持代码缩进，建议单行书写。

4. class 与 id 的命名

- 全小写命名，中间用 - 连接；驼峰法命名。
- 命名简洁、明了、语义化。
- css 书写顺序：
  尽量遵循：布局定位属性 -> 自身属性 -> 文本属性 -> 其他属性。

5. css 样式表文件命名

- index.css（首页的）

- master.css （主要的）

- layout.css （布局、版面）

- themes.css（主题）

- columns.css（专栏）

- font.css （文字）

- forms.css（表单）

- base.css、public.css、common.css（基本公用，以下为一些常用的公共文件）

```
* {
    padding:0;
    margin:0;
    box-sizing:border-box;
}

 a {
   text-docoration:none;
}

.clear-fix:after {    /*清除浮动的影响*/
    content:"";
    display:block;
    clear:both;
    height:0;
    line-height:0;
    visiblility:hidden;
}
```

### 给网站添加标题、关键字，描述

1. 为网页添加标题
   `<title>网页标题</title>`
2. 为搜索引擎定义关键字
   `<meta name="keywords" content="HTML,CSS,JavaScript">`
   搜索引擎在遇到这些关键字时，会用这些关键字对文档分类。
3. 为网页定义描述内容
   `<meta name="description" content="web 前端开发、网页制">`
4. 网页标题栏图标
   `<link href="favicon.ico rel="icon"/>`
