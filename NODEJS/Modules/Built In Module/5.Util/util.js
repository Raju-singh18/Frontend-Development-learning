
const util = require("util");

const name = "Raju";
const age = 22;

const msg = util.format("My name is %s and I am %d years old.", name, age);
console.log(msg);
