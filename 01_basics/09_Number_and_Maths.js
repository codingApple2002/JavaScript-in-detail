//++++++++++++++++++++++++++++++++++++++ Part-1: Number +++++++++++++++++++++++++++++++++++++++++++//
const n = 100
//another way to declare a number
const num = new Number(1000)
console.log(num); //[Number: 1000] ...in browser it will show prototypes(methods) as well

//methods,

console.log(num.toString()); //"1000"

console.log(num.toFixed(1)); //"1000.0"
console.log(num.toFixed(2)); //"1000.00"
console.log(num.toFixed(3)); //"1000.000"

const n2 = 123.89
console.log(n2.toPrecision(3)); //"124"

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //"1,000,000"
console.log(hundreds.toLocaleString('en-IN')); //"10,00,000"
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



//+++++++++++++++++++++++++++++++++++ Part-2: Maths ++++++++++++++++++++++++++++++++++++++++++++++++//
//Note: On browser do a console.log(Math); to see all methods.

console.log(Math.abs(-4)); //4 ...returns absolute value

console.log(Math.round(5.2)); //5
console.log(Math.round(5.4)); //5
console.log(Math.round(5.5)); //6
console.log(Math.round(5.9)); //6

console.log(Math.ceil(5.2)); //6 ...returns the greatest value 
console.log(Math.ceil(5.9)); //6 ...returns the greatest value

console.log(Math.floor(4.9)); //4 ...returns the lower value

console.log(Math.min(4,2,1,5,6)); //1 ...returns the minimum value
console.log(Math.max(3,5,6,10)); //10 ...returns the maximum value

// Math.random() ...research yourself on this topic
console.log(Math.random()); //random number b/w 0 to 1
console.log((Math.random() * 10) +1); //random number b/w 0 to 10, adding 1 to avoid 0
//formula
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min); 
//10 & 20 also coming that is why this formula is perfect
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



