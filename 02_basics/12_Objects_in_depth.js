//singleton -> from constructors its singleton
// Object.create

//when object declared as literals its no singleton
//object literals
const JsUser = {
    name: "apple",
    age: 18,
    location: "Jaipur",
    email: "abc.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}
console.log(JsUser.email); //"abc.com" ...to access
console.log(JsUser["email"]); //"abc.com" ...bts keys converted into "keys"

//Note: if in object {"full name": "mr apple"} now you cannot access this using . , [] is the only way

//to use symbol as a key,
// const mySym = Symbol("key1")
// const user = {
//     mySym: "myKey1", 
// }
// console.log(typeof user.mySym); //string
//what you can do instead...
const mySym = Symbol("key1")
const user = {
    [mySym]: "myKey1"
}
console.log(user[mySym]); //"myKey1"


//changing and freezing the values in an object
JsUser.email = "banana.com" //changing the value 
// Object.freeze(JsUser)
//now JsUser values cannot be changed, changes have no effect even if done. Shows no error.


//function as a value in an object
JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //"Hello Js user"

JsUser.greetingTwo = function(){
    console.log(`Hello...${this.name}`);
}
console.log(JsUser.greetingTwo()); //"Hello...apple"



//++++++++++++++++++++++++++++++++++++++ part: 2 ++++++++++++++++++++++++++++++++++++++++++//
//singleton objects,
// const tinderUser = new Object()
// console.log(tinderUser); //{}

//non-singleton object,
const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser); //{ id: '123', name: 'Sammy', isLoggedIn: false }

//objects inside object
const regularUser = {
    email: "pqr.com",
    fullname: {
        userfullname: {
            first: "mr",
            last: "apple"
        }
    }
}
console.log(regularUser.fullname.userfullname.last); //"apple"

//merging of objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1 ,obj2} //this way is problematic
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//another way
const obj3a = Object.assign({},obj1,obj2)
console.log(obj3a); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//Note: if in above case target not given, target will be obj1. Object.assign(target, sources)
//better way...spread operator
const obj3b = {...obj1,...obj2}
console.log(obj3b); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//when values coming from database
const le_user = [
    {id: "1", email: "1.com"},
    {id: "2", email: "2.com"},
    {},
    {}
]
console.log(le_user[0].email); //"1.com"


//other
console.log(tinderUser); //{ id: '123', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] ...returns all keys in an array
console.log(Object.values(tinderUser)); //[ '123', 'Sammy', false ] ...returns all values in an array
console.log(Object.entries(tinderUser)); //[ [ 'id', '123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] ...returns array inside array with key/value pairs
console.log(tinderUser.hasOwnProperty("isLog")); //false ...returns true/false

//Note: you can see more prototypes in browser console.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



//++++++++++++++++++++++++ objects destructuring and JSON API ++++++++++++++++++++++++++++++++++++++++++//
//objects destructuring
const course = {
    coursename : "java-script",
    price: "100",
    courseInstructor: "apple"
}
// course.courseInstructor ...to access value
const {courseInstructor} = course //here course is object and courseInstructor is key
console.log(courseInstructor); //"apple" ...now i can use it simply 
//if you wants to call courseInstructor something else, do this...
const {courseInstructor: inst} = course
console.log(inst); //"apple" 

//JSON format (brief intro)
// {
//     "name":"banana",
//     "coursename": "js",
//     "price":"free",
//     "id":12,
//     "log":true
// }

// [
//     {},
//     {},
//     {},
//     {},
//     {}
// ]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


 

