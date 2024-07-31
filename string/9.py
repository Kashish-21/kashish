'''Given a string s1, write a program to return the sum and average of the digits that appear in the string, ignoring all other characters.'''

#given: str1 = "PYnative29@#8496"



str1 = "PYnative29@#8496"
    
sum=0
count=0
    
for char in str1:
    if char.isdigit():
        sum = sum + int(char)
        count=count+1

Avg = sum / count
  
print("Sum is:", sum, "Average is ",Avg)