//for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}
//output: 
/*
0
1
2
3
4
5 is the best number
5
6
7
8
9
10
*/
// console.log(element); //ReferenceError: element is not defined


//for loop inside for loop
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value is ${j} and outer loop is ${i}`); //see the output
        // console.log(`${i} X ${j} = ${i*j}`); //printing tables from 0 to 10
    } 

}


//array
let myArray = ["flash","batman","spiderman"]
console.log(myArray.length); //3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    console.log(element);
}
//output:
/*
flash
batman
spiderman
*/


//break and continue
//break
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        break
    }
    console.log(`value of index is ${index}`);
}
/*
output:
value of index is 0
value of index is 1
value of index is 2
value of index is 3
value of index is 4
detected 5
*/
//continue
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue
    }

    console.log(`value of index is ${index}`);
}
/*
Note: 5th iteration got skipped

output:
value of index is 0
value of index is 1
value of index is 2
value of index is 3
value of index is 4
detected 5
value of index is 6
value of index is 7
value of index is 8
value of index is 9
value of index is 10
value of index is 11
value of index is 12
value of index is 13
value of index is 14
value of index is 15
value of index is 16
value of index is 17
value of index is 18
value of index is 19
value of index is 20
*/


