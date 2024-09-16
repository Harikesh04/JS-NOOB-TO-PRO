//  1. What are Promises?
// Promise is an object which  represents the eventual completion or faliure of the async operation. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

// ! object with some extra properties

// 2. Importance of Promises:
// a) Promises can help us to write trust worthy code.
// b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
// c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
// d) We can attach  function to promise object and retrieve its value unlike callbacks no need to pass the function.
// e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.

// promises are use to handle async operations in js



const data = fetch("https://netfilix.org");

// {data:undefined} initially this data is undefined but after some interval as res comes it cotains value

data.then((data) => console.log(data)).catch((err) => console.log(err));

// ***************

const cart = ["kurta", "shirt", "shoes", "jeans"];

//callback hell
createOrders(cart, function (paymentdetails) {
  proceedToPayment(paymentdetails, function (paymentInfo) {
    createOrderSummary(paymentInfo);
  });
});

// since , the major issue with callback is 1)code become unmaintainable 2)inversion of control

// so in **** inversion of control*** we looses the control of the function we just sent it into callback and leave rest of the things to the parent function .

// But what if the function not called or called twice there may be any issue occur so promise comes in picture and makes things simple.

// Now this is how things works with promises

createOrders(cart)
  .then(function (paymentdetails) {
    proceedToPayment(paymentdetails);
  })
  .then(function (paymentInfo) {
    createOrderSummary(paymentInfo);
  })
  .catch((err) => console.log(err));

//now here we have complete controls on promise as it will resolved things will works well in the  chain(Promise comes with trust)
