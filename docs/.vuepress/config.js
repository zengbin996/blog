import { defaultTheme } from 'vuepress';
import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export default defineUserConfig({
  title: '一条有梦想的咸鱼',
  port: '9906',
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/blog/ico.svg' }]],
  theme: defaultTheme({
    logo: '/ico.svg',
    navbar: [
      { text: 'IT', children: ['/it/before/', '/it/after/', '/it/network/', '/it/other/'] },
      { text: '英语', children: ['/en/grammar/', '/en/sentence/', '/en/article/'] },
      { text: '日语', children: ['/jp/grammar/', '/jp/sentence/', '/jp/article/'] },
      {
        text: '外部链接',
        children: [
          {
            text: 'MusicPC-Vue',
            link: 'https://gitee.com/zengbin996/music-vue3-pc',
          },
          {
            text: 'MusicMobile-React',
            link: 'https://gitee.com/zengbin996/music-react-mobile',
          },
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/zengbin996/blog',
      },
    ],
    sidebar: {
      '/it/before/': [
        {
          text: '前端',
          children: [
            '/it/before/web',
            '/it/before/node-nvm-nrm',
            '/it/before/js-modules',
            '/it/before/npm-registry',
            '/it/before/BFC-margin',
            '/it/before/BOM',
            '/it/before/copy-viscidity',
            '/it/before/css-BFC',
            '/it/before/CSS-elf',
            '/it/before/CSS-extension',
            '/it/before/CSS-Hack',
            '/it/before/CSS-line-clamp',
            '/it/before/CSS-position',
            '/it/before/CSS3-selectors',
            '/it/before/debounce-throttle',
            '/it/before/DOM',
            '/it/before/download-a',
            '/it/before/Echarts-scroll-bar',
            '/it/before/element-ui-hidden-all-select',
            '/it/before/element-ui-table-auto-scroll',
            '/it/before/element-ui-table-auto-scroll2',
            '/it/before/ES6',
            '/it/before/Git',
            '/it/before/HTML5',
            '/it/before/js-array',
            '/it/before/js-async',
            '/it/before/js-event',
            '/it/before/js-get-id',
            '/it/before/js-sort',
            '/it/before/layout-css-columns',
            '/it/before/layout-css-flex',
            '/it/before/name-specification',
            '/it/before/React-component-params',
            '/it/before/ReactRouterV6',
            '/it/before/responsive-web-design',
            '/it/before/vue-auth-code',
            '/it/before/web-layout',
            '/it/before/web-layout2',
          ],
        },
      ],
      '/it/after/': [
        {
          text: '后端',
          children: ['/it/after/sql'],
        },
      ],
      '/it/network/': [
        {
          text: '网络/运维',
          children: ['/it/network/webhooks-git-auto', '/it/network/Nginx-reverse-proxy', '/it/network/web-deploy'],
        },
      ],
      '/it/other/': [
        {
          text: '其他',
          children: [
            '/it/other/vscode-del-annotation',
            '/it/other/vscode-setting',
            '/it/other/shortcut',
            '/it/other/prettierrc',
          ],
        },
      ],

      //英语
      '/en/grammar/': [
        {
          text: '语法',
          children: ['/en/grammar/grammar-sentence', '/en/grammar/grammar-basic-patterns'],
        },
      ],

      '/en/sentence/': [
        {
          text: '句子练习',
          children: ['/en/sentence/word-address'],
        },
      ],

      '/en/article/': [
        {
          text: '文章练习',
          children: ['/en/article/the-garden-fairy'],
        },
      ],

      //日语
      '/jp/grammar/': [
        {
          text: '语法',
          children: ['/jp/grammar/pronounce-jp'],
        },
      ],
      '/jp/sentence/': [
        {
          text: '句子练习',
          children: [],
        },
      ],
      '/jp/article/': [
        {
          text: '文章练习',
          children: [],
        },
      ],
    },
  }),
  plugins: [docsearchPlugin({})],
});
