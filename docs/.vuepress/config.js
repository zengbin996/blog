import { defaultTheme, defineUserConfig } from 'vuepress';
import navbarConfig from './config/navbarConfig';
import sidebarConfig from './config/sidebarConfig';

console.log(process.env.NODE_ENV);

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
});
