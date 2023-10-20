# libcurl_Post_json乱码

```cpp
string GBKToUTF8(const std::string& strGBK)
{
	string strOutUTF8 = "";
	WCHAR * str1;
	int n = MultiByteToWideChar(CP_ACP, 0, strGBK.c_str(), -1, NULL, 0);
	str1 = new WCHAR[n];
	MultiByteToWideChar(CP_ACP, 0, strGBK.c_str(), -1, str1, n);
	n = WideCharToMultiByte(CP_UTF8, 0, str1, -1, NULL, 0, NULL, NULL);
	char * str2 = new char[n];
	WideCharToMultiByte(CP_UTF8, 0, str1, -1, str2, n, NULL, NULL);
	strOutUTF8 = str2;
	delete[]str1;
	str1 = NULL;
	delete[]str2;
	str2 = NULL;
	return strOutUTF8;
}

static size_t downloadCallback(void *buffer, size_t sz, size_t nmemb, void *writer)
{
	string* psResponse = (string*) writer;
	size_t size = sz * nmemb;
	psResponse->append((char*) buffer, size);

	return sz * nmemb;
}


CURLcode CMyConnectUrl::run()
{
	CURLcode res;
	string content;
	m_curl = curl_easy_init();  
	curl_easy_setopt(m_curl, CURLOPT_SSL_VERIFYPEER, FALSE);//设置不验证ssl
	curl_easy_setopt(m_curl, CURLOPT_CUSTOMREQUEST, "POST");

	//curl_easy_setopt(m_curl, CURLOPT_CUSTOMREQUEST, "GET");
	USES_CONVERSION;
	string strUrl(W2A(m_strUrl));
	curl_easy_setopt(m_curl, CURLOPT_URL, strUrl.c_str());
	curl_easy_setopt(m_curl, CURLOPT_FOLLOWLOCATION, 1L);
	/*curl_easy_setopt(m_curl, CURLOPT_TIMEOUT, 2);*/

	curl_easy_setopt(m_curl, CURLOPT_DEFAULT_PROTOCOL, "https");

	struct curl_slist *headers = NULL;
	//headers = curl_slist_append(headers, "Content-Type: application/json");

	string strAuth(W2A(m_strAuth));
	headers = curl_slist_append(headers, strAuth.c_str());
	headers = curl_slist_append(headers, "Content-Type: application/json; charset=utf-8");
	headers = curl_slist_append(headers, "Accept-Encoding: gzip,deflate");    //设置Accept-Encoding
	curl_easy_setopt(m_curl, CURLOPT_HTTPHEADER, headers);
	string jsonout = GBKToUTF8(W2A(m_strData));//json数据需要转换
	curl_easy_setopt(m_curl, CURLOPT_POSTFIELDS, jsonout.c_str());
	curl_easy_setopt(m_curl, CURLOPT_WRITEFUNCTION, downloadCallback); 
	curl_easy_setopt(m_curl, CURLOPT_WRITEDATA, &content);
	res = curl_easy_perform(m_curl);

	if(res == CURLE_OK)  
		m_strContent = UTF8ToUnicode((char*)content.c_str());  
	else
	{
		fprintf(stderr, "curl_easy_perform() failed: %s\n",curl_easy_strerror(res));
	}
	curl_easy_cleanup(m_curl);  
	return res;
}
```

