//HOISTING IN LET AND CONST

// !! Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

//>>LET

1.//let and const are hoisted. But we can't use them before initialization is result of "temporal dead zone".

// js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone" /

console.log(a);//ReferenceError: Cannot access 'a' before initialization
let a = 10;

// temporal dead zone:- it is the zone between where the let variable is called to where it is intialized

// best way to avoid is to intialize variable of let and const at top.

2.// WE CAN NOT RE DECALRE A LET VARIABLE e.g

// let b =1000;
// let b=10; // it is a syntax error.

//>>CONST

1.// hoisiting is same in const as let.



// var  vs let vs const

//var //no temporal dead zone, can redeclare and re-initialize, stored in GES
//let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
//const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory


// different types of error
// syntax error ... violation of JS syntax
//type error ...  while trying to re-initialize const variable
// reference error ... while trying to access variable which is not there in global memory.    example in case of hoisting in let and const.

// console.log(a); // ( OP: undefined)
// var a = 30;



// var x = 10;
// let y = 20;
// {
//   var x = 30;
//   let y = 40;
//   console.log(x + y); // ? 70
// }
// console.log(x + y); // ? 50




function outer() {
    var a = 5;
    let b = 10;
  
    function inner() {
      console.log(a); // ? undefined (due to hoisting)
      console.log(b); // ? ( cann't access before intilization)
      var a = 20;
      let b = 30;
      console.log(a); // ? 20
      console.log(b); // ? 30
    }
  
    inner();
  }
  
  outer();



  //JavaScript implicitly creates a as a global variable (or attaches it to the global object, like window.a in a browser). This is true even in strict mode, though strict mode would throw an error for undeclared variables (more on that later).

  a = 10; // Implicit global variable declaration
  {
    a = 20; // Modifies the same global variable 'a'
  }
  console.log(a); // Outputs: 20
  