import{_ as t,r as d,o as a,c as r,a as e,b as n,d as s,e as l}from"./app-a242af93.js";const v={},u=e("h1",{id:"硅谷甄选运营平台",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#硅谷甄选运营平台","aria-hidden":"true"},"#"),n(" 硅谷甄选运营平台")],-1),c=e("p",null,"此次教学课程为硅谷甄选运营平台项目,包含运营平台项目模板从0到1开发，以及数据大屏幕、权限等业务。",-1),o=e("p",null,"此次教学课程涉及到技术栈包含***:vue3+TypeScript+vue-router+pinia+element-plus+axios+echarts***等技术栈。",-1),m=e("h2",{id:"一、vue3组件通信方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、vue3组件通信方式","aria-hidden":"true"},"#"),n(" 一、vue3组件通信方式")],-1),p={href:"https://gitee.com/jch1011/vue3_communication.git",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>不管是vue2还是vue3,组件通信方式很重要,不管是项目还是面试都是经常用到的知识点。</p><p><strong>比如:vue2组件通信方式</strong></p><p>**props:**可以实现父子组件、子父组件、甚至兄弟组件通信</p><p><strong>自定义事件</strong>:可以实现子父组件通信</p><p><strong>全局事件总线$bus</strong>:可以实现任意组件通信</p><p>**pubsub:**发布订阅模式实现任意组件通信</p><p><strong>vuex</strong>:集中式状态管理容器，实现任意组件通信</p><p><strong>ref</strong>:父组件获取子组件实例VC,获取子组件的响应式数据以及方法</p><p>**slot:**插槽(默认插槽、具名插槽、作用域插槽)实现父子组件通信........</p><h3 id="_1-1props" tabindex="-1"><a class="header-anchor" href="#_1-1props" aria-hidden="true">#</a> 1.1props</h3><p>props可以实现父子组件通信,在vue3中我们可以通过defineProps获取父组件传递的数据。且在组件内部不需要引入defineProps方法可以直接使用！</p><p><strong>父组件给子组件传递数据</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Child info=&quot;我爱祖国&quot; :money=&quot;money&quot;&gt;&lt;/Child&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子组件获取父组件传递数据:方式1</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let props = defineProps({
  info:{
   type:String,//接受的数据类型
   default:&#39;默认参数&#39;,//接受默认数据
  },
  money:{
   type:Number,
   default:0
}})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子组件获取父组件传递数据:方式2</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let props = defineProps([&quot;info&quot;,&#39;money&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子组件获取到props数据就可以在模板中使用了,但是切记props是只读的(只能读取，不能修改)</p><h3 id="_1-2自定义事件" tabindex="-1"><a class="header-anchor" href="#_1-2自定义事件" aria-hidden="true">#</a> 1.2自定义事件</h3><p>在vue框架中事件分为两种:一种是原生的DOM事件，另外一种自定义事件。</p><p>原生DOM事件可以让用户与网页进行交互，比如click、dbclick、change、mouseenter、mouseleave....</p><p>自定义事件可以实现子组件给父组件传递数据</p><h4 id="_1-2-1原生dom事件" tabindex="-1"><a class="header-anchor" href="#_1-2-1原生dom事件" aria-hidden="true">#</a> 1.2.1原生DOM事件</h4><p>代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;pre @click=&quot;handler&quot;&gt;
      我是祖国的老花骨朵
 &lt;/pre&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前代码级给pre标签绑定原生DOM事件点击事件,默认会给事件回调注入event事件对象。当然点击事件想注入多个参数可以按照下图操作。但是切记注入的事件对象务必叫做$event.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;div @click=&quot;handler1(1,2,3,$event)&quot;&gt;我要传递多个参数&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在vue3框架click、dbclick、change(这类原生DOM事件),不管是在标签、自定义标签上(组件标签)都是原生DOM事件。</p><p><strong><!--vue2中却不是这样的,在vue2中组件标签需要通过native修饰符才能变为原生DOM事件--></strong></p><h4 id="_1-2-2自定义事件" tabindex="-1"><a class="header-anchor" href="#_1-2-2自定义事件" aria-hidden="true">#</a> 1.2.2自定义事件</h4><p>自定义事件可以实现子组件给父组件传递数据.在项目中是比较常用的。</p><p>比如在父组件内部给子组件(Event2)绑定一个自定义事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Event2  @xxx=&quot;handler3&quot;&gt;&lt;/Event2&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在Event2子组件内部触发这个自定义事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;我是子组件2&lt;/h1&gt;
    &lt;button @click=&quot;handler&quot;&gt;点击我触发xxx自定义事件&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
let $emit = defineEmits([&quot;xxx&quot;]);
const handler = () =&gt; {
  $emit(&quot;xxx&quot;, &quot;法拉利&quot;, &quot;茅台&quot;);
};
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会发现在script标签内部,使用了defineEmits方法，此方法是vue3提供的方法,不需要引入直接使用。defineEmits方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方执行会返回一个$emit方法用于触发自定义事件。</p><p>当点击按钮的时候，事件回调内部调用$emit方法去触发自定义事件,第一个参数为触发事件类型，第二个、三个、N个参数即为传递给父组件的数据。</p><p>需要注意的是:代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Event2  @xxx=&quot;handler3&quot; @click=&quot;handler&quot;&gt;&lt;/Event2&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正常说组件标签书写@click应该为原生DOM事件,但是如果子组件内部通过defineEmits定义就变为自定义事件了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let $emit = defineEmits([&quot;xxx&quot;,&#39;click&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3全局事件总线" tabindex="-1"><a class="header-anchor" href="#_1-3全局事件总线" aria-hidden="true">#</a> 1.3全局事件总线</h3><p>全局事件总线可以实现任意组件通信，在vue2中可以根据VM与VC关系推出全局事件总线。</p><p>但是在vue3中没有Vue构造函数，也就没有Vue.prototype.以及组合式API写法没有this，</p><p>那么在Vue3想实现全局事件的总线功能就有点不现实啦，如果想在Vue3中使用全局事件总线功能</p><p>可以使用插件mitt实现。</p>`,46),g={href:"https://www.npmjs.com/package/mitt",target:"_blank",rel:"noopener noreferrer"},h=l(`<h3 id="_1-4v-model" tabindex="-1"><a class="header-anchor" href="#_1-4v-model" aria-hidden="true">#</a> 1.4v-model</h3><p>v-model指令可是收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步。</p><p>而v-model实指利用props[modelValue]与自定义事件[update:modelValue]实现的。</p><p>下方代码:相当于给组件Child传递一个props(modelValue)与绑定一个自定义事件update:modelValue</p><p>实现父子组件数据同步</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Child v-model=&quot;msg&quot;&gt;&lt;/Child&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在vue3中一个组件可以通过使用多个v-model,让父子组件多个数据同步,下方代码相当于给组件Child传递两个props分别是pageNo与pageSize，以及绑定两个自定义事件update:pageNo与update:pageSize实现父子数据同步</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Child v-model:pageNo=&quot;msg&quot; v-model:pageSize=&quot;msg1&quot;&gt;&lt;/Child&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5useattrs" tabindex="-1"><a class="header-anchor" href="#_1-5useattrs" aria-hidden="true">#</a> 1.5useAttrs</h3>`,9),x=e("p",null,[n("在Vue3中可以利用useAttrs方法获取组件的属性与事件(包含:原生DOM事件或者自定义事件),次函数功能类似于Vue2框架中"),e("mjx-container",{class:"MathJax",jax:"CHTML",style:{position:"relative"}},[e("mjx-math",{class:"MJX-TEX","aria-hidden":"true"},[e("mjx-mi",{class:"mjx-i"},[e("mjx-c",{class:"mjx-c1D44E TEX-I"})]),e("mjx-mi",{class:"mjx-i"},[e("mjx-c",{class:"mjx-c1D461 TEX-I"})]),e("mjx-mi",{class:"mjx-i"},[e("mjx-c",{class:"mjx-c1D461 TEX-I"})]),e("mjx-mi",{class:"mjx-i"},[e("mjx-c",{class:"mjx-c1D45F TEX-I"})]),e("mjx-mi",{class:"mjx-i"},[e("mjx-c",{class:"mjx-c1D460 TEX-I"})]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"属")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"性")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"与")])]),e("mjx-assistive-mml",{unselectable:"on",display:"inline"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"a"),e("mi",null,"t"),e("mi",null,"t"),e("mi",null,"r"),e("mi",null,"s"),e("mi",{mathvariant:"normal"},"属"),e("mi",{mathvariant:"normal"},"性"),e("mi",{mathvariant:"normal"},"与")])])]),n("listeners方法。")],-1),q=l(`<p>比如:在父组件内部使用一个子组件my-button</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;my-button type=&quot;success&quot; size=&quot;small&quot; title=&#39;标题&#39; @click=&quot;handler&quot;&gt;&lt;/my-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子组件内部可以通过useAttrs方法获取组件属性与事件.因此你也发现了，它类似于props,可以接受父组件传递过来的属性与属性值。需要注意如果defineProps接受了某一个属性，useAttrs方法返回的对象身上就没有相应属性与属性值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import {useAttrs} from &#39;vue&#39;;
let $attrs = useAttrs();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6ref与-parent" tabindex="-1"><a class="header-anchor" href="#_1-6ref与-parent" aria-hidden="true">#</a> 1.6ref与$parent</h3><p>ref,提及到ref可能会想到它可以获取元素的DOM或者获取子组件实例的VC。既然可以在父组件内部通过ref获取子组件实例VC，那么子组件内部的方法与响应式数据父组件可以使用的。</p><p>比如:在父组件挂载完毕获取组件实例</p><p>父组件内部代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;ref与$parent&lt;/h1&gt;
    &lt;Son ref=&quot;son&quot;&gt;&lt;/Son&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import Son from &quot;./Son.vue&quot;;
import { onMounted, ref } from &quot;vue&quot;;
const son = ref();
onMounted(() =&gt; {
  console.log(son.value);
});
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过defineExpose对外暴露,因为vue3中组件内部的数据对外“关闭的”，外部不能访问</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &quot;vue&quot;;
//数据
let money = ref(1000);
//方法
const handler = ()=&gt;{
}
defineExpose({
  money,
   handler
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$parent可以获取某一个组件的父组件实例VC,因此可以使用父组件内部的数据与方法。必须子组件内部拥有一个按钮点击时候获取父组件实例，当然父组件的数据与方法需要通过defineExpose方法对外暴露</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button @click=&quot;handler($parent)&quot;&gt;点击我获取父组件实例&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-7provide与inject" tabindex="-1"><a class="header-anchor" href="#_1-7provide与inject" aria-hidden="true">#</a> 1.7provide与inject</h3><p><strong>provide[提供]</strong></p><p><strong>inject[注入]</strong></p><p>vue3提供两个方法provide与inject,可以实现隔辈组件传递参数</p><p>组件组件提供数据:</p><p>provide方法用于提供数据，此方法执需要传递两个参数,分别提供数据的key与提供数据value</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import {provide} from &#39;vue&#39;
provide(&#39;token&#39;,&#39;admin_token&#39;);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后代组件可以通过inject方法获取数据,通过key获取存储的数值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import {inject} from &#39;vue&#39;
let token = inject(&#39;token&#39;);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8pinia" tabindex="-1"><a class="header-anchor" href="#_1-8pinia" aria-hidden="true">#</a> 1.8pinia</h3>`,23),f={href:"https://pinia.web3doc.top/",target:"_blank",rel:"noopener noreferrer"},_=l(`<p>pinia也是集中式管理状态容器,类似于vuex。但是核心概念没有mutation、modules,使用方式参照官网</p><h3 id="_1-9slot" tabindex="-1"><a class="header-anchor" href="#_1-9slot" aria-hidden="true">#</a> 1.9slot</h3><p>插槽：默认插槽、具名插槽、作用域插槽可以实现父子组件通信.</p><p><strong>默认插槽:</strong></p><p>在子组件内部的模板中书写slot全局组件标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在父组件内部提供结构：Todo即为子组件,在父组件内部使用的时候，在双标签内部书写结构传递给子组件</p><p>注意开发项目的时候默认插槽一般只有一个</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Todo&gt;
  &lt;h1&gt;我是默认插槽填充的结构&lt;/h1&gt;
&lt;/Todo&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>具名插槽：</strong></p><p>顾名思义，此插槽带有名字在组件内部留多个指定名字的插槽。</p><p>下面是一个子组件内部,模板中留两个插槽</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;todo&lt;/h1&gt;
    &lt;slot name=&quot;a&quot;&gt;&lt;/slot&gt;
    &lt;slot name=&quot;b&quot;&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
&lt;/script&gt;

&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件内部向指定的具名插槽传递结构。需要注意v-slot：可以替换为#</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;slot&lt;/h1&gt;
    &lt;Todo&gt;
      &lt;template v-slot:a&gt;  //可以用#a替换
        &lt;div&gt;填入组件A部分的结构&lt;/div&gt;
      &lt;/template&gt;
      &lt;template v-slot:b&gt;//可以用#b替换
        &lt;div&gt;填入组件B部分的结构&lt;/div&gt;
      &lt;/template&gt;
    &lt;/Todo&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import Todo from &quot;./Todo.vue&quot;;
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作用域插槽</strong></p><p>作用域插槽：可以理解为，子组件数据由父组件提供，但是子组件内部决定不了自身结构与外观(样式)</p><p>子组件Todo代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;todo&lt;/h1&gt;
    &lt;ul&gt;
     &lt;!--组件内部遍历数组--&gt;
      &lt;li v-for=&quot;(item,index) in todos&quot; :key=&quot;item.id&quot;&gt;
         &lt;!--作用域插槽将数据回传给父组件--&gt;
         &lt;slot :$row=&quot;item&quot; :$index=&quot;index&quot;&gt;&lt;/slot&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
defineProps([&#39;todos&#39;]);//接受父组件传递过来的数据
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件内部代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;slot&lt;/h1&gt;
    &lt;Todo :todos=&quot;todos&quot;&gt;
      &lt;template v-slot=&quot;{$row,$index}&quot;&gt;
         &lt;!--父组件决定子组件的结构与外观--&gt;
         &lt;span :style=&quot;{color:$row.done?&#39;green&#39;:&#39;red&#39;}&quot;&gt;{{$row.title}}&lt;/span&gt;
      &lt;/template&gt;
    &lt;/Todo&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import Todo from &quot;./Todo.vue&quot;;
import { ref } from &quot;vue&quot;;
//父组件内部数据
let todos = ref([
  { id: 1, title: &quot;吃饭&quot;, done: true },
  { id: 2, title: &quot;睡觉&quot;, done: false },
  { id: 3, title: &quot;打豆豆&quot;, done: true },
]);
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、搭建后台管理系统模板" tabindex="-1"><a class="header-anchor" href="#二、搭建后台管理系统模板" aria-hidden="true">#</a> 二、搭建后台管理系统模板</h2><h3 id="_2-1项目初始化" tabindex="-1"><a class="header-anchor" href="#_2-1项目初始化" aria-hidden="true">#</a> 2.1项目初始化</h3><p>今天来带大家从0开始搭建一个vue3版本的后台管理系统。一个项目要有统一的规范，需要使用eslint+stylelint+prettier来对我们的代码质量做检测和修复，需要使用husky来做commit拦截，需要使用commitlint来统一提交规范，需要使用preinstall来统一包管理工具。</p><p>下面我们就用这一套规范来初始化我们的项目，集成一个规范的模版。</p><h4 id="_2-1-1环境准备" tabindex="-1"><a class="header-anchor" href="#_2-1-1环境准备" aria-hidden="true">#</a> 2.1.1环境准备</h4><ul><li>node v16.14.2</li><li>pnpm 8.0.0</li></ul><h4 id="_2-1-2初始化项目" tabindex="-1"><a class="header-anchor" href="#_2-1-2初始化项目" aria-hidden="true">#</a> 2.1.2初始化项目</h4>`,28),y={href:"https://cn.vitejs.dev/guide/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://so.csdn.net/so/search?q=pnpm&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>pnpm安装指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -g pnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>项目初始化命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入到项目根目录pnpm install安装全部依赖.安装完依赖运行程序:pnpm run dev</p>`,5),E={href:"http://127.0.0.1:5173/,%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E4%BD%A0%E5%BE%97%E9%A1%B9%E7%9B%AE%E5%95%A6",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"_2-2项目配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-2项目配置","aria-hidden":"true"},"#"),n(" 2.2项目配置")],-1),M=e("h4",{id:"一、eslint配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、eslint配置","aria-hidden":"true"},"#"),n(" 一、eslint配置")],-1),O={href:"http://eslint.cn/",target:"_blank",rel:"noopener noreferrer"},I={href:"http://nczonline.net/",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"javascript代码检测工具",-1),T=l(`<p>首先安装eslint</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i eslint -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成配置文件:.eslint.cjs</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx eslint --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>.eslint.cjs配置文件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
   //运行环境
    &quot;env&quot;: { 
        &quot;browser&quot;: true,//浏览器端
        &quot;es2021&quot;: true,//es2021
    },
    //规则继承
    &quot;extends&quot;: [ 
       //全部规则默认是关闭的,这个配置项开启推荐规则,推荐规则参照文档
       //比如:函数不能重名、对象不能出现重复key
        &quot;eslint:recommended&quot;,
        //vue3语法规则
        &quot;plugin:vue/vue3-essential&quot;,
        //ts语法规则
        &quot;plugin:@typescript-eslint/recommended&quot;
    ],
    //要为特定类型的文件指定处理器
    &quot;overrides&quot;: [
    ],
    //指定解析器:解析器
    //Esprima 默认解析器
    //Babel-ESLint babel解析器
    //@typescript-eslint/parser ts解析器
    &quot;parser&quot;: &quot;@typescript-eslint/parser&quot;,
    //指定解析器选项
    &quot;parserOptions&quot;: {
        &quot;ecmaVersion&quot;: &quot;latest&quot;,//校验ECMA最新版本
        &quot;sourceType&quot;: &quot;module&quot;//设置为&quot;script&quot;（默认），或者&quot;module&quot;代码在ECMAScript模块中
    },
    //ESLint支持使用第三方插件。在使用插件之前，您必须使用npm安装它
    //该eslint-plugin-前缀可以从插件名称被省略
    &quot;plugins&quot;: [
        &quot;vue&quot;,
        &quot;@typescript-eslint&quot;
    ],
    //eslint规则
    &quot;rules&quot;: {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-1vue3环境代码校验插件" tabindex="-1"><a class="header-anchor" href="#_1-1vue3环境代码校验插件" aria-hidden="true">#</a> 1.1vue3环境代码校验插件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
&quot;eslint-config-prettier&quot;: &quot;^8.6.0&quot;,
&quot;eslint-plugin-import&quot;: &quot;^2.27.5&quot;,
&quot;eslint-plugin-node&quot;: &quot;^11.1.0&quot;,
# 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
&quot;eslint-plugin-prettier&quot;: &quot;^4.2.1&quot;,
# vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南
&quot;eslint-plugin-vue&quot;: &quot;^9.9.0&quot;,
# 该解析器允许使用Eslint校验所有babel code
&quot;@babel/eslint-parser&quot;: &quot;^7.19.1&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_1-2修改-eslintrc-cjs配置文件" tabindex="-1"><a class="header-anchor" href="#_1-2修改-eslintrc-cjs配置文件" aria-hidden="true">#</a> 1.2修改.eslintrc.cjs配置文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// @see https://eslint.bootcss.com/docs/rules/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  /* 指定如何解析语法 */
  parser: &#39;vue-eslint-parser&#39;,
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: &#39;latest&#39;,
    sourceType: &#39;module&#39;,
    parser: &#39;@typescript-eslint/parser&#39;,
    jsxPragma: &#39;React&#39;,
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    &#39;eslint:recommended&#39;,
    &#39;plugin:vue/vue3-essential&#39;,
    &#39;plugin:@typescript-eslint/recommended&#39;,
    &#39;plugin:prettier/recommended&#39;,
  ],
  plugins: [&#39;vue&#39;, &#39;@typescript-eslint&#39;],
  /*
   * &quot;off&quot; 或 0    ==&gt;  关闭规则
   * &quot;warn&quot; 或 1   ==&gt;  打开的规则作为警告（不影响代码执行）
   * &quot;error&quot; 或 2  ==&gt;  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    &#39;no-var&#39;: &#39;error&#39;, // 要求使用 let 或 const 而不是 var
    &#39;no-multiple-empty-lines&#39;: [&#39;warn&#39;, { max: 1 }], // 不允许多个空行
    &#39;no-console&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,
    &#39;no-debugger&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,
    &#39;no-unexpected-multiline&#39;: &#39;error&#39;, // 禁止空余的多行
    &#39;no-useless-escape&#39;: &#39;off&#39;, // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    &#39;@typescript-eslint/no-unused-vars&#39;: &#39;error&#39;, // 禁止定义未使用的变量
    &#39;@typescript-eslint/prefer-ts-expect-error&#39;: &#39;error&#39;, // 禁止使用 @ts-ignore
    &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;, // 禁止使用 any 类型
    &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-namespace&#39;: &#39;off&#39;, // 禁止使用自定义 TypeScript 模块和命名空间。
    &#39;@typescript-eslint/semi&#39;: &#39;off&#39;,

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    &#39;vue/multi-word-component-names&#39;: &#39;off&#39;, // 要求组件名称始终为 “-” 链接的单词
    &#39;vue/script-setup-uses-vars&#39;: &#39;error&#39;, // 防止&lt;script setup&gt;使用的变量&lt;template&gt;被标记为未使用
    &#39;vue/no-mutating-props&#39;: &#39;off&#39;, // 不允许组件 prop的改变
    &#39;vue/attribute-hyphenation&#39;: &#39;off&#39;, // 对模板中的自定义组件强制执行属性命名样式
  },
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-3-eslintignore忽略文件" tabindex="-1"><a class="header-anchor" href="#_1-3-eslintignore忽略文件" aria-hidden="true">#</a> 1.3.eslintignore忽略文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dist
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-4运行脚本" tabindex="-1"><a class="header-anchor" href="#_1-4运行脚本" aria-hidden="true">#</a> 1.4运行脚本</h5><p>package.json新增两个运行脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
    &quot;lint&quot;: &quot;eslint src&quot;,
    &quot;fix&quot;: &quot;eslint src --fix&quot;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二、配置prettier" tabindex="-1"><a class="header-anchor" href="#二、配置prettier" aria-hidden="true">#</a> 二、配置<strong>prettier</strong></h4><p>有了eslint，为什么还要有prettier？eslint针对的是javascript，他是一个检测工具，包含js语法以及少部分格式问题，在eslint看来，语法对了就能保证代码正常运行，格式问题属于其次；</p><p>而prettier属于格式化工具，它看不惯格式不统一，所以它就把eslint没干好的事接着干，另外，prettier支持</p><p>包含js在内的多种语言。</p><p>总结起来，<strong>eslint和prettier这俩兄弟一个保证js代码质量，一个保证代码美观。</strong></p><h5 id="_2-1安装依赖包" tabindex="-1"><a class="header-anchor" href="#_2-1安装依赖包" aria-hidden="true">#</a> 2.1安装依赖包</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-2-prettierrc-json添加规则" tabindex="-1"><a class="header-anchor" href="#_2-2-prettierrc-json添加规则" aria-hidden="true">#</a> 2.2.prettierrc.json添加规则</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;singleQuote&quot;: true,
  &quot;semi&quot;: false,
  &quot;bracketSpacing&quot;: true,
  &quot;htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;,
  &quot;endOfLine&quot;: &quot;auto&quot;,
  &quot;trailingComma&quot;: &quot;all&quot;,
  &quot;tabWidth&quot;: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3-prettierignore忽略文件" tabindex="-1"><a class="header-anchor" href="#_2-3-prettierignore忽略文件" aria-hidden="true">#</a> 2.3.prettierignore忽略文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>通过pnpm run lint去检测语法，如果出现不规范格式,通过pnpm run fix 修改</strong></p><h4 id="三、配置stylelint" tabindex="-1"><a class="header-anchor" href="#三、配置stylelint" aria-hidden="true">#</a> 三、配置stylelint</h4>`,30),A={href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"},V=l(`<p>我们的项目中使用scss作为预处理器，安装以下依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-1-stylelintrc-cjs配置文件" tabindex="-1"><a class="header-anchor" href="#_3-1-stylelintrc-cjs配置文件" aria-hidden="true">#</a> 3.1<code>.stylelintrc.cjs</code><strong>配置文件</strong></h5>`,3),P={href:"https://stylelint.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},D=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// @see https://stylelint.bootcss.com/

module.exports = {
  extends: [
    &#39;stylelint-config-standard&#39;, // 配置stylelint拓展插件
    &#39;stylelint-config-html/vue&#39;, // 配置 vue 中 template 样式格式化
    &#39;stylelint-config-standard-scss&#39;, // 配置stylelint scss插件
    &#39;stylelint-config-recommended-vue/scss&#39;, // 配置 vue 中 scss 样式格式化
    &#39;stylelint-config-recess-order&#39;, // 配置stylelint css属性书写顺序插件,
    &#39;stylelint-config-prettier&#39;, // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: [&#39;**/*.(scss|css|vue|html)&#39;],
      customSyntax: &#39;postcss-scss&#39;,
    },
    {
      files: [&#39;**/*.(html|vue)&#39;],
      customSyntax: &#39;postcss-html&#39;,
    },
  ],
  ignoreFiles: [
    &#39;**/*.js&#39;,
    &#39;**/*.jsx&#39;,
    &#39;**/*.tsx&#39;,
    &#39;**/*.ts&#39;,
    &#39;**/*.json&#39;,
    &#39;**/*.md&#39;,
    &#39;**/*.yaml&#39;,
  ],
  /**
   * null  =&gt; 关闭该规则
   * always =&gt; 必须
   */
  rules: {
    &#39;value-keyword-case&#39;: null, // 在 css 中使用 v-bind，不报错
    &#39;no-descending-specificity&#39;: null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    &#39;function-url-quotes&#39;: &#39;always&#39;, // 要求或禁止 URL 的引号 &quot;always(必须加上引号)&quot;|&quot;never(没有引号)&quot;
    &#39;no-empty-source&#39;: null, // 关闭禁止空源码
    &#39;selector-class-pattern&#39;: null, // 关闭强制选择器类名的格式
    &#39;property-no-unknown&#39;: null, // 禁止未知的属性(true 为不允许)
    &#39;block-opening-brace-space-before&#39;: &#39;always&#39;, //大括号之前必须有一个空格或不能有空白符
    &#39;value-no-vendor-prefix&#39;: null, // 关闭 属性值前缀 --webkit-box
    &#39;property-no-vendor-prefix&#39;: null, // 关闭 属性前缀 -webkit-mask
    &#39;selector-pseudo-class-no-unknown&#39;: [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: [&#39;global&#39;, &#39;v-deep&#39;, &#39;deep&#39;], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-stylelintignore忽略文件" tabindex="-1"><a class="header-anchor" href="#_3-2-stylelintignore忽略文件" aria-hidden="true">#</a> 3.2.stylelintignore忽略文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/node_modules/*
/dist/*
/html/*
/public/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-3运行脚本" tabindex="-1"><a class="header-anchor" href="#_3-3运行脚本" aria-hidden="true">#</a> 3.3运行脚本</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
	&quot;lint:style&quot;: &quot;stylelint src/**/*.{css,scss,vue} --cache --fix&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后配置统一的prettier来格式化我们的js和css，html代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vite --open&quot;,
    &quot;build&quot;: &quot;vue-tsc &amp;&amp; vite build&quot;,
    &quot;preview&quot;: &quot;vite preview&quot;,
    &quot;lint&quot;: &quot;eslint src&quot;,
    &quot;fix&quot;: &quot;eslint src --fix&quot;,
    &quot;format&quot;: &quot;prettier --write \\&quot;./**/*.{html,vue,ts,js,json,md}\\&quot;&quot;,
    &quot;lint:eslint&quot;: &quot;eslint src/**/*.{ts,vue} --cache --fix&quot;,
    &quot;lint:style&quot;: &quot;stylelint src/**/*.{css,scss,vue} --cache --fix&quot;
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当我们运行<code>pnpm run format</code>的时候，会把代码直接格式化</strong></p><h4 id="四、配置husky" tabindex="-1"><a class="header-anchor" href="#四、配置husky" aria-hidden="true">#</a> 四、配置husky</h4><p>在上面我们已经集成好了我们代码校验工具，但是需要每次手动的去执行命令才会格式化我们的代码。如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用。所以我们需要强制让开发人员按照代码规范来提交。</p><p>要做到这件事情，就需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，然后执行<code>pnpm run format</code>来自动的格式化我们的代码。</p><p>安装<code>husky</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install -D husky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx husky-init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，这个文件里面的命令在我们执行commit的时候就会执行</p><p>在<code>.husky/pre-commit</code>文件添加如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh
. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;
pnpm run format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们对代码进行commit操作的时候，就会执行命令，对代码进行格式化，然后再提交。</p><h4 id="五、配置commitlint" tabindex="-1"><a class="header-anchor" href="#五、配置commitlint" aria-hidden="true">#</a> 五、配置commitlint</h4><p>对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用<strong>commitlint</strong>来实现。</p><p>安装包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add @commitlint/config-conventional @commitlint/cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加配置文件，新建<code>commitlint.config.cjs</code>(注意是cjs)，然后添加下面的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  extends: [&#39;@commitlint/config-conventional&#39;],
  // 校验规则
  rules: {
    &#39;type-enum&#39;: [
      2,
      &#39;always&#39;,
      [
        &#39;feat&#39;,
        &#39;fix&#39;,
        &#39;docs&#39;,
        &#39;style&#39;,
        &#39;refactor&#39;,
        &#39;perf&#39;,
        &#39;test&#39;,
        &#39;chore&#39;,
        &#39;revert&#39;,
        &#39;build&#39;,
      ],
    ],
    &#39;type-case&#39;: [0],
    &#39;type-empty&#39;: [0],
    &#39;scope-empty&#39;: [0],
    &#39;scope-case&#39;: [0],
    &#39;subject-full-stop&#39;: [0, &#39;never&#39;],
    &#39;subject-case&#39;: [0, &#39;never&#39;],
    &#39;header-max-length&#39;: [0, &#39;always&#39;, 72],
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>package.json</code>中配置scripts命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在scrips中添加下面的代码
{
&quot;scripts&quot;: {
    &quot;commitlint&quot;: &quot;commitlint --config commitlint.config.cjs -e -V&quot;
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置结束，现在当我们填写<code>commit</code>信息的时候，前面就需要带着下面的<code>subject</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;feat&#39;,//新特性、新功能
&#39;fix&#39;,//修改bug
&#39;docs&#39;,//文档修改
&#39;style&#39;,//代码格式修改, 注意不是 css 修改
&#39;refactor&#39;,//代码重构
&#39;perf&#39;,//优化相关，比如提升性能、体验
&#39;test&#39;,//测试用例修改
&#39;chore&#39;,//其他修改, 比如改变构建流程、或者增加依赖库、工具等
&#39;revert&#39;,//回滚到上一个版本
&#39;build&#39;,//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置husky</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx husky add .husky/commit-msg 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在生成的commit-msg文件中添加下面的命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh
. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;
pnpm commitlint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m &#39;fix: xxx&#39; 符合类型的才可以，<strong>需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的</strong></p><h4 id="六、强制使用pnpm包管理器工具" tabindex="-1"><a class="header-anchor" href="#六、强制使用pnpm包管理器工具" aria-hidden="true">#</a> 六、强制使用pnpm包管理器工具</h4><p>团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能版本不一样,</p><p>导致项目出现bug问题,因此包管理器工具需要统一管理！！！</p><p>在根目录创建<code>scritps/preinstall.js</code>文件，添加下面的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (!/pnpm/.test(p<wbr>rocess.env.npm_execpath || &#39;&#39;)) {
  console.warn(
    \`\\u001b[33mThis repository must using pnpm as the package manager \` +
    \` for scripts to work properly.\\u001b[39m\\n\`,
  )
  process.exit(1)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
	&quot;preinstall&quot;: &quot;node ./scripts/preinstall.js&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当我们使用npm或者yarn来安装包的时候，就会报错了。原理就是在install的时候会触发preinstall（npm提供的生命周期钩子）这个文件里面的代码。</strong></p><h2 id="三、项目集成" tabindex="-1"><a class="header-anchor" href="#三、项目集成" aria-hidden="true">#</a> 三、项目集成</h2><h3 id="_3-1集成element-plus" tabindex="-1"><a class="header-anchor" href="#_3-1集成element-plus" aria-hidden="true">#</a> 3.1集成element-plus</h3><p>硅谷甄选运营平台,UI组件库采用的element-plus，因此需要集成element-plus插件！！！</p>`,45),C={href:"https://element-plus.gitee.io/zh-CN/",target:"_blank",rel:"noopener noreferrer"},R=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install element-plus @element-plus/icons-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>入口文件main.ts全局安装element-plus,element-plus默认支持语言英语设置为中文</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import ElementPlus from &#39;element-plus&#39;;
import &#39;element-plus/dist/index.css&#39;
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from &#39;element-plus/dist/locale/zh-cn.mjs&#39;
app.use(ElementPlus, {
    locale: zhCn
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Element Plus全局组件类型声明</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// tsconfig.json
{
  &quot;compilerOptions&quot;: {
    // ...
    &quot;types&quot;: [&quot;element-plus/global&quot;]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕可以测试element-plus组件与图标的使用.</p><h3 id="_3-2src别名的配置" tabindex="-1"><a class="header-anchor" href="#_3-2src别名的配置" aria-hidden="true">#</a> 3.2src别名的配置</h3><p>在开发项目的时候文件与文件关系可能很复杂，因此我们需要给src文件夹配置一个别名！！！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// vite.config.ts
import {defineConfig} from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import path from &#39;path&#39;
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            &quot;@&quot;: path.resolve(&quot;./src&quot;) // 相对路径别名配置，使用 @ 代替 src
        }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TypeScript 编译配置</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// tsconfig.json
{
  &quot;compilerOptions&quot;: {
    &quot;baseUrl&quot;: &quot;./&quot;, // 解析非相对模块的基地址，默认是当前目录
    &quot;paths&quot;: { //路径映射，相对于baseUrl
      &quot;@/*&quot;: [&quot;src/*&quot;] 
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3环境变量的配置" tabindex="-1"><a class="header-anchor" href="#_3-3环境变量的配置" aria-hidden="true">#</a> 3.3环境变量的配置</h3><p><strong>项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。不同阶段请求的状态(如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。于是环境变量配置的需求就应运而生，我们只需做简单的配置，把环境状态切换的工作交给代码。</strong></p><p>开发环境（development）<br> 顾名思义，开发使用的环境，每位开发人员在自己的dev分支上干活，开发到一定程度，同事会合并代码，进行联调。</p><p>测试环境（testing）<br> 测试同事干活的环境啦，一般会由测试同事自己来部署，然后在此环境进行测试</p><p>生产环境（production）<br> 生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错误日志。(正式提供给客户使用的环境。)</p><p>注意:一般情况下，一个环境对应一台服务器,也有的公司开发与测试环境是一台服务器！！！</p><p>项目根目录分别添加 开发、生产和测试环境的文件!</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.env.development
.env.production
.env.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = &#39;development&#39;
VITE_APP_TITLE = &#39;硅谷甄选运营平台&#39;
VITE_APP_BASE_API = &#39;/dev-api&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NODE_ENV = &#39;production&#39;
VITE_APP_TITLE = &#39;硅谷甄选运营平台&#39;
VITE_APP_BASE_API = &#39;/prod-api&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = &#39;test&#39;
VITE_APP_TITLE = &#39;硅谷甄选运营平台&#39;
VITE_APP_BASE_API = &#39;/test-api&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置运行命令：package.json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vite --open&quot;,
    &quot;build:test&quot;: &quot;vue-tsc &amp;&amp; vite build --mode test&quot;,
    &quot;build:pro&quot;: &quot;vue-tsc &amp;&amp; vite build --mode production&quot;,
    &quot;preview&quot;: &quot;vite preview&quot;
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过i<wbr>mport.meta.env获取环境变量</p><h3 id="_3-4svg图标配置" tabindex="-1"><a class="header-anchor" href="#_3-4svg图标配置" aria-hidden="true">#</a> 3.4SVG图标配置</h3><p>在开发项目的时候经常会用到svg矢量图,而且我们使用SVG以后，页面上加载的不再是图片资源,</p><p>这对页面性能来说是个很大的提升，而且我们SVG文件比img要小的很多，放在项目中几乎不占用资源。</p><p><strong>安装SVG依赖插件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install vite-plugin-svg-icons -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在<code>vite.config.ts</code>中配置插件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createSvgIconsPlugin } from &#39;vite-plugin-svg-icons&#39;
import path from &#39;path&#39;
export default () =&gt; {
  return {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), &#39;src/assets/icons&#39;)],
        // Specify symbolId format
        symbolId: &#39;icon-[dir]-[name]&#39;,
      }),
    ],
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>入口文件导入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;virtual:svg-icons-register&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-4-1svg封装为全局组件" tabindex="-1"><a class="header-anchor" href="#_3-4-1svg封装为全局组件" aria-hidden="true">#</a> 3.4.1svg封装为全局组件</h4><p>因为项目很多模块需要使用图标,因此把它封装为全局组件！！！</p><p><strong>在src/components目录下创建一个SvgIcon组件:代表如下</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;svg :style=&quot;{ width: width, height: height }&quot;&gt;
      &lt;use :xlink:href=&quot;prefix + name&quot; :fill=&quot;color&quot;&gt;&lt;/use&gt;
    &lt;/svg&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: &#39;#icon-&#39;
  },
  //svg矢量图的名字
  name: String,
  //svg图标的颜色
  color: {
    type: String,
    default: &quot;&quot;
  },
  //svg宽度
  width: {
    type: String,
    default: &#39;16px&#39;
  },
  //svg高度
  height: {
    type: String,
    default: &#39;16px&#39;
  }

})
&lt;/script&gt;
&lt;style scoped&gt;&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在src文件夹目录下创建一个index.ts文件：用于注册components文件夹内部全部全局组件！！！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import SvgIcon from &#39;./SvgIcon/index.vue&#39;;
import type { App, Component } from &#39;vue&#39;;
const components: { [name: string]: Component } = { SvgIcon };
export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) =&gt; {
            app.component(key, components[key]);
        })
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在入口文件引入src/index.ts文件,通过app.use方法安装自定义插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import gloablComponent from &#39;./components/index&#39;;
app.use(gloablComponent);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5集成sass" tabindex="-1"><a class="header-anchor" href="#_3-5集成sass" aria-hidden="true">#</a> 3.5集成sass</h3><p>我们目前在组件内部已经可以使用scss样式,因为在配置styleLint工具的时候，项目当中已经安装过sass sass-loader,因此我们再组件内可以使用scss语法！！！需要加上lang=&quot;scss&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style scoped lang=&quot;scss&quot;&gt;&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来我们为项目添加一些全局的样式</p><p>在src/styles目录下创建一个index.scss文件，当然项目中需要用到清除默认样式，因此在index.scss引入reset.scss</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import reset.scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在入口文件引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;@/styles&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,51),L=e("p",null,[n("但是你会发现在src/styles/index.scss全局样式文件中没有办法使用"),e("mjx-container",{class:"MathJax",jax:"CHTML",style:{position:"relative"}},[e("mjx-math",{class:"MJX-TEX","aria-hidden":"true"},[e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"变")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"量")]),e("mjx-mo",{class:"mjx-n"},[e("mjx-c",{class:"mjx-c2E"})]),e("mjx-mi",{class:"mjx-n",space:"2"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"因")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"此")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"需")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"要")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"给")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"项")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"目")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"中")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"引")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"入")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"全")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"局")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"变")]),e("mjx-mi",{class:"mjx-n"},[e("mjx-utext",{style:{"font-family":"MJXZERO, serif"},variant:"normal"},"量")])]),e("mjx-assistive-mml",{unselectable:"on",display:"inline"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",{mathvariant:"normal"},"变"),e("mi",{mathvariant:"normal"},"量"),e("mo",null,"."),e("mi",{mathvariant:"normal"},"因"),e("mi",{mathvariant:"normal"},"此"),e("mi",{mathvariant:"normal"},"需"),e("mi",{mathvariant:"normal"},"要"),e("mi",{mathvariant:"normal"},"给"),e("mi",{mathvariant:"normal"},"项"),e("mi",{mathvariant:"normal"},"目"),e("mi",{mathvariant:"normal"},"中"),e("mi",{mathvariant:"normal"},"引"),e("mi",{mathvariant:"normal"},"入"),e("mi",{mathvariant:"normal"},"全"),e("mi",{mathvariant:"normal"},"局"),e("mi",{mathvariant:"normal"},"变"),e("mi",{mathvariant:"normal"},"量")])])]),n(".")],-1),X=l(`<p>在style/variable.scss创建一个variable.scss文件！</p><p>在vite.config.ts文件配置如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default defineConfig((config) =&gt; {
	css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: &#39;@import &quot;./src/styles/variable.scss&quot;;&#39;,
        },
      },
    },
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>@import &quot;./src/styles/variable.less&quot;;</code>后面的<code>;</code>不要忘记，不然会报错</strong>!</p><p>配置完毕你会发现scss提供这些全局变量可以在组件样式中使用了！！！</p><h3 id="_3-6mock数据" tabindex="-1"><a class="header-anchor" href="#_3-6mock数据" aria-hidden="true">#</a> 3.6mock数据</h3>`,6),N={href:"https://www.npmjs.com/package/vite-plugin-mock",target:"_blank",rel:"noopener noreferrer"},U=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install -D vite-plugin-mock mockjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 vite.config.js 配置文件启用插件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { UserConfigExport, ConfigEnv } from &#39;vite&#39;
import { viteMockServe } from &#39;vite-plugin-mock&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
export default ({ command })=&gt; {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === &#39;serve&#39;,
      }),
    ],
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在根目录创建mock文件夹:去创建我们需要mock数据与接口！！！</p><p>在mock文件夹内部创建一个user.ts文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//用户信息数据
function createUserList() {
    return [
        {
            userId: 1,
            avatar:
                &#39;https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&#39;,
            username: &#39;admin&#39;,
            password: &#39;111111&#39;,
            desc: &#39;平台管理员&#39;,
            roles: [&#39;平台管理员&#39;],
            buttons: [&#39;cuser.detail&#39;],
            routes: [&#39;home&#39;],
            token: &#39;Admin Token&#39;,
        },
        {
            userId: 2,
            avatar:
                &#39;https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&#39;,
            username: &#39;system&#39;,
            password: &#39;111111&#39;,
            desc: &#39;系统管理员&#39;,
            roles: [&#39;系统管理员&#39;],
            buttons: [&#39;cuser.detail&#39;, &#39;cuser.user&#39;],
            routes: [&#39;home&#39;],
            token: &#39;System Token&#39;,
        },
    ]
}

export default [
    // 用户登录接口
    {
        url: &#39;/api/user/login&#39;,//请求地址
        method: &#39;post&#39;,//请求方式
        response: ({ body }) =&gt; {
            //获取请求体携带过来的用户名与密码
            const { username, password } = body;
            //调用获取用户信息函数,用于判断是否有此用户
            const checkUser = createUserList().find(
                (item) =&gt; item.username === username &amp;&amp; item.password === password,
            )
            //没有用户返回失败信息
            if (!checkUser) {
                return { code: 201, data: { message: &#39;账号或者密码不正确&#39; } }
            }
            //如果有返回成功信息
            const { token } = checkUser
            return { code: 200, data: { token } }
        },
    },
    // 获取用户信息
    {
        url: &#39;/api/user/info&#39;,
        method: &#39;get&#39;,
        response: (request) =&gt; {
            //获取请求头携带token
            const token = request.headers.token;
            //查看用户信息是否包含有次token用户
            const checkUser = createUserList().find((item) =&gt; item.token === token)
            //没有返回失败的信息
            if (!checkUser) {
                return { code: 201, data: { message: &#39;获取用户信息失败&#39; } }
            }
            //如果有返回成功信息
            return { code: 200, data: {checkUser} }
        },
    },
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装axios</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm install axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后通过axios测试接口！！！</p><h3 id="_3-7axios二次封装" tabindex="-1"><a class="header-anchor" href="#_3-7axios二次封装" aria-hidden="true">#</a> 3.7axios二次封装</h3><p>在开发项目的时候避免不了与后端进行交互,因此我们需要使用axios插件实现发送网络请求。在开发项目的时候</p><p>我们经常会把axios进行二次封装。</p><p>目的:</p><p>1:使用请求拦截器，可以在请求拦截器中处理一些业务(开始进度条、请求头携带公共参数)</p><p>2:使用响应拦截器，可以在响应拦截器中处理一些业务(进度条结束、简化服务器返回的数据、处理http网络错误)</p><p>在根目录下创建utils/request.ts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import axios from &quot;axios&quot;;
import { ElMessage } from &quot;element-plus&quot;;
//创建axios实例
let request = axios.create({
    baseURL: i<wbr>mport.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
//请求拦截器
request.interceptors.request.use(config =&gt; {
    return config;
});
//响应拦截器
request.interceptors.response.use((response) =&gt; {
    return response.data;
}, (error) =&gt; {
    //处理网络错误
    let msg = &#39;&#39;;
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = &quot;token过期&quot;;
            break;
        case 403:
            msg = &#39;无权访问&#39;;
            break;
        case 404:
            msg = &quot;请求地址错误&quot;;
            break;
        case 500:
            msg = &quot;服务器出现问题&quot;;
            break;
        default:
            msg = &quot;无网络&quot;;

    }
    ElMessage({
        type: &#39;error&#39;,
        message: msg
    })
    return Promise.reject(error);
});
export default request;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8api接口统一管理" tabindex="-1"><a class="header-anchor" href="#_3-8api接口统一管理" aria-hidden="true">#</a> 3.8API接口统一管理</h3><p>在开发项目的时候,接口可能很多需要统一管理。在src目录下去创建api文件夹去统一管理项目的接口；</p><p>比如:下面方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//统一管理咱们项目用户相关的接口

import request from &#39;@/utils/request&#39;

import type {

 loginFormData,

 loginResponseData,

 userInfoReponseData,

} from &#39;./type&#39;

//项目用户相关的请求地址

enum API {

 LOGIN_URL = &#39;/admin/acl/index/login&#39;,

 USERINFO_URL = &#39;/admin/acl/index/info&#39;,

 LOGOUT_URL = &#39;/admin/acl/index/logout&#39;,

}
//登录接口
export const reqLogin = (data: loginFormData) =&gt;
 request.post&lt;any, loginResponseData&gt;(API.LOGIN_URL, data)
//获取用户信息

export const reqUserInfo = () =&gt;

 request.get&lt;any, userInfoReponseData&gt;(API.USERINFO_URL)

//退出登录

export const reqLogout = () =&gt; request.post&lt;any, any&gt;(API.LOGOUT_URL)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、项目的资源地址" tabindex="-1"><a class="header-anchor" href="#四、项目的资源地址" aria-hidden="true">#</a> 四、项目的资源地址</h2>`,22),J={href:"https://gitee.com/jch1011/vue3_admin_template-bj1.git",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,"项目在线文档:",-1),Z={href:"http://sph-api.atguigu.cn",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"swagger文档:",-1),z={href:"http://139.198.104.58:8209/swagger-ui.html",target:"_blank",rel:"noopener noreferrer"},F={href:"http://139.198.104.58:8212/swagger-ui.html#/",target:"_blank",rel:"noopener noreferrer"},G=e("p",null,"echarts:国内镜像网站",-1),H={href:"https://www.isqqw.com/echarts-doc/zh/option.html#title",target:"_blank",rel:"noopener noreferrer"},W={href:"http://datav.aliyun.com/portal/school/atlas/area_selector",target:"_blank",rel:"noopener noreferrer"};function Q(K,Y){const i=d("ExternalLinkIcon");return a(),r("div",null,[u,c,o,m,e("p",null,[e("strong",null,[n("通信仓库地址:"),e("a",p,[n("https://gitee.com/jch1011/vue3_communication.git"),s(i)])])]),b,e("p",null,[e("strong",null,[n("mitt:官网地址:"),e("a",g,[n("https://www.npmjs.com/package/mitt"),s(i)])])]),h,x,q,e("p",null,[e("strong",null,[n("pinia官网:"),e("a",f,[n("https://pinia.web3doc.top/"),s(i)])])]),_,e("p",null,[n("本项目使用vite进行构建，vite官方中文文档参考："),e("a",y,[n("cn.vitejs.dev/guide/"),s(i)])]),e("p",null,[e("strong",null,[n("pnpm:performant npm ，意味“高性能的 npm”。"),e("a",j,[n("pnpm"),s(i)]),n("由npm/yarn衍生而来，解决了npm/yarn内部潜在的bug，极大的优化了性能，扩展了使用场景。被誉为“最先进的包管理工具”")])]),k,e("p",null,[n("运行完毕项目跑在"),e("a",E,[n("http://127.0.0.1:5173/,可以访问你得项目啦"),s(i)])]),w,M,e("p",null,[e("strong",null,[n("eslint中文官网:"),e("a",O,[n("http://eslint.cn/"),s(i)])])]),e("p",null,[n("ESLint最初是由"),e("a",I,[n("Nicholas C. Zakas"),s(i)]),n(" 于2013年6月创建的开源项目。它的目标是提供一个插件化的"),S]),T,e("p",null,[e("a",A,[n("stylelint"),s(i)]),n("为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等。")]),V,e("p",null,[e("strong",null,[n("官网:"),e("a",P,[n("https://stylelint.bootcss.com/"),s(i)])])]),D,e("p",null,[n("官网地址:"),e("a",C,[n("https://element-plus.gitee.io/zh-CN/"),s(i)])]),R,L,X,e("p",null,[n("安装依赖:"),e("a",N,[n("https://www.npmjs.com/package/vite-plugin-mock"),s(i)])]),U,e("p",null,[n("贾成豪老师代码仓库地址:"),e("a",J,[n("https://gitee.com/jch1011/vue3_admin_template-bj1.git"),s(i)])]),$,e("p",null,[n("服务器域名:"),e("a",Z,[n("http://sph-api.atguigu.cn"),s(i)])]),B,e("p",null,[e("a",z,[n("http://139.198.104.58:8209/swagger-ui.html"),s(i)])]),e("p",null,[e("a",F,[n("http://139.198.104.58:8212/swagger-ui.html#/"),s(i)])]),G,e("p",null,[e("a",H,[n("https://www.isqqw.com/echarts-doc/zh/option.html#title"),s(i)])]),e("p",null,[e("a",W,[n("http://datav.aliyun.com/portal/school/atlas/area_selector"),s(i)])])])}const ne=t(v,[["render",Q],["__file","硅谷甄选项目笔记.html.vue"]]);export{ne as default};
