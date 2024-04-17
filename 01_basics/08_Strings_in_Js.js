const name = "shashank"
const repoCount = 50
console.log(name + repoCount + " Value");//"shashank50 Value" ...old way
console.log(`name is ${name} and repoCount is ${repoCount}`)//"name is shashank and repoCount is 50"...new way

//another way to declare a string,
const gameName = new String("valorant") //on browser it will show index and prototypes(methods)
console.log(gameName[0]);//"v"
console.log(gameName.__proto__);//{}

//+++++++++++++++++++++++++++++++++++ methods ++++++++++++++++++++++++++++++++++++//

console.log(gameName.length); //8

console.log(gameName.toUpperCase()); //VALORANT

console.log(gameName.charAt(2)); //"l" ...shows which character is present at given index

console.log(gameName.indexOf('v')); //0 ...provides index of given character

const newStr = gameName.substring(0,4)
console.log(newStr); //"valo" ...here 4th index is excluded and if -ve index given it will going to be ignored

const anotherStr = gameName.slice(-8,4)
console.log(anotherStr); //difference is that you can use -ve index in this method

const newstr = "      apple   "
console.log(newstr.trim()); //"apple" ...cutoff extra spaces from the beg and end

let url = "https://apple.com/apple%20fruit"
url = url.replace('%20','-') //("old","new")
console.log(url);

console.log(url.includes("apple")); //true ...finds whether given characters present in string or not
console.log(url.includes("shashank")) //false

//.split(seperator, limit)
let one_str = new String("apple-hello-how-are-you")
console.log(one_str.split('-')); //[ 'apple', 'hello', 'how', 'are', 'you' ]
