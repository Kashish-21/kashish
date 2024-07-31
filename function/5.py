#Create an inner function to calculate the addition in the following way
'''
*Create an outer function that will accept two parameters, a and b
*Create an inner function inside an outer function that will calculate the addition of a and b
*At last, an outer function will add 5 into addition and return it'''

def outer_fun(a,b):
    
    def inner_fun(a,b):
        return a+b
    res=inner_fun(a,b)
    res2 = res + 5
    print("Before Additon of 5" ,res)
    return res2
    
res2=outer_fun(20,10)
print("After additon of 5",res2)