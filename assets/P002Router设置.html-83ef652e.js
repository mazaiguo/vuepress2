import{_ as n,o as s,c as a,e as p}from"./app-a242af93.js";const t={},e=p(`<h1 id="路由设置" tabindex="-1"><a class="header-anchor" href="#路由设置" aria-hidden="true">#</a> 路由设置</h1><h2 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> <strong>路由配置</strong></h2><h3 id="路由index文件" tabindex="-1"><a class="header-anchor" href="#路由index文件" aria-hidden="true">#</a> 路由index文件</h3><p><code>src\\router\\index.ts</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">//通过vue-router插件实现模板路由配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> constantRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token comment">//创建路由器</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//路由模式hash</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token operator">:</span> constantRoute<span class="token punctuation">,</span>
  <span class="token comment">//滚动行为</span>
  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src\\router\\router.ts</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">//对外暴露配置路由(常量路由):全部用户都可以访问到的路由</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> constantRoute <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//登录</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/login/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span> <span class="token comment">//菜单标题</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;Promotion&#39;</span><span class="token punctuation">,</span> <span class="token comment">//菜单文字左侧的图标,支持element-plus全部图标</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//登录成功以后展示数据的路由</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;layout&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      hidden<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/home/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
          hidden<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;HomeFilled&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//404</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/404/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;404&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;404&#39;</span><span class="token punctuation">,</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;DocumentDelete&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/screen&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/screen/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Screen&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      hidden<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;数据大屏&#39;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;Platform&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/acl&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Acl&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;权限管理&#39;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;Lock&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/acl/user&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/acl/user&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/acl/user/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;用户管理&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/acl/role&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/acl/role/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Role&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;角色管理&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;UserFilled&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/acl/permission&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/acl/permission/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Permission&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;菜单管理&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;Monitor&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/product&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Product&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;商品管理&#39;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;Goods&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/product/trademark&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/product/trademark&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/product/trademark/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Trademark&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;品牌管理&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;ShoppingCartFull&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/product/attr&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/product/attr/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Attr&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;属性管理&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;ChromeFilled&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/product/spu&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/product/spu/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Spu&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;SPU管理&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;Calendar&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/product/sku&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/product/sku/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Sku&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;SKU管理&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;Orange&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由出口" tabindex="-1"><a class="header-anchor" href="#路由出口" aria-hidden="true">#</a> <strong>路由出口</strong></h3><p><code>src\\App.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装vue-router</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>src\\main.ts</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token comment">// 导入el-icon图标</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Icons <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>
<span class="token keyword">import</span> mUI <span class="token keyword">from</span>  <span class="token string">&#39;@/components&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
<span class="token comment">// icon</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> iconName <span class="token keyword">in</span> Icons<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//ElementPlus.use(EIIconMoudle[iconName])</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>iconName<span class="token punctuation">,</span> <span class="token punctuation">(</span>Icons <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">[</span>iconName<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mUI<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库store初始化" tabindex="-1"><a class="header-anchor" href="#仓库store初始化" aria-hidden="true">#</a> <strong>仓库store初始化</strong></h2><h3 id="大仓库" tabindex="-1"><a class="header-anchor" href="#大仓库" aria-hidden="true">#</a> <strong>大仓库</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i pinia@2.0.34
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个 pinia 实例 (根 store) 并将其传递给应用：</p><p><code>src\\main.ts</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","P002Router设置.html.vue"]]);export{r as default};
