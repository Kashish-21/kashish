'''Given two strings, s1 and s2, write a program to return a new string made of s1 and s2’s first, middle, and last characters.

Given:

s1 = "America"
s2 = "Japan"   '''

def string(s1,s2):
    
    
    l1=(len(s1))
    l2=(len(s2))
    res= s1[0]+s2[0]

    mi = int(len(s1) / 2)
    mi1 = int(len(s2)/2)
    
    res= res+ s1[mi]+s2[mi1]

    x = s1[l1 - 1]
    y=s2[l2 - 1]
    res= res+ x+y
    print(res)
s1 ="America"
s2 ="Japan"    
string(s1,s2)