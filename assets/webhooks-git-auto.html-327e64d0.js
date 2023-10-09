import{_ as r,M as a,p as o,q as t,R as n,t as e,N as i,a1 as d}from"./framework-e0dd9823.js";const l={},c=n("h1",{id:"webhooks-实现自动部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webhooks-实现自动部署","aria-hidden":"true"},"#"),e(" webhooks-实现自动部署")],-1),p={href:"https://docs.github.com/cn/apps/building-github-apps",target:"_blank",rel:"noopener noreferrer"},u={href:"https://docs.github.com/cn/apps/building-oauth-apps",target:"_blank",rel:"noopener noreferrer"},m=d(`<p>这是一个通用的解决方案，用户可以自己根据不同的需求，来编写自己的脚本程序(比如发邮件，自动部署等)。</p><p>GitHub 实现 <img src="https://upload-images.jianshu.io/upload_images/19038988-685a20d43c513c55.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="image.png"></p><p>nodejs 代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;)
const { exec } = require(&#39;child_process&#39;);
const app = express()
app.use(express.json())
const port = 9997

app.post(&#39;/&#39;, (req, res) =&gt; {
  //验证密码
  if (req.body.password == &#39;Mc2SajhBp5LTnJ&#39;) {
    res.send(&#39;success: &#39; + new Date())

    //执行打包命令
    exec(&#39;cd /root/home/web/music-react &amp;&amp; npm i &amp;&amp; npm run build&#39;, (error, stdout, stderr) =&gt; {
      console.log(error, stdout, stderr)
    })
  }
})

app.listen(port, () =&gt; {
  console.log(\`Example app listening on port \${port}\`)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(b,h){const s=a("ExternalLinkIcon");return o(),t("div",null,[c,n("blockquote",null,[n("p",null,[e("webhook 允许生成或设置集成，例如  "),n("a",p,[e("GitHub Apps"),i(s)]),e("  或  "),n("a",u,[e("OAuth Apps"),i(s)]),e("，以订阅 GitHub.com 上的某些事件。 当触发其中某个事件时，我们将向 web 挂钩的配置 URL 发送 HTTP POST 有效负载。 Web 挂钩可用于更新外部议题跟踪器、触发 CI 构建、更新备份镜像，甚至部署到生产服务器。 您只受想象力的限制。")])]),m])}const _=r(l,[["render",v],["__file","webhooks-git-auto.html.vue"]]);export{_ as default};
