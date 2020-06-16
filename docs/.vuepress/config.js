module.exports = {
  title: '恍若晨曦',
  description: '努力多一点，遗憾少一点',
  base: '/vuePressBlog/',
  port: '3000',
  head: [
    ['link', {rel: 'icon', href: '/images/logo.ico'}],
    ['link', {rel: 'stylesheet', href: '/css/main.css'}],
    ['link', {rel: 'stylesheet', href: '/styles/index.styl'}],
    ['script', {charset: 'utf-8', src: '/js/main.js'}]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require('./nav'), // 导航栏
    sidebar: require('./sidebar'), // 侧边栏
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  },
  plugins: [
    '@vuepress/search',
    '@vuepress/back-to-top'
  ]
}
