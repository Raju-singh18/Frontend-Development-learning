
function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Raju" };
greet.apply(user); // Hello, Raju
