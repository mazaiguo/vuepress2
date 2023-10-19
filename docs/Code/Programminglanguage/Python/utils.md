# Utils实用工具

## 将文件夹下的md文件导出为Vuepress的md文件

### 代码如下所示：

```python
import os
import sys
import glob


# 使用os模块的walk函数，搜索出指定目录下的全部PDF文件
# 获取同一目录下的所有PDF文件的绝对路径
def getFileName(filedir):
    file_list = [
        os.path.join(root, filespath)
        for root, dirs, files in os.walk(filedir)
        for filespath in files
        if str(filespath).endswith("md")
        and "README" not in str(filespath)
        and "README.md" not in str(filespath)
    ]
    return file_list if file_list else []


# 获取当前脚本目录
def get_current_file_path():
    abs_file = sys.argv[0]
    windows_path = abs_file.replace("/", "\\")
    windows_path = windows_path[: windows_path.rfind("\\")]
    return windows_path


# 获取当前文件下的所有md文件名并写入README中，如果文件名包含docs会出bug
def outputAllInfo(path):
    file_list = getFileName(path)
    contents = []
    sidebar = []
    for file in file_list:
        windows_path = file.replace("\\", "/")
        # 项目都以docs为根节点，那么解析的时候用docs做标记截断
        filePathname = windows_path.split(":")[-1].split(".")[0]
        filePathname = filePathname.split("docs/")[-1]
        filename = windows_path.split(":")[-1].split(".")[0].split("/")[-1]
        str1 = '<li><router-link to="%s.html">%s</router-link></li>' % (
            filePathname,
            filename,
        )
        # print(str )
        contents.append(str1)
        sider = "{ text: '%s', link: '%s' }," % (filename, filePathname)
        sidebar.append(sider)

    readmefile = path + "\\README.log"
    writeContentToReadMe(contents, readmefile)
    outputsidebarInfo(sidebar, path)


# 只导出当前文件夹下的md文件名，不导出子文件夹的信息
def outputCurrentInfo(path):
    filterpath = path + "\\*.md"
    file_list = glob.glob(filterpath)
    file_list = [
        file
        for file in file_list
        if "README.md" not in str(file)
    ]
    contents = []
    sidebar = []
    for file in file_list:
        windows_path = file.replace("\\", "/")
        # 项目都以docs为根节点，那么解析的时候用docs做标记截断
        filePathname = windows_path.split(":")[-1].split(".")[0]
        filePathname = filePathname.split("docs/")[-1]
        filename = windows_path.split(":")[-1].split(".")[0].split("/")[-1]
        str1 = '<li><router-link to="%s.html">%s</router-link></li>' % (
            filePathname,
            filename,
        )
        contents.append(str1)
        sider = "{ text: '%s', link: '%s' }," % (filename, filePathname)
        sidebar.append(sider)
    readmefile = path + "\\README.md"
    writeContentToReadMe(contents, readmefile)
    outputsidebarInfo(sidebar, path)


# 将当前文件夹下的md文件名写入README中
def writeContentToReadMe(contents, readmefile):
    if os.path.exists(readmefile):
        os.remove(readmefile)

    with open(readmefile, "w", encoding="utf-8") as f:
        for content in contents:
            content += "\n"
            f.write(content)


# 导出sidebar中的信息
def outputsidebarInfo(sidebar, path):
    sidebarfile = path + "\\sidebar.log"
    if os.path.exists(sidebarfile):
        os.remove(sidebarfile)

    with open(sidebarfile, "w", encoding="utf-8") as f:
        for sider in sidebar:
            sider += "\n"
            f.write(sider)

#在.gitignore中忽略 *.log
if __name__ == "__main__":
    path = get_current_file_path()
    outputAllInfo(path)
    outputCurrentInfo(path)

```

### 打包方式

```bash
-F -i 22.ico .\exportmdforvuepress.py
```

### 使用方式

将`exportmdforvuepress.exe`放到需要生成README文件夹下，在`cmd`中运行