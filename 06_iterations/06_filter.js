//filter
const coding = ["js","ruby","java","python","cpp"]
const values = coding.forEach((item)=>{
    // console.log(item);
    return item;
})
console.log(values); //undefined ...forEach does not returns anything.

//unlike forEach filter can return
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((i)=>{
    return i > 4; //i can implicit return as well.
})
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]
//doing same thing using forEach
const n = []
myNums.forEach((item)=>{
    if(item > 4){
        n.push(item)
    }
})
console.log(n); //[ 5, 6, 7, 8, 9, 10 ]


//example
const books = [
    {
        name:"book A",
        genre:"history",
        publish:2000
    },
    {
        name:"book B",
        genre:"python",
        publish:2005
    },
    {
        name:"book C",
        genre:"Maths",
        publish:2015
    },
    {
        name:"book D",
        genre:"Js",
        publish: 2020
    },
]
const b1 = books.filter((item) => item.genre === 'history')
console.log(b1); //[ { name: 'book A', genre: 'history', publish: 2000 } ]

const b2 = books.filter((item) => {return item.publish <= 2015})
console.log(b2);
/*
output:
[
  { name: 'book A', genre: 'history', publish: 2000 },
  { name: 'book B', genre: 'python', publish: 2005 },
  { name: 'book C', genre: 'Maths', publish: 2015 }
]
*/

//Note: In filter conditions i can use ( || && ) as well.
