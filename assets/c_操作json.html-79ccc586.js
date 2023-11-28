import{_ as i,r as o,o as l,c as r,a as n,b as s,d as a,e as t}from"./app-a242af93.js";const d={},u=n("h1",{id:"c-json解析与生成json字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c-json解析与生成json字符串","aria-hidden":"true"},"#"),s(" C# json解析与生成json字符串")],-1),c=n("h2",{id:"下载newtonsoftjson",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载newtonsoftjson","aria-hidden":"true"},"#"),s(" 下载newtonsoftjson")],-1),p={href:"https://so.csdn.net/so/search?q=NuGet&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对于复杂json串" tabindex="-1"><a class="header-anchor" href="#对于复杂json串" aria-hidden="true">#</a> 对于复杂json串</h2>`,2),m=n("li",null,[n("p",null,"对于简单的json的可以直接解析, 复杂的json, 建议用先创建json对应的类，然后再用JsonConvert.DeserializeObject转为类来解析, 当json比较复杂时, 创建类也比较浪费时间， VS2022为C#提供了json转C#类的工具，先复制需要转为类的json字符串，然后将光标定位到cs文件的空白处，最后点击编辑–选择性粘贴–将Json粘贴为类，如下图：")],-1),b={href:"https://www.bejson.com/convert/json2csharp/",target:"_blank",rel:"noopener noreferrer"},q=n("h3",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),s(" demo")],-1),k=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csrf&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;nonce key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CSRF NONCE&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;i8Ah1n1DHs71704s2oZnSxmiz4/R3T5mbFrkxErz4m8RUDf3kyX+ror25kZ09Env0tGeVBe+iES8/Y04XRfAKvghp1/+ZIx09oVE7GiE&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//如果好用，请收藏地址，帮忙分享。
public class Attributes
{
    /// &lt;summary&gt;
    /// 
    /// &lt;/summary&gt;
    public string nonce_key { get; set; }
/// &lt;summary&gt;
/// 
/// &lt;/summary&gt;
    public string nonce { get; set; }
}

public class ItemsItem
{
    /// &lt;summary&gt;
    /// 
    /// &lt;/summary&gt;
    public string id { get; set; }
    /// &lt;summary&gt;
    /// 
    /// &lt;/summary&gt;
    public Attributes attributes { get; set; }
}
//Root可以改成自己喜欢的类名
public class CScrfRoot
{
    /// &lt;summary&gt;
    /// 
    /// &lt;/summary&gt;
    public List&lt;ItemsItem&gt; items { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取token-nonce-值" tabindex="-1"><a class="header-anchor" href="#获取token-nonce-值" aria-hidden="true">#</a> 获取token（nonce）值</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> public static string getTokenFromJson(string strJson)
        {
            string strRet = &quot;&quot;;
            //strJson = &quot;{\\&quot;items\\&quot;:[{\\&quot;id\\&quot;:\\&quot;csrf\\&quot;,\\&quot;attributes\\&quot;:{\\&quot;nonce key\\&quot;:\\&quot;CSRF NONCE\\&quot;,\\&quot;nonce\\&quot;:\\&quot;i8Ah1n1DHs71704s2oZnSxmiz4/R3T5mbFrkxErz4m8RUDf3kyX+ror25kZ09Env0tGeVBe+iES8/Y04XRfAKvghp1/+ZIx09oVE7GiE\\&quot;}}]}&quot;;
            var person = JsonConvert.DeserializeObject&lt;CScrfRoot&gt;(strJson);
            List&lt;ItemsItem&gt; listItems = person.items;
            if(listItems.Count &gt;= 1)
            {
                ItemsItem itemsItem = listItems[0];
                Attributes attr = itemsItem.attributes;
                strRet = attr.nonce;
            }
                
            return strRet;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linq-to-json主要使用到jobject-jarray-jproperty和jvalue这四个对象" tabindex="-1"><a class="header-anchor" href="#linq-to-json主要使用到jobject-jarray-jproperty和jvalue这四个对象" aria-hidden="true">#</a> LINQ to JSON主要使用到JObject, JArray, JProperty和JValue这四个对象</h2><ul><li>JObject用来生成一个JSON对象，简单来说就是生成”{}”，</li><li>JArray用来生成一个JSON数组，也就是”[]”，</li><li>JProperty用来生成一个JSON数据，格式为key/value的值，</li><li>而JValue则直接生成一个JSON值</li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>//将json转换为JObject
JObject jObj = new JObject();
jObj.Add(&quot;process0id&quot;, AdditionClass.GetDeFaultProjectNo());


PdfRow pdfRow1 = new PdfRow();
pdfRow1.status = &quot;success&quot;;
pdfRow1.pdfname = &quot;D:\\\\ZWPDF\\\\PDF\\\\JG-72-BL-LB1.pdf&quot;;


PdfRow pdfRow2 = new PdfRow();
pdfRow2.status = &quot;error&quot;;
pdfRow2.pdfname = &quot;D:\\\\ZWPDF\\\\PDF\\\\JG-72-BL-LB2.pdf&quot;;


List&lt;PdfRow&gt; videogames = new List&lt;PdfRow&gt;();
videogames.Add(pdfRow1);
videogames.Add(pdfRow2);

JArray jArray = (JArray)JsonConvert.DeserializeObject(JsonConvert.SerializeObject(videogames));
jObj.Add(&quot;message&quot;, &quot;转换完成&quot;);
jObj.Add(&quot;rowPdf&quot;, jArray);
Console.WriteLine(jObj.ToString());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;process0id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;05369&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;转换完成&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rowPdf&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pdfname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\TEST\\\\ZP-35-DYT-35N3--竖向图框.dwg&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pdfname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\TEST\\\\图框外有多余线条.dwg&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pdfname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\TEST\\\\弧线标注的圆心在图框外1.dwg&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function g(h,j){const e=o("ExternalLinkIcon");return l(),r("div",null,[u,c,n("p",null,[s("在“解决方案资源管理器”中，右键单击项目，然后选择“管理"),n("a",p,[s("NuGet"),a(e)]),s("程序包”。在NuGet包管理器中，搜索“Newtonsoft.Json”。找到Newtonsoft.Json包，点击安装按钮")]),v,n("ul",null,[m,n("li",null,[n("p",null,[s("除了VS自带的工具，也有一些网站提供了类似的功能，例如"),n("a",b,[s("Json2CSharp"),a(e)]),s("。")]),q])]),k])}const y=i(d,[["render",g],["__file","c_操作json.html.vue"]]);export{y as default};
