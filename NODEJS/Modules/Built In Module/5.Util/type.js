
const util = require("util");

console.log(util.types.isDate(new Date())); //true
console.log(util.types.isDate("2025-09-15"));//false
console.log(util.types.isRegExp(/Hello/)); // true
