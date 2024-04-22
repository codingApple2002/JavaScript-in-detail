//Truthy and Falsy -> Values that are assumed to either be true or false.
const userEmail = []
if (userEmail){
    console.log("got the user email"); //"got the user email"
}else{
    console.log("dont have user email");
}

//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values: "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is empty"); //"Array is empty"
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); //"Object is empty"
}


//other
console.log(false == 0); //true
console.log(false == ''); //true
console.log(0 == ''); //true

