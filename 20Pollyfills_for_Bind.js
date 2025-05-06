// # Usecase : 

// A polyfill provides fallback functionality for modern JavaScript features in older browsers.

// Check if a feature exists: Use feature detection to see if the browser supports the desired feature (e.g., a method like Array.prototype.includes).

// Provide a fallback: If the feature is missing, implement a custom version that mimics the native behavior.
// Integrate seamlessly: Add the fallback to the appropriate global object (e.g., Array.prototype, window) only if needed, ensuring it doesn’t overwrite native implementations.

// The goal is to make modern JavaScript code work in older environments while adhering to the official specification.

let name3 = {
  firstname: "pankaj",
  lastname: "thripathi",
};

function fulladdress(place,area) {
    console.log(this.firstname + " " + this.lastname+"& he lives in "+place+" near "+area);
  }

  let printdata = fulladdress.bind(name3,"Jabalpur","shivpuri");
printdata();
// this is how we use bind method 

// but in the case if some browesr not supports the bind method then we have to write owr custom polyfills
// Function.prototype=> with the help of Function.prototype we can create a method which can acces by any other method 
Function.prototype.myBind= function(...args){
  params=args.slice(1);// this the first argument that is data and will provide us remaining other arguments.
  let obj = this;
  return function(...args2){
   obj.apply(args[0],[...params,...args2]) ;
  }
}

let data = fulladdress.myBind(name3,"Jabalpur","shivpuri");
data();



// Polyfill for String.prototype.startsWith:

// if (!String.prototype.startsWith) {
//   String.prototype.startsWith = function (searchString, position) {
//     position = position || 0;
//     return this.slice(position, position + searchString.length) === searchString;
//   };
// }

// if (!Array.isArray) {
//   Array.isArray = function (arg) {
//     // Check if arg is an array using Object.prototype.toString
//     return Object.prototype.toString.call(arg) === '[object Array]';
//   };
// }