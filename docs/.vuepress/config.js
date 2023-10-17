import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import themeSidebar from 'vuepress-theme-sidebar';
export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base:'/vuepress2/',
  theme: defaultTheme({
    navbar: require('./nav/zh'),
     // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar:require('./sidebar/zh'),
  }),
  

  plugins: [
    searchPlugin({
      // 配置项
       // 允许搜索 Frontmatter 中的 `tags`
       getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
    backToTopPlugin(),
    copyCodePlugin({
      // your options
    }),
  ],
})