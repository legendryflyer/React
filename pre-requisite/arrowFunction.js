let birthyear = [2000,2001,2002,2003,2004,2005]

age = birthyear.Map(function(el,index,Array){
    return 2024 - el
})

console.log(age)


age2=birthyear.Map(el=> 2024-el)
console.log(age2)



