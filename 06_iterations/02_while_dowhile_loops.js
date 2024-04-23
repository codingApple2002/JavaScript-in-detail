//while
let index = 0
while (index <= 10) {
    console.log(`the value of index is ${index}`);
    index = index + 2
}
/*
output:
the value of index is 0
the value of index is 2
the value of index is 4
the value of index is 6
the value of index is 8
the value of index is 10
*/

let myArr = ["flash","batman","superman"]
let a = 0
while (a < myArr.length) {
    console.log(myArr[a]);
    a++;
}
/*
output:
flash
batman
superman
*/

//dowhile
let score = 11
do {
    console.log(`score is ${score}`);
    score++;
} while (score<=10);
/*
output:
"score is 11" ...executed once then condition not satisfied
*/

