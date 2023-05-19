import { defaultTheme, defineUserConfig } from 'vuepress';
import navbarConfig from './config/navbarConfig';
import sidebarConfig from './config/sidebarConfig';
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  title: '一条有梦想的咸鱼',
  lang: 'zh-CN',
  port: '9906',
  base: process.env.base || '/',
  head: [['link', { rel: 'icon', href: 'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/ico.svg' }]],
  theme: defaultTheme({
    logo: 'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/ico.svg',
    navbar: navbarConfig,
    sidebar: sidebarConfig,
    lastUpdated: false,
    contributors: false,
  }),
  plugins: [
    docsearchPlugin({
      // 配置项
      appId:'YXBDR8YOV6',
      apiKey: '7230ba862c640ac90279283007dd06a9',
      indexName:'hellozengbin',
    }),
  ],
});
