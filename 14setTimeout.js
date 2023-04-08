// set time out has trust issues

//eg

console.log("start");

setTimeout(function func(){  // it will wait in call back queue and will perform only when call stack will be cleared
    console.log("i am waiting for 5s and am printing after that ")

}, 5000);

console.log("end");

//here if there is hundreds of lines of codes then it could be happen that the main threat will  be blocked and the call back function func in set timeout will be print after undesired time.

let startdate = new Date().getTime();
let enddate= startdate;

while(enddate<startdate+10000){
  enddate=new Date().getTime();
}
console.log("while expires");




// op:
// start,end,while expires(after the 10s), i am waiting for 5s and am printing after that

// what happens behind the scene?
//here the callback function inside the setTimeout will go in callback queue and here the 5 sec timer starts 
// then we call the Data() api here  we wait for 10 s and we have blocked our main threat   i.e our call stack and after the 10 stack when the callstack become unblocked then the callback function from the callback queue will go to the call stack which was expired sometimes before and then will print suddenly.


//Q.  what will the output(Imp)

console.log('x');

setTimeout(function()  {
  console.log("y")
}, 0);

console.log('z');

//op:
// x
// z
// y

//here in set time out whether the time is 0ms or what ever it will behaive asynchronously . 
