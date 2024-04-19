const myArr = [0,1,2,3,4,5]
console.log(myArr[0]); //0
const heros = ["spiderman","batman"] //just example of another array
const myArr2 = new Array(1,2,3,4,5) //another way to declare an array
console.log(myArr2); //[ 1, 2, 3, 4, 5 ]


//Methods

myArr.push(6); //adds element in the end
myArr.pop(); //removes the last element
myArr.unshift("XD"); //adds element in the start
myArr.shift(); //removes the 1st element from an array

console.log(myArr.includes("hey")); //false ...returns true/false whether an element is present in an array or not
console.log(myArr.indexOf(1)); //1 ...returns index of given element. -1 if element is not present

const newArr = myArr.join() //converts all elements into one string
console.log(typeof newArr); //string

//slice and splice
//slice
console.log("A ",myArr); //A  [ 0, 1, 2, 3, 4, 5 ] ...original array
const myn1 = myArr.slice(1,3) //excluding 3
console.log(myn1); //[ 1, 2 ]
console.log("B ",myArr); //B  [ 0, 1, 2, 3, 4, 5 ] ...original array remains the same
//splice
const myn2 = myArr.splice(1,3) //here last range is included
console.log("C ",myArr); //C  [ 0, 4, 5 ] ...original array got changed 
console.log(myn2); //[ 1, 2, 3 ]
//Note: splice manupulates the original array, original array got changed.


//you can look out for more methods through prototypes in browser console.

//merging of two arrays
const marvel_heros = ["Thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

marvel_heros.push(dc);
console.log(marvel_heros); //[ 'Thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] ...not a best way
console.log(marvel_heros[3][1]); //"flash"
//another way
const allHeros = marvel_heros.concat(dc) //returns the new array
console.log(allHeros);
//spread ..another way
const all_new_heros = [...marvel_heros,...dc]
console.log(all_new_heros);



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //complex array is'nt?
const real_array = another_array.flat(Infinity)
console.log(real_array); //simplifies the array into one array



//other 
console.log(Array.isArray("apple")); //false ...asking 1st whether this array or not
console.log(Array.from("apple")); //[ 'a', 'p', 'p', 'l', 'e' ] ...converson into array
console.log(Array.from({name: "apple"})); //[] ...empty array, converson not possible

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

