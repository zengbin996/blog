# webhooks-实现自动部署
> webhook 允许生成或设置集成，例如 [GitHub Apps](https://docs.github.com/cn/apps/building-github-apps) 或 [OAuth Apps](https://docs.github.com/cn/apps/building-oauth-apps)，以订阅 GitHub.com 上的某些事件。 当触发其中某个事件时，我们将向 web 挂钩的配置 URL 发送 HTTP POST 有效负载。 Web 挂钩可用于更新外部议题跟踪器、触发 CI 构建、更新备份镜像，甚至部署到生产服务器。 您只受想象力的限制。

这是一个通用的解决方案，用户可以自己根据不同的需求，来编写自己的脚本程序(比如发邮件，自动部署等)。

GitHub实现
![image.png](https://upload-images.jianshu.io/upload_images/19038988-685a20d43c513c55.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

nodejs代码
```
const express = require('express')
const { exec } = require('child_process');
const app = express()
app.use(express.json())
const port = 9997

app.post('/', (req, res) => {
  //验证密码
  if (req.body.password == 'Mc2SajhBp5LTnJ') {
    res.send('success: ' + new Date())
    
    //执行打包命令
    exec('cd /root/home/web/music-react && npm i && npm run build', (error, stdout, stderr) => {
      console.log(error, stdout, stderr)
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
