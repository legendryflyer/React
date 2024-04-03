let names=["tavish","ankit","amit"]

let names2=[...names,"jhon"] // add new element at last
console.log(names2)

let names3=["jan",...names] // add new element at first 
console.log(names3)


// [11,22,33]---->11,22,33
// 11,22,33 ---->[11,22,33]


let city = ["new york","london", "paris", "berlin", "tokyo"]

let [a,...cities] = city
console.log(a)
console.log(cities)

