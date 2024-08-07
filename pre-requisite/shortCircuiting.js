// && - and

let a = 7 == 8 && true; // in the case of && if output of first expression is falsy it will short circuit. It won't evaluate second part.
console.log(a);

let b = 7 == 7 && false;
console.log(b); //false

let c = 7 < 8 && "hellow";
console.log(c); // hellow

let d = 7 > 8 && "hellow";
console.log(d); // false

//  || - or // in thr case of or if the output of first expression is truthly it will short circuit. It won't evaluate the second part..

let q13 = 7 != 7 || 8 != 9; // if  one of them is true it will return true
console.log(q13); //true
let q14 = 7 == 5 || 8 == 9;
console.log(q13);
console.log(q14);

// nullish coalescing operator   /// if the first expression is null and undefined then it will go for the second expression..

console.log(null ?? 10);
console.log(undefined ?? 10);
console.log(0 ?? 10); // 0 is falsy value
console.log(0 ?? 10); // 0 is falsy value
