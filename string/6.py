'''Given two strings, s1 and s2. Write a program to create a new string s3 made of the first char of s1, then the last char of s2, Next, the second char of s1 and second last char of s2, and so on. Any leftover chars go at the end of the result.

Given:

s1 = "Abc"
s2 = "Xyz" '''

def string(s1, s2):
    l1 = len(s1)  # s1 ki length
    l2 = len(s2)  # s2 ki length

    length = l1 if l1 > l2 else l2  # Dono me se badi length find karna
    result = ""  # Final result store karne ke liye empty string

    s2 = s2[::-1]  # s2 ko reverse karna

    for i in range(length):
        if i < l1:
            result = result + s1
