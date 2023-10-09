import{_ as n,p as s,q as a,a1 as t}from"./framework-e0dd9823.js";const p={},e=t(`<h1 id="elementui-table-表格自动滚动" tabindex="-1"><a class="header-anchor" href="#elementui-table-表格自动滚动" aria-hidden="true">#</a> ElementUI-Table 表格自动滚动</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 表格内筒自动滚动方法
 * 2022年7月7日 17:15:13
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">table</span> el-table的ref对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">speed</span> 表格滚动速度
 */</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">tableScroll</span><span class="token punctuation">(</span><span class="token parameter">table<span class="token punctuation">,</span> speed <span class="token operator">=</span> <span class="token number">30</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拿到表格中承载数据的div元素</span>
  <span class="token keyword">const</span> divData <span class="token operator">=</span> table<span class="token punctuation">.</span>bodyWrapper<span class="token punctuation">;</span>

  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">startScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 元素自增距离顶部1像素</span>
      divData<span class="token punctuation">.</span>scrollTop <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token comment">// 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>divData<span class="token punctuation">.</span>clientHeight <span class="token operator">+</span> divData<span class="token punctuation">.</span>scrollTop <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> divData<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 重置table距离顶部距离</span>
        divData<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">startScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//鼠标移入</span>
  divData<span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">//鼠标移出</span>
  divData<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">startScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">//窗口发生改变</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>screenHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>clientHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>screenHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","element-ui-table-auto-scroll2.html.vue"]]);export{r as default};
