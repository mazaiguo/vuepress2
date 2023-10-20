import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  description: '这是我的第一个 VuePress 站点',
  base: '/vuepress2/',
  theme: defaultTheme({
    navbar: require('./nav/zh'),
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: require('./sidebar/zh'),
    repo:'mazaiguo/vuepress2',
    docsDir: 'docs', // .md文件放在了docs目录下
    editLinks: true, // 启用编辑链接
    editLinkText: 'Edit this page on GitHub',
    contributors: false,
    toggleSidebar: '👈',
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
    mdEnhancePlugin({
      // your options
      align: true,
      attrs: true,
      card: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      mathjax: {
        output: "chtml",
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
        themes: [
          "auto",
          "beige",
          "black",
          "blood",
          "league",
          "moon",
          "night",
          "serif",
          "simple",
          "sky",
          "solarized",
          "white",
        ],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    }),],
})