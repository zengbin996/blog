import{_ as e,p as n,q as i,a1 as s}from"./framework-822ca1a4.js";const l={},d=s(`<h1 id="echarts-数据太多显示滚动条" tabindex="-1"><a class="header-anchor" href="#echarts-数据太多显示滚动条" aria-hidden="true">#</a> Echarts-数据太多显示滚动条</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> dataZoom: [
          //x轴滑动条
          {
            type: &#39;slider&#39;,
            show: true,
            xAxisIndex: [0],
            start: 0, //初始化时，滑动条宽度开始标度
            bottom: &#39;0&#39;,
            end: 45,
            height: 6,
            fillerColor: &#39;#ccc&#39;,
            borderColor: &#39;transparent&#39;,
            backgroundColor: &#39;white&#39;, //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
          },
          {
            type: &#39;inside&#39;,
            xAxisIndex: 0,
            zoomOnMouseWheel: false, //滚轮是否触发缩放
            moveOnMouseMove: true, //鼠标滚轮触发滚动
            moveOnMouseWheel: true,
          },
        ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function r(c,v){return n(),i("div",null,a)}const o=e(l,[["render",r],["__file","Echarts-scroll-bar.html.vue"]]);export{o as default};
