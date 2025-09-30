
function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Raju" };
const boundGreet = greet.bind(user);
boundGreet(); // Hello, Raju
