const links = require('./links')

module.exports = {
  lang: 'zh-CN', // en zh-CN
  author: 'Tommy',
  authorLink: 'https://github.com/tommymarc',
  avatar: 'http://img1.imgtn.bdimg.com/it/u=2797787439,3791939360&fm=26&gp=0.jpg',
  social: {
    github: 'https://github.com/tommymarc',
    weibo: 'https://weibo.com/577457700',
    qq: 'tencent://message/?uin=12230023&Site=fdfdf&Menu=yes',
    cnblog:'https://home.cnblogs.com/u/tommymarc'
  },
  locales: {
    title: 'Tommy',
    description: '书写生活与你',
  },
  navs: [
    {
      text: '编程技术',
      link: '/program/',
    },

    {
      text: '软件工具',
      link: '/tool/',
    },
    {
      text: '其它',
      link: '/other/',
    },
  ],
  nameplate: {
    title: 'Xia',
  },
  buttons: [
    {
      text: '阅读列表',
      link: '/posts/',
      type: 'primary',
    },
    {
      text: '了解作者',
      link: '/about.html',
      type: 'default',
    },
  ],
  footer: {
    one: [
      {
        title: '微博',
        subtitle: '夏天来啦',
        link: 'https://weibo.com/577457700',
      },
      {
        title: '博客园',
        subtitle: '个人技术分享',
        link: 'https://home.cnblogs.com/u/tommymarc',
      },
    ],
    two: [
      {
        title: '本站托管于 GitHub',
        link: 'https://github.com/tommymarc',
        type: 'cloud',
        theme: 'filled',
      },
      {
        title: '©TOMMY -2019-2020',
        theme: 'filled',
      },
    ],
    three: [
      {
        title: 'QQ：12230023',
        link: 'https://user.qzone.qq.com/12230023',
        type: 'qq',
        theme: 'outlined',
      },
    ],
  },
  ityped: {
    typeSpeed: 300,           // 正常速度
    backSpeed: 100,           // 反向速度
    startDelay: 300,          // 开始延迟（毫秒）
    backDelay: 1300,          // 反向延迟（毫秒）
    loop: true,               // 循环
    showCursor: true,         // 显示指针
    placeholder: false,       // 占位
    disableBackTyping: false, // 禁用反向输入
    cursorChar: '丨',         // 指针字符
  },
  post: {
    bubbles: true,
    // cover: [
    //   '/20171231/favicon.ico',
    //   'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
    // ],
    // pageSize: 12,
    // pageSizeOptions: ['12', '24', '48', '96'],
  },
  reward: [
    'https://c-ssl.duitang.com/uploads/item/201804/30/20180430010454_bpuvc.jpg',
    'https://c-ssl.duitang.com/uploads/item/201811/07/20181107223958_rihtb.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/201609/16/20160916141348_JQykU.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/201801/16/20180116023533_RCNfS.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/blog/201402/11/20140211165629_zwcnX.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/201804/14/20180414140029_UtMJW.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/201807/29/20180729120218_wcqsh.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201903/18/20190318194343_dohvq.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201903/18/20190318212936_ofhgr.thumb.700_0.webp',
    'https://c-ssl.duitang.com/uploads/item/201903/18/20190318220316_uwurp.thumb.700_0.webp',
    'https://c-ssl.duitang.com/uploads/item/201903/19/20190319125644_qxxut.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/202004/16/20200416100936_ufeny.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201611/06/20161106190213_hA5EF.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/201802/14/20180214164148_GK4KV.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/202003/11/20200311135250_pjvyh.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201908/20/20190820205341_xyjhv.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201902/05/20190205115523_szgrj.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201509/05/20150905192401_seWcE.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/201910/17/20191017103438_QQCQz.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/202003/22/20200322160219_bxkfj.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201902/08/20190208112742_gwbbz.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201711/25/20171125202135_kcSjP.thumb.700_0.jpeg',
    'https://c-ssl.duitang.com/uploads/item/201909/17/20190917095242_niecn.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/202001/12/20200112173952_qobee.thumb.700_0.jpg',
    'https://c-ssl.duitang.com/uploads/item/201906/28/20190628132741_xpzlt.thumb.700_0.jpg',
  ],
  timeline: true,
  links,
  about: true,
  discuss: 'valine',
  valine: {
    appId: 'I1BdSPmczJnmmK7qDY6Btk2X-gzGzoHsz',
    appKey: '0lnMWCd1JcPk0CvI5MaFtIMH',
    placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
    notify: false,
    verify: true,
    avatar: 'mp',
    pageSize: 8,
    recordIP: true,
    lang: 'zh-cn'
  },
  search: {
    type: 'default',
    size: 10,
  },
  crisp: 'ddefc5ac-b359-4e44-b5b6-05a68928117e',
  tagSize: 100,
  baiDu: {
    tongJi: '',
    autoPush: true,
    pinYin: true,
  },
  curtain: {
    tip: '页面准备中...',
    textShadow: '#e91e63',
  },
  dark: true,
}
