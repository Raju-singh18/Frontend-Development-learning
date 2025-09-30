
function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Raju" };
greet.call(user); // Hello, Raju
