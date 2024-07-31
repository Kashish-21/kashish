
''' Count all letters, digits, and special symbols from a given string
Given:

str1 = "P@#yn26at^&i5ve"'''

def string(s1):
    alphabet=[]
    digits=[]
    symbols=[]
     
    for char in s1:
        if char.isalpha():
            alphabet.append(char)  
        elif char.isdigit():
            digits.append(char)  
        else:
            symbols.append(char)
            
    print('alphabet characters:', alphabet)
    print('digits characters:',digits)    
    print('special symbol characters:',symbols)  
    
    l=(len(alphabet))       
    l1=(len(digits))
    l3=(len(symbols))
    
    print("Total number of alphabets in the strings are:", l)
    print("Total number of digits in the strings are:", l1)
    print("Total number of symbols in the strings are:", l3)
s1="P@#yn26at^&i5ve"
string(s1)

