const fs = require("fs");

fs.readFile("./Async.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("This runs first, before file reading is done!");
