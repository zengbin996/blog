# Echarts-数据太多显示滚动条

```
 dataZoom: [
          //x轴滑动条
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0, //初始化时，滑动条宽度开始标度
            bottom: '0',
            end: 45,
            height: 6,
            fillerColor: '#ccc',
            borderColor: 'transparent',
            backgroundColor: 'white', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
          },
          {
            type: 'inside',
            xAxisIndex: 0,
            zoomOnMouseWheel: false, //滚轮是否触发缩放
            moveOnMouseMove: true, //鼠标滚轮触发滚动
            moveOnMouseWheel: true,
          },
        ],
```
