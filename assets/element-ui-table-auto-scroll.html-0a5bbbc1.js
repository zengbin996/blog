import{_ as e,p as i,q as n,a1 as l}from"./framework-822ca1a4.js";const s={},d=l(`<h1 id="element-ui-表格自动滚动" tabindex="-1"><a class="header-anchor" href="#element-ui-表格自动滚动" aria-hidden="true">#</a> element-ui-表格自动滚动</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @param {Object} table el-table的ref对象
 * @param {Number} speed 表格滚动速度
 */

export function tableScroll(table, speed = 30) {
  // 拿到表格中承载数据的div元素
  const divData = table.bodyWrapper;

  let timer;

  const startScroll = () =&gt; {
    // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
    clearInterval(timer);
    timer = setInterval(() =&gt; {
      // 元素自增距离顶部1像素
      divData.scrollTop += 1;
      // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
      if (divData.clientHeight + divData.scrollTop + 1 &gt; divData.scrollHeight) {
        // 重置table距离顶部距离
        divData.scrollTop = 0;
      }
    }, speed);
  };

  startScroll();

  //鼠标移入
  divData.onmouseover = () =&gt; {
    clearInterval(timer);
  };

  //鼠标移出
  divData.onmouseout = () =&gt; {
    clearInterval(timer);
    startScroll();
  };

  //窗口发生改变
  window.onresize = () =&gt; {
    return (() =&gt; {
      window.screenHeight = document.body.clientHeight;
      document.clientHeight = window.screenHeight;
    })();
  };
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(r,c){return i(),n("div",null,a)}const m=e(s,[["render",v],["__file","element-ui-table-auto-scroll.html.vue"]]);export{m as default};
