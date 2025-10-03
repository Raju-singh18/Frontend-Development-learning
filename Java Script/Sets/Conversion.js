
//!Remove duplicates from arrays
const arr = [1,2,2,3,4,4,5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1,2,3,4,5]

// ! Convert Set to Array
const set = new Set([10, 20, 30]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // [10,20,30]

