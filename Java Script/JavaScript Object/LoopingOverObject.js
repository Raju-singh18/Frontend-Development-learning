
const student = { name: "Raju", age: 22, grade: "A" };

// for...in loop
for (let key in student) {
  console.log(key, student[key]);
}

/*output
name Raju
age 22
grade A
*/

// Object.keys + forEach
Object.keys(student).forEach(key => {
  console.log(key, student[key]);
});

/*
name Raju
age 22
grade A
*/
