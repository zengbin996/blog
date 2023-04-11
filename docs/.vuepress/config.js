const { itList } = require('./title-list');

module.exports = {
  title: '一条有梦想的咸鱼',
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/ico.svg' }]],
  themeConfig: {
    lastUpdated: '最后更新时间',
    logo: '/ico.svg',
    search: true,
    nav: [
      { text: 'IT技术', link: '/it/' },
      { text: '英语', link: '/english/' },
      { text: '日语', link: '/japanese/' },
    ],
    sidebar: {
      '/it/': [
        {
          title: '前端',
          collapsable: true,
          children: itList.map((item) => item.value),
        },
        {
          title: '后端',
          collapsable: true,
          children: ['sql'],
        },
        {
          title: '网络/运维',
          collapsable: true,
          children: ['node-nvm-nrm', 'webhooks-git-auto'],
        },
        {
          title: '其他',
          collapsable: true,
          children: ['vscode-del-annotation', 'vscode-setting'],
        },
      ],
      '/english/': [
        {
          title: '语法',
          collapsable: true,
          children: ['grammar-sentence', 'grammar-basic-patterns'],
        },
        {
          title: '文章练习',
          collapsable: true,
          children: ['the-garden-gairy'],
        },
        {
          title: '句子练习',
          collapsable: true,
          children: ['word-address'],
        },
      ],
      '/japanese/': [
        {
          title: '语法',
          collapsable: true,
          children: ['pronounce-jp'],
        },
      ],
    },
  },
};
