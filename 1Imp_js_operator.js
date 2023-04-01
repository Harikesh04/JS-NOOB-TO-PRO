// ! diff between == and ===
// == is use to check loosly check the value.e.g 
//true ==1 => true
//false==0 => true
//'2'==2=> true

// while === is use to stictly check the equal condition
//true ===1 => false
//false===0 => false
//'2'===2=> false



//! 2.splice()
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

// array.splice(index, remove_ele_at_ind);
// array.splice(ind1,ind2,addme,addme2.....);=> at ind1 remove ind2 ele and add eles addme .

// ! spread operator(...)

// 1.it is uses for shallow copy of the array or obj

// const ar1= [1,2,3,4];
// const ar2=[7,9,8];

// const combineArray = [...ar1,...ar2];// 1,2,3,4,7,9,7
// console.log(combineArray);

// ! 2.Rest Operator(...)

// it is used to gather the remaining arguments of a function into an Array.

const ar1=[1,2,3,4];
const obj={...ar1};
console.log(obj)
