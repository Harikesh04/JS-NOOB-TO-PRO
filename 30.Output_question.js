// function func(a, b, c) {
//   a = 3; 
//   b[0] = "X";
//   c.pass = false;
// }
// var x = 4;
// var y = ["A", "B", "C"];
// var z = { pass: true };

// func(x, y, z);
// console.log(x, y, z);

// //! Result

// ** 4 [ 'X', 'B', 'C' ] { pass: false }

// //?? Concept:  immutable:undefined,number,String,BigInt,null,Symbol => these things will not change ( since they are pass by value )
// //?? mutable:everthing else , Array,object,Date,map, set, function, => these will change (since they are pass by reference)

// //! Can our browser understand jsx?

// ? No, browser cann't understand jsx. To understand it must be converted into regular js using a tool Babel which is integrated into Webpack.
 //! What is webpack?

 // ?? it is use to generate a single output file that is required to run the application which contains all the js modules , images, css, videos etc.

// const promise = new Promise((res, rej) => res(2)).then((res) => {
//   console.log(res);
//   return res * 2;
// }).then((res)=>{
//     console.log(res);
//     return res*2;

// }).finally((res)=>{
//     console.log(res);//undefined
//     return 0;
// }).then((res)=>{
//     console.log(res);

// })

//Output: 2,4,undefined ,8s

// * finally always runs when the promise is settled (either fulfilled or rejected)and it recieves nothing

// const arr=[1,2,3,4];
// for(let i in arr){// this will print index of the array
//     console.log(i);
// }
// for(let i of arr){// this will print ele of the array
//     console.log(i);
// }


const obj1 ={
    name:"hello",
    class:"btech"
}
const obj2 ={
    name:"hello",
    class:"btech"
}

console.log(obj1==obj2);

// ? false

// in js objects are compared by reference not by value


// https://codersera.com/blog/advanced-javascript-interview-questions/#:~:text=50%2B%20Advanced%20JavaScript%20Interview%20Questions%20%28ANSWERED%29%201%20Q1%3A,use%20case%20for%20anonymous%20functions%3F%20...%20More%20items


const arr1=[1,2,3];
const arr3=[1,2,3];

console.log(arr1==arr3);
console.log(arr1===arr3);


console.log(JSON.stringify(arr1) == JSON.stringify(arr3)); 