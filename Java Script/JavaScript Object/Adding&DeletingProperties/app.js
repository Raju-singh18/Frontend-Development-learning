
const user = { name: "Raju" };
user.age = 22;
console.log(user);

delete user.age;
console.log(user);

/*output
{ name: 'Raju', age: 22 }
{ name: 'Raju' }
*/
