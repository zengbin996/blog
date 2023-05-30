import{_ as i,p as n,q as e,a1 as l}from"./framework-822ca1a4.js";const d={},s=l(`<h1 id="多列布局方案" tabindex="-1"><a class="header-anchor" href="#多列布局方案" aria-hidden="true">#</a> 多列布局方案</h1><h3 id="两栏布局" tabindex="-1"><a class="header-anchor" href="#两栏布局" aria-hidden="true">#</a> 两栏布局</h3><ul><li>左侧固定右侧自适应</li><li>右侧固定左侧自适应</li></ul><p><strong>技术原理</strong>（左侧固定右侧自适应）</p><ul><li>结构上左右两个盒子，左侧设置为固定宽度，右侧设置为 100%</li><li>给左侧盒子设置绝对定位</li><li>给右侧盒子设置一个子盒，并且给盒子设置左外边距，留出左盒空间</li></ul><p><strong>代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;wrap&quot;&gt;
	&lt;div class=&quot;left&quot;&gt;left盒子&lt;/div&gt;

	&lt;div class=&quot;right&quot;&gt;
		&lt;div class=&quot;son&quot;&gt;right盒子&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.left {
	position: absolute;
	width: 300px;
	min-height: 200px;
	background-color: aqua;
}

.right {
	width: 100%;
	min-height: 200px;
	background-color: pink;
}

.son {
	padding-left: 300px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三栏布局" tabindex="-1"><a class="header-anchor" href="#三栏布局" aria-hidden="true">#</a> 三栏布局</h3><ul><li>左右盒子固定宽度，中间盒子自适应</li></ul><h5 id="_1-圣杯布局" tabindex="-1"><a class="header-anchor" href="#_1-圣杯布局" aria-hidden="true">#</a> （1）圣杯布局</h5><p><strong>技术原理</strong></p><ul><li>结构上需要三个盒子，左侧盒子、右侧盒子、中间盒子。中间盒子放在前面，两边盒子后面，这样做的目的是因为中间的内容一般比较重要，放在前面可以优先加载，利于用户体验。</li><li>左右盒子设置固定宽度，中间盒子设置 100%。</li><li>给子盒子设置浮动</li><li>利用 margin-left 将左右盒子拉到中间盒子两侧。 左边 margin-left:-100%；右边 margin-left:-自身的宽度；</li><li>将中间盒子露出来，给三个盒子的父元素设置 padding-left：左侧盒子的宽度；padding-right：右侧盒子的距离；</li><li>利用相对定位将左右盒子归位 左侧设置 left：-自身的宽度；左侧设置 right：-自身的宽度；</li></ul><p><strong>代码实现</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;wrap&quot;&gt;
	&lt;div class=&quot;center&quot;&gt;中间盒子&lt;/div&gt;
	&lt;div class=&quot;left&quot;&gt;left盒子&lt;/div&gt;
	&lt;div class=&quot;right&quot;&gt;right盒子&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrap div {
	float: left;
	min-height: 200px;
}

.wrap {
	padding: 0 300px 0 200px;
}

.left {
	position: relative;
	left: -200px;
	width: 200px;
	background: aqua;
	margin-left: -100%;
}

.right {
	position: relative;
	right: -300px;
	width: 300px;
	background: pink;
	margin-left: -300px;
}

.center {
	width: 100%;
	background: yellow;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-双飞翼布局" tabindex="-1"><a class="header-anchor" href="#_2-双飞翼布局" aria-hidden="true">#</a> （2）双飞翼布局</h5><p>双飞翼布局是玉伯大大提出来的，始于淘宝 UED 与圣杯布局相似，双飞翼布局也可以实现左右宽度跨度固定，中间自适应。 双飞翼布局在解决中间盒子位置是给中间盒子添加一个父盒子并且设置 margin 属性来露出和两侧盒子重叠的区域，其他实现方法与圣杯布局相同。</p><p><strong>代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;wrap&quot;&gt;
	&lt;div class=&quot;center&quot;&gt;
		&lt;div class=&quot;son&quot;&gt;中间内容&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class=&quot;left&quot;&gt;left&lt;/div&gt;
	&lt;div class=&quot;right&quot;&gt;right&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrap&gt;div {
	float: left;
	min-height: 300px;
}

.left {
	width: 300px;
	background-color: tomato;
	margin-left: -100%;
}

.right {
	width: 400px;
	background-color: pink;
	margin-left: -400px;
}

.center {
	width: 100%;
	background-color: skyblue;
}

.son {
	margin: 0 400px 0 300px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="等高布局" tabindex="-1"><a class="header-anchor" href="#等高布局" aria-hidden="true">#</a> 等高布局</h3><p>等高布局是指子元素在父元素中高度相等的布局方式。 <img src="https://upload-images.jianshu.io/upload_images/19038988-2d237d34311fca95.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024" alt=""></p>`,23),t=[s];function a(v,r){return n(),e("div",null,t)}const c=i(d,[["render",a],["__file","layout-css-columns.html.vue"]]);export{c as default};
