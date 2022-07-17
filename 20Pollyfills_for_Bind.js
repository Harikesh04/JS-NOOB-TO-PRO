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