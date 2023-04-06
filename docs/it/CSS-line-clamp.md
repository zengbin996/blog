# CSS-文本溢出隐藏显示省略号

1. 单行文本溢出

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

2. 多行文本溢出

```css
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1; /*最大行数*/
```

该方法参考[GitHub - tailwindlabs/tailwindcss-line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp), 可能存在兼容问题, 使用时请在多个浏览器测试以保证结果准确性

> Note that the line-clamp-{n} set other properties like display and overflow in addition to -webkit-line-clamp which are not unset by line-clamp-none, so depending on what you are trying to achieve you may need to explicitly override those properties with utilities like flex or overflow-visible as well.
