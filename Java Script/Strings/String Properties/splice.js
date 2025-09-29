
/*
The splice() method is used to add, remove, or replace elements in an array.
It modifies the original array and can return an array of removed elements.
*/

// ! Syntax
// array.splice(start, deleteCount, item1, item2, ..., itemN)


//! Removing elements
let fruits1 = ["apple", "banana", "orange", "mango"];
let removed = fruits1.splice(1, 2); // start at index 1, remove 2 elements
console.log(fruits1);  // ["apple", "mango"]
console.log(removed); // ["banana", "orange"]


// ! Adding elements
let fruits2 = ["apple", "mango"];
fruits2.splice(1, 0, "banana", "orange"); // start at 1, remove 0, add 2 elements

console.log(fruits2); // ["apple", "banana", "orange", "mango"]


// ! Replacing Elements
let fruits3 = ["apple", "banana", "orange"];
fruits3.splice(1, 1, "mango", "grapes"); // start at 1, remove 1 element, add 2 elements
console.log(fruits3); // ["apple", "mango", "grapes", "orange"]


// !Using Negative Indices
let fruits4 = ["apple", "banana", "orange", "mango"];
fruits4.splice(-2, 1, "kiwi"); // start 2nd last element, remove 1, add "kiwi"
console.log(fruits4); // ["apple", "banana", "kiwi", "mango"]

// !Only Deleting from End
let fruits5 = ["apple", "banana", "orange", "mango"];
fruits5.splice(2); // start at index 2, delete all remaining elements
console.log(fruits5); // ["apple", "banana"]

// !Remove a specific element by index
let numbers = [10, 20, 30, 40];
numbers.splice(2, 1); // remove element at index 2
console.log(numbers); // [10, 20, 40]


// !Insert elements at a specific position
numbers.splice(2, 0, 30); // insert 30 at index 2
console.log(numbers); // [10, 20, 30, 40]


// !Replace an element
numbers.splice(1, 1, 15); // replace 20 with 15
console.log(numbers); // [10, 15, 30, 40]

// !Remove multiple elements
let numbers1 = [10, 20, 30, 40, 50];
numbers1.splice(1, 3); // remove 3 elements starting from index 1
console.log(numbers1); // [10, 50]
