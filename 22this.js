obj ={
    name:"harikesh",
  display:  function (){ // way to define the function in object
        console.log(this.name);
    },
    display2: ()=>{
        console.log(this.name);
    },
}

obj.display();// it will print harikesh
obj.display2();// it will print undefined

// in arrow function this will  not point to name.it will point to global or window object

