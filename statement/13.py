#Find the factorial of a given number 5

num = 5
fact = 1
if num == 0:
    print("The factorial of 0 is 1")
else:
    for i in range(1, num + 1):
        fact = fact * i
    print("The factorial of", num, "is", fact)
