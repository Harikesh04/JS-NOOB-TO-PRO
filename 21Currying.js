// What is a curried function?
// A curried function is a function that takes multiple arguments one at a time. Given a function with 3 parameters, the curried version will take one argument and return a function that takes the next argument, which returns a function that takes the third argument. The last function returns the result of applying the function to all of its arguments.

// the currying of function can be achieved by two ways 1. using bind method 2. using closuers

//###########USING BIND METHOD FOR FUNCTION CURRYING#########

function multiply(x, y) {
  console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);// passing argument in this way fixes the first value x as 2.
multiplyByTwo(3);

// we can also use like this



let multiplyByThree = multiply.bind(this,3,3);
multiplyByThree();//9

// let multiplyByThree = multiply.bind(3,3);
// multiplyByThree();//NaN


// function currying using bind :- we make a copy of a function and make more methods out of it by presetting some of the value of it.



//###########BY USING CLOSURES ##############

 
function outer(x){
    return function inner(y){
        console.log(x*y);
    }
}

let product = outer(5);
product(2);//op- 10


// can also be done like this

let pro = outer(5)(2);

//and also be like this

outer(2)(5);


// what is the importance of function currying ?

// with the help of function currying we can optimise our code  by writing one function and can use it by presetting its some variable and can call it later at passing different argument.

// important interview question

// infinit currying

// implement this  add function console.log(add(2)(3)(4)(5)());

// function add (x){
//   return function (y){
//     return function(){
//       return x+y;
//     }
//   }
// }

//console.log(add(2)(3)());// 5


function add (x){
  return function (y){
    if(y) return add(x+y);
    return x;
  }
}




console.log(add(2)(3)(4)(5)());//14



