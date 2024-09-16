// console.log(a);
// console.log(b);

// var a=b=5;


console.log(1<2<3);
console.log(1>2>3);

let c = 10;
c = 20;

console.log(c);


function outer(){

    console.log(x); // x is not defined (not hoisted)

    // global variable will not be created in memory allocation phase (1st phase)

    x = 10;
    var b=10;

}

console.log(x);// 10 ( when we don't give any variable type it is stored as global)

console.log(b);// b is not defined (dur to of lexical scoping)



const obj = {
    name:'harry',
    class:"8th",
    subject:{
        fav:'maths',
        sec:'physics'
    }
    
}

const obj2 = {...obj};// it will get change

const obj3 = JSON.parse(JSON.stringify(obj));

obj2.name='larry';
obj2.subject.fav='english';



// obj3.name='larry';
// obj3.subject.fav='english';


console.log(obj);

// !! spread operator don't copy all the object by like deep copy

// ! if we still want to do by spread operator only we have to copy each object like

// const obj2 ={...obj,subject:{...obj.subject}}

// {
//   name: 'harry',
//   class: '8th',
//   subject: { fav: 'english', sec: 'physics' }
// }




//{
//   name: 'harry',
//   class: '8th',
//   subject: { fav: 'maths', sec: 'physics' }
// }


// reduce method

const nums = [1, 2, 3];

var sum = nums.reduce((acc, item) => {
    return acc += item;
}, 2);

console.log(sum);


// convert all the first letter to uppercase

const string = "hello harry";

const array = string.split(" ");// to convert into array on " " gap.

const ans = array.map((item)=> {
    const curString = item;
    return curString[0].toUpperCase() + curString.slice(1);
});

console.log(ans); 