// function func(a, b, c) {
//   a = 3; // ! will change only in scope of func.
//   b[0] = "X";
//   c.pass = false;
// }
// var x = 4;
// var y = ["A", "B", "C"];
// var z = { pass: true };

// func(x, y, z);
// console.log(x, y, z);

//! Result

// ** 4 [ 'X', 'B', 'C' ] { pass: false }

//?? Concept:  immutable:undefined,number,String,BigInt,null,Symbol => these things will not change
//?? mutable:everthing else , Array,object,Date,map, set, function, => these will change

//! Can our browser understand jsx?

// ? No, browser cann't understand jsx. To understand it must be converted into regular js using a tool Babel which is integrated into Webpack.

//! What is webpack?

// ?? it is use to generate a single output file that is required to run the application which contains all the js modules , images, css, videos etc.

const promise = new Promise((res, rej) => res(2)).then((res) => {
  console.log(res);
  return res * 2;
}).then((res)=>{
    console.log(res);
    return res*2;

}).finally((res)=>{
    console.log(res);
    return 0;
}).then((res)=>{
    console.log(res);

})

//Output: 2,4,undefined ,8s
