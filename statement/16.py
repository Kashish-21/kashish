'''Calculate the cube of all numbers from 1 to a given number
Write a program to rint the cube of all numbers from 1 to a given number

Given: input_number = 6'''

input_number = 6
for i in range(1, input_number + 1):
    print("Current Number is :", i, " and the cube is", (i * i * i))