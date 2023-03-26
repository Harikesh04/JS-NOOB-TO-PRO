// super keyword

// ?? the super kepword is user to access properties of the parent class which is inherited in some other class or invoke a super class constructor

class Parent{
    constructor(name) {
      this.name = name;
    }
  
    getNameSeparator() {
      return '-';
    }
  }
  
  class Child extends Parent{
    constructor(name, index) {
      super(name);
      this.index = index;
    }
  
    getFullName() {
      return this.name + super.getNameSeparator() + this.index;
    }
  }
  
  const obj = new Child('harry', 1);
  
  console.log(obj.name);
  // Expected output: "foo"
  
  console.log(obj.getFullName());
  // Expected output: "foo-1"


  const obj1 = {
    method1() {
      console.log("method 1");
    },
  };
  
  const obj2 = {
    method2() {
      super.method1();
    },
  };
  Object.setPrototypeOf(obj2, obj1);

  console.log(obj2.method2());


  function func(){//function

  }

  const func1 = function name(params) { //function STATEMENT
    
  }

  const func2 = function(){// function expression 
    console.log("func2 called");
  }

  func2();

  const prod = (a,b)=>{// arrow function
    return a*b;
  }

  console.log(prod(2,3));