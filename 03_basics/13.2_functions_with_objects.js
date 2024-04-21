//rest operator -> ...
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,600,1000)); //[ 200, 400, 500, 600, 1000 ]
//I can pass as many arguments as i want, it will return in an array.

function cal_price(val1,val2,...num1) {   
    return num1;
}
console.log(cal_price(10,20,2000,3000,5000)); //[ 2000, 3000, 5000 ] ...10,20 are val1,val2 & rest are num1



//function with object
const games = {
    gameName: "2k18",
    price: "999"
}
function handleObject(anyobj){
    console.log(`game is ${anyobj.gameName} and its price is ${anyobj.price}`);
}
handleObject(games); //"game is 2k18 and its price is 999"
//or i can directly pass an object
handleObject({
    gameName: "gta-IV",
    price: "5000"
}); //"game is gta-IV and its price is 5000"



//function with array
const myArr = [100,200,300,400,500]
function returningSecondValue(getarray){
    return getarray[1];
}
console.log(returningSecondValue(myArr)); //200
//or i can directly pass an array
console.log(returningSecondValue([1,2,3,4])); //2

