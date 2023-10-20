# Vue3安装

[下载Vue.js](https://unpkg.com/vue@3.2.36/dist/vue.global.js)

> 前提条件
>
> - 熟悉命令行
> - 已安装 16.0 或更高版本的 [Node.js](https://nodejs.org/)

## 使用 CDN 方法

以下推荐国外比较稳定的两个 CDN，国内还没发现哪一家比较好，目前还是建议下载到本地。

- **Staticfile CDN（国内）** : https://cdn.staticfile.org/vue/3.0.5/vue.global.js
- **unpkg**：https://unpkg.com/vue@next, 会保持和 npm 发布的最新的版本一致。
- **cdnjs** : https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.global.js

## NPM 方法

由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm，安装使用介绍参照：[使用淘宝 NPM 镜像](https://www.runoob.com/nodejs/nodejs-npm.html#taobaonpm)。

npm 版本需要大于 3.0，如果低于此版本需要升级它：

```bash
# 查看版本
$ npm -v
2.3.0

#升级 npm
cnpm install npm -g


# 升级或安装 cnpm
npm install cnpm -g
```

在用 Vue.js 构建大型应用时推荐使用 cnpm 安装，cnpm 能很好地和 Webpack 或 Browserify 模块打包器配合使用，然后在命令行中运行以下命令：

```
# 最新稳定版
$ npm init vue@latest
```

这一指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。

```bash
$ npm init vue@latest
Need to install the following packages:
  create-vue@3.6.1
Ok to proceed? (y) y

Vue.js - The Progressive vue Framework
# 这里需要进行一些配置，项目名输入 runoob-vue3-test，其他默认回车即可
&#x2714; Project name: … runoob-vue3-test
&#x2714; Add TypeScript? … No / Yes
&#x2714; Add JSX Support? … No / Yes
&#x2714; Add Vue Router for Single Page Application development? … No / Yes
&#x2714; Add Pinia for state management? … No / Yes
&#x2714; Add Vitest for Unit Testing? … No / Yes
&#x2714; Add an End-to-End Testing Solution? › No
&#x2714; Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/tianqixin/runoob-test/runoob-vue3/runoob-vue3-test...

Done. Now run:

  cd runoob-vue3-test
  npm install
  npm run dev
```

如果不确定是否要开启某个功能，你可以直接按下回车键选择 No。

在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

```bash
$ cd runoob-vue3-test
$ npm install
$ npm run dev
  VITE v4.3.4  ready in 543 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Vite

Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目，语法格式如下：

```bash
npm init vite-app <project-name>
```

创建项目 runoob-vue3-test2：

```bash
$  npm init vite-app runoob-vue3-test2
```

运行项目:

```bash
$ cd runoob-vue3-test2
$ cnpm install
$ cnpm run dev
> runoob-vue3-test2@0.0.0 dev /Users/tianqixin/runoob-test/vue3/runoob-vue3-test2
> vite

[vite] Optimizable dependencies detected:
vue

  Dev server running at:
  > Local:    http://localhost:4000/
```

打开 **http://localhost:4000/**，显示如下：