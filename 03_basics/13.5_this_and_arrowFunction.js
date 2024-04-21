//this and arrowFunction 
const user = {
    username: "apple",
    id: "123",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //returns this object (user)
    }
}
user.welcomeMessage(); //"apple, welcome to website" and user object
user.username = "banana"
user.welcomeMessage(); //"banana, welcome to website" and user object

console.log(this); //{} ...as we are on node right now. try log in on browser, global object is window.



function chai() {
    let username = "apple"
    console.log(this); //returns something
    console.log(this.username); //undefined ...this not working in fx
}
chai();

const tea = function(){
    let username = "apple"
    console.log(this.username); //undefined
}
tea();

const another_tea = () => {
    let username = "apple"
    console.log(this); //{}
}
another_tea();



//arrow functions
const addTwo = (n1, n2) => {
    return n1 + n2
}
console.log(addTwo(3,4)); //7

const addThree = (n1,n2,n3) => n1 + n2 + n3 //implicit return
const addFour = (n1,n2,n3,n4) => (n1 + n2 + n3 + n4)
//Note: return keyword is required in {}, not required in ().
const Func = () => ({name: "Goku"})
console.log(Func()); //{ name: 'Goku' }


