//reduce
const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal);
//output:
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

//or
const myTotal2 = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal2); //6


//example
const shoppingCart = [
    {
        item:"A",
        price: 80
    },
    {
        item:"B",
        price: 100
    }
]
const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price ,0)
console.log(priceToPay); //180
