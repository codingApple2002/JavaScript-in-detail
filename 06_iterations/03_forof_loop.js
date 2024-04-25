//for of
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
//output:
// 1
// 2
// 3
// 4
// 5

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}
//output:
// each char is H
// each char is e
// each char is l
// each char is l
// each char is o
// each char is  
// each char is W
// each char is o
// each char is r
// each char is l
// each char is d
// each char is !


//Map
const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')
console.log(map);
//output:
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States Of America',
  'Fr' => 'France'
}
*/
for (const key of map) {
    console.log(key);
}
//output:
/*
[ 'IN', 'India' ]
[ 'USA', 'United States Of America' ]
[ 'Fr', 'France' ]
*/
for (const [key,value] of map) {
    console.log(`key: ${key} & value: ${value}`);
}
//output:
/*
key: IN & value: India
key: USA & value: United States Of America
key: Fr & value: France
*/


//forof in objects
const myObj = {
    game1: 'valo',
    game2: '2k18'
}
for (const [key,value] of myObj) {
    console.log(`key: ${key} & value: ${value}`);
}//TypeError: myObj is not iterable
//Note: objects not iterable this way.


