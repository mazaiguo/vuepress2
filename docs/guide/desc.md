

# 使用vuepress 2.0搭建一个简单站点

## 创建一个简单的页面
```
# install in your project
yarn add -D vuepress@next
 
# 在当前文件夹创建一个README.md文件，利用命令输入内容：# Hello VuePress
echo '# Hello VuePress' > README.md
 
# start writing，这一步执行就会运行测试服务了，下一步是用于打包的，可以暂时不执行
yarn vuepress dev
 
# build to static files
yarn vuepress build
```

很诡异是吧，如果你也遇到这个问题，请用编辑器打开刚才第二步操作生成的README.md文件，将其用[utf-8编码](https://so.csdn.net/so/search?q=utf-8编码&spm=1001.2101.3001.7020)进行重新保存

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20231016-20231016164445.png)

##  其他初始化步骤
1）在package.json增加操作入口
```bash
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
注意，这个地方官方文档的快速上手页面实际和首页有些冲突，首页的执行测试服务器执行的是：

yarn vuepress dev
但是这里添加的是vuepress dev docs，是因为快速上手页面是在docs目录下创建的README.md文件，首页是在根目录下创建的，所以其实你现在有3个方案：

a. 创建一个docs目录，把刚才创建的README.md移动过去

b. 把上述命令中的docs去掉，改成：


```bash
{
  "scripts": {
    "docs:dev": "vuepress dev",
    "docs:build": "vuepress build"
  }
}
```

c. 使用其他任意名称的子目录，只要script里面对应上就行
```bash
{
  "scripts": {
    "docs:dev": "vuepress dev 子目录名",
    "docs:build": "vuepress build 子目录名"
  }
}
```
个人建议用方案a，这样所有文档都在一个子目录里，从我们的经验来看，因为百家饭平台是Golang+vuepress的方案，因此，根目录就作为golang标准结构，docs作为vuepress的部分，互不冲突。下面的描述假设采用的方案a。

2）配置.gitignore, 增加以下几行：
```
node_modules
.temp
.cache
```
基本初步的搭建就完成了。

## 增加侧边栏和导航栏
`docs\.vuepress\config.js`
```javascript
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
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
})
```
## 集成ui框架elementplus

```bash
npm install element-plus --save
```

在.vuepress/client.js中，use，关注enhance即可
```javascript
import { defineClientConfig } from '@vuepress/client'
import * as Icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
//加载elementplus
export default defineClientConfig({
  enhance({ app, router, siteData }) {

    app.use(ElementPlus)
    // icon
    for (const icon in Icons) {
      // eslint-disable-next-line import/namespace
      app.component(icon, Icons[icon])
    }

  },
  setup() {},
  rootComponents: [],
})


```

## 加载插件

[awesome-vuepress](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md)

### back-to-top

#### 使用方法

```bash
npm i -D @vuepress/plugin-back-to-top@next
```

```tsx
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default {
  plugins: [
    backToTopPlugin(),
  ],
}
```

#### 样式

你可以通过 CSS 变量来自定义 *返回顶部* 按钮的样式：

```css
:root {
  --back-to-top-z-index: 5;

  --back-to-top-color: #3eaf7c;
  --back-to-top-color-hover: #71cda3;
}
```

### search

将 [Algolia DocSearch在新窗口打开](https://docsearch.algolia.com/) 集成到 VuePress 中，为你的文档网站提供搜索功能。

```bash
npm i -D @vuepress/plugin-docsearch@next
```

#### 使用方法

```
npm i -D @vuepress/plugin-search@next
```

```tsx
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
}
```

```tsx
export default {
  plugins: [
    searchPlugin({
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],
}
```

### vuepress-plugin-copy-code2

#### 使用方法

:::: code-group
::: code-group-item yarn

```bash
yarn add -D vuepress-plugin-copy-code2
```
:::
::: code-group-item npm
```bash
npm i -D vuepress-plugin-copy-code2
```
:::
::: code-group-item pnpm
```bash
pnpm add -D vuepress-plugin-copy-code2
```
:::
::::

#### Usage

:::: code-group
::: code-group-item TS

```bash
// .vuepress/config.ts
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default {
  plugins: [
    copyCodePlugin({
      // your options
    }),
  ],
};
```

:::
::: code-group-item JS

```bash
// .vuepress/config.js
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default {
  plugins: [
    copyCodePlugin({
      // your options
    }),
  ],
};
```

:::
::::

### [vuepress-theme-sidebar](https://github.com/dingshaohua-cn/vuepress-theme-sidebar#vuepress-theme-sidebar)

```bash
npm install vuepress-theme-sidebar
```



```javascript
// docs/.vuepress/config.js
import themeSidebar from 'vuepress-theme-sidebar';

export default  {
  ...,
  theme: themeSidebar()
  // themeSidebar({ // 这里可以传入官方默认主题的配置项 })
};
```



## 样式

### Palette 文件

Palette 文件的路径是 `.vuepress/styles/palette.scss` 。

你可以利用它来覆盖默认主题的预定义 SASS 变量。

```scss
// responsive breakpoints
$MQNarrow: 959px !default;
$MQMobile: 719px !default;
$MQMobileNarrow: 419px !default;
```

### Style 文件

Style 文件的路径是 `.vuepress/styles/index.scss` 。

你可以在这里添加额外的样式，或者覆盖默认样式：

```scss
:root {
  scroll-behavior: smooth;
}
```

你也可以利用它来覆盖默认主题的预定义 CSS 变量。

::: details 点击查看代码

```scss
:root {
  // brand colors
  --c-brand: #3eaf7c;
  --c-brand-light: #4abf8a;

  // background colors
  --c-bg: #ffffff;
  --c-bg-light: #f3f4f5;
  --c-bg-lighter: #eeeeee;
  --c-bg-dark: #ebebec;
  --c-bg-darker: #e6e6e6;
  --c-bg-navbar: var(--c-bg);
  --c-bg-sidebar: var(--c-bg);
  --c-bg-arrow: #cccccc;

  // text colors
  --c-text: #2c3e50;
  --c-text-accent: var(--c-brand);
  --c-text-light: #3a5169;
  --c-text-lighter: #4e6e8e;
  --c-text-lightest: #6a8bad;
  --c-text-quote: #999999;

  // border colors
  --c-border: #eaecef;
  --c-border-dark: #dfe2e5;

  // custom container colors
  --c-tip: #42b983;
  --c-tip-bg: var(--c-bg-light);
  --c-tip-title: var(--c-text);
  --c-tip-text: var(--c-text);
  --c-tip-text-accent: var(--c-text-accent);
  --c-warning: #ffc310;
  --c-warning-bg: #fffae3;
  --c-warning-bg-light: #fff3ba;
  --c-warning-bg-lighter: #fff0b0;
  --c-warning-border-dark: #f7dc91;
  --c-warning-details-bg: #fff5ca;
  --c-warning-title: #f1b300;
  --c-warning-text: #746000;
  --c-warning-text-accent: #edb100;
  --c-warning-text-light: #c1971c;
  --c-warning-text-quote: #ccab49;
  --c-danger: #f11e37;
  --c-danger-bg: #ffe0e0;
  --c-danger-bg-light: #ffcfde;
  --c-danger-bg-lighter: #ffc9c9;
  --c-danger-border-dark: #f1abab;
  --c-danger-details-bg: #ffd4d4;
  --c-danger-title: #ed1e2c;
  --c-danger-text: #660000;
  --c-danger-text-accent: #bd1a1a;
  --c-danger-text-light: #b5474d;
  --c-danger-text-quote: #c15b5b;
  --c-details-bg: #eeeeee;

  // badge component colors
  --c-badge-tip: var(--c-tip);
  --c-badge-warning: #ecc808;
  --c-badge-warning-text: var(--c-bg);
  --c-badge-danger: #dc2626;
  --c-badge-danger-text: var(--c-bg);

  // transition vars
  --t-color: 0.3s ease;
  --t-transform: 0.3s ease;

  // code blocks vars
  --code-bg-color: #282c34;
  --code-hl-bg-color: rgba(0, 0, 0, 0.66);
  --code-ln-color: #9e9e9e;
  --code-ln-wrapper-width: 3.5rem;

  // font vars
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --font-family-code: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;

  // layout vars
  --navbar-height: 3.6rem;
  --navbar-padding-v: 0.7rem;
  --navbar-padding-h: 1.5rem;
  --sidebar-width: 20rem;
  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);
  --content-width: 740px;
  --homepage-width: 960px;
}

// plugin-back-to-top
.back-to-top {
  --back-to-top-color: var(--c-brand);
  --back-to-top-color-hover: var(--c-brand-light);
}

// plugin-docsearch
.DocSearch {
  --docsearch-primary-color: var(--c-brand);
  --docsearch-text-color: var(--c-text);
  --docsearch-highlight-color: var(--c-brand);
  --docsearch-muted-color: var(--c-text-quote);
  --docsearch-container-background: rgba(9, 10, 17, 0.8);
  --docsearch-modal-background: var(--c-bg-light);
  --docsearch-searchbox-background: var(--c-bg-lighter);
  --docsearch-searchbox-focus-background: var(--c-bg);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);
  --docsearch-hit-color: var(--c-text-light);
  --docsearch-hit-active-color: var(--c-bg);
  --docsearch-hit-background: var(--c-bg);
  --docsearch-hit-shadow: 0 1px 3px 0 var(--c-border-dark);
  --docsearch-footer-background: var(--c-bg);
}

// plugin-external-link-icon
.external-link-icon {
  --external-link-icon-color: var(--c-text-quote);
}

// plugin-medium-zoom
.medium-zoom-overlay {
  --medium-zoom-bg-color: var(--c-bg);
}

// plugin-nprogress
#nprogress {
  --nprogress-color: var(--c-brand);
}

// plugin-pwa-popup
.pwa-popup {
  --pwa-popup-text-color: var(--c-text);
  --pwa-popup-bg-color: var(--c-bg);
  --pwa-popup-border-color: var(--c-brand);
  --pwa-popup-shadow: 0 4px 16px var(--c-brand);
  --pwa-popup-btn-text-color: var(--c-bg);
  --pwa-popup-btn-bg-color: var(--c-brand);
  --pwa-popup-btn-hover-bg-color: var(--c-brand-light);
}

// plugin-search
.search-box {
  --search-bg-color: var(--c-bg);
  --search-accent-color: var(--c-brand);
  --search-text-color: var(--c-text);
  --search-border-color: var(--c-border);

  --search-item-text-color: var(--c-text-lighter);
  --search-item-focus-bg-color: var(--c-bg-light);
}
```

:::

::: details 暗黑主题

```scss
html.dark {
  // brand colors
  --c-brand: #3aa675;
  --c-brand-light: #349469;

  // background colors
  --c-bg: #22272e;
  --c-bg-light: #2b313a;
  --c-bg-lighter: #262c34;
  --c-bg-dark: #343b44;
  --c-bg-darker: #37404c;

  // text colors
  --c-text: #adbac7;
  --c-text-light: #96a7b7;
  --c-text-lighter: #8b9eb0;
  --c-text-lightest: #8094a8;

  // border colors
  --c-border: #3e4c5a;
  --c-border-dark: #34404c;

  // custom container colors
  --c-tip: #318a62;
  --c-warning: #e0ad15;
  --c-warning-bg: #2d2f2d;
  --c-warning-bg-light: #423e2a;
  --c-warning-bg-lighter: #44442f;
  --c-warning-border-dark: #957c35;
  --c-warning-details-bg: #39392d;
  --c-warning-title: #fdca31;
  --c-warning-text: #d8d96d;
  --c-warning-text-accent: #ffbf00;
  --c-warning-text-light: #ddb84b;
  --c-warning-text-quote: #ccab49;
  --c-danger: #fc1e38;
  --c-danger-bg: #39232c;
  --c-danger-bg-light: #4b2b35;
  --c-danger-bg-lighter: #553040;
  --c-danger-border-dark: #a25151;
  --c-danger-details-bg: #482936;
  --c-danger-title: #fc2d3b;
  --c-danger-text: #ea9ca0;
  --c-danger-text-accent: #fd3636;
  --c-danger-text-light: #d9777c;
  --c-danger-text-quote: #d56b6b;
  --c-details-bg: #323843;

  // badge component colors
  --c-badge-warning: var(--c-warning);
  --c-badge-warning-text: #3c2e05;
  --c-badge-danger: var(--c-danger);
  --c-badge-danger-text: #401416;

  // code blocks vars
  --code-hl-bg-color: #363b46;
}

// plugin-docsearch
html.dark .DocSearch {
  --docsearch-logo-color: var(--c-text);
  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;
  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,
    0 2px 2px 0 rgba(3, 4, 9, 0.3);
  --docsearch-key-gradient: linear-gradient(-225deg, #444950, #1c1e21);
  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
    0 -4px 8px 0 rgba(0, 0, 0, 0.2);
}
```

:::

添加额外的关键字样式、表头样式

```scss
/** 3个点 */
  div[class*=language-]::before {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 12px;
    height: 12px;
    overflow: visible;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    white-space: nowrap;
    text-indent: 75px;
    background-color: #fc625d;
    border-radius: 16px;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: attr(data-ext);
    color: aqua;    
    font-family: 'Courier New', Courier, monospace;
}

.token.keyword{
    color: #f92672 !important;
  }

  .token.comment{
    color: #75715e !important;
  }

  .token.tag{
    color: #a589ad !important;
  }

  .token.attr-name{
    color: #de916c !important;
  }

  .token.attr-value{
    color: #4faee2 !important;
  }

  .token.macro.property{
    color: #4faee2 !important;
  }

  .token.function{
    color: #66D9EF !important;
  }
  .token.string{
    color: #e6db74 !important;
  }
  .token.punctuation{
    color: #c0c3c1 !important;
  }

  .token.number{
    color: #ae81ff  !important;
  }
  .token.operator{
    color: #f92672 !important;
  }
  .token.builtin{
    color: #66D9EF !important;
  }
  .token.decorator.annotation.punctuation
  {
    color: #a6e22e !important;
  }

  .token.class-name{
    color: #a6e22e !important;
  }

  .token.namespace{
    color: #f92672 !important;
  }

  .token.property{
    color: #f92672 !important;
  }

  .token.parameter{
    color: #f92672 !important;
  }

  .token.variable{
    color: #f92672 !important;
  }

  .token.namespace{
    color: #ededed !important;
  }
```



## 部署

### GitHub Pages

1. 设置正确的 [base](https://v2.vuepress.vuejs.org/zh/reference/config.html#base) 选项。

   如果你准备发布到 `https://<USERNAME>.github.io/` ，你可以省略这一步，因为 `base` 默认就是 `"/"` 。

   如果你准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>` ，则将 `base` 设置为 `"/<REPO>/"`。

2. 选择你想要使用的 CI 工具。这里我们以 [GitHub Actions在新窗口打开](https://github.com/features/actions) 为例。

   创建 `.github/workflows/docs.yml` 文件来配置工作流。

官网的打包方式没有成功，好像是PNPM找不到版本，当前用的`"vuepress": "^2.0.0-beta.67",`而pnpm的版本是50，找不到匹配项目。改为deploy.sh方式来处理。

在根目录新建`deploy.sh`

```sh
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A

git commit -m "your commit"
# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:mazaiguo/vuepress2.git master:gh-pages

cd -
```

在gitbash中运行./deploy.sh命令

#### Windows[](https://pnpm.io/zh/installation#windows)

使用 PowerShell：

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### 使用 npm 安装[](https://pnpm.io/zh/installation#使用-npm-安装)

我们提供了两个 pnpm CLI 包， `pnpm` 和 `@pnpm/exe`。

- [`pnpm`](https://www.npmjs.com/package/pnpm) 是 pnpm 的普通版本，需要 Node.js 运行。
- [`@pnpm/exe`](https://www.npmjs.com/package/@pnpm/exe) 与 Node.js 一起打包成可执行文件，因此它可以在没有安装 Node.js 的系统上使用。

```sh
npm install -g pnpm
```

或者

```sh
npm install -g @pnpm/exe
```

### GitLab Pages

1. 设置正确的 [base](https://v2.vuepress.vuejs.org/zh/reference/config.html#base) 选项。

   如果你准备发布到 `https://<USERNAME>.gitlab.io/` ，你可以省略这一步，因此 `base` 默认就是 `"/"` 。

   如果你准备发布到 `https://<USERNAME>.gitlab.io/<REPO>/` ，也就是说你的仓库地址是 `https://gitlab.com/<USERNAME>/<REPO>` ，则将 `base` 设置为 `"/<REPO>/"`。

2. 创建 `.gitlab-ci.yml` 文件来配置 [GitLab CI在新窗口打开](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) 工作流。

::: details

```yml
# 选择你要使用的 docker 镜像
image: node:18-buster

pages:
  # 每当 push 到 main 分支时触发部署
  only:
    - main

  # 缓存 node_modules
  cache:
    key:
      files:
        - pnpm-lock.yaml
    paths:
      - .pnpm-store

  # 安装 pnpm
  before_script:
    - curl -fsSL https://get.pnpm.io/install.sh | sh -
    - pnpm config set store-dir .pnpm-store

  # 安装依赖并运行构建脚本
  script:
    - pnpm install --frozen-lockfile
    - pnpm docs:build --dest public

  artifacts:
    paths:
      - public
```

:::

## 增加copyright

* 新增`docs\.vuepress\layouts\Layout.vue`

```vue
<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">MIT Licensed | Copyright © 2018-present <a target="_blank" href="https://github.com/mazaiguo/vuepress2">JerryMa</a></div>
    </template>
    <template #page-top>
      <div class="my-page-top">page-top</div>
    </template>
    <template #page-content-top>
      <div class="my-page-content-top">page-content-top</div>
    </template>
    <template #page-content-bottom>
      <div class="my-page-content-bottom">page-content-bottom</div>
    </template>
    <!-- <template #page>
      <div class="my-page">page-------------</div>
    </template> -->
    <!-- <template #navbar>
      <div class="my-navbar">navbar</div>
    </template> -->
    <template #navbar-before>
      <div class="my-navbar-before">navbar-beforee-------------</div>
    </template>
    <template #navbar-after>
      <div class="my-navbar-after">navbar-after-------------</div>
    </template>
    <!-- <template #sidebar>
      <div class="my-sidebar">sidebar-------------</div>
    </template> -->
    <template #sidebar-top>
      <div class="my-sidebar-top">sidebar-top-------------</div>
    </template>
    <template #sidebar-bottom>
      <div class="my-sidebar-bottom">sidebar-bottom-------------</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
```

page-bottom的插槽放置copyright的信息；page、sidebar、navbar被占用了，设置插槽会影响显示，各位大佬如果知道怎么搞可以告知。

* `docs\.vuepress\client.js`,在文件中增加layout的引用

```vue
import { defineClientConfig } from '@vuepress/client'
import * as Icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import Layout from './layouts/Layout.vue'
//加载elementplus
export default defineClientConfig({
  enhance({ app, router, siteData }) {

    app.use(ElementPlus)
    // icon
    for (const icon in Icons) {
      // eslint-disable-next-line import/namespace
      app.component(icon, Icons[icon])
    }

  },
  setup() {},
  rootComponents: [],
  layouts: {
    Layout,
  },
})
```

## 增加emoji

[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)

常用emoji图标如下所示：

### [Tool](https://github.com/ikatyang/emoji-cheat-sheet#tool)

|                                                              | ico  | shortcode             | ico  | shortcode           |                                                              |
| ------------------------------------------------------------ | ---- | --------------------- | ---- | ------------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🔨    | `:hammer:`            | 🪓    | `:axe:`             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | ⛏️    | `:pick:`              | ⚒️    | `:hammer_and_pick:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🛠️    | `:hammer_and_wrench:` | 🗡️    | `:dagger:`          | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | ⚔️    | `:crossed_swords:`    | 💣    | `:bomb:`            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🪃    | `:boomerang:`         | 🏹    | `:bow_and_arrow:`   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🛡️    | `:shield:`            | 🪚    | `:carpentry_saw:`   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🔧    | `:wrench:`            | 🪛    | `:screwdriver:`     | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🔩    | `:nut_and_bolt:`      | ⚙️    | `:gear:`            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🗜️    | `:clamp:`             | ⚖️    | `:balance_scale:`   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🦯    | `:probing_cane:`      | 🔗    | `:link:`            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | ⛓️    | `:chains:`            | 🪝    | `:hook:`            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🧰    | `:toolbox:`           | 🧲    | `:magnet:`          | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#objects) | 🪜    | `:ladder:`            |      |                     | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

### [Keycap](https://github.com/ikatyang/emoji-cheat-sheet#keycap)

|                                                              | ico  | shortcode      | ico  | shortcode    |                                                              |
| ------------------------------------------------------------ | ---- | -------------- | ---- | ------------ | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#symbols) | #️⃣    | `:hash:`       | *️⃣    | `:asterisk:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#symbols) | 0️⃣    | `:zero:`       | 1️⃣    | `:one:`      | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#symbols) | 2️⃣    | `:two:`        | 3️⃣    | `:three:`    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#symbols) | 4️⃣    | `:four:`       | 5️⃣    | `:five:`     | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#symbols) | 6️⃣    | `:six:`        | 7️⃣    | `:seven:`    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#symbols) | 8️⃣    | `:eight:`      | 9️⃣    | `:nine:`     | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#symbols) | 🔟    | `:keycap_ten:` |      |              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

### [Sport](https://github.com/ikatyang/emoji-cheat-sheet#sport)

|                                                              | ico  | shortcode          | ico  | shortcode                   |                                                              |
| ------------------------------------------------------------ | ---- | ------------------ | ---- | --------------------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | ⚽    | `:soccer:`         | ⚾    | `:baseball:`                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🥎    | `:softball:`       | 🏀    | `:basketball:`              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🏐    | `:volleyball:`     | 🏈    | `:football:`                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🏉    | `:rugby_football:` | 🎾    | `:tennis:`                  | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🥏    | `:flying_disc:`    | 🎳    | `:bowling:`                 | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🏏    | `:cricket_game:`   | 🏑    | `:field_hockey:`            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🏒    | `:ice_hockey:`     | 🥍    | `:lacrosse:`                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🏓    | `:ping_pong:`      | 🏸    | `:badminton:`               | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🥊    | `:boxing_glove:`   | 🥋    | `:martial_arts_uniform:`    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🥅    | `:goal_net:`       | ⛳    | `:golf:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | ⛸️    | `:ice_skate:`      | 🎣    | `:fishing_pole_and_fish:`   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🤿    | `:diving_mask:`    | 🎽    | `:running_shirt_with_sash:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🎿    | `:ski:`            | 🛷    | `:sled:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🥌    | `:curling_stone:`  |      |                             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

### [Game](https://github.com/ikatyang/emoji-cheat-sheet#game)

|                                                              | ico  | shortcode                | ico  | shortcode        |                                                              |
| ------------------------------------------------------------ | ---- | ------------------------ | ---- | ---------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🎯    | `:dart:`                 | 🪀    | `:yo_yo:`        | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🪁    | `:kite:`                 | 🔫    | `:gun:`          | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🎱    | `:8ball:`                | 🔮    | `:crystal_ball:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🪄    | `:magic_wand:`           | 🎮    | `:video_game:`   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🕹️    | `:joystick:`             | 🎰    | `:slot_machine:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🎲    | `:game_die:`             | 🧩    | `:jigsaw:`       | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🧸    | `:teddy_bear:`           | 🪅    | `:pinata:`       | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🪆    | `:nesting_dolls:`        | ♠️    | `:spades:`       | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | ♥️    | `:hearts:`               | ♦️    | `:diamonds:`     | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | ♣️    | `:clubs:`                | ♟️    | `:chess_pawn:`   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🃏    | `:black_joker:`          | 🀄    | `:mahjong:`      | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#activities) | 🎴    | `:flower_playing_cards:` |      |                  | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

### [Heart](https://github.com/ikatyang/emoji-cheat-sheet#heart)

|                                                              | ico  | shortcode            | ico  | shortcode                   |                                                              |
| ------------------------------------------------------------ | ---- | -------------------- | ---- | --------------------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💌    | `:love_letter:`      | 💘    | `:cupid:`                   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💝    | `:gift_heart:`       | 💖    | `:sparkling_heart:`         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💗    | `:heartpulse:`       | 💓    | `:heartbeat:`               | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💞    | `:revolving_hearts:` | 💕    | `:two_hearts:`              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💟    | `:heart_decoration:` | ❣️    | `:heavy_heart_exclamation:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💔    | `:broken_heart:`     | ❤️‍🔥   | `:heart_on_fire:`           | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | ❤️‍🩹   | `:mending_heart:`    | ❤️    | `:heart:`                   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 🧡    | `:orange_heart:`     | 💛    | `:yellow_heart:`            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💚    | `:green_heart:`      | 💙    | `:blue_heart:`              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💜    | `:purple_heart:`     | 🤎    | `:brown_heart:`             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 🖤    | `:black_heart:`      | 🤍    | `:white_heart:`             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |



### [Emotion](https://github.com/ikatyang/emoji-cheat-sheet#emotion)

|                                                              | ico  | shortcode              | ico  | shortcode              |                                                              |
| ------------------------------------------------------------ | ---- | ---------------------- | ---- | ---------------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💋    | `:kiss:`               | 💯    | `:100:`                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💢    | `:anger:`              | 💥    | `:boom:` `:collision:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💫    | `:dizzy:`              | 💦    | `:sweat_drops:`        | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💨    | `:dash:`               | 🕳️    | `:hole:`               | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💬    | `:speech_balloon:`     | 👁️‍🗨️   | `:eye_speech_bubble:`  | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 🗨️    | `:left_speech_bubble:` | 🗯️    | `:right_anger_bubble:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#smileys--emotion) | 💭    | `:thought_balloon:`    | 💤    | `:zzz:`                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

### [Body Parts](https://github.com/ikatyang/emoji-cheat-sheet#body-parts)

|                                                              | ico  | shortcode                | ico  | shortcode            |                                                              |
| ------------------------------------------------------------ | ---- | ------------------------ | ---- | -------------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 💪    | `:muscle:`               | 🦾    | `:mechanical_arm:`   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🦿    | `:mechanical_leg:`       | 🦵    | `:leg:`              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🦶    | `:foot:`                 | 👂    | `:ear:`              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🦻    | `:ear_with_hearing_aid:` | 👃    | `:nose:`             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧠    | `:brain:`                | 🫀    | `:anatomical_heart:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🫁    | `:lungs:`                | 🦷    | `:tooth:`            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🦴    | `:bone:`                 | 👀    | `:eyes:`             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👁️    | `:eye:`                  | 👅    | `:tongue:`           | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👄    | `:lips:`                 |      |                      | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

### [Person](https://github.com/ikatyang/emoji-cheat-sheet#person)

|                                                              | ico  | shortcode             | ico  | shortcode                               |                                                              |
| ------------------------------------------------------------ | ---- | --------------------- | ---- | --------------------------------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👶    | `:baby:`              | 🧒    | `:child:`                               | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👦    | `:boy:`               | 👧    | `:girl:`                                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑    | `:adult:`             | 👱    | `:blond_haired_person:`                 | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨    | `:man:`               | 🧔    | `:bearded_person:`                      | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧔‍♂️   | `:man_beard:`         | 🧔‍♀️   | `:woman_beard:`                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🦰   | `:red_haired_man:`    | 👨‍🦱   | `:curly_haired_man:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🦳   | `:white_haired_man:`  | 👨‍🦲   | `:bald_man:`                            | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩    | `:woman:`             | 👩‍🦰   | `:red_haired_woman:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🦰   | `:person_red_hair:`   | 👩‍🦱   | `:curly_haired_woman:`                  | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🦱   | `:person_curly_hair:` | 👩‍🦳   | `:white_haired_woman:`                  | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🦳   | `:person_white_hair:` | 👩‍🦲   | `:bald_woman:`                          | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🦲   | `:person_bald:`       | 👱‍♀️   | `:blond_haired_woman:` `:blonde_woman:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👱‍♂️   | `:blond_haired_man:`  | 🧓    | `:older_adult:`                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👴    | `:older_man:`         | 👵    | `:older_woman:`                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

### [Person Role](https://github.com/ikatyang/emoji-cheat-sheet#person-role)

|                                                              | ico  | shortcode                     | ico  | shortcode                               |                                                              |
| ------------------------------------------------------------ | ---- | ----------------------------- | ---- | --------------------------------------- | ------------------------------------------------------------ |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍⚕️   | `:health_worker:`             | 👨‍⚕️   | `:man_health_worker:`                   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍⚕️   | `:woman_health_worker:`       | 🧑‍🎓   | `:student:`                             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🎓   | `:man_student:`               | 👩‍🎓   | `:woman_student:`                       | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🏫   | `:teacher:`                   | 👨‍🏫   | `:man_teacher:`                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍🏫   | `:woman_teacher:`             | 🧑‍⚖️   | `:judge:`                               | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍⚖️   | `:man_judge:`                 | 👩‍⚖️   | `:woman_judge:`                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🌾   | `:farmer:`                    | 👨‍🌾   | `:man_farmer:`                          | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍🌾   | `:woman_farmer:`              | 🧑‍🍳   | `:cook:`                                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🍳   | `:man_cook:`                  | 👩‍🍳   | `:woman_cook:`                          | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🔧   | `:mechanic:`                  | 👨‍🔧   | `:man_mechanic:`                        | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍🔧   | `:woman_mechanic:`            | 🧑‍🏭   | `:factory_worker:`                      | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🏭   | `:man_factory_worker:`        | 👩‍🏭   | `:woman_factory_worker:`                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍💼   | `:office_worker:`             | 👨‍💼   | `:man_office_worker:`                   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍💼   | `:woman_office_worker:`       | 🧑‍🔬   | `:scientist:`                           | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🔬   | `:man_scientist:`             | 👩‍🔬   | `:woman_scientist:`                     | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍💻   | `:technologist:`              | 👨‍💻   | `:man_technologist:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍💻   | `:woman_technologist:`        | 🧑‍🎤   | `:singer:`                              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🎤   | `:man_singer:`                | 👩‍🎤   | `:woman_singer:`                        | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🎨   | `:artist:`                    | 👨‍🎨   | `:man_artist:`                          | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍🎨   | `:woman_artist:`              | 🧑‍✈️   | `:pilot:`                               | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍✈️   | `:man_pilot:`                 | 👩‍✈️   | `:woman_pilot:`                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🚀   | `:astronaut:`                 | 👨‍🚀   | `:man_astronaut:`                       | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍🚀   | `:woman_astronaut:`           | 🧑‍🚒   | `:firefighter:`                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👨‍🚒   | `:man_firefighter:`           | 👩‍🚒   | `:woman_firefighter:`                   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👮    | `:cop:` `:police_officer:`    | 👮‍♂️   | `:policeman:`                           | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👮‍♀️   | `:policewoman:`               | 🕵️    | `:detective:`                           | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🕵️‍♂️   | `:male_detective:`            | 🕵️‍♀️   | `:female_detective:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 💂    | `:guard:`                     | 💂‍♂️   | `:guardsman:`                           | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 💂‍♀️   | `:guardswoman:`               | 🥷    | `:ninja:`                               | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👷    | `:construction_worker:`       | 👷‍♂️   | `:construction_worker_man:`             | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👷‍♀️   | `:construction_worker_woman:` | 🤴    | `:prince:`                              | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👸    | `:princess:`                  | 👳    | `:person_with_turban:`                  | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👳‍♂️   | `:man_with_turban:`           | 👳‍♀️   | `:woman_with_turban:`                   | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👲    | `:man_with_gua_pi_mao:`       | 🧕    | `:woman_with_headscarf:`                | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🤵    | `:person_in_tuxedo:`          | 🤵‍♂️   | `:man_in_tuxedo:`                       | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🤵‍♀️   | `:woman_in_tuxedo:`           | 👰    | `:person_with_veil:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👰‍♂️   | `:man_with_veil:`             | 👰‍♀️   | `:bride_with_veil:` `:woman_with_veil:` | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🤰    | `:pregnant_woman:`            | 🤱    | `:breast_feeding:`                      | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 👩‍🍼   | `:woman_feeding_baby:`        | 👨‍🍼   | `:man_feeding_baby:`                    | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |
| [top](https://github.com/ikatyang/emoji-cheat-sheet#people--body) | 🧑‍🍼   | `:person_feeding_baby:`       |      |                                         | [top](https://github.com/ikatyang/emoji-cheat-sheet#table-of-contents) |

## 问题

### sidebar的方式有两种：

#### 第一种如下所示：

```js
{
    text: 'plugin-md-enhance', link: '/Code/UI/VUE/plugin-md-enhance',
        // 目录是否折叠
        collapsible: true,
            children: [
                // 这种方式需要处理markdown文件名必须不能为中文，这种方式也没有目录结构，不太推荐
                { text: 'align', link: '/Code/UI/VUE/md-enhance/align' },
                { text: 'card', link: '/Code/UI/VUE/md-enhance/card' },
            ]
},
```

这种方式需要处理markdown文件名必须不能为中文，这种方式也没有目录结构，不太推荐

#### 第二种如下所示：

```javascript
{
    text: 'vue3-admin-guide', link: '/Code/UI/VUE/vue3-admin-guide',
        // 目录是否折叠
        collapsible: true,
            children: [
                // 推荐这种方式，点击名称有侧边栏目录。还有markdown文件中必须配置标题，不然名称就用下面的字符配置的信息，不好看
                '/Code/UI/VUE/vue3-admin-guide-master/src/P00_项目配置',
                '/Code/UI/VUE/vue3-admin-guide-master/src/P01_项目集成',
            ]
},
```

