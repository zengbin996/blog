import{_ as e,p as n,q as i,a1 as s}from"./framework-e0dd9823.js";const d={},a=s(`<h1 id="nginx-反向代理" tabindex="-1"><a class="header-anchor" href="#nginx-反向代理" aria-hidden="true">#</a> Nginx-反向代理</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
        listen  9002;
        server_name  127.0.0.1;

        location / {
            root   /www/wwwroot/music-vue3-pc/; #项目根目录
            index  index.html;
        }

        location /api/ { #反向代理
	     	    proxy_pass  http://127.0.0.1:3000/;
	      }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function r(t,c){return n(),i("div",null,l)}const o=e(d,[["render",r],["__file","Nginx-reverse-proxy.html.vue"]]);export{o as default};
