import{_ as i,p as e,q as n,a1 as l}from"./framework-822ca1a4.js";const d={},s=l(`<h1 id="网页常用布局方式" tabindex="-1"><a class="header-anchor" href="#网页常用布局方式" aria-hidden="true">#</a> 网页常用布局方式</h1><h4 id="两列布局-左边固定-右边自适应" tabindex="-1"><a class="header-anchor" href="#两列布局-左边固定-右边自适应" aria-hidden="true">#</a> 两列布局（左边固定，右边自适应）</h4><p><img src="https://upload-images.jianshu.io/upload_images/19038988-c188a4a94090ef3a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="两列布局"></p><p>html 结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
	&lt;div class=&quot;left&quot;&gt;左边&lt;/div&gt;
	&lt;div class=&quot;right&quot;&gt;右边&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.浮动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.left {
    width: 200px;
    float: left;
    background-color: green;
}

.right {
    background-color: blue;
    overflow: hidden;/*方法一*/
    margin-left: 200px;/*方法二*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>inline-block 布局</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
	font-size: 0;/*解决空格对inline-block元素的影响*/
}

.left {
	background-color: green;
	display: inline-block;
	width: 200px;
	font-size: 16px;
}

.right {
	background-color: blue;
	display: inline-block;
	width: calc(100% - 200px);
	font-size: 16px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>绝对定位</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
	position: relative;
}

.left {
	position: absolute;
	width: 200px;
	background-color: green;
}

.right {
    background-color: blue;

    margin-left: 200px; /*方法一*/

    position: absolute;/*方法二*/
    left: 200px;/*方法二*/
    right: 0;/*方法二*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>表格布局</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
	display: table;
	width: 100%;
}

.left {
	width: 200px;
	background-color: green;
	display: table-cell;
}

.right {
	background-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>弹性盒子布局</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
	display: flex;
}

.left {
	width: 200px;
	background-color: green;
}

.right {
	flex: 1;
	background-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>网格布局</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 200px auto;
}

.left {
	background-color: green;
}

.right {
	background-color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三列布局-左右固定-中间自适应" tabindex="-1"><a class="header-anchor" href="#三列布局-左右固定-中间自适应" aria-hidden="true">#</a> 三列布局（左右固定，中间自适应）</h4><p><img src="https://upload-images.jianshu.io/upload_images/19038988-becc4d014354f6ee.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="三列布局"> 在三列布局中，考虑浏览器性能及网速问题，应该把中间的主题部分优先显示出来，然后在显示两边的。在写的时候把中间的标签写在两边的上面 两列布局很多也适用于三列布局，此处只描述两种最经典的。</p><ol><li>圣杯布局</li></ol><p>html 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;parent&quot;&gt;
	&lt;div class=&quot;center&quot;&gt;1&lt;/div&gt;
	&lt;div class=&quot;left&quot;&gt;2&lt;/div&gt;
	&lt;div class=&quot;right&quot;&gt;3&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.column {
	float: left;
	}

.left, .right{
	width: 200px;
	background-color: red;
}

.left {
	margin-left: -100%;
}

.right {
	margin-left: -200px;
}

.center {
	width: 100%;
	padding: 0 200px;
	box-sizing: border-box;
	background-color: green;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>双飞翼布局</li></ol><p>html 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;parent&quot;&gt;
	&lt;div class=&quot;box column&quot;&gt;
		&lt;div class=&quot;center&quot;&gt;中间&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class=&quot;left column&quot;&gt;左边&lt;/div&gt;
	&lt;div class=&quot;right column&quot;&gt;右边&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.column {
	float: left;
}

.right, .left {
	width: 200px;
	background-color: red;
}

.box {
	width: 100%;
}

.left {
	margin-left: -100%;
}

.right {
	margin-left: -200px;
}

.center {
	margin: 0 200px;
	background: green;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="等高布局" tabindex="-1"><a class="header-anchor" href="#等高布局" aria-hidden="true">#</a> 等高布局</h4><p><img src="https://upload-images.jianshu.io/upload_images/19038988-95f60c9c94df895d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="等高布局"></p><ol><li>内外边距相消法（模拟等高）</li></ol><p>HTML 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
	&lt;div class=&quot;box1&quot;&gt;
		&lt;p&gt;中&lt;/p&gt;
		&lt;p&gt;国&lt;/p&gt;
	&lt;/div&gt;
	&lt;div class=&quot;box2&quot;&gt;
		&lt;p&gt;中国&lt;/p&gt;
	&lt;/div&gt;
	&lt;div class=&quot;box3&quot;&gt;
		&lt;p&gt;中国&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container {
	overflow: hidden;
}

.box1, .box2, .box3 {
	float: left;
	margin-left: 20px;
	padding-bottom: 9999px;
	margin-bottom: -9999px;
	width: 300px;
	background: skyblue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>以下方法在横向布局中都有描述，不在细述</em> 2. 表格布局 3. 弹性盒子布局 4. 网格布局</p>`,37),a=[s];function t(v,r){return e(),n("div",null,a)}const u=i(d,[["render",t],["__file","web-layout2.html.vue"]]);export{u as default};
