//polyfils in map,filter , reduce

// the use of polyfils comes into the picture because of some of the browzers don't have map,filter,reduce in there js engine so we have to define polyfils seperately for all of thenm.

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this)); //here this keyword point to the array
  }
  return temp;
};

const arr = [1, 2, 3, 4];

const res = arr.myMap((x) => x + 2);
// const res = arr.myMap((x,i,arr)=>x+2); we can also call it like this all depends upon requirement.
console.log(res); //3 4 5 6

//polyfils for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      // if the call back function satisfy the condition then curr ele is part of res push it into the temp[].
      temp.push(this[i]);
    }
  }
  return temp;
};

const array = [1, 2, 3, 4];

const res1 = array.myFilter((x) => x > 2);
// const res = arr.myFilter((x,i,arr)=>x>2); we can also call it like this all depends upon requirement.
console.log(res1); //

//polyfils for reduce function

Array.prototype.myReduce = function (cb, initialvalue) {
  var accumulator = initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, curr, i, nums) => {
  return acc + curr;
}, 0);

console.log(sum);
