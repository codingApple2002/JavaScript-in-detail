//Immediately Invoked Function Expressions (IIFE)
//(fx)(exicution call);
(function chai(){       //named IIFE
    console.log("DB connected");
})(); // ; is imp here

//Note: when you wants to call fx immediately and to avoid global pollution coming into fx.

//works for arrow fx as well 
(()=>{      //unnamed IIFE
    console.log("apple joined the chat");
})();

((name)=>{
    console.log(`name is ${name}`);
})("Grapes"); //"name is Grapes"



