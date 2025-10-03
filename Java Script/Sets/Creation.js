
// Empty set
const mySet = new Set();

// Set with initial values
const numbers = new Set([1, 2, 3, 4, 4, 5]); 
console.log(numbers); // Set(5) {1, 2, 3, 4, 5} -> duplicates removed

// Using strings
const letters = new Set("hello");
console.log(letters); // Set(4) {"h","e","l","o"} -> duplicates removed