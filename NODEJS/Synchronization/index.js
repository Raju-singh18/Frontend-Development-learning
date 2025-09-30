
const fs = require("fs");

const result = fs.readFileSync("./sync.txt","utf-8");
console.log(result);
