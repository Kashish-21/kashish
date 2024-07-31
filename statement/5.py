#Display numbers from a list using loop
#given numbers = [12, 75, 150, 180, 145, 525, 50]

n = [12, 75, 150, 180, 145, 525, 50]

for i in n:
    if i> 500:
        break
    if i>150:
        continue
    elif i % 5 == 0:
         print(i)