//Stack memory-> primitive
//Heap memory-> Non-primitive (reference)

//+++++++++++++++++++++++++++++ Stack memory +++++++++++++++++++++++++++++++//
let name = "shashank"
let fruit = name
console.log(fruit); //"shashank"

fruit = "apple" //fruit got changed

console.log(name); //name remains the same "shashank"
console.log(fruit); //fruit got changed to "apple"

//Note: here original not changed, only copy got changed.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//+++++++++++++++++++++++++++++ Heap memory ++++++++++++++++++++++++++++++++//
let user = {
    email: "xyz.com",
    id: "123",
}

let another_user = user

//Note: now if we change in another_user, user going to change as well.
another_user.email = "abc.in" //another_user got changed

console.log(user.email); //"abc.in"....here user got changed as well
console.log(another_user.email)//"abc.in"
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/*
Note: All primitive goes into stack, and a copy is provided, any changes done are in that copy.
      Non-primitive goes into heap, and reference is provided, any changes done, changes the original one.
*/