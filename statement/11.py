'''Write a program to display all prime numbers within a range'''
''' range
start = 25
end = 50'''

start = 25
end = 50
print("Prime numbers between", start, "and", end, "are:")

for n in range(start, end + 1):
   
    if n > 1:
        for i in range(2, n):
            if (n % i) == 0:
                break
        else:
            print(n)