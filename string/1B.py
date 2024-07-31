#Write a program to create a new string made of the middle three characters of an input string.
'''Case 1

str1 = "JhonDipPeta"

case+

str2 = "JaSonAy" '''

str1 = "JhonDipPeta"
str2 = "JaSonAy"

print("Original string is:", str1)
print("Original string is:", str2)
l1=len(str1)
l2=len(str2)

midstr1=int(l1/2)   
midstr2=int(l2/2)

res = str1[midstr1 - 1:midstr1 + 2]
res2 = str2[midstr2 - 1:midstr2 + 2]

print("the middle three characters of an input string Str1 is:",res)
print("the middle three characters of an input string str2",res2)