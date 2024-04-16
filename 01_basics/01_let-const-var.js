const accountId = 14532
let accountEmail = 'xyz@gmail.com'
var password = '12345'
accountCity = 'Delhi'

// accountId = 2
// console.log(accountId); //its a const cant be changed

accountEmail = 'abc@gmail.com'
password = '1212'
accountCity = 'Bengaluru'

console.table([accountEmail,password,accountCity]) //shows output in a tabular form....plus we can change all these variables.

/*  prefer not to use var.
    because of issue in block scope and functional scope.
    js do not know what is the scope of var
*/

let accountState; //here variable got declared
console.log(accountState); //output: undefined