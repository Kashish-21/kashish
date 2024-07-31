'''Given two strings, s1 and s2. Write a program to create a new string s3 by appending s2 in the middle of s1.

Given:

s1 = "Ault"
s2 = "Kelly" '''

def append_middle(s1, s2):
    print("Original Strings are", s1, s2)

    mi = int(len(s1) / 2)
    x = s1[:mi:]     #x=aul
    x = x + s2      #x= aul+ kelly
    x = x + s1[mi:]
    print("After appending new string in middle:", x)

append_middle("Ault", "Kelly")
 