# Nginx-反向代理

```
server {
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
```
