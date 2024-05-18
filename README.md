# 一条有梦想的咸鱼

> 抓住年轻时光，多去追求内心渴望的事物，让自己的人生不留遗憾！

> 不积硅步无以至千里；不积小流，无以成江海。骐骥一跃，不能十步；弩马十驾，功在不舍。锲而舍之，朽木不折；锲而不舍，金石可镂。

## 项目说明

访问地址: [https://zengbin996.github.io/blog/](https://zengbin996.github.io/blog/)

本项目使用 VuePress 搭建，能够将 Markdown 文件一键打包成 HTML，同时结合了 VuePress 自定义主题的功能，让项目内容更加丰富。该项目托管在 GitHub Pages 上，并利用 GitHub Action 实现了一键发布。除了记录自己平时学习的经历外，本项目也记录了自己遇到的问题及其解决方案。

## 使用技术

1. vuepress2 ：为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。主要用于一些技术文章的展示功能。文章主要分为三大部分，第一部分为 IT 部分，主要用于记录自己平时工作中所遇到的一些问题解决方案和自己对一些新的知识的记录；第二部分和第三部分分别是日语和英语，主要用于记录自己学习这两门语言的一些笔记。
2. tailwindCSS + echarts ：这两个库主要用于自定义首页内容。首页包括了我的足迹，地图的展示，和自己日常拍摄的作品展示。
3. 腾讯 OSS ：用于首页图片和一些文档的图片存放，项目以及集成 OSS 上传功能，可以直接访问 `/utils` 路径上传图片获取在线链接。
4. GitHub Actions：当代码推送至 master 分支后，GitHub 会自动进行打包。并吧打包后的文件推送至 gh-pages 分支，该分支使用了 Github Pages 静态资源托管，可以直接在线访问。由于 GitHub pages 在国内访问较慢，该项目也在 腾讯云 oss 上面部署，加快国内访问速度，执行 `/serve/cos-deploy.js` 文件即可自动发布部署。腾讯 oss 访问地址 [https://blog-1258070316.cos-website.ap-nanjing.myqcloud.com/](https://blog-1258070316.cos-website.ap-nanjing.myqcloud.com/)。
5. `cross-env` 在不用系统设置环境变量。`vuepress build docs` 打包时，无法直接通过 `--base` 来设置基础路径，但是由于 GitHub 部署时需要加上基础路径，而腾讯云 OSS 不需要，为了防止每次打包都要修改 vuepress 的配置，这里使用了环境变量来解决这个问题。直接使用 `cross-env base=/blog/ vuepress build docs` 来设置环境变量。

## 项目展示

首页展示
![首页展示](https://images-1258070316.cos.ap-nanjing.myqcloud.com/index1.png)

首页展示
![首页展示](https://images-1258070316.cos.ap-nanjing.myqcloud.com/index2.png)

首页展示
![首页展示](https://images-1258070316.cos.ap-nanjing.myqcloud.com/index3.png)

文章展示
![文章展示](https://images-1258070316.cos.ap-nanjing.myqcloud.com/index4.png)
