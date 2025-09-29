
/*
split(separator) → converts string to array

join(separator) → converts array to string
*/

let fruits = "apple,banana,orange";
let fruitArr = fruits.split(",");
console.log(fruitArr); // ["apple","banana","orange"]

let joined = fruitArr.join(" | ");
console.log(joined); // "apple | banana | orange"
