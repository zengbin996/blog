# Element UI - 隐藏表格全选按钮

在某些业务场景下，需要隐藏 `el-table` 表头中的全选复选框，可以通过以下 CSS 样式实现：

```css
/deep/ .el-table__header-wrapper .el-checkbox {
  display: none;
}
```

> **说明：** `/deep/` 是 Vue 单文件组件中的深度选择器，用于穿透 scoped 样式作用域。在 Vue 3 或较新的项目中，可以使用 `::v-deep` 替代：
>
> ```css
> ::v-deep .el-table__header-wrapper .el-checkbox {
>   display: none;
> }
> ```
