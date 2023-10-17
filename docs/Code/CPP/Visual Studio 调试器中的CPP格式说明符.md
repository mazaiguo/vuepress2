查看UTF-8的值，s8比较有用

## 设置格式说明符

我们将使用以下示例代码：

cpp复制

```cpp
int main() {
    int my_var1 = 0x0065;
    int my_var2 = 0x0066;
    int my_var3 = 0x0067;
}
```

调试期间，将 `my_var1` 变量添加到“监视”窗口，“调试”>“窗口”>“监视”>“监视 1”。 接下来，右键单击变量，然后选择“十六进制显示”。 现在，“监视”窗口显示值 0x0065。 若要查看以字符而不是整数形式表达的此值，请先右键单击并取消选择“十六进制显示”。 然后，在“名称”列的变量名称之后添加字符格式说明符“, c”。 现在，“值”列显示“101 'e'”。

![Visual Studio“监视”窗口的屏幕截图，其中选中的行显示 my_var1.c，值为 101 'e'，类型为 int。](https://learn.microsoft.com/zh-cn/visualstudio/debugger/media/watchformatcplus1.png?view=vs-2019)



可以通过将逗号 (,) 追加到“监视”窗口中的值来查看可用格式说明符列表并从中进行选择。

![WatchFormatSpecDropdown](https://learn.microsoft.com/zh-cn/visualstudio/debugger/media/vs-2019/format-specs-cpp.png?view=vs-2019)



## 格式说明符

下表介绍可以在 Visual Studio 中使用的格式说明符。 仅新调试器支持加粗的说明符，但 cpp/CLI 的互操作调试不支持。

| 说明符     | 格式                                                         | 原始监视值                                  | 显示的值                                                   |
| :--------- | :----------------------------------------------------------- | :------------------------------------------ | :--------------------------------------------------------- |
| d          | 十进制整数                                                   | 0x00000066                                  | 102                                                        |
| o          | 无符号的八进制整数                                           | 0x00000066                                  | 000000000146                                               |
| x  **h**   | 十六进制整数                                                 | 102                                         | 0xcccccccc                                                 |
| X  **H**   | 十六进制整数                                                 | 102                                         | 0xcccccccc                                                 |
| xb  **hb** | 十六进制整数（没有前导 0x）                                  | 102                                         | cccccccc                                                   |
| Xb  **Hb** | 十六进制整数（没有前导 0x）                                  | 102                                         | CCCCCCCC                                                   |
| b          | 无符号二进制整数                                             | 25                                          | 0b00000000000000000000000000011001                         |
| bb         | 无符号二进制整数（没有前导 0b）                              | 25                                          | 00000000000000000000000000011001                           |
| e          | 科学记数法                                                   | 25000000                                    | 2.500000e+07                                               |
| g          | 科学记数或浮点（以较短者为准）                               | 25000000                                    | 2.5e+07                                                    |
| c          | 单个字符                                                     | 0x0065                                      | 101 'e'                                                    |
| s          | const char* 字符串（加引号）                                 |  "hello world"                    | "hello world"                                              |
| **sb**     | const char * 字符串（无引号）                                |  "hello world"                    | hello world                                                |
| ==s8==     | UTF-8 字符串                                                 |  "This is a UTF-8 coffee cup â˜•" | "This is a UTF-8 coffee cup ☕"                             |
| **s8b**    | UTF-8 字符串（无引号）                                       |  "hello world"                    | hello world                                                |
| su         | Unicode（UTF-16 编码）字符串（加引号）                       |  L"hello world"                   | L"hello world"  u"hello world"                             |
| sub        | Unicode（UTF-16 编码）字符串（无引号）                       |  L"hello world"                   | hello world                                                |
| bstr       | BSTR 二进制字符串（加引号）                                  |  L"hello world"                   | L"hello world"                                             |
| env        | 环境块（双空终止字符串）                                     |  L"=::=::\\"                      | L"=::=::\\\0=C:=C:\\windows\\system32\0ALLUSERSPROFILE=... |
| **s32**    | UTF-32 字符串（加引号）                                      |  U"hello world"                   | u"hello world"                                             |
| **s32b**   | UTF-32 string (no quotation marks)                           |  U"hello world"                   | hello world                                                |
| **en**     | enum                                                         | Saturday(6)                                 | 星期六                                                     |


 备注

如果存在 hv 格式说明符，调试器会尝试确定缓冲区的长度并显示相应的元素数。 由于调试器并非总是可以查找确切的数组缓冲区大小，只要可能时，就应该使用大小说明符 `(pBuffer,[bufferSize])` 。 当缓冲区大小尚不可用时，hv 格式说明符很有用。



### 指针的大小说明符作为数组

如果有一个指针指向要看做数组形式的对象，则可以使用一个整数或表达式来指定数组中元素的数量。

| 说明符        | 格式                                    | 原始监视值                      | 显示的值                                        |
| :------------ | :-------------------------------------- | :------------------------------ | :---------------------------------------------- |
| n             | 十进制或 **十六进制** 整数              | pBuffer,[32]  pBuffer，“[0x20]” | 将 `pBuffer` 显示为一个 32 元素的数组。         |
| **[exp]**     | 计算结果为一个整数的有效的 cpp 表达式。 | pBuffer,[bufferSize]            | 将 pBuffer 显示为 `bufferSize` 元素的一个数组。 |
| **expand(n)** | 计算结果为一个整数的有效的 cpp 表达式。 | pBuffer, expand(2)              | 显示 `pBuffer` 的第三个元素                     |



## 使用 cpp/CLI 的互操作调试的格式说明符

**粗体** 的说明符仅支持本地调试和 cpp/CLI 代码。 这些说明符需要使用[托管兼容模式](https://learn.microsoft.com/zh-cn/visualstudio/debugger/general-debugging-options-dialog-box?view=vs-2019)指定的旧版调试器。



### cpp/CLI 互操作调试中的内存位置格式说明符

下表介绍用于内存位置的格式化符号。 可以使用带有计算为位置的任何值或表达式的内存位置说明符。

**粗体** 的说明符仅支持本地调试和 cpp/CLI 代码。 这需要使用[托管兼容模式](https://learn.microsoft.com/zh-cn/visualstudio/debugger/general-debugging-options-dialog-box?view=vs-2019)指定的旧版调试器。



### 指针的大小说明符，并且指针在使用 cpp/CLI 进行的互操作调试中作为数组存在

如果有一个指针指向要看做数组形式的对象，则可以使用一个整数来指定数组中元素的数量。

| 说明符 | 格式       | 表达式      | 显示的值                              |
| :----- | :--------- | :---------- | :------------------------------------ |
| n      | 十进制整数 | pBuffer[32] | 将 `pBuffer` 显示为 32 个元素的数组。 |



https://learn.microsoft.com/zh-cn/visualstudio/debugger/format-specifiers-in-cpp?view=vs-2019