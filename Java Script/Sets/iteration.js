
//! forEach()
const nums = new Set([1, 2, 3]);
nums.forEach(n => console.log(n * 2));

/*
2
4
6
*/

//!  for...of
for (const num of nums) {
  console.log(num);
}
/*
1
2
3
*/

// values(), keys(), entries()
const set = new Set(["x","y"]);
console.log([...set.values()]); // ['x','y']
console.log([...set.keys()]);   // ['x','y']
console.log([...set.entries()]); // [['x','x'], ['y','y']]
