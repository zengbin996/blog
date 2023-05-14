import { defaultTheme } from 'vuepress';
import { defineUserConfig } from 'vuepress';
import navbarConfig from './navbarConfig';
import sidebarConfig from './sidebarConfig';

export default defineUserConfig({
  title: '一条有梦想的咸鱼',
  port: '9906',
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/blog/ico.svg' }]],
  theme: defaultTheme({
    logo: '/ico.svg',
    navbar: navbarConfig,
    sidebar: sidebarConfig,
  }),
});
