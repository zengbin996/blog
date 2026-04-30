# ECharts 数据过多时显示滚动条

当图表数据量较大时，可以使用 ECharts 的 `dataZoom` 组件来实现数据滚动查看，避免图表内容过于拥挤。

`dataZoom` 支持两种类型：

- **`slider`（滑动条型）**：在图表外部显示一个可拖拽的滑动条。
- **`inside`（内置型）**：通过鼠标滚轮或触摸手势在图表内部直接滚动/缩放。

通常将两者结合使用，以同时支持滑动条拖拽和鼠标滚轮滚动。

```js
dataZoom: [
  // 外部滑动条（x 轴）
  {
    type: 'slider',
    show: true,
    xAxisIndex: [0],
    start: 0,              // 初始显示区域的起始百分比（0%）
    end: 45,               // 初始显示区域的结束百分比（45%）
    bottom: '0',           // 滑动条距底部的距离
    height: 6,             // 滑动条高度
    fillerColor: '#ccc',   // 已选中区域的填充颜色
    borderColor: 'transparent',
    backgroundColor: 'white',   // 未选中区域的背景色
    showDataShadow: false,       // 是否显示数据缩略图（阴影），默认 auto
    showDetail: false,           // 拖拽时是否显示数值详情，默认 true
  },
  // 内置型（鼠标滚轮滚动）
  {
    type: 'inside',
    xAxisIndex: 0,
    zoomOnMouseWheel: false,   // 禁用鼠标滚轮缩放
    moveOnMouseMove: true,     // 鼠标移动时触发平移
    moveOnMouseWheel: true,    // 鼠标滚轮触发平移（滚动查看数据）
  },
],
```

> **提示**：`start` 和 `end` 的值为百分比（0~100），表示初始可视区域在全部数据中的范围。例如 `start: 0, end: 45` 表示默认展示前 45% 的数据。
