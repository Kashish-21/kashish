'''write a program to create a function show_employee() using the following conditions.

It should accept the employee’s name and salary and display both.
If the salary is missing in the function call then assign default value 9000 to salary'''

def show_employee(name,salary=9000):
      print("Name:", name, "Salary:",salary)
      
      
show_employee("Ram",1200)
show_employee("Sita")