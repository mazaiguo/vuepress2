## 导出Git log
### 写周报专用
```c++
git log --merges --pretty=format:"%s" --since=5.days >> ./log.md//导出5天内merge的数据
```
### 获取两个提交之间的log日志
```c++
git log --merges --pretty=format:"%s" --since=5.days >> ./log4.md//导出5天内merge的数据
git log SHA-1_A..SHA-1_B --pretty=format:"%cd:  %s" --date=format:%Y%m%d > changeLog.md//两个SHA值之间的..号不能去掉
git log --pretty=format:"%s<%h>" --since=5.days >> ./log3.md//导出5天内提交的log日志，带简短哈希字串
git log --date=format:%Y-%m-%d --pretty=format:"%an %ad","%s" --since=5.days >> ./log2.md
git log --since=5.days>> ./log1.md
git log --date=format:%Y-%m-%d --pretty=format:"%an %ad","%s" --since="2023.04.28" --until="2023.05.06" >> ./log.md//导出一段时间内的log日志
git log --graph --pretty=format:"%ai , %an: %s" > log.txt
git log --pretty=format:"%ai , %an: %s"
```


|说明| 命令|说明| 命令|
|----|----|----|----|
|指定具体年月日|git log --since="2019-11-21"|指定年|git log --since=2.years|
|指定月|git log --since=2.months|指定周|git log --since=2.weeks|
|指定天|git log --since=2.days|一段时间|git log --date=format:%Y-%m-%d --pretty=format:"%an %ad","%s" --since="2023.04.28" --until="2023.05.06" >> ./log.log|

---
## git log 参数
格式化git提交日志
|选项 |说明|选项 |说明|
|---|---|---|---|
|-p |按补丁格式显示每个更新之间的差异。|--relative-date |使用较短的相对时间显示（比如，“2 weeks ago”）。|
|--stat |显示每次更新的文件修改统计信息。|--abbrev-commit |仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。|
|--shortstat |只显示 --stat 中最后的行数修改添加移除统计。|--graph |显示 ASCII 图形表示的分支合并历史。|
|--name-only |仅在提交信息后显示已修改的文件清单。|--pretty |使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。|
|--name-status |显示新增、修改、删除的文件清单。|

---
<h2>git log --pretty=format:"%h - %an, %ar : %s" 参数</h2>
|选项     |说明|选项     |说明|
| -----| ---- |-----| ---- |
|%H    |提交对象（commit）的完整哈希字串|%ad    |作者修订日期（可以用 -date= 选项定制格式）|
|%h    |提交对象的简短哈希字串|%ar    |作者修订日期，按多久以前的方式显示|
|%T    |树对象（tree）的完整哈希字串|%cn    |提交者(committer)的名字|
|%t    |树对象的简短哈希字串|%ce    |提交者的电子邮件地址|
|%P    |父对象（parent）的完整哈希字串|%cd    |提交日期|
|%p    |父对象的简短哈希字串|%cr    |提交日期，按多久以前的方式显示|
|%an    |作者（author）的名字|%s    |提交说明|
|%ae    |作者的电子邮件地址|



[官网sample](https://www.git-scm.com/docs/git-log#_examples)


