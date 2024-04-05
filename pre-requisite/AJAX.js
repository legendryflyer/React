// function additionA(){
//     console.log("A")
// }

// function additionB(){
//     console.log("B")
// }

// additionB()
// additionA()


// function additionC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },2000)
// }
// function additionD(){
//     console.log("D is called")
// }

// addtiionC()
// addtiionD()


// function info() {

//     setTimeout(function(){
//         console.log("create user")
//     },3000)

//     setTimeout(function(){
//         console.log("getId")
//     },2000)

//     setTimeout(function(){
//         console.log("getInfo")
//     },1000)

// }
// info()

// Asyn function ----- sync


// function info() {
//     setTimeout(function(){
//         console.log("create user")
//         setTimeout(function(){
//             console.log("getId")
//             setTimeout(function(){
//                 console.log("getInfo")
//             },1000)
//         },2000)
//     },3000)
// }
// info()

// promises()


let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }

})
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(str){
//     console.log("hello i will always execute")
// })

// pro
// .then(function (str) {
//     console.log(str)
//     return "bye"
// })
// .then(function(){

// })
// .catch(function (str) {
//      console.log(str)
// })
// .finally(function (str) {
//     console.log("hello i will always execute")
// })


function createUser(){
   return new Promise(function(resolve,reject){
       setTimeout(function(){
            resolve("hello")
       },3000)
   })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
             resolve("Get Id")
        },2000)
    })
 }

 function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
             resolve("Get Info")
        },1000)
    })
 }

//  createUser()
//  .then(function(str){
//     console.log(str)
//     return getId()
//  })
//  .then(function(str){
//     console.log(str)
//     return getInfo()
//  })
//  .then(function(str){
//     console.log(str)
//  })

// async function getUser(){

//     let a = await createUser()
//     console.log(a)
//     let b = await getId()()
//     console.log(b)
//     let c = await getInfo()
//     console.log(c)
    
// }



// promise combinators

// Promise.all()
// Promise.race()
// Promise.any()
// Promise.allSettled()
 
async function pAll(){
    let a = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("bye"),
        Promise.resolve("hello2"),

    ])
}
pAll()
 

// program 2


// async function pAllSettled(){
//     let a = await Promise.allSettled([
//         Promise.resolve("hello"),
//         Promise.reject("bye"),
//         Promise.resolve("hello2"),

//     ])
//     console.log(a)
// }
// pAll()


async function pAllRace(){
    let a = await Promise.race([
        Promise.resolve("hello"),
        Promise.reject("bye")
    
    ])
    console.log(a)
}
pAllRace()


async function pAllAny(){
    let a = await Promise.any([
        Promise.reject("bye"),
        Promise.resolve("hello"),
        Promise.reject("bye2"),
        Promise.resolve("hello2")
    
    ])
    console.log(a)
}
pAllAny()