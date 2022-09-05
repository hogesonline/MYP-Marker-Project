from pyexcel_xlsx import get_data;
import json;

data = get_data(r'''All_the_marking.xlsx''')
sheetName = input("Sheet name? ")

data_list = []
# Iterate through each row and append in above list
keys = data[sheetName][0]
for i in range(1, len(data[sheetName])):
    dic = {}
    for col,key in enumerate(keys):
        print(key, data[sheetName][i][col])
        dic[key] = str(data[sheetName][i][col]).replace(u'\xa0',u' ')
    
    data_list.append(dic)
print(data_list)

data_list = {'results': data_list} # Converting to required object
j = json.dumps(data_list)
# Write to file
with open(f'{sheetName}.js', 'w') as f:
    f.write('data = ')
    f.write(j)

