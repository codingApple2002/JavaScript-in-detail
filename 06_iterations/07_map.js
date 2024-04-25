//map
const myNumers = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumers.map((item)=>{return item + 10})
console.log(newNum);
//output:
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]

//doing same using forEach
const n = []
myNumers.forEach((i)=>{
    n.push(i+10);
})
console.log(n);
//output:
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]


//chaining
const newNums = myNumers
                    .map((i) => i*10)
                    .map((i) => i+1)
                    .filter((i) => i>=40)
console.log(newNums);
/*
output:
[
  41, 51,  61, 71,
  81, 91, 101
]
*/

