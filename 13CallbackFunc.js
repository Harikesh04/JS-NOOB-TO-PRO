//CALLBACK FUNC

//You can take a func and pass it into another funct and when we do so the function that is passed it into another function is called call back function.


//What is its usage?

// to prevent the blockage of main threat i.e call stack we have to perform asyncronous operations for those of the function which takes time to perform the task, and this asynchronous behaviour is achieved by using setTimeout and call back.


setTimeout(function()  {
   console.log("I am called in set time out function");
}, 1000);


function x(y){
    console.log("x");
    y();
}


//here calling the function x and passing it function y {here y is the callback}
x(function y(){
    console.log("y");
   
});

//op: x y I am called in set time out function.