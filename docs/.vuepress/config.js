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
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'reference',
        children: [
          {
            text: 'reference',
            children: ['/reference/cli', '/reference/config'],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'Guide',
        children: [
          {
            text: 'Guide',
            link: '/guide/desc',
            // 该元素将一直处于激活状态
            // activeMatch: '/',
          },
          {
            text: 'getting-started',
            link: '/guide/getting-started',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            // activeMatch: '^/foo/',
          },
        ],
      },
    ],
     // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/desc.md', '/guide/getting-started.md'],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
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