import{_ as n,o as a,c as s,e}from"./app-a242af93.js";const t={},c=e(`<h1 id="自定义实体不显示" tabindex="-1"><a class="header-anchor" href="#自定义实体不显示" aria-hidden="true">#</a> 自定义实体不显示</h1><h2 id="让代理实体不显示" tabindex="-1"><a class="header-anchor" href="#让代理实体不显示" aria-hidden="true">#</a> 让代理实体不显示</h2><h3 id="重载以下代码" tabindex="-1"><a class="header-anchor" href="#重载以下代码" aria-hidden="true">#</a> 重载以下代码</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">saveAs</span><span class="token punctuation">(</span>
    AcGiWorldDraw<span class="token operator">*</span> mode<span class="token punctuation">,</span>
    AcDb<span class="token double-colon punctuation">::</span>SaveType st
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现以下代码" tabindex="-1"><a class="header-anchor" href="#实现以下代码" aria-hidden="true">#</a> 实现以下代码</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">CPipeEntity</span><span class="token double-colon punctuation">::</span><span class="token function">saveAs</span><span class="token punctuation">(</span>AcGiWorldDraw<span class="token operator">*</span> mode<span class="token punctuation">,</span> AcDb<span class="token double-colon punctuation">::</span>SaveType st<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>mode<span class="token operator">-&gt;</span><span class="token function">regenType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token keyword">case</span> kAcGiSaveWorldDrawForProxy<span class="token operator">:</span>
        <span class="token comment">//如果是代理实体，什么都不显示</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">midWorldDraw</span><span class="token punctuation">(</span>mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[c];function o(i,l){return a(),s("div",null,p)}const r=n(t,[["render",o],["__file","自定义实体不显示.html.vue"]]);export{r as default};
