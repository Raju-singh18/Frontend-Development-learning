
let num = 12.3456;

console.log(num.toFixed(2)); // "12.35"  → rounds to 2 decimals
console.log(num.toPrecision(4)); // "12.35"  → total digits
console.log(Number.isInteger(num)); // false
console.log(Number.isInteger(10));   // true
console.log(Number.isNaN(NaN)); // true
 
console.log(num.toExponential(2));//1.23e+1
console.log(Number.isFinite(num)); //true 
console.log(Number.parseInt("42"));//42
console.log(Number.MAX_VALUE);     // 1.7976931348623157e+308
