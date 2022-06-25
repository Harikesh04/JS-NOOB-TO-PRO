var x=7;
a();// o/p: 10
b();// o/p: 100
console.log(x);// o/p: 7

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}

// what will happen behind the scene is a call stack will be created 

// In which all the variables are marked as undefined and all the functions are made avilable

// then x will assigned value of 7
 
// then  in function a and b again x will marked as undefined and will again marked as
//  their value i.e 10 and 100 respectively.