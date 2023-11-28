import{_ as i,r as l,o as c,c as u,a as s,b as n,d as a,e as t}from"./app-a242af93.js";const o={},d=t(`<h1 id="声明响应式状态" tabindex="-1"><a class="header-anchor" href="#声明响应式状态" aria-hidden="true">#</a> 声明响应式状态</h1><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> <code>ref()</code></h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { ref } from &#39;vue&#39;

const count = ref(0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ref()</code> 接收参数，并将其包裹在一个带有 <code>.value</code> 属性的 ref 对象中返回：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要在组件模板中访问 ref，请从组件的 <code>setup()</code> 函数中声明并返回它们：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { ref } from &#39;vue&#39;

export default {
  // \`setup\` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    const count = ref(0)

    // 将 ref 暴露给模板
    return {
      count
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=s("strong",null,"不",-1),p=s("code",null,".value",-1),v={href:"https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#caveat-when-unwrapping-in-templates",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>对于更复杂的逻辑，我们可以在同一作用域内声明更改 ref 的函数，并将它们作为方法与状态一起公开：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { ref } from &#39;vue&#39;

export default {
  setup() {
    const count = ref(0)

    function increment() {
      // 在 vue 中需要 .value
      count.value++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      count,
      increment
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="script-setup" tabindex="-1"><a class="header-anchor" href="#script-setup" aria-hidden="true">#</a> <code>&lt;script setup&gt;</code></h2>`,3),b=s("code",null,"setup()",-1),k={href:"https://cn.vuejs.org/guide/scaling-up/sfc.html",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"<script setup>",-1),h=t(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ count }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span> 中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用。你可以理解为模板是在同一作用域内声明的一个 vue 函数——它自然可以访问与它一起声明的所有内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),_=s("p",null,[n("在指南的后续章节中，我们基本上都会在组合式 API 示例中使用单文件组件 + "),s("code",null,"<script setup>"),n(" 的语法，因为大多数 Vue 开发者都会这样使用。")],-1),f={href:"https://cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"setup()",-1);function w(y,I){const e=l("ExternalLinkIcon");return c(),u("div",null,[d,s("p",null,[n("注意，在模板中使用 ref 时，我们"),r,n("需要附加 "),p,n("。为了方便起见，当在模板中使用时，ref 会自动解包 (有一些"),s("a",v,[n("注意事项"),a(e)]),n(")。")]),m,s("p",null,[n("在 "),b,n(" 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用"),s("a",k,[n("单文件组件 (SFC)"),a(e)]),n(" 来避免这种情况。我们可以使用 "),g,n(" 来大幅度地简化代码：")]),h,s("blockquote",null,[_,s("p",null,[n("如果你没有使用单文件组件，你仍然可以在 "),s("a",f,[x,a(e)]),n(" 选项中使用组合式 API。")])])])}const j=i(o,[["render",w],["__file","声明响应式状态.html.vue"]]);export{j as default};
