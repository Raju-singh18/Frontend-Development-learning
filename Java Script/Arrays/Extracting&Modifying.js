
let nums = [1, 2, 3, 4, 5];

let part = nums.slice(1, 4);
console.log(part); // [2, 3, 4]

nums.splice(2, 1, 99);
console.log(nums); // [1, 2, 99, 4, 5]
