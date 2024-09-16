// css




// 

// statement can not be evaluated in if else , but can be evaluated in terneary operator

// shallow copy : two object have same address when we copy , if we change one other will be change

// deep copy: 

JSON.parse(JSON.stringify(OBJ));

// use of closure :

// undefined is a value not an error 

// 1. es6 feature


// react is declarative , have to write less code.
// js is imperative , there is no state we make variables and rerender real dom, have to write 50x more code 


// const nums = [1, 2, 3];

// const sum = nums.reduce((acc, item) => {
//     return acc + item;
// }, 8);

// console.log(sum);

function checkArray(obj){
    
    if(Array.isArray(obj)){
        console.log('is array');
    }else{
        console.log('not an array');
        
    }
    
  }
  
  checkArray([1,2,3]);
  checkArray({1:"harry",2:"larry"});
  checkArray("asdf");
  
  // for checking an integer
  
  function checkInteger(x){
      
    // if(Number.isInteger(x)){
    //     console.log('is integer');
    // }else{
    //      console.log('not an integer');
    // }
  
    // or
  
  if(x%1===0){console.log('is integer');}
    
  }
  
  
  
  checkInteger(2);
  checkInteger(3);
  checkInteger('');
  checkInteger('asdf');
  
  // reverse Integer
  
  function reverseInt(x){
    let res = '';
    
    while(x > 0){
        const last = x % 10;
        res += last;
        x = Math.floor(x / 10);
    }
    
    console.log(res);
  }
  
  reverseInt(123);  // Output: 321
  reverseInt(1321); // Output: 1231
  
  
  // for checking  plindrome
  
  
  function checkPalindrome(str){
      
    if(str === str.split('').reverse().join('')){
        console.log('is palidrome')
    }else{
         console.log('is not a palidrome')
        
    }
    
  }
  
  checkPalindrome("hello");  
  checkPalindrome("1221"); 

