import{_ as e,p as i,q as t,a1 as l}from"./framework-822ca1a4.js";const n={},d=l(`<h1 id="dom-操作" tabindex="-1"><a class="header-anchor" href="#dom-操作" aria-hidden="true">#</a> DOM 操作</h1><p>DOM（Document Object Model，文档对象模型），DOM 定义了访问和操作 HTML 文档的标准方法。DOM 以树结构表达 HTML 文档。 <img src="https://upload-images.jianshu.io/upload_images/19038988-36ed582b3bb2a237.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="Document树"></p><h4 id="获取标签-元素" tabindex="-1"><a class="header-anchor" href="#获取标签-元素" aria-hidden="true">#</a> 获取标签（元素）</h4><ol><li><code>document.getElementById(&quot;元素的ID名&quot;)</code> 通过 ID 名字来获取元素（如果 ID 名重复了，只能获取到第一个）。如果页面没有该元素，返回 null。</li><li><code>document.getElementsByClassName(&quot;类名&quot;)</code> 通过类名来获取元素。此方法将获取到同一类名的一个集合（HTMLCollection 对象），可以通过下标访问（从 0 开始），length 代表长度。即使页面只有一个元素或者没有元素，也会返回这个对象。</li><li><code>document.getElementsByTagName(&quot;标签名&quot;)</code> 通过标签名获取元素，使用方法和第二种相似</li><li><code>document.getElementsByName(&quot;nameValue&quot;)</code> 通过元素 name 获取元素，通常用于获取表单元素具有相同 name 的标签</li><li><code>document.querySelector(&quot;CSS选择符&quot;)</code> 通过 CSS 选择符来获取元素，返回匹配到的第一个元素 <code>document.querySelector(&quot;CSS选择符&quot;)</code> 通过 CSS 选择符来获取元素，返回匹配到元素集合</li><li><code>document.documentElement</code> 获取 HTML 标签 <code>document.body</code> 获取 body 标签</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var ID = document.getElementById(&quot;ID&quot;);
var className = document.getElementsByClassName(&quot;class&quot;)[0];
var tagName = document.getElementsByTagName(&quot;div&quot;)[0];
var nameName = document.getElementsByName(&quot;input&quot;)[0];
var div1 = document.querySelector(&quot;.class&quot;);
var div2 = document.querySelectorAll(&quot;#ID&quot;);
var html = document.documentElement;
var body = document.body;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上方法均可再页面中获取标签，document 表示在全局下获取，在使用时也可以通过其他的节点来获取。其中<code>document.getElementsByTagName</code>和<code>document.getElementsByTagName</code>属于动态获取，即使页面上的内容是通过 JavaScript 后面动态添加的，也能获取到，而其他的方法是获取不到的。</p><h4 id="获取节点" tabindex="-1"><a class="header-anchor" href="#获取节点" aria-hidden="true">#</a> 获取节点</h4><ul><li>获取子节点</li></ul><ol><li><code>父节点.children</code> 返回保存子元素的集合，是一个 HTMLcollection 对象</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
	&lt;p&gt;&lt;/p&gt;
	&lt;p&gt;&lt;/p&gt;
	&lt;p&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var div = document.querySelector(&quot;div&quot;);
	console.log(div.children);  //IE8以下会返回文本节点
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-8c86958e0e7f615a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><ol start="2"><li><code>父节点.childNodes</code> 返回一个 NodeList 对象，NodeList 是一种类数组对象，可以通过位置来访问这些节点。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
	&lt;p&gt;&lt;/p&gt;
	&lt;p&gt;&lt;/p&gt;
	&lt;p&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var div = document.querySelector(&quot;div&quot;);
	console.log(div.childNodes);  //IE9之前不会返回文本节点
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-14e5dedb8f302948.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><ul><li>获取父节点</li></ul><ol><li><code>元素.parentNode</code> 获取文档树中的父节点</li><li><code>元素.offsetParent</code> 获取当前元素最近的有定位的父节点</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;parent&quot;&gt;
	&lt;div class=&quot;son&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var son = document.querySelector(&quot;.son&quot;);
	console.log(son.parentNode);
	console.log(son.offsetParent);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-f65be4d17d2435b1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><ul><li>获取其他节点</li></ul><ol><li><code>元素.firstElementChild//(IE)元素.firstChild</code> 获取元素的首个子节点</li><li><code>元素.nextSibling//(IE)元素.nextElementSibling</code> 获取下一个兄弟节点</li><li><code>元素.previousSibling//(IE)元素.previousElementSibling</code>获取上一个兄弟节点</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;parent&quot;&gt;
	&lt;div class=&quot;son1&quot;&gt;&lt;/div&gt;
	&lt;div class=&quot;son2&quot;&gt;&lt;/div&gt;
	&lt;div class=&quot;son3&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var parent = document.querySelector(&quot;.parent&quot;);
	var son2 = document.getElementsByClassName(&quot;son2&quot;)[0];
	console.log(parent.firstElementChild);
	console.log(son2.nextElementSibling);
	console.log(son2.previousElementSibling);
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-746a91d800cca063.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><ul><li>获取节点信息</li></ul><ol><li><code>节点.nodeName</code>获取标签节点标签名字</li><li><code>节点.nodeValue</code>获取文本节点内容</li><li><code>节点.nodeType</code>获取文本类型（标签-1，属性-2，文本-3）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;parent&quot;&gt;hello world&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var parent = document.querySelector(&quot;.parent&quot;);
	console.log(parent.nodeName);
	console.log(parent.childNodes[0].nodeValue);
	console.log(parent.nodeType);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-82f86d243f84bbe1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><h4 id="操作节点" tabindex="-1"><a class="header-anchor" href="#操作节点" aria-hidden="true">#</a> 操作节点</h4><ul><li>创建节点</li></ul><ol><li><code>document.createElement(&quot;标签名&quot;)</code> 创建一个标签对象</li><li><code>document.createTextNode(&quot;文本&quot;)</code> 创建一个文本对象</li></ol><ul><li>添加节点</li></ul><ol><li><code>父元素.appendChild(节点对象)</code> 向父元素末尾添加一个节点</li><li><code>父元素.insertBefore(子对象,参考节点)</code>向参考节点前插入一个子节点</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;demo&quot;&gt;
	&lt;p class=&quot;p1&quot;&gt;p1&lt;/p&gt;
	&lt;p class=&quot;p2&quot;&gt;p2&lt;/p&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var demo = document.getElementsByClassName(&quot;demo&quot;)[0];
	var p2 = document.getElementsByClassName(&quot;p2&quot;)[0];

	//创建节点并添加文本
	var p3 = document.createElement(&quot;p&quot;);
	var text = document.createTextNode(&quot;text&quot;);
	p3.appendChild(text);

	//在p2之前插入p3
	demo.insertBefore(p3, p2);
    console.log(demo);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-17835564388b5b7e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><ul><li>删除节点 <code>父元素.removeChild(需要删除的节点)</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;demo&quot;&gt;
	&lt;p class=&quot;p1&quot;&gt;p1&lt;/p&gt;
	&lt;p class=&quot;p2&quot;&gt;p2&lt;/p&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var demo = document.getElementsByClassName(&quot;demo&quot;)[0];
	var p2 = document.getElementsByClassName(&quot;p2&quot;)[0];

	demo.removeChild(p2);
	console.log(demo);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-2c2333778589f864.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><ul><li>替换节点 <code>父元素.replaceChild(新节点,需要替换的节点)</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;demo&quot;&gt;
	&lt;p class=&quot;p1&quot;&gt;p1&lt;/p&gt;
	&lt;p class=&quot;p2&quot;&gt;p2&lt;/p&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var demo = document.getElementsByClassName(&quot;demo&quot;)[0];
	var p2 = document.getElementsByClassName(&quot;p2&quot;)[0];

	var p3 = document.createElement(&#39;p&#39;);
	p3.innerText = &quot;p3&quot;;

	demo.replaceChild(p3, p2);
	console.log(demo);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-693233ec02dce7cd.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p><ul><li>复制节点 <code>被复制节点.cloneNode(Boolean)</code>复制节点并返回，参数代表是否复制节点内容</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;demo&quot;&gt;div1&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	var demo = document.getElementsByClassName(&quot;demo&quot;)[0];

	var copy = demo.cloneNode(true);
	console.log(copy);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/19038988-72a92673076c1826.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt=""></p>`,42),s=[d];function a(o,u){return i(),t("div",null,s)}const r=e(n,[["render",a],["__file","DOM.html.vue"]]);export{r as default};
