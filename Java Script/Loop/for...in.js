
let person = { name: "Raju", age: 22, city: "Delhi" };

for (let key in person) {
  console.log(key, ":", person[key]);
}

/*output-
name : Raju
age : 22
city : Delhi
*/