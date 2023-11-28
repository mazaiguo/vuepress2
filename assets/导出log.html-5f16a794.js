import{_ as n,r as e,o,c as r,b as a,a as t,d as p,e as l}from"./app-a242af93.js";const d={},c=l(`<h1 id="导出git-log" tabindex="-1"><a class="header-anchor" href="#导出git-log" aria-hidden="true">#</a> 导出Git log</h1><h2 id="写周报专用" tabindex="-1"><a class="header-anchor" href="#写周报专用" aria-hidden="true">#</a> 写周报专用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--merges</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%s&quot;</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">5</span>.days <span class="token operator">&gt;&gt;</span> ./log.md//导出5天内merge的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取两个提交之间的log日志" tabindex="-1"><a class="header-anchor" href="#获取两个提交之间的log日志" aria-hidden="true">#</a> 获取两个提交之间的log日志</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--merges</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%s&quot;</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">5</span>.days <span class="token operator">&gt;&gt;</span> ./log4.md//导出5天内merge的数据
<span class="token function">git</span> log SHA-1_A<span class="token punctuation">..</span>SHA-1_B <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%cd:  %s&quot;</span> <span class="token parameter variable">--date</span><span class="token operator">=</span>format:%Y%m%d <span class="token operator">&gt;</span> changeLog.md//两个SHA值之间的<span class="token punctuation">..</span>号不能去掉
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%s&lt;%h&gt;&quot;</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">5</span>.days <span class="token operator">&gt;&gt;</span> ./log3.md//导出5天内提交的log日志，带简短哈希字串
<span class="token function">git</span> log <span class="token parameter variable">--date</span><span class="token operator">=</span>format:%Y-%m-%d <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%an %ad&quot;</span>,<span class="token string">&quot;%s&quot;</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">5</span>.days <span class="token operator">&gt;&gt;</span> ./log2.md
<span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">5</span>.days<span class="token operator">&gt;&gt;</span> ./log1.md
<span class="token function">git</span> log <span class="token parameter variable">--date</span><span class="token operator">=</span>format:%Y-%m-%d <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%an %ad&quot;</span>,<span class="token string">&quot;%s&quot;</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;2023.04.28&quot;</span> <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token string">&quot;2023.05.06&quot;</span> <span class="token operator">&gt;&gt;</span> ./log.md//导出一段时间内的log日志
<span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%ai , %an: %s&quot;</span> <span class="token operator">&gt;</span> log.txt
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%ai , %an: %s&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>说明</th><th>命令</th><th>说明</th><th>命令</th></tr></thead><tbody><tr><td>指定具体年月日</td><td>git log --since=&quot;2019-11-21&quot;</td><td>指定年</td><td>git log --since=2.years</td></tr><tr><td>指定月</td><td>git log --since=2.months</td><td>指定周</td><td>git log --since=2.weeks</td></tr><tr><td>指定天</td><td>git log --since=2.days</td><td>一段时间</td><td>git log --date=format:%Y-%m-%d --pretty=format:&quot;%an %ad&quot;,&quot;%s&quot; --since=&quot;2023.04.28&quot; --until=&quot;2023.05.06&quot; &gt;&gt; ./log.log</td></tr></tbody></table><hr><h2 id="git-log-参数" tabindex="-1"><a class="header-anchor" href="#git-log-参数" aria-hidden="true">#</a> git log 参数</h2><p>格式化git提交日志</p><table><thead><tr><th>选项</th><th>说明</th><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-p</td><td>按补丁格式显示每个更新之间的差异。</td><td>--relative-date</td><td>使用较短的相对时间显示（比如，“2 weeks ago”）。</td></tr><tr><td>--stat</td><td>显示每次更新的文件修改统计信息。</td><td>--abbrev-commit</td><td>仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。</td></tr><tr><td>--shortstat</td><td>只显示 --stat 中最后的行数修改添加移除统计。</td><td>--graph</td><td>显示 ASCII 图形表示的分支合并历史。</td></tr><tr><td>--name-only</td><td>仅在提交信息后显示已修改的文件清单。</td><td>--pretty</td><td>使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。</td></tr><tr><td>--name-status</td><td>显示新增、修改、删除的文件清单。</td><td></td><td></td></tr></tbody></table><hr><h2>git log --pretty=format:&quot;%h - %an, %ar : %s&quot; 参数</h2>`,12),i={href:"https://www.git-scm.com/docs/git-log#_examples",target:"_blank",rel:"noopener noreferrer"};function g(m,u){const s=e("ExternalLinkIcon");return o(),r("div",null,[c,a(" |选项 |说明|选项 |说明| | -----| ---- |-----| ---- | |%H |提交对象（commit）的完整哈希字串|%ad |作者修订日期（可以用 -date= 选项定制格式）| |%h |提交对象的简短哈希字串|%ar |作者修订日期，按多久以前的方式显示| |%T |树对象（tree）的完整哈希字串|%cn |提交者(committer)的名字| |%t |树对象的简短哈希字串|%ce |提交者的电子邮件地址| |%P |父对象（parent）的完整哈希字串|%cd |提交日期| |%p |父对象的简短哈希字串|%cr |提交日期，按多久以前的方式显示| |%an |作者（author）的名字|%s |提交说明| |%ae |作者的电子邮件地址||| "),t("p",null,[t("a",i,[a("官网sample"),p(s)])])])}const h=n(d,[["render",g],["__file","导出log.html.vue"]]);export{h as default};
