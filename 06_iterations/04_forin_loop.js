//forin
const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObj) {
    console.log(key);
    /*
    output:
    js
    cpp
    rb
    swift
    */

    console.log(myObj[key]);
    /*
    output:
    javascript
    c++
    ruby
    swift by apple
    */
}


const agents = ["jett","sage","raze","yoru","breach"]
for (const agent in agents) {
    console.log(agent);
    /*
    output:
    0
    1
    2
    3
    4
    */
    
    console.log(agents[agent]);
    /*
    output:
    jett
    sage
    raze
    yoru
    breach
    */
}

//Note: we can't use forin on Map.
//Note: forin prints keys. keys in array are its index.

