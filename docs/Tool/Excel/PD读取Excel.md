# PD读取Excel

## 命令行安装pandas

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple python-office -U
pip install pandas numpy python-dateutil pytz
```

## pd生成Excel

```python
import numpy as np
import pandas as pd
# pd.read_excel('fake2excel.xlsx', index_col=0)

user_data = {'first_name': ['Sammy', 'Jesse', np.nan, 'Jamie'],
        'last_name': ['Shark', 'Octopus', np.nan, 'Mantis shrimp'],
        'online': [True, np.nan, False, True],
        'followers': [987, 432, 321, np.nan]}

df = pd.DataFrame(user_data, columns = ['first_name', 'last_name', 'online', 'followers'])
# 让我们首先使用dropna()删除缺失的值。
df_drop_missing = df.dropna()
# 作为删除值的替代方法，我们可以使用我们选择的值填充缺失值
df_fill = df.fillna(0)
print(df_fill)

# 将数据写入Excel文件
df_fill.to_excel('test_df_fill.xlsx', index=False)
```

## pandas读取Excel

```python
import pandas as pd
df = pd.read_excel('D:\\XXX处理机接口-new.xlsx', sheet_name=None)

for i in df.keys():
    print('head:'+ i)
    # df[i].head只打印excel文件前几行数据
    # print(df[i].head())
    # 按行导出json
    # print(df[i].to_json(orient ='index', force_ascii=False))
     # 将数据重新导出到json文件
    with open(i + '.json', 'w', encoding='utf-8') as f:
        f.write(df[i].to_json(orient ='index', force_ascii=False))
    print(df[i])
```

还可以使用 `df.shape` 来查看 DataFrame 的行数和列数，使用 `df.columns` 来查看 DataFrame 的列名，使用 `df.info()` 来查看 DataFrame

## 导出到csv文件

###  DataFrame数据导出

```python
# index=0，忽略索引；header=0，忽略表头；mode='a'，可追加
df.to_csv(data_output_path, index=0, header=0, sep='\t', float_format='%.4f', mode='a', encoding='gbk')
# columns可以指定要保存的列
df.to_csv(data_output_path, columns=['score']) 
df[['uid', 'score']].to_csv(data_output_path, index=None)
```

### dict数据导出

```python
df = pd.DataFrame([[app_name, cnt] for app_name, cnt in temp_dict.items()])
df.columns = ['app_name', 'cnt']
df = df.sort_values(by=['cnt'], ascending=[False])
df.to_csv(output_file, index=None)
```

## 导出到excel文件

```python
data.to_excel(data_output_path, index=False)
# 或：多个sheet页面
# 生成一个excelWriter
writer = pd.ExcelWriter('./tmpData/conclusion.xlsx')
result_df.to_excel(writer, sheet_name='sheet_1', header=name_list, index=False)
writer.save()
```

