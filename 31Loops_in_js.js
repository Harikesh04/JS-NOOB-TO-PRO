// ! different types of for loops

// * for...of loop:

// ? The for...of loop is used to iterate over an iterable object, such as an array, string, or a Map.

const arr = ["harry","larry","carry"];
for(let element of arr){
    console.log(element);
}

// * for...in loop:

// ? The for...in loop is used to iterate over the properties of an object/array. It loops through the object/array and assigns the name of each property to a variable in each iteration. This type of loop is useful when you need to iterate over the properties of an object/array, rather than its values.

const obj={
    name:"hary",
    class:"XII A",
    lastname:"Singh"
}

const newArray = [1,"haaryy","carry",2];

for(var key in obj){
    console.log(key + " : "+obj[key]);
}

for(let key in newArray){
    console.log(key+":"+newArray[key]);
}