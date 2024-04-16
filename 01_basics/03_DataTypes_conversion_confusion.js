let score = '33'
console.log(typeof score); //output: string
//or//
console.log(typeof(score)); //output: string

//converting score into number(type-casting)//
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //output: number


//type casting in different scenarios,
//1//
let room = '33abc'
let roomNum = Number(room)
console.log(typeof roomNum); //output: number, it means conversion is possible
console.log(roomNum); //output: NaN

//2//
let temp = null
let tempNum = Number(temp)
console.log(typeof tempNum); //output: number, conversion is possible
console.log(tempNum); //output: 0

//3//
let und = undefined
let undNum = Number(und)
console.log(typeof undNum); //output: number, conversion is possible
console.log(undNum); //output: NaN

//4//
//In a similar way, 
//true into number -> 1
//false into number -> 0

//5//
// "str" into number -> NaN


let logged = 1
let booleanLogged = Boolean(logged)
console.log(booleanLogged); //output: true

//typeCasting of booleans in different scenarios,
//1//
let name = ""
let BooleanName = Boolean(name)
console.log(typeof BooleanName); //conversion is possible
console.log(BooleanName); //output: false
//2//
let name2 = "goku"
let BooleanName2 = Boolean(name2)
console.log(typeof BooleanName2); //conversion is possible
console.log(BooleanName2) //output: true

//conversion into strings...,
let marks = 100
let StrMarks = String(marks)
console.log(typeof StrMarks); //output: string




