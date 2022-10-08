//***Conclusion of the story***: THe job of event loop is to continously moniter the call stack and call back queue , the call back function that has to be performed will be registerd in web api environment after that will wait in callback queue and event loop will continously check if the call stack will be empty then cb funct will go in the call stack and task will be performed

//Theory: Js is a synchronous single threated language . It has one call stack and it can only do one thing at a time. This call stack is present inside the js engine which is present inside the browser and all the code of js executed in this call stack.


//Practical:

//1. when normal operation takes place in js without consuming any time till that every thing is ok.

//But, when some operation that we have to perform should have to be performed after some time and since call stack don't have any such tool to do so. . so for that some api that are provided by browsers(superPowers)

// Window  
//   * setTimeout
//   *DOM  APIs
//   *fetch()
//   *localStorage
//   *console 
//   *Location

//Ex1:

setTimeout(function cb() {
    console.log("callback");
}, 5000);

//here this callback function cb will go inside the web api environment and wait for 5 sec when 5 second will over than event loop will put in into call back queue and  check if callstack is empty then it will be pushed in call stack and our code excecutes after 5s and we will get the desired output.

//Ex2:

//when we put an onclick event then we pass a cb func in onclick and that cb function go and wait in web api  , when some  click on the button then event loop puts the cb function in call back queue and after that cb func will go to the call stack and if it is empty  push cb in call stack  then the button perform its task.

//Conclusion of the story: The job of event loop is to continously moniter the call stack and call back queue , the call back function that has to be performed later waits in the call back queue for the given time and after that event loops puts cb into the call stack and our code executes.

// **Imp things to know

// if some task is put in cb queue and its waiting time is over , but cb task will perform only when the callstack will be empty It could be after 1000 of lines of codes



// **fectch Api

fetch("https://api.netflix.com").then(function cb(){
    console.log("cb netflix");

})

//here the cbf will wait in web api environment  and when get the details then it will go in microTask queue which has more priority than callback queue,

// MicroTask queue- 
// All the cb func of promises lands here.
// have high priority
// first this queue will empty then only call back queue will given it chance.


// Callback queue - 
//ALl the other cb func will lands here.
//low priority