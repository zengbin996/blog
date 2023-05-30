import{_ as a,M as t,p as i,q as l,R as n,t as o,N as c,a1 as e}from"./framework-822ca1a4.js";const d={},u=e(`<h1 id="javascript-事件" tabindex="-1"><a class="header-anchor" href="#javascript-事件" aria-hidden="true">#</a> JavaScript 事件</h1><p>事件是可以被 JavaScript 侦测到的行为。</p><h3 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h3><ul><li>鼠标事件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>onclick<span class="token punctuation">;</span> <span class="token comment">//单击</span>
onmousemove<span class="token punctuation">;</span> <span class="token comment">//鼠标移动</span>
onmouseenter<span class="token punctuation">;</span> <span class="token comment">//鼠标指针移到元素之上</span>
onmouseleave<span class="token punctuation">;</span> <span class="token comment">//鼠标指针移出元素</span>
onmouseover<span class="token punctuation">;</span> <span class="token comment">//鼠标移到元素之上</span>
onmouseout<span class="token punctuation">;</span> <span class="token comment">//鼠标移出元素</span>
oncontextmenu<span class="token punctuation">;</span> <span class="token comment">//右键菜单</span>
ondblclick<span class="token punctuation">;</span> <span class="token comment">//双击</span>
onmousedown<span class="token punctuation">;</span> <span class="token comment">//左键按下</span>
onmouseup<span class="token punctuation">;</span> <span class="token comment">//左键按下</span>
onmousewheel<span class="token punctuation">;</span> <span class="token comment">//鼠标滚轮滚动</span>
DOMMouseScroll<span class="token punctuation">;</span> <span class="token comment">//鼠标滚轮滚动  火狐专用，只能使用二级事件绑定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>键盘事件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>onkeydown<span class="token punctuation">;</span> <span class="token comment">//某个键盘按键被按下</span>
onkeyup<span class="token punctuation">;</span> <span class="token comment">//某个键盘按键被松开</span>
onkeypress<span class="token punctuation">;</span> <span class="token comment">//牧歌键盘按键被按下并松开</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p={href:"https://www.runoob.com/jsref/dom-obj-event.html",target:"_blank",rel:"noopener noreferrer"},r=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onload  //一张页面或一幅图像完成加载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h3><p>当事件发生的时候，浏览器会将事件的相关信息保存在内置的全局对象 window.evnet 当中，可以直接使用，其中包括事件类型，操作对象，鼠标位置等。</p><h3 id="事件的绑定与取消" tabindex="-1"><a class="header-anchor" href="#事件的绑定与取消" aria-hidden="true">#</a> 事件的绑定与取消</h3><ol><li>DOM 0 级事件</li></ol><p><strong>元素.事件类型 = 处理函数</strong><strong>元素.事件类型 = null （取消）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var elem = document.querySelector(&quot;div&quot;);

elem.onclick = function() {
	alert(&quot;这是一个DOM 0级事件添加的&quot;);
}

elem.onclick = null;  //取消点击事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 DOM0 级事件添加的事件，如果重复给一个元素添加了同样的事件，那么后面添加的事件会覆盖前面添加的。</p><ol start="2"><li>DOM 2 级事件</li></ol><p><strong>元素.addEventListener(事件类型, 处理函数, 是否捕获)</strong><strong>元素.attachEvent(事件类型, 处理函数)</strong> ie 低版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var elem = document.querySelector(&quot;div&quot;);

elem.addEventListener(&quot;click&quot;, fun, false);  //绑定点击事件
elem.removeEventListener(&quot;click&quot;, fun, false);  //取消点击事件

//一下两种为IE低版本方法，此方法需要给事件前面加 on
elem.attachEvent(&quot;onclick&quot;, fun);  //绑定点击事件
elem.detachEvent(&quot;onclick&quot;, fun);  //取消点击事件

function fun() {
	alert(&quot;这是一个DOM 2级事件添加的&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom-事件流" tabindex="-1"><a class="header-anchor" href="#dom-事件流" aria-hidden="true">#</a> DOM 事件流</h3><p>事件发生时会在元素节点与根节点之间按照特定的顺序传播，路径所经过的所有节点都会收到该事件，这个过程总共可以分为三个阶段： 事件捕获阶段，确定目标阶段，事件冒泡阶段。 <img src="https://upload-images.jianshu.io/upload_images/19038988-8700ac819bf7a84c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="DOM事件流"> 注意：在 IE 低版本中没有 window 节点，Document 中最高节点。</p><p>在 JavaScript 中，默认是事件冒泡流机制，利用<code>addEventListener()</code>添加的事件的第三个参数如果为 true，那么在事件触发时将先捕获后冒泡。</p><p><strong>阻止事件传播的方法</strong></p><ol><li>阻止事件冒泡</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ev <span class="token operator">=</span> window<span class="token punctuation">.</span>ev <span class="token operator">||</span> ev<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ev<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ev<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//标准浏览器</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    ev<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//兼容IE浏览器</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>阻止默认事件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function preventDefa(ev) {
	if (window.event) { 
		window.event.returnValue = false;  //IE浏览器
	} else {
		ev.preventDefault();  //标准浏览器
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事件委托</strong> 事件委托利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function entrust(ev) {
	console.log(ev.target.innerHTML);
	//ev.target 可以获取触发事件的元素
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function v(m,b){const s=t("ExternalLinkIcon");return i(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",p,[o("其他事件"),c(s)])])]),r])}const g=a(d,[["render",v],["__file","js-event.html.vue"]]);export{g as default};
