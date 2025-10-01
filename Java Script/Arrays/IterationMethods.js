
let numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(n => console.log(n * 2)); 
// Output: 2, 4, 6, 8, 10

let squares = numbers2.map(n => n * n);
console.log(squares); // [1, 4, 9, 16, 25]

let evens = numbers2.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

let sum = numbers2.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

let sumRight = numbers2.reduceRight((acc, n) => acc + n, 0);
console.log(sumRight); // 15

console.log(numbers2.every(n => n > 0)); // true
console.log(numbers2.some(n => n > 3)); // true
