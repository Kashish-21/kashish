'''Check if all items in the tuple are the same
tuple1 = (45, 45, 45, 45)'''


def check(t):
    for i in t:
        return all(i == t[0])

tuple1 = (45, 45, 45, 45)
print(check(tuple1))
