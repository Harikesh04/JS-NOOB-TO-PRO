// the  problem with synchronous js is that the code is executed line by line and if some of the  code is taking time then we have to wait for it and we will proceed only when it is completed and which blocks the main thread i.e our call stack

// therefore we have to make our code asynchronous

// since alone setTimeout is capable to make our code asyn but the major issue with it is trust issue.
// console.log("start");

// setTimeout(function func() {
//   // it will wait in call back queue and will perform only when call stack will be cleared
//   console.log("i am waiting for 5s and am printing after that ");
// }, 5000);

// console.log("end");

// //here if there is hundreds of lines of codes then it could be happen that the main threat will  be blocked and the call back function func in set timeout will be print after undesired time.

// let startdate = new Date().getTime();
// let enddate = startdate;
// while (enddate < startdate + 10000) {
//   enddate = new Date().getTime();
// }
// console.log("while expires");

// then callback comes in picture

//  then with the help of setTimeout and callback we perform asynchronous operations

//e.g

function register(cb) {// here recieving the callback function and then inside the settime calling the callback function so that it will perform only when this task is performed 
  setTimeout(() => {
    console.log(" register end");
    cb();
  }, 1000);
}
function Sendemail(cb) {
  setTimeout(() => {
    console.log(" send email end");
    cb();
  }, 1000);
}
function login(cb) {
  setTimeout(() => {
    console.log(" login end");
    cb();
  }, 1000);
}
function getuserData(cb) {
  setTimeout(() => {
    console.log(" getuserData end");
    cb();
  }, 1000);
}
function displayUserData() {
  setTimeout(() => {
    console.log(" displayUserData end");
  }, 1000);
}

// callback hell

register(function () {
  Sendemail(function () {
    login(function () {
      getuserData(function () {
        displayUserData();
      });
    });
  });
});

// now  the things become asynchronous and working well but the problem is it is becamed super messay.

