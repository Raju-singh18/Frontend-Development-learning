
let nums3 = [10, 20, 30, 40];

let firstOver20 = nums3.find(n => n > 20);
console.log(firstOver20); // 30

let indexFirstOver20 = nums3.findIndex(n => n > 20);
console.log(indexFirstOver20); // 2
