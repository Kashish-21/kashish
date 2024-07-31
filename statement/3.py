#Calculate the sum of all numbers from 1 to a given number.
s=0; ''' to store the sum of the numbers'''
n=int(input("enter the number"))

for i in range(1,n+1,1):
    s= s+i
print(" the value enter by the user is :" ,n)
print(" And ther sum of all the number from 1 to entered number is :", s)