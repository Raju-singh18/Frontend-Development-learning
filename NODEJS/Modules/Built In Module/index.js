
// fs-example.js
const fs = require("fs");

// Write to a file
fs.writeFileSync("example.txt", "Hello, Node.js!");

// Read from the file
const data = fs.readFileSync("example.txt", "utf-8");
console.log("File content:", data);
