//Scope- it is the region where we can access a paricular data .


// ******IN JS WE CAN ACCESS THE VAL OF OUTSIDE DATA IN THE FUN WHICH IS NOT POSSIBLE IN OTHER LANGUAGE LIKE C AND C++ THIS IS ONLY DUE TO LEXICAL SCOPE ***** .

//Scope Chain in js- when ever js engine searches something and it did not get in the scope of the function then it will go to next level of its parent's scope chain then again then again and so on till js engine reach to global execution context.

//Lexical Environment - a funtion goes to its parent function where the function is physically present and it will access lexical environment of that func and again its parent function .

//e.g

// function a(){
//     console.log(x);
// }
// a();//print undefined{ due to of hoisting}
// var x=3;
// a();//print 3

//here what happens is that when we called a then it goes to its parent and will search the value for x in its lexical environment there it will got the val 3.



function p1(){
    p2();
    function p2(){
        p3();
        function p3(){
            console.log(x);
        }
    }
}
var x=5;
p1();

// output - 5

//here what happens is that when we called p3 then it goes to its parent p2 and will search the value for x in its lexical environment then will repeat the process and finally will get 5


//VISEVERSA IS NOT TRUE.