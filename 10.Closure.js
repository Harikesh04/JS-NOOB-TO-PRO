//What is a Closure?

// A closure is the combination of a function bundled together (enclosed) with references to its  lexical environment.

// In other words, a closure gives you access to an outer function’s scope from an inner function.

// In JavaScript, closures are created every time a function is created, at function creation time.




function outerfun() {
    var name = "Harikesh";
    function innerfun() {
        console.log(name);
    }
    return innerfun;
}

var myFunc = outerfun();
console.log(myFunc);// this will print inner function 
myFunc();//this will print Harikesh.

// Here's a slightly more interesting example — a makeAdder function:

//**the function defined in the closure 'remembers' the environment in which it was created.


function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);//here we have provided x as 5
var add10 = makeAdder(10);//here we have provided x as 10

console.log(add5(2)); //now we are providing value to inner func // 7
console.log(add10(2));// ,,,, // 

//Uses of closers

// 1.Module design CanvasPattern
// 2.Currying
// 3.maintaining state in async AudioWorkletNode
// 4.setTimeout