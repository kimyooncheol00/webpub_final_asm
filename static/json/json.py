import json

food_lists = ["두꺼비식당", "청풍떡갈비", "농사꾼의집", "낭만짜장", "우리소", "덩실분식"]
for i in range(12): 
    food_lists.append('randomName'+str(i+1))

json_list = [{"name": food_list} for food_list in food_lists]


sliced_lists = [json_list[i:i+6] for i in range(0, len(json_list), 6)]

for i, sliced_list in enumerate(sliced_lists):
    with open("food_"+str(i+1)+".json", "w", encoding="utf-8") as json_file:
        json.dump(sliced_list, json_file, ensure_ascii=False)

