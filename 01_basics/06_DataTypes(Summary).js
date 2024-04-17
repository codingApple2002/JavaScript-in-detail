/*
Primitive:
    strings
    number (100, 100.3, 2.5 etc)
    booleans (true/false)
    null
    undefined
    symbols (unique)
    bigint

Non-Primitive (Reference):
    Array
    objects
    functions

*/

//examples
const id = Symbol('123') //unique
const id2 = Symbol('123') //unique
console.log(id === id2); //false

const bigNum = 32563423783838383383383838383832n //put n after a big number it will termed as bigint.

const heros = ["batman","spiderman","hulk","ironman"] //array

let obj = {
    name: "apple",
    color: "red"
} //object

const myFunction = function(){
    console.log("hello");
} //function stored in variable

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

let a = 10
console.log(typeof a); //number, use typeof to know the data type.

let n = null
console.log(typeof n); //object, null typeof is object.

console.log(typeof myFunction); //function, but called as object function.
