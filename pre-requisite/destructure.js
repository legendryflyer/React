let names=["tavish","ankit","amit"]
let a=names[0]
let b=names[1]
let c=names[2]
console.log(a,b,c) 


let [a1,a2,a3] = names
console.log("Using array destructuring",a1,a2,a3) //  Using array destructuring tavish ankit amit


let info = {
    firstname: "Tavish",
    lastname:"anade",
    country :"India",
    city : "Bangalore",
    age:20
}

let values = Object.values(info)
console.log(values)  // return all the values in a object as an array ["Tavish","Anade","India","Bangalore",20]
console.log("Object Values ",values)   // Output - ["Tavish", "anade", "India", "Bangalore", 20]

let {firstname:fn ,lastname:ln,country:con,city:ct,age:ag } = info
console.log(ln)  // object destructure 





