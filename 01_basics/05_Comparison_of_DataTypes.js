//++++++++++++++++++++ Comparison Operators ++++++++++++++++++++++++++++++//
/*

>
<
>=
<=
==
!=

Note: Always perfer comparison with same data type.
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log("2">1); //true
console.log("02">1); //true
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true

/* Note: the reason is that an equality_check == and comparison < > <= >= works differently. 
         comparison converts null to a number as 0.
         that is why....null >= 0 ; true and null > 0 ; false.
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// Strict Check === ,checks both value and data type.
console.log("2" === 2); //false...as data type is different
 