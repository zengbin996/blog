# Webhooks 实现自动部署

**Webhook** 是一种事件通知机制。当 GitHub 仓库发生指定事件（如 push 代码）时，GitHub 会向预先配置的 URL 发送一个 HTTP POST 请求。服务器接收到该请求后，执行相应的脚本（如自动拉取代码、构建、部署），从而实现自动化部署。

## 实现思路

1. 在服务器上运行一个 HTTP 服务，监听来自 GitHub 的 POST 请求；
2. 验证请求中的密钥，防止非法调用；
3. 验证通过后执行部署命令（拉取代码、安装依赖、构建等）。

## GitHub 配置

在仓库的 **Settings → Webhooks** 中添加 Webhook，填写服务器的接收地址（如 `http://your-server-ip:9997`），并设置 Secret 密钥。

![image.png](https://upload-images.jianshu.io/upload_images/19038988-685a20d43c513c55.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Node.js 服务端代码

```javascript
const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

const PORT = 9997;
const SECRET = process.env.WEBHOOK_SECRET; // 从环境变量读取密钥，避免硬编码

app.post('/', (req, res) => {
  if (req.body.password === SECRET) {
    res.send('success: ' + new Date());

    // 执行部署命令：进入项目目录 → 安装依赖 → 构建
    exec('cd /root/home/web/music-react && npm i && npm run build', (error, stdout, stderr) => {
      if (error) console.error('部署出错：', error);
      console.log(stdout, stderr);
    });
  } else {
    res.status(403).send('forbidden');
  }
});

app.listen(PORT, () => {
  console.log(`Webhook server listening on port ${PORT}`);
});
```

> **安全提示**：密钥（Secret）不要硬编码在代码中，应通过环境变量注入，避免提交到版本库后泄露。
