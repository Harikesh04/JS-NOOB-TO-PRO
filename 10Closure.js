//What is a Closure?

// A closure is the combination of a function bundled together (enclosed) with references to its  lexical environment.

// In other words, a closure gives you access to an outer function’s scope from an inner function.

// In JavaScript, closures are created every time a function is created, at function creation time.

//v.IMP STATEMENT FOR INTERVIEW

//**the function defined in the closure 'remembers' the environment in which it was created.




function outerfun() {
    var name = "Harikesh";
    function innerfun() {
        console.log(name);
    }
    return innerfun;
}

var myFunc = outerfun();
console.log(myFunc);// this will print inner function 

//there is also a way to perform the same operation
myFunc()();//here myFunc() will call the outer function and will get innerfun now we are calling innerfun by () .
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
// Data privacy using closure
// 2.Currying
// 3.maintaining state in async AudioWorkletNode
// 4.setTimeout
//5.function like once.


//Disadvantages of closure

//1.there could be over consuption of memory.
//2.if closures not handled properly it can cause memory leack and memory can be accumulated together and can causes frizzing of the browzer due to of the garbage collector. 


//Advantages
//ex of data privacy using closure

function func(){
  var count=0;
 return function increment(){
    count++;
    console.log(count);
  }
}

var counter=func();
counter();//print 1// this will call increment func first time
counter();//print 2 // this will call increment func second time

var counter1 = func();
counter1();//print 1
counter1();//2
counter1();//3
counter1();//4
//here counter and counter1 are seprate var

// here with the help of closure we are calling the increment func and we are performing our task and our count data in encapsulated inside the func and can not be accessed ouside the func.

console.log(count);//Error:Count is not defined.


//####So assume we have to perform some more task in func that how can we do it?
//#####is it the best way to write the code and perfom this task 

// no we should create constructor func and then should perform these task

function func(){
  var count=0;
this.incrementCounter=function(){
    count++;
    console.log(count);
  }
this.decrementCounter=function(){
    count--;
    console.log(count);
  }
}

var counter= new func();
counter.incrementCounter();//1
counter.decrementCounter();//0

//GARBAGE COLLECTOR

//garbage collector is a program in the browzer and js engine which kind off freeze un utilized memory

// in language like c and c++ its up to developer how to take memory and how to deallocate memory .

// But , in higher order language like js most of the work is done by js engine

//#####What is the relation between the  garbage collector and closure

function outerfun() {
  var name = "Harikesh";
  function innerfun() {
      console.log("name");
  }
  return innerfun;
}

var myFunc = outerfun();
// here is no garbage collection occur because inner function have no need to go in the lexical scope of the outerfun .


function outerfun() {
  var name = "Harikesh";
  function innerfun() {
      console.log(name);
  }
  return innerfun;
}

var myFunc = outerfun();
// here garbage collection occur because here we are forming closure and here at any period of time we can call myFunc(); 

// we cannot free the memory of name until we know we have no further use of myFunc

//and if we form more such closure then these variable can be garbage collected

// but now some of the browzer like v8 and chrome have smart garbage collection meachanism which prevents the accumulation of the garbagely collected data somehow.