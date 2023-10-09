import{_ as r,M as t,p as l,q as c,R as n,t as s,N as a,a1 as i}from"./framework-e0dd9823.js";const d={},o=n("h1",{id:"修改-npm-源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修改-npm-源","aria-hidden":"true"},"#"),s(" 修改 NPM 源")],-1),m={href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"},p=i(`<ol><li>查看当前使用的地址</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用阿里源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>恢复官方源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>nrm</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm

$ nrm <span class="token function">ls</span>

* <span class="token function">npm</span> ---------- https://registry.npmjs.org/
  <span class="token function">yarn</span> --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

$ nrm use cnpm  //switch registry to cnpm

    Registry has been <span class="token builtin class-name">set</span> to: http://r.cnpmjs.org/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="修改-yarn-源" tabindex="-1"><a class="header-anchor" href="#修改-yarn-源" aria-hidden="true">#</a> 修改 yarn 源</h3><ol><li>查看当前使用的地址</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用阿里源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>恢复官方源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function h(g,b){const e=t("ExternalLinkIcon");return l(),c("div",null,[o,n("p",null,[s("阿里镜像站地址: "),n("a",m,[s("https://npmmirror.com"),a(e)])]),p,n("p",null,[s("官网地址 "),n("a",u,[s("https://github.com/Pana/nrm"),a(e)])]),v])}const y=r(d,[["render",h],["__file","npm-registry.html.vue"]]);export{y as default};
