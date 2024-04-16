//+++++++++++++++++++++++++++ Performing Operations ++++++++++++++++++++++++++++++++++++//
/*

+ add
- substract
* mul
** power
/ divide
% remender

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

let str1 = 'hello '
let str2 = 'world'
let str3 = str1 + str2
console.log(str3); //hello world

console.log("1" + 2); //output: 12
console.log(1 + "2"); //output: 12
console.log("1" + 2 + 2); //output: 122
console.log(1 + 2 + "2"); //output: 32


// + operator auto converting...into number,
console.log(+true); //output: 1
console.log(+""); //output: 0

//test code
let str = ""
let str_num = Number(str)
console.log(str_num); //output: 0

// ++ adds one to operand
let gameCounter = 100
gameCounter++
console.log(gameCounter); //output: 101

//note: use mdn docs to research prefix and postfix increament operators.



