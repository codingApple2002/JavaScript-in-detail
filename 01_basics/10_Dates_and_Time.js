let myDate = new Date() //its not readable right now
console.log(myDate);

//methods,
console.log(myDate.toString()); //its readable now 
console.log(myDate.toDateString()); //Thu Apr 18 2024
console.log(myDate.toLocaleString()); //4/18/2024, 9:26:56 AM

console.log(typeof myDate); //object


//to declare a specific date,
let myCreatedDate = new Date(2023,0,23) //(year,month,day) ...months starts from 0
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
//Note: in above to declare a date you can pass more items, which are refered to time on that specific date. for example...
let myCreatedDate_2 = new Date(2023,0,23,5,3)
console.log(myCreatedDate_2.toLocaleString()); //1/23/2023, 5:03:00 AM
//more method to declare a date...,
let myCreatedDate_3 = new Date("2024-01-01"); //yy-mm-dd
let myCreatedDate_4 = new Date("02-02-2024"); //dd-mm-yy


//time-stamp
let myTimeStamp = Date.now()
console.log(myTimeStamp); //1713433846112 ...shows a number which is in ms from this particular date (1-jan-1970)


//to compare two dates do this,
console.log(myTimeStamp); //1713434267319
console.log(myCreatedDate.getTime()); //1674432000000
//Note: myCreatedDate is basically a new Date(), object
//ez to compare two dates now


//to convert into seconds do this,
console.log(Math.floor(Date.now()/1000)); //1713434733


//more methods,
let d = new Date()
console.log(d.getMonth()); //3 ...months starts from 0
console.log(d.getDay()); //4 (thursday)...week day
//Note: you can use ` ${} ` to write dates in a better way.
console.log(`week day is ${d.getDay()} and the time is ${d.getTime()}ms`)


//to customize the date object, (do a research on this)
let d2 = new Date()
console.log(d2.toLocaleString('default',{
    weekday: "long",
})
) //output: Thursday