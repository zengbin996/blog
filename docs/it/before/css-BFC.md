# BFC 属性

BFC(Block formatting context)直译为"块级格式化上下文"。
BFC 它是指一个独立的块级渲染区域，只有 Block-level BOX 参与，该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。

#### 如何生成 BFC

- 根元素
- 设置了一下属性的元素
  `display:inline-block;`
  `float:left | right;`
  `overflow:hidden | auto | scroll;`
  `position:absolute | fixed;`

#### BFC 属性特性

1.  内部的标签会在垂直方向上一个接一个的放置
2.  垂直方向上的距离由 margin 决定，属于同一个 BFC 的两个相邻标签的 margin 会发生重叠
3.  每个标签的左外边距与包含块的左边界相接触（从左向右），即使浮动标签也是如此。
4.  BFC 的区域不会与 float 的标签区域重叠
5.  计算 BFC 的高度时，浮动子标签也参与计算
6.  BFC 就是页面上的一个隔离的独立容器，容器里面的子标签不会影响到外面标签，反之亦然

#### BFC 应用

- margin 塌陷和合并问题
- 自适应布局问题
- 防止文字环绕
- 清除浮动
