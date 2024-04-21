function sayMyName(){
    console.log("Mr");
    console.log("Apple");
}
sayMyName //its just a reference
sayMyName(); //exicution of this function

//Note: parameters -> while defining the function. And arguments -> while calling that function.
function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}
addTwoNumbers(); //NaN
addTwoNumbers(5,3); //8
addTwoNumbers("3",4); //"34"

const result = addTwoNumbers(5,5) //10
console.log("result: ",result); //result:  undefined
//Note: this is because function is printing num1 + num2, not returning it.

function add2num(n1,n2){
    let result = n1 + n2
    return result  //here i can directly return n1+n2 as well
}
const res = add2num(3,3)
console.log("res: ",res); //res:  6

//Note: while defining the function, once a fx is returning something after that line it will not exicute any line of code.
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("apple")); //"apple just logged in"
console.log(loginUserMessage()); //"undefined just logged in"...if nothing is passed
//solution to this 
function loginMessage(username){
    if (username === undefined){   //this if condition can be written like this as well, if(!username){}
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginMessage()); //"please enter a username"


//default values
function login(username = "Sammy"){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(login()); //"Sammy just logged in"
console.log(login("apple")); //"apple just logged in"
