
let arr1 = [1, 2];
let arr2 = [3, 4];

console.log(arr1.concat(arr2)); // [1, 2, 3, 4]

let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

let filled = [0, 0, 0];
filled.fill(5);
console.log(filled); // [5, 5, 5]

console.log(Array.isArray(arr1)); // true
console.log(Array.from("Hello")); // ['H','e','l','l','o']
console.log(Array.of(10, 20, 30)); // [10, 20, 30]
