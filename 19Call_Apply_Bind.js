//Call

// using call method we can do function burrowing we can use function of one abject and pass data of another object and can use.

//  let name = {
//     firstname:"Harikesh",
//     lastname:"Singh",
//    printName: function() {
//         console.log(this.firstname+" "+this.lastname);
//     }
//  }

//  name.printName();

//  // creating another object

//  let name2 ={
//     firstname:"Raghav",
//     lastname:"pandey",
//  }

//  name.printName.call(name2);

// here with the help of call we reused the printfunction method of name obj

//best practice to use a function over multiple data is

let name3 = {
  firstname: "pankaj",
  lastname: "thripathi",
};
// function fullname() {
//   console.log(this.firstname + " " + this.lastname);
// }

// let name4 = {
//   firstname: "rahul",
//   lastname: "tiwari",
// };

// fullname.call(name3);
// fullname.call(name4);

// // now suppose we want some more data along with the object then what?

function fulladdress(place,area) {
    console.log(this.firstname + " " + this.lastname+"& he lives in "+place+" near "+area);
  }
fulladdress.call(name3,"Jabalpur","shivpuri");

//**********APPLY METHOD */

// the main diff between call and apply is the way of sending argument other than the data of the obj.

// here we pass the second argument as array list

fulladdress.apply(name3,["Jabalpur","shivpuri"]);// same out put what we seen in call method

//**********************BIND METHOD */

// the use of bind method is to bind and keep the copy of the method inside a var and use it later.
// it does not invoke the method it just makes the copy of the method and can be invoked later.

let printdata = fulladdress.bind(name3,"Jabalpur","shivpuri");
printdata();
