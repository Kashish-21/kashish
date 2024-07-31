'''
Write a program to find all occurrences of “USA” in a given string ignoring the case.

Given:

str1 = "Welcome to USA. usa awesome, isn't it?"
'''


def find_usa_occurrences(str1):
   
    
    lower = str1.lower()
    print("Converted to lowercase:",lower)  
    
   
    count = str1.count("usa")
    print(f"Occurrences of 'usa': {count}")  
    


str1 = "Welcome to USA. usa awesome, isn't it?"


occurrences = find_usa_occurrences(str1)
print(f"The number of occurrences of 'USA': {occurrences}")
