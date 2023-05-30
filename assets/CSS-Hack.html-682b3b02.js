import{_ as e,p as l,q as i,a1 as t}from"./framework-822ca1a4.js";const a={},n=t(`<h1 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack" aria-hidden="true">#</a> CSS-Hack</h1><p><strong>解决浏览器兼容问题（主要兼容 IE 浏览器）</strong></p><ol><li>属性级 hack 在 css 属性名前或者除 css 属性值后加上一些特殊的标识，以便不同浏览器支持</li></ol><ul><li>_下划线：选择 IE6 及以下</li><li>*：选择 IE7 及以下</li><li>\\09：选择 IE8+</li><li>\\0：选择 IE8+和 opera15 以下的浏览器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>_color:red;/*只有在IE6以下显示红色字体*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>选择级 Hack gt 大于 gte 大于等于 le 小于 lte 小于等于</li></ol><ul><li>*html：IE6 及更早的浏览器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*html .box {background:red;}/*只有在IE6以下显示红色*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>条件 Hack</li></ol><ul><li>只有在 IE 中可以看到</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- [if IE]&gt;
    &lt;p&gt;只有在IE中才能看到我&lt;p&gt;
&lt;![endif]--&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>只有 IE6 以上，才能看到红色文本</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- [if gt IE]&gt;
&lt;style&gt;
.test{color:red;}
&lt;/style&gt;
&lt;![endif]--&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：IE10 及以上版本已经将条件注释特性移出</strong> 4. !important 有些特殊情况需要为某一些样式设置具有最有权值，可以使用!important 来解决。!inportant 优先级高于行内样式。</p>`,14),s=[n];function d(r,c){return l(),i("div",null,s)}const u=e(a,[["render",d],["__file","CSS-Hack.html.vue"]]);export{u as default};
