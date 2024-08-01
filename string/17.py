'''Find words with both alphabets and numbers
Write a program to find words with both alphabets and numbers from an input string.

Given:

str1 = "Emma25 is Data scientist50 and AI Expert"'''

str1 = "Emma25 is Data scientist50 and AI Expert"
print("The original string is : " + str1)

res = []
temp = str1.split()

for item in temp:
    if any(char.isalpha() for char in item) and any(char.isdigit() for char in item):
        res.append(item)

print("Displaying words with alphabets and numbers")
for i in res:
    print(i)
