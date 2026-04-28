# Element UI - 表格自动滚动

实现 `el-table` 表格内容自动循环滚动，鼠标悬停时暂停，移出后继续滚动。

```javascript
/**
 * 表格内容自动滚动方法
 * @param {Object} table - el-table 的 ref 对象
 * @param {Number} speed - 每次滚动的间隔时间（毫秒），默认 30ms 滚动 1px
 */
export function tableScroll(table, speed = 30) {
  // 获取表格中承载数据的 div 元素
  const divData = table.bodyWrapper;

  let timer;

  const startScroll = () => {
    // 清除已有定时器，避免重复创建
    clearInterval(timer);
    timer = setInterval(() => {
      // 每次将滚动条向下移动 1 像素
      divData.scrollTop += 1;
      // 判断是否已滚动到底部（可视高度 + 已滚动距离 >= 内容总高度）
      if (divData.clientHeight + divData.scrollTop + 1 > divData.scrollHeight) {
        // 回到顶部，实现循环滚动
        divData.scrollTop = 0;
      }
    }, speed);
  };

  startScroll();

  // 鼠标移入：暂停滚动
  divData.onmouseover = () => {
    clearInterval(timer);
  };

  // 鼠标移出：恢复滚动
  divData.onmouseout = () => {
    clearInterval(timer);
    startScroll();
  };

  // 窗口尺寸变化时更新记录的屏幕高度
  window.onresize = () => {
    window.screenHeight = document.body.clientHeight;
  };
}
```

**使用示例：**

```javascript
// 在 mounted 或数据加载完毕后调用
this.$nextTick(() => {
  tableScroll(this.$refs.myTable);
});
```

> **注意：**
> - `speed` 参数为定时器间隔时间（毫秒），值越小滚动越快。
> - 该方法使用的 `table.bodyWrapper` 是 Element UI 2.x 版本的属性；Element Plus（Element UI 3.x）中已移除，需改用其他方式获取滚动容器。
