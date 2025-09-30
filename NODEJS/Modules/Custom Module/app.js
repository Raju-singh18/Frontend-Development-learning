// !======= Method =>1 =======
// const reasLine = require("readline"); // inbuilt module

// const User = require("./userModule");

// const rl = reasLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Ask for name

// rl.question("Enter your name:",(name)=>{
//     rl.question("Enter your age:",(age)=>{
//      const user = new User(name, parseInt(age));

//      console.log(user.greet());
//      console.log(user.isAdult());

//      rl.close();
//     })
// })


// ! =========== Method => 2 ===========
// app.js
const prompt = require("prompt-sync")();   // Import prompt-sync(Third party module)
const User = require("./userModule");      // Import our custom module

// Take input from user
const name = prompt("Enter your name: ");
const age = parseInt(prompt("Enter your age: "));

// Create User object
const user = new User(name, age);

// Use object methods
console.log(user.greet());    // Hello, my name is ...
console.log(user.isAdult());  // Yes/No
