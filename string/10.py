''' Write a program to count occurrences of all characters within a string
Given:

str1 = "Apple"'''

str1 = "Apple"


letter = dict()

for char in str1:
    count = str1.count(char)
    
    letter[char] = count
print('Result:', letter)
