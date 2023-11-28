import{_ as i,r as t,o as l,c as o,a as n,b as e,d as a,e as r}from"./app-a242af93.js";const c={},d=n("h1",{id:"vue3安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3安装","aria-hidden":"true"},"#"),e(" Vue3安装")],-1),p={href:"https://unpkg.com/vue@3.2.36/dist/vue.global.js",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"前提条件",-1),v=n("li",null,"熟悉命令行",-1),m={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"使用-cdn-方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-cdn-方法","aria-hidden":"true"},"#"),e(" 使用 CDN 方法")],-1),h=n("p",null,"以下推荐国外比较稳定的两个 CDN，国内还没发现哪一家比较好，目前还是建议下载到本地。",-1),k=n("strong",null,"Staticfile CDN（国内）",-1),g={href:"https://cdn.staticfile.org/vue/3.0.5/vue.global.js",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"unpkg",-1),f={href:"https://unpkg.com/vue@next",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"cdnjs",-1),N={href:"https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.global.js",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"npm-方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-方法","aria-hidden":"true"},"#"),e(" NPM 方法")],-1),V={href:"https://www.runoob.com/nodejs/nodejs-npm.html#taobaonpm",target:"_blank",rel:"noopener noreferrer"},E=r(`<p>npm 版本需要大于 3.0，如果低于此版本需要升级它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本</span>
$ <span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token number">2.3</span>.0

<span class="token comment">#升级 npm</span>
cnpm <span class="token function">install</span> <span class="token function">npm</span> <span class="token parameter variable">-g</span>


<span class="token comment"># 升级或安装 cnpm</span>
<span class="token function">npm</span> <span class="token function">install</span> cnpm <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在用 Vue.js 构建大型应用时推荐使用 cnpm 安装，cnpm 能很好地和 Webpack 或 Browserify 模块打包器配合使用，然后在命令行中运行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 最新稳定版
$ npm init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这一指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> init vue@latest
Need to <span class="token function">install</span> the following packages:
  create-vue@3.6.1
Ok to proceed? <span class="token punctuation">(</span>y<span class="token punctuation">)</span> y

Vue.js - The Progressive vue Framework
<span class="token comment"># 这里需要进行一些配置，项目名输入 runoob-vue3-test，其他默认回车即可</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Project name: … runoob-vue3-test</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Add TypeScript? … No / Yes</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Add JSX Support? … No / Yes</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Add Vue Router for Single Page Application development? … No / Yes</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Add Pinia for state management? … No / Yes</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Add Vitest for Unit Testing? … No / Yes</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Add an End-to-End Testing Solution? › No</span>
<span class="token operator">&amp;</span><span class="token comment">#x2714; Add ESLint for code quality? … No / Yes</span>

Scaffolding project <span class="token keyword">in</span> /Users/tianqixin/runoob-test/runoob-vue3/runoob-vue3-test<span class="token punctuation">..</span>.

Done. Now run:

  <span class="token builtin class-name">cd</span> runoob-vue3-test
  <span class="token function">npm</span> <span class="token function">install</span>
  <span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不确定是否要开启某个功能，你可以直接按下回车键选择 No。</p><p>在项目被创建后，通过以下步骤安装依赖并启动开发服务器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> runoob-vue3-test
$ <span class="token function">npm</span> <span class="token function">install</span>
$ <span class="token function">npm</span> run dev
  VITE v4.3.4  ready <span class="token keyword">in</span> <span class="token number">543</span> ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use <span class="token parameter variable">--host</span> to expose
  ➜  press h to show <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h2><p>Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。</p><p>通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目，语法格式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vite-app <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建项目 runoob-vue3-test2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$  <span class="token function">npm</span> init vite-app runoob-vue3-test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行项目:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> runoob-vue3-test2
$ cnpm <span class="token function">install</span>
$ cnpm run dev
<span class="token operator">&gt;</span> runoob-vue3-test2@0.0.0 dev /Users/tianqixin/runoob-test/vue3/runoob-vue3-test2
<span class="token operator">&gt;</span> vite

<span class="token punctuation">[</span>vite<span class="token punctuation">]</span> Optimizable dependencies detected:
vue

  Dev server running at:
  <span class="token operator">&gt;</span> Local:    http://localhost:4000/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),w={href:"http://localhost:4000/**%EF%BC%8C%E6%98%BE%E7%A4%BA%E5%A6%82%E4%B8%8B%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"};function A(B,S){const s=t("ExternalLinkIcon");return l(),o("div",null,[d,n("p",null,[n("a",p,[e("下载Vue.js"),a(s)])]),n("blockquote",null,[u,n("ul",null,[v,n("li",null,[e("已安装 16.0 或更高版本的 "),n("a",m,[e("Node.js"),a(s)])])])]),b,h,n("ul",null,[n("li",null,[k,e(" : "),n("a",g,[e("https://cdn.staticfile.org/vue/3.0.5/vue.global.js"),a(s)])]),n("li",null,[_,e("："),n("a",f,[e("https://unpkg.com/vue@next"),a(s)]),e(", 会保持和 npm 发布的最新的版本一致。")]),n("li",null,[x,e(" : "),n("a",N,[e("https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.global.js"),a(s)])])]),j,n("p",null,[e("由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm，安装使用介绍参照："),n("a",V,[e("使用淘宝 NPM 镜像"),a(s)]),e("。")]),E,n("p",null,[e("打开 **"),n("a",w,[e("http://localhost:4000/**，显示如下："),a(s)])])])}const y=i(c,[["render",A],["__file","Vue3安装.html.vue"]]);export{y as default};
