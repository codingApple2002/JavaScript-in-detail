//Scope Level and Mini Hoisting
//Note: things from global scope can be access in blocked scope. blocked scope things can't be leaked outside of it.

function one(){
    const username = "apple"
    function two(){
        const website = "youtube"
        console.log(username); //"apple"
    }
    // console.log(website); //ReferenceError: website is not defined
    two();
}
one();



if(true){
    const username = "banana"
    if(true){
        const website = "yt"
        console.log(username + website); //"bananayt"
    }
    // console.log(website); //ReferenceError: website is not defined
}
// console.log(username); //ReferenceError: username is not defined



function addOne(num){
    return num + 1 
}
console.log(addOne(5)); //6 ...in this case if i call this fx before declaration its fine

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(8)); //10 ...in this case if i call this fx before its declaration it will throw error

