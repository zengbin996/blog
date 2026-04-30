# 弹性盒子布局（Flexbox）

**Flexbox（弹性盒子）** 是 CSS3 引入的一种新的布局模型，旨在提供一种更高效的方式来对容器中的子元素进行排列、对齐和空间分配。

## 启用弹性盒子

```css
.box {
  display: flex;        /* 块级弹性容器 */
  display: inline-flex; /* 行内弹性容器 */
}
```

> **注意：** 设置 Flex 布局之后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。

## 弹性容器的特点

1. 子元素默认**横向排列**，横轴为**主轴**，纵轴为**交叉轴**。
2. 子元素默认**继承父元素的高度**。
3. 子元素**宽度由内容撑开**。
4. 子元素宽度之和超过父元素宽度时，子元素**自动收缩**。

---

## 弹性容器的属性

### flex-direction（主轴方向）

设置主轴的排列方向：

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

### justify-content（主轴对齐方式）

_以下假设主轴方向为从左到右：_

- `flex-start`（默认值）：左对齐。
- `flex-end`：右对齐。
- `center`：居中对齐。
- `space-between`（常用）：两端对齐，子元素之间间距相等。
- `space-around`：每个子元素两侧间距相等，因此子元素间距是子元素与边框间距的两倍。

### align-items（交叉轴对齐方式）

_以下假设交叉轴方向为从上到下：_

- `flex-start`：交叉轴起点对齐。
- `flex-end`：交叉轴终点对齐。
- `center`：交叉轴居中对齐。
- `baseline`：按子元素第一行文字的基线对齐。
- `stretch`（默认值）：若子元素未设置高度或高度为 `auto`，将拉伸占满整个容器高度。

### flex-wrap（是否换行）

- `nowrap`（默认值）：不换行。
- `wrap`：换行，第一行在上方。
- `wrap-reverse`：换行，第一行在下方。

---

## 弹性子项的属性

### order（排列顺序）

用整数定义子元素的排列顺序，数值越小越靠前，默认为 `0`，支持负值。

### align-self（单个子项交叉轴对齐）

覆盖容器的 `align-items` 设置，单独控制某个子元素在交叉轴上的对齐方式。取值与 `align-items` 相同。

### flex-shrink（收缩比例）

定义空间不足时的收缩比例，默认值为 `1`（等比收缩）。设置为 `0` 则禁止该子元素缩小。

### flex-grow（放大比例）

定义剩余空间的分配比例，默认值为 `0`（不放大）。设置为 `1` 则占满剩余空间。

### flex（简写属性）

`flex` 是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写：

```css
flex: <flex-grow> <flex-shrink> <flex-basis>;

/* 常用写法 */
flex: 1;      /* 等价于 flex: 1 1 0% */
flex: auto;   /* 等价于 flex: 1 1 auto */
flex: none;   /* 等价于 flex: 0 0 auto（不伸缩） */
```

详情参考 [MDN - flex 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 或 [菜鸟教程](https://www.runoob.com/cssref/css3-pr-flex.html)。
