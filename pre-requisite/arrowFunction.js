// let birthyear = [2000,2001,2002,2003,2004,2005]

// age = birthyear.Map(function(el,index,Array){
//     return 2024 - el
// })

// console.log(age)


// age2=birthyear.Map(el=> 2024-el)
// console.log(age2)



// let tav = {
//     firstName:"Tavish",
//     lastName:"anade",
//     age:20,
//     displayName(){
//         console.log(`${this.firstName} ${this.lastName}`)

//         let displayName2 = function(){
//             console.log(`${this.firstName}  ${this.lastName}`)  // no scope for this  so it will refer to the window object
//         }
//         displayName2()


//     }
// }
// tav.displayName()


let tav = {
    firstName:"Tavish",
    lastName:"anade",
    age:20,
    displayName(){
        console.log(`${this.firstName} ${this.lastName}`)

        let displayName2 = ()=>{
            console.log(`${this.firstName}  ${this.lastName}`)  
        }
        displayName2()


    }
}
tav.displayName()



