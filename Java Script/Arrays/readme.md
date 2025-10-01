
# 📘 JavaScript Arrays

An **array** is a special type of object in JavaScript used to **store multiple values** in a single variable.  

- Each value has an **index** (starting from `0`).  
- Arrays can store **any type of data**: numbers, strings, booleans, objects, functions, even other arrays.  
- Arrays are dynamic, meaning their size can change, and elements can be added or removed at any time.  
- Internally, arrays in JavaScript are objects with **special methods and properties** that make them powerful for data handling.

---

# 📘 JavaScript Arrays with `const`

In JavaScript, arrays declared with **`const`** have unique characteristics:

---

## 🔹 Key Points

- **Reference is constant** → The variable **cannot be reassigned** to a new array.  
- **Contents are mutable** → Elements **can be added, removed, or updated**.  
- **Array methods work normally** → Methods like `push`, `pop`, `splice`, `sort`, `reverse`, etc., can be used.  
- **Reassignment is not allowed** → Trying to assign a new array to a `const` variable will throw an error.  

---

## 🔹 Characteristics

1. **Safe reference**  
   - Ensures the variable always points to the same array.  

2. **Mutable elements**  
   - The array’s contents can be changed even though the reference is constant.
   - Arrays in JavaScript are **dynamic and flexible**, capable of holding mixed data types.  

3. **Full method support**  
   - Methods that modify the array (`push`, `pop`, `splice`, `fill`) are allowed.  
   - Methods that return new arrays without altering the original (`map`, `filter`, `slice`) also work.
   - They provide both **imperative** (loops) and **functional** (map, filter, reduce) ways to handle data.  
   - Arrays can be **nested** to form multidimensional arrays.  
   - The **length property** updates automatically as elements are added or removed.  


---

## 🔹 Common Array Properties

- **length** → Returns the number of elements in an array.  
- Arrays are **zero-indexed**, so the first element is at index `0`.  
- Modifying `length` can truncate or expand an array.  

---

## 🔹 Common Array Methods

### 1. Adding / Removing Elements
- **push()** → Adds one or more elements to the end of an array.  
- **pop()** → Removes the last element from an array.  
- **unshift()** → Adds one or more elements to the beginning of an array.  
- **shift()** → Removes the first element from an array.  

### 2. Searching Elements
- **indexOf()** → Returns the index of the first occurrence of a specified value.  
- **lastIndexOf()** → Returns the index of the last occurrence of a specified value.  
- **includes()** → Checks if an array contains a specified value.  

### 3. Extracting & Modifying
- **slice()** → Returns a shallow copy of a portion of an array into a new array.  
- **splice()** → Adds, removes, or replaces elements in an array at a specified index.  

### 4. Joining & Converting
- **join()** → Joins all elements of an array into a single string with a separator.  
- **toString()** → Converts an array into a comma-separated string.  

### 5. Iteration Methods
- **forEach()** → Executes a function for each array element without returning a new array.  
- **map()** → Creates a new array with the results of applying a function to each element.  
- **filter()** → Creates a new array with elements that satisfy a given condition.  
- **reduce()** → Reduces an array to a single value by applying a function cumulatively.  
- **reduceRight()** → Similar to reduce, but processes elements from right to left.  
- **every()** → Checks if all elements in the array satisfy a condition.  
- **some()** → Checks if at least one element satisfies a condition.  

### 6. Sorting & Reversing
- **sort()** → Sorts the elements of an array in place.  
- **reverse()** → Reverses the order of elements in an array.  

### 7. Finding Elements
- **find()** → Returns the first element that satisfies a condition.  
- **findIndex()** → Returns the index of the first element that satisfies a condition.  

### 8. Other Useful Methods
- **concat()** → Merges two or more arrays into one without modifying the originals.  
- **flat()** → Flattens nested arrays into a single-level array.  
- **flatMap()** → Maps each element using a function and flattens the result by one level.  
- **fill()** → Fills all elements in an array with a static value.  
- **copyWithin()** → Copies part of an array to another position within the same array.  
- **Array.isArray()** → Checks if a given value is an array.  
- **Array.from()** → Creates a new array from an array-like or iterable object.  
- **Array.of()** → Creates a new array from the provided arguments.  

---
