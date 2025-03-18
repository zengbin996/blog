export default {
  //前端
  '/it/before/': [
    {
      text: '前端',
      children: [
        '/it/before/',
        {
          text: '微信授权登录',
          link: '/it/before/weixin-login',
        },
        {
          text: '腾讯云 OSS 上传文件',
          link: '/it/before/cos',
        },
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
        '/it/network/proxy',
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
        { text: '基本句型', link: '/en/grammar/unit1' },
        { text: '名词', link: '/en/grammar/unit2' },
        { text: '基本名词表', link: '/en/grammar/unit2-1' },
        { text: '代词', link: '/en/grammar/unit3' },
        { text: '形容词', link: '/en/grammar/unit4' },
        { text: '基本形容词表', link: '/en/grammar/unit4-1' },
        { text: '动词', link: '/en/grammar/unit5' },
        { text: '基本动词表', link: '/en/grammar/unit5-1' },
        { text: '冠词', link: '/en/grammar/unit6' },
        { text: '副词', link: '/en/grammar/unit7' },
        { text: '介词', link: '/en/grammar/unit8' },
        { text: '一般现在时态', link: '/en/grammar/unit9' },
        { text: '一般过去时态', link: '/en/grammar/unit10' },
        { text: '一般将来时态', link: '/en/grammar/unit11' },
        { text: '现在进行时态', link: '/en/grammar/unit12' },
        { text: '四个基本时态', link: '/en/grammar/unit13' },
        { text: '现在完成时态', link: '/en/grammar/unit14' },
        { text: 'There be 句型', link: '/en/grammar/unit15' },
        { text: '情态动词', link: '/en/grammar/unit16' },
        { text: '特殊疑问句', link: '/en/grammar/unit17' },
        { text: '动词不定式', link: '/en/grammar/unit18' },
        { text: '动名词', link: '/en/grammar/unit19' },
        { text: '被动语态', link: '/en/grammar/unit20' },
      ],
    },
  ],
  '/en/practice/': [
    {
      text: '劝学',
      link: '/en/practice/',
    },

    {
      text: '每日练习',
      collapsible: false,
      children: [
        {
          text: 'November-2023',
          link: '/en/practice/November-2023',
        },
        {
          text: 'October-2023',
          link: '/en/practice/October-2023',
        },
        {
          text: 'August-2023',
          link: '/en/practice/August-2023',
        },
      ],
    },

    {
      text: '每周一词',
      collapsible: true,
      children: [
        { text: 'For', link: '/en/word/word-for' },
        { text: 'Great', link: '/en/word/word-great' },
        { text: 'Kind', link: '/en/word/word-kind' },
        { text: 'This', link: '/en/word/word-this' },
        { text: 'Head', link: '/en/word/word-head' },
        { text: 'Field', link: '/en/word/word-field' },
        { text: 'Subject', link: '/en/word/word-subject' },
        { text: 'Right', link: '/en/word/word-right' },
        { text: 'Common', link: '/en/word/word-common' },
        { text: 'Potential', link: '/en/word/word-potential' },
        { text: 'Engage', link: '/en/word/word-engage' },
        { text: 'Live', link: '/en/word/word-live' },
        { text: 'Address', link: '/en/word/word-address' },
      ],
    },

    {
      text: '学唱歌',
      collapsible: true,
      children: [
        { text: 'Wark', link: '/en/music/wark' },
        { text: 'See You Again', link: '/en/music/seeyouagain' },
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
        {
          text: '量词搭配',
          link: '/jp/grammar/measure-word',
        },
        {
          text: '动词变形',
          link: '/jp/grammar/verb',
        },
      ],
    },

    {
      text: '新标日初级',
      children: [
        { text: '第 1 课', link: '/jp/grammar/unit1' },
        { text: '第 2 课', link: '/jp/grammar/unit2' },
        { text: '第 3 课', link: '/jp/grammar/unit3' },
        { text: '第 4 课', link: '/jp/grammar/unit4' },
        { text: '总结 1', link: '/jp/grammar/unit4-1' },
        { text: '第 5 课', link: '/jp/grammar/unit5' },
        { text: '第 6 课', link: '/jp/grammar/unit6' },
        { text: '第 7 课', link: '/jp/grammar/unit7' },
        { text: '第 8 课', link: '/jp/grammar/unit8' },
        { text: '总结 2', link: '/jp/grammar/unit8-2' },
        { text: '第 9 课', link: '/jp/grammar/unit9' },
        { text: '第 10 课', link: '/jp/grammar/unit10' },
        { text: '第 11 课', link: '/jp/grammar/unit11' },
        { text: '第 12 课', link: '/jp/grammar/unit12' },
        { text: '总结 3', link: '/jp/grammar/unit12-2' },
        { text: '第 13 课', link: '/jp/grammar/unit13' },
        { text: '第 14 课', link: '/jp/grammar/unit14' },
        { text: '第 15 课', link: '/jp/grammar/unit15' },
        { text: '第 16 课', link: '/jp/grammar/unit16' },
        { text: '总结 4', link: '/jp/grammar/unit16-2' },
        { text: '第 17 课', link: '/jp/grammar/unit17' },
        { text: '第 18 课', link: '/jp/grammar/unit18' },
        { text: '第 19 课', link: '/jp/grammar/unit19' },
        { text: '第 20 课', link: '/jp/grammar/unit20' },
        { text: '总结 5', link: '/jp/grammar/unit20-2' },
        { text: '第 21 课', link: '/jp/grammar/unit21' },
        { text: '第 22 课', link: '/jp/grammar/unit22' },
        { text: '第 23 课', link: '/jp/grammar/unit23' },
        { text: '第 24 课', link: '/jp/grammar/unit24' },
        { text: '总结 6', link: '/jp/grammar/unit24-2' },
        { text: '第 25 课', link: '/jp/grammar/unit25' },
        { text: '第 26 课', link: '/jp/grammar/unit26' },
        { text: '第 27 课', link: '/jp/grammar/unit27' },
        { text: '第 28 课', link: '/jp/grammar/unit28' },
        { text: '总结 7', link: '/jp/grammar/unit28-2' },
        { text: '第 29 课', link: '/jp/grammar/unit29' },
        { text: '第 30 课', link: '/jp/grammar/unit30' },
        { text: '第 31 课', link: '/jp/grammar/unit31' },
        { text: '第 32 课', link: '/jp/grammar/unit32' },
        { text: '总结 8', link: '/jp/grammar/unit32-2' },
        { text: '第 33 课', link: '/jp/grammar/unit33' },
        { text: '第 34 课', link: '/jp/grammar/unit34' },
        { text: '第 35 课', link: '/jp/grammar/unit35' },
        { text: '第 36 课', link: '/jp/grammar/unit36' },
        { text: '总结 9', link: '/jp/grammar/unit36-2' },
        { text: '第 37 课', link: '/jp/grammar/unit37' },
        { text: '第 38 课', link: '/jp/grammar/unit38' },
        { text: '第 39 课', link: '/jp/grammar/unit39' },
        { text: '第 40 课', link: '/jp/grammar/unit40' },
        { text: '总结 10', link: '/jp/grammar/unit40-2' },
        { text: '第 41 课', link: '/jp/grammar/unit41' },
        { text: '第 42 课', link: '/jp/grammar/unit42' },
        { text: '第 43 课', link: '/jp/grammar/unit43' },
        { text: '第 44 课', link: '/jp/grammar/unit44' },
        { text: '总结 11', link: '/jp/grammar/unit44-2' },
        { text: '第 45 课', link: '/jp/grammar/unit45' },
        { text: '第 46 课', link: '/jp/grammar/unit46' },
        { text: '第 47 课', link: '/jp/grammar/unit47' },
        { text: '第 48 课', link: '/jp/grammar/unit48' },
        { text: '总结 12', link: '/jp/grammar/unit48-2' },
      ],
    },

    {
      text: '新标日中级',
      children: [
        { text: '第 1 课', link: '/jp/grammar/unit49' },
        { text: '第 2 课', link: '/jp/grammar/unit50' },
        { text: '第 3 课', link: '/jp/grammar/unit51' },
        { text: '第 4 课', link: '/jp/grammar/unit52' },
      ],
    },
  ],

  '/jp/practice/': [
    {
      text: '劝学',
      link: '/jp/practice/',
    },

    {
      text: '每日练习',
      collapsible: true,
      children: [
        { text: '2025-May', link: '/jp/practice/2025-05' },
        { text: '2025-April', link: '/jp/practice/2025-04' },
        { text: '2025-March', link: '/jp/practice/2025-03' },
        { text: '2025-February', link: '/jp/practice/2025-02' },
        { text: '2025-January', link: '/jp/practice/2025-01' },
        { text: '2024-December', link: '/jp/practice/2024-12' },
        { text: '2024-November', link: '/jp/practice/2024-11' },
        { text: '2024-October', link: '/jp/practice/2024-10' },
        { text: '2024-September', link: '/jp/practice/2024-09' },
        { text: '2024-August', link: '/jp/practice/2024-08' },
        { text: '2024-July', link: '/jp/practice/2024-07' },
        { text: '2024-June', link: '/jp/practice/2024-06' },
        { text: '2024-May', link: '/jp/practice/2024-05' },
        { text: '2024-April', link: '/jp/practice/2024-04' },
        { text: '2024-March', link: '/jp/practice/2024-03' },
        { text: '2024-February', link: '/jp/practice/2024-02' },
        { text: '2024-January', link: '/jp/practice/2024-01' },
        { text: '2023-December', link: '/jp/practice/2023-12' },
        { text: '2023-November', link: '/jp/practice/2023-11' },
        { text: '2023-October', link: '/jp/practice/2023-10' },
        { text: '2023-August', link: '/jp/practice/2023-08' },
      ],
    },

    {
      text: '学唱歌',
      collapsible: true,
      children: [
        {
          text: '未来へ',
          link: '/jp/music/miraie',
        },
        {
          text: '　ありがとう',
          link: '/jp/music/arigatou',
        },
      ],
    },
  ],
};
