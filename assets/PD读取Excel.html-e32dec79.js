import{_ as n,o as s,c as a,e as p}from"./app-a242af93.js";const t={},e=p(`<h1 id="pd读取excel" tabindex="-1"><a class="header-anchor" href="#pd读取excel" aria-hidden="true">#</a> PD读取Excel</h1><h2 id="命令行安装pandas" tabindex="-1"><a class="header-anchor" href="#命令行安装pandas" aria-hidden="true">#</a> 命令行安装pandas</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple python-office <span class="token parameter variable">-U</span>
pip <span class="token function">install</span> pandas numpy python-dateutil pytz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pd生成excel" tabindex="-1"><a class="header-anchor" href="#pd生成excel" aria-hidden="true">#</a> pd生成Excel</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token comment"># pd.read_excel(&#39;fake2excel.xlsx&#39;, index_col=0)</span>

user_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;first_name&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Sammy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jesse&#39;</span><span class="token punctuation">,</span> np<span class="token punctuation">.</span>nan<span class="token punctuation">,</span> <span class="token string">&#39;Jamie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;last_name&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Shark&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Octopus&#39;</span><span class="token punctuation">,</span> np<span class="token punctuation">.</span>nan<span class="token punctuation">,</span> <span class="token string">&#39;Mantis shrimp&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;online&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span> np<span class="token punctuation">.</span>nan<span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;followers&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">987</span><span class="token punctuation">,</span> <span class="token number">432</span><span class="token punctuation">,</span> <span class="token number">321</span><span class="token punctuation">,</span> np<span class="token punctuation">.</span>nan<span class="token punctuation">]</span><span class="token punctuation">}</span>

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>user_data<span class="token punctuation">,</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;first_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;last_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;online&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;followers&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 让我们首先使用dropna()删除缺失的值。</span>
df_drop_missing <span class="token operator">=</span> df<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 作为删除值的替代方法，我们可以使用我们选择的值填充缺失值</span>
df_fill <span class="token operator">=</span> df<span class="token punctuation">.</span>fillna<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df_fill<span class="token punctuation">)</span>

<span class="token comment"># 将数据写入Excel文件</span>
df_fill<span class="token punctuation">.</span>to_excel<span class="token punctuation">(</span><span class="token string">&#39;test_df_fill.xlsx&#39;</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pandas读取excel" tabindex="-1"><a class="header-anchor" href="#pandas读取excel" aria-hidden="true">#</a> pandas读取Excel</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_excel<span class="token punctuation">(</span><span class="token string">&#39;D:\\\\XXX处理机接口-new.xlsx&#39;</span><span class="token punctuation">,</span> sheet_name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> df<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;head:&#39;</span><span class="token operator">+</span> i<span class="token punctuation">)</span>
    <span class="token comment"># df[i].head只打印excel文件前几行数据</span>
    <span class="token comment"># print(df[i].head())</span>
    <span class="token comment"># 按行导出json</span>
    <span class="token comment"># print(df[i].to_json(orient =&#39;index&#39;, force_ascii=False))</span>
     <span class="token comment"># 将数据重新导出到json文件</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>df<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to_json<span class="token punctuation">(</span>orient <span class="token operator">=</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> force_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用 <code>df.shape</code> 来查看 DataFrame 的行数和列数，使用 <code>df.columns</code> 来查看 DataFrame 的列名，使用 <code>df.info()</code> 来查看 DataFrame</p><h2 id="导出到csv文件" tabindex="-1"><a class="header-anchor" href="#导出到csv文件" aria-hidden="true">#</a> 导出到csv文件</h2><h3 id="dataframe数据导出" tabindex="-1"><a class="header-anchor" href="#dataframe数据导出" aria-hidden="true">#</a> DataFrame数据导出</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># index=0，忽略索引；header=0，忽略表头；mode=&#39;a&#39;，可追加</span>
df<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span>data_output_path<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> header<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&#39;\\t&#39;</span><span class="token punctuation">,</span> float_format<span class="token operator">=</span><span class="token string">&#39;%.4f&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># columns可以指定要保存的列</span>
df<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span>data_output_path<span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
df<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;uid&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span>data_output_path<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dict数据导出" tabindex="-1"><a class="header-anchor" href="#dict数据导出" aria-hidden="true">#</a> dict数据导出</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>app_name<span class="token punctuation">,</span> cnt<span class="token punctuation">]</span> <span class="token keyword">for</span> app_name<span class="token punctuation">,</span> cnt <span class="token keyword">in</span> temp_dict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;app_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cnt&#39;</span><span class="token punctuation">]</span>
df <span class="token operator">=</span> df<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>by<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;cnt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ascending<span class="token operator">=</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span>output_file<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出到excel文件" tabindex="-1"><a class="header-anchor" href="#导出到excel文件" aria-hidden="true">#</a> 导出到excel文件</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>data<span class="token punctuation">.</span>to_excel<span class="token punctuation">(</span>data_output_path<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token comment"># 或：多个sheet页面</span>
<span class="token comment"># 生成一个excelWriter</span>
writer <span class="token operator">=</span> pd<span class="token punctuation">.</span>ExcelWriter<span class="token punctuation">(</span><span class="token string">&#39;./tmpData/conclusion.xlsx&#39;</span><span class="token punctuation">)</span>
result_df<span class="token punctuation">.</span>to_excel<span class="token punctuation">(</span>writer<span class="token punctuation">,</span> sheet_name<span class="token operator">=</span><span class="token string">&#39;sheet_1&#39;</span><span class="token punctuation">,</span> header<span class="token operator">=</span>name_list<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
writer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","PD读取Excel.html.vue"]]);export{r as default};
