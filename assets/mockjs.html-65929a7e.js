import{_ as e,r as i,o,c as l,a as n,b as s,d as t,e as c}from"./app-a242af93.js";const p={},u=n("h1",{id:"mockjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mockjs","aria-hidden":"true"},"#"),s(" mockjs")],-1),r={id:"在线mock网站fastmock",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#在线mock网站fastmock","aria-hidden":"true"},"#",-1),v={href:"https://fastmock.site/#/",target:"_blank",rel:"noopener noreferrer"},m={id:"mockjs官网",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#mockjs官网","aria-hidden":"true"},"#",-1),b={href:"http://mockjs.com/examples.html",target:"_blank",rel:"noopener noreferrer"},q=c(`<h2 id="mockjs-demo" tabindex="-1"><a class="header-anchor" href="#mockjs-demo" aria-hidden="true">#</a> mockjs-demo</h2><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><h4 id="name-min-max-string" tabindex="-1"><a class="header-anchor" href="#name-min-max-string" aria-hidden="true">#</a> <code>&#39;name|min-max&#39;: string</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;string|1-10&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;★&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;string&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;★★&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="name-count-string" tabindex="-1"><a class="header-anchor" href="#name-count-string" aria-hidden="true">#</a> <code>&#39;name|count&#39;: string</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;string|3&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;★★★&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;string&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;★★★★★★★★★&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h3><h4 id="name-1-number" tabindex="-1"><a class="header-anchor" href="#name-1-number" aria-hidden="true">#</a> <code>&#39;name|+1&#39;: number</code></h4><h4 id="name-min-max-number" tabindex="-1"><a class="header-anchor" href="#name-min-max-number" aria-hidden="true">#</a> <code>&#39;name|min-max&#39;: number</code></h4><h4 id="name-min-max-dmin-dmax-number" tabindex="-1"><a class="header-anchor" href="#name-min-max-dmin-dmax-number" aria-hidden="true">#</a> <code>&#39;name|min-max.dmin-dmax&#39;: number</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;number|1-100.1-10&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;number&quot;</span><span class="token builtin class-name">:</span> <span class="token number">95.2520761288</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean</h3><h4 id="name-1-boolean" tabindex="-1"><a class="header-anchor" href="#name-1-boolean" aria-hidden="true">#</a> <code>&#39;name|1&#39;: boolean</code></h4><h4 id="name-min-max-boolean" tabindex="-1"><a class="header-anchor" href="#name-min-max-boolean" aria-hidden="true">#</a> <code>&#39;name|min-max&#39;: boolean</code></h4><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3><h4 id="name-count-object" tabindex="-1"><a class="header-anchor" href="#name-count-object" aria-hidden="true">#</a> <code>&#39;name|count&#39;: object</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;object|2&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;310000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;上海市&quot;</span>,
    <span class="token string">&quot;320000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;江苏省&quot;</span>,
    <span class="token string">&quot;330000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;浙江省&quot;</span>,
    <span class="token string">&quot;340000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;安徽省&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;object&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;320000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;江苏省&quot;</span>,
    <span class="token string">&quot;330000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;浙江省&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="name-min-max-object" tabindex="-1"><a class="header-anchor" href="#name-min-max-object" aria-hidden="true">#</a> <code>&#39;name|min-max&#39;: object</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;object|2-4&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;110000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;北京市&quot;</span>,
    <span class="token string">&quot;120000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;天津市&quot;</span>,
    <span class="token string">&quot;130000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;河北省&quot;</span>,
    <span class="token string">&quot;140000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;山西省&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;object&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;110000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;北京市&quot;</span>,
    <span class="token string">&quot;120000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;天津市&quot;</span>,
    <span class="token string">&quot;140000&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;山西省&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><h4 id="name-1-array" tabindex="-1"><a class="header-anchor" href="#name-1-array" aria-hidden="true">#</a> <code>&#39;name|1&#39;: array</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;array|1&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;AMD&quot;</span>,
    <span class="token string">&quot;CMD&quot;</span>,
    <span class="token string">&quot;UMD&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;array&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;AMD&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;array|1-10&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name|+1&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Hello&quot;</span>,
        <span class="token string">&quot;Mock.js&quot;</span>,
        <span class="token string">&quot;!&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>
  <span class="token string">&quot;array&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mock.js&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;!&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mock.js&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="name-min-max-array" tabindex="-1"><a class="header-anchor" href="#name-min-max-array" aria-hidden="true">#</a> <code>&#39;name|min-max&#39;: array</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;array|1-10&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;array&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>,
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>,
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>,
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>,
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="name-count-array" tabindex="-1"><a class="header-anchor" href="#name-count-array" aria-hidden="true">#</a> <code>&#39;name|count&#39;: array</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;array|3&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;array&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>,
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>,
    <span class="token string">&quot;Hello&quot;</span>,
    <span class="token string">&quot;Mock.js&quot;</span>,
    <span class="token string">&quot;!&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h3><h4 id="name-function" tabindex="-1"><a class="header-anchor" href="#name-function" aria-hidden="true">#</a> <code>&#39;name&#39;: function</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&#39;foo&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;Syntax Demo&#39;</span>,
  <span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> this.foo
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Syntax Demo&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Syntax Demo&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexp" tabindex="-1"><a class="header-anchor" href="#regexp" aria-hidden="true">#</a> RegExp</h3><h4 id="name-regexp" tabindex="-1"><a class="header-anchor" href="#name-regexp" aria-hidden="true">#</a> <code>&#39;name&#39;: regexp</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&#39;regexp|3&#39;</span><span class="token builtin class-name">:</span> /<span class="token punctuation">\\</span>d<span class="token punctuation">{</span><span class="token number">5,10</span><span class="token punctuation">}</span><span class="token punctuation">\\</span>-/
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;regexp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;864891-6765367405-85297831-&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h3><h4 id="absolute-path" tabindex="-1"><a class="header-anchor" href="#absolute-path" aria-hidden="true">#</a> <code>Absolute Path</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello&quot;</span>,
  <span class="token string">&quot;nested&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;b&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;c&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mock.js&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;absolutePath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@/foo @/nested/a/b/c&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello&quot;</span>,
  <span class="token string">&quot;nested&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;b&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;c&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mock.js&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;absolutePath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello Mock.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="relative-path" tabindex="-1"><a class="header-anchor" href="#relative-path" aria-hidden="true">#</a> <code>Relative Path</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Mock.mock<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello&quot;</span>,
  <span class="token string">&quot;nested&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;b&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;c&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mock.js&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;relativePath&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;b&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;c&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@../../../foo @../../../nested/a/b/c&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello&quot;</span>,
  <span class="token string">&quot;nested&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;b&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;c&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mock.js&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;relativePath&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;b&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;c&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hello Mock.js&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> DEMO</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;data|10&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token comment">//生成随机id</span>
				<span class="token string-property property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成名字</span>
				<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cname&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成1-100之间的任意一个数</span>
				<span class="token string-property property">&quot;age|1-100&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成一个小数，小数点后面有2-5位</span>
				<span class="token string-property property">&quot;price|25-50.2-5&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成1-5颗星</span>
				<span class="token string-property property">&quot;score|1-5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成8-14个文字</span>
				<span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@ctitle(8,14)&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成一行段落</span>
				<span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cparagraph&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成一个对象</span>
				<span class="token string-property property">&quot;des|2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">&quot;eye&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token string-property property">&quot;hand&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
					<span class="token string-property property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token string">&quot;teacher&quot;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成一个带有正则的电话号码</span>
				<span class="token string-property property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1\\d{10}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成一个邮箱</span>
				<span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]{2,6}@(126|163|qq)\\.(com|cn|net)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token comment">//根据随机生成的age值返回一个布尔类型</span>
				<span class="token string-property property">&quot;canMerry&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">&gt;</span> <span class="token number">22</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成一个时间</span>
				<span class="token string-property property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@date(&#39;yyyy-MM-dd&#39;)&quot;</span><span class="token punctuation">,</span>
				<span class="token string-property property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@time(&#39;HH:mm:ss&#39;)&quot;</span><span class="token punctuation">,</span>
				<span class="token string-property property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@county(true)&quot;</span><span class="token punctuation">,</span>
				<span class="token comment">//随机生成一个图片</span>
				<span class="token string-property property">&quot;avatar&quot;</span><span class="token operator">:</span><span class="token string">&quot;@dataImage(&#39;200x100&#39;,&#39;&#39;)&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46);function g(h,x){const a=i("ExternalLinkIcon");return o(),l("div",null,[u,n("h2",r,[d,s(" 在线mock网站"),n("a",v,[s("fastmock"),t(a)])]),n("h2",m,[k,s(),n("a",b,[s("mockjs官网"),t(a)])]),q])}const f=e(p,[["render",g],["__file","mockjs.html.vue"]]);export{f as default};
