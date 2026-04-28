# CSS-Hack

**解决浏览器兼容问题（主要兼容 IE 浏览器）**

1. 属性级 hack
   在 css 属性名前或在 css 属性值后加上一些特殊标识，以便让不同浏览器识别并应用对应样式

- \_下划线：选择 IE6 及以下
- \*：选择 IE7 及以下
- \09：选择 IE8+
- \0：选择 IE8+和 opera15 以下的浏览器

```
_color:red;/*只有在IE6以下显示红色字体*/
```

2. 选择级 Hack
   gt 大于
   gte 大于等于
   lt 小于
   lte 小于等于

- \*html：IE6 及更早的浏览器

```
*html .box {background:red;}/*只有在IE6以下显示红色*/
```

3. 条件 Hack

- 只有在 IE 中可以看到

```html
<!--[if IE]>
    <p>只有在IE中才能看到我</p>
<![endif]-->
```

- 只有 IE6 以上版本，才能看到红色文本

```html
<!--[if gt IE 6]>
<style>
.test { color: red; }
</style>
<![endif]-->
```

**注意：IE10 及以上版本已将条件注释特性移除，上述写法不再生效。**

4. !important

某些情况下需要为样式设置最高优先级，可以使用 `!important` 来解决。`!important` 声明的优先级高于行内样式。
