// ! Function statement / Function Declaration : the function is normally defined and can be used later on


// the normal way in which we declare a normal function is called function statement

function func(){
    console.log("Harry");
}

// ! Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError".Created using anonymous function

var a = function (){
    console.log("hii");
}


//DIFFERENCE BETWEEN FUNCTION STATEMENT AND FUNCTION EXPRESSION

// ! the main differece is of hoisting 

// function statement - that is the normal func if called before intialization it will be available.

func();
function func(){
    console.log("function statement")
}
// it will run easily.
// function expression- it will be treated as variable and will print "Uncaught TypeError"
x();// ? ReferenceError: Cannot access 'func' before initialization
var x= function(){
    console.log("function expression");
}

// Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable

// function (){
// console.log("i am a anonymous func");
// }

// give an error 

var y= function(){
    console.log("assigning value to y using anonymous func");
}

// Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)


//WHAT IS THE DIFFERNCE B/W PARAMETER AND ARGUMENT?


//ARGUMENT-jo apn bhejte h func call krte time

//PARAMETER-jo apn recieve krte h function bnate time

//###FIRST CLASS FUNCTION###or##FIRST CLASS CITIZEN

// the ability of functions to be used as values , can assigned to a variable , can be passes as argument to another functions and can be returned from another function this ability of function is called first class functions in js

func();//ReferenceError: Cannot access 'func' before initialization
const func = function(){
    console.log("function expression")
}