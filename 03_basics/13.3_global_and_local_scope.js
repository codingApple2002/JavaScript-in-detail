//Global and Local scope, 
//Scope -> {}

if (true){       //blocked scope
    let a = 10
    const b = 20
    var c = 30
}

                 //outside global scope


// console.log(a); //ReferenceError: a is not defined, good thing
// console.log(b); //ReferenceError: b is not defined, good thing
// console.log(c); //30 problem...js do not know scope of var, (avoid using var)



let x = 300
if (true){
    let x = 10
    console.log(x); //10 ...if i log it here inside scope
}
console.log(x); //300 ...if i log it outside
//Note: both x are independent.





