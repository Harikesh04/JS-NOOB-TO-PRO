// difference between map and foreach

const ar=[1,2,3,4];

const mapres= ar.map((x)=>x+2);

const foreachres= ar.forEach((ar)=>ar+2);

console.log(mapres);// map will transform the array and will print the desired res.
console.log(foreachres);// it will print undefined it will return nothing
console.log(ar);


//suppose we want to transform the array with the help of forEach than?

const res= ar.forEach((x,i)=>{ar[i]=x+2});// here the initiale arr got changed now.
console.log(ar);


//so
//1.map is use to create a new transformed arr from the given array even now also we can access the prev array
//1.for each does not do so it changes the intial array .

//2.we can apply chaining of methods in map ,like filter and reduce etc. but not in foreach
