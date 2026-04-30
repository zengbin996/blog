# Element UI - 表格自动滚动（封装版）

将表格自动滚动功能封装为独立工具函数，便于项目复用。

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
import { tableScroll } from '@/utils/tableScroll';

// 在数据加载完毕后调用
this.$nextTick(() => {
  tableScroll(this.$refs.myTable, 30);
});
```

> **注意：**
> - `speed` 参数为定时器间隔时间（毫秒），值越小滚动越快。
> - 该方法依赖 Element UI 2.x 的 `bodyWrapper` 属性，Element Plus 中需要调整获取滚动容器的方式。
