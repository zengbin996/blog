import{_ as e,M as i,p as l,q as p,R as n,t as s,N as c,a1 as a}from"./framework-e0dd9823.js";const o={},d=a(`<h1 id="常用网页布局" tabindex="-1"><a class="header-anchor" href="#常用网页布局" aria-hidden="true">#</a> 常用网页布局</h1><h2 id="一、多列布局" tabindex="-1"><a class="header-anchor" href="#一、多列布局" aria-hidden="true">#</a> 一、多列布局</h2><h3 id="_1-宽度自适应布局" tabindex="-1"><a class="header-anchor" href="#_1-宽度自适应布局" aria-hidden="true">#</a> （1） 宽度自适应布局</h3><h4 id="两栏布局" tabindex="-1"><a class="header-anchor" href="#两栏布局" aria-hidden="true">#</a> 两栏布局</h4><ul><li>左侧固定右侧自适应</li><li>右侧固定左侧自适应</li></ul><p><strong>技术原理</strong>（左侧固定右侧自适应）</p><ul><li>结构上左右两个盒子，左侧设置为固定宽度，右侧设置为 100%</li><li>给左侧盒子设置绝对定位</li><li>给右侧盒子设置一个子盒，并且给盒子设置左外边距，留出左盒空间</li></ul><p><strong>代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;wrap&quot;&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三栏布局" tabindex="-1"><a class="header-anchor" href="#三栏布局" aria-hidden="true">#</a> 三栏布局</h4><ul><li>左右盒子固定宽度，中间盒子自适应</li></ul><h5 id="_1-圣杯布局" tabindex="-1"><a class="header-anchor" href="#_1-圣杯布局" aria-hidden="true">#</a> （1）圣杯布局</h5><p><strong>技术原理</strong></p><ul><li>结构上需要三个盒子，左侧盒子、右侧盒子、中间盒子。中间盒子放在前面，两边盒子后面，这样做的目的是因为中间的内容一般比较重要，放在前面可以优先加载，利于用户体验。</li><li>左右盒子设置固定宽度，中间盒子设置 100%。</li><li>给子盒子设置浮动</li><li>利用 margin-left 将左右盒子拉到中间盒子两侧。 左边 margin-left:-100%；右边 margin-left:-自身的宽度；</li><li>将中间盒子露出来，给三个盒子的父元素设置 padding-left：左侧盒子的宽度；padding-right：右侧盒子的距离；</li><li>利用相对定位将左右盒子归位 左侧设置 left：-自身的宽度；左侧设置 right：-自身的宽度；</li></ul><p><strong>代码实现</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;wrap&quot;&gt;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-等高布局" tabindex="-1"><a class="header-anchor" href="#_2-等高布局" aria-hidden="true">#</a> （2） 等高布局</h3><p>等高布局是指子元素在父元素中高度相等的布局方式。 <img src="https://upload-images.jianshu.io/upload_images/19038988-0e255cce014313e3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><h5 id="方法一-内外间距相抵消" tabindex="-1"><a class="header-anchor" href="#方法一-内外间距相抵消" aria-hidden="true">#</a> 方法一 内外间距相抵消</h5><p>该方法使用 margin-bottom 和 padding-bottom 一个设置较大正值，另一个设置相同负值，相互抵消实现视觉等高。使用该方法必须给父元素设置<code>overflow:hidden;</code><strong>代码</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>left盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>center盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>right盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.wrap div</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 9999px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 9999px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> violet<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 9999px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方法二-利用内容撑开父元素的特点实现等高" tabindex="-1"><a class="header-anchor" href="#方法二-利用内容撑开父元素的特点实现等高" aria-hidden="true">#</a> 方法二 利用内容撑开父元素的特点实现等高</h5><p><strong>代码</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- col1、col2、col3他们负责背景 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>left盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>center盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>right盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 负责第一列的背景颜色 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col2</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 负责第二列的背景颜色 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token comment">/* 露出第一列的背景颜色 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col3</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 负责第三列的背景颜色 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token comment">/* 露出第二列的背景颜色 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -700px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、弹性盒子布局" tabindex="-1"><a class="header-anchor" href="#二、弹性盒子布局" aria-hidden="true">#</a> 二、弹性盒子布局</h2><p>弹性盒子是 css3 的一种新的布局模式，使用弹性盒子可以更快的完成一些我们想要的布局</p><p><img src="https://upload-images.jianshu.io/upload_images/19038988-741d407333068222.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="弹性盒子"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
    display:flex;//块级元素
    display：inline-flex;//行内元素
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：设置 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效</strong></p><ul><li>特点</li></ul><ol><li>子元素默认横向布局，此时默认横轴为主轴，纵轴叫做交叉轴。</li><li>子元素默认继承父元素高度。</li><li>子元素宽度默认由内容撑开。</li><li>子元素的宽度总和大于父元素的宽度，子元素自动收缩。</li></ol><p>####弹性盒子属性</p><p><strong>flex-direction：（设置主轴的方向）</strong></p><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直轴，起点在下沿。</li></ul><p><strong>justify-content：（设置主轴对齐方式）</strong></p><p><em>具体对齐方式与主轴方向有关有关，下面假设主轴从左到右</em></p><ul><li>flex-start（默认值）：左对齐。</li><li>flex-end：右对齐。</li><li>center：居中对齐。</li><li>space-between（常用）：两端对齐，项目之间的间距都相等。</li><li>space-around：每个项目两侧的间距都相等。所以，项目之间的间隔比项目与边框的距离大一倍。</li></ul><p><strong>align-items：（设置项目在交叉轴上的对齐方式）</strong></p><p><em>具体对齐方式与交叉方向有关有关，下面假设交叉轴从上到下</em></p><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center ：交叉轴终点对齐。</li><li>baseline：项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或者宽度设为 atuo，将占满整个容器。</li></ul><p><strong>flex-wrap: （设置子元素是否换行）</strong></p><ul><li>nowrap(默认值) 不换行</li><li>wrap 换行</li><li>wrap-reverse 向上换行</li></ul><h4 id="项目的属性" tabindex="-1"><a class="header-anchor" href="#项目的属性" aria-hidden="true">#</a> 项目的属性</h4><p><strong>order</strong> order 属性用整数值来定义排列顺序。数值越小，排列越靠前，默认为 0，可以为负值。</p><p><strong>align-self：</strong> 定义弹性容器内被选中项目的对齐方式，和弹性容器的 align-items 属性作用相同 取值参考弹性盒子 align-item 值。</p><p><strong>flex-shrink（定义项目缩小比例）</strong> 默认值为 1，如果空间不足，将缩小。 设置为 0 即为不缩小</p><p><strong>flex-grow（定义项目的放大比例）</strong> 默认是 0，即如果存在剩余空间，也不放大 设置为 1 即为沾满全屏</p><p><strong>flex：</strong> flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。</p>`,57),u={href:"https://www.runoob.com/cssref/css3-pr-flex.html",target:"_blank",rel:"noopener noreferrer"},r=a(`<h2 id="三、响应式布局" tabindex="-1"><a class="header-anchor" href="#三、响应式布局" aria-hidden="true">#</a> 三、响应式布局</h2><p>响应式布局就是一套代码可以同时在多了设备上运行，而不需要为每一个终端写一套代码，可以根据用户的屏幕尺寸大小进行相应的调整。从而满足不用设备用户的体验需求。</p><h4 id="实现手段" tabindex="-1"><a class="header-anchor" href="#实现手段" aria-hidden="true">#</a> 实现手段</h4><ol><li>meta 标签设置</li></ol><p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code></p><p>content 参数解释</p><p>width:可视区域的宽度，值可为数字或关键词 device-width height:同 width intial-scale:页面首次被显示是可视区域的缩放级别，取值 1.0 则页面按实际尺寸显示，无任何缩放 maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别， maximum-scale 用户可将页面放大的程序，1.0 将禁止用户放大到实际尺寸之上。 user-scalable:是否可对页面进行缩放，no 禁止缩放</p><p>简单来说就是自动适应手机屏幕大小</p><ol start="2"><li>流式布局</li></ol><ul><li>宽度用百分比</li><li>img 标签设置 max-width 控制图片最大宽度，防止图片失真</li><li>设备查询，CSS 加入以下代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen and (min-width: 屏幕宽度最小值){你所要兼容的模块}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下列举常用的尺寸</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*最大1200px显屏*/
@media screen and (max-width : 1200px) {}

/*最大800px显屏*/
@media screen and (max-width : 800px) {}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {}

/*最大640px显屏*/
@media screen and (max-width : 640px) {}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
}
/*iPad横板显屏*/
@media screen and (max-device-width: 1024px) and (orientation: landscape) {  }

/*iPad竖板显屏*/
@media screen and (max-device-width: 768px) and (orientation: portrait) {  }

/*iPhone 和 Smartphones*/
@media screen and (min-device-width: 320px) and (min-device-width: 480px) {  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应式布局优缺点总结 优点：</p><p>1.在不同设备下能有不同的页面排版，这也是响应式最大的优点，在分辨率不同，设备环境进行一些不同的设计，所有开发维护和运营上，相对多个版本成本会降低很多。 2.兼容性好，能在不同的设备下浏览。 3.方便后期维护页面，只需要对必要的页面进行修改，不会影响其他页面。</p><p>缺点：</p><p>1.页面加载过多的代码，当你在 pc 端加载的时候，css 样式也会将手机端的冗余代码一块加载，这样就直接影响了加载速度。 2.在响应式设计中，图片和视频都是统一加载的，当你在设备低的手机上加载不符合当前需要的图片或者视频，就会过多的消耗用户的流量。 3.局限性，对于响应式，局限性较大，不适合一些大型的门户网或者电商网站，一般门户网或电商网站一个界面内容较多，而响应式最忌讳较多内容，代码过多会影响运行速度。</p>`,17);function v(m,k){const t=i("ExternalLinkIcon");return l(),p("div",null,[d,n("p",null,[s("详情参考"),n("a",u,[s("这里"),c(t)])]),r])}const g=e(o,[["render",v],["__file","web-layout.html.vue"]]);export{g as default};
