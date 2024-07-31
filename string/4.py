'''Given string contains a combination of the lower and upper case letters. Write a program to arrange the characters of a string so that all 
lowercase letters should come first.'''

def string(str1):
    lower = []
    upper = []

 
    for char in str1:
        if char.islower():
            lower.append(char)  
        elif char.isupper():
            upper.append(char)  


    print('Lowercase characters:', lower)
    print('Uppercase characters:', upper)
 
    sorted_str = ''.join(lower + upper)
    print('Result:', sorted_str)
 

str1 = "PyNaTive"
string(str1)

        
        
    
    
    