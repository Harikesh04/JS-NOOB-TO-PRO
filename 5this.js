// 1. Shortest Program in JS: Empty file. Still, browsers make GEC and global
// space along with Window object.
// 2. Global Space: Anything that is not in a function, is in the global space.
// 3. Variables present in a global space can be accessed by a "window" object.
// (like window.a)
// 4. In global space, (this === window) object.

// every thing is defined in a global space except the data inside the func  are assign 
// in local space


// ? this keyword points to the object of the function in its lexical scope

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

// in arrow function this will  not point to name , it will point to global or window object
//(arrow function don't have their this)
