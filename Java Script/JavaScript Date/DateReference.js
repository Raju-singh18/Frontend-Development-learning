
/*
In JavaScript:

Primitive values (numbers, strings, booleans, null, undefined, symbol, bigint) are copied by value.

Objects (including arrays, functions, and Date) are copied by reference.

That means a Date object is an object, so when you assign it to another variable, you are passing a reference to the same object in memory.
*/

let d1 = new Date("2025-10-02");
let d2 = d1;  // d2 references the same object as d1

d2.setFullYear(2030);

console.log("d1:", d1);
console.log("d2:", d2);
//d1: 2030-10-02T00:00:00.000Z
//d2: 2030-10-02T00:00:00.000Z


// !If we want a new Date object (copy) instead of referencing the same one, you need to create a new object.
let d3 = new Date("2025-10-02");
let d4 = new Date(d3.getTime());  // clone using timestamp

d4.setFullYear(2030);

console.log("d3:", d3);
console.log("d4:", d4);
//d3: 2025-10-02T00:00:00.000Z
//d4: 2030-10-02T00:00:00.000Z

// ! Passing Date to Functions
function changeDate(dateObj) {
  dateObj.setFullYear(2040);
}

let d = new Date("2025-10-02");
changeDate(d);

console.log(d); // 2040-10-02T00:00:00.000Z

