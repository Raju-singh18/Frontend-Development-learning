
// ! Objects are stored by reference, so two identical objects are treated as different.

const obj1 = {id:1};
const obj2 = {id:1};
const set = new Set();
set.add(obj1);
set.add(obj2);
console.log(set); //Set(2) { { id: 1 }, { id: 1 } }
