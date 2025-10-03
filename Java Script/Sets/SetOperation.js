
//! Union

const setA = new Set([1,2,3]);
const setB = new Set([3,4,5]);
const union = new Set([...setA, ...setB]);
console.log(union); // Set(5) {1,2,3,4,5}

// ! Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set(1) {3}

//!Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set(2) {1,2}

// ! Symmetric Difference
// Logic: Elements in either set but not both.
const symmetricDifference = new Set(
  [...setA].filter(x => !setB.has(x))
  .concat([...setB].filter(x => !setA.has(x)))
);
console.log(symmetricDifference); //Set(4) { 1, 2, 4, 5 }

// ! isSubsetOf
// Logic: Checks if all elements of setA exist in setB.
function isSubsetOf(setA, setB) {
  return [...setA].every(x => setB.has(x));
}

console.log(isSubsetOf(new Set([1,2]), setA)); // true
console.log(isSubsetOf(new Set([1,5]), setA)); // false

// !isSupersetOf
// Logic: Checks if setA contains all elements of setB.

function isSupersetOf(setA, setB) {
  return [...setB].every(x => setA.has(x));
}

console.log(isSupersetOf(setA, new Set([1,2]))); // true
console.log(isSupersetOf(setA, new Set([1,5]))); // false

// !isDisjointFrom
// Logic: True if no elements are common between sets.
function isDisjointFrom(setA, setB) {
  return [...setA].every(x => !setB.has(x));
}

console.log(isDisjointFrom(new Set([1,2]), new Set([3,4]))); // true
console.log(isDisjointFrom(setA, setB)); // false
