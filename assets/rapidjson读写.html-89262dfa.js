import{_ as o,r as u,o as e,c as p,a as s,b as n,d as i,e as t}from"./app-a242af93.js";const c={},l=t('<p>@<a href="%E6%96%87%E7%AB%A0%E7%9B%AE%E5%BD%95">TOC</a></p><hr><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><p>例如：学习rapidjson的解析和读写，然后发现在string下使用没有问题，但是换到CString后出现了很多问题，主要是中文的读写乱码问题。要解决中文读写，那么就需要处理rapidjson在UNICODE下的读写，程序里提供了wchar_t的操作，我们仅需要将SourceEncoding和TargetEncoding进行设置。</p><hr><h1 id="一、rapidjson是什么" tabindex="-1"><a class="header-anchor" href="#一、rapidjson是什么" aria-hidden="true">#</a> 一、rapidjson是什么？</h1><p>示例：rapidjson 是腾讯开源的一个高效的C++ JSON解析器及生成器。</p><h1 id="二、使用步骤" tabindex="-1"><a class="header-anchor" href="#二、使用步骤" aria-hidden="true">#</a> 二、使用步骤</h1><h2 id="引入库" tabindex="-1"><a class="header-anchor" href="#引入库" aria-hidden="true">#</a> 引入库</h2>',9),r={href:"https://github.com/Tencent/rapidjson/",target:"_blank",rel:"noopener noreferrer"},d=s("br",null,null,-1),q=t(`<h2 id="示例数据" tabindex="-1"><a class="header-anchor" href="#示例数据" aria-hidden="true">#</a> 示例数据</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;Info&quot;: [
        {
            &quot;name&quot;: &quot;钢管&quot;,
            &quot;code&quot;: &quot;01010101&quot;,
            &quot;spec&quot;: &quot;无缝钢管（SMLS）&quot;
        },
        {
            &quot;name&quot;: &quot;钢管&quot;,
            &quot;code&quot;: &quot;01010102&quot;,
            &quot;spec&quot;: &quot;直缝埋弧焊钢管（SAWL）&quot;
        },
        {
            &quot;name&quot;: &quot;钢管&quot;,
            &quot;code&quot;: &quot;01010103&quot;,
            &quot;spec&quot;: &quot;螺旋缝埋弧焊钢管（SAWH）&quot;
        },
        {
            &quot;name&quot;: &quot;钢管&quot;,
            &quot;code&quot;: &quot;01010104&quot;,
            &quot;spec&quot;: &quot;高频电阻焊管（HFW）&quot;
        },
        {
            &quot;name&quot;: &quot;弯头&quot;,
            &quot;code&quot;: &quot;01020101&quot;,
            &quot;spec&quot;: &quot;90°长半径弯头(R=1.5D)&quot;
        }
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读入数据" tabindex="-1"><a class="header-anchor" href="#读入数据" aria-hidden="true">#</a> 读入数据</h2><p>代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;RapidJson/document.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;RapidJson/writer.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;RapidJson/prettywriter.h&quot;</span></span>
using namespace rapidjson<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> GenericDocument<span class="token operator">&lt;</span>UTF16<span class="token operator">&lt;</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span> DocumentW<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> GenericValue<span class="token operator">&lt;</span>UTF16<span class="token operator">&lt;</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span> ValueW<span class="token punctuation">;</span>
std<span class="token operator">::</span>map<span class="token operator">&lt;</span>CString<span class="token punctuation">,</span> CString<span class="token operator">&gt;</span> CUtility<span class="token operator">::</span><span class="token function">GetCodeByGuigeBiao</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        map<span class="token operator">&lt;</span>CString<span class="token punctuation">,</span> CString<span class="token operator">&gt;</span> mpInfo<span class="token punctuation">;</span>
        CString strFile <span class="token operator">=</span> CUtility<span class="token operator">::</span><span class="token function">GetAppPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;DL.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        CStdioFile ReadF<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ReadF<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>strFile<span class="token punctuation">,</span> CFile<span class="token operator">::</span>modeRead<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		CString strTemp<span class="token punctuation">,</span>strData<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>ReadF<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span>strTemp<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			strData <span class="token operator">+=</span> strTemp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		ReadF<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        delete temp<span class="token punctuation">;</span>  
        DocumentW dom<span class="token punctuation">;</span>
        CString strType<span class="token punctuation">,</span>strCode<span class="token punctuation">,</span>strName<span class="token punctuation">,</span>strGuige<span class="token punctuation">,</span> strValue<span class="token punctuation">;</span>
        <span class="token comment">//DocumentW::AllocatorType&amp; allocator = dom.GetAllocator();</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dom<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>strData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasParseError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span><span class="token function">HasMember</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;Info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dom<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;Info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">IsArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                        <span class="token keyword">const</span> ValueW<span class="token operator">&amp;</span> arr <span class="token operator">=</span> dom<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;Info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                        <span class="token class-name">size_t</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">size_t</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                        <span class="token punctuation">{</span>
                               <span class="token keyword">const</span> ValueW<span class="token operator">&amp;</span> object <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                               <span class="token comment">//为防止类型不匹配，一般会添加类型校验</span>
                               <span class="token keyword">if</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">IsObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                               <span class="token punctuation">{</span>
                                       <span class="token keyword">if</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">HasMember</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>  object<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                       <span class="token punctuation">{</span>
                                             strName <span class="token operator">=</span> object<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                       <span class="token punctuation">}</span>
                                       <span class="token keyword">if</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">HasMember</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>  object<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                       <span class="token punctuation">{</span>
                                             strCode <span class="token operator">=</span> object<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                       <span class="token punctuation">}</span>
                                       <span class="token keyword">if</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">HasMember</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;spec&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>  object<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;spec&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                       <span class="token punctuation">{</span>
                                             strGuige <span class="token operator">=</span> object<span class="token punctuation">[</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;spec&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                       <span class="token punctuation">}</span>
                                       strName<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                       strGuige<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                       <span class="token keyword">if</span> <span class="token punctuation">(</span>strName<span class="token punctuation">.</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> strGuige<span class="token punctuation">.</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                       <span class="token punctuation">{</span>
                                              <span class="token keyword">continue</span><span class="token punctuation">;</span>
                                       <span class="token punctuation">}</span>
                                       <span class="token keyword">if</span> <span class="token punctuation">(</span>strGuige<span class="token punctuation">.</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                              strValue <span class="token operator">=</span> strName<span class="token punctuation">;</span>
                                       <span class="token keyword">else</span>
                                              strValue <span class="token operator">=</span> strName <span class="token operator">+</span> <span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> strGuige<span class="token punctuation">;</span>
                                       mpInfo<span class="token punctuation">[</span>strValue<span class="token punctuation">]</span> <span class="token operator">=</span> strCode<span class="token punctuation">;</span>
                               <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> mpInfo<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入数据" tabindex="-1"><a class="header-anchor" href="#写入数据" aria-hidden="true">#</a> 写入数据</h2><p>代码如下（示例）：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;RapidJson/document.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;RapidJson/writer.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;RapidJson/prettywriter.h&quot;</span></span>
using namespace rapidjson<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> GenericStringBuffer<span class="token operator">&lt;</span>UTF16<span class="token operator">&lt;</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span> StringBufferW<span class="token punctuation">;</span>
bool CGetFiberNoBySpec<span class="token operator">::</span><span class="token function">writeInfoToJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        StringBufferW strBuf<span class="token punctuation">;</span>
        PrettyWriter<span class="token operator">&lt;</span>StringBufferW<span class="token punctuation">,</span> UTF16<span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> UTF16<span class="token operator">&lt;</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span> <span class="token function">writer</span><span class="token punctuation">(</span>strBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//PrettyWriter是格式化的json(自动换行)</span>
        <span class="token comment">//rapidjson::Writer&lt;rapidjson::StringBuffer&gt; writer(strBuf);</span>
        writer<span class="token punctuation">.</span><span class="token function">StartObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//5.5 结构体数组</span>
        writer<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;Info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">StartArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> iter <span class="token operator">=</span> m_Vec<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iter <span class="token operator">!=</span> m_Vec<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>iter<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
               CellInfo cell <span class="token operator">=</span> <span class="token operator">*</span>iter<span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">StartObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>strName<span class="token punctuation">)</span><span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>strCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">&quot;spec&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>strSpec<span class="token punctuation">)</span><span class="token punctuation">;</span>
               writer<span class="token punctuation">.</span><span class="token function">EndObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        writer<span class="token punctuation">.</span><span class="token function">EndArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">EndObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	strBuf<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取json字符串</span>
        <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="其它说明" tabindex="-1"><a class="header-anchor" href="#其它说明" aria-hidden="true">#</a> 其它说明</h2><p>writer.<strong>StartObject</strong>() 对应**{}**</p><p>writer.<strong>EndArray</strong>() 对应**[]**</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>{&quot;FUNCTIONID&quot;:&quot;ZPLM001&quot;,&quot;MATNR&quot;:&quot;8FJG.050.1110&quot;,&quot;O_DATA&quot;:[{&quot;TABLETYPE&quot;:&quot;配置表&quot;,&quot;TABLE&quot;:[{&quot;ROWID&quot;:&quot;1&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;代号&quot;},{&quot;VALUE&quot;:&quot;序6&quot;},{&quot;VALUE&quot;:&quot;序7&quot;}]},{&quot;ROWID&quot;:&quot;2&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;5FJ.671.3858&quot;},{&quot;VALUE&quot;:&quot;5FJ.671.8549&quot;},{&quot;VALUE&quot;:&quot;5FJ.674.8245&quot;}]},{&quot;ROWID&quot;:&quot;3&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;5FJ.671.3874&quot;},{&quot;VALUE&quot;:&quot;5FJ.671.8550.1&quot;},{&quot;VALUE&quot;:&quot;5FJ.674.8246.1&quot;}]},{&quot;ROWID&quot;:&quot;4&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;5FJ.671.4123&quot;},{&quot;VALUE&quot;:&quot;5FJ.671.8551.1&quot;},{&quot;VALUE&quot;:&quot;5FJ.674.8247.1&quot;}]}]},{&quot;TABLETYPE&quot;:&quot;明细表&quot;,&quot;TABLE&quot;:[{&quot;ROWID&quot;:&quot;1&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;^&quot;},{&quot;VALUE&quot;:&quot;序号&quot;},{&quot;VALUE&quot;:&quot;代号&quot;},{&quot;VALUE&quot;:&quot;名称&quot;},{&quot;VALUE&quot;:&quot;数量&quot;},{&quot;VALUE&quot;:&quot;单位&quot;},{&quot;VALUE&quot;:&quot;材质&quot;},{&quot;VALUE&quot;:&quot;备注&quot;}]},{&quot;ROWID&quot;:&quot;2&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;1&quot;},{&quot;VALUE&quot;:&quot;1&quot;},{&quot;VALUE&quot;:&quot;1000017647&quot;},{&quot;VALUE&quot;:&quot;NSK 轴承  6206-2Z&quot;},{&quot;VALUE&quot;:&quot;2&quot;},{&quot;VALUE&quot;:&quot;盘&quot;},{&quot;VALUE&quot;:&quot;&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;3&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;2&quot;},{&quot;VALUE&quot;:&quot;2&quot;},{&quot;VALUE&quot;:&quot;1000002497&quot;},{&quot;VALUE&quot;:&quot;垫圈 8&quot;},{&quot;VALUE&quot;:&quot;6&quot;},{&quot;VALUE&quot;:&quot;个&quot;},{&quot;VALUE&quot;:&quot;&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;4&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;3&quot;},{&quot;VALUE&quot;:&quot;3&quot;},{&quot;VALUE&quot;:&quot;1000017649&quot;},{&quot;VALUE&quot;:&quot;螺栓M8*30&quot;},{&quot;VALUE&quot;:&quot;6&quot;},{&quot;VALUE&quot;:&quot;个&quot;},{&quot;VALUE&quot;:&quot;&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;5&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;4&quot;},{&quot;VALUE&quot;:&quot;4&quot;},{&quot;VALUE&quot;:&quot;8FJ.013.6314&quot;},{&quot;VALUE&quot;:&quot;端盖&quot;},{&quot;VALUE&quot;:&quot;1&quot;},{&quot;VALUE&quot;:&quot;件&quot;},{&quot;VALUE&quot;:&quot;&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;6&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;5&quot;},{&quot;VALUE&quot;:&quot;5&quot;},{&quot;VALUE&quot;:&quot;5FJ.354.6154&quot;},{&quot;VALUE&quot;:&quot;接线盒(铸铁)&quot;},{&quot;VALUE&quot;:&quot;1&quot;},{&quot;VALUE&quot;:&quot;件&quot;},{&quot;VALUE&quot;:&quot;借YE5-132&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;7&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;6&quot;},{&quot;VALUE&quot;:&quot;6&quot;},{&quot;VALUE&quot;:&quot;见表&quot;},{&quot;VALUE&quot;:&quot;定子&quot;},{&quot;VALUE&quot;:&quot;1&quot;},{&quot;VALUE&quot;:&quot;件&quot;},{&quot;VALUE&quot;:&quot;&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;8&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;7&quot;},{&quot;VALUE&quot;:&quot;7&quot;},{&quot;VALUE&quot;:&quot;见表&quot;},{&quot;VALUE&quot;:&quot;转子&quot;},{&quot;VALUE&quot;:&quot;1&quot;},{&quot;VALUE&quot;:&quot;件&quot;},{&quot;VALUE&quot;:&quot;&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;9&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;8&quot;},{&quot;VALUE&quot;:&quot;8&quot;},{&quot;VALUE&quot;:&quot;1000002466&quot;},{&quot;VALUE&quot;:&quot;垫圈 5&quot;},{&quot;VALUE&quot;:&quot;3&quot;},{&quot;VALUE&quot;:&quot;个&quot;},{&quot;VALUE&quot;:&quot;Q235-A 镀锌&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;10&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;9&quot;},{&quot;VALUE&quot;:&quot;9&quot;},{&quot;VALUE&quot;:&quot;1000006255&quot;},{&quot;VALUE&quot;:&quot;螺栓M16*35&quot;},{&quot;VALUE&quot;:&quot;8&quot;},{&quot;VALUE&quot;:&quot;个&quot;},{&quot;VALUE&quot;:&quot;&quot;},{&quot;VALUE&quot;:&quot;&quot;}]},{&quot;ROWID&quot;:&quot;11&quot;,&quot;CONTENT&quot;:[{&quot;VALUE&quot;:&quot;10&quot;},{&quot;VALUE&quot;:&quot;10&quot;},{&quot;VALUE&quot;:&quot;1000002495&quot;},{&quot;VALUE&quot;:&quot;垫圈 5&quot;},{&quot;VALUE&quot;:&quot;3&quot;},{&quot;VALUE&quot;:&quot;个&quot;},{&quot;VALUE&quot;:&quot;65Mn&quot;},{&quot;VALUE&quot;:&quot;&quot;}]}]}]}

CString CExportJson::writeJson()
{
	//处理配置表信息
	CGetZwConTable getConTable;
	getConTable.openFile();
	map&lt;CString, AcDbObjectId&gt; conTableMp = getConTable.getAllTableName();

	CString strTitleName;
	vector&lt;vector&lt;pair&lt;CString, CString&gt;&gt;&gt; bomInfo = getBomInfo(strTitleName);

	StringBufferW strBuf;
	rapidjson::Writer&lt;StringBufferW, UTF16&lt;&gt;, UTF16&lt;&gt; &gt; writer(strBuf);
	writer.StartObject();

	writer.Key(_T(&quot;FUNCTIONID&quot;));
	writer.String(_T(&quot;ZPLM001&quot;));

	writer.Key(_T(&quot;MATNR&quot;));
	writer.String(strTitleName);

	//5.5 结构体数组
	writer.Key(_T(&quot;O_DATA&quot;));
	writer.StartArray();
	//////////////////////////////////////////////////////////////////////////
	//处理配置表信息
	writer.StartObject();
	for (auto iter : conTableMp)
	{
		vector&lt;vector&lt;pair&lt;CString, CString&gt; &gt; &gt; conTableVec = getConTable.getTableDataByName(iter.first);
		parseTableInfo(conTableVec, writer);
	}
	writer.EndObject();
	//处理明细表数据
	writer.StartObject();
	parseTableInfo(bomInfo, writer, _T(&quot;明细表&quot;));
	writer.EndObject();

	writer.EndArray();
	writer.EndObject();

	CString strOut = strBuf.GetString();
	acutPrintf(strOut);

	return strOut;
}


void CExportJson::parseTableInfo(const vector&lt;vector&lt;pair&lt;CString, CString&gt;&gt;&gt;&amp; vecMp,
 rapidjson::Writer&lt;StringBufferW, UTF16&lt;&gt;, UTF16&lt;&gt;&gt;&amp; writer, CString strHeader)
{
	int nRow = 1;
	writer.Key(_T(&quot;TABLETYPE&quot;));
	writer.String(strHeader);
	writer.Key(_T(&quot;TABLE&quot;));
	writer.StartArray();
	bool bIsFirst = true;
	for (auto it : vecMp)
	{
		vector&lt;pair&lt;CString, CString&gt; &gt; tmpVec = it;
		if (bIsFirst)
		{
			parseCellInfo(writer, tmpVec, _T(&quot;1&quot;), true);
			bIsFirst = false;
		}

		CString strIndex;
		strIndex.Format(_T(&quot;%d&quot;), ++nRow);
		parseCellInfo(writer, tmpVec, strIndex);
	}
	writer.EndArray();
}

void CExportJson::parseCellInfo(rapidjson::Writer&lt;StringBufferW, UTF16&lt;&gt;, UTF16&lt;&gt;&gt;&amp; writer, 
	const vector&lt;pair&lt;CString, CString&gt; &gt;&amp; tmpVec, CString strIndex, bool bIsFirst)
{
	writer.StartObject();
	writer.Key(_T(&quot;ROWID&quot;));
	writer.String(strIndex);
	writer.Key(_T(&quot;CONTENT&quot;));
	writer.StartArray();
	for (auto iir : tmpVec)
	{
		writer.StartObject();
		writer.Key(_T(&quot;VALUE&quot;));
		if (bIsFirst)
		{
			writer.String(iir.first);
		}
		else
		{
			writer.String(iir.second);
		}
		writer.EndObject();
	}
	writer.EndArray();
	writer.EndObject();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="后记" tabindex="-1"><a class="header-anchor" href="#后记" aria-hidden="true">#</a> 后记</h1><p>希望对遇到同样问题的人有所帮助。</p>`,15);function k(v,m){const a=u("ExternalLinkIcon");return e(),p("div",null,[l,s("p",null,[n("代码如下（示例）："),s("a",r,[n("源码：https://github.com/Tencent/rapidjson/"),i(a)]),d,n(" 将所有的库里面的所有头文件添加到项目里就可以使用。")]),q])}const g=o(c,[["render",k],["__file","rapidjson读写.html.vue"]]);export{g as default};
