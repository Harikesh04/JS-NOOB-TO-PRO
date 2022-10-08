//What is higher order function?

// A func which takes another func as input and return another func as argument is called higher order func.

function x() {
  console.log("xfd");
}

function y(x) {
  //here y is higher order func.
  x();
}

// example of higher order functions are map ,filter ,reduce

// map , filter, reduce all three are array methods.

//1.map function

//map function is use to create a ******NEW****** transformed array from the existing array

//eg

const array = [1, 2, 3, 4, 5];

function double(x) {
  return x * 2;
}
function triple(x){
    return x*3;
}
function tobinary(x){
    return x.toString(2);
}

const output1 = array.map(double);
const output2 = array.map(triple);
const output3 = array.map(tobinary);
console.log(output1);

// we can also use it like this

const ans = array.map(function double(x) {
  return x * 2;
});
console.log(ans);

// ******THE BEST WAY OF USING MAP FUNCTION IS *************

//here created a new array doublingthearray that is transformed from the main array.and the previous array remains as it is. 
 const doublingthearray = array.map((x)=>x*2);
 console.log(doublingthearray);

 // the complete syntax of map 

 const usemap = array.map((curr_ele,ind,array)=>{
    //function logic
 });
 // same with filter it can also takes all these three index all depends upon requirment.


// real life example for map

 const users= [
    {firstName:"Harikesh",lastName:"Singh",age:21},
    {firstName:"Harry",lastName:"Singh",age:21},
    {firstName:"abhishek",lastName:"kumar",age:21},
    {firstName:"vivek",lastName:"ledu",age:21},
 ]

 // we have to get the full name of the user

 const fullname = users.map((x)=>x.firstName+x.lastName);
 console.log(fullname);
 

 //2.filter function

 // the purpose of filter function in js is to filter the desired output

 // eg- given an array and we want to print only those no. of the array which are greater than 4.

 const arr = [5,4,3,6,7,8,1,10];

function greater_than_4(x){
    return x>4;
}
 const output= arr.filter(greater_than_4);

console.log(output);//5 6 7 8 10

// best way to use

const greaterthan4 = arr.filter((x)=>x>4);
console.log(greaterthan4);//5 6 7 8 10

// 3. Reduce function

// the use of reduce function is to take all the element of the array and come with single     output/result.

// eg finding sum of the arr

const array1 = [1, 2, 3, 4, 5, 6, 7];

function findsum(array1){
    let sum=0;
    for (let i = 0; i < array1.length; i++) {
        sum+=array1[i];
    }
    return sum;

}

const arrsum = findsum(array1);
console.log(arrsum);

// this thing we can easily do by reduce

 const arrsum2 = array1.reduce(function(acc,curr){
    acc+=curr;
    return acc;
 },0);
 console.log(arrsum2);

// syntax of reduce

//   arr.reduce(function(accumulator,current){
//     logic
//     where accumulator will be the result which we have to print and curr will point to each ele of the array
//   },intial_value_of_acc);

// another ex for reduce function is finding the max of the arr
const ar = [1, 2, 3, 4, 5, 6];

function findMax(ar) {
  let mx = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > mx) {
      mx = ar[i];
    }
  }
  return mx;
}

console.log(findMax(ar));//6.


// now doing it using reduce 

const find_max = ar.reduce(function(mx,curr){
    if (mx<curr) {
        mx=curr;
    }
    return mx;
},0)

console.log(find_max);


// Q. given an array of oobjects and we have to print an object which tell the frequency of each age group

const users2 =[
    {firstname:"harikesh",age:25},
    {firstname:"chinu",age:24},
    {firstname:"thappa",age:25},
    {firstname:"ram",age:23},
    {firstname:"harikesh",age:23},
    {firstname:"larry",age:21},

]


const agefrquency = users2.reduce(function(acc,curr){
    if (acc[curr.age]) {//checking if age of curr obj is present in acc or not 
        acc[curr.age]++;
    }else{
        acc[curr.age]=1;//if not present it means it is new to the acc so we initailze it to 1.
    }
    return acc;
},{})

console.log(agefrquency);

//here acc is initialy an empty object , and curr is pointing to every obj of the array.


//Q. what happen when user forget to give intial value to acc in reduce fun?

// it will take first ele of array as the intial value.

