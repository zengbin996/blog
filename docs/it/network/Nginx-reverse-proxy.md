# Nginx 反向代理配置

**反向代理**是指由 Nginx 代替客户端向后端服务转发请求，常用于解决前端跨域问题，或将 `/api/` 前缀的请求统一转发到后端服务。

以下配置示例：监听 9002 端口，将根路径指向前端静态文件，将 `/api/` 路径的请求代理到本机 3000 端口的后端服务。

```nginx
server {
    listen 9002;
    server_name 127.0.0.1;

    # 前端静态文件目录
    location / {
        root  /www/wwwroot/music-vue3-pc/;
        index index.html;
        try_files $uri $uri/ /index.html; # 支持 HTML5 History 路由
    }

    # 将 /api/ 请求反向代理到后端服务
    location /api/ {
        proxy_pass http://127.0.0.1:3000/;
    }
}
```

> **说明**：`proxy_pass` 末尾的斜杠 `/` 会将 `/api/` 前缀去掉后再转发；若不加斜杠，则会保留 `/api/` 前缀原样转发，请根据后端接口的实际路径选择。
