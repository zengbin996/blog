# 项目根目录结构及代码规范

## 文件夹规范

1. 根据项目名创建项目文件夹。
2. 在项目文件夹内创建 `html`、`css`、`img`、`js` 四个子文件夹，分别存放对应类型的文件。
3. 文件命名统一使用英文，尽量语义化。媒体文件命名应与模块名称关联（如 `login_bg.jpg`、`login_user_ico.gif` 等）。

## HTML 书写规范

1. **格式规范**：
   - 根据页面结构实现层次分明的缩进（推荐 2 或 4 个空格）；
   - 标签属性名由数字、小写字母、连字符组成；
   - 所有标签必须正确闭合（自闭合标签如 `<img />`、`<input />` 也应规范书写）。

2. **语义化 HTML**：
   - 布局时尽量使用 HTML5 的[语义化标签](https://developer.mozilla.org/zh-CN/docs/Glossary/Semantics)；
   - `<h1>` 标题每页只能出现一次；
   - 段落内容使用 `<p>` 标签；
   - 行内元素（如 `<span>`、`<a>`）不能嵌套块级元素（如 `<div>`、`<p>`）。

3. 尽量保证结构与样式分离（HTML 中避免写内联样式）。

4. 合理控制元素嵌套层级，过深的嵌套会影响页面渲染性能和代码可读性。

5. **HTML 中的图片**：
   - `<img>` 标签必须添加 `alt=""` 替换文本，以防图片加载失败时无显示内容，同时有利于 SEO；
   - 在保证视觉效果的前提下，尽量压缩图片体积以减少加载时间；
   - 可使用**精灵图**（CSS Sprites）技术合并小图标，减少 HTTP 请求数量。

## CSS 书写规范

1. **指定编码**：文件顶部声明编码，统一使用 **UTF-8**（常见易混淆格式：GBK、GB2312，统一为 UTF-8 可避免中文乱码）：
   ```css
   @charset "UTF-8";
   ```

2. **书写前准备**：
   - 提前规划样式结构，提高样式复用率。
   - 确定版心宽度，合理布局。

3. **书写要求**：
   - 适当添加注释，说明重要样式的用途。
   - 保持代码缩进，一个声明块内每条属性独占一行。

4. **class 与 id 的命名**：
   - 推荐全小写，多个单词之间用 `-` 连接（如 `nav-bar`、`login-btn`）；
   - 命名简洁、明了、语义化，避免使用无意义的 `a`、`b`、`div1` 等命名；
   - **CSS 书写顺序**（推荐遵循）：
     布局定位属性 → 自身属性 → 文本属性 → 其他属性。

5. **CSS 样式表文件命名约定**：

   | 文件名 | 用途 |
   |---|---|
   | `index.css` | 首页样式 |
   | `master.css` | 主要样式 |
   | `layout.css` | 布局、版面 |
   | `themes.css` | 主题样式 |
   | `columns.css` | 专栏样式 |
   | `font.css` | 字体样式 |
   | `forms.css` | 表单样式 |
   | `base.css` / `common.css` / `public.css` | 基础公共样式 |

   常用公共样式示例：

   ```css
   * {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
   }

   a {
     text-decoration: none;
   }

   /* 清除浮动影响 */
   .clearfix::after {
     content: "";
     display: block;
     clear: both;
     height: 0;
     visibility: hidden;
   }
   ```

## 为网页添加标题、关键字和描述

1. **网页标题**：
   ```html
   <title>网页标题</title>
   ```

2. **搜索引擎关键字**（帮助搜索引擎对页面分类）：
   ```html
   <meta name="keywords" content="HTML, CSS, JavaScript">
   ```

3. **网页描述**（显示在搜索结果摘要中）：
   ```html
   <meta name="description" content="Web 前端开发、网页制作学习参考">
   ```

4. **网页标题栏图标**：
   ```html
   <link href="favicon.ico" rel="icon" />
   ```
