// Golden Rules:
// 1. Variable declarations are scanned and are made undefined
// 2. Function declarations are scanned and are made **available
//3. Arrow functions enact as variables and get "undefined" during
// the memory creation phase while functions actually get run.
//4.Hoisting: Mechanism in JS where the variable declarations are 
// moved to the top of the scope before execution. Therefore it is possible
//  to call a function before initializing it.

// getName();//o/p: Harikesh SIngh

// console.log(x);//o/p: unDefined
// console.log(y);//o/p: error: y is not defined.
// console.log(getName);// it will print the complete function 


// var x=6;

// function getName(){
//     console.log("Harikesh SIngh");
// }

// // console.log(x);//o/p: 6
// // getName();// o/p: 6


// console.log(getName);// it will print the complete function 


// effect of hoisting is different function declarations


//1. normal function
getName();// o/p:hey I am a normal function
function getName(){
    console.log("hey I am a normal function");
}


//2. variable function and arrow based functions


//BOTH VAR AND ARROW BASED FUNC ARE TREATED AS VARIABLE IN HOSITING AND WILL PRINT ERROR: NOT DEFINED
getName2();//o/p:TypeError: getName2 is not a function
var getName2 = function(){
     console.log("hey I am a variable function");
}

getName3();//o/p:TypeError: getName2 is not a function
const getName3 = () =>{
    console.log("hey I am an arrow based  function");
}

//CALL STACK

// call stack  is a stack where in which the global execution context is pushed in side the 
// stack



