function func(){
    var x=5;
    setTimeout(function inner(){
        console.log(x);
    },1000)
}

func();

// here it's easy to guess that 5 will print after 1s.

function func(){
    var x=5;
    setTimeout(function inner(){
        console.log(x);
    },1000);
    console.log("Harikesh SIngh");
}

func();


//here first harikesh singh will be printed then x will be printed.
// because of asyncronus nature of setTimeout
// and js waits for none.

function outer(){
  for(var i=0;i<=5;i++){
      setTimeout(function inner(){
          console.log(i);
      },i*1000);
  }
}

outer();

//here 6 will be printed after every second five times.
// this is because of set time out and closure .since, js waits for none it will run the loop very fast and the value of i will be incremented to 6.and since due to closure the inner function will referenced to the lexical scope of the outer function.



// by using var we can make it variable like this
function outer(){
    
  for(var i=0;i<=5;i++){
     const inner = (j=i)=>{
          setTimeout(function inner(){
          console.log(j);
      },i*1000);
     }
     
     inner();
  }
}

outer();

// 0 1 2 3 4 5 



function outer() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function inner() {
      console.log(i);
    }, i * 1000);
  }
}

outer();

//here out put will be 0 1 2 3 4 5

// since because of let is a block scoped and after every iteration a new value of i will be passed to the function inside settimeout.

//How can we perform the same task without using var?

function x() {
  for (let j = 0; j <= 5; j++) {
    function inner(i) {
      setTimeout(function y() {
        console.log(i);
      }, i * 1000);
    }
    inner(j);
  }
}

x();
