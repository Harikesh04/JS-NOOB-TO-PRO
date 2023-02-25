// // const user = {
// //   name: "harikesh",
// //   class: "10th",
// //   "is a pro coder": true, // this is the way to store key with gaps
// // };

// // // console.log(user);
// // // console.log(user.name);

// // // console.log(user["is a pro coder"])//this is also a way to access key of obj

// // // delete user.name;//way to delete

// // // delete user["class"];// 2nd way to delete

// // // console.log(user)

// // // ?? how to iterate over all the key of the obj

// // // for(key in user){
// // //     console.log(key);
// // //     console.log(user[key]);
// // // }

// // //?? what will be the op of the following

// // const obj = {
// //   name: "harry",
// //   age: 16,
// //   name: "larry",
// // };
// // console.log(obj); // ! { name: 'larry', age: 16 }

// // // **Q2. Create a function ```
// // // multiplyByTwo(obj)
// // // ``` that multiplies all numeric property values of obj by 2.**

// // let nums = { a: 100, b: 200, title: "My nums" };
// // multiplyNumeric(nums);

// // // !expected output nums = { a: 200, b: 400, title: "My nums" };

// // function multiplyByTwo(obj) {
// //   for (let key in obj) {
// //     // ?? traversing in each key of the obj
// //     if (typeof obj[key] == "number") {
// //       obj[key] *= 2;
// //     }
// //   }
// // }

// // //** Find the output of the following code snippet. */

// // const a = {};
// // const b = { key: "b" };
// // const c = { key: "c" };
// // a[b] = 123; a[c] = 456;
// // console.log(a[b]);

// // // And the answer is 456.🥁

// // // Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

// // // However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["[object Object]"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["[object Object]"] = 456`.

// // // Then, we log `a[b]`, which is actually `a["[object Object]"]`. We just set that to `456`, so it returns `456`.

// // **Q4 -  What is JSON.Stringify and JSON.parse ?**

// const objj = {
//   name: "harikesh",
//   title: "singh",
// };

// // console.log(JSON.stringify(objj));//it will convert obj as a string

// // what are it use

// // ? JSON.stringify IS USED mostly to store data in localStorage because in localStorage we cannot store data in obj

// localStorage.setItem("test", JSON.stringify(objj)); // here providing test as key

// // ? get obj back from local storage

// console.log(JSON.parse(localStorage.getItem("test")));

// //! how to get back as obj

// // console.log(JSON.parse(JSON.stringify(objj)));

// // **Q5 - Spread Operator**

// // ?? Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

// // ** [...'Lydia'];

// // ** ["L", "y", "d", "i", "a"]

// // **Q7 - What's the output of the following code snippet?

// const settings = { username: "lydiahallie", level: 19, health: 90 };

// const data = JSON.stringify(settings, ["level", "health"]); // will convert only the key given in the string that are present in  array
// console.log(data); // "{"level":19, "health":90}"

// // The second argument of `JSON.stringify` is the *replacer*. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

// // If the replacer is an *array*, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data`is now equal to `"{"level":19, "health":90}"`.

// // If the replacer is a *function*, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.

// // **Q8 - What's the output?

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());// ! arrow function don't have this


// // ! Destructuring and renaming

// //? Suppose you go to a grocery store which has so many items displayed on the shelves but you buy items which are required.
// // ? In the same way we take out specific properties from an object which is required.

// let user={ name:"Piyush", age:24 }

// const {name}= user;

// console.log(name);

// const { name: myName } = { name: 'Lydia' }; // accessing name with some other name

// console.log(name); //undefined


// // When we unpack the property `name` from the object on the right-hand side, we assign its value `"Lydia"` to a variable with the name `myName`.

// // With `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.

// // Since we try to log `name`, a variable that is not defined, `undefined` is returned on the left side assignment. Later, the value of `Lydia` is stored through the destructuring assignment

// // **Q- What's the output?**


// // function getItems(fruitList, ...args, favoriteFruit) { return [...fruitList, ...args, favoriteFruit] }

// // getItems(["banana", "apple"], "pear", "orange") //SyntaxError

// // ? ... is a rest parameter. In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.

// // **Q- How will u make the above code snippet work?**


// //  ! The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter! 


// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit];// here ... is spread operator
// }

// getItems(['banana', 'apple'], 'pear', 'orange');//[ 'banana', 'apple', 'orange', 'pear' ]


// //Refrencing in js

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting); // Hello

// // ?? In JavaScript, all objects interact by reference when setting them equal to each other. When you change one object, you change all of them.

// console.log({a:1} == {a:1});//false
// console.log({a:1} === {a:1});//false

// // !! In JavaScript, Objects are compared based on references.

// // ! In the above statement, we are comparing two different objects so their references will be different. Hence, we get the output as false for both of the statements.

// // Q - What's the output of the following code snippet?

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {// using spread operator 
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// //20, 20, 20, 40

// // ?In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is "undefined". In this case, we spread the properties of the value object into a new object, so x has the default value of { number: 10 }.

// // ?The default argument is evaluated at call time! Every time we call the function, a new object is created. We invoke the multiply function the first two times without passing a value: x has the default value of { number: 10 }. We then log the multiplied value of that number, which is 20.

// // ?The third time we invoke multiply, we do pass an argument: the object called value. The *= operator is actually shorthand for x.number = x.number * 2: we modify the value of x.number, and log the multiplied value 20.

// //?  The fourth time, we pass the value object again. x.number was previously modified to 20, so x.number *= 2logs 40.



// ! - Difference between shallow copy vs deep copy.

// ? is shallow copy the new variable is connected to the original variable and will affect the original var if there is change in new
// ? is deep copy the new variable is not connected to the original variable and will  not affect the original var if there is change in new


const user = {
    name: "Jen",
    age: 26
}

const shallowCopy = user;
const deepCopy = JSON.parse(JSON.stringify(user));


console.log(user);
// shallowCopy.name = "ren";
deepCopy.name="ren"

console.log(deepCopy);

console.log(user);