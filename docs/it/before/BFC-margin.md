# 关于 margin 塌陷和 margin 合并问题解决

## margin 塌陷

**当给一个块级元素的第一个子元素设置 `margin-top` 时，会带动父级盒子一起下移。** 这种现象称为 margin 塌陷（margin 传递）。

### 解决方法

以下前三种方法通过破坏结构来规避问题，**不推荐使用**：

1. 给父级盒子设置 `border: 1px solid transparent; box-sizing: border-box;`
2. 在第一个子元素前面插入一个空的 `<table></table>` 标签
3. 给父级盒子设置 `padding` 属性来代替子元素的 `margin`

**推荐方式：触发 BFC（块级格式化上下文），改变父级渲染规则。**

以下四种方法均可触发 BFC，但各有副作用，请根据实际情况选择：

```css
position: absolute; /* 或 fixed，会脱离文档流 */
display: inline-block; /* 会改变元素的显示类型 */
float: left; /* 或 right，会脱离文档流 */
overflow: hidden; /* 最常用，注意内容被裁剪的风险 */
```

## margin 合并

**相邻块级元素之间垂直方向上的 `margin` 会发生合并（取两者中较大值）。** 由于合并并未破坏大体结构，一般在项目开发时，将两个相邻元素之间的上下间距合并为一个 `margin` 值来处理即可，无需特别干预。

> 触发 BFC 同样可以避免 margin 合并问题，例如将其中一个元素包裹在触发了 BFC 的容器中。
