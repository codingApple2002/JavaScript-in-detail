//foreach
const coding = ['js','ruby','java','python','cpp']

//simple function i can give inside loop,
coding.forEach(function (val) {
    console.log(val);
})
/*
output:
js
ruby
java
python
cpp
*/

//i can give arrow function as well,
coding.forEach((item)=>{
    console.log(item);
    /*
    output:
    js
    ruby
    java
    python
    cpp
    */
})

//i can give reference of any function as well,
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);
/*
output:
js
ruby
java
python
cpp
*/

//other parameters,
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
}) 
/*
output:
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


//example:
const languages = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "python",
        fileName: "py"
    },
    {
        languageName: "swift",
        fileName: "Swift by Apple"
    },
    {
        languageName: "c++",
        fileName: "cpp"
    }
   
]

languages.forEach((item)=>{
    console.log(item.languageName);
})
/*
output:
javascript
python
swift
c++
*/

