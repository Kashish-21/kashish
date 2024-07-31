'''Write a program to find the last position of a substring “Emma” in a given string.

Given:

str1 = "Emma is a data scientist who knows Python. Emma works at google."'''


str1 = "Emma is a data scientist who knows Python. Emma works at google."
print("Original String is:", str1)

index = str1.rfind("Emma")
print("Last occurrence of Emma starts at index:", index)
