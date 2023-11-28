# C# json解析与生成json字符串

## 下载newtonsoftjson

在“解决方案资源管理器”中，右键单击项目，然后选择“管理[NuGet](https://so.csdn.net/so/search?q=NuGet&spm=1001.2101.3001.7020)程序包”。在NuGet包管理器中，搜索“Newtonsoft.Json”。找到Newtonsoft.Json包，点击安装按钮

```c#
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
```

## 对于复杂json串

* 对于简单的json的可以直接解析, 复杂的json, 建议用先创建json对应的类，然后再用JsonConvert.DeserializeObject转为类来解析, 当json比较复杂时, 创建类也比较浪费时间， VS2022为C#提供了json转C#类的工具，先复制需要转为类的json字符串，然后将光标定位到cs文件的空白处，最后点击编辑–选择性粘贴–将Json粘贴为类，如下图：

* 除了VS自带的工具，也有一些网站提供了类似的功能，例如[Json2CSharp](https://www.bejson.com/convert/json2csharp/)。

  ### demo

```json
{
	"items": [{
		"id": "csrf",
		"attributes": {
			"nonce key": "CSRF NONCE",
			"nonce": "i8Ah1n1DHs71704s2oZnSxmiz4/R3T5mbFrkxErz4m8RUDf3kyX+ror25kZ09Env0tGeVBe+iES8/Y04XRfAKvghp1/+ZIx09oVE7GiE"
		}
	}]
}
```

### class

```c#
//如果好用，请收藏地址，帮忙分享。
public class Attributes
{
    /// <summary>
    /// 
    /// </summary>
    public string nonce_key { get; set; }
/// <summary>
/// 
/// </summary>
    public string nonce { get; set; }
}

public class ItemsItem
{
    /// <summary>
    /// 
    /// </summary>
    public string id { get; set; }
    /// <summary>
    /// 
    /// </summary>
    public Attributes attributes { get; set; }
}
//Root可以改成自己喜欢的类名
public class CScrfRoot
{
    /// <summary>
    /// 
    /// </summary>
    public List<ItemsItem> items { get; set; }
}
```
### 获取token（nonce）值

```c#
 public static string getTokenFromJson(string strJson)
        {
            string strRet = "";
            //strJson = "{\"items\":[{\"id\":\"csrf\",\"attributes\":{\"nonce key\":\"CSRF NONCE\",\"nonce\":\"i8Ah1n1DHs71704s2oZnSxmiz4/R3T5mbFrkxErz4m8RUDf3kyX+ror25kZ09Env0tGeVBe+iES8/Y04XRfAKvghp1/+ZIx09oVE7GiE\"}}]}";
            var person = JsonConvert.DeserializeObject<CScrfRoot>(strJson);
            List<ItemsItem> listItems = person.items;
            if(listItems.Count >= 1)
            {
                ItemsItem itemsItem = listItems[0];
                Attributes attr = itemsItem.attributes;
                strRet = attr.nonce;
            }
                
            return strRet;
        }
```

## LINQ to JSON主要使用到JObject, JArray, JProperty和JValue这四个对象

- JObject用来生成一个JSON对象，简单来说就是生成”{}”，
- JArray用来生成一个JSON数组，也就是”[]”，
- JProperty用来生成一个JSON数据，格式为key/value的值，
- 而JValue则直接生成一个JSON值

```c#
//将json转换为JObject
JObject jObj = new JObject();
jObj.Add("process0id", AdditionClass.GetDeFaultProjectNo());


PdfRow pdfRow1 = new PdfRow();
pdfRow1.status = "success";
pdfRow1.pdfname = "D:\\ZWPDF\\PDF\\JG-72-BL-LB1.pdf";


PdfRow pdfRow2 = new PdfRow();
pdfRow2.status = "error";
pdfRow2.pdfname = "D:\\ZWPDF\\PDF\\JG-72-BL-LB2.pdf";


List<PdfRow> videogames = new List<PdfRow>();
videogames.Add(pdfRow1);
videogames.Add(pdfRow2);

JArray jArray = (JArray)JsonConvert.DeserializeObject(JsonConvert.SerializeObject(videogames));
jObj.Add("message", "转换完成");
jObj.Add("rowPdf", jArray);
Console.WriteLine(jObj.ToString());
```

```json
{
  "process0id": "05369",
  "message": "转换完成",
  "rowPdf": [
    {
      "status": "error",
      "pdfname": "D:\\TEST\\ZP-35-DYT-35N3--竖向图框.dwg"
    },
    {
      "status": "error",
      "pdfname": "D:\\TEST\\图框外有多余线条.dwg"
    },
    {
      "status": "error",
      "pdfname": "D:\\TEST\\弧线标注的圆心在图框外1.dwg"
    }
  ]
}
```