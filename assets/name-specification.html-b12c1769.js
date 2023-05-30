import{_ as s,M as t,p as a,q as o,R as i,t as l,N as c,a1 as e}from"./framework-822ca1a4.js";const d={},r=e('<h1 id="项目根目录结构及代码规范" tabindex="-1"><a class="header-anchor" href="#项目根目录结构及代码规范" aria-hidden="true">#</a> 项目根目录结构及代码规范</h1><h3 id="文件夹规范" tabindex="-1"><a class="header-anchor" href="#文件夹规范" aria-hidden="true">#</a> 文件夹规范</h3><ol><li>根据项目名创建项目文件夹。</li><li>在项目文件夹创建 html、css、img、js 四个文件夹存放相应文档。</li><li>文件命名时应该全部使用英文命名，尽量语义化。媒体文件命名时尽量与模块名称有关联（如 login_bg.jpg、login_user_ico.gif 等）。</li></ol><h3 id="html-书写规范" tabindex="-1"><a class="header-anchor" href="#html-书写规范" aria-hidden="true">#</a> HTML 书写规范</h3>',4),u=i("li",null,"书写规范： 书写时根据页面结构实现层次分明的缩进； 标签属性名由数字、小写字母、下划线组成，且所有标签必须闭合；",-1),h={href:"https://blog.csdn.net/qq_41229582/article/details/80637518",target:"_blank",rel:"noopener noreferrer"},m=i("li",null,"尽量保证结构样式分离。",-1),v=i("li",null,"尽量控制元素嵌套的层级不合理的嵌套可能会影响页面性能。",-1),p=i("li",null,'HTML 中的图片 img 标签添加 alt="" 替换文本，以防图片丢失； 在保证视觉效果的情况下尽量选择比较小的图片，以减少加载时间； 使用精灵图标技术减少页面的 HTTP 请求。',-1),b=e(`<h3 id="css-书写规范" tabindex="-1"><a class="header-anchor" href="#css-书写规范" aria-hidden="true">#</a> css 书写规范</h3><ol><li><p>指定编码集，统一为 UFT-8。</p></li><li><p>书写代码前</p></li></ol><ul><li>考虑样式规划，提高样式重复使用率。</li><li>确定版心，合理布局。</li></ul><ol start="3"><li>书写代码时</li></ol><ul><li>适当的添加注释。</li><li>保持代码缩进，建议单行书写。</li></ul><ol start="4"><li>class 与 id 的命名</li></ol><ul><li>全小写命名，中间用 - 连接；驼峰法命名。</li><li>命名简洁、明了、语义化。</li><li>css 书写顺序： 尽量遵循：布局定位属性 -&gt; 自身属性 -&gt; 文本属性 -&gt; 其他属性。</li></ul><ol start="5"><li>css 样式表文件命名</li></ol><ul><li><p>index.css（首页的）</p></li><li><p>master.css （主要的）</p></li><li><p>layout.css （布局、版面）</p></li><li><p>themes.css（主题）</p></li><li><p>columns.css（专栏）</p></li><li><p>font.css （文字）</p></li><li><p>forms.css（表单）</p></li><li><p>base.css、public.css、common.css（基本公用，以下为一些常用的公共文件）</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* {
    padding:0;
    margin:0;
    box-sizing:border-box;
}

 a {
   text-docoration:none;
}

.clear-fix:after {    /*清除浮动的影响*/
    content:&quot;&quot;;
    display:block;
    clear:both;
    height:0;
    line-height:0;
    visiblility:hidden;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给网站添加标题、关键字-描述" tabindex="-1"><a class="header-anchor" href="#给网站添加标题、关键字-描述" aria-hidden="true">#</a> 给网站添加标题、关键字，描述</h3><ol><li>为网页添加标题 <code>&lt;title&gt;网页标题&lt;/title&gt;</code></li><li>为搜索引擎定义关键字 <code>&lt;meta name=&quot;keywords&quot; content=&quot;HTML,CSS,JavaScript&quot;&gt;</code> 搜索引擎在遇到这些关键字时，会用这些关键字对文档分类。</li><li>为网页定义描述内容 <code>&lt;meta name=&quot;description&quot; content=&quot;web 前端开发、网页制&quot;&gt;</code></li><li>网页标题栏图标 <code>&lt;link href=&quot;favicon.ico rel=&quot;icon&quot;/&gt;</code></li></ol>`,12);function _(g,f){const n=t("ExternalLinkIcon");return a(),o("div",null,[r,i("ol",null,[u,i("li",null,[l("语义化 HTML： 在布局是尽量用 html5 中的一些新的"),i("a",h,[l("语义化标签"),c(n)]),l("，标题 h1 只能出现一次、段落用 p、行级元素不能嵌套块级元素等。")]),m,v,p]),b])}const q=s(d,[["render",_],["__file","name-specification.html.vue"]]);export{q as default};
