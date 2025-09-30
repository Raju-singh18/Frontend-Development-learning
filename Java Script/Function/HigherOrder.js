
function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Raju", sayBye);
// Hello, Raju
// Goodbye!
