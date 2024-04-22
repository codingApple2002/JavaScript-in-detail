//if
const temp = 41
if(temp === 41){
    console.log("temperature is 41"); //this will be executed 
}else{
    console.log("temperature is not 41");
}
console.log("executed"); //always going to be executed
// < , > , <= , >= , == , != , === , !==


//scope
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`); //"user power: fly"
}
// console.log(`user power: ${power}`); //ReferenceError: power is not defined


//short way to write if statements
const balance = 1000
if (balance > 500) console.log("test"), console.log("test 2");
//Note: we can write code this way but try not to.


//if - else if - else
if (balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200"); //this going to be executed
}
// Note: only one of the above going to be executed.


//logical operators (&&, ||)
//and -> &&
const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard && 2==2){
    console.log("Allowed to do shopping"); //"Allowed to do shopping"
}
//Note: all conditions need to be satisfied.

//or -> ||
const loggedInFromEmail = true
const loggedInFromGoogle = false
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in"); //"user logged in"
}
//Note: either of the condition need to be satisfied.









