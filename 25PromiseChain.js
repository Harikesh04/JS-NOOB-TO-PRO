const cart = ["kurta", "saree", "shoes", "pant", "shirt"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // returning this thing is very imp
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // this will return the promise and its success or faliure will decide that whether  the chain will proceed or not.
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

  

function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    const paymentInfo = "payment in done on sharp 12:00am";
    const a = true;

    if (!a) {
      reject(new Error("payment not done due to err"));
    }

    resolve(paymentInfo);
  });

  return pr;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCard(cart)) {
      const err = new Error("card details  are invalid");
      reject(err);
    } 
      const orderId = "1233434343";

      resolve(orderId);
    
  });

  return pr; // this step is very imp (returning the promise)
}

function validateCard(cart) {
  return false;
}


// now suppose if createOrder's promise in the chain gets rejected and than also we want to perform the operation proceed to payment than how we will do?

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // returning this thing is very imp
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // this will return the promise and its success or faliure will decide that whether  the chain will proceed or not.
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  
