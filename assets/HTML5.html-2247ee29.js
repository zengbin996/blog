import{_ as e,p as l,q as i,a1 as t}from"./framework-e0dd9823.js";const d={},a=t(`<h1 id="html5-新增语义化标签" tabindex="-1"><a class="header-anchor" href="#html5-新增语义化标签" aria-hidden="true">#</a> HTML5 新增语义化标签</h1><p>####结构化标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;header&gt;页眉&lt;/header&gt;
&lt;footer&gt;页脚&lt;/footer&gt;
&lt;main&gt;网页主体&lt;/main&gt;
&lt;nav&gt;导航栏&lt;/nav&gt;
&lt;article&gt;文档独立区域&lt;/article&gt;
&lt;section&gt;文章的一个章节&lt;section&gt;
&lt;aside&gt;侧边栏&lt;/aside&gt;
&lt;figure&gt;文档独立流内容&lt;/figure&gt;
&lt;address&gt;文档中的联系信息&lt;/address&gt;
&lt;hgroup&gt;标题分组&lt;/hgroup&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####其他标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;figure&gt;标题&lt;/figure&gt;
&lt;mark&gt;标记，自带黄色背景&lt;/mark&gt;
&lt;time&gt;时间&lt;/time&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表单标签" tabindex="-1"><a class="header-anchor" href="#表单标签" aria-hidden="true">#</a> 表单标签</h4><p>新增 input 的 type 类型</p><ul><li><p>number 只能输入数字，它并附带两个值 max 最大值 min 最小值 value 最小</p></li><li><p>url 只能输入网址，在提交表单时会自带验证</p></li><li><p>email 只能输入邮箱，在提交表单时会自带验证</p></li><li><p>color 颜色选择框，添加 value 属性可以设置颜色默认值（#FF0000）</p></li><li><p>date 日期选择框，默认值（yyyy-mm-dd）</p></li><li><p>time 时间选择框，默认值（hh:mm）</p></li><li><p>range 滑块</p></li><li><p>search 搜索框</p></li><li><p>week/month 周/年</p></li></ul><p>新增属性</p><ul><li>autofocus 自动获取焦点</li><li>required 必填项目</li><li>pattern 匹配正则表单式</li><li>placeholder 占位符</li></ul><h4 id="多媒体标签" tabindex="-1"><a class="header-anchor" href="#多媒体标签" aria-hidden="true">#</a> 多媒体标签</h4><ul><li>音频</li></ul><p><code>&lt;audio src=&quot;music.mp3 controls=&quot;controls&quot;&gt;当浏览器不支持时显示我&lt;/audio&gt;</code></p><ol><li>目前的主流浏览器都支持，IE8 及以下不支持</li><li>支持音频格式，MP3、Wav（IE 不支持）、Ogg（Safari、IE 不支持）</li><li>相关属性（属性名和属性值相同时，值可以省略） <code>controls=&quot;controls&quot;</code> 显示播放按钮 <code>loop=&quot;loop&quot;</code> 循环播放 <code>muted=&quot;muted&quot;</code> 静音播放 <code>preload=&quot;none/auto/meta&quot;</code> 是否需要预加载；不需要/需要/预加载元数据 <code>src=&quot;url&quot;</code> 设置音频地址</li></ol><ul><li>视频 <code>&lt;video src=&quot;movie.mp4&quot; controls=&quot;controls&quot;&gt;&lt;/video&gt;</code></li></ul><ol><li>浏览器支持和格式 MP4：IE9+，Chrome 6+，Safari 5+ WebM：Chrome 6+，Firefox 3.6+ Ogg：Chrome 6+，Firefox 3.6+</li><li>属性，除了 audio 的属性外加 width 和 height</li></ol><ul><li>资源标签</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;audio&gt;
&lt;source src=&quot;music.mp3&quot; type=&quot;audio/mpeg&quot;&gt;
&lt;source src=&quot;music.ogg&quot; type=&quot;audio/ogg&quot;&gt;
您的浏览器不支持audio标签播放音乐
&lt;/audio&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>source 标签可以为媒体元素指定多个媒体资源，当第一个资源不支持时自动识别下一个，多用于解决浏览器兼容问题</p>`,19),o=[a];function n(r,u){return l(),i("div",null,o)}const c=e(d,[["render",n],["__file","HTML5.html.vue"]]);export{c as default};
