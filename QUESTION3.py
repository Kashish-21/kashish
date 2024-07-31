'''Write a program that asks users to enter their percentage mark for a module of study.
The program prints the module grade as either distinction, merit, pass or fail depending on the percentage mark entered
A mark of 70% and above is awarded a distinction.
A mark in the range of 60% through to 69% is awarded a merit.
A mark in the range of 40% through to 59% is awarded a pass.
Marks less than 40% are awarded a fail'''

x= int(input("Enter your percentage mark: "))
if x >= 70:
    print(" you awarded distinction")
elif 60<= x <= 69:
    print("you awarded merit")
elif 40<= x <=59:
    print("you are awarded pass")
else:
    print(" you are fail")
