// ! diff between == and ===
// == is use to check loosly check the value.e.g 
//true ==1 => true
//false==0 => true
//'2'==2=> true

// while === is use to stictly check the equal condition
//true ===1 => false
//false===0 => false
//'2'===2=> false



const nums=[1,2,3,4];

nums.slice(1, 2);// use to cut the cake , take only that part from start index to end index

nums.splice(1,0,1);// use to delete element , or add , or both




// ! spread operator(...)

// 1.it is uses for shallow copy of the array or obj

// it can copy the first level of obj as deep copy , and if we want to do deep copy of all the level then we have to do it manually 

// const ar1= [1,2,3,4];
// const ar2=[7,9,8];

// const combineArray = [...ar1,...ar2];// 1,2,3,4,7,9,7
// console.log(combineArray);

// ! 2.Rest Operator(...)

// it is used to gather the remaining arguments of a function into an Array.

