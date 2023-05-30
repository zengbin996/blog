import{_ as e,p as i,q as a,a1 as n}from"./framework-822ca1a4.js";const r={},d=n(`<h1 id="关于-margin-塌陷和-margin-合并问题解决" tabindex="-1"><a class="header-anchor" href="#关于-margin-塌陷和-margin-合并问题解决" aria-hidden="true">#</a> 关于 margin 塌陷和 margin 合并问题解决</h1><h2 id="margin-塌陷" tabindex="-1"><a class="header-anchor" href="#margin-塌陷" aria-hidden="true">#</a> margin 塌陷</h2><p><em>当给一个块级元素的第一个子元素设置 margin-top 时会带动父级盒子一起下移</em></p><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h4><ol><li>给父级盒子设置<code>border:1px solid transparent;box-sizing: border-box;</code></li><li>在第一个子元素前面加一个<code>&lt;table&gt;&lt;/table&gt;</code></li><li>给父级盒子设置 padding 属性来代替 margin</li></ol><p><em>（以上三种方法，不推荐使用）</em></p><ol start="4"><li>触发 BFC（块级格式上下文），改变父级渲染规则。一下四种方法都可以实现，但是各自都有各自的缺点，可根据实际情况选择合适的方法。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>position:absolute/fixed;

display:inline-block;

float:left/right;

overflow:hidden;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>margin 合并由于并没有影响到大体结构，一般在制作项目的时候，把上下间距算成一个即可。</p>`,9),l=[d];function t(s,o){return i(),a("div",null,l)}const m=e(r,[["render",t],["__file","BFC-margin.html.vue"]]);export{m as default};
