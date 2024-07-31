#Write a program that asks users to enter their percentage mark for a module of study.
#The program prints the module grade as either A, B, C, D, E or F depending on the percentage mark entered.
x = int(input("Enter your percentage: "))
if x >= 80:
    print(" you have got A grade")
elif 70<= x <= 79:
    print(" you awarded B grade")
elif 60<= x <= 69:
    print("you awarded C grade")
elif 50<= x <=59:
    print("you are awarded D grade")
elif 40<= x <=49:
    print("you are awarded E grade")
else:
    print(" you are fail")