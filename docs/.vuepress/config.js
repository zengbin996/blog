import { defaultTheme } from 'vuepress';
import { defineUserConfig } from 'vuepress';
import navbarConfig from './config/navbarConfig';
import sidebarConfig from './config/sidebarConfig';

export default defineUserConfig({
  title: '一条有梦想的咸鱼',
  port: '9906',
  base: process.env.base || '/',
  head: [['link', { rel: 'icon', href: 'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/ico.svg' }]],
  theme: defaultTheme({
    logo: 'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/ico.svg',
    navbar: navbarConfig,
    sidebar: sidebarConfig,
    lastUpdated: process.env.NODE_ENV === 'production',
  }),
});
