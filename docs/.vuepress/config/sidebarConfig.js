export default {
  //前端
  '/it/before/': [
    {
      text: '前端',
      children: [
        '/it/before/',
        '/it/before/cos',
        {
          text: 'Node.js 和 NPM',
          link: '/it/before/node-nvm-nrm',
        },
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

  //后端
  '/it/after/': [
    {
      text: '后端',
      children: ['/it/after/'],
    },
  ],

  //网络
  '/it/network/': [
    {
      text: '网络/运维',
      children: [
        '/it/network/',
        '/it/network/webhooks-git-auto',
        '/it/network/Nginx-reverse-proxy',
        '/it/network/git443',
      ],
    },
  ],

  // 其他
  '/it/other/': [
    {
      text: '其他',
      children: ['/it/other/', '/it/other/vscode-del-annotation', '/it/other/shortcut', '/it/other/prettierrc'],
    },
  ],

  //英语
  '/en/grammar/': [
    {
      text: '从零开始',
      children: [
        { text: '句子成分', link: '/en/grammar/' },
        { text: '基本句型', link: '/en/grammar/grammar-basic-patterns' },
        { text: '名词', link: '/en/grammar/nouns' },
        { text: '基本名词表', link: '/en/grammar/nouns-list' },
        { text: '代词', link: '/en/grammar/pronouns' },
        { text: '形容词', link: '/en/grammar/adjective' },
        { text: '基本形容词表', link: '/en/grammar/adjective-list' },
        { text: '动词', link: '/en/grammar/verb' },
        { text: '基本动词表', link: '/en/grammar/verb-list' },
        { text: '冠词', link: '/en/grammar/article' },
        { text: '副词', link: '/en/grammar/adverb' },
        { text: '介词', link: '/en/grammar/preposition' },
        { text: '一般现在时态', link: '/en/grammar/present-tense' },
        { text: '一般现在时态作业', link: '/en/grammar/present-tense-exercises' },
        { text: '一般过去时态', link: '/en/grammar/past-tense' },
        { text: '一般过去时态作业', link: '/en/grammar/past-tense-exercises' },
        { text: '一般将来时态', link: '/en/grammar/future-tense' },
        { text: '一般将来时态作业', link: '/en/grammar/future-tense-exercises' },
        { text: '现在进行时态', link: '/en/grammar/present-tense-2' },
        { text: '现在进行时态作业', link: '/en/grammar/present-tense-2-exercises' },
        { text: '四个基本时态', link: '/en/grammar/base-tenses' },
        { text: '现在完成时态', link: '/en/grammar/present-tense-3' },
      ],
    },
  ],
  '/en/practice/': [
    {
      text: '劝学',
      link: '/en/practice/',
    },

    {
      text: '每周一词',
      collapsible: true,
      children: [
        { text: 'For', link: '/en/practice/word-for' },
        { text: 'Great', link: '/en/practice/word-great' },
        { text: 'Kind', link: '/en/practice/word-kind' },
        { text: 'This', link: '/en/practice/word-this' },
        { text: 'Head', link: '/en/practice/word-head' },
        { text: 'Field', link: '/en/practice/word-field' },
        { text: 'Subject', link: '/en/practice/word-subject' },
        { text: 'Right', link: '/en/practice/word-right' },
        { text: 'Common', link: '/en/practice/word-common' },
        { text: 'Potential', link: '/en/practice/word-potential' },
        { text: 'Engage', link: '/en/practice/word-engage' },
        { text: 'Live', link: '/en/practice/word-live' },
        { text: 'Address', link: '/en/practice/word-address' },
      ],
    },

    {
      text: '文章练习',
      collapsible: true,
      children: [
        {
          text: 'The Garden Fairy',
          link: '/en/practice/the-garden-fairy',
        },
      ],
    },
  ],

  //日语
  '/jp/grammar/': [
    {
      text: '语法',
      children: [
        {
          text: '基础发音',
          link: '/jp/grammar/',
        },
      ],
    },
    {
      text: '新标日课文',
      children: [
        { text: '第 1 课', link: '/jp/grammar/unit1' },
        { text: '第 2 课', link: '/jp/grammar/unit2' },
        { text: '第 3 课', link: '/jp/grammar/unit3' },
        { text: '第 4 课', link: '/jp/grammar/unit4' },
      ],
    },
  ],

  '/jp/practice/': [
    {
      text: '日常用语',
      link: '/jp/practice/',
    },

    {
      text: '日语歌曲',
      children: [
        {
          text: '未来へ',
          link: '/jp/practice/music-future',
        },
      ],
    },
  ],
};
