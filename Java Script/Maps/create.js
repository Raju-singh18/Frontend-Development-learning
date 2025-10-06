
/*We can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()

*/

// Create a Map
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruit); // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }


const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits); //Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }


