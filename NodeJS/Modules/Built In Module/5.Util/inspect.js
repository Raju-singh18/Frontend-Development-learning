//! Prints objects in a clean, readable way (useful for debugging).
const util = require("util");

const obj = {
    name:"Raju",
    age:22,
    skills:["Node.js", "React", "MongoDb"],
    details:{city:"Delhi", country:"India"}
};

console.log(util.inspect(obj));
console.log(util.inspect(obj, {colors:true, depth:null}));
