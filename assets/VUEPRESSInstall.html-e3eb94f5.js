import{_ as p,r as o,o as l,c as i,a as s,b as n,d as e,e as t}from"./app-a242af93.js";const c={},r=t(`<h1 id="vuepress安装" tabindex="-1"><a class="header-anchor" href="#vuepress安装" aria-hidden="true">#</a> VUEPRESS安装</h1><h2 id="安装yarn" tabindex="-1"><a class="header-anchor" href="#安装yarn" aria-hidden="true">#</a> 安装Yarn</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init <span class="token parameter variable">-y</span><span class="token comment"># npm init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress <span class="token comment"># npm install -D vuepress</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),u=s("code",null,"package.json",-1),d={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev <span class="token comment"># npm run docs:dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),v={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>docs/.vuepress</code>: 用于存放全局的配置、组件、静态资源等。</li><li><code>docs/.vuepress/components</code>: 该目录中的 Vue 组件将会被自动注册为全局组件。</li><li><code>docs/.vuepress/theme</code>: 用于存放本地主题。</li><li><code>docs/.vuepress/styles</code>: 用于存放样式相关的文件。</li><li><code>docs/.vuepress/styles/index.styl</code>: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。</li><li><code>docs/.vuepress/styles/palette.styl</code>: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。</li><li><code>docs/.vuepress/public</code>: 静态资源目录。</li><li><code>docs/.vuepress/templates</code>: 存储 HTML 模板文件。</li><li><code>docs/.vuepress/templates/dev.html</code>: 用于开发环境的 HTML 模板文件。</li><li><code>docs/.vuepress/templates/ssr.html</code>: 构建时基于 Vue SSR 的 HTML 模板文件。</li><li><code>docs/.vuepress/config.js</code>: 配置文件的入口文件，也可以是 <code>YML</code> 或 <code>toml</code>。</li><li><code>docs/.vuepress/enhanceApp.js</code>: 客户端应用的增强。</li></ul><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h2><h3 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h3><p><code>docs\\README.md</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /hero.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Hero 标题
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> Hero 副标题
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> 快速上手 →
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /zh/guide/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue驱动
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
  <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2018<span class="token punctuation">-</span>present Evan You
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docs\\.vuepress\\config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello VuePress&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Just playing around&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/assets/img/Italy.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./nav/zh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./sidebar/zh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">displayAllHeaders</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示所有页面的标题链接</span>
  <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏配置</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">searchMaxSuggestions</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将导航和侧边栏放置到js中处理</p><p><code>docs\\.vuepress\\nav\\zh.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
    <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Code&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Code/&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;ARX&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Code/ARX/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;JAVA&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Code/JAVA/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Programminglanguage&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Python&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Code/Programminglanguage/Python/&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;UI&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue3-UI库学习&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Code/UI/VUE/&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docs\\.vuepress\\sidebar\\zh.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/Code/ARX/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;CustomEntity Trim Extend&#39;</span><span class="token punctuation">,</span>  <span class="token comment">/* /foo/one.html */</span>
        <span class="token string">&#39;ARX保存相关问题&#39;</span>   <span class="token comment">/* /foo/two.html */</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token string-property property">&#39;/Code/JAVA/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;问题&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* /bar/three.html */</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/Code/Programminglanguage/Python/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;question&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* /bar/three.html */</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/Code/UI/VUE/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;MFC使用cef&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* /bar/three.html */</span>
        <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Vue3-UI库学习&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Vue3学习&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;VUEPRESS安装&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;VUE组件打包&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码增加拷贝设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vuepress-plugin-code-copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>运行vue项目提示Error: error:0308010C:digital envelope routines::unsupported
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4><p><code>package.json</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;docs:build&quot;: &quot;SET NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vuepress build docs&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SET NODE_OPTIONS=--openssl-legacy-provider &amp;&amp;</p><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><ul><li><p>在 <code>docs/.vuepress/config.js</code> 中设置正确的 <code>base</code>。</p><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/</code>，则可以省略这一步，因为 <code>base</code> 默认即是 <code>&quot;/&quot;</code>。</p><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>（也就是说你的仓库在 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>），则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p></li><li><p>新建<code>deploy.sh</code></p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:mazaiguo/vuepressblog.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docs\\.vuepress\\config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span><span class="token string">&#39;/vuepressblog/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello VuePress&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Just playing around&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/assets/img/Italy.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./nav/zh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./sidebar/zh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">displayAllHeaders</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 显示所有页面的标题链接</span>
  <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏配置</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">searchMaxSuggestions</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@vuepress/back-to-top&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;vuepress-plugin-code-copy&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新增功能" tabindex="-1"><a class="header-anchor" href="#新增功能" aria-hidden="true">#</a> 新增功能</h2><h3 id="为vuepress添加侧边栏隐藏的功能" tabindex="-1"><a class="header-anchor" href="#为vuepress添加侧边栏隐藏的功能" aria-hidden="true">#</a> 为vuepress添加侧边栏隐藏的功能</h3>`,31),b={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/extending.html#%E7%BB%84%E4%BB%B6%E6%9B%BF%E6%8D%A2",target:"_blank",rel:"noopener noreferrer"},g=s("h4",{id:"组件替换",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#组件替换","aria-hidden":"true"},"#"),n(" 组件替换")],-1),h=s("p",null,"布局插槽十分实用，但有时候你可能会觉得它不够灵活。默认主题同样提供了替换单个组件的能力。",-1),y={href:"https://github.com/vuepress/vuepress-next/tree/main/ecosystem/theme-default/src/client/components",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"@theme",-1),x={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias",target:"_blank",rel:"noopener noreferrer"},q=s("code",null,"HomeFooter.vue",-1),_=s("code",null,"@theme/HomeFooter.vue",-1),E=t(`<p>接下来，如果你想要替换 <code>HomeFooter.vue</code> 组件，只需要在配置文件 <code>.vuepress/config.ts</code> 中覆盖这个别名即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;
import { defaultTheme, defineUserConfig } from &#39;vuepress&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default defineUserConfig({
  theme: defaultTheme(),
  alias: {
    &#39;@theme/HomeFooter.vue&#39;: path.resolve(__dirname, &#39;./components/MyHomeFooter.vue&#39;),
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实际解决方案" tabindex="-1"><a class="header-anchor" href="#实际解决方案" aria-hidden="true">#</a> 实际解决方案</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;
import { defaultTheme, defineUserConfig } from &#39;vuepress&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default defineUserConfig({
  theme: defaultTheme(),
  alias: {
   &#39;@theme/Page.vue&#39;: path.resolve(__dirname, &#39;./components/MyPage.vue&#39;),
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docs\\.vuepress\\components\\MyPage.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> PageMeta <span class="token keyword">from</span> <span class="token string">&#39;@theme/PageMeta.vue&#39;</span>
<span class="token keyword">import</span> PageNav <span class="token keyword">from</span> <span class="token string">&#39;@theme/PageNav.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">let</span> isCollapse <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">toggleCollapse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isCollapse<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>isCollapse<span class="token punctuation">.</span>value
    <span class="token keyword">const</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>
    <span class="token comment">//修改属性值，使得样式生效</span>
    html<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--sidebar-width&#39;</span><span class="token punctuation">,</span> isCollapse<span class="token punctuation">.</span>value<span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;20rem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
defineSlots<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token string">&#39;top&#39;</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>never<span class="token punctuation">,</span> never<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any
    <span class="token string">&#39;bottom&#39;</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>never<span class="token punctuation">,</span> never<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any
    <span class="token string">&#39;content-top&#39;</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>never<span class="token punctuation">,</span> never<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any
    <span class="token string">&#39;content-bottom&#39;</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>never<span class="token punctuation">,</span> never<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ fold: isCollapse ? true : false }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span>
            <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleCollapse<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isCollapse<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Fold</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span>
            <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleCollapse<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-else</span>
        <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Expand</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>theme-default-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content-top<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content-bottom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageMeta</span> <span class="token punctuation">/&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageNav</span> <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;PageFooter /&gt; --&gt;</span>
    <span class="token comment">&lt;!-- &lt;template #page-bottom&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>MIT Licensed | Copyright © 2018-present <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
            <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com/mazaiguo/vuepress2<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>JerryMa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;/template&gt;    --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.page</span><span class="token punctuation">{</span>
        <span class="token selector">&amp;.fold</span> <span class="token punctuation">{</span>
            <span class="token property">padding-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function C(j,P){const a=o("ExternalLinkIcon");return l(),i("div",null,[r,s("p",null,[n("在 "),u,n(" 中添加一些 "),s("a",d,[n("scripts"),e(a)])]),k,s("p",null,[n("VuePress 会在 "),s("a",v,[n("http://localhost:8080 (opens new window)"),e(a)]),n("启动一个热重载的开发服务器。")]),m,s("p",null,[n("参考"),s("a",b,[n("组件替换"),e(a)])]),g,h,s("p",null,[n("默认主题将所有 "),s("a",y,[n("非全局的组件在新窗口打开"),e(a)]),n(" 都注册了一个带 "),f,n(" 前缀的 "),s("a",x,[n("alias"),e(a)]),n(" 。例如，"),q,n(" 的别名是 "),_,n(" 。")]),E])}const A=p(c,[["render",C],["__file","VUEPRESSInstall.html.vue"]]);export{A as default};
