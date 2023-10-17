@[TOC](文章目录)

---

# 前言

例如：学习rapidjson的解析和读写，然后发现在string下使用没有问题，但是换到CString后出现了很多问题，主要是中文的读写乱码问题。要解决中文读写，那么就需要处理rapidjson在UNICODE下的读写，程序里提供了wchar_t的操作，我们仅需要将SourceEncoding和TargetEncoding进行设置。

---

# 一、rapidjson是什么？
示例：rapidjson 是腾讯开源的一个高效的C++ JSON解析器及生成器。

# 二、使用步骤
## 引入库
代码如下（示例）：[源码：https://github.com/Tencent/rapidjson/](https://github.com/Tencent/rapidjson/)
将所有的库里面的所有头文件添加到项目里就可以使用。

## 示例数据

```
{
    "Info": [
        {
            "name": "钢管",
            "code": "01010101",
            "spec": "无缝钢管（SMLS）"
        },
        {
            "name": "钢管",
            "code": "01010102",
            "spec": "直缝埋弧焊钢管（SAWL）"
        },
        {
            "name": "钢管",
            "code": "01010103",
            "spec": "螺旋缝埋弧焊钢管（SAWH）"
        },
        {
            "name": "钢管",
            "code": "01010104",
            "spec": "高频电阻焊管（HFW）"
        },
        {
            "name": "弯头",
            "code": "01020101",
            "spec": "90°长半径弯头(R=1.5D)"
        }
    ]
}

```
## 读入数据

代码如下：
```c
#include "RapidJson/document.h"
#include "RapidJson/writer.h"
#include "RapidJson/prettywriter.h"
using namespace rapidjson;
typedef GenericDocument<UTF16<> > DocumentW;
typedef GenericValue<UTF16<> > ValueW;
std::map<CString, CString> CUtility::GetCodeByGuigeBiao()
{
        map<CString, CString> mpInfo;
        CString strFile = CUtility::GetAppPath() + _T("DL.json");
        CStdioFile ReadF;
		if (!ReadF.Open(strFile, CFile::modeRead))
		{
			return;
		}
		CString strTemp,strData;
		while (ReadF.ReadString(strTemp))
		{
			strData += strTemp;
		}
		ReadF.Close();
        delete temp;  
        DocumentW dom;
        CString strType,strCode,strName,strGuige, strValue;
        //DocumentW::AllocatorType& allocator = dom.GetAllocator();
        if (!dom.Parse(strData).HasParseError())
        {
                if(dom.HasMember(_T("Info")) && dom[_T("Info")].IsArray())
                {
                        const ValueW& arr = dom[_T("Info")];
                        size_t len = arr.Size();
                        for(size_t i = 0; i < len; i++)
                        {
                               const ValueW& object = arr[i];
                               //为防止类型不匹配，一般会添加类型校验
                               if(object.IsObject())
                               {
                                       if(object.HasMember(_T("name")) &&  object[_T("name")].IsString())
                                       {
                                             strName = object[_T("name")].GetString();
                                       }
                                       if(object.HasMember(_T("code")) &&  object[_T("code")].IsString())
                                       {
                                             strCode = object[_T("code")].GetString();
                                       }
                                       if(object.HasMember(_T("spec")) &&  object[_T("spec")].IsString())
                                       {
                                             strGuige = object[_T("spec")].GetString();
                                       }
                                       strName.Replace(_T(" "), _T(""));
                                       strGuige.Replace(_T(" "), _T(""));
                                       if (strName.IsEmpty() && strGuige.IsEmpty())
                                       {
                                              continue;
                                       }
                                       if (strGuige.IsEmpty())
                                              strValue = strName;
                                       else
                                              strValue = strName + _T(",") + strGuige;
                                       mpInfo[strValue] = strCode;
                               }
                        }
                }
        }
        return mpInfo;
}
```
## 写入数据

代码如下（示例）：
```c
#include "RapidJson/document.h"
#include "RapidJson/writer.h"
#include "RapidJson/prettywriter.h"
using namespace rapidjson;
typedef GenericStringBuffer<UTF16<> > StringBufferW;
bool CGetFiberNoBySpec::writeInfoToJson()
{
        StringBufferW strBuf;
        PrettyWriter<StringBufferW, UTF16<>, UTF16<> > writer(strBuf);  //PrettyWriter是格式化的json(自动换行)
        //rapidjson::Writer<rapidjson::StringBuffer> writer(strBuf);
        writer.StartObject();
        //5.5 结构体数组
        writer.Key(_T("Info"));
        writer.StartArray();
        for (auto iter = m_Vec.begin(); iter != m_Vec.end(); ++iter)
        {
               CellInfo cell = *iter;
               writer.StartObject();
               writer.Key(_T("name"));
               writer.String(cell.strName);
               writer.Key(_T("code"));
               writer.String(cell.strCode);
               writer.Key(_T("spec"));
               writer.String(cell.strSpec);
               writer.EndObject();
        }
        
        writer.EndArray();
        writer.EndObject();
    	strBuf.GetString();//获取json字符串
        return true;
}
```


---

## 其它说明

writer.**StartObject**() 对应**{}**

writer.**EndArray**() 对应**[]**



```c++
{"FUNCTIONID":"ZPLM001","MATNR":"8FJG.050.1110","O_DATA":[{"TABLETYPE":"配置表","TABLE":[{"ROWID":"1","CONTENT":[{"VALUE":"代号"},{"VALUE":"序6"},{"VALUE":"序7"}]},{"ROWID":"2","CONTENT":[{"VALUE":"5FJ.671.3858"},{"VALUE":"5FJ.671.8549"},{"VALUE":"5FJ.674.8245"}]},{"ROWID":"3","CONTENT":[{"VALUE":"5FJ.671.3874"},{"VALUE":"5FJ.671.8550.1"},{"VALUE":"5FJ.674.8246.1"}]},{"ROWID":"4","CONTENT":[{"VALUE":"5FJ.671.4123"},{"VALUE":"5FJ.671.8551.1"},{"VALUE":"5FJ.674.8247.1"}]}]},{"TABLETYPE":"明细表","TABLE":[{"ROWID":"1","CONTENT":[{"VALUE":"^"},{"VALUE":"序号"},{"VALUE":"代号"},{"VALUE":"名称"},{"VALUE":"数量"},{"VALUE":"单位"},{"VALUE":"材质"},{"VALUE":"备注"}]},{"ROWID":"2","CONTENT":[{"VALUE":"1"},{"VALUE":"1"},{"VALUE":"1000017647"},{"VALUE":"NSK 轴承  6206-2Z"},{"VALUE":"2"},{"VALUE":"盘"},{"VALUE":""},{"VALUE":""}]},{"ROWID":"3","CONTENT":[{"VALUE":"2"},{"VALUE":"2"},{"VALUE":"1000002497"},{"VALUE":"垫圈 8"},{"VALUE":"6"},{"VALUE":"个"},{"VALUE":""},{"VALUE":""}]},{"ROWID":"4","CONTENT":[{"VALUE":"3"},{"VALUE":"3"},{"VALUE":"1000017649"},{"VALUE":"螺栓M8*30"},{"VALUE":"6"},{"VALUE":"个"},{"VALUE":""},{"VALUE":""}]},{"ROWID":"5","CONTENT":[{"VALUE":"4"},{"VALUE":"4"},{"VALUE":"8FJ.013.6314"},{"VALUE":"端盖"},{"VALUE":"1"},{"VALUE":"件"},{"VALUE":""},{"VALUE":""}]},{"ROWID":"6","CONTENT":[{"VALUE":"5"},{"VALUE":"5"},{"VALUE":"5FJ.354.6154"},{"VALUE":"接线盒(铸铁)"},{"VALUE":"1"},{"VALUE":"件"},{"VALUE":"借YE5-132"},{"VALUE":""}]},{"ROWID":"7","CONTENT":[{"VALUE":"6"},{"VALUE":"6"},{"VALUE":"见表"},{"VALUE":"定子"},{"VALUE":"1"},{"VALUE":"件"},{"VALUE":""},{"VALUE":""}]},{"ROWID":"8","CONTENT":[{"VALUE":"7"},{"VALUE":"7"},{"VALUE":"见表"},{"VALUE":"转子"},{"VALUE":"1"},{"VALUE":"件"},{"VALUE":""},{"VALUE":""}]},{"ROWID":"9","CONTENT":[{"VALUE":"8"},{"VALUE":"8"},{"VALUE":"1000002466"},{"VALUE":"垫圈 5"},{"VALUE":"3"},{"VALUE":"个"},{"VALUE":"Q235-A 镀锌"},{"VALUE":""}]},{"ROWID":"10","CONTENT":[{"VALUE":"9"},{"VALUE":"9"},{"VALUE":"1000006255"},{"VALUE":"螺栓M16*35"},{"VALUE":"8"},{"VALUE":"个"},{"VALUE":""},{"VALUE":""}]},{"ROWID":"11","CONTENT":[{"VALUE":"10"},{"VALUE":"10"},{"VALUE":"1000002495"},{"VALUE":"垫圈 5"},{"VALUE":"3"},{"VALUE":"个"},{"VALUE":"65Mn"},{"VALUE":""}]}]}]}

CString CExportJson::writeJson()
{
	//处理配置表信息
	CGetZwConTable getConTable;
	getConTable.openFile();
	map<CString, AcDbObjectId> conTableMp = getConTable.getAllTableName();

	CString strTitleName;
	vector<vector<pair<CString, CString>>> bomInfo = getBomInfo(strTitleName);

	StringBufferW strBuf;
	rapidjson::Writer<StringBufferW, UTF16<>, UTF16<> > writer(strBuf);
	writer.StartObject();

	writer.Key(_T("FUNCTIONID"));
	writer.String(_T("ZPLM001"));

	writer.Key(_T("MATNR"));
	writer.String(strTitleName);

	//5.5 结构体数组
	writer.Key(_T("O_DATA"));
	writer.StartArray();
	//////////////////////////////////////////////////////////////////////////
	//处理配置表信息
	writer.StartObject();
	for (auto iter : conTableMp)
	{
		vector<vector<pair<CString, CString> > > conTableVec = getConTable.getTableDataByName(iter.first);
		parseTableInfo(conTableVec, writer);
	}
	writer.EndObject();
	//处理明细表数据
	writer.StartObject();
	parseTableInfo(bomInfo, writer, _T("明细表"));
	writer.EndObject();

	writer.EndArray();
	writer.EndObject();

	CString strOut = strBuf.GetString();
	acutPrintf(strOut);

	return strOut;
}


void CExportJson::parseTableInfo(const vector<vector<pair<CString, CString>>>& vecMp,
 rapidjson::Writer<StringBufferW, UTF16<>, UTF16<>>& writer, CString strHeader)
{
	int nRow = 1;
	writer.Key(_T("TABLETYPE"));
	writer.String(strHeader);
	writer.Key(_T("TABLE"));
	writer.StartArray();
	bool bIsFirst = true;
	for (auto it : vecMp)
	{
		vector<pair<CString, CString> > tmpVec = it;
		if (bIsFirst)
		{
			parseCellInfo(writer, tmpVec, _T("1"), true);
			bIsFirst = false;
		}

		CString strIndex;
		strIndex.Format(_T("%d"), ++nRow);
		parseCellInfo(writer, tmpVec, strIndex);
	}
	writer.EndArray();
}

void CExportJson::parseCellInfo(rapidjson::Writer<StringBufferW, UTF16<>, UTF16<>>& writer, 
	const vector<pair<CString, CString> >& tmpVec, CString strIndex, bool bIsFirst)
{
	writer.StartObject();
	writer.Key(_T("ROWID"));
	writer.String(strIndex);
	writer.Key(_T("CONTENT"));
	writer.StartArray();
	for (auto iir : tmpVec)
	{
		writer.StartObject();
		writer.Key(_T("VALUE"));
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

```



#  后记

希望对遇到同样问题的人有所帮助。