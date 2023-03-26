const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };

  var a=Object.getPrototypeOf(myObject);
  console.log(a);
  