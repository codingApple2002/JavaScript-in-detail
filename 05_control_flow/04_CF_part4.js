//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
console.log(val1); //5

let val2;
val2 = null ?? 10
console.log(val2); //10

let val3;
val3 = null ?? 10 ?? 20
console.log(val3); //10


//Terniary Operator
// condition ? true: false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80"); //"more than 80"


