import{_ as e,p as i,q as n,a1 as d}from"./framework-e0dd9823.js";const a={},s=d(`<h1 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h1><p>响应式布局就是一套代码可以同时在多了设备上运行，而不需要为每一个终端写一套代码，可以根据用户的屏幕尺寸大小进行相应的调整。从而满足不用设备用户的体验需求。</p><h4 id="实现手段" tabindex="-1"><a class="header-anchor" href="#实现手段" aria-hidden="true">#</a> 实现手段</h4><ol><li>meta 标签设置</li></ol><p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code></p><p>content 参数解释</p><p>width:可视区域的宽度，值可为数字或关键词 device-width height:同 width intial-scale:页面首次被显示是可视区域的缩放级别，取值 1.0 则页面按实际尺寸显示，无任何缩放 maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别， maximum-scale 用户可将页面放大的程序，1.0 将禁止用户放大到实际尺寸之上。 user-scalable:是否可对页面进行缩放，no 禁止缩放</p><p>简单来说就是自动适应手机屏幕大小</p><ol start="2"><li>流式布局</li></ol><ul><li>宽度用百分比</li><li>img 标签设置 max-width 控制图片最大宽度，防止图片失真</li><li>设备查询，CSS 加入以下代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen and (min-width: 屏幕宽度最小值){你所要兼容的模块}
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应式布局优缺点总结 优点：</p><p>1.在不同设备下能有不同的页面排版，这也是响应式最大的优点，在分辨率不同，设备环境进行一些不同的设计，所有开发维护和运营上，相对多个版本成本会降低很多。 2.兼容性好，能在不同的设备下浏览。 3.方便后期维护页面，只需要对必要的页面进行修改，不会影响其他页面。</p><p>缺点：</p><p>1.页面加载过多的代码，当你在 pc 端加载的时候，css 样式也会将手机端的冗余代码一块加载，这样就直接影响了加载速度。 2.在响应式设计中，图片和视频都是统一加载的，当你在设备低的手机上加载不符合当前需要的图片或者视频，就会过多的消耗用户的流量。 3.局限性，对于响应式，局限性较大，不适合一些大型的门户网或者电商网站，一般门户网或电商网站一个界面内容较多，而响应式最忌讳较多内容，代码过多会影响运行速度。</p>`,17),l=[s];function t(c,r){return i(),n("div",null,l)}const v=e(a,[["render",t],["__file","responsive-web-design.html.vue"]]);export{v as default};
