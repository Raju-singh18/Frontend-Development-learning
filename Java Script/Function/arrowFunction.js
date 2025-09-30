
// Introduced in ES6, shorter syntax.
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// With multiple statements
const divide = (a, b) => {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
};
console.log(divide(10, 2)); // 5
