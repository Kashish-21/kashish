#Write a program to create function func1() to accept a variable length of arguments and print their value.

def func1(*args):
    for i in args:
        print(i)

func1(20, 40, 60)
func1(80, 100)