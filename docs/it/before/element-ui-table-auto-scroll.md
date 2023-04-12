# element-ui-表格自动滚动

```
/**
 * @param {Object} table el-table的ref对象
 * @param {Number} speed 表格滚动速度
 */

export function tableScroll(table, speed = 30) {
  // 拿到表格中承载数据的div元素
  const divData = table.bodyWrapper;

  let timer;

  const startScroll = () => {
    // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
    clearInterval(timer);
    timer = setInterval(() => {
      // 元素自增距离顶部1像素
      divData.scrollTop += 1;
      // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
      if (divData.clientHeight + divData.scrollTop + 1 > divData.scrollHeight) {
        // 重置table距离顶部距离
        divData.scrollTop = 0;
      }
    }, speed);
  };

  startScroll();

  //鼠标移入
  divData.onmouseover = () => {
    clearInterval(timer);
  };

  //鼠标移出
  divData.onmouseout = () => {
    clearInterval(timer);
    startScroll();
  };

  //窗口发生改变
  window.onresize = () => {
    return (() => {
      window.screenHeight = document.body.clientHeight;
      document.clientHeight = window.screenHeight;
    })();
  };
}


```
