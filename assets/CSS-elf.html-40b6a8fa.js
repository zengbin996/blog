import{_ as i,p as n,q as s,t as a,a1 as e}from"./framework-822ca1a4.js";const t={},l=e('<h1 id="css-小技巧" tabindex="-1"><a class="header-anchor" href="#css-小技巧" aria-hidden="true">#</a> CSS 小技巧</h1><h3 id="css-精灵图" tabindex="-1"><a class="header-anchor" href="#css-精灵图" aria-hidden="true">#</a> css 精灵图</h3><p>英文名：css sprites 也可以叫做雪碧图、精灵图、css 贴图定位、css 图像拼合</p><p><strong>原理和好处</strong></p><ul><li>把很多个小的图片拼合到一张大图上，通过 background-image、background-repeat、background-position 等属性将需要的小图片呈现出来即可</li><li>合理使用 css 精灵可以减少网页 http 请求次数，提高页面的加载速度。</li><li>但是对于一些比较大的图片来说，我们为了防止图片加载太慢，我们会把图片切成多块分开加载。</li></ul><br>',6),d=e(`<p><strong>实现原理：</strong> 使用 css 精灵技术、使用 padding 撑开盒子来实现滑动门</p><ul><li>a 标签嵌套 span，因为导航大多数都是可以点击的</li><li>a 标签控制左门（左边的背景）</li><li>span 控制右门（显示右半边的背景）</li></ul><p><strong>代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a href=&quot;#&quot;&gt;&lt;span&gt;首页&lt;/span&gt;&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a {
	display: inline-block;
	height: 33px;
	background: url(&quot;./image.png&quot;) no-repeat left;
	padding-left: 15px;
	line-height: 33px;
	text-decoration: none;
	color: #fff;
}

span {
	display: inline-block;
	height: 33px;
	background: url(&quot;./imang.png&quot;) no-repeat right;
	padding-right: 15px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-25b0a01f0ebbb106.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="image.png"></p>`,6);function r(c,o){return n(),s("div",null,[l,a(" ### css滑动门技术 为了使各种特殊的背景能够自动适应文字的多少，我们就需要使用滑动门技术 "),d])}const p=i(t,[["render",r],["__file","CSS-elf.html.vue"]]);export{p as default};
