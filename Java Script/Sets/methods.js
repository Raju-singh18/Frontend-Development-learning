
const fruits = new Set();
// ! Add
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // ignored, duplicate
console.log(fruits); // Set(2) {"apple", "banana"}

// ! Delete
fruits.delete("banana");
console.log(fruits); // Set(1) {"apple"}

// ! has
console.log(fruits.has("apple")); // true
console.log(fruits.has("banana")); // false

// !clear
fruits.clear();
console.log(fruits); // Set(0) {}
