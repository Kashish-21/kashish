'''Removal all characters from a string except integers
Given:


str1 = 'I am 25 years and 10 months old'''

str1 = 'I am 25 years and 10 months old'
print("Original string is", str1)

res = "".join([item for item in str1 if item.isdigit()])

print(res)