import{_ as d,M as t,p as a,q as r,R as e,t as n,N as s,a1 as l}from"./framework-e0dd9823.js";const u={},c=e("h1",{id:"css-预处理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css-预处理","aria-hidden":"true"},"#"),n(" CSS 预处理")],-1),o=e("p",null,"CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特特性，将 CSS 作为目标生成文件，然后开发者只要用这种语言进行编码工作。",-1),v=e("p",null,"使用 CSS 预处理器语言，可以让你的 CSS 看起来更加的整洁、适应性更强、可读性更佳，更易于代码的维护等诸多的好处。",-1),m={href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"},p={href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"},h=l(`<h4 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h4><ul><li>方法一，引入 Less.js 文件</li></ul><p>去官网下载 Less.js 文件，使用时候引入这两行代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet/less&quot; type=&quot;text/css&quot; href=&quot;styles.less&quot;&gt;
&lt;script src=&quot;Less.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={href:"http://koala-app.com/index-zh.html",target:"_blank",rel:"noopener noreferrer"},x=e("img",{src:"https://upload-images.jianshu.io/upload_images/19038988-71a1f1d983abc834.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240",alt:""},null,-1),_=e("li",null,[e("p",null,"方法三，使用编辑器插件")],-1),q={href:"http://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:"https://upload-images.jianshu.io/upload_images/19038988-3e2c6eb284d1759b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240",alt:""},null,-1),f=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;commands&quot;: [
			{
				&quot;id&quot;: &quot;LESS_COMPILE&quot;,
				&quot;name&quot;: &quot;编译less&quot;,
				&quot;command&quot;: [
					&quot;\${programPath}&quot;,
					&quot;\${file}&quot;,
					&quot;../css/\${fileBasename}.css&quot;  //此处代表文件地址
				],
				&quot;extensions&quot;: &quot;less&quot;,
				&quot;key&quot;: &quot;&quot;,
				&quot;showInParentMenu&quot;: false,
				&quot;onDidSaveExecution&quot;: true   //此处代表是否打开自动保存
			}
		]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成以上步骤之后，当.less 文件保存之后会自动生成一个.css 文件</p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><ol><li>注释</li></ol><ul><li>标准 CSS 注释<code>/* comment */ </code>，会保留到编译后的文件中。</li><li>单行注释<code>//comment</code>，之后保留在 less 源文件中，编译后被省略。</li></ul><ol start="2"><li>变量 less 允许用户使用变量，变量以@开头</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@color:#FF0000;

#div {
    color:@color;
}

@side:left;

#div {
    border-@{side}-radius:5px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.嵌套</p><ul><li>选择器嵌套</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#header {
	width: 100px;
	#con {
		font-size: 14px;
		h3 {
			background: #00E5EE;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#header {
  width: 100px;
}
#header #con {
  font-size: 14px;
}
#header #con h3 {
  background: #00E5EE;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在嵌套的代码中，可以使用&amp;引用父元素。例如<code>a:hover</code>伪类可以写成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a {
   &amp;:hover{color:#FFAD00;}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>混入</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
	border:1px solid black;
	background: skyblue;
}

.inner {
	color: white;
	.box;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.inner {
color: white;
border: 1px solid black;
background: skyblue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>混入参数</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box(@clolr:red) {
	background: @clolr;
}

#header {
	.box(green);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#header {
  background: green;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混入参数是，如果指定了参数，则使用指定的参数，如果没有指定参数，则使用默认的。当没有指定默认参数时，必须指定参数，负责编译错误。</p><ol start="5"><li>运算 任何数字、颜色、或者变量都可以参与运算，运算被包括在括号里面。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {width:(200px-20)*2;}

//结果
.box{width:360px;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS 预处理是对于 CSS 语言的一种加强的使用，开发者只需要使用这种语言进行编码工作，减少枯燥无味的 CSS 代码的编写过程的同时，它能让你的 CSS 具备更加简洁、适应性更强、可读性更加、层级关系更加明显、更易于代码的维护等诸多好处。</p>`,26);function k(w,C){const i=t("ExternalLinkIcon");return a(),r("div",null,[c,o,v,e("p",null,[n("目前市面上的主要 CSS 预处理语言有"),e("a",m,[n("Less"),s(i)]),n(","),e("a",b,[n("Sass"),s(i)]),n(","),e("a",p,[n("Stylus"),s(i)]),n("三种")]),h,e("ul",null,[e("li",null,[e("p",null,[n("方法二，软件方式编译 推荐"),e("a",g,[n("koala"),s(i)]),n(",koala 是优秀的编译器，界面清晰简洁，操作起来也非常简单。鉴于 koala 是免费编译器，简单操作如下图: "),x])]),_]),e("p",null,[n("以"),e("a",q,[n("Hbuild X"),s(i)]),n("的插件使用为例子 安装 less 插件 "),S,n(" 修改配置")]),f])}const y=d(u,[["render",k],["__file","CSS-extension.html.vue"]]);export{y as default};
