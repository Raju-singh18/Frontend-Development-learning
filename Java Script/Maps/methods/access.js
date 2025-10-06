
const myMap = new Map();

myMap.set('name', 'Raju');
myMap.set(1, 'Number key');
myMap.set({ id: 101 }, 'Object key');
 
//! get
console.log(myMap.get('name'));//Raju
console.log(myMap.get(1));// Number key

// ! has
console.log(myMap.has('name'));//true
console.log(myMap.has('age'));//false

// !typeof
console.log(typeof myMap); // object

// ! instanceof
console.log(myMap instanceof Map);//true

// ! delete
myMap.delete(1);
console.log(myMap);//Map(2) { 'name' => 'Raju', { id: 101 } => 'Object key' }

// ! size
console.log(myMap.size); // 2

// ! keys
for(let key of myMap.keys()){
    console.log(key);
}
//name
//{ id: 101 } 

// ! values
for (let value of myMap.values()) {
  console.log(value);  
}
/*
Raju
Object key
*/

//! entries
for(let [key,value] of myMap.entries()){
    console.log(key, value);
}
/*
name Raju
{ id: 101 } Object key
*/

// ! forEach
myMap.forEach((value, key) => {
    console.log(key,':',value);
})
/*
name : Raju
{ id: 101 } : Object key
*/

// ! groupBy
const arr = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'David', role: 'user' },
];

const grouped = arr.groupBy(item => item.role);
console.log(grouped);

/* output:
{
  admin: [
    { name: 'Alice', role: 'admin' },
    { name: 'Charlie', role: 'admin' }
  ],
  user: [
    { name: 'Bob', role: 'user' },
    { name: 'David', role: 'user' }
  ]
}
*/
