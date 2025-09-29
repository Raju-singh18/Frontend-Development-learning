
let a = 5;   // binary: 0101
let b = 1;   // binary: 0001

console.log(a & b);   // 1 (AND)
console.log(a | b);   // 5 (OR)
console.log(a ^ b);   // 4 (XOR)
console.log(~a);      // -6 (NOT, flips bits)
console.log(a << 1);  // 10 (Left shift: 0101 → 1010)
console.log(a >> 1);  // 2  (Right shift: 0101 → 0010)
console.log(-5 >>> 1); // 2147483645 (Unsigned right shift)
